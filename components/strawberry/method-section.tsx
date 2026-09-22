"use client"

import { useEffect, useRef, useState } from "react"
import { pick } from "@/lib/t"
import type { Lang } from "@/lib/lang"
import { ViewTracker } from "@/components/strawberry/view-tracker"

/**
 * MethodSection — les cinq étapes, une seule fois.
 *
 * Ce bloc vivait sur les quatre pages de terrain, en langage propre à
 * chacune (« votre lieu », « en salle », « le barman »…). Seule THE ROOM
 * portait la version réellement écrite ; les trois autres héritaient du
 * même texte par défaut sans jamais l'avoir adapté — un restaurateur lisait
 * donc « votre lieu » sur la page marques. La méthode elle-même — S.T.R.A.W. —
 * est strictement identique d'un terrain à l'autre : elle n'avait donc
 * aucune raison d'être répétée quatre fois, mal, plutôt qu'une fois, bien.
 */

const T = {
  fr: {
    kicker: "L'Architecture · la méthode S.T.R.A.W.",
    title: "On lit, on compare, on tranche.",
    lead: "Cinq étapes, le même déroulé quel que soit ce que vous vendez.",
    steps: [
      {
        i: "S",
        t: "Nous venons chez vous.",
        d: "Vos supports, vos équipes, vos clients. Ce qui se répète sans qu'on s'en rende compte. La matière est déjà là — nous venons la lire.",
      },
      {
        i: "T",
        t: "Nous écrivons votre monde.",
        d: "Ce que votre maison promet en une phrase. Sa voix, son ton, ses rituels. Son casting — vous, vos équipes, votre offre — traité comme des personnages.",
      },
      {
        i: "R",
        t: "Nous posons la ligne et les mots.",
        d: "Trois à cinq territoires récurrents, nommés, avec ce qu'ils cherchent à provoquer. Le vocabulaire de la maison : ce qu'on dit, ce qu'on ne dit jamais.",
      },
      {
        i: "A",
        t: "Nous vous laissons le manuel.",
        d: "Les playbooks, prêts à l'emploi pour vos équipes. Un calendrier qui tourne en boucle. Les textes réécrits, prêts à coller.",
      },
      {
        i: "W",
        t: "Et nous vous le prouvons.",
        d: "Avant de partir, nous relisons le document avec vous — pas pour vous rendre dépendant : pour que vous le voyiez tenir, en vrai, avant de le prendre en main.",
      },
    ],
  },
  en: {
    kicker: "The Architecture · the S.T.R.A.W. method",
    title: "We read, we compare, we settle.",
    lead: "Five steps, the same sequence whatever you sell.",
    steps: [
      {
        i: "S",
        t: "We come to you.",
        d: "Your supports, your teams, your customers. What repeats without anyone noticing. The material is already there — we come to read it.",
      },
      {
        i: "T",
        t: "We write your world.",
        d: "What your house promises in one sentence. Its voice, its tone, its rituals. Its cast — you, your teams, your offer — treated as characters.",
      },
      {
        i: "R",
        t: "We set the line and the words.",
        d: "Three to five recurring territories, named, with what each is meant to provoke. The house's vocabulary: what to say, what never to say.",
      },
      {
        i: "A",
        t: "We leave you the manual.",
        d: "Playbooks, ready to use for your teams. A calendar that runs on repeat. The copy, rewritten and ready to paste.",
      },
      {
        i: "W",
        t: "And we prove it works.",
        d: "Before we leave, we read the document with you — not to make you dependent: so you see it hold, for real, before you take it over.",
      },
    ],
  },
}

export function MethodSection({ lang }: { lang: Lang }) {
  const t = pick(T, lang)
  const ref = useRef<HTMLDivElement | null>(null)
  const [vis, setVis] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVis(true)
          io.disconnect()
        }
      },
      { threshold: 0.12 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section className="section border-t border-hair bg-ink-soft">
      <ViewTracker name="method_section" />
      <div className="shell">
        <div className="mb-12 text-center">
          <div className="kicker mb-4">{t.kicker}</div>
          <h2 className="h-section mx-auto max-w-[640px]">{t.title}</h2>
          <p className="mx-auto mt-4 max-w-[520px] font-sans text-[14.5px] leading-[1.7] text-chalk-55">
            {t.lead}
          </p>
        </div>

        {/* Cinq cartes, une par lettre. Pas le carrousel à glisser de
            l'ancien gabarit — trop de mécanique JS pour un contenu qui se
            lit très bien en grille, et cinq colonnes tiennent large sur un
            écran de bureau. */}
        <div ref={ref} className="grid gap-px bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-5">
          {t.steps.map((s, i) => (
            <div
              key={s.i}
              className="bg-ink-soft px-6 py-8 transition-all duration-700 ease-[cubic-bezier(.22,.68,0,1)]"
              style={{
                opacity: vis ? 1 : 0,
                transform: vis ? "translateY(0)" : "translateY(10px)",
                transitionDelay: `${i * 90}ms`,
              }}
            >
              <div className="font-serif text-[2rem] font-bold leading-none text-brand">{s.i}</div>
              <h3 className="mt-4 font-serif text-[16.5px] font-bold leading-tight text-white">{s.t}</h3>
              <p className="mt-2.5 font-sans text-[13px] leading-[1.6] text-chalk-55">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
