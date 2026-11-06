import type { PaysComplet } from './types';
import { diplo, securiteALire } from './aides';
import { leconsType, rubriquesType } from './modele';

const D = diplo('ouzbekistan');

export const ouzbekistan: PaysComplet = {
  complet: true,
  test: true,
  iso: 'UZB',
  slug: 'ouzbekistan',
  nom: 'Ouzbékistan',
  article: 'l’Ouzbékistan',
  accroche: 'Un pays d’Asie centrale célèbre pour Samarcande et Boukhara, ouvert aux Français sans visa pour un court séjour. Le russe y reste très utile. Fiche beta, à vérifier.',
  couleur: '#1eb53a',
  langue: { nom: 'ouzbek', code: 'uz-UZ' },
  devise: 'sum ouzbek',
  conseilsVoyageurs: D.securite,
  verifie: '4 novembre 2026',
  mediasLocaux: [
    { nom: 'Gazeta.uz', url: 'https://www.gazeta.uz', nature: 'média en ligne privé', langue: 'russe, ouzbek' },
    { nom: 'Kun.uz', url: 'https://kun.uz', nature: 'média en ligne privé', langue: 'ouzbek, russe, anglais' },
    { nom: 'Daryo', url: 'https://daryo.uz', nature: 'média en ligne privé', langue: 'ouzbek, russe, anglais' },
    { nom: 'UzDaily', url: 'https://uzdaily.uz', nature: 'agence d’information', langue: 'anglais, russe' },
  ],
  rubriques: rubriquesType({
    lieu: 'en Ouzbékistan',
    monnaie: 'le sum ouzbek',
    introVoyager: 'Les Français peuvent entrer en Ouzbékistan sans visa pour un séjour de moins de 30 jours. Le passeport doit rester valable longtemps après le retour.',
    securite: securiteALire(D.securite, 'Ouzbékistan'),
    entree: {
      id: 'entree',
      titre: 'Entrée sans visa pour moins de 30 jours',
      badge: { type: 'warn', texte: 'À confirmer' },
      blocs: [{ type: 'liste', items: [
        '<strong>Moins de 30 jours</strong> : pas de visa pour les citoyens français (dispense en vigueur depuis 2018 selon la presse spécialisée).',
        '<strong>Passeport</strong> valable six mois après la date de retour prévue, d’après la fiche du ministère rapportée par la presse du tourisme.',
        'Les enfants doivent avoir <strong>leur propre passeport</strong>.',
        'Au-delà de 72 heures sur place, un <strong>enregistrement</strong> auprès des autorités est demandé ; l’hôtel s’en charge en général. Gardez les justificatifs.',
        'Au-delà de 30 jours, un visa est nécessaire.',
      ] }],
      sources: [
        { label: 'Ministère de l’Europe et des Affaires étrangères, fiche Ouzbékistan (entrée et séjour)', url: D.entree, nature: 'source officielle' },
        { label: 'L’Écho touristique, les Français exemptés de visa', url: 'https://www.lechotouristique.com/article/ouzbekistan-les-francais-exemptes-de-visa', nature: 'presse professionnelle du tourisme' },
        { label: 'L’Écho touristique, passeport valide six mois après le retour', url: 'https://www.lechotouristique.com/article/ouzbekistan-le-passeport-doit-etre-valide-six-mois-apres-le-retour', nature: 'presse professionnelle du tourisme' },
      ],
    },
    introLangue: 'L’ouzbek s’écrit aujourd’hui avec l’alphabet latin (l’alphabet cyrillique est encore visible). Le russe sert de langue commune, notamment à Tachkent et chez les personnes plus âgées. Les leçons de russe de ce guide sont utiles ici.',
    langue: [],
  }),
  lecons: leconsType({
    salutations: [['Salom', 'salom'], ['Xayrli kech', 'khaïrli kètch'], ['Rahmat', 'rakhmat'], ['Iltimos', 'iltimos'], ['Kechirasiz', 'kètchirassiz'], ['Ha', 'ha'], ['Yo‘q', 'yok'], ['Xayr', 'khaïr']],
    presenter: [['Mening ismim…', 'mèning ismim'], ['Men Fransiyadanman', 'mèn fransiyadanman'], ['Men ozgina o‘zbekcha gapiraman', 'mèn ozguina ozbèktcha gapiraman'], ['Inglizcha gapirasizmi?', 'ingliztcha gapirassizmi'], ['Tushunmadim', 'toushounmadim']],
    chiffres: [['bir', 'bir'], ['ikki', 'ikki'], ['uch', 'outch'], ['besh', 'bèch'], ['o‘n', 'on'], ['Bu qancha turadi?', 'bou kantcha tourrady']],
    deplacer: [['… qayerda?', 'kayèrda'], ['Vokzal', 'vokzal'], ['Aeroport', 'aéroport'], ['Chipta', 'tchipta'], ['Chapga', 'tchapga'], ['O‘ngga', 'ongga'], ['To‘g‘ri', 'togri']],
    resto: [['Ikki kishilik stol', 'ikki kichilik stol'], ['Menyu, iltimos', 'mènyou iltimos'], ['Suv', 'souv'], ['Qahva', 'kahva'], ['Hisob, iltimos', 'hissob iltimos'], ['Menga … kerak', 'mènga kèrak']],
    urgences: [['Yordam bering!', 'yordam bèring'], ['Politsiyani chaqiring!', 'politsiyani tchakiring'], ['Tez yordam chaqiring!', 'tèz yordam tchakiring'], ['Menga shifokor kerak', 'mènga chifokor kèrak'], ['Adashib qoldim', 'adachib koldim'], ['Dorixona qayerda?', 'dorikhona kayèrda']],
  }, 'Le russe fonctionne souvent aussi (voir les leçons de russe). Prononciations très approximatives : faites relire par un locuteur.'),
  sourcesSupplementaires: [],
};
