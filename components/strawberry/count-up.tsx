"use client"

import { useEffect, useRef, useState } from "react"

/**
 * Un chiffre qui compte jusqu'à sa valeur.
 *
 * Déclenché une fois, quand le chiffre entre dans le champ de vision — pas à
 * chaque scroll. Parse le préfixe numérique de la valeur ("38%", "340+") et
 * n'anime que ça ; le suffixe (%, +) reste tel quel.
 *
 * Respecte prefers-reduced-motion : affiche directement la valeur finale.
 */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const [display, setDisplay] = useState<string>(value)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const match = value.match(/^(\d+)(.*)$/)
    if (!match) return // pas de préfixe numérique reconnu : on laisse la valeur telle quelle

    const target = parseInt(match[1], 10)
    const suffix = match[2]

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduced) {
      setDisplay(value)
      return
    }

    setDisplay(`0${suffix}`)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()

        const duration = 900
        const start = performance.now()

        const tick = (now: number) => {
          const progress = Math.min(1, (now - start) / duration)
          const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
          const current = Math.round(target * eased)
          setDisplay(`${current}${suffix}`)
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}
