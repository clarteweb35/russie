# Spécification fonctionnelle : Guide Russie

Site statique d'information, en français, pour voyager, vivre, travailler et apprendre le russe. Il est indépendant et non officiel, et il cite ses sources.

- **Public** : francophones qui préparent un séjour ou s'installer en Russie.
- **URL de production** : https://clarteweb35.github.io/russie/
- **Dépôt** : https://github.com/clarteweb35/russie (branche `main`)

## 1. Principes éditoriaux

| Règle | Détail |
|---|---|
| Honnêteté | Chaque section sensible porte un badge : `Vérifié` (source récente fiable) ou `À confirmer` (non confirmé, ou source non officielle). |
| Sources | Toute affirmation sensible cite sa source. Les sources commerciales sont signalées comme telles. |
| Sécurité | Le conseil officiel français (déplacement déconseillé) reste visible : bandeau sur chaque page, encadré sur l'accueil, texte complet dans `/voyager#securite`. |
| Ton | Vouvoiement, phrases courtes, aucune promesse de résultat. |
| Chiffres | Un chiffre sans source est marqué « Estimation non vérifiée ». |
| Date | « Vérifié le … » est affichée sous le titre de chaque page (valeur globale `LAST_CHECK`). |

## 2. Pages et fonctionnalités

### Accueil `/`
- Bandeau d'accueil : promesse, deux boutons (Préparer un voyage, Voir les sources), photo de la cathédrale Saint-Basile.
- « Que veux-tu faire ? » : 3 parcours (Préparer un voyage, S'installer, Apprendre le russe), avec illustrations transparentes qui se révèlent au survol.
- Encadré de sécurité avec lien vers `/voyager#securite`.
- Convertisseur EUR ⇄ RUB.
- « À lire aussi » : Travailler, Paiements, Langue & culture.

### Voyager `/voyager`
Sections à ancres : `#securite`, `#visa`, `#vols`, `#argent`, `#assurance`, `#communications` (dont `#sim`), puis la checklist avant le départ.

### Vivre `/vivre`
Statuts de séjour, démarches d'arrivée, argent et banque, logement et santé, communauté française.

### Travailler `/travailler`
Permis de travail et cadre juridique.

### Paiements `/paiements`
- Convertisseur EUR ⇄ RUB.
- Compte en Géorgie comme intermédiaire (procuration notariée, apostille, traduction).
- Budget estimé (en autonomie, ou avec un intermédiaire).
- Section « Partenaires » : réservée aux futurs liens d'affiliation (voir §4).

### Langue & culture `/langue-culture`
Alphabet cyrillique, phrases utiles, repères culturels.

### Leçons `/lecons` et `/lecons/[slug]`
- 6 leçons : salutations, se présenter, chiffres/prix/heure, etc. Source des données : `src/data/lecons.js`. Chaque carte de la liste porte une photo (zoom au survol), définie par `img` et `imgAlt` dans les données.
- Chaque phrase : russe, prononciation à la française, traduction.
- Audio par synthèse vocale du navigateur (voix `ru-RU`), avec lecture lente et « Tout écouter ».
- Quiz d'écoute : 6 questions, 4 choix, score final.
- Navigation précédente / suivante.
- Sans voix russe disponible, un message l'explique.

### Mentions légales `/mentions-legales`
Éditeur, hébergeur, images générées par IA, données personnelles, liens et partenaires. Liée depuis le pied de page. Identité et contact de l'éditeur : **à compléter**.

### Sources `/sources`
Liste des sources et de leur fiabilité.

## 3. Fonctionnalités transverses

| Fonctionnalité | Fichier | Comportement |
|---|---|---|
| Convertisseur EUR ⇄ RUB | `src/components/Convertisseur.astro` | Taux officiel de la Banque de Russie (`cbr-xml-daily.ru`), repli sur `open.er-api.com`. Conversion dans les deux sens, bouton d'inversion, date du taux affichée. Indique qu'il est indicatif. |
| Navigation | `src/layouts/Base.astro` + `src/config.ts` (`sections`) | Menu piloté par les données, onglet actif, menu hamburger sous 720 px (fermeture par Échap et au clic). |
| Bandeau de sécurité | `Base.astro` | Sur toutes les pages sauf l'accueil. |
| Ligne de crédibilité | `Base.astro` | Date + légende des badges + lien Sources, sauf accueil et Sources. |
| Animations | `Base.astro`, `global.css` | Apparition au défilement, barre de progression, transitions entre pages. Désactivées avec `prefers-reduced-motion`. |
| Thème | `global.css` | Clair par défaut, sombre automatique (`prefers-color-scheme`). |
| Images IA | `config.ts` (`MENTION_IA`, `legendeIA()`) | Toute image générée par IA porte « (image générée par IA) » dans `alt` et `title`. |
| Accessibilité | `Base.astro` | Lien « Aller au contenu », `aria-current`, `aria-live` sur le taux. |

## 4. Affiliation (prévue, non active)

- Les liens partenaires iront dans la section « Partenaires » de `/paiements` (et éventuellement ailleurs).
- Chaque lien affilié doit être **signalé comme tel** à côté du lien, avec une phrase expliquant que le guide peut être rémunéré.
- Les liens utilisent `rel="sponsored noopener"`.
- Une mention légale sur la rémunération sera ajoutée au pied de page.
- Aucun partenaire n'est affiché tant qu'aucun lien réel n'existe.

## 5. Hors périmètre

- Pas de compte utilisateur, de base de données ni de backend.
- Aujourd'hui : aucun traceur ni cookie ; seuls appels externes : ceux du convertisseur. **À venir** : Google Analytics 4 (après consentement uniquement, avec bandeau) et mesure EcoIndex.
- Pas de conseil juridique, médical ou fiscal.

## 6. Dette technique connue (par priorité)

1. ~~Page de leçon trop chargée~~ : faite (script dans `src/scripts/lecon.ts`, composant `Quiz`, CSS dans `global.css`).
2. Composants `Badge` et `Alert` faits ; reste le bloc « Sources » et le passage en Content Collections si le contenu grossit.
3. ~~Date de vérification globale~~ : faite (`VERIFICATIONS` dans `config.ts`, par page, repli sur `LAST_CHECK`).
4. ~~Image d'accueil de 2,6 Mo~~ : faite (WebP, 218 Ko). Reste à mesurer EcoIndex.
5. CSS global sans découpage.
6. ~~SEO~~ : fait (sitemap généré, robots.txt, favicon, canonical, Open Graph). Reste une image de partage 1200x630.
7. `lecons.js` non typé (tuples) : passer en TypeScript avec un type `Lecon`.
8. ~~Convertisseur fragile~~ : fait (délai de 5 s, dernier taux connu mémorisé).
9. README et contrôle des liens en CI faits. Restent un lint et des tests de comportement.

## 7. Travaux en cours

Une action est inscrite ici **dès qu'elle commence** (avant de modifier un fichier) et retirée une fois terminée et mise en ligne. Chaque entrée : date, objectif, fichiers concernés, étapes faites et restantes.

Aucune action en cours.
