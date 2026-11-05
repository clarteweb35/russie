import type { PaysComplet } from './types';
import { diplo, securiteALire } from './aides';
import { leconsType, rubriquesType } from './modele';
import { LECONS_ANGLAIS } from './anglais';

const D = diplo('nouvelle-zelande');

export const nouvelleZelande: PaysComplet = {
  complet: true,
  test: true,
  iso: 'NZL',
  slug: 'nouvelle-zelande',
  nom: 'Nouvelle-Zélande',
  article: 'la Nouvelle-Zélande',
  accroche: 'Un pays insulaire du Pacifique où l’on conduit à gauche. Une autorisation électronique (NZeTA) et une taxe touristique sont exigées. Fiche en test, à vérifier.',
  couleur: '#00247d',
  langue: { nom: 'anglais', code: 'en-NZ' },
  devise: 'dollar néo-zélandais',
  conseilsVoyageurs: D.securite,
  verifie: '5 novembre 2026',
  mediasLocaux: [
    { nom: 'RNZ', url: 'https://www.rnz.co.nz', nature: 'média public', langue: 'anglais' },
    { nom: 'The New Zealand Herald', url: 'https://www.nzherald.co.nz', nature: 'quotidien privé', langue: 'anglais' },
    { nom: 'Stuff', url: 'https://www.stuff.co.nz', nature: 'site d’information privé', langue: 'anglais' },
    { nom: '1News', url: 'https://www.1news.co.nz', nature: 'télévision privée', langue: 'anglais' },
  ],
  rubriques: rubriquesType({
    lieu: 'en Nouvelle-Zélande',
    monnaie: 'le dollar néo-zélandais',
    introVoyager: 'Les Français voyagent sans visa pour un court séjour, mais doivent obtenir une autorisation électronique (NZeTA) et payer une taxe touristique (IVL).',
    securite: securiteALire(D.securite, 'Nouvelle-Zélande'),
    entree: {
      id: 'entree',
      titre: 'NZeTA et taxe touristique',
      badge: { type: 'warn', texte: 'À confirmer' },
      blocs: [
        { type: 'liste', items: [
          '<strong>NZeTA</strong> : environ <strong>17 dollars néo-zélandais</strong> par l’application mobile, <strong>23</strong> par le site web, selon les sources consultées.',
          '<strong>Taxe de conservation et de tourisme (IVL)</strong> : <strong>100 dollars néo-zélandais</strong> depuis le 1er octobre 2024, payée avec la NZeTA. Total d’environ 117 à 123 dollars.',
          'Les titulaires d’un visa vacances-travail paient l’IVL dans le cadre du visa.',
          'Vérifiez le tarif proposé si une agence ou une compagnie fait la demande à votre place.',
        ] },
        { type: 'alerte', warn: true, titre: 'Source officielle non consultée', html: 'Les montants viennent de la presse et de sites de voyageurs. Confirmez-les sur le site officiel d’Immigration New Zealand (nzeta.immigration.govt.nz).' },
      ],
      sources: [
        { label: 'Ministère de l’Europe et des Affaires étrangères, fiche Nouvelle-Zélande (entrée et séjour)', url: D.entree, nature: 'source officielle' },
        { label: 'PVTistes, Nouvelle-Zélande : taxe touristique et NZeTA', url: 'https://pvtistes.net/nouvelle-zelande-taxe-touristique-et-nzeta/', nature: 'communauté de voyageurs' },
        { label: 'Wego, visa, IVL et coût d’un voyage en 2026', url: 'https://blog.wego.com/new-zealand-visa-fees-tourist-levy-2026/', nature: 'site de voyage (source commerciale)' },
      ],
    },
    introLangue: 'L’anglais néo-zélandais se rapproche de l’anglais australien, avec ses propres mots. Le maori est aussi langue officielle : on entend « kia ora » (bonjour) partout. Les leçons ci-dessous donnent les bases de l’anglais.',
    langue: [],
  }),
  lecons: leconsType(LECONS_ANGLAIS, 'Vous entendrez « kia ora » (bonjour en maori) très souvent. Prononciations approximatives.'),
  sourcesSupplementaires: [],
};
