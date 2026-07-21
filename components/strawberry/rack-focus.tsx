"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

/**
 * Rack focus, ported from NOCTA.
 *
 * A camera term: the shot starts soft and pulls into focus. Content enters
 * blurred and desaturated, then resolves as it reaches the viewport. It is the
 * one effect on the site that argues for the offer while you look at it —
 * MOMENTUM sells creative direction, so the page should behave like a camera.
 *
 * Disabled entirely under prefers-reduced-motion.
 */
export function RackFocus({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [inFocus, setInFocus] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInFocus(true)
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInFocus(true)
          io.disconnect()
        }
      },
      { rootMargin: "-12% 0px -12% 0px", threshold: 0.15 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={[
        "transition-[filter,opacity,transform] duration-[900ms] ease-[cubic-bezier(.22,.68,0,1)]",
        inFocus
          ? "opacity-100 blur-0 saturate-100"
          : "opacity-55 blur-[7px] saturate-[.55] brightness-[.85]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  )
}
