import type { PaysComplet } from './types';

const DIPLO_SECURITE = 'https://www.diplomatie.gouv.fr/fr/information-par-pays/vietnam/conseils-aux-voyageurs-securite';
const DIPLO_ENTREE = 'https://www.diplomatie.gouv.fr/fr/information-par-pays/vietnam/conseils-aux-voyageurs-entree-sejour';
const OFFICIEL_ENTREE = { label: 'Ministère de l’Europe et des Affaires étrangères, fiche Vietnam (entrée et séjour)', url: DIPLO_ENTREE, nature: 'source officielle' };

export const vietnam: PaysComplet = {
  complet: true,
  test: true,
  iso: 'VNM',
  slug: 'vietnam',
  nom: 'Vietnam',
  article: 'le Vietnam',
  accroche: 'Un pays hors de l’Union européenne, avec une langue à tons : exemption de visa de courte durée, permis de travail et carte de résidence très encadrés. Fiche en test, à vérifier.',
  couleur: '#b3141a',
  langue: { nom: 'vietnamien', code: 'vi-VN' },
  devise: 'dong',
  conseilsVoyageurs: DIPLO_SECURITE,
  verifie: '4 novembre 2026',

  mediasLocaux: [
    { nom: 'VnExpress', url: 'https://vnexpress.net', nature: 'journal en ligne généraliste', langue: 'vietnamien' },
    { nom: 'Tuổi Trẻ', url: 'https://tuoitre.vn', nature: 'quotidien généraliste', langue: 'vietnamien' },
    { nom: 'VietnamPlus (édition française)', url: 'https://fr.vietnamplus.vn', nature: 'agence vietnamienne d’information, édition française (média d’État, à confirmer)', langue: 'français' },
    { nom: 'Le Courrier du Vietnam', url: 'https://lecourrier.vn', nature: 'journal francophone (média d’État, à confirmer)', langue: 'français' },
  ],

  rubriques: [
    {
      slug: 'voyager',
      titre: 'Voyager au Vietnam',
      intro: 'Pour un court séjour, les Français bénéficient d’une exemption de visa, mais ses conditions ont changé plusieurs fois : vérifiez-les juste avant le départ.',
      resume: 'Visa, santé, sécurité et argent.',
      icone: '✈️',
      sections: [
        {
          id: 'securite',
          titre: 'Sécurité et conseils officiels',
          badge: { type: 'warn', texte: 'À documenter' },
          blocs: [
            { type: 'alerte', warn: true, titre: 'Fiche officielle à lire', html: 'Je n’ai pas pu lire la rubrique « Sécurité » de la fiche du ministère lors de cette recherche. Lisez-la avant de partir.' },
          ],
          sources: [{ label: 'Ministère de l’Europe et des Affaires étrangères, fiche Vietnam (sécurité)', url: DIPLO_SECURITE, nature: 'source officielle' }],
        },
        {
          id: 'entree',
          titre: 'Entrée et visa',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            {
              type: 'liste',
              items: [
                'Les Français bénéficient d’une <strong>exemption de visa de 45 jours</strong> pour les entrées depuis août 2023 ; une prolongation de cette mesure jusqu’en 2028 a été annoncée.',
                'Il faut un passeport valable <strong>au moins six mois</strong> après la fin du séjour. Après une entrée avec l’exemption, un délai d’attente d’environ 30 jours serait imposé avant la suivante (une seule source).',
                'Au-delà de 45 jours, un <strong>e-visa</strong> (jusqu’à 90 jours) est souvent cité comme point de départ. Son prix, environ 25 dollars selon un article, n’est pas confirmé par une source officielle.',
                'Cette exemption <strong>ne permet pas de travailler</strong> : travailler sans permis expose à une amende et à une expulsion.',
              ],
            },
            { type: 'alerte', warn: true, titre: 'Suspension de l’exemption', html: 'Une dépêche spécialisée évoque une <strong>suspension temporaire de l’exemption de visa pour 8 pays, dont la France</strong>. Je n’ai pas pu établir sa date ni son état actuel : vérifiez-le sur la fiche officielle et auprès de l’ambassade du Vietnam avant de réserver.' },
          ],
          sources: [
            OFFICIEL_ENTREE,
            { label: 'Routard, exemption de visa prolongée jusqu’en 2028', url: 'https://www.routard.com/actualite-du-voyage/cid141475-vietnam-exemption-de-visa-prolongee-jusquen-2028.html', nature: 'guide de voyage' },
            { label: 'Action Visas, suspension temporaire de l’exemption pour 8 pays dont la France', url: 'https://www.action-visas.com/actualite/vietnam-suspension-temporaire-de-lexemption-de-visas-pour-8-pays-dont-la-france', nature: 'prestataire de visas, intérêt commercial' },
            { label: 'Open Shores, quel visa pour vivre au Vietnam', url: 'https://www.openshores.co/blog/quel-visa-pour-vivre-en-vietnam', nature: 'blog' },
          ],
        },
        {
          id: 'sante',
          titre: 'Santé et médicaments',
          badge: { type: 'ok', texte: 'Vérifié' },
          blocs: [
            { type: 'p', html: 'La législation vietnamienne est stricte sur certains médicaments : si vous suivez un traitement, emportez l’<strong>ordonnance nominative</strong> de votre médecin. La fiche officielle rappelle aussi qu’il est indispensable d’être bien assuré avant de partir.' },
          ],
          sources: [OFFICIEL_ENTREE],
        },
        {
          id: 'argent',
          titre: 'Argent et paiement',
          badge: { type: 'warn', texte: 'À documenter' },
          blocs: [{ type: 'alerte', warn: true, titre: 'Section à compléter', html: 'La monnaie est le dong. L’usage des cartes, des espèces et des paiements mobiles n’a pas été vérifié auprès de sources fiables.' }],
        },
      ],
    },
    {
      slug: 'vivre',
      titre: 'Vivre au Vietnam',
      intro: 'S’installer durablement passe presque toujours par un permis de travail et une carte de résidence temporaire. Le Vietnam n’accorde pas de résidence permanente de façon standard.',
      resume: 'Carte de résidence temporaire et démarches.',
      icone: '🏠',
      sections: [
        {
          id: 'sejour',
          titre: 'Séjour de longue durée',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            {
              type: 'liste',
              items: [
                'La <strong>carte de résidence temporaire (TRC)</strong> se demande après le permis de travail, avec un permis valable au moins 12 mois et un séjour prévu d’au moins un an. Sa durée va de 1 à 10 ans selon le statut.',
                'Il faudrait s’<strong>enregistrer auprès de la police locale dans les 15 jours</strong> suivant l’arrivée (une source).',
                'Le Vietnam ne propose pas de statut de résident permanent aux étrangers de façon standard.',
                'Un accord « vacances-travail » avec la France, pour les 18 à 30 ans, offrirait un séjour de 12 mois non renouvelable (une source, à confirmer).',
              ],
            },
          ],
          sources: [
            { label: 'VietAn Law, carte de résidence temporaire au Vietnam', url: 'https://vietanlaw.com/temporary-residence-card-in-vietnam/', nature: 'cabinet d’avocats, intérêt commercial' },
            { label: 'Cyril Jarnias, s’installer au Vietnam', url: 'https://www.cyriljarnias.com/?p=27332', nature: 'blog de conseil' },
            { label: 'Rivermate, permis de travail et visas au Vietnam', url: 'https://rivermate.com/fr/guides/vietnam/permis-de-travail-et-visas', nature: 'prestataire, intérêt commercial' },
          ],
          note: 'Aucune source officielle vietnamienne n’a été consultée : confirmez auprès de l’ambassade du Vietnam en France.',
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
      titre: 'Travailler au Vietnam',
      intro: 'Un permis de travail est nécessaire, en général demandé par l’employeur.',
      resume: 'Permis de travail et conditions.',
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
                'La demande est <strong>principalement gérée par l’employeur</strong>, qui doit être enregistré au Vietnam. Un contrat de travail est exigé.',
                'Pour certaines catégories, une expérience documentée d’au moins trois ans est demandée.',
                'La durée est donnée comme jusqu’à 2 ans, renouvelable, ou jusqu’à 3 ans selon les sources.',
              ],
            },
            { type: 'alerte', warn: true, titre: 'Coûts : estimation non vérifiée', html: 'Les montants varient fortement : environ 25 à 32 dollars de frais officiels selon un article, mais 400 à 800 dollars au total (traductions comprises) selon un autre. Demandez un devis avant de vous engager.' },
          ],
          sources: [
            { label: 'April International, obtenir un visa de travail au Vietnam', url: 'https://www.april-international.com/fr/assurance/guide/comment-obtenir-un-visa-de-travail-pour-le-vietnam-en-2025', nature: 'assureur, intérêt commercial' },
            { label: 'Rivermate, permis de travail et visas au Vietnam', url: 'https://rivermate.com/fr/guides/vietnam/permis-de-travail-et-visas', nature: 'prestataire, intérêt commercial' },
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
      intro: 'La monnaie est le dong. Cette page est à compléter : je n’ai pas de source fiable à ce stade.',
      resume: 'Dong, espèces et cartes.',
      icone: '💳',
      sections: [
        {
          titre: 'Monnaie, cartes et espèces',
          badge: { type: 'warn', texte: 'À documenter' },
          blocs: [{ type: 'alerte', warn: true, titre: 'Section à compléter', html: 'Les usages (cartes françaises, retraits, paiement par code QR) n’ont pas été vérifiés. Renseignez-vous auprès de votre banque avant de partir.' }],
        },
      ],
    },
    {
      slug: 'langue-culture',
      titre: 'Langue et culture',
      intro: 'Le vietnamien s’écrit avec l’alphabet latin enrichi de signes (accents et marques de ton). C’est une langue à tons : le même mot change de sens selon le ton.',
      resume: 'Vietnamien, tons et prononciation.',
      icone: '🎭',
      sections: [
        {
          titre: 'Les tons',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            { type: 'p', html: 'Le vietnamien compte plusieurs tons (six dans le dialecte du Nord, selon l’usage courant), notés par des signes sur les voyelles. Les prononciations de ce guide sont écrites à la française et <strong>ne rendent pas les tons</strong> : elles ne suffisent pas pour être compris, une écoute avec un locuteur est indispensable.' },
          ],
          note: 'Information non sourcée.',
        },
        {
          titre: 'Culture et usages',
          badge: { type: 'warn', texte: 'À documenter' },
          blocs: [{ type: 'alerte', warn: true, titre: 'Section à compléter', html: 'Les usages (politesse, titres, repas) n’ont pas été vérifiés auprès de sources fiables.' }],
        },
      ],
    },
  ],

  lecons: [
    {
      slug: 'salutations',
      titre: 'Salutations et politesse',
      intro: 'Les mots à utiliser dès que vous parlez à quelqu’un. Les tons ne sont pas rendus par la prononciation écrite.',
      phrases: [
        ['Xin chào', 'sin tchao', 'Bonjour'],
        ['Chào buổi sáng', 'tchao bouoi sang', 'Bonjour (le matin)'],
        ['Chào buổi tối', 'tchao bouoi toi', 'Bonsoir'],
        ['Cảm ơn', 'kam eune', 'Merci'],
        ['Xin lỗi', 'sin loï', 'Excusez-moi / Pardon'],
        ['Vâng', 'vèng', 'Oui'],
        ['Không', 'không', 'Non'],
        ['Bạn khỏe không?', 'bane khoé không', 'Comment allez-vous ?'],
        ['Tôi khỏe, cảm ơn', 'toï khoé kam eune', 'Je vais bien, merci'],
        ['Tạm biệt', 'tam biét', 'Au revoir'],
      ],
      astuce: 'Les tons changent le sens des mots : écoutez la voix, répétez-la, et faites vérifier votre prononciation par un locuteur.',
    },
    {
      slug: 'se-presenter',
      titre: 'Se présenter',
      intro: 'Dire qui vous êtes et ce que vous ne comprenez pas.',
      phrases: [
        ['Tôi tên là…', 'toï tèn la', 'Je m’appelle…'],
        ['Rất vui được gặp bạn', 'zât vouï douoc gap bane', 'Enchanté(e)'],
        ['Tôi là người Pháp', 'toï la nguoï fap', 'Je suis français(e)'],
        ['Tôi đến từ Pháp', 'toï dén tu fap', 'Je viens de France'],
        ['Tôi nói được một chút tiếng Việt', 'toï noï douoc mot tchout tiéng viet', 'Je parle un peu vietnamien'],
        ['Bạn nói tiếng Anh không?', 'bane noï tiéng anh không', 'Parlez-vous anglais ?'],
        ['Tôi không hiểu', 'toï không hiéou', 'Je ne comprends pas'],
        ['Bạn nói chậm hơn được không?', 'bane noï tchâm heune douoc không', 'Pouvez-vous parler plus lentement ?'],
      ],
      astuce: 'Préparez « Tôi tên là… » avec votre prénom et répétez-le à voix haute.',
    },
    {
      slug: 'chiffres-prix-heure',
      titre: 'Chiffres, prix et heure',
      intro: 'Pour comprendre un prix, demander l’heure ou compter votre argent.',
      phrases: [
        ['Một', 'mot', '1'],
        ['Hai', 'haï', '2'],
        ['Ba', 'ba', '3'],
        ['Bốn', 'bône', '4'],
        ['Năm', 'nam', '5'],
        ['Sáu', 'saou', '6'],
        ['Bảy', 'baï', '7'],
        ['Tám', 'tam', '8'],
        ['Chín', 'tchine', '9'],
        ['Mười', 'mouoi', '10'],
        ['Giá bao nhiêu?', 'za bao gnhiéou', 'Combien ça coûte ?'],
        ['Mấy giờ rồi?', 'mây zeu zôï', 'Quelle heure est-il ?'],
      ],
      astuce: 'Demandez le prix avant d’acheter : « Giá bao nhiêu? ».',
    },
    {
      slug: 'se-deplacer',
      titre: 'Se déplacer',
      intro: 'Demander son chemin et acheter un billet.',
      phrases: [
        ['…ở đâu?', 'eu dâou', '… est où ?'],
        ['Nhà ga', 'gnha ga', 'La gare'],
        ['Sân bay', 'seune baï', 'L’aéroport'],
        ['Bến xe buýt', 'bén xe bouït', 'L’arrêt de bus'],
        ['Một vé, làm ơn', 'mot vé lam eune', 'Un billet, s’il vous plaît'],
        ['Rẽ trái', 'zè tchaï', 'Tourner à gauche'],
        ['Rẽ phải', 'zè faï', 'Tourner à droite'],
        ['Đi thẳng', 'di thang', 'Tout droit'],
      ],
      astuce: 'Montrez l’adresse écrite sur votre téléphone au chauffeur : c’est souvent plus sûr que de la dire.',
    },
    {
      slug: 'restaurant-courses',
      titre: 'Restaurant et courses',
      intro: 'Commander, demander l’addition et faire vos courses.',
      phrases: [
        ['Cho tôi một bàn cho hai người', 'tcho toï mot bane tcho haï nguoï', 'Une table pour deux, s’il vous plaît'],
        ['Cho tôi xem thực đơn', 'tcho toï xem thuc deune', 'Puis-je voir le menu ?'],
        ['Cho tôi…', 'tcho toï', 'Je voudrais…'],
        ['Cà phê', 'ka fé', 'Un café'],
        ['Nước', 'nuoc', 'De l’eau'],
        ['Bia', 'bia', 'Une bière'],
        ['Tính tiền', 'tinh tién', 'L’addition'],
      ],
      astuce: 'Pour appeler le serveur ou payer, « Tính tiền » (l’addition) suffit.',
    },
    {
      slug: 'urgences',
      titre: 'Urgences et phrases de survie',
      intro: 'Les phrases à connaître en cas de problème.',
      phrases: [
        ['Cứu tôi với!', 'kiou toï voï', 'Au secours !'],
        ['Gọi xe cấp cứu!', 'goï xe kâp kiou', 'Appelez une ambulance !'],
        ['Gọi công an!', 'goï kông ane', 'Appelez la police !'],
        ['Tôi cần bác sĩ', 'toï kân bak si', 'J’ai besoin d’un médecin'],
        ['Tôi bị đau', 'toï bi daou', 'J’ai mal'],
        ['Tôi bị lạc đường', 'toï bi lak duong', 'Je suis perdu(e)'],
        ['Hiệu thuốc ở đâu?', 'hiéou thuoc eu dâou', 'Où est la pharmacie ?'],
      ],
      astuce: 'Les numéros d’urgence vietnamiens n’ont pas été vérifiés ici : notez-les depuis la fiche officielle du ministère avant de partir.',
    },
  ],

  sourcesSupplementaires: [],
};
