"use client"

import { useState } from "react"
import { useT } from "@/lib/i18n"

const SERIF = "var(--font-playfair), 'Playfair Display', serif"
const SANS = "var(--font-dm-sans), 'DM Sans', sans-serif"
const COLOR = "#e63946"
const GLOW = "rgba(230,57,70,0.35)"

const T = {
  en: {
    kicker: "FAQ",
    h2a: "Everything you need",
    h2b: "to decide.",
    faqs: [
      { q: "Is this for me?", a: "If you're a founder, creator, or consultant who can't clearly articulate what makes you different — yes. If you're looking for someone to \"do content\" — no." },
      { q: "Why 4,500€?", a: "It's the price of a few weeks of advertising that vanishes the moment you stop paying. Your narrative belongs to you and works for you indefinitely." },
      { q: "How long does it take?", a: "3 to 4 weeks from onboarding to delivery. The document is ready to use the Monday after it lands." },
      { q: "Why only 4 commissions per quarter?", a: "Not a sales argument — a real constraint. Every house is built from scratch. Beyond four, quality drops. I'd rather decline than deliver ordinary work." },
      { q: "Can't I just do this myself?", a: "You could. But you've been inside your own story for so long you can no longer see what makes it singular. That's exactly what this work extracts." },
      { q: "How does the process work?", a: "After your commission is confirmed, you receive an onboarding questionnaire. It takes 20 to 30 minutes to complete and contains everything I need to build your narrative architecture from scratch." },
      { q: "What if I'm not satisfied?", a: "If the deliverable doesn't hit the mark, I write a V2. No questions asked." },
      { q: "Do you sign an NDA?", a: "Yes, on request. And by default, your work will never be mentioned, adapted, or reused for another house." },
      { q: "In what language is the document delivered?", a: "In the language you build your brand in — French or English." },
      { q: "How do I know if slots are still open?", a: "Send a message. If we're full, you'll be the first told when the next quarter opens." },
    ],
  },
  fr: {
    kicker: "FAQ",
    h2a: "Tout ce qu'il faut",
    h2b: "pour décider.",
    faqs: [
      { q: "Est-ce que c'est pour moi ?", a: "Si tu es fondateur, créateur ou consultant et que tu n'arrives pas à articuler clairement ce qui te rend différent — oui. Si tu cherches quelqu'un pour « faire du contenu » — non." },
      { q: "Pourquoi 4 500€ ?", a: "C'est le prix de quelques semaines de publicité qui s'évapore dès que tu arrêtes de payer. Ton récit t'appartient et travaille pour toi indéfiniment." },
      { q: "Combien de temps ça prend ?", a: "3 à 4 semaines de l'onboarding à la livraison. Le document est exploitable dès le lundi qui suit." },
      { q: "Pourquoi seulement 4 commandes par trimestre ?", a: "Pas un argument commercial — une vraie contrainte. Chaque maison est bâtie de zéro. Au-delà de quatre, la qualité chute. Je préfère refuser que livrer du travail ordinaire." },
      { q: "Je ne peux pas le faire moi-même ?", a: "Tu pourrais. Mais tu es dans ton propre récit depuis si longtemps que tu ne vois plus ce qui le rend singulier. C'est exactement ce que ce travail extrait." },
      { q: "Comment se déroule le processus ?", a: "Une fois ta commande confirmée, tu reçois un questionnaire d'onboarding. Il prend 20 à 30 minutes et contient tout ce dont j'ai besoin pour bâtir ton architecture narrative de zéro." },
      { q: "Et si je ne suis pas satisfait ?", a: "Si le livrable ne tape pas juste, j'écris une V2. Sans discuter." },
      { q: "Signes-tu un NDA ?", a: "Oui, sur demande. Et par défaut, ton travail ne sera jamais mentionné, adapté ni réutilisé pour une autre maison." },
      { q: "Dans quelle langue le document est-il livré ?", a: "Dans la langue dans laquelle tu construis ta marque — français ou anglais." },
      { q: "Comment savoir s'il reste des places ?", a: "Envoie un message. Si c'est complet, tu seras le premier prévenu à l'ouverture du trimestre suivant." },
    ],
  },
  es: {
    kicker: "FAQ",
    h2a: "Todo lo que necesitas",
    h2b: "para decidir.",
    faqs: [
      { q: "¿Es para mí?", a: "Si eres fundador, creador o consultor y no logras articular con claridad qué te hace diferente — sí. Si buscas a alguien para «hacer contenido» — no." },
      { q: "¿Por qué 4.500€?", a: "Es el precio de unas pocas semanas de publicidad que se evapora en cuanto dejas de pagar. Tu relato te pertenece y trabaja para ti indefinidamente." },
      { q: "¿Cuánto tarda?", a: "De 3 a 4 semanas desde el onboarding hasta la entrega. El documento es utilizable el lunes siguiente." },
      { q: "¿Por qué solo 4 encargos por trimestre?", a: "No es un argumento de venta — es una restricción real. Cada casa se construye desde cero. Más allá de cuatro, la calidad cae. Prefiero rechazar antes que entregar trabajo ordinario." },
      { q: "¿No puedo hacerlo yo mismo?", a: "Podrías. Pero llevas tanto tiempo dentro de tu propio relato que ya no ves qué lo hace singular. Eso es exactamente lo que este trabajo extrae." },
      { q: "¿Cómo funciona el proceso?", a: "Una vez confirmado tu encargo, recibes un cuestionario de onboarding. Lleva de 20 a 30 minutos y contiene todo lo que necesito para construir tu arquitectura narrativa desde cero." },
      { q: "¿Y si no quedo satisfecho?", a: "Si el entregable no da en el clavo, escribo una V2. Sin preguntas." },
      { q: "¿Firmas un NDA?", a: "Sí, a petición. Y por defecto, tu trabajo nunca será mencionado, adaptado ni reutilizado para otra casa." },
      { q: "¿En qué idioma se entrega el documento?", a: "En el idioma en el que construyes tu marca — francés o inglés." },
      { q: "¿Cómo sé si quedan plazas?", a: "Envía un mensaje. Si estamos completos, serás el primero en saberlo cuando abra el próximo trimestre." },
    ],
  },
}

