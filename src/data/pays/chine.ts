import type { PaysComplet } from './types';
import { diplo, securiteALire } from './aides';
import { leconsType, rubriquesType } from './modele';

const D = diplo('chine');

export const chine: PaysComplet = {
  complet: true,
  test: true,
  iso: 'CHN',
  slug: 'chine',
  nom: 'Chine',
  article: 'la Chine',
  accroche: 'Un pays-continent où le paiement par application est devenu la norme et où Internet est filtré. Entrée sans visa pour 30 jours, jusqu’à fin 2026 selon les sources. Fiche en test, à vérifier.',
  couleur: '#de2910',
  langue: { nom: 'chinois mandarin', code: 'zh-CN' },
  devise: 'yuan (renminbi)',
  conseilsVoyageurs: D.securite,
  verifie: '5 novembre 2026',
  mediasLocaux: [
    { nom: 'Xinhua (anglais)', url: 'https://english.news.cn', nature: 'agence de presse d’État', langue: 'anglais' },
    { nom: 'China Daily', url: 'https://www.chinadaily.com.cn', nature: 'quotidien d’État', langue: 'anglais' },
    { nom: 'South China Morning Post', url: 'https://www.scmp.com', nature: 'quotidien privé (Hong Kong)', langue: 'anglais' },
    { nom: 'Caixin Global', url: 'https://www.caixinglobal.com', nature: 'média économique privé', langue: 'anglais' },
  ],
  rubriques: rubriquesType({
    lieu: 'en Chine',
    monnaie: 'le yuan (renminbi)',
    introVoyager: 'Les Français peuvent séjourner jusqu’à 30 jours sans visa, mais cette exemption est datée : elle court jusqu’au 31 décembre 2026 selon les sources. Au-delà, un visa est nécessaire.',
    securite: securiteALire(D.securite, 'Chine'),
    entree: {
      id: 'entree',
      titre: 'Exemption de visa de 30 jours',
      badge: { type: 'warn', texte: 'À confirmer' },
      blocs: [
        { type: 'liste', items: [
          'Les Français sont <strong>exemptés de visa pour 30 jours au plus</strong>, avec un passeport ordinaire, pour le tourisme, les affaires, la visite familiale, les échanges ou le transit.',
          'L’exemption est annoncée <strong>jusqu’au 31 décembre 2026</strong> ; aucune prolongation pour 2027 n’était annoncée dans les sources consultées.',
          'Une <strong>activité rémunérée</strong> est exclue de ce régime.',
          'Un transit sans visa de 240 heures existe aussi, sous conditions.',
        ] },
        { type: 'alerte', warn: true, titre: 'Source officielle chinoise non consultée', html: 'Ces informations viennent de la presse du tourisme et de sites spécialisés. Confirmez-les sur la fiche du ministère français et auprès de l’ambassade de Chine.' },
      ],
      sources: [
        { label: 'Ministère de l’Europe et des Affaires étrangères, fiche Chine (entrée et séjour)', url: D.entree, nature: 'source officielle' },
        { label: 'Tourmag, exemption de visa prolongée jusqu’au 31 décembre 2026', url: 'https://www.tourmag.com/Chine-l-exemption-de-visa-prolongee-jusqu-au-31-decembre-2026_a129210.html', nature: 'presse professionnelle du tourisme' },
        { label: 'VisasNews, Chine : exemption pour la France prolongée', url: 'https://visasnews.com/la-chine-prolonge-jusquau-31-decembre-2026-sa-politique-dexemption-de-visa-pour-la-france-et-dautres-pays/', nature: 'site d’information sur les visas' },
      ],
    },
    argent: {
      id: 'argent',
      titre: 'Argent et paiement',
      badge: { type: 'warn', texte: 'À documenter' },
      blocs: [{ type: 'alerte', warn: true, titre: 'À vérifier avant le départ', html: 'Le paiement mobile par application domine en Chine et les cartes étrangères y sont parfois mal acceptées. Les modalités pour un visiteur étranger n’ont pas été vérifiées ici : renseignez-vous auprès de votre banque et de la fiche officielle.' }],
    },
    introLangue: 'Le mandarin s’écrit avec des caractères (hanzi). Le pinyin, l’écriture en lettres latines, aide à lire. Chaque syllabe porte un ton ; les prononciations ci-dessous ne les rendent pas. Peu de personnes parlent anglais hors des grandes villes.',
    langue: [],
  }),
  lecons: leconsType({
    salutations: [['你好', 'ni hao'], ['晚上好', 'wann-chang hao'], ['谢谢', 'chié-chié'], ['请', 'tching'], ['对不起', 'touéi-pou-tchi'], ['是', 'cheu'], ['不是', 'pou cheu'], ['再见', 'tsaï-djien']],
    presenter: [['我叫…', 'ouo djiao'], ['我来自法国', 'ouo laï-tseu fa-kouo'], ['我会说一点中文', 'ouo houéi chouo yi-dien tchong-ouenn'], ['你会说英语吗？', 'ni houéi chouo ying-yu ma'], ['我不明白', 'ouo pou ming-païe']],
    chiffres: [['一', 'yi'], ['二', 'eur'], ['三', 'sann'], ['五', 'ou'], ['十', 'cheu'], ['多少钱？', 'touo-chao tchien']],
    deplacer: [['…在哪里？', 'tsaï na-li'], ['火车站', 'houo-tcheu-djann'], ['机场', 'dji-tchang'], ['票', 'piao'], ['左', 'tsouo'], ['右', 'yo'], ['直走', 'djeu-tsoou']],
    resto: [['两位', 'liang wéi'], ['请给我菜单', 'tching guéi ouo tsaï-dann'], ['水', 'chouéi'], ['咖啡', 'ka-féi'], ['买单', 'maï-dann'], ['我想要…', 'ouo chiang yao']],
    urgences: [['救命！', 'djio-ming'], ['请叫警察！', 'tching djiao djing-tcha'], ['请叫救护车！', 'tching djiao djio-hou-tcheu'], ['我需要医生', 'ouo chu-yao yi-cheng'], ['我迷路了', 'ouo mi-lou leu'], ['药店在哪里？', 'yao-dien tsaï na-li']],
  }, 'Les tons changent le sens des mots : ces prononciations sont très approximatives. Faites relire par un locuteur.'),
  sourcesSupplementaires: [],
};
