"use client"

import { useEffect, useRef } from "react"

/**
 * Drifting bokeh field, ported from NOCTA.
 *
 * The original used Three.js loaded from a CDN. That would have meant
 * reopening the script-src hole we just closed in the CSP, for an effect that
 * is three layers of soft circles. This is the same picture in plain 2D canvas:
 * no dependency, no external host, a few kilobytes.
 *
 * Three depth layers drift at different speeds and shift with scroll, which is
 * what produces the parallax the original was after.
 */

type Dot = { x: number; y: number; r: number; hue: string; vx: number; vy: number; a: number }

const LAYERS = [
  { count: 22, size: [46, 96], speed: 0.06, alpha: 0.20, parallax: 0.5 },
  { count: 30, size: [16, 40], speed: 0.11, alpha: 0.26, parallax: 1.0 },
  { count: 26, size: [3, 11], speed: 0.18, alpha: 0.40, parallax: 1.6 },
]

const PALETTE = ["#e63946", "#ff1a1a", "#dc2626", "#ff6b6b"]

export function BokehField({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let w = 0
    let h = 0
    let raf = 0
    let scrollShift = 0
    const layers: Dot[][] = []

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5)

    function seed() {
      layers.length = 0
      for (const L of LAYERS) {
        const dots: Dot[] = []
        for (let i = 0; i < L.count; i++) {
          const r = L.size[0] + Math.random() * (L.size[1] - L.size[0])
          dots.push({
            x: Math.random() * w,
            y: Math.random() * h,
            r,
            hue: PALETTE[(Math.random() * PALETTE.length) | 0],
            vx: (Math.random() - 0.5) * L.speed,
            vy: (Math.random() - 0.5) * L.speed,
            a: L.alpha * (0.5 + Math.random() * 0.5),
          })
        }
        layers.push(dots)
      }
    }

    function resize() {
      const rect = canvas!.getBoundingClientRect()
      w = rect.width
      h = rect.height
      canvas!.width = Math.floor(w * dpr)
      canvas!.height = Math.floor(h * dpr)
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
      seed()
    }

    function paintDot(d: Dot, offsetY: number) {
      const y = d.y + offsetY
      const grad = ctx!.createRadialGradient(d.x, y, 0, d.x, y, d.r)
      grad.addColorStop(0, d.hue)
      grad.addColorStop(0.25, d.hue)
      grad.addColorStop(1, "rgba(0,0,0,0)")
      ctx!.globalAlpha = d.a
      ctx!.fillStyle = grad
      ctx!.beginPath()
      ctx!.arc(d.x, y, d.r, 0, Math.PI * 2)
      ctx!.fill()
    }

    function frame() {
      ctx!.clearRect(0, 0, w, h)
      ctx!.globalCompositeOperation = "lighter"

      layers.forEach((dots, li) => {
        const L = LAYERS[li]
        const offsetY = -scrollShift * L.parallax * 40
        for (const d of dots) {
          if (!reduce) {
            d.x += d.vx
            d.y += d.vy
            if (d.x < -d.r) d.x = w + d.r
            if (d.x > w + d.r) d.x = -d.r
            if (d.y < -d.r) d.y = h + d.r
            if (d.y > h + d.r) d.y = -d.r
          }
          paintDot(d, offsetY)
        }
      })

      ctx!.globalAlpha = 1
      ctx!.globalCompositeOperation = "source-over"
      if (!reduce) raf = requestAnimationFrame(frame)
    }

    function onScroll() {
      const rect = canvas!.getBoundingClientRect()
      scrollShift = Math.max(-1, Math.min(1, -rect.top / Math.max(1, window.innerHeight)))
    }

    resize()
    onScroll()
    frame()

    window.addEventListener("resize", resize)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  )
}
