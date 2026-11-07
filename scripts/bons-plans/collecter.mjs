// Collecte les flux Awin (XML ou CSV) de voyagistes, les normalise et tient l'historique des prix sur 90 jours.
// Les flux sont listés dans flux.mjs ; chaque adresse est un secret (variable d'environnement ou SECRETS_JSON) : ne jamais l'écrire dans le dépôt.
// Sortie : data/bons-plans/offers.json, price-history.json et offers-enrichies.json (lu par generer.mjs).
// Usage : node scripts/bons-plans/collecter.mjs [--flux <id>] [--merchant "Nom"] [--apercu]
//   --flux <id>   ne collecte que ce flux
//   --apercu      affiche les colonnes et les premiers produits du flux, sans rien enregistrer (pour régler `champs` dans flux.mjs)
// Un flux en erreur n'arrête pas les autres. Les noms de colonnes n'ont JAMAIS été testés sur un vrai flux :
// à ajuster au premier flux réel, en lisant le message « Rejets » affiché pour chaque flux.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { gunzipSync } from 'node:zlib';
import { XMLParser } from 'fast-xml-parser';
import { REGLES, evaluer } from './regles.mjs';
import { FLUX, CHAMPS_PAR_DEFAUT } from './flux.mjs';

const SECRETS = JSON.parse(process.env.SECRETS_JSON || '{}');
const secret = (nom) => process.env[nom] || SECRETS[nom] || '';
const DOSSIER = process.env.BONS_PLANS_DATA || join('data', 'bons-plans');
const FICHIER_OFFRES = join(DOSSIER, 'offers.json');
const FICHIER_HISTORIQUE = join(DOSSIER, 'price-history.json');
const FICHIER_ENRICHIES = join(DOSSIER, 'offers-enrichies.json');
const JOURS_HISTORIQUE = 90;
const TAILLE_MAX = 200 * 1024 * 1024; // un flux plus gros que 200 Mo n'est pas normal : on refuse

const option = (nom) => (process.argv.includes(nom) ? process.argv[process.argv.indexOf(nom) + 1] : '');
const marchand = option('--merchant');
const fluxDemande = option('--flux');
const apercu = process.argv.includes('--apercu');

const prix = (v) => {
  if (!v) return null;
  const n = parseFloat(String(v).replace(/[^\d,.\-]/g, '').replace(',', '.'));
  return Number.isNaN(n) ? null : Math.round(n * 100) / 100;
};
const duree = (v) => {
  const m = String(v ?? '').match(/(\d+)\s*(jour|j\b|nuit)/i);
  return m ? parseInt(m[1], 10) : null;
};
const inclusions = (v) => String(v ?? '').split(/[;,|]/).map((s) => s.trim()).filter(Boolean);
const empreinte = (...p) => createHash('sha1').update(p.join('|')).digest('hex').slice(0, 16);
const lireJson = (f, repli) => { try { return JSON.parse(readFileSync(f, 'utf8')); } catch { return repli; } };

// --- Lecture d'un flux ---

// CSV : séparateur détecté sur la ligne d'en-tête (virgule, point-virgule ou tabulation), guillemets et retours à la ligne dans les champs gérés.
export function analyserCsv(texte) {
  const t = texte.replace(/^﻿/, '');
  const finEntete = t.search(/\r?\n/);
  const entete = finEntete < 0 ? t : t.slice(0, finEntete);
  const sep = [',', ';', '\t'].map((s) => [s, entete.split(s).length]).sort((a, b) => b[1] - a[1])[0][0];
  const lignes = [];
  let ligne = [], champ = '', guillemets = false;
  for (let i = 0; i < t.length; i++) {
    const c = t[i];
    if (guillemets) {
      if (c === '"' && t[i + 1] === '"') { champ += '"'; i++; }
      else if (c === '"') guillemets = false;
      else champ += c;
    } else if (c === '"') guillemets = true;
    else if (c === sep) { ligne.push(champ); champ = ''; }
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && t[i + 1] === '\n') i++;
      ligne.push(champ); champ = '';
      if (ligne.some((x) => x !== '')) lignes.push(ligne);
      ligne = [];
    } else champ += c;
  }
  ligne.push(champ);
  if (ligne.some((x) => x !== '')) lignes.push(ligne);
  const [noms = [], ...corps] = lignes;
  return corps.map((l) => Object.fromEntries(noms.map((n, i) => [n.trim(), (l[i] ?? '').trim()])));
}

