// Convertit une image en WebP redimensionné.
// Usage : node scripts/convertir-image.mjs <source> <destination.webp> [largeur=800] [qualité=76]
import sharp from 'sharp';
import { statSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';

const [src, dest, largeur = '800', qualite = '76'] = process.argv.slice(2);
if (!src || !dest) {
  console.error('Usage : node scripts/convertir-image.mjs <source> <destination.webp> [largeur] [qualité]');
  process.exit(1);
}
mkdirSync(dirname(dest), { recursive: true });
await sharp(src).resize({ width: Number(largeur), withoutEnlargement: true }).webp({ quality: Number(qualite) }).toFile(dest);
console.log(`${dest} : ${Math.round(statSync(dest).size / 1024)} Ko`);
