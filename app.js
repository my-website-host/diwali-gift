(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const screens = $$('.screen');

  const show = (id) => {
    screens.forEach(s => s.classList.toggle('active', s.id === id));
    window.scrollTo(0, 0);
  };

  // Normalize string: lowercase, strip non-alphanumeric
  const norm = (s) => (s || '').toLowerCase().normalize('NFKD').replace(/[^a-z0-9]/g, '');

  // STRICT TOKEN ONLY — matches f.id (name-hash) exclusively. Plain names are rejected.
  const findFriendByToken = (token) => {
    if (!token) return null;
    const n = norm(token);
    return CONFIG.friends.find(f => f.id && norm(f.id) === n) || null;
  };

  // findFriend used by the manual input field — also token-only now.
  const findFriend = (input) => findFriendByToken(input);

  function getInviteToken() {
    // 1. Check window global override (e.g. from static wrapper pages)
    if (window.FORCE_TOKEN) return window.FORCE_TOKEN;

    // 2. Query parameters (?u=..., ?id=..., ?token=..., ?friend=...)
    try {
      const params = new URLSearchParams(window.location.search);
      const q = params.get('u') || params.get('id') || params.get('token') || params.get('friend');
      if (q && q.trim()) return q.trim();
    } catch (_) {}

    // 3. Hash fragment (#<token> or #/<token>)
    if (window.location.hash) {
      const h = window.location.hash.replace(/^#\/?/, '').split('?')[0].trim();
      if (h) return h;
    }

    // 4. Path segments (/index/<token>/ or /<token>/)
    try {
      const pathParts = window.location.pathname.split('/').filter(Boolean);
      if (pathParts.length > 0) {
        const last = pathParts[pathParts.length - 1].replace(/\.html$/, '');
        if (pathParts.length >= 2 && pathParts[pathParts.length - 2] === 'index') {
          return last;
        }
        if (CONFIG && CONFIG.friends && CONFIG.friends.some(f => norm(f.id) === norm(last))) {
          return last;
        }
      }
    } catch (_) {}

    return null;
  }

  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const shake = (el) => el.animate([
    { transform: 'translateX(0)' }, { transform: 'translateX(-10px)' },
    { transform: 'translateX(10px)' }, { transform: 'translateX(-6px)' },
    { transform: 'translateX(0)' }
  ], { duration: 350 });

  /* ---------- Procedural Sound Synthesizer (Web Audio API) ---------- */
  const SoundFX = (() => {
    let ctx = null;
    let enabled = true;

    function getCtx() {
      if (!ctx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) ctx = new AudioContext();
      }
      if (ctx && ctx.state === 'suspended') {
        ctx.resume();
      }
      return ctx;
    }

    function toggle() {
      enabled = !enabled;
      return enabled;
    }

    function isEnabled() { return enabled; }

    // 1. Crispy Crunch (Pani Puri shell, Dosa crisp, Chocolate snap)
    function playCrunch() {
      if (!enabled) return;
      const c = getCtx();
      if (!c) return;

      const bufferSize = Math.floor(c.sampleRate * 0.12);
      const buffer = c.createBuffer(1, bufferSize, c.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (c.sampleRate * 0.035));
      }

      const noise = c.createBufferSource();
      noise.buffer = buffer;

      const filter = c.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(2600, c.currentTime);
      filter.Q.setValueAtTime(3.2, c.currentTime);

      const gain = c.createGain();
      gain.gain.setValueAtTime(0.35, c.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.11);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(c.destination);

      noise.start();
    }

    // 2. Liquid Pour & Gurgle (Spiced Pani flowing into Puri)
    function playPour() {
      if (!enabled) return;
      const c = getCtx();
      if (!c) return;

      const duration = 0.65;
      const bufferSize = Math.floor(c.sampleRate * duration);
      const buffer = c.createBuffer(1, bufferSize, c.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1);
      }

      const noise = c.createBufferSource();
      noise.buffer = buffer;

      const filter = c.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(750, c.currentTime);
      filter.frequency.linearRampToValueAtTime(1350, c.currentTime + duration);
      filter.Q.setValueAtTime(3.8, c.currentTime);

      const gain = c.createGain();
      gain.gain.setValueAtTime(0.01, c.currentTime);
      gain.gain.linearRampToValueAtTime(0.24, c.currentTime + 0.1);
      gain.gain.linearRampToValueAtTime(0.18, c.currentTime + duration - 0.1);
      gain.gain.linearRampToValueAtTime(0.001, c.currentTime + duration);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(c.destination);

      noise.start();

      // Liquid bubble blips
      for (let b = 0; b < 3; b++) {
        const osc = c.createOscillator();
        const bGain = c.createGain();
        const t0 = c.currentTime + 0.12 + b * 0.15;
        osc.frequency.setValueAtTime(420 + Math.random() * 180, t0);
        osc.frequency.exponentialRampToValueAtTime(720 + Math.random() * 260, t0 + 0.08);
        bGain.gain.setValueAtTime(0.07, t0);
        bGain.gain.exponentialRampToValueAtTime(0.001, t0 + 0.08);
        osc.connect(bGain);
        bGain.connect(c.destination);
        osc.start(t0);
        osc.stop(t0 + 0.09);
      }
    }

    // 3. Dip & Dunk (Pav into Bhaji, Dosa into Chutney/Sambar)
    function playDip() {
      if (!enabled) return;
      const c = getCtx();
      if (!c) return;

      const osc = c.createOscillator();
      const gain = c.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(240, c.currentTime);
      osc.frequency.exponentialRampToValueAtTime(105, c.currentTime + 0.18);

      gain.gain.setValueAtTime(0.25, c.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.18);

      osc.connect(gain);
      gain.connect(c.destination);
      osc.start();
      osc.stop(c.currentTime + 0.19);
    }

    // 4. Soft Munch / Chew (Soft Pav bun chew)
    function playMunch() {
      if (!enabled) return;
      const c = getCtx();
      if (!c) return;

      const osc = c.createOscillator();
      const gain = c.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(130, c.currentTime);
      osc.frequency.exponentialRampToValueAtTime(55, c.currentTime + 0.16);

      gain.gain.setValueAtTime(0.28, c.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.16);

      osc.connect(gain);
      gain.connect(c.destination);
      osc.start();
      osc.stop(c.currentTime + 0.17);
    }

    // 5. Pop + Gulp (Pani Puri burst into mouth)
    function playPopGulp() {
      playCrunch();
      setTimeout(playMunch, 70);
    }

    // 6. Diya Lighting & Memory Chime
    function playDiya() {
      if (!enabled) return;
      const c = getCtx();
      if (!c) return;

      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((f, idx) => {
        const osc = c.createOscillator();
        const gain = c.createGain();
        const t = c.currentTime + idx * 0.055;
        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, t);

        gain.gain.setValueAtTime(0.14, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.45);

        osc.connect(gain);
        gain.connect(c.destination);
        osc.start(t);
        osc.stop(t + 0.46);
      });
    }

    // 7. Victory Fanfare (Celebration for Finale)
    function playVictory() {
      if (!enabled) return;
      const c = getCtx();
      if (!c) return;

      const notes = [392, 523.25, 659.25, 783.99, 1046.5]; // G4, C5, E5, G5, C6
      notes.forEach((f, i) => {
        const osc = c.createOscillator();
        const gain = c.createGain();
        const t = c.currentTime + i * 0.13;
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(f, t);

        gain.gain.setValueAtTime(0.2, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + (i === notes.length - 1 ? 0.9 : 0.4));

        osc.connect(gain);
        gain.connect(c.destination);
        osc.start(t);
        osc.stop(t + (i === notes.length - 1 ? 0.95 : 0.45));
      });
    }

    return {
      init: getCtx,
      toggle,
      isEnabled,
      playCrunch,
      playPour,
      playDip,
      playMunch,
      playPopGulp,
      playDiya,
      playVictory
    };
  })();

  /* ---------- Sound Toggle Button ---------- */
  const soundBtn = $('#sound-btn');
  const soundIcon = $('#sound-icon');
  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      SoundFX.init();
      const on = SoundFX.toggle();
      soundIcon.textContent = on ? '🔊' : '🔇';
    });
  }

  /* ---------- Background Manager (Dynamic Environments) ---------- */
  const bg = $('#bg');

  function renderDefaultBg() {
    document.body.className = '';
    bg.innerHTML = '';
    for (let i = 0; i < 24; i++) {
      const s = document.createElement('span');
      s.textContent = i % 5 === 0 ? '🪔' : i % 3 === 0 ? '✨' : '✦';
      s.style.left = Math.random() * 100 + '%';
      s.style.top = Math.random() * 100 + '%';
      s.style.fontSize = (11 + Math.random() * 18) + 'px';
      s.style.animationDelay = (-Math.random() * 9) + 's';
      s.style.animationDuration = (6 + Math.random() * 6) + 's';
      bg.appendChild(s);
    }
  }

  function setFoodBackground(foodType) {
    if (!foodType || !window.FOOD_BACKGROUNDS || !window.FOOD_BACKGROUNDS[foodType]) {
      renderDefaultBg();
      return;
    }
    document.body.className = `theme-${foodType}`;
    bg.innerHTML = window.FOOD_BACKGROUNDS[foodType]();
  }

  // Initialize with festive default sparkles
  renderDefaultBg();

  let friend = null;

  /* ---------- 1. Secret Code Gate ---------- */
  $('#gate-form').addEventListener('submit', (e) => {
    e.preventDefault();
    SoundFX.init();
    const v = $('#name-input').value.trim();
    const f = findFriend(v);
    const msg = $('#gate-msg');
    if (!f) {
      msg.textContent = v
        ? "That code doesn't match any gift 🙈 Check the link you received!"
        : 'Enter your secret gift code first 😄';
      shake($('#gate .card'));
      return;
    }
    friend = f;
    document.title = `${f.displayName}'s Diwali Gift 🪔`;
    msg.textContent = '';
    startQuiz();
  });

  /* ---------- 2. Personal question ---------- */
  const wrongLines = [
    'Nope, try again 😄', 'Hmm, think harder! 🤔', 'Not quite… you know this! 😏',
    'Close, but no 🙈', 'Are you really who you say you are? 🕵️'
  ];

  function startQuiz() {
    $('#quiz-hi').textContent = `Hi ${friend.displayName}! 👋`;
    $('#quiz-q').textContent = friend.question;
    $('#quiz-msg').textContent = '';
    const box = $('#quiz-opts');
    box.innerHTML = '';
    friend.options.forEach((opt, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'opt';
      b.textContent = opt;
      b.addEventListener('click', () => answer(i, b));
      box.appendChild(b);
    });
    show('quiz');
  }

  function answer(i, b) {
    SoundFX.init();
    if (i === friend.answer) {
      b.classList.add('right');
      $$('#quiz-opts .opt').forEach(x => { x.disabled = true; });
      $('#quiz-msg').textContent = 'Yesss! 🎉 Unlocking your feast…';
      SoundFX.playDiya();
      setTimeout(startGame, 900);
    } else {
      b.classList.add('wrong');
      shake(b);
      $('#quiz-msg').textContent = pick(wrongLines);
      setTimeout(() => b.classList.remove('wrong'), 600);
    }
  }

  /* ---------- 3. The Feast Game ---------- */
  let food, eaten, busy, total;

  function startGame() {
    food = FOODS[friend.food];
    setFoodBackground(friend.food);

    eaten = 0;
    busy = false;
    $('#game-title').textContent = `${food.emoji} ${friend.displayName}'s ${food.title}`;
    const baseHint = food.hint || 'Tap a piece to take a bite 😋';
    $('#game-hint').textContent = `${baseHint} — Tap to unlock secret messages! 💌`;

    const stage = $('#stage');
    stage.innerHTML = food.svg(CONFIG);
    const svg = $('svg', stage);
    const pieces = $$('[data-piece]', svg);
    total = pieces.length;

    // Special interaction for continuous Dosa: clicking ANYWHERE on the dosa roll cuts the next portion!
    const dosaRoll = svg.querySelector('#dosa-roll');
    if (dosaRoll) {
      dosaRoll.addEventListener('click', () => {
        if (busy || eaten >= total) return;
        const targetPiece = pieces[eaten];
        if (targetPiece) bite(targetPiece, svg);
      });
    } else {
      pieces.forEach((p) => {
        p.addEventListener('click', () => {
          if (busy || p.dataset.done) return;
          bite(p, svg);
        });
      });
    }

    // Diya progress indicators
    const pr = $('#progress');
    pr.innerHTML = '';
    for (let i = 0; i < total; i++) {
      const d = document.createElement('span');
      d.className = 'diya-dot';
      d.textContent = '🪔';
      pr.appendChild(d);
    }

    // Populate the handwritten paper note reflecting on the food item
    const noteHeading = $('#note-heading');
    const noteBody = $('#note-body');
    if (noteHeading) {
      noteHeading.textContent = `A Note For You 💌`;
    }
    if (noteBody) {
      noteBody.textContent = friend.foodNote || `Every bite of this delicious ${food.title.toLowerCase()} brings back our favorite times together. Tap a piece to take a bite and unlock our memories!`;
    }

    show('game');
  }

  /* ---------- Crumbs & Droplets Particle Effects ---------- */
  function crumbs(x, y, colors, count = 15) {
    for (let i = 0; i < count; i++) {
      const d = document.createElement('i');
      d.className = 'crumb';
      const s = 5 + Math.random() * 8;
      d.style.cssText = `left:${x}px;top:${y}px;width:${s}px;height:${s}px;background:${colors[i % colors.length]}`;
      document.body.appendChild(d);
      const a = Math.random() * Math.PI * 2;
      const dist = 35 + Math.random() * 85;
      const anim = d.animate([
        { transform: 'translate(-50%,-50%) scale(1)', opacity: 1 },
        { transform: `translate(calc(-50% + ${Math.cos(a) * dist}px), calc(-50% + ${Math.sin(a) * dist + 32}px)) scale(.25) rotate(${Math.random() * 360}deg)`, opacity: 0 }
      ], { duration: 650 + Math.random() * 300, easing: 'cubic-bezier(.2,.7,.3,1)' });
      anim.onfinish = () => d.remove();
    }
  }

  function droplets(x, y, count = 12) {
    for (let i = 0; i < count; i++) {
      const d = document.createElement('i');
      d.className = 'droplet';
      const s = 4 + Math.random() * 6;
      d.style.cssText = `left:${x}px;top:${y}px;width:${s}px;height:${s}px;`;
      document.body.appendChild(d);
      const a = Math.random() * Math.PI * 2;
      const dist = 30 + Math.random() * 75;
      const anim = d.animate([
        { transform: 'translate(-50%,-50%) scale(1)', opacity: 1 },
        { transform: `translate(calc(-50% + ${Math.cos(a) * dist}px), calc(-50% + ${Math.sin(a) * dist + 24}px)) scale(.2)`, opacity: 0 }
      ], { duration: 550 + Math.random() * 250, easing: 'cubic-bezier(.2,.7,.3,1)' });
      anim.onfinish = () => d.remove();
    }
  }

  async function bite(el, svg) {
    if (busy || el.dataset.done) return;
    busy = true;
    el.dataset.done = '1';
    SoundFX.init();

    const n = eaten++;

    // Execute specialized food interaction lifecycle (with animations, sounds, dipping & scoops)
    if (food.handleBite) {
      await food.handleBite(el, svg, n, total, SoundFX, crumbs, droplets);
    } else {
      const r = el.getBoundingClientRect();
      crumbs(r.left + r.width / 2, r.top + r.height / 2, food.crumbs);
      if (food.keyframes) {
        const anim = el.animate(food.keyframes(el, svg), { duration: food.dur || 520, easing: 'ease-in', fill: 'forwards' });
        try { await anim.finished; } catch (_) {}
      }
      el.style.visibility = 'hidden';
      if (food.onEat) food.onEat(svg, n + 1, total);
    }

    // Light up corresponding progress Diya
    const dots = $$('.diya-dot');
    if (dots[n]) {
      dots[n].classList.add('lit');
      SoundFX.playDiya();
    }

    openMemory(n);
  }

  /* ---------- Memory Popup ---------- */
  function openMemory(n) {
    const m = friend.memories[n] || { text: '💛', photo: '' };
    const last = n + 1 >= total;
    $('#mem-count').textContent = `Memory ${n + 1} of ${total}`;
    const ph = $('#mem-photo');
    ph.innerHTML = '';
    if (m.photo) {
      const img = new Image();
      img.alt = '';
      img.onerror = () => ph.classList.add('hidden');
      img.src = m.photo;
      ph.appendChild(img);
      ph.classList.remove('hidden');
    } else {
      ph.classList.add('hidden');
    }
    $('#mem-text').textContent = m.text;
    $('#mem-next').textContent = last ? 'Open my Diwali wish 🎁' : 'Keep munching 😋';
    $('#modal').classList.add('open');
  }

  $('#mem-next').addEventListener('click', () => {
    $('#modal').classList.remove('open');
    busy = false;
    if (eaten >= total) finale();
  });

  /* ---------- 4. Finale & Confetti ---------- */
  const confetti = (() => {
    const c = $('#confetti');
    const ctx = c.getContext('2d');
    const colors = ['#ffcf5c', '#ff8a3d', '#ff4d6d', '#c77dff', '#4cc9f0', '#80ed99', '#ffffff'];
    let parts = [];
    let raf = null;
    let dpr = 1;

    function resize() {
      dpr = window.devicePixelRatio || 1;
      c.width = innerWidth * dpr;
      c.height = innerHeight * dpr;
    }

    function burst(n = 150) {
      if (!c.classList.contains('on')) { resize(); c.classList.add('on'); }
      for (let i = 0; i < n; i++) {
        parts.push({
          x: Math.random() * c.width, y: -20 * dpr,
          vx: (Math.random() - .5) * 4.5 * dpr, vy: (2 + Math.random() * 4.5) * dpr,
          w: (6 + Math.random() * 8) * dpr, h: (4 + Math.random() * 6) * dpr,
          rot: Math.random() * 6.28, vr: (Math.random() - .5) * .3,
          col: colors[Math.floor(Math.random() * colors.length)]
        });
      }
      if (!raf) loop();
    }

    function loop() {
      ctx.clearRect(0, 0, c.width, c.height);
      for (const p of parts) {
        p.x += p.vx; p.y += p.vy; p.vy += .035 * dpr; p.rot += p.vr;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.col;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      }
      parts = parts.filter(p => p.y < c.height + 40 * dpr);
      if (parts.length) {
        raf = requestAnimationFrame(loop);
      } else {
        raf = null;
        ctx.clearRect(0, 0, c.width, c.height);
        c.classList.remove('on');
      }
    }

    function start() {
      burst(180);
      setTimeout(() => burst(130), 800);
      setTimeout(() => burst(110), 1700);
    }

    function stop() {
      parts = [];
      if (raf) cancelAnimationFrame(raf);
      raf = null;
      ctx.clearRect(0, 0, c.width, c.height);
      c.classList.remove('on');
    }

    addEventListener('resize', () => { if (c.classList.contains('on')) resize(); });
    return { start, stop, burst };
  })();

  function finale() {
    $('#wish-title').textContent = `Happy Diwali, ${friend.displayName}! 🪔`;
    $('#wish-text').textContent = friend.wish;
    show('finale');
    SoundFX.playVictory();
    confetti.start();
  }

  $('#burst').addEventListener('click', () => {
    SoundFX.playCrunch();
    confetti.burst(160);
  });
  $('#replay').addEventListener('click', () => {
    confetti.stop();
    startGame();
  });

  /* ---------- 5. Invite Link Auth Routing ---------- */
  function initAuthRouting() {
    const token = getInviteToken();
    if (token) {
      const f = findFriendByToken(token);
      if (f) {
        friend = f;
        document.title = `${f.displayName}'s Diwali Gift 🪔`;
        startQuiz();
        return;
      } else {
        show('gate');
        const msg = $('#gate-msg');
        if (msg) msg.textContent = "Hmm, this invite link isn't recognized 🙈 Enter your secret code or name below!";
        shake($('#gate .card'));
        return;
      }
    }
    // No token in URL: show default entrance gate
    show('gate');
  }

  initAuthRouting();
})();
