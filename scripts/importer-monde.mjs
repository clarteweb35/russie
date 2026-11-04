// Importe les données des pays du monde et enregistre le résultat dans le dépôt (le site n'appelle aucune de ces sources à l'exécution).
// Usage : node scripts/importer-monde.mjs
// Sources : jeu de données ouvert « mledoze/countries » (GitHub), base de fuseaux horaires IANA (zone.tab),
// Banque mondiale (population), Wikidata (capitales en français), pages du ministère français (adresses vérifiées une à une).
// Sortie : src/data/monde/pays.json et public/drapeaux/<iso3>.svg
import { writeFileSync, mkdirSync, existsSync } from 'node:fs';

const UA = { 'User-Agent': 'guide-pays-import/1.0 (script de développement)' };
const NAVIGATEUR = { 'User-Agent': 'Mozilla/5.0' };
const get = async (url, opts = {}) => {
  const r = await fetch(url, { headers: UA, signal: AbortSignal.timeout(60_000), ...opts });
  if (!r.ok) throw new Error(`${r.status} ${url}`);
  return r;
};

// Les 15 anciennes républiques soviétiques : le russe y reste utile, et ce qui marche pour la Russie vaut pour elles
const URSS = new Set('ARM AZE BLR EST GEO KAZ KGZ LVA LTU MDA RUS TJK TKM UKR UZB'.split(' '));
// Noms courants plus lisibles que ceux du jeu de données
const NOMS = { COD: 'République démocratique du Congo', PLW: 'Palaos', VNM: 'Vietnam', VAT: 'Vatican' };
// Pages du ministère dont l'adresse diffère du nom courant
const DIPLO = { COD: 'republique-democratique-du-congo', KGZ: 'kirghizstan', CZE: 'republique-tcheque', VNM: 'vietnam' };
// Pays où l'on conduit à gauche (usage général, à confirmer)
const GAUCHE = new Set('AUS BGD BTN BWA BRN CYP DMA SWZ FJI GRD GUY IND IDN IRL JAM JPN KEN KIR LSO MWI MYS MDV MLT MUS MOZ NAM NRU NPL NZL PAK PNG KNA LCA VCT WSM SYC SGP SLB ZAF LKA SUR TZA THA TLS TON TTO TUV UGA GBR ZMB ZWE ATG BHS BRB'.split(' '));

console.log('1/6 jeu de données des pays...');
const brut = await (await get('https://raw.githubusercontent.com/mledoze/countries/master/countries.json')).json();
// États indépendants du jeu de données (certains statuts sont débattus : Taïwan, Kosovo, Vatican...)
const pays = brut.filter((c) => c.independent === true);
console.log(`   ${pays.length} États`);

console.log('2/6 capitales en français (Wikidata)...');
const requete = 'SELECT ?iso ?capLabel WHERE { ?c wdt:P298 ?iso . ?c wdt:P36 ?cap . SERVICE wikibase:label { bd:serviceParam wikibase:language "fr,en". } }';
const capitales = {};
try {
  const j = await (await get('https://query.wikidata.org/sparql?format=json&query=' + encodeURIComponent(requete), { headers: { ...UA, Accept: 'application/sparql-results+json' } })).json();
  for (const b of j.results.bindings) (capitales[b.iso.value] ??= new Set()).add(b.capLabel.value);
} catch (e) {
  console.warn('   Wikidata indisponible, capitales en anglais :', e.message);
}

console.log('3/6 population (Banque mondiale)...');
const population = {};
try {
  const j = await (await get('https://api.worldbank.org/v2/country/all/indicator/SP.POP.TOTL?format=json&mrv=1&per_page=500', { headers: NAVIGATEUR })).json();
  for (const d of j[1] ?? []) if (d.value && d.countryiso3code) population[d.countryiso3code] = { valeur: d.value, annee: Number(d.date) };
} catch (e) {
  console.warn('   Banque mondiale indisponible :', e.message);
}

