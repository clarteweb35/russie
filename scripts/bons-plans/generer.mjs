// Transforme les offres collectées (data/bons-plans/offers-enrichies.json) en articles Markdown pour la collection
// « bons-plans » du site, avec l'API Gemini. Sortie : src/content/bons-plans/<destination>-<empreinte>.md
// Usage : GEMINI_API_KEY_GENERAL=... node scripts/bons-plans/generer.mjs
// Variables facultatives : GEMINI_MODEL, GEMINI_BASE_URL (tests), BONS_PLANS_DATA, BONS_PLANS_DIR, BONS_PLANS_LIMITE, BONS_PLANS_PAUSE_MS.
//
// Garde-fous : les champs chiffrés viennent des données de l'offre, jamais du texte du modèle ; une offre factice
// (lien « EXEMPLE ») est refusée ; un article déjà généré n'est pas régénéré ; aucun lien n'est laissé dans le texte
// (le bouton de la page porte le lien, avec rel="sponsored") ; les images du flux ne sont pas reprises (pas d'image externe).
import { existsSync, mkdirSync, readdirSync, readFileSync, unlinkSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { REGLES } from './regles.mjs';

const SECRETS = JSON.parse(process.env.SECRETS_JSON || '{}');
const lire = (nom) => process.env[nom] || SECRETS[nom] || '';
const CLE = lire('GEMINI_API_KEY_BONS_PLANS') || lire('GEMINI_API_KEY_GENERAL') || lire('GEMINI_API_KEY');
const MODELE = process.env.GEMINI_MODEL || 'gemini-3.8-flash';
const BASE = process.env.GEMINI_BASE_URL || 'https://generativelanguage.googleapis.com';
const DONNEES = process.env.BONS_PLANS_DATA || join('data', 'bons-plans');
const DOSSIER = process.env.BONS_PLANS_DIR || join('src', 'content', 'bons-plans');
const LIMITE = Number(process.env.BONS_PLANS_LIMITE ?? 0);
const PAUSE_MS = Number(process.env.BONS_PLANS_PAUSE_MS ?? 1500);

if (!CLE) { console.error('Aucune clé Gemini (GEMINI_API_KEY_BONS_PLANS, GEMINI_API_KEY_GENERAL ou GEMINI_API_KEY).'); process.exit(1); }

const PROMPT = `Tu es le rédacteur en chef d'un site de bons plans voyages. Ton rôle : transformer des données brutes d'offre en un article web prêt à publier, honnête et engageant. Écris en français, au vouvoiement.

## DONNÉES D'ENTRÉE
Un objet JSON : destination, voyagiste, prix_initial (prix habituel que nous avons observé : médiane de nos relevés, et non le prix barré du marchand), prix_reduit, dates_disponibilite, duree_sejour, inclusions, type_hebergement, ville_depart (optionnel).

## ÉTAPE 1 — VÉRIFICATION (obligatoire, bloc <verification>, non publié)
1. reduction_pct = ((prix_initial - prix_reduit) / prix_initial) * 100.
2. Prix par jour (prix_reduit / duree_sejour) si la durée est connue.
3. Plausibilité : sous 10 % de réduction, ton factuel et non promotionnel ; au-dessus de 70 %, prudence : vérifie si le prix de référence est crédible.
4. Cohérence des dates.
5. Niveau de confiance. Dans le frontmatter, confidence vaut EXACTEMENT "ELEVE", "MOYEN" ou "FAIBLE" (majuscules, sans accent). Si FAIBLE, pas d'intitulé « Bon plan du jour » : « Offre repérée », et dis que la réduction est à vérifier à la réservation.

## ÉTAPE 2 — ARTICLE
Ton enthousiaste mais honnête. Interdit : inventer des inclusions ou caractéristiques absentes des données, exagérer l'urgence, employer des superlatifs que les calculs ne justifient pas.
Structure : titre SEO (50-60 caractères, destination et prix) ; meta description (140-155 caractères) ; accroche avec le pourcentage réel ; à qui s'adresse l'offre ; ce qui est inclus (puces fidèles aux données, signale ce qui manque) ; points forts (3 à 5, tirés des seules données) ; calcul de la bonne affaire (prix initial, prix réduit, %, prix/jour) ; rappel que les prix des voyagistes peuvent varier ; et cette phrase : « Cet article contient un lien affilié. En réservant via ce lien, vous ne payez pas plus cher et vous soutenez le site. »
N'écris AUCUN lien ni adresse web dans l'article : le bouton de la page s'en charge.

## FORMAT DE SORTIE
1. <verification>…</verification>
2. <avis> exactement deux lignes, sans puces :
POURQUOI: une phrase factuelle (réduction réelle, comparaison au prix médian si disponible).
ATTENTION: une phrase sur le principal point de vigilance, ou « Aucun point de vigilance particulier ».
3. <article> le Markdown complet, avec frontmatter YAML (title, description, date, confidence).

## GARDE-FOUS
N'invente jamais de chiffre, de date ou d'inclusion absents de l'entrée. Si des données essentielles manquent, ne rédige pas d'article : explique-le dans <verification> et laisse <article> vide.`;

async function appeler(offre, essai = 1) {
  const r = await fetch(`${BASE}/v1beta/models/${MODELE}:generateContent`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-goog-api-key': CLE },
    body: JSON.stringify({
      system_instruction: { parts: [{ text: PROMPT }] },
      // Le lien n'est pas transmis au modèle : il n'en a pas besoin et ne peut donc pas le déformer
      contents: [{ role: 'user', parts: [{ text: JSON.stringify({ ...offre, prix_initial: offre.prix_median_90j, prix_median_90j: undefined, prix_min_observe: undefined, nb_releves_historique: undefined, jours_historique: undefined, lien_affiliation: undefined, offer_hash: undefined }, null, 2) }] }],
      generationConfig: { temperature: 0.3 },
    }),
    signal: AbortSignal.timeout(90_000),
  });
  if ((r.status === 429 || r.status >= 500) && essai < 4) {
    await new Promise((ok) => setTimeout(ok, 20000 * essai));
    return appeler(offre, essai + 1);
  }
  if (!r.ok) {
    const erreur = new Error(`Gemini a répondu ${r.status}. ${(await r.text()).slice(0, 300)}`);
    erreur.fatale = r.status === 404;
    throw erreur;
  }
  const texte = (await r.json())?.candidates?.[0]?.content?.parts?.map((p) => p.text ?? '').join('');
  if (!texte) throw new Error('réponse vide');
  return texte;
}

