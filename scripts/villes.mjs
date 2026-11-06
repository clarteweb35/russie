// Génère, pour chaque pays suivi, un topo sur les 3 villes (ou lieux) les plus intéressantes pour un voyageur,
// avec l'API Gemini et sa recherche web intégrée. Sortie : src/data/villes/<pays>.json
// Usage : GEMINI_API_KEY_GENERAL=... node scripts/villes.mjs   (même logique de clés que scripts/actualites.mjs)
// Variables facultatives : GEMINI_MODEL, GEMINI_BASE_URL (tests), VILLES_DIR, VILLES_LIMITE, VILLES_PAUSE_MS, VILLES_ATTENTE_MS.
//
// Garde-fous (identiques au topo d'actualité) : les sources viennent des métadonnées de la recherche, jamais du texte du modèle ;
// un topo sans source ou mal formé est refusé ; un échec ne remplace jamais le topo précédent.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const SECRETS = JSON.parse(process.env.SECRETS_JSON || '{}');
const lire = (nom) => process.env[nom] || SECRETS[nom] || '';
const nomSecret = (slug) => `GEMINI_API_KEY_${slug.toUpperCase().replace(/[^A-Z0-9]/g, '_')}`;
const cle = (slug) => lire(nomSecret(slug)) || lire('GEMINI_API_KEY_GENERAL') || lire('GEMINI_API_KEY');
const MODELE = process.env.GEMINI_MODEL || 'gemini-3.8-flash';
const BASE = process.env.GEMINI_BASE_URL || 'https://generativelanguage.googleapis.com';
const DOSSIER = process.env.VILLES_DIR || join('src', 'data', 'villes');
const PAUSE_MS = Number(process.env.VILLES_PAUSE_MS ?? 6000);
const ATTENTE_MS = Number(process.env.VILLES_ATTENTE_MS ?? 20000);
const LIMITE = Number(process.env.VILLES_LIMITE ?? 0);
const PAYS = JSON.parse(readFileSync(new URL('./actualites-pays.json', import.meta.url), 'utf8'));

const prompt = (pays) => `Tu rédiges pour un guide de voyage francophone. Pour ${pays}, choisis 3 villes (ou, à défaut, 3 sites ou régions) selon ces trois critères, un par ville, d'après les offices de tourisme, guides de voyage et sources officielles trouvés par la recherche web :
1. "interet" : la ville la plus citée pour son intérêt touristique ;
2. "pratique" : la ville d'importance pratique (capitale, porte d'entrée aérienne ou principal carrefour de transport) ;
3. "diversite" : une ville d'un autre type ou d'une autre région que les deux premières (côte, montagne, désert, culture différente…).

Règles strictes :
- Utilise uniquement des informations trouvées par la recherche web. N'invente rien : ni chiffre, ni horaire, ni prix.
- Reste factuel. Pas de superlatif non étayé. Ne donne aucun conseil de sécurité (le ministère français s'en charge).
- Écris en français, avec des phrases courtes.

Réponds uniquement par un objet JSON, sans texte autour, de la forme :
{"villes": [{"critere": "interet", "nom": "nom de la ville", "pourquoi": "1 à 2 phrases : ce qui la distingue", "a_voir": ["3 lieux ou activités au maximum"], "conseil": "1 phrase pratique (quand y aller, comment s'y rendre) seulement si une source la donne, sinon chaîne vide"}]}
avec exactement 3 villes.`;

async function appeler(p, essai = 1) {
  const r = await fetch(`${BASE}/v1beta/models/${MODELE}:generateContent`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-goog-api-key': cle(p.slug) },
    body: JSON.stringify({
      contents: [{ role: 'user', parts: [{ text: prompt(p.pays) }] }],
      tools: [{ google_search: {} }],
      generationConfig: { temperature: 0.2 },
    }),
    signal: AbortSignal.timeout(90_000),
  });
  if ((r.status === 429 || r.status >= 500) && essai < 4) {
    await new Promise((ok) => setTimeout(ok, ATTENTE_MS * essai));
    return appeler(p, essai + 1);
  }
  if (!r.ok) {
    const erreur = new Error(`Gemini a répondu ${r.status}. ${(await r.text()).slice(0, 300)}`);
    erreur.fatale = r.status === 404; // modèle retiré ou inconnu : tous les pays échoueraient pareil
    throw erreur;
  }
  return r.json();
}

