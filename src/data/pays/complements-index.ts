import type { PaysComplet, Rubrique, Section } from './types';
import { sectionBanque, sectionLogement, sectionPaiements } from './complements';
import type { Complement } from './complements';
import { LOT1 } from './complements-1';
import { LOT2 } from './complements-2';
import { LOT3 } from './complements-3';
import { LOT4 } from './complements-4';
import { LOT5 } from './complements-5';
import { LOT6 } from './complements-6';
import { LOT7 } from './complements-7';
import { LOT8 } from './complements-8';
import { LOT9 } from './complements-9';
import { LOT10 } from './complements-10';

// Destinations les plus visitées : moyens de paiement, banque et logement rédigés d'après des sources privées (voir complements.ts).
export const COMPLEMENTS: Record<string, Complement> = { ...LOT1, ...LOT2, ...LOT3, ...LOT4, ...LOT5, ...LOT6, ...LOT7, ...LOT8, ...LOT9, ...LOT10 };

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
