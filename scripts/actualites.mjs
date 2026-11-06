// Génère le topo hebdomadaire de l'actualité de chaque pays suivi avec l'API Gemini (recherche Google intégrée).
// Usage : GEMINI_API_KEY_ALBANIE=... node scripts/actualites.mjs
// Clés : une par pays (GEMINI_API_KEY_<PAYS>, ex. GEMINI_API_KEY_RUSSIE), sinon la clé commune GEMINI_API_KEY_GENERAL (ou GEMINI_API_KEY).
// Dans GitHub Actions, les secrets du dépôt arrivent en bloc par SECRETS_JSON : ajouter un pays ne demande aucune modification du workflow.
// Variables facultatives : GEMINI_MODEL (modèle), GEMINI_BASE_URL (tests), ACTUALITES_DIR (dossier de sortie).
//
// Garde-fous : les sources viennent des métadonnées de la recherche (jamais du texte du modèle), un topo sans source
// ou mal formé est refusé, et un échec ne remplace jamais le topo précédent.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// Secrets du dépôt, transmis en bloc par le workflow (SECRETS_JSON) ; les variables d'environnement restent prioritaires
const SECRETS = JSON.parse(process.env.SECRETS_JSON || '{}');
const lire = (nom) => process.env[nom] || SECRETS[nom] || '';
// Un nom de secret GitHub ne peut contenir que des lettres, chiffres et soulignés : tout autre caractère devient « _ »
const nomSecret = (slug) => `GEMINI_API_KEY_${slug.toUpperCase().replace(/[^A-Z0-9]/g, "_")}`;
const cle = (slug) => lire(nomSecret(slug)) || lire("GEMINI_API_KEY_GENERAL") || lire("GEMINI_API_KEY");
// Réglages du rythme (variables facultatives, utiles pour les tests) : pause entre pays, attente après erreur, nombre de pays
const PAUSE_MS = Number(process.env.ACTUALITES_PAUSE_MS ?? 6000);
const ATTENTE_MS = Number(process.env.ACTUALITES_ATTENTE_MS ?? 20000);
const LIMITE = Number(process.env.ACTUALITES_LIMITE ?? 0);
const MODELE = process.env.GEMINI_MODEL || 'gemini-3.8-flash';
const BASE = process.env.GEMINI_BASE_URL || 'https://generativelanguage.googleapis.com';
const DOSSIER = process.env.ACTUALITES_DIR || join('src', 'data', 'actualites');
const PAYS = JSON.parse(readFileSync(new URL('./actualites-pays.json', import.meta.url), 'utf8'));

const prompt = (pays, langueLocale) => `Tu fais de la veille d'actualité pour un guide d'information francophone destiné à des voyageurs et à des personnes qui s'installent à l'étranger.

Aujourd'hui, nous sommes le ${new Date().toISOString().slice(0, 10)}. Fais le point sur l'actualité des sept derniers jours en ${pays}, en te limitant à ce qui peut intéresser un voyageur ou un futur résident : politique, sécurité, économie, transports, santé, événements et météo notables.

Règles strictes :
- Utilise uniquement des informations trouvées par la recherche web. N'invente rien. S'il y a peu d'informations, dis-le.
- Cherche en priorité dans la presse locale, en ${langueLocale} (agences de presse, quotidiens et chaînes du pays), puis complète avec des médias internationaux. Traduis fidèlement en français les informations lues dans une autre langue, sans rien ajouter qui ne soit pas dans les articles.
- Reste factuel et neutre. Ne donne aucun conseil de voyage et ne prends pas la place des conseils officiels.
- Écris en français, avec des phrases courtes.

Réponds uniquement par un objet JSON, sans texte autour, de la forme :
{"resume": "3 à 4 phrases", "points": [{"titre": "titre court", "texte": "1 à 2 phrases"}]}
avec au maximum 5 points.`;

