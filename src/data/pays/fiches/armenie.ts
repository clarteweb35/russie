import type { PaysComplet } from '../types';
import { aDocumenter, cultureACompleter, diplo, paiementsACompleter } from '../aides';

const D = diplo('armenie');
const PDF_FICHE = 'https://www.diplomatie.gouv.fr/files/files/pdf/cav/Arm%C3%A9nie%20-%20Minist%C3%A8re%20de%20l%27Europe%20et%20des%20Affaires%20%C3%A9trang%C3%A8res.pdf';
const AVOCAT = { label: 'Armenian Lawyer, permis de séjour permanents et temporaires', url: 'https://armenian-lawyer.com/fr/permanent-temporary-residence-permits/', nature: 'cabinet d’avocats, intérêt commercial' };

export const armenie: PaysComplet = {
  complet: true,
  test: true,
  iso: 'ARM',
  slug: 'armenie',
  nom: 'Arménie',
  article: 'l’Arménie',
  accroche: 'Un pays du Caucase hors de l’Union européenne, voisin de la Géorgie et de l’Iran : entrée facile, mais deux frontières fermées et un alphabet propre. Fiche beta, à vérifier.',
  couleur: '#d90012',
  langue: { nom: 'arménien', code: 'hy-AM' },
  devise: 'dram',
  conseilsVoyageurs: D.securite,
  verifie: '4 novembre 2026',

  mediasLocaux: [
    { nom: 'Armenpress', url: 'https://armenpress.am', nature: 'agence de presse publique', langue: 'arménien, anglais' },
    { nom: 'Azatutyun', url: 'https://www.azatutyun.am', nature: 'service arménien de Radio Free Europe', langue: 'arménien' },
    { nom: 'Télévision publique d’Arménie', url: 'https://www.1tv.am', nature: 'télévision publique', langue: 'arménien' },
    { nom: 'CivilNet', url: 'https://www.civilnet.am', nature: 'média en ligne indépendant', langue: 'arménien, anglais' },
  ],

  rubriques: [
    {
      slug: 'voyager',
      titre: 'Voyager en Arménie',
      intro: 'Les Français n’ont pas besoin de visa pour un séjour de moins de six mois. Deux frontières terrestres sont fermées : cela pèse sur les itinéraires.',
      resume: 'Entrée, frontières et sécurité.',
      icone: '✈️',
      sections: [
        {
          id: 'entree',
          titre: 'Entrée et frontières',
          badge: { type: 'ok', texte: 'Vérifié' },
          blocs: [
            {
              type: 'liste',
              items: [
                'Selon la fiche officielle, les ressortissants français qui séjournent <strong>moins de six mois</strong> en Arménie ne sont pas soumis à une obligation de visa.',
                'Les <strong>postes-frontières avec la Turquie et l’Azerbaïdjan sont fermés</strong> : prévoyez d’entrer et de sortir par la Géorgie ou par l’Iran, ou par avion.',
              ],
            },
            { type: 'alerte', warn: true, titre: 'Fiche mise à jour régulièrement', html: 'Les pages officielles affichent des dates différentes (fin juin et fin août 2026 selon les versions). Consultez la fiche en ligne pour la version la plus récente, et la page « dernières minutes et alertes ».' },
          ],
          sources: [
            { label: 'Ministère de l’Europe et des Affaires étrangères, fiche Arménie (PDF)', url: PDF_FICHE, nature: 'source officielle' },
            { label: 'Ministère de l’Europe et des Affaires étrangères, fiche Arménie (entrée et séjour)', url: D.entree, nature: 'source officielle' },
          ],
          note: 'Seuls des extraits de la fiche ont pu être lus. La validité du passeport exigée varie selon les guides privés (trois mois après le séjour pour l’un, toute la durée du séjour pour l’autre) : vérifiez-la sur la fiche.',
        },
        {
          id: 'securite',
          titre: 'Sécurité',
          badge: { type: 'warn', texte: 'À documenter' },
          blocs: [
            { type: 'p', html: 'Je n’ai pas pu lire la rubrique « Sécurité » de la fiche du ministère français. Les conseils belges jugent la menace terroriste faible sans l’exclure totalement. Lisez la fiche officielle, en particulier pour les zones proches des frontières.' },
          ],
          sources: [
            { label: 'Ministère de l’Europe et des Affaires étrangères, fiche Arménie (sécurité)', url: D.securite, nature: 'source officielle' },
            { label: 'Diplomatie belge, sécurité générale en Arménie', url: 'https://diplomatie.belgium.be/fr/pays/armenie/voyager-en-armenie-conseils-aux-voyageurs/securite-generale-en-armenie', nature: 'source officielle belge' },
          ],
        },
        aDocumenter('Argent, santé et téléphone', 'La monnaie est le dram. Les usages (cartes, espèces, assurance, carte SIM) n’ont pas été vérifiés auprès de sources fiables.'),
      ],
    },
    {
      slug: 'vivre',
      titre: 'Vivre en Arménie',
      intro: 'L’entrée sans visa dure jusqu’à 180 jours pour de nombreuses nationalités. Au-delà, il faut un permis de séjour temporaire, dont les règles et les coûts varient selon les sources.',
      resume: 'Permis de séjour temporaire et démarches.',
      icone: '🏠',
      sections: [
        {
          id: 'sejour',
          titre: 'Séjour de plus de six mois',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            {
              type: 'liste',
              items: [
                'Le <strong>permis de séjour temporaire</strong> est décrit comme valable de 1 à 3 ans, renouvelable, et demande des revenus stables et une adresse légale. Après 1 à 3 ans de résidence continue, une résidence permanente serait possible.',
                'Un guide indique qu’il faut un an de présence légale (ou être marié à un ressortissant arménien) avant de le demander ; un autre ne le précise pas.',
                'Les demandes se déposent auprès du service des migrations et de la citoyenneté, y compris dans ses bureaux régionaux depuis fin 2023 (une source). Le délai cité est de 30 à 60 jours.',
              ],
            },
            { type: 'alerte', warn: true, titre: 'Coûts et réforme', html: 'Les montants varient du simple au double selon les sources (environ 115 à 260 euros). Un cabinet d’avocats signale aussi qu’un permis spécial ne serait plus délivré après juillet 2026 à cause d’une réforme de la loi sur l’immigration. Ne vous fiez à aucun de ces chiffres : demandez les tarifs officiels.' },
          ],
          sources: [
            AVOCAT,
            { label: 'MB Legal, obtenir un permis de séjour en Arménie en 2026', url: 'https://mblegal.am/how-to-obtain-a-residence-permit-in-armenia/', nature: 'cabinet d’avocats, intérêt commercial' },
            { label: 'Cyril Jarnias, s’installer en Arménie', url: 'https://www.cyriljarnias.com/?p=35052', nature: 'blog de conseil' },
          ],
          note: 'Aucune source officielle arménienne n’a été consultée : vérifiez auprès du service des migrations et de la citoyenneté.',
        },
        aDocumenter('Banque, santé, logement et coût de la vie', 'La recherche n’a rien donné sur l’ouverture d’un compte bancaire : section à compléter.'),
      ],
    },
    {
      slug: 'travailler',
      titre: 'Travailler en Arménie',
      intro: 'Un salarié passe en général par un permis de travail demandé par son employeur. Les télétravailleurs s’enregistrent souvent comme entrepreneurs individuels.',
      resume: 'Permis de travail et statut d’indépendant.',
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
                'Pour un salarié, le <strong>permis de travail</strong> est en général demandé par l’employeur arménien, puis sert à solliciter un permis de séjour temporaire fondé sur l’emploi.',
                'Pour les télétravailleurs, la voie la plus courante serait de s’enregistrer comme <strong>entrepreneur individuel</strong>, ce qui ouvre droit à un permis temporaire d’un an.',
                'Un guide cite un impôt forfaitaire de 20 % sur les revenus : à vérifier, ce guide n’est pas un conseil fiscal.',
              ],
            },
          ],
          sources: [
            { label: 'Rivermate, permis de travail et visas en Arménie', url: 'https://rivermate.com/fr/guides/armenie/permis-de-travail-et-visas', nature: 'prestataire, intérêt commercial' },
            { label: 'Armenian Lawyer, visa de nomade numérique en Arménie', url: 'https://armenian-lawyer.com/fr/business-immigration/digital-nomad-visa-armenia/', nature: 'cabinet d’avocats, intérêt commercial' },
          ],
        },
        aDocumenter('Salaire minimum et recherche d’emploi'),
      ],
    },
    paiementsACompleter('le dram'),
    {
      slug: 'langue-culture',
      titre: 'Langue et culture',
      intro: 'L’arménien s’écrit avec un alphabet propre de 38 lettres, créé au Ve siècle. Le russe est encore compris par beaucoup de gens, surtout dans les générations plus âgées.',
      resume: 'Arménien, alphabet et prononciation.',
      icone: '🎭',
      sections: [
        {
          titre: 'Un alphabet à part',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            { type: 'p', html: 'L’alphabet arménien est unique et compte 38 lettres. Les prononciations de ce guide sont écrites à la française et <strong>approximatives</strong> : l’arménien distingue des consonnes (aspirées, non aspirées, éjectives) que le français ne rend pas. Faites relire par un locuteur.' },
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
        ['Բարեւ', 'barév', 'Bonjour / Salut'],
        ['Բարի լույս', 'bari louyss', 'Bonjour (le matin)'],
        ['Բարի երեկո', 'bari yérékô', 'Bonsoir'],
        ['Շնորհակալություն', 'chnorhakaloutioun', 'Merci'],
        ['Խնդրում եմ', 'khndroum ém', 'S’il vous plaît / De rien'],
        ['Ներեցեք', 'nérétsék', 'Excusez-moi'],
        ['Այո', 'ayo', 'Oui'],
        ['Ոչ', 'votch', 'Non'],
        ['Ինչպե՞ս եք', 'inchpès ék', 'Comment allez-vous ?'],
        ['Լավ եմ', 'lav ém', 'Je vais bien'],
        ['Ցտեսություն', 'tstésoutioun', 'Au revoir'],
      ],
      astuce: 'L’arménien a des sons que le français n’a pas : écoutez un locuteur et faites relire ces prononciations.',
    },
    {
      slug: 'se-presenter',
      titre: 'Se présenter',
      intro: 'Dire qui vous êtes et ce que vous ne comprenez pas.',
      phrases: [
        ['Իմ անունը … է', 'im anouné … é', 'Je m’appelle…'],
        ['Ֆրանսիացի եմ', 'fransiatsi ém', 'Je suis français(e)'],
        ['Ես քիչ հայերեն եմ խոսում', 'yés kitch hayérèn ém khossoum', 'Je parle un peu arménien'],
        ['Անգլերեն խոսո՞ւմ եք', 'anglérèn khossoum ék', 'Parlez-vous anglais ?'],
        ['Չեմ հասկանում', 'tchém hasskanoum', 'Je ne comprends pas'],
        ['Կրկնեք, խնդրում եմ', 'krknék khndroum ém', 'Répétez, s’il vous plaît'],
        ['Ավելի դանդաղ', 'avéli dandagh', 'Plus lentement'],
      ],
      astuce: 'Préparez « Իմ անունը … է » avec votre prénom et répétez-le à voix haute.',
    },
    {
      slug: 'chiffres-prix-heure',
      titre: 'Chiffres et prix',
      intro: 'Pour comprendre un prix et compter votre argent.',
      phrases: [
        ['Մեկ', 'mék', '1'],
        ['Երկու', 'yérkou', '2'],
        ['Երեք', 'yérék', '3'],
        ['Չորս', 'tchors', '4'],
        ['Հինգ', 'hing', '5'],
        ['Վեց', 'vétss', '6'],
        ['Յոթ', 'yot', '7'],
        ['Ութ', 'out', '8'],
        ['Ինը', 'iné', '9'],
        ['Տասը', 'tassé', '10'],
        ['Ինչքա՞ն է', 'inchkan é', 'Combien ça coûte ?'],
      ],
      astuce: 'Demandez le prix avant d’acheter : « Ինչքա՞ն է ».',
    },
    {
      slug: 'se-deplacer',
      titre: 'Se déplacer',
      intro: 'Demander son chemin et acheter un billet.',
      phrases: [
        ['Որտե՞ղ է…', 'vortégh é', 'Où est… ?'],
        ['Կայարան', 'kayaran', 'La gare'],
        ['Օդանավակայան', 'odanavakayan', 'L’aéroport'],
        ['Կանգառ', 'kangar', 'L’arrêt'],
        ['Տոմս', 'toms', 'Un billet'],
        ['Ձախ', 'dzakh', 'À gauche'],
        ['Աջ', 'adj', 'À droite'],
        ['Ուղիղ', 'oughigh', 'Tout droit'],
      ],
      astuce: 'Montrez l’adresse écrite sur votre téléphone : c’est souvent plus sûr que de la dire.',
    },
    {
      slug: 'restaurant-courses',
      titre: 'Restaurant et courses',
      intro: 'Commander, demander l’addition et faire vos courses.',
      phrases: [
        ['Սեղան երկու հոգու համար', 'séghan yérkou hogou hamar', 'Une table pour deux'],
        ['Ցանկ, խնդրում եմ', 'tsank khndroum ém', 'Le menu, s’il vous plaît'],
        ['Ես ուզում եմ…', 'yés ouzoum ém', 'Je voudrais…'],
        ['Սուրճ', 'sourtch', 'Un café'],
        ['Ջուր', 'djour', 'De l’eau'],
        ['Գարեջուր', 'garédjour', 'De la bière'],
        ['Հաշիվ', 'hachiv', 'L’addition'],
      ],
      astuce: 'Mémorisez les phrases entières plutôt que les mots isolés.',
    },
    {
      slug: 'urgences',
      titre: 'Urgences et phrases de survie',
      intro: 'Les phrases à connaître en cas de problème.',
      phrases: [
        ['Օգնեցեք!', 'ognétsék', 'Au secours !'],
        ['Շտապօգնություն կանչեք', 'chtapognoutioun kantchék', 'Appelez une ambulance'],
        ['Ոստիկանություն կանչեք', 'vostikanoutioun kantchék', 'Appelez la police'],
        ['Բժիշկ է պետք', 'bjichk é pétk', 'Il me faut un médecin'],
        ['Ցավում է', 'tsavoum é', 'J’ai mal'],
        ['Մոլորվել եմ', 'molorvél ém', 'Je suis perdu(e)'],
        ['Դեղատուն', 'déghatoun', 'La pharmacie'],
      ],
      astuce: 'Les numéros d’urgence arméniens n’ont pas été vérifiés ici : notez-les depuis la fiche officielle du ministère avant de partir.',
    },
  ],

  sourcesSupplementaires: [],
};
