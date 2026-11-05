import type { Source } from './types';

// Formalités d'entrée vérifiées pays par pays (recherche du 5 novembre 2026), pour les guides de monde-guides.ts.
// Un pays absent de cette liste affiche « À documenter » avec un renvoi à la fiche officielle : rien n'est inventé.
// Chaque entrée reste « À confirmer » : les règles de visa changent vite.

export type Entree = {
  titre?: string;
  intro?: string;
  items: string[];
  alerte?: string;
  sources?: Source[];
};

export const ENTREES: Record<string, Entree> = {};
