import type { APIRoute } from 'astro';
import { sections, pagesLegales, url } from '../config';
import { lecons } from '../data/lecons.js';
import { paysComplets } from '../data/pays';

// Plan du site généré depuis les rubriques et les leçons (source unique : config.ts et lecons.js).
export const GET: APIRoute = ({ site }) => {
  const chemins = ['/', ...sections.map((s) => s.href), ...pagesLegales.map((p) => p.href), ...lecons.map((l) => `/lecons/${l.slug}`), '/pays', ...paysComplets.flatMap((p) => [`/pays/${p.slug}`, `/pays/${p.slug}/sources`, `/pays/${p.slug}/lecons`, ...p.rubriques.map((r) => `/pays/${p.slug}/${r.slug}`), ...p.lecons.map((l) => `/pays/${p.slug}/lecons/${l.slug}`)])];
  const lignes = [...new Set(chemins)].map((p) => `  <url><loc>${new URL(url(p === "/" ? p : `${p}/`), site).href}</loc></url>`);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${lignes.join('\n')}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
