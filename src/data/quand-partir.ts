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

// ---- Calendrier d'un pays : lecture mois par mois, par règles simples et affichées (aucune note inventée) ----
// Chaque mois reçoit des points d'attention (défavorables) et des atouts, tirés des seuils ci-dessous, tous visibles sur la page.
export const REGLES = { froid: 10, chaud: 30, confortMin: 15, confortMax: 28, pluieForte: 100, pluieFaible: 50 };

export type Niveau = 'bon' | 'moins' | 'eviter';
export const LIBELLE_NIVEAU: Record<Niveau, string> = { bon: 'Bon moment', moins: 'Moins bon', eviter: 'À éviter' };

const dec = (n: number) => n.toLocaleString('fr-FR', { maximumFractionDigits: 1 });

export function lectureMois(d: DonneesPays, m: number) {
  const atouts: string[] = [];
  const attention: string[] = [];
  const t = d.climat?.temperature[m];
  const p = d.climat?.pluie[m];
  const a = d.affluence?.indice[m];
  const x = d.prix?.indice[m];
  if (t !== undefined) {
    if (t < REGLES.froid) attention.push(`Temps frais ou froid (${dec(t)} °C en moyenne)`);
    else if (t > REGLES.chaud) attention.push(`Forte chaleur (${dec(t)} °C en moyenne)`);
    else if (t >= REGLES.confortMin && t <= REGLES.confortMax) atouts.push(`Températures agréables (${dec(t)} °C)`);
  }
  if (p !== undefined) {
    if (p >= REGLES.pluieForte) attention.push(`Pluie abondante (${p} mm dans le mois)`);
    else if (p < REGLES.pluieFaible) atouts.push(`Peu de pluie (${p} mm dans le mois)`);
  }
  if (a !== undefined) {
    if (a > SEUILS.affluenceForte) attention.push(`Affluence forte (indice ${a})`);
    else if (a < SEUILS.affluenceCalme) atouts.push(`Affluence calme (indice ${a})`);
  }
  if (x !== undefined) {
    if (x > SEUILS.prixHaut) attention.push(`Prix de l’hébergement plus élevés (indice ${x})`);
    else if (x < SEUILS.prixBas) atouts.push(`Prix de l’hébergement plus bas (indice ${x})`);
  }
  const niveau: Niveau = attention.length === 0 ? 'bon' : attention.length === 1 ? 'moins' : 'eviter';
  const chiffres = [t !== undefined ? `${dec(t)} °C` : '', p !== undefined ? `${p} mm` : ''].filter(Boolean).join(' · ');
  return { niveau, atouts, attention, chiffres };
}
