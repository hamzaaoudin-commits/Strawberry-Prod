"use client"

import Link from "next/link"
import { NavBar } from "@/components/strawberry/navbar"
import { Footer } from "@/components/strawberry/footer"
import { useT } from "@/lib/i18n"

const SERIF = "var(--font-playfair), 'Playfair Display', serif"
const SANS = "var(--font-dm-sans), 'DM Sans', sans-serif"
const COLOR = "#e63946"
const GLOW = "rgba(230,57,70,0.35)"

// TODO: replace with the live RADAR subscription Stripe link when created.
const RADAR_SUBSCRIBE_URL = "/#contact"

const T = {
  en: {
    badge: "A Strawberry Production publication · daily",
    h1a: "Catch a brand's signal",
    h1b: "before the market does.",
    lead: "Every day, one real brand goes under the radar: what it emits, what jams it, and the heading I'd give it. Not a course — an instrument. The edge your competitors don't have, day after day.",
    subscribe: "Subscribe — 15€/month",
    seeToday: "See today's read",
    readKicker: "The read",
    readTitle1: "Same structure, every day.",
    readTitle2: "Only the brand changes.",
    read: [
      { label: "The signal", body: "What the brand genuinely emits — the position that actually lands, isolated from everything around it." },
      { label: "The noise", body: "What blurs it: the borrowed words, the me-too claims, the promise that fights itself." },
      { label: "The heading", body: "The single repositioning move I'd give it — the decision that would make it unmistakable." },
    ],
    freeTag: "Free read · today",
    meta: "Read n°014 · 11 min",
    sector: "Sector · Fashion / DNVB",
    sezane: {
      context: { h: "Context", p: "Sézane is the French DNVB that made \"accessible premium made-in-France\" a category of its own — sold direct, without wholesale, through a community (\"Les Beaux Jours\") and boutiques that behave like apartments rather than stores. The story is genuinely strong. The question is whether the current pace protects it or erodes it." },
      signal: { h: "The signal — what works", p: "A promise held without drifting: quality, French savoir-faire, a warm and personal tone, and a direct relationship with its audience. Where most fashion brands borrow luxury codes or discount codes, Sézane owns a third position — intimate, tasteful, reachable — and has never let it slip into either extreme. That consistency is the moat." },
      noise: { h: "The noise — what's blurry", p: "Rarity and cadence pull against each other. The brand's emotional charge rests on scarcity — the sold-out drop, the waitlist, the object you almost missed. But the release rhythm has grown fast enough that scarcity starts to read as marketing rather than truth. When \"limited\" arrives every week, the word quietly loses its weight, and the premium promise leans on volume it was built to refuse." },
      tension: { h: "The tension", p: "The founding truth (rare, considered, made-to-last) is now in friction with the operating reality (a high-frequency drop machine). Left unresolved, the brand keeps two promises that slowly cancel each other: buy now because it won't come back — and don't worry, more is coming Thursday." },
      heading: { h: "The repositioning heading", p: "Decide, out loud, which promise is load-bearing. Two honest roads: (1) Honour rarity — slow the cadence, make each release an event again, and let scarcity be real rather than staged. (2) Own the pace — drop the rarity language entirely and reposition around a living, evolving wardrobe: not \"rare\", but \"always exactly right, always new\". Both are strong. The only losing move is keeping both." },
      verdict: { h: "Verdict", p: "Sézane doesn't have a positioning problem — it has a promise it has outgrown without renaming. That's not a messaging fix; it's an architecture decision. And it's exactly the kind of decision a founder is too close to make alone." },
    },
    disclaimer: "Brand analysed from public information. Editorial opinion — never a client. RADAR is not affiliated with any brand cited.",
    arsenalTitle: "Rather run the read yourself?",
    arsenalBody: "Arsenal is the RADAR method as a toolkit — the exact instruments to apply the grid to your own brand, without us.",
    arsenalCta: "Discover Arsenal →",
    subLabel: "Subscription · 15€/mo",
    subTitle: "The daily read, on tap.",
    subBody: "The full library, one new read a day, and the habit that lets you price any positioning in seconds. Cancel anytime.",
    bridge: "RADAR trains the eye. When you're ready to build the architecture — not just read it — the commission is waiting.",
    bridgeCta: "See BRAND NARRATIVE ARCHITECTURE →",
  },
  fr: {
    badge: "Une publication de Strawberry Production · quotidien",
    h1a: "Capte le signal d'une marque",
    h1b: "avant le marché.",
    lead: "Chaque jour, une marque réelle passe au radar : ce qui émet (le signal), ce qui parasite (le bruit), et le cap que je lui donnerais. Pas un cours — un instrument. L'avance que tes concurrents n'ont pas, jour après jour.",
    subscribe: "S'abonner — 15€/mois",
    seeToday: "Voir la fiche du jour",
    readKicker: "La lecture",
    readTitle1: "Même structure, chaque jour.",
    readTitle2: "Seule la marque change.",
    read: [
      { label: "Le signal", body: "Ce que la marque émet vraiment — la position qui porte, isolée de tout le reste." },
      { label: "Le bruit", body: "Ce qui la brouille : les mots empruntés, les promesses me-too, la promesse qui se contredit." },
      { label: "Le cap", body: "Le seul mouvement de repositionnement que je lui donnerais — la décision qui la rendrait indiscutable." },
    ],
    freeTag: "Accès libre · aujourd'hui",
    meta: "Fiche n°014 · 11 min",
    sector: "Secteur · Mode / DNVB",
    sezane: {
      context: { h: "Contexte", p: "Sézane est la DNVB française qui a fait du « premium accessible made-in-France » une catégorie à part entière — vendue en direct, sans wholesale, portée par une communauté (« Les Beaux Jours ») et des boutiques qui tiennent de l'appartement plus que du magasin. Le récit est réellement fort. La question : la cadence actuelle le protège-t-elle ou l'érode-t-elle ?" },
      signal: { h: "Le signal — ce qui marche", p: "Une promesse tenue sans dévier : qualité, savoir-faire français, ton chaleureux et personnel, relation directe à son public. Là où la plupart empruntent les codes du luxe ou ceux de la promo, Sézane occupe une troisième position — intime, juste, atteignable — sans jamais glisser vers l'un des deux extrêmes. Cette constance est la douve." },
      noise: { h: "Le bruit — ce qui est flou", p: "Rareté et cadence se tirent dessus. La charge émotionnelle repose sur la rareté — le drop épuisé, la liste d'attente, l'objet qu'on a failli manquer. Mais le rythme de sorties s'est accéléré au point que la rareté commence à se lire comme du marketing, plus comme une vérité. Quand « édition limitée » revient chaque semaine, le mot perd son poids, et la promesse premium s'appuie sur un volume qu'elle était censée refuser." },
      tension: { h: "La tension", p: "La vérité fondatrice (rare, pensé, fait pour durer) frotte désormais avec la réalité opérationnelle (une machine à drops haute fréquence). Non tranchée, la marque tient deux promesses qui s'annulent lentement : achète maintenant, ça ne reviendra pas — et rassure-toi, il y en aura d'autres jeudi." },
      heading: { h: "Le cap de repositionnement", p: "Trancher, à voix haute, quelle promesse porte la structure. Deux routes honnêtes : (1) Honorer la rareté — ralentir la cadence, refaire de chaque sortie un événement, et rendre la rareté réelle plutôt que mise en scène. (2) Assumer le rythme — abandonner tout le langage de rareté et se repositionner sur le vestiaire vivant : non plus « rare », mais « toujours juste, toujours nouveau ». Les deux sont forts. Le seul coup perdant, c'est de garder les deux." },
      verdict: { h: "Verdict", p: "Sézane n'a pas un problème de positionnement — elle a une promesse qu'elle a dépassée sans la renommer. Ce n'est pas un ajustement de message ; c'est une décision d'architecture. Et c'est exactement le genre de décision qu'un fondateur est trop proche pour prendre seul." },
    },
    disclaimer: "Marque analysée à partir d'informations publiques. Opinion éditoriale — jamais un client. RADAR n'est lié à aucune marque citée.",
    arsenalTitle: "Plutôt faire la lecture toi-même ?",
    arsenalBody: "Arsenal, c'est la méthode RADAR en boîte à outils — les instruments exacts pour appliquer la grille à ta propre marque, sans nous.",
    arsenalCta: "Découvrir Arsenal →",
    subLabel: "Abonnement · 15€/mois",
    subTitle: "La lecture du jour, à volonté.",
    subBody: "La bibliothèque complète, une nouvelle fiche par jour, et l'habitude qui te fait lire n'importe quel positionnement en quelques secondes. Résiliable à tout moment.",
    bridge: "RADAR forme l'œil. Quand tu es prêt à bâtir l'architecture — pas seulement à la lire — la commande t'attend.",
    bridgeCta: "Voir BRAND NARRATIVE ARCHITECTURE →",
  },
  es: {
    badge: "Una publicación de Strawberry Production · diario",
    h1a: "Capta la señal de una marca",
    h1b: "antes que el mercado.",
    lead: "Cada día, una marca real pasa por el radar: lo que emite (la señal), lo que interfiere (el ruido) y el rumbo que le daría. No un curso — un instrumento. La ventaja que tus competidores no tienen, día tras día.",
    subscribe: "Suscribirse — 15€/mes",
    seeToday: "Ver la ficha de hoy",
    readKicker: "La lectura",
    readTitle1: "Misma estructura, cada día.",
    readTitle2: "Solo cambia la marca.",
    read: [
      { label: "La señal", body: "Lo que la marca emite de verdad — la posición que aterriza, aislada de todo lo demás." },
      { label: "El ruido", body: "Lo que la enturbia: las palabras prestadas, los reclamos me-too, la promesa que se contradice." },
      { label: "El rumbo", body: "El único movimiento de reposicionamiento que le daría — la decisión que la haría inconfundible." },
    ],
    freeTag: "Acceso libre · hoy",
    meta: "Ficha n°014 · 11 min",
    sector: "Sector · Moda / DNVB",
    sezane: {
      context: { h: "Contexto", p: "Sézane es la DNVB francesa que convirtió el «premium accesible made-in-France» en una categoría propia — venta directa, sin wholesale, con una comunidad («Les Beaux Jours») y boutiques que parecen apartamentos más que tiendas. El relato es realmente fuerte. La pregunta: ¿la cadencia actual lo protege o lo erosiona?" },
      signal: { h: "La señal — lo que funciona", p: "Una promesa sostenida sin desviarse: calidad, savoir-faire francés, un tono cálido y personal, y una relación directa con su público. Donde la mayoría toma prestados los códigos del lujo o del descuento, Sézane ocupa una tercera posición — íntima, con gusto, alcanzable — sin caer en ninguno de los dos extremos. Esa constancia es el foso." },
      noise: { h: "El ruido — lo difuso", p: "Rareza y cadencia tiran en direcciones opuestas. La carga emocional se apoya en la escasez — el drop agotado, la lista de espera, el objeto que casi te pierdes. Pero el ritmo de lanzamientos se ha acelerado tanto que la escasez empieza a leerse como marketing, no como verdad. Cuando «edición limitada» llega cada semana, la palabra pierde peso, y la promesa premium se apoya en un volumen que estaba hecha para rechazar." },
      tension: { h: "La tensión", p: "La verdad fundacional (raro, pensado, hecho para durar) roza ahora con la realidad operativa (una máquina de drops de alta frecuencia). Sin resolver, la marca sostiene dos promesas que se anulan poco a poco: compra ya, no volverá — y tranquilo, habrá más el jueves." },
      heading: { h: "El rumbo de reposicionamiento", p: "Decidir, en voz alta, qué promesa sostiene la estructura. Dos caminos honestos: (1) Honrar la rareza — frenar la cadencia, volver a hacer de cada lanzamiento un evento y que la escasez sea real, no escenificada. (2) Asumir el ritmo — soltar todo el lenguaje de rareza y reposicionarse en el vestuario vivo: ya no «raro», sino «siempre exacto, siempre nuevo». Ambos son fuertes. La única jugada perdedora es quedarse con los dos." },
      verdict: { h: "Veredicto", p: "Sézane no tiene un problema de posicionamiento — tiene una promesa que ha superado sin renombrar. No es un ajuste de mensaje; es una decisión de arquitectura. Y es justo el tipo de decisión que un fundador está demasiado cerca para tomar solo." },
    },
    disclaimer: "Marca analizada a partir de información pública. Opinión editorial — nunca un cliente. RADAR no está afiliado a ninguna marca citada.",
    arsenalTitle: "¿Prefieres hacer la lectura tú mismo?",
    arsenalBody: "Arsenal es el método RADAR como kit — los instrumentos exactos para aplicar la grilla a tu propia marca, sin nosotros.",
    arsenalCta: "Descubrir Arsenal →",
    subLabel: "Suscripción · 15€/mes",
    subTitle: "La lectura diaria, a demanda.",
    subBody: "La biblioteca completa, una ficha nueva al día, y el hábito que te permite tasar cualquier posicionamiento en segundos. Cancela cuando quieras.",
    bridge: "RADAR entrena el ojo. Cuando estés listo para construir la arquitectura — no solo leerla — el encargo te espera.",
    bridgeCta: "Ver BRAND NARRATIVE ARCHITECTURE →",
  },
}

