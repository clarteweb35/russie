// Tous les pays du monde : fiche d'identité commune (importée par scripts/importer-monde.mjs) + guide détaillé quand il existe.
import brut from './pays.json';
import { guideParIso } from '../pays';
import type { PaysComplet } from '../pays/types';
import { aEssentiel } from '../pays/essentiel';

export type Fiche = {
  iso: string;
  iso2: string;
  slug: string;
  nom: string;
  nomOfficiel: string;
  capitales: string[];
  region: string;
  sousRegion: string;
  langues: { code: string; nom: string }[];
  devises: { code: string; nom: string; symbole: string }[];
  indicatif: string | null;
  conduiteAGauche: boolean;
  superficie: number | null;
  population: { valeur: number; annee: number } | null;
  limitrophes: string[];
  enclave: boolean;
  domaine: string | null;
  fuseaux: { min: number; max: number; nb: number } | null;
  latlng: number[] | null;
  emoji: string;
  urss: boolean; // ancienne république soviétique : le russe y reste utile
  diplo: { slug: string; securite: string; entree: string } | null;
};

export type FicheMonde = Fiche & {
  guide?: PaysComplet; // guide détaillé (rubriques, leçons) s'il existe
  href: string; // chemin de la page du pays, sans préfixe de déploiement
};

// La page de la Russie est une page à part (contenu historique du site) ; les autres suivent le même modèle
const RUSSIE = 'RUS';

export const monde: FicheMonde[] = (brut as Fiche[])
  .map((f) => {
    const guide = guideParIso(f.iso);
    const slug = guide?.slug ?? f.slug;
    return { ...f, slug, guide, href: `/pays/${slug}` };
  })
  .sort((a, b) => a.nom.localeCompare(b.nom, 'fr'));

export const parSlug = (slug: string) => monde.find((p) => p.slug === slug);
export const parIso = (iso: string) => monde.find((p) => p.iso === iso);
export const estRussie = (p: Fiche) => p.iso === RUSSIE;

// Lettre de regroupement alphabétique, sans accent (« Émirats » range sous E, « Île Maurice » sous I)
export const lettreDe = (nom: string) => nom.normalize('NFD').replace(/[̀-ͯ]/g, '').charAt(0).toUpperCase();

export const groupesAlphabetiques = () => {
  const groupes = new Map<string, FicheMonde[]>();
  for (const p of monde) {
    const l = lettreDe(p.nom);
    if (!groupes.has(l)) groupes.set(l, []);
    groupes.get(l)!.push(p);
  }
  return [...groupes.entries()].map(([lettre, pays]) => ({ lettre, pays }));
};

export const REGIONS = ['Afrique', 'Amériques', 'Asie', 'Europe', 'Océanie'];

export const voisins = (p: Fiche) => p.limitrophes.map((iso) => parIso(iso)).filter((x): x is FicheMonde => !!x);

export const memeSousRegion = (p: Fiche, max = 8) =>
  monde.filter((x) => x.sousRegion === p.sousRegion && x.iso !== p.iso).slice(0, max);

// Mises en forme
export const nombre = (n: number) => n.toLocaleString('fr-FR');
export const decalageTexte = (f: Fiche) => {
  if (!f.fuseaux) return null;
  const h = (n: number) => `${n > 0 ? '+' : n < 0 ? '−' : ''}${Math.abs(n).toLocaleString('fr-FR', { maximumFractionDigits: 2 })} h`;
  const { min, max } = f.fuseaux;
  if (min === max) return min === 0 ? 'Même heure qu’à Paris' : `${h(min)} par rapport à Paris`;
  return `De ${h(min)} à ${h(max)} par rapport à Paris selon la zone et la saison`;
};

// Page générique des conseils du ministère, quand un pays n'a pas sa propre page
export const CONSEILS_GENERIQUES = 'https://www.diplomatie.gouv.fr/fr/conseils-aux-voyageurs/conseils-par-pays-destination/';
// Pays en situation de sécurité exceptionnelle : la page renvoie en premier lieu à la fiche officielle
export const ALERTE_SECURITE = new Set(['UKR', 'BLR', 'AFG', 'IRQ', 'IRN', 'ISR', 'LBN', 'LBY', 'MLI', 'BFA', 'NER', 'SDN', 'SSD', 'SOM', 'SYR', 'YEM', 'CAF', 'HTI', 'PRK', 'MMR', 'TCD', 'COD']);

export const conseilsDe = (f: Fiche) => f.diplo?.securite ?? CONSEILS_GENERIQUES;

const LIBELLES: Record<string, string> = {
  voyager: 'Voyager',
  vivre: 'Vivre',
  travailler: 'Travailler',
  paiements: 'Paiements',
  'langue-culture': 'Langue & culture',
};

// Menu et bandeau d'une page pays : le même sur la fiche et sur toutes les sous-pages du guide
export const contextePays = (f: FicheMonde) => {
  const g = f.guide;
  const menu = [
    { label: 'Fiche', href: f.href, exact: true },
    ...(aEssentiel(f.iso) ? [{ label: 'L’essentiel', href: `${f.href}/essentiel` }] : []),
    ...(g
      ? [
          ...g.rubriques.map((r) => ({ label: LIBELLES[r.slug] ?? r.titre, href: `${f.href}/${r.slug}` })),
          ...(g.lecons.length > 0 ? [{ label: 'Leçons', href: `${f.href}/lecons` }] : []),
          { label: 'Sources', href: `${f.href}/sources` },
        ]
      : [{ label: 'Monnaie', href: `${f.href}#monnaie` }, { label: 'Sécurité', href: `${f.href}#securite` }]),
  ];
  return {
    pays: { slug: f.slug, nom: f.nom, conseilsVoyageurs: conseilsDe(f), test: g?.test, alerte: ALERTE_SECURITE.has(f.iso) },
    menu,
  };
};

export const NOTE_SOURCES_MONDE = 'Données : jeu de données ouvert des pays (mledoze/countries), Banque mondiale pour la population, base de fuseaux horaires IANA, Wikidata pour les capitales. Dernier import : novembre 2026.';