const court = (t, max) => String(t ?? '').replace(/\s+/g, ' ').trim().slice(0, max);

function extraire(json) {
  const candidat = json?.candidates?.[0];
  const texte = (candidat?.content?.parts ?? []).map((x) => x.text ?? '').join('');
  const debut = texte.indexOf('{');
  const fin = texte.lastIndexOf('}');
  if (debut < 0 || fin < debut) throw new Error('réponse sans JSON');
  const donnees = JSON.parse(texte.slice(debut, fin + 1));
  const villes = (Array.isArray(donnees.villes) ? donnees.villes : [])
    .slice(0, 3)
    .map((v) => ({
      critere: ['interet', 'pratique', 'diversite'].includes(v?.critere) ? v.critere : '',
      nom: court(v?.nom, 80),
      pourquoi: court(v?.pourquoi, 400),
      a_voir: (Array.isArray(v?.a_voir) ? v.a_voir : []).map((x) => court(x, 120)).filter(Boolean).slice(0, 3),
      conseil: court(v?.conseil, 250),
    }))
    .filter((v) => v.nom && v.pourquoi);
  if (villes.length === 0) throw new Error('aucune ville exploitable');

  const vues = new Set();
  const sources = [];
  for (const c of candidat?.groundingMetadata?.groundingChunks ?? []) {
    const url = c?.web?.uri;
    if (!url || !/^https:\/\//.test(url) || vues.has(url)) continue;
    vues.add(url);
    sources.push({ titre: court(c.web.title || url, 120), url });
  }
  if (sources.length === 0) throw new Error('aucune source : topo refusé');
  return { villes, sources: sources.slice(0, 8) };
}

mkdirSync(DOSSIER, { recursive: true });
let reussis = 0;
let quotas = 0; // refus de quota (429) consécutifs
for (const p of LIMITE ? PAYS.slice(0, LIMITE) : PAYS) {
  if (!cle(p.slug)) {
    console.warn(`::warning::${p.slug} : aucune clé (secret ${nomSecret(p.slug)} ou GEMINI_API_KEY_GENERAL), pays ignoré`);
    continue;
  }
  try {
    const topo = extraire(await appeler(p));
    writeFileSync(join(DOSSIER, `${p.slug}.json`), JSON.stringify({ slug: p.slug, genere: new Date().toISOString(), modele: MODELE, ...topo }, null, 2) + '\n');
    console.log(`${p.slug} : ${topo.villes.length} villes, ${topo.sources.length} sources`);
    reussis++;
    quotas = 0;
    await new Promise((ok) => setTimeout(ok, PAUSE_MS));
  } catch (e) {
    console.warn(`::warning::${p.slug} : ${e.message}`);
    // Quota épuisé : insister ferait perdre des heures pour rien. On s'arrête, les topos déjà générés sont conservés.
    quotas = /répondu 429/.test(e.message) ? quotas + 1 : 0;
    if (quotas >= 3) { console.error('Quota Gemini refusé 3 fois de suite : arrêt. Vérifiez le quota et la facturation du projet Google (https://ai.dev/rate-limit), puis relancez.'); break; }
    if (e.fatale) { console.error('Modèle introuvable : arrêt du traitement. Définissez GEMINI_MODEL ou mettez à jour le modèle par défaut.'); process.exit(1); }
  }
}
if (reussis === 0) {
  console.error('Aucun topo de villes généré (clés manquantes ou erreurs ci-dessus).');
  process.exit(1);
}
