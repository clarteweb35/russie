import type { TraductionsLecons } from './modele';

// Leçons partagées par les pays d'une même langue (espagnol, portugais, arabe, swahili, persan, hébreu).
// Prononciations approximatives, à faire relire par un locuteur.

export const ESPAGNOL: TraductionsLecons = {
  salutations: [['Hola', 'ola'], ['Buenas noches', 'bouénass notchèss'], ['Gracias', 'grassiass'], ['Por favor', 'por favor'], ['Disculpe', 'diskoulpé'], ['Sí', 'si'], ['No', 'no'], ['Adiós', 'adioss']],
  presenter: [['Me llamo…', 'mé yamo'], ['Soy de Francia', 'soï dé franssia'], ['Hablo un poco de español', 'ablo oun poko dé espagnol'], ['¿Habla inglés?', 'abla inglèss'], ['No entendí', 'no entendi']],
  chiffres: [['uno', 'ouno'], ['dos', 'doss'], ['tres', 'tress'], ['cinco', 'sinko'], ['diez', 'diéss'], ['¿Cuánto cuesta?', 'couanto couesta']],
  deplacer: [['¿Dónde está…?', 'donndé esta'], ['La estación', 'la estassion'], ['El aeropuerto', 'èl aéropouerto'], ['Un boleto', 'oun boléto'], ['A la izquierda', 'a la iskierda'], ['A la derecha', 'a la dérétcha'], ['Todo derecho', 'todo dérétcho']],
  resto: [['Una mesa para dos', 'ouna mésa para doss'], ['El menú, por favor', 'èl ménou por favor'], ['Agua', 'agoua'], ['Café', 'kafé'], ['La cuenta, por favor', 'la couenta por favor'], ['Quisiera…', 'kissièra']],
  urgences: [['¡Ayuda!', 'ayouda'], ['¡Llame a la policía!', 'yamé a la polissia'], ['¡Llame a una ambulancia!', 'yamé a ouna ambouliancia'], ['Necesito un médico', 'nécessito oun médico'], ['Estoy perdido', 'estoï pèrdido'], ['¿Dónde hay una farmacia?', 'donndé aï ouna farmassia']],
};

export const PORTUGAIS: TraductionsLecons = {
  salutations: [['Olá', 'ola'], ['Boa noite', 'boa noïtchi'], ['Obrigado', 'obrigadou'], ['Por favor', 'pour favor'], ['Com licença', 'kom lissènça'], ['Sim', 'sim'], ['Não', 'nãou'], ['Tchau', 'tchaou']],
  presenter: [['Meu nome é…', 'mèou nomi é'], ['Eu sou da França', 'èou sô da frança'], ['Falo um pouco de português', 'falou oum pôkou dji portougués'], ['Você fala inglês?', 'vocè fala inglés'], ['Não entendi', 'nãou entendji']],
  chiffres: [['um', 'oum'], ['dois', 'doïs'], ['três', 'très'], ['cinco', 'sinkou'], ['dez', 'dès'], ['Quanto custa?', 'kouantou koustâ']],
  deplacer: [['Onde fica…?', 'ondji fika'], ['A estação', 'a ichtaçãou'], ['O aeroporto', 'ou aéroportou'], ['Uma passagem', 'ouma passajèm'], ['À esquerda', 'a ichkèrda'], ['À direita', 'a djirèïta'], ['Em frente', 'èm frèntchi']],
  resto: [['Uma mesa para dois', 'ouma méza para doïs'], ['O cardápio, por favor', 'ou kardapiou pour favor'], ['Água', 'agoua'], ['Café', 'kafé'], ['A conta, por favor', 'a konta pour favor'], ['Eu gostaria de…', 'èou goustaria dji']],
  urgences: [['Socorro!', 'sokorrou'], ['Chame a polícia!', 'chami a polissia'], ['Chame uma ambulância!', 'chami ouma ambouLansia'], ['Preciso de um médico', 'précizou dji oum médikou'], ['Estou perdido', 'ichtô pèrdjidou'], ['Onde fica a farmácia?', 'ondji fika a farmassia']],
};

