"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useT } from "@/lib/i18n"

const T = {
  fr: {
    offers: "Offres",
    about: "À propos",
    method: "La Méthode",
    cases: "Études de cas",
    manifesto: "Manifeste",
    cta: "Parlons-en",
    menu: "Menu",
    offersMenu: [
      { label: "RADAR — 15€/mois", href: "/radar" },
      { label: "BRAND NARRATIVE ARCHITECTURE — 4 500€", href: "/brand-narrative-audit" },
      { label: "MOMENTUM — au mois", href: "/momentum" },
    ],
  },
  en: {
    offers: "Offers",
    about: "About",
    method: "The Method",
    cases: "Case Studies",
    manifesto: "Manifesto",
    cta: "Let's Talk",
    menu: "Menu",
    offersMenu: [
      { label: "RADAR — 15€/mo", href: "/radar" },
      { label: "BRAND NARRATIVE ARCHITECTURE — 4,500€", href: "/brand-narrative-audit" },
      { label: "MOMENTUM — retainer", href: "/momentum" },
    ],
  },
  es: {
    offers: "Ofertas",
    about: "Nosotros",
    method: "El Método",
    cases: "Casos",
    manifesto: "Manifiesto",
    cta: "Hablemos",
    menu: "Menú",
    offersMenu: [
      { label: "RADAR — 15€/mes", href: "/radar" },
      { label: "BRAND NARRATIVE ARCHITECTURE — 4.500€", href: "/brand-narrative-audit" },
      { label: "MOMENTUM — mensual", href: "/momentum" },
    ],
  },
}

export function NavBar() {
  const t = useT(T)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [offersOpen, setOffersOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close the mobile drawer on Escape — keyboard users shouldn't get trapped.
  useEffect(() => {
    if (!mobileOpen && !offersOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false)
        setOffersOpen(false)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [mobileOpen, offersOpen])

  const NAV_LINKS = [
    { label: t.about, href: "/about" },
    { label: t.method, href: "/strawberry-method" },
    { label: t.cases, href: "/case-studies" },
    { label: t.manifesto, href: "/manifesto" },
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
          <div
            className="relative"
            onMouseEnter={() => setOffersOpen(true)}
            onMouseLeave={() => setOffersOpen(false)}
          >
            <button
              type="button"
              onClick={() => setOffersOpen((v) => !v)}
              aria-expanded={offersOpen}
              className={[
                "flex items-center gap-1.5 font-sans text-sm tracking-[0.04em] transition-colors",
                offersOpen ? "text-white" : "text-chalk-65 hover:text-white",
              ].join(" ")}
            >
              {t.offers}
              <span className={`text-[9px] transition-transform ${offersOpen ? "rotate-180" : ""}`}>▼</span>
            </button>

            {offersOpen && (
              <div className="absolute left-1/2 top-full -translate-x-1/2 pt-4">
                <div className="min-w-[330px] rounded-xl border border-white/10 bg-[#0e0e0e]/95 p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl">
                  {t.offersMenu.map((o) => (
                    <Link
                      key={o.href}
                      href={o.href}
                      onClick={() => setOffersOpen(false)}
                      className="block rounded-lg px-3.5 py-2.5 font-sans text-[13px] text-chalk-75 no-underline transition-colors hover:bg-brand/10 hover:text-white"
                    >
                      {o.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-sans text-sm tracking-[0.04em] text-chalk-65 no-underline transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          ))}

          <Link
            href="/#contact"
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
            <div className="kicker">{t.offers}</div>
            {t.offersMenu.map((o) => (
              <Link
                key={o.href}
                href={o.href}
                onClick={() => setMobileOpen(false)}
                className="pl-3 font-sans text-[14.5px] text-chalk-75 no-underline"
              >
                {o.label}
              </Link>
            ))}
            <div className="my-1.5 h-px bg-white/10" />
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
              href="/#contact"
              onClick={() => setMobileOpen(false)}
              className="rounded-full px-6 py-3 text-center font-sans text-sm font-semibold text-white no-underline"
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
