import type { Bloc, PaysComplet, Rubrique, Section } from './types';
import officiel from '../monde/officiel.json';
import fiches from '../monde/pays.json';

// Intègre le texte des fiches « Sécurité », « Entrée / séjour » et « Santé » du ministère français (importées par
// scripts/importer-fiches-officielles.mjs, licence Etalab 2.0) dans tous les guides pays.
// Règle : une section rédigée à la main et sourcée reste telle quelle ; une section « À documenter » est remplacée.

type Cle = "securite" | "entree" | "sante" | "utiles" | "contacts";
type Ligne = { k: 'p' | 'li'; x: string };
type Rub = { maj: string; s: { t: string; l: Ligne[] }[] };
const DATA = officiel as unknown as Record<string, Partial<Record<Cle, Rub>>>;

const echapper = (t: string) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const PORTEE = /^Quelle est la portée des Conseils aux Voyageurs/;
const MOIS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
const AUJOURDHUI = new Date('2026-11-05');

// « 15 septembre 2026 » -> Date ; null si illisible
const lireDate = (maj: string) => {
  const m = maj.toLowerCase().match(/(\d{1,2})\s*(?:er)?\s+([a-zéû]+)\s+(\d{4})/);
  const i = m ? MOIS.indexOf(m[2]) : -1;
  return m && i >= 0 ? new Date(Date.UTC(+m[3], i, +m[1])) : null;
};

const TITRES = { securite: 'Sécurité et conseils officiels', entree: 'Entrée et séjour', sante: 'Santé', utiles: 'Lois locales, usages et pratiques', contacts: 'Ambassade, consulats et urgences' } as const;
const NOMS = { securite: 'sécurité', entree: 'entrée et séjour', sante: 'santé', utiles: 'informations utiles', contacts: 'contacts utiles' } as const;

const construire = (cle: Cle, iso: string, nom: string, url: string): Section | null => {
  const r = DATA[iso]?.[cle];
  if (!r) return null;
  const blocs: Bloc[] = [];
  for (const s of r.s) {
    const lignes = s.l.filter((l) => !PORTEE.test(l.x));
    if (!lignes.length) continue;
    // Les zones « formellement déconseillées » sont regroupées dans un seul encadré d'alerte
    if (/formellement déconseill|zones? rouges?|\(rouge|en rouge/i.test(s.t)) {
      const html = lignes.map((l) => (l.k === 'li' ? '• ' : '') + echapper(l.x)).join('<br>');
      blocs.push({ type: 'alerte', warn: true, titre: s.t, html });
      continue;
    }
    const liste: string[] = [];
    const vider = () => { if (liste.length) blocs.push({ type: 'liste', items: liste.splice(0) }); };
    if (s.t) blocs.push({ type: 'p', html: `<strong>${echapper(s.t)}</strong>` });
    for (const l of lignes) {
      if (l.k === 'li') { liste.push(echapper(l.x)); continue; }
      vider();
      blocs.push({ type: 'p', html: echapper(l.x) });
    }
    vider();
  }
  if (!blocs.length) return null;
  const d = lireDate(r.maj);
  const recent = d ? (AUJOURDHUI.getTime() - d.getTime()) / 86400000 < 400 : false;
  return {
    id: cle,
    titre: TITRES[cle],
    badge: recent ? { type: 'ok', texte: 'Vérifié' } : { type: 'warn', texte: 'À confirmer' },
    blocs,
    sources: [{ label: `Ministère de l’Europe et des Affaires étrangères, fiche ${nom} (${NOMS[cle]})${r.maj ? `, mise à jour le ${r.maj}` : ''}`, url, nature: 'source officielle' }],
    note: `Texte repris de la fiche officielle${r.maj ? ` mise à jour le ${r.maj}` : ''}, sans modification de sens (licence Etalab 2.0). Les conseils évoluent : relisez la fiche d’origine juste avant le départ.`,
  };
};

const urlFiche = (slugDiplo: string, cle: string) =>
  `https://www.diplomatie.gouv.fr/fr/information-par-pays/${slugDiplo}/conseils-aux-voyageurs-${cle === 'entree' ? 'entree-sejour' : cle === 'utiles' ? 'informations-utiles' : cle === 'contacts' ? 'contacts-utiles' : cle}`;

const estADocumenter = (s: Section) => s.badge?.texte === 'À documenter';

// Complète un guide avec les fiches officielles ; renvoie le guide inchangé si aucune fiche n'existe pour ce pays.
export const avecOfficiel = (g: PaysComplet): PaysComplet => {
  const f = (fiches as { iso: string; nom: string; diplo?: { slug: string } }[]).find((x) => x.iso === g.iso);
  if (!f?.diplo || !DATA[g.iso]) return g;
  const sec = construire('securite', g.iso, f.nom, urlFiche(f.diplo.slug, 'securite'));
  const ent = construire('entree', g.iso, f.nom, urlFiche(f.diplo.slug, 'entree'));
  const uti = construire('utiles', g.iso, f.nom, urlFiche(f.diplo.slug, 'utiles'));
  const con = construire('contacts', g.iso, f.nom, urlFiche(f.diplo.slug, 'contacts'));
  const san = construire('sante', g.iso, f.nom, urlFiche(f.diplo.slug, 'sante'));

  const rubriques: Rubrique[] = g.rubriques.map((r0) => {
    let r = r0;
    if (r.slug === 'voyager' && (sec || ent)) {
      const maj = DATA[g.iso]?.securite?.maj;
      r = { ...r, intro: 'Cette page reprend les fiches « Sécurité », « Entrée / séjour » et « Santé » du ministère français' + (maj ? ' (mise à jour le ' + maj + ')' : '') + '. Elles font foi : relisez-les juste avant de partir.' };
    }
    if (r.slug === 'langue-culture' && uti) {
      const autres = r.sections.filter((s) => !(estADocumenter(s) && /^Culture/.test(s.titre)));
      return { ...r, sections: [...autres, uti] };
    }
    if (r.slug !== 'voyager') return r;
    let sections: Section[] = [];
    for (const s of r.sections) {
      if (s.id === 'securite' && sec && estADocumenter(s)) sections.push(sec);
      else if (s.id === 'entree' && ent) {
        if (estADocumenter(s)) sections.push(ent);
        else if (s.badge?.type === 'ok') sections.push(s);
        else sections.push(ent, { ...s, id: 'entree-complement', titre: `${s.titre} : précisions complémentaires` });
      } else sections.push(s);
    }
    // La santé s'insère avant l'argent, sauf si le guide en a déjà une
    const aSante = g.rubriques.some((x) => x.sections.some((s) => s.id === 'sante' || /^Santé/.test(s.titre)));
    if (san && !aSante) {
      const i = sections.findIndex((s) => s.id === 'argent');
      sections = i >= 0 ? [...sections.slice(0, i), san, ...sections.slice(i)] : [...sections, san];
    }
    if (con && !sections.some((x) => x.id === 'contacts')) sections.push(con);
    return { ...r, sections };
  });
  const sortie: PaysComplet = { ...g, rubriques };
  // Une fiche qui ne dit plus « bientôt » dans l'accroche : la phrase générique est remplacée
  if (g.accroche.includes('le reste reste à documenter')) {
    sortie.accroche = g.accroche.replace('L’entrée, la sécurité et la monnaie renvoient aux sources officielles ; le reste reste à documenter.', 'Sécurité, entrée et santé reprennent les fiches officielles du ministère ; le reste reste à documenter.');
  }
  return sortie;
};
