"use client"

import { useEffect, useState } from "react"

/**
 * L'animation de logo au chargement.
 *
 * Les lettres apparaissent l'une après l'autre plutôt que le mot entier d'un
 * bloc — la version précédente transitionnait bien tout le mot, mais
 * visuellement ça se voyait à peine. Chaque lettre est un span animé
 * séparément, décalé de quelques dizaines de millisecondes par rapport à la
 * précédente.
 *
 * Pour ne pas revenir sur le travail de vitesse fait sur le reste du site :
 * - Ne bloque rien. La page en dessous se charge et devient interactive
 *   normalement ; ceci n'est qu'un calque par-dessus qui s'efface. Le temps
 *   de chargement réel ne change pas — seul le temps avant que l'écran soit
 *   dégagé change (environ 3,5 secondes), et seulement à la première visite
 *   de la session.
 * - Une seule fois par onglet. sessionStorage retient qu'elle a déjà joué :
 *   elle ne rejoue pas à chaque navigation interne.
 * - Respecte prefers-reduced-motion : rien ne s'affiche si l'utilisateur a
 *   demandé moins d'animations.
 * - CSS uniquement (transform/opacity), pas de boucle JS.
 * - Cliquer ou appuyer une touche passe l'animation immédiatement.
 */

const SESSION_KEY = "sp_intro_seen"
const WORD = "Strawberry Prod."

export function LoadingIntro() {
  const [phase, setPhase] = useState<"hidden" | "in" | "hold" | "out" | "done">("hidden")

  useEffect(() => {
    if (typeof window === "undefined") return

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const seen = window.sessionStorage.getItem(SESSION_KEY)
    if (reduced || seen) {
      setPhase("done")
      return
    }

    window.sessionStorage.setItem(SESSION_KEY, "1")
    setPhase("in")
    const t1 = setTimeout(() => setPhase("hold"), 150)
    const t2 = setTimeout(() => setPhase("out"), 2700)
    const t3 = setTimeout(() => setPhase("done"), 3100)

    const skip = () => setPhase("done")
    window.addEventListener("keydown", skip, { once: true })
    window.addEventListener("pointerdown", skip, { once: true })

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      window.removeEventListener("keydown", skip)
      window.removeEventListener("pointerdown", skip)
    }
  }, [])

  if (phase === "done" || phase === "hidden") return null

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[999] flex items-center justify-center bg-[#0a0a0a] transition-opacity duration-[400ms] ease-out ${
        phase === "out" ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <span className="font-serif text-[clamp(2rem,7vw,3.6rem)] font-bold tracking-[-0.02em]">
        {WORD.split("").map((ch, i) => (
          <span
            key={i}
            className={`inline-block transition-all ease-out ${
              i < 10 ? "text-gradient" : "text-white"
            } ${phase === "in" ? "translate-y-3 opacity-0" : "translate-y-0 opacity-100"}`}
            style={{
              transitionDuration: "450ms",
              transitionDelay: phase === "in" ? "0ms" : `${i * 28}ms`,
              whiteSpace: ch === " " ? "pre" : "normal",
            }}
          >
            {ch}
          </span>
        ))}
      </span>
    </div>
  )
}
