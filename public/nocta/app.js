/* ============================================================
   NOCTA — interactions
   ============================================================ */
(function () {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isTouch = window.matchMedia("(hover: none)").matches;

  /* ---------- nav: scrolled state + burger ---------- */
  const nav = document.querySelector(".nav");
  if (nav) {
    const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }
  const burger = document.querySelector(".burger");
  const links = document.querySelector(".nav-links");
  if (burger && links) {
    burger.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      burger.setAttribute("aria-expanded", String(open));
    });
    links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => links.classList.remove("open")));
  }

  /* ---------- marquee: duplicate track for seamless loop ---------- */
  document.querySelectorAll(".marquee-track").forEach(tr => {
    tr.innerHTML += tr.innerHTML;
  });

  /* ---------- reveal on scroll ---------- */
  const revs = document.querySelectorAll(".reveal");
  if (revs.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("shown"); io.unobserve(e.target); } });
    }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });
    revs.forEach(el => io.observe(el));
  }

  /* ---------- rack focus: blur -> sharp when in view ---------- */
  const racks = document.querySelectorAll(".rack");
  if (racks.length) {
    const rio = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in-focus"); });
    }, { threshold: 0.35 });
    racks.forEach(el => rio.observe(el));
  }

  /* ---------- count-up stats (handles prefix / decimals / suffix) ---------- */
  document.querySelectorAll("[data-count]").forEach(el => {
    const target = el.textContent.trim();
    const m = target.match(/^(\D*?)(\d+(?:[.,]\d+)?)(\D*)$/);
    if (!m || reduce) return;
    const prefix = m[1], numStr = m[2], suffix = m[3];
    const decimals = (numStr.split(/[.,]/)[1] || "").length;
    const usesComma = numStr.indexOf(",") > -1;
    const num = parseFloat(numStr.replace(",", "."));
    let started = false;
    const fmt = (v) => { let t = v.toFixed(decimals); if (usesComma) t = t.replace(".", ","); return prefix + t + suffix; };
    const cio = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting && !started) {
          started = true;
          const dur = 1200, t0 = performance.now();
          const tick = (t) => {
            const p = Math.min((t - t0) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = fmt(num * eased);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.6 });
    cio.observe(el);
  });

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll(".faq-q").forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const open = item.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
    });
  });

  /* ---------- swipeable story ("le parcours") ---------- */
  document.querySelectorAll(".story").forEach(story => {
    const track = story.querySelector(".story-track");
    if (!track) return;
    // desktop pinned mode: the scroll engine drives the track; skip swipe wiring
    if (story.closest(".story-pin") &&
        window.matchMedia("(min-width: 901px) and (hover: hover)").matches &&
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const chapters = Array.from(track.children);
    const dotsWrap = story.querySelector(".story-dots");
    const prev = story.querySelector('[data-story="prev"]');
    const next = story.querySelector('[data-story="next"]');
    if (!chapters.length) return;

    const dots = chapters.map((_, i) => {
      const b = document.createElement("button");
      b.className = "story-dot" + (i === 0 ? " active" : "");
      b.setAttribute("aria-label", "Chapitre " + (i + 1));
      b.addEventListener("click", () => scrollToIndex(i));
      if (dotsWrap) dotsWrap.appendChild(b);
      return b;
    });

    const gap = parseFloat(getComputedStyle(track).columnGap) || 18;
    const step = () => chapters[0].getBoundingClientRect().width + gap;
    const currentIndex = () => Math.round(track.scrollLeft / step());
    function scrollToIndex(i) {
      i = Math.max(0, Math.min(chapters.length - 1, i));
      track.scrollTo({ left: i * step(), behavior: reduce ? "auto" : "smooth" });
    }
    function update() {
      const i = currentIndex();
      dots.forEach((d, di) => d.classList.toggle("active", di === i));
      if (prev) prev.disabled = i <= 0;
      if (next) next.disabled = i >= chapters.length - 1;
    }
    if (prev) prev.addEventListener("click", () => scrollToIndex(currentIndex() - 1));
    if (next) next.addEventListener("click", () => scrollToIndex(currentIndex() + 1));
    track.addEventListener("scroll", () => requestAnimationFrame(update), { passive: true });
    window.addEventListener("resize", update, { passive: true });
    update();

    // drag-to-scroll (pointer / mouse); native touch handles itself
    let down = false, startX = 0, startLeft = 0, moved = false;
    track.addEventListener("pointerdown", (e) => {
      if (e.pointerType === "touch") return;
      down = true; moved = false; startX = e.clientX; startLeft = track.scrollLeft;
      track.classList.add("dragging");
      try { track.setPointerCapture(e.pointerId); } catch (_) {}
    });
    track.addEventListener("pointermove", (e) => {
      if (!down) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 4) moved = true;
      track.scrollLeft = startLeft - dx;
    });
    const end = (e) => {
      if (!down) return;
      down = false; track.classList.remove("dragging");
      try { track.releasePointerCapture(e.pointerId); } catch (_) {}
      scrollToIndex(currentIndex());
    };
    track.addEventListener("pointerup", end);
    track.addEventListener("pointercancel", end);
    track.addEventListener("click", (e) => { if (moved) e.preventDefault(); }, true);
  });

  if (!isTouch && !reduce) {
    /* ---------- card spotlight + 3D tilt ---------- */
    document.querySelectorAll(".card, .tilt").forEach(card => {
      card.addEventListener("pointermove", (e) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        card.style.setProperty("--mx", (px * 100) + "%");
        card.style.setProperty("--my", (py * 100) + "%");
        if (card.classList.contains("tilt")) {
          const rx = (py - 0.5) * -7, ry = (px - 0.5) * 7;
          card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
        }
      });
      card.addEventListener("pointerleave", () => {
        if (card.classList.contains("tilt")) card.style.transform = "";
      });
    });

    /* ---------- magnetic buttons ---------- */
    document.querySelectorAll(".btn, .magnetic").forEach(btn => {
      btn.addEventListener("pointermove", (e) => {
        const r = btn.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        btn.style.transform = `translate(${x * 0.18}px, ${y * 0.28}px)`;
      });
      btn.addEventListener("pointerleave", () => { btn.style.transform = ""; });
    });
  }

  /* ---------- 3D bokeh hero (Three.js, with graceful fallback) ---------- */
  const canvas = document.getElementById("bokeh");
  if (canvas && !reduce) {
    const s = document.createElement("script");
    s.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
    s.onload = () => { try { initBokeh(canvas); } catch (e) { canvas.style.display = "none"; } };
    s.onerror = () => { canvas.style.display = "none"; };
    document.head.appendChild(s);
  } else if (canvas) {
    canvas.style.display = "none";
  }

  function initBokeh(canvas) {
    const THREE = window.THREE;
    if (!THREE) { canvas.style.display = "none"; return; }

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(58, 1, 0.1, 120);
    camera.position.z = 24;
    scene.fog = new THREE.FogExp2(0x0a0910, 0.016);
    let scrollP = 0, scrollT = 0;
    window.NOCTA_BOKEH = { setScroll: (p) => { scrollT = Math.max(0, Math.min(1, p)); } };

    // soft circular sprite
    const c = document.createElement("canvas"); c.width = c.height = 128;
    const ctx = c.getContext("2d");
    const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    g.addColorStop(0, "rgba(255,255,255,1)");
    g.addColorStop(0.2, "rgba(255,255,255,.85)");
    g.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(64, 64, 64, 0, Math.PI * 2); ctx.fill();
    const tex = new THREE.CanvasTexture(c);

    const palette = [0xff5d57, 0x7b6cff, 0xff8a85, 0xa99dff].map(h => new THREE.Color(h));

    // depth layers: count, z, point size, drift amplitude, fill factor (how far past frame edges)
    const defs = [
      { count: 70,  z: -12, size: 4.2, drift: 0.9, fill: 1.6 },  // big, soft, far bokeh
      { count: 110, z: -2,  size: 2.0, drift: 1.4, fill: 1.4 },  // mid
      { count: 95,  z: 7,   size: 1.0, drift: 2.1, fill: 1.25 }, // small, sharp, near
    ];

    function frustum(z) {
      const dist = camera.position.z - z;
      const h = 2 * Math.tan((camera.fov / 2) * Math.PI / 180) * dist;
      return { hw: h * camera.aspect / 2, hh: h / 2 };
    }

    const layers = defs.map(d => {
      const geo = new THREE.BufferGeometry();
      const col = new Float32Array(d.count * 3);
      const seed = new Float32Array(d.count);
      for (let i = 0; i < d.count; i++) {
        const cc = palette[(Math.random() * palette.length) | 0];
        col[i * 3] = cc.r; col[i * 3 + 1] = cc.g; col[i * 3 + 2] = cc.b;
        seed[i] = Math.random() * Math.PI * 2;
      }
      geo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(d.count * 3), 3));
      geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
      const mat = new THREE.PointsMaterial({
        size: d.size, map: tex, vertexColors: true, transparent: true,
        blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.8
      });
      const pts = new THREE.Points(geo, mat);
      pts.userData = { d, seed, base: new Float32Array(d.count * 3) };
      scene.add(pts);
      return pts;
    });

    // spread each layer's particles to cover the full frame (+ margin) at its depth
    function place(pts) {
      const { d, base } = pts.userData;
      const f = frustum(d.z);
      for (let i = 0; i < d.count; i++) {
        base[i * 3]     = (Math.random() * 2 - 1) * f.hw * d.fill;
        base[i * 3 + 1] = (Math.random() * 2 - 1) * f.hh * d.fill;
        base[i * 3 + 2] = d.z + (Math.random() * 2 - 1) * 3;
      }
    }

    let W = 0, H = 0;
    function resize() {
      const r = canvas.getBoundingClientRect();
      const w = Math.max(Math.round(r.width), 1), h = Math.max(Math.round(r.height), 1);
      if (w === W && h === H) return;
      W = w; H = h;
      canvas.style.width = w + "px";   // force full-bleed regardless of CSS
      canvas.style.height = h + "px";
      renderer.setSize(w, h, false);
      camera.aspect = w / h; camera.updateProjectionMatrix();
      layers.forEach(place);
    }
    window.addEventListener("resize", resize, { passive: true });

    let mx = 0, my = 0, tx = 0, ty = 0;
    window.addEventListener("pointermove", (e) => {
      tx = e.clientX / window.innerWidth - 0.5;
      ty = e.clientY / window.innerHeight - 0.5;
    }, { passive: true });

    let running = true;
    document.addEventListener("visibilitychange", () => { running = !document.hidden; if (running) loop(); });

    function loop() {
      if (!running) return;
      resize();
      mx += (tx - mx) * 0.05; my += (ty - my) * 0.05;
      const t = performance.now() * 0.001;
      layers.forEach((pts, li) => {
        const { d, base, seed } = pts.userData;
        const arr = pts.geometry.attributes.position.array;
        for (let i = 0; i < d.count; i++) {
          const ph = seed[i];
          arr[i * 3]     = base[i * 3]     + Math.sin(t * 0.15 + ph) * d.drift;        // gentle sway
          arr[i * 3 + 1] = base[i * 3 + 1] + Math.cos(t * 0.12 + ph) * d.drift * 0.7;  // gentle bob
          arr[i * 3 + 2] = base[i * 3 + 2];
        }
        pts.geometry.attributes.position.needsUpdate = true;
        // subtle, bounded parallax — nearer layers move a touch more
        pts.position.x = mx * (1.4 + li * 1.1);
        pts.position.y = -my * (1.0 + li * 0.8);
      });
      scrollP += (scrollT - scrollP) * 0.06;
      camera.position.x += (mx * 1.4 - camera.position.x) * 0.04;
      camera.position.y += (-my * 1.0 - camera.position.y) * 0.04;
      camera.position.z = 24 - scrollP * 13;              // travelling through the field
      camera.rotation.z = scrollP * 0.10;                 // slow cinematic roll
      camera.lookAt(0, 0, camera.position.z - 10);
      renderer.render(scene, camera);
      requestAnimationFrame(loop);
    }
    resize();
    layers.forEach(place);
    loop();
  }
})();


