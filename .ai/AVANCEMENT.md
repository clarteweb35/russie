# Avancement : Guide Russie

Dernière mise à jour : 4 novembre 2026. Ce fichier est mis à jour à la fin de chaque session de travail.

**Production** : https://clarteweb35.github.io/russie/ (déploiement automatique à chaque push sur `main`)
**Note d'architecture** : 74 / 100 (détail dans `.ai/SPEC_FONCTIONNALITES.md`, §6)

## En cours

| Chantier | État | Remarque |
|---|---|---|
| Mise en ligne des derniers ajouts | **À pousser** | Les pages Paiements, la section SIM, le convertisseur, les illustrations d'accueil et les fichiers `.ai/` + `CLAUDE.md` sont faits localement mais **pas encore sur GitHub** (2 commits poussés seulement). |
| Page Paiements (compte en Géorgie) | Rédigée, à valider | Chiffres du budget sans source officielle (marqués « Estimation non vérifiée »). Sources = blogs de prestataires. |
| Section SIM sur `/voyager#sim` | Rédigée, à valider | Étapes exactes (lieu, documents, traduction) non confirmées. Statut du projet de loi d'août 2026 à vérifier. |
| Affiliation | **Préparée, inactive** | Section « Partenaires » en place sur `/paiements`. Aucun lien réel pour l'instant. |

## Réalisé

### Contenu et fonctionnalités
- [x] 8 pages : accueil, voyager, vivre, travailler, paiements, langue & culture, leçons (6 + liste), sources.
- [x] Système de confiance : badges `Vérifié` / `À confirmer`, sources en bas de section, ligne « Vérifié le … » sous chaque titre.
- [x] Avertissement de sécurité : bandeau sur toutes les pages, encadré sur l'accueil.
- [x] 6 leçons de russe avec audio (synthèse vocale), lecture lente, « Tout écouter » et quiz d'écoute.
- [x] Convertisseur EUR ⇄ RUB (taux de la Banque de Russie, repli sur un second service).
- [x] Accueil par parcours, avec illustrations transparentes et effet au survol.
- [x] Photos sur les 6 cartes de leçons (WebP, 10 à 51 Ko, zoom au survol).

### Design et accessibilité
- [x] Refonte complète du design (sobre, crème et rouge, serif pour les titres), mode sombre automatique.
- [x] Animations douces : apparition au défilement, barre de progression, transitions entre pages, respect de `prefers-reduced-motion`.
- [x] Menu hamburger sur mobile, lien « Aller au contenu ».

### Architecture et outillage
- [x] `config.ts` : source unique pour les rubriques, la date de vérification et `url()`.
- [x] Correction du bug de la page d'accueil (copie cassée de la liste des leçons).
- [x] Dépôt Git, `.gitignore`, GitHub Actions, GitHub Pages en ligne.
- [x] Liens indépendants du sous-dossier `/russie`.
- [x] Fichiers d'instructions : `CLAUDE.md`, `.ai/SPEC_FONCTIONNALITES.md`, `.ai/SYSTEM_PROMPT.md`.

## Actions à mener

### Priorité 1 : tout de suite
1. [ ] Lancer `npm run build`, puis commit et push des travaux non poussés (voir « En cours »).
2. [ ] Vérifier sur téléphone : image d'accueil, menu hamburger, audio des leçons, convertisseur.
3. [x] Image d'accueil optimisée : 2,6 Mo vers 218 Ko en WebP, illustrations des parcours vers 15 Ko (`scripts/optimiser-images.mjs`).

### Priorité 2 : maintenabilité
4. [x] Quiz et audio extraits de la page de leçon (`src/scripts/lecon.ts`, `Quiz.astro`), CSS déplacé dans `global.css`.
5. [x] Composants `Alert` et `Badge` créés et utilisés partout. Reste éventuellement `Sources`.
6. [x] Date de vérification par page (`VERIFICATIONS` dans `config.ts`, à renseigner quand une page est revérifiée seule).
7. [ ] Passer `lecons.js` en TypeScript, avec un type `Lecon` et des objets `{ru, pron, fr}`.
8. [ ] Découper `global.css` (225 lignes) et supprimer les règles en doublon sur le menu mobile.

