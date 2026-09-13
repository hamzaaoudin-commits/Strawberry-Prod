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
    lead: "Le même travail dans les quatre cas : on relève, on compare, on tranche. Ce qui change, c'est la matière qu'on lit et ce qu'on vous rend.",
    kicker: "Un audit, quatre terrains",
    title: "Ce qu'on trouve quand un récit est écrit.",
    afterLabel: "Après l'audit",
    ptsLabel: "Sur ce terrain précisément",
    commonLabel: "Ce que contient le document, dans les quatre cas",
    common: [
      "Le diagnostic écrit : ce que vous racontez aujourd'hui, support par support, avec les occurrences comptées",
      "La carte du champ : 3 à 5 concurrents, leur phrase exacte, ce qu'ils revendiquent, le terrain qu'ils laissent libre",
      "La position nommée en une phrase, avec ce qu'elle vous oblige à refuser",
      "3 à 5 mouvements : la formulation exacte à employer, où la mettre, ce qu'elle coûte, ce qu'elle fait perdre",
      "Le lexique : les mots à employer, ceux à cesser d'employer, et pourquoi",
      "Les textes réécrits, prêts à coller — et applicables par vos équipes comme par votre outil IA",
    ],
    sceneCta: "Voir",
    outro: "Tout ça existe déjà chez vous. Il faut juste l'écrire.",
    cta: "Commander l'audit →",
    scenes: [
      {
        k: "Marques & entreprises",
        t: "BRAND",
        line: "Le devis part sans une ligne de justification. Le prix n'est plus ce qu'on discute.",
        points: ["On dépouille : site, plaquette, discours commercial, signatures mail, et ce que disent vos équipes en rendez-vous", "Pièce en plus : vos quatre versions du même métier mises face à face, et celle qui devient la seule"],
        href: "/marques-entreprises",
      },
      {
        k: "Produits",
        t: "THE PRODUCT",
        line: "On le prend en main et on comprend pourquoi il a été fait comme ça.",
        points: ["On dépouille : page produit, fiche technique, emballage, notice, et vos avis clients", "Pièce en plus : chaque caractéristique réécrite en arbitrage — pourquoi ce poids, ce matériau, ce prix"],
        href: "/the-product",
      },
      {
        k: "Lieux",
        t: "THE ROOM",
        line: "N'importe qui en salle sait quoi filmer, et le quartier reconnaît le lieu avant d'en lire le nom.",
        points: ["On dépouille : fiche Google, carte, avis clients, publications, et ce que vos habitués répètent", "Pièce en plus : le plan de tournage — quoi filmer, à quelle heure, et les phrases à écrire dessous"],
        href: "/the-room",
      },
      {
        k: "Artistes & fondateurs",
        t: "THE NAME",
        line: "La sortie tombe et le public sait déjà où elle se range — parce que la précédente l'avait annoncée.",
        points: ["On dépouille : vos sorties, vos textes, vos visuels, vos interviews, et ce que la presse retient", "Pièce en plus : votre bio en trois longueurs — plateforme, dossier de presse, présentation scène"],
        href: "/the-name",
      },
    ],
  },
  en: {
    lead: "The same work in all four cases: we record, we compare, we settle. What changes is the material we read and what we hand back.",
    kicker: "One audit, four grounds",
    title: "What you find when a story is written.",
    afterLabel: "After the audit",
    ptsLabel: "On this ground specifically",
    commonLabel: "What the document contains, in all four cases",
    common: [
      "The written diagnosis: what you say today, support by support, with occurrences counted",
      "The map of the field: 3 to 5 competitors, their exact sentence, what they claim, the ground they leave open",
      "The position named in one sentence, with what it forces you to refuse",
      "3 to 5 moves: the exact wording to use, where to put it, what it costs, what it loses you",
      "The lexicon: words to use, words to stop using, and why",
      "The rewritten copy, ready to paste — usable by your teams and by your AI tool",
    ],
    sceneCta: "See",
    outro: "All of it already exists. It just needs writing.",
    cta: "Order the audit →",
    scenes: [
      {
        k: "Brands & companies",
        t: "BRAND",
        line: "The quote goes out without a line of justification. Price is no longer what gets discussed.",
        points: ["We go through: site, brochure, sales pitch, email signatures, and what your teams say in meetings", "Extra piece: your four versions of the same work put side by side, and the one that becomes the only one"],
        href: "/marques-entreprises",
      },
      {
        k: "Products",
        t: "THE PRODUCT",
        line: "You pick it up and you understand why it was made this way.",
        points: ["We go through: product page, spec sheet, packaging, manual, and your customer reviews", "Extra piece: every feature rewritten as a trade-off — why this weight, this material, this price"],
        href: "/the-product",
      },
      {
        k: "Venues",
        t: "THE ROOM",
        line: "Anyone on the floor knows what to film, and the neighbourhood recognises the place before reading its name.",
        points: ["We go through: Google listing, menu, reviews, posts, and what your regulars repeat", "Extra piece: the shooting plan — what to film, at what hour, and the lines to write underneath"],
        href: "/the-room",
      },
      {
        k: "Artists & founders",
        t: "THE NAME",
        line: "The release lands and the audience already knows where it sits — because the last one announced it.",
        points: ["We go through: your releases, your writing, your visuals, your interviews, and what the press keeps", "Extra piece: your bio at three lengths — platform, press kit, stage introduction"],
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

    // Pas d'épinglage sous 900px.
    //
    // La scène épinglée tient dans 100vh avec `overflow:hidden`. Sur un
    // téléphone, une scène contient le surtitre, un titre de 48px, la
    // projection, l'intitulé et cinq puces : ça dépasse largement la
    // hauteur d'écran, et tout ce qui dépasse est coupé sans barre de
    // défilement pour aller le chercher.
    //
    // Sans `tour-on`, les scènes s'empilent et se lisent normalement.
    // L'effet est perdu, mais il l'était déjà : sur un écran haut et
    // étroit, un fondu entre quatre plans superposés se voit mal, alors
    // qu'une page qui coupe son texte se voit tout de suite.
    if (window.innerWidth < 900) return

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
        // Fondu à plateau, au lieu d'une décroissance linéaire.
        //
        // Avec `1 - ad * 1.35`, deux scènes voisines se retrouvaient toutes
        // deux à 32 % d'opacité à mi-chemin : on lisait deux textes
        // superposés pendant la moitié du parcours. Ici la scène reste
        // pleine tant qu'elle est proche, puis s'efface vite — et la courbe
        // en S (`t*t*(3-2t)`) supprime les deux cassures qu'une chute
        // linéaire laisse au départ et à l'arrivée.
        // Maintien large, croisement bref.
        //
        // Version précédente : l'opacité décroissait sur toute la distance,
        // donc entre deux scènes les deux étaient quasiment à zéro — un
        // écran presque noir sur une bonne part du défilement.
        //
        // La fenêtre de fondu est centrée sur le point de croisement et
        // déborde de part et d'autre : à mi-chemin, la sortante et
        // l'entrante sont toutes deux à 50 %, donc leur somme vaut 1 et
        // l'écran ne s'assombrit jamais. Hors de cette fenêtre — soit plus
        // des trois quarts du parcours — une seule scène est visible, à
        // pleine opacité.
        //
        // Une unité vaut environ 150vh de défilement : le maintien couvre
        // donc plus de 120vh et le croisement une vingtaine. Assez bref
        // pour qu'on ne lise jamais deux textes, assez long pour qu'on ne
        // voie pas de coupure.
        const t = Math.max(0, Math.min(1, (0.58 - ad) / 0.16))
        const eased = t * t * (3 - 2 * t)
        sc.style.opacity = String(eased)
        // Moins de déplacement et de zoom : à 7vh, le texte glissait encore
        // pendant qu'on le lisait.
        sc.style.transform = `translate3d(0,${-d * 3.5}vh,0) scale(${1 + Math.max(0, 0.03 - ad * 0.06)})`
        sc.style.zIndex = String(20 - Math.round(ad * 10))
        // Une scène effacée ne doit plus capter le survol ni les clics.
        sc.style.pointerEvents = eased < 0.05 ? "none" : "auto"
        const bg = backdrops[i]
        // Le fond dérive à contre-sens de sa scène : c'est ce décalage qui
        // donne la profondeur, et son absence rend l'effet plat.
        if (bg) bg.style.transform = `scale(${1.04 + d * 0.03})`
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

      {/* 24 unités de marge haute s'ajoutaient à l'espace que le hero
          laisse déjà sous son bouton : le surtitre se retrouvait à un écran
          du contenu précédent. */}
      {/* La marge est en bas, pas en haut.
          En haut, elle éloignait le titre de la section précédente ; en bas,
          elle sépare le titre de la première scène épinglée, qui démarre
          immédiatement après. C'est là qu'il fallait la mettre depuis le
          début. */}
      <div className="shell pt-6 pb-20 text-center">
        <div className="kicker mb-5">{t.kicker}</div>
        <h2 className="h-section mx-auto max-w-[760px]">
          <span className="surligne-grad">{t.title}</span>
        </h2>

        {/* Le chapô : il dit ce qui est identique et ce qui change, donc
            comment lire les quatre scènes qui suivent. Sans lui, on ne sait
            pas si les terrains sont quatre offres ou quatre variantes. */}
        <p className="lede mx-auto mt-6 max-w-[640px]">{t.lead}</p>

        {/* Ce que les quatre terrains partagent, dit une seule fois.
            Ces trois lignes étaient répétées dans chacune des quatre
            scènes : quinze puces sur vingt disaient la même chose, et il
            fallait les traverser quatre fois pour trouver les deux qui
            vous concernent. Remontées ici, elles libèrent les scènes pour
            ce qu'elles ont de particulier. */}
        <div className="mx-auto mt-10 max-w-[880px] border-y border-hair py-6 text-left">
          <div className="mb-4 text-center font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand">
            {t.commonLabel}
          </div>
          {/* Six pièces sur trois colonnes : deux rangées pleines. Un tiret
              rouge ouvre chaque ligne — sans lui, six phrases denses
              collées les unes aux autres se lisent comme un paragraphe. */}
          <ul className="m-0 grid list-none gap-x-7 gap-y-4 p-0 sm:grid-cols-3">
            {t.common.map((x) => (
              <li
                key={x}
                className="relative pl-5 font-sans text-[13px] leading-[1.5] text-chalk-55 before:absolute before:left-0 before:top-[0.62em] before:h-px before:w-3 before:bg-brand"
              >
                {x}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div ref={pinRef} className="tour-pin">
        <div className="tour-sticky">
          {t.scenes.map((s, i) => (
            <article key={s.k} className={`tour-scene ts-${i + 1}`}>
              <div className="ts-bg" aria-hidden />
              <div className="ts-inner mx-auto max-w-[1180px]">
                <div className="ts-k">{s.k}</div>
                <h3 className="ts-t">{s.t}</h3>
                <div className="ts-after-label">{t.afterLabel}</div>
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
                      {/* Les puces sont maintenant des phrases entières et
                          non des libellés suivis d'une précision : le gras
                          n'aurait plus rien à isoler. */}
                      {x}
                    </li>
                  ))}
                </ul>
                {/* Le numéro de scène est retiré : la jauge à droite dit déjà
                    où l'on en est, et « 02 / 04 » en gris parasitait la seule
                    action de la scène. Reste le nom de l'offre et la flèche. */}
                <Link href={s.href} className="ts-link no-underline">
                  {t.sceneCta} {s.t}
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </article>
          ))}
          <div className="tour-progress" aria-hidden>
            <span ref={fillRef} />
          </div>
        </div>
      </div>

      {/* L'espace du bloc est redistribué, pas augmenté : le total reste de
          24 unités comme avant, mais 14 passent au-dessus de la phrase et 10
          en dessous. Elle descend donc dans la hauteur déjà occupée, au lieu
          d'allonger la page. */}
      <div className="shell pt-14 pb-10 text-center">
        {/* Plus de surlignage ici : l'effet tient sur quelques mots, pas sur une
            phrase entière — une ligne complète en fond rouge devient une barre
            et écrase le bouton qui la suit. Italique seul, et le rouge est
            gardé pour la seule action de la section. */}
        <p className="accroche mx-auto mb-10 max-w-[620px] text-center">{t.outro}</p>
        <a href="https://buy.stripe.com/fZudR24EcgHicQC1N6f7i0e" target="_blank" rel="noopener" className="btn-primary">
          {t.cta}
        </a>
      </div>
    </section>
  )
}
