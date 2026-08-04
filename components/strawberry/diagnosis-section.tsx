import { TrackLink } from "@/components/strawberry/track-link"
import { pick } from "@/lib/t"
import type { Lang } from "@/lib/lang"

/**
 * Le diagnostic, en six blocs.
 *
 * Il s'insère entre le problème et l'offre, et fait le travail qu'aucune
 * section ne faisait : montrer au lecteur qu'il s'est trompé de cause, donc
 * qu'il a acheté les mauvaises solutions, et que celles-ci ont aggravé la
 * situation au lieu de la corriger.
 *
 * Le bloc 04 porte l'argument central du studio, qui n'était écrit nulle part :
 * chaque remède courant augmente l'indifférenciation. Il porte aussi l'ennemi
 * nommé — l'agence et son diaporama — tandis que l'IA reste ce qui rend le
 * problème urgent, pas ce contre quoi on vend.
 */

const T = {
  en: {
    kicker: "The diagnosis",
    h2a: "You have probably already tried",
    h2b: "to fix this. Twice.",
    lead: "And it did not work, for a reason nobody sells you: the thing being repaired was never the thing that was broken.",
    blocks: [
      {
        n: "01",
        label: "What it looks like day to day",
        body: "You are not chosen, or you are chosen on price. Prospects say they will think about it, then go with a name that does the same thing for less — and you have no sentence to answer with.",
      },
      {
        n: "02",
        label: "The reflex",
        body: "You conclude that you should post more, write better, be more visible. It is the most reassuring explanation, because it only asks for more effort.",
      },
      {
        n: "03",
        label: "What you buy instead",
        body: "A new logo. A moodboard. A branding agency and its forty slides. A content calendar. Or a positioning prompted out of an AI in nine seconds.",
      },
      {
        n: "04",
        label: "Why it backfires",
        body: "A new logo on an indistinguishable sentence puts a spotlight on the sameness instead of hiding it. Posting more just makes you resemble everyone else, more often. And AI pulls every brand toward the same average sentence, because that average is exactly what it was trained on.",
      },
      {
        n: "05",
        label: "What's actually going on",
        body: "You have never decided what you refuse — not what you do, but what you won't say, won't take on, and who you're willing to lose. That refusal is what a story is cut from.",
      },
      {
        n: "06",
        label: "What we do about it",
        body: "We start by extraction: hours spent making you say what you no longer see, because you're inside it. What comes out isn't a style. It's a story your competitors cannot copy, because it wasn't invented — it was taken out of you.",
      },
    ],
    enemyKicker: "What we are not",
    enemy: [
      ["An agency bills you assets.", "We write a constitution."],
      ["It delivers forty slides.", "We deliver one document that decides."],
      ["It has you approve moodboards.", "We have you refuse things."],
    ],
    methodCta: "See the five stages \u2192",
  },
  fr: {
    kicker: "Le diagnostic",
    h2a: "Vous avez sans doute déjà essayé",
    h2b: "de régler ça. Deux fois.",
    lead: "Et ça n'a pas marché, pour une raison que personne ne vous vend : ce qu'on réparait n'a jamais été ce qui était cassé.",
    blocks: [
      {
        n: "01",
        label: "Ce que ça donne au quotidien",
        body: "On ne vous choisit pas, ou on vous choisit sur le prix. Les prospects disent qu'ils vont réfléchir, puis partent vers un nom qui fait la même chose pour moins cher — et vous n'avez aucune phrase à leur opposer.",
      },
      {
        n: "02",
        label: "Le réflexe",
        body: "Vous en concluez qu'il faudrait poster davantage, mieux écrire, être plus visible. C'est l'explication la plus rassurante, parce qu'elle ne demande que plus d'efforts.",
      },
      {
        n: "03",
        label: "Ce qu'on achète à la place",
        body: "Un logo neuf. Un moodboard. Une agence de branding et ses quarante slides. Un calendrier de contenu. Ou un positionnement demandé à une IA en neuf secondes.",
      },
      {
        n: "04",
        label: "Pourquoi ça se retourne contre vous",
        body: "Un logo neuf posé sur une phrase indifférenciable éclaire la ressemblance au lieu de la cacher. Poster plus vous fait juste ressembler à tout le monde, plus souvent. Et l'IA ramène chaque marque vers la même phrase moyenne, parce que cette moyenne est exactement ce sur quoi elle a été entraînée.",
      },
      {
        n: "05",
        label: "Ce qui se joue vraiment",
        body: "Vous n'avez jamais tranché ce que vous refusez — pas ce que vous faites, mais ce que vous ne direz pas, ne prendrez pas, et qui vous acceptez de perdre. C'est de ce refus qu'une histoire se découpe.",
      },
      {
        n: "06",
        label: "Ce qu'on fait, concrètement",
        body: "On commence par l'extraction : des heures à vous faire dire ce que vous ne voyez plus, parce que vous êtes dedans. Ce qui en sort n'est pas un style. C'est une histoire que vos concurrents ne peuvent pas copier, parce qu'elle n'a pas été inventée — elle a été extraite de vous.",
      },
    ],
    enemyKicker: "Ce que nous ne sommes pas",
    enemy: [
      ["Une agence vous facture des assets.", "Nous écrivons une constitution."],
      ["Elle livre quarante slides.", "Nous livrons un document qui tranche."],
      ["Elle vous fait valider des moodboards.", "Nous vous faisons refuser des choses."],
    ],
    methodCta: "Voir les cinq étapes \u2192",
  },
}

