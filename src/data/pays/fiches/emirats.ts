import type { PaysComplet } from '../types';
import { aDocumenter, cultureACompleter, diplo, paiementsACompleter } from '../aides';

// Le site du ministère utilise « emirats-arabes-unis » ; la page du guide s'appelle « emirats »
const D = diplo('emirats-arabes-unis');
const PDF_FICHE = 'https://www.diplomatie.gouv.fr/files/files/pdf/cav/%C3%89mirats%20arabes%20unis%20-%20Minist%C3%A8re%20de%20l%27Europe%20et%20des%20Affaires%20%C3%A9trang%C3%A8res.pdf';
const CYRIL_EAU = { label: 'Cyril Jarnias, vivre aux Émirats arabes unis : démarches administratives', url: 'https://www.cyriljarnias.com/?p=35555', nature: 'blog de conseil' };

export const emirats: PaysComplet = {
  complet: true,
  test: true,
  iso: 'ARE',
  slug: 'emirats',
  nom: 'Émirats arabes unis',
  article: 'les Émirats arabes unis',
  accroche: 'Un pays du Golfe où les lois, la fiscalité et le séjour diffèrent fortement de la France. La situation de sécurité régionale demande de consulter la fiche officielle avant toute décision. Fiche beta, à vérifier.',
  couleur: '#00732f',
  langue: { nom: 'arabe', code: 'ar-AE' },
  devise: 'dirham',
  conseilsVoyageurs: D.securite,
  verifie: '4 novembre 2026',

  mediasLocaux: [
    { nom: 'WAM (Emirates News Agency)', url: 'https://www.wam.ae', nature: 'agence de presse officielle', langue: 'arabe, anglais' },
    { nom: 'The National', url: 'https://www.thenationalnews.com', nature: 'journal en anglais (lien avec Abou Dabi, à confirmer)', langue: 'anglais' },
    { nom: 'Gulf News', url: 'https://gulfnews.com', nature: 'quotidien en anglais', langue: 'anglais' },
    { nom: 'Khaleej Times', url: 'https://www.khaleejtimes.com', nature: 'quotidien en anglais', langue: 'anglais' },
  ],

  rubriques: [
    {
      slug: 'voyager',
      titre: 'Voyager aux Émirats arabes unis',
      intro: 'Avant toute réservation, lisez la fiche officielle : le contexte de sécurité régional a conduit le ministère à des mises à jour fréquentes en 2026.',
      resume: 'Sécurité, entrée et lois locales.',
      icone: '✈️',
      sections: [
        {
          id: 'securite',
          titre: 'Sécurité et conseils officiels',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            {
              type: 'alerte',
              warn: true,
              titre: 'À vérifier avant toute décision',
              html: 'Un article de presse spécialisée du 7 avril 2026 indique que le ministère <strong>déconseille les Émirats arabes unis, sauf raison impérative</strong>. Je n’ai pas pu confirmer la version en vigueur de ce conseil : lisez la fiche officielle et ses mises à jour.',
            },
            {
              type: 'liste',
              items: [
                'La fiche du ministère (avril 2026) a signalé des <strong>alertes aux missiles et aux drones</strong> sur le territoire et recommande aux Français résidents de s’inscrire au registre consulaire, et à ceux de passage de s’inscrire sur le <strong>fil d’Ariane</strong>.',
                'La menace terroriste dans la région impose un surcroît de prudence et de vigilance.',
                '<strong>Accidents</strong> : des accidents graves sont signalés en buggy, en quad et en scooter des mers ; la prudence s’impose pour les activités nautiques.',
              ],
            },
          ],
          sources: [
            { label: 'Ministère de l’Europe et des Affaires étrangères, fiche Émirats arabes unis (sécurité)', url: D.securite, nature: 'source officielle' },
            { label: 'Ministère de l’Europe et des Affaires étrangères, fiche Émirats arabes unis (PDF)', url: PDF_FICHE, nature: 'source officielle' },
            { label: 'TourMaG, Émirats arabes unis déconseillés sauf raison impérative', url: 'https://www.tourmag.com/Les-Emirats-arabes-unis-deconseilles-sauf-raison-imperative_a131247.html', nature: 'presse spécialisée' },
          ],
        },
        {
          id: 'entree',
          titre: 'Entrée et formalités',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            { type: 'p', html: 'Un site spécialisé indique qu’un passeport et un <strong>visa</strong> sont nécessaires pour entrer, valable 30 jours : cela contredit l’idée d’un visa à l’arrivée de longue durée. Il mentionne aussi un examen médical obligatoire et un refus d’entrée possible pour certaines maladies. Rien de tout cela n’est confirmé par une source officielle : lisez la rubrique « Entrée et séjour » de la fiche.' },
          ],
          sources: [
            { label: 'Ministère de l’Europe et des Affaires étrangères, fiche Émirats arabes unis (entrée et séjour)', url: D.entree, nature: 'source officielle' },
            { label: 'Passport Health, conseils pour les Émirats arabes unis', url: 'https://passporthealthglobal.com/fr-ca/conseils-destination/emirats-arabes-unis', nature: 'site commercial' },
          ],
        },
        aDocumenter('Législation locale (alcool, drogues, réseaux sociaux, tenue)', 'Les lois locales diffèrent fortement de celles de la France et leur non-respect peut être sanctionné pénalement. Je n’ai pas trouvé la rubrique « Législation locale » de la fiche officielle dans cette recherche : lisez-la avant de partir.', 'lois'),
        aDocumenter('Argent, santé et téléphone', 'La monnaie est le dirham. Les usages (cartes, espèces, assurance, carte SIM) n’ont pas été vérifiés auprès de sources fiables.'),
      ],
    },
    {
      slug: 'vivre',
      titre: 'Vivre aux Émirats arabes unis',
      intro: 'Le statut de résident repose sur un visa électronique et la carte Emirates ID. Une assurance santé est obligatoire.',
      resume: 'Visa de résidence, Emirates ID et assurance.',
      icone: '🏠',
      sections: [
        {
          id: 'residence',
          titre: 'Résidence et Emirates ID',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            {
              type: 'liste',
              items: [
                'Le statut de résident est attesté par un <strong>visa électronique</strong> (parfois avec un cachet dans le passeport) et la carte <strong>Emirates ID</strong>.',
                'Un visa de résidence suppose en général une <strong>assurance santé</strong>, un examen médical et la demande d’Emirates ID. L’assurance serait obligatoire pour tous les nouveaux visas et renouvellements à compter de 2025 ; l’employeur doit normalement la fournir ou y contribuer.',
                'Sans Emirates ID, il est difficile d’accéder aux services bancaires, de louer un logement, de scolariser ses enfants ou d’obtenir une couverture santé.',
                'La résidence ordinaire d’un salarié du secteur privé serait valable <strong>deux ans, renouvelable</strong> : l’employeur organise permis de travail, entrée, médical et résidence.',
                'Le <strong>Golden Visa</strong> est un titre de 5 ou 10 ans pour investisseurs, entrepreneurs et profils très qualifiés. Le seuil d’investissement immobilier cité (2 millions de dirhams) varie selon les sources.',
              ],
            },
          ],
          sources: [
            CYRIL_EAU,
            { label: 'Le Petit Journal Dubaï, s’installer et vivre à Dubaï', url: 'https://lepetitjournal.com/dubai/communaute/installer-vivre-dubai-391772', nature: 'média pour les expatriés français' },
            { label: 'Shuraa, qu’est-ce que le visa d’or des EAU ?', url: 'https://www.shuraa.com/fr/what-is-the-uae-golden-visa/', nature: 'prestataire, intérêt commercial' },
            { label: 'Binayah, obtenir un visa de résidence à Dubaï', url: 'https://www.binayah.com/fr/how-to-get-residence-visa-in-dubai', nature: 'agence immobilière, intérêt commercial' },
          ],
          note: 'Aucune source officielle émiratie n’a été consultée : vérifiez auprès de l’ICP et de la GDRFA de l’émirat concerné.',
        },
        aDocumenter('Banque, logement, fiscalité et coût de la vie'),
      ],
    },
    {
      slug: 'travailler',
      titre: 'Travailler aux Émirats arabes unis',
      intro: 'Pour un salarié, l’employeur organise en général le permis de travail et la résidence.',
      resume: 'Permis de travail et rôle de l’employeur.',
      icone: '💼',
      sections: [
        {
          id: 'droit',
          titre: 'Le droit de travailler',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            { type: 'p', html: 'Pour un salarié du secteur privé, l’<strong>employeur</strong> organise le permis de travail, l’entrée ou le changement de statut, l’examen médical, l’Emirates ID et la résidence.' },
          ],
          sources: [CYRIL_EAU],
        },
        aDocumenter('Salaire minimum, impôts et recherche d’emploi'),
      ],
    },
    paiementsACompleter('le dirham'),
    {
      slug: 'langue-culture',
      titre: 'Langue et culture',
      intro: 'L’arabe est la langue officielle ; l’anglais est très utilisé dans les grandes villes. L’arabe s’écrit de droite à gauche.',
      resume: 'Arabe et prononciation.',
      icone: '🎭',
      sections: [
        {
          titre: 'Écrire et prononcer l’arabe',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            { type: 'p', html: 'L’arabe s’écrit de droite à gauche. Les leçons de ce guide donnent l’arabe standard le plus courant ; le dialecte du Golfe diffère. Les prononciations écrites à la française sont <strong>très approximatives</strong> : l’arabe a des sons (« ayn », « ghayn », consonnes emphatiques) que le français ne rend pas. Faites relire par un locuteur.' },
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
        ['مرحبا', 'marhaba', 'Bonjour / Salut'],
        ['السلام عليكم', 'assalamou alaykoum', 'Que la paix soit sur vous (salutation)'],
        ['صباح الخير', 'sabah al khayr', 'Bonjour (le matin)'],
        ['مساء الخير', 'massa al khayr', 'Bonsoir'],
        ['شكرا', 'choukran', 'Merci'],
        ['من فضلك', 'min fadlak', 'S’il vous plaît'],
        ['عفوا', 'afwan', 'Excusez-moi / De rien'],
        ['نعم', 'naam', 'Oui'],
        ['لا', 'la', 'Non'],
        ['كيف حالك؟', 'kayfa halak', 'Comment allez-vous ?'],
        ['بخير', 'bikhayr', 'Bien'],
        ['مع السلامة', 'maa assalama', 'Au revoir'],
      ],
      astuce: 'L’arabe s’écrit de droite à gauche. Faites relire ces prononciations par un locuteur : plusieurs sons n’existent pas en français.',
    },
    {
      slug: 'se-presenter',
      titre: 'Se présenter',
      intro: 'Dire qui vous êtes et ce que vous ne comprenez pas.',
      phrases: [
        ['اسمي…', 'ismi', 'Je m’appelle…'],
        ['تشرفنا', 'tacharrafna', 'Enchanté(e)'],
        ['أنا فرنسي', 'ana faransi', 'Je suis français'],
        ['أنا فرنسية', 'ana faransiyya', 'Je suis française'],
        ['أنا من فرنسا', 'ana min faransa', 'Je viens de France'],
        ['أتكلم القليل من العربية', 'atakallam alqalil min alarabiyya', 'Je parle un peu arabe'],
        ['هل تتكلم الإنجليزية؟', 'hal tatakallam alinjiliziyya', 'Parlez-vous anglais ?'],
        ['لا أفهم', 'la afham', 'Je ne comprends pas'],
        ['ببطء من فضلك', 'bibout min fadlak', 'Lentement, s’il vous plaît'],
      ],
      astuce: 'Préparez « اسمي… » avec votre prénom et répétez-le à voix haute.',
    },
    {
      slug: 'chiffres-prix-heure',
      titre: 'Chiffres et prix',
      intro: 'Pour comprendre un prix et compter votre argent.',
      phrases: [
        ['واحد', 'wahid', '1'],
        ['اثنان', 'ithnan', '2'],
        ['ثلاثة', 'thalatha', '3'],
        ['أربعة', 'arbaa', '4'],
        ['خمسة', 'khamsa', '5'],
        ['ستة', 'sitta', '6'],
        ['سبعة', 'sabaa', '7'],
        ['ثمانية', 'thamaniya', '8'],
        ['تسعة', 'tissaa', '9'],
        ['عشرة', 'achara', '10'],
        ['بكم هذا؟', 'bikam hadha', 'Combien ça coûte ?'],
        ['كم الساعة؟', 'kam assaa', 'Quelle heure est-il ?'],
      ],
      astuce: 'Les chiffres arabes d’usage courant (٠١٢٣٤٥٦٧٨٩) diffèrent de ceux que nous employons : les prix sont souvent aussi écrits en chiffres latins.',
    },
    {
      slug: 'se-deplacer',
      titre: 'Se déplacer',
      intro: 'Demander son chemin et acheter un billet.',
      phrases: [
        ['أين…؟', 'ayna', 'Où est… ?'],
        ['محطة', 'mahatta', 'La station'],
        ['المطار', 'almatar', 'L’aéroport'],
        ['موقف الحافلة', 'mawqif alhafila', 'L’arrêt de bus'],
        ['تذكرة', 'tadhkira', 'Un billet'],
        ['يسار', 'yasar', 'À gauche'],
        ['يمين', 'yamin', 'À droite'],
        ['على طول', 'ala toul', 'Tout droit'],
      ],
      astuce: 'Montrez l’adresse écrite sur votre téléphone au chauffeur : c’est souvent plus sûr que de la dire.',
    },
    {
      slug: 'restaurant-courses',
      titre: 'Restaurant et courses',
      intro: 'Commander, demander l’addition et faire vos courses.',
      phrases: [
        ['طاولة لشخصين', 'tawila lichakhsayn', 'Une table pour deux'],
        ['قائمة الطعام من فضلك', 'qaimat attaam min fadlak', 'Le menu, s’il vous plaît'],
        ['أريد…', 'ouridou', 'Je voudrais…'],
        ['قهوة', 'qahwa', 'Un café'],
        ['ماء', 'maa', 'De l’eau'],
        ['شاي', 'chay', 'Du thé'],
        ['الحساب من فضلك', 'alhisab min fadlak', 'L’addition, s’il vous plaît'],
      ],
      astuce: 'Les lois locales encadrent la vente et la consommation d’alcool : renseignez-vous avant de commander.',
    },
    {
      slug: 'urgences',
      titre: 'Urgences et phrases de survie',
      intro: 'Les phrases à connaître en cas de problème.',
      phrases: [
        ['النجدة!', 'annajda', 'Au secours !'],
        ['اتصل بالإسعاف', 'ittasil bil isaf', 'Appelez une ambulance'],
        ['اتصل بالشرطة', 'ittasil bichourta', 'Appelez la police'],
        ['أحتاج إلى طبيب', 'ahtaj ila tabib', 'J’ai besoin d’un médecin'],
        ['عندي ألم', 'indi alam', 'J’ai mal'],
        ['أنا تائه', 'ana taih', 'Je suis perdu'],
        ['أين الصيدلية؟', 'ayna assaydaliyya', 'Où est la pharmacie ?'],
      ],
      astuce: 'Les numéros d’urgence émiratis n’ont pas été vérifiés ici : notez-les depuis la fiche officielle du ministère avant de partir.',
    },
  ],

  sourcesSupplementaires: [],
};
