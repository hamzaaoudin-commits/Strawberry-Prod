"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "/about" },
  { label: "Services", href: "#services" },
  { label: "Offers", href: "#offers" },
  { label: "Manifesto", href: "/manifesto" },
  { label: "Contact", href: "#contact" },
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
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.4s ease",
        background: scrolled ? "rgba(10,10,10,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "none",
        padding: "0 clamp(1.5rem,4vw,4rem)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        <Link href="/" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#fff", letterSpacing: "-0.02em", textDecoration: "none" }}>
          <span style={{ background: "linear-gradient(135deg,#e63946,#ff1a1a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Strawberry</span> Prod.
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ color: "#fff", background: "transparent", border: "none", fontSize: 24, cursor: "pointer" }}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
        
        {/* Desktop nav */}
        <div className="hidden md:flex" style={{ gap: 36, alignItems: "center" }}>
          {NAV_LINKS.map((l) => (
            l.href.startsWith("#") ? (
              <a
                key={l.href}
                href={l.href}
                className="nav-link"
                style={{ color: "rgba(255,255,255,0.65)", fontSize: 14, textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", letterSpacing: "0.04em", transition: "color 0.2s" }}
                onMouseEnter={e => (e.target as HTMLElement).style.color = "#fff"}
                onMouseLeave={e => (e.target as HTMLElement).style.color = "rgba(255,255,255,0.65)"}
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                className="nav-link"
                style={{ color: "rgba(255,255,255,0.65)", fontSize: 14, textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", letterSpacing: "0.04em", transition: "color 0.2s" }}
                onMouseEnter={e => (e.target as HTMLElement).style.color = "#fff"}
                onMouseLeave={e => (e.target as HTMLElement).style.color = "rgba(255,255,255,0.65)"}
              >
                {l.label}
              </Link>
            )
          ))}
          <a
            href="#contact"
            style={{
              background: "linear-gradient(135deg,#e63946,#ff1a1a)",
              color: "#fff",
              padding: "9px 22px",
              borderRadius: 100,
              fontSize: 13,
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontWeight: 600,
              textDecoration: "none",
              transition: "opacity 0.2s, transform 0.2s",
              letterSpacing: "0.04em",
            }}
            onMouseEnter={e => { (e.target as HTMLElement).style.opacity = "0.85"; (e.target as HTMLElement).style.transform = "scale(1.04)"; }}
            onMouseLeave={e => { (e.target as HTMLElement).style.opacity = "1"; (e.target as HTMLElement).style.transform = "scale(1)"; }}
          >
            {"Let's Talk"}
          </a>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden" style={{ 
          position: "absolute", 
          top: 72, 
          left: 0, 
          right: 0, 
          background: "rgba(10,10,10,0.95)", 
          backdropFilter: "blur(20px)",
          padding: "24px",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {NAV_LINKS.map((l) => (
              l.href.startsWith("#") ? (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  style={{ color: "rgba(255,255,255,0.65)", fontSize: 16, textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  style={{ color: "rgba(255,255,255,0.65)", fontSize: 16, textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}
                >
                  {l.label}
                </Link>
              )
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              style={{
                background: "linear-gradient(135deg,#e63946,#ff1a1a)",
                color: "#fff",
                padding: "12px 24px",
                borderRadius: 100,
                fontSize: 14,
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontWeight: 600,
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              {"Let's Talk"}
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
