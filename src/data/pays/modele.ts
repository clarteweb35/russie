import type { Lecon, Phrase, Rubrique, Section } from './types';
import { aDocumenter, cultureACompleter, paiementsACompleter } from './aides';

// Modèle commun des guides rédigés à partir de peu de sources : les rubriques et les six leçons ont toujours la même forme.
// Chaque pays ne fournit que ce qui lui est propre (sécurité, entrée, langue) ; le reste est marqué « À documenter ».

// [texte dans la langue du pays, prononciation à la française, traduction française si elle diffère du modèle]
type Paire = [string, string, string?];

// Phrases françaises des six leçons, dans l'ordre : le pays fournit les traductions dans le même ordre.
const FR = {
  salutations: ['Bonjour', 'Bonsoir', 'Merci', 'S’il vous plaît', 'Excusez-moi', 'Oui', 'Non', 'Au revoir'],
  presenter: ['Je m’appelle…', 'Je viens de France', 'Je parle un peu la langue locale', 'Parlez-vous anglais ?', 'Je n’ai pas compris'],
  chiffres: ['1', '2', '3', '5', '10', 'Combien ça coûte ?'],
  deplacer: ['Où est… ?', 'La gare', 'L’aéroport', 'Un billet', 'À gauche', 'À droite', 'Tout droit'],
  resto: ['Une table pour deux', 'Le menu, s’il vous plaît', 'De l’eau', 'Un café', 'L’addition, s’il vous plaît', 'Je voudrais…'],
  urgences: ['Au secours !', 'Appelez la police !', 'Appelez une ambulance !', 'J’ai besoin d’un médecin', 'Je suis perdu(e)', 'Où est la pharmacie ?'],
} as const;

export type TraductionsLecons = { [K in keyof typeof FR]: Paire[] };

const phrases = (cle: keyof typeof FR, t: TraductionsLecons): Phrase[] => {
  if (t[cle].length !== FR[cle].length) throw new Error(`Leçon « ${cle} » : ${FR[cle].length} phrases attendues, ${t[cle].length} reçues`);
  return t[cle].map(([texte, prononciation, fr], i) => [texte, prononciation, fr ?? FR[cle][i]] as Phrase);
};

export const leconsType = (t: TraductionsLecons, astuceSalut: string): Lecon[] => [
  { slug: 'salutations', titre: 'Salutations et politesse', intro: 'Les mots à utiliser dès que vous parlez à quelqu’un.', phrases: phrases('salutations', t), astuce: astuceSalut },
  { slug: 'se-presenter', titre: 'Se présenter', intro: 'Dire qui vous êtes et ce que vous ne comprenez pas.', phrases: phrases('presenter', t), astuce: 'Préparez votre prénom et répétez la phrase à voix haute avant de partir.' },
  { slug: 'chiffres-prix-heure', titre: 'Chiffres et prix', intro: 'Pour comprendre un prix et compter votre argent.', phrases: phrases('chiffres', t), astuce: 'Demandez le prix avant d’acheter, et vérifiez le montant sur un écran ou une calculatrice.' },
  { slug: 'se-deplacer', titre: 'Se déplacer', intro: 'Demander son chemin et acheter un billet.', phrases: phrases('deplacer', t), astuce: 'Montrez l’adresse écrite sur votre téléphone : c’est souvent plus sûr que de la dire.' },
  { slug: 'restaurant-courses', titre: 'Restaurant et courses', intro: 'Commander, demander l’addition et faire vos courses.', phrases: phrases('resto', t), astuce: 'Pointer le plat sur la carte et sourire marche partout.' },
  { slug: 'urgences', titre: 'Urgences et phrases de survie', intro: 'Les phrases à connaître en cas de problème.', phrases: phrases('urgences', t), astuce: 'Les numéros d’urgence n’ont pas été vérifiés ici : notez-les depuis la fiche officielle du ministère avant de partir.' },
];

export type ParamsRubriques = {
  lieu: string; // « en Estonie », « au Kirghizistan »
  monnaie: string; // « l’euro »
  introVoyager: string;
  securite: Section;
  entree: Section;
  argent?: Section;
  vivre?: Section[];
  travailler?: Section[];
  introLangue: string;
  langue: Section[];
};

export const rubriquesType = (p: ParamsRubriques): Rubrique[] => [
  {
    slug: 'voyager',
    titre: `Voyager ${p.lieu}`,
    intro: p.introVoyager,
    resume: 'Entrée, sécurité et argent.',
    icone: '✈️',
    sections: [p.securite, p.entree, p.argent ?? aDocumenter('Argent et paiement', 'L’usage des cartes françaises et des espèces n’a pas été vérifié. Renseignez-vous auprès de votre banque avant de partir.', 'argent')],
  },
  {
    slug: 'vivre',
    titre: `Vivre ${p.lieu}`,
    intro: 'S’installer demande un statut de résident, un compte bancaire et un logement. Les démarches de ce pays n’ont pas encore été documentées.',
    resume: 'Séjour, banque et démarches.',
    icone: '🏠',
    sections: p.vivre ?? [aDocumenter('Titre de séjour de longue durée'), aDocumenter('Banque, santé et logement')],
  },
  {
    slug: 'travailler',
    titre: `Travailler ${p.lieu}`,
    intro: 'Travailler légalement suppose un permis ou un statut. Cette page est à compléter.',
    resume: 'Permis de travail et statut.',
    icone: '💼',
    sections: p.travailler ?? [aDocumenter('Le droit de travailler')],
  },
  paiementsACompleter(p.monnaie),
  {
    slug: 'langue-culture',
    titre: 'Langue et culture',
    intro: p.introLangue,
    resume: 'Langue, écriture et usages.',
    icone: '🎭',
    sections: [...p.langue, cultureACompleter()],
  },
];
