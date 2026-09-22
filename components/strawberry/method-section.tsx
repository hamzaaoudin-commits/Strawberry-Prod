"use client"

import { useEffect, useRef, useState } from "react"
import { pick } from "@/lib/t"
import type { Lang } from "@/lib/lang"
import { ViewTracker } from "@/components/strawberry/view-tracker"

/**
 * MethodSection — les cinq étapes, une seule fois, avec les vraies icônes.
 *
 * Ce bloc vivait sur les quatre pages de terrain, en langage propre à
 * chacune (« votre lieu », « en salle », « le barman »…). Seule THE ROOM
 * portait la version réellement écrite ; les trois autres héritaient du
 * même texte par défaut sans jamais l'avoir adapté.
 *
 * La première version de cette section, sur la home, remplaçait le dessin
 * à la main de chaque lettre par une simple lettre en gros caractères —
 * une facilité qui a fait perdre le design que la méthode avait sur les
 * pages de terrain. Les cinq icônes ci-dessous sont les tracés SVG
 * originaux, recopiés tels quels. Ce qui n'est PAS repris, volontairement :
 * la feuille de style `nocta/styles.css` elle-même, dont plusieurs classes
 * (`.tour-scene`, `.tour-pin`, `.ts-k`…) entrent en collision directe avec
 * celles de la tournée moderne juste au-dessus sur cette même page — la
 * charger aurait cassé la tournée pour récupérer la méthode.
 */

function StepIcon({ n }: { n: number }) {
  const brand = "#ff2233"
  const soft = "#ff8352"
  const common = { viewBox: "0 0 120 120", "aria-hidden": true, className: "h-14 w-14" } as const
  if (n === 1)
    return (
      <svg {...common}>
        <circle cx="52" cy="52" r="22" stroke={brand} strokeWidth="2.4" fill="none" strokeLinecap="round" />
        <path d="M68 68 L92 92" stroke={brand} strokeWidth="2.4" fill="none" strokeLinecap="round" />
        <path d="M40 52 h24 M52 40 v24" stroke={soft} strokeWidth="2.4" fill="none" strokeLinecap="round" opacity=".45" />
        <circle cx="98" cy="30" r="3.5" fill={soft} />
        <circle cx="22" cy="88" r="3" fill={brand} />
      </svg>
    )
  if (n === 2)
    return (
      <svg {...common}>
        <rect x="22" y="24" width="56" height="72" rx="7" stroke={soft} strokeWidth="2.4" fill="none" />
        <line x1="34" y1="42" x2="70" y2="42" stroke={brand} strokeWidth="2.4" strokeLinecap="round" />
        <line x1="34" y1="54" x2="66" y2="54" stroke={soft} strokeWidth="2.4" strokeLinecap="round" opacity=".5" />
        <line x1="34" y1="64" x2="58" y2="64" stroke={soft} strokeWidth="2.4" strokeLinecap="round" opacity=".35" />
        <path d="M78 78 l18 -18 a5 5 0 0 0 -7 -7 l-18 18 z" stroke={brand} strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M71 71 l-4 11 11 -4 z" fill={brand} />
      </svg>
    )
  if (n === 3)
    return (
      <svg {...common}>
        <path d="M26 26 h68 v68 h-68 z" stroke={soft} strokeWidth="2.4" fill="none" />
        <line x1="26" y1="46" x2="94" y2="46" stroke={brand} strokeWidth="2.4" strokeLinecap="round" />
        <line x1="46" y1="46" x2="46" y2="94" stroke={soft} strokeWidth="2.4" strokeLinecap="round" opacity=".5" />
        <circle cx="36" cy="36" r="3" fill={brand} />
        <path d="M56 62 h28 M56 74 h20" stroke={brand} strokeWidth="2.4" strokeLinecap="round" opacity=".7" />
      </svg>
    )
  if (n === 4)
    return (
      <svg {...common}>
        <rect x="20" y="48" width="66" height="46" rx="6" stroke={soft} strokeWidth="2.4" fill="none" />
        <path d="M20 60 h66" stroke={brand} strokeWidth="2.4" strokeLinecap="round" />
        <path d="M22 34 l60 -10 4 14 -60 10 z" stroke={soft} strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M38 27 l4 13 M54 24 l4 13 M70 21 l4 13" stroke={brand} strokeWidth="2.4" strokeLinecap="round" opacity=".7" />
        <circle cx="96" cy="74" r="4" fill={soft} />
      </svg>
    )
  return (
    <svg {...common}>
      <rect x="20" y="30" width="38" height="60" rx="8" stroke={soft} strokeWidth="2.4" fill="none" />
      <rect x="62" y="30" width="38" height="60" rx="8" stroke={brand} strokeWidth="2.4" fill="none" />
      <path
        d="M81 48 l4 9 10 1 -7 7 2 10 -9 -5 -9 5 2 -10 -7 -7 10 -1 z"
        fill={soft}
      />
      <line x1="28" y1="50" x2="50" y2="50" stroke={soft} strokeWidth="2.4" strokeLinecap="round" opacity=".5" />
      <line x1="28" y1="60" x2="44" y2="60" stroke={soft} strokeWidth="2.4" strokeLinecap="round" opacity=".35" />
    </svg>
  )
}

