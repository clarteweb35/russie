import type { APIRoute } from 'astro';
import { sections, pagesLegales, url } from '../config';
import { lecons } from '../data/lecons.js';
import { paysComplets } from '../data/pays';
import { monde } from '../data/monde';

// Plan du site généré depuis les données (rubriques, leçons, pays) : aucune adresse n'est écrite à la main.
export const GET: APIRoute = ({ site }) => {
  const chemins = [
    '/',
    // Russie : page du pays, rubriques, leçons
    '/pays/russie',
    ...sections.map((s) => s.href),
    ...lecons.map((l) => `/lecons/${l.slug}`),
    ...pagesLegales.map((p) => p.href),
    // Tous les autres pays du monde (une page chacun)
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
