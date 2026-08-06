"use client"

import { useEffect, useState } from "react"

/**
 * La barre de progression de lecture.
 *
 * Une fine ligne collée en haut du viewport, qui avance avec le défilement
 * de la page. Utile surtout sur les pages longues — Architecture, le livre,
 * SILLAGE — comme repère de progression.
 *
 * Calcul au scroll, throttlé par requestAnimationFrame plutôt qu'à chaque
 * événement — le scroll peut déclencher des dizaines d'événements par
 * seconde, la barre n'a besoin d'être mise à jour qu'une fois par image.
 */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let ticking = false

    const update = () => {
      const doc = document.documentElement
      const scrollable = doc.scrollHeight - doc.clientHeight
      const pct = scrollable > 0 ? (doc.scrollTop / scrollable) * 100 : 0
      setProgress(Math.min(100, Math.max(0, pct)))
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
  }, [])

  return (
    <div aria-hidden className="fixed left-0 top-0 z-[200] h-[2px] w-full bg-transparent">
      <div
        className="h-full bg-[linear-gradient(90deg,#e63946,#ff1a1a)]"
        style={{ width: `${progress}%`, transition: "width 120ms linear" }}
      />
    </div>
  )
}
