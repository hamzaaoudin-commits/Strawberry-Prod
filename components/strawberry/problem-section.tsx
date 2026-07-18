"use client"

import { useScrollReveal } from "@/hooks/use-strawberry"
import { GlassCard } from "./glass-card"
import { useT } from "@/lib/i18n"

const T = {
  en: {
    kicker: "THE PROBLEM",
    h2: "You're not being ignored because your work isn't good enough.",
    p1a: "You're being ignored because you're ",
    p1strong: "indistinguishable",
    p1b: ". In a world where everyone posts, everyone creates content, and everyone claims expertise — the winners aren't the most talented.",
    p2: "They're the ones who control perception.",
    needs: [
      "A clear identity people recognize instantly",
      "A narrative universe people want to be part of",
      "A revenue system that converts attention into income",
    ],
    quote1: "\"Most brands have fragments. ",
    quote2: "We build empires.\"",
  },
  fr: {
    kicker: "LE PROBLÈME",
    h2: "On ne t'ignore pas parce que ton travail n'est pas assez bon.",
    p1a: "On t'ignore parce que tu es ",
    p1strong: "indifférenciable",
    p1b: ". Dans un monde où tout le monde poste, produit du contenu et se dit expert — les gagnants ne sont pas les plus talentueux.",
    p2: "Ce sont ceux qui maîtrisent la perception.",
    needs: [
      "Une identité claire qu'on reconnaît instantanément",
      "Un univers narratif dont on veut faire partie",
      "Un système de revenus qui convertit l'attention en chiffre d'affaires",
    ],
    quote1: "« La plupart des marques ont des fragments. ",
    quote2: "Nous, on bâtit des empires. »",
  },
  es: {
    kicker: "EL PROBLEMA",
    h2: "No te ignoran porque tu trabajo no sea lo bastante bueno.",
    p1a: "Te ignoran porque eres ",
    p1strong: "indistinguible",
    p1b: ". En un mundo donde todos publican, todos crean contenido y todos se dicen expertos — los que ganan no son los más talentosos.",
    p2: "Son los que controlan la percepción.",
    needs: [
      "Una identidad clara que se reconoce al instante",
      "Un universo narrativo del que la gente quiere formar parte",
      "Un sistema de ingresos que convierte la atención en facturación",
    ],
    quote1: "«La mayoría de las marcas tienen fragmentos. ",
    quote2: "Nosotros construimos imperios.»",
  },
}

export function ProblemSection() {
  const t = useT(T)
  const [ref, vis] = useScrollReveal()
  const NEED_ICONS = [
    { icon: "◎", c: "#e63946" },
    { icon: "◉", c: "#ff1a1a" },
    { icon: "◈", c: "#dc2626" },
  ]
  const needs = NEED_ICONS.map((n, i) => ({ ...n, label: t.needs[i] }))

  return (
    <section className="overflow-hidden bg-ink-soft px-gutter py-28">
      <div
        ref={ref}
        className={[
          "shell transition-all duration-[900ms] ease-[cubic-bezier(.22,.68,0,1.2)]",
          vis ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
        ].join(" ")}
      >
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="mb-5 font-sans text-[11px] font-semibold tracking-[0.14em] text-brand">
              {t.kicker}
            </div>
            <h2 className="mb-7 font-serif text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.02em] text-white">
              {t.h2}
            </h2>
            <p className="font-sans text-[17px] leading-[1.8] text-white/50">
              {t.p1a}
              <strong className="text-chalk-90">{t.p1strong}</strong>
              {t.p1b}
            </p>
            <p className="mt-5 font-sans text-[17px] leading-[1.8] text-white/50">{t.p2}</p>
          </div>

          <div className="flex flex-col gap-5">
            {needs.map((item) => (
              <GlassCard key={item.label} className="flex items-center gap-5 px-7 py-6">
                <span className="shrink-0 text-[28px]" style={{ color: item.c }} aria-hidden>
                  {item.icon}
                </span>
                <p className="m-0 font-sans text-base leading-snug text-chalk-75">{item.label}</p>
              </GlassCard>
            ))}

            <div className="mt-2 border-l-[3px] border-white/10 px-7 py-5">
              <p className="m-0 font-serif text-lg italic leading-snug text-white/35">
                {t.quote1}
                <br />
                {t.quote2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
