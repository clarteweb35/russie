// Convertit une image en WebP, avec recadrage optionnel puis redimensionnement.
// Usage : node scripts/convertir-image.mjs <source> <destination.webp> [largeur=800] [qualité=76] [x,y,largeur,hauteur]
// Le recadrage est exprimé en pixels de l'image source (ex. "100,245,553,311").
import sharp from 'sharp';
import { statSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';

const [src, dest, largeur = '800', qualite = '76', recadrage] = process.argv.slice(2);
if (!src || !dest) {
  console.error('Usage : node scripts/convertir-image.mjs <source> <destination.webp> [largeur] [qualité] [x,y,largeur,hauteur]');
  process.exit(1);
}
mkdirSync(dirname(dest), { recursive: true });
let image = sharp(src);
if (recadrage) {
  const [left, top, width, height] = recadrage.split(',').map(Number);
  image = image.extract({ left, top, width, height });
}
await image.resize({ width: Number(largeur), withoutEnlargement: true }).webp({ quality: Number(qualite) }).toFile(dest);
console.log(`${dest} : ${Math.round(statSync(dest).size / 1024)} Ko`);
