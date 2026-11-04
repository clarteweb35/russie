import type { PaysComplet } from './types';
import { aDocumenter, cultureACompleter, diplo, paiementsACompleter, securiteALire } from './aides';

const D = diplo('portugal');
const OFFICIEL_ENTREE = { label: 'Ministère de l’Europe et des Affaires étrangères, fiche Portugal (entrée et séjour)', url: D.entree, nature: 'source officielle' };
const MCS = { label: 'MCS, enregistrement des citoyens de l’UE au Portugal (NIF, CRUE, NISS, SNS, IRS)', url: 'https://mcs.pt/eu-citizens-in-portugal-the-registration-sequence-for-nif-crue-niss-sns-irs-and-ifici/', nature: 'cabinet, intérêt commercial' };
const EPORTUGAL = { label: 'ePortugal, demander le NIF et le NISS pour un étranger', url: 'https://eportugal.gov.pt/en-GB/migrantes-viver-e-trabalhar-em-portugal/migrantes-impostos-e-seguranca-social-em-portugal/como-pedir-o-nif-e-o-niss-para-cidadaos-estrangeiros-em-portugal', nature: 'portail officiel' };

export const portugal: PaysComplet = {
  complet: true,
  test: true,
  slug: 'portugal',
  nom: 'Portugal',
  article: 'le Portugal',
  accroche: 'Un pays de l’Union européenne très prisé des francophones : libre circulation, avec trois numéros à obtenir pour s’installer (fiscal, sécurité sociale, santé). Fiche en test, à vérifier.',
  couleur: '#046a38',
  langue: { nom: 'portugais', code: 'pt-PT' },
  devise: 'euro',
  conseilsVoyageurs: D.securite,
  verifie: '4 novembre 2026',

  mediasLocaux: [
    { nom: 'RTP', url: 'https://www.rtp.pt', nature: 'service public de radio-télévision', langue: 'portugais' },
    { nom: 'Lusa', url: 'https://www.lusa.pt', nature: 'agence de presse', langue: 'portugais' },
    { nom: 'Observador', url: 'https://observador.pt', nature: 'journal en ligne', langue: 'portugais' },
    { nom: 'Diário de Notícias', url: 'https://www.dn.pt', nature: 'quotidien généraliste', langue: 'portugais' },
  ],

  rubriques: [
    {
      slug: 'voyager',
      titre: 'Voyager au Portugal',
      intro: 'Le Portugal est dans l’Union européenne et l’espace Schengen : l’entrée est libre pour un Français.',
      resume: 'Entrée et formalités.',
      icone: '✈️',
      sections: [
        {
          id: 'entree',
          titre: 'Entrée et formalités',
          badge: { type: 'ok', texte: 'Vérifié' },
          blocs: [
            {
              type: 'liste',
              items: [
                'Le Portugal étant membre de l’Union européenne, les ressortissants français, mineurs inclus, peuvent y entrer <strong>librement</strong>, munis d’un <strong>passeport ou d’une carte nationale d’identité en cours de validité</strong>.',
                'Les voyageurs en transit vers un pays hors Schengen doivent vérifier les conditions d’entrée de leur destination finale.',
                'Les Français qui souhaitent s’établir plus de <strong>3 mois</strong> sont invités à s’enregistrer auprès de la mairie (<em>Câmara municipal</em>) de leur lieu de résidence.',
              ],
            },
            { type: 'alerte', warn: true, titre: 'Carte d’identité périmée', html: 'Des agences recommandent de privilégier le passeport si la date de fin de validité de la carte d’identité est dépassée, même avec la prolongation accordée par la France. Ce conseil ne vient pas de la fiche officielle.' },
          ],
          sources: [OFFICIEL_ENTREE],
          note: 'Fiche officielle mise à jour le 30 juin 2026 d’après le résultat consulté.',
        },
        securiteALire(D.securite, 'le Portugal'),
        aDocumenter('Argent, santé et téléphone', 'La monnaie est l’euro. La carte européenne d’assurance maladie s’applique dans l’Union européenne, mais ce point n’a pas été vérifié sur une source officielle.'),
      ],
    },
    {
      slug: 'vivre',
      titre: 'Vivre au Portugal',
      intro: 'Trois numéros organisent la vie administrative : le NIF (impôts), le NISS (sécurité sociale) et le numéro de santé. Ils ne se confondent pas.',
      resume: 'CRUE, NIF, NISS et santé.',
      icone: '🏠',
      sections: [
        {
          id: 'enregistrement',
          titre: 'Enregistrement et numéros',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            {
              type: 'liste',
              items: [
                'Un citoyen de l’UE peut rester <strong>3 mois</strong> sans formalité particulière, puis doit s’enregistrer comme résident : c’est le <strong>CRUE</strong> (certificat d’enregistrement), demandé à la mairie.',
                'Pièces citées : pièce d’identité, NIF, preuve d’adresse, déclaration de ressources suffisantes, parfois une assurance santé. La validité de 5 ans citée par un blog n’est pas confirmée.',
                'Le <strong>NIF</strong> (numéro fiscal) se demande en ligne ou en personne sur rendez-vous. <strong>Il ne prouve pas la résidence.</strong>',
                'Le <strong>NISS</strong> (sécurité sociale) est distinct du NIF et délivré par un autre organisme : beaucoup de nouveaux arrivants croient à tort que le NIF suffit.',
                'Une demande combinée NIF, NISS et numéro de santé est possible en ligne pour les étrangers ayant une adresse au Portugal (source secondaire).',
              ],
            },
          ],
          sources: [EPORTUGAL, MCS, { label: 'Portugalist, obtenir un NISS', url: 'https://www.portugalist.com/niss-number-portugal/', nature: 'blog' }],
          note: 'Vérifiez les pièces et délais sur eportugal.gov.pt et auprès de votre mairie.',
        },
        aDocumenter('Santé, banque, logement et coût de la vie'),
      ],
    },
    {
      slug: 'travailler',
      titre: 'Travailler au Portugal',
      intro: 'Les citoyens de l’Union européenne peuvent travailler sans permis. Le NIF et le NISS sont demandés pour vivre et travailler.',
      resume: 'NIF, NISS et statut.',
      icone: '💼',
      sections: [
        {
          id: 'droit',
          titre: 'Le droit de travailler',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            {
              type: 'liste',
              items: [
                'Pour vivre et travailler au Portugal, il faut s’inscrire auprès des services fiscaux (<strong>NIF</strong>) et de la sécurité sociale (<strong>NISS</strong>).',
                'Pour le NISS, les justificatifs liés au travail sont un contrat de travail ou, pour un indépendant, un début d’activité, avec la preuve de résidence.',
              ],
            },
          ],
          sources: [EPORTUGAL, { label: 'Portugalist, obtenir un NISS', url: 'https://www.portugalist.com/niss-number-portugal/', nature: 'blog' }],
        },
        aDocumenter('Salaire minimum, régimes fiscaux et recherche d’emploi', 'Les régimes fiscaux applicables aux nouveaux résidents changent souvent : vérifiez-les auprès d’un conseiller. Ce guide n’est pas un conseil fiscal.'),
      ],
    },
    paiementsACompleter('l’euro'),
    {
      slug: 'langue-culture',
      titre: 'Langue et culture',
      intro: 'Le portugais s’écrit avec l’alphabet latin et des signes (ã, õ, ç, accents). Les voyelles nasales et les « sh » sont les difficultés principales du débutant.',
      resume: 'Portugais et prononciation.',
      icone: '🎭',
      sections: [
        {
          titre: 'Prononciation : repères',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            {
              type: 'tableau',
              entetes: ['Lettre', 'Se prononce', 'Exemple'],
              lignes: [
                ['ão', 'voyelle nasale proche de « aon »', 'não : « naon »'],
                ['s final', 'comme « ch »', 'adeus : « adéouch »'],
                ['lh', 'comme « ill »', 'filho : « fillou »'],
                ['nh', 'comme « gn »', 'vinho : « vigno »'],
              ],
            },
          ],
          note: 'Repères non sourcés et approximatifs.',
        },
        cultureACompleter(),
      ],
    },
  ],

  lecons: [
    {
      slug: 'salutations',
      titre: 'Salutations et politesse',
      intro: 'Les mots à utiliser dès que vous parlez à quelqu’un.',
      phrases: [
        ['Olá', 'ola', 'Bonjour / Salut'],
        ['Bom dia', 'bon dia', 'Bonjour (le matin)'],
        ['Boa tarde', 'boa tardé', 'Bonjour (l’après-midi)'],
        ['Boa noite', 'boa noïté', 'Bonsoir / Bonne nuit'],
        ['Obrigado', 'obrigadou', 'Merci (homme)'],
        ['Obrigada', 'obrigada', 'Merci (femme)'],
        ['Por favor', 'pour favor', 'S’il vous plaît'],
        ['Desculpe', 'dechkoulpé', 'Excusez-moi'],
        ['Sim', 'sin', 'Oui'],
        ['Não', 'naon', 'Non'],
        ['Como está?', 'komou echta', 'Comment allez-vous ?'],
        ['Bem, obrigado', 'bin obrigadou', 'Bien, merci'],
        ['Adeus', 'adéouch', 'Au revoir'],
      ],
      astuce: 'On dit « obrigado » si l’on est un homme et « obrigada » si l’on est une femme.',
    },
    {
      slug: 'se-presenter',
      titre: 'Se présenter',
      intro: 'Dire qui vous êtes et ce que vous ne comprenez pas.',
      phrases: [
        ['Chamo-me…', 'chamou mé', 'Je m’appelle…'],
        ['Muito prazer', 'mouito prazèr', 'Enchanté(e)'],
        ['Sou francês', 'sô franchèch', 'Je suis français'],
        ['Sou francesa', 'sô franchéza', 'Je suis française'],
        ['Sou da França', 'sô da fransa', 'Je viens de France'],
        ['Falo um pouco de português', 'falou oun pôkou dé pourtougèch', 'Je parle un peu portugais'],
        ['Fala inglês?', 'fala inglèch', 'Parlez-vous anglais ?'],
        ['Não compreendo', 'naon kompréendou', 'Je ne comprends pas'],
        ['Pode repetir, por favor?', 'podé répétir pour favor', 'Pouvez-vous répéter ?'],
      ],
      astuce: 'Préparez « Chamo-me… » avec votre prénom et répétez-le à voix haute.',
    },
    {
      slug: 'chiffres-prix-heure',
      titre: 'Chiffres, prix et heure',
      intro: 'Pour comprendre un prix, demander l’heure ou compter votre argent.',
      phrases: [
        ['Um', 'oun', '1'],
        ['Dois', 'doïch', '2'],
        ['Três', 'trèch', '3'],
        ['Quatro', 'kouatrou', '4'],
        ['Cinco', 'sinkou', '5'],
        ['Seis', 'séïch', '6'],
        ['Sete', 'sètè', '7'],
        ['Oito', 'oïtou', '8'],
        ['Nove', 'novè', '9'],
        ['Dez', 'dèch', '10'],
        ['Quanto custa?', 'kouantou koushta', 'Combien ça coûte ?'],
        ['Que horas são?', 'kè orach saon', 'Quelle heure est-il ?'],
        ['Posso pagar com cartão?', 'possou pagar kon kartaon', 'Puis-je payer par carte ?'],
      ],
      astuce: 'Les prix sont en euros, comme en France.',
    },
    {
      slug: 'se-deplacer',
      titre: 'Se déplacer',
      intro: 'Demander son chemin et acheter un billet.',
      phrases: [
        ['Onde fica…?', 'onde fika', 'Où est… ?'],
        ['A estação', 'a echtassaon', 'La gare'],
        ['O aeroporto', 'ou aéroportou', 'L’aéroport'],
        ['A paragem de autocarro', 'a paragem dé aoutokarrou', 'L’arrêt de bus'],
        ['Um bilhete, por favor', 'oun biliétè pour favor', 'Un billet, s’il vous plaît'],
        ['À esquerda', 'a echkèrda', 'À gauche'],
        ['À direita', 'a diraïta', 'À droite'],
        ['Em frente', 'ain frèntè', 'Tout droit'],
      ],
      astuce: 'Montrez l’adresse écrite sur votre téléphone : c’est souvent plus sûr que de la dire.',
    },
    {
      slug: 'restaurant-courses',
      titre: 'Restaurant et courses',
      intro: 'Commander, demander l’addition et faire vos courses.',
      phrases: [
        ['Uma mesa para dois, por favor', 'ouma mèza para doïch pour favor', 'Une table pour deux'],
        ['A ementa, por favor', 'a imènta pour favor', 'La carte, s’il vous plaît'],
        ['Queria…', 'kéria', 'Je voudrais…'],
        ['Um café', 'oun kafè', 'Un café'],
        ['Água', 'agoua', 'De l’eau'],
        ['Uma cerveja', 'ouma sèrvéja', 'Une bière'],
        ['A conta, por favor', 'a konta pour favor', 'L’addition, s’il vous plaît'],
      ],
      astuce: 'Au Portugal, on dit « ementa » pour la carte du restaurant (et non « menu »).',
    },
    {
      slug: 'urgences',
      titre: 'Urgences et phrases de survie',
      intro: 'Les phrases à connaître en cas de problème.',
      phrases: [
        ['Socorro!', 'sokorrou', 'Au secours !'],
        ['Chame uma ambulância!', 'chamè ouma amboulancia', 'Appelez une ambulance !'],
        ['Chame a polícia!', 'chamè a poulicia', 'Appelez la police !'],
        ['Preciso de um médico', 'prèsizou dé oun médikou', 'J’ai besoin d’un médecin'],
        ['Dói-me aqui', 'doï mé aki', 'J’ai mal ici'],
        ['Estou perdido', 'echtô pèrdidou', 'Je suis perdu'],
        ['Onde fica a farmácia?', 'onde fika a farmacia', 'Où est la pharmacie ?'],
      ],
      astuce: 'Le numéro d’urgence européen 112 fonctionne dans l’Union européenne, dont le Portugal (à confirmer sur la fiche officielle).',
    },
  ],

  sourcesSupplementaires: [],
};
