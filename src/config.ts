export const LAST_CHECK = '30 octobre 2026';

export const sections = [
  { href: '/voyager', label: 'Voyager', icon: '✈️', desc: 'Visa, sécurité, transports et démarches avant le départ.' },
  { href: '/vivre', label: 'Vivre', icon: '🏠', desc: 'Séjour légal, argent, logement et quotidien.' },
  { href: '/travailler', label: 'Travailler', icon: '💼', desc: 'Permis de travail et cadre juridique.' },
  { href: '/paiements', label: 'Paiements', icon: '💳', desc: 'Payer en Russie, compte en Géorgie et taux EUR/RUB.' },
  { href: '/langue-culture', label: 'Langue & culture', icon: '🎭', desc: 'Repères linguistiques et culturels.' },
  { href: '/lecons', label: 'Leçons de russe', icon: '🎧', desc: '6 leçons courtes avec audio et quiz d’écoute.' },
  { href: '/sources', label: 'Sources', icon: '📚', desc: 'D’où viennent les informations et leur fiabilité.' },
];

// Préfixe les liens internes avec le sous-dossier de déploiement (ex. /russie sur GitHub Pages)
export const url = (p: string) => import.meta.env.BASE_URL.replace(/\/$/, '') + p;

// Dates de vérification propres à une page (sinon LAST_CHECK). Clé = chemin sans le préfixe de déploiement.
// À renseigner quand une page est revérifiée seule, par exemple : '/voyager': '12 novembre 2026'.
export const VERIFICATIONS: Record<string, string> = {};

// Mention obligatoire sur toute image générée par IA (attributs alt et title) : ne jamais l'écrire en dur ailleurs.
export const MENTION_IA = 'image générée par IA';
export const legendeIA = (description: string) => `${description} (${MENTION_IA})`;

// Pages hors menu : liées depuis le pied de page et présentes dans le sitemap.
export const pagesLegales = [{ href: '/mentions-legales', label: 'Mentions légales' }];

// Nom affiché dans l'en-tête (domaine visé : à acheter chez OVH).
export const NOM_SITE = 'guide-russie.fr';

// Élision devant une voyelle : « le russe », « l’arabe » ; « leçons de russe », « leçons d’arabe »
const VOYELLE = /^[aeiouyàâéèêëîïôûü]/i;
export const leNomDeLangue = (nom: string) => (VOYELLE.test(nom) ? `l’${nom}` : `le ${nom}`);
export const deNomDeLangue = (nom: string) => (VOYELLE.test(nom) ? `d’${nom}` : `de ${nom}`);
