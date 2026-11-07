import { guideEurope } from '../europe';
import { LECONS_ANGLAIS } from '../anglais';

export const irlande = guideEurope({
  iso: 'IRL', slug: 'irlande', nom: 'Irlande', article: 'l’Irlande', lieu: 'en Irlande',
  accroche: 'Un pays de l’Union européenne hors Schengen, où l’on conduit à gauche et où l’on parle anglais et irlandais. Fiche beta, à vérifier.',
  couleur: '#169b62', langue: { nom: 'anglais', code: 'en-IE' }, devise: 'euro', monnaieAvecArticle: 'l’euro', regime: 'ue-hors-schengen',
  entreeSupp: [
    'Pour aller de l’Irlande vers l’<strong>Irlande du Nord ou le Royaume-Uni</strong>, les règles sont distinctes : une autorisation (ETA) peut être exigée pour un visiteur, et certaines compagnies (Aer Lingus depuis février 2026) demandent un passeport. Vérifiez avant de voyager.',
    'On y conduit à gauche.',
  ],
  sourcesSupp: [
    { label: 'Law Society Gazette, passeport obligatoire pour les voyages vers la Grande-Bretagne', url: 'https://www.lawsociety.ie/gazette/top-stories/2026/feb/passport-now-mandatory-for-all-trips-to-britain/', nature: 'presse professionnelle' },
  ],
  introLangue: 'L’anglais est la langue de tous les jours ; l’irlandais (gaélique) est langue officielle et se voit sur les panneaux. L’accent irlandais est parfois difficile à suivre : n’hésitez pas à demander de répéter.',
  lecons: LECONS_ANGLAIS, astuce: 'En Irlande, « grand » veut souvent dire « très bien ». Prononciations approximatives.',
  medias: [
    { nom: 'RTÉ News', url: 'https://www.rte.ie/news', nature: 'média public', langue: 'anglais' },
    { nom: 'The Irish Times', url: 'https://www.irishtimes.com', nature: 'quotidien privé', langue: 'anglais' },
    { nom: 'Irish Independent', url: 'https://www.independent.ie', nature: 'quotidien privé', langue: 'anglais' },
    { nom: 'TheJournal.ie', url: 'https://www.thejournal.ie', nature: 'média en ligne privé', langue: 'anglais' },
  ],
});
