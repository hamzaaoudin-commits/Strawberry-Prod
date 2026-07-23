"use client"

import { useState } from "react"
import { LocaleLink as Link } from "@/components/locale-link"
import { useT } from "@/lib/i18n"
import { OfferCover, type OfferKey } from "@/components/strawberry/offer-covers"

type CoverKey = OfferKey

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

/** Quelle couverture pour quel barreau. */
const COVER: Record<string, OfferKey> = {
  radar: "radar",
  audit: "audit",
  architecture: "architecture",
  momentum: "momentum",
}

const SITUATION_IDS: SituationId[] = ["articulate", "confused", "outgrown", "execution"]

const T = {
  en: {
    kicker: "The Ladder",
    h1a: "One studio. One method.",
    h1b: "Four ways in.",
    sub: "Four ways to work with the studio, from 15€ to 4,500€. Same method each time — only the depth changes. Pick the one that matches where you are today.",
    where: "Which of these is true for you right now?",
    showAll: "Show everything",
    recommended: "Recommended for you",
    situations: [
      "I can't explain what I do in one sentence without losing the room",
      "We sell, but prospects keep comparing us to competitors we're nothing like",
      "The company outgrew its story — we still pitch what we were two years ago",
      "The positioning is solid. What's missing is someone shipping it every week",
    ],
    fmt: { sub: "Subscription", shot: "One-shot", post: "After the audit" },
    featuredCta: "See the commission →",
    cta: "Learn more →",
    foot: "Start at any rung. If you order the audit first, its 490€ comes off the architecture — you never pay twice for the same work.",
    rungs: [
      { key: "radar", name: "RADAR", price: "15€", cadence: "/ month", fmt: "sub", answers: ["articulate"], line: "A new brand dissected every day, plus the full archive, the nine manifestos and the method broken into lessons. Ten minutes a day to read any positioning on sight.", href: "/radar" },
      { key: "audit", name: "BRAND NARRATIVE AUDIT", price: "490€", cadence: "one-time", fmt: "shot", answers: ["articulate", "confused"], line: "A written diagnosis of your current narrative — what lands, what blurs you, and the moves to make.", href: "/audit" },
      { key: "architecture", name: "BRAND NARRATIVE ARCHITECTURE", price: "4,500€", cadence: "one-time", fmt: "shot", answers: ["confused", "outgrown"], line: "The signature commission. A complete repositioning — identity, position and language — impossible to confuse, impossible to generate.", href: "/brand-narrative-audit", featured: true },
      { key: "momentum", name: "MOMENTUM", price: "from 1,500€", cadence: "/ month", fmt: "post", answers: ["execution"], line: "Creative direction + content execution, month by month. Once the architecture exists, the team that keeps telling your story — and carries it into the feed every day.", href: "/momentum" },
    ] as Rung[],
  },
  fr: {
    kicker: "L'Échelle",
    h1a: "Un studio. Une méthode.",
    h1b: "Quatre façons d'entrer.",
    sub: "Quatre façons de travailler avec le studio, de 15€ à 4 500€. La même méthode à chaque fois — seule la profondeur change. Prenez celle qui correspond à où vous en êtes.",
    where: "Laquelle de ces phrases est vraie pour vous, aujourd'hui ?",
    showAll: "Tout afficher",
    recommended: "Recommandé pour vous",
    situations: [
      "Je n'arrive pas à expliquer ce que je fais en une phrase sans perdre la salle",
      "On vend, mais les prospects nous comparent à des concurrents qui n'ont rien à voir",
      "L'entreprise a dépassé son récit — on pitche encore ce qu'on était il y a deux ans",
      "Le positionnement est solide. Ce qui manque, c'est quelqu'un qui l'exécute chaque semaine",
    ],
    fmt: { sub: "Abonnement", shot: "One-shot", post: "Après l'audit" },
    featuredCta: "Voir la commande →",
    cta: "En savoir plus →",
    foot: "Commencez par le barreau que vous voulez. Si vous prenez l'audit d'abord, ses 490€ sont déduits de l'architecture — vous ne payez jamais deux fois le même travail.",
    rungs: [
      { key: "radar", name: "RADAR", price: "15€", cadence: "/ mois", fmt: "sub", answers: ["articulate"], line: "Une marque disséquée chaque jour, plus toute l'archive, les neuf manifestes et la méthode découpée en leçons. Dix minutes par jour pour lire n'importe quel positionnement à l'œil.", href: "/radar" },
      { key: "audit", name: "BRAND NARRATIVE AUDIT", price: "490€", cadence: "one-shot", fmt: "shot", answers: ["articulate", "confused"], line: "Un diagnostic écrit de votre récit actuel — ce qui porte, ce qui vous brouille, et les mouvements à faire.", href: "/audit" },
      { key: "architecture", name: "BRAND NARRATIVE ARCHITECTURE", price: "4 500€", cadence: "one-shot", fmt: "shot", answers: ["confused", "outgrown"], line: "La commande signature. Un repositionnement complet — identité, position et langage — impossible à confondre, impossible à générer.", href: "/brand-narrative-audit", featured: true },
      { key: "momentum", name: "MOMENTUM", price: "dès 1 500€", cadence: "/ mois", fmt: "post", answers: ["execution"], line: "Direction créative + exécution de contenu au mois. Une fois l'architecture posée, l'équipe qui continue de raconter votre histoire — et la fait vivre au quotidien.", href: "/momentum" },
    ] as Rung[],
  },
  es: {
    kicker: "La Escalera",
    h1a: "Un estudio. Un método.",
    h1b: "Cuatro formas de entrar.",
    sub: "Cuatro formas de trabajar con el estudio, de 15€ a 4.500€. El mismo método cada vez — solo cambia la profundidad. Elija la que corresponde a donde está hoy.",
    where: "¿Cuál de estas frases es verdad para usted hoy?",
    showAll: "Ver todo",
    recommended: "Recomendado para usted",
    situations: [
      "No consigo explicar lo que hago en una frase sin perder a la sala",
      "Vendemos, pero los prospectos nos comparan con competidores que no se nos parecen en nada",
      "La empresa superó su relato — seguimos presentando lo que éramos hace dos años",
      "El posicionamiento es sólido. Lo que falta es alguien que lo ejecute cada semana",
    ],
    fmt: { sub: "Suscripción", shot: "Pago único", post: "Tras la auditoría" },
    featuredCta: "Ver el encargo →",
    cta: "Saber más →",
    foot: "Empiece por el peldaño que quiera. Si toma la auditoría primero, sus 490€ se descuentan de la arquitectura — nunca paga dos veces el mismo trabajo.",
    rungs: [
      { key: "radar", name: "RADAR", price: "15€", cadence: "/ mes", fmt: "sub", answers: ["articulate"], line: "Una marca diseccionada cada día, más todo el archivo, los nueve manifiestos y el método desglosado en lecciones. Diez minutos al día para leer cualquier posicionamiento a simple vista.", href: "/radar" },
      { key: "audit", name: "BRAND NARRATIVE AUDIT", price: "490€", cadence: "pago único", fmt: "shot", answers: ["articulate", "confused"], line: "Un diagnóstico escrito de su relato actual — lo que aterriza, lo que le difumina y los movimientos a realizar.", href: "/audit" },
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
            const matched = selected !== null && r.answers.includes(selected)
            return (
              <Link
                key={r.key}
                href={r.href}
                className={[
                  "relative block p-7 pt-9 no-underline transition-all duration-500",
                  r.featured ? "card-featured" : "border border-white/10 bg-white/[0.02]",
                  dimmed
                    ? "scale-[0.985] opacity-25 saturate-[0.35]"
                    : "opacity-100 hover:border-brand",
                  // When a situation is selected, the rungs that answer it are lit:
                  // a red halo and a brand border make the recommendation unmistakable.
                  matched
                    ? "z-[1] border-brand shadow-[0_0_0_1px_rgba(230,57,70,0.6),0_0_46px_rgba(230,57,70,0.35),0_0_120px_rgba(230,57,70,0.18)]"
                    : "",
                ].join(" ")}
              >
                {matched && (
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -inset-px animate-pulse bg-[radial-gradient(120%_120%_at_50%_0%,rgba(230,57,70,0.14),transparent_60%)]"
                  />
                )}
                {r.featured && (
                  <>
                    <span className="bracket-tl" aria-hidden />
                    <span className="bracket-br" aria-hidden />
                  </>
                )}

                <OfferCover
                  k={COVER[r.key] ?? "radar"}
                  name={r.name}
                  price={`${r.price} ${r.cadence}`}
                  featured={r.featured}
                  className="mb-6"
                />

                <div className="relative mb-5 flex flex-wrap items-center gap-2">
                  <span className={`tag ${FMT_STYLE[r.fmt]}`}>{t.fmt[r.fmt]}</span>
                  {matched && (
                    <span className="tag border-brand bg-brand/15 font-semibold text-brand">
                      {t.recommended}
                    </span>
                  )}
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
