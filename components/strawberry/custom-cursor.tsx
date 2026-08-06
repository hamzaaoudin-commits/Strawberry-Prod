"use client"

import { useEffect, useRef } from "react"

/**
 * Le curseur personnalisé.
 *
 * Un point qui suit la souris exactement, et un anneau qui suit avec un
 * léger retard — l'anneau grossit au survol de tout ce qui est cliquable.
 *
 * Uniquement sur les appareils à pointeur fin (souris, trackpad) :
 * `(pointer: fine)` exclut le tactile, où ceci n'aurait aucun sens et où le
 * curseur système ne s'affiche de toute façon jamais. Le curseur natif reste
 * caché seulement une fois qu'on est sûr d'être sur un tel appareil — jamais
 * avant, pour ne pas laisser un visiteur sur mobile sans aucun curseur.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null)
  const ringRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (typeof window === "undefined") return
    const fine = window.matchMedia("(pointer: fine)").matches
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!fine || reduced) return

    document.documentElement.classList.add("sp-cursor-active")

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let rx = mx
    let ry = my

    const onMove = (e: PointerEvent) => {
      mx = e.clientX
      my = e.clientY
      dot.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`
    }

    const isInteractive = (el: Element | null) =>
      !!el?.closest('a, button, [role="button"], input, textarea, select, [data-cursor-hover]')

    const onOver = (e: PointerEvent) => {
      const hovering = isInteractive(e.target as Element)
      ring.style.width = hovering ? "44px" : "28px"
      ring.style.height = hovering ? "44px" : "28px"
      ring.style.borderColor = hovering ? "rgba(230,57,70,0.7)" : "rgba(230,57,70,0.35)"
      dot.style.opacity = hovering ? "0" : "1"
    }

    let raf = 0
    const tick = () => {
      rx += (mx - rx) * 0.18
      ry += (my - ry) * 0.18
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener("pointermove", onMove, { passive: true })
    window.addEventListener("pointerover", onOver, { passive: true })
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("pointerover", onOver)
      cancelAnimationFrame(raf)
      document.documentElement.classList.remove("sp-cursor-active")
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden h-1.5 w-1.5 rounded-full bg-brand opacity-0 [.sp-cursor-active_&]:block [.sp-cursor-active_&]:opacity-100"
        style={{ transition: "opacity 200ms ease" }}
      />
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden h-7 w-7 rounded-full border opacity-0 [.sp-cursor-active_&]:block [.sp-cursor-active_&]:opacity-100"
        style={{ borderColor: "rgba(230,57,70,0.35)", transition: "width 250ms cubic-bezier(.22,.68,0,1.2), height 250ms cubic-bezier(.22,.68,0,1.2), border-color 250ms ease, opacity 300ms ease" }}
      />
    </>
  )
}
