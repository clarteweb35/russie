import { guideEurope } from '../europe';

export const hongrie = guideEurope({
  iso: 'HUN', slug: 'hongrie', nom: 'Hongrie', article: 'la Hongrie', lieu: 'en Hongrie',
  accroche: 'Un pays d’Europe centrale de l’Union européenne et de l’espace Schengen, à la langue très différente de ses voisines. Fiche beta, à vérifier.',
  couleur: '#436f4d', langue: { nom: 'hongrois', code: 'hu-HU' }, devise: 'forint', monnaieAvecArticle: 'le forint', regime: 'schengen-ue',
  introLangue: 'Le hongrois n’est pas une langue indo-européenne : il ne ressemble ni au français ni aux langues voisines. L’anglais et l’allemand sont courants à Budapest et dans le tourisme.',
  lecons: {
    salutations: [['Jó napot', 'yo napot'], ['Jó estét', 'yo èchtét'], ['Köszönöm', 'keusseunéum'], ['Kérem', 'kérèm'], ['Elnézést', 'èlnézècht'], ['Igen', 'iguèn'], ['Nem', 'nèm'], ['Viszontlátásra', 'vissontlatachra']],
    presenter: [['A nevem…', 'o nèvèm'], ['Franciaországból jövök', 'frantsiaorssagbol yeuveuk'], ['Beszélek egy kicsit magyarul', 'bèsélèk èdj kitchit modjarroul'], ['Beszél angolul?', 'bèsél ongolou'], ['Nem értem', 'nèm értèm']],
    chiffres: [['egy', 'èdj'], ['kettő', 'kèttœ'], ['három', 'harom'], ['öt', 'eut'], ['tíz', 'tiz'], ['Mennyibe kerül?', 'mèniibé kèrul']],
    deplacer: [['Hol van…?', 'hol van'], ['Az állomás', 'oz allomach'], ['A repülőtér', 'o rèpülœtér'], ['Egy jegy', 'èdj yèdj'], ['Balra', 'bolro'], ['Jobbra', 'yobbro'], ['Egyenesen', 'èdjènèchèn']],
    resto: [['Egy asztal két főre', 'èdj ostol kèt fœrè'], ['Az étlapot kérem', 'oz étlopot kérèm'], ['Víz', 'viz'], ['Kávé', 'kavé'], ['A számlát kérem', 'o samlat kérèm'], ['Szeretnék…', 'sèrètnék']],
    urgences: [['Segítség!', 'chèguitchég'], ['Hívja a rendőrséget!', 'hivyo o rèndœrchégèt'], ['Hívjon mentőt!', 'hivyon mèntœt'], ['Orvosra van szükségem', 'orvochro van sukchégèm'], ['Eltévedtem', 'èltévèdtèm'], ['Hol van a gyógyszertár?', 'hol van o djodjsèrtar']],
  },
  astuce: 'Le hongrois est difficile : quelques mots de politesse sont très appréciés. Prononciations approximatives, à faire relire par un locuteur.',
  medias: [
    { nom: 'Telex', url: 'https://telex.hu', nature: 'média en ligne indépendant', langue: 'hongrois, anglais' },
    { nom: '444', url: 'https://444.hu', nature: 'média en ligne indépendant', langue: 'hongrois' },
    { nom: 'HVG', url: 'https://hvg.hu', nature: 'hebdomadaire privé', langue: 'hongrois' },
    { nom: 'Hirado.hu (MTVA)', url: 'https://hirado.hu', nature: 'média public', langue: 'hongrois' },
  ],
});