async function appeler(p, essai = 1) {
  const reponse = await fetch(`${BASE}/v1beta/models/${MODELE}:generateContent`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-goog-api-key': cle(p.slug) },
    body: JSON.stringify({
      contents: [{ role: 'user', parts: [{ text: prompt(p.pays, p.langueLocale) }] }],
      tools: [{ google_search: {} }],
      generationConfig: { temperature: 0.2 },
    }),
    signal: AbortSignal.timeout(90_000),
  });
  if ((reponse.status === 429 || reponse.status >= 500) && essai < 4) {
    await new Promise((r) => setTimeout(r, ATTENTE_MS * essai));
    return appeler(p, essai + 1);
  }
  if (!reponse.ok) {
    const detail = (await reponse.text()).slice(0, 300);
    const aide = reponse.status === 404 ? ` Le modèle « ${MODELE} » est introuvable : définissez GEMINI_MODEL avec un modèle disponible dans Google AI Studio.` : '';
    const erreur = new Error(`Gemini a répondu ${reponse.status}.${aide} ${detail}`);
    erreur.fatale = reponse.status === 404; // inutile d'insister : tous les pays échoueraient pareil
    throw erreur;
  }
  return reponse.json();
}

const court = (t, max) => String(t ?? '').replace(/\s+/g, ' ').trim().slice(0, max);

// Transforme la réponse en topo validé, ou lève une erreur explicite
function extraire(json) {
  const candidat = json?.candidates?.[0];
  const texte = (candidat?.content?.parts ?? []).map((p) => p.text ?? '').join('');
  const debut = texte.indexOf('{');
  const fin = texte.lastIndexOf('}');
  if (debut < 0 || fin < debut) throw new Error('réponse sans JSON');
  const donnees = JSON.parse(texte.slice(debut, fin + 1));

  const resume = court(donnees.resume, 900);
  const points = (Array.isArray(donnees.points) ? donnees.points : [])
    .slice(0, 5)
    .map((p) => ({ titre: court(p?.titre, 120), texte: court(p?.texte, 400) }))
    .filter((p) => p.titre && p.texte);
  if (!resume) throw new Error('résumé vide');

  const vues = new Set();
  const sources = [];
  for (const c of candidat?.groundingMetadata?.groundingChunks ?? []) {
    const url = c?.web?.uri;
    if (!url || !/^https:\/\//.test(url) || vues.has(url)) continue;
    vues.add(url);
    sources.push({ titre: court(c.web.title || url, 120), url });
  }
  if (sources.length === 0) throw new Error('aucune source : topo refusé');

  return { resume, points, sources: sources.slice(0, 8) };
}

mkdirSync(DOSSIER, { recursive: true });
let reussis = 0;
let quotas = 0; // refus de quota (429) consécutifs
for (const p of (LIMITE ? PAYS.slice(0, LIMITE) : PAYS)) {
  if (!cle(p.slug)) {
    console.warn(`::warning::${p.slug} : aucune clé (ajoutez le secret ${nomSecret(p.slug)} ou la clé commune GEMINI_API_KEY_GENERAL), pays ignoré`);
    continue;
  }
  try {
    const topo = extraire(await appeler(p));
    const fichier = join(DOSSIER, `${p.slug}.json`);
    writeFileSync(fichier, JSON.stringify({ slug: p.slug, genere: new Date().toISOString(), modele: MODELE, ...topo }, null, 2) + '\n');
    console.log(`${p.slug} : ${topo.points.length} points, ${topo.sources.length} sources`);
    reussis++;
    quotas = 0;
    await new Promise((r) => setTimeout(r, PAUSE_MS)); // ménage le quota de l'API
  } catch (e) {
    // Le topo précédent est conservé : on signale seulement l'erreur
    console.warn(`::warning::${p.slug} : ${e.message}`);
    // Quota épuisé : insister ferait perdre des heures pour rien. On s'arrête, les topos déjà générés sont conservés.
    quotas = /répondu 429/.test(e.message) ? quotas + 1 : 0;
    if (quotas >= 3) { console.error('Quota Gemini refusé 3 fois de suite : arrêt. Vérifiez le quota et la facturation du projet Google (https://ai.dev/rate-limit), puis relancez.'); break; }
    if (e.fatale) { console.error('Modèle introuvable : arrêt du traitement. Définissez GEMINI_MODEL ou mettez à jour le modèle par défaut.'); process.exit(1); }
  }
}
if (reussis === 0) {
  console.error('Aucun topo généré (clés manquantes ou erreurs ci-dessus).');
  process.exit(1);
}
