import type { PaysComplet } from './types';
import { diplo, securiteALire } from './aides';
import { leconsType, rubriquesType } from './modele';

const D = diplo('coree-du-sud');

export const coreeDuSud: PaysComplet = {
  complet: true,
  test: true,
  iso: 'KOR',
  slug: 'coree-du-sud',
  nom: 'Corée du Sud',
  article: 'la Corée du Sud',
  accroche: 'Un pays d’Asie de l’Est très connecté, à l’écriture propre (le hangeul). Les Français sont dispensés d’autorisation de voyage K-ETA jusqu’à fin 2026. Fiche en test, à vérifier.',
  couleur: '#003478',
  langue: { nom: 'coréen', code: 'ko-KR' },
  devise: 'won sud-coréen',
  conseilsVoyageurs: D.securite,
  verifie: '5 novembre 2026',
  mediasLocaux: [
    { nom: 'Yonhap News (anglais)', url: 'https://en.yna.co.kr', nature: 'agence de presse', langue: 'anglais' },
    { nom: 'The Korea Herald', url: 'https://www.koreaherald.com', nature: 'quotidien privé', langue: 'anglais' },
    { nom: 'Korea JoongAng Daily', url: 'https://koreajoongangdaily.joins.com', nature: 'quotidien privé', langue: 'anglais' },
    { nom: 'KBS World', url: 'https://world.kbs.co.kr', nature: 'média public', langue: 'anglais, français et autres' },
  ],
  rubriques: rubriquesType({
    lieu: 'en Corée du Sud',
    monnaie: 'le won sud-coréen',
    introVoyager: 'Pour un court séjour, un Français entre sans visa. L’autorisation électronique K-ETA est aujourd’hui suspendue pour la France, mais seulement jusqu’au 31 décembre 2026.',
    securite: securiteALire(D.securite, 'Corée du Sud'),
    entree: {
      id: 'entree',
      titre: 'Entrée et autorisation K-ETA',
      badge: { type: 'warn', texte: 'À confirmer' },
      blocs: [
        { type: 'liste', items: [
          'Selon la fiche du ministère rapportée par la presse, la <strong>dispense de K-ETA</strong> pour la France court <strong>jusqu’au 31 décembre 2026</strong> (heure coréenne).',
          'Cette dispense est distincte de l’exemption de visa : un passeport en cours de validité reste nécessaire.',
          'Pour un départ en 2027, ne considérez pas la dispense comme reconduite : sans prolongation, la K-ETA redevient nécessaire (environ 7 € selon un média, valable plusieurs années).',
        ] },
        { type: 'alerte', warn: true, titre: 'Sources contradictoires', html: 'Un article plus ancien annonçait la fin de la dispense. Les sources les plus récentes indiquent une prolongation jusqu’à fin 2026 : vérifiez sur le site officiel de la K-ETA (k-eta.go.kr).' },
      ],
      sources: [
        { label: 'Ministère de l’Europe et des Affaires étrangères, fiche Corée du Sud (entrée et séjour)', url: D.entree, nature: 'source officielle' },
        { label: 'Routard, suspension de la K-ETA jusqu’à fin 2026', url: 'https://www.routard.com/actualite-du-voyage/cid141729-suspension-de-l-autorisation-de-voyage-electronique-k-eta-jusqu-a-fin-2026.html', nature: 'guide de voyage' },
        { label: 'Action-Visas, Corée du Sud K-ETA', url: 'https://www.action-visas.com/visa/Coree-du-Sud-K-ETA', nature: 'site spécialisé' },
      ],
    },
    introLangue: 'Le coréen s’écrit avec le hangeul, un alphabet de 24 lettres très logique, qui s’apprend en quelques heures. L’anglais est pratiqué par une partie des jeunes. Les prononciations ci-dessous sont approximatives.',
    langue: [],
  }),
  lecons: leconsType({
    salutations: [['안녕하세요', 'annyonghaséyo'], ['좋은 저녁이에요', 'djôeun djonyok-iéyo'], ['감사합니다', 'kamsahamnida'], ['주세요', 'djousséyo'], ['실례합니다', 'chillyéhamnida'], ['네', 'né'], ['아니요', 'aniyo'], ['안녕히 가세요', 'annyonghi gaséyo']],
    presenter: [['제 이름은…입니다', 'djé iroumeun … imnida'], ['프랑스에서 왔어요', 'peuranseuésso wassoyo'], ['한국어를 조금 해요', 'hangougoreul djokeum héyo'], ['영어 하세요?', 'yongo haséyo'], ['이해 못 했어요', 'ihé mot héssoyo']],
    chiffres: [['일', 'il'], ['이', 'i'], ['삼', 'sam'], ['오', 'o'], ['십', 'chip'], ['얼마예요?', 'olmayéyo']],
    deplacer: [['…어디예요?', 'odiéyo'], ['역', 'yok'], ['공항', 'konghang'], ['표', 'pyo'], ['왼쪽', 'oenntsok'], ['오른쪽', 'oreunntsok'], ['직진', 'djikdjin']],
    resto: [['두 명이요', 'dou myongiyo'], ['메뉴 주세요', 'ménou djousséyo'], ['물', 'moul'], ['커피', 'kopi'], ['계산해 주세요', 'guéssanhé djousséyo'], ['…주세요', 'djousséyo']],
    urgences: [['도와주세요!', 'dowadjousséyo'], ['경찰을 불러 주세요!', 'gyongchareul boullo djousséyo'], ['구급차를 불러 주세요!', 'goûgeubchareul boullo djousséyo'], ['의사가 필요해요', 'uisaga pilyohéyo'], ['길을 잃었어요', 'guireul ireossoyo'], ['약국이 어디예요?', 'yakgougui odiéyo']],
  }, 'Prononciations approximatives : faites relire par un locuteur.'),
  sourcesSupplementaires: [],
};
