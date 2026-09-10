"use client"

import { useEffect } from "react"

/**
 * Les révélations au scroll de THE ROOM, activées pour tout le site.
 *
 * Le CSS de `.reveal` est porté dans globals.css, mais une classe seule ne
 * fait rien : il faut l'observateur qui pose `.shown` quand l'élément entre
 * dans le champ. C'est ce que fait `app.js` sur THE ROOM ; ce composant en
 * est l'équivalent, monté une fois dans le layout.
 *
 * Les mêmes réglages que l'original — seuil à 14%, marge basse de 8% pour
 * que l'élément soit franchement entré avant de s'afficher.
 *
 * Deux différences avec le script d'origine, imposées par React :
 *
 * 1. L'observateur est reposé à chaque changement de page. Sur un site
 *    statique la page se recharge ; ici la navigation est côté client, donc
 *    sans cela les `.reveal` d'une seconde page resteraient invisibles à
 *    jamais — le pire des symptômes, du contenu qui n'apparaît pas.
 * 2. Sous `prefers-reduced-motion`, on marque tout comme affiché sans rien
 *    observer.
 */
export function RevealOnScroll() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const attach = () => {
      const els = document.querySelectorAll<HTMLElement>(".reveal:not(.shown)")
      if (!els.length) return null

      if (reduced) {
        els.forEach((el) => el.classList.add("shown"))
        return null
      }

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("shown")
              io.unobserve(e.target)
            }
          })
        },
        { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
      )
      els.forEach((el) => io.observe(el))
      return io
    }

    let io = attach()

    // Filet : du contenu peut arriver après le premier rendu (une section
    // repliée qu'on ouvre, une liste chargée). On repasse une fois, plutôt
    // que de laisser un élément coincé à opacité zéro.
    const retry = window.setTimeout(() => {
      io?.disconnect()
      io = attach()
    }, 600)

    return () => {
      window.clearTimeout(retry)
      io?.disconnect()
    }
  }, [])

  return null
}
