import type { PaysComplet } from './types';
import { aDocumenter, cultureACompleter, diplo, paiementsACompleter } from './aides';

const D = diplo('maroc');
const PDF_FICHE = 'https://www.diplomatie.gouv.fr/files/files/pdf/cav/Maroc%20-%20Minist%C3%A8re%20de%20l%27Europe%20et%20des%20Affaires%20%C3%A9trang%C3%A8res.pdf';
const UFE = { label: 'UFE, s’installer au Maroc', url: 'https://ufe.org/dossier-pays/maroc/sinstaller-au-maroc', nature: 'association de Français de l’étranger' };
const DEMARCHES = { label: 'Démarches Maroc, s’expatrier au Maroc à la retraite', url: 'https://www.demarchesmaroc.com/expatrier-maroc-retraite/', nature: 'site de conseil, intérêt commercial' };

export const maroc: PaysComplet = {
  complet: true,
  test: true,
  iso: 'MAR',
  slug: 'maroc',
  nom: 'Maroc',
  article: 'le Maroc',
  accroche: 'Un pays proche et très prisé des francophones, mais hors de l’Union européenne : passeport obligatoire, carte de séjour et assurance maladie locale pour s’installer. Fiche beta, à vérifier.',
  couleur: '#a8201a',
  langue: { nom: 'arabe marocain', code: 'ar-MA' },
  devise: 'dirham marocain',
  conseilsVoyageurs: D.securite,
  verifie: '4 novembre 2026',

  mediasLocaux: [
    { nom: 'MAP (Maghreb Arabe Presse)', url: 'https://www.mapexpress.ma', nature: 'agence de presse officielle', langue: 'arabe, français, anglais' },
    { nom: 'Hespress (édition française)', url: 'https://fr.hespress.com', nature: 'site d’information', langue: 'français' },
    { nom: 'Médias24', url: 'https://medias24.com', nature: 'média économique en ligne', langue: 'français' },
    { nom: '2M', url: 'https://www.2m.ma', nature: 'chaîne de télévision', langue: 'arabe, français' },
  ],

  rubriques: [
    {
      slug: 'voyager',
      titre: 'Voyager au Maroc',
      intro: 'Le Maroc n’est pas dans l’Union européenne : le passeport est exigé. Les sources se contredisent sur sa durée de validité.',
      resume: 'Passeport, sécurité et zones d’alerte.',
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
                'Les ressortissants français doivent présenter un <strong>passeport en cours de validité</strong> : l’admission sur présentation de la seule carte nationale d’identité n’est plus possible.',
                'Aucun visa n’est requis pour un séjour touristique de <strong>90 jours maximum</strong>.',
              ],
            },
            { type: 'alerte', warn: true, titre: 'Validité du passeport contradictoire', html: 'Un guide demande six mois de validité au-delà de la date d’entrée, un autre seulement la couverture du séjour avec une marge de trois mois par prudence. Lisez la fiche officielle pour trancher.' },
          ],
          sources: [
            { label: 'Ministère de l’Europe et des Affaires étrangères, fiche Maroc (entrée et séjour)', url: D.entree, nature: 'source officielle' },
            { label: 'TourMaG, formalités d’entrée au Maroc : passeport obligatoire', url: 'https://www.tourmag.com/Formalites-d-entree-au-Maroc-fini-les-cartes-d-identite-passeport-obligatoire-desormais-_a74750.html', nature: 'presse spécialisée' },
            { label: 'Lonely Planet, visa pour le Maroc', url: 'https://www.lonelyplanet.fr/destinations/afrique/maroc/visa', nature: 'guide de voyage' },
          ],
        },
        {
          id: 'securite',
          titre: 'Sécurité et zones d’alerte',
          badge: { type: 'warn', texte: 'À documenter' },
          blocs: [
            { type: 'alerte', warn: true, titre: 'Fiche officielle à lire', html: 'La fiche officielle (mise à jour en avril 2026 d’après le résultat consulté) comporte des zones d’alerte. Je n’ai pas pu lire son contenu : les zones frontalières et le Sahara occidental demandent une lecture attentive avant de partir.' },
          ],
          sources: [
            { label: 'Ministère de l’Europe et des Affaires étrangères, fiche Maroc (sécurité)', url: D.securite, nature: 'source officielle' },
            { label: 'Ministère de l’Europe et des Affaires étrangères, fiche Maroc (PDF)', url: PDF_FICHE, nature: 'source officielle' },
          ],
        },
        aDocumenter('Argent, santé et téléphone', 'La monnaie est le dirham marocain. Les usages (cartes, espèces, assurance, carte SIM) n’ont pas été vérifiés auprès de sources fiables.'),
      ],
    },
    {
      slug: 'vivre',
      titre: 'Vivre au Maroc',
      intro: 'Au-delà de trois mois, il faut s’immatriculer et obtenir une carte de séjour. Une couverture santé locale est exigée.',
      resume: 'Carte de séjour, banque et assurance maladie.',
      icone: '🏠',
      sections: [
        {
          id: 'sejour',
          titre: 'Carte de séjour',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            {
              type: 'liste',
              items: [
                'Un Français qui souhaite s’installer au-delà de trois mois, ou travailler, doit se faire immatriculer dans les <strong>15 jours</strong> suivant l’entrée, auprès du commissariat ou de la gendarmerie du lieu de résidence.',
                'La carte dépend de la catégorie : <strong>salarié</strong> (contrat avec un employeur marocain), <strong>rentier</strong> (revenus réguliers de l’étranger) ou conjoint de Marocain.',
                'Durée : un an renouvelable pendant les trois premières années, puis un titre de 10 ans. Les frais de timbre cités vont de 200 à 500 dirhams selon le titre (estimation non vérifiée).',
                'La carte « retraité » ou « visiteur » <strong>ne permet aucune activité professionnelle</strong>.',
                'Il faut une <strong>couverture santé valable sur le territoire marocain</strong> ; un résident doit cotiser à l’assurance maladie obligatoire (AMO), et les non-salariés ne sont pas affiliés automatiquement.',
              ],
            },
          ],
          sources: [UFE, DEMARCHES, { label: 'Wafir, guide financier pour s’installer au Maroc (2026)', url: 'https://wafir.ma/fr/guide/moving-morocco-financial-guide-2026', nature: 'site de conseil, intérêt commercial' }],
          note: 'Aucune source officielle marocaine n’a été consultée : confirmez auprès du consulat de France et des services de la police marocaine.',
        },
        {
          id: 'banque',
          titre: 'Banque',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            { type: 'p', html: 'Les avis divergent : un forum affirme qu’il faut un titre de séjour pour ouvrir un compte, un guide conseille d’ouvrir le compte avant l’arrivée puis de l’activer avec la carte de séjour. La carte de séjour peut, elle, demander une attestation bancaire de revenus suffisants.' },
          ],
          sources: [UFE, { label: 'Expat.com, guide du Maroc', url: 'https://www.expat.com/guides/guide-Maroc.pdf', nature: 'site d’expatriés' }],
        },
        aDocumenter('Logement et coût de la vie'),
      ],
    },
    {
      slug: 'travailler',
      titre: 'Travailler au Maroc',
      intro: 'Un salarié a besoin d’un contrat avec un employeur marocain. La procédure d’agrément auprès de l’agence nationale pour l’emploi n’a pas été documentée.',
      resume: 'Contrat et carte de séjour salarié.',
      icone: '💼',
      sections: [
        {
          id: 'droit',
          titre: 'Le droit de travailler',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            { type: 'p', html: 'Pour la catégorie <strong>salarié</strong>, la carte de séjour demande un contrat de travail avec un employeur marocain. La carte « retraité » ne permet aucune activité professionnelle. Je n’ai trouvé aucune source sur la procédure auprès de l’agence nationale pour l’emploi.' },
          ],
          sources: [UFE, DEMARCHES],
        },
        aDocumenter('Salaire minimum, impôts et recherche d’emploi'),
      ],
    },
    paiementsACompleter('le dirham marocain'),
    {
      slug: 'langue-culture',
      titre: 'Langue et culture',
      intro: 'L’arabe et le tamazight sont les langues officielles ; au quotidien on parle surtout l’arabe marocain (« darija ») et le français est très répandu. Les leçons de ce guide sont en darija.',
      resume: 'Darija, arabe et français.',
      icone: '🎭',
      sections: [
        {
          titre: 'La darija',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            { type: 'p', html: 'La darija est l’arabe parlé au Maroc ; elle diffère de l’arabe standard et se prononce avec des sons que le français ne rend pas (le « ayn », le « kh », les consonnes emphatiques). Les prononciations écrites à la française sont <strong>très approximatives</strong> : faites relire par un locuteur. Le français est très utilisé dans les commerces et l’administration.' },
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
      intro: 'Les mots à utiliser dès que vous parlez à quelqu’un. Ces phrases en darija sont à faire relire par un locuteur.',
      phrases: [
        ['السلام', 'salam', 'Bonjour / Salut'],
        ['صباح الخير', 'sbah lkhir', 'Bonjour (le matin)'],
        ['مساء الخير', 'msa lkhir', 'Bonsoir'],
        ['شكرا', 'choukran', 'Merci'],
        ['عافاك', 'afak', 'S’il vous plaît'],
        ['سمح ليا', 'smah lia', 'Excusez-moi'],
        ['إيه', 'iyèh', 'Oui'],
        ['لا', 'la', 'Non'],
        ['لاباس؟', 'labas', 'Comment ça va ?'],
        ['لاباس، الحمد لله', 'labas hamdoulah', 'Ça va, grâce à Dieu'],
        ['بسلامة', 'bslama', 'Au revoir'],
      ],
      astuce: 'La darija est l’arabe parlé au Maroc : plusieurs sons n’existent pas en français. Faites relire ces prononciations par un locuteur.',
    },
    {
      slug: 'se-presenter',
      titre: 'Se présenter',
      intro: 'Dire qui vous êtes et ce que vous ne comprenez pas.',
      phrases: [
        ['سميتي…', 'smiti', 'Je m’appelle…'],
        ['أنا فرنسي', 'ana fransaoui', 'Je suis français'],
        ['أنا من فرنسا', 'ana mn fransa', 'Je viens de France'],
        ['واش كتهضر الفرنسية؟', 'wach kathdar lfransiya', 'Parlez-vous français ?'],
        ['ما فهمتش', 'ma fhemtch', 'Je n’ai pas compris'],
        ['عاود، عافاك', 'awd afak', 'Répétez, s’il vous plaît'],
        ['هضر بشوية', 'hdar bchwiya', 'Parlez doucement'],
      ],
      astuce: 'Le français est très répandu au Maroc : « واش كتهضر الفرنسية؟ » vous ouvrira souvent la conversation.',
    },
    {
      slug: 'chiffres-prix-heure',
      titre: 'Chiffres et prix',
      intro: 'Pour comprendre un prix et compter votre argent.',
      phrases: [
        ['واحد', 'wahd', '1'],
        ['جوج', 'jouj', '2'],
        ['تلاتة', 'tlata', '3'],
        ['ربعة', 'rbaa', '4'],
        ['خمسة', 'khamsa', '5'],
        ['ستة', 'setta', '6'],
        ['سبعة', 'sbaa', '7'],
        ['تمنية', 'tmnya', '8'],
        ['تسعود', 'tsaoud', '9'],
        ['عشرة', 'achra', '10'],
        ['بشحال هادا؟', 'bchhal hada', 'Combien ça coûte ?'],
      ],
      astuce: 'Sur les marchés, le prix annoncé se négocie souvent : demandez « بشحال؟ » avant d’acheter.',
    },
    {
      slug: 'se-deplacer',
      titre: 'Se déplacer',
      intro: 'Demander son chemin et acheter un billet.',
      phrases: [
        ['فين كاين…؟', 'fin kayn', 'Où est… ?'],
        ['المحطة', 'lmahatta', 'La gare'],
        ['المطار', 'lmatar', 'L’aéroport'],
        ['ليسر', 'liser', 'À gauche'],
        ['ليمن', 'limne', 'À droite'],
        ['نيشان', 'nichane', 'Tout droit'],
      ],
      astuce: 'Pour un taxi, convenez du prix avant de monter ou vérifiez que le compteur est enclenché.',
    },
    {
      slug: 'restaurant-courses',
      titre: 'Restaurant et courses',
      intro: 'Commander, demander l’addition et faire vos courses.',
      phrases: [
        ['بغيت…', 'bghit', 'Je voudrais…'],
        ['قهوة', 'qahwa', 'Un café'],
        ['أتاي', 'atay', 'Du thé (à la menthe)'],
        ['الما', 'lma', 'De l’eau'],
        ['الحساب، عافاك', 'lhsab afak', 'L’addition, s’il vous plaît'],
      ],
      astuce: 'Le thé à la menthe (« أتاي ») s’offre aux visiteurs : c’est un geste d’hospitalité.',
    },
    {
      slug: 'urgences',
      titre: 'Urgences et phrases de survie',
      intro: 'En cas de problème, le français est compris dans de nombreuses situations.',
      phrases: [
        ['عاوني!', 'awni', 'Aidez-moi !'],
        ['بغيت الطبيب', 'bghit ttbib', 'Je veux un médecin'],
        ['فين كاينة الصيدلية؟', 'fin kayna sidaliya', 'Où est la pharmacie ?'],
      ],
      astuce: 'Les numéros d’urgence marocains n’ont pas été vérifiés ici : notez-les depuis la fiche officielle du ministère avant de partir.',
    },
  ],

  sourcesSupplementaires: [],
};
