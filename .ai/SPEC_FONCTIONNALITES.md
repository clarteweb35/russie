# Spécification fonctionnelle : Voyage Malin (guides de 194 pays)

Site statique d'information, en français, pour voyager, vivre et travailler dans tous les pays du monde (sauf la France) et apprendre les langues utiles. Né comme guide de la Russie, qui reste le guide le plus complet (`/pays/russie/`). Il est indépendant et non officiel, et il cite ses sources.

- **Public** : francophones qui préparent un séjour ou une installation à l'étranger.
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
- 6 leçons : salutations, se présenter, chiffres/prix/heure, etc. Source des données : `src/data/lecons.ts`. Chaque carte de la liste porte une photo (zoom au survol), définie par `img` et `imgAlt` dans les données.
- Chaque phrase : russe, prononciation à la française, traduction.
- Audio par synthèse vocale du navigateur (voix `ru-RU`), avec lecture lente et « Tout écouter ».
- Quiz d'écoute : 6 questions, 4 choix, score final.
- Navigation précédente / suivante.
- Sans voix pour la langue de la leçon (russe, finnois…), un message l'explique et un pas à pas repliable « Comment ajouter la voix ? » détaille l'installation sur Windows, Mac, iPhone et Android (composant `GuideVoix`).

### Guides détaillés `/pays/<pays>/…`
- **Tous les pays du monde (sauf la France) ont un guide**, tous marqués « Beta » (bandeau « Version beta » sur la fiche, pastille « Beta » dans le menu et la liste). Trois niveaux : (1) pays rédigés un par un (`src/data/pays/fiches/<pays>.ts`, dont l’Europe via `europe.ts`), (2) les 134 autres pays générés par `monde-guides.ts` : fiche, médias locaux, leçons si un support de langue existe. **Pour tous les pays qui ont une fiche du ministère français (182)** : les rubriques « Sécurité », « Entrée / séjour », « Santé », « Informations utiles » (lois locales, usages) et « Contacts utiles » (ambassade, urgences) sont reprises automatiquement de diplomatie.gouv.fr (licence Etalab 2.0, date de mise à jour citée, badge « Vérifié » si la fiche a moins de 13 mois). Mise à jour automatique le 2 de chaque mois (workflow `fiches-officielles.yml`). Import manuel : `node scripts/importer-fiches-officielles.mjs` -> `src/data/monde/officiel.json` (généré) ; intégration : `src/data/pays/officiel.ts`. Une section rédigée à la main et sourcée est conservée (l’officielle s’y ajoute quand l’ancienne n’est qu’« À confirmer »). Voyages d’affaires, téléphone et internet (rubrique « Voyages d’affaires ») complètent « Travailler ». Pour les États membres de l’UE générés (Chypre, Luxembourg, Malte, Slovaquie, Slovénie) : droits de séjour et de travail et carte CEAM (portail « L’Europe est à vous »). Pour les 20 destinations les plus visitées (Espagne, Italie, Portugal, Grèce, Maroc, Tunisie, Algérie, Turquie, États-Unis, Royaume-Uni, Allemagne, Belgique, Suisse, Croatie, Thaïlande, Japon, Mexique, République dominicaine, Égypte, Canada) : sections « Cartes, espèces et distributeurs », « Ouvrir un compte bancaire » et « Se loger et louer », rédigées d’après des sources privées citées comme telles (badge « À confirmer », encadré « À vérifier » ; données dans `src/data/pays/complements/regions/*.ts`). Une rubrique « Cartes, espèces et distributeurs » est aussi rédigée pour 107 pays au total (banque et logement pour une partie seulement). Les pays déconseillés par le ministère (zones rouges) n’en ont volontairement pas. Restent « À documenter » pour les autres pays : banque, logement, permis de travail hors UE, moyens de paiement, médias locaux, leçons seulement si un support de langue existe.
- Les leçons de langue sont **facultatives** : sans support fiable (pays francophones d’Afrique, langues rares), la rubrique « Leçons » est masquée. Les leçons sont partagées entre pays de même langue (`anglais.ts`, `langues.ts`, `langues-monde.ts`).
- Les pays où la situation de sécurité est grave affichent un encadré d’alerte renvoyant à la fiche officielle (`ALERTE_SECURITE` dans `src/data/monde/index.ts`) ; la liste est indicative, sans prétendre reproduire le classement officiel.
- Pas de topo hebdomadaire pour les pays sans clé ni entrée dans `scripts/actualites-pays.json` (une soixantaine suivis).
- Un menu propre au pays remplace l'ancienne liste « Autres pays » ; `/pays/` redirige vers l'accueil.
- Pays : Finlande (fiche complète, non relue) et 57 fiches **beta**, non relues : Belgique, Pays-Bas, Autriche, Irlande, Danemark, Suède, Norvège, Islande, Croatie, Tchéquie, Hongrie, Roumanie, Bulgarie, Japon, Chine, Corée du Sud, Inde, Indonésie, Égypte, Canada, États-Unis, Mexique, Brésil, Madagascar, Île Maurice, Australie, Nouvelle-Zélande, Azerbaïdjan, Biélorussie, Estonie, Kirghizistan, Lettonie, Lituanie, Moldavie, Ouzbékistan, Tadjikistan, Turkménistan, Ukraine (ex-URSS, avec la même structure), Albanie, Espagne, Allemagne, Sénégal, Vietnam, Géorgie, Turquie, Arménie, Kazakhstan, Serbie, Émirats arabes unis, Thaïlande, Maroc, Portugal, Italie, Grèce, Pologne, Suisse, Royaume-Uni. Bandeau « Fiche en test » sur chaque page du pays, mention « test » dans le menu et la liste. Suivi pays par pays : `.ai/AVANCEMENT_PAYS.md` ; autres pays envisagés : `.ai/PAYS_PREVUS.md`.
- Chaque fiche pays comprend aussi la liste de ses **médias locaux** (nature indicative : public, privé, d'État, indépendant), affichée dans « L'actu de la semaine ».
- Pour chaque pays prêt : page d'accueil `/pays/<pays>/` (carte par rubrique), rubriques `voyager`, `vivre`, `travailler`, `paiements`, `langue-culture`, `lecons` (6 leçons audio + quiz) et `sources` (liste générée automatiquement depuis les sources citées dans les sections).
- Bandeau d'en-tête propre au pays : lien vers les conseils officiels du ministère français pour ce pays (le bandeau d'alerte sur la Russie n'apparaît pas hors des pages russes).
- Même système de confiance que la Russie : badges `Vérifié` / `À confirmer` / `À documenter`, sources par section, date de vérification propre au pays.
- Cours de langue : voix de synthèse du navigateur dans la langue du pays (code `fi-FI` pour le finnois). Si l'appareil n'a pas de voix pour cette langue, un message l'explique et le texte et la prononciation restent affichés.
- Source unique : un fichier de données par pays (`src/data/pays/fiches/<pays>.ts`, repris automatiquement), le registre `src/data/pays/index.ts`, le contrôle `verifier.ts` au build et les mêmes pages pour tous.

### L'actu de la semaine (Russie et pays prêts)
- Deux volets : (1) un topo généré par IA, **cherché en priorité dans la presse locale puis traduit en français** ; (2) les liens vers les **médias locaux** du pays, affichés même avant le premier topo. Bloc sur l'accueil de la Russie et sur l'accueil de chaque pays, avec badge « Résumé généré par IA », date de génération, modèle, résumé de 3 à 4 phrases, jusqu'à 5 points et les sources en lien. Rappel que ce n'est pas un conseil de voyage, avec lien vers les conseils officiels. **Rien ne s'affiche tant qu'aucun topo n'a été généré.**
- Génération : `scripts/actualites.mjs` appelle l'API Gemini avec la recherche Google intégrée (modèle réglable par `GEMINI_MODEL`, `gemini-3.8-flash` par défaut). Liste des pays suivis et langue locale : `scripts/actualites-pays.json` (les 7 pays actuels). Résultat : `src/data/actualites/<pays>.json`.
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
| En-tête | `Base.astro`, `global.css`, `config.ts` (`NOM_SITE`) | Nom « Voyage Malin » (domaine voyagesmalins.fr à venir) sur un drapeau russe en filigrane (trois bandes à faible opacité, fondues sur les côtés, léger éclat qui balaie ; CSS pur, éclat coupé si mouvement réduit). Favicon : drapeau. |
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
- Aucun traceur ni cookie avant consentement. Appels externes : le convertisseur (navigateur) ; Google Tag Manager, **uniquement après acceptation du bandeau** (voir §28) ; l'API Gemini, depuis les tâches planifiées seulement. **À refaire** : mesure EcoIndex.
- Pas de conseil juridique, médical ou fiscal.

## 6. Dette technique connue (par priorité)

1. ~~Page de leçon trop chargée~~ : faite (script dans `src/scripts/lecon.ts`, composant `Quiz`, CSS dans `global.css`).
2. Composants `Badge` et `Alert` faits ; reste le bloc « Sources » et le passage en Content Collections si le contenu grossit.
3. ~~Date de vérification globale~~ : faite (`VERIFICATIONS` dans `config.ts`, par page, repli sur `LAST_CHECK`).
4. ~~Image d'accueil de 2,6 Mo~~ : faite (WebP, 218 Ko). Reste à mesurer EcoIndex.
5. ~~CSS global sans découpage~~ : fait (7 fichiers par thème, §30). La seconde feuille (bons plans et guides) a été fusionnée le 7 novembre 2026 (§31).
6. ~~SEO~~ : fait (sitemap généré, robots.txt, favicon, canonical, Open Graph). Reste une image de partage 1200x630.
7. ~~`lecons.js` non typé~~ : fait (`lecons.ts`, type `Lecon`).
8. ~~Convertisseur fragile~~ : fait (délai de 5 s, dernier taux connu mémorisé).
9. README et contrôle des liens en CI faits. Contrôle des pages construites ajouté (§30). Restent un lint et des tests de comportement dans un navigateur.
10. ~~Registre des pays écrit à la main, compléments en lots numérotés, aucun contrôle des données~~ : fait le 7 novembre 2026 (§29).
11. Compléments : un fichier par région (`complements/regions/`), pas encore un fichier par pays (constantes partagées entre pays d'un même fichier).
12. `officiel.json` (6,5 Mo) est généré et versionné : alourdit l'historique Git.

## 7. Travaux en cours

Une action est inscrite ici **dès qu'elle commence** (avant de modifier un fichier) et retirée une fois terminée et mise en ligne. Chaque entrée : date, objectif, fichiers concernés, étapes faites et restantes.





## 8. Version « essentielle » (6 novembre 2026)

- Chaque pays qui a une fiche officielle (183 dont la Russie) a une page « L’essentiel » : `/pays/<pays>/essentiel/` (Russie : `/essentiel/`). Bloc Entrée, Sécurité, Santé, Argent (si compléments sourcés), Urgences ; une à quatre lignes par bloc, chacune renvoyant au détail. Zéro texte écrit à la main : tout est extrait des fiches officielles importées (première phrase des rubriques utiles) et des compléments, donc rien d’inventé. Code : `src/data/pays/essentiel.ts`, `src/components/Essentiel.astro`. Bouton « L’essentiel » sur la fiche pays, entrée de menu, plan du site.

## 9. Site général, domaine et actualités (6 novembre 2026)

- Le site https://clarteweb35.github.io/russie/ est le site général « Voyage Malin ». Le passage au domaine se fait sans changer le code : variable de dépôt `DOMAINE` (voir `.ai/AVANCEMENT.md`). `robots.txt` est généré (`src/pages/robots.txt.ts`).
- Topo hebdomadaire : 193 pays (`scripts/actualites-pays.json`). Clé Gemini : secret par pays `GEMINI_API_KEY_<PAYS>`, sinon `GEMINI_API_KEY_GENERAL`.

## 10. Fiabilité et identité (6 novembre 2026, suite à un avis extérieur)

- Le bandeau sous le fil d’Ariane ne porte plus de pastilles globales « Source officielle » / « À confirmer » : il indique la dernière vérification et rappelle que chaque section affiche sa propre fiabilité.
- Le badge « Vérifié » des textes importés du ministère tient compte de la date réelle du build, de la date d’import de la rubrique (moins de 100 jours) et d’un éventuel échec d’actualisation (rubrique conservée mais signalée « À confirmer »).
- Identité : description et marque par défaut « Voyage Malin » (pays du monde), image de partage générique (la Russie garde la sienne), favicon globe, README.
- Topos d’actualité : aucun enregistré tant que la tâche hebdomadaire n’a pas tourné avec la clé `GEMINI_API_KEY_GENERAL`.

## 11. Villes à connaître (6 novembre 2026)

- Sur la fiche de chaque pays (193), un bloc « Les villes à connaître » présente 3 villes ou lieux choisis selon trois critères affichés (intérêt touristique, importance pratique, diversité) : pourquoi, 3 choses à voir, un conseil pratique seulement si une source le donne. Le bloc disparaît si le topo a plus de 120 jours. Texte **généré par IA** (Gemini, recherche web), badge « Résumé généré par IA », sources citées, absent tant que rien n’est généré.
- Génération : `scripts/villes.mjs`, workflow mensuel `villes.yml` (le 3 du mois), clé `GEMINI_API_KEY_GENERAL`. Un topo sans source est refusé et un échec ne remplace jamais l’ancien. Données : `src/data/villes/<pays>.json`.

## 12. Voyage Malin réuni dans ce site (6 novembre 2026)

- Ce site reprend l'ancien Voyage Malin : **Bons plans** (`/bons-plans/`, une page par offre), **Astuces & hacks voyage** (`/guides/`), liens dans le menu d'accueil, le pied de page et le plan du site. L'accueil (choix de destination) et les pages du guide ne changent pas.
- Chaque fiche pays (sauf Russie et pays déconseillés par le ministère) a « Avant de partir » (assurance, partenaire selon la région) et « Bons plans vers ce pays » quand des offres existent. Liens affiliés : `rel="sponsored noopener"` et mention « Liens affiliés ». Partenaires et règles : `src/data/partenaires.ts` ; rattachement offre ↔ pays : `src/data/offres-pays.ts`.
- **Aucune offre n'est publiée aujourd'hui** : les 3 offres d'exemple de la fusion (liens « EXEMPLE ») n'ont pas été reprises. La page des bons plans est en `noindex` et absente du plan du site tant qu'il n'y a pas d'offre. Les offres sont des fichiers `src/content/bons-plans/*.md` (schéma dans `src/content.config.ts`) ; le pipeline qui les génère n'est pas dans ce dépôt.
- Polices externes (Google Fonts) retirées des pages reprises : polices système. Mentions légales complétées (affiliation, bons plans, villes à connaître).
- Dépôt de fusion `voyages-malins` : abandonné au profit de ce site (option « A »).

## 13. Pipeline des bons plans (6 novembre 2026)

- Les offres sont produites par deux scripts de ce dépôt : `scripts/bons-plans/collecter.mjs` (flux Awin XML, historique des prix sur 90 jours dans `data/bons-plans/`) puis `scripts/bons-plans/generer.mjs` (article Gemini dans `src/content/bons-plans/`). Workflow `bons-plans.yml` : **lancement manuel seulement**. Secrets : `AWIN_FEED_URL` et une clé Gemini (`GEMINI_API_KEY_BONS_PLANS`, sinon `GEMINI_API_KEY_GENERAL`).
- **Une offre n'est publiée que si son prix est vraiment bas**, jugé sur l'historique que nous relevons nous-mêmes (`scripts/bons-plans/regles.mjs`, seuils modifiables à cet endroit) : au moins 5 relevés sur au moins 14 jours ; prix au plus 85 % du prix médian observé (au moins 15 % de moins) ; et au plus 5 % au-dessus du plus bas prix déjà relevé. Le prix barré du marchand ne compte pas : la réduction affichée est calculée par rapport à notre prix médian, et chaque article précise ses relevés. Une offre qui ne passe plus le filtre est retirée du site ; un article dont le prix change est régénéré.
- Autres garde-fous : offre factice (identifiants Awin « EXEMPLE »), incomplète ou sans réduction refusée ; aucun lien dans le texte généré ; le bouton « Voir l'offre » porte le lien avec `rel="sponsored noopener"` ; images du flux non reprises.
- L'historique ne se construit que si la collecte tourne régulièrement : prévoir une exécution quotidienne (à planifier après le premier essai manuel). Tant que l'historique est trop court, aucune offre n'est publiée : c'est voulu.
- **Non testé sur un vrai flux** : seulement avec un faux serveur. Les noms de balises (`AWIN_FIELD_MAP`) sont ceux du prototype et sont à ajuster au premier flux réel.
- Dépendance de développement ajoutée : `fast-xml-parser` (scripts hors ligne uniquement, absente du site publié).

## 14. Photo de la leçon « Se déplacer » hors ex-URSS (7 novembre 2026)

- Les pays dont le guide a des leçons, **hors ex-URSS**, affichent sur la carte « Se déplacer » une photo (compartiment de train : tasse, carnet, stylo, écharpe, clé), image générée par IA, légendée via `legendeIA()`. La Russie garde sa photo (thé dans un verre à anse) ; les pays de l'ex-URSS gardent la vignette numérotée. Fichier : `public/img/lecons/se-deplacer-monde.webp` ; configuration : `IMAGES_HORS_URSS` dans `src/data/lecons-generiques.ts`. Même principe pour « Restaurant et courses » : photo d'une table dressée avec des clients attablés (`restaurant-courses-monde.webp`, image générée par IA), la Russie gardant la sienne (samovar et pirojki).

## 15. Mentions légales : éditeur identifié (7 novembre 2026)

- La page `/mentions-legales` ne parle plus d'un éditeur anonyme : elle affiche l'éditeur (Julien Guillois, à titre individuel), son adresse, son téléphone et le directeur de la publication, avec l'hébergeur (GitHub Pages). Pas d'e-mail ni de SIRET affichés tant qu'ils n'existent pas. Rubriques « Liens affiliés », « Bons plans », « Villes à connaître » ajoutées.

## 16. Accueil : recherche progressive et marque neutre (7 novembre 2026)

- **Recherche** : dès la première lettre, un panneau de suggestions s'affiche juste sous le champ (« a » : les pays en A ; « al » : Albanie, Algérie, Allemagne). Classement : nom qui commence par la saisie, puis mot du nom (dès 2 lettres), puis nom officiel ou capitale (dès 3 lettres, par exemple « Tbilissi » trouve la Géorgie). Clavier : Entrée ouvre le premier résultat, ↓ ↑ parcourent la liste, Échap vide la recherche. Le filtre par région s'applique aussi aux suggestions. La liste A–Z plus bas se filtre toujours.
- **Marque** : l'en-tête n'a plus le drapeau russe en filigrane ni l'effet de brillance ; un petit globe et le nom du site. La liste des pays affiche le nom puis la capitale l'un sous l'autre, et l'étiquette « beta » (et non « test »).

## 17. Public national (7 novembre 2026)

- Voyage Malin s'adresse à toute la France, plus seulement à Rennes et Nantes : l'accroche de l'en-tête des pages bons plans et astuces devient « Départs de toute la France », le titre et la description de `/bons-plans/` aussi. La ville de départ affichée par défaut dans le tableau des départs, quand l'offre n'en donne pas, est « — » (et non plus RNS/NTE). Le filtre par ville de départ de la page des bons plans se construit déjà à partir des offres.
- Pas encore traité : le flux Awin ne fournit pas toujours la ville de départ (champ `villeDepart` des offres) ; à vérifier au premier flux réel.

## 18. Maquettes locales de l’accueil (7 novembre 2026)

- Deux routes de démonstration non indexables, sans remplacement de l’accueil : `/demo-index/` (variante simple) et `/demo-index-2/` (variante plus visuelle). Toutes deux ciblent les départs de toute la France, avec plusieurs villes d’exemple, liens vers les guides et transparence sur les prix. Les offres et montants de la maquette sont fictifs. Les démos sont destinées à la consultation locale seulement.

## 19. Filtre « Départ » en menu déroulant (7 novembre 2026)

- Sur `/bons-plans/`, le filtre par ville de départ est un menu déroulant (« Toutes les villes », puis chaque ville avec son nombre d'offres, par ordre alphabétique) au lieu d'une rangée de boutons, pour tenir avec un public national. Les villes viennent des offres ; sans ville de départ dans les offres, le filtre n'apparaît pas. Le filtre de budget reste en boutons.

## 20. Démonstration de l’index pays dans le style des bons plans (7 novembre 2026)

- Route locale `/demo-pays/`, marquée `noindex`, sans remplacement de l’accueil actuel. Reprend l’identité des pages commerciales (en-tête, palette marine/jaune, typographie, cartes façon billet) et conserve le répertoire de pays, la recherche, les filtres régionaux, les drapeaux et les liens. Aucune publication prévue dans cette tâche. Fichier : `src/pages/demo-pays.astro`.

## 21. Villes à connaître rédigées à la main (7 novembre 2026)

- Faute de quota Gemini, les topos de villes sont aussi rédigés par Claude à partir de recherches web, par paquets de 20 pays, dans les mêmes fichiers `src/data/villes/<pays>.json` ; le champ `modele` vaut « Claude (recherche web) » et s'affiche sur le bloc. Si le workflow `villes.yml` fonctionne un jour, il remplace ces fichiers. Règles : rien d'autre que ce que disent les résultats de recherche ; les sources sont des sites de voyage (signalés comme non officiels) ; le critère « importance pratique » repose sur la capitale ou un nœud de transport cité, jamais sur un aéroport non vérifié ; conseils pratiques seulement s'ils sont sourcés ; le bloc disparaît après 120 jours.
- Paquet 1 (20 pays) : Espagne, Italie, Portugal, Grèce, Maroc, Turquie, Allemagne, Royaume-Uni, Belgique, Suisse, États-Unis, Thaïlande, Tunisie, Croatie, Pays-Bas, Irlande, Japon, Autriche, Égypte, République dominicaine.
- **Bilan (7 novembre 2026)** : les 193 pays ont leur topo. Pour la Russie et les 22 pays de `ALERTE_SECURITE`, le bloc affiche en tête un encadré orange (« Voyage déconseillé par le ministère ») précisant que les villes sont présentées à titre d'information et ne constituent pas une invitation à voyager (prop `alerte` de `VillesPays`). Sources plus minces, à relire en priorité : Angola, Érythrée, îles Marshall, Papouasie-Nouvelle-Guinée, Soudan du Sud, Venezuela (aucune page Routard ou Lonely Planet trouvée ; guides et blogs de voyage seulement). Pour les micro-États, les « villes » sont des quartiers, îles ou sites ; quand une capitale n'est pas décrite par les sources, la fiche le dit plutôt que d'inventer.

## 22. Accueil « tout au même endroit » et identité Voyages Malins (7 novembre 2026)

- Le site s'appelle **Voyages Malins** (`NOM_SITE`). Palette du logo : bleu marine (accent), jaune, turquoise, avec thème sombre ; le rouge de la Russie n'est plus la couleur du site.
- Accueil : logo (`public/img/logo-voyages-malins.webp`, sur fond blanc car non transparent), titre « Tout pour préparer votre voyage, au même endroit », recherche progressive, bloc « Tout au même endroit » (essentiel, guides, leçons, villes, bons plans et astuces ; chiffres calculés depuis les données), exemple du Japon (3 étapes et 4 vignettes de leçons, légendées « image générée par IA »), puis guides et liste A à Z.
- Le carré `logo-voyages-malins-carre.webp` est prêt mais pas encore utilisé (favicon ou partage social).

## 23. Retouche de l’accueil et page « Cours de langues » (7 novembre 2026)

- Accueil : bloc « Tout au même endroit, pour chaque voyage » (six cartes : essentiel, guides, leçons, villes, bons plans et astuces, et « Comparer les vols » signalée **à venir**, sans lien : aucun comparateur n'existe), puis un fil « J'apprends, je prépare, je choisis, je pars » suivi sur la Finlande (guide le plus riche, seul relu), puis huit pays à la une (`A_LA_UNE` dans `config.ts` ; la Russie y figure avec « Voyage déconseillé »), puis la liste A à Z. La recherche reste dans le premier écran.
- En-tête : sur l'accueil, pas de nom (le logo est dans la page) ; sur les pages intérieures, le logo horizontal. « Russie » n'est plus dans le menu de l'accueil.
- `/langues` « Cours de langues » (menu de l'accueil, pied de page, plan du site) : recherche par pays (affiche la langue et ouvre la leçon du pays) et liste des langues par ordre alphabétique, sans les pays. Une langue partagée ouvre les leçons de son pays d'origine. Données lues dans le registre, rien écrit à la main.

## 24. Outils : liste de bagages (7 novembre 2026)

- `/outils` : page d'entrée des outils (liste dans `outils` de `config.ts`, aussi utilisée par le plan du site). « Outils » est dans le menu de l'accueil et le pied de page.
- `/outils/liste-de-bagages` : formulaire (destination facultative, durée de 1 à 90 jours, type de séjour, climat, pluie probable, enfant), liste classée en sept catégories (papiers, vêtements, toilette, santé, appareils, argent, divers), cases à cocher, barre de progression, mémoire sur l'appareil (`localStorage`, clé `vm-bagages-v1`, sans compte ni envoi), « Tout décocher », « Réinitialiser » et impression en deux colonnes. `?pays=<slug>` présélectionne la destination (lien depuis chaque fiche pays). FAQ de six questions avec données structurées.
- Règles : `src/data/bagages.ts` (objets, conditions, quantités). Suggestions propres à un pays, uniquement depuis des données fiables du projet : renvoi vers la fiche officielle pour les formalités, monnaie locale et facilité d'obtention (marquées « À confirmer » quand non sourcées), leçons de langue ; encadré « Voyage déconseillé » pour les pays concernés. Pas de prises électriques, de vaccins ni de climat par pays : le projet n'a pas ces données.
- Limites assumées : aucun conseil médical personnalisé, aucune obligation officielle ; avertissement visible sous le titre. Pas d'ajout d'objets personnels (possible plus tard).

## 25. Outils : « Quand partir ? » et « Estimer le budget » (7 novembre 2026)

- **Quand partir ?** (`/outils/quand-partir`) : choix d'un mois (filtres de température, d'affluence et de prix, sans score global) ou d'un pays (tableau des douze mois). Trois critères présentés séparément, plus un repère de niveau de prix, chacun avec sa source, sa période et sa date. **10 destinations documentées** (Espagne, Portugal, Italie, Grèce, Croatie, Finlande, Allemagne, Islande, Pologne, Autriche) : seuls les pays d'Europe couverts par Eurostat. Aucune note, température, saison ou affluence inventée : une série incomplète = rubrique « Non disponible ».
- Données : `src/data/quand-partir.json`, **généré** par `node scripts/importer-quand-partir.mjs` (ne pas éditer ; à relancer pour actualiser). Sources : NASA POWER (climat, modélisé, une ville de référence par pays), Eurostat `tour_occ_nim` (nuitées), `prc_hicp_midx` CP112 (prix de l'hébergement, variation saisonnière), `prc_ppp_ind` A0111 (niveau de prix, UE27 = 100). Les seuils de lecture des indices (calme, forte, plus bas, plus élevé) sont de Voyages Malins et affichés sur la page. Lecture : `src/data/quand-partir.ts`.
- **Estimer le budget** (`/outils/budget-voyage`) : formulaire (destination, style, durée, voyageurs) et calcul prêts (basse et haute, par personne et total, cinq postes, vols exclus, arrondi à 5 €), mais **aucune destination n'a d'estimation** : aucune source ouverte et défendable n'a été trouvée (les sites de conseils de voyage divergent d'un facteur deux et ne publient pas leur méthode). L'outil affiche « estimation non disponible » et, pour les pays d'Europe, le repère Eurostat de niveau de prix, présenté comme tel. Une destination s'ajoute dans `BUDGETS` (`src/data/budget-voyage.ts`) avec fourchettes, méthode, source (commerciale signalée) et date ; `verifierBudget` contrôle l'entrée.
- Les deux outils sont dans `outils` de `config.ts` (page `/outils`, plan du site).

## 26. Bandeau « version bêta » et publication des outils (7 novembre 2026)

- Un bandeau jaune sous l'en-tête de toutes les pages indique que le site vient d'être créé et qu'il est en version bêta. Texte : `MESSAGE_BETA` dans `config.ts` (le vider pour le retirer). Il n'affecte pas le bandeau de sécurité, et n'est pas imprimé.
- Outils en ligne : liste de bagages, « Quand partir ? », « Estimer le budget ». La page budget est en `noindex` et absente du plan du site tant qu'aucune destination n'a d'estimation sourcée.
- Correctif : le fil d'Ariane s'affichait en cartes (collision de la classe `.fil` avec le parcours de l'accueil, renommé `.parcours-liste`).
- `/sources` est la page générale « Sources et méthode » (badges, sources du site, contenus IA, liens vers la page Sources de chaque pays). Les sources du guide Russie sont désormais sur `/pays/russie/sources` (avant : `/sources`, qui montrait la Russie à tort).

## 27. Calendrier « quand partir » et outils sur les fiches pays (7 novembre 2026)

- Les 10 fiches pays documentées (Espagne, Portugal, Italie, Grèce, Croatie, Finlande, Allemagne, Islande, Pologne, Autriche) ont une section « Quand partir » : douze cartes (janvier à décembre), chacune « Bon moment », « Moins bon » ou « À éviter », avec les raisons chiffrées et les sources. Composant : `CalendrierPays.astro` ; règles : `lectureMois` et `REGLES` dans `src/data/quand-partir.ts`.
- Règles (affichées sur la page, rédigées par Voyages Malins, pas une recommandation officielle) : points d'attention = moins de 10 °C ou plus de 28 °C, 150 mm de pluie ou plus, affluence forte (indice > 125), prix de l'hébergement plus élevés (indice > 105) ; atouts = 15 à 28 °C, moins de 50 mm, affluence calme (< 75), prix plus bas (< 95). 0 point d'attention : « Bon moment » ; 1 : « Moins bon » ; 2 ou plus : « À éviter ».
- **Tous les autres pays** (184) ont un calendrier **climat seul**, établi sur le climat de leur **capitale** (NASA POWER, coordonnées Wikidata). Libellés « Climat favorable / moins favorable / peu favorable » (jamais « Bon moment »), avec l'avertissement que la capitale ne représente pas toujours les régions touristiques. Seuls les critères de température et de pluie s'appliquent.
- **Pays déconseillés par le ministère (les 22 de `ALERTE_SECURITE`)** : le calendrier existe mais les douze mois sont « Déconseillé », avec la phrase « quels que soient le temps et l'affluence, ce pays est déconseillé » et un renvoi vers les conseils aux voyageurs du ministère. Ils sont exclus de l'outil « Quand partir ? » (`sansCalendrier`), et le lien vers l'outil n'apparaît pas sur leur fiche.
- Toutes les fiches pays ont un bloc « Préparer votre départ » (`OutilsPays.astro`) : liste de bagages pour tous, « Quand partir ? » et budget seulement pour les pays qui ont des données. L'outil « Quand partir ? » accepte `?pays=<slug>`.
- Limite : seuls 10 pays d'Europe ont l'affluence et les prix (Eurostat). Pour les autres, étendre demande une autre source ouverte de fréquentation et de prix. Les données sont rangées par code ISO3 dans `quand-partir.json` (généré par `scripts/importer-quand-partir.mjs`, environ 5 minutes car il interroge la NASA pays par pays).
- Les seuils sont des choix de Voyages Malins, affichés sur la page et ajustables dans `REGLES` ; ils ont été calibrés après essai (pluie abondante à 150 mm pour ne pas pénaliser les climats de mousson, chaleur forte à 28 °C de moyenne).

## 28. Fil d’Ariane, consentement et mesure d'audience (7 novembre 2026)

- **Fil d'Ariane** (service d'alertes gratuit du ministère de l'Europe et des Affaires étrangères, à ne pas confondre avec notre fil d'Ariane de navigation) : un bloc bien visible, sous l'en-tête, sur **toutes les fiches pays** et la page Russie. Boutons « S'inscrire » (page d'inscription, FranceConnect notamment) et « Découvrir le service », rappel que ce n'est ni une assurance ni un service de géolocalisation. Un lien vers l'assurance voyage du partenaire (HelloSafe, affilié, signalé) n'apparaît que là où l'affiliation est autorisée (pas la Russie ni les pays déconseillés). Adresses dans `FIL_ARIANE_SERVICE` (`config.ts`), composant `FilArianeService.astro`. La liste de bagages l'inclut dans les papiers.
- **Mesure d'audience** : Google Tag Manager (`GTM_ID` dans `config.ts`), **chargé uniquement après acceptation** du bandeau affiché à la première visite (`src/scripts/consentement.ts`). Accepter et Refuser ont le même poids ; le choix est gardé dans le stockage local (clé `vm-consentement`) ; le lien « Mesure d'audience » du pied de page permet de changer d'avis (le retrait efface les cookies `_ga` et recharge la page). Mode de consentement : publicité et personnalisation refusées, seule la mesure d'audience est autorisée. Le `noscript` de GTM n'est volontairement pas installé (il chargerait sans consentement). Les mentions légales décrivent le dispositif.
- À configurer côté Google : le conteneur GTM doit contenir la balise Google Analytics 4 ; l'aperçu GTM permet de vérifier.

## 29. Architecture des données des pays (7 novembre 2026)

- Aucun changement visible pour les visiteurs : le site généré est identique (vérifié page par page).
- `src/data/pays/fiches/` : un fichier par pays rédigé, repris automatiquement par le registre (`import.meta.glob`). Ajouter un pays = créer un fichier.
- `src/data/pays/complements/` : `outils.ts` (aides de rédaction), `regions/*.ts` (tables { ISO: complément } reprises automatiquement ; un ISO en double arrête le build).
- `src/data/pays/verifier.ts` : à chaque build, refuse ISO ou slug en double, badge « Vérifié » sans source, URL de source invalide.
- Documentation : doublons de cette spec supprimés, sections renumérotées, contradictions sur la mesure d'audience corrigées.

## 30. Qualité : tests des pages, CSS découpé, leçons typées (7 novembre 2026)

- `npm test` lance maintenant `scripts/verifier-pages.mjs` après le contrôle des liens : sur chaque page construite, `lang="fr"`, `<title>`, meta description, un seul `<h1>`, `alt` sur les images, aucun script externe, **aucune balise Google Tag Manager / Analytics dans le HTML** (elle n'apparaît qu'après le consentement), `rel="noopener"` sur les liens externes et affiliés.
- Premier résultat : `/bons-plans/` n'avait pas de `<h1>` ; un titre masqué à l'œil (lu par les lecteurs d'écran) a été ajouté, sans changement visible.
- `src/styles/global.css` devient une liste d'`@import` ordonnée vers 7 fichiers thématiques ; le CSS produit est inchangé.
- Les leçons de russe sont typées (`Lecon`), comme celles des autres pays.

## 31. Style unifié, alerte de sécurité, alias de recherche, leçons locales (7 novembre 2026)

- **Style unique** : les pages bons plans, offres, astuces et guides utilisent le même gabarit (`Base.astro`) et les mêmes variables que le reste du site : en-tête et menu, fil d'Ariane, bandeau bêta, bandeau de consentement (la mesure d'audience y est donc proposée comme ailleurs), pied de page avec mentions légales. Une seule feuille de style (`src/styles/bons-plans.css` pour ces pages). Supprimés : `public/styles/global.css`, `VmHeader`, `VmFooter`. Mention d'affiliation affichée en bas des pages qui portent un lien affilié. La page bons plans a un vrai titre visible.
- **Alerte « voyage déconseillé »** : sur les pays de `ALERTE_SECURITE` et sur la Russie, le bandeau rouge est la toute première chose de la page (avant l'en-tête). Il clignote lentement (0,6 par seconde) sauf si le visiteur a demandé de réduire les animations ; le bandeau « Avant de partir » n'est plus affiché sur ces pays (redondant). Contrôlé par `scripts/verifier-pages.mjs`.
- **Recherche de l'accueil** : sigles (USA, RDC, RCA, UK, EAU), noms anglais (Germany, Ivory Coast, Burma…), anciens noms (Ceylan, Zaïre, Siam, Swaziland) et destinations très recherchées qui ne sont pas des pays (Bali, Canaries, Zanzibar, New York, Dubai, Rio, Hong Kong…) mènent au bon pays, en tête des suggestions, dès 2 lettres. Environ 73 pays ont des alias. Table : `ALIAS` dans `src/data/monde/index.ts`.
- **Leçons de langue locale** : quand le français ou l'anglais est langue officielle, les leçons proposent la première langue locale de la fiche si un support existe (règle dans `monde-guides.ts`). Aujourd'hui : Comores, Érythrée et Tchad (arabe), Guinée équatoriale (espagnol, exception documentée). Les autres pays gardent leur choix précédent, faute de support pour leur première langue locale (kikongo, afrikaans, tswana, créoles…). La rubrique « Langue » le précise.
