// Partenaires affiliés Awin : source unique pour l'accueil de Voyages Malins ET pour les fiches pays.
// Pour changer un partenaire, une règle par région ou la liste des pays Schengen, c'est ici et nulle part ailleurs.

// Identifiant d'éditeur Awin (public : il figure dans chaque lien affilié).
export const AWIN_ID = '2993527';

// Construit un lien affilié Awin vers une page du marchand.
export const lienAwin = (marchand: number, cible: string, campagne?: string) =>
  `https://www.awin1.com/cread.php?awinmid=${marchand}&awinaffid=${AWIN_ID}${campagne ? `&campaign=${encodeURIComponent(campagne).replace(/%20/g, '+')}` : ''}&ued=${encodeURIComponent(cible)}`;

export type Partenaire = {
  id: string;
  nom: string;
  categorie: string;
  logo: string; // dans public/images/partenaires/
  description: string;
  url?: string;
  sousLiens?: { label: string; url: string }[];
};

export const PARTENAIRES: Partenaire[] = [
  {
    id: 'singapore-airlines',
    nom: 'Singapore Airlines',
    categorie: 'Vols',
    logo: '/images/partenaires/singapore-airlines.png',
    description: "Vols longue distance vers l'Asie et l'Océanie, avec un service reconnu pour son confort.",
    url: lienAwin(9257, 'https://www.singaporeair.com/fr_FR/fr/home'),
  },
  {
    id: 'bourse-des-voyages',
    nom: 'Bourse des Voyages',
    categorie: 'Séjours sur mesure',
    logo: '/images/partenaires/bourse-des-voyages.png',
    description: 'Voyages sur mesure et circuits organisés, avec une expertise sur les destinations lointaines.',
    url: lienAwin(116343, 'https://www.bourse-des-voyages.com/', 'Focus Europe du Nord'),
  },
  {
    id: 'safari-en-afrique',
    nom: 'Safari en Afrique',
    categorie: 'Safaris',
    logo: '/images/partenaires/safari-en-afrique.png',
    description: "Spécialiste des safaris et voyages sur mesure en Afrique australe et de l'Est.",
    url: lienAwin(68308, 'https://safarienafrique.fr/'),
  },
  {
    id: 'hellosafe',
    nom: 'HelloSafe',
    categorie: 'Assurance',
    logo: '/images/partenaires/hellosafe.png',
    description: "Comparateur d'assurances voyage. Choisissez la couverture adaptée à votre séjour :",
    sousLiens: [
      { label: 'Assurance voyage', url: lienAwin(128757, 'https://hellosafe.fr/assurance-voyage') },
      { label: 'Assurance annulation', url: lienAwin(128757, 'https://hellosafe.fr/assurance-voyage/annulation') },
      { label: 'Assurance Schengen', url: lienAwin(128757, 'https://hellosafe.fr/assurance-voyage/schengen') },
    ],
  },
];

export const partenaireParId = (id: string) => PARTENAIRES.find((p) => p.id === id);

// ---- Fiches pays ----

// Assurances HelloSafe proposées sur toute fiche pays ; « Schengen » seulement si le pays est dans l'espace Schengen.
export const ASSURANCE_VOYAGE = partenaireParId('hellosafe')!.sousLiens![0];
export const ASSURANCE_ANNULATION = partenaireParId('hellosafe')!.sousLiens![1];
export const ASSURANCE_SCHENGEN = partenaireParId('hellosafe')!.sousLiens![2];

// Membres de l'espace Schengen (codes ISO). À tenir à jour si la liste change (Bulgarie et Roumanie : frontières terrestres levées en 2025).
export const SCHENGEN = new Set('AUT BEL BGR HRV CZE DNK EST FIN FRA DEU GRC HUN ISL ITA LVA LIE LTU LUX MLT NLD NOR POL PRT ROU SVK SVN ESP SWE CHE'.split(' '));

// Partenaire proposé selon la région du pays. Premier critère rempli = partenaire affiché (plusieurs règles peuvent s'appliquer).
// `regions` et `sousRegions` : valeurs du fichier src/data/monde/pays.json.
export const REGLES_PAR_REGION: { partenaire: string; regions?: string[]; sousRegions?: string[]; sauf?: string[] }[] = [
  { partenaire: 'singapore-airlines', regions: ['Asie', 'Océanie'] },
  { partenaire: 'safari-en-afrique', sousRegions: ['Afrique australe', 'Afrique de l’Est'] },
  // Destinations lointaines hors Europe
  { partenaire: 'bourse-des-voyages', regions: ['Asie', 'Afrique', 'Amériques', 'Océanie'] },
];

// Pays où aucun lien affilié de voyage n'est affiché (en plus des pays déconseillés par le ministère : voir ALERTE_SECURITE).
export const SANS_MONETISATION = new Set(['RUS']);

export const mention = 'Liens affiliés : en cliquant, vous ne payez pas plus cher.';
