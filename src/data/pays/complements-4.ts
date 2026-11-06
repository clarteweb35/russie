import { EXPATS, FORUM, GUIDE, PRESSE, PRO, src } from './complements';
import type { Complement } from './complements';

// Belgique, Suisse, Croatie, Thaïlande (recherche du 6 novembre 2026)
export const LOT4: Record<string, Complement> = {
  BEL: {
    paiements: {
      items: [
        'Le paiement par carte est devenu majoritaire. Les cartes Visa et Mastercard françaises sont en général acceptées, mais certains commerces ne prennent que Bancontact (carte de débit belge) : gardez de petites coupures pour les friteries, marchés et cafés.',
        'En espèces, le total est arrondi au multiple de 5 centimes ; pas d’arrondi en carte, y compris sans contact.',
        'Les distributeurs en zone touristique peuvent coûter cher : préférez un distributeur de banque. Beaucoup de banques belges ne gèrent plus d’espèces au guichet.',
      ],
      alerte: 'Plusieurs chiffres cités datent de 2022. Vérifiez les frais de retrait de votre banque.',
      sources: [
        src('Le Mag Voyage : monnaie en Belgique', 'https://www.lemagvoyage.fr/belgique/monnaie-en-belgique/', GUIDE),
        src('Le Petit Journal Belgique : le système Bancontact', 'https://lepetitjournal.com/belgique/vivre-belgique/bancontact-systeme-paiement-belge', PRESSE),
        src('Routard (forum) : problème avec la carte Visa en Belgique', 'https://www.routard.com/forums/t/probleme-avecla-carte-visa-en-belgique/11758', FORUM),
      ],
    },
    banque: {
      items: [
        'Les sources trouvées ne détaillent ni l’inscription à la commune ni les pièces demandées pour ouvrir un compte : renseignez-vous auprès de la commune de résidence et de la banque choisie.',
        'Un compte bloqué à votre nom sert pour la garantie locative ; son ouverture est gratuite et la banque ne peut pas la refuser, d’après une association de consommateurs.',
      ],
      alerte: 'Section partielle : source privée unique sur le compte bloqué.',
      sources: [
        src('Test-Achats : frais de Bancontact (consommateurs)', 'https://www.test-achats.be/argent/comptes-a-vue/news/frais-de-bancontact', 'association de consommateurs'),
        src('Callmepower : garantie locative en Belgique', 'https://callmepower.be/fr/demenagement/contrat-bail/garantie-locative', PRO),
      ],
    },
    logement: {
      items: [
        'La garantie locative n’est pas obligatoire ; les règles relèvent des régions (Bruxelles, Wallonie, Flandre), d’où des différences entre sources.',
        'Sous forme de compte bloqué, elle ne peut pas dépasser deux mois de loyer ; pour une garantie bancaire, jusqu’à trois mois. Le compte est au nom du locataire et ne se débloque qu’avec l’accord des deux parties ou une décision de justice.',
        'Le locataire peut aussi recourir à une garantie bancaire payée par mensualités, ou à une garantie via le CPAS.',
      ],
      alerte: 'Les sources divergent sur la Flandre : vérifiez la règle de la région où se situe le logement.',
      sources: [
        src('KBC Brussels : à combien de mois de loyer s’élèvera votre garantie locative ?', 'https://www.kbcbrussels.be/particuliers/fr/epargner/comptes-epargne/huurwaarborg-hoeveel-maanden.html', 'banque (source commerciale)'),
        src('Forum for the Future : garantie locative selon les régions', 'https://blog.forumforthefuture.be/fr/article/garantie-locative-en-belgique-pour-votre-logement-quelles-sont-les-regles-selon-les-regions-bruxelles-wallonie-flandre-/24221', PRO),
        src('Financité : la garantie locative, premier obstacle à l’accès au logement (association)', 'https://www.financite.be/sites/default/files/references/images/la_garantie_locative_premier_obstacle_a_lacces_au_logement.pdf', 'association'),
      ],
    },
  },
  CHE: {
    paiements: {
      items: [
        'La monnaie est le franc suisse (CHF). La carte bancaire fonctionne très bien ; un peu d’espèces sert de secours (marchés, buvettes, établissements indépendants).',
        'Les euros sont parfois acceptés, mais le taux inclut une marge importante et la monnaie est rendue en francs : payez en CHF.',
        'TWINT, l’application de paiement suisse, est liée à un compte suisse : un touriste français ne peut en général pas s’en servir.',
        'Les frais de paiement et de retrait à l’étranger de votre banque peuvent atteindre quelques pourcents ; vérifiez-les avant de partir.',
      ],
      alerte: 'Les frais cités viennent d’un site français non officiel : consultez les conditions de votre banque.',
      sources: [
        src('Routard (forum) : payer en francs suisses ou en euros', 'https://www.routard.com/forums/t/est-il-plus-avantageux-de-payer-en-francs-suisses-ou-en-euros/7239', FORUM),
        src('Roafly : argent de voyage en Suisse', 'https://www.roafly.com/fr/blog/switzerland-travel-money', PRO),
        src('Ibani : TWINT sans compte bancaire suisse', 'https://www.ibani.com/guides/twint-sans-compte-bancaire-suisse.md', PRO),
      ],
    },
    banque: {
      items: [
        'Pour ouvrir un compte, une banque demande en général une pièce d’identité, le permis de séjour et un justificatif de domicile en Suisse (UBS). D’autres sources indiquent qu’un compte étudiant peut s’ouvrir avant le permis.',
        'Un centre hospitalier universitaire conseille de demander avant l’arrivée une attestation de demande de permis en cours, qui permet d’ouvrir un compte.',
        'Certaines banques permettent l’ouverture à distance avant d’arriver.',
      ],
      alerte: 'Les sources se contredisent sur l’exigence du permis : demandez à la banque quels documents elle accepte à votre stade.',
      sources: [
        src('UBS : liste de contrôle pour s’installer en Suisse', 'https://www.ubs.com/ch/fr/services/guide/accounts-and-cards/articles/switzerland-checklist.html', 'banque (source commerciale)'),
        src('CHUV : s’installer en Suisse', 'https://www.chuv.ch/fr/carriere/accueil/votre-arrivee/sinstaller-en-suisse', 'employeur hospitalier'),
        src('Upreer : ouvrir un compte bancaire en Suisse', 'https://upreer.ch/fr/guides/ouvrir-compte-bancaire-suisse/', PRO),
      ],
    },
    logement: {
      items: [
        'Pour un logement, la sûreté demandée par le bailleur ne peut pas dépasser trois mois de loyer hors charges (art. 257e du Code des obligations, cité par un guide pour expatriés).',
        'Elle se constitue sur un compte de garantie de loyer bloqué à votre nom, ou par une société de cautionnement (dans ce cas, vous ne récupérez rien en fin de bail). Plusieurs banques permettent l’ouverture de ce compte en ligne ou par courrier.',
        'Difficulté fréquente : la régie exige la garantie avant votre arrivée, alors que vous n’avez pas encore de permis ni de compte suisse. Certaines cautions exigent désormais un permis B ou C.',
      ],
      alerte: 'Demandez à la régie et à la banque, avant de signer, quels documents elles acceptent si votre permis est encore en cours.',
      sources: [
        src('Ibani : garantie de loyer en Suisse, bloquer des fonds depuis l’étranger', 'https://www.ibani.com/guides/garantie-loyer-suisse-bloquer-fonds-etranger', PRO),
        src('Ibani : dossier de location d’un appartement en Suisse', 'https://www.ibani.com/guides/louer-appartement-suisse-dossier-location', PRO),
      ],
    },
  },
  HRV: {
    paiements: {
      items: [
        'La Croatie utilise l’euro depuis le 1er janvier 2023. Payez en euros et refusez la conversion proposée par le terminal ou le distributeur : elle intègre une marge.',
        'Certaines cartes facturent encore des frais de retrait ; évitez les distributeurs de zone touristique et préférez une carte sans frais à l’étranger.',
        'Sur la côte, beaucoup de commerçants arrondissent au multiple de 5 centimes pour les paiements en espèces : gardez de la petite monnaie.',
        'Les anciens billets de kunas restent échangeables à la banque centrale ; l’échange des pièces gratuit a pris fin le 31 décembre 2025.',
      ],
      alerte: 'Beaucoup de pages (Lonely Planet, Routard) datent de l’époque de la kuna et ne sont plus fiables pour les frais.',
      sources: [
        src('Ideoz Voyages : carte bancaire en Croatie', 'https://voyages.ideoz.fr/croatie/vie-pratique/payer/carte-bancaire-en-croatie/', GUIDE),
        src('Le Mag Voyage : monnaie en Croatie', 'https://www.lemagvoyage.fr/croatie/monnaie-en-croatie/', GUIDE),
        src('Commission européenne en France : la Croatie réussit son passage à l’euro', 'https://france.representation.ec.europa.eu/informations/la-croatie-reussit-son-passage-leuro-2023-01-16_fr', 'source officielle'),
      ],
    },
    banque: {
      items: [
        'L’OIB (numéro d’identification personnel) est demandé pour tous les documents officiels et pour ouvrir un compte. Il se demande en ligne sur le site de l’administration fiscale croate, y compris en anglais, et peut s’obtenir sans titre de séjour.',
        'Sans résidence, le compte est classé « non-résident ». Les conditions exactes varient selon la banque : demandez-les avant de vous déplacer.',
        'Un compte local est pratiquement nécessaire pour régler les factures d’eau, d’électricité et les taxes locales.',
      ],
      sources: [
        src('Total Croatia News : obtenir un OIB et ouvrir un compte (en anglais)', 'https://total-croatia-news.com/news/moving-to-croatia/oib/', PRESSE),
        src('Wise : ouvrir un compte bancaire en Croatie (en anglais)', 'https://wise.com/us/blog/opening-a-bank-account-in-croatia', PRO),
      ],
    },
    logement: {
      items: [
        'Aucune source fiable n’a été trouvée sur la caution et les usages de location en Croatie : interrogez l’agence, le propriétaire ou l’ambassade.',
      ],
      alerte: 'Un compte local est nécessaire pour payer les charges : prévoyez-le avant de signer un bail.',
      sources: [
        src('Expat.com (forum) : immobilier en Croatie', 'https://www.expat.com/fr/forum/europe/croatie/1076169-immobilier-en-croatie.html', FORUM),
      ],
    },
  },
  THA: {
    paiements: {
      items: [
        'La plupart des distributeurs thaïlandais prélèvent un montant fixe par retrait pour une carte étrangère, en plus des frais de votre banque. Le chiffre de 220 bahts est celui des anciens guides ; un guide de 2026 cite 250 à 350 bahts selon la carte et le distributeur.',
        'Le montant s’affiche à l’écran avant validation : annulez si besoin. Retirer une somme importante en une fois limite les frais.',
        'Refusez la conversion proposée par le distributeur et choisissez d’être débité en bahts.',
        'Les espèces restent très utiles (marchés, petits restaurants, transports) ; les paiements par QR code sont courants chez les commerçants.',
      ],
      alerte: 'Source récente unique pour les frais de 250 à 350 bahts : lisez le message du distributeur avant de valider.',
      sources: [
        src('Portail Asie : retirer de l’argent en Thaïlande, frais ATM et DCC', 'https://portail-asie.com/retirer-de-largent-en-thailande/', GUIDE),
        src('Portail Asie : argent en Thaïlande, cash, cartes, QR code', 'https://portail-asie.com/changer-de-largent-en-thailande/', GUIDE),
        src('Thailand Starter Kit : ATM en Thaïlande', 'https://www.thailandstarterkit.com/fr/finances/atm-thailande/', EXPATS),
      ],
    },
    banque: {
      items: [
        'Aucune loi n’interdit aux étrangers d’ouvrir un compte, mais les règles dépendent de chaque banque et même de chaque agence : si une agence refuse, essayez-en une autre.',
        'La plupart des banques n’ouvrent pas de compte avec un visa touristique ; c’est assez simple avec un visa de longue durée (retraite, mariage, affaires, LTR).',
        'Documents usuels : passeport, visa, certificat de résidence ou permis de travail ; un contrat de location peut servir de justificatif.',
      ],
      sources: [
        src('Thailand Starter Kit : comptes bancaires thaïlandais', 'https://www.thailandstarterkit.com/fr/money/comptes-bancaires-thailandais/', EXPATS),
        src('Union des Français de l’étranger : ouvrir un compte en banque en Thaïlande', 'https://ufe.org/dossier-pays/thailande/ouvrir-un-compte-en-banque-en-thailande/', 'association de Français de l’étranger'),
        src('Expat.com (forum) : ouverture de compte et condominiums', 'https://www.expat.com/fr/forum/asie/thailande/185700-ouverture-dun-compte-bancaire-et-achat-de-condominiums.html', FORUM),
      ],
    },
    logement: {
      items: [
        'Aucune source fiable n’a été trouvée sur les cautions et usages de location en Thaïlande dans cette recherche.',
      ],
      alerte: 'Faites relire tout bail avant de verser une caution, et vérifiez l’existence du logement.',
      sources: [
        src('Thailand Starter Kit : comptes bancaires et logement', 'https://www.thailandstarterkit.com/fr/money/comptes-bancaires-thailandais/', EXPATS),
      ],
    },
  },
};
