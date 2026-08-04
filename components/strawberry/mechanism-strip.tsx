import { TrackLink } from "@/components/strawberry/track-link"
import { pick } from "@/lib/t"
import type { Lang } from "@/lib/lang"

/**
 * Le mécanisme, sur la page qui vend.
 *
 * S.T.R.A.W. est le différenciateur du studio : il paraît nouveau, il est
 * crédible, et il découle de la vraie cause exposée juste au-dessus — on ne
 * peut pas trancher une position sans avoir d'abord extrait ce qu'on refuse.
 * Il vivait sur une autre page, derrière un clic que la plupart ne font pas.
 *
 * L'acronyme reprend le traitement du hero de /strawberry-method — de grandes
 * lettres alignées, pas des cases — plutôt qu'une grille de cinq blocs qui
 * faisait ressembler une méthode propriétaire à un tableau de fonctionnalités.
 */

const T = {
  fr: {
    kicker: "Le mécanisme",
    h2a: "Cinq étapes.",
    h2b: "Chacune mérite la suivante.",
    lead: "Ce n'est pas une méthode inventée pour avoir une méthode. C'est l'ordre dans lequel une position se découpe : on ne peut pas cartographier un terrain avant d'avoir extrait ce qu'on refuse, ni écrire un langage avant d'avoir tranché la position.",
    steps: [
      { l: "S", n: "Soul", g: "L'âme", line: "On extrait ce que vous ne voyez plus." },
      { l: "T", n: "Territory", g: "Le territoire", line: "On cartographie le terrain déjà occupé." },
      { l: "R", n: "Reframe", g: "Le recadrage", line: "On recadre le champ pour qu'il vous serve." },
      { l: "A", n: "Architecture", g: "L'architecture", line: "On bâtit la position et son langage." },
      { l: "W", n: "Weaponize", g: "L'incarnation", line: "On l'arme pour les quatre-vingt-dix jours." },
    ],
    proprietary: "S.T.R.A.W. — la méthode propriétaire du studio, appliquée à chaque maison. Elle n'existe nulle part ailleurs.",
    cta: "Voir la méthode en détail →",
  },
  en: {
    kicker: "The mechanism",
    h2a: "Five stages.",
    h2b: "Each one earns the next.",
    lead: "This is not a method invented to have a method. It is the order in which a position gets cut: you cannot map a field before extracting what you refuse, nor write a language before settling the position.",
    steps: [
      { l: "S", n: "Soul", g: "The soul", line: "We extract what you no longer see." },
      { l: "T", n: "Territory", g: "The territory", line: "We map the ground already taken." },
      { l: "R", n: "Reframe", g: "The reframe", line: "We recut the field so it serves you." },
      { l: "A", n: "Architecture", g: "The architecture", line: "We build the position and its language." },
      { l: "W", n: "Weaponize", g: "The embodiment", line: "We arm it for the first ninety days." },
    ],
    proprietary: "S.T.R.A.W. — this studio's proprietary method, applied to every house. It exists nowhere else.",
    cta: "See the method in detail →",
  },
}

export function MechanismStrip({ lang }: { lang: Lang }) {
  const t = pick(T, lang)

  return (
    <section className="section bg-ink-soft text-white">
      <div className="shell">
        <div className="mx-auto mb-14 max-w-[700px] text-center">
          <div className="kicker mb-6">{t.kicker}</div>
          <h2 className="h-section mb-7">
            {t.h2a}
            <br />
            <span className="text-gradient">{t.h2b}</span>
          </h2>
          <p className="lede">{t.lead}</p>
        </div>

        {/* L'acronyme éclairé : grandes lettres alignées, pas des cases. */}
        <div className="mx-auto flex max-w-[860px] flex-wrap items-start justify-center gap-x-8 gap-y-10 sm:gap-x-12">
          {t.steps.map((s) => (
            <div key={s.l} className="min-w-[110px] max-w-[150px] text-center">
              <div className="font-serif text-[clamp(2.75rem,6vw,4rem)] font-bold leading-none tracking-[-0.02em] text-brand">
                {s.l}
              </div>
              <div className="mt-2 font-sans text-[11px] uppercase tracking-[0.18em] text-chalk-55">{s.n}</div>
              <div className="mt-1 font-serif text-[11px] italic text-chalk-40">{s.g}</div>
              <p className="m-0 mt-3 font-sans text-[13px] leading-snug text-chalk-65">{s.line}</p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-[560px] text-center font-serif text-[clamp(0.95rem,1.4vw,1.1rem)] italic text-chalk-40">
          {t.proprietary}
        </p>

        <div className="mt-8 text-center">
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
