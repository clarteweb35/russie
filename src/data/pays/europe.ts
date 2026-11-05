import type { Media, PaysComplet, Source } from './types';
import { diplo, securiteALire } from './aides';
import { leconsType, rubriquesType } from './modele';
import type { TraductionsLecons } from './modele';

// Guide type pour un pays d'Europe : le régime d'entrée vient du statut européen du pays,
// le reste (langue, monnaie, médias, leçons) des données propres à chaque pays.

export type Regime = 'schengen-ue' | 'schengen-hors-ue' | 'ue-hors-schengen';

export type ParamsEurope = {
  iso: string;
  slug: string;
  nom: string;
  article: string; // « la Belgique »
  lieu: string; // « en Belgique »
  diploSlug?: string; // si l'adresse du ministère diffère du slug
  accroche: string;
  couleur: string;
  langue: { nom: string; code: string };
  devise: string; // nom de la monnaie, sans article : « couronne danoise »
  monnaieAvecArticle: string; // « la couronne danoise »
  regime: Regime;
  monnaieNote?: string; // phrase propre au pays sur la monnaie ou l'euro
  entreeSupp?: string[]; // points d'entrée propres au pays
  sourcesSupp?: Source[];
  introLangue: string;
  lecons: TraductionsLecons;
  astuce: string;
  medias: Media[];
};

const REGIME: Record<Regime, string> = {
  'schengen-ue': 'Pays de l’Union européenne et de l’espace Schengen : pas de visa pour un Français, qui entre avec sa carte d’identité ou son passeport, selon les règles européennes générales.',
  'schengen-hors-ue': 'Pays de l’espace Schengen, hors Union européenne : un Français y circule librement avec sa carte d’identité ou son passeport, selon les règles européennes générales.',
  'ue-hors-schengen': 'Pays de l’Union européenne mais hors de l’espace Schengen : un Français entre avec sa carte d’identité ou son passeport, des contrôles aux frontières existent.',
};

export const guideEurope = (p: ParamsEurope): PaysComplet => {
  const D = diplo(p.diploSlug ?? p.slug);
  const euro = p.devise === 'euro';
  return {
    complet: true,
    test: true,
    iso: p.iso,
    slug: p.slug,
    nom: p.nom,
    article: p.article,
    accroche: p.accroche,
    couleur: p.couleur,
    langue: p.langue,
    devise: p.devise,
    conseilsVoyageurs: D.securite,
    verifie: '5 novembre 2026',
    mediasLocaux: p.medias,
    rubriques: rubriquesType({
      lieu: p.lieu,
      monnaie: p.monnaieAvecArticle,
      introVoyager: `${p.nom} est un pays d’Europe : les formalités sont simples pour un Français, mais la fiche officielle du ministère reste la référence pour la sécurité et la santé.`,
      securite: securiteALire(D.securite, p.nom),
      entree: {
        id: 'entree',
        titre: 'Entrée et séjour',
        badge: { type: 'warn', texte: 'À confirmer' },
        blocs: [{ type: 'liste', items: [
          REGIME[p.regime],
          ...(p.entreeSupp ?? []),
          p.monnaieNote ?? (euro ? 'La monnaie est l’euro : pas de change depuis la France.' : `La monnaie est ${p.monnaieAvecArticle} : prévoyez une carte bancaire ou un change.`),
          'Pour un séjour de longue durée, des formalités d’enregistrement existent : elles n’ont pas été documentées ici.',
        ] }],
        sources: [
          { label: `Ministère de l’Europe et des Affaires étrangères, fiche ${p.nom} (entrée et séjour)`, url: D.entree, nature: 'source officielle' },
          ...(p.sourcesSupp ?? []),
        ],
        note: 'Informations générales sur l’Europe ; la fiche officielle fait foi.',
      },
      introLangue: p.introLangue,
      langue: [],
    }),
    lecons: leconsType(p.lecons, p.astuce),
    sourcesSupplementaires: [],
  };
};
