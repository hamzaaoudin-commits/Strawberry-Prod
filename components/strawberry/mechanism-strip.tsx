import { LocaleLink as Link } from "@/components/locale-link"
import { pick } from "@/lib/t"
import type { Lang } from "@/lib/lang"
import { ViewTracker } from "@/components/strawberry/view-tracker"

/**
 * Le mécanisme : S.T.R.A.W.
 *
 * Reprend la présentation en grandes lettres gravées de la page méthode, au
 * lieu des cases en grille de la version précédente — c'est cette version que
 * le studio préfère, et elle affirme explicitement ce qui manquait : STRAW est
 * une méthode propriétaire, pas un schéma générique.
 */

const T = {
  fr: {
    kicker: "Le mécanisme propriétaire du studio",
    h2a: "S.T.R.A.W.",
    h2b: "Cinq étapes. Chacune mérite la suivante.",
    lead: "Ce n'est pas une méthode empruntée. C'est celle que Strawberry Production a développée, et qu'aucun autre studio n'applique — l'ordre exact dans lequel une identité se découpe plutôt que s'invente.",
    letters: [
      { letter: "S", name: "Soul", gloss: "L'âme" },
      { letter: "T", name: "Territory", gloss: "Le territoire" },
      { letter: "R", name: "Reframe", gloss: "Le recadrage" },
      { letter: "A", name: "Architecture", gloss: "L'architecture" },
      { letter: "W", name: "Weaponize", gloss: "L'incarnation" },
    ],
    cta: "Voir la méthode en détail →",
  },
  en: {
    kicker: "The studio's proprietary mechanism",
    h2a: "S.T.R.A.W.",
    h2b: "Five stages. Each one earns the next.",
    lead: "This is not a borrowed framework. It is the one Strawberry Production developed, and no other studio applies it — the exact order in which an identity is cut, rather than invented.",
    letters: [
      { letter: "S", name: "Soul", gloss: "The soul" },
      { letter: "T", name: "Territory", gloss: "The territory" },
      { letter: "R", name: "Reframe", gloss: "The reframe" },
      { letter: "A", name: "Architecture", gloss: "The architecture" },
      { letter: "W", name: "Weaponize", gloss: "The embodiment" },
    ],
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
          <h2 className="mb-4 font-serif text-[clamp(1.6rem,3.2vw,2.4rem)] font-bold leading-tight">{t.h2a}</h2>
          <p className="mb-3 font-serif text-[clamp(1.05rem,2vw,1.35rem)] italic text-chalk-75">{t.h2b}</p>
          <p className="lede mx-auto mb-14 max-w-[600px]">{t.lead}</p>
        </div>

        {/* Les grandes lettres gravées, reprises de la page méthode. */}
        <div className="flex flex-wrap items-start justify-center gap-x-6 gap-y-8 sm:gap-x-10">
          {t.letters.map((st) => (
            <div key={st.letter} className="min-w-[76px] text-center">
              <div className="font-serif text-[clamp(2.75rem,7vw,4.5rem)] font-bold leading-none tracking-[-0.02em] text-brand">
                {st.letter}
              </div>
              <div className="mt-2 font-sans text-[10px] uppercase tracking-[0.2em] text-chalk-55">{st.name}</div>
              <div className="mt-1 font-serif text-[11px] italic text-chalk-40">{st.gloss}</div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link href="/strawberry-method" className="btn-quiet">
            {t.cta}
          </Link>
        </div>
      </div>
    </section>
  )
}
