// Convertit les images lourdes de public/ en WebP redimensionné (sharp est déjà installé avec Astro).
// Usage : node scripts/optimiser-images.mjs
import sharp from 'sharp';
import { statSync } from 'node:fs';

const travaux = [
  { src: 'public/saint-basile-hero.png', dest: 'public/saint-basile-hero.webp', largeur: 1600, qualite: 78 },
  { src: 'public/img/parcours-voyage.png', dest: 'public/img/parcours-voyage.webp', largeur: 600, qualite: 82 },
  { src: 'public/img/parcours-installer.png', dest: 'public/img/parcours-installer.webp', largeur: 600, qualite: 82 },
  { src: 'public/img/parcours-russe.png', dest: 'public/img/parcours-russe.webp', largeur: 600, qualite: 82 },
];

const ko = (f) => Math.round(statSync(f).size / 1024);
for (const t of travaux) {
  await sharp(t.src).resize({ width: t.largeur, withoutEnlargement: true }).webp({ quality: t.qualite }).toFile(t.dest);
  console.log(`${t.src} (${ko(t.src)} Ko) -> ${t.dest} (${ko(t.dest)} Ko)`);
}
