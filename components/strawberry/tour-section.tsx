"use client"

import { useEffect, useRef } from "react"
import { LocaleLink as Link } from "@/components/locale-link"
import { useT } from "@/lib/i18n"
import { ViewTracker } from "@/components/strawberry/view-tracker"

/**
 * « La tournée » — la section épinglée de THE ROOM, portée sur la home.
 *
 * Le mécanisme, et c'est lui qui fait tout : la section mesure 460vh, son
 * contenu est collé en `sticky` sur 100vh, et les scènes se superposent au
 * même endroit. Au défilement, on calcule une position continue entre 0 et
 * n-1 ; chaque scène reçoit une opacité qui décroît avec sa distance à
 * cette position, un léger déplacement vertical et un zoom. Résultat : les
 * scènes se relaient en fondu pendant que la page reste immobile.
 *
 * Des cartes empilées ne reproduisent pas ça — c'est la différence entre
 * lire trois blocs et traverser trois scènes.
 *
 * Le fond de chaque scène (`ts-bg`) se déplace à contre-sens, ce qui crée
 * la profondeur : c'est un détail qu'on ne remarque pas et dont l'absence
 * rend l'effet plat.
 *
 * Sous `prefers-reduced-motion`, l'épinglage n'est pas activé : les scènes
 * s'empilent alors normalement et restent toutes lisibles.
 */

const T = {
  fr: {
    kicker: "Un métier, trois terrains",
    title: "Ce qu'on trouve quand un récit est écrit.",
    hint: "Continuez à défiler",
    outro: "Tout ça existe déjà chez vous. Il faut juste l'écrire.",
    cta: "Commander l'audit →",
    scenes: [
      {
        k: "Marques & entreprises",
        t: "Le rayon",
        line: "On vous demande un devis comparatif avant même de vous avoir écouté.",
        facts: [
          ["Le symptôme", "Votre meilleur argument, un concurrent pourrait le signer sans mentir."],
          ["La racine", "Le marché ne sait pas ce que vous refusez, alors il vous range par défaut."],
          ["Ce qu'on lit", "Site, discours commercial, et ce que chaque équipe raconte de son côté."],
          ["Ce qui change", "Une position que personne d'autre ne peut revendiquer sans mentir."],
        ],
        href: "/marques-entreprises",
      },
      {
        k: "Lieux",
        t: "La salle",
        line: "La salle est pleine, et pourtant chaque publication repart de zéro.",
        facts: [
          ["Le symptôme", "Personne dans l'équipe ne sait quoi filmer, ni quoi écrire dessous."],
          ["La racine", "Le monde du lieu existe déjà — il n'a simplement jamais été écrit."],
          ["Ce qu'on lit", "La salle, la carte, les avis, ce que les habitués répètent sans y penser."],
          ["Ce qui change", "Un lieu qu'on reconnaît avant même d'en avoir lu le nom."],
        ],
        href: "/the-room",
      },
      {
        k: "Artistes & fondateurs",
        t: "Le nom",
        line: "Vos sorties ne s'additionnent pas. Chacune repart de zéro.",
        facts: [
          ["Le symptôme", "On aime ce que vous faites sans savoir dire ce que vous êtes."],
          ["La racine", "Votre nom porte un travail que personne n'a encore formulé."],
          ["Ce qu'on lit", "Vos sorties, vos textes, et ce que la presse retient de vous."],
          ["Ce qui change", "Un fil que le public reconnaît d'une sortie à la suivante."],
        ],
        href: "/artistes",
      },
    ],
  },
  en: {
    kicker: "One craft, three grounds",
    title: "What you find when a story is written.",
    hint: "Keep scrolling",
    outro: "All of it already exists. It just needs writing.",
    cta: "Order the audit →",
    scenes: [
      {
        k: "Brands & companies",
        t: "The aisle",
        line: "You get asked for a comparative quote before anyone has listened to you.",
        facts: [
          ["The symptom", "Your best argument could be signed by a competitor without lying."],
          ["The root", "The market does not know what you refuse, so it files you by default."],
          ["What we read", "Site, sales pitch, and what each team says on its own."],
          ["What changes", "A position nobody else can claim without lying."],
        ],
        href: "/marques-entreprises",
      },
      {
        k: "Venues",
        t: "The room",
        line: "The room is full, and yet every post starts from nothing.",
        facts: [
          ["The symptom", "Nobody on the team knows what to film, or what to write underneath."],
          ["The root", "The world of the venue already exists — it has simply never been written."],
          ["What we read", "The room, the menu, the reviews, what the regulars repeat without thinking."],
          ["What changes", "A venue people recognise before they have read its name."],
        ],
        href: "/the-room",
      },
      {
        k: "Artists & founders",
        t: "The name",
        line: "Your releases do not add up. Each one starts from zero.",
        facts: [
          ["The symptom", "People like what you do without being able to say what you are."],
          ["The root", "Your name carries work nobody has put into words yet."],
          ["What we read", "Your releases, your writing, and what the press keeps of you."],
          ["What changes", "A thread the audience recognises from one release to the next."],
        ],
        href: "/artistes",
      },
    ],
  },
}

