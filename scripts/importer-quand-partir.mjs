// Importe les données de l'outil « Quand partir ? » dans src/data/quand-partir.json (fichier généré : ne pas éditer à la main).
// Sources ouvertes uniquement, chacune avec sa période et sa date de récupération :
//  - climat : NASA POWER (réanalyse MERRA-2, climatologie 2001-2025) au point d'une ville de référence ;
//  - fréquentation : Eurostat, nuitées mensuelles en hébergement touristique (tour_occ_nim) ;
//  - prix de l'hébergement : Eurostat, indice des prix à la consommation harmonisé, « services d'hébergement » (prc_hicp_midx, CP112) ;
//  - niveau de prix : Eurostat, restaurants et hôtels, UE27 = 100 (prc_ppp_ind, A0111) ;
//  - coordonnées des capitales : Wikidata.
// Deux niveaux de couverture :
//  - destinations documentées (DESTINATIONS) : climat d'une ville touristique de référence + affluence + prix (pays d'Europe couverts par Eurostat) ;
//  - tous les autres pays : climat de la capitale seul. Rien d'autre n'est estimé : une série incomplète = rubrique absente.
// Les données sont rangées par code ISO3. Usage : node scripts/importer-quand-partir.mjs
import { writeFileSync, readFileSync } from 'node:fs';

// Destinations documentées : `geo` = code Eurostat. Ville de référence : une seule par pays.
const DESTINATIONS = [
  { iso: 'ESP', geo: 'ES', ville: 'Barcelone', lat: 41.39, lon: 2.17 },
  { iso: 'PRT', geo: 'PT', ville: 'Lisbonne', lat: 38.72, lon: -9.14 },
  { iso: 'ITA', geo: 'IT', ville: 'Rome', lat: 41.9, lon: 12.5 },
  { iso: 'GRC', geo: 'EL', ville: 'Athènes', lat: 37.98, lon: 23.73 },
  { iso: 'HRV', geo: 'HR', ville: 'Split', lat: 43.51, lon: 16.44 },
  { iso: 'FIN', geo: 'FI', ville: 'Helsinki', lat: 60.17, lon: 24.94 },
  { iso: 'DEU', geo: 'DE', ville: 'Berlin', lat: 52.52, lon: 13.4 },
  { iso: 'ISL', geo: 'IS', ville: 'Reykjavik', lat: 64.15, lon: -21.94 },
  { iso: 'POL', geo: 'PL', ville: 'Cracovie', lat: 50.06, lon: 19.94 },
  { iso: 'AUT', geo: 'AT', ville: 'Vienne', lat: 48.21, lon: 16.37 },
];

const MOIS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
const JOURS = [31, 28.25, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const ES = 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data';
const aujourdhui = new Date().toISOString().slice(0, 10);
const arrondi = (n, d = 0) => Math.round(n * 10 ** d) / 10 ** d;
const pause = (ms) => new Promise((r) => setTimeout(r, ms));
const sansAccent = (t) => t.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]/g, '');

