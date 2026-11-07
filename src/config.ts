export const LAST_CHECK = '30 octobre 2026';

export const sections = [
  { href: '/essentiel', label: 'L’essentiel', icon: '⚡', desc: 'Entrée, sécurité, santé et argent en quelques lignes.' },
  { href: '/voyager', label: 'Voyager', icon: '✈️', desc: 'Visa, sécurité, transports et démarches avant le départ.' },
  { href: '/vivre', label: 'Vivre', icon: '🏠', desc: 'Séjour légal, argent, logement et quotidien.' },
  { href: '/travailler', label: 'Travailler', icon: '💼', desc: 'Permis de travail et cadre juridique.' },
  { href: '/paiements', label: 'Paiements', icon: '💳', desc: 'Payer en Russie, compte en Géorgie et taux EUR/RUB.' },
  { href: '/langue-culture', label: 'Langue & culture', icon: '🎭', desc: 'Repères linguistiques et culturels.' },
  { href: '/lecons', label: 'Leçons de russe', icon: '🎧', desc: '6 leçons courtes avec audio et quiz d’écoute.' },
  { href: '/pays/russie/sources', label: 'Sources', icon: '📚', desc: 'D’où viennent les informations et leur fiabilité.' },
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

// Rubriques éditoriales de Voyages Malins : liées depuis l'accueil et le pied de page, présentes dans le plan du site.
export const pagesEditoriales = [
  { href: '/langues', label: 'Cours de langues' },
  { href: '/outils', label: 'Outils' },
  { href: '/bons-plans', label: 'Bons plans' },
  { href: '/guides', label: 'Astuces & hacks voyage' },
];

// Nom affiché dans l'en-tête (domaine visé : à acheter chez OVH).
export const NOM_SITE = 'Voyages Malins';

// Élision devant une voyelle : « le russe », « l’arabe » ; « leçons de russe », « leçons d’arabe »
const VOYELLE = /^[aeiouyàâéèêëîïôûü]/i;
export const leNomDeLangue = (nom: string) => (VOYELLE.test(nom) ? `l’${nom}` : `le ${nom}`);
export const deNomDeLangue = (nom: string) => (VOYELLE.test(nom) ? `d’${nom}` : `de ${nom}`);

// Pays mis à la une sur l'accueil : les guides les plus riches (Finlande, seule fiche relue ; puis les plus fournis en contenu). La Russie y figure avec la mention « Voyage déconseillé ».
export const A_LA_UNE = ['FIN', 'RUS', 'GEO', 'ESP', 'ALB', 'DEU', 'SEN', 'VNM'];

// Outils pratiques : source unique pour la page /outils, le plan du site et les liens croisés.
export const outils = [
  { href: '/outils/quand-partir', label: 'Quand partir ?', icon: '📅', desc: 'Choisissez un mois pour découvrir les destinations adaptées, ou un pays pour voir ses douze mois : climat, affluence et prix, avec sources.' },
  { href: '/outils/budget-voyage', label: 'Estimer le budget', icon: '💶', desc: 'Une estimation du séjour sur place selon la destination, le style et la durée, hors vols. Affichée seulement quand les données sont sourcées.' },
  { href: '/outils/liste-de-bagages', label: 'Liste de bagages', icon: '🧳', desc: 'Une liste à cocher selon votre destination, la durée et le type de séjour, à imprimer ou à garder sur votre téléphone.' },
];

// Bandeau affiché en haut de toutes les pages tant que le site est jeune : à retirer (vider la chaîne) quand il ne l'est plus.
export const MESSAGE_BETA = 'Voyages Malins vient d’être créé : le site est en version bêta. Certaines fiches n’ont pas encore été relues et le contenu évolue.';
