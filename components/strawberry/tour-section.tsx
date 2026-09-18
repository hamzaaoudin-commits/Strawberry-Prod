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
    terrainsLabel: "Le même audit, quel que soit ce que vous vendez",
    terrains: [
      { n: "BRAND", d: "Marques & entreprises", href: "/marques-entreprises" },
      { n: "THE PRODUCT", d: "Produits", href: "/the-product" },
      { n: "THE ROOM", d: "Lieux", href: "/the-room" },
      { n: "THE NAME", d: "Artistes & fondateurs", href: "/the-name" },
    ],
    lead: "Une agence s'arrête à la plateforme de marque. Nous commençons par elle — puis nous écrivons les décisions à prendre et ce que vos équipes en font le lundi matin.",
    kicker: "Un audit, quatre terrains",
    title: "Une plateforme de marque ne décide rien. Nous écrivons ce qu'elle vous oblige à faire.",
    afterLabel: "Après l'audit",
    ptsLabel: "Sur ce terrain précisément",
    sceneCta: "Voir",
    outro: "Tout ça existe déjà chez vous. Il faut juste l'écrire.",
    cta: "Commander l'audit →",
    scenes: [
      {
        k: "Pièce 01",
        t: "LA PLATEFORME",
        line: "Raison d'être, positionnement, valeurs, personnalité, ton de voix.",
        points: ["Exactement ce qu'une agence facture entre 10 000 et 40 000 € — et ce par quoi nous commençons", "Écrite à partir de ce que vous publiez déjà, pas d'un atelier où vous parlez pendant trois heures"],
        href: "/marques-entreprises",
      },
      {
        k: "Pièce 02",
        t: "LE DIAGNOSTIC",
        line: "Vos supports dépouillés un par un, les occurrences comptées, les écarts relevés.",
        points: ["Site, plaquette, discours commercial, emballage, fiche Google, avis clients — selon votre terrain", "Les contradictions entre deux de vos propres pages, celles que vous ne pouvez pas voir seul"],
        href: "/marques-entreprises",
      },
      {
        k: "Pièce 03",
        t: "LA CARTE",
        line: "3 à 5 concurrents, leur phrase exacte citée, et le terrain qu'ils laissent libre.",
        points: ["Le mot que trois d'entre eux revendiquent déjà, et que vous devez cesser d'employer", "Celui que vous êtes seul à pouvoir tenir, avec la preuve que personne ne l'occupe"],
        href: "/marques-entreprises",
      },
      {
        k: "Pièce 04",
        t: "LES DÉCISIONS",
        line: "3 à 5 mouvements ordonnés : la formulation exacte, où la mettre, ce qu'elle coûte.",
        points: ["Chacun chiffré : ce qu'il fait gagner, et ce qu'il vous fait perdre — nommé, pas caché", "Dans l'ordre, avec ce qu'il faut faire avant toute refonte visuelle"],
        href: "/marques-entreprises",
      },
      {
        k: "Pièce 05",
        t: "LES PLAYBOOKS",
        line: "Ce que vos équipes font au quotidien : vente, contenu, réseaux, support, recrutement.",
        points: ["Applicables par quelqu'un qui n'était pas dans la conversation — un nouvel arrivant, une agence", "Le trait disqualifiant à l'embauche, la ligne à ne jamais franchir en support, le format tenable"],
        href: "/marques-entreprises",
      },
      {
        k: "Pièce 06",
        t: "LE LANGAGE",
        line: "Le lexique et les textes réécrits, prêts à coller.",
        points: ["Les mots à employer, ceux à cesser d'employer, et pourquoi — pour toute la maison", "Utilisables tels quels par vos équipes comme par votre outil IA : c'est écrit pour ça"],
        href: "/marques-entreprises",
      },
    ],
  },
  en: {
    terrainsLabel: "The same audit, whatever you sell",
    terrains: [
      { n: "BRAND", d: "Brands & companies", href: "/marques-entreprises" },
      { n: "THE PRODUCT", d: "Products", href: "/the-product" },
      { n: "THE ROOM", d: "Venues", href: "/the-room" },
      { n: "THE NAME", d: "Artists & founders", href: "/the-name" },
    ],
    lead: "An agency stops at the brand platform. We start there — then we write the decisions to make, and what your teams do with them on Monday morning.",
    kicker: "One audit, four grounds",
    title: "A brand platform decides nothing. We write what it obliges you to do.",
    afterLabel: "After the audit",
    ptsLabel: "On this ground specifically",
    sceneCta: "See",
    outro: "All of it already exists. It just needs writing.",
    cta: "Order the audit →",
    scenes: [
      {
        k: "Piece 01",
        t: "THE PLATFORM",
        line: "Purpose, positioning, values, personality, tone of voice.",
        points: ["Exactly what an agency charges €10,000 to €40,000 for — and where we start", "Written from what you already publish, not from a workshop where you talk for three hours"],
        href: "/marques-entreprises",
      },
      {
        k: "Piece 02",
        t: "THE DIAGNOSIS",
        line: "Your supports gone through one by one, occurrences counted, gaps recorded.",
        points: ["Site, brochure, sales pitch, packaging, Google listing, reviews — depending on your ground", "The contradictions between two of your own pages, the ones you cannot see alone"],
        href: "/marques-entreprises",
      },
      {
        k: "Piece 03",
        t: "THE MAP",
        line: "3 to 5 competitors, their exact sentence quoted, and the ground they leave open.",
        points: ["The word three of them already claim, and that you must stop using", "The one only you can hold, with the proof that nobody occupies it"],
        href: "/marques-entreprises",
      },
      {
        k: "Piece 04",
        t: "THE DECISIONS",
        line: "3 to 5 ordered moves: the exact wording, where to put it, what it costs.",
        points: ["Each one measured: what it gains and what it loses you — named, not hidden", "In order, with what to do before any visual rebrand"],
        href: "/marques-entreprises",
      },
      {
        k: "Piece 05",
        t: "THE PLAYBOOKS",
        line: "What your teams do day to day: sales, content, social, support, hiring.",
        points: ["Usable by someone who was not in the conversation — a new hire, an agency", "The disqualifying trait when hiring, the line never to cross in support, the format you can sustain"],
        href: "/marques-entreprises",
      },
      {
        k: "Piece 06",
        t: "THE LANGUAGE",
        line: "The lexicon and the rewritten copy, ready to paste.",
        points: ["Words to use, words to stop using, and why — for the whole house", "Usable as they are by your teams and by your AI tool: that is what they are written for"],
        href: "/marques-entreprises",
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

        {/* Les quatre terrains, en bandeau.
            Ils disent « c'est pour vous » ; les six scènes qui suivent
            disent « voici ce que vous recevez ». On se reconnaît avant de
            lire un sommaire, pas l'inverse. */}
        <div className="mx-auto mt-10 max-w-[880px]">
          <div className="mb-4 text-center font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand">
            {t.terrainsLabel}
          </div>
          <div className="grid grid-cols-2 gap-px bg-white/10 sm:grid-cols-4">
            {t.terrains.map((x) => (
              <Link
                key={x.n}
                href={x.href}
                className="group bg-ink px-4 py-4 text-center no-underline transition-colors hover:bg-white/[0.03]"
              >
                <div className="font-serif text-[15px] font-bold tracking-[-0.005em] text-brand transition-colors group-hover:text-white">
                  {x.n}
                </div>
                <div className="mt-1 font-sans text-[11.5px] text-chalk-40">{x.d}</div>
              </Link>
            ))}
          </div>
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
