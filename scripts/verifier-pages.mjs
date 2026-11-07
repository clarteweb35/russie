// Vérifie, sur le site construit (dist/), les règles du projet qu'aucun compilateur ne contrôle :
// consentement, balises obligatoires, images, liens externes, liens affiliés. Lancé par `npm test`.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';

function pages(dir) {
  return readdirSync(dir).flatMap((nom) => {
    const chemin = join(dir, nom);
    return statSync(chemin).isDirectory() ? pages(chemin) : chemin.endsWith('.html') ? [chemin] : [];
  });
}

const erreurs = [];
const liste = pages(DIST).filter((p) => !/[\\/]demo-/.test(p)); // maquettes locales exclues
const ajoute = (page, msg) => erreurs.push(`${page} : ${msg}`);

for (const page of liste) {
  const html = readFileSync(page, 'utf8');
  // Redirections générées (<meta http-equiv="refresh">) : pas de contenu à contrôler
  if (/http-equiv="refresh"/i.test(html) && !/<h1[\s>]/i.test(html)) continue;

  // Balises obligatoires (référencement, accessibilité)
  if (!/<html[^>]*\slang="fr"/i.test(html)) ajoute(page, 'attribut lang="fr" absent');
  if (!/<title>[^<]{3,}<\/title>/i.test(html)) ajoute(page, '<title> absent ou vide');
  if (!/<meta[^>]+name="description"[^>]+content="[^"]{20,}"/i.test(html)) ajoute(page, 'meta description absente ou trop courte');
  const h1 = (html.match(/<h1[\s>]/gi) ?? []).length;
  if (h1 !== 1) ajoute(page, `${h1} balise(s) <h1> (une seule attendue)`);

  // Consentement : aucune balise de mesure d'audience dans le HTML (src/href, noscript compris). Le script consentement.ts
  // la crée seulement après acceptation ; son code, lui, contient légitimement l'adresse de GTM.
  if (/(?:src|href)="[^"]*(?:googletagmanager|google-analytics)/i.test(html)) ajoute(page, 'balise Google Tag Manager / Analytics dans le HTML (doit rester derrière le consentement)');

  // Pas de script externe
  for (const [, src] of html.matchAll(/<script[^>]+src="(https?:[^"]+)"/gi)) ajoute(page, `script externe : ${src}`);

  // Images : alt obligatoire (vide pour une illustration décorative)
  for (const [balise] of html.matchAll(/<img\b[^>]*>/gi)) {
    if (!/\salt=/.test(balise)) ajoute(page, `image sans attribut alt : ${balise.slice(0, 80)}`);
  }

  // Liens externes : rel="noopener" ; liens affiliés (rel sponsored) : noopener aussi
  for (const [, attrs] of html.matchAll(/<a\b([^>]*\shref="https?:\/\/[^"]+"[^>]*)>/gi)) {
    const rel = /\srel="([^"]*)"/.exec(attrs)?.[1] ?? '';
    const cible = /\shref="([^"]+)"/.exec(attrs)?.[1];
    if (/_blank/.test(attrs) && !/noopener/.test(rel)) ajoute(page, `lien externe sans rel="noopener" : ${cible}`);
    if (/sponsored/.test(rel) && !/noopener/.test(rel)) ajoute(page, `lien affilié sans rel="sponsored noopener" : ${cible}`);
  }
}

if (erreurs.length) {
  console.error(`${erreurs.length} problème(s) dans les pages construites :\n` + erreurs.slice(0, 40).join('\n'));
  process.exit(1);
}
console.log(`Règles de pages OK (${liste.length} pages vérifiées).`);
