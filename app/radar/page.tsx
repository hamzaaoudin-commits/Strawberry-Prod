"use client"

import Link from "next/link"
import { NavBar } from "@/components/strawberry/navbar"
import { Footer } from "@/components/strawberry/footer"
import { useT } from "@/lib/i18n"
import { FaqSection } from "@/components/strawberry/faq-section"
import { FAQ_RADAR } from "@/lib/faqs"


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
  <div className="mb-6">
    <div className="mb-2 font-sans text-xs uppercase tracking-[0.14em] text-brand">{h}</div>
    <p className="text-[15.5px] leading-[1.7] text-chalk-75">{p}</p>
  </div>
)

export default function RadarPage() {
  const t = useT(T)
  const s = t.sezane

  return (
    <main className="min-h-screen overflow-hidden bg-ink font-sans text-white">
      <NavBar />

      <section className="section-hero pb-16 pt-40">
        <div className="glow-top" aria-hidden />
        <div className="shell-md relative">
          <div className="pill mb-8">{t.badge}</div>

          <h1 className="h-display mb-6">
            {t.h1a}
            <br />
            <span className="text-gradient">{t.h1b}</span>
          </h1>

          <p className="lede mx-auto mb-9 max-w-[640px]">{t.lead}</p>

          <div className="flex flex-wrap justify-center gap-3.5">
            <a href={RADAR_SUBSCRIBE_URL} className="btn-primary" rel="noopener">{t.subscribe}</a>
            <a href="#today" className="btn-ghost">{t.seeToday}</a>
          </div>

          <RadarScope />
        </div>
      </section>

      <section className="section">
        <div className="shell-lg">
          <div className="mb-14 text-center">
            <div className="kicker mb-5">{t.readKicker}</div>
            <h2 className="h-section">
              {t.readTitle1}
              <br />
              {t.readTitle2}
            </h2>
          </div>

          <div className="grid-auto">
            {t.read.map((r, i) => (
              <div key={r.label} className="card px-7 py-8">
                <div className="mb-3.5 font-serif text-3xl font-bold text-brand">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mb-3 font-serif text-[1.35rem] font-bold">{r.label}</h3>
                <p className="body-sm">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULL FREE SÉZANE READ */}
      <section id="today" className="section">
        <div className="relative mx-auto max-w-[820px] border border-brand-hair bg-[linear-gradient(180deg,rgba(230,57,70,0.04)_0%,rgba(10,10,10,0.6)_100%)] p-8 md:p-14">
          <span className="bracket-tl" aria-hidden />

          <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
            <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-brand">{t.freeTag}</span>
            <span className="text-xs text-chalk-40">{t.meta}</span>
          </div>

          <h3 className="mb-1 font-serif text-[2.2rem] font-bold">Sézane</h3>
          <div className="mb-8 font-sans text-xs uppercase tracking-[0.15em] text-white/45">{t.sector}</div>

          <ReadBlock h={s.context.h} p={s.context.p} />
          <ReadBlock h={s.signal.h} p={s.signal.p} />
          <ReadBlock h={s.noise.h} p={s.noise.p} />
          <ReadBlock h={s.tension.h} p={s.tension.p} />
          <ReadBlock h={s.heading.h} p={s.heading.p} />

          <div className="mt-2 border-t border-white/10 pt-6">
            <ReadBlock h={s.verdict.h} p={s.verdict.p} />
          </div>
        </div>

        <p className="mx-auto mt-5 max-w-[640px] text-center text-[13px] leading-relaxed text-chalk-40">
          {t.disclaimer}
        </p>
      </section>

      <section className="section text-center">
        <div className="card mx-auto max-w-[560px] px-8 py-11">
          <span className="tag border-[rgba(120,180,255,0.4)] text-[rgba(150,195,255,0.9)]">{t.subLabel}</span>
          <h3 className="mb-3 mt-5 font-serif text-[1.8rem] font-bold">{t.subTitle}</h3>
          <p className="mb-7 font-sans text-[15px] leading-relaxed text-chalk-65">{t.subBody}</p>
          <a href={RADAR_SUBSCRIBE_URL} className="btn-primary" rel="noopener">{t.subscribe}</a>
        </div>
      </section>

      <section className="section pb-28 text-center">
        <div className="mx-auto max-w-[720px]">
          <p className="font-serif text-[clamp(1.15rem,2vw,1.5rem)] italic leading-snug text-chalk-75">
            {t.bridge}
          </p>
          <Link href="/brand-narrative-audit" className="btn-quiet mt-5">{t.bridgeCta}</Link>
        </div>
      </section>

      <FaqSection faqs={FAQ_RADAR} />

      <Footer />
    </main>
  )
}
