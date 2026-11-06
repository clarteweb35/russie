import { EXPATS, FORUM, GUIDE, PRESSE, PRO, src } from './complements';
import type { Complement } from './complements';

// Grèce, Maroc, Tunisie, Algérie (recherche du 6 novembre 2026)
export const LOT2: Record<string, Complement> = {
  GRC: {
    paiements: {
      items: [
        'Les cartes Visa et Mastercard sont acceptées presque partout, plus rarement dans les villages. Les espèces restent utiles dans les petites structures : tavernes de bord de route, billets de bus achetés au chauffeur.',
        'Chaque retrait peut être facturé deux fois : par la banque grecque du distributeur, puis par votre banque. Les distributeurs d’opérateurs privés (cabines jaunes et bleues Euronet) sont signalés comme les plus coûteux.',
        'Dans les îles, des distributeurs peuvent être en panne un ou deux jours : prévoyez plus d’espèces et de petites coupures, car la monnaie manque souvent.',
        'Le service est généralement inclus à la table ; un pourboire reste apprécié.',
      ],
      alerte: 'Beaucoup d’articles sur les banques grecques datent de la crise de 2015 et ne reflètent plus la situation actuelle.',
      sources: [
        src('Vivre en Grèce : monnaie et paiement', 'https://vivreengrece.fr/tourisme/monnaie-paiement-grece', GUIDE),
        src('Lonely Planet : argent dans les îles grecques', 'https://www.lonelyplanet.fr/destinations/europe/grece/les-iles-grecques/argent', GUIDE),
        src('Routard (forum) : coût d’utilisation de la carte en Grèce', 'https://www.routard.com/forums/t/cout-utilisation-cb-en-grece/404181', FORUM),
      ],
    },
    banque: {
      items: [
        'Le numéro fiscal (AFM) s’obtient au bureau des impôts local (DOY) : il débloque la banque, les contrats et la plupart des services. Le numéro de sécurité sociale (AMKA) sert à la santé et au travail.',
        'Les grandes banques citées sont Piraeus, National Bank of Greece, Eurobank et Alpha Bank. Il faut généralement venir en personne, avec l’AFM, le passeport et un justificatif de domicile.',
        'Une banque peut demander des documents supplémentaires aux non-résidents (pièces en anglais, apostillées ou légalisées).',
      ],
      sources: [
        src('Expatden : ouvrir un compte bancaire en Grèce', 'https://www.expatden.com/fr/greece/ouvrir-compte-bancaire-grece/', EXPATS),
        src('Immigrant Invest : compte bancaire en Grèce', 'https://immigrantinvest.com/fr/services/greece/bank-account-greece/', PRO),
        src('Wise : ouvrir un compte en Grèce (en anglais)', 'https://wise.com/au/blog/opening-a-bank-account-in-greece', PRO),
      ],
    },
    logement: {
      items: [
        'L’AFM est exigé pour conclure un contrat de location.',
        'Un témoignage de forum évoque une caution d’un mois de loyer, parfois utilisée pour le dernier mois : ce n’est pas une règle officielle. Montant et restitution sont à fixer par écrit avec le bailleur.',
      ],
      alerte: 'Aucune source fiable n’a été trouvée sur les règles officielles de la caution grecque : faites relire le bail par un professionnel local.',
      sources: [
        src('Expat.com (forum) : la location en Grèce', 'https://www.expat.com/fr/forum/europe/grece/85234-la-location-en-grece.html', FORUM),
        src('Expat.com (forum) : formalités pour louer à Athènes', 'https://www.expat.com/fr/forum/europe/grece/athenes/668512-formalites-pour-louer-un-appartement-sur-athenes.html', FORUM),
      ],
    },
  },
  MAR: {
    paiements: {
      items: [
        'Les espèces restent dominantes : taxis, souks et petits commerces se règlent en dirhams. La carte est surtout acceptée dans les hôtels, restaurants et boutiques des zones touristiques.',
        'Au distributeur, des frais fixes par retrait sont annoncés avant validation (de l’ordre de 20 à 30 dirhams selon un site de voyage), en plus des frais de votre banque. Retirer une somme plus importante en une fois limite ces frais.',
        'Pour payer par carte, demandez le montant exact en dirhams : une conversion proposée par le commerçant est souvent moins favorable.',
        'Emportez deux cartes de réseaux différents. Le change en banque ou en bureau agréé est généralement plus avantageux que la carte.',
      ],
      alerte: 'Ces montants viennent de sites de voyage et de blogs, sans date précise : confirmez auprès de votre banque. Le dirham ne sert qu’au Maroc.',
      sources: [
        src('Routard : argent et budget au Maroc', 'https://www.routard.com/guide/maroc/711/argent_et_budget.htm', GUIDE),
        src('Bladi.net : les petites astuces avant de voyager au Maroc', 'https://www.bladi.net/petites-astuces-connaitre-avant-voyager-maroc,116717.html', PRESSE),
        src('Wise : retirer de l’argent au Maroc', 'https://wise.com/fr/blog/retirer-de-l-argent-au-maroc', PRO),
      ],
    },
    banque: {
      items: [
        'Les banques demandent en général un passeport valide, un justificatif de domicile de moins de trois mois et une pièce du pays de résidence ; la carte de séjour est souvent citée.',
        'Les avis divergent : certains expatriés affirment qu’un compte en devises convertibles s’ouvre avec un passeport et une adresse, d’autres que la carte de séjour est exigée pour un compte en dirhams. Demandez directement à la banque.',
        'La carte de séjour se demande au commissariat ou à la gendarmerie du lieu de résidence ; un bail légalisé sert de justificatif de domicile.',
      ],
      sources: [
        src('Wafir : guide financier pour s’installer au Maroc', 'https://wafir.ma/fr/guide/moving-morocco-financial-guide-2026', EXPATS),
        src('WorldRemit : comment ouvrir un compte bancaire au Maroc', 'https://www.worldremit.com/fr/blog/finance/comment-ouvrir-un-compte-bancaire-au-maroc', PRO),
        src('Expat.com (forum) : ouvrir un compte bancaire au Maroc', 'https://www.expat.com/fr/forum/afrique/maroc/381471-ouvrir-un-compte-bancaire-au-maroc.html', FORUM),
      ],
    },
    logement: {
      items: [
        'Une caution est habituellement demandée à la signature, souvent deux mois de loyer, restituée si le logement est rendu en bon état. Le loyer se paie en général chaque mois.',
        'Privilégiez un bail légalisé : certains propriétaires proposent des contrats non enregistrés, alors qu’un bail officiel sert de justificatif de domicile pour la carte de séjour.',
      ],
      sources: [
        src('WorldRemit : s’expatrier et vivre au Maroc', 'https://www.worldremit.com/fr/blog/life-abroad/vivre-au-maroc', PRO),
        src('Expat.com (forum) : carte de séjour au Maroc', 'https://www.expat.com/fr/forum/afrique/maroc/423451-carte-de-sejour.html', FORUM),
      ],
    },
  },
  TUN: {
    paiements: {
      items: [
        'Les espèces dominent, surtout hors des grandes villes. Seuls certains établissements (hôtels de catégorie, loueurs de voitures, grands magasins) acceptent les cartes.',
        'Les distributeurs se trouvent surtout dans les grandes villes, centres commerciaux, banques et aéroports ; une carte internationale permet d’y retirer des dinars.',
        'Le dinar ne s’achète pas hors de Tunisie et son exportation est interdite. Conservez vos reçus de change : ils peuvent être demandés pour reconvertir les dinars non dépensés en fin de séjour.',
      ],
      alerte: 'Les seuils de déclaration des devises à l’entrée et à la sortie varient beaucoup selon les sources (de 3 000 à 30 000 dinars cités). Vérifiez le texte en vigueur auprès de la douane tunisienne ou de l’ambassade avant le départ.',
      sources: [
        src('Western Union : la monnaie en Tunisie', 'https://www.westernunion.com/blog/fr/monnaie-tunisie/', PRO),
        src('Tunisie Numérique : voyager avec des devises en Tunisie', 'https://www.tunisienumerique.com/important-ce-quil-faut-savoir-avant-de-voyager-avec-des-devises-en-tunisie/', PRESSE),
        src('Routard (forum) : paiements en Tunisie', 'https://www.routard.com/forums/t/paiements-en-tunisie/3954', FORUM),
      ],
    },
    banque: {
      items: [
        'Pour un non-résident ou un expatrié, les banques proposent des comptes en devises convertibles ; selon un site pour expatriés, une banque « internationale » ou filiale d’un groupe étranger ouvre en principe un compte en devises sur présentation du passeport.',
        'Un expatrié qui reste moins de deux ans peut aussi devoir disposer d’un compte courant en dinars. BIAT, Attijari Bank, UBCI, STB et BH Bank sont citées pour leurs offres aux expatriés.',
        'Le cadre des changes est strict : renseignez-vous sur les règles de transfert avant d’ouvrir un compte.',
      ],
      sources: [
        src('Cyril Jarnias : services bancaires pour expatriés en Tunisie', 'https://www.cyriljarnias.com/expatriation/sinstaller-en-tunisie-en-tant-que-expatrie-guide-complet/gestion-financiere-expatries-tunisie-services-bancaires/', PRO),
        src('Expat.com (forum) : quel compte bancaire pour un expat salarié', 'https://www.expat.com/fr/forum/afrique/tunisie/227980-quel-compte-bancaire-ouvrir-pour-un-expat-salari.html', FORUM),
        src('Les Afriques : compte bancaire en Tunisie, diaspora et devises', 'https://lesafriques.com/2026/09/compte-bancaire-tunisie-diaspora-devises-2026/', PRESSE),
      ],
    },
    logement: {
      items: [
        'Aucune source fiable trouvée sur la caution et les usages de location : renseignez-vous auprès de la banque, d’un agent immobilier local ou de l’ambassade.',
        'La carte de séjour fait l’objet de nombreux témoignages d’expatriés sur les démarches : voir le forum cité.',
      ],
      sources: [
        src('Expat.com (forum) : comment avoir sa carte de séjour en Tunisie', 'https://www.expat.com/fr/forum/afrique/tunisie/475994-comment-avoir-sa-carte-de-sejour-en-tunisie.html', FORUM),
      ],
    },
  },
  DZA: {
    paiements: {
      items: [
        'Les espèces en dinars sont indispensables : transports, petits restaurants, marchés, zones rurales. Ne comptez jamais sur la seule carte bancaire.',
        'Les cartes internationales sont surtout acceptées dans certains hôtels ; les distributeurs qui acceptent Visa ou Mastercard sont rares hors d’Alger et d’Oran, et ceux d’Algérie Poste n’acceptent pas les cartes étrangères, selon des guides pratiques.',
        'Le change doit se faire par les voies officielles (banques, bureaux agréés). Conservez les justificatifs : à la sortie, les non-résidents doivent pouvoir justifier l’usage des devises importées, selon la presse algérienne.',
      ],
      alerte: 'Les règles de change et de déclaration changent souvent : lisez la fiche officielle du ministère (rubrique entrée et séjour, douane) et vérifiez auprès de votre banque avant le départ.',
      sources: [
        src('Zoom Algérie : payer en Algérie avec une carte bancaire française', 'https://zoomalgerie.com/payer-algerie-carte-bancaire-francaise/', PRESSE),
        src('Le Mag Voyage : monnaie en Algérie', 'https://www.lemagvoyage.fr/algerie/monnaie-algerie/', GUIDE),
        src('Visa-Algérie : déclaration de devises pour les voyageurs', 'https://www.visa-algerie.com/declaration-de-devises-voici-ce-qui-change-cette-annee-pour-les-voyageurs-vers-lalgerie', PRO),
      ],
    },
    banque: {
      items: [
        'Un compte en devises peut s’ouvrir en Algérie, mais un guide pratique indique qu’il faut ouvrir en même temps un compte en dinars dans la même agence.',
        'Les retraits en Algérie se font en dinars. Les sources divergent sur les droits d’un non-résident à détenir un compte : la réglementation de la Banque d’Algérie est à vérifier directement.',
        'La signature et la remise de la carte se font en général en agence.',
      ],
      sources: [
        src('Les Afriques : ouvrir un compte en Algérie depuis l’étranger', 'https://lesafriques.com/2026/09/ouvrir-compte-algerie-etranger-compte-devise-2026/', PRESSE),
        src('Cyril Jarnias : services bancaires pour expatriés en Algérie', 'https://www.cyriljarnias.com/?p=41557', PRO),
      ],
    },
    logement: {
      items: [
        'Selon un guide pour expatriés, le bail est généralement annuel, avec paiement du loyer pour toute l’année, et la caution équivaut souvent à un mois de loyer.',
      ],
      alerte: 'Source unique, à recouper : faites relire tout contrat par un professionnel local.',
      sources: [
        src('Le Petit Journal Alger : expatrié à Alger, où se loger', 'https://lepetitjournal.com/alger/expatrie-alger-ou-se-loger-289675', PRESSE),
      ],
    },
  },
};
