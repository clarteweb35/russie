# Avancement des fiches pays

Fichier de suivi des guides pays. Dernière mise à jour : 4 novembre 2026, après le lot 1.
Liste raisonnée des pays envisagés : `.ai/PAYS_PREVUS.md`. Suivi général du projet : `.ai/AVANCEMENT.md`.

## Comment lire ce fichier

- **Fait** : la fiche existe, le site se construit (`npm test`), elle est publiée avec le bandeau « Fiche en test ».
- **Sûr** : ce qui a été confirmé par une **source officielle** (fiche du ministère français, portail gouvernemental). Marqué « Vérifié » sur le site.
- **À confirmer** : sources non officielles (guides, blogs, cabinets), ou sources qui se contredisent. Marqué « À confirmer » sur le site.
- **À documenter** : sujet volontairement laissé vide faute de source fiable. Rien n'est inventé.
- **Reste à faire** : ce qu'il faut encore pour sortir du mode test.

**Règle valable pour tous les pays** : seules les *adresses* des fiches officielles du ministère ont été vérifiées (réponse 200). Le contenu de ces fiches n'a été lu que par extraits. La rubrique « Sécurité » est donc à lire par un humain pour chaque pays avant de passer en fiche complète.

## Vue d'ensemble

| Pays | Vague | État | Fiche | Leçons | Médias | Niveau de fiabilité |
|---|---|---|---|---|---|---|
| Finlande | pilote | complète (non relue) | oui | 6, finnois | 4 | Bonne : sources officielles pour la sécurité, l'entrée, la santé, le travail |
| Albanie | test | test | oui | 6, albanais | 4 | Faible : sources privées contradictoires |
| Espagne | test | test | oui | 6, espagnol | 4 | Moyenne : extrait de fiche officielle, reste privé |
| Allemagne | test | test | oui | 6, allemand | 4 | Faible à moyenne |
| Sénégal | test | test | oui | 6 (courtes), wolof | 4 | Faible : fiche reprise par une association |
| Vietnam | test | test | oui | 6, vietnamien | 4 | Faible à moyenne : exemption de visa à vérifier |
| **Géorgie** | 1 | test | oui | 6, géorgien | 4 | Moyenne : extraits de fiche officielle |
| **Turquie** | 1 | test | oui | 6, turc | 4 | Faible : fiche officielle non lue |
| **Arménie** | 1 | test | oui | 6, arménien | 4 | Moyenne : extraits de fiche officielle |
| **Kazakhstan** | 1 | test | oui | 6, kazakh | 4 | Bonne pour l'entrée (page officielle d'août 2026), reste privé |
| Serbie | 1 | **à faire** | non | | | |
| Émirats arabes unis | 1 | **à faire** | non | | | |
| Thaïlande | 1 | **à faire** | non | | | |

## Détail des fiches du lot 1 (4 novembre 2026)

### Géorgie
- **Sûr (source officielle)** : pays sûr dans l'ensemble hors zones déconseillées ; vigilance routière de nuit et dans les tunnels ; assurance voyage exigée, rédigée en anglais ou en géorgien ; refus d'entrée possible même avec un permis de séjour géorgien (manifestations, réseaux sociaux, photos de passeport d'enfants non conformes à l'âge).
- **À confirmer** : séjour sans visa d'un an pour les Européens (guide officiel du tourisme géorgien et guides de voyage) ; permis de séjour temporaire d'un an, banque (TBC, Bank of Georgia), statut micro-entreprise ou société pour travailler ; « permis de travail obligatoires depuis mars 2026 ».
- **À documenter** : argent, santé, logement, coût de la vie, impôts, emploi, culture.
- **Reste** : lire la fiche officielle (montant de l'assurance, zones rouges, numéros d'urgence) ; relire les leçons de géorgien (consonnes éjectives non rendues).

### Turquie
- **Sûr** : rien de confirmé par une source officielle française dans cette recherche.
- **À confirmer** : 90 jours sur 180 sans visa ; carte d'identité ou passeport valable 150 jours après l'entrée ; séismes (source belge) ; permis de séjour (ikamet) distinct du permis de travail ; assurance santé obligatoire (âge contradictoire selon les sources).
- **À documenter** : sécurité, argent, santé, téléphone, banque, logement, salaire minimum, impôts, culture.
- **Reste** : lire la fiche officielle (entrée et sécurité) ; relire les leçons de turc.

### Arménie
- **Sûr (source officielle)** : Français sans visa pour moins de six mois ; postes-frontières avec la Turquie et l'Azerbaïdjan fermés.
- **À confirmer** : permis temporaire de 1 à 3 ans ; coûts variables (115 à 260 euros selon les sources) ; réforme annoncée après juillet 2026 ; impôt forfaitaire de 20 % ; statut d'entrepreneur individuel pour les télétravailleurs.
- **À documenter** : sécurité (fiche non lue), banque, santé, logement, argent.
- **Reste** : lire la fiche officielle ; relire les leçons d'arménien (alphabet propre, sons non rendus).

### Kazakhstan
- **Sûr (source officielle)** : 30 jours sans visa pour les Français, visites illimitées ; autorisation électronique d'entrée à obtenir au plus tard 72 heures avant l'arrivée (page d'août 2026) ; portail officiel egov.kz pour le permis de travail.
- **À confirmer** : empreintes obligatoires depuis 2024 ; quotas de permis de travail ; visas Astana Hub et AIFC ; notification de séjour sous trois jours (page peu fiable).
- **À documenter** : sécurité (fiche non lue), argent, santé, banque, logement, impôts.
- **Reste** : confirmer la plateforme et le coût de l'autorisation électronique ; lire la fiche de sécurité ; relire les leçons de kazakh.

## Ce qui est transversal et déjà en place

- Topo hebdomadaire par pays (script, workflow, clés par pays `GEMINI_API_KEY_<PAYS>` ou clé commune `GEMINI_API_KEY`). **N'a jamais tourné avec une vraie clé.** Pays sans clé : ignorés avec un avertissement.
- Médias locaux par pays, vérifiés un à un (réponse du site). Natures indicatives.
- Pas à pas d'installation d'une voix de synthèse dans chaque leçon.
- Mention « image générée par IA » : aucune image pour les nouveaux pays pour l'instant (vignettes colorées).

## Reste à faire, tous pays confondus (par priorité)

1. [ ] **Terminer la vague 1** : Serbie, Émirats arabes unis, Thaïlande.
2. [ ] **Faire relire les leçons par des locuteurs** (13 langues au total) : priorité au wolof, au vietnamien (tons), au géorgien, à l'arménien, au thaï et à l'arabe.
3. [ ] **Lire les rubriques « Sécurité » des fiches officielles** et reporter les points sûrs (numéros d'urgence compris) : aucun numéro d'urgence n'est vérifié aujourd'hui.
4. [ ] **Ajouter les secrets du topo** : `GEMINI_API_KEY_<PAYS>` pour chaque pays (3 existent : RUSSIE, FINLANDE, ALBANIE), ou une clé commune `GEMINI_API_KEY`.
5. [ ] Photos des cartes de leçons de tous les pays (avec la mention IA via `legendeIA()`).
6. [ ] Passer chaque fiche en « complète » (`test: false`) après relecture.
7. [ ] Vagues 2 à 4 de `.ai/PAYS_PREVUS.md`.
8. [ ] Rendre le convertisseur de devises générique (euro vers lari, dram, tenge, livre turque, dirham, baht...).
