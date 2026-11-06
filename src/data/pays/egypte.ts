import type { PaysComplet } from './types';
import { diplo, securiteALire } from './aides';
import { leconsType, rubriquesType } from './modele';
import { ARABE } from './langues-monde';

const D = diplo('egypte');

export const egypte: PaysComplet = {
  complet: true,
  test: true,
  iso: 'EGY',
  slug: 'egypte',
  nom: 'Égypte',
  article: 'l’Égypte',
  accroche: 'Un pays du Nil à l’écriture arabe, où le visa s’obtient à l’arrivée ou en ligne pour environ 30 dollars. Lisez d’abord les consignes de sécurité du ministère français. Fiche beta, à vérifier.',
  couleur: '#c09300',
  langue: { nom: 'arabe', code: 'ar-EG' },
  devise: 'livre égyptienne',
  conseilsVoyageurs: D.securite,
  verifie: '5 novembre 2026',
  mediasLocaux: [
    { nom: 'Ahram Online', url: 'https://english.ahram.org.eg', nature: 'média d’État', langue: 'anglais' },
    { nom: 'Egypt Independent', url: 'https://egyptindependent.com', nature: 'média en ligne privé', langue: 'anglais' },
    { nom: 'Mada Masr', url: 'https://www.madamasr.com', nature: 'média indépendant', langue: 'anglais, arabe' },
    { nom: 'Al-Masry Al-Youm', url: 'https://www.almasryalyoum.com', nature: 'quotidien privé', langue: 'arabe' },
  ],
  rubriques: rubriquesType({
    lieu: 'en Égypte',
    monnaie: 'la livre égyptienne',
    introVoyager: 'Les Français ont besoin d’un visa, obtenu à l’arrivée ou en ligne. Les tarifs ont augmenté en 2026 et une nouvelle hausse est annoncée pour 2027.',
    securite: securiteALire(D.securite, 'Égypte'),
    entree: {
      id: 'entree',
      titre: 'Visa à l’arrivée ou e-visa',
      badge: { type: 'warn', texte: 'À confirmer' },
      blocs: [
        { type: 'liste', items: [
          '<strong>Visa à l’arrivée</strong> à entrée unique : environ <strong>30 dollars</strong> depuis mars 2026 selon les sources (25 auparavant), à payer en espèces ou par carte selon les guichets.',
          '<strong>E-visa</strong> en ligne : environ 30 dollars en entrée simple et 65 en entrées multiples selon un agent de voyages ; traitement de 24 à 72 heures.',
          'Une hausse à <strong>33 dollars</strong> est annoncée à partir du 1er janvier 2027 (frais de service en plus).',
          'Passeport valable au moins <strong>six mois</strong> après la date de retour.',
        ] },
        { type: 'alerte', warn: true, titre: 'Montants non officiels', html: 'Les prix viennent de la presse spécialisée et d’agents de voyages, et se contredisent sur certains détails. Vérifiez sur le portail officiel égyptien de l’e-visa.' },
      ],
      sources: [
        { label: 'Ministère de l’Europe et des Affaires étrangères, fiche Égypte (entrée et séjour)', url: D.entree, nature: 'source officielle' },
        { label: 'VisasNews, l’Égypte augmente le prix de son visa électronique', url: 'https://visasnews.com/legypte-augmente-le-prix-de-son-visa-electronique/', nature: 'site d’information sur les visas' },
        { label: 'VisasNews, le visa passera à 33 dollars au 1er janvier 2027', url: 'https://visasnews.com/egypte-le-visa-passera-a-33-dollars-a-partir-du-1er-janvier-2027/', nature: 'site d’information sur les visas' },
      ],
    },
    introLangue: 'La langue officielle est l’arabe, écrit de droite à gauche. Les Égyptiens parlent un dialecte propre, compris dans une grande partie du monde arabe. L’anglais est courant dans le tourisme. Les phrases ci-dessous sont en arabe standard, simples et comprises.',
    langue: [],
  }),
  lecons: leconsType(ARABE, 'Prononciations approximatives (arabe standard). Les Égyptiens disent souvent « shukran » pour merci. Faites relire par un locuteur.'),
  sourcesSupplementaires: [],
};
