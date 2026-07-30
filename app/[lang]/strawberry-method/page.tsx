"use client"

import { useEffect, useRef, useState } from "react"
import { LocaleLink as Link } from "@/components/locale-link"
import { useT } from "@/lib/i18n"
import { BackHomeButton } from "@/components/strawberry/back-home-button"


const SERIF = "var(--font-playfair), 'Playfair Display', serif"
const SANS = "var(--font-dm-sans), 'DM Sans', sans-serif"
const COLOR = "#e63946"
const GLOW = "rgba(230,57,70,0.35)"

/**
 * Le paiement passe désormais par la page de commande : récapitulatif, suite
 * annoncée sous 24 heures, garantie rappelée, choix une fois ou trois fois.
 * Un lien Stripe nu au moment où la carte sort est l'endroit du parcours où le
 * site se taisait.
 */
const ORDER_URL = "/commander"

const T = {
  en: {
    badge: "The Proprietary Framework",
    lFramework: "Why a framework",
    lAcronym: "The acronym",
    lStages: "The five stages",
    lWorks: "Why it works",
    lCommission: "BRAND NARRATIVE ARCHITECTURE",
    acronymNote: "Five stages. Each one earns the next.",
    kickerArtifact: "From method to artifact",
    kickerApplied: "The method, applied",
    h1a: "The Strawberry",
    h1b: "Method.",
    lead: "Five stages. One doctrine. The repeatable architecture behind every house we make unforgettable.",
    whyH2a: "Most studios improvise.",
    whyH2b: "We do not.",
    whyLead: "A framework is not a constraint — it is the discipline that frees creative depth. The Strawberry Method is what we have refined across every commission so that no part of building a remembered house is left to chance.",
    principles: [
      { title: "Speed without shortcuts", body: "A method is repeatable. We do not invent the process for each house — we apply a refined one, freeing the time for what is irreducibly creative." },
      { title: "Precision over instinct", body: "Improvisation is for poets. Building a remembered house demands a structure that holds — five stages, each one earning the next." },
      { title: "Refined commission after commission", body: "Each engagement sharpens the method. What worked stays, what didn't is rewritten. The S.T.R.A.W. of next year will be sharper than this one." },
    ],
    fiveH2: "Five stages. In order. Always.",
    fiveItalic: "Not a checklist. A category-creation engine.",
    stagesH2: "How a house is made unforgettable.",
    craft: "What we craft",
    outputLabel: "Output",
    letters: [
      { letter: "S", name: "Soul", gloss: "The soul", verb: "Find the soul." },
      { letter: "T", name: "Territory", gloss: "The territory", verb: "Map the territory." },
      { letter: "R", name: "Reframe", gloss: "The reframe", verb: "Reframe the field." },
      { letter: "A", name: "Architecture", gloss: "The architecture", verb: "Build the architecture." },
      { letter: "W", name: "Weaponize", gloss: "The embodiment", verb: "Embody the universe." },
    ],
    stages: [
      { description: "Before architecture, before language, before strategy — what is the irreducible reason this house exists? Not the elevator pitch. The conviction. The unreasonable belief the founder holds about the world.", delivers: ["Origin story rewritten as mythology", "Founder conviction articulated in one sentence", "The enemy named — what this house refuses to accept", "The promise — what this house owes the world"], output: "A soul document. The constitutional preamble every other decision flows from." },
      { description: "A category is a battlefield of perception. Where does the audience currently stand, what stories already occupy their mind, and where are the cultural vacuums — the unclaimed ground that this house can occupy without permission?", delivers: ["Cultural mapping of the category", "Top competitors analyzed for narrative posture", "Identification of three territorial vacuums", "The chosen ground — the perception territory to own"], output: "A perception map. The terrain on which the rest of the work is fought." },
      { description: "Most brands compete inside the frame the category has set. The remembered ones rewrite the frame itself. We do not position the house against competitors — we redefine the conversation so the house becomes its own category.", delivers: ["Category redefinition — the new frame proposed", "Foundational reframes (3 to 5 conceptual moves)", "Language pivot — old words retired, new ones installed", "The point of view the audience cannot ignore"], output: "A reframe doctrine. The intellectual stance that makes comparison irrelevant." },
      { description: "Once the soul is found and the field reframed, the narrative architecture is constructed. Five pillars, each a recurring obsession of the house. A founder archetype. Four audience profiles written like film characters. The skeleton on which every piece of communication will hang.", delivers: ["Five narrative pillars defined and named", "Founder archetype articulated — posture, voice, references", "Four audience profiles written as characters", "The narrative spine — how the pillars connect into one story"], output: "A narrative architecture. The structural blueprint of the universe." },
      { description: "Architecture without execution is theory. The final stage maps the first ninety days — exactly what the house says, in what order, on which surface, and why each piece compounds the next. The universe becomes operational.", delivers: ["90-day narrative doctrine", "Content territories — the five obsessions to dramatize", "Sequencing — which essay sets up which campaign", "Distribution logic — surfaces, cadence, tone calibration"], output: "A 90-day doctrine. The first three months of the universe made real." },
    ],
    consH2: "Each stage earns the next.",
    consLead: "The order is not aesthetic. Skip a stage and the rest collapses.",
    consequences: [
      "Without Soul — no anchor. Every decision becomes negotiable.",
      "Without Territory — no battlefield. You compete where you cannot win.",
      "Without Reframe — no ownership. You sound like the others, only louder.",
      "Without Architecture — no compounding. Every piece starts from scratch.",
      "Without Weaponize — no embodiment. The doctrine never meets the world.",
    ],
    bridgeH2: "The workshop. And what comes out of it.",
    bridgeLeadA: "S.T.R.A.W. is the process — the five stages we move through to build a house. The ",
    bridgeLeadStrong: "Brand Narrative Architecture",
    bridgeLeadB: " is what those stages produce — five deliverables, bound into a single editorial document, handed to you at the end of week four.",
    colMethod: "Method stage",
    colDeliverable: "Commission deliverable",
    bridgeFlow: [
      { stage: "S + T", deliverable: "Differentiation Diagnostic", note: "Soul & Territory mapped together" },
      { stage: "R", deliverable: "Narrative Platform", note: "The reframed conviction made operational" },
      { stage: "A", deliverable: "Language System", note: "The vocabulary the architecture demands" },
      { stage: "W", deliverable: "Deployment Kit", note: "The first 90 days, ready Monday" },
      { stage: "All five", deliverable: "Coherence Guide", note: "The doctrine, made transmissible" },
    ],
    bridgeItalic: "The method is the discipline by which the artifact is made. The artifact is what you take home.",
    bridgeCta: "See the Commission →",
    ctaH2a: "Run S.T.R.A.W.",
    ctaH2b: "on your house.",
    ctaLead: "The Brand Narrative Architecture is the method, made operational for your house. Four weeks. Five stages. One constitution.",
    ctaProduct: "Brand Narrative Architecture",
    ctaPrice: "4,500€",
    cta: "Apply the Method →",
    ctaFoot: "Proprietary Framework · Strawberry Production",
  },
  fr: {
    badge: "Le Framework Propri\u00e9taire",
    lFramework: "Pourquoi une m\u00e9thode",
    lAcronym: "L'acronyme",
    lStages: "Les cinq \u00e9tapes",
    lWorks: "Pourquoi \u00e7a marche",
    lCommission: "BRAND NARRATIVE ARCHITECTURE",
    acronymNote: "Cinq \u00e9tapes. Chacune m\u00e9rite la suivante.",
    kickerArtifact: "De la m\u00e9thode \u00e0 l'artefact",
    kickerApplied: "La m\u00e9thode, appliqu\u00e9e",
    h1a: "La M\u00e9thode",
    h1b: "Strawberry.",
    lead: "Cinq \u00e9tapes. Une doctrine. L'architecture reproductible derri\u00e8re chaque maison qu'on rend inoubliable.",
    whyH2a: "La plupart des studios improvisent.",
    whyH2b: "Pas nous.",
    whyLead: "Un cadre n'est pas une contrainte — c'est la discipline qui lib\u00e8re la profondeur cr\u00e9ative. La M\u00e9thode Strawberry, c'est ce qu'on a affin\u00e9 au fil de chaque commande pour qu'aucune partie de la construction d'une maison m\u00e9morable ne soit laiss\u00e9e au hasard.",
    principles: [
      { title: "La vitesse sans raccourcis", body: "Une m\u00e9thode est reproductible. On n'invente pas le processus pour chaque maison — on en applique un affin\u00e9, ce qui lib\u00e8re le temps pour ce qui est irr\u00e9ductiblement cr\u00e9atif." },
      { title: "La pr\u00e9cision avant l'instinct", body: "L'improvisation, c'est pour les po\u00e8tes. B\u00e2tir une maison m\u00e9morable exige une structure qui tient — cinq \u00e9tapes, chacune m\u00e9ritant la suivante." },
      { title: "Affin\u00e9e commande apr\u00e8s commande", body: "Chaque mission aiguise la m\u00e9thode. Ce qui a march\u00e9 reste, ce qui n'a pas march\u00e9 est r\u00e9\u00e9crit. Le S.T.R.A.W. de l'an prochain sera plus tranchant que celui-ci." },
    ],
    fiveH2: "Cinq \u00e9tapes. Dans l'ordre. Toujours.",
    fiveItalic: "Pas une checklist. Un moteur de cr\u00e9ation de cat\u00e9gorie.",
    stagesH2: "Comment on rend une maison inoubliable.",
    craft: "Ce qu'on fa\u00e7onne",
    outputLabel: "Livrable",
    letters: [
      { letter: "S", name: "Soul", gloss: "L'\u00e2me", verb: "Trouver l'\u00e2me." },
      { letter: "T", name: "Territory", gloss: "Le territoire", verb: "Cartographier le territoire." },
      { letter: "R", name: "Reframe", gloss: "Le recadrage", verb: "Recadrer le champ." },
      { letter: "A", name: "Architecture", gloss: "L'architecture", verb: "B\u00e2tir l'architecture." },
      { letter: "W", name: "Weaponize", gloss: "L'incarnation", verb: "Incarner l'univers." },
    ],
    stages: [
      { description: "Avant l'architecture, avant le langage, avant la strat\u00e9gie — quelle est la raison irr\u00e9ductible d'exister de cette maison ? Pas le pitch. La conviction. La croyance d\u00e9raisonnable que le fondateur a sur le monde.", delivers: ["R\u00e9cit d'origine r\u00e9\u00e9crit en mythologie", "Conviction du fondateur articul\u00e9e en une phrase", "L'ennemi nomm\u00e9 — ce que cette maison refuse d'accepter", "La promesse — ce que cette maison doit au monde"], output: "Un document d'\u00e2me. Le pr\u00e9ambule constitutionnel dont d\u00e9coule toute autre d\u00e9cision." },
      { description: "Une cat\u00e9gorie est un champ de bataille de la perception. O\u00f9 se tient l'audience aujourd'hui, quelles histoires occupent d\u00e9j\u00e0 son esprit, et o\u00f9 sont les vides culturels — le terrain vacant que cette maison peut occuper sans permission ?", delivers: ["Cartographie culturelle de la cat\u00e9gorie", "Principaux concurrents analys\u00e9s selon leur posture narrative", "Identification de trois vides territoriaux", "Le terrain choisi — le territoire de perception \u00e0 occuper"], output: "Une carte de perception. Le terrain sur lequel se joue le reste du travail." },
      { description: "La plupart des marques se battent dans le cadre pos\u00e9 par la cat\u00e9gorie. Celles dont on se souvient r\u00e9\u00e9crivent le cadre lui-m\u00eame. On ne positionne pas la maison contre ses concurrents — on red\u00e9finit la conversation pour que la maison devienne sa propre cat\u00e9gorie.", delivers: ["Red\u00e9finition de cat\u00e9gorie — le nouveau cadre propos\u00e9", "Recadrages fondateurs (3 \u00e0 5 mouvements conceptuels)", "Pivot de langage — anciens mots retir\u00e9s, nouveaux install\u00e9s", "Le point de vue que l'audience ne peut pas ignorer"], output: "Une doctrine de recadrage. La position intellectuelle qui rend la comparaison sans objet." },
      { description: "Une fois l'\u00e2me trouv\u00e9e et le champ recadr\u00e9, l'architecture narrative se construit. Cinq piliers, chacun une obsession r\u00e9currente de la maison. Un arch\u00e9type de fondateur. Quatre profils d'audience \u00e9crits comme des personnages de film. Le squelette auquel s'accrochera chaque prise de parole.", delivers: ["Cinq piliers narratifs d\u00e9finis et nomm\u00e9s", "Arch\u00e9type du fondateur articul\u00e9 — posture, voix, r\u00e9f\u00e9rences", "Quatre profils d'audience \u00e9crits comme des personnages", "La colonne narrative — comment les piliers se relient en une seule histoire"], output: "Une architecture narrative. Le plan structurel de l'univers." },
      { description: "Une architecture sans ex\u00e9cution est une th\u00e9orie. La derni\u00e8re \u00e9tape cartographie les quatre-vingt-dix premiers jours — exactement ce que la maison dit, dans quel ordre, sur quelle surface, et pourquoi chaque pi\u00e8ce renforce la suivante. L'univers devient op\u00e9rationnel.", delivers: ["Doctrine narrative \u00e0 90 jours", "Territoires de contenu — les cinq obsessions \u00e0 dramatiser", "S\u00e9quen\u00e7age — quel essai pr\u00e9pare quelle campagne", "Logique de diffusion — surfaces, cadence, calibrage du ton"], output: "Une doctrine \u00e0 90 jours. Les trois premiers mois de l'univers rendus r\u00e9els." },
    ],
    consH2: "Chaque \u00e9tape m\u00e9rite la suivante.",
    consLead: "L'ordre n'est pas esth\u00e9tique. Saute une \u00e9tape et le reste s'effondre.",
    consequences: [
      "Sans \u00c2me — pas d'ancrage. Chaque d\u00e9cision devient n\u00e9gociable.",
      "Sans Territoire — pas de champ de bataille. Vous vous bats l\u00e0 o\u00f9 vous ne peux pas gagner.",
      "Sans Recadrage — pas d'appropriation. Vous sonnes comme les autres, en plus fort.",
      "Sans Architecture — pas d'effet cumul\u00e9. Chaque pi\u00e8ce repart de z\u00e9ro.",
      "Sans Weaponize — pas d'incarnation. La doctrine ne rencontre jamais le monde.",
    ],
    bridgeH2: "L'atelier. Et ce qui en sort.",
    bridgeLeadA: "S.T.R.A.W. est le processus — les cinq \u00e9tapes que je traverse pour b\u00e2tir une maison. La ",
    bridgeLeadStrong: "Brand Narrative Architecture",
    bridgeLeadB: " est ce que ces \u00e9tapes produisent — cinq livrables, reli\u00e9s en un seul document \u00e9ditorial, remis \u00e0 la fin de la quatri\u00e8me semaine.",
    colMethod: "\u00c9tape de m\u00e9thode",
    colDeliverable: "Livrable",
    bridgeFlow: [
      { stage: "S + T", deliverable: "Diagnostic de diff\u00e9renciation", note: "\u00c2me & Territoire cartographi\u00e9s ensemble" },
      { stage: "R", deliverable: "Plateforme narrative", note: "La conviction recadr\u00e9e rendue op\u00e9rationnelle" },
      { stage: "A", deliverable: "Syst\u00e8me de langage", note: "Le vocabulaire qu'exige l'architecture" },
      { stage: "W", deliverable: "Kit de d\u00e9ploiement", note: "Les 90 premiers jours, pr\u00eats lundi" },
      { stage: "Les cinq", deliverable: "Guide de coh\u00e9rence", note: "La doctrine, rendue transmissible" },
    ],
    bridgeItalic: "La m\u00e9thode est la discipline par laquelle l'artefact est fait. L'artefact est ce que vous emportez.",
    bridgeCta: "Voir BRAND NARRATIVE ARCHITECTURE →",
    ctaH2a: "Appliquez S.T.R.A.W.",
    ctaH2b: "\u00e0 votre maison.",
    ctaLead: "La Brand Narrative Architecture, c'est la m\u00e9thode rendue op\u00e9rationnelle pour votre maison. Quatre semaines. Cinq \u00e9tapes. Une constitution.",
    ctaProduct: "Brand Narrative Architecture",
    ctaPrice: "4 500€",
    cta: "Appliquer la m\u00e9thode →",
    ctaFoot: "Framework propri\u00e9taire · Strawberry Production",
  },
}


