import type { Lecon, Media, PaysComplet, Section } from './types';
import { diplo } from './aides';
import { leconsType, rubriquesType } from './modele';
import type { TraductionsLecons } from './modele';
import { LECONS_ANGLAIS } from './anglais';
import { ALLEMAND, NEERLANDAIS } from './langues';
import { ARABE, ESPAGNOL, HEBREU, PERSAN, PORTUGAIS, SWAHILI } from './langues-monde';
import { grece } from './fiches/grece';
import { italie } from './fiches/italie';
import { croatie } from './fiches/croatie';
import { ENTREES } from './monde-entrees';
import fiches from '../monde/pays.json';

// Guides de tous les autres pays du monde, générés depuis la fiche mondiale (src/data/monde/pays.json) et une ligne par pays ci-dessous.
// Honnêteté : sans source fiable, une section reste « À documenter ». Les formalités d'entrée viennent de monde-entrees.ts.
// Les leçons n'existent que pour les langues dont on dispose d'un support ; sinon la rubrique « Leçons » est masquée.

const GENERIQUE = {
  securite: 'https://www.diplomatie.gouv.fr/fr/conseils-aux-voyageurs/conseils-par-pays-destination/',
  entree: 'https://www.diplomatie.gouv.fr/fr/conseils-aux-voyageurs/conseils-par-pays-destination/',
};

type Pack = { lecons: Lecon[]; langue: { nom: string; code: string }; note: string };
const pack = (t: TraductionsLecons, nom: string, code: string, astuce: string, note: string): Pack => ({ lecons: leconsType(t, astuce), langue: { nom, code }, note });
const ASTUCE = 'Prononciations approximatives : faites relire par un locuteur.';

const PACKS: Record<string, Pack> = {
  anglais: pack(LECONS_ANGLAIS, 'anglais', 'en-GB', ASTUCE, 'L’anglais sert de langue de communication, surtout dans le tourisme et les villes (à confirmer pour ce pays).'),
  espagnol: pack(ESPAGNOL, 'espagnol', 'es-ES', ASTUCE, 'L’espagnol ressemble au français sur beaucoup de mots.'),
  portugais: pack(PORTUGAIS, 'portugais', 'pt-PT', ASTUCE, 'Le portugais est la langue officielle.'),
  arabe: pack(ARABE, 'arabe', 'ar-SA', ASTUCE, 'Les phrases sont en arabe standard, compris partout mais différent des dialectes parlés.'),
  swahili: pack(SWAHILI, 'swahili', 'sw-KE', ASTUCE, 'Le swahili est la langue commune de l’Afrique de l’Est ; l’anglais est courant.'),
  persan: pack(PERSAN, 'persan', 'fa-IR', ASTUCE, 'Le persan s’écrit de droite à gauche en alphabet arabe.'),
  hebreu: pack(HEBREU, 'hébreu', 'he-IL', ASTUCE, 'L’hébreu s’écrit de droite à gauche ; l’anglais est très répandu.'),
  neerlandais: pack(NEERLANDAIS, 'néerlandais', 'nl-NL', ASTUCE, 'Le néerlandais est la langue officielle.'),
  allemand: pack(ALLEMAND, 'allemand', 'de-DE', ASTUCE, 'L’allemand est l’une des langues du pays.'),
  grec: { lecons: grece.lecons, langue: grece.langue, note: 'Le grec est l’une des langues du pays.' },
  italien: { lecons: italie.lecons, langue: italie.langue, note: 'L’italien est la langue du pays.' },
  croate: { lecons: croatie.lecons, langue: croatie.langue, note: 'Les langues du pays sont très proches du croate : ces leçons servent aussi.' },
};

// [code ISO, nom avec article, langue des leçons ou null, médias locaux]
type M = [string, string, string, string];
type Ligne = [string, string, string | null, M[]];

