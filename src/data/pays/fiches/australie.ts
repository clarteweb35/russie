import type { PaysComplet } from '../types';
import { diplo, securiteALire } from '../aides';
import { leconsType, rubriquesType } from '../modele';
import { LECONS_ANGLAIS } from '../anglais';

const D = diplo('australie');

export const australie: PaysComplet = {
  complet: true,
  test: true,
  iso: 'AUS',
  slug: 'australie',
  nom: 'Australie',
  article: 'l’Australie',
  accroche: 'Un pays-continent où l’on conduit à gauche, et dont les contrôles à la frontière sont stricts. Une autorisation électronique (ETA) est exigée, demandée par application. Fiche beta, à vérifier.',
  couleur: '#00843d',
  langue: { nom: 'anglais', code: 'en-AU' },
  devise: 'dollar australien',
  conseilsVoyageurs: D.securite,
  verifie: '5 novembre 2026',
  mediasLocaux: [
    { nom: 'ABC News', url: 'https://www.abc.net.au/news', nature: 'média public', langue: 'anglais' },
    { nom: 'SBS News', url: 'https://www.sbs.com.au/news', nature: 'média public multiculturel', langue: 'anglais' },
    { nom: 'The Sydney Morning Herald', url: 'https://www.smh.com.au', nature: 'quotidien privé', langue: 'anglais' },
    { nom: 'The Guardian Australia', url: 'https://www.theguardian.com/au', nature: 'média privé', langue: 'anglais' },
  ],
  rubriques: rubriquesType({
    lieu: 'en Australie',
    monnaie: 'le dollar australien',
    introVoyager: 'Un Français a besoin d’une autorisation avant de voyager : l’ETA pour un court séjour, ou un autre visa pour travailler. Le visa vacances-travail suit une autre procédure.',
    securite: securiteALire(D.securite, 'Australie'),
    entree: {
      id: 'entree',
      titre: 'ETA et visa vacances-travail',
      badge: { type: 'warn', texte: 'À confirmer' },
      blocs: [
        { type: 'liste', items: [
          'L’<strong>ETA</strong> (autorisation électronique pour un court séjour) se demande par l’application officielle « AustralianETA » ; des frais de service d’environ <strong>20 dollars australiens</strong> sont cités.',
          'Le <strong>visa vacances-travail</strong> (sous-classe 417) est un autre visa, d’un coût d’environ <strong>635 dollars australiens</strong> selon une seule source. Ne demandez pas d’ETA si vous avez déjà ce visa.',
          'Un tarif du visa visiteur est évoqué pour juillet 2026 par une seule source non officielle : à confirmer.',
          'Les contrôles de biosécurité sont stricts : déclarez aliments, plantes et objets de plein air.',
        ] },
        { type: 'alerte', warn: true, titre: 'Source officielle à consulter', html: 'Les tarifs viennent de sites commerciaux ou de guides. Vérifiez sur le site du ministère australien de l’Intérieur (immi.homeaffairs.gov.au) avant de payer.' },
      ],
      sources: [
        { label: 'Ministère de l’Europe et des Affaires étrangères, fiche Australie (entrée et séjour)', url: D.entree, nature: 'source officielle' },
        { label: 'Australia.com, visa et conditions d’entrée', url: 'https://www.australia.com/fr-fr/facts-and-planning/visa-and-customs/australia-visa-and-entry-requirements-faqs.html', nature: 'tourisme officiel australien' },
        { label: 'PVTistes, se rendre en Australie en touriste', url: 'https://pvtistes.net/dossiers/se-rendre-en-australie-en-touriste/3/', nature: 'communauté de voyageurs' },
      ],
    },
    introLangue: 'L’anglais australien a son accent et son argot (« G’day », « no worries »). Il reste très compréhensible. L’Australie est un pays multiculturel où de nombreuses autres langues se parlent.',
    langue: [],
  }),
  lecons: leconsType(LECONS_ANGLAIS, 'En Australie, « no worries » signifie « pas de souci ». Prononciations approximatives.'),
  sourcesSupplementaires: [],
};
