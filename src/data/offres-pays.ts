import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import { parIso } from './monde';

// Lien entre les offres de Voyages Malins (bons plans) et les fiches pays.
// Une offre est rattachée à un pays par son champ `pays` (code ISO, par exemple « PRT »).
// À défaut, on le déduit du nom de la destination avec la table ci-dessous (à compléter au fil des offres).
// Le pipeline de génération des offres devrait idéalement renseigner `pays` lui-même.

const VILLES_PAYS: Record<string, string> = {
  lisbonne: 'PRT', porto: 'PRT', faro: 'PRT', madere: 'PRT', algarve: 'PRT',
  marrakech: 'MAR', agadir: 'MAR', casablanca: 'MAR', essaouira: 'MAR',
  'punta cana': 'DOM', 'saint-domingue': 'DOM', 'puerto plata': 'DOM',
  barcelone: 'ESP', madrid: 'ESP', seville: 'ESP', valence: 'ESP', malaga: 'ESP', majorque: 'ESP', ibiza: 'ESP', tenerife: 'ESP', fuerteventura: 'ESP', 'gran canaria': 'ESP',
  rome: 'ITA', venise: 'ITA', milan: 'ITA', naples: 'ITA', florence: 'ITA', sicile: 'ITA', sardaigne: 'ITA',
  berlin: 'DEU', munich: 'DEU', hambourg: 'DEU',
  athenes: 'GRC', crete: 'GRC', rhodes: 'GRC', corfou: 'GRC', santorin: 'GRC',
  istanbul: 'TUR', antalya: 'TUR',
  londres: 'GBR', edimbourg: 'GBR', dublin: 'IRL',
  amsterdam: 'NLD', bruxelles: 'BEL', vienne: 'AUT', prague: 'CZE', budapest: 'HUN', varsovie: 'POL', cracovie: 'POL',
  copenhague: 'DNK', stockholm: 'SWE', oslo: 'NOR', reykjavik: 'ISL', islande: 'ISL', helsinki: 'FIN', laponie: 'FIN',
  malte: 'MLT', 'la valette': 'MLT', dubrovnik: 'HRV', split: 'HRV', zagreb: 'HRV',
  tunis: 'TUN', djerba: 'TUN', hammamet: 'TUN', sousse: 'TUN',
  'le caire': 'EGY', hurghada: 'EGY', 'charm el-cheikh': 'EGY',
  dubai: 'ARE', 'abu dhabi': 'ARE', bangkok: 'THA', phuket: 'THA', bali: 'IDN', tokyo: 'JPN', singapour: 'SGP',
  'new york': 'USA', miami: 'USA', 'las vegas': 'USA', montreal: 'CAN', cancun: 'MEX',
  maurice: 'MUS', 'ile maurice': 'MUS', madagascar: 'MDG', zanzibar: 'TZA', kenya: 'KEN', 'cap-vert': 'CPV',
};

const sansAccent = (t: string) => t.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

export type Offre = CollectionEntry<'bons-plans'>;

// Pays (fiche du monde) auquel se rattache une offre, ou undefined
export const paysDeOffre = (offre: Offre) => {
  const iso = offre.data.pays?.toUpperCase();
  if (iso) return parIso(iso);
  const texte = sansAccent(`${offre.data.destination ?? ''} ${offre.data.title}`);
  for (const [ville, code] of Object.entries(VILLES_PAYS)) {
    // Mot entier seulement (« rome » ne doit pas se trouver dans « aérodrome »)
    if (new RegExp(`(^|[^a-z])${ville}([^a-z]|$)`).test(texte)) return parIso(code);
  }
  return undefined;
};

// Offres dont la destination correspond à un pays (les plus récentes d'abord)
export const offresDuPays = async (iso: string): Promise<Offre[]> => {
  const offres = await getCollection('bons-plans');
  return offres
    .filter((o) => paysDeOffre(o)?.iso === iso)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
};
