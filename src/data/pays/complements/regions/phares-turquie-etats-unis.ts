import { EXPATS, FORUM, GUIDE, PRESSE, PRO, src } from '../outils';
import type { Complement } from '../outils';

// Turquie, États-Unis, Royaume-Uni, Allemagne (recherche du 6 novembre 2026)
export const LOT3: Record<string, Complement> = {
  TUR: {
    paiements: {
      items: [
        'La carte est largement acceptée dans les grandes villes et les zones touristiques. Les espèces restent utiles pour les petits commerces, les marchés et les pourboires.',
        'Demandez toujours le prix en livres turques et payez en monnaie locale. Certaines caisses (sites gérés par l’État, par exemple) refusent souvent les euros en espèces.',
        'Au distributeur ou au terminal, si l’on vous propose d’être débité en euros, refusez : choisissez la livre turque, sinon le taux appliqué est celui de l’opérateur (conversion dynamique, souvent défavorable).',
        'Les frais varient selon votre banque et selon la banque du distributeur : un retrait plus important en une fois limite les frais fixes. Préférez un distributeur rattaché à une agence bancaire.',
        'Il est difficile de reconvertir des livres turques en euros à la maison : changez ou dépensez-les avant de quitter le pays.',
      ],
      alerte: 'Les frais exacts dépendent de votre banque. Les sources sont des blogs, forums et sites de voyage dont les chiffres peuvent avoir changé.',
      sources: [
        src('Routard : argent et budget en Turquie', 'https://www.routard.com/guide/turquie/521/argent_et_budget.htm', GUIDE),
        src('Istanbul Tourist Information : retirer de l’argent en Turquie', 'https://istanbul-tourist-information.com/fr/retirer-de-l-argent-en-turquie/', GUIDE),
        src('N26 : utiliser sa carte bancaire en Turquie', 'https://n26.com/fr-fr/utiliser-carte-bancaire-en-turquie', PRO),
      ],
    },
    banque: {
      items: [
        'Le numéro fiscal (VKN) s’obtient auprès de l’administration fiscale locale (Vergi Dairesi) avec le passeport. Il est requis pour ouvrir un compte, signer un bail ou percevoir des revenus locaux.',
        'Documents souvent demandés : passeport, numéro fiscal, numéro de téléphone local, parfois un justificatif de domicile. Les sources se contredisent sur l’exigence d’un titre de séjour : demandez à la banque.',
        'Une présence physique en agence est généralement exigée ; prévoyez un conseiller anglophone et demandez si une traduction notariée du passeport est nécessaire.',
      ],
      sources: [
        src('Istanbul.com : comment ouvrir un compte bancaire turc', 'https://istanbul.com/fr/blog/living/how-to-open-turkish-bank-account', EXPATS),
        src('Cyril Jarnias : banques en Turquie pour expatriés', 'https://www.cyriljarnias.com/expatriation/guide-sinstaller-turquie-expatrie/banques-turquie-expatries-ouvrir-compte-services/', PRO),
      ],
    },
    logement: {
      items: [
        'Les bailleurs demandent généralement un numéro fiscal local, un relevé bancaire local, un justificatif de revenus et 1 à 3 mois de loyer d’avance, selon un guide pour expatriés.',
        'Un hébergement de courte durée au départ permet de réunir les papiers avant de signer un bail.',
      ],
      alerte: 'Le montant légal de la caution et les règles de restitution n’ont pas été confirmés : faites relire le bail par un professionnel local.',
      sources: [
        src('Cyril Jarnias : s’installer en Turquie', 'https://www.cyriljarnias.com/expatriation/guide-sinstaller-turquie-expatrie/', PRO),
      ],
    },
  },
  USA: {
    paiements: {
      items: [
        'La carte est le moyen de paiement courant ; payez par carte plutôt qu’en liquide. Si le terminal demande « credit or debit ? », répondez « debit » pour une carte de débit française.',
        'Le pourboire (tip) est d’usage et attendu au restaurant : environ 10 à 15 % chez les barmans et les chauffeurs de taxi selon Lonely Planet ; des guides citent 15 % ou plus au restaurant. Sur le ticket, une ligne « tip » est à remplir avant le total.',
        'Refusez la conversion proposée en euros par le terminal ou le distributeur : payez en dollars, le taux est presque toujours moins bon.',
        'Une banque peut facturer un montant fixe plus un pourcentage à chaque retrait ; retirez une somme importante en une fois. Prévenez votre banque avant de partir pour éviter le blocage de la carte.',
      ],
      alerte: 'Les taux de pourboire et les frais bancaires changent : certains guides cités datent de plusieurs années. Vérifiez les conditions de votre banque.',
      sources: [
        src('Lonely Planet : argent aux États-Unis', 'https://www.lonelyplanet.fr/destinations/amerique/usa/argent', GUIDE),
        src('Routard : argent et États-Unis, 5 astuces', 'https://www.routard.com/fr/mag/dossier/a/argent-et-etats-unis-5-astuces-pour-un-voyage-en-toute-serenite', GUIDE),
        src('Milesopedia : meilleure carte bancaire pour voyager aux États-Unis', 'https://milesopedia.fr/finance/meilleure-carte-bancaire-voyage-usa/', PRESSE),
      ],
    },
    banque: {
      items: [
        'Un numéro de sécurité sociale (SSN) n’est pas toujours exigé : l’ITIN (numéro fiscal pour étrangers) est accepté par la plupart des banques et coopératives de crédit, souvent en agence.',
        'Certaines banques acceptent un passeport seul, mais les règles varient selon la banque, l’agence et l’État. Un compte sans SSN ni ITIN a souvent des fonctions limitées.',
        'Appelez la banque avant de vous déplacer : des témoignages rapportent des refus chez une même banque selon l’agence.',
      ],
      sources: [
        src('PNC : ouvrir un compte aux États-Unis en tant que non-résident (en anglais)', 'https://www.pnc.com/insights/personal-finance/spend/how-to-open-us-bank-account-for-non-residents.html', PRO),
        src('Expat.com (forum) : créer un compte aux USA sans numéro de sécurité sociale', 'https://www.expat.com/fr/forum/amerique-du-nord/etats-unis/417048-creer-un-compte-en-banque-aux-usa-sans-numero-de-securite-sociale-p2.html', FORUM),
      ],
    },
    logement: {
      items: [
        'La recherche n’a pas trouvé de source fiable sur le dépôt de garantie ni sur l’historique de crédit demandé aux nouveaux arrivants. Ces règles varient fortement selon l’État et la ville.',
      ],
      alerte: 'Renseignez-vous auprès du consulat des États-Unis, de l’agence immobilière ou d’un conseil local avant de verser quoi que ce soit.',
      sources: [
        src('Expat.com (forum) : compte bancaire aux USA sans SSN', 'https://www.expat.com/fr/forum/amerique-du-nord/etats-unis/417048-creer-un-compte-en-banque-aux-usa-sans-numero-de-securite-sociale-p2.html', FORUM),
      ],
    },
  },
  GBR: {
    paiements: {
      items: [
        'Le Royaume-Uni utilise la livre sterling, pas l’euro. Payez en livres : les commerces qui prennent des euros appliquent un taux défavorable.',
        'Le paiement sans contact est très répandu (limite par transaction autour de 100 £ selon des sites de voyage). À Londres, les bus n’acceptent plus les espèces : prévoyez une carte sans contact ou une carte Oyster.',
        'Certains petits commerces, marchés ou lieux isolés n’acceptent que les espèces : gardez une petite réserve de livres.',
        'Au distributeur, choisissez d’être débité en livres, pas dans votre devise. Certaines banques facturent des frais pour l’usage d’une carte étrangère : vérifiez avant de partir.',
      ],
      alerte: 'Sites commerciaux pour l’essentiel : limites et frais à vérifier sur GOV.UK ou auprès de votre banque.',
      sources: [
        src('VisitBritain (tourisme officiel) : informations utiles', 'https://www.visitbritain.com/fr/preparez-votre-voyage/informations-utiles', 'source officielle (tourisme)'),
        src('N26 : utiliser sa carte bancaire au Royaume-Uni', 'https://n26.com/fr-fr/utiliser-carte-bancaire-au-royaume-uni', PRO),
        src('Le Mag Voyage : monnaie au Royaume-Uni', 'https://www.lemagvoyage.fr/royaume-uni/monnaie-royaume-uni/', GUIDE),
      ],
    },
    banque: {
      items: [
        'Les grandes banques britanniques demandent un justificatif de domicile pour ouvrir un compte : facture d’énergie, contrat de location ou lettre de banque confirmant l’adresse. Les nouveaux arrivants sans facture sont les plus gênés.',
        'Les exigences varient selon la banque : demandez-les avant de vous déplacer.',
      ],
      sources: [
        src('Wise : comment obtenir un justificatif de domicile au Royaume-Uni (en anglais)', 'https://wise.com/gb/blog/how-to-get-proof-of-address-uk', PRO),
        src('Flatfair : justificatifs de domicile acceptés (en anglais)', 'https://help.flatfair.co.uk/hc/en-gb/articles/360015772859-What-is-an-acceptable-proof-of-address', PRO),
      ],
    },
    logement: {
      items: [
        'En Angleterre, au pays de Galles et en Irlande du Nord, le dépôt de garantie versé à un bailleur privé ou à une agence doit être placé dans un système de protection agréé, dans un délai de 28 jours. L’Écosse a son propre régime.',
        'Un contrat de location récent et le certificat de protection du dépôt servent souvent de justificatifs de domicile.',
      ],
      sources: [
        src('Administration d’Irlande du Nord (nidirect) : système de dépôt de garantie, informations pour les propriétaires (en anglais)', 'https://nidirect.gov.uk/node/1272', 'source officielle'),
        src('Législation écossaise : règlement sur les systèmes de dépôt (en anglais)', 'https://legislation.gov.uk/sdsi/2011/9780111011850/regulation/22?view=plain', 'source officielle'),
      ],
    },
  },
  DEU: {
    paiements: {
      items: [
        'L’Allemagne reste attachée aux espèces : kiosques, marchés, petits commerces et horodateurs n’acceptent parfois que le liquide.',
        'Certains commerces acceptent la carte allemande Girocard mais refusent les cartes Visa ou Mastercard étrangères ; les restaurants de quartier sont cités. Les grandes enseignes et supermarchés acceptent en général la carte.',
        'Gardez 20 à 50 € en espèces pour les petits achats, et ne supposez pas qu’un restaurant acceptera la carte. Certains commerces fixent un minimum d’achat pour payer par carte.',
      ],
      sources: [
        src('Le Mag Voyage : monnaie en Allemagne', 'https://www.lemagvoyage.fr/monnaie-en-allemagne-euro-paiements-retraits-carte-bancaire-pourboires/', GUIDE),
        src('All About Berlin : Girocard (en anglais)', 'https://allaboutberlin.com/glossary/Girocard', EXPATS),
        src('Fodor’s (forum) : est-ce vraiment du cash uniquement en Allemagne ? (en anglais)', 'https://www.fodors.com/community/europe/is-it-really-cash-only-in-germany-austria-1670788/', FORUM),
      ],
    },
    banque: {
      items: [
        'Un compte local est presque indispensable pour recevoir un salaire et payer le loyer. Beaucoup de banques demandent l’attestation d’enregistrement de la mairie (Anmeldung).',
        'Sans attestation, le compte de base (Basiskonto) permet d’ouvrir un compte : toute personne résidant légalement dans l’UE y a droit. Des banques en ligne sont présentées comme plus simples pour les expatriés.',
        'La Schufa est l’historique de crédit : elle sert pour louer un appartement ou ouvrir un compte. Elle se crée après l’Anmeldung.',
      ],
      sources: [
        src('N26 : s’installer en Allemagne', 'https://n26.com/fr-fr/demenager-en-allemagne', PRO),
        src('Fintiba : compte bancaire allemand pour les étrangers', 'https://www.fintiba.com/fr/bank-account-germany', PRO),
        src('Le Petit Journal Berlin : la Schufa', 'https://lepetitjournal.com/berlin/installation/la-schufa-comprendre-ce-document-essentiel-66485', PRESSE),
      ],
    },
    logement: {
      items: [
        'Sans adresse, pas d’Anmeldung, donc pas de Schufa : un hébergement temporaire meublé permet de réunir les documents avant de chercher un bail.',
        'Les bailleurs demandent souvent la Schufa et une attestation d’absence de dettes locatives.',
      ],
      alerte: 'La caution (Kaution) est encadrée par la loi allemande : faites vérifier son montant et ses conditions de restitution avant de signer.',
      sources: [
        src('Cyril Jarnias : louer un logement à long terme en Allemagne', 'https://www.cyriljarnias.com/?p=32728', PRO),
        src('N26 : comment obtenir votre score Schufa', 'https://n26.com/fr-fr/blog/comment-obtenir-schufa-allemagne', PRO),
      ],
    },
  },
};
