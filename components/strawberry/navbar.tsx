"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const NAV_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "The Audit", href: "/brand-narrative-audit" },
  { label: "The Method", href: "/strawberry-method" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Manifesto", href: "/manifesto" },
]

export function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", h)
    return () => window.removeEventListener("scroll", h)
  }, [])

  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, transition: "all 0.4s ease", background: scrolled ? "rgba(10,10,10,0.85)" : "transparent", backdropFilter: scrolled ? "blur(20px)" : "none", borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "none", padding: "0 clamp(1.5rem,4vw,4rem)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        <Link href="/" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#fff", letterSpacing: "-0.02em", textDecoration: "none" }}>
          <span style={{ background: "linear-gradient(135deg,#e63946,#ff1a1a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Strawberry</span> Prod.
        </Link>

        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)} style={{ color: "#fff", background: "transparent", border: "none", fontSize: 24, cursor: "pointer" }}>
          {mobileOpen ? "✕" : "☰"}
        </button>

        <div className="hidden md:flex" style={{ gap: 26, alignItems: "center" }}>
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="nav-link" style={{ color: "rgba(255,255,255,0.65)", fontSize: 14, textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", letterSpacing: "0.04em", transition: "color 0.2s" }} onMouseEnter={e => (e.target as HTMLElement).style.color = "#fff"} onMouseLeave={e => (e.target as HTMLElement).style.color = "rgba(255,255,255,0.65)"}>
              {l.label}
            </Link>
          ))}
          <Link href="/#contact" style={{ background: "linear-gradient(135deg,#e63946,#ff1a1a)", color: "#fff", padding: "9px 22px", borderRadius: 100, fontSize: 13, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontWeight: 600, textDecoration: "none", letterSpacing: "0.04em" }}>
            {"Let's Talk"}
          </Link>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden" style={{ position: "absolute", top: 72, left: 0, right: 0, background: "rgba(10,10,10,0.95)", backdropFilter: "blur(20px)", padding: "24px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} style={{ color: "rgba(255,255,255,0.65)", fontSize: 16, textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
                {l.label}
              </Link>
            ))}
            <Link href="/#contact" onClick={() => setMobileOpen(false)} style={{ background: "linear-gradient(135deg,#e63946,#ff1a1a)", color: "#fff", padding: "12px 24px", borderRadius: 100, fontSize: 14, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontWeight: 600, textDecoration: "none", textAlign: "center" }}>
              {"Let's Talk"}
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
