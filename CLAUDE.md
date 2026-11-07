# CLAUDE.md

Guide Russie : site statique Astro 5, en français. Spécification fonctionnelle : [.ai/SPEC_FONCTIONNALITES.md](.ai/SPEC_FONCTIONNALITES.md). La lire avant tout changement de contenu ou de fonctionnalité.

Principes d'architecture (SSOT, DRY, KISS) et règles de contenu détaillés : [.ai/SYSTEM_PROMPT.md](.ai/SYSTEM_PROMPT.md).

État du projet, chantiers et actions restantes : [.ai/AVANCEMENT.md](.ai/AVANCEMENT.md). Le mettre à jour à la fin de chaque session.

## Commandes

```bash
npm install
npm run dev -- --host 127.0.0.1 --port 4321   # http://127.0.0.1:4321/russie/
npm run build                                 # doit passer avant tout push
```

Le site est servi sous `/russie/` en local comme en production (`base` dans `astro.config.mjs`). `http://127.0.0.1:4321/` seul renvoie une 404.

## Structure

- `src/layouts/Base.astro` : layout unique (en-tête, menu, bandeau de sécurité, ligne de crédibilité, pied de page, scripts d'animation).
- `src/config.ts` : `NOM_SITE` (nom affiché en en-tête), `MENTION_IA`/`legendeIA()` (images IA), `pagesLegales` (pied de page, sitemap), `sections` (menu, cartes, sitemap), `LAST_CHECK` (date globale), `VERIFICATIONS` (date propre à une page), `url()`.
- `src/pages/index.astro` : accueil = choix de destination (194 pays, recherche, régions). L'ancien accueil russe est `src/pages/pays/russie/index.astro`.
- `src/data/villes/<pays>.json` : villes à connaître (générées par `scripts/villes.mjs`, workflow mensuel). `src/content/` : bons plans et guides (Content Collections, `src/content.config.ts`). `src/data/bagages.ts`, `budget-voyage.ts`, `quand-partir.json` (import par `scripts/importer-quand-partir.mjs`) alimentent les pages `src/pages/outils/` et les blocs `OutilsPays`, `CalendrierPays`.
- `src/data/monde/` (dont `ALIAS` : sigles et autres noms reconnus par la recherche de l'accueil, USA, RDC…) : les 194 États (`pays.json` généré par `scripts/importer-monde.mjs`, ne pas éditer à la main), `index.ts` (aides, `contextePays`), `devises.ts` (facilité d'obtention, à confirmer), `drapeaux.ts` (significations). Drapeaux SVG : `public/drapeaux/<iso3>.svg`.
- Composants pays : `FicheIdentite`, `BlocDevise`, `BlocRusse` (ex-URSS), `PhotosPays` (photos déposées dans `src/assets/pays/<slug>/`, voir le LISEZMOI du dossier).
- `src/pages/*.astro` : une page par rubrique. `lecons/[slug].astro` génère les leçons depuis `src/data/lecons.ts`.
- `src/components/` : `Alert`, `Badge` (à utiliser pour tout encadré ou pastille, jamais le HTML en dur), `Quiz`, `Convertisseur`.
- `src/data/pays/` : `fiches/` (un fichier par pays rédigé, `finlande.ts`... : **repris automatiquement par `index.ts`**, aucune liste à tenir), `complements/` (moyens de paiement, banque, logement : `regions/*.ts` repris automatiquement, `outils.ts` = aides de rédaction), le modèle de données `types.ts`, le registre `index.ts`, `verifier.ts` (contrôle des données **à chaque build** : ISO et slug uniques, badge « Vérifié » sans source refusé, URL de source valide) et les aides communes `aides.ts` (`diplo()`, `aDocumenter()`, `securiteALire()`...). Suivi pays par pays : `.ai/AVANCEMENT_PAYS.md`. Un pays « bientôt » y figure avec `complet: false`.
- `src/pages/pays/` : les pages de tous les guides pays (accueil, rubriques, sources, leçons), générées depuis le registre. Ne jamais copier une page par pays.
- `src/components/` : aussi `VmHeader` / `VmFooter` (en-tête et pied de page de la marque), `FilArianeService`, `VillesPays`, `BonsPlansPays`, `Sections` (rend le contenu d'un pays), `LeconDetail` et `ListeLecons` (leçons de la Russie et des pays).
- Fiches officielles : `scripts/importer-fiches-officielles.mjs` récupère sécurité, entrée, santé, informations utiles et contacts du ministère (diplomatie.gouv.fr) dans `src/data/monde/officiel.json` (généré, ne pas éditer) ; `src/data/pays/officiel.ts` les injecte dans tous les guides. À relancer pour actualiser (mise à jour mensuelle conseillée).
- `src/scripts/` : scripts navigateur (`lecon.ts` : audio et quiz).
- `.github/workflows/` : `deploy.yml` (tests puis GitHub Pages), `actualites.yml` (hebdomadaire), `fiches-officielles.yml` (mensuel), `villes.yml` (mensuel), `bons-plans.yml` (manuel).
- `src/pages/demo-*.astro` : maquettes locales de travail, non publiées : ne pas les commiter. Les anciennes maquettes sont dans `maquettes/` (hors site).
- `scripts/bons-plans/` : collecte des flux Awin (`flux.mjs` = liste des flux, un secret chacun), génération des articles, règles de prix ; testé par `verifier-collecte.mjs`. `scripts/` (racine) : outils de développement (`verifier-liens.mjs` et `verifier-pages.mjs` (lancés par `npm test` : liens internes, puis h1/title/description/alt, aucune balise GTM hors consentement, pas de script externe, `rel` des liens externes et affiliés), `optimiser-images.mjs`, `actualites.mjs` (topo hebdomadaire, voir `.ai/AVANCEMENT.md`), `convertir-image.mjs` pour toute nouvelle image, avec recadrage optionnel `x,y,largeur,hauteur`).
- `src/styles/global.css` : liste ordonnée d'`@import` (l'ordre est celui de la cascade) vers `base.css` (variables CSS, thème sombre, en-tête), `pages.css`, `lecons.css`, `navigation.css`, `monde.css`, `outils.css`, `services.css`. Ajouter un style dans le fichier du thème concerné. `bons-plans.css` couvre les bons plans, les astuces et les guides : **une seule feuille pour tout le site**, mêmes variables partout. Les pages bons plans et guides passent par `Base.astro` comme les autres (en-tête, consentement, pied de page communs) ; ne jamais recréer d'en-tête ni de feuille de style à part.
- `public/` : fichiers servis tels quels (images). Pas de copie des images à la racine du projet.

## Règles à respecter

1. **Liens internes** : toujours `href={url('/chemin')}`, jamais `href="/chemin"`. Sinon ils cassent sous `/russie/`. Importer `url` depuis `config` (`'../config'`, ou `'../../config'` dans `lecons/`).
2. **Nouvelle rubrique** : l'ajouter dans `sections` de `config.ts` ; le menu et l'accueil suivent.
3. **Contenu sensible** (droit, argent, sécurité, santé) : toujours un badge `Vérifié` ou `À confirmer`, et une source en bas de section (`<p class="src">`). Ne jamais présenter comme certain ce qui n'a pas été confirmé par une source récente. Les sources commerciales doivent être signalées comme telles. Un chiffre sans source est marqué « Estimation non vérifiée ».
4. **Avertissement de sécurité** : ne pas le retirer ni l'affaiblir (bandeau dans `Base.astro`, encadré sur l'accueil, texte complet dans `/voyager#securite`).
5. **Ton** : français, **vouvoiement**, phrases courtes. Les textes du site ont été écrits au tutoiement : les passer au vouvoiement page par page (voir AVANCEMENT). Les nouveaux textes sont écrits au vouvoiement.
6. **Affiliation** : tout lien affilié est signalé comme tel, avec `rel="sponsored noopener"`. Aucun faux partenaire en attendant de vrais liens.
7. **Pas de ressource externe** inutile : polices système, pas de CDN. Appels externes autorisés aujourd'hui : le convertisseur (Banque de Russie, repli ExchangeRate-API) depuis le navigateur ; l'API Gemini, uniquement depuis la tâche hebdomadaire (jamais depuis le navigateur du visiteur, clé en secret de dépôt). **En place depuis le 7 novembre 2026** : Google Tag Manager (`GTM_ID` dans `config.ts`, conteneur `GTM-K6DKPJXN`), uniquement après acceptation du bandeau de consentement (`src/scripts/consentement.ts`, voir Conventions). Aucun autre traceur.
8. **Animations** : doivent rester désactivables (`prefers-reduced-motion`) et ne jamais cacher le contenu sans JavaScript (classe `.js` posée par `Base.astro`).
9. **Images** : mettre dans `public/img/`, WebP, moins de 300 Ko. **Toute image générée par IA** porte la mention dans `alt` et `title` via `legendeIA()` de `config.ts` (jamais en dur) ; le texte alternatif décrit l'image.
10. **Dates** : `LAST_CHECK` et `VERIFICATIONS` ne sont mises à jour qu'après une vraie vérification des sources.
11. **Ajouter un pays** : créer `src/data/pays/fiches/<pays>.ts` (type `PaysComplet`, une seule exportation) ; le registre le reprend seul et `verifier.ts` refuse un doublon. S'il figurait dans `monde-guides.ts`, retirer sa ligne là. Menu, sitemap, sources et pages suivent tout seuls. Compléments de paiement, banque et logement : ajouter l'ISO dans un fichier de `complements/regions/`. Le contenu va dans les données, pas dans des pages. Un nouveau pays démarre en `test: true` (bandeau « fiche en test ») jusqu'à relecture, fournit sa liste `mediasLocaux`, et doit être ajouté à `scripts/actualites-pays.json`. Liste des pays envisagés : `.ai/PAYS_PREVUS.md`. **Exception** : les pays sans rédaction propre sont générés par `src/data/pays/monde-guides.ts` (une ligne par pays ; formalités d’entrée dans `monde-entrees.ts`, une entrée n’étant ajoutée qu’après vérification) ; un pays d’Europe peut utiliser `guideEurope()` (`europe.ts`). Les leçons sont facultatives (`lecons: []`). Mêmes règles de fiabilité que pour la Russie : une section sans source fiable est marquée `À documenter` plutôt que remplie de chiffres inventés.

