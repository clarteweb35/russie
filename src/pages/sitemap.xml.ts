import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { sections, pagesLegales, pagesEditoriales, outils, url } from '../config';
import { lecons } from '../data/lecons.js';
import { paysComplets } from '../data/pays';
import { monde } from '../data/monde';
import { BUDGETS } from '../data/budget-voyage';
import { aEssentiel } from '../data/pays/essentiel';

// Plan du site généré depuis les données (rubriques, leçons, pays) : aucune adresse n'est écrite à la main.
export const GET: APIRoute = async ({ site }) => {
  const bonsPlans = await getCollection('bons-plans');
  const guides = await getCollection('guides');
  const chemins = [
    '/',
    // Voyages Malins : la page des bons plans n'est listée que s'il y a des offres (sinon elle est en noindex)
    ...pagesEditoriales.map((e) => e.href).filter((h) => h !== '/bons-plans' || bonsPlans.length > 0),
    // La page budget n'est listée que si au moins une destination a une estimation (sinon elle est en noindex)
    ...outils.map((o) => o.href).filter((h) => h !== '/outils/budget-voyage' || Object.keys(BUDGETS).length > 0),
    ...bonsPlans.map((o) => `/bons-plans/${o.id}`),
    ...guides.map((g) => `/guides/${g.id}`),
    // Russie : page du pays, rubriques, leçons
    '/pays/russie',
    ...sections.map((s) => s.href),
    ...lecons.map((l) => `/lecons/${l.slug}`),
    ...pagesLegales.map((p) => p.href),
    // Tous les autres pays du monde (une page chacun), avec leur version essentielle quand les fiches officielles existent
    ...monde.filter((p) => p.iso !== 'RUS' && aEssentiel(p.iso)).map((p) => `${p.href}/essentiel`),
    ...monde.filter((p) => p.iso !== 'RUS').map((p) => p.href),
    // Sous-pages des guides détaillés
    ...paysComplets.flatMap((p) => [
      `/pays/${p.slug}/sources`,
      ...(p.lecons.length > 0 ? [`/pays/${p.slug}/lecons`] : []),
      ...p.rubriques.map((r) => `/pays/${p.slug}/${r.slug}`),
      ...p.lecons.map((l) => `/pays/${p.slug}/lecons/${l.slug}`),
    ]),
  ];
  const lignes = [...new Set(chemins)].map((p) => `  <url><loc>${new URL(url(p === '/' ? p : `${p}/`), site).href}</loc></url>`);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${lignes.join('\n')}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