export function DiagnosisSection({ lang }: { lang: Lang }) {
  const t = pick(T, lang)

  return (
    <section className="section relative overflow-hidden bg-ink text-white">
      <div className="glow-center" aria-hidden />

      <div className="shell relative">
        <div className="mx-auto mb-14 max-w-[720px] text-center">
          <div className="kicker mb-6">{t.kicker}</div>
          <h2 className="h-section mb-7">
            {t.h2a}
            <br />
            <span className="text-gradient">{t.h2b}</span>
          </h2>
          <p className="lede">{t.lead}</p>
        </div>

        <ol className="mx-auto max-w-[860px] list-none border-t border-hair p-0">
          {t.blocks.map((b) => (
            <li key={b.n} className="border-b border-white/[0.07] py-8">
              <div className="grid gap-4 md:grid-cols-[76px_minmax(0,1fr)] md:gap-8">
                <div className="font-serif text-[1.9rem] font-bold leading-none text-brand">{b.n}</div>
                <div>
                  <h3 className="mb-3 font-serif text-[clamp(1.2rem,2.4vw,1.6rem)] font-bold leading-snug">
                    {b.label}
                  </h3>
                  <p className="m-0 max-w-[620px] font-sans text-[15.5px] leading-[1.8] text-chalk-65">{b.body}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        {/* L'ennemi nommé. Trois lignes, aucune marque citée. */}
        <div className="mx-auto mt-14 max-w-[860px] border border-brand-hair p-7 md:p-10">
          <div className="mb-7 font-sans text-[11px] uppercase tracking-[0.2em] text-brand">
            {t.enemyKicker}
          </div>
          <div className="grid gap-px bg-white/[0.09]">
            {t.enemy.map(([them, us]) => (
              <div key={them} className="grid gap-2 bg-ink px-5 py-4 sm:grid-cols-2 sm:gap-8">
                <span className="font-sans text-[15px] text-chalk-40 line-through decoration-white/20">{them}</span>
                <span className="font-sans text-[15px] text-white">{us}</span>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <TrackLink
              href="/strawberry-method"
              event="method_click"
              data={{ from: "home_diagnosis" }}
              className="btn-quiet"
            >
              {t.methodCta}
            </TrackLink>
          </div>
        </div>
      </div>
    </section>
  )
}
