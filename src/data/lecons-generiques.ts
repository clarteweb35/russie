// Photos génériques des cartes de leçons, reprises par tous les pays qui n'ont pas la leur.
// « se-deplacer » et « restaurant-courses » ne sont pas génériques : leurs photos montrent la Russie. Hors ex-URSS, « se-deplacer » a sa photo (IMAGES_HORS_URSS) ; « restaurant-courses » garde une vignette.
export const IMAGES_GENERIQUES: Record<string, { img: string; imgAlt: string }> = {
  salutations: { img: '/img/lecons/salutations.webp', imgAlt: 'Une poignée de main entre deux personnes, cadrée sur les mains, avec une main qui salue' },
  'se-presenter': { img: '/img/lecons/se-presenter.webp', imgAlt: 'Un homme souriant présente sa carte de visite' },
  'chiffres-prix-heure': { img: '/img/lecons/chiffres-prix-heure.webp', imgAlt: 'Un réveil, une calculatrice et une étiquette de prix posés sur un bureau' },
  urgences: { img: '/img/lecons/urgences.webp', imgAlt: 'Une trousse de premiers secours ouverte sur une table' },
};

// Photos pour les pays hors ex-URSS, là où la photo de la Russie (train, thé dans un verre à anse) ne convient pas.
// Les pays de l'ex-URSS n'en profitent pas : ils gardent la vignette numérotée.
export const IMAGES_HORS_URSS: Record<string, { img: string; imgAlt: string }> = {
  'se-deplacer': { img: '/img/lecons/se-deplacer-monde.webp', imgAlt: 'Une table en bois dans un compartiment de train, avec une tasse, un carnet et un stylo, une écharpe et une clé, devant une fenêtre ouverte sur la campagne' },
};

// Illustrations des trois parcours, communes à tous les pays
export const PARCOURS_GENERIQUES = {
  voyager: { img: '/img/parcours-voyage.webp', alt: 'Une valise et une liste de contrôle' },
  vivre: { img: '/img/parcours-installer.webp', alt: 'Des clés avec un porte-clés en forme de maison' },
  langue: { img: '/img/parcours-russe.webp', alt: 'Un abécédaire ouvert' },
};
