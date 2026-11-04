import type { PaysComplet } from './types';

const DIPLO_SECURITE = 'https://www.diplomatie.gouv.fr/fr/information-par-pays/espagne/conseils-aux-voyageurs-securite';
const DIPLO_ENTREE = 'https://www.diplomatie.gouv.fr/fr/information-par-pays/espagne/conseils-aux-voyageurs-entree-sejour';
const GUIDE_LPJ = { label: 'Le Petit Journal, guide pratique pour les Français en Espagne (2024)', url: 'https://backoffice.lepetitjournal.com/sites/default/files/inline-files/@GuidePractique-LPJ-2024-ESP-25062024.pdf', nature: 'média pour les expatriés français' };

export const espagne: PaysComplet = {
  complet: true,
  test: true,
  iso: 'ESP',
  slug: 'espagne',
  nom: 'Espagne',
  article: 'l’Espagne',
  accroche: 'Un pays de l’Union européenne : libre circulation, mais des démarches d’installation (NIE, registre) à connaître. Fiche en test, à vérifier.',
  couleur: '#a8071a',
  langue: { nom: 'espagnol', code: 'es-ES' },
  devise: 'euro',
  conseilsVoyageurs: DIPLO_SECURITE,
  verifie: '4 novembre 2026',

  mediasLocaux: [
    { nom: 'RTVE', url: 'https://www.rtve.es', nature: 'service public de radio-télévision', langue: 'espagnol' },
    { nom: 'El País', url: 'https://elpais.com', nature: 'quotidien privé', langue: 'espagnol' },
    { nom: 'El Mundo', url: 'https://www.elmundo.es', nature: 'quotidien privé', langue: 'espagnol' },
    { nom: 'La Vanguardia', url: 'https://www.lavanguardia.com', nature: 'quotidien privé (Barcelone)', langue: 'espagnol, catalan' },
  ],

  rubriques: [
    {
      slug: 'voyager',
      titre: 'Voyager en Espagne',
      intro: 'L’Espagne est dans l’Union européenne et l’espace Schengen : l’entrée est simple pour un Français.',
      resume: 'Entrée, sécurité, santé et téléphone.',
      icone: '✈️',
      sections: [
        {
          id: 'securite',
          titre: 'Sécurité et conseils officiels',
          badge: { type: 'ok', texte: 'Vérifié' },
          blocs: [
            {
              type: 'liste',
              items: [
                '<strong>Petite délinquance</strong> : la fiche officielle signale des vols sur la voie publique et dans les zones touristiques. Restez vigilant dans les lieux très fréquentés.',
                '<strong>Mer</strong> : la fiche signale des risques en baignade, avec des noyades et des accidents d’immersion rapportés.',
                'La fiche renvoie aussi vers des pages dédiées à la rougeole et à la conduite à tenir en cas de séisme.',
              ],
            },
          ],
          sources: [{ label: 'Ministère de l’Europe et des Affaires étrangères, fiche Espagne (sécurité)', url: DIPLO_SECURITE, nature: 'source officielle' }],
          note: 'Fiche officielle mise à jour en avril 2026 d’après le résultat consulté ; seul un extrait a pu être lu.',
        },
        {
          id: 'entree',
          titre: 'Entrée et formalités',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            {
              type: 'liste',
              items: [
                'Ressortissant de l’Union européenne, vous pouvez circuler librement. Emportez une <strong>pièce d’identité valide</strong> (carte nationale d’identité ou passeport) : je n’ai pas pu lire le détail de la rubrique officielle.',
                'Au-delà de 90 jours, des démarches d’enregistrement existent : voir la page <em>Vivre</em>.',
              ],
            },
          ],
          sources: [{ label: 'Ministère de l’Europe et des Affaires étrangères, fiche Espagne (entrée et séjour)', url: DIPLO_ENTREE, nature: 'source officielle' }],
        },
        {
          id: 'sante',
          titre: 'Assurance et santé',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            { type: 'p', html: 'La <strong>carte européenne d’assurance maladie (CEAM)</strong> s’applique dans les pays de l’Union européenne, dont l’Espagne, pour les soins médicalement nécessaires pendant un séjour temporaire. Je n’ai pas consulté de source officielle sur ce point : confirmez-le auprès de l’Assurance maladie.' },
          ],
        },
        {
          id: 'communications',
          titre: 'Argent, téléphone et internet',
          badge: { type: 'warn', texte: 'À documenter' },
          blocs: [
            { type: 'p', html: 'La monnaie est l’<strong>euro</strong>. Dans l’Union européenne, votre forfait français est en principe utilisable comme chez vous : vérifiez les limites de données avec votre opérateur. Les détails (cartes, espèces, cartes SIM) ne sont pas documentés ici.' },
          ],
        },
      ],
    },
    {
      slug: 'vivre',
      titre: 'Vivre en Espagne',
      intro: 'Pour un Européen, s’installer est simple, mais l’ordre des démarches (NIE, certificat d’enregistrement, registre de la commune) varie selon les villes.',
      resume: 'NIE, certificat d’enregistrement et registre de la commune.',
      icone: '🏠',
      sections: [
        {
          id: 'enregistrement',
          titre: 'Séjour et enregistrement',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            {
              type: 'tableau',
              entetes: ['Démarche', 'À savoir'],
              lignes: [
                ['NIE et certificat d’enregistrement (citoyen de l’UE)', 'Indispensable pour les démarches administratives. Obligatoire pour une installation de plus de 3 mois. Le certificat n’a pas de date d’expiration.'],
                ['Padrón (empadronamiento)', 'Inscription au registre de la commune. Gratuite, à refaire à chaque déménagement.'],
                ['Rendez-vous', 'Pris en ligne (police, certificat de registre de citoyen de l’Union), avec les documents, en personne.'],
              ],
            },
            { type: 'alerte', warn: true, titre: 'Ordre des démarches contradictoire', html: 'Certaines sources disent de s’inscrire d’abord à la mairie, d’autres de demander d’abord le certificat. Cela dépend de la mairie : renseignez-vous auprès de la vôtre avant de commencer.' },
          ],
          sources: [
            GUIDE_LPJ,
            { label: 'Université polytechnique de Catalogne, enregistrement d’un citoyen de l’UE', url: 'https://www.upc.edu/sri/en/mobility_office/students-mobility-office/incomings/legal-issues/at-your-arrival/eu-students-coming-for-less-than-6-months/registration-of-a-citizen-of-the-european-union', nature: 'université' },
            { label: 'Legal Fournier, citoyens de l’UE s’installant en Espagne', url: 'https://legalfournier.com/?p=4633', nature: 'cabinet d’avocats, intérêt commercial' },
          ],
          note: 'Aucune page officielle espagnole n’a été consultée : vérifiez sur le site de l’administration espagnole et auprès de votre mairie.',
        },
        {
          id: 'logement',
          titre: 'Santé, banque, logement et coût de la vie',
          badge: { type: 'warn', texte: 'À documenter' },
          blocs: [{ type: 'alerte', warn: true, titre: 'Section à compléter', html: 'Aucune source fiable n’a été retenue sur ces sujets. Un forum mentionne le formulaire S1 pour la sécurité sociale, ce point n’est pas vérifié.' }],
        },
      ],
    },
    {
      slug: 'travailler',
      titre: 'Travailler en Espagne',
      intro: 'Les citoyens de l’Union européenne peuvent travailler en Espagne sans permis.',
      resume: 'Droit de travailler et démarches.',
      icone: '💼',
      sections: [
        {
          id: 'droit',
          titre: 'Le droit de travailler',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            { type: 'p', html: 'En tant que ressortissant de l’Union européenne, vous n’avez pas besoin de permis de travail. Le NIE et le certificat d’enregistrement sont liés à la <strong>résidence</strong> et non à l’emploi lui-même. Les forums se contredisent sur ce point : confirmez-le auprès de l’administration.' },
          ],
          sources: [GUIDE_LPJ],
        },
        {
          id: 'emploi',
          titre: 'Salaire minimum, impôts et recherche d’emploi',
          badge: { type: 'warn', texte: 'À documenter' },
          blocs: [{ type: 'alerte', warn: true, titre: 'Section à compléter', html: 'Ces sujets n’ont pas été vérifiés auprès de sources fiables.' }],
        },
      ],
    },
    {
      slug: 'paiements',
      titre: 'Moyens de paiement',
      intro: 'L’Espagne utilise l’euro : vos cartes françaises fonctionnent. Cette page est à compléter.',
      resume: 'Euro, cartes et espèces.',
      icone: '💳',
      sections: [
        {
          titre: 'Cartes et espèces',
          badge: { type: 'warn', texte: 'À documenter' },
          blocs: [{ type: 'alerte', warn: true, titre: 'Section à compléter', html: 'Les usages (cartes, espèces, paiement mobile) n’ont pas été vérifiés auprès de sources fiables.' }],
        },
      ],
    },
    {
      slug: 'langue-culture',
      titre: 'Langue et culture',
      intro: 'L’espagnol (castillan) est la langue officielle de l’État ; plusieurs régions ont aussi leur propre langue (catalan, galicien, basque).',
      resume: 'Espagnol, régions et prononciation.',
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
                ['j', 'comme un « h » aspiré fort', 'jamón : « hamon »'],
                ['ñ', 'comme « gn »', 'mañana : « magnana »'],
                ['ll', 'proche de « y »', 'calle : « caye »'],
                ['h', 'muette', 'hola : « ola »'],
              ],
            },
          ],
          note: 'Repères non sourcés et approximatifs.',
        },
        {
          titre: 'Culture et usages',
          badge: { type: 'warn', texte: 'À documenter' },
          blocs: [{ type: 'alerte', warn: true, titre: 'Section à compléter', html: 'Les usages (horaires, repas, politesse) n’ont pas été vérifiés auprès de sources fiables.' }],
        },
      ],
    },
  ],

  lecons: [
    {
      slug: 'salutations',
      titre: 'Salutations et politesse',
      intro: 'Les mots à utiliser dès que vous parlez à quelqu’un.',
      phrases: [
        ['Hola', 'ola', 'Bonjour / Salut'],
        ['Buenos días', 'bouénos dias', 'Bonjour (le matin)'],
        ['Buenas tardes', 'bouénas tardès', 'Bonjour (l’après-midi)'],
        ['Buenas noches', 'bouénas notchès', 'Bonsoir / Bonne nuit'],
        ['Gracias', 'gratsias', 'Merci'],
        ['Por favor', 'por favor', 'S’il vous plaît'],
        ['Perdón', 'pèrdon', 'Excusez-moi'],
        ['Sí', 'si', 'Oui'],
        ['No', 'no', 'Non'],
        ['¿Cómo está?', 'komo esta', 'Comment allez-vous ?'],
        ['Bien, gracias', 'bién gratsias', 'Bien, merci'],
        ['Adiós', 'adios', 'Au revoir'],
        ['Hasta luego', 'asta louégo', 'À tout à l’heure'],
      ],
      astuce: 'Le « h » est muet et le « j » se prononce comme un « h » aspiré.',
    },
    {
      slug: 'se-presenter',
      titre: 'Se présenter',
      intro: 'Dire qui vous êtes et ce que vous ne comprenez pas.',
      phrases: [
        ['Me llamo…', 'mé yamo', 'Je m’appelle…'],
        ['Mucho gusto', 'moutcho gousto', 'Enchanté(e)'],
        ['Soy francés', 'soï franses', 'Je suis français'],
        ['Soy francesa', 'soï fransèsa', 'Je suis française'],
        ['Vengo de Francia', 'vèngo dé fransia', 'Je viens de France'],
        ['Hablo un poco de español', 'ablo oun poko dé espagnol', 'Je parle un peu espagnol'],
        ['¿Habla inglés?', 'abla ingles', 'Parlez-vous anglais ?'],
        ['No entiendo', 'no entiendo', 'Je ne comprends pas'],
        ['¿Puede repetir, por favor?', 'pouédé répétir por favor', 'Pouvez-vous répéter, s’il vous plaît ?'],
        ['Más despacio, por favor', 'mas déspatsio por favor', 'Plus lentement, s’il vous plaît'],
      ],
      astuce: 'Préparez « Me llamo… » avec votre prénom et répétez-le à voix haute.',
    },
    {
      slug: 'chiffres-prix-heure',
      titre: 'Chiffres, prix et heure',
      intro: 'Pour comprendre un prix, demander l’heure ou compter votre argent.',
      phrases: [
        ['Uno', 'ouno', '1'],
        ['Dos', 'dos', '2'],
        ['Tres', 'tres', '3'],
        ['Cuatro', 'kouatro', '4'],
        ['Cinco', 'sinko', '5'],
        ['Seis', 'séis', '6'],
        ['Siete', 'siété', '7'],
        ['Ocho', 'otcho', '8'],
        ['Nueve', 'nouévé', '9'],
        ['Diez', 'diès', '10'],
        ['¿Cuánto cuesta?', 'kouanto kouesta', 'Combien ça coûte ?'],
        ['¿Qué hora es?', 'ké ora es', 'Quelle heure est-il ?'],
        ['¿Puedo pagar con tarjeta?', 'pouédo pagar kon tarhéta', 'Puis-je payer par carte ?'],
      ],
      astuce: 'Les prix sont en euros, comme en France.',
    },
    {
      slug: 'se-deplacer',
      titre: 'Se déplacer',
      intro: 'Demander son chemin et acheter un billet.',
      phrases: [
        ['¿Dónde está…?', 'donde esta', 'Où est… ?'],
        ['La estación', 'la estassion', 'La gare'],
        ['El aeropuerto', 'él aéropouerto', 'L’aéroport'],
        ['La parada de autobús', 'la parada dé aoutobous', 'L’arrêt de bus'],
        ['Un billete, por favor', 'oun biyété por favor', 'Un billet, s’il vous plaît'],
        ['A la izquierda', 'a la isquierda', 'À gauche'],
        ['A la derecha', 'a la dérétcha', 'À droite'],
        ['Todo recto', 'todo rékto', 'Tout droit'],
        ['¿A qué hora sale el próximo tren?', 'a ké ora salé él proksimo trèn', 'À quelle heure part le prochain train ?'],
      ],
      astuce: 'Dites « ¿Dónde está… ? » puis montrez l’adresse écrite sur votre téléphone.',
    },
    {
      slug: 'restaurant-courses',
      titre: 'Restaurant et courses',
      intro: 'Commander, demander l’addition et faire vos courses.',
      phrases: [
        ['Una mesa para dos, por favor', 'ouna mésa para dos por favor', 'Une table pour deux, s’il vous plaît'],
        ['La carta, por favor', 'la karta por favor', 'La carte, s’il vous plaît'],
        ['Quisiera…', 'kisiéra', 'Je voudrais…'],
        ['Un café', 'oun kafé', 'Un café'],
        ['Agua', 'agoua', 'De l’eau'],
        ['Una cerveza', 'ouna sèrvésa', 'Une bière'],
        ['¿Tiene algo vegetariano?', 'tiéné algo végétariano', 'Avez-vous quelque chose de végétarien ?'],
        ['La cuenta, por favor', 'la kouenta por favor', 'L’addition, s’il vous plaît'],
      ],
      astuce: 'Les horaires de repas sont plus tardifs qu’en France : vérifiez l’heure d’ouverture des cuisines (information non sourcée).',
    },
    {
      slug: 'urgences',
      titre: 'Urgences et phrases de survie',
      intro: 'Les phrases à connaître en cas de problème.',
      phrases: [
        ['¡Socorro!', 'sokorro', 'Au secours !'],
        ['¡Llame a una ambulancia!', 'yamé a ouna ambouliansia', 'Appelez une ambulance !'],
        ['¡Llame a la policía!', 'yamé a la polisia', 'Appelez la police !'],
        ['Necesito un médico', 'nésésito oun médiko', 'J’ai besoin d’un médecin'],
        ['Me duele aquí', 'mé douélé aki', 'J’ai mal ici'],
        ['Estoy perdido', 'estoï pèrdido', 'Je suis perdu'],
        ['¿Dónde hay una farmacia?', 'donde aï ouna farmasia', 'Où y a-t-il une pharmacie ?'],
      ],
      astuce: 'Le numéro d’urgence européen 112 fonctionne dans l’Union européenne, dont l’Espagne (à confirmer sur la fiche officielle).',
    },
  ],

  sourcesSupplementaires: [],
};
