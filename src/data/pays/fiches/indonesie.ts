import type { PaysComplet } from '../types';
import { diplo, securiteALire } from '../aides';
import { leconsType, rubriquesType } from '../modele';

const D = diplo('indonesie');

export const indonesie: PaysComplet = {
  complet: true,
  test: true,
  iso: 'IDN',
  slug: 'indonesie',
  nom: 'Indonésie',
  article: 'l’Indonésie',
  accroche: 'Un archipel d’Asie du Sud-Est dont Bali est la destination la plus connue. Un visa à l’arrivée payant est nécessaire. Fiche beta, à vérifier.',
  couleur: '#ce1126',
  langue: { nom: 'indonésien', code: 'id-ID' },
  devise: 'roupie indonésienne',
  conseilsVoyageurs: D.securite,
  verifie: '5 novembre 2026',
  mediasLocaux: [
    { nom: 'Antara News', url: 'https://en.antaranews.com', nature: 'agence de presse publique', langue: 'anglais' },
    { nom: 'The Jakarta Post', url: 'https://www.thejakartapost.com', nature: 'quotidien privé', langue: 'anglais' },
    { nom: 'Tempo', url: 'https://en.tempo.co', nature: 'magazine privé', langue: 'anglais' },
    { nom: 'Kompas', url: 'https://www.kompas.com', nature: 'quotidien privé', langue: 'indonésien' },
  ],
  rubriques: rubriquesType({
    lieu: 'en Indonésie',
    monnaie: 'la roupie indonésienne',
    introVoyager: 'Les Français ont besoin d’un visa touristique : le visa à l’arrivée ou son équivalent électronique (e-VOA). À Bali, une taxe touristique s’ajoute.',
    securite: securiteALire(D.securite, 'Indonésie'),
    entree: {
      id: 'entree',
      titre: 'Visa à l’arrivée et taxe de Bali',
      badge: { type: 'warn', texte: 'À confirmer' },
      blocs: [
        { type: 'liste', items: [
          '<strong>Visa à l’arrivée (VOA) ou e-VOA</strong> : séjour de <strong>30 jours</strong>, renouvelable une fois (60 jours au total), entrée simple.',
          'Tarif relevé : <strong>500 000 roupies</strong> (environ 25 €). Une hausse à 750 000 (e-VOA) et 1 000 000 (VOA) a été <strong>proposée</strong>, sans date confirmée.',
          'Passeport valable au moins <strong>six mois</strong> après l’arrivée.',
          '<strong>Taxe pour Bali</strong> : 150 000 roupies (environ 7,50 à 10 €) à payer en ligne avant le départ sur le site officiel (lovebali.baliprov.go.id), en plus du visa.',
        ] },
        { type: 'alerte', warn: true, titre: 'Tarifs susceptibles de changer', html: 'Vérifiez les montants sur le site officiel de l’immigration indonésienne avant de payer, car beaucoup de sites d’intermédiaires affichent des frais supplémentaires.' },
      ],
      sources: [
        { label: 'Ministère de l’Europe et des Affaires étrangères, fiche Indonésie (entrée et séjour)', url: D.entree, nature: 'source officielle' },
        { label: 'Love Bali, taxe touristique de Bali', url: 'https://lovebali.baliprov.go.id', nature: 'source officielle locale' },
        { label: 'Evaneos, visa pour l’Indonésie', url: 'https://www.evaneos.fr/indonesie/voyage/informations-pratiques/visa/', nature: 'agence de voyages (source commerciale)' },
        { label: 'VisasNews, hausse du prix du visa à l’arrivée', url: 'https://visasnews.com/indonesie-limmigration-prepare-une-hausse-du-prix-du-visa-a-larrivee-voa-et-e-voa/', nature: 'site d’information sur les visas' },
      ],
    },
    introLangue: 'L’indonésien s’écrit avec l’alphabet latin et a une grammaire simple : pas de conjugaison, pas de genre. Il est facile à aborder. L’anglais est courant dans les zones touristiques comme Bali.',
    langue: [],
  }),
  lecons: leconsType({
    salutations: [['Selamat siang', 'sélamat siang'], ['Selamat malam', 'sélamat malam'], ['Terima kasih', 'térima kassih'], ['Tolong', 'tolong'], ['Permisi', 'pérmissi'], ['Ya', 'ya'], ['Tidak', 'tidak'], ['Sampai jumpa', 'sampaï djoumpa']],
    presenter: [['Nama saya…', 'nama saya'], ['Saya dari Prancis', 'saya dari prantcis'], ['Saya bisa sedikit bahasa Indonesia', 'saya bissa sédikit bahasa indonésia'], ['Apakah Anda bisa bahasa Inggris?', 'apakah anda bissa bahasa inggris'], ['Saya tidak mengerti', 'saya tidak mengueurti']],
    chiffres: [['satu', 'satou'], ['dua', 'doua'], ['tiga', 'tiga'], ['lima', 'lima'], ['sepuluh', 'sépouloh'], ['Berapa harganya?', 'bérapa harganya']],
    deplacer: [['Di mana…?', 'di mana'], ['Stasiun', 'stassioun'], ['Bandara', 'bandara'], ['Tiket', 'tikèt'], ['Kiri', 'kiri'], ['Kanan', 'kanan'], ['Lurus', 'lourous']],
    resto: [['Meja untuk dua orang', 'médja ountouk doua orang'], ['Minta menu', 'minta ménou'], ['Air', 'aïr'], ['Kopi', 'kopi'], ['Minta bon', 'minta bonn'], ['Saya mau…', 'saya maou']],
    urgences: [['Tolong!', 'tolong'], ['Panggil polisi!', 'panggil polissi'], ['Panggil ambulans!', 'panggil ambulans'], ['Saya butuh dokter', 'saya boutouh doktér'], ['Saya tersesat', 'saya térsésat'], ['Di mana apotek?', 'di mana apotèk']],
  }, 'Une langue simple pour débuter : essayez ces phrases, elles sont très bien reçues. Faites relire par un locuteur.'),
  sourcesSupplementaires: [],
};