## Conventions

- Langue : français (UI, commentaires, docs). Vouvoiement dans l'interface.
- Style : CSS dans `global.css` et blocs `<style>` de composants Astro ; JS vanilla, **aucune librairie ni dépendance ajoutée** ; animations en CSS pur, désactivées si l'utilisateur demande de réduire les animations.
- Accessibilité : conserver `aria-*`, `role`, `alt` (texte alternatif explicite pour les photos, vide pour les illustrations décoratives), liens externes en `rel="noopener"`.
- Performance (**EcoIndex : mesure à refaire depuis l'ajout du bandeau de consentement et des nouveaux blocs**) : garder les scores PageSpeed (99-100) et **EcoIndex : B (80/100, mesure du 26/10, 337 éléments) accepté par l'éditeur ; seuil du A = ~330 éléments sur l'accueil, à ne pas chercher au prix des fonctionnalités** (compter les balises avant de grossir la page ; les bandeaux défilants doublent leur contenu) ; pas d'image ni de script externe, **sauf Google Tag Manager (`GTM-K6DKPJXN`, qui porte Google Analytics), chargé uniquement après acceptation du bandeau de consentement** (jamais d'office : ne pas coller la balise GTM ni gtag brute dans les pages, ni son `noscript`, qui chargerait sans consentement) ; hauteurs fixes pour les bandeaux animés (pas de décalage de mise en page).
- Commentaires de code courts, en français, qui expliquent le pourquoi.

## Règles de travail (à respecter à chaque intervention)

### Avant de commencer
- **Reprise de session** : au début de chaque session, lire [.ai/AVANCEMENT.md](.ai/AVANCEMENT.md) (où on en est, prochaine action). Le mettre à jour à la fin de chaque étape.
- **Architecture** : avant toute implémentation, lire [.ai/SYSTEM_PROMPT.md](.ai/SYSTEM_PROMPT.md) (il suffit, pas de second fichier d'architecture).
- **Agents** : ne jamais lancer de sous-agents ni de workflow multi-agents sans me demander d'abord. Obligatoire, sans exception.
- **Niveaux d'action** : je préfixe ma demande par un tag. Sans tag, appliquer `[strict]`.
  - `[consultatif]` : ne modifie aucun fichier. Explique ce que tu ferais et attends ma validation.
  - `[strict]` : avant de coder, dis quoi, pourquoi, comment, et dans quels fichiers. Puis code.
  - `[rapide]` : code directement, explication minimale. Interdit de toucher à l'architecture (découpage des fichiers, dépendances, build, déploiement). Si le changement l'exige, arrête-toi et repasse en `[strict]`.
- **Travaux en cours** : dès qu'une action commence (avant de modifier le moindre fichier), l'inscrire dans la section « Travaux en cours » en bas de [.ai/SPEC_FONCTIONNALITES.md](.ai/SPEC_FONCTIONNALITES.md) : date, objectif, fichiers concernés, étapes faites / restantes, mises à jour au fil de l'eau. La retirer une fois l'action terminée et mise en ligne. But : ne rien perdre si l'intervention plante.

### Pendant
- **Explications** : codeur novice, ne pas être trop technique.
- **Pièges Windows / shell** : dans un `node -e "…"` ou un heredoc non protégé, les **accents graves (backticks) sont interprétés par le shell** ; écrire les scripts dans un fichier ou utiliser les outils Write/Edit. Une apostrophe dans une chaîne `'…'` casse un fichier de test.
- **Serveur de développement obsolète** : après des modifications faites en ligne de commande (`sed -i`), le serveur peut continuer à servir l'ancien CSS (drapeau absent, styles manquants). Le relancer ; le site publié n'est pas concerné. Pour vérifier un rendu fiable : `npm run build` puis `npx astro preview`.
- **Vérification visuelle** quand c'est possible : `npx astro preview` puis Chrome en mode sans interface (`chrome --headless=new --screenshot=… http://localhost:…/`). Largeur minimale sous Chrome sans interface : 500 px.

### Après
- **Spec** : après tout ajout ou modification de contenu ou de fonctionnalité visible par un visiteur (y compris le style de l'article ou du site), mettre à jour [.ai/SPEC_FONCTIONNALITES.md](.ai/SPEC_FONCTIONNALITES.md) dans la même intervention. Ne pas documenter les refactos internes sans impact visible.
- **Mise en ligne** : vérifier avec `npm test` (construit le site puis vérifie les liens internes), puis **commiter et pousser sur `main` directement, sans redemander**. Ne pas pousser si les tests échouent.
  - Un commit par demande, message court en français.
  - `git add` nominatif, jamais `git add -A` : d'autres modifications en attente peuvent exister, les laisser telles quelles.
  - `git pull --rebase` avant le push. Le push déclenche le déploiement GitHub Pages.
  - Retirer l'entrée de « Travaux en cours » dans le même commit.
