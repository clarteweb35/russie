// Importe les données de l'outil « Quand partir ? » dans src/data/quand-partir.json (fichier généré : ne pas éditer à la main).
// Sources ouvertes uniquement, chacune avec sa période et sa date de récupération :
//  - climat : NASA POWER (réanalyse MERRA-2, climatologie 2001-2025) au point de la ville de référence ;
//  - fréquentation : Eurostat, nuitées mensuelles en hébergement touristique (tour_occ_nim) ;
//  - prix de l'hébergement : Eurostat, indice des prix à la consommation harmonisé, « services d'hébergement » (prc_hicp_midx, CP112) ;
//  - niveau de prix : Eurostat, restaurants et hôtels, UE27 = 100 (prc_ppp_ind, A0111).
// Rien n'est estimé : un pays dont une série est incomplète n'a pas la rubrique correspondante.
// Usage : node scripts/importer-quand-partir.mjs
import { writeFileSync } from 'node:fs';

// Destinations documentées : pays d'Europe couverts par Eurostat. `geo` : code Eurostat. Ville de référence : une seule par pays.
const DESTINATIONS = [
  { iso: 'ESP', slug: 'espagne', geo: 'ES', ville: 'Barcelone', lat: 41.39, lon: 2.17 },
  { iso: 'PRT', slug: 'portugal', geo: 'PT', ville: 'Lisbonne', lat: 38.72, lon: -9.14 },
  { iso: 'ITA', slug: 'italie', geo: 'IT', ville: 'Rome', lat: 41.9, lon: 12.5 },
  { iso: 'GRC', slug: 'grece', geo: 'EL', ville: 'Athènes', lat: 37.98, lon: 23.73 },
  { iso: 'HRV', slug: 'croatie', geo: 'HR', ville: 'Split', lat: 43.51, lon: 16.44 },
  { iso: 'FIN', slug: 'finlande', geo: 'FI', ville: 'Helsinki', lat: 60.17, lon: 24.94 },
  { iso: 'DEU', slug: 'allemagne', geo: 'DE', ville: 'Berlin', lat: 52.52, lon: 13.4 },
  { iso: 'ISL', slug: 'islande', geo: 'IS', ville: 'Reykjavik', lat: 64.15, lon: -21.94 },
  { iso: 'POL', slug: 'pologne', geo: 'PL', ville: 'Cracovie', lat: 50.06, lon: 19.94 },
  { iso: 'AUT', slug: 'autriche', geo: 'AT', ville: 'Vienne', lat: 48.21, lon: 16.37 },
];

