import type { PaysComplet } from '../types';
import { aDocumenter, cultureACompleter, diplo, paiementsACompleter } from '../aides';

const D = diplo('kazakhstan');
const ALERTES = 'https://www.diplomatie.gouv.fr/fr/information-par-pays/kazakhstan/dernieres-minutes-et-alertes';
const CYRIL_KZ = { label: 'Cyril Jarnias, démarches administratives au Kazakhstan', url: 'https://www.cyriljarnias.com/?p=34491', nature: 'blog de conseil' };

export const kazakhstan: PaysComplet = {
  complet: true,
  test: true,
  iso: 'KAZ',
  slug: 'kazakhstan',
  nom: 'Kazakhstan',
  article: 'le Kazakhstan',
  accroche: 'Un très grand pays d’Asie centrale où le russe est très répandu : entrée sans visa pour 30 jours mais avec une autorisation électronique à obtenir à l’avance. Fiche beta, à vérifier.',
  couleur: '#00a3b4',
  langue: { nom: 'kazakh', code: 'kk-KZ' },
  devise: 'tenge',
  conseilsVoyageurs: D.securite,
  verifie: '4 novembre 2026',

  mediasLocaux: [
    { nom: 'Kazinform', url: 'https://www.inform.kz', nature: 'agence de presse publique', langue: 'kazakh, russe, anglais' },
    { nom: 'Tengrinews', url: 'https://tengrinews.kz', nature: 'site d’information privé', langue: 'russe, kazakh' },
    { nom: 'The Astana Times', url: 'https://astanatimes.com', nature: 'journal en ligne en anglais', langue: 'anglais' },
    { nom: 'Kazakhstanskaïa Pravda', url: 'https://kazpravda.kz', nature: 'quotidien (liens avec les autorités, à confirmer)', langue: 'russe' },
  ],

  rubriques: [
    {
      slug: 'voyager',
      titre: 'Voyager au Kazakhstan',
      intro: 'Les Français peuvent séjourner jusqu’à 30 jours sans visa, mais une autorisation électronique d’entrée est exigée avant le départ.',
      resume: 'Autorisation d’entrée, durée et sécurité.',
      icone: '✈️',
      sections: [
        {
          id: 'entree',
          titre: 'Entrée et autorisation électronique',
          badge: { type: 'ok', texte: 'Vérifié' },
          blocs: [
            {
              type: 'liste',
              items: [
                'Les ressortissants de 54 pays, dont la France, peuvent séjourner <strong>sans visa jusqu’à 30 jours calendaires</strong> à chaque visite. Le nombre de visites est illimité.',
                'Pour un séjour de moins de 30 jours, une <strong>autorisation électronique d’entrée</strong> doit être obtenue <strong>au plus tard 72 heures avant l’arrivée</strong> (page « dernières minutes et alertes », mise à jour en août 2026).',
              ],
            },
            { type: 'alerte', warn: true, titre: 'À vérifier avant de partir', html: 'La plateforme de la demande, son coût et la validité exacte du passeport (trois ou six mois après le retour selon les guides) n’ont pas pu être confirmés. Un forum évoque aussi un enregistrement auprès de la police de l’immigration : ce point n’est pas confirmé par les sources officielles.' },
          ],
          sources: [
            { label: 'Ministère de l’Europe et des Affaires étrangères, fiche Kazakhstan (entrée et séjour)', url: D.entree, nature: 'source officielle' },
            { label: 'Ministère de l’Europe et des Affaires étrangères, dernières minutes et alertes Kazakhstan', url: ALERTES, nature: 'source officielle' },
          ],
        },
        {
          id: 'securite',
          titre: 'Sécurité',
          badge: { type: 'warn', texte: 'À documenter' },
          blocs: [
            { type: 'alerte', warn: true, titre: 'Fiche officielle à lire', html: 'Je n’ai pas pu lire la rubrique « Sécurité » de la fiche du ministère lors de cette recherche. Lisez-la avant de partir.' },
          ],
          sources: [{ label: 'Ministère de l’Europe et des Affaires étrangères, fiche Kazakhstan (sécurité)', url: D.securite, nature: 'source officielle' }],
        },
        aDocumenter('Argent, santé et téléphone', 'La monnaie est le tenge. Les usages (cartes, espèces, assurance, carte SIM) n’ont pas été vérifiés auprès de sources fiables.'),
      ],
    },
    {
      slug: 'vivre',
      titre: 'Vivre au Kazakhstan',
      intro: 'S’installer passe en général par un permis de travail demandé par un employeur kazakh. Le russe est très utile, l’anglais reste limité même dans les grandes villes.',
      resume: 'Titre de séjour, permis de travail et langue.',
      icone: '🏠',
      sections: [
        {
          id: 'sejour',
          titre: 'Séjour de longue durée',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            {
              type: 'liste',
              items: [
                'Le <strong>russe est très utile</strong> ; l’anglais reste limité, même à Almaty et Astana.',
                'Les <strong>empreintes digitales</strong> sont obligatoires depuis 2024 pour les demandes de visa de long séjour ou de titre de séjour des plus de 16 ans.',
                'Une notification de séjour serait exigée dans les trois jours ouvrés suivant l’entrée : ce point vient d’une page peu fiable et doit être vérifié.',
              ],
            },
          ],
          sources: [CYRIL_KZ, { label: 'Envoy Global, nouvelles conditions de titre de séjour temporaire au Kazakhstan', url: 'https://resources.envoyglobal.com/global-news-alerts/kazakhstan-new-temporary-residence-permit-requirements', nature: 'prestataire, intérêt commercial' }],
          note: 'Aucune source officielle sur le titre de séjour n’a été retenue : consultez le portail officiel gov.kz.',
        },
        aDocumenter('Banque, santé, logement et coût de la vie'),
      ],
    },
    {
      slug: 'travailler',
      titre: 'Travailler au Kazakhstan',
      intro: 'Le permis de travail est la voie la plus courante. Le nombre de permis est limité chaque année.',
      resume: 'Permis de travail et visas spéciaux.',
      icone: '💼',
      sections: [
        {
          id: 'permis',
          titre: 'Le permis de travail',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            {
              type: 'liste',
              items: [
                'Un permis de travail standard demande une <strong>offre d’emploi écrite</strong> d’un employeur kazakh. Le gouvernement limite chaque année le nombre de permis accordés aux étrangers.',
                'Après l’obtention du permis, un visa de travail se demande auprès de l’ambassade ou du consulat du Kazakhstan.',
                'D’autres voies existent : visa Astana Hub (technologies), visa AIFC (finance, droit, technologies) et permis investisseur.',
              ],
            },
            { type: 'alerte', warn: true, titre: 'Délais et coûts non fiables', html: 'Les délais (de quelques semaines à plusieurs mois) et les coûts (de l’ordre de 100 à 200 dollars de frais directs) varient selon les sources : ils ne sont pas retenus ici. Consultez le portail officiel egov.kz.' },
          ],
          sources: [
            { label: 'eGov.kz, permis de travail (portail officiel)', url: 'https://egov.kz/cms/en/articles/workpermit', nature: 'portail officiel du gouvernement' },
            CYRIL_KZ,
            { label: 'Rivermate, permis de travail et visas au Kazakhstan', url: 'https://rivermate.com/fr/guides/kazakhstan/permis-de-travail-et-visas', nature: 'prestataire, intérêt commercial' },
          ],
        },
        aDocumenter('Salaire minimum, impôts et recherche d’emploi'),
      ],
    },
    paiementsACompleter('le tenge'),
    {
      slug: 'langue-culture',
      titre: 'Langue et culture',
      intro: 'Le kazakh est la langue d’État et le russe y est très répandu au quotidien. Le kazakh s’écrit aujourd’hui en cyrillique.',
      resume: 'Kazakh, russe et prononciation.',
      icone: '🎭',
      sections: [
        {
          titre: 'Deux langues dans la vie quotidienne',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            { type: 'p', html: 'Le <strong>russe</strong> est très utile pour se débrouiller, surtout dans les villes. Les leçons de ce guide sont en <strong>kazakh</strong> ; pour le russe, voir les leçons de la page d’accueil du guide. Les prononciations sont écrites à la française et approximatives : faites relire par un locuteur.' },
          ],
          note: 'Information non sourcée.',
        },
        cultureACompleter(),
      ],
    },
  ],

  lecons: [
    {
      slug: 'salutations',
      titre: 'Salutations et politesse',
      intro: 'Les mots à utiliser dès que vous parlez à quelqu’un.',
      phrases: [
        ['Сәлем', 'sælèm', 'Bonjour / Salut'],
        ['Қайырлы таң', 'kaïrly tan', 'Bonjour (le matin)'],
        ['Қайырлы кеш', 'kaïrly kèch', 'Bonsoir'],
        ['Рахмет', 'rakhmèt', 'Merci'],
        ['Өтінемін', 'eutinémine', 'S’il vous plaît'],
        ['Кешіріңіз', 'kèchirinis', 'Excusez-moi'],
        ['Иә', 'ia', 'Oui'],
        ['Жоқ', 'djok', 'Non'],
        ['Қалыңыз қалай?', 'kalenez kalaï', 'Comment allez-vous ?'],
        ['Жақсы, рахмет', 'djaksy rakhmèt', 'Bien, merci'],
        ['Сау болыңыз', 'sao bolenez', 'Au revoir'],
      ],
      astuce: 'Le russe est très répandu : en cas de blocage, « Здравствуйте » (bonjour en russe) est compris presque partout.',
    },
    {
      slug: 'se-presenter',
      titre: 'Se présenter',
      intro: 'Dire qui vous êtes et ce que vous ne comprenez pas.',
      phrases: [
        ['Менің атым…', 'mènine atem', 'Je m’appelle…'],
        ['Мен француздан келдім', 'mèn frantsouzdan kèldim', 'Je viens de France'],
        ['Мен аздап қазақша сөйлеймін', 'mèn azdap kazaktcha seulèmine', 'Je parle un peu kazakh'],
        ['Сіз ағылшынша білесіз бе?', 'siz agelchenncha bilèssiz bè', 'Parlez-vous anglais ?'],
        ['Мен түсінбеймін', 'mèn tussinbèmine', 'Je ne comprends pas'],
        ['Қайталаңызшы', 'kaïtalanezchy', 'Répétez, s’il vous plaît'],
      ],
      astuce: 'Préparez « Менің атым… » avec votre prénom et répétez-le à voix haute.',
    },
    {
      slug: 'chiffres-prix-heure',
      titre: 'Chiffres et prix',
      intro: 'Pour comprendre un prix et compter votre argent.',
      phrases: [
        ['Бір', 'bir', '1'],
        ['Екі', 'èki', '2'],
        ['Үш', 'uch', '3'],
        ['Төрт', 'teurt', '4'],
        ['Бес', 'bès', '5'],
        ['Алты', 'alte', '6'],
        ['Жеті', 'djèti', '7'],
        ['Сегіз', 'sèguiz', '8'],
        ['Тоғыз', 'togheuz', '9'],
        ['Он', 'on', '10'],
        ['Қанша тұрады?', 'kancha tourade', 'Combien ça coûte ?'],
      ],
      astuce: 'Demandez le prix avant d’acheter : « Қанша тұрады? ».',
    },
    {
      slug: 'se-deplacer',
      titre: 'Se déplacer',
      intro: 'Demander son chemin et acheter un billet.',
      phrases: [
        ['…қайда?', 'kaïda', '… est où ?'],
        ['Вокзал', 'vokzal', 'La gare'],
        ['Әуежай', 'æouèdjaï', 'L’aéroport'],
        ['Аялдама', 'ayaldama', 'L’arrêt de bus'],
        ['Билет', 'bilèt', 'Un billet'],
        ['Солға', 'solga', 'À gauche'],
        ['Оңға', 'onga', 'À droite'],
        ['Түзу', 'touzou', 'Tout droit'],
      ],
      astuce: 'Montrez l’adresse écrite sur votre téléphone : c’est souvent plus sûr que de la dire.',
    },
    {
      slug: 'restaurant-courses',
      titre: 'Restaurant et courses',
      intro: 'Commander, demander l’addition et faire vos courses.',
      phrases: [
        ['Екі адамға үстел', 'èki adamga ustèl', 'Une table pour deux'],
        ['Мәзір, өтінемін', 'mæzir eutinémine', 'Le menu, s’il vous plaît'],
        ['Маған… беріңіз', 'magane bèrinis', 'Donnez-moi…'],
        ['Кофе', 'kofè', 'Un café'],
        ['Су', 'sou', 'De l’eau'],
        ['Шай', 'chaï', 'Du thé'],
        ['Шот, өтінемін', 'chot eutinémine', 'L’addition, s’il vous plaît'],
      ],
      astuce: 'Le thé (« шай ») accompagne presque tous les repas et les visites.',
    },
    {
      slug: 'urgences',
      titre: 'Urgences et phrases de survie',
      intro: 'Les phrases à connaître en cas de problème.',
      phrases: [
        ['Көмектесіңіз!', 'keumèktèssinis', 'Au secours !'],
        ['Жедел жәрдем шақырыңыз!', 'djèdèl djærdèm chakarenis', 'Appelez une ambulance !'],
        ['Полицияны шақырыңыз!', 'politsiyane chakarenis', 'Appelez la police !'],
        ['Маған дәрігер керек', 'magane dærigèr kèrèk', 'J’ai besoin d’un médecin'],
        ['Жолымды жоғалттым', 'djolemde djogalttem', 'Je suis perdu(e)'],
        ['Дәріхана қайда?', 'dærikhana kaïda', 'Où est la pharmacie ?'],
      ],
      astuce: 'Les numéros d’urgence kazakhs n’ont pas été vérifiés ici : notez-les depuis la fiche officielle du ministère avant de partir.',
    },
  ],

  sourcesSupplementaires: [],
};
