"use client"

import { useEffect, useRef, useState } from "react"

/**
 * La pastille flottante de section.
 *
 * Sur les pages longues, indique dans quelle section on se trouve — sans
 * être un sommaire complet, juste un repère. Suit la section dont le milieu
 * de l'écran est le plus proche du milieu de la fenêtre, mise à jour au
 * défilement (throttlée par requestAnimationFrame).
 *
 * N'apparaît qu'après le premier écran (sinon elle ferait doublon avec le
 * hero), et disparaît en fin de page. Respecte prefers-reduced-motion en
 * coupant la transition d'apparition, pas l'utilité elle-même.
 */
export function FloatingSectionPill({ sections }: { sections: { id: string; label: string }[] }) {
  const [active, setActive] = useState<string | null>(null)
  const [visible, setVisible] = useState(false)
  const ticking = useRef(false)

  useEffect(() => {
    const els = sections
      .map((s) => ({ ...s, el: document.getElementById(s.id) }))
      .filter((s): s is { id: string; label: string; el: HTMLElement } => !!s.el)

    if (els.length === 0) return

    const update = () => {
      const mid = window.innerHeight / 2
      let closest = els[0]
      let closestDist = Infinity
      for (const s of els) {
        const rect = s.el.getBoundingClientRect()
        const center = rect.top + rect.height / 2
        const dist = Math.abs(center - mid)
        if (dist < closestDist) {
          closestDist = dist
          closest = s
        }
      }
      setActive(closest.id)
      setVisible(window.scrollY > window.innerHeight * 0.6)
      ticking.current = false
    }

    const onScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(update)
        ticking.current = true
      }
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [sections])

  const current = sections.find((s) => s.id === active)
  if (!current) return null

  return (
    <div
      aria-hidden
      className={`pointer-events-none fixed bottom-7 left-1/2 z-[150] -translate-x-1/2 transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
      }`}
    >
      <div className="flex items-center gap-2 rounded-full border border-brand/30 bg-ink/90 px-4 py-2 backdrop-blur-md">
        <span className="h-1.5 w-1.5 rounded-full bg-brand" />
        <span className="font-sans text-[11px] uppercase tracking-[0.1em] text-white">{current.label}</span>
      </div>
    </div>
  )
}
