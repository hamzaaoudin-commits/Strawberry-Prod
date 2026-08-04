"use client"

import { useCallback, useRef, useState } from "react"
import { TrackLink } from "@/components/strawberry/track-link"
import { useT } from "@/lib/i18n"

/**
 * Avant / après.
 *
 * Trois paires affichées côte à côte demandaient au lecteur de comparer six
 * phrases pour comprendre un seul mouvement. Une seule maison, un seul curseur :
 * le déplacement se voit au lieu de se lire.
 *
 * La version précédente ancrait les deux phrases au même bord gauche, sous
 * deux calques superposés : au repos, l'une masquait presque entièrement
 * l'autre et le curseur était bridé entre 6 % et 94 %, donc il ne montrait
 * jamais un état complet. « Avant » est maintenant ancré à droite du cadre,
 * « après » à gauche, chacun sur un fond de couleur distincte — le
 * déplacement révèle un vrai contraste, pas une même phrase qui apparaît et
 * disparaît au même endroit. Le curseur va désormais de 0 à 100 %.
 *
 * La phrase vient du document SILLAGE, publié en entier — le lecteur peut
 * l'ouvrir et retrouver le raisonnement qui mène de gauche à droite.
 */

const T = {
  fr: {
    kicker: "Avant / après",
    h2a: "Ce qui change,",
    h2b: "concrètement.",
    lead: "Une architecture ne se juge pas sur une intention mais sur une phrase. Tirez la poignée.",
    beforeLabel: "Avant",
    afterLabel: "Après",
    house: "SILLAGE · logiciel de chantier",
    before: "Le suivi de chantier simple et visuel.",
    after: "Sur un chantier, ce n'est pas ce qui s'est passé qui compte. C'est ce que vous pouvez prouver.",
    gainLabel: "Ce que ça change",
    gain: "Sort de la comparaison avec un outil de productivité. Le prix cesse d'être arbitré sur des heures gagnées.",
    cta: "Lire le document complet →",
    aria: "Curseur avant / après",
  },
  en: {
    kicker: "Before / after",
    h2a: "What actually",
    h2b: "changes.",
    lead: "An architecture isn't judged on an intention but on a sentence. Drag the handle.",
    beforeLabel: "Before",
    afterLabel: "After",
    house: "SILLAGE · construction software",
    before: "Simple, visual construction site tracking.",
    after: "On a building site, what happened isn't what counts. What you can prove is.",
    gainLabel: "What it changes",
    gain: "Leaves the productivity-tool comparison. Price stops being judged on hours saved.",
    cta: "Read the full document →",
    aria: "Before / after slider",
  },
}

export function BeforeAfterSection() {
  const t = useT(T)
  const box = useRef<HTMLDivElement | null>(null)
  const [pct, setPct] = useState(35)
  const dragging = useRef(false)

  const setFromX = useCallback((clientX: number) => {
    const r = box.current?.getBoundingClientRect()
    if (!r) return
    const p = ((clientX - r.left) / r.width) * 100
    setPct(Math.max(0, Math.min(100, p)))
  }, [])

  /**
   * Le curseur reste utilisable au clavier : flèches, Origine et Fin. Un
   * comparateur qui n'existe qu'à la souris exclut une partie des lecteurs et
   * n'est pas annonçable aux lecteurs d'écran.
   */
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPct((v) => Math.max(0, v - 4))
    else if (e.key === "ArrowRight") setPct((v) => Math.min(100, v + 4))
    else if (e.key === "Home") setPct(0)
    else if (e.key === "End") setPct(100)
    else return
    e.preventDefault()
  }

  return (
    <section className="section relative overflow-hidden bg-ink text-white">
      <div className="shell relative">
        <div className="mb-12 text-center">
          <div className="kicker mb-6">{t.kicker}</div>
          <h2 className="h-section mb-6">
            {t.h2a}
            <br />
            <span className="text-gradient">{t.h2b}</span>
          </h2>
          <p className="lede mx-auto max-w-[560px]">{t.lead}</p>
        </div>

        <div className="mx-auto max-w-[900px]">
          <div
            ref={box}
            role="slider"
            tabIndex={0}
            aria-label={t.aria}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(pct)}
            aria-valuetext={`${Math.round(pct)}%`}
            onKeyDown={onKey}
            onPointerDown={(e) => {
              dragging.current = true
              e.currentTarget.setPointerCapture(e.pointerId)
              setFromX(e.clientX)
            }}
            onPointerMove={(e) => {
              if (dragging.current) setFromX(e.clientX)
            }}
            onPointerUp={() => {
              dragging.current = false
            }}
            onPointerCancel={() => {
              dragging.current = false
            }}
            className="relative h-[280px] cursor-ew-resize touch-none select-none overflow-hidden border border-hair-strong bg-ink outline-none focus-visible:border-brand sm:h-[240px]"
          >
            {/* L'état de départ occupe toute la surface, ancré à droite : c'est
                la zone que révèle un curseur tiré vers la gauche. */}
            <div className="absolute inset-0 flex flex-col items-end justify-center bg-[#141414] px-6 text-right sm:px-10">
              <div className="mb-4 font-sans text-[11px] uppercase tracking-[0.2em] text-chalk-40">
                {t.beforeLabel}
              </div>
              <p className="ml-auto max-w-[420px] font-serif text-[clamp(1.15rem,2.6vw,1.8rem)] leading-[1.3] text-white/45">
                {t.before}
              </p>
            </div>

            {/* L'état d'arrivée est découpé par la poignée. Le contenu garde une
                largeur fixe pour que le texte ne se reflue pas pendant le geste.
                Un fond distinct (chaud, teinté de la couleur de marque) rend le
                contraste visible même avant de lire le texte. */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-brand bg-[linear-gradient(135deg,#241012,#160b0c)]"
              style={{ width: `${pct}%` }}
            >
              <div
                className="absolute inset-y-0 left-0 flex flex-col justify-center px-6 sm:px-10"
                style={{ width: "min(900px, 92vw)" }}
              >
                <div className="mb-4 font-sans text-[11px] uppercase tracking-[0.2em] text-brand">
                  {t.afterLabel}
                </div>
                <p className="max-w-[560px] font-serif text-[clamp(1.15rem,2.6vw,1.8rem)] leading-[1.3] text-white">
                  {t.after}
                </p>
              </div>
            </div>

            <div
              aria-hidden
              className="pointer-events-none absolute top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-white shadow-[0_0_0_6px_rgba(230,57,70,0.18)]"
              style={{ left: `${pct}%` }}
            >
              <span className="text-base leading-none">&#8646;</span>
            </div>
          </div>

          <div className="border border-t-0 border-hair px-5 py-4">
            <p className="body-sm">
              <span className="text-brand">{t.gainLabel} — </span>
              {t.gain}
            </p>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
            <span className="font-sans text-[13px] text-chalk-40">{t.house}</span>
            <TrackLink
              href="/documents/sillage"
              event="sillage_click"
              data={{ from: "home_before_after" }}
              className="btn-quiet"
            >
              {t.cta}
            </TrackLink>
          </div>
        </div>
      </div>
    </section>
  )
}
