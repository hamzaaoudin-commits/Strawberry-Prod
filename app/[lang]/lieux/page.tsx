"use client"

import { useEffect, useRef, useState } from "react"
import { LocaleLink as Link } from "@/components/locale-link"
import { useT } from "@/lib/i18n"
import { NavBar } from "@/components/strawberry/navbar"
import { Footer } from "@/components/strawberry/footer"
import { FaqSection } from "@/components/strawberry/faq-section"
import { FAQ_LIEUX } from "@/lib/faqs"
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
    ctaBtn: "Get in touch →",
  },
}

export default function LieuxPage() {
  const t = useT(T)

  return (
    <main className="min-h-screen bg-ink text-white">
      <ViewTracker name="lieux" />
      <NavBar />

      {/* HERO */}
      <section className="section relative overflow-hidden pt-32">
        <div className="glow-center" aria-hidden />
        <div className="shell relative">
          <div className="pill mb-8">{t.kicker}</div>
          <h1 className="mb-10 max-w-[900px] font-serif text-[clamp(2.2rem,6vw,4.6rem)] font-bold leading-[1.06] tracking-[-0.03em]">
            {t.h1a}
            <br />
            <span className="text-gradient">{t.h1b}</span>
          </h1>
          <Link href="/#contact" className="btn-primary">
            {t.cta}
          </Link>

          {/* Les typologies de lieux, en chips — repris tel quel de NOCTA. */}
          <div className="mt-14 flex flex-wrap gap-2.5">
            {t.types.map((ty) => (
              <span
                key={ty}
                className="border border-hair px-4 py-2 font-sans text-[12.5px] uppercase tracking-[0.12em] text-chalk-55"
              >
                {ty}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* LE CONSTAT */}
      <section className="section border-t border-hair bg-ink-soft">
        <div className="shell mx-auto max-w-[780px]">
          <div className="kicker mb-6">{t.lFinding}</div>
          <p className="mb-6 font-sans text-[17px] leading-[1.75] text-chalk-65">
            {t.findingA}
            <strong className="font-semibold text-white">{t.findingStrong}</strong>
            {t.findingB}
            <strong className="font-semibold text-white">{t.findingC}</strong>
          </p>
          <p className="font-sans text-[17px] leading-[1.75] text-chalk-65">
            {t.findingD}
            <strong className="font-semibold text-brand">{t.findingE}</strong>
          </p>
        </div>
      </section>

      {/* LE SPRINT */}
      <section className="section border-t border-hair">
        <div className="shell">
          <div className="mx-auto mb-16 max-w-[720px] text-center">
            <div className="kicker mb-6">{t.lSprint}</div>
            <h2 className="h-section">{t.sprintH2}</h2>
          </div>

          <div className="mx-auto grid max-w-[980px] gap-px bg-white/10">
            {t.steps.map((s) => (
              <div
                key={s.n}
                className="grid gap-6 bg-ink px-6 py-10 sm:grid-cols-[auto_1fr] sm:gap-10 sm:px-10"
              >
                <div className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] font-bold leading-none text-brand">
                  {s.n}
                </div>
                <div>
                  <h3 className="mb-3 font-serif text-[clamp(1.2rem,2vw,1.6rem)] font-semibold tracking-[-0.02em] text-white">
                    {s.title}
                  </h3>
                  <p className="m-0 mb-5 font-sans text-[15.5px] leading-[1.75] text-chalk-65">{s.body}</p>
                  <ul className="m-0 list-none space-y-2 p-0">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-baseline gap-3 font-sans text-[13.5px] text-chalk-55">
                        <span aria-hidden className="text-[0.8em] text-brand">
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

      {/* LA DIFFÉRENCE — comparateur à glisser */}
      <section className="section border-t border-hair bg-ink-soft">
        <div className="shell">
          <div className="mx-auto mb-12 max-w-[720px] text-center">
            <div className="kicker mb-6">{t.lDiff}</div>
            <h2 className="h-section mb-6">{t.diffH2}</h2>
            <p className="lede">{t.diffLead}</p>
          </div>
          <CompareSlider
            leftTitle={t.diffLeftTitle}
            leftBody={t.diffLeftBody}
            rightTitle={t.diffRightTitle}
            rightBody={t.diffRightBody}
            hint={t.diffHint}
          />

          {/* Les trois chiffres. */}
          <div className="mx-auto mt-14 grid max-w-[880px] gap-px bg-white/10 sm:grid-cols-3">
            {t.stats.map((s, i) => (
              <div key={s.label} className="bg-ink px-6 py-8 text-center">
                <div className="mb-1 font-sans text-[10px] uppercase tracking-[0.2em] text-chalk-40">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="font-serif text-[clamp(2rem,4vw,2.8rem)] font-bold leading-none text-gradient">
                  {s.n}
                </div>
                <div className="mt-3 font-sans text-[12.5px] leading-snug text-chalk-55">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CE QUE ÇA COÛTE */}
      <section className="section border-t border-hair">
        <div className="shell">
          <div className="mx-auto mb-14 max-w-[720px] text-center">
            <div className="kicker mb-6">{t.lPrice}</div>
            <h2 className="h-section mb-6">{t.priceH2}</h2>
            <p className="lede">{t.priceLead}</p>
          </div>

          <div className="mx-auto grid max-w-[900px] gap-px bg-white/10 sm:grid-cols-2">
            <div className="bg-ink px-7 py-9 [filter:grayscale(1)_brightness(0.85)]">
              <div className="mb-2 font-sans text-[11px] uppercase tracking-[0.18em] text-chalk-40">
                {t.agencyTitle}
              </div>
              <div className="mb-4 font-serif text-[clamp(1.3rem,2.4vw,1.7rem)] font-bold text-white">
                {t.agencyPrice}
              </div>
              <p className="m-0 font-sans text-[14.5px] leading-relaxed text-chalk-55">{t.agencyBody}</p>
            </div>
            <div className="border border-brand-hair bg-brand/[0.04] px-7 py-9">
              <div className="mb-2 font-sans text-[11px] uppercase tracking-[0.18em] text-brand">
                {t.sprintTitle}
              </div>
              <div className="mb-4 font-serif text-[clamp(1.3rem,2.4vw,1.7rem)] font-bold text-gradient">
                {t.sprintPrice}
              </div>
              <p className="m-0 font-sans text-[14.5px] leading-relaxed text-chalk-75">{t.sprintBody}</p>
            </div>
          </div>
        </div>
      </section>

      {/* QUI ÉCRIT */}
      <section className="section border-t border-hair bg-ink-soft">
        <div className="shell mx-auto max-w-[760px]">
          <div className="kicker mb-6">{t.lWho}</div>
          <h2 className="h-section mb-6">{t.whoH2}</h2>
          <p className="font-sans text-[16.5px] leading-[1.8] text-chalk-65">{t.whoBody}</p>
        </div>
      </section>

      <FaqSection faqs={FAQ_LIEUX} />

      {/* CTA */}
      <section className="section relative overflow-hidden border-t border-hair text-center">
        <div className="glow-center" aria-hidden />
        <div className="shell relative mx-auto max-w-[680px]">
          <h2 className="h-section mb-6">{t.ctaH2}</h2>
          <p className="lede mb-10">{t.ctaBody}</p>
          <Link href="/#contact" className="btn-primary">
            {t.ctaBtn}
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

/**
 * Le comparateur à glisser — repris de NOCTA.
 *
 * Une seule zone, deux réalités superposées, une poignée qui découpe l'une
 * dans l'autre. Le geste porte l'argument : on ne lit pas la différence, on
 * la fait apparaître soi-même.
 *
 * Le curseur se pilote à la souris, au doigt et au clavier (flèches gauche
 * et droite), et l'input range reste présent — masqué visuellement, pas
 * retiré — pour que la valeur soit annoncée aux lecteurs d'écran.
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
      const next = ((clientX - r.left) / r.width) * 100
      setPct(Math.min(100, Math.max(0, next)))
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
    <div className="mx-auto max-w-[900px]">
      <div
        ref={boxRef}
        className="relative select-none overflow-hidden border border-hair"
        style={{ cursor: "ew-resize" }}
        onMouseDown={() => {
          dragging.current = true
        }}
        onTouchStart={() => {
          dragging.current = true
        }}
      >
        {/* Réalité de droite : le fond. */}
        <div className="bg-[linear-gradient(160deg,#1a0d0e_0%,#0a0a0a_100%)] px-7 py-12 sm:px-12 sm:py-16">
          <div className="ml-auto max-w-[380px] text-right">
            <div className="mb-2 font-sans text-[11px] uppercase tracking-[0.18em] text-brand">{rightTitle}</div>
            <p className="m-0 font-sans text-[15px] leading-relaxed text-chalk-75">{rightBody}</p>
          </div>
        </div>

        {/* Réalité de gauche : découpée par la poignée. */}
        <div
          className="absolute inset-0 bg-[#0d0d0d] px-7 py-12 [filter:grayscale(1)_brightness(0.8)] sm:px-12 sm:py-16"
          style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}
        >
          <div className="max-w-[380px]">
            <div className="mb-2 font-sans text-[11px] uppercase tracking-[0.18em] text-chalk-40">{leftTitle}</div>
            <p className="m-0 font-sans text-[15px] leading-relaxed text-chalk-55">{leftBody}</p>
          </div>
        </div>

        {/* La poignée. */}
        <div className="pointer-events-none absolute inset-y-0 w-[2px] bg-brand" style={{ left: `${pct}%` }}>
          <div className="absolute top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-brand bg-ink font-sans text-[13px] text-brand">
            ⇄
          </div>
        </div>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={pct}
        aria-label={hint}
        onChange={(e) => setPct(Number(e.target.value))}
        className="sr-only"
      />
      <div className="mt-4 text-center font-sans text-[11px] uppercase tracking-[0.18em] text-chalk-40">{hint}</div>
    </div>
  )
}