async function json(u, essais = 4) {
  for (let i = 1; ; i++) {
    const r = await fetch(u, { headers: { 'User-Agent': 'voyages-malins-import/1.0 (script de developpement)' }, signal: AbortSignal.timeout(60_000) });
    if (r.ok) return r.json();
    if (i >= essais || ![429, 500, 502, 503, 504].includes(r.status)) throw new Error(`${r.status} ${u}`);
    await pause(2000 * i);
  }
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

// Climat d'un point : température moyenne (°C) et précipitations (mm par mois), ou null si la série est incomplète
async function climatDuPoint(lat, lon) {
  const c = await json(`https://power.larc.nasa.gov/api/temporal/climatology/point?parameters=T2M,PRECTOTCORR&community=RE&longitude=${lon}&latitude=${lat}&format=JSON`);
  const t = c.properties.parameter.T2M;
  const p = c.properties.parameter.PRECTOTCORR;
  if (!MOIS.every((m) => t[m] > -900 && p[m] > -900)) return null;
  return { temperature: MOIS.map((m) => arrondi(t[m], 1)), pluie: MOIS.map((m, i) => arrondi(p[m] * JOURS[i])) };
}

// Capitales : coordonnées Wikidata. Si un pays en a plusieurs, on garde celle que le site affiche en premier.
async function capitales() {
  const q = 'SELECT ?iso3 ?capLabel ?coord WHERE { ?c wdt:P298 ?iso3 . ?c wdt:P36 ?cap . ?cap wdt:P625 ?coord . SERVICE wikibase:label { bd:serviceParam wikibase:language "fr,en". } }';
  const j = await json('https://query.wikidata.org/sparql?format=json&query=' + encodeURIComponent(q));
  const parIso = new Map();
  for (const b of j.results.bindings) {
    const m = /Point\(([-\d.]+) ([-\d.]+)\)/.exec(b.coord.value);
    if (!m) continue;
    parIso.set(b.iso3.value, [...(parIso.get(b.iso3.value) ?? []), { nom: b.capLabel.value, lon: Number(m[1]), lat: Number(m[2]) }]);
  }
  return parIso;
}

const monde = JSON.parse(readFileSync(new URL('../src/data/monde/pays.json', import.meta.url), 'utf8'));
const caps = await capitales();
const documentes = new Set(DESTINATIONS.map((d) => d.iso));
const pays = {};
const majs = { nuitees: '', prix: '', niveau: '' };

// 1) Destinations documentées
for (const d of DESTINATIONS) {
  const entree = { iso: d.iso, ville: { nom: d.ville, lat: d.lat, lon: d.lon } };
  try { const c = await climatDuPoint(d.lat, d.lon); if (c) entree.climat = c; } catch (e) { console.warn(`Climat ${d.iso} : ${e.message}`); }
  try {
    const { serie, maj } = await serieEurostat('tour_occ_nim', `geo=${d.geo}&nace_r2=I551-I553&c_resid=TOTAL&unit=NR&sinceTimePeriod=2022-01`);
    const s = saisonnier(serie);
    if (s) { entree.affluence = { indice: s.indice, annees: s.annees }; majs.nuitees = maj; }
  } catch (e) { console.warn(`Nuitées ${d.iso} : ${e.message}`); }
  try {
    const { serie, maj } = await serieEurostat('prc_hicp_midx', `geo=${d.geo}&coicop=CP112&unit=I15&sinceTimePeriod=2022-01`);
    const s = saisonnier(serie);
    if (s) { entree.prix = { indice: s.indice, annees: s.annees }; majs.prix = maj; }
  } catch (e) { console.warn(`Prix ${d.iso} : ${e.message}`); }
  try {
    const { serie, maj } = await serieEurostat('prc_ppp_ind', `geo=${d.geo}&na_item=PLI_EU27_2020&ppp_cat=A0111&sinceTimePeriod=2022`);
    const annees = Object.keys(serie).sort();
    if (annees.length) { const a = annees.at(-1); entree.niveauPrix = { valeur: arrondi(serie[a]), annee: a }; majs.niveau = maj; }
  } catch (e) { console.warn(`Niveau de prix ${d.iso} : ${e.message}`); }
  pays[d.iso] = entree;
  console.log(`${d.iso} (documentée) : climat ${entree.climat ? 'oui' : 'non'}, affluence ${entree.affluence ? 'oui' : 'non'}, prix ${entree.prix ? 'oui' : 'non'}`);
}

// 2) Tous les autres pays : climat de la capitale seul
let ok = 0;
const manquants = [];
for (const f of monde) {
  if (documentes.has(f.iso)) continue;
  const liste = caps.get(f.iso) ?? [];
  const voulue = sansAccent(f.capitales?.[0] ?? '');
  const cap = liste.find((x) => sansAccent(x.nom) === voulue) ?? liste[0];
  if (!cap) { manquants.push(f.iso); continue; }
  try {
    const c = await climatDuPoint(cap.lat, cap.lon);
    if (!c) { manquants.push(f.iso); continue; }
    pays[f.iso] = { iso: f.iso, ville: { nom: f.capitales?.[0] || cap.nom, lat: arrondi(cap.lat, 2), lon: arrondi(cap.lon, 2), capitale: true }, climat: c };
    ok++;
  } catch (e) { console.warn(`Climat ${f.iso} : ${e.message}`); manquants.push(f.iso); }
  await pause(350);
}
console.log(`Capitales : ${ok} pays avec climat, ${manquants.length} sans (${manquants.join(', ')})`);

const sortie = {
  genere: aujourdhui,
  sources: {
    climat: { nom: 'NASA POWER (réanalyse MERRA-2)', url: 'https://power.larc.nasa.gov/', periode: 'Climatologie janvier 2001 à décembre 2025', acces: aujourdhui, note: 'Données modélisées sur une grille d’environ 50 km, au point de la ville de référence : ce ne sont pas des relevés de station. Pour la plupart des pays, la ville de référence est la capitale, qui ne représente pas toujours le climat des régions touristiques.' },
    affluence: { nom: 'Eurostat, nuitées en hébergement touristique (tour_occ_nim)', url: 'https://ec.europa.eu/eurostat/databrowser/view/tour_occ_nim/default/table', periode: 'Moyenne des trois dernières années complètes disponibles', acces: aujourdhui, maj: majs.nuitees, note: 'Tous visiteurs confondus (résidents et non-résidents), pays entier.' },
    prix: { nom: 'Eurostat, indice des prix à la consommation harmonisé, services d’hébergement (prc_hicp_midx, CP112)', url: 'https://ec.europa.eu/eurostat/databrowser/view/prc_hicp_midx/default/table', periode: 'Moyenne des trois dernières années complètes disponibles', acces: aujourdhui, maj: majs.prix, note: 'Mesure la variation saisonnière moyenne des prix de l’hébergement dans le pays, pas le prix d’une chambre.' },
    niveauPrix: { nom: 'Eurostat, niveaux de prix comparés, restaurants et hôtels (prc_ppp_ind, A0111)', url: 'https://ec.europa.eu/eurostat/databrowser/view/prc_ppp_ind/default/table', periode: 'Dernière année disponible', acces: aujourdhui, maj: majs.niveau, note: 'Moyenne de l’Union européenne = 100.' },
    capitales: { nom: 'Wikidata (coordonnées des capitales)', url: 'https://www.wikidata.org/', periode: 'Données ouvertes', acces: aujourdhui, note: 'Sert à situer la ville de référence du climat.' },
  },
  pays,
};
writeFileSync(new URL('../src/data/quand-partir.json', import.meta.url), JSON.stringify(sortie) + '\n');
console.log(`Écrit : src/data/quand-partir.json (${Object.keys(pays).length} pays)`);