export function FaqSection() {
  const t = useT(T)
  const FAQS = t.faqs
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section style={{ padding: "140px clamp(1.5rem,4vw,4rem)", background: "#0a0a0a", color: "#fff", borderTop: "1px solid rgba(255,255,255,0.07)", position: "relative", overflow: "hidden" }}>

      <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at center, ${GLOW} 0%, transparent 65%)`, opacity: 0.15, pointerEvents: "none" }} />

      <div style={{ maxWidth: 800, margin: "0 auto", position: "relative" }}>

        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase", fontFamily: SANS }}>
            {t.kicker}
          </div>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2.25rem,5vw,3.75rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em" }}>
            {t.h2a}{" "}
            <span style={{ background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              {t.h2b}
            </span>
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {FAQS.map((faq, i) => (
            <div key={i} style={{ borderTop: "1px solid rgba(255,255,255,0.08)", overflow: "hidden" }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "28px 0",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  gap: 24,
                }}
              >
                <span style={{ fontFamily: SERIF, fontSize: "clamp(1rem,1.8vw,1.25rem)", color: "#fff", fontWeight: 600, lineHeight: 1.3, letterSpacing: "-0.01em" }}>
                  {faq.q}
                </span>
                <span style={{ color: COLOR, fontSize: 22, flexShrink: 0, transition: "transform 0.3s", display: "block", transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}>
                  +
                </span>
              </button>
              <div style={{ maxHeight: open === i ? 300 : 0, overflow: "hidden", transition: "max-height 0.4s ease" }}>
                <p style={{ fontFamily: SANS, fontSize: "clamp(0.95rem,1.2vw,1.05rem)", color: "rgba(255,255,255,0.65)", lineHeight: 1.75, paddingBottom: 28, margin: 0 }}>
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }} />
        </div>

      </div>
    </section>
  )
}
