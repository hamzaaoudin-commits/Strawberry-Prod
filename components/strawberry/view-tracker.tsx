"use client"

import { useEffect, useRef } from "react"
import { track } from "@vercel/analytics"

/**
 * Mesure de la chute.
 *
 * Un seul événement existait sur tout le site (`audit_click`). Sans savoir où
 * les visiteurs abandonnent entre le hero et le formulaire, chaque
 * modification de copy est un pari à l'aveugle — ce que le marketing
 * direct-response ne permet pas.
 *
 * Un déclenchement par section, une fois, à 40 % de visibilité : assez pour
 * savoir qui a vu la section, pas assez pour compter un simple survol rapide.
 */
export function ViewTracker({ name }: { name: string }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const fired = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fired.current) {
          fired.current = true
          track("section_view", { section: name })
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [name])

  return <div ref={ref} aria-hidden className="pointer-events-none h-px w-px" />
}
