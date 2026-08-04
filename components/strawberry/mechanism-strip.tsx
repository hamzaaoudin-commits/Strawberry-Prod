import { LocaleLink as Link } from "@/components/locale-link"
import { pick } from "@/lib/t"
import type { Lang } from "@/lib/lang"
import { ViewTracker } from "@/components/strawberry/view-tracker"

/**
 * Le mécanisme : S.T.R.A.W.
 *
 * Reprend exactement la version encadrée en rouge de la page méthode — les
 * grandes lettres dans un cadre, pas le texte simple qu'on avait mis ici
 * avant.
 */

const T = {
  fr: {
    kicker: "Le mécanisme propriétaire du studio",
    h2: "S.T.R.A.W.",
    lead: "Ce n'est pas une méthode empruntée. C'est celle que Strawberry Production a développée, et qu'aucun autre studio n'applique — l'ordre exact dans lequel une identité se découpe plutôt que s'invente.",
    letters: [
      { letter: "S", name: "Soul", verb: "Trouver l'âme" },
      { letter: "T", name: "Territory", verb: "Cartographier le territoire" },
      { letter: "R", name: "Reframe", verb: "Recadrer le champ" },
      { letter: "A", name: "Architecture", verb: "Bâtir l'architecture" },
      { letter: "W", name: "Weaponize", verb: "Incarner l'univers" },
    ],
    closing: "Chaque commande traverse les cinq étapes, dans cet ordre, sans en sauter une.",
    cta: "Voir la méthode en détail →",
  },
  en: {
    kicker: "The studio's proprietary mechanism",
    h2: "S.T.R.A.W.",
    lead: "This is not a borrowed framework. It is the one Strawberry Production developed, and no other studio applies it — the exact order in which an identity is cut, rather than invented.",
    letters: [
      { letter: "S", name: "Soul", verb: "Find the soul" },
      { letter: "T", name: "Territory", verb: "Map the territory" },
      { letter: "R", name: "Reframe", verb: "Reframe the field" },
      { letter: "A", name: "Architecture", verb: "Build the architecture" },
      { letter: "W", name: "Weaponize", verb: "Embody the universe" },
    ],
    closing: "Every commission moves through the five stages, in this order, none skipped.",
    cta: "See the method in detail →",
  },
}

export function MechanismStrip({ lang }: { lang: Lang }) {
  const t = pick(T, lang)

  return (
    <section className="section relative overflow-hidden bg-ink-soft text-white">
      <ViewTracker name="mechanism" />
      <div className="shell relative">
        <div className="mx-auto max-w-[760px] text-center">
          <div className="kicker mb-6">{t.kicker}</div>
          <h2 className="mb-8 font-serif text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.02em]">{t.h2}</h2>
        </div>

        {/* Les grandes lettres encadrées en rouge, reprises telles quelles de
            la page méthode. */}
        <div className="mx-auto grid max-w-[900px] grid-cols-5 gap-2 sm:gap-4">
          {t.letters.map((l) => (
            <div key={l.letter} className="text-center">
              <div className="mb-5 border-2 border-brand bg-brand/[0.06] py-5 font-serif text-[clamp(2rem,6vw,4rem)] font-bold leading-none text-brand shadow-[0_20px_60px_rgba(230,57,70,0.35)] sm:py-10">
                {l.letter}
              </div>
              <div aria-hidden className="mx-auto mb-3 h-1.5 w-1.5 rounded-full bg-brand" />
              <div className="font-sans text-[10px] font-semibold uppercase tracking-[0.1em] text-white sm:text-[13px]">
                {l.name}
              </div>
            </div>
          ))}
        </div>

        {/* Le déroulé des verbes, relié par des tirets. */}
        <div className="mx-auto mt-10 flex max-w-[900px] flex-wrap items-center justify-center gap-x-3 gap-y-2">
          {t.letters.map((l, i) => (
            <div key={l.letter} className="flex items-center gap-3">
              <span className="whitespace-nowrap font-sans text-[12px] tracking-[0.03em] text-white/75 sm:text-[13px]">
                {l.verb}
              </span>
              {i < t.letters.length - 1 && <span className="text-brand">—</span>}
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-[560px] text-center font-serif text-[clamp(1.05rem,2vw,1.3rem)] italic leading-[1.55] text-white/80">
          {t.closing}
        </p>

        <p className="mx-auto mt-6 max-w-[600px] text-center font-sans text-[14px] leading-relaxed text-chalk-55">
          {t.lead}
        </p>

        <div className="mt-10 text-center">
          <Link href="/strawberry-method" className="btn-quiet">
            {t.cta}
          </Link>
        </div>
      </div>
    </section>
  )
}
