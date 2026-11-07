import type { PaysComplet } from '../types';
import { diplo, securiteALire } from '../aides';
import { leconsType, rubriquesType } from '../modele';
import { ESPAGNOL } from '../langues-monde';

const D = diplo('mexique');

export const mexique: PaysComplet = {
  complet: true,
  test: true,
  iso: 'MEX',
  slug: 'mexique',
  nom: 'Mexique',
  article: 'le Mexique',
  accroche: 'Un grand pays d’Amérique du Nord de langue espagnole, accessible sans visa jusqu’à 180 jours pour le tourisme. Lisez d’abord les conseils de sécurité par région. Fiche beta, à vérifier.',
  couleur: '#006847',
  langue: { nom: 'espagnol', code: 'es-MX' },
  devise: 'peso mexicain',
  conseilsVoyageurs: D.securite,
  verifie: '5 novembre 2026',
  mediasLocaux: [
    { nom: 'La Jornada', url: 'https://www.jornada.com.mx', nature: 'quotidien privé', langue: 'espagnol' },
    { nom: 'Milenio', url: 'https://www.milenio.com', nature: 'quotidien privé', langue: 'espagnol' },
    { nom: 'El Universal', url: 'https://www.eluniversal.com.mx', nature: 'quotidien privé', langue: 'espagnol' },
    { nom: 'Proceso', url: 'https://www.proceso.com.mx', nature: 'magazine d’investigation privé', langue: 'espagnol' },
  ],
  rubriques: rubriquesType({
    lieu: 'au Mexique',
    monnaie: 'le peso mexicain',
    introVoyager: 'Les Français n’ont pas besoin de visa pour un séjour touristique allant jusqu’à 180 jours. La sécurité varie beaucoup d’une région à l’autre : la fiche officielle est indispensable.',
    securite: securiteALire(D.securite, 'Mexique'),
    entree: {
      id: 'entree',
      titre: 'Entrée sans visa pour le tourisme',
      badge: { type: 'warn', texte: 'À confirmer' },
      blocs: [{ type: 'liste', items: [
        '<strong>Tourisme, jusqu’à 180 jours</strong> : pas de visa pour les Français, selon la fiche du ministère rapportée par les sites consultés. Le travail rémunéré n’est pas couvert.',
        'La durée accordée est fixée <strong>par l’agent d’immigration</strong> à l’arrivée : elle n’est pas automatique.',
        'Un <strong>billet de retour</strong> ou une preuve de sortie du territoire peut être demandé.',
        'Une carte d’entrée (<strong>FMM</strong>) est exigée ; les sources divergent sur les frais et le format (papier ou numérique), surtout pour une entrée par la route.',
        'Validité du passeport : les sources ne s’accordent pas (durée du séjour ou six mois après l’entrée). Prenez la règle la plus stricte.',
      ] }],
      sources: [
        { label: 'Ministère de l’Europe et des Affaires étrangères, fiche Mexique (entrée et séjour)', url: D.entree, nature: 'source officielle' },
        { label: 'WeRoad, visa pour le Mexique', url: 'https://www.weroad.fr/blog/visa-mexique', nature: 'agence de voyages (source commerciale)' },
      ],
    },
    introLangue: 'L’espagnol du Mexique est clair et se comprend facilement. Les Mexicains apprécient qu’on tente quelques mots. L’anglais est courant dans les zones touristiques, moins ailleurs.',
    langue: [],
  }),
  lecons: leconsType(ESPAGNOL, 'L’espagnol ressemble au français sur beaucoup de mots. Faites relire ces prononciations par un locuteur.'),
  sourcesSupplementaires: [],
};
