import { guideEurope } from './europe';
import { NEERLANDAIS } from './langues';

export const paysBas = guideEurope({
  iso: 'NLD', slug: 'pays-bas', nom: 'Pays-Bas', article: 'les Pays-Bas', lieu: 'aux Pays-Bas',
  accroche: 'Un pays de l’Union européenne et de l’espace Schengen, réputé pour le vélo et pour la bonne pratique de l’anglais. Fiche en test, à vérifier.',
  couleur: '#21468b', langue: { nom: 'néerlandais', code: 'nl-NL' }, devise: 'euro', monnaieAvecArticle: 'l’euro', regime: 'schengen-ue',
  introLangue: 'Le néerlandais s’écrit avec l’alphabet latin et ressemble à la fois à l’allemand et à l’anglais. La grande majorité des Néerlandais parlent bien l’anglais, ce qui facilite le séjour.',
  lecons: NEERLANDAIS, astuce: 'Les Néerlandais passent vite à l’anglais : tentez quelques mots, ils apprécient. Prononciations approximatives.',
  medias: [
    { nom: 'NOS', url: 'https://nos.nl', nature: 'média public', langue: 'néerlandais' },
    { nom: 'NRC', url: 'https://www.nrc.nl', nature: 'quotidien privé', langue: 'néerlandais' },
    { nom: 'de Volkskrant', url: 'https://www.volkskrant.nl', nature: 'quotidien privé', langue: 'néerlandais' },
    { nom: 'DutchNews', url: 'https://www.dutchnews.nl', nature: 'média en ligne privé', langue: 'anglais' },
  ],
});
