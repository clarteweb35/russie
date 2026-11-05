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

### Accueil `/` : choix de la destination
- Page générale : titre, champ de recherche (sans tenir compte des accents), filtre par région, puis **tous les pays du monde (194 États) classés par ordre alphabétique**, chacun avec son drapeau. Les pays à guide détaillé sont mis en avant (liste « guides détaillés », ancre `#guides`).
- SEO : titre et description propres, balise canonique, Open Graph, données structurées (WebSite, ItemList), fil d'Ariane, plan du site généré depuis les données.
- L'ancien accueil russe est devenu la page `/pays/russie/`.

### Page d'un pays `/pays/<pays>/` (identique pour tous)
- En-tête avec drapeau, **fiche d'identité** (nom officiel, capitale, région, langues, monnaie, indicatif, conduite, population, superficie, décalage horaire avec Paris, domaine internet), **signification du drapeau** (pays à guide uniquement, interprétation courante non officielle), repères déduits des données, pays voisins cliquables.
- **Monnaie** : convertisseur EUR ⇄ monnaie locale (taux BCE via Frankfurter, repli ExchangeRate-API, Banque de Russie pour le rouble) et encadré « Est-il facile de se procurer la monnaie locale ? » (évaluation éditoriale, « non documenté » par défaut, À confirmer).
- **Conseils officiels** du ministère français (lien vérifié ou liste générale), alerte renforcée pour les pays déconseillés.
- **Photos** : déposées par l'éditeur dans `src/assets/pays/<slug>/` (voir le LISEZMOI du dossier) ; rien ne s'affiche sans photo.
- **Anciennes républiques soviétiques** : encadré sur l'usage du russe et lien vers le guide de la Russie (Ukraine : consigne inverse).
- Menu d'en-tête propre au pays, lien « Toutes les destinations » pour revenir à l'accueil.
- Pays à guide détaillé : mêmes rubriques que ci-dessous.

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
- Sans voix pour la langue de la leçon (russe, finnois…), un message l'explique et un pas à pas repliable « Comment ajouter la voix ? » détaille l'installation sur Windows, Mac, iPhone et Android (composant `GuideVoix`).

