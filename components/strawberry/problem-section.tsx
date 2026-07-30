import { GlassCard } from "./glass-card"
import { pick } from "@/lib/t"
import type { Lang } from "@/lib/lang"

const T = {
  en: {
    kicker: "THE PROBLEM",
    h2: "You're not being ignored because your work isn't good enough.",
    p1a: "You're being ignored because you're ",
    p1strong: "indistinguishable",
    p1b: ". In a world where everyone posts, everyone creates content, and everyone claims expertise — the winners aren't the most talented.",
    p2: "They're the ones who control perception.",
    p3: "This is not a communication problem. It is a perception problem: the place you occupy in people's minds is not yours yet — someone else is holding it, or no one is holding it at all.",
    agitLabel: "What it costs, per year",
    agit: "Count it yourself. Of the serious conversations you had this year, how many ended with \u00ab we're going to compare \u00bb? How many discounts did you concede to avoid losing a deal you deserved? How long has it been since you raised your rates, for lack of any argument beyond your own conviction? Add twelve months of that together. What being indistinguishable costs is almost always more than what fixing it costs — and the meter resets in January.",
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
    h2: "On ne vous ignore pas parce que votre travail n'est pas assez bon.",
    p1a: "On vous ignore parce que vous êtes ",
    p1strong: "indifférenciable",
    p1b: ". Dans un monde où tout le monde poste, produit du contenu et se dit expert — les gagnants ne sont pas les plus talentueux.",
    p2: "Ce sont ceux qui maîtrisent la perception.",
    p3: "Ce n'est pas un problème de communication. C'est un problème de perception : la place que vous occupez dans la tête des gens ne vous appartient pas encore — un autre la tient, ou personne ne la tient.",
    agitLabel: "Ce que ça coûte, par an",
    agit: "Comptez vous-même. Sur les conversations sérieuses que vous avez eues cette année, combien se sont terminées par « on va comparer » ? Combien de remises consenties pour ne pas perdre un dossier que vous méritiez ? Depuis combien de temps n'avez-vous pas augmenté vos tarifs, faute d'un argument autre que votre propre conviction ? Additionnez douze mois de ça. Ce que l'indifférenciation vous coûte dépasse presque toujours ce que coûte de la régler — et le compteur repart à zéro en janvier.",
    needs: [
      "Une identité claire qu'on reconnaît instantanément",
      "Un univers narratif dont on veut faire partie",
      "Un système de revenus qui convertit l'attention en chiffre d'affaires",
    ],
    quote1: "« La plupart des marques ont des fragments. ",
    quote2: "Nous, on bâtit des empires. »",
  },
}

export function ProblemSection({ lang }: { lang: Lang }) {
  const t = pick(T, lang)
  const NEED_ICONS = [
    { icon: "◎", c: "#e63946" },
    { icon: "◉", c: "#ff1a1a" },
    { icon: "◈", c: "#dc2626" },
  ]
  const needs = NEED_ICONS.map((n, i) => ({ ...n, label: t.needs[i] }))

  return (
    <section className="overflow-hidden bg-ink-soft px-gutter py-28">
      <div
        className={[
          "shell transition-all duration-[900ms] ease-[cubic-bezier(.22,.68,0,1.2)]",
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

            {/* Le problème, nommé pour ce qu'il est : ni la qualité du travail,
                ni la régularité des publications. La perception. */}
            <p className="mt-5 font-sans text-[17px] leading-[1.8] text-chalk-90">{t.p3}</p>

            {/* L'agitation. Le constat seul ne fait pas agir : il faut que le
                lecteur pose lui-même l'addition. Aucun chiffre n'est avancé à sa
                place — ce sont ses chiffres, et ils sont plus convaincants que
                n'importe quelle statistique de marché. */}
            <div className="mt-10 border border-brand-hair bg-brand/[0.06] px-6 py-6">
              <div className="mb-3 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-brand">
                {t.agitLabel}
              </div>
              <p className="m-0 font-sans text-[15.5px] leading-[1.75] text-chalk-75">{t.agit}</p>
            </div>
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