function useReveal() {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return { ref, visible }
}

export default function StrawberryMethodPage() {
  const t = useT(T)
  const LETTERS = t.letters
  const PRINCIPLES = t.principles
  const STAGES = t.stages.map((st, i) => ({ ...st, ...t.letters[i] }))
  const CONSEQUENCES = t.consequences.map((text, i) => ({ text, letter: t.letters[i].letter }))
  const BRIDGE_FLOW = t.bridgeFlow.map((b) => ({ ...b, arrow: "\u2192" }))
  const hero = useReveal()
  const why = useReveal()
  const reveal = useReveal()
  const stages = useReveal()
  const dependency = useReveal()
  const bridge = useReveal()
  const cta = useReveal()

  return (
    <main style={{ background: "#0a0a0a", color: "#fff", minHeight: "100vh", fontFamily: SANS, overflow: "hidden" }}>
      <BackHomeButton />

      {/* HERO — bloc letter cards retiré */}
      <section ref={hero.ref as any} style={{ minHeight: "90vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "120px clamp(1.5rem,4vw,4rem) 80px", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at center, ${GLOW} 0%, transparent 60%)`, opacity: 0.4, pointerEvents: "none" }} />
        <div style={{ maxWidth: 1100, width: "100%", textAlign: "center", position: "relative", opacity: hero.visible ? 1 : 0, transform: hero.visible ? "translateY(0)" : "translateY(30px)", transition: "all 1s ease" }}>
          <div style={{ display: "inline-block", padding: "8px 20px", border: `1px solid ${COLOR}`, borderRadius: 100, fontSize: 11, letterSpacing: "0.2em", color: COLOR, marginBottom: 40, textTransform: "uppercase" }}>
            {t.badge}
          </div>
          <h1 style={{ fontFamily: SERIF, fontSize: "clamp(2.5rem,7vw,5.5rem)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 32 }}>
            {t.h1a}<br />
            <span style={{ background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{t.h1b}</span>
          </h1>
          <p style={{ fontSize: "clamp(1rem,1.5vw,1.25rem)", color: "rgba(255,255,255,0.7)", maxWidth: 720, margin: "0 auto", lineHeight: 1.6 }}>
            {t.lead}
          </p>

          {/* L'acronyme, posé dès le hero : le lecteur voit la méthode entière
              avant de lire une seule étape. */}
          <div className="mt-14 flex flex-wrap items-start justify-center gap-x-6 gap-y-7 sm:gap-x-10">
            {t.letters.map((st) => (
              <div key={st.letter} className="min-w-[76px] text-center">
                <div className="font-serif text-[clamp(2.75rem,7vw,4.5rem)] font-bold leading-none tracking-[-0.02em] text-brand">
                  {st.letter}
                </div>
                {/* Le mot anglais porte la lettre — l'acronyme ne tient pas
                    autrement. La traduction passe dessous, en gris. */}
                <div className="mt-2 font-sans text-[10px] uppercase tracking-[0.2em] text-chalk-55">
                  {st.name}
                </div>
                <div className="mt-1 font-serif text-[11px] italic text-chalk-40">{st.gloss}</div>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-6 max-w-[520px] font-serif text-[clamp(0.95rem,1.4vw,1.1rem)] italic text-chalk-40">
            {t.acronymNote}
          </p>
        </div>
      </section>

      {/* WHY A METHOD */}
      <section ref={why.ref as any} style={{ padding: "120px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", opacity: why.visible ? 1 : 0, transform: why.visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase" }}>{t.lFramework}</div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 24, lineHeight: 1.15 }}>
              {t.whyH2a}<br />{t.whyH2b}
            </h2>
            <p style={{ fontFamily: SANS, fontSize: "clamp(1rem, 1.3vw, 1.1rem)", color: "rgba(255,255,255,0.65)", maxWidth: 640, margin: "0 auto", lineHeight: 1.7 }}>
              {t.whyLead}
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            {PRINCIPLES.map((p, i) => (
              <div key={i} style={{ padding: "36px 28px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)" }}>
                <div style={{ fontFamily: SERIF, fontSize: "2rem", color: COLOR, fontWeight: 700, lineHeight: 1, marginBottom: 24 }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 style={{ fontFamily: SERIF, fontSize: "1.35rem", fontWeight: 600, marginBottom: 16, letterSpacing: "-0.02em" }}>{p.title}</h3>
                <p style={{ fontFamily: SANS, fontSize: "0.95rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE REVEAL — bloc unique avec letter cards éclairées + verbes journey */}
      <section ref={reveal.ref as any} style={{ padding: "140px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at center, ${GLOW} 0%, transparent 65%)`, opacity: 0.3, pointerEvents: "none" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", opacity: reveal.visible ? 1 : 0, transform: reveal.visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase" }}>{t.lAcronym}</div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              {t.fiveH2}
            </h2>
          </div>

          {/* Giant letter cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "clamp(8px, 1.2vw, 16px)", marginBottom: 64 }}>
            {LETTERS.map((l) => (
              <div key={l.letter} style={{ textAlign: "center" }}>
                <div style={{ border: `2px solid ${COLOR}`, padding: "clamp(20px, 4vw, 48px) 0", fontFamily: SERIF, fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 700, color: COLOR, lineHeight: 1, marginBottom: 20, background: "rgba(230,57,70,0.06)", boxShadow: `0 20px 60px ${GLOW}` }}>
                  {l.letter}
                </div>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: COLOR, margin: "0 auto 12px" }} />
                <div style={{ fontFamily: SANS, fontSize: "clamp(10px, 1.3vw, 13px)", color: "#fff", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>
                  {l.name}
                </div>
              </div>
            ))}
          </div>

          {/* Journey flow */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "clamp(8px, 1.5vw, 20px)", marginBottom: 56 }}>
            {LETTERS.map((l, i) => (
              <div key={l.letter} style={{ display: "flex", alignItems: "center", gap: "clamp(8px, 1.5vw, 20px)" }}>
                <div style={{ fontFamily: SANS, fontSize: "clamp(11px, 1.3vw, 13px)", color: "rgba(255,255,255,0.75)", letterSpacing: "0.04em", whiteSpace: "nowrap" }}>
                  {l.verb}
                </div>
                {i < LETTERS.length - 1 && (
                  <div style={{ color: COLOR, fontSize: 14, fontFamily: SANS }}>—</div>
                )}
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto" }}>
            <p style={{ fontFamily: SERIF, fontSize: "clamp(1.1rem, 1.7vw, 1.4rem)", fontStyle: "italic", color: "rgba(255,255,255,0.8)", lineHeight: 1.55, letterSpacing: "-0.01em" }}>
              {t.fiveItalic}
            </p>
          </div>
        </div>
      </section>

      {/* STAGES */}
      <section ref={stages.ref as any} style={{ padding: "120px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", opacity: stages.visible ? 1 : 0, transform: stages.visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>

          <div style={{ textAlign: "center", marginBottom: 96 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase" }}>{t.lStages}</div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              {t.stagesH2}
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>
            {STAGES.map((s) => (
              <article key={s.letter} style={{ position: "relative", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)", padding: "clamp(2rem, 4vw, 3.5rem)", overflow: "hidden" }}>

                <div style={{ position: "absolute", bottom: -40, right: -20, fontFamily: SERIF, fontSize: "clamp(8rem, 18vw, 14rem)", fontWeight: 700, color: "rgba(230,57,70,0.05)", lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>
                  {s.letter}
                </div>

                <div style={{ position: "relative" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 24, marginBottom: 16, flexWrap: "wrap" }}>
                    <div style={{ fontFamily: SERIF, fontSize: "clamp(3rem, 6vw, 4.5rem)", color: COLOR, fontWeight: 700, lineHeight: 1, letterSpacing: "-0.04em" }}>
                      {s.letter}.
                    </div>
                    <div style={{ fontFamily: SERIF, fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1 }}>
                      {s.name}.
                    </div>
                  </div>

                  <div style={{ fontFamily: SERIF, fontSize: "clamp(1.15rem, 1.8vw, 1.5rem)", fontStyle: "italic", color: COLOR, marginBottom: 32, letterSpacing: "-0.01em" }}>
                    {s.verb}
                  </div>

                  <p style={{ fontFamily: SANS, fontSize: "clamp(0.98rem, 1.3vw, 1.1rem)", color: "rgba(255,255,255,0.75)", lineHeight: 1.7, marginBottom: 40, maxWidth: 720 }}>
                    {s.description}
                  </p>

                  <div style={{ marginBottom: 32 }}>
                    <div style={{ fontSize: 10, letterSpacing: "0.25em", color: "rgba(255,255,255,0.5)", marginBottom: 20, textTransform: "uppercase", fontFamily: SANS }}>
                      {t.craft}
                    </div>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14 }}>
                      {s.delivers.map((d, j) => (
                        <li key={j} style={{ fontFamily: SANS, fontSize: "0.95rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.55, paddingLeft: 24, position: "relative" }}>
                          <span style={{ position: "absolute", left: 0, color: COLOR }}>✦</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ borderLeft: `2px solid ${COLOR}`, padding: "20px 24px", background: "rgba(230,57,70,0.04)", maxWidth: 720 }}>
                    <div style={{ fontSize: 10, letterSpacing: "0.25em", color: COLOR, marginBottom: 10, textTransform: "uppercase", fontFamily: SANS }}>
                      {t.outputLabel}
                    </div>
                    <p style={{ fontFamily: SERIF, fontSize: "clamp(1rem, 1.4vw, 1.15rem)", fontStyle: "italic", color: "rgba(255,255,255,0.9)", lineHeight: 1.55, letterSpacing: "-0.01em" }}>
                      {s.output}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DEPENDENCY CHAIN */}
      <section ref={dependency.ref as any} style={{ padding: "120px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)", background: "#0d0d0d" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", opacity: dependency.visible ? 1 : 0, transform: dependency.visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase" }}>{t.lWorks}</div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 24, lineHeight: 1.15 }}>
              {t.consH2}
            </h2>
            <p style={{ fontFamily: SANS, fontSize: "1rem", color: "rgba(255,255,255,0.6)", maxWidth: 580, margin: "0 auto", lineHeight: 1.7 }}>
              {t.consLead}
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {CONSEQUENCES.map((c) => (
              <div key={c.letter} style={{ display: "flex", alignItems: "center", gap: 24, padding: "20px 24px", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}>
                <div style={{ flexShrink: 0, width: 56, height: 56, border: `2px solid ${COLOR}`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: SERIF, fontSize: "1.6rem", fontWeight: 700, color: COLOR, background: "rgba(230,57,70,0.06)" }}>
                  {c.letter}
                </div>
                <p style={{ fontFamily: SERIF, fontSize: "clamp(1rem, 1.4vw, 1.2rem)", color: "rgba(255,255,255,0.85)", lineHeight: 1.5, fontStyle: "italic", letterSpacing: "-0.01em" }}>
                  {c.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRIDGE — Method produces Commission */}
      <section ref={bridge.ref as any} style={{ padding: "140px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at center, ${GLOW} 0%, transparent 65%)`, opacity: 0.18, pointerEvents: "none" }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", opacity: bridge.visible ? 1 : 0, transform: bridge.visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>

          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase" }}>{t.kickerArtifact}</div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 28, lineHeight: 1.15 }}>
              {t.bridgeH2}
            </h2>
            <p style={{ fontFamily: SANS, fontSize: "clamp(1rem,1.3vw,1.1rem)", color: "rgba(255,255,255,0.65)", maxWidth: 680, margin: "0 auto", lineHeight: 1.7 }}>
              {t.bridgeLeadA}<strong style={{ color: "#fff" }}>{t.bridgeLeadStrong}</strong>{t.bridgeLeadB}
            </p>
          </div>

          {/* The flow table */}
          <div style={{ marginBottom: 56, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)" }}>

            {/* Header row */}
            <div style={{ display: "grid", gridTemplateColumns: "minmax(110px,1fr) auto minmax(220px,1.4fr)", gap: "clamp(12px, 2vw, 24px)", padding: "20px clamp(1rem, 2.5vw, 2rem)", borderBottom: "1px solid rgba(255,255,255,0.1)", alignItems: "center" }}>
              <div style={{ fontSize: 10, letterSpacing: "0.3em", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", fontFamily: SANS }}>
                {t.colMethod}
              </div>
              <div style={{ width: 16 }} />
              <div style={{ fontSize: 10, letterSpacing: "0.3em", color: COLOR, textTransform: "uppercase", fontFamily: SANS }}>
                {t.colDeliverable}
              </div>
            </div>

            {/* Flow rows */}
            {BRIDGE_FLOW.map((row, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "minmax(110px,1fr) auto minmax(220px,1.4fr)", gap: "clamp(12px, 2vw, 24px)", padding: "clamp(1.25rem,2vw,1.75rem) clamp(1rem, 2.5vw, 2rem)", borderBottom: i < BRIDGE_FLOW.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none", alignItems: "center" }}>
                <div style={{ fontFamily: SERIF, fontSize: "clamp(1rem, 1.6vw, 1.25rem)", color: "#fff", fontWeight: 600, letterSpacing: "-0.01em" }}>
                  {row.stage}
                </div>
                <div style={{ color: COLOR, fontSize: "clamp(1rem, 1.4vw, 1.25rem)", fontFamily: SERIF, fontWeight: 400 }}>
                  {row.arrow}
                </div>
                <div>
                  <div style={{ fontFamily: SERIF, fontSize: "clamp(1.05rem, 1.6vw, 1.3rem)", color: COLOR, fontWeight: 700, lineHeight: 1.2, marginBottom: 4, letterSpacing: "-0.01em" }}>
                    {row.deliverable}
                  </div>
                  <div style={{ fontFamily: SANS, fontSize: "clamp(0.82rem, 1vw, 0.9rem)", color: "rgba(255,255,255,0.55)", fontStyle: "italic", lineHeight: 1.4 }}>
                    {row.note}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto" }}>
            <p style={{ fontFamily: SERIF, fontSize: "clamp(1.05rem, 1.5vw, 1.3rem)", fontStyle: "italic", color: "rgba(255,255,255,0.8)", lineHeight: 1.55, letterSpacing: "-0.01em", marginBottom: 32 }}>
              {t.bridgeItalic}
            </p>
            <Link href="/brand-narrative-architecture" style={{ display: "inline-block", color: COLOR, fontFamily: SANS, fontSize: 14, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", padding: "12px 28px", border: `1px solid ${COLOR}`, borderRadius: 100, transition: "all 0.2s" }}>
              {t.bridgeCta}
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section ref={cta.ref as any} style={{ padding: "140px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at center, ${GLOW} 0%, transparent 60%)`, opacity: 0.5, pointerEvents: "none" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative", opacity: cta.visible ? 1 : 0, transform: cta.visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 32, textTransform: "uppercase" }}>{t.kickerApplied}</div>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 32 }}>
            {t.ctaH2a}<br />{t.ctaH2b}
          </h2>
          <p style={{ fontFamily: SANS, fontSize: "1.05rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.6, marginBottom: 48, maxWidth: 600, margin: "0 auto 48px" }}>
            {t.ctaLead}
          </p>

          <div style={{ marginBottom: 32, padding: "24px 32px", border: `1px solid rgba(230,57,70,0.3)`, background: "rgba(230,57,70,0.04)", maxWidth: 520, margin: "0 auto 48px" }}>
            <div style={{ fontSize: 11, letterSpacing: "0.2em", color: COLOR, marginBottom: 12, textTransform: "uppercase" }}>{t.lCommission}</div>
            <div style={{ fontFamily: SERIF, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 700, marginBottom: 8, letterSpacing: "-0.02em" }}>
              {t.ctaProduct}
            </div>
            <div style={{ fontFamily: SERIF, fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: 700, color: COLOR, letterSpacing: "-0.03em" }}>
              {t.ctaPrice}
            </div>
          </div>

          <Link href={ORDER_URL} target="_blank" style={{ display: "inline-block", background: `linear-gradient(135deg, ${COLOR}, #ff1a1a)`, color: "#fff", padding: "20px 52px", borderRadius: 100, fontSize: 16, fontWeight: 600, textDecoration: "none", letterSpacing: "0.04em", fontFamily: SANS, boxShadow: `0 20px 60px ${GLOW}`, marginBottom: 24 }}>
            {t.cta}
          </Link>

          <div style={{ marginTop: 32, fontSize: 11, color: "rgba(255,255,255,0.4)", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: SANS }}>
            {t.ctaFoot}
          </div>
        </div>
      </section>

    </main>
  )
}