export const ARABE: TraductionsLecons = {
  salutations: [['مرحبا', 'marhaba'], ['مساء الخير', 'massa al-khaïr'], ['شكرا', 'choukran'], ['من فضلك', 'min fadlak'], ['عفوا', 'afwan'], ['نعم', 'naam'], ['لا', 'la'], ['مع السلامة', 'maa salama']],
  presenter: [['اسمي…', 'ismi'], ['أنا من فرنسا', 'ana min faransa'], ['أتكلم القليل من العربية', 'atakallam al-qalil min al-arabiya'], ['هل تتكلم الإنجليزية؟', 'hal tatakallam al-ingliziya'], ['لم أفهم', 'lam afham']],
  chiffres: [['واحد', 'wahid'], ['اثنان', 'ithnan'], ['ثلاثة', 'thalatha'], ['خمسة', 'khamsa'], ['عشرة', 'achara'], ['بكم هذا؟', 'bikam hada']],
  deplacer: [['أين…؟', 'ayna'], ['محطة القطار', 'mahattat al-qitar'], ['المطار', 'al-matar'], ['تذكرة', 'tadhkira'], ['يسار', 'yassar'], ['يمين', 'yamin'], ['على طول', 'ala toul']],
  resto: [['طاولة لشخصين', 'tawila li-chakhsayn'], ['القائمة من فضلك', 'al-qa’ima min fadlak'], ['ماء', 'maa'], ['قهوة', 'qahwa'], ['الحساب من فضلك', 'al-hissab min fadlak'], ['أريد…', 'ouridou']],
  urgences: [['النجدة!', 'an-najda'], ['اتصل بالشرطة!', 'ittassil bi-chourta'], ['اتصل بالإسعاف!', 'ittassil bi-l-issaf'], ['أحتاج إلى طبيب', 'ahtaj ila tabib'], ['أنا ضائع', 'ana daï’'], ['أين الصيدلية؟', 'ayna as-saydaliya']],
};

export const SWAHILI: TraductionsLecons = {
  salutations: [['Jambo', 'djambo'], ['Habari za jioni', 'habari za djioni'], ['Asante', 'assanté'], ['Tafadhali', 'tafadhali'], ['Samahani', 'samahani'], ['Ndiyo', 'ndiyo'], ['Hapana', 'hapana'], ['Kwaheri', 'kwahéri']],
  presenter: [['Ninaitwa…', 'ninaïtwa'], ['Ninatoka Ufaransa', 'ninatoka oufaransa'], ['Ninasema Kiswahili kidogo', 'ninassèma kiswahili kidogo'], ['Unaongea Kiingereza?', 'ounaongéa kiinguéréza'], ['Sielewi', 'siélèwi']],
  chiffres: [['moja', 'modja'], ['mbili', 'mbili'], ['tatu', 'tatou'], ['tano', 'tano'], ['kumi', 'koumi'], ['Bei gani?', 'bèï gani']],
  deplacer: [['Wapi…?', 'wapi'], ['Kituo cha treni', 'kitouo tcha trèni'], ['Uwanja wa ndege', 'ouwandja wa ndégué'], ['Tiketi', 'tikéti'], ['Kushoto', 'kouchoto'], ['Kulia', 'koulia'], ['Moja kwa moja', 'modja kwa modja']],
  resto: [['Meza ya watu wawili', 'méza ya watou wawili'], ['Menyu tafadhali', 'ménieu tafadhali'], ['Maji', 'madji'], ['Kahawa', 'kahawa'], ['Bili tafadhali', 'bili tafadhali'], ['Ningependa…', 'ningupénda']],
  urgences: [['Msaada!', 'msaada'], ['Piga simu polisi!', 'piga simou polissi'], ['Piga simu gari la wagonjwa!', 'piga simou gari la wagondja'], ['Ninahitaji daktari', 'ninahitadji daktari'], ['Nimepotea', 'nimépotéa'], ['Duka la dawa liko wapi?', 'douka la dawa liko wapi']],
};

