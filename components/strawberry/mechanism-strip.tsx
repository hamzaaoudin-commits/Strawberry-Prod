import { TrackLink } from "@/components/strawberry/track-link"
import { pick } from "@/lib/t"
import type { Lang } from "@/lib/lang"

/**
 * Le mécanisme, sur la page qui vend.
 *
 * S.T.R.A.W. est le différenciateur du studio — sa méthode propriétaire.
 * L'acronyme reprend le traitement du hero de /strawberry-method : de
 * grandes lettres sur une seule ligne, pas des cases, et pas de légende par
 * lettre — la grille forcée en cinq colonnes égales empêche tout retour à
 * la ligne, y compris sur petit écran.
 */

const T = {
  fr: {
    kicker: "Le mécanisme",
    h2a: "Cinq étapes.",
    h2b: "Chacune mérite la suivante.",
    lead: "S.T.R.A.W. — la méthode propriétaire du studio, appliquée à chaque maison.",
    steps: [
      { l: "S", n: "Soul", g: "L'âme" },
      { l: "T", n: "Territory", g: "Le territoire" },
      { l: "R", n: "Reframe", g: "Le recadrage" },
      { l: "A", n: "Architecture", g: "L'architecture" },
      { l: "W", n: "Weaponize", g: "L'incarnation" },
    ],
    cta: "Voir la méthode en détail →",
  },
  en: {
    kicker: "The mechanism",
    h2a: "Five stages.",
    h2b: "Each one earns the next.",
    lead: "S.T.R.A.W. — this studio's proprietary method, applied to every house.",
    steps: [
      { l: "S", n: "Soul", g: "The soul" },
      { l: "T", n: "Territory", g: "The territory" },
      { l: "R", n: "Reframe", g: "The reframe" },
      { l: "A", n: "Architecture", g: "The architecture" },
      { l: "W", n: "Weaponize", g: "The embodiment" },
    ],
    cta: "See the method in detail →",
  },
}

export function MechanismStrip({ lang }: { lang: Lang }) {
  const t = pick(T, lang)

  return (
    <section className="section bg-ink-soft text-white">
      <div className="shell">
        <div className="mx-auto mb-12 max-w-[700px] text-center">
          <div className="kicker mb-6">{t.kicker}</div>
          <h2 className="h-section mb-5">
            {t.h2a}
            <br />
            <span className="text-gradient">{t.h2b}</span>
          </h2>
          <p className="lede">{t.lead}</p>
        </div>

        {/* L'acronyme éclairé : cinq colonnes égales, jamais de retour à la ligne. */}
        <div className="mx-auto grid max-w-[720px] grid-cols-5 gap-x-2 gap-y-0 sm:gap-x-6">
          {t.steps.map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-serif text-[clamp(1.6rem,7vw,4rem)] font-bold leading-none tracking-[-0.02em] text-brand">
                {s.l}
              </div>
              <div className="mt-2 font-sans text-[8px] uppercase tracking-[0.1em] text-chalk-55 sm:text-[11px] sm:tracking-[0.18em]">
                {s.n}
              </div>
              <div className="mt-1 hidden font-serif text-[11px] italic text-chalk-40 sm:block">{s.g}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <TrackLink
            href="/strawberry-method"
            event="method_click"
            data={{ from: "home_mechanism" }}
            className="btn-quiet"
          >
            {t.cta}
          </TrackLink>
        </div>
      </div>
    </section>
  )
}
