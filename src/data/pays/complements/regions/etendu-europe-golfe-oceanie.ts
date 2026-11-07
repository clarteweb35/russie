import { f, s } from '../outils';
import type { Complement } from '../outils';

// Paiements : pays nordiques, baltes, Europe centrale et orientale, euro, Caucase, Golfe, Océanie (recherche du 6 novembre 2026).
const SOUS = 'Frais variables selon la banque : confirmez les tarifs avant le départ.';

// Règle commune aux pays qui paient en euros (sources officielles)
const EURO = 'Pour un paiement par carte en euros, les frais bancaires ne doivent pas dépasser ceux d’un paiement national en euros (ministère de la Justice) ; le retrait au distributeur dépend de votre banque, et le distributeur peut ajouter sa commission.';
const SRC_EURO = [s('Ministère de la Justice : payer à l’étranger', 'https://www.justice.fr/fiche/payer-etranger', 'off'), s('Service-public.fr : payer à l’étranger', 'https://www.service-public.gouv.fr/particuliers/vosdroits/F2404?lang=en', 'off')];

export const LOT9: Record<string, Complement> = {
  DNK: {
    paiements: f(['Gardez quelques couronnes pour les petits achats et les vendeurs ambulants. À la caisse comme au distributeur, choisissez d’être débité en couronnes danoises pour éviter des frais de change plus élevés. Plafonds de retrait de l’ordre de 2 000 à 3 000 couronnes par opération.'], [s('The Local Danemark : carte ou espèces pour les touristes (en anglais)', 'https://www.thelocal.dk/20230703/explained-is-it-better-for-tourists-to-use-cash-or-card-in-denmark', 'pre'), s('N26 : utiliser sa carte bancaire au Danemark', 'https://n26.com/fr-fr/utiliser-carte-bancaire-au-danemark', 'pro')], SOUS),
  },
  SWE: {
    paiements: f(['Les paiements par carte ont progressé d’environ 50 % en cinq ans selon la banque centrale suédoise, tandis que les retraits d’espèces ont baissé d’un tiers. Le distributeur avec votre carte habituelle reste le moyen le plus simple de se procurer des couronnes.'], [s('Lonely Planet : argent en Suède', 'https://www.lonelyplanet.fr/destinations/europe/suede/argent', 'gui'), s('Routard (forum) : paiements par espèces ou carte en Suède', 'https://www.routard.com/forums/t/paiements-par-especes-ou-carte-en-suede/301682', 'for')], SOUS),
  },
  NOR: {
    paiements: f(['La Norvège est le pays le plus « sans espèces » : plus de 95 % des transactions se font par carte (Norges Bank, 2024), y compris pour les petits montants, et les espèces sont parfois refusées à Oslo, Bergen et Stavanger. Gardez quelques couronnes pour les vendeurs au bord des routes.'], [s('Bento : comment payer en Norvège', 'https://www.bento.travel/fr/blog/how-to-pay-in-norway', 'gui'), s('Le Mag Voyage : monnaie en Norvège', 'https://www.lemagvoyage.fr/norvege/monnaie-norvege/', 'gui')], SOUS),
  },
  ISL: {
    paiements: f(['Presque tout se paie par carte en Islande, selon un forum de voyageurs ancien (vers 2015) : un voyageur n’a dépensé qu’une trentaine d’euros en liquide.'], [s('Routard (forum) : argent liquide en Islande', 'https://www.routard.com/forums/t/argent-liquide-en-islande/116963', 'for')], 'Témoignage ancien : à confirmer.'),
  },
  EST: {
    paiements: f(['La carte est très répandue, y compris pour les petits achats ; le sans contact passe presque partout. L’Estonie utilise l’euro. Gardez une petite réserve d’espèces pour les marchés et lieux isolés. ' + EURO], [...SRC_EURO, s('Le Mag Voyage : monnaie en Estonie', 'https://www.lemagvoyage.fr/estonie/monnaie-estonie-euro-paiements-retraits-carte-bancaire-pourboires/', 'gui')]),
  },
  LVA: {
    paiements: f(['La carte est bien acceptée, surtout à Riga, avec des exceptions en zone rurale et pour certains services. La Lettonie utilise l’euro. ' + EURO], [...SRC_EURO, s('Le Mag Voyage : monnaie en Lettonie', 'https://www.lemagvoyage.fr/lettonie/monnaie-lettonie/', 'gui')]),
  },
  LTU: {
    paiements: f(['La Lituanie utilise l’euro : un voyageur qui en a déjà n’a pas à changer de devise. Gardez une petite réserve d’espèces pour les marchés et les lieux isolés. ' + EURO], [...SRC_EURO, s('Le Mag Voyage : perdre sa carte bancaire en Lituanie', 'https://www.lemagvoyage.fr/lituanie/perdre-sa-carte-bancaire-en-lituanie-opposition-retrait-d-urgence-solutions/', 'gui')]),
  },
  POL: {
    paiements: f(['La Pologne utilise le zloty, pas l’euro. Évitez les distributeurs Euronet (frais élevés, taux défavorables) et payez en zlotys quand le terminal propose le choix : un forum cite un surcoût pouvant aller jusqu’à 8 % en payant en euros. Un change en banque offre en général un meilleur taux.'], [s('Lonely Planet : argent en Pologne', 'https://www.lonelyplanet.fr/destinations/europe/pologne/argent', 'gui'), s('N26 : utiliser sa carte bancaire en Pologne', 'https://n26.com/fr-fr/utiliser-carte-bancaire-en-pologne', 'pro'), s('Routard (forum) : récapitulatif argent en Pologne', 'https://www.routard.com/forums/t/recapitulatif-argent-en-pologne/126898', 'for')], 'Le chiffre de 8 % vient d’un message de forum.'),
  },
  CZE: {
    paiements: f(['La Tchéquie utilise la couronne tchèque, pas l’euro : des frais de conversion peuvent s’appliquer. Choisissez la monnaie locale au terminal ou au distributeur et évitez les distributeurs Euronet.'], [s('Les Frontaliers : ce que peut vous coûter votre carte bancaire en vacances', 'https://www.lesfrontaliers.lu/consommation/ce-que-peut-vous-couter-votre-carte-bancaire-en-vacances/', 'pre')], 'Aucune source spécifique à la Tchéquie : conseil général pour les pays hors zone euro.'),
  },
  HUN: {
    paiements: f(['La Hongrie utilise le forint ; l’euro n’est pas utilisable pour les achats courants. Les distributeurs Euronet peuvent facturer un forfait de 920 forints si vous refusez leur taux : préférez les distributeurs de banques, et choisissez d’être débité en forints.'], [s('N26 : utiliser sa carte bancaire en Hongrie', 'https://n26.com/fr-fr/utiliser-carte-bancaire-en-hongrie', 'pro'), s('Ideoz Voyages : change euro et forints en Hongrie', 'https://voyages.ideoz.fr/hongrie/budapest/guide-pratique/change-euro-forints/', 'gui')], SOUS),
  },
  ROU: {
    paiements: f(['Visa et Mastercard sont couramment acceptées dans les grandes villes ; en zone rurale, il faut généralement payer en espèces. La Roumanie utilise le leu (RON), pas l’euro : la conversion est facturée.'], [s('Bento : comment payer en Roumanie', 'https://www.bento.travel/fr/blog/how-to-pay-in-romania', 'gui'), s('Lonely Planet : argent en Roumanie', 'https://www.lonelyplanet.fr/destinations/europe/roumanie/argent', 'gui'), s('Les Frontaliers : ce que peut vous coûter votre carte bancaire en vacances', 'https://www.lesfrontaliers.lu/consommation/ce-que-peut-vous-couter-votre-carte-bancaire-en-vacances/', 'pre')], SOUS),
  },
  BGR: {
    paiements: f(['La Bulgarie est passée à l’euro début 2026 (voir la fiche du pays) : les anciens guides qui parlent de leva ne sont plus à jour. Les cartes sont acceptées surtout en ville et dans les stations balnéaires, beaucoup moins en zone rurale. ' + EURO], [...SRC_EURO, s('Lonely Planet : argent en Bulgarie (ancien, avant l’euro)', 'https://www.lonelyplanet.fr/destinations/europe/bulgarie/argent', 'gui')], 'Source Lonely Planet antérieure à l’euro : seules les indications sur la carte en zone rurale restent utiles.'),
  },
  SRB: {
    paiements: f(['Le dinar serbe est utilisé ; les distributeurs sont dans toutes les grandes villes et agglomérations moyennes.'], [s('Routard : argent et budget en Serbie', 'https://www.routard.com/fr/guide/a/argent-et-budget/europe/serbie', 'gui'), s('Lonely Planet : argent en Serbie', 'https://www.lonelyplanet.fr/destinations/europe/serbie/argent/devise', 'gui')], SOUS),
  },
  ALB: {
    paiements: f(['L’Albanie est l’un des rares pays où votre banque et le distributeur peuvent tous deux facturer des frais. Les cartes V Pay ne fonctionnent pas, et les paiements par carte sont réglés en leks : refusez toute autre devise. Gardez des leks en espèces : transports publics et nombreux restaurants et cafés n’acceptent que les leks.'], [s('Adventure Albania : monnaie en Albanie', 'https://adventurealbania.com/fr/monnaie-albanie/', 'gui')], SOUS),
  },
  BIH: {
    paiements: f(['Les distributeurs acceptant Visa et Mastercard sont partout et délivrent des marks convertibles. Lisez les frais affichés avant de confirmer l’opération.'], [s('Lonely Planet : argent en Bosnie', 'https://www.lonelyplanet.fr/destinations/europe/bosnie/argent/devise', 'gui'), s('Le Mag Voyage : perdre sa carte en Bosnie-Herzégovine', 'https://www.lemagvoyage.fr/bosnie-herzegovine/perdre-sa-carte-bancaire-en-bosnie-herzegovine-opposition-retrait-d-urgence-solutions/', 'gui')], SOUS),
  },
  MNE: {
    paiements: f(['Le Monténégro utilise l’euro sans être membre de l’Union européenne : pas de conversion pour un voyageur de la zone euro. Vérifiez les frais de retrait avant de valider.'], [s('Ideoz Voyages : payer au Monténégro, frais et commissions', 'https://voyages.ideoz.fr/payer-au-montenegro-frais-commissions/', 'gui'), s('Routard (forum) : retrait d’argent au Monténégro', 'https://www.routard.com/forums/t/retrait-dargent-au-montenegro/64923', 'for')], SOUS),
  },
  MLT: {
    paiements: f(['À Malte, on paie beaucoup en liquide (77 % des consommateurs préfèrent le cash selon une étude de 2022) : gardez des espèces. ' + EURO], [...SRC_EURO], SOUS),
  },
  SVN: {
    paiements: f(['La Slovénie est un pays où l’on paie beaucoup en liquide (73 % des consommateurs préfèrent le cash selon une étude de 2022). ' + EURO], [...SRC_EURO], SOUS),
  },
  CYP: {
    paiements: f([EURO + ' L’euro n’a pas cours dans le nord de l’île, sous contrôle turc.'], [...SRC_EURO]),
  },
  LUX: { paiements: f([EURO], [...SRC_EURO, s('Paperjam : le Luxembourg, pays du paiement instantané', 'https://paperjam.lu/article/luxembourg-pays-paiement-insta', 'pre')]) },
  MCO: { paiements: f(['Monaco et Andorre utilisent l’euro sans appartenir à la zone euro. ' + EURO], [...SRC_EURO]) },
  AND: { paiements: f(['Andorre et Monaco utilisent l’euro sans appartenir à la zone euro. ' + EURO], [...SRC_EURO]) },
  SVK: { paiements: f([EURO], [...SRC_EURO]) },
  ARE: {
    paiements: f(['Le dirham est lié au dollar américain. La carte est acceptée presque partout, du taxi au petit café, et le paiement mobile est répandu ; distributeurs et bureaux de change abondent. Gardez un peu de liquide pour les petits commerces et les taxis.', 'Une carte de voyage sans frais à l’étranger limite les coûts. Dans les restaurants d’hôtels, le service est inclus.'], [s('Direction générale du Trésor : fiche Émirats arabes unis', 'https://www.tresor.economie.gouv.fr/Pays/AE', 'off'), s('Airalo : comment payer à Dubaï en tant que touriste', 'https://www.airalo.com/fr/blog/comment-payer-a-dubai-en-tant-que-touriste-guide-et-checklist', 'pro'), s('Lonely Planet : argent aux Émirats arabes unis', 'https://www.lonelyplanet.fr/destinations/moyen-orient/eau/argent', 'gui')], SOUS),
  },
  OMN: {
    paiements: f(['Les espèces restent nécessaires dans les petites entreprises (restaurants bon marché, gares routières, hôtels économiques) et en zone rurale. Guides et portiers d’hôtel attendent un pourboire ; les frais de service ajoutés aux factures ne vont pas directement aux serveurs.'], [s('Lonely Planet : argent à Oman', 'https://www.lonelyplanet.fr/destinations/moyen-orient/oman/argent', 'gui')], SOUS),
  },
  GEO: {
    paiements: f(['Les distributeurs acceptent en général Visa et Mastercard. Les cartes ne sont acceptées que dans les meilleurs hôtels et restaurants de Tbilissi, et beaucoup moins ailleurs : gardez des espèces. Prévenez votre banque de votre séjour, certaines bloquent les retraits à l’étranger.'], [s('Lonely Planet : argent en Géorgie', 'https://www.lonelyplanet.fr/destinations/europe/georgie/argent', 'gui'), s('Routard : argent et budget en Géorgie', 'https://www.routard.com/fr/guide/a/argent-et-budget/europe/georgie', 'gui')], 'Sources de plusieurs années : à confirmer.'),
  },
  ARM: {
    paiements: f(['Les cartes Visa ou Mastercard permettent d’obtenir des espèces dans les grandes banques ; les bureaux de change sont nombreux dans les villes. Un guide ancien annonçait peu de distributeurs : la situation a changé.'], [s('Lonely Planet : argent en Arménie', 'https://www.lonelyplanet.fr/destinations/europe/armenie/argent/devise', 'gui')], 'Sources de plusieurs années : à confirmer.'),
  },
  AZE: {
    paiements: f(['La monnaie est le nouveau manat. Les distributeurs sont abondants dans les grandes villes et acceptent en général Visa et Mastercard. Les drams arméniens ne se changent pas en Azerbaïdjan.'], [s('Lonely Planet : argent en Azerbaïdjan', 'https://www.lonelyplanet.fr/destinations/europe/azerbaidjan/argent', 'gui')], 'Sources de plusieurs années : à confirmer.'),
  },
  KAZ: {
    paiements: f(['Les distributeurs (« Bankomat ») sont dans les banques, centres commerciaux et gares ; la plupart acceptent Maestro, Cirrus, Visa et Mastercard. Les grosses coupures (10 000 ou 20 000 tenges) sont mal acceptées dans les transports, taxis et supérettes.'], [s('Lonely Planet : argent au Kazakhstan', 'https://www.lonelyplanet.fr/destinations/asie/kazakhstan/argent', 'gui')], 'Sources de plusieurs années : à confirmer.'),
  },
  AUS: {
    paiements: f(['La carte est acceptée presque partout, y compris dans de nombreuses zones isolées, et le sans contact est très avancé. À Gold Coast, les bus n’acceptent plus les espèces. Gardez un peu de liquide en secours. Le pourboire n’est pas obligatoire : le service est généralement inclus.'], [s('Evaneos : la monnaie en Australie', 'https://www.evaneos.fr/australie/voyage/explorer/16572-1-la-monnaie-en-australie-comment-payer-et-conseils-d-usages/', 'gui'), s('Bento : comment payer en Australie', 'https://www.bento.travel/fr/blog/how-to-pay-in-australia', 'gui'), s('Tourism Australia : conseils pratiques', 'https://www.australia.com/fr-fr/facts-and-planning/about-australia/useful-tips.html', 'off')], SOUS),
  },
  NZL: {
    paiements: f(['Seules les transactions par carte de crédit et par carte de débit sans contact peuvent faire l’objet d’une surcharge, limitée au coût d’acceptation du paiement ; des frais allant jusqu’à 2 % sont courants. La Commission du commerce reçoit les plaintes sur les surcharges excessives ou mal annoncées.'], [s('Stripe : surcharges sur les cartes de crédit en Nouvelle-Zélande', 'https://stripe.com/fr/resources/more/credit-card-surcharges-for-nz-businesses', 'pro')], 'Source commerciale : confirmez auprès de la Commission du commerce néo-zélandaise.'),
  },
};
