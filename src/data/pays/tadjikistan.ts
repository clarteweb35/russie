import type { PaysComplet } from './types';
import { diplo, securiteALire } from './aides';
import { leconsType, rubriquesType } from './modele';

const D = diplo('tadjikistan');

export const tadjikistan: PaysComplet = {
  complet: true,
  test: true,
  iso: 'TJK',
  slug: 'tadjikistan',
  nom: 'Tadjikistan',
  article: 'le Tadjikistan',
  accroche: 'Un pays de très hautes montagnes d’Asie centrale, ancien pays soviétique, où le russe reste utile. Un permis spécial est exigé pour le Haut-Badakhchan. Fiche en test, à vérifier.',
  couleur: '#006600',
  langue: { nom: 'tadjik', code: 'tg-TJ' },
  devise: 'somoni',
  conseilsVoyageurs: D.securite,
  verifie: '4 novembre 2026',
  mediasLocaux: [
    { nom: 'Asia-Plus', url: 'https://asiaplustj.info', nature: 'agence d’information privée', langue: 'russe, tadjik, anglais' },
    { nom: 'Avesta', url: 'https://avesta.tj', nature: 'agence d’information', langue: 'russe, tadjik' },
    { nom: 'Khovar', url: 'https://khovar.tj', nature: 'agence de presse d’État', langue: 'tadjik, russe, anglais' },
  ],
  rubriques: rubriquesType({
    lieu: 'au Tadjikistan',
    monnaie: 'le somoni',
    introVoyager: 'Le Tadjikistan accueille les voyageurs avec un visa électronique ou, selon certaines sources, sans visa pour un séjour court. La région du Haut-Badakhchan (le Pamir) exige un permis supplémentaire.',
    securite: securiteALire(D.securite, 'Tadjikistan'),
    entree: {
      id: 'entree',
      titre: 'Visa, exemption et permis du Pamir',
      badge: { type: 'warn', texte: 'À confirmer' },
      blocs: [
        { type: 'liste', items: [
          'La fiche du ministère décrit un <strong>visa électronique</strong> (site evisa.tj), notamment pour les séjours de plus de 30 jours.',
          'Un site spécialisé indique que, depuis le 1er janvier 2022, les Français sont <strong>exemptés de visa pour 30 jours</strong> : ce point est à vérifier sur la fiche officielle.',
          'Le <strong>permis GBAO</strong> (région autonome du Haut-Badakhchan, le Pamir) est exigé en plus du visa ; il peut se demander en ligne sur la même application que l’e-visa. Les autorités peuvent en suspendre la délivrance : vérifiez avant d’organiser un itinéraire.',
          'Les tarifs varient beaucoup selon les sites : consultez le site officiel.',
        ] },
      ],
      sources: [
        { label: 'Ministère de l’Europe et des Affaires étrangères, fiche Tadjikistan (entrée et séjour)', url: D.entree, nature: 'source officielle' },
        { label: 'Action-Visas, Tadjikistan', url: 'https://www.action-visas.com/visa/Tadjikistan', nature: 'site spécialisé' },
        { label: 'Evaneos, visa pour le Tadjikistan', url: 'https://www.evaneos.fr/tadjikistan/voyage/informations-pratiques/visa/', nature: 'agence de voyages (source commerciale)' },
      ],
    },
    introLangue: 'Le tadjik est une langue proche du persan, écrite en cyrillique. Le russe sert de langue commune entre communautés et dans les villes. Les leçons de russe de ce guide sont utiles ici.',
    langue: [],
  }),
  lecons: leconsType({
    salutations: [['Салом', 'salom'], ['Шоми шумо бахайр', 'chomi choumo bakhaïr'], ['Ташаккур', 'tachakkour'], ['Илтимос', 'iltimos'], ['Бубахшед', 'boubakhchèd'], ['Ҳа', 'ha'], ['Не', 'né'], ['Хайр', 'khaïr']],
    presenter: [['Номи ман…', 'nomi man'], ['Ман аз Фаронса ҳастам', 'man az faronsa hastam'], ['Ман каме тоҷикӣ медонам', 'man kamé todjiki médonam'], ['Шумо бо забони англисӣ гап мезанед?', 'choumo bo zaboni anglissi gap mézanèd'], ['Ман нафаҳмидам', 'man nafahmidam']],
    chiffres: [['як', 'yak'], ['ду', 'dou'], ['се', 'sé'], ['панҷ', 'pandj'], ['даҳ', 'dah'], ['Ин чанд пул аст?', 'in tchand poul ast']],
    deplacer: [['… дар куҷост?', 'dar koudjost'], ['Вокзал', 'vokzal'], ['Фурудгоҳ', 'fouroudgoh'], ['Билет', 'bilèt'], ['Чап', 'tchap'], ['Рост', 'rost'], ['Рост рав', 'rost rav']],
    resto: [['Мизи барои ду нафар', 'mizi baroï dou nafar'], ['Меню, илтимос', 'ménü iltimos'], ['Об', 'ob'], ['Қаҳва', 'kahva'], ['Ҳисоб, илтимос', 'hissob iltimos'], ['Ман … мехоҳам', 'man mékhoham']],
    urgences: [['Кӯмак кунед!', 'koumak kounèd'], ['Полисро занг занед!', 'polissro zang zanèd'], ['Ёрии таъҷилӣ даъват кунед!', 'yorii tadjili davat kounèd'], ['Ба ман духтур лозим аст', 'ba man doukhtour lozim ast'], ['Роҳамро гум кардам', 'rohamro goum kardam'], ['Дорухона дар куҷост?', 'doroukhona dar koudjost']],
  }, 'Le russe fonctionne souvent mieux (voir les leçons de russe). Prononciations très approximatives : faites relire par un locuteur.'),
  sourcesSupplementaires: [],
};
