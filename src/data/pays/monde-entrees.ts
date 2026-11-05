import type { Source } from './types';

// Formalités d'entrée vérifiées pays par pays (recherche du 5 novembre 2026), pour les guides de monde-guides.ts.
// Un pays absent de cette liste affiche « À documenter » avec un renvoi à la fiche officielle : rien n'est inventé.
// Chaque entrée reste « À confirmer » : les règles de visa changent vite, et les sources sont surtout de la presse du voyage.

export type Entree = {
  titre?: string;
  intro?: string;
  items: string[];
  alerte?: string;
  sources?: Source[];
};

const TOURISME = 'tourisme officiel';
const SPECIALISE = 'site spécialisé';
const COMMERCIAL = 'agence de voyages (source commerciale)';
const PRESSE = 'presse professionnelle du tourisme';

export const ENTREES: Record<string, Entree> = {
  TUN: {
    titre: 'Passeport obligatoire',
    intro: 'Un Français n’a pas besoin de visa pour un séjour touristique de moins de trois mois, mais la carte d’identité ne suffit plus depuis début 2025.',
    items: [
      '<strong>Passeport valable au moins 3 mois</strong> à la date d’entrée, exigé depuis le 1er janvier 2025 selon la fiche du ministère rapportée par la presse.',
      '<strong>Séjour de moins de trois mois</strong> : pas de visa pour les Français.',
      'Les binationaux franco-tunisiens doivent présenter un passeport tunisien valide à l’entrée et à la sortie, plus un document français pour le retour.',
      'Un visa électronique est annoncé pour plus tard, sans date.',
    ],
    alerte: 'Certains guides (dont une version de Lonely Planet) indiquent encore que la carte d’identité suffit : c’est périmé.',
    sources: [
      { label: 'Tourmag, Tunisie : passeport ou carte d’identité, le point', url: 'https://www.tourmag.com/Tunisie-passeport-carte-d-identite-le-point-sur-les-formalites_a120736.html', nature: PRESSE },
      { label: 'VisasNews, Tunisie : passeport obligatoire depuis le 1er janvier 2025', url: 'https://visasnews.com/en/tunisia-passport-mandatory-from-january-1-2025/', nature: SPECIALISE },
    ],
  },
  DZA: {
    titre: 'Visa obligatoire',
    intro: 'Un Français a besoin d’un visa pour l’Algérie, demandé auprès d’un consulat. Un visa électronique n’était pas en service dans les sources consultées.',
    items: [
      'Le <strong>visa</strong> se demande auprès du consulat d’Algérie en France ; une attestation d’hébergement légalisée est souvent demandée.',
      'Un visa touristique n’autorise pas à travailler et limite la durée du séjour.',
      'Les <strong>binationaux</strong> voyageant avec un passeport algérien n’ont pas besoin de visa, mais gardent un document français valide pour le retour : à vérifier sur la fiche officielle.',
    ],
    sources: [{ label: 'Algérie Nomades, e-visa Algérie 2026 : démarches et coût', url: 'https://algerienomades.com/e-visa-algerie-2026/', nature: 'blog de voyage' }],
  },
  ZAF: {
    titre: 'Entrée sans visa pour moins de 90 jours',
    items: [
      '<strong>Tourisme, moins de 90 jours</strong> : pas de visa pour les Français selon l’office du tourisme sud-africain ; un permis de 90 jours est délivré à l’entrée.',
      'Passeport valable au moins <strong>30 jours après le départ</strong>, avec <strong>deux pages vierges</strong>.',
      '<strong>Mineurs</strong> : les sources se contredisent sur les documents exigés ; lisez la fiche du ministère français.',
      'Une déclaration en ligne avant le voyage serait exigée depuis le 1er juillet 2026 (une seule source non officielle) : à vérifier.',
    ],
    sources: [
      { label: 'Action-Visas, Afrique du Sud', url: 'https://www.action-visas.com/visa/Afrique-du-Sud', nature: SPECIALISE },
    ],
  },
  KEN: {
    titre: 'Autorisation de voyage électronique (eTA)',
    items: [
      'Le Kenya exige une <strong>eTA</strong> en ligne avant le départ ; le portail officiel cité est etakenya.go.ke.',
      'Montant le plus cité : <strong>51 dollars</strong> pour une eTA touristique à entrée unique, délai jusqu’à 3 jours ouvrés. Des sources plus anciennes donnent 30 dollars.',
      'Un certificat de vaccination contre la fièvre jaune peut être exigé selon la provenance : à vérifier.',
    ],
    alerte: 'Aucune source officielle n’a confirmé le montant. Passez uniquement par le portail officiel.',
    sources: [
      { label: 'Tourmag, le Kenya dévoile son eTA', url: 'https://www.tourmag.com/Le-Kenya-devoile-son-ETA_a121109.html', nature: PRESSE },
      { label: 'Action-Visas, Kenya e-visa', url: 'https://www.action-visas.com/actualite/visa/Kenya-eVisa', nature: SPECIALISE },
    ],
  },
  TZA: {
    titre: 'Visa en ligne',
    items: [
      'Un visa est nécessaire : le visa touristique à entrée simple est annoncé à <strong>50 dollars</strong> (100 pour des entrées multiples), sur le portail officiel de l’immigration (visa.immigration.go.tz).',
      'Le même e-visa couvre la Tanzanie continentale et <strong>Zanzibar</strong>.',
      'Zanzibar impose en plus une <strong>assurance</strong> d’environ 44 dollars par adulte selon un site de voyage.',
      'Fièvre jaune : le certificat dépend de la provenance (pays d’endémie, transit de plus de 12 heures) ; la vaccination est recommandée dans tous les cas.',
    ],
    alerte: 'Les tarifs varient selon les sites ; les intermédiaires facturent plus. Les chiffres viennent de blogs et de sites commerciaux.',
    sources: [
      { label: 'WeRoad, visa pour la Tanzanie', url: 'https://www.weroad.fr/blog/visa-tanzanie', nature: COMMERCIAL },
      { label: 'Routard, formalités d’entrée en Tanzanie', url: 'https://www.routard.com/fr/guide/a/formalites/afrique/tanzanie', nature: 'guide de voyage' },
    ],
  },
  DOM: {
    titre: 'Entrée sans visa et e-Ticket',
    items: [
      '<strong>Tourisme, moins de 30 jours</strong> : pas de visa pour les Français ; passeport valable pour toute la durée du séjour.',
      'Le formulaire en ligne <strong>e-Ticket</strong> est obligatoire avant le départ (site officiel eticket.migracion.gob.do).',
      'La carte de tourisme n’est plus payée à l’arrivée : son coût est inclus dans le billet d’avion.',
    ],
    sources: [
      { label: 'Action-Visas, République dominicaine', url: 'https://www.action-visas.com/visa/Republique-Dominicaine', nature: SPECIALISE },
      { label: 'Air Caraïbes, formalités de voyage', url: 'https://www.aircaraibes.com/destinations/republique-dominicaine/formalites-voyage', nature: 'compagnie aérienne' },
      { label: 'Go Dominican Republic, conditions d’entrée', url: 'https://www.godominicanrepublic.com/travel/entry-requirements', nature: TOURISME },
    ],
  },
  MYS: {
    titre: 'Entrée sans visa et carte d’arrivée numérique',
    items: [
      '<strong>Tourisme, 90 jours au plus</strong> : pas de visa pour les Français selon un guide de juin 2026.',
      'La <strong>MDAC</strong> (carte d’arrivée numérique) est gratuite, à remplir en ligne dans les 3 jours avant l’arrivée sur le site officiel de l’immigration (imi.gov.my) ; évitez les sites qui la facturent.',
    ],
    sources: [{ label: 'Trip.com, conditions d’entrée en Malaisie en 2026', url: 'https://fr.trip.com/guide/info/conditions-entree-malaisie.html', nature: 'site de voyage (source commerciale)' }],
  },
  SGP: {
    titre: 'Carte d’arrivée numérique',
    items: [
      'La <strong>SG Arrival Card</strong> est obligatoire pour tous les voyageurs, avec ou sans visa : gratuite, à remplir dans les 3 jours avant l’arrivée sur le site officiel (eservices.ica.gov.sg) ou l’application MyICA.',
      'Elle comprend une déclaration de santé.',
      'La durée du séjour sans visa pour les Français n’a pas été confirmée : lisez la fiche officielle.',
    ],
    sources: [{ label: 'DMC Quote, guide des visas en Asie du Sud-Est 2026', url: 'https://dmcquote.com/blog/post/southeast-asia-visa-guide-2026', nature: 'site de voyage (source commerciale)' }],
  },
  PHL: {
    titre: 'Carte d’arrivée électronique',
    items: [
      'Les Philippines utilisent une carte d’arrivée électronique (<strong>eTravel</strong>), à remplir en ligne jusqu’à 72 heures avant l’arrivée.',
      'Un guide indique une entrée sans visa de <strong>30 jours</strong> pour la plupart des voyageurs, dont les Français : non confirmé par une source officielle.',
    ],
    alerte: 'Confirmez la durée autorisée sur la fiche du ministère français avant de réserver.',
    sources: [{ label: 'DMC Quote, guide des visas en Asie du Sud-Est 2026', url: 'https://dmcquote.com/blog/post/southeast-asia-visa-guide-2026', nature: 'site de voyage (source commerciale)' }],
  },
  NPL: {
    titre: 'Visa électronique',
    items: [
      'Le Népal déploie un système de <strong>visa électronique</strong> à partir du 17 août 2026 ; la suppression du visa à l’arrivée n’était pas annoncée dans les sources consultées.',
      'Un site de visas cite un prix indicatif à partir d’environ 94 euros, frais de service compris : non officiel.',
    ],
    alerte: 'Le dispositif est récent : vérifiez le mode de demande et les frais sur le site officiel de l’immigration népalaise.',
    sources: [
      { label: 'VisasNews, Népal : le visa électronique déployé à partir du 17 août 2026', url: 'https://visasnews.com/nepal-le-visa-doit-etre-pleinement-deploye-a-partir-du-17-aout-2026/', nature: SPECIALISE },
      { label: 'Action-Visas, Népal', url: 'https://www.action-visas.com/visa/Nepal', nature: SPECIALISE },
    ],
  },
  LAO: {
    titre: 'Visa en ligne',
    items: [
      'Le visa se demande en ligne sur le portail officiel de l’immigration laotienne (laoevisa.gov.la).',
      'Il n’existe pas de visa commun Laos – Cambodge : chaque pays exige le sien.',
    ],
    alerte: 'Tarifs et durées non vérifiés : consultez le portail officiel.',
    sources: [{ label: 'Vietnam Découverte, visa pour le Laos', url: 'https://vietnamdecouverte.com/visa-laos', nature: COMMERCIAL }],
  },
};
