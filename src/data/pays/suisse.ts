import type { Lecon, PaysComplet } from './types';
import { aDocumenter, cultureACompleter, diplo, paiementsACompleter, securiteALire } from './aides';
import { allemagne } from './allemagne';

const D = diplo('suisse');
const IBANI = { label: 'Ibani, guide de l’expatrié en Suisse', url: 'https://www.ibani.com/guides/expatrie-suisse-premiers-jours-demarches.md', nature: 'site de conseil, intérêt commercial' };
const UFE = { label: 'UFE, s’installer en Suisse', url: 'https://ufe.org/dossier-pays/suisse/sinstaller-en-suisse/', nature: 'association de Français de l’étranger' };

// Leçons : allemand standard (principale langue de la majorité des cantons), avec quelques formules suisses.
// On part des leçons allemandes pour ne pas dupliquer les phrases ; seules les parties propres à la Suisse changent.
const lecons: Lecon[] = allemagne.lecons.map((l) => {
  if (l.slug === 'salutations') {
    return {
      ...l,
      intro: 'Les mots à utiliser dès que vous parlez à quelqu’un en Suisse alémanique. Les formules suisses sont ajoutées à l’allemand standard.',
      phrases: [
        ['Grüezi', 'grutsi', 'Bonjour (formule suisse alémanique)'],
        ['Merci', 'mèrsi', 'Merci (très courant en Suisse)'],
        ['Uf Widerluege', 'ouf vidérlougue', 'Au revoir (formule suisse alémanique)'],
        ...l.phrases,
      ],
      astuce: 'En Suisse alémanique, on parle surtout un dialecte (le suisse allemand) à l’oral, mais l’allemand standard est compris partout. Les voix de synthèse n’existent que pour l’allemand standard.',
    };
  }
  if (l.slug === 'chiffres-prix-heure') {
    return { ...l, astuce: 'Les prix sont en francs suisses, pas en euros. Demandez « Kann ich mit Karte bezahlen? » : l’usage des cartes n’a pas été vérifié.' };
  }
  if (l.slug === 'urgences') {
    return { ...l, astuce: 'Les numéros d’urgence suisses n’ont pas été vérifiés ici : notez-les depuis la fiche officielle du ministère avant de partir.' };
  }
  return l;
});

