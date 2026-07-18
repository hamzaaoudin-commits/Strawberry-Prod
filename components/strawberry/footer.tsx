"use client"

import Link from "next/link"
import { useT } from "@/lib/i18n"

const SERIF = "var(--font-playfair), 'Playfair Display', serif"
const SANS = "var(--font-dm-sans), 'DM Sans', sans-serif"
const COLOR = "#e63946"

const EXPLORE_HREFS = ["/", "/about", "/strawberry-method", "/manifesto"]
const WORK_HREFS = ["/radar", "/arsenal", "/nova", "/brand-narrative-audit", "/momentum", "/sample-audit", "/case-studies"]
const REACH_HREFS = [
  { href: "/#contact" },
  { href: "https://instagram.com/strawberry_prods", external: true },
  { href: "mailto:Strawberryprod.contact@gmail.com" },
]
const LEGAL_FR = [
  { label: "Mentions l\u00e9gales", href: "/mentions-legales" },
  { label: "CGV", href: "/cgv" },
  { label: "Politique de confidentialit\u00e9", href: "/politique-confidentialite" },
]

const T = {
  en: {
    tagline: "A narrative perception studio. From Paris, for founders who refuse to sound like everyone else.",
    location: "Paris \u00b7 France",
    hExplore: "Explore",
    hWork: "The Work",
    hReach: "Reach",
    explore: ["Home", "About", "The Method", "Manifesto"],
    work: ["RADAR", "Arsenal", "NOVA", "The Commission", "MOMENTUM", "Sample audit", "Case Studies"],
    reach: ["Let's Talk", "Instagram", "Email"],
    rights: "All rights reserved.",
  },
  fr: {
    tagline: "Un studio de perception narrative. Depuis Paris, pour les fondateurs qui refusent de sonner comme tout le monde.",
    location: "Paris \u00b7 France",
    hExplore: "Explorer",
    hWork: "Le Travail",
    hReach: "Contact",
    explore: ["Accueil", "\u00c0 propos", "La M\u00e9thode", "Manifeste"],
    work: ["RADAR", "Arsenal", "NOVA", "La Commande", "MOMENTUM", "Extrait d'audit", "\u00c9tudes de cas"],
    reach: ["Parlons-en", "Instagram", "Email"],
    rights: "Tous droits r\u00e9serv\u00e9s.",
  },
  es: {
    tagline: "Un estudio de percepci\u00f3n narrativa. Desde Par\u00eds, para fundadores que se niegan a sonar como todos los dem\u00e1s.",
    location: "Par\u00eds \u00b7 Francia",
    hExplore: "Explorar",
    hWork: "El Trabajo",
    hReach: "Contacto",
    explore: ["Inicio", "Nosotros", "El M\u00e9todo", "Manifiesto"],
    work: ["RADAR", "Arsenal", "NOVA", "El Encargo", "MOMENTUM", "Muestra de auditor\u00eda", "Casos de estudio"],
    reach: ["Hablemos", "Instagram", "Email"],
    rights: "Todos los derechos reservados.",
  },
}

const currentYear = new Date().getFullYear()

export function Footer() {
  const t = useT(T)
  const EXPLORE = t.explore.map((label, i) => ({ label, href: EXPLORE_HREFS[i] }))
  const WORK = t.work.map((label, i) => ({ label, href: WORK_HREFS[i] }))
  const REACH = t.reach.map((label, i) => ({ label, ...REACH_HREFS[i] }))
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
              {t.tagline}
            </p>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              {t.location}
            </div>
          </div>

          {/* EXPLORE */}
          <div>
            <div style={{ fontSize: 11, letterSpacing: "0.25em", color: COLOR, marginBottom: 24, textTransform: "uppercase", fontWeight: 600 }}>
              {t.hExplore}
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
              {t.hWork}
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
              {t.hReach}
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
          <p style={{ fontFamily: SANS, fontSize: 11, color: "rgba(255,255,255,0.3)", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: 16, marginBottom: 0 }}>
            Confidential by default · NDA available on request
          </p>
        </div>

      </div>

      {/* LEGAL STRIP */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", background: "rgba(0,0,0,0.3)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "24px clamp(1.5rem,4vw,4rem)", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 16 }}>

          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", letterSpacing: "0.02em" }}>
            © {currentYear} Hamza El Jaouahiry — Strawberry Production. {t.rights}
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
