"use client"

import { useEffect, useRef, useState } from "react"
import { LocaleLink as Link } from "@/components/locale-link"
import { useT } from "@/lib/i18n"
import { ViewTracker } from "@/components/strawberry/view-tracker"

/**
 * La porte Lieux — reprise intégrale de l'ancien site NOCTA.
 *
 * Le contenu vient du dépôt NOCTA (index.html) : le constat, le sprint en
 * cinq étapes, le comparateur publier/raconter, les trois chiffres, la
 * comparaison agence au mois contre sprint facturé une fois. La marque
 * NOCTA est retirée — c'est désormais une porte de Strawberry Production,
 * pas une marque séparée.
 *
 * Les visuels sont repris dans leur structure (typologies en chips, sprint
 * en étapes numérotées, poignée à glisser entre les deux réalités, cartes
 * de chiffres, colonnes de prix face à face) mais rendus avec les jetons
 * de style de Strawberry — rouge de marque, Playfair et DM Sans. NOCTA
 * avait sa propre palette et ses propres polices ; les transposer telles
 * quelles aurait donné une page qui n'appartient visuellement pas au site
 * sur lequel elle vit.
 */

const T = {
  fr: {
    kicker: "Sprint d'écriture · Paris & Île-de-France",
    h1a: "Votre lieu est déjà une histoire.",
    h1b: "Personne ne l'a écrite.",
    cta: "Prendre contact →",
    scrollHint: "Comment ça se passe",
    types: ["Restaurants", "Bars", "Clubs", "Coffee shops", "Caves & bistrots", "Rooftops"],

    lFinding: "Le constat",
    findingA: "Votre cuisine est excellente. Votre salle est pleine. ",
    findingStrong: "Et pourtant",
    findingB: ", chaque publication repart de zéro — parce que personne chez vous ne sait ce que votre lieu raconte. Pendant ce temps, à trois rues d'ici, une adresse deux fois moins bonne que la vôtre affiche complet tous les soirs. Elle ne cuisine pas mieux. ",
    findingC: "Elle se raconte mieux.",
    findingD: "Vous n'avez pas un problème de contenu. Vous avez un problème de monde. Un restaurant est déjà une fiction — un décor, une heure, une lumière, un casting, des rituels. ",
    findingE: "Le vôtre n'a jamais été écrit.",

    lSprint: "Le sprint",
    sprintH2: "Deux à trois semaines, cinq étapes.",
    steps: [
      {
        n: "01",
        title: "Je viens chez vous.",
        body: "Un service entier, à observer. Qui parle à qui, ce que les habitués commandent sans regarder la carte, ce que votre équipe répète sans s'en rendre compte. La matière est déjà là.",
        items: ["Immersion pendant un service complet", "Entretien avec vous et deux personnes de l'équipe"],
      },
      {
        n: "02",
        title: "J'écris votre monde.",
        body: "Ce que votre lieu promet en une phrase. Son heure, sa lumière, son atmosphère. Son casting — vous, le barman, les habitués, et le plat signature traité comme un personnage. Ses rituels.",
        items: ["La promesse du lieu, en une phrase qui tient", "Décor, heure, lumière, atmosphère", "Casting et rituels de la maison"],
      },
      {
        n: "03",
        title: "Je pose la ligne et les mots.",
        body: "Trois à cinq rubriques récurrentes, nommées, avec ce qu'elles cherchent à provoquer. Le vocabulaire de la maison : ce qu'on dit, ce qu'on ne dit jamais. Et tous vos textes permanents, écrits une bonne fois.",
        items: ["3 à 5 rubriques récurrentes avec leur intention", "Le vocabulaire : ce qu'on dit, ce qu'on ne dit jamais", "Bio, fiche Google, menu, réponses-types aux avis"],
      },
      {
        n: "04",
        title: "Je vous laisse le manuel.",
        body: "Vingt à trente scripts prêts à l'emploi, écrits plan par plan pour être tournés au téléphone par n'importe qui en salle. Un calendrier sur quatre semaines qui tourne en boucle. Un protocole de captation pendant le service.",
        items: ["20 à 30 scripts-types, plan par plan", "Un calendrier sur 4 semaines, reconductible", "Le protocole de captation pendant le service"],
      },
      {
        n: "05",
        title: "Et je vous le prouve.",
        body: "Avant de partir, je produis la première semaine de contenu moi-même. Pas pour vous rendre dépendant : pour que vous voyiez le système tourner une fois, en vrai, avant de le prendre en main.",
        items: ["La première semaine de contenu, produite et livrée", "Une passation avec la personne qui prendra le relais"],
      },
    ],

    lDiff: "La différence",
    diffH2: "Publier, ou raconter.",
    diffLead: "Le même lieu, deux réalités. Prenez la poignée et tirez : à gauche on publie sans savoir quoi dire, à droite le monde est écrit et l'équipe le tient.",
    diffLeftTitle: "Un lieu qui publie",
    diffLeftBody: "Chaque post repart de zéro. Personne ne sait quoi filmer, ni quoi écrire dessous. On poste quand on y pense.",
    diffRightTitle: "Un lieu qui se raconte",
    diffRightBody: "Le monde est écrit. N'importe qui en salle ouvre le manuel, prend un script et tourne. Tout se ressemble, sans se répéter.",
    diffHint: "Glissez pour comparer",

    stats: [
      { n: "2–3", label: "Semaines, puis c'est à vous" },
      { n: "20–30", label: "Scripts prêts à tourner" },
      { n: "1", label: "Seule personne sur votre lieu" },
    ],

    lPrice: "Ce que ça coûte",
    priceH2: "Une fois, pas tous les mois.",
    priceLead: "Une agence facture 1 200 à 1 500 € par mois, aussi longtemps que vous la gardez. Le jour où vous arrêtez, il ne vous reste rien.",
    agencyTitle: "L'agence au mois",
    agencyPrice: "1 200 – 1 500 € / mois",
    agencyBody: "Elle exécute à votre place. Elle sait ce que votre lieu raconte, vous non. Au bout de deux ans : environ 30 000 € dépensés, et rien qui vous appartienne.",
    sprintTitle: "Le sprint",
    sprintPrice: "2 500 – 3 500 €, une fois",
    sprintBody: "Je n'exécute pas à votre place : j'écris ce que votre lieu raconte et je vous livre de quoi le tenir. Vous gardez le tout, pour toujours. Si on se quitte demain, ça continue de tourner.",

    lWho: "Qui écrit",
    whoH2: "Une seule personne sur votre lieu.",
    whoBody: "Réalisateur et compositeur, je dirige Strawberry Production. J'ai écrit 30 Architectures — An Atlas of Narrative Patterns et l'essai Le Narratif de Marque à l'Ère de l'IA. Le même travail d'écriture que pour les marques, appliqué à un lieu — avec la contrainte que l'équipe doit pouvoir le tenir seule une fois que je suis parti.",

    ctaH2: "Votre lieu mérite d'être écrit.",
    ctaBody: "Un service pour observer, deux à trois semaines pour écrire, et le système vous appartient.",
    faqEyebrow: "Questions fréquentes",
    faqTitle: "Ce que les gérants me demandent.",
    faq: [
      { q: "Pourquoi ne pas simplement prendre une agence au mois ?", a: "Parce qu'au bout de deux ans vous aurez payé environ 30 000 € et vous n'aurez rien gardé. Ici vous payez une fois, et vous repartez avec le système. Si on se quitte demain, il continue de fonctionner sans moi." },
      { q: "Qui publie une fois le sprint terminé ?", a: "Votre équipe — c'est le but. Le manuel contient 20 à 30 scripts prêts à l'emploi, écrits plan par plan, plus un calendrier sur quatre semaines qui tourne en boucle. Personne n'a besoin de deviner quoi poster." },
      { q: "Combien de temps ça prend, de mon côté ?", a: "Quelques heures en tout. Une immersion pendant un service, un entretien avec vous, deux points d'étape et une remise finale. Le reste du travail se fait sans vous mobiliser." },
      { q: "Personne chez moi ne sait filmer.", a: "C'est prévu. Les scripts sont écrits pour quelqu'un qui n'a jamais tourné : où se placer, quoi cadrer, combien de secondes, quoi dire. Un téléphone suffit, et n'importe qui en salle peut le faire." },
      { q: "Qu'est-ce que je garde à la fin ?", a: "Tout, et pour toujours : le document qui décrit votre monde, votre ligne éditoriale, vos textes permanents, le manuel d'exécution, et la première semaine de contenu déjà produite." },
    ],
    ctaBtn: "Prendre contact →",
  },
  en: {
    kicker: "Writing sprint · Paris & Île-de-France",
    h1a: "Your venue is already a story.",
    h1b: "Nobody has written it.",
    cta: "Get in touch →",
    scrollHint: "How it works",
    types: ["Restaurants", "Bars", "Clubs", "Coffee shops", "Wine bars & bistros", "Rooftops"],

    lFinding: "The finding",
    findingA: "Your cooking is excellent. Your room is full. ",
    findingStrong: "And yet",
    findingB: ", every post starts from nothing — because nobody on your team knows what your venue is saying. Meanwhile, three streets away, a place half as good as yours is fully booked every night. It does not cook better. ",
    findingC: "It tells itself better.",
    findingD: "You do not have a content problem. You have a world problem. A restaurant is already a fiction — a set, an hour, a light, a cast, rituals. ",
    findingE: "Yours has never been written.",

    lSprint: "The sprint",
    sprintH2: "Two to three weeks, five stages.",
    steps: [
      { n: "01", title: "I come to you.", body: "A full service, observed. Who talks to whom, what the regulars order without looking at the menu, what your team repeats without noticing. The material is already there.", items: ["Immersion during a full service", "Interviews with you and two team members"] },
      { n: "02", title: "I write your world.", body: "What your venue promises in one sentence. Its hour, its light, its atmosphere. Its cast — you, the bartender, the regulars, and the signature dish treated as a character. Its rituals.", items: ["The promise of the venue, in one sentence that holds", "Set, hour, light, atmosphere", "The cast and the rituals of the house"] },
      { n: "03", title: "I set the line and the words.", body: "Three to five recurring formats, named, with what each one is meant to provoke. The vocabulary of the house: what we say, what we never say. And all your permanent copy, written once and for good.", items: ["3 to 5 recurring formats with their intent", "The vocabulary: what we say, what we never say", "Bio, Google listing, menu, standard replies to reviews"] },
      { n: "04", title: "I leave you the manual.", body: "Twenty to thirty ready-to-use scripts, written shot by shot so anyone on the floor can film them on a phone. A four-week calendar that loops. A capture protocol for during service.", items: ["20 to 30 scripts, shot by shot", "A 4-week calendar, repeatable", "The capture protocol for during service"] },
      { n: "05", title: "And I prove it works.", body: "Before I leave, I produce the first week of content myself. Not to make you dependent: so you see the system run once, for real, before you take it over.", items: ["The first week of content, produced and delivered", "A handover with whoever takes it on"] },
    ],

    lDiff: "The difference",
    diffH2: "Posting, or telling.",
    diffLead: "The same venue, two realities. Take the handle and pull: on the left, posting without knowing what to say; on the right, the world is written and the team holds it.",
    diffLeftTitle: "A venue that posts",
    diffLeftBody: "Every post starts from nothing. Nobody knows what to film, or what to write underneath. You post when you remember to.",
    diffRightTitle: "A venue that tells its story",
    diffRightBody: "The world is written. Anyone on the floor opens the manual, takes a script and films. Everything belongs together, without repeating itself.",
    diffHint: "Drag to compare",

    stats: [
      { n: "2–3", label: "Weeks, then it is yours" },
      { n: "20–30", label: "Scripts ready to film" },
      { n: "1", label: "Single person on your venue" },
    ],

    lPrice: "What it costs",
    priceH2: "Once, not every month.",
    priceLead: "An agency charges 1,200 to 1,500 € a month, for as long as you keep them. The day you stop, you are left with nothing.",
    agencyTitle: "The monthly agency",
    agencyPrice: "1,200 – 1,500 € / month",
    agencyBody: "It executes in your place. It knows what your venue is saying, you do not. After two years: roughly 30,000 € spent, and nothing that belongs to you.",
    sprintTitle: "The sprint",
    sprintPrice: "2,500 – 3,500 €, once",
    sprintBody: "I do not execute in your place: I write what your venue is saying and hand you what you need to hold it. You keep all of it, forever. If we part tomorrow, it keeps running.",

    lWho: "Who writes",
    whoH2: "A single person on your venue.",
    whoBody: "A filmmaker and composer, I run Strawberry Production. I wrote 30 Architectures — An Atlas of Narrative Patterns and the essay Brand Narrative in the Age of AI. The same writing work as for brands, applied to a venue — with the constraint that the team has to be able to hold it alone once I am gone.",

    ctaH2: "Your venue deserves to be written.",
    ctaBody: "One service to observe, two to three weeks to write, and the system is yours.",
    faqEyebrow: "Frequently asked",
    faqTitle: "What owners ask me.",
    faq: [
      { q: "Why not just hire a monthly agency?", a: "Because after two years you will have spent around 30,000 € and kept nothing. Here you pay once, and you leave with the system. If we part tomorrow, it keeps working without me." },
      { q: "Who publishes once the sprint is over?", a: "Your team — that is the point. The manual holds 20 to 30 ready-to-use scripts, written shot by shot, plus a four-week calendar that loops. Nobody has to guess what to post." },
      { q: "How much of my time does it take?", a: "A few hours in total. One immersion during a service, one interview with you, two checkpoints and a final handover. The rest of the work happens without taking your time." },
      { q: "Nobody here knows how to film.", a: "That is accounted for. The scripts are written for someone who has never filmed: where to stand, what to frame, how many seconds, what to say. A phone is enough, and anyone on the floor can do it." },
      { q: "What do I keep at the end?", a: "Everything, forever: the document describing your world, your editorial line, your permanent copy, the execution manual, and the first week of content already produced." },
    ],
    ctaBtn: "Get in touch →",
  },
}

