import type { PaysComplet } from './types';
import { aDocumenter, cultureACompleter, diplo, paiementsACompleter, securiteALire } from './aides';

const D = diplo('royaume-uni');
const TOURMAG_ETA = { label: 'TourMaG, faut-il un passeport pour se rendre au Royaume-Uni ?', url: 'https://www.tourmag.com/Voyage-Royaume-Uni-visa-passeport-quelles-formalites_a117972.html', nature: 'presse spécialisée' };

export const royaumeUni: PaysComplet = {
  complet: true,
  test: true,
  iso: 'GBR',
  slug: 'royaume-uni',
  nom: 'Royaume-Uni',
  article: 'le Royaume-Uni',
  accroche: 'Depuis le Brexit, les règles changent : passeport, autorisation électronique de voyage, visa de travail et surtaxe santé. Fiche beta, à vérifier.',
  couleur: '#1d3a7a',
  langue: { nom: 'anglais', code: 'en-GB' },
  devise: 'livre sterling',
  conseilsVoyageurs: D.securite,
  verifie: '4 novembre 2026',

  mediasLocaux: [
    { nom: 'BBC News', url: 'https://www.bbc.com/news', nature: 'service public audiovisuel', langue: 'anglais' },
    { nom: 'The Guardian', url: 'https://www.theguardian.com', nature: 'quotidien privé', langue: 'anglais' },
    { nom: 'Sky News', url: 'https://news.sky.com', nature: 'chaîne d’information privée', langue: 'anglais' },
    { nom: 'The Independent', url: 'https://www.independent.co.uk', nature: 'média en ligne', langue: 'anglais' },
  ],

  rubriques: [
    {
      slug: 'voyager',
      titre: 'Voyager au Royaume-Uni',
      intro: 'Le Royaume-Uni n’est plus dans l’Union européenne : un Français doit avoir un passeport et une autorisation électronique de voyage (ETA) avant de partir.',
      resume: 'Passeport, ETA et sécurité.',
      icone: '✈️',
      sections: [
        {
          id: 'entree',
          titre: 'Entrée : passeport et ETA',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            {
              type: 'liste',
              items: [
                'Le <strong>passeport</strong> est présenté comme obligatoire pour entrer au Royaume-Uni : l’entrée avec une carte d’identité ne serait plus possible. Une page de la compagnie ferroviaire Eurostar indique pourtant qu’une carte d’identité en cours de validité peut servir pour voyager : cette contradiction est à vérifier avant de partir.',
                'Une <strong>autorisation électronique de voyage (ETA)</strong> est obligatoire pour les Français depuis le <strong>2 avril 2025</strong>. Elle est liée au numéro de passeport et valable <strong>2 ans</strong>, sans limite du nombre d’entrées.',
                'L’ETA <strong>ne garantit pas l’entrée</strong> : la décision revient aux contrôles aux frontières. Sans ETA, l’entrée est refusée.',
              ],
            },
          ],
          sources: [
            TOURMAG_ETA,
            { label: 'Buch dein Visum, règles d’entrée au Royaume-Uni', url: 'https://www.buch-dein-visum.de/fr/news/allgemein/aktuelle-einreisebestimmungen-fuer-das-vereinigte-koenigreich-c2f47d', nature: 'site commercial' },
            { label: 'Ministère de l’Europe et des Affaires étrangères, fiche Royaume-Uni (entrée et séjour)', url: D.entree, nature: 'source officielle' },
          ],
          note: 'Aucune page officielle britannique (gov.uk) ni la fiche française n’a pu être lue : demandez et payez l’ETA uniquement sur le site officiel du gouvernement britannique.',
        },
        securiteALire(D.securite, 'le Royaume-Uni'),
        aDocumenter('Argent, santé et téléphone', 'La monnaie est la livre sterling. La carte européenne d’assurance maladie n’a pas le même statut qu’avant le Brexit : cela n’a pas été vérifié.'),
      ],
    },
    {
      slug: 'vivre',
      titre: 'Vivre au Royaume-Uni',
      intro: 'Pour un Français qui arrive aujourd’hui, il faut en principe un visa. La santé publique (NHS) s’accompagne d’une surtaxe payée à l’avance.',
      resume: 'Visa et surtaxe santé.',
      icone: '🏠',
      sections: [
        {
          id: 'visa',
          titre: 'Visa et surtaxe santé',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            {
              type: 'liste',
              items: [
                'La plupart des demandeurs de visa paient une <strong>surtaxe santé (IHS)</strong> pour accéder au système de santé public pendant la durée du titre, payée à l’avance pour toute la durée du visa.',
                'Le montant standard cité est de 1 035 livres par personne et par année, soit 5 175 livres pour un visa de cinq ans pour un adulte : <strong>estimation non vérifiée</strong>, un autre site cite un chiffre différent.',
                'Les titulaires d’un visa « Health and Care Worker » et leurs ayants droit en sont exemptés.',
              ],
            },
            { type: 'alerte', warn: true, titre: 'Statut de résident de l’UE', html: 'Les personnes arrivées avant fin 2020 peuvent relever d’un régime spécial (« EU Settlement Scheme »). Les démarches de ce régime n’ont pas été documentées : consultez le site officiel du gouvernement britannique.' },
          ],
          sources: [
            { label: 'Jobbatical, frais de surtaxe santé au Royaume-Uni', url: 'https://www.jobbatical.com/blog/uk-immigration-health-surcharge-ihs-fees', nature: 'prestataire, intérêt commercial' },
            { label: 'Davidson Morris, frais du visa Skilled Worker (2026)', url: 'https://www.davidsonmorris.com/tier-2-visa-costs', nature: 'cabinet d’avocats, intérêt commercial' },
          ],
        },
        aDocumenter('Banque, logement et coût de la vie'),
      ],
    },
    {
      slug: 'travailler',
      titre: 'Travailler au Royaume-Uni',
      intro: 'Pour un Français arrivé après le Brexit, le travail passe en général par un visa sponsorisé par un employeur (« Skilled Worker »).',
      resume: 'Visa Skilled Worker et frais.',
      icone: '💼',
      sections: [
        {
          id: 'visa',
          titre: 'Le visa de travail',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            {
              type: 'liste',
              items: [
                'Le visa <strong>Skilled Worker</strong> demande un employeur sponsor. Les frais cités à partir d’avril 2026 sont de 943 livres pour trois ans ou moins et de 1 865 livres au-delà, plus la surtaxe santé : <strong>estimation non vérifiée</strong>.',
                'Des services de traitement prioritaire sont facturés en plus.',
              ],
            },
          ],
          sources: [
            { label: 'Davidson Morris, frais du visa Skilled Worker (2026)', url: 'https://www.davidsonmorris.com/tier-2-visa-costs', nature: 'cabinet d’avocats, intérêt commercial' },
            { label: 'Axis Lawyer, frais du visa Skilled Worker et frais de sponsor (2026)', url: 'https://axis.lawyer/?p=51041', nature: 'cabinet d’avocats, intérêt commercial' },
          ],
          note: 'Vérifiez les montants sur gov.uk : ils changent chaque année.',
        },
        aDocumenter('Salaire minimum, impôts et recherche d’emploi'),
      ],
    },
    paiementsACompleter('la livre sterling'),
    {
      slug: 'langue-culture',
      titre: 'Langue et culture',
      intro: 'L’anglais est la langue du pays ; la prononciation britannique, très différente de l’écriture, est la principale difficulté. Les prononciations de ce guide sont écrites à la française et approximatives.',
      resume: 'Anglais britannique.',
      icone: '🎭',
      sections: [
        {
          titre: 'Prononcer l’anglais',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            {
              type: 'tableau',
              entetes: ['Son', 'Se prononce', 'Exemple'],
              lignes: [
                ['th', 'langue entre les dents, « s » ou « z » approximatif', 'thank you : « sank you »'],
                ['h', 'aspiré', 'hello : « hèlo »'],
                ['w', 'comme « ou »', 'water : « ouoter »'],
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
        ['Hello', 'hèlo', 'Bonjour / Salut'],
        ['Good morning', 'goud morning', 'Bonjour (le matin)'],
        ['Good afternoon', 'goud aftèrnoune', 'Bonjour (l’après-midi)'],
        ['Good evening', 'goud ivning', 'Bonsoir'],
        ['Thank you', 'sank you', 'Merci'],
        ['Cheers', 'tchirz', 'Merci (familier)'],
        ['Please', 'pliz', 'S’il vous plaît'],
        ['Sorry', 'sorri', 'Pardon / Excusez-moi'],
        ['Yes', 'yès', 'Oui'],
        ['No', 'nô', 'Non'],
        ['How are you?', 'hao a you', 'Comment allez-vous ?'],
        ['Fine, thank you', 'faïne sank you', 'Bien, merci'],
        ['Goodbye', 'goudbaï', 'Au revoir'],
      ],
      astuce: 'Les Britanniques disent très souvent « sorry » et « please » : la politesse compte beaucoup.',
    },
    {
      slug: 'se-presenter',
      titre: 'Se présenter',
      intro: 'Dire qui vous êtes et ce que vous ne comprenez pas.',
      phrases: [
        ['My name is…', 'maï nèime iz', 'Je m’appelle…'],
        ['Nice to meet you', 'naïce tou mit you', 'Enchanté(e)'],
        ['I’m French', 'aïme frènch', 'Je suis français(e)'],
        ['I come from France', 'aï kome from frans', 'Je viens de France'],
        ['I speak a little English', 'aï spik a litl inglich', 'Je parle un peu anglais'],
        ['Do you speak French?', 'dou you spik frènch', 'Parlez-vous français ?'],
        ['I don’t understand', 'aï dôunt andèrstand', 'Je ne comprends pas'],
        ['Could you repeat that?', 'koud you ripit zat', 'Pouvez-vous répéter ?'],
        ['Could you speak more slowly?', 'koud you spik mor slôli', 'Pouvez-vous parler plus lentement ?'],
      ],
      astuce: 'Préparez « My name is… » avec votre prénom et répétez-le à voix haute.',
    },
    {
      slug: 'chiffres-prix-heure',
      titre: 'Chiffres, prix et heure',
      intro: 'Pour comprendre un prix, demander l’heure ou compter votre argent.',
      phrases: [
        ['One', 'ouane', '1'],
        ['Two', 'tou', '2'],
        ['Three', 'sri', '3'],
        ['Four', 'for', '4'],
        ['Five', 'faïve', '5'],
        ['Six', 'siks', '6'],
        ['Seven', 'sèvn', '7'],
        ['Eight', 'éïte', '8'],
        ['Nine', 'naïne', '9'],
        ['Ten', 'tène', '10'],
        ['How much is it?', 'hao mutch iz it', 'Combien ça coûte ?'],
        ['What time is it?', 'ouat taïme iz it', 'Quelle heure est-il ?'],
        ['Can I pay by card?', 'kan aï pèï baï kard', 'Puis-je payer par carte ?'],
      ],
      astuce: 'La monnaie est la livre (« pound »), pas l’euro. Le paiement par carte est très répandu.',
    },
    {
      slug: 'se-deplacer',
      titre: 'Se déplacer',
      intro: 'Demander son chemin et acheter un billet.',
      phrases: [
        ['Where is…?', 'ouère iz', 'Où est… ?'],
        ['The station', 'ze stèïcheune', 'La gare'],
        ['The airport', 'zi èrport', 'L’aéroport'],
        ['The bus stop', 'ze bous stop', 'L’arrêt de bus'],
        ['A ticket, please', 'a tikit pliz', 'Un billet, s’il vous plaît'],
        ['Left', 'lèft', 'À gauche'],
        ['Right', 'raït', 'À droite'],
        ['Straight on', 'strèït on', 'Tout droit'],
        ['Mind the gap', 'maïnd ze gap', 'Attention à l’espace entre le quai et le train'],
      ],
      astuce: 'On roule à gauche au Royaume-Uni : regardez à droite avant de traverser. Le métro de Londres s’appelle « the Tube ».',
    },
    {
      slug: 'restaurant-courses',
      titre: 'Restaurant et courses',
      intro: 'Commander, demander l’addition et faire vos courses.',
      phrases: [
        ['A table for two, please', 'a tèïbl for tou pliz', 'Une table pour deux'],
        ['The menu, please', 'ze mènieu pliz', 'Le menu, s’il vous plaît'],
        ['I’d like…', 'aïd laïk', 'Je voudrais…'],
        ['A coffee', 'a kofi', 'Un café'],
        ['Water', 'ouoter', 'De l’eau'],
        ['A pint of beer', 'a païnte ov bire', 'Une pinte de bière'],
        ['The bill, please', 'ze bil pliz', 'L’addition, s’il vous plaît'],
      ],
      astuce: 'Au pub, on commande souvent au comptoir et on paie tout de suite.',
    },
    {
      slug: 'urgences',
      titre: 'Urgences et phrases de survie',
      intro: 'Les phrases à connaître en cas de problème.',
      phrases: [
        ['Help!', 'hèlp', 'Au secours !'],
        ['Call an ambulance!', 'kol an ambioulance', 'Appelez une ambulance !'],
        ['Call the police!', 'kol ze police', 'Appelez la police !'],
        ['I need a doctor', 'aï nid a doctor', 'J’ai besoin d’un médecin'],
        ['It hurts here', 'it hertz hire', 'J’ai mal ici'],
        ['I’m lost', 'aïme lost', 'Je suis perdu(e)'],
        ['Where is the chemist?', 'ouère iz ze kèmist', 'Où est la pharmacie ?'],
      ],
      astuce: 'Le numéro d’urgence britannique serait le 999 (le 112 fonctionne aussi) : à confirmer sur la fiche officielle du ministère avant de partir.',
    },
  ],

  sourcesSupplementaires: [],
};
