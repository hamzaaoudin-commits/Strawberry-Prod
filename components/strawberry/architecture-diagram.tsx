"use client"

import { useEffect, useRef, useState } from "react"

/**
 * Le schéma sans/avec architecture, animé au défilement.
 *
 * Restait statique jusqu'ici — les points et la ligne apparaissaient déjà
 * tracés dès le premier rendu. Ici, comme le champ de points du hero, la
 * ligne se dessine et les points s'allument quand le schéma entre dans le
 * champ de vision, une fois.
 */
export function ArchitectureDiagram({
  labelWithout,
  subWithout,
  labelWith,
  subWith,
}: {
  labelWithout: string
  subWithout: string
  labelWith: string
  subWith: string
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduced) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const withoutPts = [
    [20, 45],
    [60, 20],
    [100, 52],
    [140, 15],
    [180, 38],
  ]
  const withPts = [
    [20, 58],
    [60, 46],
    [100, 34],
    [140, 22],
    [180, 10],
  ]

  return (
    <div ref={ref} className="mb-8 grid gap-6 sm:grid-cols-2">
      <div className="border border-hair p-5">
        <svg viewBox="0 0 200 70" className="mb-3 h-[64px] w-full" aria-hidden>
          {withoutPts.map(([cx, cy], i) => (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r="4"
              fill="currentColor"
              className="text-white/25"
              style={{
                opacity: visible ? 1 : 0,
                transition: "opacity 500ms ease-out",
                transitionDelay: `${i * 90}ms`,
              }}
            />
          ))}
        </svg>
        <div className="font-sans text-[12px] uppercase tracking-[0.14em] text-chalk-40">{labelWithout}</div>
        <p className="m-0 mt-1.5 font-sans text-[13px] leading-snug text-chalk-55">{subWithout}</p>
      </div>

      <div className="border border-brand-hair bg-brand/[0.03] p-5">
        <svg viewBox="0 0 200 70" className="mb-3 h-[64px] w-full" aria-hidden>
          <polyline
            points={withPts.map((p) => p.join(",")).join(" ")}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-brand/50"
            pathLength={1}
            strokeDasharray={1}
            style={{
              strokeDashoffset: visible ? 0 : 1,
              transition: "stroke-dashoffset 900ms cubic-bezier(.22,.68,0,1)",
              transitionDelay: "150ms",
            }}
          />
          {withPts.map(([cx, cy], i) => (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r="4"
              fill="currentColor"
              className="text-brand"
              style={{
                opacity: visible ? 1 : 0,
                transition: "opacity 400ms ease-out",
                transitionDelay: `${250 + i * 150}ms`,
              }}
            />
          ))}
        </svg>
        <div className="font-sans text-[12px] uppercase tracking-[0.14em] text-brand">{labelWith}</div>
        <p className="m-0 mt-1.5 font-sans text-[13px] leading-snug text-chalk-75">{subWith}</p>
      </div>
    </div>
  )
}