export const PERSAN: TraductionsLecons = {
  salutations: [['سلام', 'salâm'], ['شب بخیر', 'chab békhéir'], ['ممنون', 'mamnoun'], ['لطفاً', 'lotfan'], ['ببخشید', 'bébakhchid'], ['بله', 'balé'], ['نه', 'na'], ['خداحافظ', 'khodâhâfèz']],
  presenter: [['اسم من … است', 'esm-é man … ast'], ['من اهل فرانسه هستم', 'man ahl-é farânsé hastam'], ['کمی فارسی بلدم', 'kami fârsi baladam'], ['انگلیسی صحبت می‌کنید؟', 'engélissi sohbat mikonid'], ['نمی‌فهمم', 'namifahmam']],
  chiffres: [['یک', 'yèk'], ['دو', 'do'], ['سه', 'sé'], ['پنج', 'pandj'], ['ده', 'dah'], ['قیمتش چقدر است؟', 'gheymatèch tchéghadr ast']],
  deplacer: [['… کجاست؟', 'kodjâst'], ['ایستگاه', 'istgâh'], ['فرودگاه', 'foroudgâh'], ['بلیط', 'bélit'], ['چپ', 'tchap'], ['راست', 'râst'], ['مستقیم', 'moustaghim']],
  resto: [['یک میز برای دو نفر', 'yèk miz barâyé do nafar'], ['منو، لطفاً', 'ménou lotfan'], ['آب', 'âb'], ['قهوه', 'ghahvé'], ['صورتحساب، لطفاً', 'sourat-hessâb lotfan'], ['… می‌خواهم', 'mikhâham']],
  urgences: [['کمک!', 'komak'], ['پلیس را صدا کنید!', 'polis râ sédâ konid'], ['آمبولانس خبر کنید!', 'âmboulâns khabar konid'], ['به دکتر نیاز دارم', 'bé doktor niyâz dâram'], ['گم شده‌ام', 'goum chodéam'], ['داروخانه کجاست؟', 'dârou-khâné kodjâst']],
};

export const HEBREU: TraductionsLecons = {
  salutations: [['שלום', 'chalom'], ['ערב טוב', 'érèv tov'], ['תודה', 'toda'], ['בבקשה', 'bévakacha'], ['סליחה', 'slikha'], ['כן', 'kèn'], ['לא', 'lo'], ['להתראות', 'léhitraot']],
  presenter: [['שמי…', 'chmi'], ['אני מצרפת', 'ani mitsarfat'], ['אני מדבר קצת עברית', 'ani médabèr kètsat ivrit'], ['אתה מדבר אנגלית?', 'ata médabèr anglit'], ['לא הבנתי', 'lo héwanti']],
  chiffres: [['אחד', 'èkhad'], ['שניים', 'chtayim'], ['שלוש', 'chaloch'], ['חמש', 'khamèch'], ['עשר', 'èssèr'], ['כמה זה עולה?', 'kama zé olé']],
  deplacer: [['איפה…?', 'èfo'], ['תחנת הרכבת', 'takhanat harakèvèt'], ['שדה התעופה', 'sdé hatéoufa'], ['כרטיס', 'kartiss'], ['שמאלה', 'smola'], ['ימינה', 'yamina'], ['ישר', 'yachar']],
  resto: [['שולחן לשניים', 'choulkhan lichnayim'], ['תפריט, בבקשה', 'tafrit bévakacha'], ['מים', 'mayim'], ['קפה', 'kafé'], ['חשבון, בבקשה', 'khèchbon bévakacha'], ['אני רוצה…', 'ani rotsé']],
  urgences: [['עזרה!', 'èzra'], ['תזמינו משטרה!', 'tazmino michtara'], ['תזמינו אמבולנס!', 'tazmino amboulans'], ['אני צריך רופא', 'ani tsarikh rofé'], ['הלכתי לאיבוד', 'halakhti léèvoud'], ['איפה בית המרקחת?', 'èfo bèt hamirkakhat']],
};
