// Consentement à la mesure d'audience : Google Tag Manager n'est chargé qu'après acceptation, jamais d'office.
// Le choix est mémorisé dans le stockage local du navigateur (clé vm-consentement : « oui » ou « non »).
// Refuser doit être aussi simple qu'accepter : deux boutons de même poids, et un lien en pied de page pour changer d'avis.

const CLE = 'vm-consentement';
const bandeau = document.getElementById('consentement');
const gtm = bandeau?.dataset.gtm;
const w = window as unknown as { dataLayer: unknown[]; __gtmCharge?: boolean };

const lire = () => { try { return localStorage.getItem(CLE); } catch { return null; } };
const ecrire = (v: string) => { try { localStorage.setItem(CLE, v); } catch { /* stockage indisponible : le choix vaut pour cette page seulement */ } };

function charger() {
  if (!gtm || w.__gtmCharge) return;
  w.__gtmCharge = true;
  w.dataLayer = w.dataLayer || [];
  // Mode de consentement : seule la mesure d'audience est autorisée, pas la publicité
  function gtag(..._args: unknown[]) { w.dataLayer.push(arguments); }
  gtag('consent', 'default', { ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', analytics_storage: 'granted' });
  w.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtm)}`;
  document.head.append(s);
}

// Retrait du consentement : on efface les cookies de mesure (_ga…) du site, puis la page est rechargée sans la balise
function effacerCookies() {
  const hotes = [location.hostname, `.${location.hostname}`, `.${location.hostname.split('.').slice(-2).join('.')}`];
  document.cookie.split(';').map((c) => c.split('=')[0].trim()).filter((n) => /^_ga|^_gid|^_gat/.test(n)).forEach((n) => {
    hotes.forEach((h) => { document.cookie = `${n}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${h}`; });
    document.cookie = `${n}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  });
}

const montrer = (oui: boolean) => { if (bandeau) bandeau.hidden = !oui; };

bandeau?.querySelectorAll<HTMLButtonElement>('button[data-choix]').forEach((b) => b.addEventListener('click', () => {
  const choix = b.dataset.choix;
  const avant = lire();
  ecrire(choix === 'oui' ? 'oui' : 'non');
  montrer(false);
  if (choix === 'oui') charger();
  else if (avant === 'oui') { effacerCookies(); location.reload(); }
}));

document.getElementById('gerer-cookies')?.addEventListener('click', () => montrer(true));

const choix = lire();
if (choix === 'oui') charger();
else if (choix === null) montrer(true);
