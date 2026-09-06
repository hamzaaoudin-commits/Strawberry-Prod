"use client"

import { LocaleLink as Link } from "@/components/locale-link"
import { useT } from "@/lib/i18n"
import { ViewTracker } from "@/components/strawberry/view-tracker"
import { useScrollReveal } from "@/hooks/use-strawberry"

/**
 * Les deux portes — Marques et THE ROOM.
 *
 * Placées juste sous le hero : quelqu'un qui arrive lit d'abord la promesse
 * unique du studio, puis choisit sa porte. Tout ce qui suit sur la page
 * concerne les marques ; ceux qui exploitent un lieu partent ici.
 *
 * Deux panneaux plutôt que des cartes empilées : le choix doit se lire
 * comme un embranchement, pas comme une liste d'offres. La porte THE ROOM
 * emprunte au passage un fragment de son identité — le liseré du dégradé —
 * pour annoncer qu'elle mène ailleurs.
 */

const T = {
  fr: {
    kicker: "Deux portes",
    h2: "Une marque, ou un lieu.",
    lead: "La même méthode — un audit, puis une architecture narrative — déclinée en deux vocabulaires.",
    doors: [
      {
        key: "brands",
        label: "Marques",
        title: "Vous vendez un produit ou un service.",
        body: "Nous écrivons la constitution à laquelle un marché apprend à vous reconnaître — le récit de la maison comme celui de son dirigeant.",
        meta: "Audit · Architecture",
        href: "/brand-narrative-architecture",
        cta: "Voir la commande →",
      },
      {
        key: "room",
        label: "THE ROOM",
        title: "Vous tenez un lieu qu'on pousse.",
        body: "Restaurant, bar, club, coffee shop. Nous écrivons le monde du lieu et nous livrons le système qui permet à votre équipe de le tenir seule, toute l'année.",
        meta: "Sprint de 2 à 3 semaines",
        href: "/the-room",
        cta: "Entrer →",
      },
    ],
  },
  en: {
    kicker: "Two doors",
    h2: "A brand, or a venue.",
    lead: "The same method — an audit, then a narrative architecture — in two vocabularies.",
    doors: [
      {
        key: "brands",
        label: "Brands",
        title: "You sell a product or a service.",
        body: "We write the constitution a market learns to recognise you by — the story of the house and of the person running it.",
        meta: "Audit · Architecture",
        href: "/brand-narrative-architecture",
        cta: "See the commission →",
      },
      {
        key: "room",
        label: "THE ROOM",
        title: "You run a room people walk into.",
        body: "Restaurant, bar, club, coffee shop. We write the world of the venue and hand over the system that lets your team hold it alone, all year.",
        meta: "A two to three week sprint",
        href: "/the-room",
        cta: "Step in →",
      },
    ],
  },
}

export function DoorsSection() {
  const t = useT(T)
  const [ref, visible] = useScrollReveal()

  return (
    <section className="section border-t border-hair bg-ink-soft">
      <ViewTracker name="doors" />
      <div className="shell">
        <div className="mx-auto mb-12 max-w-[640px] text-center">
          <div className="kicker mb-5">{t.kicker}</div>
          <h2 className="h-section mb-5">{t.h2}</h2>
          <p className="lede">{t.lead}</p>
        </div>

        <div ref={ref} className="mx-auto grid max-w-[980px] gap-px bg-white/10 sm:grid-cols-2">
          {t.doors.map((d, i) => (
            <Link
              key={d.key}
              href={d.href}
              className="group relative flex flex-col bg-ink px-7 py-10 no-underline transition-colors duration-500 hover:bg-white/[0.02] sm:px-9 sm:py-12"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(14px)",
                transition: "opacity 700ms cubic-bezier(.22,.68,0,1), transform 700ms cubic-bezier(.22,.68,0,1), background-color 500ms ease",
                transitionDelay: `${i * 140}ms`,
              }}
            >
              {/* Le liseré : rouge plein côté Marques, dégradé côté THE ROOM,
                  qui emprunte celui de sa propre identité. */}
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                style={{
                  background: d.key === "room" ? "linear-gradient(108deg, #e63946 0%, #ff1a1a 100%)" : "#e63946",
                }}
              />

              <div className="mb-6 font-sans text-[11px] uppercase tracking-[0.22em] text-brand">{d.label}</div>
              <h3 className="mb-4 font-serif text-[clamp(1.3rem,2.4vw,1.85rem)] font-bold leading-[1.2] tracking-[-0.02em] text-white">
                {d.title}
              </h3>
              <p className="m-0 mb-8 font-sans text-[15px] leading-[1.75] text-chalk-65">{d.body}</p>

              <div className="mt-auto flex items-center justify-between gap-4 border-t border-hair pt-5">
                <span className="font-sans text-[12px] uppercase tracking-[0.14em] text-chalk-40">{d.meta}</span>
                <span className="font-sans text-[13px] font-semibold text-brand transition-transform duration-300 group-hover:translate-x-1">
                  {d.cta}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
