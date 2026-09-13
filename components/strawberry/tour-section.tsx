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
    ptsLabel: "Ce que l'audit vous donne",
    sceneCta: "Voir",
    outro: "Tout ça existe déjà chez vous. Il faut juste l'écrire.",
    cta: "Commander l'audit →",
    scenes: [
      {
        k: "Marques & entreprises",
        t: "BRAND",
        line: "On vous demande un devis comparatif avant même de vous avoir écouté.",
        points: ["**20 à 30 pages** écrites à la main, livrées en PDF sous 7 à 14 jours", "**3 à 5 concurrents décortiqués** : leur phrase exacte, l'argument qu'ils portent, celui qu'ils n'osent pas", "**Votre discours mis à plat** : la phrase de votre site, celle de vos commerciaux, celle de vos équipes — et l'écart entre les trois", "**3 à 5 mouvements de repositionnement**, hiérarchisés, avec ce que chacun coûte et ce qu'il débloque", "**La liste de ce qu'il faut cesser de dire**, et pourquoi"],
        out: "Une position que personne d'autre ne peut revendiquer.",
        href: "/marques-entreprises",
      },
      {
        k: "Produits",
        t: "THE PRODUCT",
        line: "En rayon, votre produit devient une ligne de caractéristiques.",
        points: ["**20 à 30 pages** écrites à la main, livrées en PDF sous 7 à 14 jours", "**3 à 5 produits concurrents décortiqués** : leur promesse exacte, l'argument mis en avant, l'angle laissé libre", "**Votre produit relu comme un acheteur** : page produit, emballage, notice, et ce que disent vos avis", "**3 à 5 mouvements**, hiérarchisés, avec ce que chacun coûte et ce qu'il débloque", "**Ce que votre emballage dit avant vous**, et ce qu'il faut cesser de dire"],
        out: "Chaque arbitrage devient un argument.",
        href: "/the-product",
      },
      {
        k: "Lieux",
        t: "THE ROOM",
        line: "La salle est pleine, et chaque publication repart de zéro.",
        points: ["**20 à 30 pages** écrites à la main, livrées en PDF sous 7 à 14 jours", "**Le monde de votre lieu écrit** : son heure, sa lumière, son casting, ses rituels", "**3 à 5 adresses concurrentes décortiquées** : ce qu'on dit d'elles, ce qu'elles revendiquent", "**3 à 5 mouvements**, hiérarchisés, tenables par votre équipe sans vous", "**Ce qu'il faut cesser de publier**, et pourquoi"],
        out: "Un lieu qu'on reconnaît avant d'en avoir lu le nom.",
        href: "/the-room",
      },
      {
        k: "Artistes & fondateurs",
        t: "THE NAME",
        line: "On aime ce que vous faites sans savoir dire ce que vous êtes.",
        points: ["**20 à 30 pages** écrites à la main, livrées en PDF sous 7 à 14 jours", "**Le fil qui traverse vos sorties**, nommé et documenté projet par projet", "**3 à 5 artistes de votre zone décortiqués** : leur bio, ce qu'ils occupent, la place qu'ils laissent", "**3 à 5 mouvements**, hiérarchisés, avec ce que chacun coûte et ce qu'il débloque", "**Ce que la presse retient de vous**, et la phrase qu'elle devrait reprendre"],
        out: "Un fil que le public reconnaît d'une sortie à l'autre.",
        href: "/the-name",
      },
    ],
  },
  en: {
    kicker: "One audit, four grounds",
    title: "What you find when a story is written.",
    hint: "Keep scrolling",
    ptsLabel: "What the audit gives you",
    sceneCta: "See",
    outro: "All of it already exists. It just needs writing.",
    cta: "Order the audit →",
    scenes: [
      {
        k: "Brands & companies",
        t: "BRAND",
        line: "You get asked for a comparative quote before anyone has listened to you.",
        points: ["**20 to 30 pages** written by hand, delivered as a PDF within 7 to 14 days", "**3 to 5 competitors taken apart**: their exact sentence, the argument they carry, the one they avoid", "**Your own words laid out**: your site, your sales pitch, your teams — and the gap between the three", "**3 to 5 repositioning moves**, ranked, with what each one costs and unlocks", "**The list of what to stop saying**, and why"],
        out: "A position nobody else can claim.",
        href: "/marques-entreprises",
      },
      {
        k: "Products",
        t: "THE PRODUCT",
        line: "On a shelf, your product becomes one line of specs.",
        points: ["**20 to 30 pages** written by hand, delivered as a PDF within 7 to 14 days", "**3 to 5 competing products taken apart**: their exact promise, the argument they lead with, the angle left open", "**Your product read as a buyer would**: product page, packaging, manual, and what your reviews say", "**3 to 5 moves**, ranked, with what each one costs and unlocks", "**What your packaging says before you do**, and what to stop saying"],
        out: "Every trade-off becomes an argument.",
        href: "/the-product",
      },
      {
        k: "Venues",
        t: "THE ROOM",
        line: "The room is full, and every post starts from nothing.",
        points: ["**20 to 30 pages** written by hand, delivered as a PDF within 7 to 14 days", "**The world of your venue written**: its hour, its light, its cast, its rituals", "**3 to 5 competing venues taken apart**: what people say about them, what they claim", "**3 to 5 moves**, ranked, and holdable by your team without you", "**What to stop posting**, and why"],
        out: "A venue people recognise before reading its name.",
        href: "/the-room",
      },
      {
        k: "Artists & founders",
        t: "THE NAME",
        line: "People like what you do without being able to say what you are.",
        points: ["**20 to 30 pages** written by hand, delivered as a PDF within 7 to 14 days", "**The thread running through your releases**, named and documented project by project", "**3 to 5 artists in your lane taken apart**: their bio, what they hold, the place they leave open", "**3 to 5 moves**, ranked, with what each one costs and unlocks", "**What the press keeps of you**, and the sentence it should be quoting"],
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
        <h2 className="h-section mx-auto max-w-[760px]">
            <span className="surligne-grad">{t.title}</span>
          </h2>
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
                <div className="ts-points-label">{t.ptsLabel}</div>
                <ul className="ts-points list-none p-0">
                  {s.points.map((x) => (
                    <li key={x}>
                      {/* Le segment entre ** passe en gras : c'est le
                          livrable lui-même, le reste le précise. */}
                      {x.split("**").map((part, j) =>
                        j % 2 === 1 ? <b key={j}>{part}</b> : <span key={j}>{part}</span>,
                      )}
                    </li>
                  ))}
                </ul>
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
        <p className="mx-auto mb-10 max-w-[620px]">
          <span className="accroche surligne">{t.outro}</span>
        </p>
        <Link href="/brand-narrative-audit" className="btn-primary">
          {t.cta}
        </Link>
      </div>
    </section>
  )
}
