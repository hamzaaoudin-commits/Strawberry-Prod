"use client"

import { useState } from "react"
import { track } from "@vercel/analytics"
import { useT } from "@/lib/i18n"

const SERIF = "var(--font-playfair), 'Playfair Display', serif"
const SANS = "var(--font-dm-sans), 'DM Sans', sans-serif"
const COLOR = "#e63946"
const GLOW = "rgba(230,57,70,0.35)"
const FORMSPREE = "https://formspree.io/f/xnjwroeq"

const T = {
  en: {
    free: "Free Resource",
    freeBadge: "FREE RESOURCE",
    h2a: "30 Architectures.",
    h2b: "An Atlas.",
    modalSub: "128 pages. Free. Enter your email and the Atlas opens immediately.",
    opening: "Opening the Atlas\u2026",
    emailPlaceholder: "Your email",
    loading: "Opening\u2026",
    read: "Read the Atlas \u2192",
    error: "Something went wrong. Try again.",
    nospam: "No spam. One email to receive the Atlas.",
    lead: "Thirty composite portraits of the narrative situations founders find themselves in \u2014 and the architectural moves that resolved them. Not a portfolio. A map.",
    italic: "If you recognize yourself in one of them \u2014 you have already begun the work.",
    meta: "128 pages \u00b7 PDF \u00b7 Free \u00b7 One email. No spam.",
    items: [
      "We had pivoted three times. I no longer knew what to say at dinner.",
      "I sold the company. I took two years. I came back. I refuse to be the founder of my last company.",
      "I refuse to hire. I refuse to scale. I cannot keep apologizing for it.",
      "Every brief we receive treats us as an agency. We are not.",
      "We are building something that does not exist. Every prospect tries to put us in a box that already does.",
      "+ 25 more architectures across 5 categories.",
    ],
  },
  fr: {
    free: "Ressource gratuite",
    freeBadge: "RESSOURCE GRATUITE",
    h2a: "30 Architectures.",
    h2b: "Un Atlas.",
    modalSub: "128 pages. Gratuit. Entre ton email et l'Atlas s'ouvre imm\u00e9diatement.",
    opening: "Ouverture de l'Atlas\u2026",
    emailPlaceholder: "Ton email",
    loading: "Ouverture\u2026",
    read: "Lire l'Atlas \u2192",
    error: "Une erreur est survenue. R\u00e9essaie.",
    nospam: "Pas de spam. Un seul email pour recevoir l'Atlas.",
    lead: "Trente portraits composites des situations narratives dans lesquelles se trouvent les fondateurs \u2014 et les mouvements d'architecture qui les ont r\u00e9solues. Pas un portfolio. Une carte.",
    italic: "Si tu te reconnais dans l'un d'eux \u2014 tu as d\u00e9j\u00e0 commenc\u00e9 le travail.",
    meta: "128 pages \u00b7 PDF \u00b7 Gratuit \u00b7 Un email. Pas de spam.",
    items: [
      "On avait piv\u00f4t\u00e9 trois fois. Je ne savais plus quoi dire \u00e0 un d\u00eener.",
      "J'ai vendu la bo\u00eete. J'ai pris deux ans. Je suis revenu. Je refuse d'\u00eatre le fondateur de ma derni\u00e8re entreprise.",
      "Je refuse de recruter. Je refuse de scaler. Je ne peux plus continuer \u00e0 m'en excuser.",
      "Chaque brief qu'on re\u00e7oit nous traite comme une agence. On n'en est pas une.",
      "On construit quelque chose qui n'existe pas. Chaque prospect essaie de nous mettre dans une case qui existe d\u00e9j\u00e0.",
      "+ 25 autres architectures r\u00e9parties en 5 cat\u00e9gories.",
    ],
  },
  es: {
    free: "Recurso gratuito",
    freeBadge: "RECURSO GRATUITO",
    h2a: "30 Arquitecturas.",
    h2b: "Un Atlas.",
    modalSub: "128 p\u00e1ginas. Gratis. Introduce tu email y el Atlas se abre al instante.",
    opening: "Abriendo el Atlas\u2026",
    emailPlaceholder: "Tu email",
    loading: "Abriendo\u2026",
    read: "Leer el Atlas \u2192",
    error: "Algo sali\u00f3 mal. Int\u00e9ntalo de nuevo.",
    nospam: "Sin spam. Un email para recibir el Atlas.",
    lead: "Treinta retratos compuestos de las situaciones narrativas en las que se encuentran los fundadores \u2014 y los movimientos arquitect\u00f3nicos que las resolvieron. No es un portfolio. Es un mapa.",
    italic: "Si te reconoces en alguno de ellos \u2014 ya has empezado el trabajo.",
    meta: "128 p\u00e1ginas \u00b7 PDF \u00b7 Gratis \u00b7 Un email. Sin spam.",
    items: [
      "Hab\u00edamos pivotado tres veces. Ya no sab\u00eda qu\u00e9 decir en una cena.",
      "Vend\u00ed la empresa. Me tom\u00e9 dos a\u00f1os. Volv\u00ed. Me niego a ser el fundador de mi \u00faltima empresa.",
      "Me niego a contratar. Me niego a escalar. No puedo seguir disculp\u00e1ndome por ello.",
      "Cada brief que recibimos nos trata como una agencia. No lo somos.",
      "Construimos algo que no existe. Cada prospecto intenta meternos en una caja que ya existe.",
      "+ 25 arquitecturas m\u00e1s repartidas en 5 categor\u00edas.",
    ],
  },
}
function AtlasModal({ onClose }: { onClose: () => void }) {
  const t = useT(T)
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch(FORMSPREE, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, source: "atlas_download_home" }),
      })
      if (res.ok) {
        setStatus("done")
        track("atlas_email_captured", { from: "home" })
        setTimeout(() => {
          window.location.href = "/30-architectures-atlas.pdf"
          onClose()
        }, 1200)
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem" }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: "#0d0d0d", border: "1px solid " + COLOR + "44", borderRadius: 12, padding: "clamp(2rem,4vw,3rem)", maxWidth: 480, width: "100%", position: "relative" }}>
        <button onClick={onClose} style={{ position: "absolute", top: 16, right: 20, background: "none", border: "none", color: "rgba(255,255,255,0.4)", fontSize: 22, cursor: "pointer", lineHeight: 1 }}>×</button>
        <div style={{ fontSize: 10, letterSpacing: "0.25em", color: COLOR, marginBottom: 16, fontFamily: SANS, textTransform: "uppercase" }}>{t.free}</div>
        <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: 12, color: "#fff" }}>
          {t.h2a}<br />{t.h2b}
        </h2>
        <p style={{ fontFamily: SANS, fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.6, marginBottom: 28 }}>
          {t.modalSub}
        </p>
        {status === "done" ? (
          <p style={{ fontFamily: SERIF, fontSize: 16, fontStyle: "italic", color: COLOR, textAlign: "center", padding: "1rem 0" }}>{t.opening}</p>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <input
              type="email" required placeholder={t.emailPlaceholder} value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 8, padding: "14px 16px", color: "#fff", fontSize: 15, fontFamily: SANS, outline: "none", width: "100%" }}
            />
            <button
              type="submit" disabled={status === "loading"}
              style={{ background: "linear-gradient(135deg," + COLOR + ",#ff1a1a)", color: "#fff", border: "none", borderRadius: 100, padding: "14px 28px", fontSize: 14, fontFamily: SANS, fontWeight: 700, letterSpacing: "0.06em", cursor: "pointer", boxShadow: "0 8px 30px " + GLOW }}
            >
              {status === "loading" ? t.loading : t.read}
            </button>
            {status === "error" && <p style={{ fontSize: 13, color: COLOR, textAlign: "center", margin: 0 }}>{t.error}</p>}
            <p style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", textAlign: "center", margin: 0, fontFamily: SANS }}>{t.nospam}</p>
          </form>
        )}
      </div>
    </div>
  )
}

