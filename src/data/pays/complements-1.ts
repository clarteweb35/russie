import { EXPATS, FORUM, GUIDE, OFFICIEL, PRESSE, PRO, src } from './complements';
import type { Complement } from './complements';

// Espagne, Italie, Portugal (recherche du 6 novembre 2026)
export const LOT1: Record<string, Complement> = {
  ESP: {
    paiements: {
      items: [
        'La carte bancaire est largement acceptée ; le paiement en espèces reste courant et possible presque partout. Certains distributeurs automatiques (parkings, billets) n’acceptent que la carte.',
        'En zone euro, un paiement par carte ne devrait entraîner aucun frais bancaire de change. Les retraits au distributeur peuvent coûter : la banque française et la banque du distributeur peuvent chacune facturer des frais.',
        'Au distributeur, refusez la conversion proposée en euros ou en devise de la carte si elle est affichée avec une commission, et préférez un distributeur de votre propre banque ou une carte sans frais de retrait.',
      ],
      alerte: 'Le montant des frais de retrait dépend de votre banque : demandez ses tarifs avant le départ. Les chiffres des forums peuvent être dépassés.',
      sources: [
        src('Office du tourisme d’Espagne : comment payer en Espagne', 'https://www.spain.info/fr/conseils-voyage/monnaie-billets/', OFFICIEL),
        src('MoneyVox : retraits au distributeur à l’étranger, 4 conseils pour limiter les frais', 'https://www.moneyvox.fr/tarif-bancaire/actualites/97512/retraits-dab-a-etranger-4-conseils-pour-limiter-vos-frais-en-voyage', PRESSE),
        src('Lonely Planet : argent en Espagne', 'https://www.lonelyplanet.fr/destinations/europe/espagne/andalousie/argent', GUIDE),
      ],
    },
    banque: {
      items: [
        'Les grandes banques espagnoles ouvrent en général des comptes pour les non-résidents, sans obligation d’être inscrit en Espagne, d’après des sites d’information sur l’installation.',
        'Les documents le plus souvent cités : passeport ou carte d’identité, NIE (numéro d’identification d’étranger), justificatif de domicile, justificatif de revenus ; un certificat de non-résidence peut être demandé, parfois après l’ouverture.',
        'Un compte de non-résident peut se transformer en compte de résident si vous vous installez.',
      ],
      alerte: 'Les sources se contredisent sur l’obtention d’un NIE par un non-résident (certaines ne l’acceptent que pour un achat immobilier ou une société). Renseignez-vous auprès du consulat d’Espagne ou de la police avant de partir.',
      sources: [
        src('Mallorca.com : ouvrir un compte bancaire en Espagne', 'https://www.mallorca.com/fr/conseils/vivre-a-majorque/impots-finances/ouvrir-compte-bancaire-espagne', EXPATS),
        src('Copeps : ouvrir un compte bancaire en Espagne pour non-résident', 'https://copeps.fr/actualites/domiciliation-bancaire-espagne/', PRO),
        src('Le Petit Journal Barcelone : le NIE', 'https://lepetitjournal.com/barcelone/installation/nie-espagne-demarche-installer-445286', PRESSE),
      ],
    },
    logement: {
      items: [
        'Le NIE est demandé pour signer un contrat de location, comme pour ouvrir un compte, d’après des guides pour expatriés.',
        'Le montant du dépôt de garantie n’a pas été confirmé par une source dans cette recherche : lisez le contrat et demandez un reçu pour toute somme versée.',
      ],
      alerte: 'Ne versez aucune somme avant d’avoir vérifié que le logement existe et que le bailleur en est bien le propriétaire.',
      sources: [
        src('Expat.com : formalités pour se loger en Espagne (forum)', 'https://www.expat.com/fr/forum/europe/espagne/385735-formalites-pour-se-loger.html', FORUM),
        src('Spotahome : ouvrir un compte bancaire en Espagne', 'https://www.spotahome.com/fr/blog/comment-ouvrir-un-compte-bancaire-en-espagne/', EXPATS),
      ],
    },
  },
  ITA: {
    paiements: {
      items: [
        'Les cartes (Visa, Mastercard, American Express, Bancomat/PagoBancomat) sont largement acceptées. Selon la presse économique, tous les professionnels doivent accepter le paiement par carte depuis juillet 2022.',
        'Dans la pratique, certaines stations-service et de petits commerces ou musées préfèrent ou n’acceptent que les espèces : gardez une petite réserve.',
        'La taxe de séjour se paie souvent en espèces à l’hôtel ; chaque commune fixe ses règles.',
      ],
      sources: [
        src('Italia.it (tourisme officiel) : monnaie et paiements électroniques', 'https://www.italia.it/fr/informations-pour-voyager/monnaie-et-paiements-electroniques', OFFICIEL),
        src('Journal de l’économie : l’Italie impose le paiement par carte à tous les professionnels', 'https://www.journaldeleconomie.fr/?p=25966', PRESSE),
        src('Lonely Planet : argent en Italie', 'https://www.lonelyplanet.fr/destinations/europe/italie/argent', GUIDE),
      ],
    },
    banque: {
      items: [
        'Le codice fiscale (numéro fiscal) est la première démarche : il est demandé pour ouvrir un compte, louer ou s’inscrire à la santé. Il s’obtient gratuitement à l’Agenzia delle Entrate avec une pièce d’identité.',
        'Documents usuels pour un compte : pièce d’identité, codice fiscale, justificatif de résidence (même temporaire), contrat de travail ou preuve de revenus.',
        'Méfiez-vous des sites qui vendent de faux codes fiscaux.',
      ],
      sources: [
        src('Le Petit Journal Milan : le codice fiscale', 'https://lepetitjournal.com/milan/installation/le-codice-fiscale-comment-lobtenir-32906', PRESSE),
        src('Expat.com : codice fiscale en Italie', 'https://www.expat.com/fr/guide/europe/italie/4800-codice-fiscale-en-italie.html', EXPATS),
        src('A Place in the Sun : ouvrir un compte bancaire en Italie (en anglais)', 'https://www.aplaceinthesun.com/relocation/italy/opening-a-bank-account-in-italy', GUIDE),
      ],
    },
    logement: {
      items: [
        'La caution est le plus souvent de 2 à 3 mois de loyer, d’après un site pour expatriés. Vérifiez qu’elle figure dans le contrat et demandez un reçu.',
        'Le bail doit être enregistré auprès de l’Agenzia delle Entrate (sous 30 jours selon cette source) : un bail non enregistré protège mal le locataire.',
        'Documents demandés en général : pièce d’identité ou passeport, codice fiscale, justificatifs de revenus.',
      ],
      alerte: 'Une caution excessive est un piège signalé : refusez de payer sans contrat écrit.',
      sources: [
        src('Uniplaces : logement pour expatriés en Italie', 'https://www.uniplaces.com/city-explorer/moradia-pour-expatries-en-italie-options/', EXPATS),
        src('Idealista : louer en Italie', 'https://www.idealista.it/fr/news/node/259336', EXPATS),
      ],
    },
  },
  PRT: {
    paiements: {
      items: [
        'Les distributeurs du réseau Multibanco sont la solution la plus courante pour retirer des euros. Choisissez « payer en euros » plutôt que la conversion dans la devise de la carte.',
        'Les cartes Visa et Mastercard sont acceptées dans la grande majorité des commerces ; des témoignages de voyageurs signalent des refus dans certaines stations-service ou aux péages.',
        'Vérifiez les plafonds de retrait et les tarifs de votre banque avant le départ.',
      ],
      alerte: 'Les refus de carte et les plafonds cités par des voyageurs sont des témoignages, pas des données officielles.',
      sources: [
        src('Le Mag Voyage : monnaie au Portugal', 'https://www.lemagvoyage.fr/portugal/monnaie-portugal/', GUIDE),
        src('Routard (forum) : paiement avec carte bancaire au Portugal', 'https://www.routard.com/forums/t/paiement-avec-carte-bancaire-au-portugal/166986', FORUM),
        src('Expat.com (forum) : utilisation du Multibanco', 'https://www.expat.com/fr/forum/europe/portugal/452210-utilisation-de-multibanco.html', FORUM),
      ],
    },
    banque: {
      items: [
        'Le NIF (numéro fiscal) est la première démarche : il est demandé pour ouvrir un compte, signer un bail ou souscrire un forfait téléphonique.',
        'Une fois le NIF obtenu, un passeport ou une carte d’identité de l’UE suffit en général comme document de base ; un justificatif de domicile peut être demandé.',
        'Certains prestataires proposent d’obtenir le NIF à distance (payant).',
      ],
      sources: [
        src('Idealista : obtenir un NIF au Portugal', 'https://www.idealista.pt/fr/news/node/73478', EXPATS),
        src('Uniplaces : ouvrir un compte bancaire au Portugal', 'https://www.uniplaces.com/city-explorer/ouvrir-compte-bancaire-portugal/', EXPATS),
        src('BrightTax : banque au Portugal (en anglais)', 'https://brighttax.com/blog/portugal-banking/', PRO),
      ],
    },
    logement: {
      items: [
        'La caution demandée est souvent d’un à deux mois de loyer. Un couple sans garant portugais a rapporté une avance de 5 mois : le montant varie selon le dossier.',
        'Le NIF est nécessaire pour signer le contrat de location.',
      ],
      alerte: 'Ne payez jamais une caution avant d’avoir vérifié que le logement et le propriétaire existent.',
      sources: [
        src('Study Abroad : vivre au Portugal', 'https://www.study-abroad.org/fr/etudier-au-portugal/vivre-au-portugal/', EXPATS),
        src('Expat.com (forum) : demande de NIF', 'https://www.expat.com/fr/forum/europe/portugal/777786-demande-nif.html', FORUM),
      ],
    },
  },
};
