import type { PaysComplet } from './types';
import { diplo, securiteALire } from './aides';
import { leconsType, rubriquesType } from './modele';

const D = diplo('azerbaidjan');

export const azerbaidjan: PaysComplet = {
  complet: true,
  test: true,
  iso: 'AZE',
  slug: 'azerbaidjan',
  nom: 'Azerbaïdjan',
  article: 'l’Azerbaïdjan',
  accroche: 'Un pays du Caucase au bord de la mer Caspienne, ancien pays soviétique où le russe reste utile. Un visa électronique est nécessaire. Fiche en test, à vérifier.',
  couleur: '#0092bc',
  langue: { nom: 'azéri', code: 'az-AZ' },
  devise: 'manat azerbaïdjanais',
  conseilsVoyageurs: D.securite,
  verifie: '4 novembre 2026',
  mediasLocaux: [
    { nom: 'Trend', url: 'https://en.trend.az', nature: 'agence d’information privée', langue: 'anglais' },
    { nom: 'APA', url: 'https://apa.az/en', nature: 'agence d’information', langue: 'anglais, azéri, russe' },
    { nom: 'AZERTAC', url: 'https://azertag.az/en', nature: 'agence de presse d’État', langue: 'anglais, azéri' },
    { nom: 'Meydan TV', url: 'https://www.meydan.tv', nature: 'média indépendant (basé à l’étranger)', langue: 'azéri' },
  ],
  rubriques: rubriquesType({
    lieu: 'en Azerbaïdjan',
    monnaie: 'le manat azerbaïdjanais',
    introVoyager: 'Un Français a besoin d’un visa pour entrer en Azerbaïdjan. Il se demande en ligne, mais les sources divergent sur la validité exacte : vérifiez sur le portail officiel.',
    securite: securiteALire(D.securite, 'Azerbaïdjan'),
    entree: {
      id: 'entree',
      titre: 'Visa électronique',
      badge: { type: 'warn', texte: 'À confirmer' },
      blocs: [
        { type: 'liste', items: [
          'Les Français figurent parmi les nationalités qui peuvent demander un <strong>visa électronique (e-visa ASAN)</strong>.',
          'Selon les sources, il est valable environ <strong>90 jours</strong> pour un séjour de <strong>30 jours</strong> ; les sources ne s’accordent pas sur les entrées multiples. Le traitement prend en général quelques jours ouvrables.',
          'Passeport valable au moins six mois après l’arrivée. Au-delà de 15 jours sur place, une déclaration du lieu de séjour est demandée (l’hôtel s’en charge en général). Un dépassement est sanctionné (amende, interdiction d’entrée).',
          'Beaucoup de sites d’intermédiaires facturent des frais de service : préférez le portail officiel.',
        ] },
        { type: 'alerte', warn: true, titre: 'Règles en évolution', html: 'Le pays prévoit d’étendre les exemptions et de changer le système de visa. Vérifiez les conditions avant de réserver.' },
      ],
      sources: [
        { label: 'Ministère de l’Europe et des Affaires étrangères, fiche Azerbaïdjan (entrée et séjour)', url: D.entree, nature: 'source officielle' },
        { label: 'Portail officiel de l’e-visa de l’Azerbaïdjan', url: 'https://evisa.gov.az', nature: 'source officielle' },
        { label: 'VisasNews, Azerbaïdjan : le visa et le visa à l’arrivée vont évoluer', url: 'https://visasnews.com/azerbaidjan-davantage-de-pays-bientot-exemptes-de-visa-le-visa-et-le-visa-a-larrivee-vont-evoluer/', nature: 'site d’information sur les visas' },
      ],
    },
    introLangue: 'L’azéri s’écrit avec l’alphabet latin (avec ə, ç, ğ, ı, ö, ş, ü). Le russe reste très utile, surtout à Bakou et chez les personnes plus âgées. L’anglais se répand chez les jeunes.',
    langue: [],
  }),
  lecons: leconsType({
    salutations: [['Salam', 'salam'], ['Axşamınız xeyir', 'akhchamınız khéyir'], ['Təşəkkür edirəm', 'tachèkkur édirèm'], ['Zəhmət olmasa', 'zèhmèt olmassa'], ['Bağışlayın', 'baghichlayın'], ['Bəli', 'bèli'], ['Xeyr', 'khéyir'], ['Görüşənədək', 'guèurüchénédèk']],
    presenter: [['Mənim adım…', 'mènim adım'], ['Mən Fransadanam', 'mèn fransadanam'], ['Bir az Azərbaycan dilində danışıram', 'bir az azèrbaïdjan dilindè danıchıram'], ['Siz ingiliscə danışırsınız?', 'siz ingilisdjè danıchırsınız'], ['Başa düşmədim', 'bacha düchmèdim']],
    chiffres: [['bir', 'bir'], ['iki', 'iki'], ['üç', 'utch'], ['beş', 'bèch'], ['on', 'on'], ['Bu neçəyədir?', 'bou nétchèyèdir']],
    deplacer: [['… haradadır?', 'haradadır'], ['Dəmir yolu vağzalı', 'dèmir yolou vaghzalı'], ['Hava limanı', 'hava limanı'], ['Bilet', 'bilèt'], ['Sola', 'sola'], ['Sağa', 'saga'], ['Düz', 'düz']],
    resto: [['İki nəfərlik masa', 'iki nèfèrlik massa'], ['Menyu, zəhmət olmasa', 'ménou zèhmèt olmassa'], ['Su', 'sou'], ['Qəhvə', 'ghèhvè'], ['Hesab, zəhmət olmasa', 'hèssab zèhmèt olmassa'], ['İstəyirəm…', 'istèyirèm']],
    urgences: [['Kömək edin!', 'kèumèk édin'], ['Polisi çağırın!', 'polissi tchagırın'], ['Təcili yardım çağırın!', 'tèdjili yardım tchagırın'], ['Mənə həkim lazımdır', 'mènè hèkim lazımdır'], ['İtmişəm', 'itmichèm'], ['Aptek haradadır?', 'aptèk haradadır']],
  }, 'Les prononciations sont très approximatives. En cas de doute, le russe fonctionne souvent aussi (voir les leçons de russe). Faites relire par un locuteur.'),
  sourcesSupplementaires: [],
};
