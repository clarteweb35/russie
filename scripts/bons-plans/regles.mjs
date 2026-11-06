// Règles de publication d'une offre : c'est ici, et nulle part ailleurs, que se règlent les seuils.
// Principe : seul l'historique de prix que nous observons nous-mêmes décide. Le « prix barré » du marchand
// est une déclaration commerciale : il n'entre jamais dans la décision.
export const REGLES = {
  RELEVES_MIN: 5,          // relevés nécessaires (celui du jour compris) avant de pouvoir juger un prix
  JOURS_MIN: 14,           // durée minimale couverte par l'historique
  SOUS_MEDIANE: 0.85,      // le prix doit être au plus 85 % du prix médian observé (au moins 15 % de moins)
  MARGE_SUR_MINIMUM: 1.05, // ... et au plus 5 % au-dessus du prix le plus bas déjà observé
};

const mediane = (valeurs) => {
  const t = [...valeurs].sort((a, b) => a - b);
  const mid = Math.floor(t.length / 2);
  return t.length % 2 ? t[mid] : Math.round(((t[mid - 1] + t[mid]) / 2) * 100) / 100;
};

// `precedents` : relevés d'avant aujourd'hui (le relevé du jour n'est pas dedans, pour ne pas se comparer à soi-même).
// Renvoie { retenue, raison, mediane, minimum, releves, jours }.
export function evaluer(offre, precedents, maintenant = Date.now()) {
  const releves = precedents.length + 1;
  const prixPrecedents = precedents.map((r) => r.prix_reduit);
  const jours = precedents.length
    ? Math.floor((maintenant - Math.min(...precedents.map((r) => new Date(r.collected_at).getTime()))) / 86400000)
    : 0;
  const base = { releves, jours, mediane: prixPrecedents.length ? mediane(prixPrecedents) : null, minimum: prixPrecedents.length ? Math.min(...prixPrecedents) : null };
  if (releves < REGLES.RELEVES_MIN || jours < REGLES.JOURS_MIN) return { ...base, retenue: false, raison: 'historique insuffisant' };
  if (offre.prix_reduit > base.mediane * REGLES.SOUS_MEDIANE) return { ...base, retenue: false, raison: 'prix pas assez sous la médiane' };
  if (offre.prix_reduit > base.minimum * REGLES.MARGE_SUR_MINIMUM) return { ...base, retenue: false, raison: 'prix au-dessus du plus bas observé' };
  return { ...base, retenue: true, raison: 'bon prix' };
}
