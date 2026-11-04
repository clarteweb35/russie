import type { PaysComplet } from './types';
import { diplo, securiteALire } from './aides';
import { leconsType, rubriquesType } from './modele';

const D = diplo('turkmenistan');

export const turkmenistan: PaysComplet = {
  complet: true,
  test: true,
  iso: 'TKM',
  slug: 'turkmenistan',
  nom: 'Turkménistan',
  article: 'le Turkménistan',
  accroche: 'Un des pays les plus fermés d’Asie centrale : le visa est obligatoire et, pour le tourisme, une invitation est exigée. Fiche en test, à vérifier.',
  couleur: '#00843d',
  langue: { nom: 'turkmène', code: 'tk-TM' },
  devise: 'manat turkmène',
  conseilsVoyageurs: D.securite,
  verifie: '4 novembre 2026',
  mediasLocaux: [
    { nom: 'TDH (agence d’État)', url: 'https://tdh.gov.tm', nature: 'agence de presse d’État', langue: 'turkmène, russe, anglais' },
    { nom: 'Turkmen.news', url: 'https://www.turkmen.news', nature: 'média indépendant basé à l’étranger', langue: 'russe' },
    { nom: 'Azatlyk (RFE/RL)', url: 'https://rus.azathabar.com', nature: 'service de Radio Free Europe', langue: 'russe, turkmène' },
  ],
  rubriques: rubriquesType({
    lieu: 'au Turkménistan',
    monnaie: 'le manat turkmène',
    introVoyager: 'Le Turkménistan se prépare longtemps à l’avance : le visa touristique exige une lettre d’invitation, et les délais se comptent en semaines.',
    securite: securiteALire(D.securite, 'Turkménistan'),
    entree: {
      id: 'entree',
      titre: 'Visa et invitation',
      badge: { type: 'warn', texte: 'À confirmer' },
      blocs: [
        { type: 'liste', items: [
          'Le <strong>visa est obligatoire</strong> pour les Français et se demande, en général, auprès de l’ambassade du Turkménistan à Paris.',
          'Pour le <strong>tourisme</strong>, il faut une <strong>lettre d’invitation</strong> délivrée par le service des migrations, demandée par une agence de voyages ou une autre partie invitante.',
          'Comptez <strong>plusieurs semaines</strong> : les guides parlent de deux à quatre semaines de traitement.',
          'Un <strong>visa de transit</strong> (court) peut se demander sans invitation, mais il est très court et difficile à prolonger.',
          'Une assurance voyage est demandée, et un enregistrement a lieu à l’arrivée.',
        ] },
      ],
      sources: [
        { label: 'Ministère de l’Europe et des Affaires étrangères, fiche Turkménistan (entrée et séjour)', url: D.entree, nature: 'source officielle' },
        { label: 'Lonely Planet, visa pour le Turkménistan', url: 'https://www.lonelyplanet.fr/destinations/asie/turkmenistan/visa', nature: 'guide de voyage' },
        { label: 'Evaneos, visa pour le Turkménistan', url: 'https://www.evaneos.fr/turkmenistan/voyage/informations-pratiques/visa/', nature: 'agence de voyages (source commerciale)' },
      ],
      note: 'Les sources se contredisent sur le visa à l’arrivée : ne comptez pas dessus.',
    },
    introLangue: 'Le turkmène s’écrit avec l’alphabet latin (avec ä, ç, ž, ň, ö, ş, ü, ý). Le russe reste largement compris et utile pour se débrouiller.',
    langue: [],
  }),
  lecons: leconsType({
    salutations: [['Salam', 'salam'], ['Agşamyňyz haýyrly', 'agchamınız hayırly'], ['Sag boluň', 'sag bolounn'], ['Haýyş', 'hayich'], ['Bagyşlaň', 'baghichlan'], ['Hawa', 'hava'], ['Ýok', 'yok'], ['Hoş galyň', 'hoch galınn']],
    presenter: [['Meniň adym…', 'mènin adım'], ['Men Fransiýadan', 'mèn fransiyadan'], ['Men az-owlak türkmençe gürleýärin', 'mèn az-ovlak türkmèntché gurlèyèrin'], ['Siz iňlisçe gürleýärsiňizmi?', 'siz inglistché gurlèyèrsinizmi'], ['Düşünmedim', 'düchünmèdim']],
    chiffres: [['bir', 'bir'], ['iki', 'iki'], ['üç', 'utch'], ['bäş', 'bèch'], ['on', 'on'], ['Bu näçe?', 'bou nètché']],
    deplacer: [['… nirede?', 'nirédé'], ['Wokzal', 'vokzal'], ['Howa menzili', 'hova mènzili'], ['Bilet', 'bilèt'], ['Çepe', 'tchépé'], ['Saga', 'saga'], ['Göni', 'gueuni']],
    resto: [['Iki adamlyk stol', 'iki adamlık stol'], ['Menýu, haýyş', 'mènyou hayich'], ['Suw', 'souv'], ['Kofe', 'kofé'], ['Hasap, haýyş', 'hassap hayich'], ['Men … isleýärin', 'mèn isléyèrin']],
    urgences: [['Kömek ediň!', 'keumèk édin'], ['Polisiýany çagyryň!', 'polissiyani tchagırın'], ['Tiz kömek çagyryň!', 'tiz keumèk tchagırın'], ['Maňa lukman gerek', 'mana loukman guèrèk'], ['Ýoldan azaşdym', 'yoldan azachdım'], ['Dermanhana nirede?', 'dèrmanhana nirédé']],
  }, 'Le russe est très utile ici (voir les leçons de russe). Prononciations très approximatives : faites relire par un locuteur.'),
  sourcesSupplementaires: [],
};
