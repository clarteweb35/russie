import type { PaysComplet } from '../types';
import { diplo, securiteALire } from '../aides';
import { leconsType, rubriquesType } from '../modele';

const D = diplo('madagascar');

export const madagascar: PaysComplet = {
  complet: true,
  test: true,
  iso: 'MDG',
  slug: 'madagascar',
  nom: 'Madagascar',
  article: 'Madagascar',
  accroche: 'Une grande île de l’océan Indien où le français et le malgache sont officiels. Un visa est nécessaire, en ligne ou à l’arrivée. Fiche beta, à vérifier.',
  couleur: '#fc3d32',
  langue: { nom: 'malgache', code: 'mg-MG' },
  devise: 'ariary',
  conseilsVoyageurs: D.securite,
  verifie: '5 novembre 2026',
  mediasLocaux: [
    { nom: 'Midi Madagasikara', url: 'https://www.midi-madagasikara.mg', nature: 'quotidien privé', langue: 'français' },
    { nom: 'L’Express de Madagascar', url: 'https://www.lexpress.mg', nature: 'quotidien privé', langue: 'français' },
    { nom: 'Newsmada', url: 'https://www.newsmada.com', nature: 'quotidien privé', langue: 'français, malgache' },
    { nom: '2424.mg', url: 'https://2424.mg', nature: 'site d’information privé', langue: 'français' },
  ],
  rubriques: rubriquesType({
    lieu: 'à Madagascar',
    monnaie: 'l’ariary',
    introVoyager: 'Un Français a besoin d’un visa pour Madagascar. Les tarifs ont fortement augmenté en 2026. La situation politique et sécuritaire peut évoluer : lisez la fiche officielle avant de réserver.',
    securite: securiteALire(D.securite, 'Madagascar'),
    entree: {
      id: 'entree',
      titre: 'Visa électronique ou à l’arrivée',
      badge: { type: 'warn', texte: 'À confirmer' },
      blocs: [
        { type: 'liste', items: [
          'L’<strong>e-visa</strong> pour un séjour de 15 jours est passé à <strong>30 €</strong> (contre 10 € auparavant) à partir du 16 février 2026, selon un site spécialisé citant le portail officiel.',
          'Le visa à l’arrivée coûterait environ 25 à 30 € pour 15 jours selon les sources : à vérifier.',
          'Passeport valable <strong>six mois</strong> au moins, <strong>billet retour</strong> exigé, entrée par un aéroport international.',
          'Les sources ne s’accordent pas sur la durée maximale de l’e-visa touristique (15 ou 60 jours) : vérifiez sur le portail officiel avant de payer.',
        ] },
      ],
      sources: [
        { label: 'Ministère de l’Europe et des Affaires étrangères, fiche Madagascar (entrée et séjour)', url: D.entree, nature: 'source officielle' },
        { label: 'VisasNews, Madagascar triple le prix de son visa électronique', url: 'https://visasnews.com/madagascar-triple-le-prix-de-son-visa-electronique-de-15-jours/', nature: 'site d’information sur les visas' },
        { label: 'Fairmoove, visa et taxes pour Madagascar', url: 'https://www.fairmoove.fr/guide-voyage/madagascar/guide-pratique/preparer-voyage/visa-taxes', nature: 'agence de voyages (source commerciale)' },
      ],
    },
    introLangue: 'Le malgache est la langue de tous les Malgaches ; le français sert dans l’administration, l’enseignement et les villes. Le malgache s’écrit avec l’alphabet latin. Les phrases ci-dessous sont à faire relire par un locuteur.',
    langue: [],
  }),
  lecons: leconsType({
    salutations: [['Salama', 'salama'], ['Tsara hariva', 'tsar’ hariv’'], ['Misaotra', 'misaoutr’'], ['Azafady', 'azafad’'], ['Azafady', 'azafad’'], ['Eny', 'éné'], ['Tsia', 'tsi'], ['Veloma', 'véloum’']],
    presenter: [['Ny anarako dia…', 'ni anarakou dia'], ['Avy any Frantsa aho', 'avi ani frantsa aou'], ['Mahay teny malagasy kely aho', 'mahaï téni malagasi kéli aou'], ['Mahay teny anglisy ve ianao?', 'mahaï téni anglissi vé ianaou'], ['Tsy azoko', 'tsi azokou']],
    chiffres: [['iray', 'irai'], ['roa', 'roua'], ['telo', 'télou'], ['dimy', 'dimi'], ['folo', 'foulou'], ['Ohatrinona izany?', 'ouatrinn’ izani']],
    deplacer: [['Aiza ny…?', 'aïza ni'], ['Gara', 'gara'], ['Seranam-piaramanidina', 'séranam-piaramanidina'], ['Tapakila', 'tapakila'], ['Havia', 'havia'], ['Havanana', 'havanana'], ['Mahitsy', 'mahitsi']],
    resto: [['Latabatra ho an’ny roa', 'latabatra hou an’ni roua'], ['Ny menio azafady', 'ni ménio azafad’'], ['Rano', 'ranou'], ['Kafe', 'kafé'], ['Ny faktiora azafady', 'ni faktioura azafad’'], ['Mila … aho', 'mila aou', 'J’ai besoin de…']],
    urgences: [['Vonjeo!', 'vondjéou'], ['Antsoy ny polisy!', 'antsoï ni polissi'], ['Antsoy ny ambulansa!', 'antsoï ni ambulansa'], ['Mila dokotera aho', 'mila doukotéra aou'], ['Very aho', 'véri aou'], ['Aiza ny farmasia?', 'aïza ni farmassia']],
  }, 'Prononciations très approximatives, le malgache n’étant pas écrit comme il se prononce. Le français suffit dans les villes. Faites relire par un locuteur.'),
  sourcesSupplementaires: [],
};
