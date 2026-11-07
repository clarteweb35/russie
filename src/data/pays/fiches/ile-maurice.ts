import type { PaysComplet } from '../types';
import { diplo, securiteALire } from '../aides';
import { leconsType, rubriquesType } from '../modele';
import { LECONS_ANGLAIS } from '../anglais';

// Le site du ministère écrit « maurice » dans ses adresses
const D = diplo('maurice');

export const ileMaurice: PaysComplet = {
  complet: true,
  test: true,
  iso: 'MUS',
  slug: 'ile-maurice',
  nom: 'Île Maurice',
  article: 'l’île Maurice',
  accroche: 'Une île de l’océan Indien où le français, l’anglais et le créole se côtoient. Entrée sans visa pour un court séjour, avec un formulaire en ligne à remplir. Fiche beta, à vérifier.',
  couleur: '#ea2839',
  langue: { nom: 'anglais', code: 'en-GB' },
  devise: 'roupie mauricienne',
  conseilsVoyageurs: D.securite,
  verifie: '5 novembre 2026',
  mediasLocaux: [
    { nom: 'L’Express', url: 'https://www.lexpress.mu', nature: 'quotidien privé', langue: 'français' },
    { nom: 'Le Mauricien', url: 'https://www.lemauricien.com', nature: 'quotidien privé', langue: 'français' },
    { nom: 'Defimedia', url: 'https://defimedia.info', nature: 'groupe de presse privé', langue: 'français, anglais, créole' },
    { nom: 'MBC', url: 'https://mbcradio.tv', nature: 'radiotélévision publique', langue: 'anglais, français, créole' },
  ],
  rubriques: rubriquesType({
    lieu: 'à l’île Maurice',
    monnaie: 'la roupie mauricienne',
    introVoyager: 'Les Français entrent sans visa pour un court séjour, mais doivent présenter un billet de retour, un justificatif d’hébergement et un formulaire de voyage numérique.',
    securite: securiteALire(D.securite, 'Maurice'),
    entree: {
      id: 'entree',
      titre: 'Entrée sans visa et formulaire de voyage',
      badge: { type: 'warn', texte: 'À confirmer' },
      blocs: [
        { type: 'liste', items: [
          'Séjour touristique sans visa, <strong>généralement jusqu’à 90 jours</strong> selon les sources ; les durées citées varient.',
          'Passeport valable au moins <strong>six mois</strong> après le départ prévu, <strong>billet retour ou de continuation</strong> et justificatif d’hébergement.',
          'Un <strong>formulaire de voyage numérique</strong> est obligatoire avant le départ selon un site spécialisé : procédure et frais non vérifiés.',
        ] },
        { type: 'alerte', warn: true, titre: 'Aucune source officielle mauricienne consultée', html: 'Confirmez la durée, les justificatifs et le formulaire numérique sur la fiche du ministère français et auprès des autorités mauriciennes.' },
      ],
      sources: [
        { label: 'Ministère de l’Europe et des Affaires étrangères, fiche Maurice (entrée et séjour)', url: D.entree, nature: 'source officielle' },
        { label: 'Action-Visas, île Maurice', url: 'https://www.action-visas.com/visa/Ile-Maurice', nature: 'site spécialisé' },
      ],
    },
    introLangue: 'L’anglais est la langue officielle écrite, le français est très répandu, et le créole mauricien est la langue de tous les jours. Les leçons ci-dessous donnent les bases de l’anglais, comprises partout ; le créole et le français suffisent souvent à l’oral.',
    langue: [],
  }),
  lecons: leconsType(LECONS_ANGLAIS, 'À Maurice, le français fonctionne très bien aussi. Prononciations approximatives.'),
  sourcesSupplementaires: [],
};
