import { guideEurope } from '../europe';

export const bulgarie = guideEurope({
  iso: 'BGR', slug: 'bulgarie', nom: 'Bulgarie', article: 'la Bulgarie', lieu: 'en Bulgarie',
  accroche: 'Un pays des Balkans de l’Union européenne et de l’espace Schengen, passé à l’euro début 2026, à l’alphabet cyrillique. Fiche beta, à vérifier.',
  couleur: '#00966e', langue: { nom: 'bulgare', code: 'bg-BG' }, devise: 'euro', monnaieAvecArticle: 'l’euro', regime: 'schengen-ue',
  monnaieNote: 'La Bulgarie a adopté l’<strong>euro le 1er janvier 2026</strong> ; selon la presse bulgare, l’euro est la seule monnaie légale depuis le 1er février 2026. Le lev peut être échangé gratuitement auprès de la banque centrale.',
  sourcesSupp: [{ label: 'BTA, 87 % des levs retirés deux mois après l’adoption de l’euro', url: 'https://www.bta.bg/en/news/1073860-87-of-leva-withdrawn-from-circulation-two-months-after-euro-adoption', nature: 'agence de presse publique bulgare' }],
  introLangue: 'Le bulgare s’écrit en alphabet cyrillique et se rapproche des autres langues slaves. L’anglais est courant à Sofia et dans les stations touristiques. Un hochement de tête a parfois le sens inverse du nôtre : « non » peut se dire en hochant la tête de haut en bas (à confirmer).',
  lecons: {
    salutations: [['Здравейте', 'zdravéïté'], ['Добър вечер', 'dobur vètchèr'], ['Благодаря', 'blagodarya'], ['Моля', 'molya'], ['Извинете', 'izvinété'], ['Да', 'da'], ['Не', 'nè'], ['Довиждане', 'dovijdané']],
    presenter: [['Казвам се…', 'kazvam sè'], ['Аз съм от Франция', 'az sum ot frantsiya'], ['Говоря малко български', 'govorya malko bulgarski'], ['Говорите ли английски?', 'govorité li anglisski'], ['Не разбирам', 'nè razbiram']],
    chiffres: [['едно', 'èdno'], ['две', 'dvè'], ['три', 'tri'], ['пет', 'pèt'], ['десет', 'dèsèt'], ['Колко струва?', 'kolko strouva']],
    deplacer: [['Къде е…?', 'kudè è'], ['Гарата', 'garata'], ['Летището', 'lètichtèto'], ['Билет', 'bilèt'], ['Наляво', 'nalyavo'], ['Надясно', 'nadyasno'], ['Направо', 'napravo']],
    resto: [['Маса за двама', 'massa za dvama'], ['Менюто, моля', 'mènyouto molya'], ['Вода', 'voda'], ['Кафе', 'kafè'], ['Сметката, моля', 'smètkata molya'], ['Бих искал…', 'bikh iskal']],
    urgences: [['Помощ!', 'pomoch'], ['Обадете се на полицията!', 'obadètè sè na politsiyata'], ['Извикайте линейка!', 'izvikaïtè lineïka'], ['Нуждая се от лекар', 'noujdaya sè ot lèkar'], ['Изгубих се', 'izgoubikh sè'], ['Къде е аптеката?', 'kudè è aptèkata']],
  },
  astuce: 'Apprendre à lire le cyrillique aide beaucoup (voir les leçons de russe). Prononciations approximatives : faites relire par un locuteur.',
  medias: [
    { nom: 'BTA', url: 'https://www.bta.bg', nature: 'agence de presse publique', langue: 'bulgare, anglais, français' },
    { nom: 'BNR', url: 'https://bnr.bg', nature: 'radio publique', langue: 'bulgare, français, anglais' },
    { nom: 'Mediapool', url: 'https://www.mediapool.bg', nature: 'média en ligne indépendant', langue: 'bulgare' },
    { nom: 'Dnevnik', url: 'https://www.dnevnik.bg', nature: 'média en ligne privé', langue: 'bulgare' },
  ],
});
