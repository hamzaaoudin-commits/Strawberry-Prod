"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useT } from "@/lib/i18n"
import { LanguageToggle } from "@/components/strawberry/language-toggle"

const SANS = "var(--font-dm-sans), 'DM Sans', sans-serif"

const T = {
  fr: {
    offers: "Offres",
    about: "À propos",
    method: "La Méthode",
    cases: "Études de cas",
    manifesto: "Manifeste",
    cta: "Parlons-en",
    offersMenu: [
      { label: "RADAR — 15€/mois", href: "/radar" },
      { label: "Arsenal — 147–197€", href: "/arsenal" },
      { label: "NOVA — 999€", href: "/nova" },
      { label: "BRAND NARRATIVE ARCHITECTURE — 4 500€", href: "/brand-narrative-audit" },
      { label: "MOMENTUM — au mois", href: "/momentum" },
      { label: "Extrait d'audit", href: "/sample-audit" },
    ],
  },
  en: {
    offers: "Offers",
    about: "About",
    method: "The Method",
    cases: "Case Studies",
    manifesto: "Manifesto",
    cta: "Let's Talk",
    offersMenu: [
      { label: "RADAR — 15€/mo", href: "/radar" },
      { label: "Arsenal — 147–197€", href: "/arsenal" },
      { label: "NOVA — 999€", href: "/nova" },
      { label: "BRAND NARRATIVE ARCHITECTURE — 4,500€", href: "/brand-narrative-audit" },
      { label: "MOMENTUM — retainer", href: "/momentum" },
      { label: "Sample audit", href: "/sample-audit" },
    ],
  },
  es: {
    offers: "Ofertas",
    about: "Nosotros",
    method: "El Método",
    cases: "Casos",
    manifesto: "Manifiesto",
    cta: "Hablemos",
    offersMenu: [
      { label: "RADAR — 15€/mes", href: "/radar" },
      { label: "Arsenal — 147–197€", href: "/arsenal" },
      { label: "NOVA — 999€", href: "/nova" },
      { label: "BRAND NARRATIVE ARCHITECTURE — 4.500€", href: "/brand-narrative-audit" },
      { label: "MOMENTUM — mensual", href: "/momentum" },
      { label: "Muestra de auditoría", href: "/sample-audit" },
    ],
  },
}

export function NavBar() {
  const t = useT(T)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [offersOpen, setOffersOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", h)
    return () => window.removeEventListener("scroll", h)
  }, [])

  const NAV_LINKS = [
    { label: t.about, href: "/about" },
    { label: t.method, href: "/strawberry-method" },
    { label: t.cases, href: "/case-studies" },
    { label: t.manifesto, href: "/manifesto" },
  ]

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
          {/* OFFERS DROPDOWN */}
          <div style={{ position: "relative" }} onMouseEnter={() => setOffersOpen(true)} onMouseLeave={() => setOffersOpen(false)}>
            <button style={{ display: "flex", alignItems: "center", gap: 6, color: offersOpen ? "#fff" : "rgba(255,255,255,0.65)", fontSize: 14, background: "transparent", border: "none", cursor: "pointer", fontFamily: SANS, letterSpacing: "0.04em", padding: 0 }}>
              {t.offers} <span style={{ fontSize: 9, transform: offersOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>▼</span>
            </button>
            {offersOpen && (
              <div style={{ position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)", paddingTop: 16 }}>
                <div style={{ background: "rgba(14,14,14,0.97)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: 10, minWidth: 330, boxShadow: "0 20px 50px rgba(0,0,0,0.5)" }}>
                  {t.offersMenu.map((o) => (
                    <Link key={o.href} href={o.href} onClick={() => setOffersOpen(false)} style={{ display: "block", padding: "10px 14px", color: "rgba(255,255,255,0.75)", fontSize: 13, textDecoration: "none", borderRadius: 8, fontFamily: SANS, transition: "all 0.15s" }} onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(230,57,70,0.12)"; el.style.color = "#fff" }} onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "transparent"; el.style.color = "rgba(255,255,255,0.75)" }}>
                      {o.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} style={{ color: "rgba(255,255,255,0.65)", fontSize: 14, textDecoration: "none", fontFamily: SANS, letterSpacing: "0.04em", transition: "color 0.2s" }} onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#fff"} onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.65)"}>
              {l.label}
            </Link>
          ))}

          <LanguageToggle />

          <Link href="/#contact" style={{ background: "linear-gradient(135deg,#e63946,#ff1a1a)", color: "#fff", padding: "9px 22px", borderRadius: 100, fontSize: 13, fontFamily: SANS, fontWeight: 600, textDecoration: "none", letterSpacing: "0.04em" }}>
            {t.cta}
          </Link>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden" style={{ position: "absolute", top: 72, left: 0, right: 0, background: "rgba(10,10,10,0.97)", backdropFilter: "blur(20px)", padding: "24px", borderBottom: "1px solid rgba(255,255,255,0.07)", maxHeight: "80vh", overflowY: "auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ marginBottom: 4 }}><LanguageToggle compact /></div>
            <div style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#e63946", fontFamily: SANS }}>{t.offers}</div>
            {t.offersMenu.map((o) => (
              <Link key={o.href} href={o.href} onClick={() => setMobileOpen(false)} style={{ color: "rgba(255,255,255,0.7)", fontSize: 14.5, textDecoration: "none", fontFamily: SANS, paddingLeft: 12 }}>
                {o.label}
              </Link>
            ))}
            <div style={{ height: 1, background: "rgba(255,255,255,0.08)", margin: "6px 0" }} />
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} style={{ color: "rgba(255,255,255,0.7)", fontSize: 16, textDecoration: "none", fontFamily: SANS }}>
                {l.label}
              </Link>
            ))}
            <Link href="/#contact" onClick={() => setMobileOpen(false)} style={{ background: "linear-gradient(135deg,#e63946,#ff1a1a)", color: "#fff", padding: "12px 24px", borderRadius: 100, fontSize: 14, fontFamily: SANS, fontWeight: 600, textDecoration: "none", textAlign: "center" }}>
              {t.cta}
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
