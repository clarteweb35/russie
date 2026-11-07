# Avancement : Guide Russie

Dernière mise à jour : 7 novembre 2026. Ce fichier est mis à jour à la fin de chaque session de travail. Les sections les plus basses sont les plus récentes ; les tableaux du début sont l'historique du guide Russie d'origine.

**Production** : https://clarteweb35.github.io/russie/ (déploiement automatique à chaque push sur `main`)
**Note d'architecture** : 82 / 100 le 7 novembre 2026 (76 avant la remise à plat ; dette restante dans `.ai/SPEC_FONCTIONNALITES.md`, §6)

## État au 7 novembre 2026

Site « Voyage Malin » : 194 pays, outils (bagages, quand partir, budget), bons plans, villes, fiches officielles automatiques, bandeau de consentement + GTM. Tout est en ligne sauf les pages `demo-*` et `src/assets/carousel/` (travail local non suivi).

**Prochaines actions** : (1) GTM : vérifier en aperçu que la balise GA4 se déclenche après acceptation ; (2) refaire la mesure EcoIndex ; (3) quota Gemini (villes, actualités) ; (4) décision sur la page budget (aucune estimation sourcée) ; (5) domaine voyagesmalins.fr (voir plus bas) ; (6) dette technique restante : un fichier par pays pour les compléments, `lecons.js` en TypeScript, découpage de `global.css`, tests de comportement.

## Historique : en cours au 4 novembre 2026 (obsolète)

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
- [x] **Mesure d'audience** : bandeau de consentement et Google Tag Manager après acceptation, faits le 7 novembre 2026 (reste à vérifier dans GTM).
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

## Quand le nom de domaine sera transféré (site général « Voyage Malin »)