export function AtlasSection() {
  const t = useT(T)
  const [showModal, setShowModal] = useState(false)

  return (
    <section style={{ background: "#0d0d0d", padding: "clamp(4rem,10vw,8rem) clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>

      {showModal && <AtlasModal onClose={() => setShowModal(false)} />}

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", justifyContent: "space-between" }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(230,57,70,0.10)", border: "1px solid rgba(230,57,70,0.3)", borderRadius: 100, padding: "5px 14px", marginBottom: 24 }}>
                <span style={{ color: "#e63946", fontSize: 11, fontFamily: SANS, letterSpacing: "0.1em", fontWeight: 600 }}>{t.freeBadge}</span>
              </div>
              <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem,5vw,4rem)", fontWeight: 700, color: "#fff", lineHeight: 1.1, letterSpacing: "-0.02em", margin: 0 }}>
                {t.h2a}<br />
                <span style={{ background: "linear-gradient(135deg,#e63946,#ff1a1a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{t.h2b}</span>
              </h2>
            </div>
            <div style={{ maxWidth: 480, paddingTop: 8 }}>
              <p style={{ fontFamily: SANS, fontSize: "clamp(0.95rem,1.6vw,1.1rem)", color: "rgba(255,255,255,0.5)", lineHeight: 1.8, margin: "0 0 32px" }}>
                {t.lead}
              </p>
              <p style={{ fontFamily: SERIF, fontSize: "clamp(0.95rem,1.4vw,1.05rem)", color: "rgba(255,255,255,0.35)", fontStyle: "italic", lineHeight: 1.7, margin: "0 0 32px" }}>
                {t.italic}
              </p>
              <button
                onClick={() => { track("atlas_click", { from: "home" }); setShowModal(true) }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 10,
                  background: "linear-gradient(135deg,#e63946,#ff1a1a)",
                  color: "#fff", padding: "14px 32px", borderRadius: 100,
                  fontSize: 14, fontFamily: SANS, fontWeight: 700,
                  letterSpacing: "0.04em", border: "none", cursor: "pointer",
                  boxShadow: "0 8px 32px rgba(230,57,70,0.35)",
                }}
              >
                {t.read}
              </button>
              <p style={{ marginTop: 12, color: "rgba(255,255,255,0.25)", fontSize: 12, fontFamily: SANS, letterSpacing: "0.05em" }}>
                {t.meta}
              </p>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 1, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, overflow: "hidden" }}>
            {["01", "03", "07", "13", "19", "..."].map((n, idx) => ({ n, text: t.items[idx] })).map((item, i) => (
              <div key={i} style={{ background: "#0a0a0a", padding: "28px 24px", display: "flex", gap: 16 }}>
                <span style={{ color: "#e63946", fontSize: 11, fontFamily: SANS, fontWeight: 700, letterSpacing: "0.08em", flexShrink: 0, paddingTop: 3 }}>{item.n}</span>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, fontFamily: SERIF, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
