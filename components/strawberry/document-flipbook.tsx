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
const DURATION = 700

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
  // idle : rien ne tourne. armed : la page qui tourne est montée à son point
  // de départ, transition coupée — le temps qu'un premier rendu passe avant
  // d'activer la transition, sans quoi le navigateur saute directement à
  // l'état final et rien ne s'anime. animating : la transition tourne.
  const [phase, setPhase] = useState<"idle" | "armed" | "animating">("idle")
  const [pendingIndex, setPendingIndex] = useState<number | null>(null)
  const [reduced, setReduced] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches)
  }, [])

  const turning = phase !== "idle"

  const goTo = useCallback(
    (next: number) => {
      if (next < 0 || next >= pages.length || next === index || turning) return
      track("flipbook_page_turn", { to: next })
      if (reduced) {
        setIndex(next)
        return
      }
      setDir(next > index ? 1 : -1)
      setPendingIndex(next)
      setPhase("armed")
    },
    [index, pages.length, reduced, turning]
  )

  // Deux images animation-frame avant de déclencher la transition : le
  // premier laisse le navigateur peindre l'état de départ (page à plat,
  // transition coupée), le second bascule sur l'état final avec la
  // transition active — c'est ce qui force réellement l'animation à jouer
  // au lieu de sauter directement au résultat.
  useEffect(() => {
    if (phase !== "armed") return
    const raf1 = requestAnimationFrame(() => {
      rafRef.current = requestAnimationFrame(() => setPhase("animating"))
    })
    return () => {
      cancelAnimationFrame(raf1)
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [phase])

  useEffect(() => {
    if (phase !== "animating" || pendingIndex === null) return
    const t = window.setTimeout(() => {
      setIndex(pendingIndex)
      setPendingIndex(null)
      setPhase("idle")
    }, DURATION)
    return () => window.clearTimeout(t)
  }, [phase, pendingIndex])

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowRight") goTo(index + 1)
      if (e.key === "ArrowLeft") goTo(index - 1)
    },
    [goTo, index]
  )

  // La page à afficher pour le repère d'acte, la légende et la pagination :
  // dès le clic, on bascule sur la destination — visuellement la nouvelle
  // page est déjà "là", sous la page qui tourne.
  const displayIndex = turning && pendingIndex !== null ? pendingIndex : index
  const display = pages[displayIndex]
  const act = acts[display.actIndex]

  // La couche du dessous : la page qui reste en place. En avançant, c'est
  // directement la destination (la page qui tourne la révèle en dessous).
  // En reculant, c'est encore la page actuelle, le temps que la page
  // précédente se rabatte par-dessus.
  const baseIndex = turning ? (dir === 1 ? pendingIndex! : index) : index
  // La couche du dessus : la page qui tourne. En avançant, la page actuelle
  // qui se rabat vers la gauche. En reculant, la page précédente qui revient
  // se poser par-dessus.
  const flapIndex = turning ? (dir === 1 ? index : pendingIndex!) : null

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
            perspective: 1600,
          }}
        >
          {/* Page de base : toujours à plat, jamais animée. */}
          <div style={{ visibility: turning ? "hidden" : "visible" }}>{pages[baseIndex].component}</div>
          {turning && (
            <div style={{ position: "absolute", inset: 0 }}>{pages[baseIndex].component}</div>
          )}

          {/* Page qui tourne : montée sur son bord gauche comme une reliure,
              pivote à 180°. Passé la moitié du mouvement, son dos masqué
              (backfaceVisibility) la fait disparaître d'un coup — exactement
              l'instant où une vraie page cesse d'être visible de face. */}
          {turning && flapIndex !== null && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                transformStyle: "preserve-3d",
                transformOrigin: "left center",
                backfaceVisibility: "hidden",
                transform:
                  phase === "animating"
                    ? dir === 1
                      ? "rotateY(-180deg)"
                      : "rotateY(0deg)"
                    : dir === 1
                      ? "rotateY(0deg)"
                      : "rotateY(-180deg)",
                transition: phase === "animating" ? `transform ${DURATION}ms cubic-bezier(0.45,0,0.2,1)` : "none",
                boxShadow: "-2px 0 12px rgba(0,0,0,0.4)",
              }}
            >
              {pages[flapIndex].component}
              {/* Ombre qui balaie la page au moment où elle pivote, pour
                  suggérer le relief plutôt qu'un aplat qui tourne sur lui-même. */}
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to right, rgba(0,0,0,0.5), transparent 55%)",
                  opacity: phase === "animating" ? 1 : 0,
                  transition: `opacity ${DURATION * 0.6}ms ease`,
                  pointerEvents: "none",
                }}
              />
            </div>
          )}
        </div>

        {/* Flèches, posées de part et d'autre du livre plutôt qu'en dessous —
            le geste reste au niveau de la page qu'on tourne. */}
        <button
          type="button"
          aria-label={prevLabel}
          disabled={index === 0 || turning}
          onClick={() => goTo(index - 1)}
          style={arrowStyle("left")}
        >
          ‹
        </button>
        <button
          type="button"
          aria-label={nextLabel}
          disabled={index === pages.length - 1 || turning}
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
          {display.label}
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
          {display.caption}
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
            aria-current={i === displayIndex}
            disabled={turning}
            onClick={() => goTo(i)}
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              border: "none",
              cursor: turning ? "default" : "pointer",
              padding: 0,
              background: i === displayIndex ? COLOR : "rgba(255,255,255,0.18)",
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
        {pageLabel(displayIndex + 1, pages.length)}
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
