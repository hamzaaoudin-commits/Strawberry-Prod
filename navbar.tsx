"use client"

import { useState, useEffect } from "react"
import { LocaleLink as Link } from "@/components/locale-link"
import { useT } from "@/lib/i18n"

/**
 * La navigation.
 *
 * Le menu déroulant des offres a disparu : il posait quatre prix côte à côte
 * dès la première seconde, avant même que le lecteur sache ce que le studio
 * fait. Il est remplacé par un lien unique vers /offres, au même poids visuel
 * que les autres.
 *
 * Le bouton de droite ne dit plus « Parlons-en » — un geste tiède, qui menait à
 * un formulaire. Il porte le même geste que le reste de la page : commander le
 * travail. Un site à une seule action nomme cette action partout de la même
 * façon.
 */

const T = {
  fr: {
    offers: "Offres",
    about: "À propos",
    method: "La Méthode",
    cta: "Commander le travail",
    menu: "Menu",
  },
  en: {
    offers: "Offers",
    about: "About",
    method: "The Method",
    cta: "Commission the Work",
    menu: "Menu",
  },
}

export function NavBar() {
  const t = useT(T)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close the mobile drawer on Escape — keyboard users shouldn't get trapped.
  useEffect(() => {
    if (!mobileOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [mobileOpen])

  const NAV_LINKS = [
    { label: t.offers, href: "/offres" },
    { label: t.method, href: "/strawberry-method" },
    { label: t.about, href: "/about" },
  ]

  return (
    <nav
      className={[
        "fixed inset-x-0 top-0 z-[100] px-gutter transition-all duration-300",
        scrolled ? "border-b border-hair bg-ink/85 backdrop-blur-xl" : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between">
        <Link href="/" className="font-serif text-[22px] font-bold tracking-[-0.02em] text-white no-underline">
          <span className="text-gradient">Strawberry</span> Prod.
        </Link>

        <button
          type="button"
          className="text-2xl text-white md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-label={t.menu}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>

        <div className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-sans text-sm tracking-[0.04em] text-chalk-55 no-underline transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          ))}

          <Link
            href="/brand-narrative-architecture"
            className="rounded-full px-5 py-2.5 font-sans text-[13px] font-semibold tracking-[0.04em] text-white no-underline"
            style={{ background: "linear-gradient(135deg,#e63946,#ff1a1a)" }}
          >
            {t.cta}
          </Link>
        </div>
      </div>

      {mobileOpen && (
        <div className="absolute inset-x-0 top-[72px] max-h-[80vh] overflow-y-auto border-b border-hair bg-ink/95 px-6 py-6 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="font-sans text-base text-chalk-75 no-underline"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/brand-narrative-architecture"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-full px-6 py-3 text-center font-sans text-sm font-semibold text-white no-underline"
              style={{ background: "linear-gradient(135deg,#e63946,#ff1a1a)" }}
            >
              {t.cta}
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
