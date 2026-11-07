import type { PaysComplet } from '../types';
import { aDocumenter, cultureACompleter, diplo, paiementsACompleter } from '../aides';

const D = diplo('serbie');
const PDF_FICHE = 'https://www.diplomatie.gouv.fr/files/files/pdf/cav/Serbie%20-%20Minist%C3%A8re%20de%20l%27Europe%20et%20des%20Affaires%20%C3%A9trang%C3%A8res.pdf';

export const serbie: PaysComplet = {
  complet: true,
  test: true,
  iso: 'SRB',
  slug: 'serbie',
  nom: 'Serbie',
  article: 'la Serbie',
  accroche: 'Un pays des Balkans hors de l’Union européenne, qui s’écrit en cyrillique et en alphabet latin : déclaration d’adresse sous 24 heures et permis unique pour travailler. Fiche beta, à vérifier.',
  couleur: '#1b3a6b',
  langue: { nom: 'serbe', code: 'sr-RS' },
  devise: 'dinar serbe',
  conseilsVoyageurs: D.securite,
  verifie: '4 novembre 2026',

  mediasLocaux: [
    { nom: 'RTS (Radio-télévision de Serbie)', url: 'https://www.rts.rs', nature: 'service public de radio-télévision', langue: 'serbe' },
    { nom: 'Politika', url: 'https://www.politika.rs', nature: 'quotidien généraliste', langue: 'serbe' },
    { nom: 'N1', url: 'https://www.n1info.rs', nature: 'chaîne d’information privée', langue: 'serbe' },
    { nom: 'Tanjug', url: 'https://www.tanjug.rs', nature: 'agence de presse', langue: 'serbe, anglais' },
  ],

  rubriques: [
    {
      slug: 'voyager',
      titre: 'Voyager en Serbie',
      intro: 'La Serbie n’est pas dans l’Union européenne. Pour un court séjour, l’entrée est simple, mais les attentes aux frontières peuvent être longues et les séjours de plus de 90 jours demandent des démarches.',
      resume: 'Entrée, frontières et sécurité.',
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
                'Pour un séjour de <strong>plus de 90 jours</strong>, la fiche officielle demande de contacter l’ambassade de Serbie en France avant le départ pour connaître les règles de visa.',
                'Le <strong>Kosovo</strong> : des conseils belges indiquent que les voyageurs entrés au Kosovo par l’un des passages administratifs directs avec la Serbie ne rencontrent pas de problème au retour par le même passage, sauf s’ils sont passés par un autre pays entre-temps.',
              ],
            },
            { type: 'alerte', warn: true, titre: 'À vérifier', html: 'Les pièces d’identité acceptées pour entrer (passeport, carte d’identité) n’ont pas pu être confirmées dans cette recherche : lisez la fiche officielle. Un site allemand signalait en août 2026 des attentes pouvant durer plusieurs heures aux frontières.' },
          ],
          sources: [
            { label: 'Ministère de l’Europe et des Affaires étrangères, fiche Serbie (PDF)', url: PDF_FICHE, nature: 'source officielle' },
            { label: 'Ministère de l’Europe et des Affaires étrangères, fiche Serbie (entrée et séjour)', url: D.entree, nature: 'source officielle' },
            { label: 'Diplomatie belge, informations pratiques pour la Serbie', url: 'https://diplomatie.belgium.be/fr/pays/serbie/voyager-en-serbie-conseils-aux-voyageurs/informations-pratiques-pour-la-serbie', nature: 'source officielle belge' },
            { label: 'Buch dein Visum, Serbie : sécurité, contrôles aux frontières et risques naturels', url: 'https://www.buch-dein-visum.de/fr/news/allgemein/serbien-reise-aktuelle-sicherheitshinweise-zu-kriminalitaet-grenzkontrollen-und-naturgefahren-3c0880', nature: 'site commercial' },
          ],
        },
        {
          id: 'securite',
          titre: 'Sécurité',
          badge: { type: 'warn', texte: 'À documenter' },
          blocs: [{ type: 'alerte', warn: true, titre: 'Fiche officielle à lire', html: 'Je n’ai pas pu lire la rubrique « Sécurité » de la fiche du ministère lors de cette recherche. Lisez-la avant de partir.' }],
          sources: [{ label: 'Ministère de l’Europe et des Affaires étrangères, fiche Serbie (sécurité)', url: D.securite, nature: 'source officielle' }],
        },
        aDocumenter('Argent, santé et téléphone', 'La monnaie est le dinar serbe. Les usages (cartes, espèces, assurance, carte SIM) n’ont pas été vérifiés auprès de sources fiables.'),
      ],
    },
    {
      slug: 'vivre',
      titre: 'Vivre en Serbie',
      intro: 'Dès l’arrivée, l’adresse doit être déclarée à la police. Au-delà de 90 jours, un permis de séjour temporaire est demandé.',
      resume: 'Déclaration d’adresse et permis de séjour.',
      icone: '🏠',
      sections: [
        {
          id: 'enregistrement',
          titre: 'Déclaration d’adresse sous 24 heures',
          badge: { type: 'ok', texte: 'Vérifié' },
          blocs: [
            { type: 'p', html: 'À son entrée en Serbie, l’étranger doit <strong>déclarer son adresse au commissariat compétent dans les 24 heures</strong>. Si vous logez chez un particulier ou à l’hôtel, c’est en général l’hébergeur qui fait la déclaration. Un guide note que cette règle est rarement appliquée aux personnes qui campent ou logent chez l’habitant, et qu’une absence de déclaration peut poser problème à la sortie : gardez la preuve.' },
          ],
          sources: [
            { label: 'eUprava (portail officiel du gouvernement serbe), questions et réponses', url: 'https://openbalkan.euprava.gov.rs/en-US/Help', nature: 'portail officiel' },
            { label: 'Université de Belgrade, visa et séjour', url: 'https://arhiva.rect.bg.ac.rs/en/study-in-belgrade/visa.php', nature: 'université' },
          ],
        },
        {
          id: 'sejour',
          titre: 'Permis de séjour temporaire',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            {
              type: 'liste',
              items: [
                'Un permis de séjour temporaire est requis pour un séjour de <strong>plus de 90 jours</strong>. Le premier permis est en général délivré pour six mois, avec un maximum d’un an.',
                'La demande se fait auprès du ministère de l’Intérieur, avec passeport valide, preuve de fonds suffisants, adresse enregistrée et assurance maladie valable.',
                'Pour travailler, le <strong>visa de type D</strong> sert de base : il permet d’entrer, puis de demander le permis de travail et le permis de séjour temporaire sur place.',
              ],
            },
          ],
          sources: [
            { label: 'BDK Advokati, nouvelle procédure de permis de séjour temporaire et de travail', url: 'https://bdkadvokati.com/serbia-new-procedure-for-temporary-residence-permit-and-work-permits', nature: 'cabinet d’avocats, intérêt commercial' },
            { label: 'Rivermate, permis de travail et visas en Serbie', url: 'https://rivermate.com/fr/guides/serbie/permis-de-travail-et-visas', nature: 'prestataire, intérêt commercial' },
          ],
          note: 'Les délais et les frais changent souvent : confirmez-les sur eUprava ou auprès de l’ambassade de Serbie en France.',
        },
        aDocumenter('Banque, santé, logement et coût de la vie'),
      ],
    },
    {
      slug: 'travailler',
      titre: 'Travailler en Serbie',
      intro: 'Depuis le 1er février 2024, les étrangers qui travaillent doivent détenir un permis unique, qui couvre à la fois le séjour et le travail.',
      resume: 'Permis unique.',
      icone: '💼',
      sections: [
        {
          id: 'permis',
          titre: 'Le permis unique',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            {
              type: 'liste',
              items: [
                'Le permis de travail est <strong>demandé par l’employeur</strong> ; la police transmet la demande au service national de l’emploi.',
                'Les délais annoncés vont de 2 à 4 semaines pour le travail et de 3 à 6 semaines pour le séjour selon un cabinet : ils ne sont pas retenus ici.',
              ],
            },
          ],
          sources: [
            { label: 'BDK Advokati, nouvelle procédure de permis de séjour temporaire et de travail', url: 'https://bdkadvokati.com/serbia-new-procedure-for-temporary-residence-permit-and-work-permits', nature: 'cabinet d’avocats, intérêt commercial' },
            { label: 'TM Consulting, trois étapes pour un permis de travail et de séjour', url: 'https://tmconsulting.co.rs/3-steps-to-get-work-and-resident-permit-for-non-residents-in-serbia/', nature: 'cabinet de conseil, intérêt commercial' },
          ],
        },
        aDocumenter('Salaire minimum, impôts et recherche d’emploi'),
      ],
    },
    paiementsACompleter('le dinar serbe'),
    {
      slug: 'langue-culture',
      titre: 'Langue et culture',
      intro: 'Le serbe s’écrit à la fois en cyrillique et en alphabet latin. Les leçons de ce guide utilisent l’alphabet latin.',
      resume: 'Serbe, deux alphabets et prononciation.',
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
                ['č, ć', 'comme « tch » (ć plus doux)', 'čaj : « tchaï »'],
                ['š', 'comme « ch »', 'šest : « chèst »'],
                ['ž', 'comme « j »', 'žena : « jèna »'],
                ['đ, dž', 'comme « dj »', 'đak : « djak »'],
                ['c', 'comme « ts »', 'cena : « tsèna »'],
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
        ['Zdravo', 'zdravo', 'Bonjour / Salut'],
        ['Dobro jutro', 'dobro youtro', 'Bonjour (le matin)'],
        ['Dobar dan', 'dobar dane', 'Bonjour (dans la journée)'],
        ['Dobro veče', 'dobro vètché', 'Bonsoir'],
        ['Hvala', 'hvala', 'Merci'],
        ['Molim', 'molim', 'S’il vous plaît / De rien'],
        ['Izvinite', 'izvinitè', 'Excusez-moi'],
        ['Da', 'da', 'Oui'],
        ['Ne', 'nè', 'Non'],
        ['Kako ste?', 'kako stè', 'Comment allez-vous ?'],
        ['Dobro, hvala', 'dobro hvala', 'Bien, merci'],
        ['Doviđenja', 'dovidjènia', 'Au revoir'],
      ],
      astuce: 'Les lettres « č » et « ć » se prononcent toutes deux « tch » pour un débutant ; « š » = « ch » et « ž » = « j ».',
    },
    {
      slug: 'se-presenter',
      titre: 'Se présenter',
      intro: 'Dire qui vous êtes et ce que vous ne comprenez pas.',
      phrases: [
        ['Zovem se…', 'zovèm sè', 'Je m’appelle…'],
        ['Drago mi je', 'drago mi yè', 'Enchanté(e)'],
        ['Ja sam Francuz', 'ya sam frantsouz', 'Je suis français'],
        ['Ja sam Francuskinja', 'ya sam frantsouskinia', 'Je suis française'],
        ['Dolazim iz Francuske', 'dolazim iz frantsouskè', 'Je viens de France'],
        ['Govorim malo srpski', 'govorim malo srpski', 'Je parle un peu serbe'],
        ['Govorite li engleski?', 'govoritè li ènglèski', 'Parlez-vous anglais ?'],
        ['Ne razumem', 'nè razoumèm', 'Je ne comprends pas'],
        ['Možete li da ponovite?', 'mojètè li da ponovitè', 'Pouvez-vous répéter ?'],
        ['Govorite sporije, molim', 'govoritè sporiyè molim', 'Parlez plus lentement, s’il vous plaît'],
      ],
      astuce: 'Préparez « Zovem se… » avec votre prénom et répétez-le à voix haute.',
    },
    {
      slug: 'chiffres-prix-heure',
      titre: 'Chiffres, prix et heure',
      intro: 'Pour comprendre un prix, demander l’heure ou compter votre argent.',
      phrases: [
        ['Jedan', 'yèdan', '1'],
        ['Dva', 'dva', '2'],
        ['Tri', 'tri', '3'],
        ['Četiri', 'tchètiri', '4'],
        ['Pet', 'pèt', '5'],
        ['Šest', 'chèst', '6'],
        ['Sedam', 'sèdam', '7'],
        ['Osam', 'osam', '8'],
        ['Devet', 'dèvèt', '9'],
        ['Deset', 'dèssèt', '10'],
        ['Koliko košta?', 'koliko kochta', 'Combien ça coûte ?'],
        ['Koliko je sati?', 'koliko yè sati', 'Quelle heure est-il ?'],
        ['Mogu li da platim karticom?', 'mogou li da platim kartitsom', 'Puis-je payer par carte ?'],
      ],
      astuce: 'Demandez le prix avant d’acheter : « Koliko košta? ».',
    },
    {
      slug: 'se-deplacer',
      titre: 'Se déplacer',
      intro: 'Demander son chemin et acheter un billet.',
      phrases: [
        ['Gde je…?', 'gdè yè', 'Où est… ?'],
        ['Stanica', 'stanitsa', 'La gare'],
        ['Aerodrom', 'aèrodrom', 'L’aéroport'],
        ['Autobuska stanica', 'aoutobouska stanitsa', 'La gare routière'],
        ['Jednu kartu, molim', 'yèdnou kartou molim', 'Un billet, s’il vous plaît'],
        ['Levo', 'lèvo', 'À gauche'],
        ['Desno', 'dèsno', 'À droite'],
        ['Pravo', 'pravo', 'Tout droit'],
      ],
      astuce: 'Montrez l’adresse écrite sur votre téléphone : c’est souvent plus sûr que de la dire.',
    },
    {
      slug: 'restaurant-courses',
      titre: 'Restaurant et courses',
      intro: 'Commander, demander l’addition et faire vos courses.',
      phrases: [
        ['Sto za dvoje, molim', 'sto za dvoyè molim', 'Une table pour deux, s’il vous plaît'],
        ['Jelovnik, molim', 'yèlovnik molim', 'Le menu, s’il vous plaît'],
        ['Želeo bih…', 'jèlèo bih', 'Je voudrais…'],
        ['Kafu', 'kafou', 'Un café'],
        ['Vodu', 'vodou', 'De l’eau'],
        ['Pivo', 'pivo', 'Une bière'],
        ['Račun, molim', 'ratchoun molim', 'L’addition, s’il vous plaît'],
      ],
      astuce: 'Pour commander, dites ce que vous voulez puis « molim » (s’il vous plaît).',
    },
    {
      slug: 'urgences',
      titre: 'Urgences et phrases de survie',
      intro: 'Les phrases à connaître en cas de problème.',
      phrases: [
        ['Upomoć!', 'oupomotch', 'Au secours !'],
        ['Pozovite hitnu pomoć!', 'pozovitè hitnou pomotch', 'Appelez une ambulance !'],
        ['Pozovite policiju!', 'pozovitè politsiyou', 'Appelez la police !'],
        ['Treba mi lekar', 'trèba mi lèkar', 'J’ai besoin d’un médecin'],
        ['Boli me', 'boli mè', 'J’ai mal'],
        ['Izgubio sam se', 'izgoubio sam sè', 'Je suis perdu'],
        ['Gde je apoteka?', 'gdè yè apotèka', 'Où est la pharmacie ?'],
      ],
      astuce: 'Les numéros d’urgence serbes n’ont pas été vérifiés ici : notez-les depuis la fiche officielle du ministère avant de partir.',
    },
  ],

  sourcesSupplementaires: [],
};
