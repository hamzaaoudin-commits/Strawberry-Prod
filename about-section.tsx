import Image from "next/image"
import { AnimatedOrb } from "./animated-orb"
import { GlassCard } from "./glass-card"
import { pick } from "@/lib/t"
import type { Lang } from "@/lib/lang"

/* ---------------------------------------------------------------------------
 * ⚠️  LE RÉCIT D'ORIGINE — À ÉCRIRE, ET PAR PERSONNE D'AUTRE
 *
 * Ces trois entrées sont les seules du site qui ne peuvent pas être rédigées de
 * l'extérieur : c'est votre histoire, et sa valeur de preuve vient précisément
 * de là. Trois mouvements, deux à quatre phrases chacun.
 *
 *   avant   — où vous en étiez, et ce que vous faisiez à la place.
 *   rupture — le moment précis, daté, où quelque chose a cessé d'être tenable.
 *   depuis  — ce que vous refusez depuis, et pourquoi ce studio existe.
 *
 * Tant que les libellés « À ÉCRIRE » sont là, le bloc s'affiche tel quel : il
 * est impossible de le mettre en ligne par inadvertance sans le voir.
 * ------------------------------------------------------------------------- */
const ORIGIN: { fr: [string, string][]; en: [string, string][] } = {
  fr: [
    ["Avant", "À ÉCRIRE — où vous en étiez, et ce que vous faisiez à la place."],
    ["La rupture", "À ÉCRIRE — le moment précis où quelque chose a cessé d'être tenable."],
    ["Depuis", "À ÉCRIRE — ce que vous refusez depuis, et pourquoi ce studio existe."],
  ],
  en: [
    ["Before", "TO WRITE — where you were, and what you were doing instead."],
    ["The break", "TO WRITE — the exact moment something stopped being tenable."],
    ["Since", "TO WRITE — what you have refused since, and why this studio exists."],
  ],
}

const BELIEF_COLORS = ["#e63946", "#ff1a1a", "#dc2626"]

const T = {
  en: {
    kicker: "THE STUDIO",
    h2a: "What this studio is.",
    h2b: "And what it is not.",
    p1: "Strawberry Production is a narrative perception studio operating from Paris. One founder. Four commissions per quarter. A single offer, refined commission after commission. The work is editorial in shape and disciplined by inheritance.",
    p2a: "We design the ",
    p2strong: "identity, position, and language",
    p2b: " that make a founder impossible to confuse with the field and impossible to generate by a machine.",
    quote: "In a market where everyone has access to the same machine, the best product no longer wins. The clearest doctrine does.",
    founderName: "Hamza El Jaouahiry",
    founderRole: "Founder · Strawberry Production, Paris",
    originKicker: "Why this studio exists",
    beliefs: [
      { t: "Not a brand agency. A studio of doctrine.", d: "We do not deliver marketing assets. We write the document that declares what a house is, what it refuses, and how it sounds when it speaks. The artifact is a constitution, not a deck." },
      { t: "Architecture before content.", d: "Content is what a house produces. Architecture is what makes it cohere across years, surfaces and hands. We build the architecture first — and once it exists, we can carry the content too." },
      { t: "Four commissions per quarter.", d: "Each house is built from scratch, and the work only holds at that pace. When a house would be better served elsewhere, we say so rather than take the work." },
    ],
  },
  fr: {
    kicker: "LE STUDIO",
    h2a: "Ce qu'est ce studio.",
    h2b: "Et ce qu'il n'est pas.",
    p1: "Strawberry Production est un studio de perception narrative basé à Paris. Un fondateur. Quatre commandes par trimestre. Une seule offre, affinée commande après commande. Un travail éditorial dans sa forme, discipliné par l'héritage.",
    p2a: "Nous concevons l'",
    p2strong: "identité, la position et le langage",
    p2b: " qui rendent un fondateur impossible à confondre avec le champ — et impossible à générer par une machine.",
    quote: "Dans un marché où tout le monde a accès à la même machine, le meilleur produit ne gagne plus. La doctrine la plus claire, si.",
    founderName: "Hamza El Jaouahiry",
    founderRole: "Fondateur · Strawberry Production, Paris",
    originKicker: "Pourquoi ce studio existe",
    beliefs: [
      { t: "Pas une agence de marque. Un studio de doctrine.", d: "On ne livre pas des assets marketing. On écrit le document qui déclare ce qu'est une maison, ce qu'elle refuse, et comment elle sonne quand elle parle. L'artefact est une constitution, pas un deck." },
      { t: "L'architecture avant le contenu.", d: "Le contenu, c'est ce qu'une maison produit. L'architecture, c'est ce qui le fait tenir à travers les années, les surfaces et les mains. Nous bâtissons l'architecture d'abord — et une fois qu'elle existe, nous pouvons aussi porter le contenu." },
      { t: "Quatre commandes par trimestre.", d: "Chaque maison est bâtie de zéro, et le travail ne tient qu'à ce rythme. Quand une maison serait mieux servie ailleurs, nous le disons plutôt que de prendre le travail." },
    ],
  },
}

export function AboutSection({ lang }: { lang: Lang }) {
  const t = pick(T, lang)
  const origin = ORIGIN[lang] ?? ORIGIN.fr
  const BELIEFS = t.beliefs.map((b, i) => ({ ...b, n: `0${i + 1}`, color: BELIEF_COLORS[i] }))

  return (
    <section id="about" className="relative overflow-hidden bg-ink px-gutter py-28">
      <AnimatedOrb color="radial-gradient(circle,#e63946,transparent)" size={600} x="70%" y="10%" opacity={0.12} />

      <div className="shell relative">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="mb-5 font-sans text-[11px] font-semibold tracking-[0.14em] text-brand">{t.kicker}</div>

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

            {/* Le fondateur, montré. Un visage se juge ; une signature en bas de
                page se croit ou ne se croit pas. */}
            <div className="mt-12 flex flex-wrap items-center gap-5 border-t border-hair pt-10">
              <div className="relative h-[86px] w-[86px] shrink-0 overflow-hidden border border-hair-strong grayscale">
                <Image
                  src="/founder.jpg"
                  alt={t.founderName}
                  fill
                  sizes="86px"
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-serif text-[1.15rem] font-bold text-white">{t.founderName}</div>
                <div className="font-sans text-[13px] text-chalk-55">{t.founderRole}</div>
              </div>
            </div>

            {/* Le récit d'origine — la preuve la moins falsifiable du site. */}
            <div className="mt-8">
              <div className="mb-5 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-brand">
                {t.originKicker}
              </div>
              <div className="border-l border-hair-strong pl-6">
                {origin.map(([label, text]) => (
                  <div key={label} className="mb-5 last:mb-0">
                    <div className="mb-1.5 font-sans text-[10px] uppercase tracking-[0.22em] text-chalk-40">
                      {label}
                    </div>
                    <p className="m-0 font-serif text-[clamp(1rem,1.6vw,1.15rem)] leading-snug text-chalk-75">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            {BELIEFS.map((b) => (
              <GlassCard key={b.n} className="flex items-start gap-6 px-8 py-7">
                <span className="shrink-0 font-serif text-2xl font-bold" style={{ color: b.color }} aria-hidden>
                  {b.n}
                </span>
                <div>
                  <h3 className="mb-2 font-serif text-[1.2rem] font-semibold tracking-[-0.01em] text-white">{b.t}</h3>
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
