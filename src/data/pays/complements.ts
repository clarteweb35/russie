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

const section = (id: string, titre: string, f: Fiche): Section => ({
  id,
  titre,
  badge: { type: 'warn', texte: 'À confirmer' },
  blocs: [
    { type: 'liste', items: f.items },
    ...(f.alerte ? [{ type: 'alerte' as const, warn: true, titre: 'À vérifier', html: f.alerte }] : []),
  ],
  sources: f.sources,
  note: NOTE,
});

export const sectionPaiements = (f: Fiche) => section('moyens-de-paiement', 'Cartes, espèces et distributeurs', f);
export const sectionBanque = (f: Fiche) => section('compte-bancaire', 'Ouvrir un compte bancaire', f);
export const sectionLogement = (f: Fiche) => section('louer-logement', 'Se loger et louer', f);
