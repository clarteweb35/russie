// Liste des flux Awin collectés. Pour brancher un nouveau flux : ajouter UNE entrée ci-dessous, puis créer le secret GitHub
// du même nom que `secret` (adresse complète du datafeed). L'adresse ne doit jamais être écrite dans le dépôt.
//
// id        : identifiant court (sert à `--flux <id>` et aux rapports)
// marchand  : nom affiché si le flux ne fournit pas le champ merchant_name
// secret    : nom du secret qui contient l'adresse du datafeed
// format    : 'xml' ou 'csv' (Awin propose les deux ; le csv peut être compressé en gzip, c'est détecté tout seul)
// champs    : (facultatif) colonnes propres à ce flux, qui remplacent celles de CHAMPS_PAR_DEFAUT
//
// Pour connaître les colonnes réelles d'un flux avant de remplir `champs` :
//   AWIN_FEED_URL_X=... node scripts/bons-plans/collecter.mjs --flux <id> --apercu
export const FLUX = [
  { id: 'principal', marchand: '', secret: 'AWIN_FEED_URL', format: 'xml' },
  // Exemple (à décommenter et adapter quand le flux existe) :
  // { id: 'voyagiste-2', marchand: 'Nom du voyagiste', secret: 'AWIN_FEED_URL_VOYAGISTE_2', format: 'csv',
  //   champs: { destination: 'destination_brute', prix: 'prix_reduit_brut', prix_barre: 'prix_initial_brut' } },
// (à gauche : la colonne du flux ; à droite : le champ interne. Seuls les champs cités remplacent les colonnes par défaut.)
];

// Colonnes Awin usuelles -> champs internes. Les noms viennent du prototype et n'ont jamais été testés sur un flux réel :
// le message « Rejets » de la collecte, et `--apercu`, disent quoi ajuster.
export const CHAMPS_PAR_DEFAUT = {
  product_name: 'destination_brute',
  merchant_name: 'voyagiste',
  search_price: 'prix_reduit_brut',
  rrp_price: 'prix_initial_brut',
  aw_deep_link: 'lien_affiliation',
  aw_image_url: 'image_url',
  custom_1: 'dates_brutes',
  custom_2: 'inclusions_brutes',
  custom_3: 'duree_brute',
};
