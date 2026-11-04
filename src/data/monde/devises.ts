import type { Fiche } from './index';

// Facilité d'obtenir la monnaie locale. Pour les pays hors guide, l'information n'est pas documentée : on le dit.
// Les appréciations rédigées à la main sont des connaissances générales, non sourcées : confiance « warn » (à confirmer).
export type Facilite = {
  niveau: 'facile' | 'moyen' | 'complique' | 'inconnu';
  note: string;
  confiance: 'ok' | 'warn';
};

const MANUELLES: Record<string, Facilite> = {
  RUS: { niveau: 'complique', confiance: 'ok', note: 'Les cartes françaises ne fonctionnent pas sur place et les transferts bancaires sont très limités : voir la page Paiements et la page Vivre de la Russie.' },
  GEO: { niveau: 'facile', confiance: 'warn', note: 'Le lari s’obtient sur place, dans les bureaux de change et aux distributeurs.' },
  TUR: { niveau: 'facile', confiance: 'warn', note: 'La livre turque s’obtient facilement sur place, aux distributeurs et dans les bureaux de change.' },
  ARM: { niveau: 'facile', confiance: 'warn', note: 'Le dram s’obtient sur place, aux distributeurs et dans les bureaux de change.' },
  KAZ: { niveau: 'facile', confiance: 'warn', note: 'Le tenge s’obtient sur place dans les banques et les bureaux de change.' },
  SRB: { niveau: 'facile', confiance: 'warn', note: 'Le dinar serbe s’obtient sur place, aux distributeurs et dans les bureaux de change.' },
  ARE: { niveau: 'facile', confiance: 'warn', note: 'Le dirham s’obtient facilement, aux distributeurs et dans les bureaux de change.' },
  THA: { niveau: 'facile', confiance: 'warn', note: 'Le baht s’obtient facilement aux distributeurs et dans les bureaux de change.' },
  ALB: { niveau: 'facile', confiance: 'warn', note: 'Le lek s’obtient sur place, aux distributeurs et dans les bureaux de change.' },
  SEN: { niveau: 'facile', confiance: 'warn', note: 'Le franc CFA est lié à l’euro et s’obtient sur place, aux distributeurs et dans les bureaux de change.' },
  POL: { niveau: 'facile', confiance: 'warn', note: 'Le zloty s’obtient facilement aux distributeurs et dans les bureaux de change.' },
  CHE: { niveau: 'facile', confiance: 'warn', note: 'Le franc suisse s’obtient facilement, y compris auprès de banques françaises.' },
  GBR: { niveau: 'facile', confiance: 'warn', note: 'La livre sterling s’obtient facilement, y compris auprès de banques françaises.' },
  MAR: { niveau: 'moyen', confiance: 'warn', note: 'Le dirham est une monnaie dont la sortie du pays est limitée : on en prend peu avant le départ et on en retire surtout sur place.' },
  VNM: { niveau: 'moyen', confiance: 'warn', note: 'Le dong est difficile à trouver hors du pays : on en retire surtout sur place.' },
};

export const facilite = (f: Fiche): Facilite => {
  if (f.devises.length > 0 && f.devises.every((d) => d.code === 'EUR')) {
    return { niveau: 'facile', confiance: 'ok', note: 'Même monnaie que la France : aucun change à faire.' };
  }
  return MANUELLES[f.iso] ?? { niveau: 'inconnu', confiance: 'warn', note: 'Non documenté : renseignez-vous auprès de votre banque ou d’un bureau de change avant de partir.' };
};

export const LIBELLE_FACILITE: Record<Facilite['niveau'], string> = {
  facile: 'Facile à obtenir',
  moyen: 'Moyennement facile',
  complique: 'Compliqué à obtenir',
  inconnu: 'Non documenté',
};
