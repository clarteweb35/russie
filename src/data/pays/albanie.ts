import type { PaysComplet } from './types';

const DIPLO_SECURITE = 'https://www.diplomatie.gouv.fr/fr/information-par-pays/albanie/conseils-aux-voyageurs-securite';
const DIPLO_ENTREE = 'https://www.diplomatie.gouv.fr/fr/information-par-pays/albanie/conseils-aux-voyageurs-entree-sejour';
const OFFICIEL = { label: 'Ministère de l’Europe et des Affaires étrangères, fiche Albanie (entrée et séjour)', url: DIPLO_ENTREE, nature: 'source officielle' };

export const albanie: PaysComplet = {
  complet: true,
  test: true,
  slug: 'albanie',
  nom: 'Albanie',
  article: 'l’Albanie',
  accroche: 'Un pays hors de l’Union européenne : les règles d’entrée, d’assurance et d’installation diffèrent de celles de la France. Fiche en test, à vérifier.',
  couleur: '#8a1c1c',
  langue: { nom: 'albanais', code: 'sq-AL' },
  devise: 'lek',
  conseilsVoyageurs: DIPLO_SECURITE,
  verifie: '4 novembre 2026',

  mediasLocaux: [
    { nom: 'ATA (Agence télégraphique albanaise)', url: 'https://www.ata.gov.al', nature: 'agence de presse publique', langue: 'albanais' },
    { nom: 'Top Channel', url: 'https://top-channel.tv', nature: 'chaîne de télévision privée', langue: 'albanais' },
    { nom: 'Euronews Albania', url: 'https://euronews.al', nature: 'chaîne d’information du réseau Euronews', langue: 'albanais' },
    { nom: 'Exit News', url: 'https://exit.al', nature: 'média indépendant en ligne', langue: 'anglais, albanais' },
  ],

  rubriques: [
    {
      slug: 'voyager',
      titre: 'Voyager en Albanie',
      intro: 'L’Albanie n’est pas dans l’Union européenne : ni la carte européenne d’assurance maladie ni les règles de l’espace Schengen ne s’y appliquent. Voici ce qui est établi et ce qui reste à vérifier.',
      resume: 'Entrée, assurance, argent et sécurité avant le départ.',
      icone: '✈️',
      sections: [
        {
          id: 'securite',
          titre: 'Sécurité et conseils officiels',
          badge: { type: 'warn', texte: 'À documenter' },
          blocs: [
            { type: 'alerte', warn: true, titre: 'Fiche officielle à lire', html: 'Je n’ai pas pu lire la rubrique « Sécurité » de la fiche du ministère lors de cette recherche. Lisez-la avant de partir : elle liste les risques à jour et les numéros d’urgence albanais.' },
          ],
          sources: [{ label: 'Ministère de l’Europe et des Affaires étrangères, fiche Albanie (sécurité)', url: DIPLO_SECURITE, nature: 'source officielle' }],
        },
        {
          id: 'entree',
          titre: 'Entrée et formalités',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            {
              type: 'liste',
              items: [
                '<strong>Source officielle</strong> : il est impossible d’entrer en Albanie avec un passeport ou une carte d’identité précédemment signalé perdu ou volé.',
                '<strong>Guides privés</strong> : les Français titulaires d’un passeport ou d’une carte d’identité en cours de validité n’ont pas besoin de visa pour un court séjour touristique, jusqu’à 90 jours selon la plupart des sources.',
              ],
            },
            { type: 'alerte', warn: true, titre: 'Durée de séjour contradictoire', html: 'Un guide parle d’un séjour sans visa jusqu’à <strong>un an</strong>, d’autres de 90 jours. Cette durée n’est pas tranchée ici : confirmez-la auprès de l’ambassade d’Albanie avant de planifier un long séjour.' },
          ],
          sources: [
            OFFICIEL,
            { label: 'Lonely Planet, visa pour l’Albanie', url: 'https://www.lonelyplanet.fr/destinations/europe/albanie/visa', nature: 'guide de voyage' },
            { label: 'Open Shores, immigrer et vivre en Albanie', url: 'https://www.openshores.co/blog/budget-pour-partir-vivre-en-albanie', nature: 'blog' },
          ],
        },
        {
          id: 'sante',
          titre: 'Assurance et santé',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            {
              type: 'liste',
              items: [
                'La fiche officielle indique qu’il est <strong>indispensable de vérifier que vous êtes bien assuré</strong> avant de voyager.',
                'Le pays étant hors de l’Union européenne, la carte européenne d’assurance maladie n’y est pas utilisable : prévoyez une assurance voyage avec rapatriement (à confirmer auprès de votre assureur).',
              ],
            },
          ],
          sources: [OFFICIEL],
        },
        {
          id: 'argent',
          titre: 'Argent et paiement',
          badge: { type: 'warn', texte: 'À documenter' },
          blocs: [
            { type: 'alerte', warn: true, titre: 'Section à compléter', html: 'La monnaie est le lek. L’usage des cartes, des espèces et des euros n’a pas été vérifié auprès de sources fiables : section à compléter.' },
          ],
        },
      ],
    },
    {
      slug: 'vivre',
      titre: 'Vivre en Albanie',
      intro: 'Au-delà du court séjour, il faut un titre de séjour, même pour un Européen. Les guides privés se contredisent sur plusieurs points : vérifiez auprès des autorités albanaises.',
      resume: 'Visa D, permis de séjour et démarches sur place.',
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
                'Pour s’installer, la voie classique décrite est le <strong>visa de type D</strong>, qui demande en général un contrat de travail ou une preuve de revenus.',
                'Après l’arrivée, une demande de <strong>permis de résidence</strong> serait à déposer dans les 30 jours auprès du bureau régional des frontières et de la migration. Les titres sont décrits comme annuels et renouvelables, avec une résidence permanente envisageable après cinq ans.',
                'Un <strong>« permis unique »</strong> (visa, permis de travail et permis de séjour en une seule demande) a été introduit récemment. Sa durée est donnée comme 5 ans par une source et 6 ans par une autre.',
                'Les démarches se numérisent via le portail <strong>e-Albania</strong>.',
              ],
            },
          ],
          sources: [
            { label: 'Cyril Jarnias, démarches administratives en Albanie', url: 'https://www.cyriljarnias.com/?p=3584', nature: 'blog de conseil' },
            { label: 'Globalization Partners, visas et permis en Albanie', url: 'https://www.globalization-partners.com/fr/globalpedia/albania/visa-permits/', nature: 'prestataire, intérêt commercial' },
            { label: 'Rivermate, permis de travail et visas en Albanie', url: 'https://rivermate.com/fr/guides/albanie/permis-de-travail-et-visas', nature: 'prestataire, intérêt commercial' },
          ],
          note: 'Aucune source officielle albanaise n’a été consultée : vérifiez sur e-Albania et auprès de l’ambassade d’Albanie en France.',
        },
        {
          id: 'banque',
          titre: 'Banque et numéro fiscal',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            { type: 'p', html: 'Une fois le permis de séjour obtenu, il servirait à ouvrir un compte bancaire, avec un numéro fiscal (<strong>NIPT</strong>).' },
          ],
          sources: [{ label: 'Cyril Jarnias, démarches administratives en Albanie', url: 'https://www.cyriljarnias.com/?p=3584', nature: 'blog de conseil' }],
        },
        {
          id: 'logement',
          titre: 'Santé, logement et coût de la vie',
          badge: { type: 'warn', texte: 'À documenter' },
          blocs: [
            { type: 'alerte', warn: true, titre: 'Section à compléter', html: 'Aucune source fiable n’a été retenue sur ces sujets. Une assurance santé couvrant l’Albanie est recommandée dès le départ par un guide privé.' },
          ],
        },
      ],
    },
    {
      slug: 'travailler',
      titre: 'Travailler en Albanie',
      intro: 'Les sources se contredisent sur le permis de travail pour un Européen : c’est le point à vérifier en priorité.',
      resume: 'Permis de travail et fiscalité.',
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
                'Un guide affirme que les citoyens de l’Union européenne ont les mêmes droits d’emploi que les Albanais et n’ont besoin d’aucun permis.',
                'Un autre indique qu’un permis de travail est en général requis pour tout emploi de plus de trois mois, sans distinction de nationalité.',
              ],
            },
            { type: 'alerte', warn: true, titre: 'Sources contradictoires', html: 'Ne comptez pas sur l’une ou l’autre : demandez confirmation aux autorités albanaises (ambassade, portail e-Albania) avant d’accepter un emploi.' },
          ],
          sources: [
            { label: 'Visitworld, trouver un emploi en Albanie', url: 'https://visitworld.today/fr/blog/859/recommendations-for-finding-a-job-in-albania-prospects-and-earnings-in-the-country', nature: 'site de voyage' },
            { label: 'Rivermate, permis de travail et visas en Albanie', url: 'https://rivermate.com/fr/guides/albanie/permis-de-travail-et-visas', nature: 'prestataire, intérêt commercial' },
          ],
        },
        {
          id: 'impots',
          titre: 'Impôts',
          badge: { type: 'warn', texte: 'À documenter' },
          blocs: [
            { type: 'alerte', warn: true, titre: 'Conseil fiscal', html: 'Si vous gardez des revenus en France, vérifiez les règles de double imposition avant de devenir résident fiscal albanais. Ce guide n’est pas un conseil fiscal.' },
          ],
          sources: [{ label: 'GlobalCostData, visa France vers Albanie', url: 'https://globalcostdata.com/fr/visa/france-to-albania/', nature: 'site commercial' }],
        },
      ],
    },
    {
      slug: 'paiements',
      titre: 'Moyens de paiement',
      intro: 'La monnaie est le lek. Cette page est encore à compléter : je n’ai pas de source fiable à ce stade.',
      resume: 'Lek, cartes et espèces.',
      icone: '💳',
      sections: [
        {
          titre: 'Monnaie, cartes et espèces',
          badge: { type: 'warn', texte: 'À documenter' },
          blocs: [{ type: 'alerte', warn: true, titre: 'Section à compléter', html: 'Les usages (cartes acceptées, espèces, retrait, euros) n’ont pas été vérifiés. Renseignez-vous auprès de votre banque avant de partir.' }],
        },
      ],
    },
    {
      slug: 'langue-culture',
      titre: 'Langue et culture',
      intro: 'L’albanais (shqip) est la langue officielle. Un piège à connaître : « po » veut dire oui et « jo » veut dire non.',
      resume: 'Albanais, prononciation et premiers repères.',
      icone: '🎭',
      sections: [
        {
          titre: 'Prononciation : repères',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            {
              type: 'tableau',
              entetes: ['Lettre', 'Se prononce', 'Exemple'],
              lignes: [
                ['ç', 'comme « tch »', 'çao : « tchao »'],
                ['sh', 'comme « ch »', 'shtatë : « chtatè »'],
                ['ë', 'e très bref', 'faleminderit : « falèmindèrit »'],
                ['po / jo', 'oui / non', 'à ne pas confondre avec l’intuition'],
              ],
            },
          ],
          note: 'Repères non sourcés, écrits à la française et approximatifs : faites-les relire par un locuteur.',
        },
        {
          titre: 'Culture et usages',
          badge: { type: 'warn', texte: 'À documenter' },
          blocs: [{ type: 'alerte', warn: true, titre: 'Section à compléter', html: 'Les usages n’ont pas été vérifiés auprès de sources fiables.' }],
        },
      ],
    },
  ],

  lecons: [
    {
      slug: 'salutations',
      titre: 'Salutations et politesse',
      intro: 'Les mots à utiliser dès que vous parlez à quelqu’un.',
      phrases: [
        ['Përshëndetje', 'pèrchèndètiyè', 'Bonjour (formel)'],
        ['Mirëdita', 'mirèdita', 'Bonne journée / Bonjour'],
        ['Mirëmëngjes', 'mirèmèngyès', 'Bonjour (le matin)'],
        ['Mirëmbrëma', 'mirèmbrèma', 'Bonsoir'],
        ['Faleminderit', 'falèmindèrit', 'Merci'],
        ['Ju lutem', 'you loutèm', 'S’il vous plaît'],
        ['Më falni', 'mè falni', 'Excusez-moi'],
        ['Po', 'po', 'Oui'],
        ['Jo', 'yo', 'Non'],
        ['Si jeni?', 'si yèni', 'Comment allez-vous ?'],
        ['Mirë, faleminderit', 'mirè falèmindèrit', 'Bien, merci'],
        ['Mirupafshim', 'miroupafchim', 'Au revoir'],
      ],
      astuce: 'Attention : « po » veut dire oui et « jo » veut dire non, ce qui est l’inverse de ce que l’oreille attend.',
    },
    {
      slug: 'se-presenter',
      titre: 'Se présenter',
      intro: 'Dire qui vous êtes et ce que vous ne comprenez pas.',
      phrases: [
        ['Quhem…', 'tchouhèm', 'Je m’appelle…'],
        ['Gëzohem që ju njoh', 'gèzohèm tchè you nyoh', 'Enchanté(e)'],
        ['Jam francez', 'yam frantsèz', 'Je suis français'],
        ['Jam franceze', 'yam frantsèza', 'Je suis française'],
        ['Vij nga Franca', 'vi nga frantsa', 'Je viens de France'],
        ['Flas pak shqip', 'flas pak chtchip', 'Je parle un peu albanais'],
        ['Flisni anglisht?', 'flisni anglicht', 'Parlez-vous anglais ?'],
        ['Nuk kuptoj', 'nouk kouptoy', 'Je ne comprends pas'],
        ['Flisni më ngadalë, ju lutem', 'flisni mè ngadalè you loutèm', 'Parlez plus lentement, s’il vous plaît'],
      ],
      astuce: 'Préparez « Quhem… » avec votre prénom et répétez-le à voix haute.',
    },
    {
      slug: 'chiffres-prix-heure',
      titre: 'Chiffres, prix et heure',
      intro: 'Pour comprendre un prix, demander l’heure ou compter votre argent.',
      phrases: [
        ['Një', 'nyè', '1'],
        ['Dy', 'dü', '2'],
        ['Tre', 'trè', '3'],
        ['Katër', 'katèr', '4'],
        ['Pesë', 'pèsè', '5'],
        ['Gjashtë', 'gyachtè', '6'],
        ['Shtatë', 'chtatè', '7'],
        ['Tetë', 'tètè', '8'],
        ['Nëntë', 'nèntè', '9'],
        ['Dhjetë', 'dhiétè', '10'],
        ['Sa kushton?', 'sa kouchton', 'Combien ça coûte ?'],
        ['Sa është ora?', 'sa èchtè ora', 'Quelle heure est-il ?'],
      ],
      astuce: 'Demandez le prix avant d’acheter : « Sa kushton? ».',
    },
    {
      slug: 'se-deplacer',
      titre: 'Se déplacer',
      intro: 'Demander son chemin et acheter un billet.',
      phrases: [
        ['Ku është…?', 'kou èchtè', 'Où est… ?'],
        ['Stacioni i trenit', 'statsioni i trènit', 'La gare'],
        ['Aeroporti', 'aèroporti', 'L’aéroport'],
        ['Autobusi', 'aoutobousi', 'Le bus'],
        ['Një biletë, ju lutem', 'nyè bilètè you loutèm', 'Un billet, s’il vous plaît'],
        ['Majtas', 'maïtas', 'À gauche'],
        ['Djathtas', 'diathas', 'À droite'],
        ['Drejt', 'drèyt', 'Tout droit'],
      ],
      astuce: 'Montrez l’adresse écrite sur votre téléphone : c’est souvent plus sûr que de la dire.',
    },
    {
      slug: 'restaurant-courses',
      titre: 'Restaurant et courses',
      intro: 'Commander, demander l’addition et faire vos courses.',
      phrases: [
        ['Një tavolinë për dy, ju lutem', 'nyè tavolinè pèr dü you loutèm', 'Une table pour deux, s’il vous plaît'],
        ['Menunë, ju lutem', 'mènounè you loutèm', 'Le menu, s’il vous plaît'],
        ['Dua…', 'doua', 'Je voudrais…'],
        ['Një kafe', 'nyè kafè', 'Un café'],
        ['Ujë', 'oujè', 'De l’eau'],
        ['Një birrë', 'nyè birè', 'Une bière'],
        ['A është vegjetariane?', 'a èchtè vègyètariané', 'Est-ce végétarien ?'],
        ['Llogarinë, ju lutem', 'logarinè you loutèm', 'L’addition, s’il vous plaît'],
      ],
      astuce: 'Mémorisez les phrases entières plutôt que les mots isolés.',
    },
    {
      slug: 'urgences',
      titre: 'Urgences et phrases de survie',
      intro: 'Les phrases à connaître en cas de problème.',
      phrases: [
        ['Ndihmë!', 'ndihmè', 'Au secours !'],
        ['Thirrni një ambulancë!', 'thirni nyè amboulantsè', 'Appelez une ambulance !'],
        ['Thirrni policinë!', 'thirni politsinè', 'Appelez la police !'],
        ['Kam nevojë për mjek', 'kam nèvoyè pèr myèk', 'J’ai besoin d’un médecin'],
        ['Më dhemb', 'mè dhèmb', 'J’ai mal'],
        ['Jam humbur', 'yam houmbour', 'Je suis perdu(e)'],
        ['Ku është farmacia?', 'kou èchtè farmatsia', 'Où est la pharmacie ?'],
      ],
      astuce: 'Les numéros d’urgence albanais n’ont pas été vérifiés ici : notez-les depuis la fiche officielle du ministère avant de partir.',
    },
  ],

  sourcesSupplementaires: [],
};
