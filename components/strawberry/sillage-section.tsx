import { TrackLink } from "@/components/strawberry/track-link"
import { pick } from "@/lib/t"
import type { Lang } from "@/lib/lang"

/**
 * Le document SILLAGE.
 *
 * Composant serveur : aucune interaction, donc aucune hydratation.
 *
 * Le document était annoncé mais jamais montré — un titre, un sous-titre, quatre
 * encadrés. Il est désormais présenté comme un objet : sa couverture, et les
 * quatorze pièces visibles d'un coup en registre. Ce qu'on peut voir se juge ;
 * ce qui n'est qu'annoncé se croit ou ne se croit pas.
 *
 * La couverture s'affiche seule, sans le double filet décoratif imitant une
 * pile de feuillets : ça alourdissait la carte sans rien ajouter au jugement.
 */

const T = {
  en: {
    kicker: "The work, in full",
    h2a: "Judge the work",
    h2b: "before you pay for it.",
    lead: "We wrote a complete commission and published it in full, so you can read exactly what you would receive.",
    docTitle: "SILLAGE",
    docSub: "A fourteen-part Brand Narrative Architecture",
    docMeta: "Free · No email required",
    points: [
      { n: "01", t: "The field, dissected", d: "Five competitors, their sentences taken apart, and the ground none of them occupies." },
      { n: "02", t: "The position, defended", d: "One sentence a competitor could not write without lying — and why it holds." },
      { n: "03", t: "The words, decided", d: "The lexicon that becomes theirs, and the forbidden list drawn from rivals' real copy." },
      { n: "04", t: "The first ninety days", d: "What gets said, in what order, on which surface — day one to day ninety." },
    ],
    coverSub: "Brand Narrative\nArchitecture",
    badges: ["Fourteen parts", "Free access", "No email"],
    more: "+ ten further parts",
    cta: "Read the SILLAGE document →",
    note: "An example of what a commission produces, published in full so you can judge the work before commissioning it.",
  },
  fr: {
    kicker: "Le travail, en entier",
    h2a: "Jugez le travail",
    h2b: "avant de le payer.",
    lead: "Nous avons écrit une commande complète et publié en entier, pour que vous lisiez exactement ce que vous recevrez.",
    docTitle: "SILLAGE",
    docSub: "Une Brand Narrative Architecture en quatorze pièces",
    docMeta: "Accès libre · Sans email",
    points: [
      { n: "01", t: "Le champ, disséqué", d: "Cinq concurrents, leurs phrases démontées, et le terrain qu'aucun n'occupe." },
      { n: "02", t: "La position, défendue", d: "Une phrase qu'un concurrent ne pourrait pas écrire sans mentir — et pourquoi elle tient." },
      { n: "03", t: "Les mots, tranchés", d: "Le lexique qui devient le leur, et la liste interdite tirée du copy réel des rivaux." },
      { n: "04", t: "Les quatre-vingt-dix premiers jours", d: "Ce qui se dit, dans quel ordre, sur quelle surface — du jour un au jour quatre-vingt-dix." },
    ],
    coverSub: "Brand Narrative\nArchitecture",
    badges: ["Quatorze pièces", "Accès libre", "Sans email"],
    more: "+ dix autres pièces",
    cta: "Lire le document SILLAGE →",
    note: "Un exemple de ce que produit une commande, publié en entier pour que vous puissiez juger le travail avant de le commander.",
  },
}

export function SillageSection({ lang }: { lang: Lang }) {
  const t = pick(T, lang)

  return (
    <section id="work" className="section relative overflow-hidden bg-ink-soft text-white">
      <div className="glow-center" aria-hidden />

      <div className="shell relative">
        <div className="mx-auto mb-14 max-w-[760px] text-center">
          <div className="kicker mb-6">{t.kicker}</div>
          <h2 className="h-section mb-7">
            {t.h2a}
            <br />
            <span className="text-gradient">{t.h2b}</span>
          </h2>
          <p className="lede">{t.lead}</p>
        </div>

        <div className="card-featured mx-auto max-w-[960px] p-7 md:p-12">
          <span className="bracket-tl" aria-hidden />
          <span className="bracket-br" aria-hidden />

          <div className="relative grid gap-10 md:grid-cols-[200px_minmax(0,1fr)] md:gap-12">
            <div className="mx-auto w-[170px] max-w-full md:mx-0 md:w-full">
              <div className="flex aspect-[3/4] flex-col items-center justify-center border border-white/25 bg-ink px-4 text-center">
                <div className="font-serif text-[clamp(1.3rem,3vw,1.7rem)] font-bold tracking-[0.06em] text-brand">
                  {t.docTitle}
                </div>
                <div aria-hidden className="my-3 h-px w-7 bg-brand/50" />
                <div className="whitespace-pre-line font-sans text-[11px] uppercase leading-[1.5] tracking-[0.14em] text-chalk-40">
                  {t.coverSub}
                </div>
              </div>
            </div>

            <div>
              <div className="mb-6 flex flex-wrap gap-2">
                {t.badges.map((b) => (
                  <span key={b} className="tag border-white/20 text-chalk-55">
                    {b}
                  </span>
                ))}
              </div>

              <h3 className="mb-7 font-serif text-[clamp(1.5rem,3.2vw,2.2rem)] font-bold leading-[1.2] tracking-[-0.02em]">
                {t.docSub}
              </h3>

              <div className="mb-8 grid gap-px border border-white/[0.09] bg-white/[0.09] sm:grid-cols-2">
                {t.points.map((pt) => (
                  <div key={pt.n} className="bg-ink px-4 py-3.5">
                    <span className="mr-3 font-serif text-[13px] text-brand">{pt.n}</span>
                    <span className="font-sans text-[14px] text-chalk-75">{pt.t}</span>
                  </div>
                ))}
                <div className="bg-ink px-4 py-3.5 font-sans text-[14px] text-chalk-40 sm:col-span-2">
                  {t.more}
                </div>
              </div>

              <TrackLink
                href="/documents/sillage"
                event="sillage_click"
                data={{ from: "home_sillage" }}
                className="btn-primary"
              >
                {t.cta}
              </TrackLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
