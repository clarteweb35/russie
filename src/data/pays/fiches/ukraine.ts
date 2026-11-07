import type { PaysComplet } from '../types';
import { aDocumenter, diplo } from '../aides';
import { leconsType, rubriquesType } from '../modele';

const D = diplo('ukraine');
const FICHE_PDF = 'https://www.diplomatie.gouv.fr/files/files/pdf/cav/Ukraine%20-%20Minist%C3%A8re%20de%20l%27Europe%20et%20des%20Affaires%20%C3%A9trang%C3%A8res.pdf';

export const ukraine: PaysComplet = {
  complet: true,
  test: true,
  iso: 'UKR',
  slug: 'ukraine',
  nom: 'Ukraine',
  article: 'l’Ukraine',
  accroche: 'Un pays en guerre : le ministère français déconseille formellement tout déplacement. Cette fiche aide surtout à comprendre la langue et à suivre l’actualité. Fiche beta, à vérifier.',
  couleur: '#0057b7',
  langue: { nom: 'ukrainien', code: 'uk-UA' },
  devise: 'hryvnia',
  conseilsVoyageurs: D.securite,
  verifie: '4 novembre 2026',
  mediasLocaux: [
    { nom: 'Ukrinform', url: 'https://www.ukrinform.net', nature: 'agence de presse publique', langue: 'anglais, ukrainien' },
    { nom: 'Suspilne', url: 'https://suspilne.media', nature: 'média public', langue: 'ukrainien' },
    { nom: 'The Kyiv Independent', url: 'https://kyivindependent.com', nature: 'média indépendant en anglais', langue: 'anglais' },
    { nom: 'Ukrainska Pravda', url: 'https://www.pravda.com.ua', nature: 'média en ligne privé', langue: 'ukrainien, anglais' },
  ],
  rubriques: rubriquesType({
    lieu: 'en Ukraine',
    monnaie: 'la hryvnia',
    introVoyager: 'Le ministère de l’Europe et des Affaires étrangères déconseille formellement tout déplacement en Ukraine. Cette page ne décrit pas de formalités de voyage : elle renvoie à la fiche officielle.',
    securite: {
      id: 'securite',
      titre: 'Sécurité et conseils officiels',
      badge: { type: 'warn', texte: 'À confirmer' },
      blocs: [{ type: 'alerte', warn: true, titre: 'Déplacement formellement déconseillé', html: 'D’après la fiche du ministère de l’Europe et des Affaires étrangères, l’Ukraine est une zone de guerre sur l’ensemble de son territoire et tout déplacement, quel qu’en soit le motif, y est <strong>formellement déconseillé</strong>. Lisez la fiche à jour : la situation évolue.' }],
      sources: [
        { label: 'Ministère de l’Europe et des Affaires étrangères, fiche Ukraine (sécurité)', url: D.securite, nature: 'source officielle' },
        { label: 'Ministère de l’Europe et des Affaires étrangères, fiche Ukraine (PDF)', url: FICHE_PDF, nature: 'source officielle' },
      ],
      note: 'Information relevée dans la fiche officielle lors de la recherche ; relisez la fiche en ligne, qui seule fait foi.',
    },
    entree: aDocumenter('Entrée et séjour', 'Aucune formalité n’est détaillée ici : la fiche officielle du ministère est la seule référence à suivre.', 'entree'),
    introLangue: 'La langue officielle est l’ukrainien, écrit en cyrillique. Dans le contexte de la guerre, l’usage du russe peut être très mal perçu : préférez quelques mots d’ukrainien ou l’anglais.',
    langue: [],
  }),
  lecons: leconsType({
    salutations: [['Добрий день', 'dobryï dène'], ['Добрий вечір', 'dobryï vètchir'], ['Дякую', 'diakouyou'], ['Будь ласка', 'boud laska'], ['Вибачте', 'vybatchté'], ['Так', 'tak'], ['Ні', 'ni'], ['До побачення', 'do pobatchènnia']],
    presenter: [['Мене звати…', 'ménè zvati'], ['Я з Франції', 'ya z frantsiï'], ['Я трохи розмовляю українською', 'ya trokhy rozmovliayou oukraïnskoyou'], ['Ви розмовляєте англійською?', 'vy rozmovliayété anhliïskoyou'], ['Я не зрозумів', 'ya né zrozoumiv']],
    chiffres: [['один', 'odyn'], ['два', 'dva'], ['три', 'try'], ['п’ять', 'piate'], ['десять', 'dèssiate'], ['Скільки це коштує?', 'skilki tsé kochtouyé']],
    deplacer: [['Де…?', 'dé'], ['Вокзал', 'vokzal'], ['Аеропорт', 'aéroport'], ['Квиток', 'kvytok'], ['Ліворуч', 'livoroutch'], ['Праворуч', 'pravoroutch'], ['Прямо', 'priamo']],
    resto: [['Столик на двох', 'stolyk na dvokh'], ['Меню, будь ласка', 'ménieu boud laska'], ['Вода', 'voda'], ['Кава', 'kava'], ['Рахунок, будь ласка', 'rakhounok boud laska'], ['Я хотів би…', 'ya khotiv by']],
    urgences: [['Допоможіть!', 'dopomojit'], ['Викличте поліцію!', 'vyklitché politsiyou'], ['Викличте швидку допомогу!', 'vyklitché chvydkou dopomohou'], ['Мені потрібен лікар', 'méni potriben likar'], ['Я загубився', 'ya zahoubyvsia'], ['Де аптека?', 'dé aptèka']],
  }, 'Les prononciations sont très approximatives. Faites relire par un locuteur. N’utilisez pas le russe pour vous faire comprendre.'),
  sourcesSupplementaires: [],
};
