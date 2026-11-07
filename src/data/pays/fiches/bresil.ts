import type { PaysComplet } from '../types';
import { diplo, securiteALire } from '../aides';
import { leconsType, rubriquesType } from '../modele';
import { PORTUGAIS } from '../langues-monde';

const D = diplo('bresil');

export const bresil: PaysComplet = {
  complet: true,
  test: true,
  iso: 'BRA',
  slug: 'bresil',
  nom: 'Brésil',
  article: 'le Brésil',
  accroche: 'Un pays-continent de langue portugaise, accessible sans visa jusqu’à 90 jours. Son portugais diffère de celui du Portugal. Fiche beta, à vérifier.',
  couleur: '#009c3b',
  langue: { nom: 'portugais brésilien', code: 'pt-BR' },
  devise: 'real',
  conseilsVoyageurs: D.securite,
  verifie: '5 novembre 2026',
  mediasLocaux: [
    { nom: 'Agência Brasil', url: 'https://agenciabrasil.ebc.com.br', nature: 'agence de presse publique', langue: 'portugais, anglais' },
    { nom: 'Folha de S.Paulo', url: 'https://www.folha.uol.com.br', nature: 'quotidien privé', langue: 'portugais' },
    { nom: 'O Globo', url: 'https://oglobo.globo.com', nature: 'quotidien privé', langue: 'portugais' },
    { nom: 'G1', url: 'https://g1.globo.com', nature: 'portail d’information privé', langue: 'portugais' },
  ],
  rubriques: rubriquesType({
    lieu: 'au Brésil',
    monnaie: 'le real',
    introVoyager: 'Les Français n’ont pas besoin de visa pour un séjour touristique de 90 jours au plus sur 180 jours. La sécurité demande de la vigilance dans les grandes villes : lisez la fiche officielle.',
    securite: securiteALire(D.securite, 'Brésil'),
    entree: {
      id: 'entree',
      titre: 'Entrée sans visa pour 90 jours',
      badge: { type: 'warn', texte: 'À confirmer' },
      blocs: [{ type: 'liste', items: [
        '<strong>Tourisme, 90 jours au plus sur 180</strong> : pas de visa pour les Français, selon les sources consultées.',
        'Depuis janvier 2024, la <strong>prolongation sur place</strong> n’est plus possible : un dépassement peut entraîner un refus d’entrée ultérieur.',
        'Passeport valable <strong>six mois</strong> après l’entrée selon la plupart des sources ; un billet de retour peut être demandé.',
        'Pour travailler ou rester plus de 90 jours, un visa se demande au consulat du Brésil.',
      ] }],
      sources: [
        { label: 'Ministère de l’Europe et des Affaires étrangères, fiche Brésil (entrée et séjour)', url: D.entree, nature: 'source officielle' },
        { label: 'Lonely Planet, visa pour le Brésil', url: 'https://www.lonelyplanet.fr/destinations/amerique/bresil/visa', nature: 'guide de voyage' },
        { label: 'Evaneos, visa pour le Brésil', url: 'https://www.evaneos.fr/bresil/voyage/informations-pratiques/visa/', nature: 'agence de voyages (source commerciale)' },
      ],
    },
    introLangue: 'Le portugais brésilien se prononce différemment du portugais du Portugal : voyelles plus ouvertes, « t » et « d » adoucis devant « i ». L’anglais est peu pratiqué hors du tourisme. Le « tu » et le « você » s’emploient largement.',
    langue: [],
  }),
  lecons: leconsType(PORTUGAIS, 'Prononciations approximatives (portugais brésilien). Faites relire par un locuteur.'),
  sourcesSupplementaires: [],
};
