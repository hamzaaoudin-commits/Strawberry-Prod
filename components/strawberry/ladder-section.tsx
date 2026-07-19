"use client"

import { useState } from "react"
import Link from "next/link"
import { useT } from "@/lib/i18n"

type SituationId = "articulate" | "confused" | "outgrown" | "execution"

type Rung = {
  key: string
  name: string
  price: string
  cadence: string
  fmt: "sub" | "shot" | "post"
  line: string
  href: string
  answers: SituationId[]
  featured?: boolean
}

const SITUATION_IDS: SituationId[] = ["articulate", "confused", "outgrown", "execution"]

const T = {
  en: {
    kicker: "The Ladder",
    h1a: "One studio. One method.",
    h1b: "Four ways in.",
    sub: "Not a menu — a ladder. Every rung is the same conviction about narrative truth, entered at a different altitude. Start where you are.",
    where: "Which of these is true for you right now?",
    showAll: "Show everything",
    situations: [
      "I can't explain what I do in one sentence without losing the room",
      "We sell, but prospects keep comparing us to competitors we're nothing like",
      "The company outgrew its story — we still pitch what we were two years ago",
      "The positioning is solid. What's missing is someone shipping it every week",
    ],
    fmt: { sub: "Subscription", shot: "One-shot", post: "After the audit" },
    featuredCta: "See the commission →",
    cta: "Learn more →",
    foot: "Every rung feeds the next. RADAR trains the eye, the Audit builds the architecture, MOMENTUM keeps it alive. You never pay for the same thing twice.",
    rungs: [
      { key: "radar", name: "RADAR", price: "15€", cadence: "/ month", fmt: "sub", answers: ["articulate"], line: "One real brand read every day. Read positioning in seconds — the instrument your competitors don't have.", href: "/radar" },
      { key: "audit", name: "BRAND NARRATIVE AUDIT", price: "490€", cadence: "one-time", fmt: "shot", answers: ["articulate", "confused"], line: "A written diagnosis of your current narrative — what lands, what blurs you, and the moves to make. Seven days, no call.", href: "/audit" },
      { key: "architecture", name: "BRAND NARRATIVE ARCHITECTURE", price: "4,500€", cadence: "one-time", fmt: "shot", answers: ["confused", "outgrown"], line: "The signature commission. A complete repositioning — identity, position and language — impossible to confuse, impossible to generate.", href: "/brand-narrative-audit", featured: true },
      { key: "momentum", name: "MOMENTUM", price: "from 1,500€", cadence: "/ month", fmt: "post", answers: ["execution"], line: "Creative direction + content execution, month by month. Once the architecture exists, the team that keeps telling your story — and carries it into the feed every day.", href: "/momentum" },
    ] as Rung[],
  },
  fr: {
    kicker: "L'Échelle",
    h1a: "Un studio. Une méthode.",
    h1b: "Quatre façons d'entrer.",
    sub: "Pas un menu — une échelle. Chaque barreau, c'est la même conviction sur la vérité narrative, à une altitude différente. Commencez là où vous en êtes.",
    where: "Laquelle de ces phrases est vraie pour vous, aujourd'hui ?",
    showAll: "Tout afficher",
    situations: [
      "Je n'arrive pas à expliquer ce que je fais en une phrase sans perdre la salle",
      "On vend, mais les prospects nous comparent à des concurrents qui n'ont rien à voir",
      "L'entreprise a dépassé son récit — on pitche encore ce qu'on était il y a deux ans",
      "Le positionnement est solide. Ce qui manque, c'est quelqu'un qui l'exécute chaque semaine",
    ],
    fmt: { sub: "Abonnement", shot: "One-shot", post: "Après l'audit" },
    featuredCta: "Voir la commande →",
    cta: "En savoir plus →",
    foot: "Chaque barreau nourrit le suivant. RADAR forme l'œil, l'Audit bâtit l'architecture, MOMENTUM la fait vivre. Vous ne payez jamais deux fois la même chose.",
    rungs: [
      { key: "radar", name: "RADAR", price: "15€", cadence: "/ mois", fmt: "sub", answers: ["articulate"], line: "Une vraie marque disséquée chaque jour. Lisez un positionnement en quelques secondes — l'instrument que vos concurrents n'ont pas.", href: "/radar" },
      { key: "audit", name: "BRAND NARRATIVE AUDIT", price: "490€", cadence: "one-shot", fmt: "shot", answers: ["articulate", "confused"], line: "Un diagnostic écrit de votre récit actuel — ce qui porte, ce qui vous brouille, et les mouvements à faire. Sept jours, sans appel.", href: "/audit" },
      { key: "architecture", name: "BRAND NARRATIVE ARCHITECTURE", price: "4 500€", cadence: "one-shot", fmt: "shot", answers: ["confused", "outgrown"], line: "La commande signature. Un repositionnement complet — identité, position et langage — impossible à confondre, impossible à générer.", href: "/brand-narrative-audit", featured: true },
      { key: "momentum", name: "MOMENTUM", price: "dès 1 500€", cadence: "/ mois", fmt: "post", answers: ["execution"], line: "Direction créative + exécution de contenu au mois. Une fois l'architecture posée, l'équipe qui continue de raconter votre histoire — et la fait vivre au quotidien.", href: "/momentum" },
    ] as Rung[],
  },
  es: {
    kicker: "La Escalera",
    h1a: "Un estudio. Un método.",
    h1b: "Cuatro formas de entrar.",
    sub: "No es un menú — es una escalera. Cada peldaño es la misma convicción sobre la verdad narrativa, a otra altura. Empiece donde está.",
    where: "¿Cuál de estas frases es verdad para usted hoy?",
    showAll: "Ver todo",
    situations: [
      "No consigo explicar lo que hago en una frase sin perder a la sala",
      "Vendemos, pero los prospectos nos comparan con competidores que no se nos parecen en nada",
      "La empresa superó su relato — seguimos presentando lo que éramos hace dos años",
      "El posicionamiento es sólido. Lo que falta es alguien que lo ejecute cada semana",
    ],
    fmt: { sub: "Suscripción", shot: "Pago único", post: "Tras la auditoría" },
    featuredCta: "Ver el encargo →",
    cta: "Saber más →",
    foot: "Cada peldaño alimenta el siguiente. RADAR entrena el ojo, la Auditoría construye la arquitectura, MOMENTUM la mantiene viva. Nunca paga dos veces por lo mismo.",
    rungs: [
      { key: "radar", name: "RADAR", price: "15€", cadence: "/ mes", fmt: "sub", answers: ["articulate"], line: "Una marca real diseccionada cada día. Lea un posicionamiento en segundos — el instrumento que sus competidores no tienen.", href: "/radar" },
      { key: "audit", name: "BRAND NARRATIVE AUDIT", price: "490€", cadence: "pago único", fmt: "shot", answers: ["articulate", "confused"], line: "Un diagnóstico escrito de su relato actual — lo que aterriza, lo que le difumina y los movimientos a realizar. Siete días, sin llamada.", href: "/audit" },
      { key: "architecture", name: "BRAND NARRATIVE ARCHITECTURE", price: "4.500€", cadence: "pago único", fmt: "shot", answers: ["confused", "outgrown"], line: "El encargo insignia. Un reposicionamiento completo — identidad, posición y lenguaje — imposible de confundir, imposible de generar.", href: "/brand-narrative-audit", featured: true },
      { key: "momentum", name: "MOMENTUM", price: "desde 1.500€", cadence: "/ mes", fmt: "post", answers: ["execution"], line: "Dirección creativa + ejecución de contenido mensual. Una vez existe la arquitectura, el equipo que sigue contando su historia — y la lleva al feed cada día.", href: "/momentum" },
    ] as Rung[],
  },
}

