import { f, s } from '../outils';
import type { Complement } from '../outils';

// Paiements : Afrique du Sud, Caraïbes, Amérique centrale, Afrique de l'Ouest et de l'Est, Pacifique, Guyanes (recherche du 6 novembre 2026).
// Les pays pour lesquels aucune source n'a été trouvée restent « À documenter ».
const SOUS = 'Frais variables selon la banque : confirmez les tarifs avant le départ.';
const CARAIBES = [s('Lonely Planet : argent aux Bahamas', 'https://www.lonelyplanet.fr/destinations/amerique/bahamas/argent', 'gui'), s('Travel Noire : guide des pourboires dans les Caraïbes (en anglais)', 'https://travelnoire.com/caribbean-tipping-guide/', 'gui')];

export const LOT10: Record<string, Complement> = {
  ZAF: {
    paiements: f(['Les cartes sont largement acceptées dans les grandes villes, y compris en sans contact ; certains petits commerces et marchés demandent encore des espèces. Les distributeurs sont rares dans les petites localités et quasi absents dans les campagnes.', 'Deux couches de frais peuvent s’appliquer (votre banque et le distributeur) : choisissez les rands au retrait pour éviter la conversion dynamique. Cachez votre code et refusez l’aide d’un inconnu près du distributeur ; changez de machine si quelqu’un insiste.', 'Le pourboire fait partie du quotidien : 10 à 15 % au restaurant (non inclus automatiquement), quelques rands pour un gardien de voiture.'],
      [s('Safarifind : argent en Afrique du Sud (2026)', 'https://safarifind.com/fr/blog/money-in-south-africa-currency-cards-tipping-2026', 'gui'), s('Le Mag Voyage : monnaie en Afrique du Sud', 'https://www.lemagvoyage.fr/afrique-du-sud/monnaie-afrique-du-sud-rand-change-retraits-carte-bancaire-pourboires/', 'gui'), s('Lonely Planet : argent en Afrique du Sud', 'https://www.lonelyplanet.fr/destinations/afrique/afrique-du-sud/argent', 'gui')], SOUS),
  },
  JAM: {
    paiements: f(['Le dollar jamaïcain est la seule monnaie légale, mais les prix sont souvent affichés en dollars américains, acceptés partout selon Lonely Planet. Hôtels et restaurants appliquent souvent un taux moins favorable que le taux officiel. Un service de 10 à 15 % est souvent déjà inclus au restaurant ; sinon 10 %.'], [s('Lonely Planet : argent en Jamaïque', 'https://www.lonelyplanet.fr/destinations/amerique/jamaique/argent', 'gui'), s('Moon Jamaica : informations et services (en anglais)', 'https://www.moonjamaica.com/node/2203', 'gui')], SOUS),
  },
  BHS: {
    paiements: f(['Le dollar bahaméen est indexé 1 pour 1 sur le dollar américain, largement accepté. Ajoutez 6 à 8 % de taxes aux prix annoncés, parfois 15 % de service. Pourboire d’environ 15 % pour serveurs et chauffeurs de taxi, sauf service déjà inclus.'], CARAIBES, SOUS),
  },
  BRB: {
    paiements: f(['Le dollar américain circule beaucoup ; Visa et Mastercard passent dans la majorité des commerces touristiques. Les frais peuvent venir du distributeur et de votre banque. Un service de 10 % est souvent ajouté à l’addition ; sinon laissez 10 à 15 %.'], [s('Le Mag Voyage : monnaie à la Barbade', 'https://www.lemagvoyage.fr/barbade/monnaie-barbade-dollar-barbadien-change-retraits-carte-bancaire-pourboires/', 'gui'), s('Fodor’s : conseils aux voyageurs, Barbade (en anglais)', 'https://www.fodors.com/world/caribbean/barbados/travel-tips/tips-for-travelers-154078610', 'gui')], SOUS),
  },
  TTO: {
    paiements: f(['Les dollars américains sont parfois acceptés, mais mieux vaut payer en monnaie locale. Au restaurant, 10 à 15 % de pourboire est la norme, souvent déjà inclus sous forme de service.'], CARAIBES, SOUS),
  },
  LCA: {
    paiements: f(['La monnaie est le dollar des Caraïbes orientales. Un forum indique qu’une banque locale peut facturer environ 5 dollars des Caraïbes orientales par retrait selon ses accords avec la vôtre : témoignage à vérifier.'], [s('Routard : où changer les euros en dollars des Caraïbes', 'https://www.routard.com/forums/t/ou-changer-les-euros-en-dollars-des-caraibes/42864', 'for')], SOUS),
  },
  PAN: {
    paiements: f(['Le Panama utilise le dollar américain. Les retraits à l’étranger peuvent cumuler deux frais : celui de la banque qui exploite le distributeur et celui de votre banque.'], [s('Central America : comprendre l’argent en Amérique centrale (en anglais)', 'https://www.centralamerica.com/experiencing/travel/understanding-money-and-currency-in-central-america/', 'gui')], SOUS),
  },
  SLV: {
    paiements: f(['Le Salvador utilise le dollar américain. Les retraits à l’étranger peuvent cumuler deux frais : celui de la banque qui exploite le distributeur et celui de votre banque.'], [s('Central America : comprendre l’argent en Amérique centrale (en anglais)', 'https://www.centralamerica.com/experiencing/travel/understanding-money-and-currency-in-central-america/', 'gui')], SOUS),
  },
  BLZ: {
    paiements: f(['Le dollar du Belize a un taux de change fixe avec le dollar américain. Les retraits à l’étranger peuvent cumuler deux frais : distributeur et votre banque.'], [s('Central America : comprendre l’argent en Amérique centrale (en anglais)', 'https://www.centralamerica.com/experiencing/travel/understanding-money-and-currency-in-central-america/', 'gui')], SOUS),
  },
  GTM: {
    paiements: f(['Le Guatemala, le Honduras et le Nicaragua ont leur propre monnaie (quetzal, lempira, córdoba). Les retraits à l’étranger peuvent cumuler deux frais : distributeur et votre banque.'], [s('Central America : comprendre l’argent en Amérique centrale (en anglais)', 'https://www.centralamerica.com/experiencing/travel/understanding-money-and-currency-in-central-america/', 'gui')], SOUS),
  },
  BEN: {
    paiements: f(['Le Bénin utilise le franc CFA d’Afrique de l’Ouest (XOF), sans conversion avec le Mali, le Sénégal, le Togo, la Côte d’Ivoire, le Burkina Faso ou la Guinée-Bissau. Il n’est pas accepté dans la zone du franc CFA d’Afrique centrale. 1 euro vaut 655,957 francs CFA.'], [s('Le Mag Voyage : monnaie au Niger (zone XOF)', 'https://www.lemagvoyage.fr/niger/monnaie-niger/', 'gui')], 'Sources générales sur la zone XOF : cartes et distributeurs non documentés.'),
  },
  TGO: {
    paiements: f(['Le Togo utilise le franc CFA d’Afrique de l’Ouest (XOF), sans conversion avec le Bénin, le Mali, le Sénégal, la Côte d’Ivoire, le Burkina Faso ou la Guinée-Bissau. 1 euro vaut 655,957 francs CFA.'], [s('Le Mag Voyage : monnaie au Niger (zone XOF)', 'https://www.lemagvoyage.fr/niger/monnaie-niger/', 'gui')], 'Sources générales sur la zone XOF : cartes et distributeurs non documentés.'),
  },
  MOZ: {
    paiements: f(['Visa est la carte la plus utile et les dollars américains s’échangent aisément dans tout le pays ; seuls les billets de la dernière version sont acceptés. Un avis du ministère de 2018 signalait une suspension du réseau de cartes et conseillait d’emporter euros ou dollars : situation à vérifier.'], [s('Lonely Planet : argent au Mozambique', 'https://www.lonelyplanet.fr/destinations/afrique/mozambique/argent', 'gui'), s('MesVaccins.net : difficultés sur le réseau bancaire au Mozambique', 'https://www.mesvaccins.net/web/news/13123-difficultes-sur-le-reseau-bancaire-au-mozambique', 'pre')], 'Sources de plusieurs années : à confirmer.'),
  },
  MWI: {
    paiements: f(['Les distributeurs de Standard Bank et de National Bank acceptent Visa, Mastercard, Cirrus et Maestro. Les services de change sont limités : arrivez avec des liquidités.'], [s('Lonely Planet : argent au Malawi', 'https://www.lonelyplanet.fr/destinations/afrique/malawi/argent', 'gui')], SOUS),
  },
  UGA: {
    paiements: f(['Un forum de voyageurs rapporte que les distributeurs délivrent dollars ou shillings, avec des retraits souvent limités à 200 ou 300 dollars, et que Visa est peu acceptée, même dans des lodges à plus de 100 dollars la nuit. Courses et essence reviennent moins cher en shillings.'], [s('Routard (forum) : moyen de paiement en Ouganda', 'https://www.routard.com/forums/t/moyen-de-paiement-ouganda/213216', 'for')], 'Témoignage : à confirmer.'),
  },
  FJI: {
    paiements: f(['Les distributeurs ne délivrent que des dollars fidjiens : choisissez d’être débité en FJD pour éviter la conversion dynamique. Visa, Mastercard et American Express sont courantes, mais les marchés (Suva) demandent du liquide. Certains hébergements ajoutent 5 % pour un paiement par carte. Dans les petites localités, il peut ne pas y avoir de distributeur.'], [s('Backpack Moments : l’argent aux Fidji (en anglais)', 'https://backpackmoments.com/money-in-fiji/', 'gui'), s('Lonely Planet : argent aux Fidji', 'https://www.lonelyplanet.fr/destinations/oceanie-pacifique/fidji/argent', 'gui'), s('Routard : argent et budget aux îles Fidji', 'https://www.routard.com/fr/guide/a/argent-et-budget/oceanie/iles-fidji', 'gui')], SOUS),
  },
  SUR: {
    paiements: f(['Le système de paiement repose fortement sur les espèces, surtout hors des zones urbaines, même si l’usage de la carte progresse : prévoyez du liquide.'], [s('IEDOM : étude sur les habitudes de paiement en Guyane et aux alentours (PDF)', 'https://www.iedom.fr/IMG/pdf/gy_-_etude_thematique_habitudes_paiement_vf-2.pdf', 'off')], 'Source portant surtout sur la Guyane : à confirmer pour le Suriname.'),
  },
};