function RadarScope() {
  return (
    <div className="hero-stage" aria-hidden="true">
      <div className="radar-scope">
        <div className="scope-ring r1" />
        <div className="scope-ring r2" />
        <div className="scope-ring r3" />
        <div className="scope-cross" />
        <div className="scope-sweep" />
        <div className="scope-center" />
        <div className="blip" style={{ "--a": "38deg", "--d": "120px", "--phase": "0.58s" } as React.CSSProperties}><span className="dot" /><span className="ping" /><span className="blip-label">Sézane</span></div>
        <div className="blip" style={{ "--a": "118deg", "--d": "92px", "--phase": "1.8s" } as React.CSSProperties}><span className="dot" /><span className="ping" /><span className="blip-label">Qonto</span></div>
        <div className="blip left" style={{ "--a": "212deg", "--d": "128px", "--phase": "3.24s" } as React.CSSProperties}><span className="dot" /><span className="ping" /><span className="blip-label">Typology</span></div>
        <div className="blip left" style={{ "--a": "300deg", "--d": "76px", "--phase": "4.58s" } as React.CSSProperties}><span className="dot" /><span className="ping" /><span className="blip-label">Diptyque</span></div>
      </div>
      <style jsx>{`
        .hero-stage { position: relative; height: 320px; margin-top: 40px; display: flex; align-items: center; justify-content: center; }
        .radar-scope { position: relative; width: 300px; height: 300px; border-radius: 50%; }
        .scope-ring { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); border: 1px solid rgba(255,255,255,0.12); border-radius: 50%; }
        .scope-ring.r1 { width: 300px; height: 300px; }
        .scope-ring.r2 { width: 200px; height: 200px; }
        .scope-ring.r3 { width: 100px; height: 100px; }
        .scope-cross::before, .scope-cross::after { content: ""; position: absolute; top: 50%; left: 50%; background: rgba(255,255,255,0.12); }
        .scope-cross::before { width: 300px; height: 1px; transform: translate(-50%,-50%); }
        .scope-cross::after { width: 1px; height: 300px; transform: translate(-50%,-50%); }
        .scope-center { position: absolute; top: 50%; left: 50%; width: 8px; height: 8px; background: #fff; border-radius: 50%; transform: translate(-50%,-50%); z-index: 3; }
        .scope-sweep { position: absolute; inset: 0; border-radius: 50%; background: conic-gradient(from 0deg, rgba(230,57,70,0) 0deg, rgba(230,57,70,0) 300deg, rgba(230,57,70,0.10) 340deg, rgba(230,57,70,0.32) 356deg, rgba(230,57,70,0.6) 360deg); animation: radar-sweep 5.5s linear infinite; z-index: 2; }
        .scope-sweep::after { content: ""; position: absolute; top: 0; left: 50%; width: 1px; height: 50%; background: linear-gradient(#e63946, rgba(230,57,70,0)); transform-origin: bottom center; }
        .blip { position: absolute; top: 50%; left: 50%; width: 9px; height: 9px; transform: rotate(var(--a)) translateY(calc(-1 * var(--d))) rotate(calc(-1 * var(--a))); z-index: 3; }
        .blip .dot { position: absolute; inset: 0; background: #e63946; border-radius: 50%; box-shadow: 0 0 8px rgba(230,57,70,0.35); }
        .blip .ping { position: absolute; top: 50%; left: 50%; width: 9px; height: 9px; border-radius: 50%; border: 1.5px solid #e63946; transform: translate(-50%,-50%) scale(1); opacity: 0; animation: blip-ping 5.5s linear infinite; animation-delay: var(--phase, 0s); }
        .blip .blip-label { position: absolute; left: 16px; top: 50%; transform: translateY(-50%); font-family: 'DM Sans', monospace; font-size: 10px; letter-spacing: 0.06em; text-transform: uppercase; white-space: nowrap; color: rgba(255,255,255,0.7); background: rgba(10,10,10,0.7); padding: 2px 6px; border-radius: 4px; }
        .blip.left .blip-label { left: auto; right: 16px; }
        @keyframes radar-sweep { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes blip-ping {
          0% { opacity: 0; transform: translate(-50%,-50%) scale(1); }
          4% { opacity: 0.9; transform: translate(-50%,-50%) scale(1); }
          22% { opacity: 0; transform: translate(-50%,-50%) scale(3.4); }
          100% { opacity: 0; transform: translate(-50%,-50%) scale(3.4); }
        }
        @media (prefers-reduced-motion: reduce) {
          .scope-sweep { animation: none; background: conic-gradient(from 300deg, rgba(230,57,70,0) 0deg, rgba(230,57,70,0.28) 55deg, rgba(230,57,70,0) 60deg); }
          .blip .ping { animation: none; opacity: 0; }
        }
      `}</style>
    </div>
  )
}

