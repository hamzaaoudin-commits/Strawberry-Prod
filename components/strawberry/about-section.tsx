"use client"

import { useScrollReveal } from "@/hooks/use-strawberry"
import { AnimatedOrb } from "./animated-orb"
import { GlassCard } from "./glass-card"
import { useT } from "@/lib/i18n"

const BELIEF_COLORS = ["#e63946", "#ff1a1a", "#dc2626"]

const T = {
  en: {
    kicker: "THE STUDIO",
    h2a: "What this studio is.",
    h2b: "And what it is not.",
    p1: "Strawberry Production is a narrative perception studio operating from Paris. One founder. Four commissions per quarter. A single offer, refined commission after commission. The work is editorial in shape and disciplined by inheritance.",
    p2a: "We do not write content. We do not run campaigns. We design the ",
    p2strong: "identity, position, and language",
    p2b: " that make a founder impossible to confuse with the field and impossible to generate by a machine.",
    quote: "In a market where everyone has access to the same machine, the best product no longer wins. The clearest doctrine does.",
    beliefs: [
      { t: "Not a brand agency. A studio of doctrine.", d: "We do not deliver marketing assets. We write the document that declares what a house is, what it refuses, and how it sounds when it speaks. The artifact is a constitution, not a deck." },
      { t: "Not content. Architecture.", d: "Content is what a house produces. Architecture is what makes that content cohere across years, surfaces, and hands. We build the second. The first follows on its own." },
      { t: "Not for everyone. By selection.", d: "Four commissions per quarter. Most inquiries do not become engagements. The work depends on selecting houses whose convictions deserve the discipline. Politeness is not enough. Alignment is." },
    ],
  },
  fr: {
    kicker: "LE STUDIO",
    h2a: "Ce qu'est ce studio.",
    h2b: "Et ce qu'il n'est pas.",
    p1: "Strawberry Production est un studio de perception narrative basé à Paris. Un fondateur. Quatre commandes par trimestre. Une seule offre, affinée commande après commande. Un travail éditorial dans sa forme, discipliné par l'héritage.",
    p2a: "On n'écrit pas de contenu. On ne gère pas de campagnes. On conçoit l'",
    p2strong: "identité, la position et le langage",
    p2b: " qui rendent un fondateur impossible à confondre avec le champ — et impossible à générer par une machine.",
    quote: "Dans un marché où tout le monde a accès à la même machine, le meilleur produit ne gagne plus. La doctrine la plus claire, si.",
    beliefs: [
      { t: "Pas une agence de marque. Un studio de doctrine.", d: "On ne livre pas des assets marketing. On écrit le document qui déclare ce qu'est une maison, ce qu'elle refuse, et comment elle sonne quand elle parle. L'artefact est une constitution, pas un deck." },
      { t: "Pas du contenu. De l'architecture.", d: "Le contenu, c'est ce qu'une maison produit. L'architecture, c'est ce qui fait tenir ce contenu à travers les années, les surfaces et les mains. On bâtit la seconde. Le premier suit tout seul." },
      { t: "Pas pour tout le monde. Sur sélection.", d: "Quatre commandes par trimestre. La plupart des demandes ne deviennent pas des engagements. Le travail dépend du choix de maisons dont les convictions méritent la discipline. La politesse ne suffit pas. L'alignement, si." },
    ],
  },
  es: {
    kicker: "EL ESTUDIO",
    h2a: "Lo que es este estudio.",
    h2b: "Y lo que no es.",
    p1: "Strawberry Production es un estudio de percepción narrativa que opera desde París. Un fundador. Cuatro encargos por trimestre. Una sola oferta, afinada encargo tras encargo. Un trabajo editorial en su forma, disciplinado por la herencia.",
    p2a: "No escribimos contenido. No gestionamos campañas. Diseñamos la ",
    p2strong: "identidad, la posición y el lenguaje",
    p2b: " que hacen a un fundador imposible de confundir con el resto — e imposible de generar por una máquina.",
    quote: "En un mercado donde todos acceden a la misma máquina, el mejor producto ya no gana. Lo hace la doctrina más clara.",
    beliefs: [
      { t: "No una agencia de marca. Un estudio de doctrina.", d: "No entregamos assets de marketing. Escribimos el documento que declara lo que es una casa, lo que rechaza y cómo suena cuando habla. El artefacto es una constitución, no un deck." },
      { t: "No contenido. Arquitectura.", d: "El contenido es lo que una casa produce. La arquitectura es lo que hace que ese contenido sea coherente a lo largo de los años, las superficies y las manos. Construimos la segunda. El primero llega solo." },
      { t: "No para todos. Por selección.", d: "Cuatro encargos por trimestre. La mayoría de las consultas no se convierten en proyectos. El trabajo depende de elegir casas cuyas convicciones merecen la disciplina. La cortesía no basta. La alineación, sí." },
    ],
  },
}

export function AboutSection() {
  const t = useT(T)
  const [ref, vis] = useScrollReveal()
  const BELIEFS = t.beliefs.map((b, i) => ({ ...b, n: `0${i + 1}`, color: BELIEF_COLORS[i] }))

  return (
    <section id="about" className="relative overflow-hidden bg-ink px-gutter py-28">
      <AnimatedOrb color="radial-gradient(circle,#e63946,transparent)" size={600} x="70%" y="10%" opacity={0.12} />

      <div
        ref={ref}
        className={[
          "shell relative transition-all duration-[900ms] ease-[cubic-bezier(.22,.68,0,1.2)]",
          vis ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
        ].join(" ")}
      >
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="mb-5 font-sans text-[11px] font-semibold tracking-[0.14em] text-brand">
              {t.kicker}
            </div>

            <h2 className="mb-7 font-serif text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.12] tracking-[-0.02em] text-white">
              {t.h2a}
              <br />
              {t.h2b}
            </h2>

            <p className="mb-5 font-sans text-[17px] leading-[1.8] text-white/55">{t.p1}</p>

            <p className="font-sans text-[17px] leading-[1.8] text-white/55">
              {t.p2a}
              <strong className="text-chalk-90">{t.p2strong}</strong>
              {t.p2b}
            </p>

            <blockquote className="mt-10 border-l-[3px] border-brand py-2 pl-6">
              <p className="m-0 font-serif text-[clamp(1.05rem,1.6vw,1.35rem)] italic leading-snug text-white/70">
                {t.quote}
              </p>
            </blockquote>
          </div>

          <div className="flex flex-col gap-5">
            {BELIEFS.map((b) => (
              <GlassCard key={b.n} className="flex items-start gap-6 px-8 py-7">
                <span className="shrink-0 font-serif text-2xl font-bold" style={{ color: b.color }} aria-hidden>
                  {b.n}
                </span>
                <div>
                  <h3 className="mb-2 font-serif text-[1.2rem] font-semibold tracking-[-0.01em] text-white">
                    {b.t}
                  </h3>
                  <p className="m-0 font-sans text-[14.5px] leading-relaxed text-chalk-65">{b.d}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
