# Voyage Malin : guide des pays du monde

Site statique d'information en français sur 194 pays (voyager, vivre, travailler, apprendre la langue), avec un guide historique sur la Russie, construit avec [Astro](https://astro.build) et publié sur GitHub Pages : https://voyagesmalins.fr (l'ancienne adresse https://clarteweb35.github.io/russie/ redirige).

## Démarrer

```bash
npm install
npm run dev -- --host 127.0.0.1 --port 4321   # http://127.0.0.1:4321/russie/
npm test                                      # construit le site et vérifie les liens internes
```

En production : https://voyagesmalins.fr (variable de dépôt `DOMAINE`). En local, sans `DOMAINE`, le site est servi sous `/russie/`.

## Organisation

- `src/pages/` : une page par rubrique (`lecons/[slug].astro` génère les leçons).
- `src/components/` : `Alert`, `Badge`, `Quiz`, `Convertisseur`.
- `src/config.ts` : rubriques, date de vérification, fonction `url()`.
- `src/data/lecons.ts` : contenu des leçons.
- `scripts/` : outils (`verifier-liens.mjs`, `verifier-pages.mjs`, `optimiser-images.mjs`).
- `.ai/` : spécification, principes d'architecture et suivi d'avancement. Voir aussi `CLAUDE.md`.

## Déploiement

Chaque push sur `main` lance `.github/workflows/deploy.yml` : `npm test`, puis publication sur GitHub Pages.
