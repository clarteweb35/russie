import type { Pays } from './types';

// Contrôles des données, exécutés à chaque build : une erreur ici arrête la construction du site.
// Ils protègent les règles de fiabilité (voir CLAUDE.md) sans tests externes.
export function verifierRegistre(liste: Pays[]): void {
  const erreurs: string[] = [];
  const iso = new Set<string>();
  const slugs = new Set<string>();

  for (const p of liste) {
    if (slugs.has(p.slug)) erreurs.push(`slug en double : ${p.slug}`);
    slugs.add(p.slug);
    if (!p.complet) continue;

    if (!/^[A-Z]{3}$/.test(p.iso)) erreurs.push(`${p.slug} : code ISO invalide « ${p.iso} »`);
    if (iso.has(p.iso)) erreurs.push(`${p.slug} : code ISO en double (${p.iso})`);
    iso.add(p.iso);

    for (const r of p.rubriques) {
      for (const s of r.sections) {
        // Règle de contenu : un badge « Vérifié » exige une source citée.
        if (s.badge?.type === 'ok' && !s.sources?.length) {
          erreurs.push(`${p.slug} / ${r.slug} / « ${s.titre} » : badge « ${s.badge.texte} » sans source`);
        }
        for (const src of s.sources ?? []) {
          if (!/^https?:\/\//.test(src.url)) erreurs.push(`${p.slug} / « ${s.titre} » : URL de source invalide « ${src.url} »`);
        }
      }
    }
  }

  if (erreurs.length) throw new Error(`Données des pays invalides (${erreurs.length}) :\n- ${erreurs.slice(0, 30).join('\n- ')}`);
}
