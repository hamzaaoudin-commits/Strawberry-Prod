"use client"

import { useEffect, useRef, useState } from "react"
import { pick } from "@/lib/t"
import type { Lang } from "@/lib/lang"
import { ViewTracker } from "@/components/strawberry/view-tracker"

/**
 * WhySection — pourquoi ce studio existe.
 *
 * Le texte vivait sur la page Studio, où presque personne ne va. C'est
 * pourtant lui qui explique pourquoi l'offre a une raison d'être : la
 * qualité ne distingue plus, l'IA accélère l'uniformisation, et ce qui
 * reste ne peut pas être généré.
 *
 * Placé sur la home juste après le diagnostic — une fois le problème du
 * lecteur posé, on élargit à la cause commune — et avant qu'on ne
 * présente ce qu'on livre.
 */

const T = {
  fr: {
    kicker: "Pourquoi ce studio existe",
    h2: "Chaque marché finit par s'accorder sur la façon dont on doit parler de lui.",
    p1: "Les fondateurs adoptent les mots de leur catégorie parce que le langage est contagieux. L'IA accélère cet effondrement — en générant, à l'infini, les mêmes documents de marque qui se ressemblent déjà.",
    p2: "Dans ce bruit, la qualité ne suffit plus. Tout le monde est devenu compétent.",
    punch: "Ce qui ne peut pas être généré, c'est un choix.",
    verses: ["Un vrai choix.", "Ce que vous défendez.", "Ce que vous refusez.", "La place que vous décidez d'occuper."],
    close:
      "C'est pour cela que ce studio existe : construire l'identité narrative qui naît de ces choix — et donner au monde une raison de vous reconnaître.",
  },
  en: {
    kicker: "Why this studio exists",
    h2: "Every market eventually agrees on how it should be spoken about.",
    p1: "Founders adopt the words of their category because language is contagious. AI accelerates that collapse — generating, endlessly, the same brand documents that already look alike.",
    p2: "In that noise, quality is no longer enough. Everyone has become competent.",
    punch: "What cannot be generated is a choice.",
    verses: ["A real choice.", "What you stand for.", "What you refuse.", "The ground you decide to hold."],
    close:
      "That is why this studio exists: to build the narrative identity born from those choices — and give the world a reason to recognise you.",
  },
}

export function WhySection({ lang }: { lang: Lang }) {
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
      { threshold: 0.2 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section className="section bg-ink py-20 text-white sm:py-24">
      <ViewTracker name="why_section" />
      <div
        ref={ref}
        className={[
          "shell mx-auto max-w-[820px] text-center",
          "transition-all duration-[900ms] ease-[cubic-bezier(.22,.68,0,1)]",
          vis ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
        ].join(" ")}
      >
        <div className="kicker mb-7">{t.kicker}</div>

        <h2 className="h-section mx-auto max-w-[680px]">{t.h2}</h2>

        <p className="mx-auto mt-8 max-w-[620px] font-sans text-[15.5px] leading-[1.75] text-chalk-55">
          {t.p1}
        </p>
        <p className="mx-auto mt-4 max-w-[620px] font-sans text-[15.5px] leading-[1.75] text-chalk-55">
          {t.p2}
        </p>

        {/* La bascule de l'argument, détachée du reste.
            C'est la phrase qui retourne la menace en raison d'être : tout
            ce qui précède décrit un effondrement, celle-ci dit ce qui y
            résiste. Elle mérite de ne pas être noyée dans un paragraphe. */}
        <p className="mx-auto mt-12 max-w-[640px] font-serif text-[clamp(1.4rem,3vw,2.1rem)] font-bold uppercase leading-[1.15] tracking-[-0.005em] text-white">
          {t.punch}
        </p>

        {/* Les quatre lignes courtes : ce que « un choix » veut dire,
            décliné, du général au concret. */}
        <ul className="mx-auto mt-6 flex max-w-[420px] list-none flex-col gap-1.5 p-0">
          {t.verses.map((v) => (
            <li key={v} className="font-serif text-[15px] text-chalk-55">
              {v}
            </li>
          ))}
        </ul>

        <div className="mx-auto mt-8 h-px w-16 bg-brand" />

        <p className="mx-auto mt-8 max-w-[560px] font-sans text-[15.5px] leading-[1.75] text-chalk-75">
          {t.close}
        </p>
      </div>
    </section>
  )
}
