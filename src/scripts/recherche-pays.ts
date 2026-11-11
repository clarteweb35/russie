// Recherche d'un pays (composant RechercheDestination) : suggestions sous le champ, filtre par région, et, si la page contient
// la liste complète (#liste, page /pays/), masquage des cartes qui ne correspondent pas.
// Les données viennent du bloc JSON #donnees-pays (voir donneesRecherche() dans src/data/monde) : aucune carte n'est lue dans la page.

type Pays = { iso: string; nom: string; href: string; n: string; alias: string[]; long: string; region: string; det: string; tag: string };

const racine = document.querySelector<HTMLElement>('.recherche');
const base = racine?.dataset.base ?? ''; // préfixe de déploiement (« /russie » en local, vide en production)
const pays: Pays[] = JSON.parse(document.getElementById('donnees-pays')?.textContent || '[]');
const champ = document.getElementById('recherche') as HTMLInputElement | null;
const panneau = document.getElementById('resultats') as HTMLUListElement | null;
const boutons = Array.from(document.querySelectorAll<HTMLButtonElement>('.filtre'));
const compte = document.getElementById('compte');
const aucun = document.getElementById('aucun');
// Liste complète, présente seulement sur /pays/ : une carte par pays, repérée par son code ISO
const cartes = new Map(Array.from(document.querySelectorAll<HTMLLIElement>('#liste li[data-iso]')).map((li) => [li.dataset.iso ?? '', li]));
const groupes = Array.from(document.querySelectorAll<HTMLElement>('#liste .groupe'));
let region = '';

const sansAccent = (t: string) => t.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();
const mots = (s: string) => s.split(/[\s'’-]+/);

// Rang d'une suggestion : 0 le nom ou un alias (USA, RDC…) commence par la saisie ; 1 un mot du nom commence par la saisie
// (dès 2 lettres) ; 2 la saisie figure dans le nom officiel ou la capitale (dès 3 lettres, pour ne pas noyer les premières lettres) ;
// -1 aucune correspondance. Ainsi « a » donne les pays en A, « al » Albanie, Algérie, Allemagne…
function rang(p: Pays, q: string): number {
  if (p.n.startsWith(q) || (q.length >= 2 && p.alias.some((a) => a.startsWith(q)))) return 0;
  if (q.length >= 2 && mots(p.n).some((m) => m.startsWith(q))) return 1;
  if (q.length >= 3 && p.long.includes(q)) return 2;
  return -1;
}

// Carte d'un pays dans le panneau de suggestions, construite sans HTML brut
function carte(p: Pays): HTMLLIElement {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = base + p.href;
  const img = document.createElement('img');
  img.src = `${base}/drapeaux/${p.iso.toLowerCase()}.svg`;
  img.alt = '';
  img.width = 36;
  img.height = 24;
  img.loading = 'lazy';
  const nom = document.createElement('span');
  nom.className = 'nom';
  nom.textContent = p.nom;
  if (p.tag) {
    const tag = document.createElement('small');
    tag.className = 'tag-guide';
    tag.textContent = p.tag;
    nom.append(tag);
  }
  const det = document.createElement('span');
  det.className = 'det';
  det.textContent = p.det;
  a.append(img, nom, det);
  li.append(a);
  return li;
}

// Suggestions : avec une saisie, les pays classés par rang ; sans saisie mais avec une région, et sans liste dans la page,
// tous les pays de la région (l'accueil n'affiche plus la liste complète)
function suggerer(q: string): number {
  if (!panneau) return 0;
  panneau.replaceChildren();
  let trouves: Pays[] = [];
  if (q) {
    const dansRegion = pays.filter((p) => !region || p.region === region);
    trouves = dansRegion.map((p) => ({ p, r: rang(p, q) })).filter((x) => x.r >= 0).sort((a, b) => a.r - b.r).map((x) => x.p); // tri stable : ordre alphabétique conservé dans chaque rang
  } else if (region && cartes.size === 0) {
    trouves = pays.filter((p) => p.region === region);
  }
  trouves.forEach((p) => panneau.append(carte(p)));
  panneau.hidden = trouves.length === 0;
  return trouves.length;
}

function filtrer() {
  const q = sansAccent(champ?.value ?? '');
  let n = suggerer(q);
  if (cartes.size > 0) {
    // Page /pays/ : la liste complète se filtre, le compteur suit la liste
    n = 0;
    pays.forEach((p) => {
      const li = cartes.get(p.iso);
      if (!li) return;
      const ok = (!q || p.long.includes(q)) && (!region || p.region === region);
      li.hidden = !ok;
      if (ok) n++;
    });
    groupes.forEach((g) => { g.hidden = !g.querySelector('li:not([hidden])'); });
  }
  if (compte) compte.textContent = q || region ? `${n} pays trouvé${n > 1 ? 's' : ''}.` : '';
  if (aucun) aucun.hidden = n > 0 || (!q && !region);
}

champ?.addEventListener('input', filtrer);

// Clavier : Entrée ouvre le premier résultat, ↓ descend dans la liste, ↑ remonte, Échap revient au champ
const liens = () => Array.from(panneau?.querySelectorAll<HTMLAnchorElement>('a') ?? []);
champ?.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown') { e.preventDefault(); liens()[0]?.focus(); }
  else if (e.key === 'Enter') { const premier = liens()[0]; if (premier) { e.preventDefault(); premier.click(); } }
  else if (e.key === 'Escape' && champ.value) { champ.value = ''; filtrer(); }
});
panneau?.addEventListener('keydown', (e) => {
  const tous = liens();
  const i = tous.indexOf(document.activeElement as HTMLAnchorElement);
  if (e.key === 'ArrowDown') { e.preventDefault(); tous[Math.min(i + 1, tous.length - 1)]?.focus(); }
  else if (e.key === 'ArrowUp') { e.preventDefault(); if (i <= 0) champ?.focus(); else tous[i - 1].focus(); }
  else if (e.key === 'Escape') champ?.focus();
});
boutons.forEach((b) => b.addEventListener('click', () => {
  region = b.dataset.region ?? '';
  boutons.forEach((x) => x.classList.toggle('actif', x === b));
  filtrer();
}));
