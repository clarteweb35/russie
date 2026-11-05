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

import { estonie } from './estonie';
import { lettonie } from './lettonie';
import { lituanie } from './lituanie';
import { azerbaidjan } from './azerbaidjan';
import { bielorussie } from './bielorussie';
import { kirghizistan } from './kirghizistan';
import { moldavie } from './moldavie';
import { ouzbekistan } from './ouzbekistan';
import { tadjikistan } from './tadjikistan';
import { turkmenistan } from './turkmenistan';
import { ukraine } from './ukraine';
import { japon } from './japon';
import { chine } from './chine';
import { coreeDuSud } from './coree-du-sud';
import { inde } from './inde';
import { indonesie } from './indonesie';
import { egypte } from './egypte';
import { canada } from './canada';
import { etatsUnis } from './etats-unis';
import { mexique } from './mexique';
import { bresil } from './bresil';
import { madagascar } from './madagascar';
import { ileMaurice } from './ile-maurice';
import { australie } from './australie';
import { nouvelleZelande } from './nouvelle-zelande';
// Guides détaillés (rubriques, leçons, sources). Les autres pays du monde n'ont qu'une fiche d'identité : voir src/data/monde/.
// Un pays `test: true` est publié avec la mention « fiche en test ».
export const pays: Pays[] = [finlande, albanie, espagne, allemagne, senegal, vietnam, georgie, turquie, armenie, kazakhstan, serbie, emirats, thailande, maroc, portugal, italie, grece, pologne, suisse, royaumeUni, estonie, lettonie, lituanie, azerbaidjan, bielorussie, kirghizistan, moldavie, ouzbekistan, tadjikistan, turkmenistan, ukraine, japon, chine, coreeDuSud, inde, indonesie, egypte, canada, etatsUnis, mexique, bresil, madagascar, ileMaurice, australie, nouvelleZelande];

export const paysComplets = pays.filter((p): p is PaysComplet => p.complet);

export const guideParIso = (iso: string) => paysComplets.find((p) => p.iso === iso);

export const cheminPays = (slug: string) => `/pays/${slug}`;
