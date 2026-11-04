import type { Media } from './pays/types';

// Médias russophones. Le paysage médiatique est très contrôlé : la nature est donnée à titre indicatif et à vérifier.
export const mediasRussie: Media[] = [
  { nom: 'TASS', url: 'https://tass.ru', nature: 'agence de presse d’État', langue: 'russe' },
  { nom: 'Kommersant', url: 'https://www.kommersant.ru', nature: 'quotidien économique privé', langue: 'russe' },
  { nom: 'Meduza', url: 'https://meduza.io', nature: 'média indépendant édité hors de Russie, bloqué en Russie (statut juridique à vérifier avant de le consulter ou de le partager depuis la Russie)', langue: 'russe, anglais' },
];
