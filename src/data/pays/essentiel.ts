import officiel from '../monde/officiel.json';
import { COMPLEMENTS } from './complements-index';

// Version « essentielle » d'un pays : l'indispensable en quelques lignes, sans commentaire.
// Tout est calculé à partir des fiches officielles importées (officiel.json) et des compléments sourcés : rien n'est écrit à la main,
// donc rien n'est inventé. Chaque ligne renvoie vers le détail complet.

type Ligne = { k: 'p' | 'li'; x: string };
type Rub = { maj: string; s: { t: string; l: Ligne[] }[] };
type Donnees = Partial<Record<'securite' | 'entree' | 'sante' | 'contacts', Rub>>;
const DATA = officiel as unknown as Record<string, Donnees>;

export type BlocEssentiel = { id: string; titre: string; icone: string; badge: 'ok' | 'warn'; items: string[]; alerte?: string; lien: { label: string; chemin: string }; source?: string };

const PORTEE = /^Quelle est la portée des Conseils/;
const echapper = (t: string) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Première phrase, raccourcie proprement si elle est très longue
const phrase = (t: string, max = 230) => {
  const m = t.match(/^.+?[.!?](?=\s+[A-ZÉÈÀÂÊÎÔÛÇ«"(]|$)/);
  let s = (m ? m[0] : t).trim();
  if (s.length > max) s = s.slice(0, max).replace(/\s+\S*$/, '') + '…';
  return s;
};

const premiere = (s: { l: Ligne[] }) => s.l.find((l) => !PORTEE.test(l.x))?.x ?? '';
const utiles = (r?: Rub) => (r?.s ?? []).filter((s) => s.t && s.l.some((l) => !PORTEE.test(l.x)));
const gras = (titre: string, texte: string) => `<strong>${echapper(titre)}</strong> : ${echapper(texte)}`;

const ENTREE = /visa|passeport|formalités d.entrée|^entrée|autorisation|assurance|conditions d.entrée|conditions de séjour|carte d.identité|vaccin/i;
const ENTREE_NON = /mineur|douane|douanière|covid|sanitaire|sommes|tabac|convois|transit|sortie|contrôle|humanitaire|animaux|produits|devise/i;
const RISQUE = /terroris|délinquance|criminalité|enlèvement|risque|insécurité|manifestation|catastrophe|séisme|volcan|cyclone|route|circulation|transport/i;
const SANTE_COURANTE = /avant le départ|frais d.hospitalisation|recommandations|vaccinations|hygi|prévention|infections sexuellement|piqûres|moustiques|règles|risques généraux|généralités/i;

export const aEssentiel = (iso: string) => Boolean(DATA[iso]?.securite || DATA[iso]?.entree);

// Blocs de la page « essentiel », dans l'ordre de lecture
export const essentiel = (iso: string, href: string): { maj: string; blocs: BlocEssentiel[] } => {
  const d = DATA[iso] ?? {};
  const maj = d.securite?.maj || d.entree?.maj || '';
  const blocs: BlocEssentiel[] = [];

  // Entrée
  const ent = utiles(d.entree).filter((s) => ENTREE.test(s.t) && !ENTREE_NON.test(s.t)).slice(0, 4);
  if (ent.length) {
    blocs.push({ id: 'entree', titre: 'Entrer dans le pays', icone: '🛂', badge: 'ok', items: ent.map((s) => gras(s.t, phrase(premiere(s)))), lien: { label: 'Toutes les formalités', chemin: `${href}/voyager#entree` } });
  }

  // Sécurité : zones rouges d'abord, puis les principaux risques
  const secu = utiles(d.securite);
  const rouges = secu.filter((s) => /formellement déconseill|zones? rouges?|\(rouge|en rouge/i.test(s.t));
  const oranges = secu.filter((s) => /déconseill.*sauf|zones? orange|\(orange|en orange/i.test(s.t) && !rouges.includes(s));
  const risques = secu.filter((s) => RISQUE.test(s.t) && !rouges.includes(s) && !oranges.includes(s) && !/vigilance renforcée|activités sportives/i.test(s.t)).slice(0, 3);
  if (secu.length) {
    const items: string[] = [];
    for (const s of rouges.slice(0, 2)) items.push(gras('Formellement déconseillé', phrase(premiere(s), 280)));
    for (const s of oranges.slice(0, 1)) items.push(gras('Déconseillé sauf raison impérative', phrase(premiere(s), 280)));
    for (const s of risques) items.push(gras(s.t, phrase(premiere(s))));
    if (!rouges.length && !oranges.length) items.unshift('Aucune zone formellement déconseillée n’est repérée automatiquement dans la fiche : lisez-la en entier.');
    blocs.push({ id: 'securite', titre: 'Sécurité', icone: '🛡️', badge: 'ok', items, alerte: rouges.length ? 'Zone formellement déconseillée signalée par le ministère français.' : undefined, lien: { label: 'Sécurité complète', chemin: `${href}/voyager#securite` } });
  }

  // Santé
  const san = utiles(d.sante);
  if (san.length) {
    const items: string[] = [];
    // Vaccins : seulement une ligne précise (obligation, fièvre jaune), jamais la phrase générale sur les vaccins de France
    const vacc = san.find((x) => /^vaccinations?$/i.test(x.t))?.l.find((l) => /obligatoire|exig|fièvre jaune|certificat/i.test(l.x) && !/^Les vaccins recommandés en France/.test(l.x));
    if (vacc) items.push(gras('Vaccinations', phrase(vacc.x)));
    if (san.some((x) => /hospitalisation/i.test(x.t))) items.push(gras('Assurance', 'une assurance ou un contrat d’assistance couvrant tous les frais médicaux est impératif, selon le ministère'));
    const maladies = san.filter((s) => !SANTE_COURANTE.test(s.t)).map((s) => s.t);
    if (maladies.length) items.push(gras('Maladies à connaître', maladies.slice(0, 6).join(', ') + (maladies.length > 6 ? '…' : '')));
    if (items.length) blocs.push({ id: 'sante', titre: 'Santé', icone: '💉', badge: 'ok', items, lien: { label: 'Santé complète', chemin: `${href}/voyager#sante` } });
  }

  // Argent : seulement si des compléments sourcés existent
  const c = COMPLEMENTS[iso];
  if (c?.paiements && !c.paiements.items[0].startsWith('Aucune source fiable')) {
    blocs.push({ id: 'argent', titre: 'Argent', icone: '💳', badge: 'warn', items: c.paiements.items.slice(0, 3), alerte: 'Sources privées : à confirmer auprès de votre banque.', lien: { label: 'Paiements en détail', chemin: `${href}/paiements` } });
  }

  // Urgences : renvoi vers la rubrique officielle
  if (d.contacts) {
    blocs.push({ id: 'contacts', titre: 'Urgences et ambassade', icone: '📞', badge: 'ok', items: ['Coordonnées de l’ambassade, des consulats et numéros d’urgence : voir la fiche officielle ci-dessous.'], lien: { label: 'Ambassade, consulats et urgences', chemin: `${href}/voyager#contacts` } });
  }
  // Les pages de la Russie n'ont pas les mêmes ancres que les guides générés
  if (iso === 'RUS') for (const b of blocs) b.lien.chemin = b.lien.chemin.replace(/#(?!securite).*$/, '');
  return { maj, blocs };
};
