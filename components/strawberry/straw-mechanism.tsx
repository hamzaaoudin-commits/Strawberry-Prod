"use client"

import { STRAW, type StrawStage } from "@/lib/straw-mechanism"
import type { Lang } from "@/lib/lang"
import { LettersReveal } from "@/components/strawberry/letters-reveal"
import { ViewTracker } from "@/components/strawberry/view-tracker"
import { useScrollReveal } from "@/hooks/use-strawberry"

/**
 * S.T.R.A.W. — le mécanisme propriétaire du studio, avec tous les livrables
 * rangés par catégorie.
 *
 * Elle remplace « la tournée ». Celle-ci faisait défiler six scènes dans une
 * section épinglée, une seule fois, sur la home : il fallait traverser
 * quatre écrans et demi pour tout lire, et les pages de terrain n'avaient
 * rien d'équivalent. Ici, tout est posé d'un bloc, lisible sans geste, et
 * c'est la même section sur chaque page.
 *
 * Cinq catégories — les cinq étapes de la méthode — et, dans chacune, les
 * pièces qu'elle produit avec tous leurs livrables. Les données viennent de
 * lib/straw-mechanism.ts, qui alimente aussi les pages de terrain.
 */

function StageBlock({ stage, pieceWord }: { stage: StrawStage; pieceWord: string }) {
  const [ref, visible] = useScrollReveal()
  return (
    <div
      ref={ref}
      className={[
        "grid gap-8 border-t border-white/10 py-12 md:grid-cols-[230px_1fr] md:gap-14",
        "transition-all duration-[900ms] ease-[cubic-bezier(.22,.68,0,1)]",
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
      ].join(" ")}
    >
      <div>
        <div className="bg-[linear-gradient(135deg,#ff2233_20%,#ff4d2e_60%,#e0102a)] bg-clip-text font-serif text-[clamp(4.5rem,9vw,7rem)] font-bold leading-[0.95] text-transparent">
          {stage.letter}
        </div>
        <div className="mt-4 font-mono text-[11px] uppercase tracking-[0.28em] text-brand">{stage.name}</div>
        <div className="mt-2 font-serif text-[1.35rem] font-bold uppercase leading-tight text-white">{stage.gloss}</div>
        <div className="mt-2 font-sans text-[14px] text-chalk-55">{stage.verb}</div>
      </div>

      <div className="flex flex-col gap-12">
        {stage.pieces.map((p) => (
          <div key={p.n}>
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand">
              {pieceWord} {String(p.n).padStart(2, "0")} · {p.title}
            </div>
            <p className="mt-3 font-serif text-[clamp(1.15rem,2.2vw,1.45rem)] font-bold leading-[1.3] text-white">{p.line}</p>
            {p.note && <p className="mt-3 max-w-[600px] font-sans text-[14.5px] leading-[1.7] text-chalk-55">{p.note}</p>}
            <ul className="mt-5 flex list-none flex-col gap-3 p-0">
              {p.items.map((item) => (
                <li key={item} className="flex items-baseline gap-3.5 font-sans text-[15px] leading-[1.6] text-chalk-75">
                  <span aria-hidden className="relative -top-[0.1em] h-[6px] w-[6px] flex-none rounded-full bg-brand" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export function StrawMechanism({ lang }: { lang: Lang }) {
  const t = STRAW[lang === "en" ? "en" : "fr"]
  return (
    <section className="section bg-ink py-20 text-white sm:py-24">
      <ViewTracker name="straw_mechanism" />
      <div className="mx-auto max-w-[1040px] px-5 sm:px-8">
        <div className="mx-auto max-w-[720px] text-center">
          <div className="kicker mb-7">{t.eyebrow}</div>
          <h2 className="h-section">{t.title}</h2>
          <p className="mx-auto mt-6 max-w-[600px] font-sans text-[15.5px] leading-[1.75] text-chalk-55">{t.lead}</p>
        </div>

        <div className="mt-14">
          <LettersReveal letters={t.stages.map((s) => ({ letter: s.letter, name: s.name }))} />
        </div>

        <div className="mt-16">
          {t.stages.map((s) => (
            <StageBlock key={s.letter} stage={s} pieceWord={t.piece} />
          ))}
        </div>
      </div>
    </section>
  )
}
