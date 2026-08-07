"use client"

import { useEffect, useRef } from "react"

/**
 * Le texte qui s'épaissit au défilement.
 *
 * Chaque mot part fin et pâle, et devient gras et blanc en traversant le
 * centre de l'écran — la lecture devient un geste physique plutôt qu'un
 * bloc de texte qui apparaît d'un coup.
 *
 * Un seul titre du site l'utilise (le diagnostic) : c'est un geste ponctuel,
 * pas un traitement de texte générique — l'appliquer partout viderait
 * l'effet de son sens et coûterait cher en performance (un scroll listener
 * par mot, sur toute la page).
 *
 * Respecte prefers-reduced-motion : tous les mots s'affichent directement
 * au poids final, sans dépendre du scroll.
 */
export function ScrollFillText({ text, className }: { text: string; className?: string }) {
  const containerRef = useRef<HTMLSpanElement | null>(null)
  const reducedRef = useRef(false)

  useEffect(() => {
    reducedRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const container = containerRef.current
    if (!container) return

    const words = Array.from(container.querySelectorAll<HTMLSpanElement>("[data-word]"))

    if (reducedRef.current) {
      words.forEach((w) => {
        w.style.opacity = "1"
        w.style.fontWeight = "700"
        w.style.color = "#fff"
      })
      return
    }

    let ticking = false

    const update = () => {
      const viewportMid = window.innerHeight * 0.55
      for (const w of words) {
        const rect = w.getBoundingClientRect()
        const wordMid = rect.top + rect.height / 2
        const dist = Math.abs(wordMid - viewportMid)
        // Zone d'activation : ~260px de part et d'autre du centre.
        const progress = Math.max(0, Math.min(1, 1 - dist / 260))
        w.style.opacity = String(0.25 + progress * 0.75)
        w.style.fontWeight = String(Math.round(300 + progress * 400))
      }
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update)
        ticking = true
      }
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [text])

  return (
    <span ref={containerRef} className={className}>
      {text.split(" ").map((w, i) => (
        <span key={i} data-word style={{ display: "inline-block", color: "#fff", transition: "opacity 80ms linear" }}>
          {w}
          {i < text.split(" ").length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </span>
  )
}
