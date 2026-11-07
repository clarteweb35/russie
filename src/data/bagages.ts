// Générateur de liste de bagages : toutes les règles sont ici (SSOT). La page ne contient que l'affichage.
// Les objets sont génériques. Aucun conseil médical personnalisé, aucune obligation officielle : les notes
// renvoient à la fiche officielle du pays ou au médecin. Les suggestions propres à un pays (monnaie, formalités,
// leçons) sont construites dans la page à partir des données des pays, jamais écrites ici.

export type Sejour = 'ville' | 'plage' | 'randonnee' | 'hiver' | 'travail' | 'famille';
export type Climat = 'chaud' | 'tempere' | 'froid';
export type Categorie = 'papiers' | 'vetements' | 'toilette' | 'sante' | 'appareils' | 'argent' | 'divers';

export const SEJOURS: { id: Sejour; label: string }[] = [
  { id: 'ville', label: 'Séjour en ville' },
  { id: 'plage', label: 'Plage et détente' },
  { id: 'randonnee', label: 'Randonnée' },
  { id: 'hiver', label: 'Séjour d’hiver (neige, ski)' },
  { id: 'travail', label: 'Déplacement professionnel' },
  { id: 'famille', label: 'Vacances en famille' },
];

export const CLIMATS: { id: Climat; label: string }[] = [
  { id: 'chaud', label: 'Chaud (plus de 25 °C)' },
  { id: 'tempere', label: 'Tempéré (10 à 25 °C)' },
  { id: 'froid', label: 'Froid (moins de 10 °C)' },
];

export const CATEGORIES: { id: Categorie; label: string }[] = [
  { id: 'papiers', label: 'Papiers' },
  { id: 'vetements', label: 'Vêtements' },
  { id: 'toilette', label: 'Toilette' },
  { id: 'sante', label: 'Santé' },
  { id: 'appareils', label: 'Appareils' },
  { id: 'argent', label: 'Argent' },
  { id: 'divers', label: 'Divers' },
];

// Condition : toutes les clés présentes doivent être vraies. `quand` est une liste de conditions : une seule suffit (OU).
export type Cond = { sejour?: Sejour[]; climat?: Climat[]; pluie?: boolean; enfant?: boolean };
// Quantité calculée selon la durée : base + parJour × jours, bornée. Le libellé contient « {n} ».
export type Qte = { base: number; parJour: number; min: number; max: number };
export type Objet = { id: string; cat: Categorie; label: string; note?: string; quand?: Cond[]; qte?: Qte };

const o = (id: string, cat: Categorie, label: string, note?: string, quand?: Cond[], qte?: Qte): Objet => ({ id, cat, label, ...(note ? { note } : {}), ...(quand ? { quand } : {}), ...(qte ? { qte } : {}) });
const FROID: Cond = { climat: ['froid'] };
const CHAUD: Cond = { climat: ['chaud'] };
const HIVER: Cond = { sejour: ['hiver'] };
const ENFANT: Cond[] = [{ enfant: true }];

