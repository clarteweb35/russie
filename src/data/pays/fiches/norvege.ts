import { guideEurope } from '../europe';

export const norvege = guideEurope({
  iso: 'NOR', slug: 'norvege', nom: 'Norvège', article: 'la Norvège', lieu: 'en Norvège',
  accroche: 'Un pays scandinave de l’espace Schengen mais hors de l’Union européenne, avec sa propre monnaie. Fiche beta, à vérifier.',
  couleur: '#ba0c2f', langue: { nom: 'norvégien', code: 'nb-NO' }, devise: 'couronne norvégienne', monnaieAvecArticle: 'la couronne norvégienne', regime: 'schengen-hors-ue',
  introLangue: 'Le norvégien (bokmål) s’écrit avec l’alphabet latin et trois lettres supplémentaires (æ, ø, å). Presque tous les Norvégiens parlent très bien l’anglais.',
  lecons: {
    salutations: [['Hei', 'haï'], ['God kveld', 'go kvèl'], ['Takk', 'tak'], ['Vær så snill', 'vèr so snil'], ['Unnskyld', 'ounn-chuld'], ['Ja', 'ya'], ['Nei', 'naï'], ['Ha det bra', 'ha dé bra']],
    presenter: [['Jeg heter…', 'yaï hétèr'], ['Jeg kommer fra Frankrike', 'yaï komèr fra frankrikè'], ['Jeg snakker litt norsk', 'yaï snakèr lit nochk'], ['Snakker du engelsk?', 'snakèr dou èngèlsk'], ['Jeg forstår ikke', 'yaï fochtor ikè']],
    chiffres: [['en', 'én'], ['to', 'tou'], ['tre', 'tré'], ['fem', 'fèm'], ['ti', 'ti'], ['Hvor mye koster det?', 'vor myé kostèr dé']],
    deplacer: [['Hvor er…?', 'vor èr'], ['Stasjonen', 'stachounèn'], ['Flyplassen', 'flupla-sèn'], ['En billett', 'èn bilèt'], ['Til venstre', 'til vènstrè'], ['Til høyre', 'til hoïrè'], ['Rett frem', 'rèt frèm']],
    resto: [['Et bord for to', 'èt bour for tou'], ['Menyen, takk', 'mènuïèn tak'], ['Vann', 'van'], ['Kaffe', 'kafè'], ['Regningen, takk', 'raïningèn tak'], ['Jeg vil gjerne ha…', 'yaï vil yèrnè ha']],
    urgences: [['Hjelp!', 'yèlp'], ['Ring politiet!', 'rèng politièt'], ['Ring ambulansen!', 'rèng ambulansèn'], ['Jeg trenger en lege', 'yaï trèngèr èn légè'], ['Jeg har gått meg bort', 'yaï har got maï bort'], ['Hvor er apoteket?', 'vor èr apoutékèt']],
  },
  astuce: 'Presque tout le monde parle anglais. Prononciations très approximatives : faites relire par un locuteur.',
  medias: [
    { nom: 'NRK', url: 'https://www.nrk.no', nature: 'média public', langue: 'norvégien' },
    { nom: 'Aftenposten', url: 'https://www.aftenposten.no', nature: 'quotidien privé', langue: 'norvégien' },
    { nom: 'VG', url: 'https://www.vg.no', nature: 'quotidien privé', langue: 'norvégien' },
  ],
});