const P = 'quotidien privé';
const A = 'agence de presse officielle';
const L: Ligne[] = [
  // Asie
  ['AFG', 'l’Afghanistan', 'persan', [['Tolo News', 'https://tolonews.com', 'chaîne privée', 'persan, anglais'], ['Pajhwok', 'https://pajhwok.com', 'agence d’information', 'anglais, persan']]],
  ['SAU', 'l’Arabie saoudite', 'arabe', [['Arab News', 'https://www.arabnews.com', P, 'anglais'], ['Saudi Gazette', 'https://saudigazette.com.sa', P, 'anglais'], ['SPA', 'https://www.spa.gov.sa', A, 'arabe, anglais']]],
  ['BHR', 'Bahreïn', 'arabe', [['Gulf Daily News', 'https://www.gdnonline.com', P, 'anglais'], ['BNA', 'https://www.bna.bh', A, 'arabe, anglais']]],
  ['BGD', 'le Bangladesh', 'anglais', [['The Daily Star', 'https://www.thedailystar.net', P, 'anglais'], ['Prothom Alo (anglais)', 'https://en.prothomalo.com', P, 'anglais'], ['Dhaka Tribune', 'https://www.dhakatribune.com', P, 'anglais']]],
  ['BTN', 'le Bhoutan', null, [['Kuensel', 'https://kuenselonline.com', 'quotidien national', 'anglais']]],
  ['MMR', 'la Birmanie', null, [['The Irrawaddy', 'https://www.irrawaddy.com', 'média indépendant en exil', 'anglais, birman'], ['Myanmar Now', 'https://myanmar-now.org', 'média indépendant', 'anglais, birman']]],
  ['BRN', 'Brunei', 'anglais', [['Borneo Bulletin', 'https://borneobulletin.com.bn', P, 'anglais']]],
  ['KHM', 'le Cambodge', null, [['Khmer Times', 'https://www.khmertimeskh.com', P, 'anglais'], ['The Phnom Penh Post', 'https://www.phnompenhpost.com', P, 'anglais']]],
  ['PRK', 'la Corée du Nord', null, []],
  ['IRQ', 'l’Irak', 'arabe', [['Rudaw', 'https://www.rudaw.net', 'groupe de presse privé', 'anglais, arabe, kurde'], ['Shafaq News', 'https://shafaq.com', 'média en ligne', 'anglais, arabe']]],
  ['IRN', 'l’Iran', 'persan', [['IranWire', 'https://iranwire.com', 'média indépendant en exil', 'anglais, persan'], ['Radio Farda', 'https://www.radiofarda.com', 'service de Radio Free Europe', 'persan'], ['Tehran Times', 'https://www.tehrantimes.com', 'quotidien proche du pouvoir', 'anglais']]],
  ['ISR', 'Israël', 'hebreu', [['The Times of Israel', 'https://www.timesofisrael.com', 'média en ligne privé', 'anglais'], ['Haaretz', 'https://www.haaretz.com', P, 'anglais, hébreu'], ['Kan News', 'https://www.kan.org.il', 'média public', 'hébreu']]],
  ['JOR', 'la Jordanie', 'arabe', [['The Jordan Times', 'https://www.jordantimes.com', P, 'anglais'], ['Petra', 'https://petra.gov.jo', A, 'arabe, anglais']]],
  ['KWT', 'le Koweït', 'arabe', [['Kuwait Times', 'https://kuwaittimes.com', P, 'anglais'], ['KUNA', 'https://www.kuna.net.kw', A, 'arabe, anglais']]],
  ['LAO', 'le Laos', null, [['The Laotian Times', 'https://laotiantimes.com', 'média en ligne privé', 'anglais'], ['Vientiane Times', 'https://www.vientianetimes.org.la', 'quotidien d’État', 'anglais']]],
  ['LBN', 'le Liban', 'arabe', [['L’Orient-Le Jour', 'https://www.lorientlejour.com', P, 'français'], ['Naharnet', 'https://www.naharnet.com', 'média en ligne', 'anglais'], ['NNA', 'https://nna-leb.gov.lb', A, 'arabe, anglais, français']]],
  ['MYS', 'la Malaisie', 'anglais', [['The Star', 'https://www.thestar.com.my', P, 'anglais'], ['Malaysiakini', 'https://www.malaysiakini.com', 'média en ligne indépendant', 'anglais, malais'], ['Bernama', 'https://www.bernama.com', A, 'anglais, malais']]],
  ['MDV', 'les Maldives', null, []],
  ['MNG', 'la Mongolie', null, [['Montsame', 'https://montsame.mn/en', A, 'anglais, mongol']]],
  ['NPL', 'le Népal', 'anglais', [['The Kathmandu Post', 'https://kathmandupost.com', P, 'anglais'], ['The Himalayan Times', 'https://thehimalayantimes.com', P, 'anglais']]],
  ['OMN', 'Oman', 'arabe', [['Times of Oman', 'https://timesofoman.com', P, 'anglais'], ['Oman Observer', 'https://www.omanobserver.om', P, 'anglais']]],
  ['PAK', 'le Pakistan', 'anglais', [['Dawn', 'https://www.dawn.com', P, 'anglais'], ['The News International', 'https://www.thenews.com.pk', P, 'anglais'], ['APP', 'https://www.app.com.pk', A, 'anglais']]],
  ['PHL', 'les Philippines', 'anglais', [['Philippine Daily Inquirer', 'https://www.inquirer.net', P, 'anglais'], ['Rappler', 'https://www.rappler.com', 'média en ligne indépendant', 'anglais'], ['PNA', 'https://www.pna.gov.ph', A, 'anglais']]],
  ['QAT', 'le Qatar', 'arabe', [['Al Jazeera', 'https://www.aljazeera.com', 'groupe de médias financé par l’État', 'anglais, arabe'], ['The Peninsula', 'https://thepeninsulaqatar.com', P, 'anglais'], ['Gulf Times', 'https://www.gulf-times.com', P, 'anglais']]],
  ['SGP', 'Singapour', 'anglais', [['The Straits Times', 'https://www.straitstimes.com', P, 'anglais'], ['CNA', 'https://www.channelnewsasia.com', 'chaîne d’information', 'anglais']]],
  ['LKA', 'le Sri Lanka', 'anglais', [['Daily Mirror', 'https://www.dailymirror.lk', P, 'anglais'], ['Daily FT', 'https://www.ft.lk', P, 'anglais'], ['EconomyNext', 'https://economynext.com', 'média en ligne', 'anglais']]],
  ['SYR', 'la Syrie', 'arabe', [['Enab Baladi', 'https://english.enabbaladi.net', 'média indépendant', 'anglais, arabe'], ['SANA', 'https://sana.sy/en', A, 'anglais, arabe']]],
  ['TLS', 'le Timor oriental', null, []],
  ['YEM', 'le Yémen', 'arabe', [['Yemen Times', 'https://www.yementimes.com', 'média en ligne', 'anglais']]],
  // Afrique
  ['ZAF', 'l’Afrique du Sud', 'anglais', [['News24', 'https://www.news24.com', 'média privé', 'anglais'], ['Mail & Guardian', 'https://mg.co.za', 'hebdomadaire privé', 'anglais'], ['Daily Maverick', 'https://www.dailymaverick.co.za', 'média en ligne', 'anglais'], ['SABC News', 'https://www.sabcnews.com', 'média public', 'anglais']]],
  ['DZA', 'l’Algérie', 'arabe', [['APS', 'https://www.aps.dz', A, 'français, arabe'], ['El Watan', 'https://elwatan-dz.com', P, 'français'], ['TSA', 'https://www.tsa-algerie.com', 'média en ligne', 'français']]],
  ['AGO', 'l’Angola', 'portugais', [['ANGOP', 'https://www.angop.ao', A, 'portugais'], ['Jornal de Angola', 'https://www.jornaldeangola.ao', 'quotidien public', 'portugais']]],
  ['BEN', 'le Bénin', null, [['La Nation', 'https://lanation.bj', 'quotidien public', 'français'], ['24 Heures au Bénin', 'https://24haubenin.info', 'média en ligne', 'français']]],
  ['BWA', 'le Botswana', 'anglais', [['Mmegi', 'https://www.mmegi.bw', P, 'anglais'], ['Botswana Guardian', 'https://www.botswanaguardian.co.bw', P, 'anglais']]],
  ['BFA', 'le Burkina Faso', null, [['Lefaso.net', 'https://lefaso.net', 'média en ligne', 'français'], ['Sidwaya', 'https://www.sidwaya.info', 'quotidien public', 'français']]],
  ['BDI', 'le Burundi', null, [['Iwacu', 'https://www.iwacu-burundi.org', 'média indépendant', 'français, kirundi']]],
  ['CMR', 'le Cameroun', null, [['Cameroon Tribune', 'https://www.cameroon-tribune.cm', 'quotidien public', 'français, anglais'], ['ActuCameroun', 'https://actucameroun.com', 'média en ligne', 'français']]],
  ['COM', 'les Comores', null, [['Al-Watwan', 'https://alwatwan.net', 'quotidien public', 'français']]],
  ['COG', 'le Congo', null, [['Les Dépêches de Brazzaville', 'https://www.lesdepechesdebrazzaville.fr', P, 'français']]],
  ['CIV', 'la Côte d’Ivoire', null, [['Fraternité Matin', 'https://www.fratmat.info', 'quotidien public', 'français'], ['Abidjan.net', 'https://news.abidjan.net', 'portail d’information', 'français']]],
  ['DJI', 'Djibouti', 'arabe', [['ADI', 'https://www.adi.dj', A, 'français']]],
  ['ERI', 'l’Érythrée', null, []],
  ['SWZ', 'l’Eswatini', 'anglais', [['Times of Eswatini', 'https://www.times.co.sz', P, 'anglais']]],
  ['ETH', 'l’Éthiopie', null, [['Addis Standard', 'https://addisstandard.com', 'média indépendant', 'anglais'], ['The Reporter', 'https://www.thereporterethiopia.com', 'hebdomadaire privé', 'anglais'], ['ENA', 'https://www.ena.et', A, 'anglais']]],
  ['GAB', 'le Gabon', null, [['Gabonreview', 'https://www.gabonreview.com', 'média en ligne', 'français'], ['L’Union', 'https://www.union.sonapresse.com', 'quotidien public', 'français']]],
  ['GMB', 'la Gambie', 'anglais', [['The Point', 'https://thepoint.gm', P, 'anglais'], ['The Standard', 'https://standard.gm', P, 'anglais'], ['Foroyaa', 'https://foroyaa.net', P, 'anglais']]],
  ['GHA', 'le Ghana', 'anglais', [['Graphic Online', 'https://www.graphic.com.gh', 'quotidien public', 'anglais'], ['MyJoyOnline', 'https://www.myjoyonline.com', 'média privé', 'anglais'], ['GhanaWeb', 'https://www.ghanaweb.com', 'portail d’information', 'anglais']]],
  ['GIN', 'la Guinée', null, [['Guinéenews', 'https://www.guineenews.org', 'média en ligne', 'français'], ['Africaguinee', 'https://www.africaguinee.com', 'média en ligne', 'français']]],
  ['GNQ', 'la Guinée équatoriale', null, []],
  ['GNB', 'la Guinée-Bissau', null, []],
  ['CPV', 'le Cap-Vert', 'portugais', [['A Semana', 'https://www.asemana.publ.cv', 'hebdomadaire privé', 'portugais'], ['Expresso das Ilhas', 'https://expressodasilhas.cv', 'média privé', 'portugais']]],
  ['KEN', 'le Kenya', 'swahili', [['Daily Nation', 'https://nation.africa/kenya', P, 'anglais'], ['The Standard', 'https://www.standardmedia.co.ke', P, 'anglais'], ['The Star', 'https://www.the-star.co.ke', P, 'anglais'], ['KBC', 'https://www.kbc.co.ke', 'média public', 'anglais, swahili']]],
  ['LSO', 'le Lesotho', 'anglais', [['Lesotho Times', 'https://lestimes.com', 'hebdomadaire privé', 'anglais']]],
  ['LBR', 'le Liberia', 'anglais', [['FrontPage Africa', 'https://frontpageafricaonline.com', 'média en ligne', 'anglais'], ['Daily Observer', 'https://liberianobserver.com', P, 'anglais']]],
  ['LBY', 'la Libye', 'arabe', [['The Libya Observer', 'https://libyaobserver.ly', 'média en ligne', 'anglais, arabe'], ['Libya Herald', 'https://libyaherald.com', 'média en ligne', 'anglais'], ['Al-Wasat', 'https://alwasat.ly', 'média en ligne', 'arabe']]],
  ['MWI', 'le Malawi', 'anglais', [['Nyasa Times', 'https://www.nyasatimes.com', 'média en ligne', 'anglais'], ['The Nation', 'https://mwnation.com', P, 'anglais']]],
  ['MLI', 'le Mali', null, [['Maliweb', 'https://www.maliweb.net', 'portail d’information', 'français']]],
  ['MRT', 'la Mauritanie', 'arabe', [['Cridem', 'https://cridem.org', 'portail d’information', 'français, arabe'], ['AMI', 'https://www.ami.mr', A, 'arabe, français']]],
  ['MOZ', 'le Mozambique', 'portugais', [['O País', 'https://opais.co.mz', 'média privé', 'portugais'], ['Carta de Moçambique', 'https://cartamz.com', 'média en ligne', 'portugais']]],
  ['NAM', 'la Namibie', 'anglais', [['The Namibian', 'https://www.namibian.com.na', P, 'anglais'], ['New Era', 'https://neweralive.na', 'quotidien public', 'anglais']]],
  ['NER', 'le Niger', null, [['ActuNiger', 'https://www.actuniger.com', 'média en ligne', 'français'], ['Le Sahel', 'https://www.lesahel.org', 'quotidien public', 'français']]],
  ['NGA', 'le Nigeria', 'anglais', [['Punch', 'https://punchng.com', P, 'anglais'], ['Premium Times', 'https://www.premiumtimesng.com', 'média en ligne indépendant', 'anglais'], ['Vanguard', 'https://www.vanguardngr.com', P, 'anglais'], ['Channels TV', 'https://www.channelstv.com', 'chaîne privée', 'anglais']]],
  ['UGA', 'l’Ouganda', 'swahili', [['Daily Monitor', 'https://www.monitor.co.ug', P, 'anglais'], ['New Vision', 'https://www.newvision.co.ug', 'quotidien public', 'anglais'], ['Nile Post', 'https://nilepost.co.ug', 'média en ligne', 'anglais']]],
  ['CAF', 'la République centrafricaine', null, [['Radio Ndeke Luka', 'https://www.radiondekeluka.org', 'radio indépendante', 'français, sango']]],
  ['COD', 'la République démocratique du Congo', null, [['Actualite.cd', 'https://actualite.cd', 'média en ligne', 'français'], ['Radio Okapi', 'https://www.radiookapi.net', 'radio de l’ONU', 'français']]],
  ['RWA', 'le Rwanda', null, [['The New Times', 'https://www.newtimes.co.rw', P, 'anglais'], ['IGIHE', 'https://en.igihe.com', 'média en ligne', 'anglais']]],
  ['STP', 'Sao Tomé-et-Principe', 'portugais', []],
  ['SYC', 'les Seychelles', 'anglais', [['Seychelles Nation', 'https://www.nation.sc', 'quotidien public', 'anglais, français']]],
  ['SLE', 'la Sierra Leone', 'anglais', [['Sierraloaded', 'https://www.sierraloaded.sl', 'média en ligne', 'anglais'], ['Sierra Leone Telegraph', 'https://www.thesierraleonetelegraph.com', 'média en ligne', 'anglais']]],
  ['SOM', 'la Somalie', null, [['Hiiraan Online', 'https://www.hiiraan.com', 'portail d’information', 'anglais, somali'], ['Garowe Online', 'https://www.garoweonline.com', 'média en ligne', 'anglais']]],
  ['SDN', 'le Soudan', 'arabe', [['Sudan Tribune', 'https://sudantribune.com', 'média en ligne', 'anglais, français'], ['Dabanga', 'https://www.dabangasudan.org', 'média indépendant', 'anglais, arabe']]],
  ['SSD', 'le Soudan du Sud', 'anglais', [['Radio Tamazuj', 'https://radiotamazuj.org', 'radio indépendante', 'anglais, arabe'], ['Eye Radio', 'https://eyeradio.org', 'radio privée', 'anglais']]],
  ['TZA', 'la Tanzanie', 'swahili', [['The Citizen', 'https://www.thecitizen.co.tz', P, 'anglais'], ['Daily News', 'https://dailynews.co.tz', 'quotidien public', 'anglais'], ['Mwananchi', 'https://www.mwananchi.co.tz', P, 'swahili']]],
  ['TCD', 'le Tchad', null, [['Alwihda Info', 'https://www.alwihdainfo.com', 'média en ligne', 'français, arabe'], ['Tchadinfos', 'https://tchadinfos.com', 'média en ligne', 'français']]],
  ['TGO', 'le Togo', null, [['Republicoftogo.com', 'https://www.republicoftogo.com', 'média en ligne', 'français'], ['Togo Breaking News', 'https://www.togobreakingnews.info', 'média en ligne', 'français']]],
  ['TUN', 'la Tunisie', 'arabe', [['La Presse de Tunisie', 'https://lapresse.tn', 'quotidien', 'français'], ['Nawaat', 'https://nawaat.org', 'média indépendant', 'français, arabe'], ['TAP', 'https://www.tap.info.tn', A, 'français, arabe'], ['Business News', 'https://www.businessnews.com.tn', 'média en ligne', 'français']]],
  ['ZMB', 'la Zambie', 'anglais', [['Zambia Daily Mail', 'https://www.daily-mail.co.zm', 'quotidien public', 'anglais'], ['News Diggers', 'https://diggers.news', 'média en ligne', 'anglais'], ['Lusaka Times', 'https://www.lusakatimes.com', 'média en ligne', 'anglais']]],
  ['ZWE', 'le Zimbabwe', 'anglais', [['The Herald', 'https://www.herald.co.zw', 'quotidien d’État', 'anglais'], ['NewsDay', 'https://www.newsday.co.zw', P, 'anglais'], ['ZimLive', 'https://www.zimlive.com', 'média en ligne', 'anglais']]],
  // Europe
  ['AND', 'Andorre', null, [['Diari d’Andorra', 'https://www.diariandorra.ad', P, 'catalan'], ['Bondia', 'https://www.bondia.ad', P, 'catalan']]],
  ['BIH', 'la Bosnie-Herzégovine', 'croate', [['N1 BiH', 'https://n1info.ba', 'chaîne d’information', 'bosniaque, croate, serbe'], ['Klix.ba', 'https://www.klix.ba', 'portail d’information', 'bosniaque'], ['Oslobođenje', 'https://www.oslobodjenje.ba', P, 'bosniaque']]],
  ['CYP', 'Chypre', 'grec', [['Cyprus Mail', 'https://cyprus-mail.com', P, 'anglais'], ['In-Cyprus', 'https://in-cyprus.philenews.com', 'média en ligne', 'anglais'], ['CNA', 'https://www.cna.org.cy', A, 'grec, anglais']]],
  ['LIE', 'le Liechtenstein', 'allemand', [['Vaterland', 'https://www.vaterland.li', P, 'allemand'], ['Liechtensteiner Volksblatt', 'https://www.volksblatt.li', P, 'allemand']]],
  ['LUX', 'le Luxembourg', 'allemand', [['Luxembourg Times', 'https://www.luxtimes.lu', P, 'anglais'], ['Luxemburger Wort', 'https://www.wort.lu', P, 'allemand, français'], ['RTL Luxembourg', 'https://www.rtl.lu', 'chaîne privée', 'luxembourgeois, français'], ['Le Quotidien', 'https://lequotidien.lu', P, 'français']]],
  ['MKD', 'la Macédoine du Nord', null, [['MIA', 'https://mia.mk', A, 'macédonien, anglais'], ['Meta.mk', 'https://meta.mk', 'média en ligne', 'macédonien']]],
  ['MLT', 'Malte', 'anglais', [['Times of Malta', 'https://timesofmalta.com', P, 'anglais'], ['The Malta Independent', 'https://www.independent.com.mt', P, 'anglais'], ['TVM News', 'https://tvmnews.mt', 'média public', 'anglais, maltais']]],
  ['MCO', 'Monaco', null, [['Monaco-Matin', 'https://www.monacomatin.mc', P, 'français']]],
  ['MNE', 'le Monténégro', 'croate', [['Vijesti', 'https://www.vijesti.me', P, 'monténégrin'], ['CdM', 'https://www.cdm.me', 'portail d’information', 'monténégrin'], ['RTCG', 'https://www.rtcg.me', 'média public', 'monténégrin']]],
  ['SMR', 'Saint-Marin', 'italien', [['San Marino RTV', 'https://www.sanmarinortv.sm', 'média public', 'italien']]],
  ['SVK', 'la Slovaquie', null, [['SME', 'https://www.sme.sk', P, 'slovaque'], ['Denník N', 'https://dennikn.sk', P, 'slovaque'], ['TASR', 'https://www.tasr.sk', A, 'slovaque']]],
  ['SVN', 'la Slovénie', null, [['Delo', 'https://www.delo.si', P, 'slovène'], ['24ur', 'https://www.24ur.com', 'portail d’information', 'slovène'], ['RTV Slovenija', 'https://www.rtvslo.si', 'média public', 'slovène'], ['STA', 'https://english.sta.si', A, 'anglais']]],
  ['VAT', 'le Vatican', 'italien', [['Vatican News', 'https://www.vaticannews.va', 'média officiel du Saint-Siège', 'français, italien et autres'], ['L’Osservatore Romano', 'https://www.osservatoreromano.va', 'quotidien du Saint-Siège', 'italien']]],
  // Amériques
  ['ATG', 'Antigua-et-Barbuda', 'anglais', [['Antigua Observer', 'https://antiguaobserver.com', P, 'anglais']]],
  ['ARG', 'l’Argentine', 'espagnol', [['Clarín', 'https://www.clarin.com', P, 'espagnol'], ['La Nación', 'https://www.lanacion.com.ar', P, 'espagnol'], ['Página/12', 'https://www.pagina12.com.ar', P, 'espagnol'], ['Infobae', 'https://www.infobae.com', 'média en ligne', 'espagnol']]],
  ['BHS', 'les Bahamas', 'anglais', [['The Tribune', 'https://www.tribune242.com', P, 'anglais'], ['The Nassau Guardian', 'https://thenassauguardian.com', P, 'anglais']]],
  ['BRB', 'la Barbade', 'anglais', [['Barbados Today', 'https://barbadostoday.bb', 'média en ligne', 'anglais'], ['Nation News', 'https://nationnews.com', P, 'anglais']]],
  ['BLZ', 'le Belize', 'anglais', [['Amandala', 'https://amandala.com.bz', 'hebdomadaire privé', 'anglais'], ['Breaking Belize News', 'https://www.breakingbelizenews.com', 'média en ligne', 'anglais']]],
  ['BOL', 'la Bolivie', 'espagnol', [['Los Tiempos', 'https://www.lostiempos.com', P, 'espagnol'], ['El Deber', 'https://eldeber.com.bo', P, 'espagnol'], ['Opinión', 'https://www.opinion.com.bo', P, 'espagnol']]],
  ['CHL', 'le Chili', 'espagnol', [['La Tercera', 'https://www.latercera.com', P, 'espagnol'], ['BioBioChile', 'https://www.biobiochile.cl', 'média en ligne', 'espagnol'], ['24 Horas (TVN)', 'https://www.24horas.cl', 'chaîne publique', 'espagnol']]],
  ['COL', 'la Colombie', 'espagnol', [['El Tiempo', 'https://www.eltiempo.com', P, 'espagnol'], ['El Espectador', 'https://www.elespectador.com', P, 'espagnol'], ['Semana', 'https://www.semana.com', 'magazine privé', 'espagnol'], ['RTVC Noticias', 'https://www.rtvcnoticias.com', 'média public', 'espagnol']]],
  ['CRI', 'le Costa Rica', 'espagnol', [['La Nación', 'https://www.nacion.com', P, 'espagnol'], ['CRHoy', 'https://crhoy.com', 'média en ligne', 'espagnol'], ['The Tico Times', 'https://ticotimes.net', 'média en ligne', 'anglais']]],
  ['CUB', 'Cuba', 'espagnol', [['14ymedio', 'https://www.14ymedio.com', 'média indépendant (basé à l’étranger)', 'espagnol'], ['CiberCuba', 'https://www.cibercuba.com', 'média en ligne (basé à l’étranger)', 'espagnol'], ['Granma', 'https://www.granma.cu', 'organe du Parti communiste', 'espagnol']]],
  ['DMA', 'la Dominique', 'anglais', [['Dominica News Online', 'https://dominicanewsonline.com', 'média en ligne', 'anglais']]],
  ['ECU', 'l’Équateur', 'espagnol', [['El Universo', 'https://www.eluniverso.com', P, 'espagnol'], ['El Comercio', 'https://www.elcomercio.com', P, 'espagnol'], ['Primicias', 'https://www.primicias.ec', 'média en ligne', 'espagnol']]],
  ['GRD', 'la Grenade', 'anglais', [['NOW Grenada', 'https://www.nowgrenada.com', 'média en ligne', 'anglais']]],
  ['GTM', 'le Guatemala', 'espagnol', [['Prensa Libre', 'https://www.prensalibre.com', P, 'espagnol'], ['Plaza Pública', 'https://www.plazapublica.com.gt', 'média en ligne', 'espagnol'], ['Nómada', 'https://nomada.gt', 'média en ligne', 'espagnol']]],
  ['GUY', 'le Guyana', 'anglais', [['Stabroek News', 'https://www.stabroeknews.com', P, 'anglais'], ['Kaieteur News', 'https://www.kaieteurnewsonline.com', P, 'anglais'], ['Guyana Chronicle', 'https://guyanachronicle.com', 'quotidien public', 'anglais']]],
  ['HTI', 'Haïti', null, [['Le Nouvelliste', 'https://lenouvelliste.com', P, 'français'], ['AlterPresse', 'https://www.alterpresse.org', 'agence en ligne', 'français']]],
  ['HND', 'le Honduras', 'espagnol', [['La Prensa', 'https://www.laprensa.hn', P, 'espagnol'], ['El Heraldo', 'https://www.elheraldo.hn', P, 'espagnol'], ['La Tribuna', 'https://www.latribuna.hn', P, 'espagnol']]],
  ['JAM', 'la Jamaïque', 'anglais', [['The Gleaner', 'https://jamaica-gleaner.com', P, 'anglais'], ['Jamaica Observer', 'https://www.jamaicaobserver.com', P, 'anglais']]],
  ['NIC', 'le Nicaragua', 'espagnol', [['Confidencial', 'https://confidencial.digital', 'média indépendant (basé à l’étranger)', 'espagnol'], ['La Prensa', 'https://www.laprensani.com', P, 'espagnol']]],
  ['PAN', 'le Panama', 'espagnol', [['La Prensa', 'https://www.prensa.com', P, 'espagnol'], ['La Estrella de Panamá', 'https://www.laestrella.com.pa', P, 'espagnol'], ['Panamá América', 'https://www.panamaamerica.com.pa', P, 'espagnol']]],
  ['PRY', 'le Paraguay', 'espagnol', [['ABC Color', 'https://www.abc.com.py', P, 'espagnol'], ['Última Hora', 'https://www.ultimahora.com', P, 'espagnol'], ['La Nación', 'https://www.lanacion.com.py', P, 'espagnol']]],
  ['PER', 'le Pérou', 'espagnol', [['El Comercio', 'https://elcomercio.pe', P, 'espagnol'], ['La República', 'https://larepublica.pe', P, 'espagnol'], ['RPP', 'https://rpp.pe', 'radio privée', 'espagnol']]],
  ['DOM', 'la République dominicaine', 'espagnol', [['Listín Diario', 'https://listindiario.com', P, 'espagnol'], ['Diario Libre', 'https://www.diariolibre.com', P, 'espagnol'], ['Hoy', 'https://hoy.com.do', P, 'espagnol']]],
  ['KNA', 'Saint-Christophe-et-Niévès', 'anglais', []],
  ['VCT', 'Saint-Vincent-et-les-Grenadines', 'anglais', [['iWitness News', 'https://www.iwnsvg.com', 'média en ligne', 'anglais'], ['Searchlight', 'https://www.searchlight.vc', 'hebdomadaire privé', 'anglais']]],
  ['LCA', 'Sainte-Lucie', 'anglais', [['St Lucia Times', 'https://stluciatimes.com', 'média en ligne', 'anglais'], ['The Voice', 'https://thevoiceslu.com', 'journal privé', 'anglais']]],
  ['SLV', 'le Salvador', 'espagnol', [['La Prensa Gráfica', 'https://www.laprensagrafica.com', P, 'espagnol'], ['El Diario de Hoy', 'https://www.elsalvador.com', P, 'espagnol'], ['El Faro', 'https://elfaro.net', 'média en ligne indépendant', 'espagnol']]],
  ['SUR', 'le Suriname', 'neerlandais', [['De Ware Tijd', 'https://dwtonline.com', P, 'néerlandais'], ['Starnieuws', 'https://www.starnieuws.com', 'média en ligne', 'néerlandais'], ['Suriname Herald', 'https://www.srherald.com', 'média en ligne', 'néerlandais']]],
  ['TTO', 'Trinité-et-Tobago', 'anglais', [['Trinidad & Tobago Guardian', 'https://www.guardian.co.tt', P, 'anglais'], ['Trinidad Express', 'https://trinidadexpress.com', P, 'anglais'], ['Newsday', 'https://newsday.co.tt', P, 'anglais']]],
  ['URY', 'l’Uruguay', 'espagnol', [['El País', 'https://www.elpais.com.uy', P, 'espagnol'], ['El Observador', 'https://www.elobservador.com.uy', P, 'espagnol'], ['la diaria', 'https://ladiaria.com.uy', P, 'espagnol']]],
  ['VEN', 'le Venezuela', 'espagnol', [['Efecto Cocuyo', 'https://efectococuyo.com', 'média en ligne indépendant', 'espagnol'], ['El Nacional', 'https://www.elnacional.com', 'média en ligne', 'espagnol'], ['Tal Cual', 'https://talcualdigital.com', 'média en ligne', 'espagnol']]],
  // Océanie
  ['FJI', 'les Fidji', 'anglais', [['The Fiji Times', 'https://www.fijitimes.com', P, 'anglais'], ['Fiji Sun', 'https://fijisun.com.fj', P, 'anglais'], ['FBC News', 'https://www.fbcnews.com.fj', 'média public', 'anglais']]],
  ['MHL', 'les Îles Marshall', 'anglais', [['Marshall Islands Journal', 'https://marshallislandsjournal.com', 'hebdomadaire privé', 'anglais']]],
  ['SLB', 'les Îles Salomon', 'anglais', [['Solomon Star', 'https://www.solomonstarnews.com', P, 'anglais']]],
  ['KIR', 'Kiribati', 'anglais', []],
  ['FSM', 'la Micronésie', 'anglais', []],
  ['NRU', 'Nauru', 'anglais', []],
  ['PLW', 'Palaos', 'anglais', [['Island Times', 'https://islandtimes.org', 'journal privé', 'anglais']]],
  ['PNG', 'la Papouasie-Nouvelle-Guinée', 'anglais', [['Post-Courier', 'https://postcourier.com.pg', P, 'anglais'], ['The National', 'https://www.thenational.com.pg', P, 'anglais']]],
  ['WSM', 'Samoa', 'anglais', [['Samoa Observer', 'https://www.samoaobserver.ws', P, 'anglais']]],
  ['TON', 'les Tonga', 'anglais', [['Matangi Tonga', 'https://matangitonga.to', 'média en ligne', 'anglais']]],
  ['TUV', 'Tuvalu', 'anglais', []],
  ['VUT', 'le Vanuatu', 'anglais', [['Vanuatu Daily Post', 'https://www.dailypost.vu', P, 'anglais']]],
];

