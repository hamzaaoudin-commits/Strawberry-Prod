"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { track } from "@vercel/analytics"

/**
 * Le livre feuilletable.
 *
 * Remplace quatre grilles empilées (onze pages, toutes affichées à la fois,
 * sur toute la largeur du conteneur) par une seule page à la fois, dans un
 * cadre qui ne dépasse pas 420px de large. Deux raisons de le faire ainsi
 * plutôt qu'en grille :
 *
 * 1. La largeur. Onze aperçus en grille forcent une section de plusieurs
 *    écrans de hauteur. Un livre qu'on feuillette tient dans un seul cadre
 *    compact, quel que soit le nombre de pages qu'on y ajoute plus tard.
 * 2. La lecture. Un acheteur qui n'a jamais rien reçu du studio a besoin de
 *    *sentir* qu'il tient un objet, page après page — pas de scanner une
 *    planche contact. Le geste de tourner la page fait le travail qu'aucune
 *    légende ne fait : rendre le livrable tangible avant l'achat.
 *
 * Respecte prefers-reduced-motion : la page suivante remplace l'ancienne par
 * un fondu plutôt qu'une rotation, pour qui a demandé moins de mouvement.
 */

export type FlipbookPage = {
  component: React.ReactNode
  label: string
  caption: string
  actIndex: number
}

export type FlipbookAct = {
  roman: string
  title: string
}

const COLOR = "#e63946"
const SERIF = "var(--font-playfair), 'Playfair Display', serif"
const SANS = "var(--font-dm-sans), 'DM Sans', sans-serif"

export function DocumentFlipbook({
  pages,
  acts,
  prevLabel,
  nextLabel,
  pageLabel,
}: {
  pages: FlipbookPage[]
  acts: FlipbookAct[]
  prevLabel: string
  nextLabel: string
  /** ex. (i, n) => `Page ${i} / ${n}` */
  pageLabel: (i: number, n: number) => string
}) {
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState<1 | -1>(1)
  const [turning, setTurning] = useState(false)
  const [reduced, setReduced] = useState(false)
  const touchStartX = useRef<number | null>(null)

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches)
  }, [])

  const goTo = useCallback(
    (next: number) => {
      if (next < 0 || next >= pages.length || next === index) return
      setDir(next > index ? 1 : -1)
      setTurning(true)
      track("flipbook_page_turn", { to: next })
      window.setTimeout(
        () => {
          setIndex(next)
          setTurning(false)
        },
        reduced ? 0 : 260
      )
    },
    [index, pages.length, reduced]
  )

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowRight") goTo(index + 1)
      if (e.key === "ArrowLeft") goTo(index - 1)
    },
    [goTo, index]
  )

  const current = pages[index]
  const act = acts[current.actIndex]

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      tabIndex={0}
      onKeyDown={onKeyDown}
      style={{ maxWidth: 420, margin: "0 auto", outline: "none" }}
    >
      {/* Repère d'acte, au-dessus du livre — le contexte ne se perd pas en
          feuilletant, sans prendre la place d'un titre de section entier. */}
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <div
          style={{
            fontFamily: SERIF,
            fontStyle: "italic",
            fontSize: "0.95rem",
            color: COLOR,
            marginBottom: 4,
          }}
        >
          {act.roman}
        </div>
        <div
          style={{
            fontFamily: SANS,
            fontSize: 10,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.5)",
          }}
        >
          {act.title}
        </div>
      </div>

      <div
        style={{ position: "relative" }}
        onTouchStart={(e) => {
          touchStartX.current = e.touches[0].clientX
        }}
        onTouchEnd={(e) => {
          if (touchStartX.current === null) return
          const dx = e.changedTouches[0].clientX - touchStartX.current
          if (Math.abs(dx) > 40) goTo(dx < 0 ? index + 1 : index - 1)
          touchStartX.current = null
        }}
      >
        {/* Les tranches de pages : deux rectangles décalés derrière la page
            visible, pour lire "un livre" au lieu d'"une image". Purement
            décoratif, masqué du lecteur d'écran. */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: "10px -10px -10px 10px",
            background: "#0a0a0a",
            border: "1px solid #1c1c1c",
            transform: "translate(6px, 6px)",
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: "6px -6px -6px 6px",
            background: "#0b0b0b",
            border: "1px solid #1a1a1a",
            transform: "translate(3px, 3px)",
          }}
        />

        <div
          style={{
            position: "relative",
            boxShadow: "0 30px 70px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.06)",
            perspective: 1400,
          }}
        >
          <div
            key={index}
            style={{
              transformOrigin: dir === 1 ? "left center" : "right center",
              transform: turning && !reduced ? `rotateY(${dir === 1 ? "-14deg" : "14deg"})` : "rotateY(0deg)",
              opacity: turning ? 0.4 : 1,
              transition: reduced ? "opacity 150ms ease" : "transform 260ms ease, opacity 260ms ease",
            }}
          >
            {current.component}
          </div>
        </div>

        {/* Flèches, posées de part et d'autre du livre plutôt qu'en dessous —
            le geste reste au niveau de la page qu'on tourne. */}
        <button
          type="button"
          aria-label={prevLabel}
          disabled={index === 0}
          onClick={() => goTo(index - 1)}
          style={arrowStyle("left")}
        >
          ‹
        </button>
        <button
          type="button"
          aria-label={nextLabel}
          disabled={index === pages.length - 1}
          onClick={() => goTo(index + 1)}
          style={arrowStyle("right")}
        >
          ›
        </button>
      </div>

      <div style={{ textAlign: "center", marginTop: 20 }}>
        <div
          style={{
            fontFamily: SANS,
            fontSize: 10,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: COLOR,
            marginBottom: 6,
          }}
        >
          {current.label}
        </div>
        <p
          style={{
            fontFamily: SERIF,
            fontStyle: "italic",
            fontSize: "0.95rem",
            color: "rgba(255,255,255,0.7)",
            lineHeight: 1.55,
            margin: "0 auto",
            maxWidth: 360,
          }}
        >
          {current.caption}
        </p>
      </div>

      {/* Pagination : des points groupés par acte, pas juste onze points
          identiques — un acheteur voit d'un coup d'œil où il se trouve dans
          la structure en quatre actes, pas seulement dans la liste. */}
      <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 24, flexWrap: "wrap" }}>
        {pages.map((p, i) => (
          <button
            key={i}
            type="button"
            aria-label={pageLabel(i + 1, pages.length)}
            aria-current={i === index}
            onClick={() => goTo(i)}
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              border: "none",
              cursor: "pointer",
              padding: 0,
              background: i === index ? COLOR : "rgba(255,255,255,0.18)",
              marginRight: i < pages.length - 1 && pages[i + 1].actIndex !== p.actIndex ? 10 : 0,
              transition: "background 200ms ease",
            }}
          />
        ))}
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: 12,
          fontFamily: SANS,
          fontSize: 11,
          color: "rgba(255,255,255,0.35)",
        }}
      >
        {pageLabel(index + 1, pages.length)}
      </div>
    </div>
  )
}

function arrowStyle(side: "left" | "right"): React.CSSProperties {
  return {
    position: "absolute",
    top: "50%",
    [side]: -18,
    transform: "translateY(-50%)",
    width: 40,
    height: 40,
    borderRadius: "50%",
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(13,13,13,0.9)",
    color: "#fff",
    fontSize: 20,
    lineHeight: "40px",
    textAlign: "center",
    cursor: "pointer",
    padding: 0,
  } as React.CSSProperties
}
