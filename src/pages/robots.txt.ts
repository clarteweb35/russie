import type { APIRoute } from 'astro';

// robots.txt généré : l'adresse du sitemap suit le domaine et le préfixe de déploiement (voir astro.config.mjs)
export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const corps = `User-agent: *\nAllow: /\n\nSitemap: ${new URL(`${base}/sitemap.xml`, site).href}\n`;
  return new Response(corps, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
