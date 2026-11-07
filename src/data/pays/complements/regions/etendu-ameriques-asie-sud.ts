import { ABSENT, f, s } from '../outils';
import type { Complement } from '../outils';

// Costa Rica, Pérou, Argentine, Kenya, Tanzanie, Maurice, Maldives, Sri Lanka, Cambodge, Jordanie (recherche du 6 novembre 2026)
const SANS_LOGEMENT = (src: ReturnType<typeof s>[]) => f([ABSENT('la caution et les usages de location')], src);

export const LOT7: Record<string, Complement> = {
  CRI: {
    paiements: f(
      ['Les dollars sont largement acceptés dans les zones touristiques, souvent avec des prix affichés en USD ; repas locaux, bus et petits achats se règlent en colones. Si le prix est affiché en dollars, payez en dollars, sinon il est recalculé.', 'Le paiement par carte n’est pas généralisé ; certains commerçants ajoutent un supplément (de 3 à 8 % selon un guide) : demandez avant de payer. Les distributeurs délivrent colones et dollars, avec des frais.', 'Beaucoup de restaurants ajoutent déjà 10 % de service ; les taxis n’attendent pas de pourboire.'],
      [s('Le Mag Voyage : monnaie au Costa Rica', 'https://www.lemagvoyage.fr/costa-rica/monnaie-costa-rica-colon-usd-change-retraits-carte-bancaire-pourboires/', 'gui'), s('Lonely Planet : argent au Costa Rica', 'https://www.lonelyplanet.fr/destinations/amerique/costa-rica/argent', 'gui'), s('Evaneos : la monnaie au Costa Rica', 'https://www.evaneos.fr/costa-rica/voyage/explorer/16539-1-la-monnaie-au-costa-rica-comment-payer-et-conseils-d-usages/', 'gui')],
    ),
    banque: f([ABSENT('l’ouverture d’un compte bancaire local')], [s('Lonely Planet : argent au Costa Rica', 'https://www.lonelyplanet.fr/destinations/amerique/costa-rica/argent', 'gui')]),
    logement: SANS_LOGEMENT([s('Lonely Planet : argent au Costa Rica', 'https://www.lonelyplanet.fr/destinations/amerique/costa-rica/argent', 'gui')]),
  },
  PER: {
    paiements: f(
      ['Le Pérou reste une économie très tournée vers le liquide, même à Lima : payer en monnaie locale (soles) limite les pertes de change.', 'Prévoyez une carte internationale pour limiter les frais de retrait et de paiement ; vérifiez les tarifs avec votre banque.'],
      [s('Rio Times : banque au Pérou pour les étrangers (2026)', 'https://www.riotimesonline.com/banking-peru-foreigners-2026/', 'pre'), s('PVTistes : ouvrir un compte bancaire au Pérou', 'https://pvtistes.net/compte-bancaire-perou/', 'exp')],
    ),
    banque: f(
      ['Le carnet d’étranger (Carné de Extranjería) est le document clé : les banques demandent généralement ce carnet, un passeport, un justificatif d’adresse et un dépôt initial. Un touriste sans carnet ne peut en principe pas ouvrir de compte classique.', 'Depuis juin 2025, un compte simplifié (cuenta básica) peut s’ouvrir avec un passeport, selon une règle du régulateur bancaire rapportée par la presse péruvienne.'],
      [s('La República : l’autorité bancaire autorise les étrangers à ouvrir des comptes de base (2025)', 'https://larepublica.pe/economia/2025/03/23/sbs-extranjeros-en-peru-podran-abrir-cuentas-bancarias-presentando-estos-documentos-en-2025-desde-cuando-aplica-la-norma-cuentas-basicas-cuentas-especiales-de-ahorro-atmp-2097301', 'pre'), s('Cyril Jarnias : services bancaires pour expatriés au Pérou', 'https://www.cyriljarnias.com/expatriation/sinstaller-au-perou-expatrie-guide-complet/gestion-financiere-internationale-perou-services-bancaires-expatries/', 'pro'), s('Lima Easy : le carnet d’étranger (en anglais)', 'https://limaeasy.com/peru-guide/glossary-terms-peru/carne-de-extranjeria-peru-s-id-card-for-foreigners', 'exp')],
    ),
    logement: f(['Le carnet d’étranger est aussi décrit comme la clé pour louer. Aucune source fiable n’a été trouvée sur les cautions et garanties.'], [s('Lima Easy : le carnet d’étranger (en anglais)', 'https://limaeasy.com/peru-guide/glossary-terms-peru/carne-de-extranjeria-peru-s-id-card-for-foreigners', 'exp')]),
  },
  ARG: {
    paiements: f(
      ['L’écart entre le dollar officiel et le dollar « blue » (marché parallèle) s’est beaucoup réduit en 2026 selon des sites de voyage : changer des espèces au marché parallèle est donc devenu moins avantageux. La presse locale signale des mesures de change récentes.', 'Un mélange de carte de crédit et d’un peu d’espèces donne en général le meilleur résultat selon un guide ; les bureaux de change officiels sont conseillés pour changer des espèces. Le change à l’aéroport reste le pire.'],
      [s('Rio Times : le dollar blue et les expatriés (2026)', 'https://www.riotimesonline.com/argentina-blue-dollar-convergence-expats-2026/', 'pre'), s('Buenos Aires Times : mesures de change (janvier 2026)', 'https://www.batimes.com.ar/news/economy/argentina-unveils-currency-measures-as-black-market-peso-slumps.phtml', 'pre'), s('Andean Trails : conseils sur le dollar blue (en anglais)', 'https://www.andeantrails.co.uk/blog/blue-dollar-argentina-travel-money-tips/', 'gui')],
      'Les écarts annoncés (de 1 à 15 %) viennent de sites de voyage, sans source officielle de 2026. Consultez le taux officiel avant de changer.',
    ),
    banque: f([ABSENT('l’ouverture d’un compte bancaire par un étranger')], [s('Argentina Visa Law : argent (en anglais)', 'https://argentinavisalaw.com/guides/money', 'pro')]),
    logement: SANS_LOGEMENT([s('Argentina Visa Law : argent (en anglais)', 'https://argentinavisalaw.com/guides/money', 'pro')]),
  },
  KEN: {
    paiements: f(
      ['M-Pesa (argent mobile) domine les paiements : une infographie annonce 85 % des Kényans contre 22 % pour les cartes. Un touriste peut s’inscrire au magasin Safaricom de l’aéroport avec son passeport et une carte SIM locale.', 'La carte est surtout acceptée dans les hôtels, lodges et camps de safari haut de gamme ; en zone rurale et petites boutiques, espèces ou argent mobile. Certains établissements facturent en dollars.', 'Frais à deux niveaux (banque locale et banque française) : vérifiez votre plafond de retrait. Demandez si le prix du safari inclut droits d’entrée, repas, transferts et pourboires.'],
      [s('Safarifind : argent au Kenya, devise, cartes, distributeurs et pourboires (2026)', 'https://safarifind.com/fr/blog/money-in-kenya-currency-cards-atms-tipping-2026', 'gui'), s('Routard : argent et budget au Kenya', 'https://www.routard.com/guide/kenya/437/argent_et_budget.htm', 'gui'), s('Le Mag Voyage : monnaie au Kenya', 'https://www.lemagvoyage.fr/kenya/monnaie-kenya-shilling-kes-change-retraits-carte-bancaire-pourboires/', 'gui')],
    ),
    banque: f([ABSENT('l’ouverture d’un compte par un non-résident')], [s('Safarifind : argent au Kenya (2026)', 'https://safarifind.com/fr/blog/money-in-kenya-currency-cards-atms-tipping-2026', 'gui')]),
    logement: SANS_LOGEMENT([s('Safarifind : argent au Kenya (2026)', 'https://safarifind.com/fr/blog/money-in-kenya-currency-cards-atms-tipping-2026', 'gui')]),
  },
  TZA: {
    paiements: f(
      ['Le shilling tanzanien est la monnaie officielle, sur le continent comme à Zanzibar. Il se trouve rarement hors du pays : changez ou retirez sur place. Changez dollars et shillings séparément plutôt que euros, puis dollars, puis shillings.', 'Les dollars sont souvent acceptés pour hôtels, excursions et pourboires, mais des règles de 2025 exigent de payer en shillings les biens et services locaux ; les consignes réelles sont à vérifier.', 'Les distributeurs acceptent Visa ou Mastercard mais sont souvent en panne ; retirez le matin, pas le vendredi après-midi. Les pourboires de safari sont d’usage sans être obligatoires.'],
      [s('Safarifind : argent en Tanzanie (2026)', 'https://safarifind.com/fr/blog/money-in-tanzania-2026-currency-cards-atms-tipping', 'gui'), s('Routard : transactions en shillings en Tanzanie, peu de changements pour les touristes', 'https://www.routard.com/fr/mag/actu/a/transactions-locales-en-shillings-en-tanzanie-peu-de-changements-pour-les-touristes', 'pre'), s('Routard : argent et budget en Tanzanie', 'https://www.routard.com/fr/guide/a/argent-et-budget/afrique/tanzanie', 'gui')],
    ),
    banque: f([ABSENT('l’ouverture d’un compte par un étranger')], [s('Safarifind : argent en Tanzanie (2026)', 'https://safarifind.com/fr/blog/money-in-tanzania-2026-currency-cards-atms-tipping', 'gui')]),
    logement: SANS_LOGEMENT([s('Safarifind : argent en Tanzanie (2026)', 'https://safarifind.com/fr/blog/money-in-tanzania-2026-currency-cards-atms-tipping', 'gui')]),
  },
  MUS: {
    paiements: f(
      ['La roupie mauricienne (MUR) est la monnaie locale. Payez en roupies ou par carte, et refusez la conversion en euros proposée par le terminal. Les roupies ne s’échangent pas hors de l’île : inutile d’en acheter avant le départ.', 'Certains prestataires touristiques affichent des prix en euros mais encaissent en roupies au taux du jour. Les distributeurs proches des zones touristiques peuvent facturer leurs propres frais.', 'Le pourboire n’est pas une obligation.'],
      [s('Le Mag Voyage : monnaie à Maurice', 'https://www.lemagvoyage.fr/maurice/monnaie-maurice/', 'gui'), s('Lonely Planet : argent à l’île Maurice', 'https://www.lonelyplanet.fr/destinations/afrique/ile-maurice-et-rodrigues/argent', 'gui'), s('Routard (forum) : change ou retrait d’argent liquide à Maurice', 'https://www.routard.com/forums/t/change-ou-retrait-dargent-liquide-a-lile-maurice/216545', 'for')],
    ),
    banque: f([ABSENT('l’ouverture d’un compte par un expatrié')], [s('Expat.com (forum) : où faire du change à Maurice', 'https://www.expat.com/fr/forum/afrique/ile-maurice/982567-ou-faire-du-change.html', 'for')]),
    logement: SANS_LOGEMENT([s('Expat.com (forum) : Île Maurice', 'https://www.expat.com/fr/forum/afrique/ile-maurice/982567-ou-faire-du-change.html', 'for')]),
  },
  MDV: {
    paiements: f(
      ['Les resorts facturent en dollars américains et se règlent par carte au départ : la plupart des visiteurs n’ont jamais besoin de rufiyaa. Les rufiyaa servent à Malé et sur les îles habitées, certaines îles fonctionnant en espèces uniquement.',
       'Les factures de resort ajoutent un service de 10 % et une taxe touristique (TGST) dont le taux diffère selon les sources (12 % ou 17 %), plus une taxe verte par personne et par nuit : vérifiez ces lignes sur votre devis.', 'Les rufiyaa ne se rééchangent pas facilement contre des dollars ou d’autres devises.'],
      [s('Resort Life : quelle monnaie utiliser aux Maldives', 'https://resortlife.travel/fr/maldives-monnaie', 'gui'), s('Lux Atolls : argent aux Maldives', 'https://luxatolls.com/fr/journal/maldives-currency/', 'gui'), s('Travel Online : monnaie des Maldives (en anglais)', 'https://www.travelonline.com/maldives/currency', 'gui')],
      'Aucune information fiable trouvée sur les frais de distributeur. Taux de taxe divergents : lisez votre devis.',
    ),
    banque: f([ABSENT('l’ouverture d’un compte')], [s('Resort Life : monnaie des Maldives', 'https://resortlife.travel/fr/maldives-monnaie', 'gui')]),
    logement: SANS_LOGEMENT([s('Resort Life : monnaie des Maldives', 'https://resortlife.travel/fr/maldives-monnaie', 'gui')]),
  },
  LKA: {
    paiements: f(
      ['Presque tout se paie en roupies sur place, hôtels et restaurants compris ; on peut aussi payer par carte à de nombreux endroits et retirer aux distributeurs. Changez vos roupies restantes avant le départ.', 'Les frais de retrait dépendent de la banque du distributeur : une enquête cite Bank of Ceylon et People’s Bank sans frais, Nations Trust à 200 roupies, Commercial Bank à 300 roupies, en plus des frais de votre banque. Refusez le taux proposé par le distributeur et choisissez la roupie.', 'Pourboire au restaurant : jusqu’à 10 % en plus du service compris, en espèces.'],
      [s('Tour du Mondiste : retirer de l’argent sans frais au Sri Lanka', 'https://www.tourdumondiste.com/retirer-argent-sans-frais-sri-lanka', 'gui'), s('Lonely Planet : argent au Sri Lanka', 'https://www.lonelyplanet.fr/destinations/asie/sri-lanka/argent', 'gui'), s('Routard (forum) : retrait d’argent au Sri Lanka', 'https://www.routard.com/forums/t/retrait-dargent-au-sri-lanka/14195', 'for')],
    ),
    banque: f([ABSENT('l’ouverture d’un compte bancaire par un étranger')], [s('Lonely Planet : argent au Sri Lanka', 'https://www.lonelyplanet.fr/destinations/asie/sri-lanka/argent', 'gui')]),
    logement: SANS_LOGEMENT([s('Lonely Planet : argent au Sri Lanka', 'https://www.lonelyplanet.fr/destinations/asie/sri-lanka/argent', 'gui')]),
  },
  KHM: {
    paiements: f(
      ['Le dollar américain reste la monnaie principale (environ 80 % des transactions selon la banque nationale citée par un guide) ; les riels servent aux petites sommes, moto-taxis, tuk-tuk et marchés. Gardez l’équivalent d’une dizaine de dollars en riels.', 'Le distributeur le plus courant (ABA) prélève un montant fixe d’environ 5 dollars par retrait quel que soit le montant ; avec une carte étrangère, on ne retire en général que des dollars. Certains commerces ajoutent environ 3 % pour un paiement par carte.', 'La carte fonctionne surtout dans les hôtels et certains restaurants.'],
      [s('Backpack Moments : l’argent au Cambodge (en anglais)', 'https://backpackmoments.com/money-in-cambodia/', 'gui'), s('Le Mag Voyage : monnaie au Cambodge', 'https://www.lemagvoyage.fr/cambodge/monnaie-cambodge-riel-usd-change-retraits-carte-pourboires/', 'gui'), s('Le Petit Journal Cambodge : prendre des dollars avant d’arriver', 'https://lepetitjournal.com/cambodge/prendre-dollars-avant-arriver-cambodge-354452', 'pre')],
    ),
    banque: f(
      ['Ouvrir un compte dans une banque cambodgienne est recommandé pour éviter les frais de retrait à chaque opération. La preuve de résidence (bail, facture, certificat du Sangkat) est essentielle. Le dépôt initial varie beaucoup : aucun minimum pour un simple compte d’épargne dans certaines banques, 100 à 500 dollars dans d’autres.'],
      [s('Union des Français de l’étranger : ouvrir un compte en banque au Cambodge', 'https://ufe.org/dossier-pays/cambodge/ouvrir-un-compte-en-banque-au-cambodge/', 'exp'), s('Cyril Jarnias : services bancaires pour expatriés au Cambodge', 'https://www.cyriljarnias.com/?p=36471', 'pro')],
    ),
    logement: SANS_LOGEMENT([s('Union des Français de l’étranger : Cambodge', 'https://ufe.org/dossier-pays/cambodge/ouvrir-un-compte-en-banque-au-cambodge/', 'exp')]),
  },
  JOR: {
    paiements: f(
      ['Les distributeurs sont faciles à trouver dans les villes moyennes et grandes ; chaque retrait est commissionné (un forum cite 5 dinars et un plafond de 250 dinars par retrait : témoignage à vérifier). Certains établissements ajoutent 2 à 5 % pour un paiement par carte.', '1 dinar jordanien vaut environ 1,30 euro : attention aux erreurs de calcul. Prévenez votre banque de votre voyage.', 'Le Jordan Pass regroupe le visa (pour trois nuits ou plus) et l’accès à de nombreux sites dont Pétra ; il s’achète en ligne avant le départ. Vérifiez les tarifs officiels.'],
      [s('Routard : argent et budget en Jordanie', 'https://www.routard.com/fr/guide/a/argent-et-budget/moyen-orient/jordanie', 'gui'), s('Lonely Planet : argent en Jordanie', 'https://www.lonelyplanet.fr/destinations/moyen-orient/jordanie/argent', 'gui'), s('Le Mag Voyage : monnaie en Jordanie', 'https://www.lemagvoyage.fr/jordanie/monnaie-en-jordanie-dinar-jordanien-jod-change-retraits-carte-bancaire-pourboires/', 'gui')],
    ),
    banque: f([ABSENT('l’ouverture d’un compte par un étranger')], [s('Lonely Planet : argent en Jordanie', 'https://www.lonelyplanet.fr/destinations/moyen-orient/jordanie/argent', 'gui')]),
    logement: SANS_LOGEMENT([s('Lonely Planet : argent en Jordanie', 'https://www.lonelyplanet.fr/destinations/moyen-orient/jordanie/argent', 'gui')]),
  },
};
