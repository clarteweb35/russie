import type { Pays, PaysComplet } from './types';
import { finlande } from './finlande';
import { albanie } from './albanie';
import { espagne } from './espagne';
import { allemagne } from './allemagne';
import { senegal } from './senegal';
import { vietnam } from './vietnam';
import { georgie } from './georgie';
import { turquie } from './turquie';
import { armenie } from './armenie';
import { kazakhstan } from './kazakhstan';
import { serbie } from './serbie';
import { emirats } from './emirats';
import { thailande } from './thailande';
import { maroc } from './maroc';
import { portugal } from './portugal';
import { italie } from './italie';
import { grece } from './grece';
import { pologne } from './pologne';
import { suisse } from './suisse';
import { royaumeUni } from './royaume-uni';

// Guides détaillés (rubriques, leçons, sources). Les autres pays du monde n'ont qu'une fiche d'identité : voir src/data/monde/.
// Un pays `test: true` est publié avec la mention « fiche en test ».
export const pays: Pays[] = [finlande, albanie, espagne, allemagne, senegal, vietnam, georgie, turquie, armenie, kazakhstan, serbie, emirats, thailande, maroc, portugal, italie, grece, pologne, suisse, royaumeUni];

export const paysComplets = pays.filter((p): p is PaysComplet => p.complet);

export const guideParIso = (iso: string) => paysComplets.find((p) => p.iso === iso);

export const cheminPays = (slug: string) => `/pays/${slug}`;
