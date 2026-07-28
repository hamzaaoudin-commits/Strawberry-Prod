"use client"

import { useEffect, useRef, useState } from "react"
import { LocaleLink as Link } from "@/components/locale-link"
import { useT } from "@/lib/i18n"
import { BackHomeButton } from "@/components/strawberry/back-home-button"

const SERIF = "var(--font-playfair), 'Playfair Display', serif"
const SANS = "var(--font-dm-sans), 'DM Sans', sans-serif"
const COLOR = "#e63946"
const GLOW = "rgba(230,57,70,0.35)"

function useReveal() {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); obs.disconnect() }
    }, { threshold: 0.05 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return { ref, visible }
}

const T = {
  en: {
    badge: "Purchase Confirmed \u00b7 Commission N\u00b0",
    h1a: "Your house has",
    h1b: "been commissioned.",
    congrats: "Congratulations on securing your Brand Narrative Architecture. \ud83c\udf53",
    lead: "We have successfully received your payment. Your confirmation email with invoice is on its way. Look out for our Onboarding Questionnaire email \u2014 it is where everything begins.",
    stepsKicker: "What Happens Now",
    stepsH2: "Three steps. Then the work.",
    comingKicker: "What You Commissioned",
    comingH2: "A reminder of what is being built.",
    noteKicker: "A Note",
    noteP1: "\u201CMost founders arrive with fragments. A sentence they've used a hundred times. A pitch that almost works. A story they haven't found the words for yet.",
    noteP2: "What you commissioned is the thing they were circling. You will recognize it the moment you read it.\u201D",
    noteSig: "Hamza \u00b7 Strawberry Production \u00b7 Paris",
    waitH2: "While you wait \u2014",
    waitP: "Read the method. Understand the architecture you commissioned. The more clearly you see what is being built, the more powerful the extraction session.",
    waitCta1: "Read The Method \u2192",
    waitCta2: "Read the SILLAGE document",
    contact: "Questions? Contact directly",
    steps: [
      { title: "Check your inbox", body: "A confirmation email with your invoice is on its way. If you don't see it within a few minutes, check your spam folder." },
      { title: "Complete the Onboarding Questionnaire", body: "You will receive a second email with your Onboarding Questionnaire. This is where the extraction begins \u2014 your answers become the raw material of your Architecture. Take your time. There are no wrong answers, only honest ones." },
      { title: "The work begins", body: "Once your questionnaire is received, I start. You will not hear silence \u2014 you will hear nothing until the work is ready to be exceptional. Delivery within the agreed timeline." },
    ],
    coming: [
      "A Differentiation Diagnostic that shows you in black and white the open ground no competitor occupies.",
      "A Narrative Platform \u2014 your position written as one defensible sentence, your story structured, your pillars named.",
      "A Language System \u2014 the words that belong to you, the words forbidden to you, before and after examples drawn from your own communications.",
      "A Deployment Kit \u2014 copy you can use the Monday after. Homepage rewrite. Pitch in three formats. 10 to 15 speaking angles ready to post.",
      "A Coherence Guide \u2014 so your identity holds, even when you are not the one writing.",
    ],
  },
  fr: {
    badge: "Achat confirm\u00e9 \u00b7 Commande N\u00b0",
    h1a: "Votre maison a \u00e9t\u00e9",
    h1b: "command\u00e9e.",
    congrats: "F\u00e9licitations pour votre Brand Narrative Architecture. \ud83c\udf53",
    lead: "Nous avons bien re\u00e7u votre paiement. Votre email de confirmation avec la facture est en route. Guettez l'email du Questionnaire d'onboarding \u2014 c'est l\u00e0 que tout commence.",
    stepsKicker: "Ce qui se passe maintenant",
    stepsH2: "Trois \u00e9tapes. Puis le travail.",
    comingKicker: "Ce que vous avez command\u00e9",
    comingH2: "Un rappel de ce qui se construit.",
    noteKicker: "Un mot",
    noteP1: "\u00ab La plupart des fondateurs arrivent avec des fragments. Une phrase utilis\u00e9e cent fois. Un pitch qui fonctionne presque. Une histoire dont ils n'ont pas encore trouv\u00e9 les mots.",
    noteP2: "Ce que vous avez command\u00e9, c'est la chose autour de laquelle ils tournaient. Vous la reconna\u00eetras \u00e0 l'instant o\u00f9 vous la liras. \u00bb",
    noteSig: "Hamza \u00b7 Strawberry Production \u00b7 Paris",
    waitH2: "En attendant \u2014",
    waitP: "Lisez la m\u00e9thode. Comprends l'architecture que vous avez command\u00e9e. Plus vous voyez clairement ce qui se construit, plus la session d'extraction sera puissante.",
    waitCta1: "Lire la M\u00e9thode \u2192",
    waitCta2: "Lire le document SILLAGE",
    contact: "Des questions ? Contact direct",
    steps: [
      { title: "V\u00e9rifie votre bo\u00eete mail", body: "Un email de confirmation avec votre facture est en route. Si vous ne le vois pas d'ici quelques minutes, regarde dans vos spams." },
      { title: "Remplis le Questionnaire d'onboarding", body: "Vous allez recevoir un deuxi\u00e8me email avec votre Questionnaire d'onboarding. C'est l\u00e0 que commence l'extraction \u2014 vos r\u00e9ponses deviennent la mati\u00e8re premi\u00e8re de votre Architecture. Prenez votre temps. Il n'y a pas de mauvaises r\u00e9ponses, seulement des honn\u00eates." },
      { title: "Le travail commence", body: "Une fois votre questionnaire re\u00e7u, je d\u00e9marre. Vous n'entendras pas du silence \u2014 vous n'entendras rien jusqu'\u00e0 ce que le travail soit pr\u00eat \u00e0 \u00eatre exceptionnel. Livraison dans le d\u00e9lai convenu." },
    ],
    coming: [
      "Un Diagnostic de diff\u00e9renciation qui vous montre noir sur blanc le terrain libre qu'aucun concurrent n'occupe.",
      "Une Plateforme narrative \u2014 votre position \u00e9crite en une phrase d\u00e9fendable, votre r\u00e9cit structur\u00e9, vos piliers nomm\u00e9s.",
      "Un Syst\u00e8me de langage \u2014 les mots qui vous appartiennent, les mots qui te sont interdits, des exemples avant/apr\u00e8s tir\u00e9s de vos propres communications.",
      "Un Kit de d\u00e9ploiement \u2014 du copy utilisable d\u00e8s le lundi. R\u00e9\u00e9criture de la page d'accueil. Pitch en trois formats. 10 \u00e0 15 angles de prise de parole pr\u00eats \u00e0 poster.",
      "Un Guide de coh\u00e9rence \u2014 pour que votre identit\u00e9 tienne, m\u00eame quand ce n'est pas vous qui \u00e9cris.",
    ],
  },
}