function analyserXml(texte) {
  const a = new XMLParser().parse(texte);
  const produits = a?.merchant?.products?.product ?? a?.products?.product ?? [];
  return Array.isArray(produits) ? produits : [produits];
}

async function lireFlux(def, adresse) {
  const reponse = await fetch(adresse, { signal: AbortSignal.timeout(120_000) });
  if (!reponse.ok) throw new Error(`téléchargement : HTTP ${reponse.status}`);
  let octets = Buffer.from(await reponse.arrayBuffer());
  if (octets.length > TAILLE_MAX) throw new Error('flux trop volumineux');
  if (octets[0] === 0x1f && octets[1] === 0x8b) octets = gunzipSync(octets); // compression gzip choisie dans l'adresse du flux
  const texte = octets.toString('utf8');
  return def.format === 'csv' ? analyserCsv(texte) : analyserXml(texte);
}

// --- Normalisation : une offre incomplète ou factice est refusée et comptée, jamais transmise ---

// Colonnes du flux -> champs internes : celles du flux remplacent les colonnes par défaut des mêmes champs
const carteDuFlux = (def) => {
  const surcharges = def.champs ?? {};
  const remplaces = new Set(Object.values(surcharges));
  return { ...Object.fromEntries(Object.entries(CHAMPS_PAR_DEFAUT).filter(([, interne]) => !remplaces.has(interne))), ...surcharges };
};

export function normaliser(brut, carte, marchandParDefaut = '') {
  const m = {};
  for (const [colonne, interne] of Object.entries(carte)) m[interne] = brut[colonne] ?? '';
  const prixInitial = prix(m.prix_initial_brut);
  const prixReduit = prix(m.prix_reduit_brut);
  const voyagiste = String(m.voyagiste || marchandParDefaut || '').trim();
  const destination = String(m.destination_brute || '').trim();
  const lien = String(m.lien_affiliation || '').trim();
  if (!prixInitial || !prixReduit || !voyagiste || !destination || !lien) return { raison: 'champ manquant' };
  if (/(awinmid|awinaffid)=EXEMPLE/i.test(lien)) return { raison: 'lien factice (EXEMPLE)' };
  if (prixReduit >= prixInitial) return { raison: 'pas de réduction' };
  return {
    offre: {
      offer_hash: empreinte(voyagiste, destination, lien),
      destination, voyagiste,
      prix_initial: prixInitial, prix_reduit: prixReduit,
      dates_disponibilite: m.dates_brutes ? [String(m.dates_brutes)] : [],
      duree_sejour: duree(m.duree_brute),
      inclusions: inclusions(m.inclusions_brutes),
      type_hebergement: '',
      lien_affiliation: lien,
      // Image du flux non reprise : le site n'affiche pas d'image externe (voir generer.mjs)
      date_collecte: new Date().toISOString(),
    },
  };
}

// --- Programme principal (ne s'exécute pas quand ce fichier est importé par un test) ---

