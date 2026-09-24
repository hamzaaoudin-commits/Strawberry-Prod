"use client"

import { useEffect, useRef, useState } from "react"
import { pick } from "@/lib/t"
import type { Lang } from "@/lib/lang"
import { ViewTracker } from "@/components/strawberry/view-tracker"

/**
 * WhySection — pourquoi ce studio existe.
 *
 * Réécrite en entier : l'ancienne version parlait de contagion du
 * langage et d'IA en deux paragraphes courts. Celle-ci pose l'argument
 * au complet — la saturation, l'uniformisation, ce que « reconnaissable »
 * veut dire concrètement, et pourquoi c'est la seule chose qui reste à
 * défendre une fois que tout le monde peut produire.
 *
 * Placé sur la home juste après le diagnostic — une fois le problème du
 * lecteur posé, on élargit à la cause commune — et avant qu'on ne
 * présente ce qu'on livre.
 */

const T = {
  fr: {
    kicker: "Pourquoi ce studio existe",
    h2a: "Le monde n'a jamais produit autant de contenu.",
    h2b: "Et pourtant, si peu de marques sont reconnaissables.",
    p1: "Chaque jour, des milliers de marques publient. Des campagnes, des identités, des vidéos, des sites, des discours.",
    p2: "Et peu à peu, tout finit par se ressembler.",
    sameList: ["Les mêmes mots.", "Les mêmes codes.", "Les mêmes promesses.", "Les mêmes images.", "Les mêmes « valeurs »."],
    p3: "L'IA ne fait qu'accélérer le phénomène : elle permet désormais de produire en quelques secondes ce qui ressemblait déjà à ce que tout le monde produisait.",
    p4: "Dans cet environnement, être bon ne suffit plus. Être visible ne suffit plus. Être différent sur le papier ne suffit plus.",
    punch1: "Une marque doit pouvoir être reconnue.",
    recogList: ["Reconnaissable avant même qu'on lise son nom.", "Reconnaissable dans un flux saturé.", "Reconnaissable par sa manière de parler, de raconter, de montrer, de penser."],
    p5: "Parce qu'une marque forte ne se contente pas d'occuper une place dans un marché.",
    punch2: "Elle crée sa propre place dans l'esprit des gens.",
    closeKicker: "C'est pour cela que ce studio existe :",
    closePunch: "Rendre les marques impossibles à confondre.",
    closeBody:
      "Nous construisons des identités narratives avec une personnalité, une vision et des codes suffisamment forts pour qu'une marque ne ressemble pas simplement à son marché — mais qu'on puisse la reconnaître comme elle-même.",
    finalLead: "Parce que dans un monde où tout le monde peut produire du contenu,",
    finalPunch: "le véritable avantage n'est plus de produire davantage. C'est d'avoir quelque chose que personne d'autre ne pourrait être.",
  },
  en: {
    kicker: "Why this studio exists",
    h2a: "The world has never produced so much content.",
    h2b: "And yet so few brands are recognisable.",
    p1: "Every day, thousands of brands publish. Campaigns, identities, videos, websites, speeches.",
    p2: "And little by little, everything ends up looking the same.",
    sameList: ["The same words.", "The same codes.", "The same promises.", "The same images.", "The same \u201cvalues.\u201d"],
    p3: "AI only accelerates the phenomenon: it now lets you produce, in seconds, what already looked like what everyone else was producing.",
    p4: "In this environment, being good is no longer enough. Being visible is no longer enough. Being different on paper is no longer enough.",
    punch1: "A brand needs to be recognisable.",
    recogList: ["Recognisable before anyone reads the name.", "Recognisable in a saturated feed.", "Recognisable by how it speaks, tells, shows, thinks."],
    p5: "Because a strong brand does not settle for occupying a place in a market.",
    punch2: "It creates its own place in people's minds.",
    closeKicker: "That is why this studio exists:",
    closePunch: "To make brands impossible to confuse.",
    closeBody:
      "We build narrative identities with a personality, a vision and codes strong enough that a brand does not simply resemble its market — but can be recognised as itself.",
    finalLead: "Because in a world where anyone can produce content,",
    finalPunch: "the real advantage is no longer producing more. It is having something no one else could be.",
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
      { threshold: 0.15 },
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
          "shell mx-auto max-w-[760px] text-center",
          "transition-all duration-[900ms] ease-[cubic-bezier(.22,.68,0,1)]",
          vis ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
        ].join(" ")}
      >
        <div className="kicker mb-7">{t.kicker}</div>

        <h2 className="h-section mx-auto max-w-[680px]">
          {t.h2a}
          <br />
          <span className="surligne-grad">{t.h2b}</span>
        </h2>

        <p className="mx-auto mt-8 max-w-[600px] font-sans text-[15.5px] leading-[1.75] text-chalk-55">
          {t.p1}
        </p>
        <p className="mx-auto mt-3 max-w-[600px] font-sans text-[15.5px] leading-[1.75] text-chalk-55">
          {t.p2}
        </p>

        {/* La déclinaison des « mêmes » : cinq lignes courtes, une par
            répétition du marché, pour faire sentir l'accumulation plutôt
            que de la résumer en une phrase. */}
        <ul className="mx-auto mt-6 flex max-w-[380px] list-none flex-col gap-1 p-0">
          {t.sameList.map((v) => (
            <li key={v} className="font-serif text-[15px] italic text-chalk-40">
              {v}
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-9 max-w-[600px] font-sans text-[15.5px] leading-[1.75] text-chalk-55">
          {t.p3}
        </p>
        <p className="mx-auto mt-4 max-w-[600px] font-sans text-[15.5px] leading-[1.75] text-chalk-55">
          {t.p4}
        </p>

        {/* Premier pivot : de la menace à l'exigence. */}
        <p className="mx-auto mt-11 max-w-[560px] font-serif text-[clamp(1.3rem,2.8vw,1.9rem)] font-bold uppercase leading-[1.2] tracking-[-0.005em] text-white">
          {t.punch1}
        </p>

        <ul className="mx-auto mt-6 flex max-w-[480px] list-none flex-col gap-1.5 p-0">
          {t.recogList.map((v) => (
            <li key={v} className="font-serif text-[15px] text-chalk-55">
              {v}
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-9 max-w-[560px] font-sans text-[15.5px] leading-[1.75] text-chalk-55">
          {t.p5}
        </p>
        <p className="mx-auto mt-2 max-w-[560px] font-serif text-[17px] font-bold leading-[1.4] text-white">
          {t.punch2}
        </p>

        <div className="mx-auto mt-10 h-px w-16 bg-brand" />

        {/* Le second pivot : pourquoi ce studio, maintenant que le
            problème et l'exigence sont posés. */}
        <div className="mt-10">
          <p className="mx-auto font-sans text-[13px] uppercase tracking-[0.14em] text-chalk-40">
            {t.closeKicker}
          </p>
          <p className="mx-auto mt-4 max-w-[600px] font-serif text-[clamp(1.5rem,3.2vw,2.2rem)] font-bold uppercase leading-[1.18] tracking-[-0.005em] text-white">
            {t.closePunch}
          </p>
          <p className="mx-auto mt-6 max-w-[600px] font-sans text-[15.5px] leading-[1.75] text-chalk-55">
            {t.closeBody}
          </p>
        </div>

        <div className="mx-auto mt-10 h-px w-16 bg-brand" />

        <p className="mx-auto mt-8 max-w-[560px] font-sans text-[14px] leading-[1.7] text-chalk-40">
          {t.finalLead}
        </p>
        <p className="mx-auto mt-2 max-w-[560px] font-serif text-[18px] font-bold leading-[1.5] text-chalk-75">
          {t.finalPunch}
        </p>
      </div>
    </section>
  )
}
