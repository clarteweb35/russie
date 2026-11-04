// Génère le topo hebdomadaire de l'actualité de chaque pays suivi avec l'API Gemini (recherche Google intégrée).
// Usage : GEMINI_API_KEY=... node scripts/actualites.mjs
// Variables facultatives : GEMINI_MODEL (modèle), GEMINI_BASE_URL (tests), ACTUALITES_DIR (dossier de sortie).
//
// Garde-fous : les sources viennent des métadonnées de la recherche (jamais du texte du modèle), un topo sans source
// ou mal formé est refusé, et un échec ne remplace jamais le topo précédent.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const CLE = process.env.GEMINI_API_KEY;
const MODELE = process.env.GEMINI_MODEL || 'gemini-2.5-flash';
const BASE = process.env.GEMINI_BASE_URL || 'https://generativelanguage.googleapis.com';
const DOSSIER = process.env.ACTUALITES_DIR || join('src', 'data', 'actualites');
const PAYS = JSON.parse(readFileSync(new URL('./actualites-pays.json', import.meta.url), 'utf8'));

if (!CLE) {
  console.error('GEMINI_API_KEY manquante : ajoutez-la dans les secrets du dépôt (Settings > Secrets and variables > Actions).');
  process.exit(1);
}

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
    headers: { 'Content-Type': 'application/json', 'x-goog-api-key': CLE },
    body: JSON.stringify({
      contents: [{ role: 'user', parts: [{ text: prompt(p.pays, p.langueLocale) }] }],
      tools: [{ google_search: {} }],
      generationConfig: { temperature: 0.2 },
    }),
    signal: AbortSignal.timeout(90_000),
  });
  if ((reponse.status === 429 || reponse.status >= 500) && essai < 3) {
    await new Promise((r) => setTimeout(r, 5000 * essai));
    return appeler(p, essai + 1);
  }
  if (!reponse.ok) {
    const detail = (await reponse.text()).slice(0, 300);
    const aide = reponse.status === 404 ? ` Le modèle « ${MODELE} » est introuvable : définissez GEMINI_MODEL avec un modèle disponible dans Google AI Studio.` : '';
    throw new Error(`Gemini a répondu ${reponse.status}.${aide} ${detail}`);
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
for (const p of PAYS) {
  try {
    const topo = extraire(await appeler(p));
    const fichier = join(DOSSIER, `${p.slug}.json`);
    writeFileSync(fichier, JSON.stringify({ slug: p.slug, genere: new Date().toISOString(), modele: MODELE, ...topo }, null, 2) + '\n');
    console.log(`${p.slug} : ${topo.points.length} points, ${topo.sources.length} sources`);
    reussis++;
  } catch (e) {
    // Le topo précédent est conservé : on signale seulement l'erreur
    console.warn(`::warning::${p.slug} : ${e.message}`);
  }
}
if (reussis === 0) {
  console.error('Aucun topo généré.');
  process.exit(1);
}
