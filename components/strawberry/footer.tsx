"use client"

import Link from "next/link"

const SERIF = "var(--font-playfair), 'Playfair Display', serif"
const SANS = "var(--font-dm-sans), 'DM Sans', sans-serif"
const COLOR = "#e63946"

const EXPLORE = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "The Method", href: "/strawberry-method" },
  { label: "Manifesto", href: "/manifesto" },
]

const WORK = [
  { label: "The Commission", href: "/brand-narrative-audit" },
  { label: "Case Studies", href: "/case-studies" },
]

const REACH = [
  { label: "Let's Talk", href: "/#contact" },
  { label: "Instagram", href: "https://instagram.com/strawberry_prods", external: true },
  { label: "Email", href: "mailto:Strawberryprod.contact@gmail.com" },
]

const LEGAL_FR = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "CGV", href: "/cgv" },
  { label: "Politique de confidentialité", href: "/politique-confidentialite" },
]

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer style={{ background: "#0a0a0a", color: "#fff", borderTop: "1px solid rgba(255,255,255,0.07)", fontFamily: SANS, position: "relative" }}>

      {/* MAIN BLOCK */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px clamp(1.5rem,4vw,4rem) 48px" }}>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "clamp(2rem, 5vw, 5rem)", marginBottom: 64 }}>

          {/* BRAND */}
          <div>
            <Link href="/" style={{ display: "inline-block", fontFamily: SERIF, fontSize: 22, fontWeight: 700, color: "#fff", letterSpacing: "-0.02em", textDecoration: "none", marginBottom: 20 }}>
              <span style={{ background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Strawberry</span> Prod.
            </Link>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.65, marginBottom: 20, maxWidth: 240 }}>
              A narrative perception studio. From Paris, for founders who refuse to sound like everyone else.
            </p>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Paris · France
            </div>
          </div>

          {/* EXPLORE */}
          <div>
            <div style={{ fontSize: 11, letterSpacing: "0.25em", color: COLOR, marginBottom: 24, textTransform: "uppercase", fontWeight: 600 }}>
              Explore
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {EXPLORE.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, textDecoration: "none", transition: "color 0.2s" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* WORK */}
          <div>
            <div style={{ fontSize: 11, letterSpacing: "0.25em", color: COLOR, marginBottom: 24, textTransform: "uppercase", fontWeight: 600 }}>
              The Work
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {WORK.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, textDecoration: "none", transition: "color 0.2s" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* REACH */}
          <div>
            <div style={{ fontSize: 11, letterSpacing: "0.25em", color: COLOR, marginBottom: 24, textTransform: "uppercase", fontWeight: 600 }}>
              Reach
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {REACH.map((l) => (
                <li key={l.href}>
                  {l.external ? (
                    <a href={l.href} target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, textDecoration: "none", transition: "color 0.2s" }}>
                      {l.label} ↗
                    </a>
                  ) : (
                    <Link href={l.href} style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, textDecoration: "none", transition: "color 0.2s" }}>
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* SIGNATURE LINE */}
        <div style={{ paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.07)", textAlign: "center" }}>
          <p style={{ fontFamily: SERIF, fontSize: "clamp(1rem, 1.5vw, 1.2rem)", fontStyle: "italic", color: "rgba(255,255,255,0.5)", letterSpacing: "-0.01em", lineHeight: 1.5, margin: 0 }}>
            Built to be remembered.
          </p>
        </div>

      </div>

      {/* LEGAL STRIP */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", background: "rgba(0,0,0,0.3)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "24px clamp(1.5rem,4vw,4rem)", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 16 }}>

          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", letterSpacing: "0.02em" }}>
            © {currentYear} Hamza El Jaouahiry — Strawberry Production. All rights reserved.
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 20 }}>
            {LEGAL_FR.map((l) => (
              <Link key={l.href} href={l.href} style={{ color: "rgba(255,255,255,0.55)", fontSize: 12, textDecoration: "none", letterSpacing: "0.02em", transition: "color 0.2s" }}>
                {l.label}
              </Link>
            ))}
            <Link href="/en/legal-notice" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 10px", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 100, fontSize: 10, color: "rgba(255,255,255,0.5)", letterSpacing: "0.15em", textDecoration: "none", textTransform: "uppercase" }}>
              EN
            </Link>
          </div>

        </div>
      </div>

    </footer>
  )
}