console.log('4/6 fuseaux horaires (IANA)...');
const zones = {};
try {
  const txt = await (await get('https://raw.githubusercontent.com/eggert/tz/main/zone.tab')).text();
  for (const l of txt.split('\n')) {
    if (!l || l.startsWith('#')) continue;
    const [cc, , tz] = l.split('\t');
    (zones[cc] ??= []).push(tz);
  }
} catch (e) {
  console.warn('   fuseaux indisponibles :', e.message);
}
// Décalage en heures par rapport à Paris à une date donnée (le même jour pour les deux villes)
const decalage = (tz, date) => {
  const off = (zone) => {
    const s = new Intl.DateTimeFormat('en', { timeZone: zone, timeZoneName: 'longOffset' }).formatToParts(date).find((p) => p.type === 'timeZoneName').value;
    const m = s.match(/GMT([+-])(\d{2}):(\d{2})/);
    return m ? (m[1] === '-' ? -1 : 1) * (Number(m[2]) + Number(m[3]) / 60) : 0;
  };
  return off(tz) - off('Europe/Paris');
};
const hiver = new Date('2026-01-15T12:00:00Z');
const ete = new Date('2026-07-15T12:00:00Z');

const frLangue = new Intl.DisplayNames(['fr'], { type: 'language' });
const frDevise = new Intl.DisplayNames(['fr'], { type: 'currency' });
const nomLangue = (code, anglais) => {
  try { const n = frLangue.of(code); if (n && n !== code) return n; } catch { /* repli sur le nom anglais */ }
  return anglais;
};
const REGIONS = { Europe: 'Europe', Asia: 'Asie', Africa: 'Afrique', Americas: 'Amériques', Oceania: 'Océanie', Antarctic: 'Antarctique' };
const SOUS_REGIONS = {
  'Northern Europe': 'Europe du Nord', 'Western Europe': 'Europe de l’Ouest', 'Eastern Europe': 'Europe de l’Est', 'Southern Europe': 'Europe du Sud', 'Central Europe': 'Europe centrale', 'South-Eastern Europe': 'Europe du Sud-Est', 'Southeast Europe': 'Europe du Sud-Est',
  'Northern Africa': 'Afrique du Nord', 'Western Africa': 'Afrique de l’Ouest', 'Eastern Africa': 'Afrique de l’Est', 'Middle Africa': 'Afrique centrale', 'Central Africa': 'Afrique centrale', 'Southern Africa': 'Afrique australe',
  'Western Asia': 'Asie de l’Ouest', 'Central Asia': 'Asie centrale', 'Eastern Asia': 'Asie de l’Est', 'South-Eastern Asia': 'Asie du Sud-Est', 'Southern Asia': 'Asie du Sud',
  'North America': 'Amérique du Nord', 'Central America': 'Amérique centrale', 'South America': 'Amérique du Sud', Caribbean: 'Caraïbes',
  Polynesia: 'Polynésie', Melanesia: 'Mélanésie', Micronesia: 'Micronésie', 'Australia and New Zealand': 'Australie et Nouvelle-Zélande',
};
const slugifier = (t) => t.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[’']/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

console.log('5/6 construction des fiches...');
const fiches = pays.map((c) => {
  const iso = c.cca3;
  const nom = NOMS[iso] ?? c.translations?.fra?.common ?? c.name.common;
  const tzs = zones[c.cca2] ?? [];
  const tous = [...tzs.map((z) => decalage(z, hiver)), ...tzs.map((z) => decalage(z, ete))];
  const caps = capitales[iso] ? [...capitales[iso]] : c.capital ?? [];
  const idd = c.idd?.root ? c.idd.root + (c.idd.suffixes?.length === 1 ? c.idd.suffixes[0] : '') : null;
  // La Micronésie utilise le dollar américain mais n'a pas de monnaie propre dans le jeu de données
  const devises = iso === 'FSM'
    ? [{ code: 'USD', nom: frDevise.of('USD'), symbole: '$' }]
    : Object.entries(c.currencies ?? {}).map(([code, d]) => ({ code, nom: frDevise.of(code) ?? d.name, symbole: d.symbol ?? code }));
  return {
    iso,
    iso2: c.cca2,
    slug: slugifier(nom),
    nom,
    nomOfficiel: c.translations?.fra?.official ?? c.name.official,
    capitales: caps,
    region: REGIONS[c.region] ?? c.region,
    sousRegion: SOUS_REGIONS[c.subregion?.trim()] ?? c.subregion ?? '',
    langues: Object.entries(c.languages ?? {}).map(([code, en]) => ({ code, nom: nomLangue(code, en) })),
    devises,
    indicatif: idd,
    conduiteAGauche: GAUCHE.has(iso),
    superficie: c.area ?? null,
    population: population[iso] ?? null,
    limitrophes: c.borders ?? [],
    enclave: !!c.landlocked,
    domaine: c.tld?.[0] ?? null,
    fuseaux: tous.length ? { min: Math.min(...tous), max: Math.max(...tous), nb: tzs.length } : null,
    latlng: c.latlng ?? null,
    emoji: c.flag ?? '',
    urss: URSS.has(iso),
    diplo: null,
  };
}).sort((a, b) => a.nom.localeCompare(b.nom, 'fr'));

// Doublons de slug éventuels
const vus = new Set();
for (const f of fiches) {
  if (vus.has(f.slug)) f.slug = `${f.slug}-${f.iso.toLowerCase()}`;
  vus.add(f.slug);
}

console.log('6/6 adresses du ministère et drapeaux...');
mkdirSync('public/drapeaux', { recursive: true });
mkdirSync('src/data/monde', { recursive: true });
// Le site du ministère n'utilise pas toujours le nom courant ; on essaie quelques variantes
const variantes = (f) => {
  if (DIPLO[f.iso]) return [DIPLO[f.iso]];
  const b = slugifier(f.nom);
  return [...new Set([b, slugifier(f.nomOfficiel.replace(/^(République|Royaume|Fédération|État|Etat|Principauté|Émirat|Sultanat|Union)( (de|du|des|d’|d')? ?)?/i, '')), b.replace(/^(le|la|les)-/, '')])];
};
const verifier = async (f) => {
  for (const v of variantes(f)) {
    const url = `https://www.diplomatie.gouv.fr/fr/information-par-pays/${v}/conseils-aux-voyageurs-securite`;
    try {
      const r = await fetch(url, { headers: NAVIGATEUR, redirect: 'follow', signal: AbortSignal.timeout(15_000) });
      if (r.ok) {
        f.diplo = { slug: v, securite: url, entree: `https://www.diplomatie.gouv.fr/fr/information-par-pays/${v}/conseils-aux-voyageurs-entree-sejour` };
        return;
      }
    } catch { /* variante suivante */ }
  }
};
const telecharger = async (f) => {
  const fichier = `public/drapeaux/${f.iso.toLowerCase()}.svg`;
  if (existsSync(fichier)) return;
  try {
    const svg = await (await get(`https://raw.githubusercontent.com/mledoze/countries/master/data/${f.iso.toLowerCase()}.svg`)).text();
    writeFileSync(fichier, svg);
  } catch (e) {
    console.warn(`   drapeau ${f.iso} : ${e.message}`);
  }
};
// Quelques requêtes à la fois pour ne pas surcharger les serveurs
const lots = (liste, n) => Array.from({ length: Math.ceil(liste.length / n) }, (_, i) => liste.slice(i * n, i * n + n));
for (const lot of lots(fiches, 8)) await Promise.all(lot.flatMap((f) => [verifier(f), telecharger(f)]));

writeFileSync('src/data/monde/pays.json', JSON.stringify(fiches, null, 1) + '\n');
const sansDiplo = fiches.filter((f) => !f.diplo).map((f) => f.nom);
console.log(`${fiches.length} fiches enregistrées ; adresse ministère trouvée pour ${fiches.length - sansDiplo.length}.`);
if (sansDiplo.length) console.log('Sans adresse du ministère (lien générique) :', sansDiplo.join(', '));
