import { defineConfig } from 'astro/config';

// Par défaut : GitHub Pages, https://clarteweb35.github.io/russie/
// Quand le nom de domaine est transféré : définir la variable de dépôt DOMAINE (ex. www.voyagesmalins.fr),
// plus le « Custom domain » dans Réglages > Pages. Le site passe alors à la racine, sans toucher au code.
const domaine = process.env.DOMAINE;
export default defineConfig(
  domaine
    ? { site: `https://${domaine}`, base: '/' }
    : { site: 'https://clarteweb35.github.io', base: '/russie' },
);