export const suisse: PaysComplet = {
  complet: true,
  test: true,
  iso: 'CHE',
  slug: 'suisse',
  nom: 'Suisse',
  article: 'la Suisse',
  accroche: 'Un pays voisin hors de l’Union européenne, où l’on parle français, allemand, italien et romanche : permis de séjour, assurance maladie privée obligatoire et francs suisses. Fiche beta, à vérifier.',
  couleur: '#c8102e',
  langue: { nom: 'allemand', code: 'de-CH' },
  devise: 'franc suisse',
  conseilsVoyageurs: D.securite,
  verifie: '4 novembre 2026',

  mediasLocaux: [
    { nom: 'RTS (Radio Télévision Suisse)', url: 'https://www.rts.ch', nature: 'service public de radio-télévision (Suisse romande)', langue: 'français' },
    { nom: 'Le Temps', url: 'https://www.letemps.ch', nature: 'quotidien généraliste (Suisse romande)', langue: 'français' },
    { nom: 'Swissinfo', url: 'https://www.swissinfo.ch', nature: 'service international du service public', langue: 'français, anglais, allemand' },
    { nom: 'NZZ (Neue Zürcher Zeitung)', url: 'https://www.nzz.ch', nature: 'quotidien généraliste (Suisse alémanique)', langue: 'allemand' },
  ],

  rubriques: [
    {
      slug: 'voyager',
      titre: 'Voyager en Suisse',
      intro: 'La Suisse n’est pas dans l’Union européenne, mais elle applique les accords de Schengen. L’entrée d’un Français reste simple.',
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
                'Pour entrer en Suisse, il faut un <strong>document de voyage reconnu</strong>, comme un passeport ou une carte d’identité (Secrétariat d’État aux migrations).',
                'Pour les Français, les sources consultées ne mentionnent pas de visa pour un séjour touristique.',
                'Une carte d’identité française délivrée à un majeur est valable 15 ans depuis 2014 ; les cartes délivrées entre 2004 et 2013 restent valables 5 ans après la date inscrite au verso, selon les règles françaises (source suisse).',
                'Un enfant qui voyage seul doit avoir un passeport individuel, ou une carte d’identité avec autorisation parentale.',
              ],
            },
          ],
          sources: [
            { label: 'ch.ch, documents de voyage pour entrer en Suisse', url: 'https://www.ch.ch/fr/etrangers-en-suisse/entree-et-sejour-en-suisse/documents-de-voyage', nature: 'portail officiel suisse' },
            { label: 'Secrétariat d’État aux migrations, questions fréquentes sur l’entrée', url: 'https://www.sem.admin.ch/sem/fr/home/themen/einreise/faq.html', nature: 'source officielle suisse' },
            { label: 'Ministère de l’Europe et des Affaires étrangères, fiche Suisse (entrée et séjour)', url: D.entree, nature: 'source officielle' },
          ],
          note: 'La fiche officielle française n’a pas pu être lue : confirmez la validité de votre carte d’identité avant de partir.',
        },
        securiteALire(D.securite, 'la Suisse'),
        aDocumenter('Argent, santé et téléphone', 'La monnaie est le franc suisse, et non l’euro. Les usages (cartes, espèces, assurance, carte SIM) et le coût de la vie n’ont pas été vérifiés auprès de sources fiables.'),
      ],
    },
    {
      slug: 'vivre',
      titre: 'Vivre en Suisse',
      intro: 'Il faut s’annoncer à la commune très vite, puis souscrire une assurance maladie privée obligatoire dans un délai de trois mois.',
      resume: 'Annonce à la commune, permis et LAMal.',
      icone: '🏠',
      sections: [
        {
          id: 'installation',
          titre: 'Annonce à la commune, permis et assurance',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            {
              type: 'liste',
              items: [
                'Il faut s’annoncer à la commune de résidence, en général dans les <strong>14 jours</strong> suivant l’arrivée (un guide indique plutôt 3 mois : vérifiez auprès de votre commune). Cette annonce déclenche le permis B.',
                'L’<strong>assurance maladie de base (LAMal)</strong> est obligatoire, à souscrire dans les <strong>3 mois</strong> suivant l’installation. Passé ce délai, le canton peut vous affilier d’office, à des conditions moins avantageuses. L’affiliation est individuelle : chaque membre de la famille doit s’assurer.',
                'Le <strong>permis L</strong> concerne les contrats courts (de 3 à 12 mois) ; le <strong>permis B</strong> est lié à un contrat durable (12 mois au moins ou durée indéterminée). Pour une mission de 3 mois ou moins, l’employeur fait une annonce en ligne, sans permis.',
              ],
            },
          ],
          sources: [IBANI, UFE, { label: 'Compassurance, démarches des nouveaux arrivants en Romandie (2026)', url: 'https://compassurance.ch/nouvel-arrivant-suisse-demarches-administratives-romandie-2026/', nature: 'courtier d’assurance, intérêt commercial' }],
          note: 'Aucune source officielle suisse sur le séjour n’a été consultée : vérifiez auprès de votre commune, du canton et du Secrétariat d’État aux migrations.',
        },
        aDocumenter('Banque, logement et coût de la vie'),
      ],
    },
    {
      slug: 'travailler',
      titre: 'Travailler en Suisse',
      intro: 'Les Français travaillent en Suisse avec un permis lié à leur contrat. Les durées de contrat déterminent le permis.',
      resume: 'Permis L ou B et annonce de l’employeur.',
      icone: '💼',
      sections: [
        {
          id: 'permis',
          titre: 'Permis et travail',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            { type: 'p', html: 'Le type de permis dépend de la durée du contrat : de 3 à 12 mois, un <strong>permis L</strong> ; pour un contrat durable, un <strong>permis B</strong>. Une mission de moins de 3 mois demande seulement une annonce en ligne par l’employeur.' },
          ],
          sources: [IBANI, { label: 'Entreprendre.ch, travailler en Suisse quand on est français', url: 'https://entreprendre.ch/fiches-pratiques/legal-assurances/travailler-en-suisse-quand-on-est-francais/', nature: 'site pour entrepreneurs' }],
        },
        aDocumenter('Frontaliers, salaire minimum, impôts et recherche d’emploi', 'Le statut de frontalier (permis G), les cantons qui imposent un salaire minimum et les règles fiscales entre la France et la Suisse n’ont pas été vérifiés. Ce guide n’est pas un conseil fiscal.'),
      ],
    },
    paiementsACompleter('le franc suisse'),
    {
      slug: 'langue-culture',
      titre: 'Langue et culture',
      intro: 'La Suisse a quatre langues nationales : l’allemand (majoritaire), le français, l’italien et le romanche. En Romandie, le français suffit au quotidien.',
      resume: 'Quatre langues, dialecte alémanique.',
      icone: '🎭',
      sections: [
        {
          titre: 'Quelle langue apprendre ?',
          badge: { type: 'warn', texte: 'À confirmer' },
          blocs: [
            { type: 'p', html: 'Les leçons de ce guide sont en <strong>allemand</strong>, la langue la plus répandue, avec quelques formules de Suisse alémanique. Dans la partie francophone du pays, vous n’en avez pas besoin pour la vie courante. À l’oral, la Suisse alémanique parle surtout un dialecte différent de l’allemand standard.' },
          ],
          note: 'Information non sourcée.',
        },
        cultureACompleter(),
      ],
    },
  ],

  lecons,

  sourcesSupplementaires: [],
};
