"use client"

import { useEffect, useRef, useState } from "react"
import { pick } from "@/lib/t"
import type { Lang } from "@/lib/lang"
import { ViewTracker } from "@/components/strawberry/view-tracker"

/**
 * AfterSection — ce qui se passe après le paiement.
 *
 * À 2 900 €, la question qui bloque juste avant le bouton n'est pas
 * « est-ce que c'est bien » mais « qu'est-ce qui m'attend ». Quatre
 * étapes datées y répondent sans rien affirmer :
 *
 * - le client voit qu'il n'est pas sollicité pendant le gros du travail,
 * - il sait que le questionnaire fait trente questions et n'est donc pas
 *   pris en traître une fois qu'il a payé,
 * - il voit que ça ne finit pas sur un envoi de fichier.
 *
 * Les deux révisions et l'engagement de délai sont posés ici plutôt que
 * dans un encart « nos garanties » : une garantie qui apparaît dans le
 * déroulé du travail se lit comme une pratique, pas comme un argument.
 */

const T = {
  fr: {
    kicker: "Après le paiement",
    h2: "Ce qui se passe, jour par jour.",
    lead: "Vous n'avez rien à organiser. Le calendrier est le même pour tout le monde.",
    steps: [
      {
        day: "Jour 0",
        t: "Vous recevez le questionnaire",
        d: "Trente questions sur ce que vous vendez, ce que vous refusez, et qui vous compare à qui. Comptez une heure. Vos réponses se sauvegardent : vous pouvez le faire en deux fois.",
      },
      {
        day: "Jours 1 à 12",
        t: "Nous dépouillons",
        d: "Votre site, vos supports commerciaux, vos avis, et ceux de trois à cinq concurrents — phrase par phrase. Nous ne vous sollicitons pas pendant cette période.",
      },
      {
        day: "Jour 15",
        t: "Le document arrive",
        d: "Les six pièces en PDF : la plateforme de marque, le diagnostic, la carte du champ, les décisions, les playbooks, le lexique et les textes réécrits.",
      },
      {
        day: "Jour 20",
        t: "On le relit ensemble",
        d: "Une heure pour parcourir le document et noter ce qui ne tient pas. Deux révisions sont incluses : vous n'êtes pas seul face à un PDF.",
      },
    ],
    guaranteeK: "L'engagement",
    guarantee:
      "Livré le vingt et unième jour au plus tard. Passé ce délai, vous êtes remboursé intégralement, et le document vous reste.",
  },
  en: {
    kicker: "After payment",
    h2: "What happens, day by day.",
    lead: "You have nothing to organise. The schedule is the same for everyone.",
    steps: [
      {
        day: "Day 0",
        t: "You get the questionnaire",
        d: "Thirty questions on what you sell, what you refuse, and who gets compared to whom. Allow an hour. Your answers are saved: you can do it in two sittings.",
      },
      {
        day: "Days 1 to 12",
        t: "We go through everything",
        d: "Your site, your sales material, your reviews, and those of three to five competitors — sentence by sentence. We do not contact you during this period.",
      },
      {
        day: "Day 15",
        t: "The document lands",
        d: "The six pieces as a PDF: the brand platform, the diagnosis, the map of the field, the decisions, the playbooks, the lexicon and rewritten copy.",
      },
      {
        day: "Day 20",
        t: "We read it together",
        d: "An hour to go through the document and note what does not hold. Two revisions are included: you are not left alone with a PDF.",
      },
    ],
    guaranteeK: "The commitment",
    guarantee:
      "Delivered on the twenty-first day at the latest. Past that, you are refunded in full, and the document stays yours.",
  },
}

export function AfterSection({ lang }: { lang: Lang }) {
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
    <section className="section bg-ink-soft py-20 text-white sm:py-24">
      <ViewTracker name="after_section" />
      <div ref={ref} className="shell">
        <div className="kicker mb-5 text-center">{t.kicker}</div>
        <h2 className="h-section mx-auto max-w-[620px] text-center">{t.h2}</h2>
        <p className="mx-auto mt-5 max-w-[540px] text-center font-sans text-[15px] leading-[1.7] text-chalk-55">
          {t.lead}
        </p>

        {/* Quatre colonnes séparées d'un filet, reliées par une ligne
            horizontale : on doit voir une frise, pas quatre encadrés. */}
        <div className="relative mx-auto mt-14 max-w-[1040px]">
          <div
            aria-hidden
            className="absolute inset-x-0 top-[38px] hidden h-px bg-hair-strong md:block"
          />
          <ol className="m-0 grid list-none gap-px bg-white/[0.07] p-0 md:grid-cols-4">
            {t.steps.map((s, i) => (
              <li
                key={s.day}
                className={[
                  "relative bg-ink-soft px-6 py-7",
                  "transition-all duration-[800ms] ease-[cubic-bezier(.22,.68,0,1)]",
                  vis ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
                ].join(" ")}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="relative z-[1] mb-5 inline-block bg-ink-soft pr-3 font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand">
                  {s.day}
                </div>
                <h3 className="mb-3 font-serif text-[clamp(1.05rem,1.8vw,1.25rem)] font-bold uppercase leading-[1.15] tracking-[-0.005em] text-white">
                  {s.t}
                </h3>
                <p className="m-0 font-sans text-[13.5px] leading-[1.65] text-chalk-55">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* L'engagement de délai, en pied de frise.
            Placé après les quatre étapes, il se lit comme la conséquence du
            calendrier qu'on vient de détailler — pas comme une promesse
            commerciale isolée. */}
        <div className="mx-auto mt-10 max-w-[720px] border border-brand-hair bg-brand/[0.04] px-7 py-6 text-center">
          <div className="mb-3 font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand">
            {t.guaranteeK}
          </div>
          <p className="m-0 font-sans text-[15px] leading-[1.7] text-chalk-75">{t.guarantee}</p>
        </div>
      </div>
    </section>
  )
}