async function principal() {
  const choisis = FLUX.filter((f) => !fluxDemande || f.id === fluxDemande);
  if (fluxDemande && choisis.length === 0) { console.error(`Flux inconnu : « ${fluxDemande} ». Flux déclarés : ${FLUX.map((f) => f.id).join(', ')}.`); process.exit(1); }

  const configures = choisis.filter((f) => secret(f.secret));
  for (const f of choisis.filter((x) => !secret(x.secret))) console.log(`[${f.id}] ignoré : secret ${f.secret} absent.`);
  if (configures.length === 0) {
    console.error('Aucun flux configuré : définissez au moins un secret d\'adresse de datafeed (voir scripts/bons-plans/flux.mjs).');
    process.exit(1);
  }

  let offres = [];
  let reussis = 0;
  for (const def of configures) {
    try {
      const liste = await lireFlux(def, secret(def.secret));
      if (apercu) {
        console.log(`[${def.id}] ${liste.length} produits. Colonnes : ${Object.keys(liste[0] ?? {}).join(', ') || '(aucune)'}`);
        for (const p of liste.slice(0, 2)) console.log(JSON.stringify(p, (k, v) => (typeof v === 'string' && v.length > 120 ? v.slice(0, 120) + '…' : v), 2));
        reussis++;
        continue;
      }
      const carte = carteDuFlux(def);
      const rejets = {};
      const valides = [];
      for (const brut of liste) {
        const r = normaliser(brut, carte, def.marchand);
        if (r.offre) valides.push(r.offre); else rejets[r.raison] = (rejets[r.raison] || 0) + 1;
      }
      console.log(`[${def.id}] ${liste.length} produits, ${valides.length} offres valides. Rejets : ${JSON.stringify(rejets)}`);
      if (valides.length === 0) console.error(`[${def.id}] aucune offre valide : vérifiez les colonnes (champs dans flux.mjs ; essayez --flux ${def.id} --apercu).`);
      else reussis++;
      offres.push(...valides);
    } catch (e) {
      console.error(`::warning::[${def.id}] échec : ${e.message}`); // « ::warning:: » : annotation visible dans GitHub Actions
    }
  }
  if (apercu) process.exit(reussis ? 0 : 1);
  if (marchand) offres = offres.filter((o) => o.voyagiste.toLowerCase().includes(marchand.toLowerCase()));
  if (reussis === 0 || offres.length === 0) { console.error('Aucune offre valide : rien n\'est enregistré.'); process.exit(1); }

  mkdirSync(DOSSIER, { recursive: true });
  const stock = lireJson(FICHIER_OFFRES, {});
  const historique = lireJson(FICHIER_HISTORIQUE, {});
  const maintenant = new Date().toISOString();
  const limite = Date.now() - JOURS_HISTORIQUE * 86400000;
  const retenues = [];
  const ecartees = {};
  const vues = new Set();
  for (const o of offres) {
    if (vues.has(o.offer_hash)) continue; // même offre présente dans deux flux : un seul relevé par jour
    vues.add(o.offer_hash);
    const precedents = historique[o.offer_hash] ?? [];
    // Jugé AVANT d'ajouter le relevé du jour : une offre ne se compare pas à elle-même
    const verdict = evaluer(o, precedents);
    if (verdict.retenue) {
      retenues.push({ ...o, prix_median_90j: verdict.mediane, prix_min_observe: verdict.minimum, nb_releves_historique: verdict.releves, jours_historique: verdict.jours });
    } else {
      ecartees[verdict.raison] = (ecartees[verdict.raison] || 0) + 1;
    }
    stock[o.offer_hash] = { ...o, last_seen_at: maintenant };
    historique[o.offer_hash] = [...precedents, { prix_initial: o.prix_initial, prix_reduit: o.prix_reduit, collected_at: maintenant }]
      .filter((r) => new Date(r.collected_at).getTime() >= limite);
  }
  writeFileSync(FICHIER_OFFRES, JSON.stringify(stock, null, 2) + '\n');
  writeFileSync(FICHIER_HISTORIQUE, JSON.stringify(historique, null, 2) + '\n');
  // Seules les offres au vrai bon prix passent à la génération (liste vide possible : c'est normal au début)
  writeFileSync(FICHIER_ENRICHIES, JSON.stringify(retenues, null, 2) + '\n');
  console.log(`${retenues.length} offres retenues sur ${vues.size}. Écartées : ${JSON.stringify(ecartees)}. Seuils : ${JSON.stringify(REGLES)}`);
  console.log(`Enregistré dans ${DOSSIER}.`);
}

if (process.argv[1] && resolve(process.argv[1]) === resolve(fileURLToPath(import.meta.url))) await principal();
