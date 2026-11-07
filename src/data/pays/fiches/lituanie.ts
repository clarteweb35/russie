import type { PaysComplet } from '../types';
import { diplo, securiteALire } from '../aides';
import { leconsType, rubriquesType } from '../modele';

const D = diplo('lituanie');

export const lituanie: PaysComplet = {
  complet: true,
  test: true,
  iso: 'LTU',
  slug: 'lituanie',
  nom: 'Lituanie',
  article: 'la Lituanie',
  accroche: 'Un pays balte de l’Union européenne et de l’espace Schengen, voisin de la Biélorussie et de l’enclave russe de Kaliningrad. Fiche beta, à vérifier.',
  couleur: '#006a44',
  langue: { nom: 'lituanien', code: 'lt-LT' },
  devise: 'euro',
  conseilsVoyageurs: D.securite,
  verifie: '4 novembre 2026',
  mediasLocaux: [
    { nom: 'LRT (anglais)', url: 'https://www.lrt.lt/en', nature: 'média public', langue: 'anglais' },
    { nom: 'Delfi Lietuva', url: 'https://www.delfi.lt', nature: 'portail d’information privé', langue: 'lituanien' },
    { nom: '15min', url: 'https://www.15min.lt', nature: 'portail d’information privé', langue: 'lituanien' },
  ],
  rubriques: rubriquesType({
    lieu: 'en Lituanie',
    monnaie: 'l’euro',
    introVoyager: 'La Lituanie fait partie de l’Union européenne et de l’espace Schengen : un Français y entre avec sa carte d’identité ou son passeport (à confirmer sur la fiche officielle).',
    securite: securiteALire(D.securite, 'Lituanie'),
    entree: {
      id: 'entree',
      titre: 'Entrée et séjour',
      badge: { type: 'warn', texte: 'À confirmer' },
      blocs: [{ type: 'liste', items: ['Pays de l’Union européenne et de l’espace Schengen : pas de visa pour un Français, selon les règles européennes générales.', 'Pour un séjour de longue durée, des formalités d’enregistrement existent : elles n’ont pas été documentées ici.', 'La monnaie est l’euro.'] }],
      sources: [{ label: 'Ministère de l’Europe et des Affaires étrangères, fiche Lituanie (entrée et séjour)', url: D.entree, nature: 'source officielle' }],
      note: 'Informations générales sur l’Union européenne ; la fiche officielle fait foi.',
    },
    introLangue: 'Le lituanien est l’une des plus anciennes langues indo-européennes encore parlées. Il s’écrit avec l’alphabet latin et des lettres à signes (ą, č, ė, š, ž…). L’anglais est courant chez les jeunes ; le russe est connu des générations plus âgées, mais son usage peut être mal perçu.',
    langue: [],
  }),
  lecons: leconsType({
    salutations: [['Laba diena', 'laba diéna'], ['Labas vakaras', 'labass vakarass'], ['Ačiū', 'atchiou'], ['Prašau', 'prachaou'], ['Atsiprašau', 'atsiprachaou'], ['Taip', 'taïp'], ['Ne', 'né'], ['Viso gero', 'visso guéro']],
    presenter: [['Mano vardas…', 'mano vardass'], ['Aš esu iš Prancūzijos', 'ach éssou ich prantsouziyoss'], ['Truputį kalbu lietuviškai', 'troupoutii kalbou liétouvichkaï'], ['Ar kalbate angliškai?', 'ar kalbaté anglichkaï'], ['Nesupratau', 'nésoupratao']],
    chiffres: [['vienas', 'viénass'], ['du', 'dou'], ['trys', 'triiss'], ['penki', 'pènki'], ['dešimt', 'déchimt'], ['Kiek kainuoja?', 'kiék kaïnouoya']],
    deplacer: [['Kur yra…?', 'kour ira'], ['Traukinių stotis', 'traoukiniou stotiss'], ['Oro uostas', 'oro ouostass'], ['Bilietas', 'biliétass'], ['Į kairę', 'ii kaïré'], ['Į dešinę', 'ii déchiné'], ['Tiesiai', 'tièssiaï']],
    resto: [['Staliukas dviem', 'stalioukass dviém'], ['Meniu, prašau', 'ménieu prachaou'], ['Vanduo', 'vandouo'], ['Kava', 'kava'], ['Sąskaitą, prašau', 'saskaïta prachaou'], ['Norėčiau…', 'norétchiaou']],
    urgences: [['Padėkite!', 'padékité'], ['Iškvieskite policiją!', 'ichkviéskité politsiya'], ['Iškvieskite greitąją!', 'ichkviéskité grèïtaoya'], ['Man reikia gydytojo', 'man rèkia guidytoyo'], ['Pasiklydau', 'passiklidaou'], ['Kur yra vaistinė?', 'kour ira vaïstiné']],
  }, 'Les prononciations sont très approximatives. Faites relire par un locuteur.'),
  sourcesSupplementaires: [],
};
