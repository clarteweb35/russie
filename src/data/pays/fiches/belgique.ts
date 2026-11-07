import { guideEurope } from '../europe';
import { NEERLANDAIS } from '../langues';

export const belgique = guideEurope({
  iso: 'BEL', slug: 'belgique', nom: 'Belgique', article: 'la Belgique', lieu: 'en Belgique',
  accroche: 'Un voisin de la France à trois langues officielles : néerlandais, français et allemand. Entrée libre pour un Français, formalités simples. Fiche beta, à vérifier.',
  couleur: '#ed2939', langue: { nom: 'néerlandais', code: 'nl-BE' }, devise: 'euro', monnaieAvecArticle: 'l’euro', regime: 'schengen-ue',
  introLangue: 'La Belgique a trois langues officielles : le néerlandais en Flandre, le français en Wallonie et à Bruxelles (avec le néerlandais), l’allemand dans l’est. Un Français se débrouille en français dans le sud et à Bruxelles ; les leçons ci-dessous donnent les bases du néerlandais pour la Flandre.',
  lecons: NEERLANDAIS, astuce: 'En Flandre, demandez poliment si l’on parle français ou anglais avant de commencer. Prononciations approximatives.',
  medias: [
    { nom: 'RTBF Info', url: 'https://www.rtbf.be/info', nature: 'média public', langue: 'français' },
    { nom: 'VRT NWS', url: 'https://www.vrt.be/vrtnws/en', nature: 'média public', langue: 'néerlandais, anglais' },
    { nom: 'Le Soir', url: 'https://www.lesoir.be', nature: 'quotidien privé', langue: 'français' },
    { nom: 'De Standaard', url: 'https://www.standaard.be', nature: 'quotidien privé', langue: 'néerlandais' },
  ],
});
