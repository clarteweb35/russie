import type { PaysComplet } from '../types';
import { diplo, securiteALire } from '../aides';
import { leconsType, rubriquesType } from '../modele';
import { LECONS_ANGLAIS } from '../anglais';

const D = diplo('etats-unis');

export const etatsUnis: PaysComplet = {
  complet: true,
  test: true,
  iso: 'USA',
  slug: 'etats-unis',
  nom: 'États-Unis',
  article: 'les États-Unis',
  accroche: 'Un pays où la voiture et la carte bancaire sont presque obligatoires, et dont l’entrée passe par une autorisation en ligne (ESTA) dont les règles évoluent. Fiche beta, à vérifier.',
  couleur: '#3c3b6e',
  langue: { nom: 'anglais', code: 'en-US' },
  devise: 'dollar américain',
  conseilsVoyageurs: D.securite,
  verifie: '5 novembre 2026',
  mediasLocaux: [
    { nom: 'PBS NewsHour', url: 'https://www.pbs.org/newshour', nature: 'média public', langue: 'anglais' },
    { nom: 'NPR', url: 'https://www.npr.org', nature: 'radio publique', langue: 'anglais' },
    { nom: 'Associated Press', url: 'https://apnews.com', nature: 'agence de presse', langue: 'anglais' },
    { nom: 'USA Today', url: 'https://www.usatoday.com', nature: 'quotidien privé', langue: 'anglais' },
  ],
  rubriques: rubriquesType({
    lieu: 'aux États-Unis',
    monnaie: 'le dollar américain',
    introVoyager: 'Un Français entre sans visa pour un court séjour touristique, mais doit obtenir une autorisation en ligne (ESTA). Le tarif et certaines exigences ont changé et peuvent encore changer.',
    securite: securiteALire(D.securite, 'États-Unis'),
    entree: {
      id: 'entree',
      titre: 'ESTA : autorisation en ligne',
      badge: { type: 'warn', texte: 'À confirmer' },
      blocs: [
        { type: 'liste', items: [
          'L’<strong>ESTA</strong> est exigée avant le départ pour un court séjour sans visa (programme d’exemption de visa).',
          'Tarif relevé : <strong>40 dollars</strong> depuis fin septembre 2025 (21 auparavant). Un nouveau tarif est évoqué pour les demandes à partir du 16 octobre 2026, sans montant confirmé.',
          '<strong>Réseaux sociaux</strong> : une obligation de déclarer ses comptes a été annoncée puis démentie ou reportée selon les médias. Elle semblait facultative au printemps 2026 ; vérifiez l’état actuel.',
          'Utilisez uniquement le site officiel : des sites imitateurs facturent des frais supplémentaires.',
        ] },
        { type: 'alerte', warn: true, titre: 'Règles en mouvement', html: 'Les conditions d’entrée évoluent vite. Consultez la fiche du ministère français et le site officiel de l’ESTA le jour de la demande.' },
      ],
      sources: [
        { label: 'Ministère de l’Europe et des Affaires étrangères, fiche États-Unis (entrée et séjour)', url: D.entree, nature: 'source officielle' },
        { label: 'Ulysse, ESTA durci : prix et réseaux sociaux', url: 'https://ulysse.com/news/esta-durci-usa-prix-reseaux-sociaux-2026', nature: 'presse du voyage' },
        { label: 'Tourmag, ESTA : les réseaux sociaux ne sont pas (encore) obligatoires', url: 'https://www.tourmag.com/ESTA-Etats-Unis-non-declarer-ses-reseaux-sociaux-n-est-pas-encore-obligatoire_a130426.html', nature: 'presse professionnelle du tourisme' },
      ],
    },
    introLangue: 'L’anglais américain s’écrit comme l’anglais britannique à quelques variantes près. Les Américains sont habitués aux accents étrangers. Les pourboires (15 à 20 % au restaurant) sont d’usage, mais ce montant n’a pas été vérifié ici.',
    langue: [],
  }),
  lecons: leconsType(LECONS_ANGLAIS, 'Les prononciations sont approximatives. Faites relire par un locuteur.'),
  sourcesSupplementaires: [],
};
