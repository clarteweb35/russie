import { guideEurope } from './europe';

export const tchequie = guideEurope({
  iso: 'CZE', slug: 'tchequie', diploSlug: 'republique-tcheque', nom: 'Tchéquie', article: 'la Tchéquie', lieu: 'en Tchéquie',
  accroche: 'Un pays d’Europe centrale de l’Union européenne et de l’espace Schengen, qui a gardé sa propre monnaie. Fiche en test, à vérifier.',
  couleur: '#11457e', langue: { nom: 'tchèque', code: 'cs-CZ' }, devise: 'couronne tchèque', monnaieAvecArticle: 'la couronne tchèque', regime: 'schengen-ue',
  introLangue: 'Le tchèque s’écrit avec l’alphabet latin et beaucoup de signes (č, ř, š, ž, ě…). L’anglais est courant à Prague et dans le tourisme, moins ailleurs.',
  lecons: {
    salutations: [['Dobrý den', 'dobri dène'], ['Dobrý večer', 'dobri vètchèr'], ['Děkuji', 'dyékouyi'], ['Prosím', 'prossim'], ['Promiňte', 'promigntè'], ['Ano', 'ano'], ['Ne', 'nè'], ['Na shledanou', 'na skhlédanau']],
    presenter: [['Jmenuji se…', 'ymènouyi sé'], ['Jsem z Francie', 'ysèm z frantsiyè'], ['Mluvím trochu česky', 'mlouvim trokhou tchèski'], ['Mluvíte anglicky?', 'mlouvité anglitski'], ['Nerozumím', 'nèrozoumim']],
    chiffres: [['jedna', 'yèdna'], ['dvě', 'dvyé'], ['tři', 'trji'], ['pět', 'pyèt'], ['deset', 'dèsèt'], ['Kolik to stojí?', 'kolik to stoyi']],
    deplacer: [['Kde je…?', 'gdè yè'], ['Nádraží', 'nadrajhi'], ['Letiště', 'lètichtyè'], ['Jízdenka', 'yizdènka'], ['Doleva', 'dolèva'], ['Doprava', 'doprava'], ['Rovně', 'rovnyè']],
    resto: [['Stůl pro dva', 'stoul pro dva'], ['Jídelní lístek, prosím', 'yidèlni listèk prossim'], ['Voda', 'voda'], ['Káva', 'kava'], ['Účet, prosím', 'outchèt prossim'], ['Dal bych si…', 'dal bikh si']],
    urgences: [['Pomoc!', 'pomots'], ['Zavolejte policii!', 'zavolèïtè politsi-i'], ['Zavolejte záchranku!', 'zavolèïtè zakhrankou'], ['Potřebuji lékaře', 'potrjèbouyi lèkarjè'], ['Zabloudil jsem', 'zabloudil ysèm'], ['Kde je lékárna?', 'gdè yè lèkarna']],
  },
  astuce: 'Prononciations très approximatives (le « ř » n’existe pas en français). Faites relire par un locuteur.',
  medias: [
    { nom: 'ČT24', url: 'https://ct24.ceskatelevize.cz', nature: 'média public', langue: 'tchèque' },
    { nom: 'Radio Prague International', url: 'https://francais.radio.cz', nature: 'radio publique', langue: 'français, anglais' },
    { nom: 'Seznam Zprávy', url: 'https://www.seznamzpravy.cz', nature: 'média en ligne privé', langue: 'tchèque' },
    { nom: 'iDNES.cz', url: 'https://www.idnes.cz', nature: 'portail d’information privé', langue: 'tchèque' },
  ],
});
