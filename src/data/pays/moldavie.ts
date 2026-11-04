import type { PaysComplet } from './types';
import { diplo, securiteALire } from './aides';
import { leconsType, rubriquesType } from './modele';

const D = diplo('moldavie');

export const moldavie: PaysComplet = {
  complet: true,
  test: true,
  iso: 'MDA',
  slug: 'moldavie',
  nom: 'Moldavie',
  article: 'la Moldavie',
  accroche: 'Un petit pays d’Europe de l’Est, de langue roumaine, candidat à l’Union européenne, où le russe reste très utilisé. Fiche en test, à vérifier.',
  couleur: '#0046ae',
  langue: { nom: 'roumain', code: 'ro-MD' },
  devise: 'leu moldave',
  conseilsVoyageurs: D.securite,
  verifie: '4 novembre 2026',
  mediasLocaux: [
    { nom: 'Moldpres', url: 'https://www.moldpres.md', nature: 'agence de presse d’État', langue: 'roumain, russe, anglais' },
    { nom: 'Ziarul de Gardă', url: 'https://zdg.md', nature: 'journal d’investigation privé', langue: 'roumain' },
    { nom: 'Newsmaker', url: 'https://newsmaker.md', nature: 'média en ligne privé', langue: 'russe, roumain' },
  ],
  rubriques: rubriquesType({
    lieu: 'en Moldavie',
    monnaie: 'le leu moldave',
    introVoyager: 'Les ressortissants de l’Union européenne entrent en Moldavie sans visa pour un court séjour. La Transnistrie, région séparatiste, demande une attention particulière.',
    securite: securiteALire(D.securite, 'Moldavie'),
    entree: {
      id: 'entree',
      titre: 'Entrée et séjour',
      badge: { type: 'warn', texte: 'À confirmer' },
      blocs: [
        { type: 'liste', items: [
          'Les ressortissants de l’Union européenne peuvent séjourner <strong>jusqu’à 90 jours sur une période de 180 jours</strong> sans visa, selon les sources consultées.',
          'Un site spécialisé évoque une régularisation auprès des autorités dans un délai de <strong>72 heures</strong> (point non confirmé par une source officielle).',
          'La <strong>Transnistrie</strong> n’est pas contrôlée par les autorités moldaves : lisez la fiche officielle avant de vous y rendre et conservez le justificatif remis à l’entrée.',
        ] },
      ],
      sources: [
        { label: 'Ministère de l’Europe et des Affaires étrangères, fiche Moldavie (entrée et séjour)', url: D.entree, nature: 'source officielle' },
        { label: 'Action-Visas, Moldavie', url: 'https://www.action-visas.com/visa/Moldavie', nature: 'site spécialisé' },
      ],
    },
    introLangue: 'La langue officielle est le roumain (appelé « moldave » dans certains textes). Le russe est très répandu. Le roumain s’écrit avec l’alphabet latin et est proche des langues latines : un francophone en reconnaît beaucoup de mots.',
    langue: [],
  }),
  lecons: leconsType({
    salutations: [['Bună ziua', 'bouna ziwa'], ['Bună seara', 'bouna sara'], ['Mulțumesc', 'moultsoumèsk'], ['Vă rog', 'vè rog'], ['Scuzați-mă', 'skouzatsi mè'], ['Da', 'da'], ['Nu', 'nou'], ['La revedere', 'la révédéré']],
    presenter: [['Mă numesc…', 'mè noumèsk'], ['Sunt din Franța', 'sount din frantsa'], ['Vorbesc puțin românește', 'vorbèsk poutsin romenèchté'], ['Vorbiți engleză?', 'vorbitsi èngléza'], ['Nu am înțeles', 'nou am intsélès']],
    chiffres: [['unu', 'ounou'], ['doi', 'doï'], ['trei', 'trèï'], ['cinci', 'tchintchi'], ['zece', 'zètché'], ['Cât costă?', 'kit kosta']],
    deplacer: [['Unde este…?', 'oundé yèssté'], ['Gara', 'gara'], ['Aeroportul', 'aéroportoul'], ['Un bilet', 'oun bilèt'], ['La stânga', 'la stinga'], ['La dreapta', 'la dryapta'], ['Drept înainte', 'drèpt inaïnté']],
    resto: [['O masă pentru doi', 'o massa pèntrou doï'], ['Meniul, vă rog', 'mènioul vè rog'], ['Apă', 'apa'], ['O cafea', 'o kafya'], ['Nota, vă rog', 'nota vè rog'], ['Aș dori…', 'ach dori']],
    urgences: [['Ajutor!', 'ajoutor'], ['Chemați poliția!', 'kémats politsia'], ['Chemați o ambulanță!', 'kémats o amboulantsa'], ['Am nevoie de un medic', 'am névoyé dé oun médik'], ['Sunt pierdut', 'sount pyèrdout'], ['Unde este farmacia?', 'oundé yèssté farmassia']],
  }, 'Un francophone comprend déjà beaucoup de mots. Le russe est aussi très utile (voir les leçons de russe). Faites relire par un locuteur.'),
  sourcesSupplementaires: [],
};
