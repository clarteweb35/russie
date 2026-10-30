// Audio (synthèse vocale) et quiz d'écoute des leçons. Chargé par src/pages/lecons/[slug].astro.
let voice: SpeechSynthesisVoice | null = null;
const synth = window.speechSynthesis;
const msg = document.getElementById('voice-msg');
const slow = document.getElementById('slow') as HTMLInputElement | null;

function pickVoice() {
  if (!synth) return;
  const vs = synth.getVoices();
  voice = vs.find((v) => v.lang.toLowerCase().startsWith('ru')) || null;
  if (msg) msg.hidden = !!voice;
}
if (synth) {
  pickVoice();
  synth.addEventListener?.('voiceschanged', pickVoice);
  setTimeout(pickVoice, 600);
} else if (msg) {
  msg.hidden = false;
}

function speak(text: string, onEnd?: () => void) {
  if (!synth) { onEnd?.(); return; }
  synth.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'ru-RU';
  if (voice) u.voice = voice;
  u.rate = slow?.checked ? 0.6 : 0.9;
  if (onEnd) { u.onend = onEnd; u.onerror = onEnd; }
  synth.speak(u);
}

const buttons = Array.from(document.querySelectorAll<HTMLButtonElement>('.play'));
buttons.forEach((b) => b.addEventListener('click', () => {
  buttons.forEach((x) => x.classList.remove('active'));
  b.classList.add('active');
  speak(b.dataset.ru || '', () => b.classList.remove('active'));
}));

document.getElementById('play-all')?.addEventListener('click', () => {
  let i = 0;
  const next = () => {
    buttons.forEach((x) => x.classList.remove('active'));
    if (i >= buttons.length) return;
    const b = buttons[i++];
    b.classList.add('active');
    speak(b.dataset.ru || '', () => setTimeout(next, 500));
  };
  next();
});

// Quiz d'écoute
const quiz = document.getElementById('quiz');
if (quiz) {
  const phrases: [string, string, string][] = JSON.parse(quiz.dataset.phrases || '[]');
  const esc = (t: string) => t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
  const shuffle = <T,>(a: T[]) => a.map((x) => [Math.random(), x] as const).sort((p, q) => p[0] - q[0]).map((p) => p[1]);
  let order: [string, string, string][] = [];
  let n = 0, score = 0;
  const total = Math.min(6, phrases.length);

  const render = () => {
    if (n >= total) {
      quiz.innerHTML = `<p class="quiz-q"><strong>Score : ${score} / ${total}</strong></p>` +
        `<button class="btn" id="again" type="button">Recommencer</button>`;
      document.getElementById('again')?.addEventListener('click', start);
      return;
    }
    const [ru, , fr] = order[n];
    const wrong = shuffle(phrases.filter((p) => p[2] !== fr)).slice(0, 3).map((p) => p[2]);
    const opts = shuffle([fr, ...wrong]);
    quiz.innerHTML = `<p class="quiz-q">Question ${n + 1} / ${total}</p>` +
      `<button class="btn" id="listen" type="button">▶ Écouter</button>` +
      `<div class="quiz-opts">${opts.map((o) => `<button type="button" data-o="${esc(o)}">${esc(o)}</button>`).join('')}</div>`;
    document.getElementById('listen')?.addEventListener('click', () => speak(ru));
    speak(ru);
    quiz.querySelectorAll<HTMLButtonElement>('.quiz-opts button').forEach((b) => b.addEventListener('click', () => {
      const ok = b.dataset.o === fr;
      if (ok) score++;
      quiz.querySelectorAll<HTMLButtonElement>('.quiz-opts button').forEach((x) => {
        x.disabled = true;
        if (x.dataset.o === fr) x.classList.add('good');
      });
      if (!ok) b.classList.add('bad');
      setTimeout(() => { n++; render(); }, 1400);
    }));
  };
  const start = () => { order = shuffle(phrases).slice(0, total); n = 0; score = 0; render(); };
  document.getElementById('quiz-start')?.addEventListener('click', start);
}
