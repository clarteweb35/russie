import type { PaysComplet } from './types';
import { diplo, securiteALire } from './aides';
import { leconsType, rubriquesType } from './modele';

const D = diplo('inde');

export const inde: PaysComplet = {
  complet: true,
  test: true,
  iso: 'IND',
  slug: 'inde',
  nom: 'Inde',
  article: 'l’Inde',
  accroche: 'Un pays-continent aux langues multiples où l’on conduit à gauche. Un visa électronique en ligne est nécessaire. Fiche en test, à vérifier.',
  couleur: '#ff9933',
  langue: { nom: 'hindi', code: 'hi-IN' },
  devise: 'roupie indienne',
  conseilsVoyageurs: D.securite,
  verifie: '5 novembre 2026',
  mediasLocaux: [
    { nom: 'The Hindu', url: 'https://www.thehindu.com', nature: 'quotidien privé', langue: 'anglais' },
    { nom: 'The Times of India', url: 'https://timesofindia.indiatimes.com', nature: 'quotidien privé', langue: 'anglais' },
    { nom: 'Press Trust of India', url: 'https://www.ptinews.com', nature: 'agence de presse', langue: 'anglais' },
    { nom: 'Scroll.in', url: 'https://scroll.in', nature: 'média en ligne indépendant', langue: 'anglais' },
  ],
  rubriques: rubriquesType({
    lieu: 'en Inde',
    monnaie: 'la roupie indienne',
    introVoyager: 'Un Français a besoin d’un visa pour l’Inde ; le visa électronique touristique se demande en ligne. Les frais indiqués varient beaucoup selon les sites : utilisez le portail officiel.',
    securite: securiteALire(D.securite, 'Inde'),
    entree: {
      id: 'entree',
      titre: 'Visa électronique touristique',
      badge: { type: 'warn', texte: 'À confirmer' },
      blocs: [
        { type: 'liste', items: [
          'L’<strong>e-visa touristique</strong> existe en trois durées : 30 jours, 1 an et 5 ans. Le 30 jours permet deux entrées, les autres des entrées multiples.',
          'Pour les visas multiples, chaque séjour est limité à <strong>90 jours consécutifs</strong> pour les Français, selon les sources.',
          'La demande se fait en ligne, sans passer par un consulat ; le traitement prend de 1 à 3 jours selon les sources.',
          'Un <strong>formulaire de santé en ligne</strong> (Air Suvidha) est exigé des personnes arrivant par avion, selon un site spécialisé.',
        ] },
        { type: 'alerte', warn: true, titre: 'Frais à vérifier', html: 'Les montants cités vont de 10 à 25 dollars pour le visa de 30 jours selon les sources, et varient selon la saison. Plusieurs sources sont des intermédiaires payants : passez par le portail officiel.' },
      ],
      sources: [
        { label: 'Ministère de l’Europe et des Affaires étrangères, fiche Inde (entrée et séjour)', url: D.entree, nature: 'source officielle' },
        { label: 'Consulat général d’Inde à La Réunion, e-visa touristique pour la France', url: 'https://cgireunion.gov.in/e-tourist-visa', nature: 'source officielle indienne' },
        { label: 'Action-Visas, le visa électronique évolue', url: 'https://www.action-visas.com/actualite/inde-le-visa-electronique-evolue', nature: 'site spécialisé' },
      ],
    },
    introLangue: 'L’Inde compte de très nombreuses langues. Le hindi est la plus parlée ; l’anglais sert de langue commune dans les villes, l’administration et le tourisme. Le hindi s’écrit en devanagari.',
    langue: [],
  }),
  lecons: leconsType({
    salutations: [['नमस्ते', 'namasté'], ['शुभ संध्या', 'choubh sandhya'], ['धन्यवाद', 'dhanyavad'], ['कृपया', 'kripaya'], ['माफ़ कीजिए', 'maaf kidjié'], ['हाँ', 'haan'], ['नहीं', 'nahin'], ['अलविदा', 'alavida']],
    presenter: [['मेरा नाम… है', 'méra naam … haï'], ['मैं फ़्रांस से हूँ', 'maïn france sé houn'], ['मैं थोड़ी हिंदी बोलता हूँ', 'maïn thodi hindi boltaa houn'], ['क्या आप अंग्रेज़ी बोलते हैं?', 'kya aap angrézi boltè haïn'], ['मुझे समझ नहीं आया', 'moudjé samadj nahin aaya']],
    chiffres: [['एक', 'èk'], ['दो', 'do'], ['तीन', 'tin'], ['पाँच', 'panntch'], ['दस', 'das'], ['यह कितने का है?', 'yé kitné ka haï']],
    deplacer: [['… कहाँ है?', 'kahan haï'], ['रेलवे स्टेशन', 'rélvé stéchan'], ['हवाई अड्डा', 'havaï adda'], ['टिकट', 'tikat'], ['बाएँ', 'baïn'], ['दाएँ', 'daïn'], ['सीधे', 'sidhé']],
    resto: [['दो लोगों की मेज़', 'do logon ki médj'], ['मेन्यू दीजिए', 'ménu didjié'], ['पानी', 'pani'], ['कॉफ़ी', 'kofi'], ['बिल दीजिए', 'bil didjié'], ['मुझे … चाहिए', 'moudjé tchahié']],
    urgences: [['बचाओ!', 'batchao'], ['पुलिस को बुलाइए!', 'poulis ko boulaïé'], ['एम्बुलेंस बुलाइए!', 'ambulens boulaïé'], ['मुझे डॉक्टर चाहिए', 'moudjé doktar tchahié'], ['मैं खो गया हूँ', 'maïn kho gaya houn'], ['दवाई की दुकान कहाँ है?', 'davaï ki doukan kahan haï']],
  }, 'Prononciations approximatives : faites relire par un locuteur. L’anglais suffit souvent dans les villes.'),
  sourcesSupplementaires: [],
};
