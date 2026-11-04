import type { PaysComplet } from './types';

const DIPLO_SECURITE = 'https://www.diplomatie.gouv.fr/fr/information-par-pays/allemagne/conseils-aux-voyageurs-securite';
const DIPLO_ENTREE = 'https://www.diplomatie.gouv.fr/fr/information-par-pays/allemagne/conseils-aux-voyageurs-entree-sejour';
const ANMELDUNG = { label: 'Amtsdeutschland, déclarer son adresse (Anmeldung)', url: 'https://amtsdeutschland.de/en/buergeramt/register-your-address/', nature: 'guide privé des démarches' };

export const allemagne: PaysComplet = {
  complet: true,
  test: true,
  iso: 'DEU',
  slug: 'allemagne',
  nom: 'Allemagne',
  article: 'l’Allemagne',
  accroche: 'Un pays de l’Union européenne avec une administration très formalisée : déclaration d’adresse, numéro fiscal, assurance maladie obligatoire. Fiche en test, à vérifier.',
  couleur: '#1f2937',
  langue: { nom: 'allemand', code: 'de-DE' },
  devise: 'euro',
  conseilsVoyageurs: DIPLO_SECURITE,
  verifie: '4 novembre 2026',

  mediasLocaux: [
    { nom: 'Tagesschau', url: 'https://www.tagesschau.de', nature: 'journal du service public (ARD)', langue: 'allemand' },
    { nom: 'Süddeutsche Zeitung', url: 'https://www.sueddeutsche.de', nature: 'quotidien privé', langue: 'allemand' },
    { nom: 'Frankfurter Allgemeine Zeitung', url: 'https://www.faz.net', nature: 'quotidien privé', langue: 'allemand' },
    { nom: 'Deutsche Welle', url: 'https://www.dw.com/fr', nature: 'radiodiffuseur international public, édition française (pas un média local, utile pour lire en français)', langue: 'français' },
  ],

  rubriques: [
    {
      slug: 'voyager',
      titre: 'Voyager en Allemagne',
      intro: 'L’Allemagne est dans l’Union européenne et l’espace Schengen : un Français y entre librement.',
      resume: 'Entrée, sécurité et assurance.',
      icone: '✈️',
      sections: [
        {
          id: 'securite',
          titre: 'Sécurité et conseils officiels',
          badge: { type: 'warn', texte: 'À documenter' },
          blocs: [
            { type: 'p', html: 'Je n’ai pas pu lire la rubrique « Sécurité » de la fiche du ministère français lors de cette recherche : lisez-la avant de partir. Les conseils de la Belgique indiquent qu’il est généralement possible de voyager en Allemagne en toute sécurité en respectant les précautions d’usage.' },
          ],
          sources: [
            { label: 'Ministère de l’Europe et des Affaires étrangères, fiche Allemagne (sécurité)', url: DIPLO_SECURITE, nature: 'source officielle' },
            { label: 'Diplomatie belge, sécurité générale en Allemagne', url: 'https://diplomatie.belgium.be/fr/pays/allemagne/voyager-en-allemagne-conseils-aux-voyageurs/securite-generale-en-allemagne', nature: 'source officielle belge' },
          ],
        },
        {
          id: 'entree',
          titre: 'Entrée et formalités',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            {
              type: 'liste',
              items: [
                'L’Allemagne étant membre de l’Union européenne, les ressortissants français peuvent y <strong>entrer librement</strong>. Emportez une pièce d’identité valide.',
                'Selon la fiche officielle, les autorités allemandes confisquent systématiquement les passeports et cartes d’identité déclarés perdus ou volés, puis retrouvés et utilisés pour voyager.',
              ],
            },
          ],
          sources: [{ label: 'Ministère de l’Europe et des Affaires étrangères, fiche Allemagne (entrée et séjour)', url: DIPLO_ENTREE, nature: 'source officielle' }],
        },
        {
          id: 'sante',
          titre: 'Assurance et santé',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            { type: 'p', html: 'Le site officiel du tourisme allemand recommande aux visiteurs de souscrire une <strong>assurance maladie de voyage</strong> pour la durée du séjour. La carte européenne d’assurance maladie (CEAM) s’applique dans l’Union européenne : confirmez-le auprès de l’Assurance maladie.' },
          ],
          sources: [{ label: 'Deutschland.de, voyager en Allemagne', url: 'https://www.deutschland.de/fr/les-voyages-en-allemagne', nature: 'site officiel du tourisme allemand' }],
        },
      ],
    },
    {
      slug: 'vivre',
      titre: 'Vivre en Allemagne',
      intro: 'L’installation passe d’abord par la déclaration d’adresse. Presque toutes les autres démarches en dépendent.',
      resume: 'Anmeldung, numéro fiscal et assurance maladie.',
      icone: '🏠',
      sections: [
        {
          id: 'anmeldung',
          titre: 'La déclaration d’adresse (Anmeldung)',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            {
              type: 'liste',
              items: [
                'L’<strong>Anmeldung</strong> se fait au bureau des citoyens (Bürgeramt) de votre commune, <strong>dans les 14 jours</strong> suivant l’emménagement. Elle est gratuite.',
                'Un retard peut entraîner une amende, citée jusqu’à 1 000 € par un guide (montant non vérifié).',
                'L’attestation d’inscription sert à ouvrir un compte bancaire, à s’affilier à une caisse d’assurance maladie ou à immatriculer un véhicule.',
              ],
            },
          ],
          sources: [
            ANMELDUNG,
            { label: 'Expatrio, déclarer son adresse en Allemagne', url: 'https://www.expatrio.com/about-germany/how-register-apartment-germany', nature: 'prestataire, intérêt commercial' },
          ],
          note: 'Aucune page officielle allemande n’a été consultée : vérifiez sur le site de votre commune.',
        },
        {
          id: 'fiscal',
          titre: 'Numéro fiscal (Steuer-ID)',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            {
              type: 'liste',
              items: [
                'Le numéro d’identification fiscale, de 11 chiffres, est <strong>envoyé automatiquement par courrier</strong> après l’Anmeldung, sans demande séparée. Le délai cité va de 2 à 5 semaines.',
                'Sans ce numéro, un employeur peut devoir appliquer la classe d’impôt 6, la plus élevée : prévenez-le si vous commencez avant de l’avoir reçu.',
                'Si rien n’arrive après environ six semaines, contactez l’office fédéral des impôts (BZSt).',
              ],
            },
          ],
          sources: [ANMELDUNG],
        },
        {
          id: 'assurance',
          titre: 'Assurance maladie',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            { type: 'p', html: 'L’assurance maladie est <strong>obligatoire</strong> pour toute personne résidant en Allemagne. Environ 90 % des résidents sont couverts par l’assurance publique. Pour un salarié, l’inscription doit en principe se faire avant le premier jour de travail.' },
          ],
          sources: [{ label: 'Visaflow, s’installer en Allemagne en 2026', url: 'https://www.visaflow.app/blog/moving-to-germany-settling-in-guide', nature: 'site commercial' }],
        },
        {
          id: 'logement',
          titre: 'Logement et coût de la vie',
          badge: { type: 'warn', texte: 'À documenter' },
          blocs: [{ type: 'alerte', warn: true, titre: 'Section à compléter', html: 'Aucune source fiable n’a été retenue sur ces sujets.' }],
        },
      ],
    },
    {
      slug: 'travailler',
      titre: 'Travailler en Allemagne',
      intro: 'Les citoyens de l’Union européenne peuvent travailler en Allemagne sans permis.',
      resume: 'Démarches côté employeur et impôts.',
      icone: '💼',
      sections: [
        {
          id: 'demarches',
          titre: 'Démarches pour être salarié',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            {
              type: 'liste',
              items: [
                'Votre employeur a besoin du <strong>Steuer-ID</strong> pour établir votre paie (voir <em>Vivre</em>).',
                'L’affiliation à une caisse d’assurance maladie doit être faite avant la prise de poste.',
              ],
            },
          ],
          sources: [ANMELDUNG],
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
      intro: 'L’Allemagne utilise l’euro. Cette page est à compléter.',
      resume: 'Euro, cartes et espèces.',
      icone: '💳',
      sections: [
        {
          titre: 'Cartes et espèces',
          badge: { type: 'warn', texte: 'À documenter' },
          blocs: [{ type: 'alerte', warn: true, titre: 'Section à compléter', html: 'Les usages (acceptation des cartes françaises, espèces, paiement mobile) n’ont pas été vérifiés auprès de sources fiables.' }],
        },
      ],
    },
    {
      slug: 'langue-culture',
      titre: 'Langue et culture',
      intro: 'L’allemand est la langue officielle. Il distingue « du » (tutoiement) et « Sie » (vouvoiement).',
      resume: 'Allemand et prononciation.',
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
                ['ü', 'comme le « u » français', 'über : « uber »'],
                ['ch', 'son doux ou guttural selon la voyelle', 'ich : « ich » (son doux)'],
                ['sch', 'comme « ch »', 'schön : « cheun »'],
                ['ß', 'comme « ss »', 'Straße : « strasse »'],
              ],
            },
          ],
          note: 'Repères non sourcés et approximatifs.',
        },
        {
          titre: 'Culture et usages',
          badge: { type: 'warn', texte: 'À documenter' },
          blocs: [{ type: 'alerte', warn: true, titre: 'Section à compléter', html: 'Les usages (ponctualité, tri des déchets, horaires) n’ont pas été vérifiés auprès de sources fiables.' }],
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
        ['Hallo', 'halo', 'Bonjour / Salut'],
        ['Guten Morgen', 'gouten morgen', 'Bonjour (le matin)'],
        ['Guten Tag', 'gouten tag', 'Bonjour (dans la journée)'],
        ['Guten Abend', 'gouten abent', 'Bonsoir'],
        ['Danke', 'danké', 'Merci'],
        ['Bitte', 'bitté', 'S’il vous plaît / De rien'],
        ['Entschuldigung', 'entchouldigoung', 'Excusez-moi'],
        ['Ja', 'ya', 'Oui'],
        ['Nein', 'naïn', 'Non'],
        ['Wie geht es Ihnen?', 'vi guét ès inen', 'Comment allez-vous ?'],
        ['Gut, danke', 'gout danké', 'Bien, merci'],
        ['Auf Wiedersehen', 'aouf vidérzéen', 'Au revoir'],
        ['Tschüss', 'tchuss', 'Salut (au revoir)'],
      ],
      astuce: 'Avec un inconnu, utilisez « Sie » (vouvoiement) et « Guten Tag » ; « Hallo » et « Tschüss » conviennent plutôt entre connaissances.',
    },
    {
      slug: 'se-presenter',
      titre: 'Se présenter',
      intro: 'Dire qui vous êtes et ce que vous ne comprenez pas.',
      phrases: [
        ['Ich heiße…', 'ich haïssé', 'Je m’appelle…'],
        ['Freut mich', 'froït mich', 'Enchanté(e)'],
        ['Ich bin Franzose', 'ich bin frantsozé', 'Je suis français'],
        ['Ich bin Französin', 'ich bin frantseusin', 'Je suis française'],
        ['Ich komme aus Frankreich', 'ich komé aous frankraïch', 'Je viens de France'],
        ['Ich spreche ein bisschen Deutsch', 'ich chprèché aïn biss-chen doïtch', 'Je parle un peu allemand'],
        ['Sprechen Sie Englisch?', 'chprèchen zi ènglich', 'Parlez-vous anglais ?'],
        ['Ich verstehe nicht', 'ich fèrchtéé nicht', 'Je ne comprends pas'],
        ['Können Sie das wiederholen?', 'keunnen zi das vidérholén', 'Pouvez-vous répéter ?'],
        ['Bitte langsamer', 'bitté langzamer', 'Plus lentement, s’il vous plaît'],
      ],
      astuce: 'Préparez « Ich heiße… » avec votre prénom et répétez-le à voix haute.',
    },
    {
      slug: 'chiffres-prix-heure',
      titre: 'Chiffres, prix et heure',
      intro: 'Pour comprendre un prix, demander l’heure ou compter votre argent.',
      phrases: [
        ['Eins', 'aïns', '1'],
        ['Zwei', 'tsvaï', '2'],
        ['Drei', 'draï', '3'],
        ['Vier', 'fir', '4'],
        ['Fünf', 'funf', '5'],
        ['Sechs', 'zèks', '6'],
        ['Sieben', 'ziben', '7'],
        ['Acht', 'acht', '8'],
        ['Neun', 'noïn', '9'],
        ['Zehn', 'tsén', '10'],
        ['Was kostet das?', 'vas kostet das', 'Combien ça coûte ?'],
        ['Wie spät ist es?', 'vi chpèt ist ès', 'Quelle heure est-il ?'],
        ['Kann ich mit Karte bezahlen?', 'kan ich mit karté bétsalen', 'Puis-je payer par carte ?'],
      ],
      astuce: 'Demandez « Kann ich mit Karte bezahlen? » : certains commerces n’acceptent pas toutes les cartes (usage non vérifié).',
    },
    {
      slug: 'se-deplacer',
      titre: 'Se déplacer',
      intro: 'Demander son chemin et acheter un billet.',
      phrases: [
        ['Wo ist…?', 'vo ist', 'Où est… ?'],
        ['Der Bahnhof', 'dèr banhof', 'La gare'],
        ['Der Flughafen', 'dèr flougue-hafen', 'L’aéroport'],
        ['Die Bushaltestelle', 'di bous-haltéchtélé', 'L’arrêt de bus'],
        ['Eine Fahrkarte, bitte', 'aïné far-karté bitté', 'Un billet, s’il vous plaît'],
        ['Links', 'links', 'À gauche'],
        ['Rechts', 'rechts', 'À droite'],
        ['Geradeaus', 'guéradé-aous', 'Tout droit'],
        ['Wann fährt der nächste Zug?', 'van fèrt dèr nèchsté tsouk', 'Quand part le prochain train ?'],
      ],
      astuce: 'Dites « Wo ist… ? » puis montrez l’adresse écrite sur votre téléphone.',
    },
    {
      slug: 'restaurant-courses',
      titre: 'Restaurant et courses',
      intro: 'Commander, demander l’addition et faire vos courses.',
      phrases: [
        ['Einen Tisch für zwei, bitte', 'aïnen tich fur tsvaï bitté', 'Une table pour deux, s’il vous plaît'],
        ['Die Speisekarte, bitte', 'di chpaïzé-karté bitté', 'La carte, s’il vous plaît'],
        ['Ich möchte…', 'ich meuchté', 'Je voudrais…'],
        ['Einen Kaffee', 'aïnen kafé', 'Un café'],
        ['Wasser', 'vasser', 'De l’eau'],
        ['Ein Bier', 'aïn bir', 'Une bière'],
        ['Haben Sie etwas Vegetarisches?', 'haben zi étvas végétarichès', 'Avez-vous quelque chose de végétarien ?'],
        ['Die Rechnung, bitte', 'di rèchnoung bitté', 'L’addition, s’il vous plaît'],
      ],
      astuce: 'Pour payer, dites « Zusammen » (ensemble) ou « Getrennt » (séparément).',
    },
    {
      slug: 'urgences',
      titre: 'Urgences et phrases de survie',
      intro: 'Les phrases à connaître en cas de problème.',
      phrases: [
        ['Hilfe!', 'hilfé', 'Au secours !'],
        ['Rufen Sie einen Krankenwagen!', 'roufen zi aïnen krankenvaguen', 'Appelez une ambulance !'],
        ['Rufen Sie die Polizei!', 'roufen zi di politsaï', 'Appelez la police !'],
        ['Ich brauche einen Arzt', 'ich braouché aïnen artst', 'J’ai besoin d’un médecin'],
        ['Es tut hier weh', 'ès toute hir vé', 'J’ai mal ici'],
        ['Ich habe mich verlaufen', 'ich habé mich fèrlaoufen', 'Je me suis perdu(e)'],
        ['Wo ist die Apotheke?', 'vo ist di apotéké', 'Où est la pharmacie ?'],
      ],
      astuce: 'Le numéro d’urgence européen 112 fonctionne dans l’Union européenne, dont l’Allemagne (à confirmer sur la fiche officielle).',
    },
  ],

  sourcesSupplementaires: [],
};
