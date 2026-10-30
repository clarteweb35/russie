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
