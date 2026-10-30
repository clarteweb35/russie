# Avancement : Guide Russie

Dernière mise à jour : 30 octobre 2026. Ce fichier est mis à jour à la fin de chaque session de travail.

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
2. [ ] `astro.config.mjs` : `site` = le nouveau domaine, `base: '/'` (supprimer `/russie`).
3. [ ] `scripts/verifier-liens.mjs` : passer `BASE` de `'/russie'` à `''` (ou adapter pour l'absence de préfixe).
4. [ ] `public/robots.txt` : mettre l'adresse du sitemap sur le nouveau domaine.
5. [ ] Ajouter un fichier `public/CNAME` contenant le domaine.
6. [ ] Mettre à jour les adresses dans `README.md`, `CLAUDE.md` (« /russie/ ») et `.ai/SPEC_FONCTIONNALITES.md`.
7. [ ] **Google Analytics 4** : l'utilisateur fournit l'identifiant de mesure `G-XXXXXXXXXX` propre à ce site (ne pas réutiliser celui de l'autre projet). Créer le bandeau de consentement, une page de confidentialité, et ne charger gtag qu'après acceptation.
8. [ ] **EcoIndex** : mesurer l'accueil en ligne, compter les éléments avant d'ajouter du contenu.
9. [ ] Vérifier le sitemap, les liens, les balises de partage et le HTTPS en ligne.