### Guides détaillés `/pays/<pays>/…`
- Un menu propre au pays remplace l'ancienne liste « Autres pays » ; `/pays/` redirige vers l'accueil.
- Pays : Finlande (fiche complète, non relue) et 57 fiches **en test**, non relues : Belgique, Pays-Bas, Autriche, Irlande, Danemark, Suède, Norvège, Islande, Croatie, Tchéquie, Hongrie, Roumanie, Bulgarie, Japon, Chine, Corée du Sud, Inde, Indonésie, Égypte, Canada, États-Unis, Mexique, Brésil, Madagascar, Île Maurice, Australie, Nouvelle-Zélande, Azerbaïdjan, Biélorussie, Estonie, Kirghizistan, Lettonie, Lituanie, Moldavie, Ouzbékistan, Tadjikistan, Turkménistan, Ukraine (ex-URSS, avec la même structure), Albanie, Espagne, Allemagne, Sénégal, Vietnam, Géorgie, Turquie, Arménie, Kazakhstan, Serbie, Émirats arabes unis, Thaïlande, Maroc, Portugal, Italie, Grèce, Pologne, Suisse, Royaume-Uni. Bandeau « Fiche en test » sur chaque page du pays, mention « test » dans le menu et la liste. Suivi pays par pays : `.ai/AVANCEMENT_PAYS.md` ; autres pays envisagés : `.ai/PAYS_PREVUS.md`.
- Chaque fiche pays comprend aussi la liste de ses **médias locaux** (nature indicative : public, privé, d'État, indépendant), affichée dans « L'actu de la semaine ».
- Pour chaque pays prêt : page d'accueil `/pays/<pays>/` (carte par rubrique), rubriques `voyager`, `vivre`, `travailler`, `paiements`, `langue-culture`, `lecons` (6 leçons audio + quiz) et `sources` (liste générée automatiquement depuis les sources citées dans les sections).
- Bandeau d'en-tête propre au pays : lien vers les conseils officiels du ministère français pour ce pays (le bandeau d'alerte sur la Russie n'apparaît pas hors des pages russes).
- Même système de confiance que la Russie : badges `Vérifié` / `À confirmer` / `À documenter`, sources par section, date de vérification propre au pays.
- Cours de langue : voix de synthèse du navigateur dans la langue du pays (code `fi-FI` pour le finnois). Si l'appareil n'a pas de voix pour cette langue, un message l'explique et le texte et la prononciation restent affichés.
- Source unique : un fichier de données par pays (`src/data/pays/<pays>.ts`), le registre `src/data/pays/index.ts` et les mêmes pages pour tous.

### L'actu de la semaine (Russie et pays prêts)
- Deux volets : (1) un topo généré par IA, **cherché en priorité dans la presse locale puis traduit en français** ; (2) les liens vers les **médias locaux** du pays, affichés même avant le premier topo. Bloc sur l'accueil de la Russie et sur l'accueil de chaque pays, avec badge « Résumé généré par IA », date de génération, modèle, résumé de 3 à 4 phrases, jusqu'à 5 points et les sources en lien. Rappel que ce n'est pas un conseil de voyage, avec lien vers les conseils officiels. **Rien ne s'affiche tant qu'aucun topo n'a été généré.**
- Génération : `scripts/actualites.mjs` appelle l'API Gemini avec la recherche Google intégrée (modèle réglable par `GEMINI_MODEL`, `gemini-2.5-flash` par défaut). Liste des pays suivis et langue locale : `scripts/actualites-pays.json` (les 7 pays actuels). Résultat : `src/data/actualites/<pays>.json`.
- Fréquence : workflow `.github/workflows/actualites.yml`, chaque lundi à 6 h UTC (ou à la demande), qui enregistre les fichiers, puis relance le déploiement.
- Publication automatique (choix de l'éditeur). Garde-fous : sources prises dans les métadonnées de la recherche et non dans le texte du modèle, liens `https` uniquement, topo refusé sans source, un échec ne remplace jamais le topo précédent.
- Clé : secret de dépôt `GEMINI_API_KEY`. Elle n'est jamais dans le code ni côté navigateur.

### Mentions légales `/mentions-legales`
Éditeur, hébergeur, images générées par IA, données personnelles, liens et partenaires. Liée depuis le pied de page. Éditeur anonyme (particulier, à titre non professionnel), identité communiquée à l'hébergeur.

### Sources `/sources`
Liste des sources et de leur fiabilité.

## 3. Fonctionnalités transverses

| Fonctionnalité | Fichier | Comportement |
|---|---|---|
| Convertisseur EUR ⇄ RUB | `src/components/Convertisseur.astro` | Taux officiel de la Banque de Russie (`cbr-xml-daily.ru`), repli sur `open.er-api.com`. Conversion dans les deux sens, bouton d'inversion, date du taux affichée. Indique qu'il est indicatif. |
| En-tête | `Base.astro`, `global.css`, `config.ts` (`NOM_SITE`) | Nom « guide-russie.fr » sur un drapeau russe en filigrane (trois bandes à faible opacité, fondues sur les côtés, léger éclat qui balaie ; CSS pur, éclat coupé si mouvement réduit). Favicon : drapeau. |
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

### 4 novembre 2026 : guides détaillés des 11 pays restants de l'ex-URSS, puis reste du monde
- **Objectif** : Azerbaïdjan, Biélorussie, Estonie, Kirghizistan, Lettonie, Lituanie, Moldavie, Ouzbékistan, Tadjikistan, Turkménistan, Ukraine en guides « test » (sources citées, À documenter si rien de fiable), puis les autres pays par vagues.
- **Fichiers** : `src/data/pays/<pays>.ts`, `src/data/pays/index.ts`, `scripts/actualites-pays.json`, `.ai/AVANCEMENT_PAYS.md`.
- **Fait** : ex-URSS, vagues 3 et 4, puis 13 pays d’Europe, en ligne.
- **Restant** : Côte d’Ivoire (langue des leçons non sourcée), reste de l’Europe (Slovaquie, Slovénie, Bosnie, Monténégro, Macédoine du Nord, Malte, Chypre, petits États), puis Asie, Afrique, Amériques, Océanie.

### (précédent) 4 novembre 2026 : clés par pays + vague 1 des pays (Géorgie, Turquie, Arménie, Kazakhstan, Serbie, Émirats, Thaïlande)
- **Fichiers** : `scripts/actualites.mjs`, `.github/workflows/actualites.yml`, `src/data/pays/*`, `scripts/actualites-pays.json`, `.ai/AVANCEMENT_PAYS.md`, `.ai/*`.
- **Fait** : clés par pays ; vagues 1 et 2 (14 pays en test) ; suivi dans `.ai/AVANCEMENT_PAYS.md`.
- **Restant** : vagues 3 et 4 de `.ai/PAYS_PREVUS.md`, puis retrait de cette entrée.
