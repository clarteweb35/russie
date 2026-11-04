import type { PaysComplet } from './types';
import { aDocumenter, cultureACompleter, diplo, paiementsACompleter } from './aides';

const D = diplo('georgie');
const OFFICIEL_ENTREE = { label: 'Ministère de l’Europe et des Affaires étrangères, fiche Géorgie (entrée et séjour)', url: D.entree, nature: 'source officielle' };
const CYRIL_DEMARCHES = { label: 'Cyril Jarnias, démarches administratives en Géorgie', url: 'https://www.cyriljarnias.com/expatriation/guide-s-installer-georgie-expatrie/demarches-administratives-vivre-georgie/', nature: 'blog de conseil' };
const CYRIL_BANQUES = { label: 'Cyril Jarnias, banques en Géorgie pour les expatriés', url: 'https://www.cyriljarnias.com/expatriation/guide-s-installer-georgie-expatrie/banques-georgie-expatries-ouvrir-compte-services/', nature: 'blog de conseil' };

export const georgie: PaysComplet = {
  complet: true,
  test: true,
  slug: 'georgie',
  nom: 'Géorgie',
  article: 'la Géorgie',
  accroche: 'Un pays du Caucase hors de l’Union européenne, au séjour sans visa très long et à l’alphabet unique. Souvent cité pour y ouvrir un compte bancaire. Fiche en test, à vérifier.',
  couleur: '#8b1a2b',
  langue: { nom: 'géorgien', code: 'ka-GE' },
  devise: 'lari',
  conseilsVoyageurs: D.securite,
  verifie: '4 novembre 2026',

  mediasLocaux: [
    { nom: 'Interpressnews', url: 'https://www.interpressnews.ge', nature: 'agence d’information privée', langue: 'géorgien, anglais' },
    { nom: 'Civil Georgia', url: 'https://civil.ge', nature: 'média en ligne indépendant', langue: 'anglais, géorgien' },
    { nom: 'Netgazeti', url: 'https://netgazeti.ge', nature: 'média en ligne indépendant', langue: 'géorgien' },
    { nom: 'Georgia Today', url: 'https://georgiatoday.ge', nature: 'journal en anglais', langue: 'anglais' },
  ],

  rubriques: [
    {
      slug: 'voyager',
      titre: 'Voyager en Géorgie',
      intro: 'La Géorgie n’est pas dans l’Union européenne. L’entrée est simple pour un Français, mais la fiche officielle met en garde contre des refus d’entrée et exige une assurance voyage.',
      resume: 'Entrée, assurance, sécurité et argent.',
      icone: '✈️',
      sections: [
        {
          id: 'securite',
          titre: 'Sécurité et conseils officiels',
          badge: { type: 'ok', texte: 'Vérifié' },
          blocs: [
            {
              type: 'liste',
              items: [
                'La Géorgie est, dans son ensemble, un <strong>pays sûr</strong>, à l’exception des zones déconseillées qui apparaissent en rouge sur la carte de la fiche officielle.',
                '<strong>Route</strong> : une extrême vigilance est recommandée aux conducteurs, notamment de nuit et dans les tunnels.',
                '<strong>Abkhazie et Ossétie du Sud</strong> : se rendre dans ces territoires depuis la Russie expose à des poursuites en Géorgie (information d’un site de visas, à confirmer sur la fiche).',
              ],
            },
          ],
          sources: [
            { label: 'Ministère de l’Europe et des Affaires étrangères, fiche Géorgie (sécurité)', url: D.securite, nature: 'source officielle' },
            { label: 'Ministère de l’Europe et des Affaires étrangères, fiche Géorgie (PDF)', url: 'https://www.diplomatie.gouv.fr/files/files/pdf/cav/G%C3%A9orgie%20-%20Minist%C3%A8re%20de%20l%27Europe%20et%20des%20Affaires%20%C3%A9trang%C3%A8res.pdf', nature: 'source officielle' },
          ],
          note: 'Seuls des extraits de la fiche ont pu être lus : consultez la fiche en ligne pour les zones à éviter et les numéros d’urgence.',
        },
        {
          id: 'entree',
          titre: 'Entrée, assurance et refus d’entrée',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            {
              type: 'liste',
              items: [
                '<strong>Assurance voyage</strong> : selon la fiche officielle, elle est exigée. Elle doit être rédigée en anglais ou en géorgien et respecter une couverture minimale indiquée sur la fiche (montant à lire sur la fiche).',
                '<strong>Durée sans visa</strong> : les guides indiquent que les ressortissants de l’Union européenne peuvent séjourner jusqu’à <strong>un an (360 à 365 jours)</strong> sans visa. Un site plus ancien parle de 90 jours : vérifiez la durée en vigueur avant de partir.',
              ],
            },
            { type: 'alerte', warn: true, titre: 'Refus d’entrée', html: 'La fiche officielle indique que l’entrée peut être <strong>refusée, même aux titulaires d’un permis de séjour géorgien valide</strong>. Elle conseille de se renseigner sur les facteurs de risque, notamment la participation à des manifestations ou l’activité sur les réseaux sociaux. Des refus ont aussi visé des familles dont les photos de passeport des enfants ne correspondaient plus à leur âge.' },
          ],
          sources: [
            OFFICIEL_ENTREE,
            { label: 'Georgia.travel, visa pour la Géorgie', url: 'https://www.georgia.travel/en_US/article/good-news-about-visa-to-georgia', nature: 'tourisme officiel géorgien' },
            { label: 'Lonely Planet, visa pour la Géorgie', url: 'https://www.lonelyplanet.fr/destinations/europe/georgie/visa', nature: 'guide de voyage' },
          ],
        },
        {
          id: 'argent',
          titre: 'Argent et paiement',
          badge: { type: 'warn', texte: 'À documenter' },
          blocs: [{ type: 'alerte', warn: true, titre: 'Section à compléter', html: 'La monnaie est le lari. L’usage des cartes françaises et des espèces n’a pas été vérifié. Pour un compte géorgien, voir la section « Banque » de la page Vivre.' }],
        },
      ],
    },
    {
      slug: 'vivre',
      titre: 'Vivre en Géorgie',
      intro: 'Le séjour sans visa ne vaut pas statut de résident : pour s’installer, il faut un permis de séjour. Les démarches se font en géorgien.',
      resume: 'Permis de séjour, banque et démarches.',
      icone: '🏠',
      sections: [
        {
          id: 'sejour',
          titre: 'Permis de séjour',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            {
              type: 'liste',
              items: [
                'Le séjour sans visa d’un an <strong>ne confère pas de statut de résident</strong>.',
                'Un <strong>permis de séjour temporaire d’un an, renouvelable</strong>, existe pour le travail, les études, le regroupement familial ou l’investissement. La demande passe par l’agence de développement des services publics (PSDA) et le Public Service Hall de Tbilissi.',
                'Pièces habituelles : preuve de logement (bail ou titre de propriété), assurance santé valide, photos d’identité, plus les pièces propres au type de permis.',
                'Les démarches se font en <strong>géorgien</strong> : un traducteur ou un avocat bilingue est recommandé.',
              ],
            },
          ],
          sources: [
            CYRIL_DEMARCHES,
            { label: 'Cyril Jarnias, visas de résidence en Géorgie', url: 'https://www.cyriljarnias.com/expatriation/guide-s-installer-georgie-expatrie/visas-residence-georgie-procedures-par-type-sejour/', nature: 'blog de conseil' },
            { label: 'Open Shores, quel visa pour vivre en Géorgie', url: 'https://www.openshores.co/blog/quel-visa-pour-vivre-en-georgie', nature: 'blog' },
          ],
          note: 'Aucune source officielle géorgienne n’a été consultée : vérifiez auprès de la PSDA et de l’ambassade de Géorgie en France.',
        },
        {
          id: 'banque',
          titre: 'Banque',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            {
              type: 'liste',
              items: [
                'Les banques les plus citées pour les non-résidents sont <strong>TBC Bank</strong> et <strong>Bank of Georgia</strong>.',
                'Les avis divergent : un blog affirme que la plupart des banques ouvrent un compte en 48 heures avec un passeport valide, un autre que certaines demandent une preuve de séjour ou un contrat de location. Prévoyez un logement stable.',
              ],
            },
          ],
          sources: [CYRIL_BANQUES],
        },
        aDocumenter('Santé, logement et coût de la vie'),
      ],
    },
    {
      slug: 'travailler',
      titre: 'Travailler en Géorgie',
      intro: 'Pour exercer légalement une activité rémunérée, il faut un statut enregistré. Les règles ont changé récemment selon certaines sources.',
      resume: 'Statut professionnel et permis de travail.',
      icone: '💼',
      sections: [
        {
          id: 'droit',
          titre: 'Le droit de travailler',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            {
              type: 'liste',
              items: [
                'Pour exercer légalement, l’enregistrement d’un <strong>statut</strong> (micro-entreprise ou société à responsabilité limitée) est nécessaire.',
                'Une source évoque des <strong>permis de travail obligatoires pour les étrangers depuis mars 2026</strong> : ce point est à vérifier officiellement.',
              ],
            },
          ],
          sources: [
            { label: 'Visitworld, permis de travail pour les étrangers en Géorgie (2026)', url: 'https://visitworld.today/fr/blog/4374/moving-to-georgia-in-2026-what-work-permits-are-available-to-foreigners', nature: 'site de voyage' },
            CYRIL_DEMARCHES,
          ],
        },
        aDocumenter('Salaire minimum, impôts et recherche d’emploi'),
      ],
    },
    paiementsACompleter('le lari'),
    {
      slug: 'langue-culture',
      titre: 'Langue et culture',
      intro: 'Le géorgien s’écrit avec un alphabet unique, qui ne ressemble ni au latin ni au cyrillique. Les panneaux sont souvent doublés en anglais dans les villes.',
      resume: 'Géorgien, alphabet et prononciation.',
      icone: '🎭',
      sections: [
        {
          titre: 'Un alphabet à part',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            { type: 'p', html: 'L’alphabet géorgien compte 33 lettres et s’écrit sans majuscules. Les prononciations de ce guide sont écrites à la française et <strong>très approximatives</strong> : le géorgien a des consonnes éjectives (sons « claqués ») que l’écriture française ne rend pas. Faites relire par un locuteur.' },
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
        ['გამარჯობა', 'gamardjoba', 'Bonjour / Salut'],
        ['დილა მშვიდობისა', 'dila mchvidobissa', 'Bonjour (le matin)'],
        ['საღამო მშვიდობისა', 'saghamo mchvidobissa', 'Bonsoir'],
        ['გმადლობთ', 'gmadlobt', 'Merci'],
        ['გთხოვთ', 'gtkhovt', 'S’il vous plaît'],
        ['ბოდიში', 'bodichi', 'Excusez-moi'],
        ['დიახ', 'diakh', 'Oui'],
        ['არა', 'ara', 'Non'],
        ['როგორ ხართ?', 'rogor khart', 'Comment allez-vous ?'],
        ['კარგად', 'kargad', 'Bien'],
        ['ნახვამდის', 'nakhvamdis', 'Au revoir'],
      ],
      astuce: 'Le « kh » se prononce comme la jota espagnole. Faites relire ces phrases par un locuteur.',
    },
    {
      slug: 'se-presenter',
      titre: 'Se présenter',
      intro: 'Dire qui vous êtes et ce que vous ne comprenez pas.',
      phrases: [
        ['მე მქვია…', 'mé mkvia', 'Je m’appelle…'],
        ['მე ვარ საფრანგეთიდან', 'mé var sapranguétidan', 'Je viens de France'],
        ['ვლაპარაკობ ცოტა ქართულად', 'vlaparakob tsota kartoulad', 'Je parle un peu géorgien'],
        ['ინგლისურად ლაპარაკობთ?', 'inglissourad laparakobt', 'Parlez-vous anglais ?'],
        ['ვერ გავიგე', 'vér gavigué', 'Je n’ai pas compris'],
      ],
      astuce: 'Préparez « მე მქვია… » avec votre prénom et répétez-le à voix haute.',
    },
    {
      slug: 'chiffres-prix-heure',
      titre: 'Chiffres et prix',
      intro: 'Pour comprendre un prix et compter votre argent.',
      phrases: [
        ['ერთი', 'érti', '1'],
        ['ორი', 'ori', '2'],
        ['სამი', 'sami', '3'],
        ['ოთხი', 'otkhi', '4'],
        ['ხუთი', 'khouti', '5'],
        ['ექვსი', 'ékvsi', '6'],
        ['შვიდი', 'chvidi', '7'],
        ['რვა', 'rva', '8'],
        ['ცხრა', 'tskhra', '9'],
        ['ათი', 'ati', '10'],
        ['რა ღირს?', 'ra ghirs', 'Combien ça coûte ?'],
      ],
      astuce: 'Demandez le prix avant d’acheter : « რა ღირს? ».',
    },
    {
      slug: 'se-deplacer',
      titre: 'Se déplacer',
      intro: 'Demander son chemin et acheter un billet.',
      phrases: [
        ['სად არის…?', 'sad aris', 'Où est… ?'],
        ['სადგური', 'sadgouri', 'La gare'],
        ['აეროპორტი', 'aéroporti', 'L’aéroport'],
        ['გაჩერება', 'gatchéréba', 'L’arrêt'],
        ['ბილეთი', 'biléti', 'Un billet'],
        ['მარცხნივ', 'martskhniv', 'À gauche'],
        ['მარჯვნივ', 'mardjvniv', 'À droite'],
        ['პირდაპირ', 'pirdapir', 'Tout droit'],
      ],
      astuce: 'Montrez l’adresse écrite sur votre téléphone : c’est souvent plus sûr que de la dire.',
    },
    {
      slug: 'restaurant-courses',
      titre: 'Restaurant et courses',
      intro: 'Commander, demander l’addition et faire vos courses.',
      phrases: [
        ['მაგიდა ორისთვის', 'magida oristvis', 'Une table pour deux'],
        ['მენიუ, გთხოვთ', 'ménu gtkhovt', 'Le menu, s’il vous plaît'],
        ['მინდა…', 'minda', 'Je voudrais…'],
        ['ყავა', 'kava', 'Un café'],
        ['წყალი', 'tskali', 'De l’eau'],
        ['ღვინო', 'ghvino', 'Du vin'],
        ['ლუდი', 'loudi', 'Une bière'],
        ['ანგარიში, გთხოვთ', 'angarichi gtkhovt', 'L’addition, s’il vous plaît'],
      ],
      astuce: 'Le vin tient une grande place dans la culture géorgienne : « ღვინო » est un mot à connaître.',
    },
    {
      slug: 'urgences',
      titre: 'Urgences et phrases de survie',
      intro: 'Les phrases à connaître en cas de problème.',
      phrases: [
        ['დამეხმარეთ!', 'damékhmarét', 'Au secours !'],
        ['გამოიძახეთ სასწრაფო!', 'gamoïdzakhét sastsrapo', 'Appelez une ambulance !'],
        ['გამოიძახეთ პოლიცია!', 'gamoïdzakhét politsia', 'Appelez la police !'],
        ['მჭირდება ექიმი', 'mtchirdéba ékimi', 'J’ai besoin d’un médecin'],
        ['მტკივა', 'mtkiva', 'J’ai mal'],
        ['დავიკარგე', 'davikargué', 'Je suis perdu(e)'],
        ['სად არის აფთიაქი?', 'sad aris aptiaki', 'Où est la pharmacie ?'],
      ],
      astuce: 'Les numéros d’urgence géorgiens n’ont pas été vérifiés ici : notez-les depuis la fiche officielle du ministère avant de partir.',
    },
  ],

  sourcesSupplementaires: [],
};
