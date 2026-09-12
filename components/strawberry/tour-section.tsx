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
    kicker: "Un audit, quatre terrains",
    title: "Ce qu'on trouve quand un récit est écrit.",
    hint: "Continuez à défiler",
    sceneCta: "Voir",
    outro: "Tout ça existe déjà chez vous. Il faut juste l'écrire.",
    cta: "Commander l'audit →",
    scenes: [
      {
        k: "Marques & entreprises",
        t: "BRAND",
        line: "On vous demande un devis comparatif avant même de vous avoir écouté.",
        body: "Vous vendez un produit ou un service qui tient, et pourtant le marché vous range avec six autres. Nous lisons votre site, votre discours commercial et ce que chaque équipe raconte de son côté, nous cartographions la phrase exacte de vos concurrents, et nous nommons la position que personne n'occupe.",
        out: "Vous repartez avec ce qui vous rend impossible à confondre — et les mouvements pour y aller.",
        href: "/marques-entreprises",
      },
      {
        k: "Produits",
        t: "THE PRODUCT",
        line: "En rayon, votre produit devient une ligne de caractéristiques à côté d'une autre.",
        body: "Votre produit est bien fait, ceux qui l'utilisent le gardent. Mais rien ne dit pourquoi il a été fait comme ça. Nous lisons la page produit, l'emballage, la notice et les avis, nous cartographions la promesse de vos concurrents, et nous nommons l'intention qui tient derrière vos choix de conception.",
        out: "Chaque arbitrage devient un argument, au lieu d'une ligne de spec.",
        href: "/the-product",
      },
      {
        k: "Lieux",
        t: "THE ROOM",
        line: "La salle est pleine, et pourtant chaque publication repart de zéro.",
        body: "Restaurant, bar, club, coffee shop. Le monde de votre lieu existe déjà — une heure, une lumière, un casting, des rituels — mais personne ne l'a écrit, donc personne dans l'équipe ne sait quoi montrer. Nous lisons la salle, la carte, les avis et ce que les habitués répètent.",
        out: "Un lieu qu'on reconnaît avant d'en avoir lu le nom.",
        href: "/the-room",
      },
      {
        k: "Artistes & fondateurs",
        t: "THE NAME",
        line: "On aime ce que vous faites sans savoir dire ce que vous êtes.",
        body: "Vos sorties sont bonnes, les retours aussi, mais chacune repart de zéro dans la tête de ceux qui vous suivent. Nous lisons vos projets, vos textes, vos interviews et ce que la presse retient de vous, et nous nommons le fil qui traverse déjà tout ça.",
        out: "Un fil que le public reconnaît d'une sortie à la suivante.",
        href: "/the-name",
      },
    ],
  },
  en: {
    kicker: "One audit, four grounds",
    title: "What you find when a story is written.",
    hint: "Keep scrolling",
    sceneCta: "See",
    outro: "All of it already exists. It just needs writing.",
    cta: "Order the audit →",
    scenes: [
      {
        k: "Brands & companies",
        t: "BRAND",
        line: "You get asked for a comparative quote before anyone has listened to you.",
        body: "You sell a product or a service that holds, and yet the market files you with six others. We read your site, your sales pitch and what each team says on its own, we map your competitors' exact sentence, and we name the position nobody occupies.",
        out: "You leave with what makes you impossible to mistake — and the moves to get there.",
        href: "/marques-entreprises",
      },
      {
        k: "Products",
        t: "THE PRODUCT",
        line: "On a shelf, your product becomes one line of specs next to another.",
        body: "Your product is well made, the people who use it keep it. But nothing says why it was made this way. We read the product page, the packaging, the manual and the reviews, we map your competitors' promise, and we name the intent behind your design choices.",
        out: "Every trade-off becomes an argument instead of a spec line.",
        href: "/the-product",
      },
      {
        k: "Venues",
        t: "THE ROOM",
        line: "The room is full, and yet every post starts from nothing.",
        body: "Restaurant, bar, club, coffee shop. The world of your venue already exists — an hour, a light, a cast, rituals — but nobody has written it, so nobody on the team knows what to show. We read the room, the menu, the reviews and what the regulars repeat.",
        out: "A venue people recognise before reading its name.",
        href: "/the-room",
      },
      {
        k: "Artists & founders",
        t: "THE NAME",
        line: "People like what you do without being able to say what you are.",
        body: "Your releases are good, so is the feedback, but each one starts from zero in the minds of the people who follow you. We read your projects, your writing, your interviews and what the press keeps of you, and we name the thread already running through all of it.",
        out: "A thread the audience recognises from one release to the next.",
        href: "/the-name",
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
    const backdrops = scenes.map((sc) => sc.querySelector<HTMLElement>(".ts-bg"))
    const fill = fillRef.current
    let ticking = false

    // La géométrie est mesurée une fois, puis relue seulement au
    // redimensionnement — exactement comme app.js sur THE ROOM.
    //
    // C'est toute la différence de fluidité : appeler getBoundingClientRect()
    // à chaque image force le navigateur à recalculer la mise en page 60 fois
    // par seconde, en plein défilement, ce qui produit les à-coups. En
    // mesurant une fois, la boucle ne lit plus que window.scrollY — une
    // valeur déjà connue, qui ne coûte rien — et n'écrit que des transforms
    // et des opacités, deux propriétés que le navigateur traite sans
    // recalculer la page.
    let geo = { top: 0, height: 0, vh: 0 }
    const measure = () => {
      const r = pin.getBoundingClientRect()
      geo = { top: r.top + window.scrollY, height: r.height, vh: window.innerHeight }
    }

    const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v)

    const run = () => {
      ticking = false
      const span = Math.max(1, geo.height - geo.vh)
      const p = clamp01((window.scrollY - geo.top) / span)
      // Position continue entre 0 et n-1 : la scène « courante » peut se
      // trouver à mi-chemin entre deux, d'où le fondu croisé.
      const f = p * (scenes.length - 1)

      for (let i = 0; i < scenes.length; i++) {
        const d = f - i
        const ad = d < 0 ? -d : d
        const sc = scenes[i]
        sc.style.opacity = String(Math.max(0, 1 - ad * 1.35))
        sc.style.transform = `translate3d(0,${-d * 7}vh,0) scale(${1 + Math.max(0, 0.055 - ad * 0.11)})`
        sc.style.zIndex = String(20 - Math.round(ad * 10))
        const bg = backdrops[i]
        // Le fond dérive à contre-sens de sa scène : c'est ce décalage qui
        // donne la profondeur, et son absence rend l'effet plat.
        if (bg) bg.style.transform = `scale(${1.06 + d * 0.05})`
      }
      if (fill) fill.style.height = `${p * 100}%`
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(run)
      }
    }
    const onResize = () => {
      measure()
      onScroll()
    }

    // Les scènes sont préparées pour l'accélération matérielle avant la
    // première image : sans ça, le premier défilement paie la promotion en
    // couche et saccade une fois.
    scenes.forEach((sc) => {
      sc.style.willChange = "transform, opacity"
    })

    measure()
    run()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onResize)
    // Les polices arrivent après le premier rendu et changent la hauteur des
    // titres, donc la géométrie mesurée. On remesure quand elles sont prêtes.
    document.fonts?.ready.then(onResize).catch(() => {})

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onResize)
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
              <div className="ts-inner mx-auto max-w-[1180px]">
                <div className="ts-k">{s.k}</div>
                <h3 className="ts-t">{s.t}</h3>
                <p className="ts-line">{s.line}</p>
                {/* De la prose, pas quatre étiquettes.
                    Le découpage symptôme / racine / ce qu'on lit / ce qui
                    change était un gabarit : il forçait chaque terrain dans
                    la même grille et empêchait de dire ce que l'offre a de
                    particulier. Un paragraphe, puis ce qu'on emporte. */}
                <p className="ts-body">{s.body}</p>
                <p className="ts-out">{s.out}</p>
                <Link href={s.href} className="ts-num no-underline text-brand">
                  {String(i + 1).padStart(2, "0")} / {String(t.scenes.length).padStart(2, "0")} — {t.sceneCta} {s.t} →
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
        <p className="accroche mx-auto mb-10 max-w-[620px]">{t.outro}</p>
        <Link href="/brand-narrative-audit" className="btn-primary">
          {t.cta}
        </Link>
      </div>
    </section>
  )
}