const bloc = (texte, nom) => (texte.match(new RegExp(`<${nom}>([\\s\\S]*?)</${nom}>`, 'i'))?.[1] ?? '').trim();

function separer(md) {
  const m = md.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) return { attrs: {}, corps: md };
  const attrs = {};
  for (const ligne of m[1].split('\n')) {
    const c = ligne.match(/^([a-zA-Z_]+):\s*(.*)$/);
    if (!c) continue;
    let v = c[2].trim();
    if (v.startsWith('"') && v.endsWith('"')) v = v.slice(1, -1);
    attrs[c[1]] = v;
  }
  return { attrs, corps: m[2] };
}

const confiance = (v) => {
  const s = String(v ?? '').normalize('NFD').replace(/[̀-ͯ]/g, '').toUpperCase().trim();
  return ['ELEVE', 'MOYEN', 'FAIBLE'].includes(s) ? s : 'MOYEN';
};
const slug = (t) => t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const yaml = (attrs) =>
  '---\n' + Object.entries(attrs).filter(([, v]) => v !== undefined && v !== null && v !== '')
    .map(([k, v]) => (typeof v === 'number' ? `${k}: ${v}` : `${k}: "${String(v).replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`)).join('\n') + '\n---\n\n';

const offres = JSON.parse(readFileSync(join(DONNEES, 'offers-enrichies.json'), 'utf8'));
mkdirSync(DOSSIER, { recursive: true });
let ecrits = 0, ignores = 0, existants = 0;
for (const offre of LIMITE ? offres.slice(0, LIMITE) : offres) {
  const fichier = join(DOSSIER, `${slug(offre.destination)}-${offre.offer_hash}.md`);
  if (/(awinmid|awinaffid)=EXEMPLE/i.test(offre.lien_affiliation ?? '')) { console.warn(`::warning::${offre.destination} : lien factice, ignoré`); ignores++; continue; }
  // Déjà écrit au même prix : rien à refaire. Prix changé : l'article est régénéré, sinon il afficherait un prix périmé.
  if (existsSync(fichier) && Number(readFileSync(fichier, 'utf8').match(/^prix: ([\d.]+)/m)?.[1]) === offre.prix_reduit) { existants++; continue; }
  try {
    const texte = await appeler(offre);
    const article = bloc(texte, 'article');
    if (!article) { console.warn(`::warning::${offre.destination} : article vide (données insuffisantes)`); ignores++; continue; }
    const { attrs, corps } = separer(article);
    if (!attrs.title || !attrs.description) throw new Error('titre ou description manquant');
    const avis = bloc(texte, 'avis');
    // Réduction par rapport à NOTRE prix habituel observé (médiane), pas au prix barré du marchand
    const reduction = Math.round(((offre.prix_median_90j - offre.prix_reduit) / offre.prix_median_90j) * 100);
    const final = yaml({
      title: attrs.title,
      description: attrs.description,
      date: new Date().toISOString().slice(0, 10),
      confidence: confiance(attrs.confidence),
      destination: offre.destination,
      voyagiste: offre.voyagiste,
      prix: offre.prix_reduit,
      prixInitial: offre.prix_median_90j,
      reduction,
      duree: offre.duree_sejour ?? undefined,
      villeDepart: offre.ville_depart ?? undefined,
      lien: offre.lien_affiliation,
      avisPourquoi: avis.match(/POURQUOI:\s*(.+)/i)?.[1]?.trim(),
      avisAttention: avis.match(/ATTENTION:\s*(.+)/i)?.[1]?.trim(),
    }) + corps.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1').replace(/https?:\/\/\S+/g, '').trim() +
      // Base de la décision, écrite à partir des données (jamais par le modèle)
      `\n\n*Pourquoi cette offre est publiée : son prix est au moins ${Math.round((1 - REGLES.SOUS_MEDIANE) * 100)} % sous le prix médian que nous avons observé (${offre.prix_median_90j} €, sur ${offre.nb_releves_historique} relevés en ${offre.jours_historique} jours) et il est au plus ${Math.round((REGLES.MARGE_SUR_MINIMUM - 1) * 100)} % au-dessus du plus bas prix relevé auparavant (${offre.prix_min_observe} €).*\n`;
    writeFileSync(fichier, final);
    console.log(`${offre.destination} : article écrit`);
    ecrits++;
    await new Promise((ok) => setTimeout(ok, PAUSE_MS));
  } catch (e) {
    console.warn(`::warning::${offre.destination} : ${e.message}`);
    if (e.fatale) { console.error('Modèle introuvable : arrêt du traitement. Définissez GEMINI_MODEL.'); process.exit(1); }
    ignores++;
  }
}
// Une offre qui ne passe plus le filtre de prix disparaît du site (un prix périmé serait trompeur)
const retenus = new Set(offres.map((o) => o.offer_hash));
let retires = 0;
for (const f of readdirSync(DOSSIER)) {
  const h = f.match(/-([0-9a-f]{16})\.md$/)?.[1];
  if (h && !retenus.has(h)) { unlinkSync(join(DOSSIER, f)); console.log(`${f} : retiré (n'est plus un bon prix)`); retires++; }
}
console.log(`Terminé : ${ecrits} articles, ${existants} déjà à jour, ${retires} retirés, ${ignores} ignorés.`);
// Aucune offre retenue est normal au début : seule une génération qui échoue partout est une erreur
if (offres.length > 0 && ecrits === 0 && existants === 0) process.exit(1);