const MOIS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
const JOURS = [31, 28.25, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const ES = 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data';
const aujourdhui = new Date().toISOString().slice(0, 10);
const arrondi = (n, d = 0) => Math.round(n * 10 ** d) / 10 ** d;

async function json(u) {
  const r = await fetch(u);
  if (!r.ok) throw new Error(`${r.status} ${u}`);
  return r.json();
}

// Série Eurostat (une seule dimension libre : le temps) -> { 'AAAA-MM': valeur } et date de mise à jour du jeu
async function serieEurostat(jeu, params) {
  const j = await json(`${ES}/${jeu}?format=JSON&lang=EN&${params}`);
  const pos = j.dimension.time.category.index;
  const serie = {};
  for (const [t, i] of Object.entries(pos)) if (j.value?.[i] !== undefined) serie[t] = j.value[i];
  return { serie, maj: (j.updated ?? '').slice(0, 10) };
}

// Trois dernières années complètes : indice saisonnier (100 = moyenne de l'année), moyenné sur ces années
function saisonnier(serie) {
  const annees = [...new Set(Object.keys(serie).map((t) => t.slice(0, 4)))].sort().reverse();
  const completes = annees.filter((a) => MOIS.every((_, m) => serie[`${a}-${String(m + 1).padStart(2, '0')}`] !== undefined)).slice(0, 3);
  if (completes.length < 2) return null;
  const idx = MOIS.map((_, m) => {
    const parAnnee = completes.map((a) => {
      const vals = MOIS.map((__, k) => serie[`${a}-${String(k + 1).padStart(2, '0')}`]);
      const moy = vals.reduce((s, v) => s + v, 0) / 12;
      return (vals[m] / moy) * 100;
    });
    return arrondi(parAnnee.reduce((s, v) => s + v, 0) / parAnnee.length);
  });
  return { indice: idx, annees: completes.sort() };
}

const pays = {};
const majs = { nuitees: '', prix: '', niveau: '' };
for (const d of DESTINATIONS) {
  const entree = { iso: d.iso, slug: d.slug, ville: { nom: d.ville, lat: d.lat, lon: d.lon } };

  // Climat : température moyenne (°C) et précipitations (mm par mois)
  try {
    const c = await json(`https://power.larc.nasa.gov/api/temporal/climatology/point?parameters=T2M,PRECTOTCORR&community=RE&longitude=${d.lon}&latitude=${d.lat}&format=JSON`);
    const t = c.properties.parameter.T2M;
    const p = c.properties.parameter.PRECTOTCORR;
    if (MOIS.every((m) => t[m] > -900 && p[m] > -900)) {
      entree.climat = { temperature: MOIS.map((m) => arrondi(t[m], 1)), pluie: MOIS.map((m, i) => arrondi(p[m] * JOURS[i])) };
    }
  } catch (e) { console.warn(`Climat ${d.slug} : ${e.message}`); }

  // Fréquentation : nuitées mensuelles, tous visiteurs confondus
  try {
    const { serie, maj } = await serieEurostat('tour_occ_nim', `geo=${d.geo}&nace_r2=I551-I553&c_resid=TOTAL&unit=NR&sinceTimePeriod=2022-01`);
    const s = saisonnier(serie);
    if (s) { entree.affluence = { indice: s.indice, annees: s.annees }; majs.nuitees = maj; }
  } catch (e) { console.warn(`Nuitées ${d.slug} : ${e.message}`); }

  // Prix de l'hébergement : indice des prix harmonisé, variation saisonnière
  try {
    const { serie, maj } = await serieEurostat('prc_hicp_midx', `geo=${d.geo}&coicop=CP112&unit=I15&sinceTimePeriod=2022-01`);
    const s = saisonnier(serie);
    if (s) { entree.prix = { indice: s.indice, annees: s.annees }; majs.prix = maj; }
  } catch (e) { console.warn(`Prix ${d.slug} : ${e.message}`); }

  // Niveau de prix des restaurants et hôtels, UE27 = 100
  try {
    const { serie, maj } = await serieEurostat('prc_ppp_ind', `geo=${d.geo}&na_item=PLI_EU27_2020&ppp_cat=A0111&sinceTimePeriod=2022`);
    const annees = Object.keys(serie).sort();
    if (annees.length) { const a = annees.at(-1); entree.niveauPrix = { valeur: arrondi(serie[a]), annee: a }; majs.niveau = maj; }
  } catch (e) { console.warn(`Niveau de prix ${d.slug} : ${e.message}`); }

  pays[d.slug] = entree;
  console.log(`${d.slug} : climat ${entree.climat ? 'oui' : 'non'}, affluence ${entree.affluence ? 'oui' : 'non'}, prix ${entree.prix ? 'oui' : 'non'}, niveau ${entree.niveauPrix ? entree.niveauPrix.valeur : 'non'}`);
}

const sortie = {
  genere: aujourdhui,
  sources: {
    climat: { nom: 'NASA POWER (réanalyse MERRA-2)', url: 'https://power.larc.nasa.gov/', periode: 'Climatologie janvier 2001 à décembre 2025', acces: aujourdhui, note: 'Données modélisées sur une grille d’environ 50 km, au point de la ville de référence : ce ne sont pas des relevés de station.' },
    affluence: { nom: 'Eurostat, nuitées en hébergement touristique (tour_occ_nim)', url: 'https://ec.europa.eu/eurostat/databrowser/view/tour_occ_nim/default/table', periode: 'Moyenne des trois dernières années complètes disponibles', acces: aujourdhui, maj: majs.nuitees, note: 'Tous visiteurs confondus (résidents et non-résidents), pays entier.' },
    prix: { nom: 'Eurostat, indice des prix à la consommation harmonisé, services d’hébergement (prc_hicp_midx, CP112)', url: 'https://ec.europa.eu/eurostat/databrowser/view/prc_hicp_midx/default/table', periode: 'Moyenne des trois dernières années complètes disponibles', acces: aujourdhui, maj: majs.prix, note: 'Mesure la variation saisonnière moyenne des prix de l’hébergement dans le pays, pas le prix d’une chambre.' },
    niveauPrix: { nom: 'Eurostat, niveaux de prix comparés, restaurants et hôtels (prc_ppp_ind, A0111)', url: 'https://ec.europa.eu/eurostat/databrowser/view/prc_ppp_ind/default/table', periode: 'Dernière année disponible', acces: aujourdhui, maj: majs.niveau, note: 'Moyenne de l’Union européenne = 100.' },
  },
  pays,
};
writeFileSync(new URL('../src/data/quand-partir.json', import.meta.url), JSON.stringify(sortie, null, 1) + '\n');
console.log('Écrit : src/data/quand-partir.json');