const FMT_STYLE: Record<Rung["fmt"], string> = {
  sub: "border-[rgba(120,180,255,0.4)] text-[rgba(150,195,255,0.9)]",
  shot: "border-[rgba(230,57,70,0.4)] text-brand",
  post: "border-white/20 text-chalk-55",
}

export function LadderSection() {
  const t = useT(T)
  const [selected, setSelected] = useState<SituationId | null>(null)

  const isDimmed = (r: Rung) => selected !== null && !r.answers.includes(selected)

  return (
    <section id="ladder" className="section relative overflow-hidden bg-ink text-white">
      <div className="glow-top" aria-hidden />

      <div className="shell relative">
        <div className="mb-14 text-center">
          <div className="kicker mb-6">{t.kicker}</div>
          <h2 className="h-section mb-7">
            {t.h1a}
            <br />
            <span className="text-gradient">{t.h1b}</span>
          </h2>
          <p className="lede mx-auto max-w-[620px]">{t.sub}</p>
        </div>

        {/* SITUATION ROUTER — concrete statements, not vague stages. */}
        <div className="mx-auto mb-16 max-w-[820px]">
          <div className="mb-6 text-center font-sans text-[13px] uppercase tracking-[0.15em] text-chalk-40">
            {t.where}
          </div>

          <div className="flex flex-col gap-2.5">
            {t.situations.map((label, i) => {
              const id = SITUATION_IDS[i]
              const active = selected === id
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setSelected(active ? null : id)}
                  aria-pressed={active}
                  className={[
                    "flex items-start gap-4 border px-5 py-4 text-left font-sans text-[15px] leading-snug transition-colors",
                    active
                      ? "border-brand bg-brand/10 text-white"
                      : "border-hair-strong bg-white/[0.02] text-chalk-75 hover:border-white/25 hover:text-white",
                  ].join(" ")}
                >
                  <span className={`font-serif text-sm ${active ? "text-brand" : "text-chalk-40"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{label}</span>
                </button>
              )
            })}
          </div>

          {selected && (
            <div className="mt-4 text-center">
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="font-sans text-[13px] text-chalk-40 underline underline-offset-4 transition-colors hover:text-white"
              >
                {t.showAll}
              </button>
            </div>
          )}
        </div>

        <div className="grid-auto">
          {t.rungs.map((r) => {
            const dimmed = isDimmed(r)
            return (
              <Link
                key={r.key}
                href={r.href}
                className={[
                  "relative block p-7 pt-9 no-underline transition-all duration-300",
                  r.featured ? "card-featured" : "border border-white/10 bg-white/[0.02]",
                  dimmed ? "opacity-30 saturate-50" : "opacity-100 hover:border-brand",
                ].join(" ")}
              >
                {r.featured && (
                  <>
                    <span className="bracket-tl" aria-hidden />
                    <span className="bracket-br" aria-hidden />
                  </>
                )}

                <div className="mb-5 flex flex-wrap gap-2">
                  <span className={`tag ${FMT_STYLE[r.fmt]}`}>{t.fmt[r.fmt]}</span>
                </div>

                <h3 className="mb-3 font-serif text-2xl font-bold leading-tight tracking-[-0.02em] text-white">
                  {r.name}
                </h3>

                <div className="mb-4 flex items-baseline gap-1.5">
                  <span className={`font-serif text-[1.7rem] font-bold ${r.featured ? "text-brand" : "text-white"}`}>
                    {r.price}
                  </span>
                  <span className="font-sans text-[13px] text-chalk-55">{r.cadence}</span>
                </div>

                <p className="mb-5 body-sm">{r.line}</p>

                <span className="btn-quiet">{r.featured ? t.featuredCta : t.cta}</span>
              </Link>
            )
          })}
        </div>

        <p className="mx-auto mt-12 max-w-[640px] text-center font-sans text-[13px] leading-relaxed text-chalk-40">
          {t.foot}
        </p>
      </div>
    </section>
  )
}
