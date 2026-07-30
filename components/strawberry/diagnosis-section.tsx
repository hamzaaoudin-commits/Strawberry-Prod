import { LocaleLink as Link } from "@/components/locale-link"
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
        label: "The problem as you live it",
        body: "You are not chosen, or you are chosen on price. Prospects say they will think about it. They compare you to a name that does the same thing for less, and you have no sentence to answer with. When you win, it is because someone already knew you — never because the market read you correctly.",
      },
      {
        n: "02",
        label: "The false cause",
        body: "You conclude that your communication is not good enough, or not regular enough. That you should post more, write better, be more visible. It is the most reassuring diagnosis available, because it points at effort — something you can always supply more of.",
      },
      {
        n: "03",
        label: "The false remedy",
        body: "So you redo the logo. You build a moodboard. You brief a branding agency, which returns forty slides. You start producing content on a schedule. Or you ask a language model for a positioning, and it gives you one in nine seconds.",
      },
      {
        n: "04",
        label: "Why it makes things worse",
        body: "A new logo on an indistinguishable sentence does not hide the indistinguishability — it puts a spotlight on it. Posting more makes you resemble everyone else more often, at greater expense. And a language model pulls you toward the market average by construction, because the market average is exactly what it was trained on. Every one of these remedies increases the very thing you were trying to escape.",
      },
      {
        n: "05",
        label: "The real cause",
        body: "You have never settled what you refuse. Not what you do — what you will not do, will not say, will not take on, and who you are willing to lose. A position is a shape cut out of a field, and you cannot cut without refusing. Without refusal there is no position, only a list of qualities every competitor also claims.",
      },
      {
        n: "06",
        label: "The real remedy",
        body: "Extraction first: several hours in which we make you say what you no longer see, because you have been inside it too long. Then the five stages, in order, each one earning the next. What comes out is not a style. It is a written constitution your competitors cannot copy, because it was not invented — it was taken out of you.",
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
        label: "Le problème tel que vous le vivez",
        body: "On ne vous choisit pas, ou on vous choisit sur le prix. Les prospects disent qu'ils vont réfléchir. Ils vous comparent à un nom qui fait la même chose pour moins cher, et vous n'avez aucune phrase à leur opposer. Quand vous gagnez, c'est parce qu'on vous connaissait déjà — jamais parce que le marché vous a lu correctement.",
      },
      {
        n: "02",
        label: "La fausse cause",
        body: "Vous en concluez que votre communication n'est pas assez bonne, ou pas assez régulière. Qu'il faudrait poster davantage, mieux écrire, être plus visible. C'est le diagnostic le plus rassurant qui soit, parce qu'il désigne l'effort — la seule chose dont vous pouvez toujours fournir plus.",
      },
      {
        n: "03",
        label: "La fausse solution",
        body: "Alors vous refaites le logo. Vous montez un moodboard. Vous briefez une agence de branding, qui vous rend quarante slides. Vous vous mettez à produire du contenu au calendrier. Ou vous demandez un positionnement à un modèle de langage, qui vous en donne un en neuf secondes.",
      },
      {
        n: "04",
        label: "Pourquoi ça aggrave",
        body: "Un logo neuf posé sur une phrase indifférenciable ne masque pas l'indifférenciation — il l'éclaire. Poster plus vous fait ressembler à tout le monde plus souvent, et plus cher. Et un modèle de langage vous ramène vers la moyenne du marché par construction, parce que la moyenne du marché est exactement ce sur quoi il a été entraîné. Chacun de ces remèdes augmente précisément ce que vous cherchiez à fuir.",
      },
      {
        n: "05",
        label: "La vraie cause",
        body: "Vous n'avez jamais tranché ce que vous refusez. Pas ce que vous faites — ce que vous ne ferez pas, ne direz pas, ne prendrez pas, et qui vous acceptez de perdre. Une position est une forme découpée dans un champ, et on ne découpe pas sans refuser. Sans refus, pas de position : seulement une liste de qualités que vos concurrents revendiquent aussi.",
      },
      {
        n: "06",
        label: "La vraie solution",
        body: "L'Extraction d'abord : plusieurs heures pendant lesquelles nous vous faisons dire ce que vous ne voyez plus, parce que vous êtes dedans depuis trop longtemps. Puis les cinq étapes, dans l'ordre, chacune méritant la suivante. Ce qui en sort n'est pas un style. C'est une constitution écrite que vos concurrents ne peuvent pas copier, parce qu'elle n'a pas été inventée — elle a été extraite de vous.",
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
            <Link href="/strawberry-method" className="btn-quiet">
              {t.methodCta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
