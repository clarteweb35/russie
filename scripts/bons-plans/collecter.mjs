// Collecte un flux Awin (XML) de voyagiste, le normalise et tient l'historique des prix sur 90 jours.
// Sortie : data/bons-plans/offers.json, price-history.json et offers-enrichies.json (lu par generer.mjs).
// Usage : AWIN_FEED_URL=... node scripts/bons-plans/collecter.mjs [--merchant "Nom"]
// L'adresse du flux est un secret (variable AWIN_FEED_URL ou SECRETS_JSON) : ne jamais l'écrire dans le dépôt.
// Les noms de balises (AWIN_FIELD_MAP) viennent du prototype et n'ont JAMAIS été testés sur un vrai flux :
// à ajuster au premier flux réel, en lisant le message « offres rejetées » affiché en fin de collecte.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { createHash } from 'node:crypto';
import { XMLParser } from 'fast-xml-parser';

const SECRETS = JSON.parse(process.env.SECRETS_JSON || '{}');
const FLUX = process.env.AWIN_FEED_URL || SECRETS.AWIN_FEED_URL || '';
const DOSSIER = process.env.BONS_PLANS_DATA || join('data', 'bons-plans');
const FICHIER_OFFRES = join(DOSSIER, 'offers.json');
const FICHIER_HISTORIQUE = join(DOSSIER, 'price-history.json');
const FICHIER_ENRICHIES = join(DOSSIER, 'offers-enrichies.json');
const JOURS_HISTORIQUE = 90;

const AWIN_FIELD_MAP = {
  product_name: 'destination_brute',
  merchant_name: 'voyagiste',
  search_price: 'prix_reduit_brut',
  rrp_price: 'prix_initial_brut',
  aw_deep_link: 'lien_affiliation',
  aw_image_url: 'image_url',
  custom_1: 'dates_brutes',
  custom_2: 'inclusions_brutes',
  custom_3: 'duree_brute',
};

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

// Renvoie { offre } ou { raison } : une offre incomplète ou factice est refusée et comptée, jamais transmise
function normaliser(brut) {
  const m = {};
  for (const [cle, interne] of Object.entries(AWIN_FIELD_MAP)) m[interne] = brut[cle] ?? '';
  const prixInitial = prix(m.prix_initial_brut);
  const prixReduit = prix(m.prix_reduit_brut);
  const voyagiste = String(m.voyagiste || '').trim();
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

const mediane = (releves) => {
  if (!releves.length) return null;
  const t = releves.map((r) => r.prix_reduit).sort((a, b) => a - b);
  const mid = Math.floor(t.length / 2);
  return t.length % 2 ? t[mid] : Math.round(((t[mid - 1] + t[mid]) / 2) * 100) / 100;
};

if (!FLUX) {
  console.error('Aucun flux : définissez le secret AWIN_FEED_URL (adresse du datafeed Awin).');
  process.exit(1);
}
const marchand = process.argv.includes('--merchant') ? process.argv[process.argv.indexOf('--merchant') + 1] : '';

const reponse = await fetch(FLUX, { signal: AbortSignal.timeout(120_000) });
if (!reponse.ok) { console.error(`Téléchargement du flux : HTTP ${reponse.status}`); process.exit(1); }
const analyse = new XMLParser().parse(await reponse.text());
const produits = analyse?.merchant?.products?.product ?? analyse?.products?.product ?? [];
const liste = Array.isArray(produits) ? produits : [produits];

const rejets = {};
let offres = [];
for (const brut of liste) {
  const r = normaliser(brut);
  if (r.offre) offres.push(r.offre); else rejets[r.raison] = (rejets[r.raison] || 0) + 1;
}
if (marchand) offres = offres.filter((o) => o.voyagiste.toLowerCase().includes(marchand.toLowerCase()));
console.log(`${liste.length} produits dans le flux, ${offres.length} offres valides. Rejets : ${JSON.stringify(rejets)}`);
if (offres.length === 0) {
  console.error('Aucune offre valide : vérifiez les noms de balises (AWIN_FIELD_MAP) par rapport au flux réel.');
  process.exit(1);
}

mkdirSync(DOSSIER, { recursive: true });
const stock = lireJson(FICHIER_OFFRES, {});
const historique = lireJson(FICHIER_HISTORIQUE, {});
const maintenant = new Date().toISOString();
const limite = Date.now() - JOURS_HISTORIQUE * 86400000;
for (const o of offres) {
  stock[o.offer_hash] = { ...o, last_seen_at: maintenant };
  const releves = historique[o.offer_hash] ?? [];
  releves.push({ prix_initial: o.prix_initial, prix_reduit: o.prix_reduit, collected_at: maintenant });
  historique[o.offer_hash] = releves.filter((r) => new Date(r.collected_at).getTime() >= limite);
}
writeFileSync(FICHIER_OFFRES, JSON.stringify(stock, null, 2) + '\n');
writeFileSync(FICHIER_HISTORIQUE, JSON.stringify(historique, null, 2) + '\n');
writeFileSync(FICHIER_ENRICHIES, JSON.stringify(offres.map((o) => ({
  ...o,
  prix_median_90j: mediane(historique[o.offer_hash]),
  nb_releves_historique: historique[o.offer_hash].length,
})), null, 2) + '\n');
console.log(`Enregistré dans ${DOSSIER}.`);
