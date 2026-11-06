import type { Section, Source } from './types';

// Compléments rédigés pour les destinations les plus visitées : moyens de paiement, banque et logement.
// Honnêteté : aucune source officielle lisible ici ; ces textes viennent de sites privés (guides, forums d'expatriés,
// presse spécialisée, sites commerciaux), signalés comme tels. Badge « À confirmer » partout, aucun chiffre sans source.
// Recherche du 6 novembre 2026. À vérifier auprès de la banque, de l'ambassade ou d'un professionnel avant toute décision.

export type Fiche = { items: string[]; alerte?: string; sources: Source[] };
export type Complement = { paiements?: Fiche; banque?: Fiche; logement?: Fiche };

// Natures de sources, pour que le lecteur sache à qui il a affaire
export const OFFICIEL = 'source officielle (tourisme)';
export const PRESSE = 'presse';
export const GUIDE = 'guide de voyage (source commerciale)';
export const FORUM = 'forum d’expatriés (témoignages)';
export const EXPATS = 'site pour expatriés (source commerciale)';
export const PRO = 'cabinet ou prestataire (source commerciale)';
export const src = (label: string, url: string, nature: string): Source => ({ label, url, nature });

const NOTE = 'Rédigé d’après des sources privées citées ci-dessous, sans source officielle : les règles et les tarifs changent. Vérifiez auprès de votre banque ou d’un professionnel avant de décider. Recherche du 6 novembre 2026.';

const vide = (f: Fiche) => f.items.every((i) => i.startsWith('Aucune source fiable'));

const section = (id: string, titre: string, f: Fiche): Section => ({
  id,
  titre,
  badge: { type: 'warn', texte: vide(f) ? 'À documenter' : 'À confirmer' },
  blocs: [
    { type: 'liste', items: f.items },
    ...(f.alerte ? [{ type: 'alerte' as const, warn: true, titre: 'À vérifier', html: f.alerte }] : []),
  ],
  sources: f.sources,
  note: NOTE,
});

// Écritures courtes pour les lots de pays : f(items, sources, alerte?) et s(label, url, nature)
export const f = (items: string[], sources: Source[], alerte?: string): Fiche => ({ items, sources, ...(alerte ? { alerte } : {}) });
export const NATURES = { off: OFFICIEL, pre: PRESSE, gui: GUIDE, for: FORUM, exp: EXPATS, pro: PRO } as const;
export const s = (label: string, url: string, nature: keyof typeof NATURES = 'exp'): Source => src(label, url, NATURES[nature]);
// Rien de fiable trouvé : la section le dit et renvoie vers un professionnel local
export const ABSENT = (sujet: string): string => 'Aucune source fiable n’a été trouvée sur ' + sujet + ' lors de la recherche du 6 novembre 2026.';

export const sectionPaiements =(f: Fiche) => section('moyens-de-paiement', 'Cartes, espèces et distributeurs', f);
export const sectionBanque = (f: Fiche) => section('compte-bancaire', 'Ouvrir un compte bancaire', f);
export const sectionLogement = (f: Fiche) => section('louer-logement', 'Se loger et louer', f);
