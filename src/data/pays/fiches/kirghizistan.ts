import type { PaysComplet } from '../types';
import { diplo, securiteALire } from '../aides';
import { leconsType, rubriquesType } from '../modele';

// Le site du ministère écrit « kirghizstan » dans ses adresses
const D = diplo('kirghizstan');

export const kirghizistan: PaysComplet = {
  complet: true,
  test: true,
  iso: 'KGZ',
  slug: 'kirghizistan',
  nom: 'Kirghizistan',
  article: 'le Kirghizistan',
  accroche: 'Un pays de montagnes d’Asie centrale, ancien pays soviétique où le russe reste langue officielle. Fiche beta, à vérifier.',
  couleur: '#e8112d',
  langue: { nom: 'kirghize', code: 'ky-KG' },
  devise: 'som kirghize',
  conseilsVoyageurs: D.securite,
  verifie: '4 novembre 2026',
  mediasLocaux: [
    { nom: 'Kloop', url: 'https://kloop.kg', nature: 'média indépendant', langue: 'russe, kirghize, anglais' },
    { nom: '24.kg', url: 'https://24.kg', nature: 'agence d’information privée', langue: 'russe, anglais' },
    { nom: 'AKIpress', url: 'https://akipress.com', nature: 'agence d’information privée', langue: 'russe, anglais' },
    { nom: 'Kabar', url: 'https://kabar.kg', nature: 'agence de presse d’État', langue: 'russe, kirghize, anglais' },
  ],
  rubriques: rubriquesType({
    lieu: 'au Kirghizistan',
    monnaie: 'le som kirghize',
    introVoyager: 'Le Kirghizistan accueille les Français sans visa pour un court séjour, mais la durée a changé récemment et les sources se contredisent : vérifiez-la avant de partir.',
    securite: securiteALire(D.securite, 'Kirghizistan'),
    entree: {
      id: 'entree',
      titre: 'Entrée sans visa : durée à confirmer',
      badge: { type: 'warn', texte: 'À confirmer' },
      blocs: [
        { type: 'liste', items: [
          'Les Français sont <strong>exemptés de visa</strong> pour un séjour touristique ou d’affaires, selon les guides consultés.',
          'La <strong>durée</strong> diffère selon les sources : une règle de 60 jours semble avoir été réduite à 30 jours à partir de fin 2025 pour une partie des pays, et un site de visas indique 30 jours pour les Français (vérification de juillet 2026).',
          'Passeport valable au moins six mois après l’arrivée.',
        ] },
        { type: 'alerte', warn: true, titre: 'Durée incertaine', html: 'Ne comptez pas sur 60 jours sans l’avoir confirmé sur la fiche officielle du ministère français ou auprès de l’ambassade du Kirghizistan.' },
      ],
      sources: [
        { label: 'Ministère de l’Europe et des Affaires étrangères, fiche Kirghizistan (entrée et séjour)', url: D.entree, nature: 'source officielle' },
        { label: 'Routard, formalités d’entrée au Kirghizistan', url: 'https://www.routard.com/fr/guide/a/formalites/asie/kirghizistan', nature: 'guide de voyage' },
        { label: 'Action-Visas, Kirghizistan', url: 'https://www.action-visas.com/visa/Kirghizistan', nature: 'site spécialisé' },
      ],
    },
    introLangue: 'Le kirghize et le russe sont officiels. Le russe sert de langue commune, surtout à Bichkek. Le kirghize s’écrit en cyrillique. Les leçons de russe de ce guide sont très utiles ici.',
    langue: [],
  }),
  lecons: leconsType({
    salutations: [['Саламатсызбы', 'salamatsızbı'], ['Кайырлуу кеч', 'kaïırlouou kètch'], ['Рахмат', 'rakhmat'], ['Сураныч', 'souranytch'], ['Кечиресиз', 'kètchirèssiz'], ['Ооба', 'ooba'], ['Жок', 'djok'], ['Кош болуңуз', 'kosh bolounouz']],
    presenter: [['Менин атым…', 'mènin atım'], ['Мен Франциядан келдим', 'mèn frantsiyadan kèldim'], ['Мен кыргызча аз сүйлөйм', 'mèn kırgıztcha az süylèym'], ['Сиз англисче сүйлөйсүзбү?', 'siz anglistché süylèyssüzbü'], ['Мен түшүнгөн жокмун', 'mèn tüchüngoen djokmoun']],
    chiffres: [['бир', 'bir'], ['эки', 'èki'], ['үч', 'utch'], ['беш', 'bèch'], ['он', 'on'], ['Канча турат?', 'kantcha tourat']],
    deplacer: [['… кайда?', 'kaïda'], ['Вокзал', 'vokzal'], ['Аэропорт', 'aéroport'], ['Билет', 'bilèt'], ['Солго', 'solgo'], ['Оңго', 'ongo'], ['Түз', 'tüz']],
    resto: [['Эки кишилик үстөл', 'èki kichilik üstöl'], ['Меню, сураныч', 'ménü souranytch'], ['Суу', 'sou'], ['Кофе', 'kofé'], ['Эсеп, сураныч', 'èssèp souranytch'], ['Мага … керек', 'maga kèrèk']],
    urgences: [['Жардам бериңиз!', 'djardam bèriniz'], ['Милицияны чакырыңыз!', 'militsiyany tchakırınız'], ['Тез жардам чакырыңыз!', 'tèz djardam tchakırınız'], ['Мага доктур керек', 'maga doktour kèrèk'], ['Адашып калдым', 'adachıp kaldım'], ['Дарыкана кайда?', 'darıkana kaïda']],
  }, 'En cas de doute, le russe fonctionne souvent mieux (voir les leçons de russe). Prononciations très approximatives : faites relire par un locuteur.'),
  sourcesSupplementaires: [],
};