### Priorité 3 : SEO et robustesse
9. [x] Sitemap généré (`src/pages/sitemap.xml.ts`), favicon, `robots.txt`, balises `canonical` et Open Graph.
10. [x] Convertisseur : délai de 5 s et dernier taux connu mémorisé.
11. [x] README et contrôle des liens en CI (`npm test` dans le déploiement). Reste éventuellement un lint.

### Contenu à vérifier ou compléter
12. [ ] Confirmer avec une source officielle : étapes d'achat d'une SIM, démarches d'arrivée (enregistrement migratoire), tarifs notaire / apostille / traduction.
13. [ ] Ajouter le convertisseur sur `/vivre` (section « Argent et banque »).
14. [ ] Relire les pages Travailler et Vivre : plusieurs sections sont marquées « À confirmer ».

### Nouvelles règles du 30 octobre 2026
- [x] Contenu du site passé au vouvoiement (30 octobre 2026) : pages, leçons, alertes, composant.
- [ ] **Google Analytics 4** (à venir) : bandeau de consentement, chargement uniquement après acceptation, mention dans une page de confidentialité.
- [ ] **EcoIndex** (à venir) : mesurer l'accueil, compter les éléments de la page avant d'ajouter du contenu.
- [x] Script `npm test` créé : build + contrôle des liens internes (`scripts/verifier-liens.mjs`).
- [x] Mentions de l'autre projet retirées de CLAUDE.md.

### Affiliation (quand les liens existent)
15. [ ] Choisir les partenaires, ajouter leurs liens avec `rel="sponsored noopener"` et la mention « lien affilié ».
16. [ ] Ajouter la mention légale sur la rémunération dans le pied de page.