// Pays dont l'usage courant diffère de la règle (« en Israël » et non « à Israël »)
const LIEU_SPECIAL: Record<string, string> = { ISR: 'en Israël', AND: 'en Andorre' };
const lieuDe = (iso: string, article: string) => {
  if (LIEU_SPECIAL[iso]) return LIEU_SPECIAL[iso];
  if (article.startsWith('le ')) return `au ${article.slice(3)}`;
  if (article.startsWith('la ')) return `en ${article.slice(3)}`;
  if (article.startsWith('l’')) return `en ${article.slice(2)}`;
  if (article.startsWith('les ')) return `aux ${article.slice(4)}`;
  return `à ${article}`;
};

const COULEURS: Record<string, string> = { Afrique: '#7a4b12', Amériques: '#1f5f3f', Asie: '#7a1f3d', Europe: '#1d3a7a', Océanie: '#0e6a7a' };

type Fiche = (typeof fiches)[number];

const construire = ([iso, article, cle, medias]: Ligne): PaysComplet => {
  const f = (fiches as Fiche[]).find((x) => x.iso === iso);
  if (!f) throw new Error(`Pays inconnu : ${iso}`);
  const p = cle ? PACKS[cle] : null;
  if (cle && !p) throw new Error(`Support de leçons inconnu : ${cle}`);
  const D = f.diplo ? diplo(f.diplo.slug) : GENERIQUE;
  const lieu = lieuDe(iso, article);
  const monnaie = f.devises.map((d) => d.nom).join(' / ') || 'monnaie locale';
  const langues = f.langues.map((l) => l.nom).join(', ');
  const entree = ENTREES[iso];
  const sourceOfficielle = { label: `Ministère de l’Europe et des Affaires étrangères, fiche ${f.nom} (entrée et séjour)`, url: D.entree, nature: 'source officielle' };
  const sectionEntree: Section = entree
    ? {
        id: 'entree',
        titre: entree.titre ?? 'Entrée et séjour',
        badge: { type: 'warn', texte: 'À confirmer' },
        blocs: [
          { type: 'liste', items: entree.items },
          ...(entree.alerte ? [{ type: 'alerte' as const, warn: true, titre: 'À vérifier avant de partir', html: entree.alerte }] : []),
        ],
        sources: [sourceOfficielle, ...(entree.sources ?? [])],
      }
    : {
        id: 'entree',
        titre: 'Entrée et séjour',
        badge: { type: 'warn', texte: 'À documenter' },
        blocs: [{ type: 'alerte', warn: true, titre: 'Formalités non documentées', html: `Les formalités d’entrée pour ${f.nom} n’ont pas encore été vérifiées ici. Lisez la fiche « Entrée et séjour » du ministère avant de partir : visa, passeport, vaccins et assurance y sont indiqués.` }],
        sources: [sourceOfficielle],
      };
  return {
    complet: true,
    test: true,
    iso,
    slug: f.slug,
    nom: f.nom,
    article,
    accroche: `${f.sousRegion || f.region} : fiche beta. L’entrée, la sécurité et la monnaie renvoient aux sources officielles ; le reste reste à documenter.`,
    couleur: COULEURS[f.region] ?? '#2b3a55',
    langue: p?.langue ?? { nom: f.langues[0]?.nom ?? 'langue locale', code: f.langues[0]?.code ?? '' },
    devise: monnaie,
    conseilsVoyageurs: D.securite,
    verifie: '5 novembre 2026',
    mediasLocaux: medias.map(([nom, url, nature, langue]): Media => ({ nom, url, nature, langue })),
    rubriques: rubriquesType({
      lieu,
      monnaie: `la monnaie locale (${monnaie})`,
      introVoyager: entree?.intro ?? `Les formalités d’entrée pour ce pays n’ont pas encore été vérifiées ici. La fiche officielle du ministère reste la référence pour la sécurité et l’entrée.`,
      securite: {
        id: 'securite',
        titre: 'Sécurité et conseils officiels',
        badge: { type: 'warn', texte: 'À documenter' },
        blocs: [{ type: 'alerte', warn: true, titre: 'Fiche officielle à lire', html: `Ce site ne détaille pas la situation de sécurité de ${f.nom}. Lisez la fiche du ministère : elle liste les risques à jour, les zones à éviter et les numéros d’urgence.` }],
        sources: [{ label: `Ministère de l’Europe et des Affaires étrangères, fiche ${f.nom} (sécurité)`, url: D.securite, nature: 'source officielle' }],
      },
      entree: sectionEntree,
      introLangue: p
        ? `Langue(s) du pays : ${langues}. Les leçons donnent les bases du ${p.langue.nom}. ${p.note}`
        : `Langue(s) du pays : ${langues || 'non renseignée'}. Les leçons de langue ne sont pas encore disponibles pour ce pays.`,
      langue: [],
    }),
    lecons: p?.lecons ?? [],
    sourcesSupplementaires: [],
  };
};

export const guidesMonde: PaysComplet[] = L.map(construire);
