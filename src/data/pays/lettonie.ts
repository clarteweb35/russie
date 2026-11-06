import type { PaysComplet } from './types';
import { diplo, securiteALire } from './aides';
import { leconsType, rubriquesType } from './modele';

const D = diplo('lettonie');

export const lettonie: PaysComplet = {
  complet: true,
  test: true,
  iso: 'LVA',
  slug: 'lettonie',
  nom: 'Lettonie',
  article: 'la Lettonie',
  accroche: 'Un pays balte de l’Union européenne et de l’espace Schengen, voisin de la Russie et de la Biélorussie. Fiche beta, à vérifier.',
  couleur: '#9e3039',
  langue: { nom: 'letton', code: 'lv-LV' },
  devise: 'euro',
  conseilsVoyageurs: D.securite,
  verifie: '4 novembre 2026',
  mediasLocaux: [
    { nom: 'LSM (anglais)', url: 'https://eng.lsm.lv', nature: 'média public', langue: 'anglais' },
    { nom: 'LSM (letton)', url: 'https://www.lsm.lv', nature: 'média public', langue: 'letton' },
    { nom: 'Delfi Latvija', url: 'https://www.delfi.lv', nature: 'portail d’information privé', langue: 'letton, russe' },
  ],
  rubriques: rubriquesType({
    lieu: 'en Lettonie',
    monnaie: 'l’euro',
    introVoyager: 'La Lettonie fait partie de l’Union européenne et de l’espace Schengen : un Français y entre avec sa carte d’identité ou son passeport (à confirmer sur la fiche officielle).',
    securite: securiteALire(D.securite, 'Lettonie'),
    entree: {
      id: 'entree',
      titre: 'Entrée et séjour',
      badge: { type: 'warn', texte: 'À confirmer' },
      blocs: [{ type: 'liste', items: ['Pays de l’Union européenne et de l’espace Schengen : pas de visa pour un Français, selon les règles européennes générales.', 'Pour un séjour de longue durée, des formalités d’enregistrement existent : elles n’ont pas été documentées ici.', 'La monnaie est l’euro.'] }],
      sources: [{ label: 'Ministère de l’Europe et des Affaires étrangères, fiche Lettonie (entrée et séjour)', url: D.entree, nature: 'source officielle' }],
      note: 'Informations générales sur l’Union européenne ; la fiche officielle fait foi.',
    },
    introLangue: 'Le letton s’écrit avec l’alphabet latin et des lettres à signes (ā, ē, š, ž…). L’anglais est courant dans les villes ; le russe est parlé par une partie de la population, mais son usage peut être mal perçu.',
    langue: [],
  }),
  lecons: leconsType({
    salutations: [['Sveiki', 'svéïki'], ['Labvakar', 'labvakar'], ['Paldies', 'paldiès'], ['Lūdzu', 'loudzou'], ['Atvainojiet', 'atvaïnoïiét'], ['Jā', 'ya'], ['Nē', 'nè'], ['Uz redzēšanos', 'ouz rédzéchanoss']],
    presenter: [['Mani sauc…', 'mani saouts'], ['Es esmu no Francijas', 'ès èsmou no frantsiyass'], ['Es nedaudz runāju latviski', 'ès nèdaoudz rounayou latviski'], ['Vai jūs runājat angliski?', 'vaï yousse rounayat angliski'], ['Es nesapratu', 'ès nèssapratou']],
    chiffres: [['viens', 'viènss'], ['divi', 'divi'], ['trīs', 'triiss'], ['pieci', 'piètsi'], ['desmit', 'dèsmit'], ['Cik tas maksā?', 'tsik tass maksaa']],
    deplacer: [['Kur ir…?', 'kour ir'], ['Dzelzceļa stacija', 'dzèlztsélia statsiya'], ['Lidosta', 'lidosta'], ['Biļete', 'bilété'], ['Pa kreisi', 'pa kréïssi'], ['Pa labi', 'pa labi'], ['Taisni', 'taïsni']],
    resto: [['Galdiņš diviem', 'galdinch divièm'], ['Ēdienkarti, lūdzu', 'èdiènkarti loudzou'], ['Ūdens', 'oudènss'], ['Kafija', 'kafiya'], ['Rēķinu, lūdzu', 'rètinou loudzou'], ['Es vēlētos…', 'ès vèlètoss']],
    urgences: [['Palīdziet!', 'palidziét'], ['Zvaniet policijai!', 'zvaniét politsiyaï'], ['Izsauciet ātro palīdzību!', 'izsaoutsiét atro palidzibou'], ['Man vajag ārstu', 'man vayag arstou'], ['Esmu apmaldījies', 'èsmou apmaldiyiès'], ['Kur ir aptieka?', 'kour ir aptièka']],
  }, 'Les prononciations sont très approximatives. Faites relire par un locuteur.'),
  sourcesSupplementaires: [],
};
