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

// Autres façons de chercher un pays : sigles, noms anglais ou anciens, et destinations très recherchées (îles, régions, villes
// touristiques) qui ne sont pas des pays. La recherche de l'accueil les reconnaît dès 2 lettres. Écrits sans accent, en minuscules.
// Une seule source : ne pas les recopier ailleurs. Ne mettre que des correspondances sûres (un lieu = un seul pays) ;
// inutile d'y répéter le nom français du pays ou sa capitale, déjà reconnus.
export const ALIAS: Record<string, string[]> = {
  // Sigles et formes courtes
  USA: ['usa', 'us', 'u.s.a', 'etats unis', 'etats-unis d amerique', 'united states', 'new york', 'californie', 'floride', 'hawaii', 'las vegas', 'miami', 'los angeles'],
  COD: ['rdc', 'rd congo', 'congo kinshasa', 'zaire', 'drc'],
  COG: ['congo brazzaville', 'rep du congo'],
  CAF: ['rca', 'centrafrique'],
  GBR: ['uk', 'u.k', 'gb', 'grande-bretagne', 'great britain', 'britain', 'united kingdom', 'angleterre', 'england', 'ecosse', 'scotland', 'pays de galles', 'wales', 'irlande du nord'],
  ARE: ['eau', 'uae', 'emirats', 'dubai', 'abu dhabi'],
  PRK: ['rpdc', 'north korea'],
  KOR: ['coree', 'south korea'],
  SAU: ['saudi arabia', 'la mecque', 'mecque'],
  // Europe
  DEU: ['germany', 'deutschland', 'baviere'],
  ESP: ['spain', 'espana', 'canaries', 'baleares', 'majorque', 'minorque', 'ibiza', 'tenerife', 'barcelone', 'costa brava', 'costa del sol'],
  ITA: ['italy', 'italia', 'sicile', 'sardaigne', 'toscane', 'venise', 'amalfi'],
  PRT: ['portugal', 'madere', 'acores', 'algarve', 'madeira', 'azores'],
  GRC: ['greece', 'crete', 'santorin', 'rhodes', 'mykonos', 'corfou', 'cyclades'],
  CHE: ['switzerland'],
  NLD: ['hollande', 'netherlands', 'holland'],
  BEL: ['belgium'],
  AUT: ['austria', 'osterreich'],
  POL: ['poland', 'polska'],
  CZE: ['republique tcheque', 'czech republic', 'czechia', 'boheme'],
  HUN: ['hungary'],
  HRV: ['croatia', 'dalmatie', 'dubrovnik'],
  BIH: ['bosnie'],
  MKD: ['macedoine', 'macedonia'],
  RUS: ['urss', 'federation de russie', 'russia'],
  BLR: ['belarus'],
  GEO: ['sakartvelo'],
  TUR: ['turkey', 'turkiye', 'cappadoce', 'antalya'],
  // Afrique et océan Indien
  EGY: ['egypt', 'sharm el sheikh', 'hurghada', 'louxor'],
  MAR: ['morocco', 'marrakech', 'agadir', 'casablanca'],
  TUN: ['tunisia', 'djerba', 'hammamet'],
  DZA: ['algeria'],
  ZAF: ['south africa', 'le cap', 'cape town'],
  TZA: ['tanzania', 'zanzibar', 'kilimandjaro', 'serengeti'],
  CIV: ['cote d ivoire', 'ivory coast', 'abidjan'],
  CPV: ['cap vert', 'cabo verde', 'cape verde'],
  MUS: ['mauritius', 'maurice'],
  SWZ: ['swaziland'],
  GNB: ['guinee bissau', 'guinea bissau'],
  STP: ['sao tome'],
  // Asie et Pacifique
  CHN: ['china', 'shanghai', 'hong kong', 'macao', 'beijing'],
  JPN: ['japan', 'nippon', 'kyoto', 'osaka', 'okinawa'],
  IND: ['india', 'goa', 'kerala', 'rajasthan', 'bombay', 'mumbai'],
  THA: ['thailand', 'siam', 'phuket', 'koh samui', 'pattaya', 'chiang mai'],
  VNM: ['viet nam', 'saigon', 'ho chi minh'],
  IDN: ['indonesia', 'bali', 'java', 'lombok', 'sumatra'],
  MYS: ['malaysia', 'langkawi', 'borneo'],
  PHL: ['philippines', 'palawan', 'cebu'],
  LKA: ['ceylan', 'ceylon'],
  MMR: ['myanmar', 'burma'],
  KHM: ['cambodia', 'angkor', 'siem reap'],
  NPL: ['nepal', 'everest'],
  AUS: ['australia', 'sydney', 'melbourne', 'grande barriere de corail'],
  NZL: ['new zealand', 'aotearoa'],
  FJI: ['fiji'],
  TLS: ['timor', 'east timor'],
  IRN: ['perse', 'persia'],
  ISR: ['israel', 'tel aviv'],
  JOR: ['jordan', 'petra'],
  // Amériques
  CAN: ['quebec', 'montreal', 'toronto', 'vancouver'],
  MEX: ['mexico', 'cancun', 'yucatan', 'tulum', 'acapulco'],
  BRA: ['brazil', 'rio', 'rio de janeiro', 'amazonie'],
  ARG: ['argentina', 'patagonie', 'terre de feu'],
  PER: ['peru', 'machu picchu', 'cusco'],
  DOM: ['dominican republic', 'punta cana'],
  CUB: ['varadero'],
  // Petits États : formes abrégées
  VAT: ['saint-siege', 'holy see', 'vatican city'],
  SMR: ['san marino'],
  KNA: ['saint kitts', 'st kitts', 'nevis'],
  VCT: ['saint vincent', 'grenadines'],
  LCA: ['saint lucia', 'st lucia'],
  ATG: ['antigua', 'barbuda'],
  TTO: ['trinidad', 'tobago'],
};
export const estRussie = (p: Fiche) => p.iso === RUSSIE;

// Texte sans accent ni majuscule, pour comparer une saisie à un nom (« Émirats » et « emirats » se valent)
export const sansAccent = (t: string) => t.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

// Lettre de regroupement alphabétique, sans accent (« Émirats » range sous E, « Île Maurice » sous I)
export const lettreDe = (nom: string) => sansAccent(nom).charAt(0).toUpperCase();

// Étiquette à côté du nom dans les listes : « guide » (fiche relue, ou la Russie), « beta » (fiche en test), ou rien
export const etiquetteGuide = (p: FicheMonde) => (p.guide ? (p.guide.test ? 'beta' : 'guide') : p.iso === RUSSIE ? 'guide' : '');

// Ligne secondaire des listes : capitale, puis sous-région
export const detailPays = (p: FicheMonde) => `${p.capitales[0] ? `${p.capitales[0]} · ` : ''}${p.sousRegion || p.region}`;

// Données compactes de la recherche (accueil et page /pays/), embarquées en JSON : une entrée par pays, sans HTML.
// n : nom comparable ; alias : sigles et autres noms ; long : tout ce qui peut matcher (nom officiel, capitales, alias).
export const donneesRecherche = () =>
  monde.map((p) => ({
    iso: p.iso,
    nom: p.nom,
    href: p.href,
    n: sansAccent(p.nom),
    alias: ALIAS[p.iso] ?? [],
    long: sansAccent(`${p.nom} ${p.nomOfficiel} ${p.capitales.join(' ')} ${(ALIAS[p.iso] ?? []).join(' ')}`),
    region: p.region,
    det: detailPays(p),
    tag: etiquetteGuide(p),
  }));

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
