import { guideEurope } from './europe';
import { ALLEMAND } from './langues';

export const autriche = guideEurope({
  iso: 'AUT', slug: 'autriche', nom: 'Autriche', article: 'l’Autriche', lieu: 'en Autriche',
  accroche: 'Un pays alpin de l’Union européenne et de l’espace Schengen, de langue allemande. Fiche en test, à vérifier.',
  couleur: '#ed2939', langue: { nom: 'allemand', code: 'de-AT' }, devise: 'euro', monnaieAvecArticle: 'l’euro', regime: 'schengen-ue',
  introLangue: 'On parle allemand, avec des mots et un accent propres à l’Autriche (« Grüß Gott » pour saluer). L’anglais est courant dans le tourisme et chez les jeunes.',
  lecons: ALLEMAND, astuce: 'En Autriche, on dit souvent « Grüß Gott » pour dire bonjour. Prononciations approximatives.',
  medias: [
    { nom: 'ORF', url: 'https://orf.at', nature: 'média public', langue: 'allemand' },
    { nom: 'Der Standard', url: 'https://www.derstandard.at', nature: 'quotidien privé', langue: 'allemand' },
    { nom: 'Die Presse', url: 'https://www.diepresse.com', nature: 'quotidien privé', langue: 'allemand' },
    { nom: 'Kurier', url: 'https://kurier.at', nature: 'quotidien privé', langue: 'allemand' },
  ],
});
