import { f, s } from '../outils';
import type { Complement } from '../outils';

// Paiements (et banque quand une source existe) : Colombie, Chili, Équateur, Bolivie, Cap-Vert, Madagascar, Côte d'Ivoire, Cameroun,
// Namibie, Botswana, Zambie, Zimbabwe, Malaisie, Philippines, Singapour, Laos, Mongolie, Ouzbékistan, Népal (recherche du 6 novembre 2026).
// Les sections banque et logement restent « À documenter » faute de source fiable.
const SOUS = 'Frais variables selon la banque : confirmez les tarifs avant le départ.';

export const LOT8: Record<string, Complement> = {
  COL: {
    paiements: f(
      ['Le liquide reste essentiel, surtout dans les petits commerces et hors des grandes villes. Un service volontaire de 10 % est souvent ajouté à l’addition au restaurant (« ¿Con propina? »).', 'Frais de retrait avec une carte étrangère : de l’ordre de 10 000 à 28 500 pesos selon les sources, avec des plafonds autour de 600 000 pesos par opération. Refusez la conversion dynamique et choisissez le retrait en pesos ; prévenez votre banque de votre voyage.'],
      [s('A Social Nomad : frais de distributeur en Colombie (en anglais)', 'https://asocialnomad.com/colombia/atms-fees-in-colombia/', 'exp'), s('Medellín.co : monnaie (en anglais)', 'https://medellin.co/plan-your-trip/currency', 'off'), s('Moon : guide pratique de l’argent en Colombie (en anglais)', 'https://www.moontravelguides.com/travel/planning/practical-guide-to-money-colombia/', 'gui')],
      SOUS,
    ),
    banque: f(['Une pièce d’identité colombienne (cédula) est citée pour ouvrir un compte local, d’après un blog personnel : à vérifier auprès des banques.'], [s('The Colombian Way : l’argent en Colombie (en anglais)', 'https://thecolombianway.com/en/resources/money-in-colombia/', 'exp')]),
  },
  CHL: {
    paiements: f(
      ['Les cartes Visa et Mastercard sont largement acceptées ; American Express de façon inégale. Les distributeurs sont très répandus.', 'Les frais d’accès pour cartes étrangères sont élevés : de 5 000 à 9 200 pesos chiliens par retrait selon une source. Refusez la conversion et choisissez le peso. Le pourboire standard est de 10 % au restaurant.'],
      [s('Wise : distributeurs au Chili, cartes et frais (en anglais)', 'https://wise.com/gb/blog/atms-in-chile', 'pro'), s('Expat.cl : banque au Chili pour les expatriés (en anglais)', 'https://expat.cl/guide-chile/banking', 'exp')],
      SOUS,
    ),
    banque: f(['Il faut généralement un numéro fiscal chilien (RUT) et un visa de résidence pour un compte complet ; un compte courant demande souvent un revenu local stable. Les loyers et prêts immobiliers sont souvent indexés sur l’UF, une unité de compte parallèle.'], [s('Expat Arrivals : banque, argent et impôts au Chili (en anglais)', 'https://expatarrivals.com/americas/chile/banking-money-and-taxes-chile', 'exp'), s('Expat.cl : banque au Chili (en anglais)', 'https://www.expat.cl/finance/', 'exp')]),
  },
  ECU: {
    paiements: f(
      ['La monnaie officielle est le dollar américain. Les billets de 50 et 100 dollars sont mal acceptés : prévoyez des coupures de 20 dollars ou moins. Visa, Mastercard et Diners sont les cartes les plus répandues.', 'Des voyageurs signalent des échecs fréquents au distributeur. Aux Galápagos, les distributeurs sont rares (Santa Cruz en a, pas Isabela) : emportez des dollars en liquide.'],
      [s('Lonely Planet : argent en Équateur', 'https://www.lonelyplanet.fr/destinations/amerique/equateur/argent', 'gui'), s('Routard (forum) : problèmes de retrait en Équateur', 'https://www.routard.com/forums/t/problemes-de-retrait-en-equateur/39317', 'for')],
      SOUS,
    ),
  },
  BOL: {
    paiements: f(
      ['Ne comptez jamais sur un distributeur : gardez des espèces, surtout en zone rurale. Les dollars se changent plus facilement que les euros.', 'Les frais de retrait varient beaucoup selon la banque (jusqu’à 7 à 8 % dans une enquête de voyageurs, nuls dans d’autres) et les retraits sont plafonnés autour de 3 000 bolivianos. Privilégiez une carte Visa : les distributeurs facturent souvent plus avec Mastercard.'],
      [s('Tour du Mondiste : retirer de l’argent sans frais en Bolivie', 'https://www.tourdumondiste.com/retirer-argent-sans-frais-bolivie', 'gui'), s('Lonely Planet : argent en Bolivie', 'https://www.lonelyplanet.fr/destinations/amerique/bolivie/argent/devise', 'gui')],
      'Enquête ancienne : tarifs à vérifier.',
    ),
  },
  CPV: {
    paiements: f(
      ['Le paiement par carte progresse (hôtels, restaurants touristiques, supermarchés) mais le liquide reste très courant dans les petits établissements. Les euros sont acceptés en zone touristique, à un taux un peu moins favorable. Les escudos ne se changent pas à l’étranger : changez sur place.', 'Des voyageurs citent un plafond de retrait de 20 000 escudos (environ 200 euros) par opération. Hors des îles principales, ayez des escudos en poche.'],
      [s('Lonely Planet : argent au Cap-Vert', 'https://www.lonelyplanet.fr/destinations/afrique/cap-vert/argent', 'gui'), s('Routard (forum) : paiement en carte ou change au Cap-Vert', 'https://www.routard.com/forums/t/paiement-en-cb-ou-change-au-cap-vert/216026', 'for')],
      SOUS,
    ),
  },
  MDG: {
    paiements: f(
      ['Le liquide est la norme : marchés et commerces de quartier se paient en espèces. La carte est presque inutilisable hors des établissements haut de gamme, avec des frais jugés élevés par des voyageurs.', 'Un forum cite environ 5 euros de frais pour un retrait d’environ 150 euros et un plafond de 400 000 ariary par retrait : témoignage à vérifier.'],
      [s('Routard (forum) : argent à Madagascar', 'https://www.routard.com/forums/t/argent-a-madagascar/132893', 'for'), s('Lonely Planet : argent à Madagascar', 'https://www.lonelyplanet.fr/destinations/afrique/madagascar/argent', 'gui')],
      SOUS,
    ),
  },
  CIV: {
    paiements: f(
      ['Le franc CFA de Côte d’Ivoire (XOF) n’est pas celui d’Afrique centrale : les deux ne circulent pas dans la zone de l’autre.', 'L’argent mobile domine (Orange Money en tête, puis MTN MoMo, Moov Money et Wave). Hors des grandes villes, le liquide reste la norme, de préférence en petites coupures (500, 1 000, 2 000 francs).'],
      [s('Les Afriques : la Côte d’Ivoire, premier marché du mobile money de l’UEMOA (2026)', 'https://lesafriques.com/2026/09/mobile-money-banques-cote-ivoire-france-2026/', 'pre'), s('Routard : argent et budget au Cameroun (pour les petites coupures)', 'https://www.routard.com/fr/guide/a/argent-et-budget/afrique/cameroun', 'gui')],
      'Source récente peu précise sur les cartes : informez-vous auprès de votre banque.',
    ),
  },
  CMR: {
    paiements: f(
      ['Le franc CFA d’Afrique centrale (XAF) n’est pas celui d’Afrique de l’Ouest. Orange Money et MTN MoMo dominent l’argent mobile ; Wave est arrivé en 2025 par un partenariat avec une banque locale.', 'Hors des grandes villes, emportez du liquide en petites coupures (500, 1 000, 2 000 francs) : les billets de 5 000 et 10 000 sont difficiles à changer.'],
      [s('Routard : argent et budget au Cameroun', 'https://www.routard.com/fr/guide/a/argent-et-budget/afrique/cameroun', 'gui'), s('Digital Business Africa : Wave au Cameroun', 'https://www.digitalbusiness.africa/wave-debarque-au-cameroun-orange-money-et-mtn-momo-deja-sous-pression-le-consommateur-se-frotte-les-mains/', 'pre')],
      SOUS,
    ),
  },
  NAM: {
    paiements: f(
      ['Le dollar namibien est aligné sur le rand sud-africain, qui circule largement en Namibie ; le dollar namibien n’est utilisable que dans le pays. Retirez assez de liquide pour l’essence : payer par carte en station peut entraîner des frais.'],
      [s('Namibia Tours & Safaris : argent et cartes', 'https://www.namibia-tours-safaris.com/travel-guide/cash-and-cards', 'gui'), s('Routard (forum) : argent et change en Namibie', 'https://www.routard.com/forums/t/argent-et-change-en-namibie/66173', 'for')],
      SOUS,
    ),
  },
  BWA: {
    paiements: f(
      ['La monnaie est le pula. Des voyageurs indiquent que les euros, les rands et les dollars américains sont acceptés mais pas les dollars namibiens ; la monnaie peut être rendue en pula. Ayez des pulas pour les frais de passage de frontière.'],
      [s('Routard (forum) : change et paiement au Botswana', 'https://www.routard.com/forums/t/change-et-paiement-pour-deux-jours-au-bostwana/101862', 'for'), s('Discover Africa : monnaies d’Afrique australe (en anglais)', 'https://www.discoverafrica.com/faq/what-currency-do-i-use-when-visiting-botswana/', 'gui')],
      'Témoignages anciens : à confirmer.',
    ),
  },
  ZMB: {
    paiements: f(
      ['La monnaie est le kwacha. Lonely Planet classe, pour le change, le dollar américain en tête, puis la livre sterling, le rand et l’euro. Un voyageur préfère le retrait au distributeur au change, malgré des frais bancaires. Les entrées de parcs se paient souvent en dollars.'],
      [s('Lonely Planet : argent en Zambie', 'https://www.lonelyplanet.fr/destinations/afrique/zambie/argent', 'gui'), s('Routard (forum) : payer en Zambie', 'https://www.routard.com/forums/t/payer-en-zambie/499574', 'for')],
      SOUS,
    ),
  },
  ZWE: {
    paiements: f(
      ['La plupart des transactions se font en dollars américains. Les distributeurs délivrent des dollars, mais refusent les billets abîmés ou anciens. Visas et entrées de parcs se paient souvent en liquide.', 'Une interdiction des transactions en devises étrangères a été annoncée, avec des exceptions dont la zone des chutes Victoria : renseignez-vous avant de partir.'],
      [s('L’Écho touristique : le Zimbabwe interdit les transactions en devises étrangères', 'https://www.lechotouristique.com/article/le-zimbabwe-interdit-les-transactions-en-devises-etrangeres', 'pre'), s('VoyageForum : argent au Zimbabwe', 'https://voyageforum.com/en/forum/argent-zimbabwe-d6760303/', 'for')],
      'Règle récente et changeante : confirmez auprès de l’ambassade ou de votre voyagiste.',
    ),
  },
  MYS: {
    paiements: f(
      ['La plupart des banques locales ne prélèvent aucun frais de retrait mais plafonnent souvent entre 1 000 et 1 500 ringgits. Dans les îles et zones rurales (îles Perhentian, Kuala Tahan), il n’y a pas toujours de distributeur : prévoyez des espèces.', 'Refusez la conversion proposée au distributeur : le taux de votre banque française s’applique alors.'],
      [s('Tour du Mondiste : enquête sur les frais de retrait en Malaisie', 'https://www.tourdumondiste.com/?p=792338', 'gui'), s('Lonely Planet : argent en Malaisie', 'https://www.lonelyplanet.fr/destinations/asie/malaisie/argent', 'gui')],
      SOUS,
    ),
  },
  PHL: {
    paiements: f(
      ['Le paiement en espèces reste la norme. La carte est acceptée mais le prix est souvent majoré pour couvrir les frais bancaires. La grande majorité des banques prélèvent 250 pesos par retrait (HSBC fait exception), et le pays est classé parmi les plus chers pour retirer au distributeur.'],
      [s('Expat.com (forum) : les modes de paiement aux Philippines', 'https://www.expat.com/fr/forum/asie/philippines/860132-les-modes-de-paiement-aux-philippines.html', 'for'), s('Cebu Daily News : retraits aux distributeurs les plus chers (en anglais)', 'https://cebudailynews.inquirer.net/478922/philippines-south-korea-among-most-expensive-countries-for-travelers-to-withdraw-from-atm/amp', 'pre'), s('Lonely Planet : argent aux Philippines', 'https://www.lonelyplanet.fr/destinations/asie/philippines/argent', 'gui')],
      SOUS,
    ),
  },
  SGP: {
    paiements: f(
      ['Les retraits sont faciles partout. Les banques locales facturent un retrait dans le distributeur d’une autre banque, sauf forfait. Certains commerces n’acceptent que le système de paiement NETS, qui suppose une carte compatible.'],
      [s('Le Petit Journal Singapour : ouvrir un compte bancaire, les spécificités locales', 'https://lepetitjournal.com/singapour/ouverture-de-compte-bancaire-les-specificites-locales-singapouriennes-242042', 'pre')],
      SOUS,
    ),
  },
  LAO: {
    paiements: f(
      ['La majorité des transactions se font en espèces. Pour éviter les frais bancaires, arrivez avec des dollars ou des euros et changez-les en kips au fur et à mesure ; certains hôtels ne facturent qu’en dollars.', 'Un guide cite environ 30 000 kips de frais fixes par retrait, plafonné à 2 000 000 kips, plus le taux de votre carte ; Lonely Planet cite 3 % de commission à la BCEL.'],
      [s('Tour du Mondiste : retirer de l’argent au Laos', 'https://www.tourdumondiste.com/?p=791417', 'gui'), s('Lonely Planet : argent au Laos', 'https://www.lonelyplanet.fr/destinations/asie/laos/argent', 'gui')],
      SOUS,
    ),
  },
  MNG: {
    paiements: f(
      ['Les retraits sont parmi les moins chers au monde selon Moneyvox : un retrait de 200 euros ne coûte rien de plus ou environ 0,38 euro. Les taux sont meilleurs en espèces ; la plupart des établissements ajoutent 3 % pour un paiement par carte.', 'Le tugrik n’a aucune valeur hors du pays : changez les restes avant de partir.'],
      [s('MoneyVox : frais de carte bancaire selon les pays', 'https://www.moneyvox.fr/tarif-bancaire/actualites/105799/vacances-hiver-ces-pays-ou-les-frais-de-carte-bancaire-explosent-et-ceux-ou-ils-ne-coutent-rien', 'pre'), s('Lonely Planet : argent en Mongolie', 'https://www.lonelyplanet.fr/destinations/asie/mongolie/argent', 'gui')],
      SOUS,
    ),
  },
  UZB: {
    paiements: f(
      ['Le dollar américain et, dans une moindre mesure, l’euro restent très utilisés ; guichets officiels, hôtels et banques échangent surtout contre le soum. Emportez des billets en bon état : les billets abîmés peuvent être refusés.'],
      [s('Lonely Planet : argent en Ouzbékistan', 'https://www.lonelyplanet.fr/destinations/asie/ouzbekistan/argent', 'gui'), s('Routard (forum) : changer des euros en Ouzbékistan', 'https://www.routard.com/forums/t/changer-des-euros-en-ouzbekistan/421279', 'for')],
      SOUS,
    ),
  },
  NPL: {
    paiements: f(
      ['La roupie népalaise n’est pas convertible hors du pays, notamment en Inde : changez ou dépensez avant de partir. Des cartes de banques en ligne permettent de payer et retirer en devises sans frais, d’après Routard.'],
      [s('Routard : argent et budget au Népal', 'https://www.routard.com/fr/guide/a/argent-et-budget/asie/nepal', 'gui')],
      SOUS,
    ),
  },
};
