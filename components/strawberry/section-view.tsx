"use client"

import { useEffect, useRef } from "react"
import { track } from "@vercel/analytics"

/**
 * Marque le moment où une section entre dans le viewport.
 *
 * Sans ça, le seul signal disponible sur tout le site était un clic sur
 * l'audit : aucune idée d'où les visiteurs décrochent entre le hero et le
 * formulaire. Chaque section de la home s'enveloppe dans ce composant pour
 * qu'on sache, section par section, qui a réellement été vu.
 */
export function SectionView({ name, children }: { name: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          track("section_view", { section: name })
          obs.disconnect()
        }
      },
      { threshold: 0.35 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [name])

  return <div ref={ref}>{children}</div>
}
