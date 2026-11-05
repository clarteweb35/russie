import type { TraductionsLecons } from './modele';

// Leçons d'anglais communes aux pays anglophones (États-Unis, Canada, Australie, Nouvelle-Zélande, Maurice) :
// une seule source, pour ne pas recopier les mêmes phrases dans chaque pays.
export const LECONS_ANGLAIS: TraductionsLecons = {
  salutations: [['Hello', 'hélo'], ['Good evening', 'goud ivnigne'], ['Thank you', 'sank you'], ['Please', 'pliz'], ['Excuse me', 'ekskiouz mi'], ['Yes', 'yèss'], ['No', 'nô'], ['Goodbye', 'goud baï']],
  presenter: [['My name is…', 'maï néïm iz'], ['I’m from France', 'aïm from frans'], ['I speak a little English', 'aï spik e litl inglich', 'Je parle un peu anglais'], ['Could you speak more slowly?', 'koud you spik mor slôli', 'Pouvez-vous parler plus lentement ?'], ['I don’t understand', 'aï dont onderstand']],
  chiffres: [['One', 'ouane'], ['Two', 'tou'], ['Three', 'sri'], ['Five', 'faïv'], ['Ten', 'tèn'], ['How much is it?', 'hao match iz it']],
  deplacer: [['Where is…?', 'wèr iz'], ['The train station', 'de tréïn stéïchn'], ['The airport', 'di èrport'], ['A ticket', 'e tikit'], ['Left', 'lèft'], ['Right', 'raït'], ['Straight ahead', 'strèït ehèd']],
  resto: [['A table for two', 'e téïbl for tou'], ['The menu, please', 'de mèniou pliz'], ['Water', 'wotr'], ['Coffee', 'kofi'], ['The bill, please', 'de bil pliz'], ['I would like…', 'aï woud laïk']],
  urgences: [['Help!', 'hèlp'], ['Call the police!', 'kol de polis'], ['Call an ambulance!', 'kol en ambioulens'], ['I need a doctor', 'aï nid e doctr'], ['I’m lost', 'aïm lost'], ['Where is the pharmacy?', 'wèr iz de farmasi']],
};
