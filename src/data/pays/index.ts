import type { Pays, PaysComplet } from './types';
import { finlande } from './finlande';

// Liste unique des pays du menu « Autres pays ». Un pays « bientôt » s'affiche sans lien jusqu'à ce que sa fiche soit prête.
export const pays: Pays[] = [
  finlande,
  { complet: false, slug: 'albanie', nom: 'Albanie', article: 'l’Albanie' },
  { complet: false, slug: 'espagne', nom: 'Espagne', article: 'l’Espagne' },
  { complet: false, slug: 'allemagne', nom: 'Allemagne', article: 'l’Allemagne' },
  { complet: false, slug: 'senegal', nom: 'Sénégal', article: 'le Sénégal' },
  { complet: false, slug: 'vietnam', nom: 'Vietnam', article: 'le Vietnam' },
];

export const paysComplets = pays.filter((p): p is PaysComplet => p.complet);

export const cheminPays = (slug: string) => `/pays/${slug}`;