const ReadBlock = ({ h, p }: { h: string; p: string }) => (
  <div style={{ marginBottom: 24 }}>
    <div style={{ fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: COLOR, marginBottom: 8 }}>{h}</div>
    <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "rgba(255,255,255,0.78)" }}>{p}</p>
  </div>
)

export default function RadarPage() {
  const t = useT(T)
  const s = t.sezane
  return (
    <main style={{ background: "#0a0a0a", color: "#fff", minHeight: "100vh", fontFamily: SANS, overflow: "hidden" }}>
      <NavBar />

      {/* HERO with radar scope */}
      <section style={{ padding: "150px clamp(1.5rem,4vw,4rem) 60px", position: "relative", textAlign: "center" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at 50% 0%, ${GLOW} 0%, transparent 60%)`, opacity: 0.3, pointerEvents: "none" }} />
        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "inline-block", padding: "8px 20px", border: `1px solid ${COLOR}`, borderRadius: 100, fontSize: 11, letterSpacing: "0.2em", color: COLOR, marginBottom: 32, textTransform: "uppercase" }}>{t.badge}</div>
          <h1 style={{ fontFamily: SERIF, fontSize: "clamp(2.25rem,6vw,4.25rem)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.03em", marginBottom: 24 }}>
            {t.h1a}<br />
            <span style={{ background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{t.h1b}</span>
          </h1>
          <p style={{ fontSize: "clamp(1rem,1.5vw,1.2rem)", color: "rgba(255,255,255,0.68)", maxWidth: 640, margin: "0 auto 36px", lineHeight: 1.65 }}>{t.lead}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
            <a href={RADAR_SUBSCRIBE_URL} style={{ background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, color: "#fff", padding: "15px 32px", borderRadius: 100, fontSize: 15, fontWeight: 600, textDecoration: "none" }}>{t.subscribe}</a>
            <a href="#today" style={{ border: "1px solid rgba(255,255,255,0.2)", color: "#fff", padding: "15px 32px", borderRadius: 100, fontSize: 15, fontWeight: 500, textDecoration: "none" }}>{t.seeToday}</a>
          </div>
          <RadarScope />
        </div>
      </section>

      {/* READ STRUCTURE */}
      <section style={{ padding: "80px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 20, textTransform: "uppercase" }}>{t.readKicker}</div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.9rem,4vw,3rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.15 }}>{t.readTitle1}<br />{t.readTitle2}</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {t.read.map((r, i) => (
              <div key={r.label} style={{ padding: "32px 28px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.09)" }}>
                <div style={{ fontFamily: SERIF, fontSize: 32, fontWeight: 700, color: COLOR, marginBottom: 14 }}>0{i + 1}</div>
                <h3 style={{ fontFamily: SERIF, fontSize: "1.35rem", fontWeight: 700, marginBottom: 12 }}>{r.label}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "rgba(255,255,255,0.62)" }}>{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULL FREE SÉZANE READ */}
      <section id="today" style={{ padding: "80px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", border: `1px solid rgba(230,57,70,0.25)`, background: "linear-gradient(180deg, rgba(230,57,70,0.04) 0%, rgba(10,10,10,0.6) 100%)", padding: "clamp(2rem,5vw,3.5rem)", position: "relative" }}>
          <div style={{ position: "absolute", top: -1, left: -1, width: 44, height: 44, borderTop: `2px solid ${COLOR}`, borderLeft: `2px solid ${COLOR}` }} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 8, marginBottom: 8 }}>
            <span style={{ fontSize: 11, letterSpacing: "0.2em", color: COLOR, textTransform: "uppercase" }}>{t.freeTag}</span>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>{t.meta}</span>
          </div>
          <h3 style={{ fontFamily: SERIF, fontSize: "2.2rem", fontWeight: 700, marginBottom: 4 }}>Sézane</h3>
          <div style={{ fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: 32 }}>{t.sector}</div>

          <ReadBlock h={s.context.h} p={s.context.p} />
          <ReadBlock h={s.signal.h} p={s.signal.p} />
          <ReadBlock h={s.noise.h} p={s.noise.p} />
          <ReadBlock h={s.tension.h} p={s.tension.p} />
          <ReadBlock h={s.heading.h} p={s.heading.p} />
          <div style={{ marginTop: 8, paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            <ReadBlock h={s.verdict.h} p={s.verdict.p} />
          </div>
        </div>
        <p style={{ textAlign: "center", fontSize: 13, color: "rgba(255,255,255,0.4)", marginTop: 20, maxWidth: 640, marginLeft: "auto", marginRight: "auto", lineHeight: 1.6 }}>{t.disclaimer}</p>
      </section>

      {/* SUBSCRIPTION */}
      <section style={{ padding: "80px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.06)", textAlign: "center" }}>
        <div style={{ maxWidth: 560, margin: "0 auto", padding: "44px 34px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.1)" }}>
          <span style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", padding: "4px 10px", borderRadius: 100, border: "1px solid rgba(120,180,255,0.4)", color: "rgba(150,195,255,0.9)" }}>{t.subLabel}</span>
          <h3 style={{ fontFamily: SERIF, fontSize: "1.8rem", fontWeight: 700, margin: "22px 0 12px" }}>{t.subTitle}</h3>
          <p style={{ fontSize: 15, lineHeight: 1.65, color: "rgba(255,255,255,0.65)", marginBottom: 28 }}>{t.subBody}</p>
          <a href={RADAR_SUBSCRIBE_URL} style={{ display: "inline-block", background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, color: "#fff", padding: "14px 32px", borderRadius: 100, fontSize: 15, fontWeight: 600, textDecoration: "none" }}>{t.subscribe}</a>
        </div>
      </section>

      {/* ARSENAL POINTER (own page) */}
      <section style={{ padding: "70px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 24, alignItems: "center", justifyContent: "space-between", padding: "32px 34px", border: `1px solid rgba(230,57,70,0.25)`, background: "rgba(255,255,255,0.02)" }}>
          <div style={{ flex: "1 1 320px" }}>
            <h3 style={{ fontFamily: SERIF, fontSize: "1.5rem", fontWeight: 700, marginBottom: 10 }}>{t.arsenalTitle}</h3>
            <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "rgba(255,255,255,0.62)" }}>{t.arsenalBody}</p>
          </div>
          <Link href="/arsenal" style={{ background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, color: "#fff", padding: "14px 28px", borderRadius: 100, fontSize: 14, fontWeight: 600, textDecoration: "none", whiteSpace: "nowrap" }}>{t.arsenalCta}</Link>
        </div>
      </section>

      {/* BRIDGE */}
      <section style={{ padding: "70px clamp(1.5rem,4vw,4rem) 110px", borderTop: "1px solid rgba(255,255,255,0.06)", textAlign: "center" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <p style={{ fontFamily: SERIF, fontSize: "clamp(1.15rem,2vw,1.5rem)", fontStyle: "italic", color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>{t.bridge}</p>
          <Link href="/brand-narrative-audit" style={{ display: "inline-block", marginTop: 20, color: COLOR, fontSize: 14, fontWeight: 600, textDecoration: "none" }}>{t.bridgeCta}</Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
