import { guideEurope } from '../europe';
import { ROUMAIN } from '../langues';

export const roumanie = guideEurope({
  iso: 'ROU', slug: 'roumanie', nom: 'Roumanie', article: 'la Roumanie', lieu: 'en Roumanie',
  accroche: 'Un pays d’Europe de l’Est de l’Union européenne et de l’espace Schengen, de langue latine, qui a gardé sa propre monnaie. Fiche beta, à vérifier.',
  couleur: '#002b7f', langue: { nom: 'roumain', code: 'ro-RO' }, devise: 'leu roumain', monnaieAvecArticle: 'le leu roumain', regime: 'schengen-ue',
  entreeSupp: ['La Roumanie a rejoint l’espace Schengen ; vérifiez sur la fiche officielle l’état actuel des contrôles aux frontières terrestres.'],
  introLangue: 'Le roumain est une langue latine : un francophone en reconnaît beaucoup de mots. Il s’écrit avec l’alphabet latin et quelques lettres à signes (ă, â, î, ș, ț). Le français est enseigné et compris par une partie de la population.',
  lecons: ROUMAIN, astuce: 'Un francophone comprend déjà beaucoup de mots. Prononciations approximatives : faites relire par un locuteur.',
  medias: [
    { nom: 'Digi24', url: 'https://www.digi24.ro', nature: 'chaîne d’information privée', langue: 'roumain' },
    { nom: 'HotNews', url: 'https://hotnews.ro', nature: 'média en ligne indépendant', langue: 'roumain' },
    { nom: 'Agerpres', url: 'https://www.agerpres.ro', nature: 'agence de presse d’État', langue: 'roumain, français, anglais' },
  ],
});
