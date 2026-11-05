// Importe les rubriques « Sécurité », « Entrée / séjour » et « Santé » des fiches du ministère français
// (diplomatie.gouv.fr, licence Etalab 2.0 : réutilisation libre avec mention de la source et de la date).
// Sortie : src/data/monde/officiel.json (généré, ne pas éditer à la main). Usage : node scripts/importer-fiches-officielles.mjs [--seulement=utiles,contacts] [ISO ...]
import fs from 'node:fs';

const SORTIE = new URL('../src/data/monde/officiel.json', import.meta.url);
const PAYS = JSON.parse(fs.readFileSync(new URL('../src/data/monde/pays.json', import.meta.url), 'utf8'));
const RUBRIQUES = { securite: 'conseils-aux-voyageurs-securite', entree: 'conseils-aux-voyageurs-entree-sejour', sante: 'conseils-aux-voyageurs-sante', utiles: 'conseils-aux-voyageurs-informations-utiles', contacts: 'conseils-aux-voyageurs-contacts-utiles', affaires: 'conseils-aux-voyageurs-voyages-d-affaires' };

const nettoyer = (t) =>
  t.replace(/&nbsp;|&#160;/g, ' ').replace(/&#0?39;|&rsquo;|&apos;/g, '’').replace(/&amp;/g, '&').replace(/&quot;/g, '"')
    .replace(/&laquo;/g, '«').replace(/&raquo;/g, '»').replace(/&eacute;/g, 'é').replace(/&egrave;/g, 'è').replace(/&agrave;/g, 'à')
    .replace(/&[a-z]+;/g, ' ').replace(/\s+/g, ' ').trim();

// Découpe la page en sections : [{ t: titre, l: [{ k: 'p' | 'li', x: texte }] }] et date de mise à jour
export function lire(html) {
  const main = html.slice(Math.max(0, html.indexOf('<main')))
    .replace(/<script[\s\S]*?<\/script>/g, '').replace(/<style[\s\S]*?<\/style>/g, '');
  const maj = (main.match(/Date de mise à jour le\s*:\s*([^<\n]+?)\s*(?:<|\n)/) || [])[1]?.trim() ?? '';
  const debut = main.indexOf('Quelle est la portée des Conseils aux Voyageurs');
  if (debut < 0) return null;
  let corps = main.slice(debut);
  const fin = corps.indexOf('Vous voyagez à l', 200);
  if (fin > 0) corps = corps.slice(0, fin);
  // Les blocs d'annonce du site et les encadrés vides disparaissent
  const jetons = corps
    .replace(/<(h[1-6])[^>]*>/g, '\n@@H@@')
    .replace(/<\/h[1-6]>/g, '\n')
    .replace(/<li[^>]*>/g, '\n@@LI@@')
    .replace(/<\/(p|div|ul|ol|section|article)>/g, '\n')
    .replace(/<br\s*\/?>/g, ' ')
    .replace(/<[^>]+>/g, '')
    .split('\n').map((l) => l.trim()).filter(Boolean);
  const sections = [];
  let cour = null;
  let titreEnAttente = false;
  for (const l of jetons) {
    if (l.startsWith('@@H@@')) {
      const t = nettoyer(l.slice(5));
      if (t) { cour = { t, l: [] }; sections.push(cour); titreEnAttente = false; } else titreEnAttente = true;
      continue;
    }
    const li = l.startsWith('@@LI@@');
    const x = nettoyer(li ? l.slice(6) : l);
    if (!x || x.length < 3) continue;
    if (titreEnAttente) { cour = { t: x, l: [] }; sections.push(cour); titreEnAttente = false; continue; }
    if (!cour) { cour = { t: '', l: [] }; sections.push(cour); }
    cour.l.push({ k: li ? 'li' : 'p', x });
  }
  const utiles = sections.filter((s) => s.l.length && !/^(Vérifiez que vous|Quelle est la portée)/.test(s.t));
  return { maj, s: utiles };
}

const attendre = (ms) => new Promise((r) => setTimeout(r, ms));
async function telecharger(url) {
  for (let i = 0; i < 3; i++) {
    try {
      const r = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (guide de voyage, import ponctuel)' }, signal: AbortSignal.timeout(30000) });
      if (r.status === 404) return null;
      if (r.ok) return await r.text();
    } catch { /* nouvel essai */ }
    await attendre(1500 * (i + 1));
  }
  return null;
}

if (process.argv[1] && process.argv[1].endsWith('importer-fiches-officielles.mjs')) {
  const seul = (process.argv.find((a) => a.startsWith("--seulement=")) || "").slice(12).split(",").filter(Boolean);
  const filtre = process.argv.slice(2).filter((a) => !a.startsWith("--"));
  const existant = fs.existsSync(SORTIE) ? JSON.parse(fs.readFileSync(SORTIE, 'utf8')) : {};
  const cibles = PAYS.filter((p) => p.diplo && (!filtre.length || filtre.includes(p.iso)));
  let fait = 0;
  const file = [...cibles];
  const ouvrier = async () => {
    while (file.length) {
      const p = file.shift();
      const sortie = {};
      for (const [cle, fin] of Object.entries(RUBRIQUES)) {
        if (seul.length && !seul.includes(cle)) continue;
        const html = await telecharger(`https://www.diplomatie.gouv.fr/fr/information-par-pays/${p.diplo.slug}/${fin}`);
        const l = html ? lire(html) : null;
        if (l && l.s.length) sortie[cle] = l;
        await attendre(300);
      }
      existant[p.iso] = { ...(existant[p.iso] || {}), ...sortie };
      fait++;
      console.log(`${fait}/${cibles.length} ${p.iso} ${Object.keys(sortie).join(',') || 'RIEN'}`);
    }
  };
  await Promise.all([ouvrier(), ouvrier(), ouvrier(), ouvrier()]);
  const tri = Object.fromEntries(Object.entries(existant).sort(([a], [b]) => a.localeCompare(b)));
  fs.writeFileSync(SORTIE, JSON.stringify(tri));
  console.log('écrit', Object.keys(tri).length, 'pays');
}
