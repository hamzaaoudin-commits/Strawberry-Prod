import { pick } from "@/lib/t"
import type { Lang } from "@/lib/lang"

/**
 * Le problème.
 *
 * L'ancienne version disait « on ne vous ignore pas » — un problème d'attention,
 * flou et confortable. Le problème dur est un problème de perception : le
 * marché voit votre travail et n'y perçoit aucune différence. Le prix n'est
 * qu'un symptôme, il n'est pas le sujet.
 *
 * L'agitation manquait : rien ne chiffrait ce que l'indifférenciation coûte
 * réellement sur une année.
 */

const T = {
  en: {
    kicker: "THE PROBLEM",
    h2: "Your market can see your work. It just cannot see the difference.",
    p1a: "AI is saturating your market faster than you can see it: competitors now produce in one click what took weeks, and content becomes free, infinite, and interchangeable. Quality is no longer enough to set you apart — everyone has become good.",
    p2: "What cannot be generated is an identity. Differentiation is no longer a marketing luxury — it is your condition for survival.",
    agitationKicker: "What it costs, over a year",
    agitationLead: "It never shows up as a line on an invoice. It gets paid quietly, in three places at once.",
    agitation: [
      { t: "Deals that never became conversations", b: "Prospects saw you, understood nothing that set you apart, and went with the name they already knew." },
      { t: "The discount you grant unasked", b: "Nothing distinguishes the offers, so price becomes the only readable criterion." },
      { t: "The rate you haven't raised in years", b: "Raising a price needs a reason the market can perceive — and you have none to give." },
    ],
    close: "All three are the same perception problem, paid three times.",
  },
  fr: {
    kicker: "LE PROBLÈME",
    h2: "Votre marché voit votre travail. Il ne voit simplement pas la différence.",
    p1a: "L'IA sature votre marché plus vite que vous ne le voyez : vos concurrents produisent en un clic ce qui demandait des semaines, et le contenu devient gratuit, infini, interchangeable. La qualité ne suffit plus à vous distinguer : tout le monde est devenu bon.",
    p2: "Ce qui ne peut pas être généré, c'est une identité. La différenciation n'est plus un luxe marketing — c'est votre condition de survie.",
    agitationKicker: "Ce que ça coûte, sur une année",
    agitationLead: "Ça ne se voit jamais sur une facture. Ça se paie ailleurs, en silence, à trois endroits.",
    agitation: [
      { t: "Les affaires jamais devenues des conversations", b: "Des prospects vous ont vu, n'ont rien compris de ce qui vous séparait, et sont allés vers le nom qu'ils connaissaient déjà." },
      { t: "La remise accordée sans qu'on la demande", b: "Rien ne distingue les offres, alors le prix devient le seul critère lisible." },
      { t: "Le tarif jamais augmenté", b: "Augmenter un prix demande une raison que le marché perçoive — et vous n'en avez aucune à donner." },
    ],
    close: "Les trois sont le même problème de perception, payé trois fois.",
  },
}

export function ProblemSection({ lang }: { lang: Lang }) {
  const t = pick(T, lang)

  return (
    <section className="section overflow-hidden bg-ink-soft">
      <div className="shell">
        <div className="mx-auto max-w-[820px]">
          <div className="mb-5 font-sans text-[11px] font-semibold tracking-[0.14em] text-brand">
            {t.kicker}
          </div>
          <h2 className="mb-8 font-serif text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.02em] text-white">
            {t.h2}
          </h2>
          <p className="font-sans text-[17px] leading-[1.8] text-white/55">{t.p1a}</p>
          <p className="mt-6 font-serif text-[clamp(1.15rem,2.2vw,1.6rem)] italic leading-snug text-brand">
            {t.p2}
          </p>
        </div>

        {/* L'agitation : trois prélèvements, nommés et datés. */}
        <div className="mx-auto mt-20 max-w-[900px] border border-hair-strong bg-white/[0.02] p-7 md:p-11">
          <div className="mb-4 font-sans text-[11px] uppercase tracking-[0.2em] text-brand">
            {t.agitationKicker}
          </div>
          <p className="mb-9 max-w-[640px] font-sans text-[15.5px] leading-relaxed text-chalk-65">
            {t.agitationLead}
          </p>

          <ol className="list-none border-t border-hair p-0">
            {t.agitation.map((a, i) => (
              <li key={a.t} className="border-b border-white/[0.06] py-6">
                <div className="mb-2 flex items-baseline gap-4">
                  <span className="font-serif text-[13px] text-brand">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="m-0 font-serif text-[1.15rem] font-bold leading-snug text-white">{a.t}</h3>
                </div>
                <p className="m-0 pl-[34px] font-sans text-[15px] leading-relaxed text-chalk-55">{a.b}</p>
              </li>
            ))}
          </ol>

          <p className="mt-8 font-serif text-[clamp(1.05rem,2vw,1.35rem)] italic leading-snug text-chalk-90">
            {t.close}
          </p>
        </div>
      </div>
    </section>
  )
}
