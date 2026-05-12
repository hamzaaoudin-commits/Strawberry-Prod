"use client"

import Link from "next/link"

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Manifesto", href: "/manifesto" },
  { label: "Empire Bundle", href: "/empire-bundle" },
  { label: "Contact", href: "/#contact" },
]

const SOCIALS = ["Instagram", "LinkedIn", "X (Twitter)"]

export function Footer() {
  return (
    <footer style={{ background: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "60px clamp(1.5rem,4vw,4rem) 40px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
          <div>
            <Link href="/" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: 24, color: "#fff", fontWeight: 700, marginBottom: 12, display: "block", textDecoration: "none" }}>
              <span style={{ background: "linear-gradient(135deg,#e63946,#ff1a1a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Strawberry</span> Production
            </Link>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.3)", fontSize: 14, lineHeight: 1.6, maxWidth: 260 }}>
              Architects of perception. We build narrative empires for creators, founders, and brands.
            </p>
          </div>
          <div className="flex gap-16">
            <div>
              <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.25)", fontSize: 11, letterSpacing: "0.14em", marginBottom: 16, fontWeight: 600 }}>NAVIGATE</div>
              {NAV_LINKS.map(l => (
                <Link key={l.href} href={l.href} style={{ display: "block", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.45)", fontSize: 14, textDecoration: "none", marginBottom: 10, transition: "color 0.2s" }}
                  onMouseEnter={e => (e.target as HTMLElement).style.color = "#fff"}
                  onMouseLeave={e => (e.target as HTMLElement).style.color = "rgba(255,255,255,0.45)"}
                >{l.label}</Link>
              ))}
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.25)", fontSize: 11, letterSpacing: "0.14em", marginBottom: 16, fontWeight: 600 }}>SOCIAL</div>
              {SOCIALS.map(s => (
                <a key={s} href="#" style={{ display: "block", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.45)", fontSize: 14, textDecoration: "none", marginBottom: 10, transition: "color 0.2s" }}
                  onMouseEnter={e => (e.target as HTMLElement).style.color = "#fff"}
                  onMouseLeave={e => (e.target as HTMLElement).style.color = "rgba(255,255,255,0.45)"}
                >{s}</a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", color: "rgba(255,255,255,0.2)", fontSize: 13 }}>
            © 2025 Strawberry Production. All rights reserved.
          </p>
          <p style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", color: "rgba(255,255,255,0.2)", fontSize: 13, fontStyle: "italic" }}>
            Architects of perception.
          </p>
        </div>
      </div>
    </footer>
  )
}