/**
 * La charte NOCTA, reprise telle quelle.
 *
 * Palette nocturne (#0a0910), dégradé corail → iris, et les quatre familles
 * de l'ancien site : Bricolage Grotesque pour les titres, Instrument Serif
 * en italique pour les accroches, Hanken Grotesk pour le texte, Space Mono
 * pour les surtitres et les boutons. Les polices sont chargées par la page
 * elle-même : le reste du site ne charge que Playfair et DM Sans.
 *
 * Tout est porté par des styles inline et une feuille locale plutôt que par
 * les classes utilitaires du site — les jetons de Strawberry (fond, rouge de
 * marque, familles) ne décrivent pas cette identité, et les emprunter
 * reviendrait à repeindre NOCTA aux couleurs du studio.
 */
const N = {
  ink: "#0a0910",
  ink2: "#100e1a",
  card: "#181425",
  line: "#2a2438",
  lineSoft: "#211d2e",
  coral: "#ff5d57",
  iris: "#7b6cff",
  irisSoft: "#a99dff",
  cream: "#f3efe9",
  smoke: "#a39db8",
  smokeDim: "#6f6982",
  grad: "linear-gradient(108deg, #ff5d57 0%, #7b6cff 100%)",
  display: '"Bricolage Grotesque", system-ui, sans-serif',
  serif: '"Instrument Serif", Georgia, serif',
  body: '"Hanken Grotesk", system-ui, sans-serif',
  mono: '"Space Mono", ui-monospace, monospace',
}

