import type { PaysComplet } from '../types';
import { diplo } from '../aides';
import { leconsType, rubriquesType } from '../modele';

const D = diplo('bielorussie');
const FICHE_PDF = 'https://www.diplomatie.gouv.fr/files/files/pdf/cav/Bi%C3%A9lorussie%20-%20Minist%C3%A8re%20de%20l%27Europe%20et%20des%20Affaires%20%C3%A9trang%C3%A8res.pdf';

export const bielorussie: PaysComplet = {
  complet: true,
  test: true,
  iso: 'BLR',
  slug: 'bielorussie',
  nom: 'Biélorussie',
  article: 'la Biélorussie',
  accroche: 'Un pays d’Europe de l’Est allié de la Russie, ancien pays soviétique où le russe est très répandu. Lisez d’abord la fiche officielle du ministère français. Fiche beta, à vérifier.',
  couleur: '#c8313e',
  langue: { nom: 'biélorusse', code: 'be-BY' },
  devise: 'rouble biélorusse',
  conseilsVoyageurs: D.securite,
  verifie: '4 novembre 2026',
  mediasLocaux: [
    { nom: 'BelTA', url: 'https://belta.by', nature: 'agence de presse d’État', langue: 'russe, biélorusse, anglais' },
    { nom: 'Zerkalo', url: 'https://news.zerkalo.io', nature: 'média indépendant en exil (bloqué en Biélorussie)', langue: 'russe, biélorusse' },
    { nom: 'Nasha Niva', url: 'https://nashaniva.com', nature: 'média indépendant (bloqué en Biélorussie)', langue: 'biélorusse, russe' },
  ],
  rubriques: rubriquesType({
    lieu: 'en Biélorussie',
    monnaie: 'le rouble biélorusse',
    introVoyager: 'La situation en Biélorussie demande une grande prudence : commencez par la fiche officielle du ministère français. Les conditions d’entrée sans visa sont temporaires et limitées.',
    securite: {
      id: 'securite',
      titre: 'Sécurité et conseils officiels',
      badge: { type: 'warn', texte: 'À documenter' },
      blocs: [{ type: 'alerte', warn: true, titre: 'Fiche officielle à lire avant toute décision', html: 'Ce site ne détaille pas la situation de sécurité de la Biélorussie. <strong>Lisez la fiche du ministère de l’Europe et des Affaires étrangères</strong> : elle indique les zones et situations à risque, y compris à la frontière avec l’Ukraine, et les consignes pour les ressortissants français.' }],
      sources: [
        { label: 'Ministère de l’Europe et des Affaires étrangères, fiche Biélorussie (sécurité)', url: D.securite, nature: 'source officielle' },
        { label: 'Ministère de l’Europe et des Affaires étrangères, fiche Biélorussie (PDF)', url: FICHE_PDF, nature: 'source officielle' },
      ],
    },
    entree: {
      id: 'entree',
      titre: 'Entrée sans visa : un régime limité',
      badge: { type: 'warn', texte: 'À confirmer' },
      blocs: [
        { type: 'liste', items: [
          'Des sources spécialisées indiquent un séjour sans visa de <strong>30 jours</strong> par entrée pour les titulaires d’un passeport français, <strong>par avion</strong>, avec une validité du régime annoncée jusqu’au <strong>31 décembre 2026</strong>.',
          'Ce régime ne vaut pas pour les vols en provenance ou à destination de la <strong>Russie</strong>, considérés comme des vols intérieurs.',
          'Une assurance médicale avec rapatriement (couverture d’au moins 10 000 € selon ces sources) est demandée, ou une assurance locale achetée à l’aéroport de Minsk.',
          'Les sources ne sont pas d’accord sur les entrées par route ou par train, ni sur la liste exacte des aéroports.',
        ] },
        { type: 'alerte', warn: true, titre: 'Vérifiez avant de réserver', html: 'Ces conditions changent et plusieurs sources sont anciennes. Confirmez-les sur la fiche officielle et auprès de l’ambassade de Biélorussie à Paris.' },
      ],
      sources: [
        { label: 'Ministère de l’Europe et des Affaires étrangères, fiche Biélorussie (entrée et séjour)', url: D.entree, nature: 'source officielle' },
        { label: 'Action-Visas, la durée de séjour sans visa passe à 30 jours', url: 'https://www.action-visas.com/actualite/bielorussie-la-duree-de-sejour-sans-visa-passe-a-30jours', nature: 'site spécialisé' },
        { label: 'Tourmag, la durée de séjour sans visa passe à 30 jours', url: 'https://www.tourmag.com/Bielorussie-la-duree-de-sejour-sans-visa-passe-a-30-jours_a94613.html', nature: 'presse professionnelle du tourisme' },
      ],
    },
    introLangue: 'Deux langues sont officielles : le biélorusse et le russe. Le russe domine largement dans la vie courante, et les leçons de russe de ce guide servent donc directement. Les leçons ci-dessous donnent les bases du biélorusse (alphabet cyrillique).',
    langue: [],
  }),
  lecons: leconsType({
    salutations: [['Добры дзень', 'dobry dzèn'], ['Добры вечар', 'dobry vètchar'], ['Дзякуй', 'dziakouï'], ['Калі ласка', 'kali laska'], ['Прабачце', 'prabatchtsé'], ['Так', 'tak'], ['Не', 'nié'], ['Да пабачэння', 'da pabatchènia']],
    presenter: [['Мяне завуць…', 'miané zavouts'], ['Я з Францыі', 'ya z frantsyi'], ['Я крыху размаўляю па-беларуску', 'ya krykhou razmaouliayou pa bélarousskou'], ['Вы размаўляеце па-англійску?', 'vy razmaouliayetsé pa anhliïsskou'], ['Я не зразумеў', 'ya nié zrazoumièou']],
    chiffres: [['адзін', 'adzin'], ['два', 'dva'], ['тры', 'try'], ['пяць', 'piats'], ['дзесяць', 'dzèssiats'], ['Колькі гэта каштуе?', 'kolki guèta kachtouyé']],
    deplacer: [['Дзе…?', 'dzié'], ['Чыгуначны вакзал', 'tchyhounatchny vakzal'], ['Аэрапорт', 'aérapor'], ['Білет', 'bilièt'], ['Налева', 'naliéva'], ['Направа', 'napravaa'], ['Прама', 'prama']],
    resto: [['Столік на двух', 'stolik na dvoukh'], ['Меню, калі ласка', 'ménieu kali laska'], ['Вада', 'vada'], ['Кава', 'kava'], ['Рахунак, калі ласка', 'rakhounak kali laska'], ['Я хацеў бы…', 'ya khatsiéou by']],
    urgences: [['Дапамажыце!', 'dapamajytsé'], ['Выклічце міліцыю!', 'vykliktché militsyiou'], ['Выклічце хуткую дапамогу!', 'vykliktché khoutkouyou dapamogou'], ['Мне патрэбны ўрач', 'mnié patrèbny ourach'], ['Я згубіўся', 'ya zhoubiousia'], ['Дзе аптэка?', 'dzié aptèka']],
  }, 'En pratique, le russe est compris presque partout. Les prononciations sont très approximatives : faites relire par un locuteur.'),
  sourcesSupplementaires: [],
};
