import type { PaysComplet } from './types';
import { diplo, securiteALire } from './aides';
import { rubriquesType, leconsType } from './modele';
import { LECONS_ANGLAIS } from './anglais';

const D = diplo('canada');

export const canada: PaysComplet = {
  complet: true,
  test: true,
  iso: 'CAN',
  slug: 'canada',
  nom: 'Canada',
  article: 'le Canada',
  accroche: 'Un pays immense, officiellement bilingue, où le français domine au Québec et l’anglais ailleurs. Une autorisation de voyage électronique est exigée pour entrer par avion. Fiche en test, à vérifier.',
  couleur: '#d52b1e',
  langue: { nom: 'anglais', code: 'en-CA' },
  devise: 'dollar canadien',
  conseilsVoyageurs: D.securite,
  verifie: '5 novembre 2026',
  mediasLocaux: [
    { nom: 'CBC News', url: 'https://www.cbc.ca/news', nature: 'média public', langue: 'anglais' },
    { nom: 'Radio-Canada', url: 'https://ici.radio-canada.ca', nature: 'média public', langue: 'français' },
    { nom: 'The Globe and Mail', url: 'https://www.theglobeandmail.com', nature: 'quotidien privé', langue: 'anglais' },
    { nom: 'La Presse', url: 'https://www.lapresse.ca', nature: 'quotidien privé', langue: 'français' },
  ],
  rubriques: rubriquesType({
    lieu: 'au Canada',
    monnaie: 'le dollar canadien',
    introVoyager: 'Les Français n’ont pas besoin de visa pour un court séjour, mais doivent obtenir une autorisation de voyage électronique (AVE) avant de prendre l’avion.',
    securite: securiteALire(D.securite, 'Canada'),
    entree: {
      id: 'entree',
      titre: 'Autorisation de voyage électronique (AVE)',
      badge: { type: 'warn', texte: 'À confirmer' },
      blocs: [
        { type: 'liste', items: [
          'L’<strong>AVE</strong> est exigée avant l’embarquement pour entrer au Canada par avion ; elle se demande en ligne.',
          'Tarif officiel : <strong>7 dollars canadiens</strong>, pour une validité pouvant aller jusqu’à cinq ans (ou jusqu’à l’expiration du passeport).',
          '<strong>Attention aux sites non officiels</strong> qui facturent beaucoup plus pour la même démarche.',
        ] },
      ],
      sources: [
        { label: 'Ministère de l’Europe et des Affaires étrangères, fiche Canada (entrée et séjour)', url: D.entree, nature: 'source officielle' },
        { label: 'Gouvernement du Canada, autorisation de voyage électronique', url: 'https://www.canada.ca/ave', nature: 'source officielle' },
      ],
    },
    introLangue: 'Le Canada est bilingue : le français est la langue du Québec et d’une partie du Nouveau-Brunswick ; l’anglais domine ailleurs. Les leçons ci-dessous donnent les bases de l’anglais pour les provinces anglophones. Le français québécois a ses propres expressions, mais se comprend sans difficulté.',
    langue: [],
  }),
  lecons: leconsType(LECONS_ANGLAIS, 'Les prononciations sont approximatives. Au Québec, commencez toujours en français.'),
  sourcesSupplementaires: [],
};
