// Modèle de données d'un pays : un fichier par pays, rendu par les mêmes pages (src/pages/pays/).

// Bloc de contenu. Le HTML autorisé se limite aux liens, <strong> et <em>, écrits par l'éditeur.
export type Bloc =
  | { type: 'p'; html: string }
  | { type: 'liste'; items: string[] }
  | { type: 'tableau'; entetes: string[]; lignes: string[][] }
  | { type: 'alerte'; titre?: string; warn?: boolean; html: string };

export type Source = { label: string; url: string; nature?: string };

export type Section = {
  id?: string;
  titre: string;
  // « ok » = vérifié sur une source officielle récente, « warn » = à confirmer
  badge?: { type: 'ok' | 'warn'; texte: string };
  blocs: Bloc[];
  sources?: Source[];
  note?: string;
};

export type RubriqueSlug = 'voyager' | 'vivre' | 'travailler' | 'paiements' | 'langue-culture';

export type Rubrique = {
  slug: RubriqueSlug;
  titre: string;
  intro: string;
  resume: string; // phrase de la carte sur la page du pays
  icone: string;
  sections: Section[];
};

// [langue du pays, prononciation à la française, traduction]
export type Phrase = [string, string, string];

export type Lecon = {
  slug: string;
  titre: string;
  intro: string;
  phrases: Phrase[];
  astuce: string;
  img?: string;
  imgAlt?: string;
};

export type PaysComplet = {
  complet: true;
  iso: string; // code ISO 3166-1 alpha-3, lien avec la fiche mondiale
  slug: string;
  nom: string;
  article: string; // « la Finlande », « l’Albanie »
  accroche: string;
  couleur: string; // couleur principale de la page du pays
  // Langue des leçons ; `code` sert à choisir la voix de synthèse du navigateur
  langue: { nom: string; code: string };
  devise: string;
  conseilsVoyageurs: string; // page officielle du ministère français
  verifie: string;
  rubriques: Rubrique[];
  lecons: Lecon[];
  sourcesSupplementaires?: Source[];
  mediasLocaux: Media[];
  test?: boolean; // fiche non relue : bandeau « fiche en test » et mention dans le menu
};

export type PaysBientot = {
  complet: false;
  slug: string;
  nom: string;
  article: string;
};

export type Pays = PaysComplet | PaysBientot;

// Média d'actualité local, listé sous le topo hebdomadaire. La nature est donnée à titre indicatif.
export type Media = { nom: string; url: string; nature: string; langue: string };
