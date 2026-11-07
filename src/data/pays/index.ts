import type { Pays, PaysComplet } from './types';
import { guidesMonde } from './monde-guides';
import { avecOfficiel } from './officiel';
import { avecComplements } from './complements';
import { verifierRegistre } from './verifier';

// Guides rédigés un par un : tout fichier de `fiches/` est repris tel quel (un fichier = un pays, une seule exportation).
// Pour ajouter un pays, il suffit de créer son fichier ; aucune liste à tenir à jour.
const modules = import.meta.glob<Record<string, unknown>>('./fiches/*.ts', { eager: true });
const redigees = Object.values(modules).flatMap((m) => Object.values(m)) as Pays[];

// Les autres pays du monde sont générés (monde-guides.ts). Un même pays ne doit pas figurer deux fois : verifierRegistre() le refuse.
// Un pays `test: true` est publié avec la mention « beta ».
const brut: Pays[] = [...redigees, ...guidesMonde];

export const pays: Pays[] = brut.map((p) => (p.complet ? avecComplements(avecOfficiel(p)) : p));

verifierRegistre(pays);

export const paysComplets = pays.filter((p): p is PaysComplet => p.complet);

export const guideParIso = (iso: string) => paysComplets.find((p) => p.iso === iso);

export const cheminPays = (slug: string) => `/pays/${slug}`;