const gradText: React.CSSProperties = {
  background: N.grad,
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
}

function Eyebrow({ children, iris }: { children: React.ReactNode; iris?: boolean }) {
  return (
    <div
      style={{
        fontFamily: N.mono,
        fontSize: ".72rem",
        letterSpacing: ".32em",
        textTransform: "uppercase",
        color: iris ? N.irisSoft : N.coral,
        marginBottom: "1.1rem",
      }}
    >
      {children}
    </div>
  )
}

export default function LieuxPage() {
  const t = useT(T)

  return (
    <main style={{ background: N.ink, color: N.cream, fontFamily: N.body, lineHeight: 1.6 }}>
      <ViewTracker name="lieux" />
      <link
        href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Hanken+Grotesk:wght@400;500;600;700&family=Instrument+Serif:ital@1&family=Space+Mono:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <style>{`
        .nocta h1, .nocta h2, .nocta h3 { font-family:${N.display}; font-weight:700; line-height:1.02; letter-spacing:-.02em; margin:0; }
        .nocta-wrap { max-width:1180px; margin:0 auto; padding-inline:clamp(20px,5vw,64px); }
        .nocta-sec { padding-block:clamp(72px,10vw,140px); }
        .nocta-btn { display:inline-flex; align-items:center; gap:.6em; font-family:${N.mono};
          font-size:.82rem; letter-spacing:.12em; text-transform:uppercase; padding:1.05em 1.8em;
          border-radius:100px; border:1px solid transparent; background:${N.grad}; color:#120a0a;
          font-weight:700; text-decoration:none; transition:box-shadow .4s cubic-bezier(.22,.61,.36,1); }
        .nocta-btn:hover { box-shadow:0 14px 50px -12px rgba(255,93,87,.55); }
        .nocta-card { background:${N.ink2}; border:1px solid ${N.lineSoft}; border-radius:18px;
          padding:clamp(1.6rem,2.6vw,2.3rem); }
        .nocta-chip { border:1px solid ${N.lineSoft}; border-radius:100px; padding:.55em 1.1em;
          font-family:${N.mono}; font-size:.7rem; letter-spacing:.14em; text-transform:uppercase; color:${N.smoke}; }
        @keyframes nocta-pulse { 0%,100%{opacity:1} 50%{opacity:.35} }
        @keyframes nocta-flick { 0%,96%,100%{opacity:1} 97%{opacity:.55} 98%{opacity:1} 98.5%{opacity:.7} }
        .nocta-flicker { animation:nocta-flick 6s infinite steps(1); }
        @media (prefers-reduced-motion: reduce) { .nocta-flicker { animation:none } }
      `}</style>

      <div className="nocta">
        {/* HERO — le wordmark géant en dégradé, sur le bokeh nocturne. */}
        <section style={{ position: "relative", minHeight: "92vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 0,
              background:
                "radial-gradient(60% 50% at 30% 30%, rgba(255,93,87,.16), transparent 60%), radial-gradient(50% 60% at 80% 70%, rgba(123,108,255,.18), transparent 60%)",
            }}
          />
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 1,
              pointerEvents: "none",
              background:
                "radial-gradient(85% 95% at 50% 50%, rgba(10,9,16,.72) 0%, rgba(10,9,16,.42) 48%, transparent 78%)",
            }}
          />
          <div className="nocta-wrap" style={{ position: "relative", zIndex: 2, width: "100%", paddingTop: 120 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: ".8rem",
                marginBottom: "1.6rem",
                background: "rgba(10,9,16,.55)",
                border: `1px solid ${N.lineSoft}`,
                padding: ".5em 1em",
                borderRadius: 100,
                fontFamily: N.mono,
                fontSize: ".72rem",
                letterSpacing: ".24em",
                textTransform: "uppercase",
                color: N.smoke,
              }}
            >
              <span
                aria-hidden
                style={{ width: 7, height: 7, borderRadius: "50%", background: N.coral, boxShadow: `0 0 12px ${N.coral}`, animation: "nocta-pulse 2.4s infinite" }}
              />
              {t.kicker}
            </div>

            <h1
              className="nocta-flicker"
              style={{
                fontFamily: N.display,
                fontWeight: 800,
                fontSize: "clamp(4rem,15vw,12rem)",
                lineHeight: 0.85,
                letterSpacing: "-.04em",
                ...gradText,
                filter: "drop-shadow(0 0 38px rgba(255,93,87,.28))",
              }}
            >
              LIEUX
            </h1>

            <p
              style={{
                fontFamily: N.serif,
                fontStyle: "italic",
                fontSize: "clamp(1.5rem,4vw,2.6rem)",
                color: N.cream,
                marginTop: ".6rem",
                lineHeight: 1.15,
                maxWidth: "20ch",
              }}
            >
              {t.h1a}{" "}
              <b style={{ fontStyle: "normal", fontFamily: N.display, fontWeight: 700, ...gradText }}>{t.h1b}</b>
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "2.6rem" }}>
              <Link href="/#contact" className="nocta-btn">
                {t.cta}
              </Link>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: ".6rem", marginTop: "3rem" }}>
              {t.types.map((ty) => (
                <span key={ty} className="nocta-chip">
                  {ty}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* LE CONSTAT */}
        <section className="nocta-sec" style={{ borderTop: `1px solid ${N.lineSoft}`, background: N.ink2 }}>
          <div className="nocta-wrap" style={{ maxWidth: 820 }}>
            <Eyebrow>{t.lFinding}</Eyebrow>
            <p style={{ fontSize: "clamp(1.05rem,1.7vw,1.3rem)", color: N.smoke, marginBottom: "1.6rem" }}>
              {t.findingA}
              <b style={{ color: N.cream, fontWeight: 600 }}>{t.findingStrong}</b>
              {t.findingB}
              <b style={{ color: N.cream, fontWeight: 600 }}>{t.findingC}</b>
            </p>
            <p style={{ fontSize: "clamp(1.05rem,1.7vw,1.3rem)", color: N.smoke }}>
              {t.findingD}
              <b style={{ fontFamily: N.display, fontWeight: 700, ...gradText }}>{t.findingE}</b>
            </p>
          </div>
        </section>

        {/* LE SPRINT */}
        <section className="nocta-sec" style={{ borderTop: `1px solid ${N.lineSoft}` }}>
          <div className="nocta-wrap">
            <div style={{ marginBottom: "clamp(2.5rem,5vw,4rem)" }}>
              <Eyebrow>{t.lSprint}</Eyebrow>
              <h2 style={{ fontSize: "clamp(2.1rem,5.5vw,4rem)", lineHeight: 1.04 }}>{t.sprintH2}</h2>
            </div>

            <div style={{ display: "grid", gap: "1.1rem" }}>
              {t.steps.map((s) => (
                <div key={s.n} className="nocta-card" style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "auto 1fr" }}>
                  <div style={{ fontFamily: N.mono, fontSize: "1.6rem", fontWeight: 700, ...gradText }}>{s.n}</div>
                  <div>
                    <h3 style={{ fontSize: "clamp(1.35rem,3vw,2.1rem)", lineHeight: 1.1, marginBottom: ".8rem" }}>{s.title}</h3>
                    <p style={{ color: N.smoke, marginBottom: "1.2rem" }}>{s.body}</p>
                    <ul style={{ listStyle: "none", display: "grid", gap: ".5rem", padding: 0, margin: 0 }}>
                      {s.items.map((it) => (
                        <li key={it} style={{ display: "flex", gap: ".7rem", fontSize: ".92rem", color: N.smokeDim }}>
                          <span aria-hidden style={{ color: N.coral }}>
                            ✦
                          </span>
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LA DIFFÉRENCE */}
        <section className="nocta-sec" style={{ borderTop: `1px solid ${N.lineSoft}`, background: N.ink2 }}>
          <div className="nocta-wrap">
            <div style={{ marginBottom: "2.6rem" }}>
              <Eyebrow iris>{t.lDiff}</Eyebrow>
              <h2 style={{ fontSize: "clamp(2.1rem,5.5vw,4rem)", lineHeight: 1.04, marginBottom: "1.2rem" }}>{t.diffH2}</h2>
              <p style={{ fontSize: "clamp(1.1rem,1.8vw,1.4rem)", color: N.smoke, maxWidth: "60ch" }}>{t.diffLead}</p>
            </div>
            <CompareSlider
              leftTitle={t.diffLeftTitle}
              leftBody={t.diffLeftBody}
              rightTitle={t.diffRightTitle}
              rightBody={t.diffRightBody}
              hint={t.diffHint}
            />

            <div style={{ display: "grid", gap: "1.1rem", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", marginTop: "3rem" }}>
              {t.stats.map((s) => (
                <div key={s.label} className="nocta-card" style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: N.display, fontWeight: 800, fontSize: "clamp(2.2rem,5vw,3.2rem)", lineHeight: 1, ...gradText }}>
                    {s.n}
                  </div>
                  <div style={{ marginTop: ".8rem", fontFamily: N.mono, fontSize: ".68rem", letterSpacing: ".2em", textTransform: "uppercase", color: N.smokeDim }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CE QUE ÇA COÛTE */}
        <section className="nocta-sec" style={{ borderTop: `1px solid ${N.lineSoft}` }}>
          <div className="nocta-wrap">
            <div style={{ marginBottom: "2.6rem" }}>
              <Eyebrow>{t.lPrice}</Eyebrow>
              <h2 style={{ fontSize: "clamp(2.1rem,5.5vw,4rem)", lineHeight: 1.04, marginBottom: "1.2rem" }}>{t.priceH2}</h2>
              <p style={{ fontSize: "clamp(1.1rem,1.8vw,1.4rem)", color: N.smoke, maxWidth: "60ch" }}>{t.priceLead}</p>
            </div>

            <div style={{ display: "grid", gap: "1.1rem", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))" }}>
              <div className="nocta-card" style={{ filter: "grayscale(1) brightness(.85)" }}>
                <div style={{ fontFamily: N.mono, fontSize: ".7rem", letterSpacing: ".2em", textTransform: "uppercase", color: N.smokeDim, marginBottom: ".7rem" }}>
                  {t.agencyTitle}
                </div>
                <div style={{ fontFamily: N.display, fontWeight: 700, fontSize: "clamp(1.3rem,2.4vw,1.8rem)", marginBottom: "1rem" }}>
                  {t.agencyPrice}
                </div>
                <p style={{ color: N.smoke, fontSize: ".95rem" }}>{t.agencyBody}</p>
              </div>
              <div className="nocta-card" style={{ borderColor: "rgba(255,93,87,.35)", background: "rgba(255,93,87,.05)" }}>
                <div style={{ fontFamily: N.mono, fontSize: ".7rem", letterSpacing: ".2em", textTransform: "uppercase", color: N.coral, marginBottom: ".7rem" }}>
                  {t.sprintTitle}
                </div>
                <div style={{ fontFamily: N.display, fontWeight: 700, fontSize: "clamp(1.3rem,2.4vw,1.8rem)", marginBottom: "1rem", ...gradText }}>
                  {t.sprintPrice}
                </div>
                <p style={{ color: N.smoke, fontSize: ".95rem" }}>{t.sprintBody}</p>
              </div>
            </div>
          </div>
        </section>

        {/* QUI ÉCRIT */}
        <section className="nocta-sec" style={{ borderTop: `1px solid ${N.lineSoft}`, background: N.ink2 }}>
          <div className="nocta-wrap" style={{ maxWidth: 800 }}>
            <Eyebrow iris>{t.lWho}</Eyebrow>
            <h2 style={{ fontSize: "clamp(2.1rem,5.5vw,4rem)", lineHeight: 1.04, marginBottom: "1.4rem" }}>{t.whoH2}</h2>
            <p style={{ color: N.smoke, fontSize: "clamp(1rem,1.6vw,1.2rem)" }}>{t.whoBody}</p>
          </div>
        </section>

        {/* FAQ — l'accordéon de NOCTA : cartes arrondies 14px, question en
            Bricolage semi-gras, "+" corail qui pivote en croix à
            l'ouverture, réponse dépliée par transition de grid-template-rows
            (la seule façon d'animer une hauteur automatique en CSS pur). */}
        <section className="nocta-sec" style={{ borderTop: `1px solid ${N.lineSoft}` }}>
          <div className="nocta-wrap" style={{ maxWidth: 860 }}>
            <Eyebrow>{t.faqEyebrow}</Eyebrow>
            <h2 style={{ fontSize: "clamp(2.1rem,5.5vw,4rem)", lineHeight: 1.04, marginBottom: "2.4rem" }}>{t.faqTitle}</h2>
            <div style={{ display: "grid", gap: ".8rem" }}>
              {t.faq.map((f, i) => (
                <FaqItem key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="nocta-sec" style={{ borderTop: `1px solid ${N.lineSoft}`, textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(55% 60% at 50% 45%, rgba(123,108,255,.16), transparent 65%)",
            }}
          />
          <div className="nocta-wrap" style={{ position: "relative", maxWidth: 720 }}>
            <h2 style={{ fontSize: "clamp(2.1rem,5.5vw,4rem)", lineHeight: 1.04, marginBottom: "1.2rem" }}>{t.ctaH2}</h2>
            <p style={{ fontSize: "clamp(1.1rem,1.8vw,1.4rem)", color: N.smoke, margin: "0 auto 2.4rem" }}>{t.ctaBody}</p>
            <Link href="/#contact" className="nocta-btn">
              {t.ctaBtn}
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}

/**
 * Le comparateur à glisser — repris de NOCTA.
 *
 * Une seule zone, deux réalités superposées, une poignée qui découpe l'une
 * dans l'autre. Le geste porte l'argument : on ne lit pas la différence, on
 * la fait apparaître soi-même. Souris, doigt et clavier ; l'input range est
 * masqué visuellement mais conservé, pour que la valeur soit annoncée aux
 * lecteurs d'écran.
 */
function CompareSlider({
  leftTitle,
  leftBody,
  rightTitle,
  rightBody,
  hint,
}: {
  leftTitle: string
  leftBody: string
  rightTitle: string
  rightBody: string
  hint: string
}) {
  const [pct, setPct] = useState(50)
  const boxRef = useRef<HTMLDivElement | null>(null)
  const dragging = useRef(false)

  useEffect(() => {
    const move = (clientX: number) => {
      const el = boxRef.current
      if (!el) return
      const r = el.getBoundingClientRect()
      setPct(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)))
    }
    const onMouse = (e: MouseEvent) => dragging.current && move(e.clientX)
    const onTouch = (e: TouchEvent) => dragging.current && move(e.touches[0].clientX)
    const stop = () => {
      dragging.current = false
    }
    window.addEventListener("mousemove", onMouse)
    window.addEventListener("touchmove", onTouch)
    window.addEventListener("mouseup", stop)
    window.addEventListener("touchend", stop)
    return () => {
      window.removeEventListener("mousemove", onMouse)
      window.removeEventListener("touchmove", onTouch)
      window.removeEventListener("mouseup", stop)
      window.removeEventListener("touchend", stop)
    }
  }, [])

  return (
    <div>
      <div
        ref={boxRef}
        style={{ position: "relative", overflow: "hidden", borderRadius: 18, border: `1px solid ${N.lineSoft}`, cursor: "ew-resize", userSelect: "none" }}
        onMouseDown={() => {
          dragging.current = true
        }}
        onTouchStart={() => {
          dragging.current = true
        }}
      >
        <div style={{ background: "linear-gradient(160deg, #1b1030 0%, #0a0910 100%)", padding: "clamp(2rem,5vw,4rem)" }}>
          <div style={{ marginLeft: "auto", maxWidth: 400, textAlign: "right" }}>
            <div style={{ fontFamily: N.mono, fontSize: ".7rem", letterSpacing: ".2em", textTransform: "uppercase", color: N.irisSoft, marginBottom: ".7rem" }}>
              {rightTitle}
            </div>
            <p style={{ color: N.cream, fontSize: ".98rem" }}>{rightBody}</p>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: N.card,
            filter: "grayscale(1) brightness(.8)",
            padding: "clamp(2rem,5vw,4rem)",
            clipPath: `inset(0 ${100 - pct}% 0 0)`,
          }}
        >
          <div style={{ maxWidth: 400 }}>
            <div style={{ fontFamily: N.mono, fontSize: ".7rem", letterSpacing: ".2em", textTransform: "uppercase", color: N.smokeDim, marginBottom: ".7rem" }}>
              {leftTitle}
            </div>
            <p style={{ color: N.smoke, fontSize: ".98rem" }}>{leftBody}</p>
          </div>
        </div>

        <div style={{ position: "absolute", top: 0, bottom: 0, width: 2, background: N.grad, left: `${pct}%`, pointerEvents: "none" }}>
          <div
            style={{
              position: "absolute",
              top: "50%",
              transform: "translate(-50%,-50%)",
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: N.ink,
              border: `1px solid ${N.coral}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: N.coral,
              fontFamily: N.mono,
              fontSize: ".8rem",
              boxShadow: "0 0 24px rgba(255,93,87,.35)",
            }}
          >
            ⇄
          </div>
        </div>
      </div>

      <input type="range" min={0} max={100} value={pct} aria-label={hint} onChange={(e) => setPct(Number(e.target.value))} className="sr-only" />
      <div style={{ marginTop: "1rem", textAlign: "center", fontFamily: N.mono, fontSize: ".66rem", letterSpacing: ".3em", textTransform: "uppercase", color: N.smokeDim }}>
        {hint}
      </div>
    </div>
  )
}

/** Une entrée de la FAQ, reprise du comportement de NOCTA. */
function FaqItem({ q, a, defaultOpen }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(Boolean(defaultOpen))
  return (
    <div
      style={{
        border: `1px solid ${open ? N.line : N.lineSoft}`,
        borderRadius: 14,
        background: N.ink2,
        overflow: "hidden",
        transition: "border-color .4s",
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        style={{
          width: "100%",
          textAlign: "left",
          background: "none",
          border: 0,
          cursor: "pointer",
          color: N.cream,
          fontFamily: N.display,
          fontWeight: 600,
          fontSize: "clamp(1.02rem,2vw,1.22rem)",
          padding: "1.15rem 1.4rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <span>{q}</span>
        <span
          aria-hidden
          style={{
            fontFamily: N.mono,
            color: N.coral,
            flex: "none",
            fontSize: "1.2rem",
            transition: "transform .35s cubic-bezier(.22,.61,.36,1)",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          +
        </span>
      </button>
      <div
        style={{
          display: "grid",
          gridTemplateRows: open ? "1fr" : "0fr",
          transition: "grid-template-rows .35s cubic-bezier(.22,.61,.36,1)",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <p style={{ color: N.smoke, padding: "0 1.4rem 1.25rem", fontSize: ".97rem", margin: 0 }}>{a}</p>
        </div>
      </div>
    </div>
  )
}