export const OBJETS: Objet[] = [
  // Papiers
  o('passeport', 'papiers', 'Passeport ou carte d’identité en cours de validité', 'Certains pays exigent une validité minimale au-delà de la date de retour : vérifiez la fiche officielle du pays.'),
  o('visa', 'papiers', 'Visa ou autorisation de voyage, si la destination l’exige', 'À vérifier sur la fiche officielle du pays, avant de réserver.'),
  o('billets', 'papiers', 'Billets de transport et réservations d’hébergement', 'Au format papier ou téléchargés sur le téléphone.'),
  o('assurance', 'papiers', 'Attestation d’assurance voyage, si vous en avez une'),
  o('copies', 'papiers', 'Copies de vos papiers (photos sur le téléphone ou photocopies), rangées séparément'),
  o('permis', 'papiers', 'Permis de conduire, si vous comptez louer un véhicule', 'Renseignez-vous sur les règles locales (permis international éventuel).'),
  o('mission', 'papiers', 'Lettre de mission ou justificatifs professionnels, selon le cas', undefined, [{ sejour: ['travail'] }]),
  o('id-enfant', 'papiers', 'Pièce d’identité de l’enfant, à son nom', 'Les règles varient selon l’âge et la destination : voir la fiche officielle du pays.', ENFANT),
  // Vêtements
  o('sous-vet', 'vetements', 'Sous-vêtements ({n})', undefined, undefined, { base: 1, parJour: 1, min: 3, max: 10 }),
  o('chaussettes', 'vetements', 'Paires de chaussettes ({n})', undefined, undefined, { base: 1, parJour: 1, min: 3, max: 10 }),
  o('hauts', 'vetements', 'Hauts : t-shirts ou chemises ({n})', undefined, undefined, { base: 1, parJour: 0.8, min: 3, max: 9 }),
  o('bas', 'vetements', 'Pantalons, jupes ou shorts ({n})', undefined, undefined, { base: 1, parJour: 0.4, min: 2, max: 5 }),
  o('pull', 'vetements', 'Pull ou gilet léger', undefined, [{ climat: ['tempere', 'froid'] }, { sejour: ['ville', 'randonnee', 'famille'] }]),
  o('veste', 'vetements', 'Veste chaude', undefined, [FROID, HIVER]),
  o('manteau', 'vetements', 'Manteau d’hiver', undefined, [FROID, HIVER]),
  o('thermique', 'vetements', 'Sous-vêtements thermiques', undefined, [HIVER, { climat: ['froid'], sejour: ['randonnee'] }]),
  o('bonnet', 'vetements', 'Bonnet, gants et écharpe', undefined, [FROID, HIVER]),
  o('maillot', 'vetements', 'Maillot de bain', undefined, [{ sejour: ['plage'] }, CHAUD]),
  o('tongs', 'vetements', 'Tongs ou sandales', undefined, [{ sejour: ['plage'] }, CHAUD]),
  o('legers', 'vetements', 'Vêtements légers et amples', undefined, [CHAUD]),
  o('casquette', 'vetements', 'Casquette ou chapeau', undefined, [CHAUD, { sejour: ['plage', 'randonnee'] }]),
  o('impermeable', 'vetements', 'Veste imperméable', undefined, [{ pluie: true }]),
  o('chaussures-rando', 'vetements', 'Chaussures de randonnée déjà portées', 'Évitez d’étrenner des chaussures neuves.', [{ sejour: ['randonnee'] }]),
  o('chaussettes-rando', 'vetements', 'Chaussettes de randonnée', undefined, [{ sejour: ['randonnee'] }]),
  o('chaussures-ville', 'vetements', 'Chaussures confortables pour marcher', undefined, [{ sejour: ['ville', 'travail', 'famille', 'plage'] }]),
  o('chaussures-neige', 'vetements', 'Chaussures chaudes et antidérapantes', undefined, [HIVER, FROID]),
  o('tenue-pro', 'vetements', 'Tenue professionnelle', undefined, [{ sejour: ['travail'] }]),
  o('tenue-soiree', 'vetements', 'Une tenue un peu plus habillée', undefined, [{ sejour: ['ville', 'famille'] }]),
  o('nuit', 'vetements', 'Tenue de nuit'),
  o('rechange-enfant', 'vetements', 'Vêtements de rechange supplémentaires pour l’enfant', undefined, ENFANT),
  // Toilette
  o('brosse', 'toilette', 'Brosse à dents et dentifrice'),
  o('gel', 'toilette', 'Shampoing et gel douche', 'En cabine d’avion, les liquides sont limités à 100 ml par contenant.'),
  o('deo', 'toilette', 'Déodorant'),
  o('rasage', 'toilette', 'Rasoir, peigne ou brosse à cheveux'),
  o('serviette', 'toilette', 'Serviette de bain ou de plage', undefined, [{ sejour: ['plage'] }, CHAUD]),
  o('microfibre', 'toilette', 'Serviette microfibre', undefined, [{ sejour: ['randonnee'] }]),
  o('mouchoirs', 'toilette', 'Mouchoirs et lingettes'),
  o('couches', 'toilette', 'Couches, lingettes et crème pour l’enfant, s’il en porte', undefined, ENFANT),
  // Santé
  o('medicaments', 'sante', 'Vos médicaments habituels, avec l’ordonnance', 'Gardez-les dans leur emballage d’origine, dans votre bagage à main.'),
  o('trousse', 'sante', 'Petite trousse de premiers soins (pansements, désinfectant)'),
  o('solaire', 'sante', 'Crème solaire', undefined, [CHAUD, { sejour: ['plage', 'randonnee', 'hiver'] }]),
  o('levres', 'sante', 'Stick à lèvres et crème hydratante', undefined, [FROID, HIVER]),
  o('repulsif', 'sante', 'Répulsif contre les moustiques, selon la région', 'Pour les risques sanitaires de la destination, voir la fiche officielle du pays et demander conseil à un médecin.', [CHAUD]),
  o('lunettes-vue', 'sante', 'Lunettes de vue ou lentilles de rechange, si vous en portez'),
  o('medic-enfant', 'sante', 'Médicaments de l’enfant, selon l’avis de son médecin', undefined, ENFANT),
  // Appareils
  o('telephone', 'appareils', 'Téléphone et chargeur'),
  o('batterie', 'appareils', 'Batterie externe', 'Elle se met en cabine, jamais en soute.'),
  o('adaptateur', 'appareils', 'Adaptateur de prise, si la destination en a besoin', 'Le type de prise varie selon les pays : vérifiez avant de partir.'),
  o('ecouteurs', 'appareils', 'Écouteurs'),
  o('ordi', 'appareils', 'Ordinateur portable et chargeur', undefined, [{ sejour: ['travail'] }]),
  o('frontale', 'appareils', 'Lampe frontale', undefined, [{ sejour: ['randonnee'] }]),
  o('photo', 'appareils', 'Appareil photo ou caméra, si vous en utilisez un', undefined, [{ sejour: ['plage', 'randonnee', 'hiver', 'famille', 'ville'] }]),
  o('tablette-enfant', 'appareils', 'Tablette ou films téléchargés pour l’enfant', undefined, ENFANT),
  // Argent
  o('carte', 'argent', 'Carte bancaire', 'Vérifiez à l’avance les plafonds et les frais à l’étranger.'),
  o('carte-secours', 'argent', 'Une seconde carte ou un moyen de paiement de secours, rangé séparément'),
  o('especes', 'argent', 'Un peu d’espèces pour les premiers jours'),
  o('pochette', 'argent', 'Pochette ou ceinture discrète pour les papiers et l’argent', undefined, [{ sejour: ['ville', 'famille', 'travail'] }]),
  // Divers
  o('sac-jour', 'divers', 'Petit sac à dos pour la journée'),
  o('cadenas', 'divers', 'Cadenas pour les bagages ou les casiers'),
  o('lunettes', 'divers', 'Lunettes de soleil', undefined, [CHAUD, { sejour: ['plage', 'randonnee', 'hiver'] }]),
  o('gourde', 'divers', 'Gourde', undefined, [CHAUD, { sejour: ['randonnee', 'plage'] }]),
  o('parapluie', 'divers', 'Parapluie compact', undefined, [{ pluie: true }]),
  o('sac-etanche', 'divers', 'Sac étanche pour protéger vos affaires', undefined, [{ pluie: true }, { sejour: ['plage', 'randonnee'] }]),
  o('batons', 'divers', 'Bâtons de marche', undefined, [{ sejour: ['randonnee'] }]),
  o('cartes', 'divers', 'Cartes et itinéraires téléchargés pour une utilisation hors connexion', undefined, [{ sejour: ['randonnee', 'ville'] }]),
  o('bouchons', 'divers', 'Bouchons d’oreille et masque de sommeil', 'Utiles pour les longs trajets.'),
  o('linge', 'divers', 'Sac pour le linge sale'),
  o('livre', 'divers', 'Livre ou liseuse'),
  o('encas', 'divers', 'En-cas pour les trajets', undefined, [{ sejour: ['famille'] }, { enfant: true }]),
  o('doudou', 'divers', 'Doudou et jeux pour l’enfant', undefined, ENFANT),
  o('poussette', 'divers', 'Poussette ou porte-bébé, selon l’âge', undefined, ENFANT),
];
