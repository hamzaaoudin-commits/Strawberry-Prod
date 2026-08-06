"use client"

import { useRef, useState } from "react"
import type { Part, Block } from "@/lib/sample-sillage"

/**
 * Le lecteur du document, page par page.
 *
 * Avant, les quatorze parties s'enchaînaient dans un seul long défilement,
 * avec une table des matières en ancre tout en haut. Ça se lit comme une page
 * web, pas comme le document qu'on reçoit réellement — un document qu'on
 * feuillette, une pièce à la fois.
 *
 * Ce composant affiche une seule partie, avec une navigation précédent/
 * suivant et un sommaire qu'on peut ouvrir pour sauter directement à une
 * pièce. Le contenu de chaque partie reste strictement le même ; seule la
 * présentation change.
 */

function RenderBlock({ b }: { b: Block }) {
  switch (b.kind) {
    case "h":
      return (
        <h3 className="mb-4 mt-10 font-serif text-[clamp(1.15rem,2vw,1.5rem)] font-bold tracking-[-0.01em] text-white first:mt-0">
          {b.text}
        </h3>
      )

    case "lead":
      return <p className="mb-5 font-serif text-[1.15rem] italic leading-relaxed text-chalk-90">{b.text}</p>

    case "p":
      return <p className="mb-5 font-sans text-[15.5px] leading-[1.75] text-chalk-75">{b.text}</p>

    case "quote":
      return (
        <blockquote className="my-7 border-l-2 border-brand bg-white/[0.02] py-5 pl-6 pr-5">
          <p className="m-0 font-serif text-[clamp(1rem,1.6vw,1.2rem)] italic leading-[1.6] text-chalk-90">
            {b.text}
          </p>
        </blockquote>
      )

    case "list":
      return (
        <ul className="mb-6 flex list-none flex-col gap-3.5 p-0">
          {b.items.map((it, i) => (
            <li key={i} className="flex items-start gap-3.5 font-sans text-[15px] leading-[1.7] text-chalk-75">
              <span aria-hidden className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-brand" />
              {it}
            </li>
          ))}
        </ul>
      )

    case "table":
      return (
        <div className="mb-7 overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr>
                {b.head.map((h) => (
                  <th
                    key={h}
                    className="border-b border-white/15 pb-3 pr-5 font-sans text-[10px] uppercase tracking-[0.18em] text-brand"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {b.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className={`border-b border-white/[0.07] py-4 pr-5 align-top font-sans text-[13.5px] leading-relaxed ${
                        j === 0 ? "font-semibold text-white" : "text-chalk-65"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )

    case "pair":
      return (
        <div className="mb-6 grid gap-3 md:grid-cols-2">
          <div className="border border-white/10 bg-white/[0.02] p-5">
            <div className="mb-2.5 font-sans text-[10px] uppercase tracking-[0.2em] text-white/35">{b.beforeLabel}</div>
            <p className="m-0 font-sans text-[14px] leading-relaxed text-white/45">{b.before}</p>
          </div>
          <div className="border border-brand-hair bg-brand/[0.05] p-5">
            <div className="mb-2.5 font-sans text-[10px] uppercase tracking-[0.2em] text-brand">{b.afterLabel}</div>
            <p className="m-0 font-sans text-[14px] leading-relaxed text-chalk-90">{b.after}</p>
          </div>
        </div>
      )
  }
}

export function DocumentReader({
  parts,
  labels,
}: {
  parts: Part[]
  labels: { toc: string; prev: string; next: string; pageOfTemplate: string; ofCount: string }
}) {
  const [i, setI] = useState(0)
  const [tocOpen, setTocOpen] = useState(false)
  const topRef = useRef<HTMLDivElement | null>(null)
  const part = parts[i]

  const pageLabel = labels.pageOfTemplate
    .replace("{i}", String(i + 1))
    .replace("{n}", String(parts.length))

  const go = (next: number) => {
    setI(Math.max(0, Math.min(parts.length - 1, next)))
    setTocOpen(false)
    // Un lecteur de document tourne la page : il revient en haut de la
    // partie courante, il ne garde pas son ancienne position de défilement.
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div>
      {/* Barre de navigation : sommaire + position dans le document. */}
      <div ref={topRef} className="sticky top-[64px] z-10 border-y border-hair bg-ink/95 backdrop-blur">
        <div className="mx-auto flex max-w-[820px] items-center justify-between gap-4 px-gutter py-3">
          <button
            type="button"
            onClick={() => setTocOpen((v) => !v)}
            className="flex items-center gap-2 bg-transparent font-sans text-[13px] text-chalk-65 transition-colors hover:text-white"
          >
            <span aria-hidden className="text-brand">☰</span>
            {labels.toc}
          </button>
          {/* Une pile de pages plutôt qu'un simple « Partie 4/14 » en texte —
              l'idée d'un document qu'on feuillette, rendue physique. */}
          <div
            className="flex items-center gap-3"
            role="status"
            aria-label={pageLabel}
          >
            <div className="relative h-[30px] w-[24px]" aria-hidden>
              <div className="absolute left-[3px] top-[3px] h-[30px] w-[24px] border border-white/10 bg-[#151010]" />
              <div className="absolute left-[1.5px] top-[1.5px] h-[30px] w-[24px] border border-white/15 bg-ink" />
              <div className="relative flex h-[30px] w-[24px] items-center justify-center border border-brand bg-ink font-serif text-[11px] font-bold text-brand">
                {String(i + 1).padStart(2, "0")}
              </div>
            </div>
            <span className="font-sans text-[12px] text-chalk-40">
              {labels.ofCount.replace("{n}", String(parts.length))}
            </span>
          </div>
        </div>

        {tocOpen && (
          <div className="border-t border-hair bg-ink">
            <ol className="mx-auto grid max-w-[820px] list-none gap-x-8 gap-y-1 px-gutter py-5 md:grid-cols-2">
              {parts.map((p, idx) => (
                <li key={p.n}>
                  <button
                    type="button"
                    onClick={() => go(idx)}
                    className={`flex w-full items-baseline gap-3 bg-transparent py-1 text-left font-sans text-[14px] no-underline transition-colors hover:text-white ${
                      idx === i ? "text-white" : "text-chalk-55"
                    }`}
                  >
                    <span className="font-serif text-brand">{p.n}</span>
                    {p.title}
                  </button>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>

      {/* La partie courante. */}
      <div className="px-gutter">
        <div className="mx-auto max-w-[820px] py-14 md:py-20">
          <div className="mb-2 flex items-baseline gap-4">
            <span className="font-serif text-[2rem] font-bold leading-none text-brand">{part.n}</span>
            <span className="eyebrow">{part.subtitle}</span>
          </div>

          <h2 className="mb-9 font-serif text-[clamp(1.6rem,3.4vw,2.4rem)] font-bold leading-tight tracking-[-0.02em]">
            {part.title}
          </h2>

          {part.blocks.map((b, idx) => (
            <RenderBlock key={idx} b={b} />
          ))}
        </div>
      </div>

      {/* Précédent / suivant. */}
      <div className="border-t border-hair px-gutter py-8">
        <div className="mx-auto flex max-w-[820px] items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => go(i - 1)}
            disabled={i === 0}
            className="btn-ghost disabled:cursor-not-allowed disabled:opacity-30"
          >
            {labels.prev}
          </button>
          <button
            type="button"
            onClick={() => go(i + 1)}
            disabled={i === parts.length - 1}
            className="btn-primary disabled:cursor-not-allowed disabled:opacity-30"
          >
            {labels.next}
          </button>
        </div>
      </div>
    </div>
  )
}
