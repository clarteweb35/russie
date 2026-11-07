import type { PaysComplet } from '../types';
import { aDocumenter, cultureACompleter, diplo, paiementsACompleter, securiteALire } from '../aides';

const D = diplo('italie');
const THE_LOCAL = { label: 'The Local, cinq choses à savoir avant de s’installer en Italie', url: 'https://www.thelocal.it/20230414/five-things-eu-nationals-should-know-before-moving-to-italy', nature: 'média pour les expatriés' };
const UNIMI = { label: 'Université de Milan, documents de résidence', url: 'https://www.unimi.it/en/international/coming-abroad/residency-documents', nature: 'université' };

export const italie: PaysComplet = {
  complet: true,
  test: true,
  iso: 'ITA',
  slug: 'italie',
  nom: 'Italie',
  article: 'l’Italie',
  accroche: 'Un pays de l’Union européenne aux démarches très communales : numéro fiscal, inscription à la mairie, puis santé. Fiche beta, à vérifier.',
  couleur: '#1e6b3a',
  langue: { nom: 'italien', code: 'it-IT' },
  devise: 'euro',
  conseilsVoyageurs: D.securite,
  verifie: '4 novembre 2026',

  mediasLocaux: [
    { nom: 'ANSA', url: 'https://www.ansa.it', nature: 'agence de presse', langue: 'italien, anglais' },
    { nom: 'Corriere della Sera', url: 'https://www.corriere.it', nature: 'quotidien généraliste', langue: 'italien' },
    { nom: 'la Repubblica', url: 'https://www.repubblica.it', nature: 'quotidien généraliste', langue: 'italien' },
    { nom: 'Rai News', url: 'https://www.rainews.it', nature: 'information du service public', langue: 'italien' },
  ],

  rubriques: [
    {
      slug: 'voyager',
      titre: 'Voyager en Italie',
      intro: 'L’Italie est dans l’Union européenne et l’espace Schengen : l’entrée est libre pour un Français.',
      resume: 'Entrée, documents et sécurité.',
      icone: '✈️',
      sections: [
        {
          id: 'entree',
          titre: 'Entrée et formalités',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            {
              type: 'liste',
              items: [
                'Un Français peut entrer avec une <strong>carte nationale d’identité en cours de validité ou un passeport valide</strong>. Pour un séjour de moins de trois mois, aucun visa n’est exigé.',
                'Une carte d’identité dont la date de validité est dépassée n’est pas acceptée, même si la France l’a prolongée : il est conseillé de voyager avec un passeport.',
                'Un document déclaré perdu ou volé peut entraîner un refus d’accès au pays.',
              ],
            },
          ],
          sources: [
            { label: 'Ministère de l’Europe et des Affaires étrangères, fiche Italie (entrée et séjour)', url: D.entree, nature: 'source officielle' },
            { label: 'Luko, passeport pour l’Italie', url: 'https://www.fr.luko.eu/assurance-voyage/italie/passeport/', nature: 'assureur, intérêt commercial' },
            { label: 'Diplomatie belge, informations pratiques pour l’Italie', url: 'https://diplomatie.belgium.be/fr/pays/italie/voyager-en-italie-conseils-aux-voyageurs/informations-pratiques-pour-litalie', nature: 'source officielle belge' },
          ],
          note: 'La fiche officielle française n’a pas pu être lue : ces points viennent de sources privées ou étrangères.',
        },
        securiteALire(D.securite, 'l’Italie'),
        aDocumenter('Argent, santé et téléphone', 'La monnaie est l’euro. La carte européenne d’assurance maladie s’applique dans l’Union européenne ; ce point n’a pas été vérifié sur une source officielle.'),
      ],
    },
    {
      slug: 'vivre',
      titre: 'Vivre en Italie',
      intro: 'Pas de visa pour un Européen, mais une résidence à demander à la commune, avec un numéro fiscal en premier.',
      resume: 'Codice fiscale, résidence et santé.',
      icone: '🏠',
      sections: [
        {
          id: 'residence',
          titre: 'Résidence et numéro fiscal',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            {
              type: 'liste',
              items: [
                'Le <strong>codice fiscale</strong> (numéro fiscal) est la première étape : il est gratuit et délivré en Italie par l’agence des impôts, parfois le jour même, ou par un consulat avant le départ.',
                'Au-delà de 3 mois (90 jours cités), il faut s’<strong>inscrire à l’état civil de la commune</strong> (<em>iscrizione anagrafica</em>), avec justificatif de logement, codice fiscale, pièce d’identité et, selon le cas, contrat de travail ou preuve de ressources.',
                'L’inscription au <strong>système de santé public</strong> (SSN) se fait ensuite auprès de l’ASL, l’agence sanitaire locale. Les soins d’urgence restent accessibles sans ce numéro.',
                'Une inscription volontaire et payante au système de santé existe pour les personnes sans statut d’emploi.',
              ],
            },
          ],
          sources: [THE_LOCAL, UNIMI, { label: 'Jobbatical, s’installer en Italie', url: 'https://www.jobbatical.com/blog/italy-relocation-comprehensive-guide-settle-in', nature: 'prestataire, intérêt commercial' }],
          note: 'Les procédures varient selon la commune : vérifiez auprès de votre mairie, de l’ASL et de l’agence des impôts.',
        },
        aDocumenter('Banque, logement et coût de la vie'),
      ],
    },
    {
      slug: 'travailler',
      titre: 'Travailler en Italie',
      intro: 'Les citoyens de l’Union européenne peuvent travailler en Italie sans permis. Le contrat de travail sert aussi de justificatif pour la résidence.',
      resume: 'Droit de travailler et justificatifs.',
      icone: '💼',
      sections: [
        {
          id: 'droit',
          titre: 'Le droit de travailler',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            { type: 'p', html: 'Les citoyens de l’Union européenne n’ont pas besoin de visa pour vivre en Italie. Les règles d’emploi n’ont pas été détaillées dans cette recherche ; le contrat de travail sert surtout de justificatif pour l’inscription à la résidence.' },
          ],
          sources: [THE_LOCAL, UNIMI],
        },
        aDocumenter('Salaire minimum, impôts et recherche d’emploi'),
      ],
    },
    paiementsACompleter('l’euro'),
    {
      slug: 'langue-culture',
      titre: 'Langue et culture',
      intro: 'L’italien s’écrit avec l’alphabet latin et se lit presque comme il s’écrit : la prononciation est régulière, avec quelques groupes de lettres à connaître.',
      resume: 'Italien et prononciation.',
      icone: '🎭',
      sections: [
        {
          titre: 'Prononciation : repères',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            {
              type: 'tableau',
              entetes: ['Lettres', 'Se prononce', 'Exemple'],
              lignes: [
                ['ci, ce', 'comme « tchi », « tché »', 'ciao : « tchao »'],
                ['chi, che', 'comme « ki », « ké »', 'che : « ké »'],
                ['gli', 'comme « li mouillé »', 'figlio : « fillio »'],
                ['gn', 'comme « gn » français', 'bagno : « bagno »'],
                ['z', 'comme « ts » ou « dz »', 'grazie : « gratsié »'],
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
        ['Ciao', 'tchao', 'Salut'],
        ['Buongiorno', 'bouondjorno', 'Bonjour'],
        ['Buonasera', 'bouonasèra', 'Bonsoir'],
        ['Buonanotte', 'bouonanotté', 'Bonne nuit'],
        ['Grazie', 'gratsié', 'Merci'],
        ['Per favore', 'pèr favorè', 'S’il vous plaît'],
        ['Prego', 'prègo', 'De rien / Je vous en prie'],
        ['Scusi', 'skouzi', 'Excusez-moi'],
        ['Sì', 'si', 'Oui'],
        ['No', 'no', 'Non'],
        ['Come sta?', 'komé sta', 'Comment allez-vous ?'],
        ['Bene, grazie', 'bèné gratsié', 'Bien, merci'],
        ['Arrivederci', 'arrivédèrtchi', 'Au revoir'],
      ],
      astuce: '« Ciao » se dit entre connaissances, à l’arrivée comme au départ. Avec un inconnu, préférez « Buongiorno » et « Arrivederci ».',
    },
    {
      slug: 'se-presenter',
      titre: 'Se présenter',
      intro: 'Dire qui vous êtes et ce que vous ne comprenez pas.',
      phrases: [
        ['Mi chiamo…', 'mi kiamo', 'Je m’appelle…'],
        ['Piacere', 'piatchèrè', 'Enchanté(e)'],
        ['Sono francese', 'sono frantchèzè', 'Je suis français(e)'],
        ['Vengo dalla Francia', 'vèngo dalla frantcha', 'Je viens de France'],
        ['Parlo un po’ di italiano', 'parlo oun po di italiano', 'Je parle un peu italien'],
        ['Parla inglese?', 'parla ingléze', 'Parlez-vous anglais ?'],
        ['Non capisco', 'non kapisko', 'Je ne comprends pas'],
        ['Può ripetere, per favore?', 'pouo ripétèrè pèr favorè', 'Pouvez-vous répéter ?'],
        ['Più lentamente, per favore', 'piou lèntamèntè pèr favorè', 'Plus lentement, s’il vous plaît'],
      ],
      astuce: 'Préparez « Mi chiamo… » avec votre prénom et répétez-le à voix haute.',
    },
    {
      slug: 'chiffres-prix-heure',
      titre: 'Chiffres, prix et heure',
      intro: 'Pour comprendre un prix, demander l’heure ou compter votre argent.',
      phrases: [
        ['Uno', 'ouno', '1'],
        ['Due', 'douè', '2'],
        ['Tre', 'trè', '3'],
        ['Quattro', 'kouattro', '4'],
        ['Cinque', 'tchinkouè', '5'],
        ['Sei', 'sèï', '6'],
        ['Sette', 'sèttè', '7'],
        ['Otto', 'otto', '8'],
        ['Nove', 'novè', '9'],
        ['Dieci', 'diètchi', '10'],
        ['Quanto costa?', 'kouanto kosta', 'Combien ça coûte ?'],
        ['Che ora è?', 'ké ora è', 'Quelle heure est-il ?'],
        ['Posso pagare con la carta?', 'posso pagarè kon la karta', 'Puis-je payer par carte ?'],
      ],
      astuce: 'Les prix sont en euros, comme en France.',
    },
    {
      slug: 'se-deplacer',
      titre: 'Se déplacer',
      intro: 'Demander son chemin et acheter un billet.',
      phrases: [
        ['Dov’è…?', 'dové', 'Où est… ?'],
        ['La stazione', 'la statsionè', 'La gare'],
        ['L’aeroporto', 'laéroporto', 'L’aéroport'],
        ['La fermata dell’autobus', 'la fèrmata dèl aoutobous', 'L’arrêt de bus'],
        ['Un biglietto, per favore', 'oun billietto pèr favorè', 'Un billet, s’il vous plaît'],
        ['A sinistra', 'a sinistra', 'À gauche'],
        ['A destra', 'a dèstra', 'À droite'],
        ['Sempre dritto', 'sèmprè dritto', 'Tout droit'],
      ],
      astuce: 'Dites « Dov’è… ? » puis montrez l’adresse écrite sur votre téléphone.',
    },
    {
      slug: 'restaurant-courses',
      titre: 'Restaurant et courses',
      intro: 'Commander, demander l’addition et faire vos courses.',
      phrases: [
        ['Un tavolo per due, per favore', 'oun tavolo pèr douè pèr favorè', 'Une table pour deux'],
        ['Il menù, per favore', 'il mènou pèr favorè', 'Le menu, s’il vous plaît'],
        ['Vorrei…', 'vorrèï', 'Je voudrais…'],
        ['Un caffè', 'oun kaffè', 'Un café'],
        ['Acqua', 'akoua', 'De l’eau'],
        ['Una birra', 'ouna birra', 'Une bière'],
        ['Il conto, per favore', 'il konto pèr favorè', 'L’addition, s’il vous plaît'],
      ],
      astuce: 'Un « caffè » est un expresso. Pour un café allongé, demandez « un caffè lungo ».',
    },
    {
      slug: 'urgences',
      titre: 'Urgences et phrases de survie',
      intro: 'Les phrases à connaître en cas de problème.',
      phrases: [
        ['Aiuto!', 'aïouto', 'Au secours !'],
        ['Chiami un’ambulanza!', 'kiami oun amboulantsa', 'Appelez une ambulance !'],
        ['Chiami la polizia!', 'kiami la politsia', 'Appelez la police !'],
        ['Ho bisogno di un medico', 'o bizogno di oun mèdiko', 'J’ai besoin d’un médecin'],
        ['Mi fa male qui', 'mi fa malé koui', 'J’ai mal ici'],
        ['Mi sono perso', 'mi sono pèrso', 'Je suis perdu'],
        ['Dov’è la farmacia?', 'dové la farmatchia', 'Où est la pharmacie ?'],
      ],
      astuce: 'Le numéro d’urgence européen 112 fonctionne dans l’Union européenne, dont l’Italie (à confirmer sur la fiche officielle).',
    },
  ],

  sourcesSupplementaires: [],
};