Le site https://clarteweb35.github.io/russie/ est le site général (marque « Voyage Malin », choix de destination parmi 194 pays). Il est prêt : le passage au domaine ne demande aucune modification du code.
1. [ ] Domaine voyagesmalins.fr : détacher de Vercel, puis chez OVH pointer `www` en CNAME vers `clarteweb35.github.io.` (et l'apex vers les 4 adresses A de GitHub Pages : 185.199.108.153, .109.153, .110.153, .111.153). Action de l'utilisateur.
2. [ ] GitHub : Réglages > Secrets and variables > Actions > Variables > créer `DOMAINE` = `www.voyagesmalins.fr`. Puis Réglages > Pages > Custom domain = `www.voyagesmalins.fr`, et cocher « Enforce HTTPS » après la vérification DNS. Relancer le déploiement (Actions > Déploiement > Run workflow).
3. [ ] Vérifier : accueil, une fiche pays, `/robots.txt` et `/sitemap.xml` sur le nouveau domaine. Ajouter la propriété dans Search Console.
4. [ ] Mettre à jour README.md, CLAUDE.md (« /russie/ ») et la spec une fois le domaine actif.
5. [x] (fait le 7 novembre 2026, via Google Tag Manager) **Google Analytics 4** : l’utilisateur fournit l'identifiant `G-XXXXXXXXXX`. Bandeau de consentement, page de confidentialité, gtag chargé seulement après acceptation.
6. [ ] **EcoIndex** : mesurer l'accueil en ligne, compter les éléments avant d'ajouter du contenu.
7. [~] Mentions légales : éditeur renseigné le 7 novembre 2026 (Julien Guillois, Chaumeré 35113 Domagné, téléphone, directeur de la publication). Reste : adresse e-mail de contact et numéro SIRET (à ajouter dès qu'ils existent, repère en commentaire dans `mentions-legales.astro`) ; déclaration d'activité (micro-entreprise) à faire par l'éditeur.

## Points de vigilance
- [x] Mentions légales : éditeur anonyme à titre non professionnel (décision de l'utilisateur, 30 octobre 2026), identité communiquée à l'hébergeur uniquement.
- [ ] **À réévaluer dès que des revenus arrivent** (liens d'affiliation, publicité) : le site peut alors être considéré comme professionnel, ce qui oblige à publier l'identité de l'éditeur, une adresse et un contact. À vérifier avant d'activer l'affiliation.
- [ ] Vérifier l'adresse de l'hébergeur (GitHub, Inc.) citée dans les mentions légales.
- [ ] Confirmer l'origine de toutes les images : la mention « image générée par IA » est appliquée à toutes, accueil compris.

## Fiches officielles automatiques (5 novembre 2026)

Tous les guides pays reprennent désormais sécurité, entrée, santé, usages et contacts depuis les fiches du ministère (voir `.ai/AVANCEMENT_PAYS.md`). Prochaine étape : documenter vivre, travailler, paiements pour les destinations les plus visitées.

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
7. [x] Nom du site : « Voyage Malin » (6 novembre 2026), domaine voyagesmalins.fr en attente de transfert.

## Topo hebdomadaire d'actualité (4 novembre 2026)

Choix de l'utilisateur : **Gemini** et **publication automatique**. Le code est prêt et testé avec un faux serveur ; il n'a **jamais tourné avec une vraie clé**.

### À faire par l'utilisateur (dans cet ordre)
1. [ ] Créer une clé d'API dans Google AI Studio (aistudio.google.com).
2. [ ] Ajouter le secret `GEMINI_API_KEY` : dépôt GitHub > Settings > Secrets and variables > Actions > New repository secret. **Ne jamais envoyer la clé dans le chat.**
3. [ ] Vérifier le nom du modèle dans Google AI Studio (le code utilise `gemini-3.8-flash` par défaut, qui peut avoir été remplacé) ; sinon ajouter une variable `GEMINI_MODEL` dans le workflow.
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

## Voyage Malin réuni dans ce site (6 novembre 2026)

- Fait : bons plans, astuces, blocs d'affiliation sur les fiches pays, menu, pied de page, plan du site, mentions légales (voir SPEC §12).
- À faire : (1) brancher le pipeline qui écrit les offres dans `src/content/bons-plans/` (il vit dans l'ancien dépôt `bons-plans-voyages-site`) ; (2) vérifier que les liens Awin et les identifiants partenaires sont bien ceux de l'éditeur ; (3) décider de l'avenir du dépôt privé `voyages-malins` (plus nécessaire) et du site Vercel actuel ; (4) au transfert du domaine, suivre la procédure ci-dessus (variable `DOMAINE`).

## Pipeline des bons plans rapatrié (6 novembre 2026)

- Fait : scripts, workflow manuel, bouton affilié sur la page d'offre (SPEC §13). L'ancien dossier `C:\Users\hp\bons-plans-voyages\` n'est plus nécessaire (ne rien supprimer sans décision).
- À faire : créer un flux Awin réel, le mettre en secret `AWIN_FEED_URL`, lancer le workflow à la main, ajuster `AWIN_FIELD_MAP` d'après le message « offres rejetées », relire les premiers articles, puis seulement envisager une planification.
- Filtre de prix ajouté (SPEC §13) : testé avec un historique préparé (retenue, écartée, retirée quand le prix remonte). Il faudra planifier la collecte (une fois par jour) pour que l'historique se construise, puis ajuster les seuils de `regles.mjs` d'après les premiers résultats réels.

## Modèle Gemini retiré (6 novembre 2026)

- Le premier lancement des villes a échoué partout : `gemini-2.5-flash` n'est plus disponible pour les nouveaux comptes (erreur 404 ; Google recommande `gemini-3.8-flash`). Modèle par défaut changé dans `actualites.mjs`, `villes.mjs` et `bons-plans/generer.mjs` ; `GEMINI_MODEL` permet de le changer sans toucher au code.
- Les trois scripts s'arrêtent maintenant dès la première erreur 404 (au lieu de refaire 193 appels voués à l'échec).
- À vérifier au prochain lancement réel : la recherche web (`google_search`) fonctionne-t-elle avec ce modèle par l'API actuelle ? Google évoque une « Interactions API » ; si la réponse n'a plus de sources, le topo est refusé (c'est le garde-fou) et il faudra adapter l'appel.

## Quota Gemini refusé (7 novembre 2026)

- Après le changement de modèle, les villes échouent en 429 « You exceeded your current quota » : le projet Google de la clé n'a pas (ou plus) de quota pour ce modèle avec la recherche web. Ce n'est pas un défaut du code.
- Les scripts villes et actualités s'arrêtent maintenant après 3 refus de quota consécutifs (au lieu de ~2 min perdues par pays). Les lancements manuels des deux workflows acceptent « limite » (nombre de pays, 3 pour un essai) et « modele ».
- À faire côté utilisateur : regarder https://ai.dev/rate-limit (quota du modèle et de la recherche web), activer la facturation du projet si le palier gratuit n'inclut pas la recherche web pour ce modèle, ou essayer un autre modèle via l'entrée « modele ».

## 7 novembre 2026 : nouvel accueil et identité Voyages Malins
- Fait : accueil refondu, palette et nom du logo. À voir : le compte d'éléments de l'accueil (EcoIndex) a augmenté ; logo carré à brancher en favicon ; trois maquettes `demo-*.astro` toujours non commitées.

## 7 novembre 2026 (nuit) : générateur de liste de bagages
- Fait et publié ni publié : `/outils`, `/outils/liste-de-bagages`, `src/data/bagages.ts`, lien sur les fiches pays.
- Correctif inclus : la classe `.fil` de mon parcours d'accueil entrait en collision avec le fil d'Ariane (cartes énormes sur toutes les pages avec fil d'Ariane, dans le commit 8d6ba97 déjà en ligne) ; renommée `.parcours-liste`. À publier rapidement.
- À faire : tester les coches et l'impression sur un vrai téléphone ; ajouter les objets personnels si souhaité ; relire les objets de `bagages.ts`.

## Images du carrousel : suivi des licences (7 novembre 2026)

- Créé `src/assets/carousel/SOURCES.md` pour conserver, avec chaque image, le nom de fichier, le photographe, les liens vers la page et le profil, la licence et la date de téléchargement. Première entrée : photo Unsplash de Svetlana Gumerova, `svetlana-gumerova-6fAgnT3Dhl4-unsplash.jpg`.

## 7 novembre 2026 (nuit) : « Quand partir ? » et « Estimer le budget »
- Fait et publié : les deux pages, l'import (`scripts/importer-quand-partir.mjs`), `quand-partir.ts`, `budget-voyage.ts`.
- **Décision à prendre** : la page budget n'a aucune estimation. Soit trouver une source défendable pour quelques destinations, soit la retirer du menu et du plan du site tant qu'elle est vide.
- Étendre « Quand partir ? » hors Europe demande une autre source de fréquentation et de prix (Eurostat ne couvre que l'Europe).
- Le build local peut manquer de mémoire (code 134) : relancer, ou `NODE_OPTIONS=--max-old-space-size=6144 npm test`.

## 7 novembre 2026 (soir) : calendrier sur les fiches pays
- Fait : calendrier « quand partir » sur les 10 pays documentés, bloc « Préparer votre départ » sur toutes les fiches. À faire : étendre à d’autres pays (autre source de fréquentation et de prix nécessaire) ; décider quand la page budget aura des données.

## 7 novembre 2026 (nuit) : calendrier climatique pour tous les pays
- Fait : 194 pays dans `quand-partir.json` (10 documentés + 184 capitales). Calendrier sur chaque fiche, sauf pays déconseillés et Russie. À faire : relire les libellés sur quelques pays (la capitale peut mal représenter un pays), et chercher une source d’affluence et de prix hors Europe.

## 7 novembre 2026 (nuit) : Fil d'Ariane, déconseillé, consentement
- Fait : bloc Fil d'Ariane sur toutes les fiches, calendrier « Déconseillé » pour les pays à risque, bandeau de consentement et Google Tag Manager (GTM-K6DKPJXN) après acceptation, mentions légales et CLAUDE.md mis à jour.
- À vérifier : dans GTM (mode aperçu), que la balise Google Analytics se déclenche après acceptation ; refaire la mesure EcoIndex (nouveaux blocs, bandeau). Le bandeau et le script ajoutent des éléments : l'accueil peut avoir dépassé le seuil du A.
