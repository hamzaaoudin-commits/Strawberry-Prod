"use client"

import Link from "next/link"
import { useT } from "@/lib/i18n"

const T = {
  en: { h1: "This page doesn't exist.", p: "The house you're looking for hasn't been built \u2014 or refused to be found.", cta: "Back to the studio \u2192" },
  fr: { h1: "Cette page n'existe pas.", p: "La maison que tu cherches n'a pas \u00e9t\u00e9 b\u00e2tie \u2014 ou a refus\u00e9 d'\u00eatre trouv\u00e9e.", cta: "Retour au studio \u2192" },
  es: { h1: "Esta p\u00e1gina no existe.", p: "La casa que buscas no ha sido construida \u2014 o se neg\u00f3 a ser encontrada.", cta: "Volver al estudio \u2192" },
}

const SERIF = "var(--font-playfair), 'Playfair Display', serif"
const SANS = "var(--font-dm-sans), 'DM Sans', sans-serif"
const COLOR = "#e63946"
const GLOW = "rgba(230,57,70,0.35)"

export default function NotFound() {
  const t = useT(T)
  return (
    <main style={{ background: "#0a0a0a", color: "#fff", minHeight: "100vh", fontFamily: SANS, display: "flex", alignItems: "center", justifyContent: "center", padding: "clamp(1.5rem,4vw,4rem)", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at center, ${GLOW} 0%, transparent 60%)`, opacity: 0.3, pointerEvents: "none" }} />
      <div style={{ maxWidth: 640, width: "100%", textAlign: "center", position: "relative" }}>
        <div style={{ fontFamily: SERIF, fontSize: "clamp(6rem,18vw,12rem)", fontWeight: 700, lineHeight: 1, letterSpacing: "-0.05em", background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: 8 }}>
          404
        </div>
        <div style={{ width: 40, height: 1, background: COLOR, margin: "0 auto 32px" }} />
        <h1 style={{ fontFamily: SERIF, fontSize: "clamp(1.5rem,3vw,2.25rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 20 }}>
          {t.h1}
        </h1>
        <p style={{ fontFamily: SERIF, fontSize: "clamp(1rem,1.4vw,1.15rem)", fontStyle: "italic", color: "rgba(255,255,255,0.6)", lineHeight: 1.6, marginBottom: 48 }}>
          {t.p}
        </p>
        <Link
          href="/"
          style={{ display: "inline-block", background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, color: "#fff", padding: "16px 40px", borderRadius: 100, fontSize: 14, fontWeight: 600, textDecoration: "none", letterSpacing: "0.06em", fontFamily: SANS, boxShadow: `0 12px 40px ${GLOW}` }}
        >
          {t.cta}
        </Link>
      </div>
    </main>
  )
}
