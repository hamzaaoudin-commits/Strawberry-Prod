"use client"

import Link from "next/link"

const SANS = "var(--font-dm-sans), 'DM Sans', sans-serif"
const COLOR = "#e63946"

interface BackHomeButtonProps {
  label?: string
  href?: string
}

export function BackHomeButton({ label = "Home", href = "/" }: BackHomeButtonProps) {
  return (
    <div style={{
      position: "fixed",
      top: 88,
      left: "clamp(1.5rem, 4vw, 4rem)",
      zIndex: 90,
    }}>
      <Link
        href={href}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: "8px 14px 8px 12px",
          border: "1px solid rgba(255,255,255,0.15)",
          background: "rgba(10,10,10,0.7)",
          backdropFilter: "blur(12px)",
          borderRadius: 100,
          fontSize: 11,
          fontFamily: SANS,
          color: "rgba(255,255,255,0.75)",
          letterSpacing: "0.15em",
          textDecoration: "none",
          textTransform: "uppercase",
          transition: "all 0.2s",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement
          el.style.borderColor = COLOR
          el.style.color = "#fff"
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement
          el.style.borderColor = "rgba(255,255,255,0.15)"
          el.style.color = "rgba(255,255,255,0.75)"
        }}
      >
        <span style={{ color: COLOR, fontSize: 14, lineHeight: 1 }}>←</span>
        <span className="back-label">{label}</span>
      </Link>
      <style jsx>{`
        @media (max-width: 640px) {
          .back-label {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}