export default function ThankYouPage() {
  const t = useT(T)
  const NEXT_STEPS = t.steps.map((st, i) => ({ ...st, n: `0${i + 1}` }))
  const WHAT_IS_COMING = t.coming
  const hero = useReveal()
  const steps = useReveal()
  const coming = useReveal()
  const manifesto = useReveal()
  const cta = useReveal()

  const [count, setCount] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => {
        if (c >= 47) { clearInterval(interval); return 47 }
        return c + 1
      })
    }, 40)
    return () => clearInterval(interval)
  }, [])

  return (
    <main style={{ background: "#0a0a0a", color: "#fff", minHeight: "100vh", fontFamily: SANS, overflow: "hidden" }}>
      <BackHomeButton />

      {/* HERO */}
      <section
        ref={hero.ref as any}
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "120px clamp(1.5rem,4vw,4rem) 80px",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at center, ${GLOW} 0%, transparent 60%)`, opacity: 0.45, pointerEvents: "none" }} />

        <div style={{
          maxWidth: 900,
          width: "100%",
          textAlign: "center",
          position: "relative",
          opacity: hero.visible ? 1 : 0,
          transform: hero.visible ? "translateY(0)" : "translateY(30px)",
          transition: "all 1s ease",
        }}>

          {/* Badge */}
          <div style={{
            display: "inline-block",
            padding: "8px 20px",
            border: `1px solid ${COLOR}`,
            borderRadius: 100,
            fontSize: 11,
            letterSpacing: "0.2em",
            color: COLOR,
            marginBottom: 48,
            textTransform: "uppercase",
            fontFamily: SANS,
          }}>
            {t.badge} {count}
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: SERIF,
            fontSize: "clamp(2.5rem,6vw,5rem)",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            marginBottom: 16,
          }}>
            {t.h1a}
          </h1>
          <h1 style={{
            fontFamily: SERIF,
            fontSize: "clamp(2.5rem,6vw,5rem)",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            marginBottom: 40,
            background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontStyle: "italic",
          }}>
            {t.h1b}
          </h1>

          <p style={{
            fontFamily: SERIF,
            fontSize: "clamp(1.1rem,1.8vw,1.4rem)",
            fontStyle: "italic",
            color: "rgba(255,255,255,0.72)",
            maxWidth: 680,
            margin: "0 auto 24px",
            lineHeight: 1.6,
          }}>
            {t.congrats}
          </p>

          <p style={{
            fontFamily: SANS,
            fontSize: "clamp(0.95rem,1.3vw,1.05rem)",
            color: "rgba(255,255,255,0.55)",
            maxWidth: 580,
            margin: "0 auto 56px",
            lineHeight: 1.7,
          }}>
            {t.lead}
          </p>

          {/* Divider ornament */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 0 }}>
            <div style={{ width: 60, height: 1, background: "rgba(255,255,255,0.15)" }} />
            <span style={{ color: COLOR, fontSize: 18 }}>✦</span>
            <div style={{ width: 60, height: 1, background: "rgba(255,255,255,0.15)" }} />
          </div>
        </div>
      </section>

      {/* NEXT STEPS */}
      <section
        ref={steps.ref as any}
        style={{
          padding: "120px clamp(1.5rem,4vw,4rem)",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          background: "#0d0d0d",
        }}
      >
        <div style={{
          maxWidth: 1100,
          margin: "0 auto",
          opacity: steps.visible ? 1 : 0,
          transform: steps.visible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s ease",
        }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase", fontFamily: SANS }}>
              {t.stepsKicker}
            </div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.15 }}>
              {t.stepsH2}
            </h2>
          </div>

          <div style={{ display: "grid", gap: 1, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.07)" }}>
            {NEXT_STEPS.map((s) => (
              <div key={s.n} style={{
                background: "#0a0a0a",
                padding: "48px clamp(1.5rem,3vw,3rem)",
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: "clamp(1.5rem,4vw,4rem)",
                alignItems: "start",
              }}>
                <div style={{ fontFamily: SERIF, fontSize: "clamp(1.75rem,3vw,2.5rem)", color: COLOR, fontWeight: 700, lineHeight: 1, minWidth: 70 }}>
                  {s.n}
                </div>
                <div>
                  <h3 style={{ fontFamily: SERIF, fontSize: "clamp(1.25rem,2vw,1.6rem)", fontWeight: 600, marginBottom: 16, letterSpacing: "-0.02em" }}>
                    {s.title}
                  </h3>
                  <p style={{ fontSize: "clamp(0.95rem,1.2vw,1.05rem)", color: "rgba(255,255,255,0.7)", lineHeight: 1.7, margin: 0 }}>
                    {s.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IS COMING */}
      <section
        ref={coming.ref as any}
        style={{ padding: "120px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)" }}
      >
        <div style={{
          maxWidth: 900,
          margin: "0 auto",
          opacity: coming.visible ? 1 : 0,
          transform: coming.visible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s ease",
        }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase", fontFamily: SANS }}>
              {t.comingKicker}
            </div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.15 }}>
              {t.comingH2}
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid rgba(255,255,255,0.07)" }}>
            {WHAT_IS_COMING.map((item, i) => (
              <div key={i} style={{
                padding: "28px 32px",
                borderBottom: i < WHAT_IS_COMING.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                display: "flex",
                gap: 20,
                alignItems: "flex-start",
                background: i % 2 === 0 ? "rgba(255,255,255,0.01)" : "transparent",
              }}>
                <span style={{ color: COLOR, fontSize: 16, lineHeight: 1.6, flexShrink: 0 }}>✦</span>
                <p style={{
                  fontFamily: SERIF,
                  fontSize: "clamp(0.95rem,1.3vw,1.1rem)",
                  fontStyle: "italic",
                  color: "rgba(255,255,255,0.82)",
                  lineHeight: 1.6,
                  margin: 0,
                }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFESTO SECTION */}
      <section
        ref={manifesto.ref as any}
        style={{
          padding: "140px clamp(1.5rem,4vw,4rem)",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          background: "#0d0d0d",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at center, ${GLOW} 0%, transparent 65%)`, opacity: 0.18, pointerEvents: "none" }} />
        <div style={{
          maxWidth: 720,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          opacity: manifesto.visible ? 1 : 0,
          transform: manifesto.visible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s ease",
        }}>
          <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 32, textTransform: "uppercase", fontFamily: SANS }}>
            {t.noteKicker}
          </div>

          <p style={{
            fontFamily: SERIF,
            fontSize: "clamp(1.3rem,2.2vw,1.75rem)",
            fontStyle: "italic",
            color: "rgba(255,255,255,0.9)",
            lineHeight: 1.55,
            letterSpacing: "-0.01em",
            marginBottom: 32,
          }}>
            {t.noteP1}
          </p>
          <p style={{
            fontFamily: SERIF,
            fontSize: "clamp(1.3rem,2.2vw,1.75rem)",
            fontStyle: "italic",
            color: "rgba(255,255,255,0.9)",
            lineHeight: 1.55,
            letterSpacing: "-0.01em",
            marginBottom: 48,
          }}>
            {t.noteP2}
          </p>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20 }}>
            <div style={{ width: 40, height: 1, background: "rgba(255,255,255,0.2)" }} />
            <p style={{ fontFamily: SANS, fontSize: 12, color: "rgba(255,255,255,0.45)", letterSpacing: "0.2em", textTransform: "uppercase", margin: 0 }}>
              {t.noteSig}
            </p>
            <div style={{ width: 40, height: 1, background: "rgba(255,255,255,0.2)" }} />
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section
        ref={cta.ref as any}
        style={{
          padding: "120px clamp(1.5rem,4vw,4rem)",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at center, ${GLOW} 0%, transparent 60%)`, opacity: 0.35, pointerEvents: "none" }} />
        <div style={{
          maxWidth: 800,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          opacity: cta.visible ? 1 : 0,
          transform: cta.visible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s ease",
        }}>
          <h2 style={{
            fontFamily: SERIF,
            fontSize: "clamp(2rem,4.5vw,3.25rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            marginBottom: 24,
          }}>
            {t.waitH2}
          </h2>
          <p style={{
            fontFamily: SERIF,
            fontSize: "clamp(1rem,1.5vw,1.2rem)",
            fontStyle: "italic",
            color: "rgba(255,255,255,0.65)",
            lineHeight: 1.6,
            maxWidth: 560,
            margin: "0 auto 48px",
          }}>
            {t.waitP}
          </p>

          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/strawberry-method" style={{
              display: "inline-block",
              background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`,
              color: "#fff",
              padding: "16px 36px",
              borderRadius: 100,
              fontSize: 14,
              fontWeight: 600,
              textDecoration: "none",
              letterSpacing: "0.04em",
              boxShadow: `0 20px 60px ${GLOW}`,
            }}>
              {t.waitCta1}
            </Link>

            <Link href="/sample-audit" style={{
              display: "inline-block",
              background: "transparent",
              color: "rgba(255,255,255,0.75)",
              padding: "16px 36px",
              borderRadius: 100,
              fontSize: 14,
              fontWeight: 500,
              textDecoration: "none",
              letterSpacing: "0.04em",
              border: "1px solid rgba(255,255,255,0.2)",
            }}>
              {t.waitCta2}
            </Link>
          </div>

          <div style={{ marginTop: 56, paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <p style={{ fontFamily: SANS, fontSize: 11, color: "rgba(255,255,255,0.35)", letterSpacing: "0.18em", textTransform: "uppercase", margin: "0 0 8px" }}>
              {t.contact}
            </p>
            <a href="mailto:Strawberryprod.contact@gmail.com" style={{ fontFamily: SERIF, fontSize: "1rem", fontStyle: "italic", color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>
              Strawberryprod.contact@gmail.com
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}
