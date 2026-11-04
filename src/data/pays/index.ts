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

// Liste unique des pays du menu « Autres pays ». Un pays « bientôt » s'affiche sans lien jusqu'à ce que sa fiche soit prête ;
// un pays `test: true` est publié avec la mention « fiche en test ».
export const pays: Pays[] = [finlande, albanie, espagne, allemagne, senegal, vietnam, georgie, turquie, armenie, kazakhstan, serbie, emirats, thailande, maroc, portugal, italie, grece, pologne, suisse, royaumeUni];

export const paysComplets = pays.filter((p): p is PaysComplet => p.complet);

export const cheminPays = (slug: string) => `/pays/${slug}`;
