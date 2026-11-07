// Tests hors ligne de la collecte des flux (lecture CSV, normalisation). Lancés par `npm test`.
import assert from 'node:assert/strict';
import { analyserCsv, normaliser } from './collecter.mjs';
import { CHAMPS_PAR_DEFAUT, FLUX } from './flux.mjs';

// CSV : guillemets, virgule dans un champ, guillemets doublés, retour à la ligne dans un champ, BOM, séparateur point-virgule
const csv = analyserCsv('﻿a,b\r\n"x, y",2\r\n"Il dit ""oui""\nlà",3\r\n');
assert.deepEqual(csv, [{ a: 'x, y', b: '2' }, { a: 'Il dit "oui"\nlà', b: '3' }]);
assert.deepEqual(analyserCsv('a;b\n1;2\n'), [{ a: '1', b: '2' }]);
assert.deepEqual(analyserCsv(''), []);

// Normalisation avec les colonnes par défaut
const brut = { product_name: 'Lisbonne', merchant_name: 'V', search_price: '129,90', rrp_price: '199', aw_deep_link: 'https://www.awin1.com/cread.php?awinmid=1&awinaffid=2', custom_3: '4 jours' };
const ok = normaliser(brut, CHAMPS_PAR_DEFAUT);
assert.equal(ok.offre.prix_reduit, 129.9);
assert.equal(ok.offre.duree_sejour, 4);
// Le nom du marchand vient du flux, sinon de la configuration
assert.equal(normaliser({ ...brut, merchant_name: '' }, CHAMPS_PAR_DEFAUT, 'Par défaut').offre.voyagiste, 'Par défaut');
// Refus : incomplet, sans réduction, lien factice
assert.equal(normaliser({ ...brut, search_price: '' }, CHAMPS_PAR_DEFAUT).raison, 'champ manquant');
assert.equal(normaliser({ ...brut, search_price: '250' }, CHAMPS_PAR_DEFAUT).raison, 'pas de réduction');
assert.equal(normaliser({ ...brut, aw_deep_link: 'https://www.awin1.com/cread.php?awinmid=1&awinaffid=EXEMPLE' }, CHAMPS_PAR_DEFAUT).raison, 'lien factice (EXEMPLE)');

// Configuration : identifiants uniques, secrets distincts, format connu
const ids = FLUX.map((f) => f.id);
assert.equal(new Set(ids).size, ids.length, 'identifiants de flux en double');
const secrets = FLUX.map((f) => f.secret);
assert.equal(new Set(secrets).size, secrets.length, 'deux flux utilisent le même secret');
for (const f of FLUX) assert.ok(['xml', 'csv'].includes(f.format), `format inconnu pour ${f.id}`);

console.log('Collecte des flux OK.');
