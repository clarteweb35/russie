import type { PaysComplet } from './types';

const DIPLO_SECURITE = 'https://www.diplomatie.gouv.fr/fr/information-par-pays/senegal/conseils-aux-voyageurs-securite';
const DIPLO_ENTREE = 'https://www.diplomatie.gouv.fr/fr/information-par-pays/senegal/conseils-aux-voyageurs-entree-sejour';
const FRANCE_VOLONTAIRES = { label: 'France Volontaires, guide sécurité Sénégal (reprise de la fiche du ministère)', url: 'https://france-volontaires.org/wp-content/uploads/2025/10/france-volontaires.org-guide-securite-senegal.pdf', nature: 'association, reprend la fiche officielle' };
const CYRIL_SN = { label: 'Cyril Jarnias, démarches administratives pour vivre au Sénégal', url: 'https://www.cyriljarnias.com/?p=31943', nature: 'blog de conseil' };

export const senegal: PaysComplet = {
  complet: true,
  test: true,
  iso: 'SEN',
  slug: 'senegal',
  nom: 'Sénégal',
  article: 'le Sénégal',
  accroche: 'Un pays hors de l’Union européenne où le français est langue officielle et le wolof la langue du quotidien. Santé, démarches et monnaie diffèrent. Fiche beta, à vérifier.',
  couleur: '#00703c',
  // Le wolof n’a pas de voix de synthèse sur la plupart des appareils : les leçons restent lisibles sans audio
  langue: { nom: 'wolof', code: 'wo-SN' },
  devise: 'franc CFA',
  conseilsVoyageurs: DIPLO_SECURITE,
  verifie: '4 novembre 2026',

  mediasLocaux: [
    { nom: 'APS (Agence de presse sénégalaise)', url: 'https://aps.sn', nature: 'agence de presse publique', langue: 'français' },
    { nom: 'Le Soleil', url: 'https://www.lesoleil.sn', nature: 'quotidien public', langue: 'français' },
    { nom: 'Seneweb', url: 'https://www.seneweb.com', nature: 'site d’information privé', langue: 'français' },
    { nom: 'RTS', url: 'https://www.rts.sn', nature: 'radiotélévision publique', langue: 'français' },
  ],

  rubriques: [
    {
      slug: 'voyager',
      titre: 'Voyager au Sénégal',
      intro: 'Le Sénégal est hors de l’Union européenne : la santé (vaccins, paludisme), les zones à éviter et les formalités demandent une vraie préparation.',
      resume: 'Sécurité, entrée, santé et argent.',
      icone: '✈️',
      sections: [
        {
          id: 'securite',
          titre: 'Sécurité et conseils officiels',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            {
              type: 'liste',
              items: [
                '<strong>Situation politique</strong> : décrite comme stable, avec des tensions possibles en période électorale.',
                '<strong>Petite délinquance</strong> : des vols à la tire et des arnaques sont signalés dans les lieux fréquentés (marchés, transports) et touristiques.',
                '<strong>Route</strong> : les accidents de la route sont très fréquents.',
              ],
            },
            { type: 'alerte', warn: true, titre: 'Zones et sujets à vérifier sur la fiche officielle', html: 'La <strong>Casamance</strong> et la <strong>frontière avec le Mali</strong> font l’objet de recommandations particulières. Une page commerciale évoque aussi un risque d’enlèvement accru près de la frontière Sénégal, Mali et Mauritanie, et des dispositions pénales plus strictes depuis mars 2026 sur les actes homosexuels. <strong>Ces deux points ne sont pas confirmés par une source officielle</strong> : lisez la fiche du ministère.' },
          ],
          sources: [
            FRANCE_VOLONTAIRES,
            { label: 'Ministère de l’Europe et des Affaires étrangères, fiche Sénégal (sécurité)', url: DIPLO_SECURITE, nature: 'source officielle' },
            { label: 'Buch dein Visum, Sénégal : conseils et sécurité (septembre 2026)', url: 'https://www.buch-dein-visum.de/fr/news/allgemein/senegal-aktuelle-reise-und-sicherheitshinweise-stand-september-2026-b9d48e', nature: 'site commercial' },
          ],
        },
        {
          id: 'entree',
          titre: 'Entrée et formalités',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            {
              type: 'liste',
              items: [
                'Le passeport doit être valable <strong>au moins trois mois après la date de départ</strong> prévue (fiche canadienne).',
                'Un billet retour ou de continuation peut être exigé : l’entrée peut être refusée sans lui.',
                'Plusieurs guides indiquent que les Français sont exemptés de visa pour un séjour jusqu’à 90 jours. Ce point doit être confirmé auprès de l’ambassade du Sénégal avant de partir.',
              ],
            },
          ],
          sources: [
            { label: 'Ministère de l’Europe et des Affaires étrangères, fiche Sénégal (entrée et séjour)', url: DIPLO_ENTREE, nature: 'source officielle' },
            { label: 'Gouvernement du Canada, conseils aux voyageurs pour le Sénégal', url: 'https://voyage.gc.ca/destinations/senegal', nature: 'source officielle canadienne' },
          ],
        },
        {
          id: 'sante',
          titre: 'Santé et vaccins',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            {
              type: 'liste',
              items: [
                'La <strong>fièvre jaune</strong> circule : la vaccination est particulièrement recommandée.',
                'Le <strong>paludisme</strong> demande un traitement préventif adapté à chaque personne : consultez votre médecin ou un centre de conseils aux voyageurs.',
                'La carte européenne d’assurance maladie ne s’applique pas : prévoyez une assurance voyage avec rapatriement.',
              ],
            },
          ],
          sources: [FRANCE_VOLONTAIRES],
        },
        {
          id: 'argent',
          titre: 'Argent et paiement',
          badge: { type: 'warn', texte: 'À documenter' },
          blocs: [{ type: 'alerte', warn: true, titre: 'Section à compléter', html: 'La monnaie est le franc CFA, lié à l’euro. L’usage des cartes, des espèces et des paiements mobiles n’a pas été vérifié auprès de sources fiables.' }],
        },
      ],
    },
    {
      slug: 'vivre',
      titre: 'Vivre au Sénégal',
      intro: 'Au-delà de 90 jours, il faut un titre de séjour. Les durées et les procédures annoncées varient fortement selon les sources.',
      resume: 'Carte de résident et démarches sur place.',
      icone: '🏠',
      sections: [
        {
          id: 'sejour',
          titre: 'Séjour de plus de 90 jours',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            {
              type: 'liste',
              items: [
                'Au-delà de 90 jours, un ressortissant français doit demander une <strong>carte de résident</strong> auprès de la police des étrangers (direction DPETV). Elle donne une carte d’identité d’étranger.',
                'La durée est donnée comme <strong>un à cinq ans, renouvelable</strong> par certains guides. Un texte plus ancien (2008) liant un accord franco-sénégalais évoque dix ans : les règles actuelles sont à vérifier.',
                'Après cinq ans de résidence régulière, un titre de résident permanent serait accessible.',
              ],
            },
          ],
          sources: [
            CYRIL_SN,
            { label: 'Globalization Partners, visas et permis au Sénégal', url: 'https://www.globalization-partners.com/fr/globalpedia/senegal/visa-permits/', nature: 'prestataire, intérêt commercial' },
            { label: 'Open Shores, immigrer au Sénégal', url: 'https://www.openshores.co/blog/immigrer-en-senegal', nature: 'blog' },
          ],
          note: 'Aucune source officielle sénégalaise n’a été consultée : le portail officiel de visas et la police des étrangers sont les sources à vérifier.',
        },
        {
          id: 'logement',
          titre: 'Santé, banque, logement et coût de la vie',
          badge: { type: 'warn', texte: 'À documenter' },
          blocs: [{ type: 'alerte', warn: true, titre: 'Section à compléter', html: 'Aucune source fiable n’a été retenue sur ces sujets.' }],
        },
      ],
    },
    {
      slug: 'travailler',
      titre: 'Travailler au Sénégal',
      intro: 'Une carte de séjour ne suffit pas pour travailler : un permis de travail distinct est demandé.',
      resume: 'Permis de travail et contrat.',
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
                'Un étranger qui travaille <strong>plus de 90 jours</strong> a besoin d’un permis de travail, sauf les ressortissants des pays de la CEDEAO.',
                'Pour un poste salarié, un contrat de travail <strong>visé par le ministère du Travail</strong> est généralement demandé. Le permis est en principe porté par l’employeur.',
                'Une durée initiale de deux ans est citée par un site : à confirmer.',
              ],
            },
          ],
          sources: [
            CYRIL_SN,
            { label: 'Africarrieres, travailleurs étrangers au Sénégal', url: 'https://africarrieres.com/senegal/fr/guide/employeur-entreprise/foreign-workers', nature: 'site de recrutement' },
          ],
        },
        {
          id: 'emploi',
          titre: 'Salaire minimum, impôts et recherche d’emploi',
          badge: { type: 'warn', texte: 'À documenter' },
          blocs: [{ type: 'alerte', warn: true, titre: 'Section à compléter', html: 'Ces sujets n’ont pas été vérifiés auprès de sources fiables.' }],
        },
      ],
    },
    {
      slug: 'paiements',
      titre: 'Moyens de paiement',
      intro: 'La monnaie est le franc CFA. Cette page est à compléter : je n’ai pas de source fiable à ce stade.',
      resume: 'Franc CFA, espèces et paiement mobile.',
      icone: '💳',
      sections: [
        {
          titre: 'Monnaie, cartes et paiement mobile',
          badge: { type: 'warn', texte: 'À documenter' },
          blocs: [{ type: 'alerte', warn: true, titre: 'Section à compléter', html: 'Les usages (cartes françaises, retraits, paiement mobile) n’ont pas été vérifiés. Renseignez-vous auprès de votre banque avant de partir.' }],
        },
      ],
    },
    {
      slug: 'langue-culture',
      titre: 'Langue et culture',
      intro: 'Le français est la langue officielle ; le wolof est la langue la plus utilisée au quotidien. Au Sénégal, vous vous ferez comprendre en français dans de nombreuses situations.',
      resume: 'Français, wolof et prononciation.',
      icone: '🎭',
      sections: [
        {
          titre: 'Pas de voix de synthèse pour le wolof',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            { type: 'p', html: 'La plupart des appareils n’ont pas de voix de synthèse en wolof : les leçons restent utilisables avec le texte et la <strong>prononciation écrite à la française</strong>, sans bouton d’écoute. Faites relire ces leçons par un locuteur avant de les apprendre.' },
          ],
        },
        {
          titre: 'Prononciation : repères',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            {
              type: 'tableau',
              entetes: ['Lettre', 'Se prononce', 'Exemple'],
              lignes: [
                ['x', 'comme « kh » (jota)', 'ndox : « ndokh »'],
                ['ñ', 'comme « gn »', 'ñaar : « gnaar »'],
                ['j', 'comme « dj »', 'jërëjëf : « djérédjèf »'],
                ['ë', 'comme « eu » bref', 'bëgg : « bègue »'],
              ],
            },
          ],
          note: 'Repères non sourcés et approximatifs.',
        },
        {
          titre: 'Culture et usages',
          badge: { type: 'warn', texte: 'À documenter' },
          blocs: [{ type: 'alerte', warn: true, titre: 'Section à compléter', html: 'Les usages (salutations, hospitalité, vie quotidienne) n’ont pas été vérifiés auprès de sources fiables.' }],
        },
      ],
    },
  ],

  lecons: [
    {
      slug: 'salutations',
      titre: 'Salutations et politesse',
      intro: 'Au Sénégal, les salutations sont importantes et se prolongent volontiers. Ces phrases wolof sont à faire relire par un locuteur.',
      phrases: [
        ['Salaam maalekum', 'salam malékoum', 'Bonjour (que la paix soit sur vous)'],
        ['Maalekum salaam', 'malékoum salam', 'Réponse : et sur vous la paix'],
        ['Nanga def?', 'nanga dèf', 'Comment vas-tu ?'],
        ['Maa ngi fi rekk', 'ma ngui fi rèk', 'Je vais bien (je suis là)'],
        ['Jërëjëf', 'djérédjèf', 'Merci'],
        ['Waaw', 'waaw', 'Oui'],
        ['Déedéet', 'déédéét', 'Non'],
        ['Baal ma', 'baal ma', 'Excuse-moi / Pardon'],
        ['Ba beneen yoon', 'ba bénén yône', 'À la prochaine fois'],
      ],
      astuce: 'Il n’existe pas de voix wolof sur la plupart des appareils : lisez le texte et la prononciation, et faites relire par un locuteur.',
    },
    {
      slug: 'se-presenter',
      titre: 'Se présenter',
      intro: 'Dire qui vous êtes. Phrases wolof à faire relire par un locuteur.',
      phrases: [
        ['Naka nga tudd?', 'naka nga toudd', 'Comment t’appelles-tu ?'],
        ['Maa ngi tudd…', 'ma ngui toudd', 'Je m’appelle…'],
        ['Dama bëgg…', 'dama bègue', 'Je veux…'],
        ['Ndank', 'ndank', 'Doucement / lentement'],
      ],
      astuce: 'En cas de doute, parlez français : c’est la langue officielle et elle est comprise dans de nombreuses situations.',
    },
    {
      slug: 'chiffres-prix-heure',
      titre: 'Chiffres et prix',
      intro: 'Pour comprendre un prix et compter votre argent.',
      phrases: [
        ['Benn', 'bène', '1'],
        ['Ñaar', 'gnaar', '2'],
        ['Ñett', 'gnètt', '3'],
        ['Ñent', 'gnènt', '4'],
        ['Juróom', 'djourôme', '5'],
        ['Juróom-benn', 'djourôme-bène', '6'],
        ['Juróom-ñaar', 'djourôme-gnaar', '7'],
        ['Juróom-ñett', 'djourôme-gnètt', '8'],
        ['Juróom-ñent', 'djourôme-gnènt', '9'],
        ['Fukk', 'fouk', '10'],
        ['Ñaata la?', 'gnaata la', 'Combien ça coûte ?'],
      ],
      astuce: 'Demandez toujours le prix avant d’acheter sur un marché : « Ñaata la? ».',
    },
    {
      slug: 'se-deplacer',
      titre: 'Se déplacer',
      intro: 'Quelques mots pour vous déplacer. Phrases wolof à faire relire par un locuteur.',
      phrases: [
        ['Dama bëgg dem…', 'dama bègue dèm', 'Je veux aller à…'],
        ['Fii', 'fi', 'Ici'],
        ['Fale', 'falé', 'Là-bas'],
        ['Ndank', 'ndank', 'Doucement'],
      ],
      astuce: 'Montrez l’adresse écrite sur votre téléphone et convenez du prix avant de monter dans un taxi.',
    },
    {
      slug: 'restaurant-courses',
      titre: 'Restaurant et courses',
      intro: 'Quelques mots pour manger. Phrases wolof à faire relire par un locuteur.',
      phrases: [
        ['Dama xiif', 'dama khiif', 'J’ai faim'],
        ['Ndox', 'ndokh', 'De l’eau'],
        ['Dafa neex', 'dafa nèèkh', 'C’est bon (délicieux)'],
      ],
      astuce: 'Le français est compris presque partout dans les restaurants ; ces mots font plaisir.',
    },
    {
      slug: 'urgences',
      titre: 'Urgences et phrases de survie',
      intro: 'En cas de problème, parlez français : c’est la langue officielle.',
      phrases: [
        ['Dimbali ma!', 'dimbali ma', 'Aidez-moi !'],
        ['Baal ma', 'baal ma', 'Excusez-moi'],
        ['Ndank', 'ndank', 'Doucement / lentement'],
      ],
      astuce: 'Les numéros d’urgence sénégalais n’ont pas été vérifiés ici : notez-les depuis la fiche officielle du ministère avant de partir.',
    },
  ],

  sourcesSupplementaires: [],
};