/* ============================================================
   SCROLLYTELLING ENGINE V2 — immersive, scroll-driven
   ============================================================ */
(function () {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- comparison slider (user-driven; always on) ---------- */
  document.querySelectorAll(".cmp").forEach(cmp => {
    const handle = cmp.querySelector(".cmp-handle");
    let cut = 55;
    const set = (v) => {
      cut = Math.max(0, Math.min(100, v));
      cmp.style.setProperty("--cut", cut + "%");
      if (handle) handle.setAttribute("aria-valuenow", Math.round(cut));
    };
    set(cut);
    const fromEvent = (e) => {
      const r = cmp.getBoundingClientRect();
      set(((e.clientX - r.left) / r.width) * 100);
    };
    let down = false;
    cmp.addEventListener("pointerdown", (e) => { down = true; fromEvent(e); try{cmp.setPointerCapture(e.pointerId);}catch(_){} });
    cmp.addEventListener("pointermove", (e) => { if (down) fromEvent(e); });
    const up = () => { down = false; };
    cmp.addEventListener("pointerup", up); cmp.addEventListener("pointercancel", up);
    if (handle) handle.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") { set(cut - 4); e.preventDefault(); }
      if (e.key === "ArrowRight") { set(cut + 4); e.preventDefault(); }
    });
  });

  /* ---------- manifesto word split (survives language switch) ---------- */
  function splitWords() {
    document.querySelectorAll('.manifesto [data-i18n="man.body"]').forEach(el => {
      if (el.querySelector(".mword")) return;
      const wrap = (node) => {
        if (node.nodeType === 3) {
          const frag = document.createDocumentFragment();
          node.textContent.split(/(\s+)/).forEach(part => {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
            const sp = document.createElement("span");
            sp.className = "mword"; sp.textContent = part;
            frag.appendChild(sp);
          });
          node.parentNode.replaceChild(frag, node);
        } else if (node.nodeType === 1) {
          Array.from(node.childNodes).forEach(wrap);
        }
      };
      Array.from(el.childNodes).forEach(wrap);
    });
  }
  splitWords();
  document.addEventListener("nocta:lang", splitWords);

  if (reduce) return; // all motion below is scroll-driven

  const clamp01 = (v) => Math.max(0, Math.min(1, v));
  const vhOf = () => window.innerHeight;

  /* ---------- collect actors ---------- */
  const bar = document.querySelector(".scroll-progress span");
  const ambient = document.querySelector(".ambient");
  const lbTop = document.querySelector(".lb-top");
  const lbBot = document.querySelector(".lb-bot");
  const hero = document.querySelector(".hero");
  const heroWrap = hero ? hero.querySelector(".wrap") : null;
  const wordmark = hero ? hero.querySelector(".wordmark") : null;
  const heroCanvas = document.getElementById("bokeh");
  const manifesto = document.querySelector(".manifesto");
  const timelines = document.querySelectorAll(".timeline");
  const plx = Array.from(document.querySelectorAll("[data-plx]"));
  const wipes = Array.from(document.querySelectorAll(".wipe"));

  /* immersive venue tour */
  const tourPin = document.querySelector(".tour-pin");
  let tourScenes = [], tourFill = null;
  if (tourPin) {
    tourPin.classList.add("tour-on");
    tourScenes = Array.from(tourPin.querySelectorAll(".tour-scene"));
    tourFill = tourPin.querySelector(".tour-progress span");
  }

  /* pinned story */
  const pin = document.querySelector(".story-pin");
  const pinnable = pin && window.matchMedia("(min-width: 901px) and (hover: hover)").matches;
  let pinTrack = null, pinDots = [], pinCur = null, pinChapters = [];
  if (pinnable) {
    pin.classList.add("pin-on");
    pinTrack = pin.querySelector(".story-track");
    pinChapters = Array.from(pinTrack.children);
    pinCur = pin.querySelector(".sc-cur");
    const dotsWrap = pin.querySelector(".story-dots");
    if (dotsWrap && !dotsWrap.children.length) {
      pinChapters.forEach((_, i) => {
        const b = document.createElement("button");
        b.className = "story-dot" + (i === 0 ? " active" : "");
        b.setAttribute("aria-label", "Chapitre " + (i + 1));
        b.addEventListener("click", () => {
          const max = pin.offsetHeight - vhOf();
          const y = pin.getBoundingClientRect().top + window.scrollY + (i / (pinChapters.length - 1)) * max;
          window.scrollTo({ top: y, behavior: "smooth" });
        });
        dotsWrap.appendChild(b);
      });
    }
    pinDots = Array.from(pin.querySelectorAll(".story-dot"));
  }

  /* ---------- geometry cache (recomputed on resize, not every frame) ---------- */
  let geo = {};
  function measure() {
    const y = window.scrollY, vh = vhOf();
    const abs = (el) => { const r = el.getBoundingClientRect(); return { top: r.top + y, h: r.height }; };
    geo = { vh, docH: document.documentElement.scrollHeight };
    if (manifesto) geo.man = abs(manifesto);
    if (pinnable && pin) { const g = abs(pin); geo.pin = g; geo.pinMaxX = pinTrack.scrollWidth - pinTrack.clientWidth; }
    geo.tls = timelines.length ? Array.from(timelines).map(tl => ({ el: tl, ...abs(tl), fill: tl.querySelector(".tl-fill"),
      steps: Array.from(tl.querySelectorAll(".tl-step")).map(s => ({ el: s, ...abs(s) })) })) : [];
    geo.plx = plx.map(el => ({ el, ...abs(el), sp: parseFloat(el.getAttribute("data-plx")) || 0.06 }));
    if (tourPin) { geo.tour = abs(tourPin); }
    if (pinnable && pinTrack) {
      geo.viewW = pinTrack.parentElement.clientWidth;
      geo.chaps = pinChapters.map(ch => ({ el: ch, cx: ch.offsetLeft + ch.offsetWidth / 2 }));
    }
    geo.wipes = wipes.map(el => ({ el, ...abs(el) }));
  }

  let ticking = false;
  function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(run); } }

  function run() {
    ticking = false;
    const vh = geo.vh, y = window.scrollY;
    const total = Math.max(1, geo.docH - vh);
    const globalP = clamp01(y / total);

    if (bar) bar.style.width = (globalP * 100).toFixed(1) + "%";
    if (ambient) ambient.style.filter = "hue-rotate(" + (globalP * 50).toFixed(1) + "deg)";
    if (window.NOCTA_BOKEH) window.NOCTA_BOKEH.setScroll(globalP);

    // hero push
    if (heroWrap) {
      const p = clamp01(y / (vh * 0.9));
      heroWrap.style.transform = "translate3d(0," + (-p * 60).toFixed(1) + "px,0)";
      heroWrap.style.opacity = (1 - p * 1.05).toFixed(3);
      if (wordmark) wordmark.style.transform = "scale(" + (1 + p * 0.14).toFixed(3) + ")";
      if (heroCanvas) heroCanvas.style.opacity = (1 - p * 0.45).toFixed(3);
    }

    // manifesto words
    if (geo.man) {
      const top = geo.man.top - y;
      const p = clamp01((vh * 0.85 - top) / (geo.man.h * 0.7 + vh * 0.05));
      const ws = manifesto.querySelectorAll(".mword");
      const lit = Math.floor(p * ws.length);
      if (manifesto.__lit !== lit) { ws.forEach((w, i) => w.classList.toggle("lit", i < lit)); manifesto.__lit = lit; }
    }

    // pinned horizontal story
    if (geo.pin) {
      const top = geo.pin.top - y;
      const span = geo.pin.h - vh;
      const p = clamp01(-top / Math.max(1, span));
      pinTrack.style.transform = "translate3d(" + (-p * geo.pinMaxX).toFixed(1) + "px,0,0)";
      const idx = Math.round(p * (pinChapters.length - 1));
      if (pin.__idx !== idx) {
        if (pinCur) pinCur.textContent = String(idx + 1).padStart(2, "0");
        pinDots.forEach((d, di) => d.classList.toggle("active", di === idx));
        pin.__idx = idx;
      }
      // depth focus: active chapter sharp, neighbours recede
      if (geo.chaps) {
        const tx = p * geo.pinMaxX, mid = geo.viewW / 2;
        for (const c of geo.chaps) {
          const d = Math.abs(c.cx - tx - mid) / geo.viewW;
          c.el.style.transform = "scale(" + (1 - Math.min(0.07, d * 0.14)).toFixed(3) + ")";
          c.el.style.opacity = (1 - Math.min(0.55, d * 0.85)).toFixed(3);
        }
      }
      geo.__lbStory = Math.min(clamp01(-top / (vh * 0.6)), clamp01((top + geo.pin.h - vh) / (vh * 0.6)));
    }

    // venue tour: walk through the rooms
    if (geo.tour && tourScenes.length) {
      const top = geo.tour.top - y;
      const span = Math.max(1, geo.tour.h - vh);
      const p = clamp01(-top / span);
      const f = p * (tourScenes.length - 1);
      tourScenes.forEach((sc, i) => {
        const d = f - i;
        const ad = Math.abs(d);
        sc.style.opacity = Math.max(0, 1 - ad * 1.35).toFixed(3);
        sc.style.transform = "translate3d(0," + (-d * 7).toFixed(2) + "vh,0) scale(" + (1 + Math.max(0, 0.055 - ad * 0.11)).toFixed(3) + ")";
        sc.style.zIndex = String(20 - Math.round(ad * 10));
        const bg = sc.querySelector(".ts-bg");
        if (bg) bg.style.transform = "scale(" + (1.06 + d * 0.05).toFixed(3) + ")";
      });
      if (tourFill) tourFill.style.height = (p * 100).toFixed(1) + "%";
      geo.__lbTour = Math.min(clamp01(-top / (vh * 0.6)), clamp01((top + geo.tour.h - vh) / (vh * 0.6)));
    }

    // shared cinema letterbox (story or tour on stage)
    {
      const lb = (Math.max(geo.__lbStory || 0, geo.__lbTour || 0) * 4.5).toFixed(2);
      if (lbTop) lbTop.style.height = lb + "vh";
      if (lbBot) lbBot.style.height = lb + "vh";
    }

    // timelines
    for (const tl of geo.tls) {
      const top = tl.top - y;
      const p = clamp01((vh * 0.72 - top) / tl.h);
      if (tl.fill) tl.fill.style.height = (p * 100).toFixed(1) + "%";
      for (const st of tl.steps) st.el.classList.toggle("on", (st.top - y) < vh * 0.78);
    }

    // parallax
    for (const it of geo.plx) {
      const center = (it.top - y) + it.h / 2 - vh / 2;
      it.el.style.transform = "translate3d(0," + (-center * it.sp).toFixed(1) + "px,0)";
    }

    // wipes
    for (const it of geo.wipes) {
      const top = it.top - y;
      const p = clamp01((vh * 0.94 - top) / (vh * 0.5));
      it.el.style.clipPath = "inset(" + ((1 - p) * 14).toFixed(1) + "% 0 0 0 round 20px)";
      it.el.style.transform = "translate3d(0," + ((1 - p) * 40).toFixed(1) + "px,0)";
      it.el.style.opacity = (0.25 + p * 0.75).toFixed(3);
    }
  }

  let rt;
  function onResize() { clearTimeout(rt); rt = setTimeout(() => { measure(); onScroll(); }, 150); }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onResize, { passive: true });
  window.addEventListener("load", () => { measure(); onScroll(); });
  measure(); run();
})();
