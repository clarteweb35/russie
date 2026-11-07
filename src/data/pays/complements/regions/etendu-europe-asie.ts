import { ABSENT, f, s } from '../outils';
import type { Complement } from '../outils';

// Autriche, Pays-Bas, Irlande, Chine, Inde, Indonésie, Vietnam, Sénégal, Brésil, Cuba (recherche du 6 novembre 2026)
export const LOT6: Record<string, Complement> = {
  AUT: {
    paiements: f(
      ['L’Autriche reste attachée au liquide : la carte est acceptée dans de nombreux magasins, hôtels, restaurants et stations-service, mais pas partout. Gardez un peu d’espèces pour les petits achats.', 'Les retraits à un distributeur d’une autre banque que la vôtre peuvent être facturés.'],
      [s('Office du tourisme d’Autriche : monnaie et banques', 'https://www.austria.info/fr/informations-pratiques/monnaie-et-banques', 'off'), s('Bento : comment payer en Autriche', 'https://www.bento.travel/fr/blog/how-to-pay-in-austria', 'gui')],
    ),
    banque: f(
      ['Le compte courant standard est le Girokonto. En agence, il faut se présenter avec une pièce d’identité valide et le certificat d’enregistrement de domicile (Meldezettel). Les banques en ligne vérifient souvent la résidence à partir de la pièce d’identité.', 'Un compte de base (Basiskonto) existe pour les résidents de l’UE.'],
      [s('N26 : ouvrir un compte bancaire en Autriche', 'https://n26.com/fr-fr/blog/comment-ouvrir-un-compte-bancaire-en-autriche', 'pro'), s('Work in Austria : ouvrir un compte (en anglais)', 'https://www.workinaustria.com/en/employees/your-personal-guide/relocation/opening-a-bank-account', 'exp'), s('Ministère autrichien de la protection des consommateurs : compte de base (fiche en français)', 'https://www.konsumentenfragen.at/konsumentenfragen/Zentrale_Elemente/Materialien/Basiskonto/Infoblatt_Basiskonto_Franzoesisch.pdf', 'off')],
    ),
    logement: f(
      ['Ne signez qu’avec un contrat de bail écrit, et ne louez que si vous pouvez payer le loyer chaque mois (document de la Basse-Autriche). Une source peu fiable cite une caution d’environ trois mois de loyer : à vérifier avec le bailleur.'],
      [s('Land Niederösterreich : fiche d’information en français', 'https://www.noe.gv.at/noe/Sozialhilfe/16._Infoblatt_Franzoesisch_OK.pdf', 'off')],
      ABSENT('le montant légal de la caution autrichienne'),
    ),
  },
  NLD: {
    paiements: f(
      ['Les cartes internationales peuvent ne pas fonctionner partout : les Pays-Bas utilisent surtout des cartes de débit locales (Maestro, V PAY, en cours de remplacement par des cartes de débit Mastercard et Visa). Visa de crédit et American Express sont moins acceptées.', 'Prévoyez une carte de débit (Visa Debit, Mastercard Debit ou Maestro) et un peu d’espèces.'],
      [s('Expat Republic : dire adieu à l’ancienne carte de débit néerlandaise (en anglais)', 'https://www.expatrepublic.com/say-goodbye-to-your-old-dutch-debit-card/', 'exp'), s('Rotterdam.info : ouvrir un compte bancaire (en anglais)', 'https://www.rotterdam.info/en/internationals/guide/opening-a-bank-account', 'off')],
      'Source non datée sur le remplacement de Maestro : confirmez auprès de votre banque.',
    ),
    banque: f(
      ['Plusieurs banques acceptent l’ouverture sans numéro de citoyen (BSN), mais le compte peut être bloqué si vous ne le communiquez pas dans les 90 jours.', 'Documents usuels : BSN, pièce d’identité, justificatif de domicile (bail par exemple) et, le cas échéant, titre de séjour.'],
      [s('Holland Times : ouvrir un compte avant d’avoir son BSN (en anglais)', 'https://www.hollandtimes.nl/2025-edition-6-august/opening-a-dutch-bank-account-before-getting-your-bsn-this-is-how-you-do-it/', 'pre'), s('N26 : ouvrir un compte bancaire aux Pays-Bas', 'https://n26.com/fr-fr/blog/comment-ouvrir-un-compte-bancaire-aux-pays-bas', 'pro')],
    ),
    logement: f(
      ['L’inscription à la mairie (qui donne le BSN) demande un contrat de location ou une déclaration du logeur avec copie de sa pièce d’identité.'],
      [s('Expat.com (forum) : inscription BSN', 'https://www.expat.com/fr/forum/europe/pays-bas/amsterdam/273406-inscription-bsn.html', 'for')],
      ABSENT('le montant et les conditions du dépôt de garantie néerlandais'),
    ),
  },
  IRL: {
    paiements: f(
      [ABSENT('les usages de paiement par carte et en espèces') + ' Demandez les tarifs de retrait et de paiement hors de France à votre banque.'],
      [s('Dublin.ie : ouvrir un compte bancaire (en anglais)', 'https://dublin.ie/live/getting-settled/bank-credit-union-accounts/', 'off')],
    ),
    banque: f(
      ['Un numéro PPS n’est pas obligatoire pour ouvrir un compte, mais certaines banques peuvent le demander. Pièce d’identité et preuve d’adresse suffisent en général ; une adresse étrangère peut être acceptée selon la banque.', 'Des banques en ligne permettent d’ouvrir un compte avant l’arrivée, avec IBAN et carte de débit.'],
      [s('Raisin : ouvrir un compte bancaire en Irlande (en anglais)', 'https://www.raisin.com/en-ie/banking/how-to-open-a-bank-account-ireland', 'pro'), s('Settle.ie : banque en Irlande (en anglais)', 'https://settle.ie/guides/banking-in-ireland/', 'exp')],
    ),
    logement: f(
      ['La caution est en général d’un mois de loyer, parfois deux, plus souvent le premier mois d’avance. Tous les bailleurs privés doivent enregistrer leur bail auprès du Residential Tenancies Board (RTB) ; vous pouvez le vérifier sur rtb.ie.', 'Le numéro PPS est souvent demandé dans le dossier de location.'],
      [s('MyHome.ie : ce qu’il faut pour louer en Irlande (en anglais)', 'https://news.myhome.ie/myhome-living/what-you-need-to-rent-a-property-in-ireland-34612', 'pre'), s('Trinity College Dublin : démarches pratiques (en anglais)', 'https://www.tcd.ie/study/international/after-you-arrive/life-admin', 'off')],
    ),
  },
  CHN: {
    paiements: f(
      ['Le paiement mobile domine. Alipay et WeChat Pay acceptent désormais les cartes étrangères (Visa, Mastercard) : ajoutez votre carte dans le portefeuille de l’application, avant le départ si possible. Installez les deux applications, l’une pouvant échouer.', 'Selon des sources de 2026, les frais de transaction internationaux de 3 % sont levés pour les paiements inférieurs à 200 RMB. Une carte étrangère ne permet pas les transferts entre particuliers.', 'Les espèces restent acceptées ; Visa et Mastercard fonctionnent surtout dans les hôtels internationaux et grands magasins. Des distributeurs d’aéroport acceptent les cartes internationales.'],
      [s('Banque populaire de Chine (Nankin) : guide de paiement pour les visiteurs (PDF)', 'https://nanjing.pbc.gov.cn/goutongjiaoliu/attachDir/2025/12/2025123019304983548.pdf', 'off'), s('Wander in China : Alipay pour les étrangers (2026)', 'https://www.wanderinchina.com/fr/survival-guide/payment/alipay/', 'exp'), s('Le Petit Journal Shanghai : WeChat et Alipay s’ouvrent aux cartes internationales', 'https://lepetitjournal.com/shanghai/actualites/wechat-et-alipay-souvrent-enfin-aux-cartes-bancaires-internationales-364736', 'pre')],
      'Témoignage de forum : une carte Visa française a été acceptée par Alipay mais pas par WeChat Pay avant le départ. Testez avant de partir.',
    ),
    banque: f([ABSENT('l’ouverture d’un compte bancaire par un étranger')], [s('Wander in China : paiements', 'https://wanderinchina.com/fr/survival-guide/payment/', 'exp')]),
    logement: f([ABSENT('la location et la caution en Chine')], [s('Wander in China : guide de survie', 'https://wanderinchina.com/fr/survival-guide/payment/', 'exp')]),
  },
  IND: {
    paiements: f(
      ['Les paiements par UPI (virement mobile) se développent pour les voyageurs étrangers : un programme dédié existe, mais il est limité à certains pays et à certains aéroports selon des sites d’information.', 'Pour les frais de distributeur, les roupies en espèces et l’usage des cartes, la recherche n’a pas trouvé de source fiable : renseignez-vous auprès de votre banque.'],
      [s('SBNRI : les étrangers qui voyagent en Inde peuvent utiliser l’UPI (en anglais)', 'https://sbnri.com/blog/nri-bank-accounts/nris-and-foreigners-can-use-upi-in-india', 'pro'), s('Inde e-Visa : l’accessibilité d’UPI s’élargit', 'https://india-evisa.it.com/fr/expansion-of-india-upi-accessibility/', 'pro')],
      'Les comptes NRE/NRO et l’UPI concernent les Indiens de l’étranger, pas les touristes.',
    ),
    banque: f([ABSENT('l’ouverture d’un compte par un étranger non indien')], [s('SBNRI : UPI pour les NRI (en anglais)', 'https://sbnri.com/blog/nri-banking/upi-for-nri', 'pro')]),
    logement: f([ABSENT('la caution et la location en Inde')], [s('SBNRI : UPI pour les NRI (en anglais)', 'https://sbnri.com/blog/nri-banking/upi-for-nri', 'pro')]),
  },
  IDN: {
    paiements: f(
      ['Le paiement par QR code (QRIS) et les virements sont la norme dans les marchés, restaurants et commerces locaux, mais les espèces en roupies restent utiles.', 'Les frais de carte, de distributeur et de change peuvent peser lourd. Un forum recommande de ne retirer qu’en agence bancaire à cause de cas de copie de carte (skimming) signalés à Bali.'],
      [s('Bali Villa Hub : éviter les frais de transaction à l’étranger (en anglais)', 'https://www.balivillahub.com/blog/avoid-3-foreign-transaction-fees-while-traveling-bali', 'pro'), s('Bali Villa Hub : moyens de paiement des locations de villas (en anglais)', 'https://www.balivillahub.com/blog/common-payment-methods-bali-villa-rentals', 'pro')],
    ),
    banque: f(
      ['Les avis divergent sur le KITAS (permis de séjour) : certaines sources disent qu’il n’est plus exigé à Bali, d’autres l’exigent (par exemple pour un compte en roupies). Pièces habituelles : passeport, KITAS, numéro de téléphone indonésien, justificatif d’adresse (contrat de location).', 'Dépôt initial modeste selon les sources (500 000 roupies chez BCA) ; l’obtention d’un KITAS peut prendre six à dix semaines.'],
      [s('Cekindo : ouvrir un compte à Bali (en anglais)', 'https://www.cekindo.com/blog/open-bank-account-in-bali', 'pro'), s('Statrys : meilleures banques pour les étrangers à Bali (en anglais)', 'https://statrys.com/blog/best-banks-for-foreigners-in-bali', 'pro'), s('Expat.com (forum) : compte sans KITAS (en anglais)', 'https://www.expat.com/en/forum/asia/indonesia/bali/432372-open-bank-account-no-kitas.html', 'for')],
      'Les sources se contredisent : demandez à la banque.',
    ),
    logement: f(
      ['Aucun montant de caution n’a été trouvé. Les villas préfèrent les paiements traçables pour les grosses sommes (virement) ; demandez les modalités exactes avant de payer.'],
      [s('Bali Villa Hub : moyens de paiement (en anglais)', 'https://www.balivillahub.com/blog/common-payment-methods-bali-villa-rentals', 'pro')],
    ),
  },
  VNM: {
    paiements: f([ABSENT('les usages de paiement et les distributeurs') + ' Retirer avec une carte étrangère cumule frais du distributeur, conversion en dongs et frais de votre banque.'], [s('Wise : ouvrir un compte au Vietnam (en anglais)', 'https://transferwise.com/au/blog/opening-a-bank-account-in-vietnam', 'pro')]),
    banque: f(
      ['Un étranger doit généralement disposer d’un titre de séjour d’au moins 12 mois pour ouvrir un compte et utiliser une carte ; avec un visa touristique, il est difficile de trouver un produit adapté.', 'Le passeport est le plus souvent demandé, parfois un justificatif de résidence ; un dépôt initial est exigé, son montant dépend de la banque. Retraits dans le réseau de sa banque généralement gratuits.'],
      [s('Wise : ouvrir un compte bancaire au Vietnam (en anglais)', 'https://transferwise.com/au/blog/opening-a-bank-account-in-vietnam', 'pro'), s('Move to Asia : compte bancaire et carte (en anglais)', 'https://movetoasia.com/en/vietnam/bank-account-card/', 'exp')],
    ),
    logement: f([ABSENT('la caution et la location au Vietnam')], [s('Expat.com (forum) : ouvrir un compte (en anglais)', 'https://www.expat.com/en/forum/asia/vietnam/800765-opening-bank-account.html', 'for')]),
  },
  SEN: {
    paiements: f(
      ['Le franc CFA est lié à l’euro. Les espèces sont le moyen de paiement principal ; les cartes ne sont acceptées que par certains commerçants.', 'Wave et Orange Money sont très utilisés par les habitants. Wave accepte tout numéro sénégalais ; Orange Money exige une SIM Orange. Les deux ne sont pas interopérables.'],
      [s('Au Sénégal : l’argent, le change, les devises', 'https://au-senegal.com/l-argent-le-change-les-devises,049.html', 'exp'), s('Wise : moyens de paiement au Sénégal (en anglais)', 'https://wise.com/gb/hub/payment-methods/senegal', 'pro'), s('Afrotools : Wave contre Orange Money (2026)', 'https://afrotools.com/fr/blog/wave-vs-orange-money-senegal-2026/', 'pro')],
      'Les plafonds de transaction cités par un site tiers (1,5 et 2 millions de francs CFA) sont à vérifier.',
    ),
    banque: f(
      ['Un compte local n’est pas obligatoire mais utile pour un séjour de plusieurs mois ou un salaire sur place. L’ouverture à distance est possible, en 2 à 8 semaines selon la banque.', 'Banques citées : SGBS, Ecobank, BOA, Banque Atlantique.'],
      [s('Les Afriques : banques et mobile money au Sénégal pour la diaspora (2026)', 'https://lesafriques.com/2026/09/banques-mobile-money-senegal-diaspora-2026/', 'pre'), s('Cyril Jarnias : services bancaires pour expatriés au Sénégal', 'https://www.cyriljarnias.com/?p=31893', 'pro')],
    ),
    logement: f([ABSENT('les usages et montants de caution locative au Sénégal')], [s('Les Afriques : banques et mobile money au Sénégal', 'https://lesafriques.com/2026/09/banques-mobile-money-senegal-diaspora-2026/', 'pre')]),
  },
  BRA: {
    paiements: f(
      ['Les cartes Visa et Mastercard étrangères fonctionnent presque partout, selon des témoignages. Les coûts totaux varient fortement selon les sources (de 1 à 8 % par opération, y compris la taxe IOF) : vérifiez les frais de votre banque.', 'Les frais d’accès des distributeurs sont signalés comme élevés. Le Pix (virement instantané) exige un compte brésilien.'],
      [s('Holafly : moyens de paiement au Brésil (en anglais)', 'https://esim.holafly.com/travel-tips/brazil-payment-method/', 'pro'), s('Welcome to Brazil : guide bancaire pour les étrangers (en anglais)', 'https://welcome-to-brazil.vercel.app/en/blog/brazil-banking-guide-foreigners', 'exp')],
      'Chiffres issus de forums et d’un site de fintech : à confirmer.',
    ),
    banque: f(
      ['Le CPF (numéro fiscal) est la première étape, obtenable même sans venir au Brésil ; aucune banque n’ouvre de compte sans lui. Il ne suffit pas toujours : pour un compte ordinaire, une carte de résident étranger (CRNM/RNM) est souvent exigée.', 'Les fintechs (Nubank, C6) sont décrites comme les plus simples. Les sources se contredisent sur l’acceptation d’un visa touristique.'],
      [s('Rio Times : ouvrir un compte au Brésil en tant qu’étranger (en anglais)', 'https://www.riotimesonline.com/how-to-open-a-bank-account-in-brazil-as-a-foreigner/', 'pre'), s('Expat.com (forum) : compte brésilien pour expatriés (en anglais)', 'https://www.expat.com/en/forum/south-america/brazil/1050571-brazilian-bank-account-for-expats-p3.html', 'for')],
    ),
    logement: f([ABSENT('le garant (fiador) et la caution (caução) pour louer au Brésil') + ' Beaucoup de bailleurs exigent un paiement du loyer par virement.'], [s('Welcome to Brazil : guide bancaire pour les étrangers (en anglais)', 'https://welcome-to-brazil.vercel.app/en/blog/brazil-banking-guide-foreigners', 'exp')]),
  },
  CUB: {
    paiements: f(
      ['Apportez des euros en espèces : presque tous les établissements privés (casas particulares, paladares) n’acceptent que le liquide. Les distributeurs en pesos cubains (CUP) sont souvent vides et plafonnés ; les banques cubaines ne vendent pas d’euros.', 'Selon des sources de 2026, Visa et Mastercard ne fonctionnent plus à Cuba depuis le 6 juin 2026 : ne comptez pas sur la carte pour payer ou retirer.'],
      [s('Routard (forum) : cash ou carte à Cuba', 'https://www.routard.com/forums/t/cash-ou-carte-a-cuba/202324', 'for'), s('Discover MNI : Cuba suspend les transactions Visa et Mastercard (en anglais)', 'https://discovermni.com/?p=103902', 'pre'), s('Le Mag Voyage : perdre sa carte bancaire à Cuba (informations 2026)', 'https://www.lemagvoyage.fr/cuba/perdre-sa-carte-bancaire-a-cuba-opposition-retrait-d-urgence-solutions/', 'gui')],
      'Information récente et grave, lue dans des sources non officielles : confirmez auprès de votre banque et du ministère avant de partir. Vérifiez aussi la limite d’argent liquide déclarable à la douane.',
    ),
    banque: f([ABSENT('l’ouverture d’un compte bancaire par un étranger')], [s('Routard (forum) : transfert d’argent à Cuba', 'https://www.routard.com/forums/t/transfert-dargent-a-cuba/380084', 'for')]),
    logement: f([ABSENT('la location de longue durée et les cautions')], [s('Routard (forum) : cash ou carte à Cuba', 'https://www.routard.com/forums/t/cash-ou-carte-a-cuba/202324', 'for')]),
  },
};
