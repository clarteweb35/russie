import { EXPATS, FORUM, GUIDE, PRESSE, PRO, src } from '../outils';
import type { Complement } from '../outils';

// Japon, Mexique, République dominicaine, Égypte, Canada (recherche du 6 novembre 2026)
export const LOT5: Record<string, Complement> = {
  JPN: {
    paiements: {
      items: [
        'La plupart des distributeurs japonais refusent les cartes étrangères, même avec les logos Visa ou Mastercard. Les distributeurs Seven Bank des magasins 7-Eleven, ouverts 24 h/24, sont les plus fiables ; les bureaux de poste acceptent aussi de nombreuses cartes mais ferment tôt.',
        'Frais Seven Bank annoncés par des guides : 110 yens jusqu’à 20 000 yens, puis 220 yens au-delà, en plus des frais de votre banque.',
        'Gardez des yens en espèces : au cas où un distributeur tomberait en panne ou refuserait la carte, et pour les petits commerces.',
      ],
      alerte: 'Les tarifs et plafonds évoluent. Vérifiez auprès de votre banque et lisez les frais affichés avant de valider.',
      sources: [
        src('Japan Experience : payer et retirer de l’argent au Japon', 'https://www.japan-experience.com/fr/preparer-voyage/savoir/voyager-au-japon/10-choses-retirer-argent-japon-distributeur-dab', GUIDE),
        src('Lonely Planet : moyens de paiement au Japon', 'https://www.lonelyplanet.fr/destinations/asie/japon/moyens-de-paiement', GUIDE),
        src('Voyapon : change et argent au Japon', 'https://voyapon.com/fr/change-yens-argent-japon/', GUIDE),
      ],
    },
    banque: {
      items: [
        'La carte de résident (Zairyu card) affichant votre adresse est presque toujours exigée, selon un guide de 2026. Le certificat de résidence (juminhyo) de la mairie sert de justificatif d’adresse.',
        'Le sceau personnel (hanko ou inkan) peut être demandé ; certaines banques acceptent une signature. La plupart des banques exigent au moins six mois de validité de visa.',
        'Ordre conseillé par plusieurs sources : mairie, puis compte bancaire, puis recherche d’appartement.',
      ],
      alerte: 'Les exigences varient selon la banque, l’agence et le type de visa. Des forums anciens (2018) se contredisent.',
      sources: [
        src('Modern Living Japan : ouvrir un compte bancaire au Japon en tant qu’étranger (2026)', 'https://modernlivingjapan.com/fr/blog/how-to-open-a-bank-account-in-japan-as-a-foreigner-2026', PRO),
        src('Union des Français de l’étranger : ouvrir un compte en banque au Japon', 'https://ufe.org/dossier-pays/japon/ouvrir-un-compte-en-banque-au-japon/', 'association de Français de l’étranger'),
        src('Kanpai : quel ordre suivre pour l’installation, compte bancaire ou appartement', 'https://www.kanpai.fr/societe-japonaise/questions/quel-ordre-suivre-linstallation-japon-compte-bancaire-ou-appartement', EXPATS),
      ],
    },
    logement: {
      items: [
        'Passer par une agence demande en général des justificatifs financiers (relevé bancaire, contrat de travail) et un garant japonais, qui peut être remplacé par une société de caution.',
        'Le coût d’entrée comprend souvent le shikikin (dépôt de garantie, remboursé à la sortie moins le nettoyage et les réparations) et le reikin (« cadeau » au propriétaire, non remboursable), chacun d’un ou deux mois de loyer, plus des frais d’agence parfois d’un mois.',
        'Les propriétaires regardent le statut de visa : visas de travail et de conjoint généralement privilégiés.',
      ],
      alerte: 'Sans agence, les conditions sont moins contraignantes mais les loyers sont plus élevés, d’après un site d’expatriés. Faites relire tout bail.',
      sources: [
        src('Union des Français de l’étranger : habiter au Japon, le logement', 'https://ufe.org/dossier-pays/japon/habiter-au-japon-le-logement/', 'association de Français de l’étranger'),
        src('Modern Living Japan : les 5 documents essentiels pour louer un appartement', 'https://modernlivingjapan.com/fr/blog/top-5-documents-you-need-before-renting-an-apartment-in-japan', PRO),
        src('Sakuraflow : louer au Japon, reikin, garants et vocabulaire (en anglais)', 'https://www.sakuraflow.app/blog/renting-apartment-japan', PRO),
      ],
    },
  },
  MEX: {
    paiements: {
      items: [
        'La grande majorité des achats se font en espèces ; gardez des pesos pour les petits commerces et vendeurs ambulants. L’euro n’est pas un moyen de paiement courant.',
        'Les distributeurs sont nombreux dans les grandes villes et les zones touristiques, plus rares dans les endroits reculés. Utilisez-les à l’intérieur d’un bâtiment et en plein jour.',
        'Frais par retrait avec une carte internationale : de l’ordre de 20 à 150 pesos selon les sources et les banques, en plus des frais de votre banque. Choisissez de retirer en pesos, refusez la conversion, et évitez l’avance de trésorerie sur carte de crédit.',
        'Le pourboire (propina) est courant mais volontaire.',
      ],
      alerte: 'Les montants varient selon les sources : confirmez auprès de votre banque.',
      sources: [
        src('N26 : utiliser sa carte bancaire au Mexique', 'https://n26.com/fr-fr/utiliser-carte-bancaire-au-mexique', PRO),
        src('ExpatDen : distributeurs automatiques au Mexique', 'https://www.expatden.com/fr/mexico/distributeur-automatique-mexique/', EXPATS),
        src('Lonely Planet : argent au Mexique', 'https://www.lonelyplanet.fr/destinations/amerique/mexique/argent', GUIDE),
      ],
    },
    banque: {
      items: [
        'Il faut en principe la carte de résidence temporaire, le passeport, le numéro CURP et un justificatif de domicile. Certaines personnes disent avoir ouvert un compte (Intercam, CiBanco) sans ces documents, mais il vaut mieux les avoir.',
        'Une source peu fiable indique que, depuis 2022, les banques n’ouvrent des comptes qu’aux titulaires d’un titre de séjour : à vérifier auprès de chaque banque.',
      ],
      alerte: 'Les exigences varient selon l’établissement. Les dépôts élevés peuvent déclencher une déclaration au fisc mexicain, selon une source juridique.',
      sources: [
        src('Union des Français de l’étranger : ouvrir un compte en banque au Mexique', 'https://ufe.org/dossier-pays/mexique/ouvrir-un-compte-en-banque-au-mexique/', 'association de Français de l’étranger'),
        src('PVTistes : ouvrir un compte en banque au Mexique', 'https://pvtistes.net/dossiers/pvt-mexique-ouvrir-un-compte-en-banque-sur-place/2', EXPATS),
        src('Mexperience : ouvrir et gérer un compte bancaire (en anglais)', 'https://www.mexperience.com/opening-and-managing-a-bank-account-in-mexico/', EXPATS),
      ],
    },
    logement: {
      items: [
        'Un guide d’installation conseille de commencer par un hébergement de courte durée, puis de signer un bail une fois le compte bancaire et la pièce d’identité en place.',
        'Aucune source fiable n’a été trouvée sur les cautions et garants exigés : interrogez l’agence ou un juriste local.',
      ],
      sources: [
        src('PVTistes : le guide des pvtistes au Mexique', 'https://pvtistes.net/dossiers/le-guide-des-pvtistes-au-mexique/17/', EXPATS),
      ],
    },
  },
  DOM: {
    paiements: {
      items: [
        'Taxis, transports en commun et beaucoup de restaurants n’acceptent que les espèces, en pesos dominicains. Dollars et euros servent pour certaines excursions ou taxes, toujours en espèces.',
        'Les témoignages de voyageurs sont prudents sur la carte bancaire : acceptée dans les grands hôtels, magasins et établissements, rarement ailleurs ; la fraude à la carte est signalée comme élevée.',
        'Chaque retrait est facturé (frais de la banque locale et de la banque française) ; certains distributeurs plafonnent les retraits pour les cartes étrangères. Retirez de plus grosses sommes moins souvent.',
        'Beaucoup de restaurants et d’hôtels ajoutent 10 % de frais de service sur la facture.',
      ],
      alerte: 'Sources surtout composées de forums de voyageurs : témoignages, pas données officielles. Demandez le prix avant de monter dans un taxi d’aéroport.',
      sources: [
        src('Bouger Voyager : conseils argent en République dominicaine', 'https://www.bouger-voyager.com/conseils-argent-republique-dominicaine/', GUIDE),
        src('Routard (forum) : quelle devise utiliser en République dominicaine', 'https://www.routard.com/forums/t/quelle-devise-utiliser-en-republique-dominicaine-ou-faire-le-change/288551', FORUM),
        src('Lonely Planet : argent en République dominicaine', 'https://www.lonelyplanet.fr/destinations/amerique/republique-dominicaine/argent', GUIDE),
      ],
    },
    banque: {
      items: [
        'Les exigences varient selon la banque et même selon l’agence. Les non-résidents peuvent en général ouvrir un compte avec un passeport valide, une pièce d’identité et un justificatif de statut migratoire, en se présentant en personne.',
        'Des témoignages rapportent des demandes très inégales : lettre de recommandation, lettre de l’employeur, trois mois de relevés. Les avis divergent sur l’utilité de la cédula (carte d’identité pour étrangers).',
      ],
      alerte: 'Les appréciations sur les banques plus ou moins souples viennent de forums : anecdotiques.',
      sources: [
        src('Expat.com : ouvrir un compte bancaire en République dominicaine (en anglais)', 'https://www.expat.com/en/guide/central-america/dominican-republic/12429-opening-a-bank-account-in-the-dominican-republic.html', EXPATS),
        src('Cyril Jarnias : services bancaires pour expatriés en République dominicaine', 'https://www.cyriljarnias.com/expatriation/guide-installer-republique-dominicaine-expatrie/gestion-financiere-international-services-bancaires-expatries-republique-dominicaine/', PRO),
        src('Expat.com (forum) : compte bancaire pour étranger', 'https://www.expat.com/fr/forum/amerique-centrale/republique-dominicaine/1055366-compte-bancaire-pour-etranger.html', FORUM),
      ],
    },
    logement: {
      items: [
        'Aucune source fiable n’a été trouvée sur les usages de location et les cautions en République dominicaine.',
      ],
      alerte: 'Renseignez-vous auprès de l’ambassade ou d’un professionnel local avant tout versement.',
      sources: [
        src('Expat.com (forum) : créer un compte bancaire en République dominicaine', 'https://www.expat.com/fr/forum/amerique-centrale/republique-dominicaine/saint-domingue/501569-creer-un-compte-bancaire-en-republique-dominicaine.html', FORUM),
      ],
    },
  },
  EGY: {
    paiements: {
      items: [
        'Les prix sont en livres égyptiennes : demandez le prix en livres avant de payer et payez en livres. Quelques lieux très touristiques acceptent les euros.',
        'Les cartes Visa et Mastercard fonctionnent dans les lieux modernes, pas partout : gardez des espèces, surtout hors des grandes villes.',
        'Les distributeurs délivrent des livres égyptiennes ; un distributeur devant une agence bancaire est souvent plus sûr. Refusez la conversion proposée. Plusieurs frais s’additionnent (votre banque, le distributeur).',
        'Il est difficile de changer des livres en euros à l’aéroport du Caire : dépensez-les ou changez en bureau officiel en ville.',
        'Le pourboire (baksheesh) est d’usage ; prévoyez de petites coupures.',
      ],
      alerte: 'Les montants de frais divergent selon les sites de voyage cités : contactez votre banque.',
      sources: [
        src('Routard : argent en Égypte', 'https://www.routard.com/guide/egypte/414/argent.htm', GUIDE),
        src('Le Mag Voyage : monnaie en Égypte', 'https://www.lemagvoyage.fr/egypte/monnaie-egypte-livre-egyptienne-change-retraits-carte-bancaire-pourboires/', GUIDE),
        src('Bouger Voyager : la monnaie en Égypte', 'https://www.bouger-voyager.com/monnaie-en-egypte/', GUIDE),
      ],
    },
    banque: {
      items: [
        'En théorie, un étranger peut ouvrir un compte en Égypte ; en pratique la démarche est plus compliquée pour un non-résident. La plupart des banques exigent un titre de séjour valable au moins six mois, selon un guide.',
        'La Banque centrale a rappelé que la réglementation n’interdit pas d’ouvrir des comptes à des clients étrangers non résidents.',
        'Les grandes banques proposent souvent des comptes en devises (USD, EUR).',
      ],
      sources: [
        src('Cyril Jarnias : services bancaires pour expatriés en Égypte', 'https://www.cyriljarnias.com/?p=32068', PRO),
        src('Amwal Al Ghad : la banque centrale simplifie les services bancaires pour les étrangers non résidents (en anglais)', 'https://en.amwalalghad.com/?p=169414', PRESSE),
        src('Expat Focus : banque en Égypte (en anglais)', 'https://www.expatfocus.com/egypt/guide/egypt-banking', EXPATS),
      ],
    },
    logement: {
      items: [
        'Aucune source fiable n’a été trouvée sur la location, la caution ou la carte de séjour en Égypte dans cette recherche.',
      ],
      alerte: 'Renseignez-vous auprès de l’ambassade de France ou d’un professionnel local avant de louer.',
      sources: [
        src('Expat Focus : banque en Égypte (en anglais)', 'https://www.expatfocus.com/egypt/guide/egypt-banking', EXPATS),
      ],
    },
  },
  CAN: {
    paiements: {
      items: [
        'La carte est la norme et le paiement sans contact fonctionne presque partout (limite par transaction autour de 250 $ selon des sites ; elle varie selon l’émetteur). Apple Pay et Google Pay sont très répandus.',
        'Les prix affichés sont en général hors taxes : les taxes s’ajoutent à la caisse.',
        'Pourboire : 15 à 20 % au restaurant, 10 à 15 % en taxi selon des guides. Les terminaux calculent souvent le pourboire sur le total taxes incluses ; l’option « sur mesure » permet de le calculer avant taxes.',
        'Les distributeurs des stations-service et dépanneurs facturent le plus de frais. Une carte sans frais de transaction à l’étranger limite le coût.',
      ],
      alerte: 'Les montants viennent de sites de voyage et de banques en ligne : vérifiez les conditions de votre banque.',
      sources: [
        src('Le Mag Voyage : monnaie au Canada', 'https://www.lemagvoyage.fr/canada/monnaie-canada/', GUIDE),
        src('Canada Spirit : monnaie et pourboires', 'https://www.canada-spirit.com/fr/guides/monnaie-pourboires/', GUIDE),
        src('N26 : utiliser sa carte bancaire au Canada', 'https://n26.com/fr-fr/utiliser-carte-bancaire-au-canada', PRO),
      ],
    },
    banque: {
      items: [
        'Le numéro d’assurance sociale (NAS) ne peut pas se demander avant l’arrivée ; il se demande dès l’arrivée, en ligne ou dans un bureau de Service Canada.',
        'Un compte chèques de base ne demande pas le NAS. La plupart des grandes banques acceptent une adresse temporaire, à mettre à jour ensuite. Une banque permet d’ouvrir un compte jusqu’à 90 jours avant l’arrivée.',
        'Les banques demandent surtout une preuve d’adresse et une pièce d’identité avec photo.',
      ],
      sources: [
        src('Wealthsimple : ouvrir un compte bancaire au Canada pour les nouveaux arrivants', 'https://www.wealthsimple.com/fr-ca/learn/how-to-open-a-bank-account-in-canada-newcomers', 'banque en ligne (source commerciale)'),
        src('Banque Nationale : nouveaux arrivants', 'https://www.bnc.ca/particuliers/conseils/immigration.html', 'banque (source commerciale)'),
        src('PVTistes : FAQ Canada', 'https://pvtistes.net/faq-canada/', EXPATS),
      ],
    },
    logement: {
      items: [
        'Évitez de signer un bail à long terme avant l’arrivée. Sans historique de crédit canadien, le propriétaire ne peut généralement pas faire d’enquête de crédit.',
        'Les règles sur les dépôts, avances de loyer et recours varient selon la province (par exemple Commission de la location immobilière en Ontario, Tribunal administratif du logement au Québec). Confirmez-les auprès de l’organisme de la province.',
        'Pour quitter un logement avant la fin du bail, l’accord du propriétaire est nécessaire.',
      ],
      sources: [
        src('PVTistes : FAQ Canada, commentaires', 'https://pvtistes.net/faq-canada/commentaires-1/', EXPATS),
        src('SiLaw : louer au Canada sans historique de crédit (2026)', 'https://silaws.com/rent-canada-no-credit-2026-fr/', PRO),
        src('Immigration.ca : l’absence d’historique de crédit canadien peut compliquer la location', 'https://immigration.ca/fr/immigrants-lack-of-canadian-credit-history-can-mean-trouble-renting-apartments/', PRO),
      ],
    },
  },
};
