"use client"

import { useMouseParallax } from "@/hooks/use-strawberry"

interface AnimatedOrbProps {
  color: string
  size: number
  x: string
  y: string
  blur?: number
  opacity?: number
}

export function AnimatedOrb({ color, size, x, y, blur = 120, opacity = 0.18 }: AnimatedOrbProps) {
  const mouse = useMouseParallax(12)
  
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: size,
        height: size,
        borderRadius: "50%",
        background: color,
        filter: `blur(${blur}px)`,
        opacity,
        transform: `translate(${mouse.x * 0.6}px, ${mouse.y * 0.6}px)`,
        transition: "transform 0.8s cubic-bezier(.22,.68,0,1.2)",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  )
}
