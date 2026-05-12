"use client"

import { useState, ReactNode } from "react"

interface GlassCardProps {
  children: ReactNode
  style?: React.CSSProperties
  className?: string
  hoverLift?: boolean
}

export function GlassCard({ children, style, className = "", hoverLift = true }: GlassCardProps) {
  const [hovered, setHovered] = useState(false)
  
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={className}
      style={{
        background: "rgba(255,255,255,0.045)",
        border: "1px solid rgba(255,255,255,0.12)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        borderRadius: 24,
        transition: "transform 0.35s cubic-bezier(.22,.68,0,1.2), box-shadow 0.35s ease",
        transform: hovered && hoverLift ? "translateY(-6px) scale(1.012)" : "translateY(0) scale(1)",
        boxShadow: hovered
          ? "0 32px 64px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.15)"
          : "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)",
        ...style,
      }}
    >
      {children}
    </div>
  )
}
