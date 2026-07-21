"use client"

import { useRef, type ReactNode, type CSSProperties } from "react"

/**
 * Cursor spotlight card, ported from NOCTA.
 *
 * A soft red pool follows the pointer across the surface. The original tracked
 * the cursor with two CSS custom properties; this does the same, writing them
 * directly on the node so React never re-renders on mouse move.
 */
export function SpotlightCard({
  children,
  className = "",
  featured = false,
}: {
  children: ReactNode
  className?: string
  featured?: boolean
}) {
  const ref = useRef<HTMLDivElement | null>(null)

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty("--mx", `${e.clientX - r.left}px`)
    el.style.setProperty("--my", `${e.clientY - r.top}px`)
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      style={{ "--mx": "50%", "--my": "50%" } as CSSProperties}
      className={[
        "group relative overflow-hidden rounded-[18px] border p-8 transition-colors duration-500",
        featured
          ? "border-brand/45 bg-[linear-gradient(180deg,rgba(230,57,70,0.08),rgba(10,10,10,0.6))]"
          : "border-hair-strong bg-white/[0.02] hover:border-white/25",
        className,
      ].join(" ")}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(380px circle at var(--mx) var(--my), rgba(230,57,70,0.16), transparent 45%)",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  )
}
