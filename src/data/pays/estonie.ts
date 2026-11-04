import type { PaysComplet } from './types';
import { diplo, securiteALire } from './aides';
import { leconsType, rubriquesType } from './modele';

const D = diplo('estonie');

export const estonie: PaysComplet = {
  complet: true,
  test: true,
  iso: 'EST',
  slug: 'estonie',
  nom: 'Estonie',
  article: 'l’Estonie',
  accroche: 'Un pays balte de l’Union européenne et de l’espace Schengen, très numérique, voisin de la Russie. Fiche en test, à vérifier.',
  couleur: '#0072ce',
  langue: { nom: 'estonien', code: 'et-EE' },
  devise: 'euro',
  conseilsVoyageurs: D.securite,
  verifie: '4 novembre 2026',
  mediasLocaux: [
    { nom: 'ERR News', url: 'https://news.err.ee', nature: 'média public', langue: 'anglais' },
    { nom: 'Postimees', url: 'https://www.postimees.ee', nature: 'quotidien privé', langue: 'estonien' },
    { nom: 'Delfi Eesti', url: 'https://www.delfi.ee', nature: 'portail d’information privé', langue: 'estonien' },
  ],
  rubriques: rubriquesType({
    lieu: 'en Estonie',
    monnaie: 'l’euro',
    introVoyager: 'L’Estonie fait partie de l’Union européenne et de l’espace Schengen : un Français y entre avec sa carte d’identité ou son passeport, comme dans les autres pays Schengen (à confirmer sur la fiche officielle).',
    securite: securiteALire(D.securite, 'Estonie'),
    entree: {
      id: 'entree',
      titre: 'Entrée et séjour',
      badge: { type: 'warn', texte: 'À confirmer' },
      blocs: [{ type: 'liste', items: ['Pays de l’Union européenne et de l’espace Schengen : pas de visa pour un Français, selon les règles européennes générales.', 'Pour un séjour de longue durée, des formalités d’enregistrement existent : elles n’ont pas été documentées ici.', 'La monnaie est l’euro : pas de change depuis la France.'] }],
      sources: [{ label: 'Ministère de l’Europe et des Affaires étrangères, fiche Estonie (entrée et séjour)', url: D.entree, nature: 'source officielle' }],
      note: 'Informations générales sur l’Union européenne ; la fiche officielle fait foi.',
    },
    introLangue: 'L’estonien est proche du finnois et s’écrit avec l’alphabet latin et quelques lettres accentuées (õ, ä, ö, ü). L’anglais est très répandu. Le russe est parlé par une partie de la population, mais son usage peut être mal perçu.',
    langue: [],
  }),
  lecons: leconsType({
    salutations: [['Tere', 'téré'], ['Tere õhtust', 'téré euhtoust'], ['Aitäh', 'aï-tèh'], ['Palun', 'palounn'], ['Vabandust', 'vabandoust'], ['Jah', 'yah'], ['Ei', 'éï'], ['Head aega', 'héad aéga']],
    presenter: [['Minu nimi on…', 'minou nimi onn'], ['Ma olen Prantsusmaalt', 'ma olèn prantsousmaalt'], ['Ma räägin natuke eesti keelt', 'ma rèèguine natouké éésti kéélt'], ['Kas te räägite inglise keelt?', 'kass té rèèguité inglissé kéélt'], ['Ma ei saanud aru', 'ma éï saanoud arou']],
    chiffres: [['üks', 'uks'], ['kaks', 'kaks'], ['kolm', 'kolm'], ['viis', 'viiss'], ['kümme', 'kumé'], ['Kui palju see maksab?', 'koui palyou sé maksab']],
    deplacer: [['Kus on…?', 'kous onn'], ['Raudteejaam', 'raoudtéyaam'], ['Lennujaam', 'lénnouyaam'], ['Pilet', 'pilèt'], ['Vasakule', 'vasakoulé'], ['Paremale', 'parémalé'], ['Otse', 'otsé']],
    resto: [['Laud kahele', 'laoud kahélé'], ['Menüü, palun', 'ménuu palounn'], ['Vesi', 'vési'], ['Kohv', 'kohv'], ['Arve, palun', 'arvé palounn'], ['Ma sooviksin…', 'ma soovikssin']],
    urgences: [['Appi!', 'appi'], ['Kutsuge politsei!', 'koutsougé politséï'], ['Kutsuge kiirabi!', 'koutsougé kiirabi'], ['Mul on arsti vaja', 'moul onn arsti vaya'], ['Ma olen eksinud', 'ma olèn èxinoud'], ['Kus on apteek?', 'kous onn apték']],
  }, 'Les prononciations sont très approximatives : le « õ » n’existe pas en français. Faites relire par un locuteur.'),
  sourcesSupplementaires: [],
};
