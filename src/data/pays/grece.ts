import type { PaysComplet } from './types';
import { aDocumenter, cultureACompleter, diplo, paiementsACompleter, securiteALire } from './aides';

const D = diplo('grece');
const OFFICIEL_ENTREE = { label: 'Ministère de l’Europe et des Affaires étrangères, fiche Grèce (entrée et séjour)', url: D.entree, nature: 'source officielle' };
const UFE = { label: 'UFE, s’installer en Grèce', url: 'https://ufe.org/dossier-pays/grece/sinstaller-en-grece/', nature: 'association de Français de l’étranger' };
const CYRIL_GR = { label: 'Cyril Jarnias, démarches administratives pour s’installer en Grèce', url: 'https://www.cyriljarnias.com/?p=3528', nature: 'blog de conseil' };

export const grece: PaysComplet = {
  complet: true,
  test: true,
  iso: 'GRC',
  slug: 'grece',
  nom: 'Grèce',
  article: 'la Grèce',
  accroche: 'Un pays de l’Union européenne à l’alphabet propre : libre circulation, avec numéro fiscal et sécurité sociale à obtenir pour s’installer. Fiche beta, à vérifier.',
  couleur: '#0d5eaf',
  langue: { nom: 'grec', code: 'el-GR' },
  devise: 'euro',
  conseilsVoyageurs: D.securite,
  verifie: '4 novembre 2026',

  mediasLocaux: [
    { nom: 'ERT', url: 'https://www.ert.gr', nature: 'service public de radio-télévision', langue: 'grec' },
    { nom: 'AMNA (Agence de presse d’Athènes)', url: 'https://www.amna.gr', nature: 'agence de presse publique', langue: 'grec, anglais' },
    { nom: 'Kathimerini', url: 'https://www.kathimerini.gr', nature: 'quotidien généraliste', langue: 'grec' },
    { nom: 'eKathimerini', url: 'https://www.ekathimerini.com', nature: 'édition en anglais du quotidien', langue: 'anglais' },
  ],

  rubriques: [
    {
      slug: 'voyager',
      titre: 'Voyager en Grèce',
      intro: 'La Grèce est dans l’Union européenne et l’espace Schengen : l’entrée est libre pour un Français.',
      resume: 'Entrée, assurance et sécurité.',
      icone: '✈️',
      sections: [
        {
          id: 'entree',
          titre: 'Entrée et formalités',
          badge: { type: 'ok', texte: 'Vérifié' },
          blocs: [
            {
              type: 'liste',
              items: [
                'La Grèce étant membre de l’Union européenne, les ressortissants français munis d’un <strong>passeport ou d’une carte nationale d’identité en cours de validité</strong> peuvent y entrer librement.',
                'La fiche officielle rappelle qu’il est <strong>indispensable de vérifier que vous êtes bien assuré</strong> avant de partir.',
                'Ambassade de France : 7 avenue Vassilissis Sofias, 10671 Athènes (téléphone +30 2 103 391 000), avec un consulat général à Thessalonique.',
              ],
            },
          ],
          sources: [OFFICIEL_ENTREE],
        },
        securiteALire(D.securite, 'la Grèce'),
        aDocumenter('Argent, santé et téléphone', 'La monnaie est l’euro. Les incendies de forêt, les séismes et les consignes à suivre n’ont pas été trouvés dans cette recherche : lisez la rubrique « Sécurité » de la fiche officielle.'),
      ],
    },
    {
      slug: 'vivre',
      titre: 'Vivre en Grèce',
      intro: 'Pas de visa pour un Européen : un enregistrement après trois mois, puis un numéro fiscal et un numéro de sécurité sociale.',
      resume: 'Enregistrement, AFM et AMKA.',
      icone: '🏠',
      sections: [
        {
          id: 'enregistrement',
          titre: 'Enregistrement et numéros',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            {
              type: 'liste',
              items: [
                'Pour un séjour de plus de <strong>trois mois</strong>, un citoyen de l’UE doit s’enregistrer et obtenir une attestation d’enregistrement, dans les 90 jours suivant l’arrivée, auprès du bureau des étrangers ou de la police locale, ou via le centre de service au citoyen (KEP). L’attestation serait gratuite et valable 5 ans.',
                'Pièces citées : passeport ou carte d’identité, preuve d’adresse, preuve de ressources suffisantes et assurance santé.',
                'Le <strong>numéro fiscal (AFM)</strong> s’obtient au bureau des impôts du lieu de résidence ; il sert à travailler légalement, ouvrir un compte, signer un bail et déclarer ses impôts.',
                'Le <strong>numéro de sécurité sociale (AMKA)</strong> s’obtient auprès de la caisse de sécurité sociale.',
              ],
            },
            { type: 'alerte', warn: true, titre: 'Sources divergentes', html: 'Pour la banque, certains guides disent que le numéro fiscal est exigé, d’autres que le passeport suffit à un citoyen de l’UE. Vérifiez auprès de votre banque.' },
          ],
          sources: [UFE, CYRIL_GR, { label: 'Allianz Care, visa pour la Grèce', url: 'https://www.allianzcare.com/fr/ressources/sante-et-bien-etre/ma-vie-expat/guides-expatries/visa-pour-grece.html', nature: 'assureur, intérêt commercial' }],
          note: 'Aucune source officielle grecque n’a été consultée : vérifiez sur gov.gr et auprès de votre commune.',
        },
        aDocumenter('Santé, logement et coût de la vie'),
      ],
    },
    {
      slug: 'travailler',
      titre: 'Travailler en Grèce',
      intro: 'Les citoyens de l’Union européenne n’ont pas besoin de permis de travail, mais le numéro fiscal est indispensable.',
      resume: 'Droit de travailler et numéros.',
      icone: '💼',
      sections: [
        {
          id: 'droit',
          titre: 'Le droit de travailler',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            { type: 'p', html: 'Un ressortissant de l’UE n’a besoin ni de visa ni de <strong>permis de travail</strong>. Pour travailler légalement, il faut un numéro fiscal (AFM) et un numéro de sécurité sociale (AMKA). Les règles d’affiliation et de reconnaissance des diplômes n’ont pas été détaillées dans cette recherche.' },
          ],
          sources: [UFE, CYRIL_GR],
        },
        aDocumenter('Salaire minimum, impôts et recherche d’emploi'),
      ],
    },
    paiementsACompleter('l’euro'),
    {
      slug: 'langue-culture',
      titre: 'Langue et culture',
      intro: 'Le grec s’écrit avec son propre alphabet de 24 lettres, que les touristes déchiffrent vite : beaucoup de lettres ressemblent à celles que nous connaissons.',
      resume: 'Grec et alphabet.',
      icone: '🎭',
      sections: [
        {
          titre: 'Un alphabet à apprendre en quelques heures',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            {
              type: 'tableau',
              entetes: ['Lettre', 'Se prononce', 'Exemple'],
              lignes: [
                ['γ', 'comme un « r » doux ou « y » devant e, i', 'γειά : « ya »'],
                ['θ', 'comme le « th » anglais', 'ευχαριστώ : « efkharisto »'],
                ['χ', 'comme une jota espagnole', 'χάρηκα : « kharika »'],
                ['ου', 'comme « ou »', 'που : « pou »'],
              ],
            },
          ],
          note: 'Repères non sourcés et approximatifs.',
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
        ['Γειά σου', 'ya sou', 'Salut (informel)'],
        ['Γειά σας', 'ya sas', 'Bonjour (poli)'],
        ['Καλημέρα', 'kaliméra', 'Bonjour (le matin)'],
        ['Καλησπέρα', 'kalispéra', 'Bonsoir'],
        ['Ευχαριστώ', 'efkharisto', 'Merci'],
        ['Παρακαλώ', 'parakalo', 'S’il vous plaît / De rien'],
        ['Συγγνώμη', 'signomi', 'Excusez-moi'],
        ['Ναι', 'né', 'Oui'],
        ['Όχι', 'okhi', 'Non'],
        ['Τι κάνετε;', 'ti kanété', 'Comment allez-vous ?'],
        ['Καλά, ευχαριστώ', 'kala efkharisto', 'Bien, merci'],
        ['Αντίο', 'adio', 'Au revoir'],
      ],
      astuce: '« Ναι » (oui) se prononce « né » et « Όχι » (non) « okhi » : ne vous y trompez pas.',
    },
    {
      slug: 'se-presenter',
      titre: 'Se présenter',
      intro: 'Dire qui vous êtes et ce que vous ne comprenez pas.',
      phrases: [
        ['Με λένε…', 'mé léné', 'Je m’appelle…'],
        ['Χάρηκα', 'kharika', 'Enchanté(e)'],
        ['Είμαι Γάλλος', 'imé galos', 'Je suis français'],
        ['Είμαι Γαλλίδα', 'imé galida', 'Je suis française'],
        ['Είμαι από τη Γαλλία', 'imé apo ti galia', 'Je viens de France'],
        ['Μιλάω λίγα ελληνικά', 'milao liga éllinika', 'Je parle un peu grec'],
        ['Μιλάτε αγγλικά;', 'milaté angliká', 'Parlez-vous anglais ?'],
        ['Δεν καταλαβαίνω', 'den katalavéno', 'Je ne comprends pas'],
        ['Πιο αργά, παρακαλώ', 'pio arga parakalo', 'Plus lentement, s’il vous plaît'],
      ],
      astuce: 'Préparez « Με λένε… » avec votre prénom et répétez-le à voix haute.',
    },
    {
      slug: 'chiffres-prix-heure',
      titre: 'Chiffres, prix et heure',
      intro: 'Pour comprendre un prix, demander l’heure ou compter votre argent.',
      phrases: [
        ['Ένα', 'éna', '1'],
        ['Δύο', 'dio', '2'],
        ['Τρία', 'tria', '3'],
        ['Τέσσερα', 'tésséra', '4'],
        ['Πέντε', 'pénté', '5'],
        ['Έξι', 'éxi', '6'],
        ['Εφτά', 'efta', '7'],
        ['Οχτώ', 'okhto', '8'],
        ['Εννιά', 'énia', '9'],
        ['Δέκα', 'déka', '10'],
        ['Πόσο κάνει;', 'poso kani', 'Combien ça coûte ?'],
        ['Τι ώρα είναι;', 'ti ora iné', 'Quelle heure est-il ?'],
      ],
      astuce: 'Les prix sont en euros, comme en France.',
    },
    {
      slug: 'se-deplacer',
      titre: 'Se déplacer',
      intro: 'Demander son chemin et acheter un billet.',
      phrases: [
        ['Πού είναι…;', 'pou iné', 'Où est… ?'],
        ['Ο σταθμός', 'o stathmos', 'La gare'],
        ['Το αεροδρόμιο', 'to aérodromio', 'L’aéroport'],
        ['Η στάση του λεωφορείου', 'i stasi tou léoforiou', 'L’arrêt de bus'],
        ['Ένα εισιτήριο, παρακαλώ', 'éna issitirio parakalo', 'Un billet, s’il vous plaît'],
        ['Αριστερά', 'aristéra', 'À gauche'],
        ['Δεξιά', 'dexia', 'À droite'],
        ['Ευθεία', 'efthia', 'Tout droit'],
      ],
      astuce: 'Montrez l’adresse écrite sur votre téléphone : c’est souvent plus sûr que de la dire.',
    },
    {
      slug: 'restaurant-courses',
      titre: 'Restaurant et courses',
      intro: 'Commander, demander l’addition et faire vos courses.',
      phrases: [
        ['Τραπέζι για δύο', 'trapézi ya dio', 'Une table pour deux'],
        ['Τον κατάλογο, παρακαλώ', 'ton katalogo parakalo', 'La carte, s’il vous plaît'],
        ['Θα ήθελα…', 'tha ithéla', 'Je voudrais…'],
        ['Έναν καφέ', 'énan kafé', 'Un café'],
        ['Νερό', 'néro', 'De l’eau'],
        ['Μια μπύρα', 'mia bira', 'Une bière'],
        ['Τον λογαριασμό, παρακαλώ', 'ton logariasmo parakalo', 'L’addition, s’il vous plaît'],
      ],
      astuce: 'Pour appeler le serveur ou payer, « Τον λογαριασμό, παρακαλώ » suffit.',
    },
    {
      slug: 'urgences',
      titre: 'Urgences et phrases de survie',
      intro: 'Les phrases à connaître en cas de problème.',
      phrases: [
        ['Βοήθεια!', 'voïthia', 'Au secours !'],
        ['Καλέστε ασθενοφόρο!', 'kaléssté asthénoforo', 'Appelez une ambulance !'],
        ['Καλέστε την αστυνομία!', 'kaléssté tin astinomia', 'Appelez la police !'],
        ['Χρειάζομαι γιατρό', 'khriazomé yatro', 'J’ai besoin d’un médecin'],
        ['Πονάω', 'ponao', 'J’ai mal'],
        ['Χάθηκα', 'khathika', 'Je suis perdu(e)'],
        ['Πού είναι το φαρμακείο;', 'pou iné to farmakio', 'Où est la pharmacie ?'],
      ],
      astuce: 'Le numéro d’urgence européen 112 fonctionne dans l’Union européenne, dont la Grèce (à confirmer sur la fiche officielle).',
    },
  ],

  sourcesSupplementaires: [],
};
