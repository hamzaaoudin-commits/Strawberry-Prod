import { LocaleLink as Link } from "@/components/locale-link"
import { pick } from "@/lib/t"
import type { Lang } from "@/lib/lang"

/**
 * Le mécanisme, sur la page qui vend.
 *
 * S.T.R.A.W. est le différenciateur du studio : il paraît nouveau, il est
 * crédible, et il découle de la vraie cause exposée juste au-dessus — on ne
 * peut pas trancher une position sans avoir d'abord extrait ce qu'on refuse.
 * Il vivait sur une autre page, derrière un clic que la plupart ne font pas.
 */

const T = {
  fr: {
    kicker: "Le mécanisme",
    h2a: "Cinq étapes.",
    h2b: "Chacune mérite la suivante.",
    lead: "Ce n'est pas une méthode inventée pour avoir une méthode. C'est l'ordre dans lequel une position se découpe : on ne peut pas cartographier un terrain avant d'avoir extrait ce qu'on refuse, ni écrire un langage avant d'avoir tranché la position.",
    steps: [
      ["S", "Soul", "On extrait ce que vous ne voyez plus."],
      ["T", "Territory", "On cartographie le terrain déjà occupé."],
      ["R", "Reframe", "On recadre le champ pour qu'il vous serve."],
      ["A", "Architecture", "On bâtit la position et son langage."],
      ["W", "Weaponize", "On l'arme pour les quatre-vingt-dix jours."],
    ],
    cta: "Voir la méthode en détail →",
  },
  en: {
    kicker: "The mechanism",
    h2a: "Five stages.",
    h2b: "Each one earns the next.",
    lead: "This is not a method invented to have a method. It is the order in which a position gets cut: you cannot map a field before extracting what you refuse, nor write a language before settling the position.",
    steps: [
      ["S", "Soul", "We extract what you no longer see."],
      ["T", "Territory", "We map the ground already taken."],
      ["R", "Reframe", "We recut the field so it serves you."],
      ["A", "Architecture", "We build the position and its language."],
      ["W", "Weaponize", "We arm it for the first ninety days."],
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
          <h2 className="h-section mb-7">
            {t.h2a}
            <br />
            <span className="text-gradient">{t.h2b}</span>
          </h2>
          <p className="lede">{t.lead}</p>
        </div>

        <ol className="m-0 grid list-none gap-px border border-white/[0.09] bg-white/[0.09] p-0 sm:grid-cols-3 lg:grid-cols-5">
          {t.steps.map(([letter, word, line]) => (
            <li key={letter} className="bg-ink px-5 py-7 text-center">
              <div className="font-serif text-[2.4rem] font-bold leading-none text-brand">{letter}</div>
              <div className="mt-2 font-sans text-[11px] uppercase tracking-[0.18em] text-chalk-55">{word}</div>
              <p className="m-0 mt-4 font-sans text-[14px] leading-snug text-chalk-65">{line}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 text-center">
          <Link href="/strawberry-method" className="btn-quiet">
            {t.cta}
          </Link>
        </div>
      </div>
    </section>
  )
}
