import type { PaysComplet } from './types';
import { diplo, securiteALire } from './aides';
import { leconsType, rubriquesType } from './modele';

const D = diplo('japon');

export const japon: PaysComplet = {
  complet: true,
  test: true,
  iso: 'JPN',
  slug: 'japon',
  nom: 'Japon',
  article: 'le Japon',
  accroche: 'Un archipel d’Asie de l’Est où l’on conduit à gauche, où les espèces comptent encore beaucoup et où trois écritures cohabitent. Entrée sans visa pour un court séjour. Fiche beta, à vérifier.',
  couleur: '#bc002d',
  langue: { nom: 'japonais', code: 'ja-JP' },
  devise: 'yen',
  conseilsVoyageurs: D.securite,
  verifie: '5 novembre 2026',
  mediasLocaux: [
    { nom: 'NHK World-Japan', url: 'https://www3.nhk.or.jp/nhkworld', nature: 'média public', langue: 'anglais, français et autres' },
    { nom: 'The Japan Times', url: 'https://www.japantimes.co.jp', nature: 'quotidien privé', langue: 'anglais' },
    { nom: 'Kyodo News', url: 'https://english.kyodonews.net', nature: 'agence de presse', langue: 'anglais' },
    { nom: 'The Asahi Shimbun', url: 'https://www.asahi.com/ajw', nature: 'quotidien privé', langue: 'anglais' },
  ],
  rubriques: rubriquesType({
    lieu: 'au Japon',
    monnaie: 'le yen',
    introVoyager: 'Les Français n’ont pas besoin de visa pour un séjour touristique de 90 jours au plus. Un pré-enregistrement en ligne, facultatif, accélère le passage à l’arrivée.',
    securite: securiteALire(D.securite, 'Japon'),
    entree: {
      id: 'entree',
      titre: 'Entrée sans visa pour le tourisme',
      badge: { type: 'warn', texte: 'À confirmer' },
      blocs: [{ type: 'liste', items: [
        '<strong>Tourisme, 90 jours au plus</strong> : pas de visa pour les Français, selon les guides consultés.',
        '<strong>Passeport</strong> valable pendant toute la durée du séjour.',
        '<strong>Visit Japan Web</strong> : pré-enregistrement en ligne des formalités d’immigration et de douane, facultatif mais recommandé ; un formulaire papier reste possible.',
        'Le séjour sans visa <strong>ne se prolonge pas facilement</strong> ; pour travailler ou étudier, il faut un visa demandé avant le départ.',
      ] }],
      sources: [
        { label: 'Ministère de l’Europe et des Affaires étrangères, fiche Japon (entrée et séjour)', url: D.entree, nature: 'source officielle' },
        { label: 'Office national du tourisme japonais, passeport et formalités', url: 'https://www.japan.travel/fr/fr/guide/passeport-et-formalites/', nature: 'tourisme officiel japonais' },
        { label: 'Evaneos, visa pour le Japon', url: 'https://www.evaneos.fr/japon/voyage/informations-pratiques/visa/', nature: 'agence de voyages (source commerciale)' },
      ],
    },
    introLangue: 'Le japonais combine deux écritures syllabiques (hiragana et katakana) et des caractères d’origine chinoise (kanji). L’anglais est peu pratiqué hors des grands sites touristiques : un traducteur sur téléphone aide beaucoup. La politesse et le calme comptent énormément.',
    langue: [],
  }),
  lecons: leconsType({
    salutations: [['こんにちは', 'konnitchiwa'], ['こんばんは', 'konbanwa'], ['ありがとうございます', 'arigatô gozaïmass'], ['お願いします', 'onégaï chimass'], ['すみません', 'soumimassen'], ['はい', 'haï'], ['いいえ', 'iié'], ['さようなら', 'sayônara']],
    presenter: [['私の名前は…です', 'watachi no namaé wa … dèss'], ['フランスから来ました', 'fouransou kara kimachita'], ['日本語を少し話せます', 'nihongo o soukochi hanassémass'], ['英語を話せますか？', 'éïgo o hanassémass ka'], ['わかりませんでした', 'wakarimassen déchita']],
    chiffres: [['一', 'itchi'], ['二', 'ni'], ['三', 'san'], ['五', 'go'], ['十', 'djû'], ['いくらですか？', 'ikoura dèss ka']],
    deplacer: [['…はどこですか？', 'wa doko dèss ka'], ['駅', 'éki'], ['空港', 'kûkô'], ['切符', 'kippou'], ['左', 'hidari'], ['右', 'migui'], ['まっすぐ', 'massougou']],
    resto: [['二人です', 'foutari dèss'], ['メニューをお願いします', 'ménu o onégaï chimass'], ['水', 'mizou'], ['コーヒー', 'kôhî'], ['お会計をお願いします', 'okaïkéï o onégaï chimass'], ['…をください', 'o koudassaï']],
    urgences: [['助けて！', 'tasouké té'], ['警察を呼んでください！', 'kéïsatsou o yonndé koudassaï'], ['救急車を呼んでください！', 'kyûkyûcha o yonndé koudassaï'], ['医者が必要です', 'icha ga hitsouyô dèss'], ['道に迷いました', 'michi ni mayoïmachita'], ['薬局はどこですか？', 'yakkyoku wa doko dèss ka']],
  }, 'Au Japon, on s’incline légèrement pour saluer. Les prononciations sont approximatives : faites relire par un locuteur.'),
  sourcesSupplementaires: [],
};