### Décisions en attente (utilisateur)
- [ ] Nom de domaine propre (sinon l'adresse reste `clarteweb35.github.io/russie`). Si oui : `base: '/'` et réglage du domaine dans GitHub Pages.
- [ ] Faut-il raccourcir l'avertissement de sécurité en bandeau repliable ?
- [ ] Niveau d'animation souhaité (actuellement doux).

## Quand le nom de domaine existera (en attente)

À faire dans cet ordre, une fois le domaine acheté :
1. [ ] DNS : pointer le domaine vers GitHub Pages (enregistrements indiqués dans Réglages > Pages du dépôt), puis saisir le domaine dans « Custom domain » et cocher « Enforce HTTPS ». Action de l'utilisateur.
2. [ ] `astro.config.mjs` : `site` = `https://guide-russie.fr` (domaine visé, libre au 30 octobre 2026, pas encore acheté), `base: '/'` (supprimer `/russie`).
3. [ ] `scripts/verifier-liens.mjs` : passer `BASE` de `'/russie'` à `''` (ou adapter pour l'absence de préfixe).
4. [ ] `public/robots.txt` : mettre l'adresse du sitemap sur le nouveau domaine.
5. [ ] Ajouter un fichier `public/CNAME` contenant le domaine.
6. [ ] Mettre à jour les adresses dans `README.md`, `CLAUDE.md` (« /russie/ ») et `.ai/SPEC_FONCTIONNALITES.md`.
7. [ ] **Google Analytics 4** : l'utilisateur fournit l'identifiant de mesure `G-XXXXXXXXXX` propre à ce site (ne pas réutiliser celui de l'autre projet). Créer le bandeau de consentement, une page de confidentialité, et ne charger gtag qu'après acceptation.
8. [ ] **EcoIndex** : mesurer l'accueil en ligne, compter les éléments avant d'ajouter du contenu.
9. [ ] Vérifier le sitemap, les liens, les balises de partage et le HTTPS en ligne.

## Points de vigilance
- [x] Mentions légales : éditeur anonyme à titre non professionnel (décision de l'utilisateur, 30 octobre 2026), identité communiquée à l'hébergeur uniquement.
- [ ] **À réévaluer dès que des revenus arrivent** (liens d'affiliation, publicité) : le site peut alors être considéré comme professionnel, ce qui oblige à publier l'identité de l'éditeur, une adresse et un contact. À vérifier avant d'activer l'affiliation.
- [ ] Vérifier l'adresse de l'hébergeur (GitHub, Inc.) citée dans les mentions légales.
- [ ] Confirmer l'origine de toutes les images : la mention « image générée par IA » est appliquée à toutes, accueil compris.

## Guides pays (chantier du 4 novembre 2026)

Décisions de l'utilisateur : **pays pilote d'abord** (Finlande), puis les autres avec le même modèle ; **cours de langue avec audio quand l'appareil a une voix**, message sinon.

### Fait
- [x] Menu « Autres pays » (liste déroulante, hamburger sur mobile) et page `/pays/`.
- [x] Modèle de données (`src/data/pays/types.ts`), registre, pages communes (accueil pays, rubriques, sources automatiques, leçons), composants `Sections`, `LeconDetail`, `ListeLecons`.
- [x] Leçons de la Russie refaites avec les mêmes composants ; script audio lisant la langue de la page.
- [x] **Finlande complète** : 5 rubriques sourcées, 6 leçons de finnois (code voix `fi-FI`), sources générées.
- [x] Correctifs au passage : photos des cartes de leçons au bon format 16/9, lien de retour des leçons qui chevauchait la ligne « Vérifié le ».

### À faire (par priorité)
1. [ ] **Faire relire la Finlande** par l'utilisateur (ton, choix des badges, sections `À documenter` : logement, coût de la vie, recherche d'emploi, culture, transports).
2. [ ] Photos des cartes de leçons de la Finlande (aujourd'hui des vignettes colorées) : fournir ou générer 6 images, mention IA via `legendeIA()`.
3. [ ] **Albanie, Espagne, Allemagne, Sénégal, Vietnam** : une fiche chacune sur le modèle de `finlande.ts`, avec recherches web et sources. Langues et codes de voix : albanais `sq-AL` (voix rare), espagnol `es-ES`, allemand `de-DE`, wolof (pas de voix standard) ou français pour le Sénégal, vietnamien `vi-VN`.
4. [ ] Convertisseur de devises générique (Albanie : lek, Vietnam : dong, Sénégal : franc CFA) : le composant actuel est fixé sur EUR et RUB.
5. [ ] Page d'accueil de la Russie : mettre en avant le menu « Autres pays » si besoin.
6. [ ] Mentions légales : préciser que le site couvre plusieurs pays.
7. [ ] Nom de domaine : `guide-russie.fr` convient mal à un site multi-pays. Décider si les pays restent sous `/pays/` ou si le site change de nom.

## Topo hebdomadaire d'actualité (4 novembre 2026)

Choix de l'utilisateur : **Gemini** et **publication automatique**. Le code est prêt et testé avec un faux serveur ; il n'a **jamais tourné avec une vraie clé**.

### À faire par l'utilisateur (dans cet ordre)
1. [ ] Créer une clé d'API dans Google AI Studio (aistudio.google.com).
2. [ ] Ajouter le secret `GEMINI_API_KEY` : dépôt GitHub > Settings > Secrets and variables > Actions > New repository secret. **Ne jamais envoyer la clé dans le chat.**
3. [ ] Vérifier le nom du modèle dans Google AI Studio (le code utilise `gemini-2.5-flash` par défaut, qui peut avoir été remplacé) ; sinon ajouter une variable `GEMINI_MODEL` dans le workflow.
4. [ ] Lancer le workflow à la main : onglet Actions > « Actualités hebdomadaires » > Run workflow. Relire le premier topo obtenu.

### À surveiller
- [ ] Qualité des topos, surtout pour la Russie (sujet sensible). Si des erreurs passent, passer en validation avant publication.
- [ ] Conditions et quotas de l'API (offre gratuite : conditions d'utilisation des données à lire).
- [ ] Contradiction avec le choix « 100 % français » : Gemini (Google) et GitHub Actions (Microsoft). À reprendre lors de la migration vers OVH (remplacer la tâche planifiée par un cron, et éventuellement le fournisseur d'IA).
- [ ] Les tâches planifiées de GitHub peuvent être suspendues après une longue période sans activité sur le dépôt.
- [ ] Ajouter chaque nouveau pays prêt dans `scripts/actualites-pays.json`.

## Cinq fiches pays en test (4 novembre 2026)

Albanie, Espagne, Allemagne, Sénégal, Vietnam sont publiées avec le bandeau « Fiche en test ». Elles reposent sur des recherches rapides, surtout des sources non officielles ou partielles. Liste des autres pays envisagés : `.ai/PAYS_PREVUS.md`.

### À faire pour sortir du mode test (par pays)
1. [ ] Lire les fiches officielles du ministère (rubrique sécurité de chaque pays : seules les adresses ont été vérifiées) et corriger les sections « À documenter ».
2. [ ] Faire relire les leçons par un locuteur : albanais, vietnamien (tons non rendus), wolof (phrases limitées, aucune voix de synthèse), et, dans une moindre mesure, espagnol et allemand.
3. [ ] Vérifier les numéros d'urgence, la monnaie, les cartes, la santé, le logement : sections vides ou à documenter.
4. [ ] Photos des cartes de leçons (vignettes colorées pour l'instant) : fournir ou générer, avec la mention IA via `legendeIA()`.
5. [ ] Retirer `test: true` du fichier du pays une fois relu.

### Points signalés dans les fiches
- **Vietnam** : dépêche sur une suspension temporaire de l'exemption de visa pour la France, date et état à vérifier avant toute publication « complète ».
- **Albanie** : durée de séjour sans visa contradictoire (90 jours ou un an), et permis de travail pour un Européen contradictoire.
- **Sénégal** : zones à risque et nouvelles dispositions pénales (2026) citées par des sources non officielles uniquement.
- **Médias locaux** : natures indicatives, notamment « média d'État » à confirmer pour le Vietnam. `ria.ru` n'a pas répondu lors du contrôle et n'est pas listé pour la Russie.

### Question ouverte
- [ ] Noms des secrets de dépôt : l'utilisateur en a 3, la clé Gemini doit s'appeler `GEMINI_API_KEY` (sinon adapter `.github/workflows/actualites.yml`).

## Guides pays : suivi dans un fichier dédié (4 novembre 2026)

Le suivi détaillé (ce qui est fait, ce qui est sûr, ce qui reste, par pays) est dans **`.ai/AVANCEMENT_PAYS.md`**. À la fin de la session : 21 guides (Russie, Finlande, 19 fiches en test), 296 pages, vagues 1 et 2 de `.ai/PAYS_PREVUS.md` terminées.

- Secrets du topo hebdomadaire : l'utilisateur a `GEMINI_API_KEY_RUSSIE`, `GEMINI_API_KEY_FINLANDE` et `GEMINI_API_KEY_ALBANIE`. Les autres pays sont ignorés tant qu'ils n'ont pas leur secret `GEMINI_API_KEY_<PAYS>` (tirets remplacés par des soulignés, ex. `GEMINI_API_KEY_ROYAUME_UNI`) ou qu'une clé commune `GEMINI_API_KEY` existe.

## 4 novembre 2026 : refonte « monde »
Accueil = choix de destination, 194 pays, fiche d'identité, drapeaux, convertisseur générique, SEO. Détails dans `.ai/AVANCEMENT_PAYS.md`. À mesurer : poids de l'accueil / EcoIndex. Prochaine action : guides ex-URSS, puis vagues 3-4.
