// Vérifie que chaque lien interne du site construit (dist/) pointe vers un fichier qui existe.
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';
// Même règle que astro.config.mjs : sous /russie sauf si le domaine propre est défini
const BASE = process.env.DOMAINE ? '' : '/russie';

function pages(dir) {
  return readdirSync(dir).flatMap((nom) => {
    const chemin = join(dir, nom);
    return statSync(chemin).isDirectory() ? pages(chemin) : chemin.endsWith('.html') ? [chemin] : [];
  });
}

const erreurs = [];
for (const page of pages(DIST)) {
  const html = readFileSync(page, 'utf8');
  for (const [, lien] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (!lien.startsWith(BASE + '/') && lien !== BASE) {
      if (lien.startsWith('/')) erreurs.push(`${page} : lien sans /russie/ -> ${lien}`);
      continue;
    }
    const chemin = lien.slice(BASE.length).split('#')[0].split('?')[0] || '/';
    const cible = join(DIST, chemin);
    const ok = existsSync(cible) && (!statSync(cible).isDirectory() || existsSync(join(cible, 'index.html')));
    if (!ok) erreurs.push(`${page} : lien cassé -> ${lien}`);
  }
}

if (erreurs.length) {
  console.error(`${erreurs.length} problème(s) de liens :\n` + erreurs.join('\n'));
  process.exit(1);
}
console.log(`Liens internes OK (${pages(DIST).length} pages vérifiées).`);
