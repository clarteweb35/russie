// Outil « Quand partir ? » : lecture des données importées (src/data/quand-partir.json, généré par
// scripts/importer-quand-partir.mjs) et règles de lecture des indices. Aucune valeur n'est écrite ici.
import brut from './quand-partir.json';

export const MOIS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];

export type Source = { nom: string; url: string; periode: string; acces: string; maj?: string; note: string };
export type DonneesPays = {
  iso: string;
  slug: string;
  ville: { nom: string; lat: number; lon: number };
  climat?: { temperature: number[]; pluie: number[] };
  affluence?: { indice: number[]; annees: string[] };
  prix?: { indice: number[]; annees: string[] };
  niveauPrix?: { valeur: number; annee: string };
};

export const DONNEES = brut as { genere: string; sources: Record<'climat' | 'affluence' | 'prix' | 'niveauPrix', Source>; pays: Record<string, DonneesPays> };

// Seuils de lecture choisis par Voyages Malins (indice 100 = moyenne de l'année). Ils sont affichés sur la page.
export const SEUILS = { affluenceCalme: 75, affluenceForte: 125, prixBas: 95, prixHaut: 105 };

export const bandeAffluence = (i: number) => (i < SEUILS.affluenceCalme ? 'calme' : i <= SEUILS.affluenceForte ? 'moyenne' : 'forte');
export const bandePrix = (i: number) => (i < SEUILS.prixBas ? 'plus bas' : i <= SEUILS.prixHaut ? 'proche de la moyenne' : 'plus élevé');