export function TourSection() {
  const t = useT(T)
  const pinRef = useRef<HTMLDivElement | null>(null)
  const fillRef = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    const pin = pinRef.current
    if (!pin) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    // `tour-on` déclenche le mode épinglé côté CSS : sans cette classe, la
    // section reste une pile de scènes lisibles — c'est le repli.
    pin.classList.add("tour-on")
    const scenes = Array.from(pin.querySelectorAll<HTMLElement>(".tour-scene"))
    const fill = fillRef.current
    let ticking = false

    const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v)

    const run = () => {
      ticking = false
      const vh = window.innerHeight
      const rect = pin.getBoundingClientRect()
      const span = Math.max(1, rect.height - vh)
      const p = clamp01(-rect.top / span)
      // Position continue entre 0 et n-1 : la scène « courante » peut être
      // à mi-chemin entre deux, d'où le fondu croisé.
      const f = p * (scenes.length - 1)

      scenes.forEach((sc, i) => {
        const d = f - i
        const ad = Math.abs(d)
        sc.style.opacity = Math.max(0, 1 - ad * 1.35).toFixed(3)
        sc.style.transform = `translate3d(0,${(-d * 7).toFixed(2)}vh,0) scale(${(1 + Math.max(0, 0.055 - ad * 0.11)).toFixed(3)})`
        sc.style.zIndex = String(20 - Math.round(ad * 10))
        const bg = sc.querySelector<HTMLElement>(".ts-bg")
        // Le fond dérive à contre-sens de la scène : c'est ce décalage qui
        // donne la profondeur.
        if (bg) bg.style.transform = `scale(${(1.06 + d * 0.05).toFixed(3)})`
      })
      if (fill) fill.style.height = `${(p * 100).toFixed(1)}%`
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(run)
      }
    }

    run()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      pin.classList.remove("tour-on")
    }
  }, [])

  return (
    <section className="border-t border-hair bg-ink-soft">
      <ViewTracker name="tour" />

      <div className="shell pt-24 text-center">
        <div className="kicker mb-5">{t.kicker}</div>
        <h2 className="h-section mx-auto max-w-[760px]">{t.title}</h2>
        <div className="mt-6 font-sans text-[11px] uppercase tracking-[0.22em] text-chalk-40">{t.hint}</div>
      </div>

      <div ref={pinRef} className="tour-pin">
        <div className="tour-sticky">
          {t.scenes.map((s, i) => (
            <article key={s.k} className={`tour-scene ts-${i + 1}`}>
              <div className="ts-bg" aria-hidden />
              <div className="shell ts-inner">
                <div className="ts-k">{s.k}</div>
                <h3 className="ts-t">{s.t}</h3>
                <p className="ts-line">{s.line}</p>
                <ul className="ts-list list-none p-0">
                  {s.facts.map(([label, detail]) => (
                    <li key={label}>
                      <b>{label}</b>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <Link href={s.href} className="ts-num no-underline text-brand">
                  {String(i + 1).padStart(2, "0")} / {String(t.scenes.length).padStart(2, "0")} — {s.k} →
                </Link>
              </div>
            </article>
          ))}
          <div className="tour-progress" aria-hidden>
            <span ref={fillRef} />
          </div>
        </div>
      </div>

      <div className="shell pb-24 text-center">
        <p className="accroche mx-auto mb-10 max-w-[620px] text-gradient">{t.outro}</p>
        <Link href="/brand-narrative-audit" className="btn-primary">
          {t.cta}
        </Link>
      </div>
    </section>
  )
}
