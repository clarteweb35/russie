import type { PaysComplet } from '../types';
import { aDocumenter, cultureACompleter, diplo, paiementsACompleter } from '../aides';

const D = diplo('thailande');
const ALERTES = 'https://www.diplomatie.gouv.fr/fr/information-par-pays/thailande/dernieres-minutes-et-alertes';
const CYRIL_TH = { label: 'Cyril Jarnias, démarches administratives pour vivre en Thaïlande', url: 'https://www.cyriljarnias.com/expatriation/guide-sinstaller-thailande-expatrie/demarches-administratives-vivre-thailande/', nature: 'blog de conseil' };
const STARTER_KIT = { label: 'Thailand Starter Kit, visas et déclaration des 90 jours', url: 'https://www.thailandstarterkit.com/fr/visa/', nature: 'site de conseil, intérêt commercial' };

export const thailande: PaysComplet = {
  complet: true,
  test: true,
  iso: 'THA',
  slug: 'thailande',
  nom: 'Thaïlande',
  article: 'la Thaïlande',
  accroche: 'Une langue à tons et un alphabet propre, un séjour sans visa dont la durée change, et des visas de long séjour très variés. Fiche beta, à vérifier.',
  couleur: '#2d2a6e',
  langue: { nom: 'thaï', code: 'th-TH' },
  devise: 'baht',
  conseilsVoyageurs: D.securite,
  verifie: '4 novembre 2026',

  mediasLocaux: [
    { nom: 'Bangkok Post', url: 'https://www.bangkokpost.com', nature: 'quotidien en anglais', langue: 'anglais' },
    { nom: 'The Nation', url: 'https://www.nationthailand.com', nature: 'journal en anglais', langue: 'anglais' },
    { nom: 'Thai PBS', url: 'https://www.thaipbs.or.th', nature: 'service public de radio-télévision', langue: 'thaï' },
    { nom: 'Thairath', url: 'https://www.thairath.co.th', nature: 'quotidien populaire', langue: 'thaï' },
  ],

  rubriques: [
    {
      slug: 'voyager',
      titre: 'Voyager en Thaïlande',
      intro: 'L’entrée sans visa pour un séjour touristique existe, mais sa durée serait ramenée de 60 à 30 jours à partir de septembre 2026 : vérifiez la règle en vigueur au moment de partir.',
      resume: 'Entrée sans visa, carte d’arrivée et sécurité.',
      icone: '✈️',
      sections: [
        {
          id: 'entree',
          titre: 'Entrée et durée sans visa',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            {
              type: 'liste',
              items: [
                'Pour un séjour touristique, les Français ont longtemps bénéficié d’une entrée <strong>sans visa de 60 jours</strong>.',
                'Plusieurs sources annoncent une <strong>réduction à 30 jours à compter du 15 septembre 2026</strong> pour les voyageurs de 60 pays dont la France. Les personnes déjà entrées sous l’ancien régime conserveraient leur droit de séjour jusqu’à la fin de la période accordée à leur arrivée.',
                'Il faut un passeport valable <strong>au moins six mois</strong> après la date d’entrée, et remplir en ligne la <strong>carte d’arrivée numérique (TDAC)</strong> dans les trois jours qui précèdent l’arrivée.',
              ],
            },
            { type: 'alerte', warn: true, titre: 'Sources contradictoires', html: 'D’anciens articles parlent encore de 60 jours et un article mentionne une réduction « en suspens ». Considérez les 30 jours comme probables mais <strong>à confirmer sur la fiche officielle</strong>, dont la dernière mise à jour affichée date de septembre 2026.' },
          ],
          sources: [
            { label: 'Ministère de l’Europe et des Affaires étrangères, dernières minutes et alertes Thaïlande', url: ALERTES, nature: 'source officielle' },
            { label: 'Buch dein Visum, la Thaïlande réduit le séjour sans visa à 30 jours', url: 'https://www.buch-dein-visum.de/fr/news/thailand/thailand-verkuerzt-visumfreien-aufenthalt-ab-15-september-2026-auf-30-tage-2520dd', nature: 'site commercial' },
            { label: 'Evaneos, formalités et visa pour la Thaïlande', url: 'https://www.evaneos.fr/thailande/voyage/informations-pratiques/visa/', nature: 'agence de voyage, intérêt commercial' },
          ],
        },
        {
          id: 'securite',
          titre: 'Sécurité et lois locales',
          badge: { type: 'warn', texte: 'À documenter' },
          blocs: [
            { type: 'alerte', warn: true, titre: 'Fiche officielle à lire', html: 'Je n’ai pas pu lire la rubrique « Sécurité » de la fiche du ministère lors de cette recherche. La législation locale (stupéfiants, propos sur la monarchie, comportement dans les lieux religieux) diffère fortement de celle de la France : lisez la fiche officielle avant de partir.' },
          ],
          sources: [{ label: 'Ministère de l’Europe et des Affaires étrangères, fiche Thaïlande (sécurité)', url: D.securite, nature: 'source officielle' }],
        },
        aDocumenter('Argent, santé et téléphone', 'La monnaie est le baht. Les usages (cartes, espèces, assurance, vaccins, carte SIM) n’ont pas été vérifiés auprès de sources fiables.'),
      ],
    },
    {
      slug: 'vivre',
      titre: 'Vivre en Thaïlande',
      intro: 'Il n’existe pas un seul visa de résident : l’option dépend de l’âge, des revenus et du projet. Les déclarations d’adresse sont obligatoires.',
      resume: 'Visas de long séjour et déclarations obligatoires.',
      icone: '🏠',
      sections: [
        {
          id: 'visas',
          titre: 'Visas de long séjour',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            {
              type: 'liste',
              items: [
                'Le <strong>visa de résident de longue durée (LTR)</strong> est présenté comme la meilleure option : 10 ans de validité, une seule déclaration par an au lieu d’une tous les 90 jours, et un permis de travail numérique possible. Les frais cités varient fortement selon les sources.',
                'Le <strong>visa retraité (Non-Immigrant O, O-A, O-X)</strong> est accessible à partir de 50 ans : séjours renouvelables d’un an, avec déclaration d’adresse tous les 90 jours.',
                'La <strong>déclaration des 90 jours</strong> (formulaire TM.47) concerne tout étranger qui reste plus de 90 jours consécutifs. Le propriétaire du logement doit aussi déclarer votre adresse (formulaire TM.30), dans les 24 heures suivant votre arrivée selon une source.',
                'Au-delà de 180 jours dans l’année civile, vous pouvez devenir <strong>résident fiscal</strong> en Thaïlande (selon un cabinet).',
              ],
            },
          ],
          sources: [
            STARTER_KIT,
            CYRIL_TH,
            { label: 'Thai Law Online, visa LTR (août 2026)', url: 'https://www.thailawonline.com/fr/thailand-ltr-visa/', nature: 'cabinet d’avocats, intérêt commercial' },
          ],
          note: 'Aucune source officielle thaïlandaise n’a été consultée : vérifiez auprès de l’ambassade royale de Thaïlande en France ou du bureau de l’immigration.',
        },
        aDocumenter('Banque, santé, logement et coût de la vie'),
      ],
    },
    {
      slug: 'travailler',
      titre: 'Travailler en Thaïlande',
      intro: 'Un permis de travail classique suppose un employeur thaïlandais. Le visa LTR prévoit une voie spécifique.',
      resume: 'Permis de travail et visa LTR.',
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
                'Un permis de travail classique suppose en général un <strong>employeur thaïlandais</strong>.',
                'Pour le visa LTR, un <strong>permis de travail numérique</strong> est possible, auprès du guichet unique (One Stop Service Center).',
              ],
            },
          ],
          sources: [STARTER_KIT, CYRIL_TH],
        },
        aDocumenter('Salaire minimum, impôts et recherche d’emploi'),
      ],
    },
    paiementsACompleter('le baht'),
    {
      slug: 'langue-culture',
      titre: 'Langue et culture',
      intro: 'Le thaï est une langue à tons, écrite avec un alphabet propre. Les mots de politesse changent selon que l’on est un homme (« khrap ») ou une femme (« kha »).',
      resume: 'Thaï, tons et politesse.',
      icone: '🎭',
      sections: [
        {
          titre: 'Tons et politesse',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            { type: 'p', html: 'Le thaï compte cinq tons : le même mot change de sens selon le ton. Les prononciations de ce guide sont écrites à la française et <strong>ne rendent pas les tons</strong> : elles ne suffisent pas pour être compris, une écoute avec un locuteur est indispensable. On ajoute en fin de phrase « khrap » (hommes) ou « kha » (femmes) pour être poli.' },
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
      intro: 'Les mots à utiliser dès que vous parlez à quelqu’un. Les tons ne sont pas rendus par la prononciation écrite.',
      phrases: [
        ['สวัสดี', 'sawatdi', 'Bonjour / Au revoir'],
        ['สวัสดีครับ', 'sawatdi khrap', 'Bonjour (homme)'],
        ['สวัสดีค่ะ', 'sawatdi kha', 'Bonjour (femme)'],
        ['ขอบคุณ', 'khop khoun', 'Merci'],
        ['ขอโทษ', 'kho thot', 'Excusez-moi / Pardon'],
        ['ใช่', 'tchaï', 'Oui'],
        ['ไม่ใช่', 'maï tchaï', 'Non'],
        ['สบายดีไหม', 'sabaï di maï', 'Comment allez-vous ?'],
        ['สบายดี', 'sabaï di', 'Je vais bien'],
      ],
      astuce: 'Ajoutez « khrap » (homme) ou « kha » (femme) à la fin d’une phrase pour être poli. Faites relire ces prononciations par un locuteur : les tons ne sont pas rendus.',
    },
    {
      slug: 'se-presenter',
      titre: 'Se présenter',
      intro: 'Dire qui vous êtes et ce que vous ne comprenez pas.',
      phrases: [
        ['ผมชื่อ…', 'phom tchue', 'Je m’appelle… (homme)'],
        ['ดิฉันชื่อ…', 'dichan tchue', 'Je m’appelle… (femme)'],
        ['ยินดีที่ได้รู้จัก', 'yin di thi daï rou tchak', 'Enchanté(e)'],
        ['ผมมาจากฝรั่งเศส', 'phom ma tchak farangsèt', 'Je viens de France (homme)'],
        ['พูดภาษาไทยได้นิดหน่อย', 'phout phasa thaï daï nit noï', 'Je parle un peu thaï'],
        ['คุณพูดภาษาอังกฤษได้ไหม', 'khoun phout phasa angkrit daï maï', 'Parlez-vous anglais ?'],
        ['ไม่เข้าใจ', 'maï khao tchaï', 'Je ne comprends pas'],
        ['พูดช้าๆ หน่อยได้ไหม', 'phout tcha tcha noï daï maï', 'Pouvez-vous parler plus lentement ?'],
      ],
      astuce: 'Préparez « ผมชื่อ… » ou « ดิฉันชื่อ… » avec votre prénom et répétez-le à voix haute.',
    },
    {
      slug: 'chiffres-prix-heure',
      titre: 'Chiffres et prix',
      intro: 'Pour comprendre un prix et compter votre argent.',
      phrases: [
        ['หนึ่ง', 'nueng', '1'],
        ['สอง', 'song', '2'],
        ['สาม', 'sam', '3'],
        ['สี่', 'si', '4'],
        ['ห้า', 'ha', '5'],
        ['หก', 'hok', '6'],
        ['เจ็ด', 'tchèt', '7'],
        ['แปด', 'pèt', '8'],
        ['เก้า', 'kao', '9'],
        ['สิบ', 'sip', '10'],
        ['เท่าไหร่', 'thao raï', 'Combien ça coûte ?'],
        ['กี่โมง', 'ki mong', 'Quelle heure est-il ?'],
      ],
      astuce: 'Demandez le prix avant d’acheter : « เท่าไหร่ ».',
    },
    {
      slug: 'se-deplacer',
      titre: 'Se déplacer',
      intro: 'Demander son chemin et acheter un billet.',
      phrases: [
        ['…อยู่ที่ไหน', 'you thi naï', '… est où ?'],
        ['สถานีรถไฟ', 'sathani rot faï', 'La gare'],
        ['สนามบิน', 'sanam bin', 'L’aéroport'],
        ['ป้ายรถเมล์', 'païe rot mè', 'L’arrêt de bus'],
        ['ตั๋วหนึ่งใบ', 'toua nueng baï', 'Un billet'],
        ['เลี้ยวซ้าย', 'liao saï', 'Tourner à gauche'],
        ['เลี้ยวขวา', 'liao khwa', 'Tourner à droite'],
        ['ตรงไป', 'trong paï', 'Tout droit'],
      ],
      astuce: 'Montrez l’adresse écrite en thaï sur votre téléphone au chauffeur : c’est souvent plus sûr que de la dire.',
    },
    {
      slug: 'restaurant-courses',
      titre: 'Restaurant et courses',
      intro: 'Commander, demander l’addition et faire vos courses.',
      phrases: [
        ['ขอโต๊ะสำหรับสองคน', 'kho to samrap song khon', 'Une table pour deux'],
        ['ขอเมนู', 'kho ménou', 'Le menu, s’il vous plaît'],
        ['เอา…', 'ao', 'Je prends…'],
        ['กาแฟ', 'kafè', 'Un café'],
        ['น้ำ', 'nam', 'De l’eau'],
        ['เบียร์', 'bia', 'Une bière'],
        ['ไม่เผ็ด', 'maï phèt', 'Pas épicé'],
        ['เช็คบิล', 'tchèk bin', 'L’addition'],
      ],
      astuce: '« ไม่เผ็ด » (pas épicé) est utile : la cuisine thaïe peut être très pimentée.',
    },
    {
      slug: 'urgences',
      titre: 'Urgences et phrases de survie',
      intro: 'Les phrases à connaître en cas de problème.',
      phrases: [
        ['ช่วยด้วย', 'tchoua douai', 'Au secours !'],
        ['เรียกรถพยาบาล', 'riak rot phayabane', 'Appelez une ambulance'],
        ['เรียกตำรวจ', 'riak tamrouat', 'Appelez la police'],
        ['ผมต้องการหมอ', 'phom tongkane mo', 'J’ai besoin d’un médecin'],
        ['เจ็บ', 'tchèp', 'J’ai mal'],
        ['หลงทาง', 'long thang', 'Je suis perdu'],
        ['ร้านขายยาอยู่ที่ไหน', 'rane khaï ya you thi naï', 'Où est la pharmacie ?'],
      ],
      astuce: 'Les numéros d’urgence thaïlandais n’ont pas été vérifiés ici : notez-les depuis la fiche officielle du ministère avant de partir.',
    },
  ],

  sourcesSupplementaires: [],
};
