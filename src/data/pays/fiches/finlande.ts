import type { PaysComplet } from '../types';

const DIPLO_SECURITE = 'https://www.diplomatie.gouv.fr/fr/information-par-pays/finlande/conseils-aux-voyageurs-securite';
const DIPLO_ENTREE = 'https://www.diplomatie.gouv.fr/fr/information-par-pays/finlande/conseils-aux-voyageurs-entree-sejour';

export const finlande: PaysComplet = {
  complet: true,
  iso: 'FIN',
  slug: 'finlande',
  nom: 'Finlande',
  article: 'la Finlande',
  accroche: 'Préparer un séjour, comprendre les démarches d’installation et apprendre les premiers mots de finnois, avec des sources citées et des points à confirmer clairement signalés.',
  couleur: '#003580',
  langue: { nom: 'finnois', code: 'fi-FI' },
  devise: 'euro',
  conseilsVoyageurs: DIPLO_SECURITE,
  verifie: '4 novembre 2026',

  rubriques: [
    {
      slug: 'voyager',
      titre: 'Voyager en Finlande',
      intro: 'La Finlande est dans l’Union européenne et l’espace Schengen : l’entrée est simple pour un Français. Voici l’essentiel avant de partir.',
      resume: 'Entrée, sécurité, santé, argent et téléphone avant le départ.',
      icone: '✈️',
      sections: [
        {
          id: 'securite',
          titre: 'Sécurité et conseils officiels',
          badge: { type: 'ok', texte: 'Vérifié' },
          blocs: [
            {
              type: 'liste',
              items: [
                '<strong>Vols à la tire</strong> : des cas sont signalés aux abords des lieux très fréquentés du centre d’Helsinki (gares, sites touristiques). La vigilance habituelle suffit.',
                '<strong>Terrorisme</strong> : la fiche officielle rappelle un seul attentat, à Turku en 2017.',
                '<strong>Feux de forêt</strong> : il est conseillé de télécharger l’application <strong>Suomi 112</strong> des services d’urgence.',
                '<strong>Motoneige</strong> : elle cause chaque année des accidents graves, parfois suivis d’un rapatriement sanitaire. Respectez les règles de sécurité de base.',
              ],
            },
          ],
          sources: [{ label: 'Ministère de l’Europe et des Affaires étrangères, fiche Finlande (sécurité)', url: DIPLO_SECURITE, nature: 'source officielle' }],
        },
        {
          id: 'entree',
          titre: 'Entrée et formalités',
          badge: { type: 'ok', texte: 'Vérifié' },
          blocs: [
            {
              type: 'liste',
              items: [
                'Un ressortissant français peut entrer avec un <strong>passeport ou une carte nationale d’identité en cours de validité</strong> : la Finlande est membre de l’Union européenne, aucun visa n’est nécessaire.',
                'Pour un séjour de plus de trois mois, des démarches d’enregistrement existent : voir la page <em>Vivre</em>.',
              ],
            },
            {
              type: 'alerte',
              titre: 'Contrôles aux frontières',
              warn: true,
              html: 'Une compagnie aérienne rappelle que les pays nordiques peuvent rétablir sans préavis des contrôles aux frontières intérieures. Gardez toujours une pièce d’identité valide sur vous, même pour aller en Suède ou en Estonie.',
            },
            {
              type: 'p',
              html: '<strong>Carte d’identité périmée ou prolongée</strong> : je n’ai pas trouvé de position officielle finlandaise. Contactez l’ambassade de France à Helsinki (Itäinen Puistotie 13, tél. +358 9 618 780) avant de partir.',
            },
          ],
          sources: [
            { label: 'Ministère de l’Europe et des Affaires étrangères, fiche Finlande (entrée et séjour)', url: DIPLO_ENTREE, nature: 'source officielle' },
            { label: 'Finnair, documents de voyage', url: 'https://www.finnair.com/ch-fr/documents-de-voyage', nature: 'compagnie aérienne' },
          ],
        },
        {
          id: 'transports',
          titre: 'Y aller et se déplacer',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            {
              type: 'p',
              html: 'Les principales portes d’entrée sont l’aéroport d’Helsinki-Vantaa, les trains longue distance (opérateur VR) et les ferries depuis Tallinn et Stockholm. Je n’ai pas vérifié les horaires ni les prix : consultez les sites des compagnies et de l’opérateur ferroviaire avant de réserver.',
            },
          ],
          note: 'Section à compléter avec des sources officielles (transports publics d’Helsinki, VR, compagnies de ferry).',
        },
        {
          id: 'argent',
          titre: 'Argent et paiement',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            {
              type: 'liste',
              items: [
                'La monnaie est l’<strong>euro</strong> : vos cartes françaises fonctionnent et il n’y a pas de conversion à faire.',
                'Le paiement <strong>sans contact par carte</strong> est la norme. Les espèces sont acceptées mais ne sont pas attendues.',
              ],
            },
            { type: 'p', html: 'Détails sur la page <em>Paiements</em>.' },
          ],
          sources: [{ label: 'OP Financial Group, usage des espèces et paiements mobiles', url: 'https://www.op-media.fi/en/op-uusimaa-en/cash-usage-and-mobile-payments-in-finland/', nature: 'banque finlandaise' }],
        },
        {
          id: 'sante',
          titre: 'Assurance et santé',
          badge: { type: 'ok', texte: 'Vérifié' },
          blocs: [
            {
              type: 'liste',
              items: [
                'Pour un séjour temporaire, la <strong>carte européenne d’assurance maladie (CEAM)</strong> donne droit aux soins médicalement nécessaires.',
                'Sans résidence enregistrée en Finlande, certains soins hospitaliers peuvent coûter cher : une assurance voyage complémentaire reste prudente.',
                'Le numéro d’urgence est le <strong>112</strong>.',
              ],
            },
          ],
          sources: [
            { label: 'Kela, soins médicaux en Finlande', url: 'https://kela.fi/from-other-countries-to-finland-medical-care', nature: 'organisme officiel' },
            { label: 'Kela, services de santé à l’étranger', url: 'https://www.eu-healthcare.fi/health-services-abroad/moving-abroad/', nature: 'organisme officiel' },
          ],
        },
        {
          id: 'communications',
          titre: 'Téléphone et internet',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            {
              type: 'liste',
              items: [
                'Dans l’Union européenne, votre forfait français est en principe utilisable comme chez vous (« roaming »). Vérifiez les limites de données avec votre opérateur.',
                'Pour un séjour plus long, les trois opérateurs (DNA, Elisa, Telia) proposent des cartes prépayées et des eSIM. Les points de vente varient selon les sources (boutiques ou kiosques R-kioski) : prévoyez votre passeport par précaution.',
              ],
            },
          ],
          sources: [
            { label: 'Roafly, carte SIM touristique en Finlande', url: 'https://www.roafly.com/blog/finland-tourist-sim-card', nature: 'vendeur d’eSIM, intérêt commercial' },
            { label: 'Too Many Adapters, acheter une SIM en Finlande', url: 'https://toomanyadapters.com/buying-sim-card-finland/', nature: 'blog de voyage' },
          ],
          note: 'Les prix et les règles d’enregistrement varient selon les sources : confirmez auprès de l’opérateur.',
        },
        {
          titre: 'Checklist avant le départ',
          blocs: [
            {
              type: 'liste',
              items: [
                'Passeport ou carte d’identité en cours de validité.',
                'Carte européenne d’assurance maladie (CEAM) et assurance voyage.',
                'Application Suomi 112 installée.',
                'Carte bancaire sans contact et un peu de liquide.',
                'Proche informé de votre itinéraire et de vos dates.',
              ],
            },
          ],
        },
      ],
    },
    {
      slug: 'vivre',
      titre: 'Vivre en Finlande',
      intro: 'Pour un ressortissant de l’Union européenne, s’installer est simple sur le papier, mais plusieurs démarches s’enchaînent : enregistrement, numéro d’identité, commune de résidence, banque.',
      resume: 'Enregistrement, santé, banque et premiers mois.',
      icone: '🏠',
      sections: [
        {
          id: 'enregistrement',
          titre: 'Séjour et enregistrement',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            {
              type: 'p',
              html: 'Un citoyen de l’Union européenne n’a pas besoin de titre de séjour, mais doit <strong>enregistrer son droit de séjour</strong> s’il reste plus de trois mois. Les guides d’universités décrivent deux étapes :',
            },
            {
              type: 'tableau',
              entetes: ['Étape', 'Organisme', 'Principe'],
              lignes: [
                ['1. Droit de séjour', 'Service finlandais de l’immigration (Migri)', 'Enregistrement dans les trois mois suivant l’arrivée. Le numéro d’identité personnel est en général attribué à cette occasion.'],
                ['2. Commune de résidence', 'Agence des données (DVV)', 'Démarche distincte : inscription de l’adresse et, au besoin, du numéro d’identité. Présentez-vous avec un passeport ou une carte d’identité valide.'],
              ],
            },
            { type: 'p', html: 'Les conditions exactes pour obtenir une commune de résidence et les frais ne sont pas détaillés ici : vérifiez-les sur les sites officiels avant de vous déplacer.' },
          ],
          sources: [
            { label: 'Aalto University, formalités à l’arrivée pour les citoyens de l’UE (juin 2026)', url: 'https://www.aalto.fi/sites/default/files/2026-06/EU-citizen-Formalities-when-arriving-in-Finland_June_2026.pdf', nature: 'université, pas une page officielle' },
            { label: 'Aalto University, s’enregistrer auprès des autorités et ouvrir un compte', url: 'https://www.aalto.fi/en/international-students/registering-with-the-authorities-and-opening-a-bank-account', nature: 'université' },
          ],
          note: 'Aucune page officielle de Migri ou du DVV n’a pu être consultée lors de cette recherche.',
        },
        {
          id: 'sante',
          titre: 'Santé et carte Kela',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            {
              type: 'liste',
              items: [
                'Une fois la <strong>commune de résidence</strong> enregistrée par le DVV, vous pouvez utiliser les services de santé publics comme les habitants. L’enregistrement n’est pas rétroactif.',
                'Si vous vous installez durablement, vous êtes couvert par l’assurance maladie finlandaise et recevez une <strong>carte Kela</strong> par courrier après votre demande.',
                'Avant cet enregistrement, la CEAM couvre les soins d’urgence et médicalement nécessaires. Certaines universités recommandent une assurance privée pour la période d’arrivée.',
              ],
            },
          ],
          sources: [
            { label: 'Kela, s’installer en Finlande', url: 'https://www.kela.fi/moving-to-finland', nature: 'organisme officiel' },
            { label: 'Suomi.fi, aides et services de santé', url: 'https://www.suomi.fi/guides/work-in-finland/when-you-arrive/support-and-health-services', nature: 'portail officiel' },
          ],
          note: 'Les formulaires et délais exacts ne sont pas repris ici : consultez le site de Kela.',
        },
        {
          id: 'banque',
          titre: 'Banque et numéro d’identité',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            {
              type: 'liste',
              items: [
                'Ouvrir un compte bancaire demande en général le <strong>numéro d’identité finlandais</strong> et l’enregistrement de votre adresse au DVV.',
                'Des applications de paiement comme MobilePay sont reliées à un compte bancaire finlandais.',
                'L’identification bancaire forte, très utilisée pour les services publics, dépend en pratique d’un compte finlandais : renseignez-vous auprès d’une banque (par exemple Nordea, OP ou Danske Bank).',
              ],
            },
          ],
          sources: [
            { label: 'Aalto University, ouvrir un compte bancaire', url: 'https://www.aalto.fi/en/international-students/registering-with-the-authorities-and-opening-a-bank-account', nature: 'université' },
            { label: 'OP Financial Group, espèces et paiements mobiles', url: 'https://www.op-media.fi/en/op-uusimaa-en/cash-usage-and-mobile-payments-in-finland/', nature: 'banque finlandaise' },
          ],
        },
        {
          id: 'logement',
          titre: 'Logement et coût de la vie',
          badge: { type: 'warn', texte: 'À documenter' },
          blocs: [
            {
              type: 'alerte',
              warn: true,
              titre: 'Section à compléter',
              html: 'Je n’ai pas encore de source fiable sur la recherche de logement et le coût de la vie en Finlande. Plutôt que d’inventer des chiffres, cette section reste vide jusqu’à une vérification.',
            },
          ],
        },
      ],
    },
    {
      slug: 'travailler',
      titre: 'Travailler en Finlande',
      intro: 'En tant que citoyen de l’Union européenne, vous pouvez travailler sans permis de travail. Quelques démarches restent à connaître.',
      resume: 'Droit de travailler, salaires et impôts.',
      icone: '💼',
      sections: [
        {
          id: 'droit',
          titre: 'Le droit de travailler',
          badge: { type: 'ok', texte: 'Vérifié' },
          blocs: [
            {
              type: 'p',
              html: 'Les citoyens de l’Union européenne et de l’Espace économique européen ont un <strong>droit illimité de travailler</strong> en Finlande, sans permis de séjour. Ils doivent néanmoins enregistrer leur droit de séjour (voir <em>Vivre</em>) ; le portail officiel précise qu’ils peuvent commencer à travailler avant la décision d’enregistrement.',
            },
          ],
          sources: [{ label: 'Suomi.fi, quand vous commencez à travailler', url: 'https://www.suomi.fi/guides/work-in-finland/when-you-arrive/when-you-start-working', nature: 'portail officiel' }],
        },
        {
          id: 'salaire',
          titre: 'Salaires et conventions collectives',
          badge: { type: 'ok', texte: 'Vérifié' },
          blocs: [
            {
              type: 'p',
              html: 'La Finlande n’a <strong>pas de salaire minimum légal</strong>. Les minimums viennent des conventions collectives de chaque secteur, souvent étendues par la loi à tous les salariés du secteur. Vérifiez la convention applicable à votre métier avant d’accepter une offre.',
            },
          ],
          sources: [{ label: 'Eurofound, salaire minimum en Finlande', url: 'https://www.eurofound.europa.eu/en/countries/finland/minimum-wage', nature: 'agence de l’Union européenne' }],
        },
        {
          id: 'impots',
          titre: 'Impôts : la carte d’imposition',
          badge: { type: 'ok', texte: 'Vérifié' },
          blocs: [
            {
              type: 'liste',
              items: [
                'La <strong>carte d’imposition (verokortti)</strong> indique à votre employeur le taux de retenue à appliquer à votre salaire. Elle est nécessaire pour être payé.',
                'Elle se demande à un point de service de l’administration fiscale ou en ligne (MyTax), avec une estimation de vos revenus de l’année et votre numéro d’identité finlandais.',
              ],
            },
            { type: 'alerte', warn: true, titre: 'Conseil fiscal', html: 'Ce guide n’est pas un conseil fiscal. Vérifiez votre situation (résidence fiscale, convention fiscale entre la France et la Finlande) avec un conseiller spécialisé.' },
          ],
          sources: [{ label: 'InfoFinland, carte d’imposition', url: 'https://infofinland.fi/work-and-enterprise/taxation/tax-card', nature: 'portail officiel d’information' }],
        },
        {
          id: 'emploi',
          titre: 'Chercher un emploi',
          badge: { type: 'warn', texte: 'À documenter' },
          blocs: [
            {
              type: 'alerte',
              warn: true,
              titre: 'Section à compléter',
              html: 'Les services publics de l’emploi (TE) et les sites d’offres n’ont pas été vérifiés lors de cette recherche. Section à compléter avec des sources officielles.',
            },
          ],
        },
      ],
    },
    {
      slug: 'paiements',
      titre: 'Moyens de paiement',
      intro: 'La Finlande utilise l’euro et le paiement par carte est généralisé : vos cartes françaises suffisent pour un séjour.',
      resume: 'Cartes, espèces et paiements mobiles.',
      icone: '💳',
      sections: [
        {
          titre: 'Cartes et sans contact',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            {
              type: 'liste',
              items: [
                'Les cartes de débit sont le moyen de paiement le plus courant et le <strong>sans contact</strong> est la norme chez les commerçants.',
                'Les grandes banques (Nordea, OP, Danske Bank) émettent des cartes sans contact. Vos cartes françaises Visa et Mastercard fonctionnent dans l’ensemble.',
              ],
            },
          ],
          sources: [
            { label: 'OP Financial Group, usage des espèces et paiements mobiles', url: 'https://www.op-media.fi/en/op-uusimaa-en/cash-usage-and-mobile-payments-in-finland/', nature: 'banque finlandaise' },
            { label: 'Stripe, paiements en Finlande', url: 'https://stripe.com/en-fi/resources/more/payments-in-finland-an-in-depth-guide', nature: 'prestataire de paiement, intérêt commercial' },
          ],
        },
        {
          titre: 'Espèces',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            {
              type: 'liste',
              items: [
                'Les espèces sont acceptées, mais on n’en attend pas : emportez-en peu.',
                'De gros dépôts en espèces sont soumis à des règles plus strictes et demandent de justifier leur origine.',
              ],
            },
          ],
          sources: [{ label: 'OP Financial Group, usage des espèces et paiements mobiles', url: 'https://www.op-media.fi/en/op-uusimaa-en/cash-usage-and-mobile-payments-in-finland/', nature: 'banque finlandaise' }],
        },
        {
          titre: 'Paiements mobiles',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            {
              type: 'p',
              html: 'MobilePay est très répandu, mais il est lié à un compte bancaire finlandais : pour un séjour court, payer par carte suffit. Une évolution annoncée à partir de septembre 2025 devrait permettre d’y ajouter plus de comptes ; je n’ai pas vérifié les conditions pour les non-résidents.',
            },
          ],
          sources: [{ label: 'OP Financial Group, usage des espèces et paiements mobiles', url: 'https://www.op-media.fi/en/op-uusimaa-en/cash-usage-and-mobile-payments-in-finland/', nature: 'banque finlandaise' }],
        },
        {
          titre: 'Ouvrir un compte en Finlande',
          blocs: [{ type: 'p', html: 'Les conditions (numéro d’identité, adresse enregistrée) sont décrites sur la page <em>Vivre</em>, section « Banque et numéro d’identité ».' }],
        },
        {
          titre: 'Partenaires',
          badge: { type: 'warn', texte: 'Bientôt' },
          blocs: [{ type: 'p', html: 'Des liens partenaires pourront être ajoutés plus tard. Ils seront <strong>clairement signalés comme affiliés</strong> et ne remplacent pas votre propre vérification.' }],
        },
      ],
    },
    {
      slug: 'langue-culture',
      titre: 'Langue et culture',
      intro: 'Quelques repères pour vous faire comprendre. Les leçons audio de finnois sont dans la rubrique Leçons.',
      resume: 'Langues, prononciation et premiers repères.',
      icone: '🎭',
      sections: [
        {
          titre: 'Les langues',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            {
              type: 'liste',
              items: [
                'Le <strong>finnois</strong> et le <strong>suédois</strong> sont les deux langues officielles. Le finnois est la langue de la grande majorité des habitants.',
                'Le finnois s’écrit avec l’alphabet latin, ce qui facilite la lecture des panneaux.',
              ],
            },
          ],
          note: 'Aucune source officielle n’a été consultée pour cette section.',
        },
        {
          titre: 'Prononciation : trois repères',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            {
              type: 'tableau',
              entetes: ['Lettre', 'Se prononce', 'Exemple'],
              lignes: [
                ['y', 'comme le « u » français', 'hyvä : « huvè »'],
                ['ä', 'comme « è »', 'päivä : « païvè »'],
                ['ö', 'comme « eu »', 'työ : « tueu »'],
              ],
            },
            { type: 'p', html: 'L’accent tombe en général sur la <strong>première syllabe</strong>, et les voyelles longues (écrites doubles) se tiennent plus longtemps. Les prononciations de ce guide sont écrites à la française et restent approximatives.' },
          ],
        },
        {
          titre: 'Culture et usages',
          badge: { type: 'warn', texte: 'À documenter' },
          blocs: [
            {
              type: 'alerte',
              warn: true,
              titre: 'Section à compléter',
              html: 'Les usages (sauna, ponctualité, invitations) n’ont pas été vérifiés auprès de sources fiables pour ce guide. Section à compléter.',
            },
          ],
        },
      ],
    },
  ],

  lecons: [
    {
      slug: 'salutations',
      titre: 'Salutations et politesse',
      intro: 'Les mots à utiliser dès que vous parlez à quelqu’un. Un simple « Hei » convient dans presque toutes les situations.',
      phrases: [
        ['Hei', 'hé', 'Bonjour / Salut'],
        ['Moi', 'moï', 'Salut'],
        ['Hyvää huomenta', 'huvèè houoménta', 'Bonjour (le matin)'],
        ['Hyvää päivää', 'huvèè païvèè', 'Bonjour (dans la journée)'],
        ['Hyvää iltaa', 'huvèè iltaa', 'Bonsoir'],
        ['Kiitos', 'kiitos', 'Merci'],
        ['Ole hyvä', 'olé huvè', 'S’il vous plaît / Je vous en prie'],
        ['Anteeksi', 'antéksi', 'Excusez-moi'],
        ['Kyllä', 'kullè', 'Oui'],
        ['Ei', 'éï', 'Non'],
        ['Mitä kuuluu?', 'mitè kouulou', 'Comment ça va ?'],
        ['Hyvää, kiitos', 'huvèè kiitos', 'Bien, merci'],
        ['Näkemiin', 'nèkémiin', 'Au revoir'],
      ],
      astuce: 'Le « y » finnois se prononce comme le « u » français, et « ä » comme « è ». Dites « Kiitos » souvent : c’est le mot de politesse de base.',
    },
    {
      slug: 'se-presenter',
      titre: 'Se présenter',
      intro: 'Dire qui vous êtes et surtout dire ce que vous ne comprenez pas : les phrases les plus utiles du débutant.',
      phrases: [
        ['Minun nimeni on…', 'minoun nimèni on', 'Je m’appelle…'],
        ['Hauska tavata', 'haouska tavata', 'Enchanté(e)'],
        ['Olen ranskalainen', 'olèn ranskalaïnèn', 'Je suis français(e)'],
        ['Tulen Ranskasta', 'toulèn ranskasta', 'Je viens de France'],
        ['Puhun vähän suomea', 'pouhoun vèhèn souoméa', 'Je parle un peu finnois'],
        ['Puhutteko englantia?', 'pouhoutteko englantia', 'Parlez-vous anglais ?'],
        ['En ymmärrä', 'èn ummèrrè', 'Je ne comprends pas'],
        ['Voisitteko toistaa?', 'voïsitteko toïstaa', 'Pouvez-vous répéter ?'],
        ['Voisitteko puhua hitaammin?', 'voïsitteko pouhoua hitaammin', 'Pouvez-vous parler plus lentement ?'],
      ],
      astuce: 'Préparez « Minun nimeni on… » avec votre prénom et répétez-le à voix haute.',
    },
    {
      slug: 'chiffres-prix-heure',
      titre: 'Chiffres, prix et heure',
      intro: 'Pour comprendre un prix, demander l’heure ou compter votre argent.',
      phrases: [
        ['Yksi', 'uksi', '1'],
        ['Kaksi', 'kaksi', '2'],
        ['Kolme', 'kolmé', '3'],
        ['Neljä', 'nélyè', '4'],
        ['Viisi', 'viisi', '5'],
        ['Kuusi', 'kouusi', '6'],
        ['Seitsemän', 'séïtsèmèn', '7'],
        ['Kahdeksan', 'kahdèksan', '8'],
        ['Yhdeksän', 'uhdèksèn', '9'],
        ['Kymmenen', 'kumménèn', '10'],
        ['Paljonko tämä maksaa?', 'palyonko tèmè maksaa', 'Combien ça coûte ?'],
        ['Mitä kello on?', 'mitè kéllo on', 'Quelle heure est-il ?'],
        ['Voinko maksaa kortilla?', 'voïnko maksaa kortilla', 'Puis-je payer par carte ?'],
      ],
      astuce: 'Les prix sont en euros et le paiement par carte sans contact est la norme : « kortilla » (par carte) est la phrase à connaître.',
    },
    {
      slug: 'se-deplacer',
      titre: 'Se déplacer',
      intro: 'Demander son chemin et acheter un billet.',
      phrases: [
        ['Missä on…?', 'missè on', 'Où est… ?'],
        ['Rautatieasema', 'raoutatiéaséma', 'La gare'],
        ['Lentokenttä', 'léntokènttè', 'L’aéroport'],
        ['Pysäkki', 'pusèkki', 'L’arrêt de bus'],
        ['Lippu', 'lippou', 'Un billet'],
        ['Yksi lippu, kiitos', 'uksi lippou kiitos', 'Un billet, s’il vous plaît'],
        ['Vasemmalle', 'vasèmmallé', 'À gauche'],
        ['Oikealle', 'oïkéallé', 'À droite'],
        ['Suoraan', 'souoraan', 'Tout droit'],
        ['Milloin seuraava juna lähtee?', 'milloïn séouraava youna lèhtéé', 'Quand part le prochain train ?'],
      ],
      astuce: 'Dites « Missä on… ? » puis montrez l’adresse écrite sur votre téléphone.',
    },
    {
      slug: 'restaurant-courses',
      titre: 'Restaurant et courses',
      intro: 'Commander, demander l’addition et faire vos courses.',
      phrases: [
        ['Pöytä kahdelle, kiitos', 'peuutè kahdéllé kiitos', 'Une table pour deux, s’il vous plaît'],
        ['Saisinko ruokalistan?', 'saïsinko rouokalistan', 'Puis-je avoir le menu ?'],
        ['Haluaisin…', 'halouaïsin', 'Je voudrais…'],
        ['Kahvi', 'kahvi', 'Un café'],
        ['Vesi', 'vési', 'De l’eau'],
        ['Olut', 'olout', 'Une bière'],
        ['Onko tämä kasvisruokaa?', 'onko tèmè kasvisrouokaa', 'Est-ce un plat végétarien ?'],
        ['Lasku, kiitos', 'lasku kiitos', 'L’addition, s’il vous plaît'],
      ],
      astuce: 'Les mots finnois changent de terminaison selon la phrase : mémorisez les phrases entières plutôt que les mots isolés.',
    },
    {
      slug: 'urgences',
      titre: 'Urgences et phrases de survie',
      intro: 'Les phrases à connaître en cas de problème.',
      phrases: [
        ['Apua!', 'apoua', 'Au secours !'],
        ['Soittakaa ambulanssi!', 'soïttakaa amboulanssi', 'Appelez une ambulance !'],
        ['Soittakaa poliisille!', 'soïttakaa poliisillé', 'Appelez la police !'],
        ['Tarvitsen lääkärin', 'tarvitsèn lèèkèrin', 'J’ai besoin d’un médecin'],
        ['Minua sattuu', 'minoua sattou', 'J’ai mal'],
        ['Olen eksyksissä', 'olèn èksuksissè', 'Je suis perdu(e)'],
        ['Missä on apteekki?', 'missè on aptéékki', 'Où est la pharmacie ?'],
        ['Hätänumero on sata kaksitoista', 'hètènoumero on sata kaksitoïsta', 'Le numéro d’urgence est le 112'],
      ],
      astuce: 'Le 112 est le numéro d’urgence : notez-le, et installez l’application Suomi 112 recommandée par le ministère français.',
    },
  ],

  sourcesSupplementaires: [],

  mediasLocaux: [
    { nom: 'Yle', url: 'https://yle.fi', nature: 'service public de radio-télévision', langue: 'finnois, suédois' },
    { nom: 'Helsingin Sanomat', url: 'https://www.hs.fi', nature: 'quotidien privé', langue: 'finnois' },
    { nom: 'Ilta-Sanomat', url: 'https://www.is.fi', nature: 'quotidien populaire privé', langue: 'finnois' },
    { nom: 'Hufvudstadsbladet', url: 'https://www.hbl.fi', nature: 'quotidien privé suédophone', langue: 'suédois' },
  ],
};
