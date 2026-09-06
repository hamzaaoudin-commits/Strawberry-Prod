"use client"

import { useEffect, useState } from "react"
import { LocaleLink as Link } from "@/components/locale-link"
import { useT } from "@/lib/i18n"
import { ViewTracker } from "@/components/strawberry/view-tracker"

/**
 * La page d'entrée du site.
 *
 * Avant, la page d'accueil était la porte Marques et le choix se posait au
 * milieu du défilement — ceux qui exploitent un lieu devaient traverser un
 * argumentaire qui ne les concernait pas avant de trouver leur porte.
 * Maintenant, `/` ne vend rien : elle nomme le studio, pose la promesse en
 * une phrase, et laisse choisir. L'ancienne page d'accueil vit désormais
 * sur /marques.
 *
 * Pas de barre de navigation ici : une page qui n'existe que pour trancher
 * entre deux directions ne doit pas offrir dix autres liens. Le menu
 * complet réapparaît dès qu'une porte est franchie.
 */

const T = {
  fr: {
    badge: "Studio d'architecture narrative · Paris",
    promise: "Nous écrivons ce qui rend une maison impossible à confondre.",
    lead: "Une seule méthode — un audit, puis une architecture narrative — déclinée en deux vocabulaires. Choisissez votre porte.",
    doors: [
      {
        key: "brands",
        label: "Marques",
        title: "Vous vendez un produit ou un service.",
        body: "Nous écrivons la constitution à laquelle un marché apprend à vous reconnaître — le récit de la maison comme celui de son dirigeant.",
        meta: "Audit · Architecture",
        href: "/marques",
        cta: "Entrer",
      },
      {
        key: "room",
        label: "THE ROOM",
        title: "Vous tenez un lieu qu'on pousse.",
        body: "Restaurant, bar, club, coffee shop. Nous écrivons le monde du lieu, et nous livrons le système qui permet à votre équipe de le tenir seule toute l'année.",
        meta: "Sprint de 2 à 3 semaines",
        href: "/the-room",
        cta: "Entrer",
      },
    ],
    foot: "Vous ne savez pas laquelle ? Commencez par les marques.",
  },
  en: {
    badge: "Narrative architecture studio · Paris",
    promise: "We write what makes a house impossible to mistake for another.",
    lead: "One method — an audit, then a narrative architecture — in two vocabularies. Choose your door.",
    doors: [
      {
        key: "brands",
        label: "Brands",
        title: "You sell a product or a service.",
        body: "We write the constitution a market learns to recognise you by — the story of the house and of the person running it.",
        meta: "Audit · Architecture",
        href: "/marques",
        cta: "Step in",
      },
      {
        key: "room",
        label: "THE ROOM",
        title: "You run a room people walk into.",
        body: "Restaurant, bar, club, coffee shop. We write the world of the venue, and hand over the system that lets your team hold it alone, all year.",
        meta: "A two to three week sprint",
        href: "/the-room",
        cta: "Step in",
      },
    ],
    foot: "Not sure which one? Start with brands.",
  },
}

export default function EntrancePage() {
  const t = useT(T)
  // L'entrée en scène est un enrichissement, jamais une condition
  // d'affichage : sans JavaScript, tout est déjà lisible.
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const id = window.requestAnimationFrame(() => setShown(true))
    return () => window.cancelAnimationFrame(id)
  }, [])

  return (
    <main className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-ink px-6 py-16 text-white">
      <ViewTracker name="entrance" />
      <div className="glow-center" aria-hidden />

      <div className="relative mx-auto w-full max-w-[1020px]">
        {/* Le studio, d'abord. */}
        <div className="mb-14 text-center">
          <div className="pill mb-8">{t.badge}</div>
          <div className="mb-7 font-serif text-[clamp(1.9rem,5vw,3.2rem)] font-bold leading-[1.1] tracking-[-0.02em]">
            <span className="text-gradient">Strawberry</span> Production
          </div>
          <p className="mx-auto mb-5 max-w-[680px] font-serif text-[clamp(1.05rem,2.2vw,1.5rem)] italic leading-[1.35] text-white/85">
            {t.promise}
          </p>
          <p className="mx-auto max-w-[560px] font-sans text-[14.5px] leading-[1.7] text-chalk-55">{t.lead}</p>
        </div>

        {/* Puis le choix. */}
        <div className="grid gap-px bg-white/10 sm:grid-cols-2">
          {t.doors.map((d, i) => (
            <Link
              key={d.key}
              href={d.href}
              className="group relative flex flex-col bg-ink px-7 py-10 no-underline transition-colors duration-500 hover:bg-white/[0.02] sm:px-9 sm:py-12"
              style={{
                opacity: shown ? 1 : 0,
                transform: shown ? "translateY(0)" : "translateY(14px)",
                transition:
                  "opacity 700ms cubic-bezier(.22,.68,0,1), transform 700ms cubic-bezier(.22,.68,0,1), background-color 500ms ease",
                transitionDelay: `${140 + i * 140}ms`,
              }}
            >
              {/* Le liseré se trace au survol : rouge plein côté Marques,
                  dégradé côté THE ROOM, emprunté à sa propre identité pour
                  annoncer qu'on change de monde. */}
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                style={{ background: d.key === "room" ? "linear-gradient(108deg, #e63946 0%, #ff1a1a 100%)" : "#e63946" }}
              />

              <div className="mb-6 font-sans text-[11px] uppercase tracking-[0.22em] text-brand">{d.label}</div>
              <h2 className="mb-4 font-serif text-[clamp(1.25rem,2.4vw,1.75rem)] font-bold leading-[1.2] tracking-[-0.02em] text-white">
                {d.title}
              </h2>
              <p className="m-0 mb-8 font-sans text-[14.5px] leading-[1.7] text-chalk-65">{d.body}</p>

              <div className="mt-auto flex items-center justify-between gap-4 border-t border-hair pt-5">
                <span className="font-sans text-[11.5px] uppercase tracking-[0.14em] text-chalk-40">{d.meta}</span>
                <span className="font-sans text-[13px] font-semibold text-brand transition-transform duration-300 group-hover:translate-x-1">
                  {d.cta} →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <p className="mt-10 text-center font-sans text-[12.5px] text-chalk-40">{t.foot}</p>
      </div>
    </main>
  )
}