const T = {
  fr: {
    kicker: "L'Architecture · la méthode S.T.R.A.W.",
    title: "On lit, on compare, on tranche.",
    lead: "Cinq étapes, le même déroulé quel que soit ce que vous vendez.",
    steps: [
      { i: "S", t: "Nous venons chez vous.", d: "Vos supports, vos équipes, vos clients. Ce qui se répète sans qu'on s'en rende compte. La matière est déjà là — nous venons la lire." },
      { i: "T", t: "Nous écrivons votre monde.", d: "Ce que votre maison promet en une phrase. Sa voix, son ton, ses rituels. Son casting — vous, vos équipes, votre offre — traité comme des personnages." },
      { i: "R", t: "Nous posons la ligne et les mots.", d: "Trois à cinq territoires récurrents, nommés, avec ce qu'ils cherchent à provoquer. Le vocabulaire de la maison : ce qu'on dit, ce qu'on ne dit jamais." },
      { i: "A", t: "Nous vous laissons le manuel.", d: "Les playbooks, prêts à l'emploi pour vos équipes. Un calendrier qui tourne en boucle. Les textes réécrits, prêts à coller." },
      { i: "W", t: "Et nous vous le prouvons.", d: "Avant de partir, nous relisons le document avec vous — pas pour vous rendre dépendant : pour que vous le voyiez tenir, en vrai, avant de le prendre en main." },
    ],
  },
  en: {
    kicker: "The Architecture · the S.T.R.A.W. method",
    title: "We read, we compare, we settle.",
    lead: "Five steps, the same sequence whatever you sell.",
    steps: [
      { i: "S", t: "We come to you.", d: "Your supports, your teams, your customers. What repeats without anyone noticing. The material is already there — we come to read it." },
      { i: "T", t: "We write your world.", d: "What your house promises in one sentence. Its voice, its tone, its rituals. Its cast — you, your teams, your offer — treated as characters." },
      { i: "R", t: "We set the line and the words.", d: "Three to five recurring territories, named, with what each is meant to provoke. The house's vocabulary: what to say, what never to say." },
      { i: "A", t: "We leave you the manual.", d: "Playbooks, ready to use for your teams. A calendar that runs on repeat. The copy, rewritten and ready to paste." },
      { i: "W", t: "And we prove it works.", d: "Before we leave, we read the document with you — not to make you dependent: so you see it hold, for real, before you take it over." },
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
              {/* L'icône dessinée à la main, recopiée du gabarit de terrain :
                  c'est elle qui distinguait cette section d'une simple liste
                  numérotée, et qui manquait dans la première version. */}
              <StepIcon n={i + 1} />
              <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-brand">{s.i}</div>
              <h3 className="mt-2 font-serif text-[16.5px] font-bold leading-tight text-white">{s.t}</h3>
              <p className="mt-2.5 font-sans text-[13px] leading-[1.6] text-chalk-55">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
