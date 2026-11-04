import type { PaysComplet } from './types';
import { aDocumenter, cultureACompleter, diplo, paiementsACompleter } from './aides';

const D = diplo('pologne');
const PDF_FICHE = 'https://www.diplomatie.gouv.fr/files/files/pdf/cav/Pologne%20-%20Minist%C3%A8re%20de%20l%27Europe%20et%20des%20Affaires%20%C3%A9trang%C3%A8res.pdf';
const OFFICIEL_ENTREE = { label: 'Ministère de l’Europe et des Affaires étrangères, fiche Pologne (entrée et séjour)', url: D.entree, nature: 'source officielle' };
const CYRIL_PL = { label: 'Cyril Jarnias, s’installer en Pologne', url: 'https://www.cyriljarnias.com/expatriation/guide-sinstaller-pologne-expatrie/', nature: 'blog de conseil' };
const UMK = { label: 'Université Nicolas Copernic, démarches pour les citoyens de l’UE', url: 'https://www.umk.pl/en/onboarding/legal-matters', nature: 'université' };

export const pologne: PaysComplet = {
  complet: true,
  test: true,
  slug: 'pologne',
  nom: 'Pologne',
  article: 'la Pologne',
  accroche: 'Un pays de l’Union européenne proche de l’Ukraine et de la Biélorussie : libre circulation, des démarches simples (PESEL, enregistrement), et une vigilance particulière près de certaines frontières. Fiche en test, à vérifier.',
  couleur: '#c1272d',
  langue: { nom: 'polonais', code: 'pl-PL' },
  devise: 'zloty',
  conseilsVoyageurs: D.securite,
  verifie: '4 novembre 2026',

  mediasLocaux: [
    { nom: 'PAP (Agence polonaise de presse)', url: 'https://www.pap.pl', nature: 'agence de presse publique', langue: 'polonais' },
    { nom: 'Polskie Radio', url: 'https://www.polskieradio.pl', nature: 'radio publique', langue: 'polonais, anglais' },
    { nom: 'Gazeta Wyborcza', url: 'https://wyborcza.pl', nature: 'quotidien généraliste', langue: 'polonais' },
    { nom: 'Notes from Poland', url: 'https://notesfrompoland.com', nature: 'média en ligne en anglais', langue: 'anglais' },
  ],

  rubriques: [
    {
      slug: 'voyager',
      titre: 'Voyager en Pologne',
      intro: 'La Pologne est dans l’Union européenne et l’espace Schengen. Les contrôles aux frontières terrestres peuvent ralentir les trajets, et la vigilance s’impose près des frontières avec les pays hors Union européenne.',
      resume: 'Entrée, contrôles et frontières.',
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
                'Les ressortissants français peuvent entrer <strong>librement</strong>, munis d’un <strong>passeport ou d’une carte nationale d’identité en cours de validité</strong>.',
                'Un <strong>justificatif de ressources</strong> nécessaires au séjour peut être demandé à l’entrée.',
                'Des <strong>contrôles d’identité</strong> peuvent avoir lieu aux entrées en bus, en train ou en voiture, avec des ralentissements à prévoir sur les axes transfrontaliers.',
                'Pour un long séjour, la fiche renvoie au site de l’ambassade de France en Pologne.',
              ],
            },
          ],
          sources: [OFFICIEL_ENTREE, { label: 'Ministère de l’Europe et des Affaires étrangères, fiche Pologne (PDF)', url: PDF_FICHE, nature: 'source officielle' }],
          note: 'Fiche officielle mise à jour en avril 2026 d’après le résultat consulté ; seuls des extraits ont pu être lus.',
        },
        {
          id: 'securite',
          titre: 'Sécurité et frontières',
          badge: { type: 'ok', texte: 'Vérifié' },
          blocs: [
            { type: 'p', html: 'La fiche recommande une <strong>attention particulière près de la frontière avec les pays hors Union européenne</strong>, notamment pendant les excursions touristiques : faites attention aux panneaux d’information et aux marquages de la frontière polonaise.' },
            { type: 'alerte', warn: true, titre: 'Frontières avec l’Ukraine et la Biélorussie', html: 'Les conditions de passage et les points fermés ont changé à plusieurs reprises. Lisez la rubrique « Sécurité » complète et les alertes de la fiche officielle avant tout déplacement près de ces frontières.' },
          ],
          sources: [{ label: 'Ministère de l’Europe et des Affaires étrangères, fiche Pologne (sécurité)', url: D.securite, nature: 'source officielle' }],
        },
        aDocumenter('Argent, santé et téléphone', 'La monnaie est le zloty. La carte européenne d’assurance maladie est utilisable (source secondaire). Les usages (cartes, espèces, carte SIM) n’ont pas été vérifiés auprès de sources fiables.'),
      ],
    },
    {
      slug: 'vivre',
      titre: 'Vivre en Pologne',
      intro: 'Un séjour de plus de trois mois s’enregistre ; le numéro PESEL sert d’identifiant dans la plupart des démarches.',
      resume: 'Enregistrement, PESEL et assurance maladie.',
      icone: '🏠',
      sections: [
        {
          id: 'enregistrement',
          titre: 'Enregistrement du séjour et PESEL',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            {
              type: 'liste',
              items: [
                'Un citoyen de l’UE n’a pas besoin de visa, mais un séjour de <strong>plus de trois mois</strong> doit être enregistré auprès de l’office de la voïvodie, qui délivre une attestation d’enregistrement de séjour.',
                'Le dossier demande un document justifiant le motif du séjour (contrat de travail, promesse d’embauche, inscription scolaire) et la preuve d’une assurance santé.',
                'Le <strong>PESEL</strong> est requis pour rester plus de 30 jours : c’est un numéro d’identification dans le registre de la population, utilisé pour la santé, les impôts et les banques. <strong>Il ne donne pas le droit de travailler.</strong>',
                'Les salariés sont affiliés à l’assurance maladie publique (NFZ) par leur employeur ; l’assurance sociale est gérée par le ZUS. En attendant, la carte européenne d’assurance maladie ou une assurance privée peut servir.',
              ],
            },
          ],
          sources: [
            CYRIL_PL,
            UMK,
            { label: 'Office de la voïvodie de Mazovie, informations pour les citoyens de l’UE (français)', url: 'https://migrant.wsc.mazowieckie.pl/pl/system/files/pliki/pouczenie_dla_obywateli_ue_i_czlonkow_rodzin_fr.pdf', nature: 'administration régionale (extrait)' },
          ],
          note: 'Les délais et les formulaires varient selon la voïvodie : vérifiez auprès du bureau de la vôtre.',
        },
        aDocumenter('Banque, logement et coût de la vie'),
      ],
    },
    {
      slug: 'travailler',
      titre: 'Travailler en Pologne',
      intro: 'Les citoyens de l’Union européenne n’ont pas besoin de permis de travail.',
      resume: 'Droit de travailler et affiliation.',
      icone: '💼',
      sections: [
        {
          id: 'droit',
          titre: 'Le droit de travailler',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            { type: 'p', html: 'Les citoyens de l’Union européenne <strong>n’ont pas besoin de permis de travail</strong>. Le salarié est affilié à l’assurance sociale par l’employeur, avec un formulaire ZUS ; le délai de dépôt cité (7 jours) concerne surtout d’autres catégories et est à confirmer.' },
          ],
          sources: [CYRIL_PL, UMK],
        },
        aDocumenter('Salaire minimum, impôts et recherche d’emploi'),
      ],
    },
    paiementsACompleter('le zloty'),
    {
      slug: 'langue-culture',
      titre: 'Langue et culture',
      intro: 'Le polonais s’écrit avec l’alphabet latin et des signes (ą, ę, ł, ś, ż...). Ses groupes de consonnes déroutent le débutant, mais la lecture est régulière.',
      resume: 'Polonais et prononciation.',
      icone: '🎭',
      sections: [
        {
          titre: 'Prononciation : repères',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            {
              type: 'tableau',
              entetes: ['Lettres', 'Se prononce', 'Exemple'],
              lignes: [
                ['sz', 'comme « ch »', 'szkoła : « chkola »'],
                ['cz', 'comme « tch »', 'czy : « tchy »'],
                ['ł', 'comme « ou » (w anglais)', 'dziękuję : « djièn-kouyè »'],
                ['ż, rz', 'comme « j »', 'przepraszam : « pchèpracham »'],
                ['w', 'comme « v »', 'woda : « voda »'],
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
        ['Cześć', 'tcheshtch', 'Salut'],
        ['Dzień dobry', 'djègn dobry', 'Bonjour'],
        ['Dobry wieczór', 'dobry vièttchour', 'Bonsoir'],
        ['Dziękuję', 'djièn-kouyè', 'Merci'],
        ['Proszę', 'prochè', 'S’il vous plaît / De rien'],
        ['Przepraszam', 'pchèpracham', 'Excusez-moi'],
        ['Tak', 'tak', 'Oui'],
        ['Nie', 'nié', 'Non'],
        ['Jak się Pan ma?', 'yak chè pan ma', 'Comment allez-vous ? (à un homme)'],
        ['Dobrze, dziękuję', 'dobjè djièn-kouyè', 'Bien, merci'],
        ['Do widzenia', 'do vidzènia', 'Au revoir'],
      ],
      astuce: 'Avec un inconnu, dites « Pan » (à un homme) ou « Pani » (à une femme) : c’est la forme polie, plus courante que le vouvoiement français.',
    },
    {
      slug: 'se-presenter',
      titre: 'Se présenter',
      intro: 'Dire qui vous êtes et ce que vous ne comprenez pas.',
      phrases: [
        ['Nazywam się…', 'nazyvam chè', 'Je m’appelle…'],
        ['Miło mi', 'miwo mi', 'Enchanté(e)'],
        ['Jestem Francuzem', 'yèstèm frantsouzèm', 'Je suis français'],
        ['Jestem Francuzką', 'yèstèm frantsouskon', 'Je suis française'],
        ['Jestem z Francji', 'yèstèm z frantsii', 'Je viens de France'],
        ['Mówię trochę po polsku', 'mouviè trokhè po polskou', 'Je parle un peu polonais'],
        ['Czy mówi Pan po angielsku?', 'tchy mouvi pan po angièlskou', 'Parlez-vous anglais ?'],
        ['Nie rozumiem', 'nié rozoumièm', 'Je ne comprends pas'],
        ['Proszę mówić wolniej', 'prochè mouvitch volniéï', 'Parlez plus lentement, s’il vous plaît'],
      ],
      astuce: 'Préparez « Nazywam się… » avec votre prénom et répétez-le à voix haute.',
    },
    {
      slug: 'chiffres-prix-heure',
      titre: 'Chiffres, prix et heure',
      intro: 'Pour comprendre un prix, demander l’heure ou compter votre argent.',
      phrases: [
        ['Jeden', 'yèdèn', '1'],
        ['Dwa', 'dva', '2'],
        ['Trzy', 'tchy', '3'],
        ['Cztery', 'tchtèry', '4'],
        ['Pięć', 'pièntch', '5'],
        ['Sześć', 'chèchtch', '6'],
        ['Siedem', 'chièdèm', '7'],
        ['Osiem', 'ochièm', '8'],
        ['Dziewięć', 'djièviènntch', '9'],
        ['Dziesięć', 'djièchièntch', '10'],
        ['Ile to kosztuje?', 'ilè to kochtouyè', 'Combien ça coûte ?'],
        ['Która jest godzina?', 'ktoura yèst godjina', 'Quelle heure est-il ?'],
      ],
      astuce: 'La monnaie est le zloty : demandez le prix avant d’acheter, « Ile to kosztuje? ».',
    },
    {
      slug: 'se-deplacer',
      titre: 'Se déplacer',
      intro: 'Demander son chemin et acheter un billet.',
      phrases: [
        ['Gdzie jest…?', 'gdjè yèst', 'Où est… ?'],
        ['Dworzec', 'dvojèts', 'La gare'],
        ['Lotnisko', 'lotniskô', 'L’aéroport'],
        ['Przystanek', 'pchystanèk', 'L’arrêt'],
        ['Poproszę bilet', 'poprochè bilèt', 'Un billet, s’il vous plaît'],
        ['W lewo', 'v lèvo', 'À gauche'],
        ['W prawo', 'v pravo', 'À droite'],
        ['Prosto', 'prosto', 'Tout droit'],
      ],
      astuce: 'Montrez l’adresse écrite sur votre téléphone : c’est souvent plus sûr que de la dire.',
    },
    {
      slug: 'restaurant-courses',
      titre: 'Restaurant et courses',
      intro: 'Commander, demander l’addition et faire vos courses.',
      phrases: [
        ['Stolik dla dwóch osób', 'stolik dla dvouh osoup', 'Une table pour deux'],
        ['Poproszę menu', 'poprochè mènou', 'Le menu, s’il vous plaît'],
        ['Poproszę…', 'poprochè', 'Je voudrais…'],
        ['Kawa', 'kava', 'Un café'],
        ['Woda', 'voda', 'De l’eau'],
        ['Piwo', 'pivo', 'Une bière'],
        ['Rachunek, proszę', 'rahounèk prochè', 'L’addition, s’il vous plaît'],
      ],
      astuce: '« Poproszę » (« je voudrais, s’il vous plaît ») sert à tout commander.',
    },
    {
      slug: 'urgences',
      titre: 'Urgences et phrases de survie',
      intro: 'Les phrases à connaître en cas de problème.',
      phrases: [
        ['Pomocy!', 'pomotsy', 'Au secours !'],
        ['Proszę wezwać karetkę', 'prochè vèzvatch karètkè', 'Appelez une ambulance'],
        ['Proszę wezwać policję', 'prochè vèzvatch politsièn', 'Appelez la police'],
        ['Potrzebuję lekarza', 'potchèbouyè lèkaja', 'J’ai besoin d’un médecin'],
        ['Boli mnie', 'boli mniè', 'J’ai mal'],
        ['Zgubiłem się', 'zgoubiouèm chè', 'Je me suis perdu'],
        ['Gdzie jest apteka?', 'gdjè yèst aptèka', 'Où est la pharmacie ?'],
      ],
      astuce: 'Le numéro d’urgence européen 112 fonctionne dans l’Union européenne, dont la Pologne (à confirmer sur la fiche officielle).',
    },
  ],

  sourcesSupplementaires: [],
};
