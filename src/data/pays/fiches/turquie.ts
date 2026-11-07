import type { PaysComplet } from '../types';
import { aDocumenter, cultureACompleter, diplo, paiementsACompleter, securiteALire } from '../aides';

const D = diplo('turquie');
const PETIT_JOURNAL = { label: 'Le Petit Journal Istanbul, résider en Turquie : les principaux titres de séjour', url: 'https://lepetitjournal.com/istanbul/installation/resider-en-turquie-un-apercu-des-principaux-titres-de-sejour-319886', nature: 'média pour les expatriés français' };
const CYRIL_TR = { label: 'Cyril Jarnias, s’installer en Turquie', url: 'https://www.cyriljarnias.com/expatriation/guide-sinstaller-turquie-expatrie/', nature: 'blog de conseil' };

export const turquie: PaysComplet = {
  complet: true,
  test: true,
  iso: 'TUR',
  slug: 'turquie',
  nom: 'Turquie',
  article: 'la Turquie',
  accroche: 'Un pays hors de l’Union européenne, entre Europe et Asie : séjour sans visa de courte durée, mais titre de séjour et assurance santé spécifiques pour s’installer. Fiche beta, à vérifier.',
  couleur: '#b3141a',
  langue: { nom: 'turc', code: 'tr-TR' },
  devise: 'livre turque',
  conseilsVoyageurs: D.securite,
  verifie: '4 novembre 2026',

  mediasLocaux: [
    { nom: 'Hürriyet', url: 'https://www.hurriyet.com.tr', nature: 'quotidien généraliste', langue: 'turc' },
    { nom: 'Hürriyet Daily News', url: 'https://www.hurriyetdailynews.com', nature: 'édition en anglais du quotidien', langue: 'anglais' },
    { nom: 'Cumhuriyet', url: 'https://www.cumhuriyet.com.tr', nature: 'quotidien généraliste', langue: 'turc' },
    { nom: 'TRT Français', url: 'https://www.trtfrancais.com', nature: 'service public, édition française (média d’État, à confirmer)', langue: 'français' },
  ],

  rubriques: [
    {
      slug: 'voyager',
      titre: 'Voyager en Turquie',
      intro: 'Pour un court séjour touristique, les Français n’ont pas besoin de visa. La Turquie est une zone sismique : quelques précautions s’imposent.',
      resume: 'Entrée, sécurité, séismes et santé.',
      icone: '✈️',
      sections: [
        securiteALire(D.securite, 'la Turquie'),
        {
          id: 'risques',
          titre: 'Séismes et vigilance',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            {
              type: 'liste',
              items: [
                '<strong>Séismes</strong> : de légers séismes sont très réguliers, avec un risque de séismes plus graves, en particulier dans la région d’Istanbul et dans le sud-est du pays (conseils belges). En cas de catastrophe, suivez les instructions des autorités locales.',
                '<strong>Vigilance</strong> : une très grande vigilance est conseillée dans les quartiers touristiques et les lieux de forte affluence, où des attentats et attaques terroristes ont eu lieu par le passé.',
              ],
            },
          ],
          sources: [
            { label: 'Diplomatie belge, climat et catastrophes en Turquie', url: 'https://diplomatie.belgium.be/fr/pays/turquie/voyager-en-turquie-conseils-aux-voyageurs/climat-et-catastrophes-en-turquie', nature: 'source officielle belge' },
            { label: 'Département fédéral suisse des affaires étrangères, voyager en Turquie', url: 'https://www.eda.admin.ch/fr/conseils-pour-les-voyages-turquie', nature: 'source officielle suisse' },
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
                'Les ressortissants français n’ont pas besoin de visa pour un séjour touristique de <strong>90 jours maximum sur une période de 180 jours</strong>.',
                'Une carte d’identité ou un passeport suffirait, à condition d’être valable <strong>au moins 150 jours</strong> après la date d’entrée et en bon état.',
                'Au-delà de 90 jours, un visa ou un permis de séjour est nécessaire : une prolongation n’est pas possible, il faut demander un permis de séjour avant la fin du séjour autorisé.',
              ],
            },
          ],
          sources: [
            { label: 'Ministère de l’Europe et des Affaires étrangères, fiche Turquie (entrée et séjour)', url: D.entree, nature: 'source officielle' },
            { label: 'Lonely Planet, visa pour la Turquie', url: 'https://www.lonelyplanet.fr/destinations/europe/turquie/visa', nature: 'guide de voyage' },
            { label: 'Luko, visa pour la Turquie', url: 'https://www.fr.luko.eu/assurance-voyage/turquie/visa/', nature: 'assureur, intérêt commercial' },
          ],
          note: 'Les durées et la validité des documents viennent de guides privés : confirmez-les sur la fiche officielle.',
        },
        aDocumenter('Argent, santé et téléphone', 'La monnaie est la livre turque. Les usages (cartes, espèces, soins, carte SIM) n’ont pas été vérifiés auprès de sources fiables.'),
      ],
    },
    {
      slug: 'vivre',
      titre: 'Vivre en Turquie',
      intro: 'Au-delà de 90 jours, il faut un permis de séjour (ikamet) : ce n’est ni un visa ni un permis de travail.',
      resume: 'Permis de séjour (ikamet) et assurance santé.',
      icone: '🏠',
      sections: [
        {
          id: 'sejour',
          titre: 'Permis de séjour (ikamet)',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            {
              type: 'liste',
              items: [
                'Un séjour prolongé passe par un <strong>permis de séjour (ikamet)</strong>. Les motifs cités : travail, études, propriété immobilière, famille, santé, apprentissage de la langue.',
                'Le dossier demande en général une preuve de ressources, une preuve de logement et une <strong>assurance santé</strong>.',
                'Toute personne étrangère présente en Turquie depuis au moins 90 jours doit faire une demande de permis de séjour pour régulariser sa situation.',
                'Une couverture privée turque suffit généralement pour le permis. Les polices ne couvrent pas les maladies chroniques apparues avant l’obtention du permis.',
              ],
            },
            { type: 'alerte', warn: true, titre: 'Conditions d’âge contradictoires', html: 'Les guides ne s’accordent pas sur l’obligation d’assurance privée (tous les 18-65 ans, ou tous sauf les plus de 65 ans). Vérifiez auprès de l’administration turque de l’immigration (Göç İdaresi, démarches en ligne e-ikamet).' },
          ],
          sources: [
            PETIT_JOURNAL,
            CYRIL_TR,
            { label: 'Visitworld, assurance pour l’ikamet', url: 'https://visitworld.today/fr/blog/1520/insurance-for-ikamet-in-turkey-who-needs-it-and-the-features-of-the-policy', nature: 'site de voyage' },
          ],
          note: 'Aucune source officielle turque n’a été consultée.',
        },
        aDocumenter('Banque, logement et coût de la vie'),
      ],
    },
    {
      slug: 'travailler',
      titre: 'Travailler en Turquie',
      intro: 'Le permis de séjour ne donne pas le droit de travailler : un permis de travail distinct est nécessaire.',
      resume: 'Permis de travail et risques.',
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
                'Pour exercer une activité salariée, un <strong>permis de travail</strong> doit être obtenu par l’employeur auprès du ministère du Travail.',
                'Un permis de travail peut aussi servir de base au séjour.',
                'Travailler sans permis expose à de lourdes amendes et à une expulsion.',
              ],
            },
          ],
          sources: [PETIT_JOURNAL, CYRIL_TR],
        },
        aDocumenter('Salaire minimum, impôts et recherche d’emploi'),
      ],
    },
    paiementsACompleter('la livre turque'),
    {
      slug: 'langue-culture',
      titre: 'Langue et culture',
      intro: 'Le turc s’écrit avec l’alphabet latin, avec quelques lettres propres (ç, ğ, ı, ö, ş, ü). Il y a beaucoup de mots à retenir, mais la lecture est régulière.',
      resume: 'Turc et prononciation.',
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
                ['ç', 'comme « tch »', 'çay : « tchaï »'],
                ['ş', 'comme « ch »', 'teşekkür : « tèchèkur »'],
                ['ı (sans point)', 'son entre « e » muet et « i » fermé', 'ısı : « euseu »'],
                ['ğ', 'allonge la voyelle, presque muette', 'dağ : « daa »'],
                ['c', 'comme « dj »', 'cam : « djam »'],
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
        ['Merhaba', 'mèrhaba', 'Bonjour / Salut'],
        ['Günaydın', 'gunaydeun', 'Bonjour (le matin)'],
        ['İyi akşamlar', 'iyi akchamlar', 'Bonsoir'],
        ['Teşekkür ederim', 'tèchèkur èdèrim', 'Merci'],
        ['Lütfen', 'lutfèn', 'S’il vous plaît'],
        ['Affedersiniz', 'affèdèrsiniz', 'Excusez-moi'],
        ['Evet', 'èvèt', 'Oui'],
        ['Hayır', 'hayeur', 'Non'],
        ['Nasılsınız?', 'naseulseuneuz', 'Comment allez-vous ?'],
        ['İyiyim, teşekkürler', 'iyiyim tèchèkurlèr', 'Bien, merci'],
        ['Hoşça kalın', 'hochtcha kalen', 'Au revoir (à celui qui reste)'],
        ['Güle güle', 'gulè gulè', 'Au revoir (à celui qui part)'],
      ],
      astuce: 'Le « ı » sans point et le « ğ » n’existent pas en français : faites relire ces prononciations par un locuteur.',
    },
    {
      slug: 'se-presenter',
      titre: 'Se présenter',
      intro: 'Dire qui vous êtes et ce que vous ne comprenez pas.',
      phrases: [
        ['Benim adım…', 'bènim adeum', 'Je m’appelle…'],
        ['Memnun oldum', 'mèmnoun oldoum', 'Enchanté(e)'],
        ['Fransızım', 'fransezeum', 'Je suis français(e)'],
        ['Fransa’dan geliyorum', 'fransadan guèliyorum', 'Je viens de France'],
        ['Biraz Türkçe konuşuyorum', 'biraz turktché konouchouyoroum', 'Je parle un peu turc'],
        ['İngilizce biliyor musunuz?', 'ingilizdjè biliyor mousounouz', 'Parlez-vous anglais ?'],
        ['Anlamıyorum', 'anlameyoroum', 'Je ne comprends pas'],
        ['Tekrar eder misiniz?', 'tèkrar èdèr misiniz', 'Pouvez-vous répéter ?'],
        ['Daha yavaş konuşabilir misiniz?', 'daha yavach konouchabilir misiniz', 'Pouvez-vous parler plus lentement ?'],
      ],
      astuce: 'Préparez « Benim adım… » avec votre prénom et répétez-le à voix haute.',
    },
    {
      slug: 'chiffres-prix-heure',
      titre: 'Chiffres, prix et heure',
      intro: 'Pour comprendre un prix, demander l’heure ou compter votre argent.',
      phrases: [
        ['Bir', 'bir', '1'],
        ['İki', 'iki', '2'],
        ['Üç', 'utch', '3'],
        ['Dört', 'deurt', '4'],
        ['Beş', 'bèch', '5'],
        ['Altı', 'alteu', '6'],
        ['Yedi', 'yèdi', '7'],
        ['Sekiz', 'sèkiz', '8'],
        ['Dokuz', 'dokouz', '9'],
        ['On', 'on', '10'],
        ['Ne kadar?', 'nè kadar', 'Combien ça coûte ?'],
        ['Saat kaç?', 'saat katch', 'Quelle heure est-il ?'],
        ['Kartla ödeyebilir miyim?', 'kartla eudèyèbilir miyim', 'Puis-je payer par carte ?'],
      ],
      astuce: 'Demandez le prix avant d’acheter : « Ne kadar? ».',
    },
    {
      slug: 'se-deplacer',
      titre: 'Se déplacer',
      intro: 'Demander son chemin et acheter un billet.',
      phrases: [
        ['…nerede?', 'nèrèdè', '… est où ?'],
        ['İstasyon', 'istassyon', 'La gare'],
        ['Havalimanı', 'havalimaneu', 'L’aéroport'],
        ['Otobüs durağı', 'otobus dourayeu', 'L’arrêt de bus'],
        ['Bir bilet lütfen', 'bir bilèt lutfèn', 'Un billet, s’il vous plaît'],
        ['Sola', 'sola', 'À gauche'],
        ['Sağa', 'saa', 'À droite'],
        ['Düz', 'duz', 'Tout droit'],
      ],
      astuce: 'Montrez l’adresse écrite sur votre téléphone : c’est souvent plus sûr que de la dire.',
    },
    {
      slug: 'restaurant-courses',
      titre: 'Restaurant et courses',
      intro: 'Commander, demander l’addition et faire vos courses.',
      phrases: [
        ['İki kişilik masa lütfen', 'iki kichilik massa lutfèn', 'Une table pour deux, s’il vous plaît'],
        ['Menü lütfen', 'mènu lutfèn', 'Le menu, s’il vous plaît'],
        ['… istiyorum', 'istiyorum', 'Je voudrais…'],
        ['Bir kahve', 'bir kahvè', 'Un café'],
        ['Su', 'sou', 'De l’eau'],
        ['Çay', 'tchaï', 'Du thé'],
        ['Bir bira', 'bir bira', 'Une bière'],
        ['Hesap lütfen', 'hèssap lutfèn', 'L’addition, s’il vous plaît'],
      ],
      astuce: 'Le thé (« çay ») se sert partout et se propose souvent aux visiteurs.',
    },
    {
      slug: 'urgences',
      titre: 'Urgences et phrases de survie',
      intro: 'Les phrases à connaître en cas de problème.',
      phrases: [
        ['İmdat!', 'imdat', 'Au secours !'],
        ['Ambulans çağırın!', 'ambulans tchaarenn', 'Appelez une ambulance !'],
        ['Polis çağırın!', 'polis tchaarenn', 'Appelez la police !'],
        ['Doktora ihtiyacım var', 'doktora ihtiyadjeum var', 'J’ai besoin d’un médecin'],
        ['Ağrım var', 'aareum var', 'J’ai mal'],
        ['Kayboldum', 'kaiboldoum', 'Je suis perdu(e)'],
        ['Eczane nerede?', 'èdjzanè nèrèdè', 'Où est la pharmacie ?'],
      ],
      astuce: 'Les numéros d’urgence turcs n’ont pas été vérifiés ici : notez-les depuis la fiche officielle du ministère avant de partir.',
    },
  ],

  sourcesSupplementaires: [],
};
