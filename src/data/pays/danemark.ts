import { guideEurope } from './europe';

export const danemark = guideEurope({
  iso: 'DNK', slug: 'danemark', nom: 'Danemark', article: 'le Danemark', lieu: 'au Danemark',
  accroche: 'Un pays scandinave de l’Union européenne et de l’espace Schengen, qui a gardé sa propre monnaie. Fiche en test, à vérifier.',
  couleur: '#c8102e', langue: { nom: 'danois', code: 'da-DK' }, devise: 'couronne danoise', monnaieAvecArticle: 'la couronne danoise', regime: 'schengen-ue',
  introLangue: 'Le danois est difficile à prononcer pour un francophone, mais presque tous les Danois parlent très bien l’anglais. Les phrases ci-dessous sont à titre de politesse.',
  lecons: {
    salutations: [['Hej', 'haï'], ['Godaften', 'go-aftèn'], ['Tak', 'tak'], ['Vær så venlig', 'vèr so vènli'], ['Undskyld', 'onn-skuel'], ['Ja', 'ya'], ['Nej', 'naï'], ['Farvel', 'farvèl']],
    presenter: [['Jeg hedder…', 'yaï hèdèr'], ['Jeg kommer fra Frankrig', 'yaï komèr fra frankri'], ['Jeg taler lidt dansk', 'yaï talèr lit dansk'], ['Taler De engelsk?', 'talèr di èngèlsk'], ['Jeg forstår ikke', 'yaï forstor ikè']],
    chiffres: [['en', 'èn'], ['to', 'to'], ['tre', 'tré'], ['fem', 'fèm'], ['ti', 'ti'], ['Hvad koster det?', 'va kostèr dé']],
    deplacer: [['Hvor er…?', 'vor èr'], ['Stationen', 'stachonèn'], ['Lufthavnen', 'loftaounèn'], ['En billet', 'èn bilèt'], ['Til venstre', 'til vènstrè'], ['Til højre', 'til hoïrè'], ['Ligeud', 'li-ou']],
    resto: [['Et bord til to', 'èt bor til to'], ['Menukortet, tak', 'ményou-kortèt tak'], ['Vand', 'van'], ['Kaffe', 'kafè'], ['Regningen, tak', 'raïningèn tak'], ['Jeg vil gerne have…', 'yaï vil guèrnè hè']],
    urgences: [['Hjælp!', 'yèlp'], ['Ring til politiet!', 'rèng til politièt'], ['Ring efter en ambulance!', 'rèng èftèr èn ambulansè'], ['Jeg har brug for en læge', 'yaï har brou for èn lèè-è'], ['Jeg er faret vild', 'yaï èr farèt vil'], ['Hvor er apoteket?', 'vor èr apotékèt']],
  },
  astuce: 'Presque tout le monde parle anglais. Prononciations très approximatives : faites relire par un locuteur.',
  medias: [
    { nom: 'DR Nyheder', url: 'https://www.dr.dk/nyheder', nature: 'média public', langue: 'danois' },
    { nom: 'Politiken', url: 'https://politiken.dk', nature: 'quotidien privé', langue: 'danois' },
    { nom: 'Berlingske', url: 'https://www.berlingske.dk', nature: 'quotidien privé', langue: 'danois' },
  ],
});
