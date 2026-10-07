import { TrackedLink } from "@/components/strawberry/tracked-link"
import { pick } from "@/lib/t"
import { ViewTracker } from "@/components/strawberry/view-tracker"
import type { Lang } from "@/lib/lang"

/**
 * Le document SILLAGE.
 *
 * Composant serveur : aucune interaction, donc aucune hydratation.
 *
 * Le document était annoncé mais jamais montré — un titre, un sous-titre, quatre
 * encadrés. Il est désormais présenté comme un objet : une pile de pages avec sa
 * couverture, et les quatorze pièces visibles d'un coup en registre. Ce qu'on
 * peut voir se juge ; ce qui n'est qu'annoncé se croit ou ne se croit pas.
 */

const T = {
  en: {
    kicker: "The work, in full",
    h2a: "Judge the work",
    h2b: "before you pay for it.",
    lead: "A narrative architecture is the one document a house cannot share — it is the position itself. So we wrote a sample of the Narrative Architecture on an invented house and published all six pieces, so you can read the shape of what you would receive.",
    docTitle: "SILLAGE",
    docSub: "The Narrative Architecture, in six pieces.",
    docMeta: "Free · No email required",
    points: [
      { n: "01", t: "The platform", d: "" },
      { n: "02", t: "The diagnosis", d: "" },
      { n: "03", t: "The map", d: "" },
      { n: "04", t: "The decisions", d: "" },
      { n: "05", t: "The playbooks", d: "" },
      { n: "06", t: "The language", d: "" },
    ],
    coverSub: "The Narrative\nArchitecture",
    badges: ["Six pieces", "Free access", "No email"],
    more: "",
    cta: "Read the SILLAGE document →",
    note: "An example of what the Narrative Architecture produces: six pieces, in S.T.R.A.W. order, so you can judge the work before ordering it.",
  },
  fr: {
    kicker: "Le travail, en entier",
    h2a: "Jugez le travail",
    h2b: "avant de le payer.",
    lead: "Une architecture narrative est le seul document qu'une maison ne peut pas partager — c'est la position elle-même. Nous avons donc écrit un exemple de l'Architecture Narrative sur une maison inventée et publié les six pièces, pour que vous lisiez la forme de ce que vous recevrez.",
    docTitle: "SILLAGE",
    docSub: "L'Architecture Narrative, en six pièces.",
    docMeta: "Accès libre · Sans email",
    points: [
      { n: "01", t: "La plateforme", d: "" },
      { n: "02", t: "Le diagnostic", d: "" },
      { n: "03", t: "La carte", d: "" },
      { n: "04", t: "Les décisions", d: "" },
      { n: "05", t: "Les playbooks", d: "" },
      { n: "06", t: "Le langage", d: "" },
    ],
    coverSub: "L'Architecture\nNarrative",
    badges: ["Six pièces", "Accès libre", "Sans email"],
    more: "",
    cta: "Lire le document SILLAGE →",
    note: "Un exemple de ce que produit l'Architecture Narrative : six pièces, dans l'ordre S.T.R.A.W., pour juger le travail avant de le commander.",
  },
}

export function SillageSection({ lang }: { lang: Lang }) {
  const t = pick(T, lang)

  return (
    <section id="work" className="section relative overflow-hidden bg-ink-soft text-white">
      <ViewTracker name="sillage" />
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
            {/* La pile : deux feuillets décalés sous la couverture. Le document
                cesse d'être une promesse et devient un volume. */}
            {/* Juste la couverture — l'effet de pile en dessous alourdissait
                sans rien ajouter. */}
            <div className="mx-auto w-[170px] max-w-full md:mx-0 md:w-full">
              <div className="relative flex aspect-[3/4] flex-col items-center justify-center overflow-hidden border border-brand/25 bg-[linear-gradient(155deg,#120d0e_0%,#0a0a0a_65%)] px-4 text-center shadow-[0_30px_70px_rgba(0,0,0,0.5)]">
                <span className="bracket-tl" aria-hidden />
                <span className="bracket-br" aria-hidden />

                {/* Une grille de plan, en filigrane — le document est une
                    architecture, la couverture le rappelle discrètement au
                    lieu de rester un simple rectangle de texte. */}
                <svg viewBox="0 0 170 226" aria-hidden className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.14]">
                  {[38, 76, 114, 152, 190].map((y) => (
                    <line key={y} x1="0" y1={y} x2="170" y2={y} stroke="#ff2233" strokeWidth="0.5" />
                  ))}
                  {[34, 68, 102, 136].map((x) => (
                    <line key={x} x1={x} y1="0" x2={x} y2="226" stroke="#ff2233" strokeWidth="0.5" />
                  ))}
                  <circle cx="85" cy="113" r="20" fill="none" stroke="#ff2233" strokeWidth="0.6" />
                </svg>

                <div className="relative font-serif text-[clamp(1.3rem,3vw,1.7rem)] font-bold tracking-[0.06em] text-brand">
                  {t.docTitle}
                </div>
                <div aria-hidden className="relative my-3 h-px w-7 bg-brand/50" />
                <div className="relative whitespace-pre-line font-sans text-[11px] uppercase leading-[1.5] tracking-[0.14em] text-chalk-40">
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

              <h3 className="mb-7 font-serif text-[clamp(1.5rem,3.2vw,2.2rem)] font-bold leading-[1.2] tracking-[-0.005em] uppercase">
                {t.docSub}
              </h3>

              <div className="mb-8 grid gap-px border border-white/[0.09] bg-white/[0.09] sm:grid-cols-2">
                {t.points.map((pt) => (
                  <div key={pt.n} className="bg-ink px-4 py-3.5">
                    <span className="mr-3 font-serif text-[13px] text-brand">{pt.n}</span>
                    <span className="font-sans text-[14px] text-chalk-75">{pt.t}</span>
                  </div>
                ))}
                {t.more ? (
                  <div className="bg-ink px-4 py-3.5 font-sans text-[14px] text-chalk-40 sm:col-span-2">{t.more}</div>
                ) : null}
              </div>

              <TrackedLink href="/documents/sillage" className="btn-primary" event="cta_click" data={{ section: "sillage", target: "documents" }}>
                {t.cta}
              </TrackedLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
