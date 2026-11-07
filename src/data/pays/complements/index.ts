import type { PaysComplet, Rubrique, Section } from '../types';
import { sectionBanque, sectionLogement, sectionPaiements } from './outils';
import type { Complement } from './outils';

// Moyens de paiement, banque et logement rédigés d'après des sources privées (voir outils.ts).
// Un fichier de `regions/` regroupe des pays et exporte une table { ISO: Complement } : tout fichier ajouté est repris.
const modules = import.meta.glob<Record<string, Record<string, Complement>>>('./regions/*.ts', { eager: true });

const fusion: Record<string, Complement> = {};
for (const [fichier, m] of Object.entries(modules)) {
  for (const table of Object.values(m)) {
    for (const [iso, c] of Object.entries(table)) {
      if (fusion[iso]) throw new Error(`Complément en double pour ${iso} (${fichier})`);
      fusion[iso] = c;
    }
  }
}
export const COMPLEMENTS: Record<string, Complement> = fusion;
const aDocumenter = (s: Section) => s.badge?.texte === 'À documenter';

export const avecComplements = (g: PaysComplet): PaysComplet => {
  const c = COMPLEMENTS[g.iso];
  if (!c) return g;
  const rubriques: Rubrique[] = g.rubriques.map((r) => {
    if (r.slug === 'paiements' && c.paiements) {
      return { ...r, intro: 'Cartes, espèces, distributeurs et frais : ce que disent des sites de voyage et d’expatriés, cités ci-dessous comme sources privées.', sections: [...r.sections.filter((s) => !aDocumenter(s)), sectionPaiements(c.paiements)] };
    }
    if (r.slug === 'voyager' && c.paiements) {
      // L'ancienne section « Argent » vide est remplacée par la rubrique Paiements
      return { ...r, sections: r.sections.filter((s) => !(s.id === 'argent' && aDocumenter(s))) };
    }
    if (r.slug === 'vivre' && (c.banque || c.logement)) {
      const gardees = r.sections.filter((s) => !(aDocumenter(s) && /^Banque/.test(s.titre)));
      return { ...r, sections: [...gardees, ...(c.banque ? [sectionBanque(c.banque)] : []), ...(c.logement ? [sectionLogement(c.logement)] : [])] };
    }
    return r;
  });
  return { ...g, rubriques };
};
