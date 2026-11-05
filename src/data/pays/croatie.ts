import { guideEurope } from './europe';

export const croatie = guideEurope({
  iso: 'HRV', slug: 'croatie', nom: 'Croatie', article: 'la Croatie', lieu: 'en Croatie',
  accroche: 'Un pays de l’Adriatique de l’Union européenne, de l’espace Schengen et de la zone euro. Fiche en test, à vérifier.',
  couleur: '#171796', langue: { nom: 'croate', code: 'hr-HR' }, devise: 'euro', monnaieAvecArticle: 'l’euro', regime: 'schengen-ue',
  introLangue: 'Le croate s’écrit avec l’alphabet latin et des lettres à signes (č, ć, š, ž, đ). L’anglais est très courant sur la côte et dans le tourisme.',
  lecons: {
    salutations: [['Dobar dan', 'dobar dane'], ['Dobra večer', 'dobra vètchèr'], ['Hvala', 'hvala'], ['Molim', 'molim'], ['Oprostite', 'oprostité'], ['Da', 'da'], ['Ne', 'né'], ['Doviđenja', 'dovidjénia']],
    presenter: [['Zovem se…', 'zovèm sé'], ['Dolazim iz Francuske', 'dolazim iz frantsouské'], ['Govorim malo hrvatski', 'govorim malo hrvatski'], ['Govorite li engleski?', 'govorité li èngleski'], ['Ne razumijem', 'né razoumiyèm']],
    chiffres: [['jedan', 'yèdan'], ['dva', 'dva'], ['tri', 'tri'], ['pet', 'pèt'], ['deset', 'désèt'], ['Koliko košta?', 'koliko koshta']],
    deplacer: [['Gdje je…?', 'gdyé yé'], ['Kolodvor', 'kolodvor'], ['Zračna luka', 'zratchna louka'], ['Karta', 'karta'], ['Lijevo', 'liyèvo'], ['Desno', 'dèsno'], ['Ravno', 'ravno']],
    resto: [['Stol za dvoje', 'stol za dvoyé'], ['Jelovnik, molim', 'yèlovnik molim'], ['Voda', 'voda'], ['Kava', 'kava'], ['Račun, molim', 'ratchoun molim'], ['Želio bih…', 'jélio bih']],
    urgences: [['U pomoć!', 'ou pomotch'], ['Zovite policiju!', 'zovité politsiyou'], ['Zovite hitnu pomoć!', 'zovité hitnou pomotch'], ['Trebam liječnika', 'trèbam liyètchnika'], ['Izgubio sam se', 'izgoubio sam sé'], ['Gdje je ljekarna?', 'gdyé yé lyèkarna']],
  },
  astuce: 'Sur la côte, l’anglais suffit souvent. Prononciations très approximatives : faites relire par un locuteur.',
  medias: [
    { nom: 'HRT Vijesti', url: 'https://vijesti.hrt.hr', nature: 'média public', langue: 'croate' },
    { nom: 'Jutarnji list', url: 'https://www.jutarnji.hr', nature: 'quotidien privé', langue: 'croate' },
    { nom: 'Večernji list', url: 'https://www.vecernji.hr', nature: 'quotidien privé', langue: 'croate' },
  ],
});
