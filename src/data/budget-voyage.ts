// Outil « Estimer le budget » : contrat des données et calcul. Les vols sont toujours exclus.
// RÈGLE : une destination n'a une estimation que si ses fourchettes viennent d'une source citée, avec sa méthode
// et sa date de mise à jour. Sans cela, l'outil affiche « estimation non disponible » : ne jamais combler avec des chiffres inventés.
// Pour ajouter une destination : une entrée dans BUDGETS (clé = slug du pays), validée par `verifierBudget`.

export type Style = 'petit' | 'moyen' | 'confort';
export type Poste = 'hebergement' | 'repas' | 'transports' | 'activites' | 'divers';
export type Fourchette = [number, number]; // € par personne et par jour : [bas, haut]

export const STYLES: { id: Style; label: string; desc: string }[] = [
  { id: 'petit', label: 'Petit budget', desc: 'Hébergement simple, repas économiques, transports en commun.' },
  { id: 'moyen', label: 'Intermédiaire', desc: 'Hôtels de gamme moyenne, restaurants, quelques visites payantes.' },
  { id: 'confort', label: 'Confort', desc: 'Hôtels confortables, bons restaurants, déplacements pratiques.' },
];

export const POSTES: { id: Poste; label: string }[] = [
  { id: 'hebergement', label: 'Hébergement' },
  { id: 'repas', label: 'Repas' },
  { id: 'transports', label: 'Transports sur place' },
  { id: 'activites', label: 'Activités' },
  { id: 'divers', label: 'Divers' },
];

export type BudgetDestination = {
  styles: Record<Style, Record<Poste, Fourchette>>;
  methode: string; // comment les fourchettes ont été établies
  source: { nom: string; url: string; commerciale: boolean };
  maj: string; // date de mise à jour des données (AAAA-MM-JJ)
};

// Aucune destination documentée pour l'instant : aucune source ouverte et défendable n'a pu être retenue.
export const BUDGETS: Record<string, BudgetDestination> = {};

export type Resultat = {
  postes: { id: Poste; parPersonne: Fourchette; total: Fourchette }[];
  parPersonne: Fourchette;
  total: Fourchette;
};

// Arrondi à 5 € près pour ne pas afficher une précision que les données n'ont pas
const arrondi5 = (n: number) => Math.round(n / 5) * 5;

export function calculerBudget(b: BudgetDestination, style: Style, jours: number, voyageurs: number): Resultat {
  const j = Math.max(1, Math.floor(jours));
  const v = Math.max(1, Math.floor(voyageurs));
  const postes = POSTES.map(({ id }) => {
    const [bas, haut] = b.styles[style][id];
    return { id, parPersonne: [arrondi5(bas * j), arrondi5(haut * j)] as Fourchette, total: [arrondi5(bas * j * v), arrondi5(haut * j * v)] as Fourchette };
  });
  const somme = (cle: 'parPersonne' | 'total'): Fourchette => [postes.reduce((s, p) => s + p[cle][0], 0), postes.reduce((s, p) => s + p[cle][1], 0)];
  return { postes, parPersonne: somme('parPersonne'), total: somme('total') };
}

// Contrôle d'une entrée : fourchettes cohérentes, source et date présentes
export function verifierBudget(slug: string, b: BudgetDestination): string[] {
  const erreurs: string[] = [];
  if (!b.methode.trim() || !b.source.nom.trim() || !/^https:\/\//.test(b.source.url)) erreurs.push(`${slug} : méthode et source (lien https) obligatoires`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(b.maj)) erreurs.push(`${slug} : date de mise à jour AAAA-MM-JJ obligatoire`);
  for (const s of STYLES) for (const p of POSTES) {
    const f = b.styles[s.id]?.[p.id];
    if (!f || f[0] < 0 || f[1] < f[0]) erreurs.push(`${slug} : fourchette invalide (${s.id}, ${p.id})`);
  }
  return erreurs;
}
