import type { Bloc, Section } from './types';

// Aides communes aux fiches pays : évitent de recopier les mêmes blocs d'un pays à l'autre.

// Adresses officielles du ministère français pour un pays (le slug est celui du site diplomatie.gouv.fr)
export const diplo = (slug: string) => ({
  securite: `https://www.diplomatie.gouv.fr/fr/information-par-pays/${slug}/conseils-aux-voyageurs-securite`,
  entree: `https://www.diplomatie.gouv.fr/fr/information-par-pays/${slug}/conseils-aux-voyageurs-entree-sejour`,
});

const alerteACompleter = (detail: string): Bloc => ({ type: 'alerte', warn: true, titre: 'Section à compléter', html: detail });

// Section laissée vide faute de source fiable : mieux vaut le dire que remplir avec des chiffres inventés
export const aDocumenter = (titre: string, detail = 'Aucune source fiable n’a été retenue sur ce sujet.', id?: string): Section => ({
  id,
  titre,
  badge: { type: 'warn', texte: 'À documenter' },
  blocs: [alerteACompleter(detail)],
});

// Section « fiche officielle de sécurité à lire » quand seule l'adresse a pu être vérifiée
export const securiteALire = (url: string, pays: string): Section => ({
  id: 'securite',
  titre: 'Sécurité et conseils officiels',
  badge: { type: 'warn', texte: 'À documenter' },
  blocs: [{ type: 'alerte', warn: true, titre: 'Fiche officielle à lire', html: `Je n’ai pas pu lire la rubrique « Sécurité » de la fiche du ministère pour ${pays} lors de cette recherche. Lisez-la avant de partir : elle liste les risques à jour et les numéros d’urgence.` }],
  sources: [{ label: `Ministère de l’Europe et des Affaires étrangères, fiche ${pays} (sécurité)`, url, nature: 'source officielle' }],
});

// Rubrique « Paiements » de départ, à compléter
export const paiementsACompleter = (monnaie: string) => ({
  slug: 'paiements' as const,
  titre: 'Moyens de paiement',
  intro: `La monnaie est ${monnaie}. Cette page est à compléter : je n’ai pas de source fiable à ce stade.`,
  resume: 'Monnaie, cartes et espèces.',
  icone: '💳',
  sections: [aDocumenter('Monnaie, cartes et espèces', 'Les usages (cartes françaises, retraits, paiement mobile) n’ont pas été vérifiés. Renseignez-vous auprès de votre banque avant de partir.')],
});

// Section « Culture et usages » de départ, à compléter
export const cultureACompleter = () => aDocumenter('Culture et usages', 'Les usages (politesse, repas, horaires) n’ont pas été vérifiés auprès de sources fiables.');
