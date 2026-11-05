import { guideEurope } from './europe';

export const islande = guideEurope({
  iso: 'ISL', slug: 'islande', nom: 'Islande', article: 'l’Islande', lieu: 'en Islande',
  accroche: 'Une île volcanique de l’espace Schengen, hors de l’Union européenne, avec sa propre monnaie. Fiche en test, à vérifier.',
  couleur: '#02529c', langue: { nom: 'islandais', code: 'is-IS' }, devise: 'couronne islandaise', monnaieAvecArticle: 'la couronne islandaise', regime: 'schengen-hors-ue',
  introLangue: 'L’islandais est très proche du vieux norrois et garde des lettres anciennes (þ, ð). Presque tous les Islandais parlent très bien l’anglais.',
  lecons: {
    salutations: [['Halló', 'halo'], ['Gott kvöld', 'gott kveuld'], ['Takk', 'tak'], ['Gjörðu svo vel', 'gyeurdu svo vèl'], ['Afsakið', 'afsakith'], ['Já', 'yao'], ['Nei', 'nèï'], ['Bless', 'bless']],
    presenter: [['Ég heiti…', 'yèg hèïti'], ['Ég er frá Frakklandi', 'yèg èr frao frakklandi'], ['Ég tala smá íslensku', 'yèg tala smao islènsku'], ['Talar þú ensku?', 'talar thou ènsku'], ['Ég skil ekki', 'yèg skil èkki']],
    chiffres: [['einn', 'èïdn'], ['tveir', 'tvèïr'], ['þrír', 'thrir'], ['fimm', 'fimm'], ['tíu', 'tiou'], ['Hvað kostar það?', 'kvath kostar thath']],
    deplacer: [['Hvar er…?', 'kvar èr'], ['Stöðin', 'steuthin'], ['Flugvöllurinn', 'flugveudlurinn'], ['Miði', 'mithi'], ['Til vinstri', 'til vinstri'], ['Til hægri', 'til haïgri'], ['Beint áfram', 'bèïnt aoufram']],
    resto: [['Borð fyrir tvo', 'borth firir tvo'], ['Matseðillinn, takk', 'matsèthidlinn tak'], ['Vatn', 'vatn'], ['Kaffi', 'kafi'], ['Reikninginn, takk', 'rèïkningin tak'], ['Mig langar í…', 'mig langar i']],
    urgences: [['Hjálp!', 'yaoulp'], ['Hringdu á lögregluna!', 'hringdu ao leugrèglouna'], ['Hringdu á sjúkrabíl!', 'hringdu ao syoukrabil'], ['Ég þarf lækni', 'yèg tharf laïkni'], ['Ég er villtur', 'yèg èr viltur'], ['Hvar er apótekið?', 'kvar èr apotèkith']],
  },
  astuce: 'Presque tout le monde parle anglais. Prononciations très approximatives : faites relire par un locuteur.',
  medias: [
    { nom: 'RÚV', url: 'https://www.ruv.is', nature: 'média public', langue: 'islandais' },
    { nom: 'Iceland Review', url: 'https://www.icelandreview.com', nature: 'média privé', langue: 'anglais' },
    { nom: 'Morgunblaðið (mbl.is)', url: 'https://www.mbl.is', nature: 'quotidien privé', langue: 'islandais' },
  ],
});
