import { guideEurope } from './europe';

export const suede = guideEurope({
  iso: 'SWE', slug: 'suede', nom: 'Suède', article: 'la Suède', lieu: 'en Suède',
  accroche: 'Un pays scandinave de l’Union européenne et de l’espace Schengen, qui a gardé sa propre monnaie. Fiche beta, à vérifier.',
  couleur: '#006aa7', langue: { nom: 'suédois', code: 'sv-SE' }, devise: 'couronne suédoise', monnaieAvecArticle: 'la couronne suédoise', regime: 'schengen-ue',
  introLangue: 'Le suédois s’écrit avec l’alphabet latin et trois lettres supplémentaires (å, ä, ö). La plupart des Suédois parlent très bien l’anglais.',
  lecons: {
    salutations: [['Hej', 'hèï'], ['God kväll', 'goud kvèl'], ['Tack', 'tak'], ['Snälla', 'snèla'], ['Ursäkta', 'our-chèkta'], ['Ja', 'ya'], ['Nej', 'nèï'], ['Hej då', 'hèï do']],
    presenter: [['Jag heter…', 'ya hétèr'], ['Jag kommer från Frankrike', 'ya komèr fron frankrikè'], ['Jag talar lite svenska', 'ya talar lité svènska'], ['Talar ni engelska?', 'talar ni èngèlska'], ['Jag förstår inte', 'ya feurchtor inté']],
    chiffres: [['ett', 'èt'], ['två', 'tvo'], ['tre', 'tré'], ['fem', 'fèm'], ['tio', 'tiou'], ['Vad kostar det?', 'va kostar dé']],
    deplacer: [['Var ligger…?', 'var liguèr'], ['Stationen', 'statchounèn'], ['Flygplatsen', 'flugplatsèn'], ['En biljett', 'èn bilyèt'], ['Till vänster', 'til vènstèr'], ['Till höger', 'til heugèr'], ['Rakt fram', 'rakt fram']],
    resto: [['Ett bord för två', 'èt bour feur tvo'], ['Menyn, tack', 'mènuïn tak'], ['Vatten', 'vatèn'], ['Kaffe', 'kafé'], ['Notan, tack', 'noutan tak'], ['Jag skulle vilja ha…', 'ya skulé vilya ha']],
    urgences: [['Hjälp!', 'yèlp'], ['Ring polisen!', 'rèng poulissèn'], ['Ring ambulansen!', 'rèng ambulansèn'], ['Jag behöver en läkare', 'ya bèheuvèr èn lèkarè'], ['Jag har gått vilse', 'ya har got vilsè'], ['Var finns apoteket?', 'var finns apoutékèt']],
  },
  astuce: 'Presque tout le monde parle anglais. Prononciations très approximatives : faites relire par un locuteur.',
  medias: [
    { nom: 'SVT Nyheter', url: 'https://www.svt.se/nyheter', nature: 'média public', langue: 'suédois' },
    { nom: 'Radio Sweden', url: 'https://www.sverigesradio.se/radioswedenfrancais', nature: 'radio publique', langue: 'français, anglais' },
    { nom: 'Dagens Nyheter', url: 'https://www.dn.se', nature: 'quotidien privé', langue: 'suédois' },
    { nom: 'Svenska Dagbladet', url: 'https://www.svd.se', nature: 'quotidien privé', langue: 'suédois' },
  ],
});
