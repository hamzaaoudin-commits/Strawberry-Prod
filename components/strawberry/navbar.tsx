"use client"

import { useState, useEffect } from "react"
import { LocaleLink as Link } from "@/components/locale-link"
import { useT } from "@/lib/i18n"

const T = {
  fr: {
    offers: "Pour qui",
    about: "Le Studio",
    method: "La Méthode",
    cta: "Commander l'audit",
    menu: "Menu",
    offersMenu: [
      { label: "BRAND", sub: "Marques & entreprises", href: "/marques-entreprises" },
      { label: "THE PRODUCT", sub: "Produits", href: "/the-product" },
      { label: "THE ROOM", sub: "Lieux", href: "/the-room" },
      { label: "THE NAME", sub: "Artistes & fondateurs", href: "/the-name" },
      { label: "L'ARCHITECTURE", sub: "Après l'audit · 4 500 €", href: "/brand-narrative-architecture", sep: true },
    ],
  },
  en: {
    offers: "Who for",
    about: "The Studio",
    method: "The Method",
    cta: "Order the audit",
    menu: "Menu",
    offersMenu: [
      { label: "BRAND", sub: "Brands & companies", href: "/marques-entreprises" },
      { label: "THE PRODUCT", sub: "Products", href: "/the-product" },
      { label: "THE ROOM", sub: "Venues", href: "/the-room" },
      { label: "THE NAME", sub: "Artists & founders", href: "/the-name" },
      { label: "THE ARCHITECTURE", sub: "After the audit · 4,500 €", href: "/brand-narrative-architecture", sep: true },
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
          <span className="text-brand">STRAWBERRY PROD.</span>
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
                      className={`block rounded-lg px-3.5 py-2.5 no-underline transition-colors hover:bg-brand/10 ${
                        "sep" in o && o.sep ? "mt-2 border-t border-brand/40 pt-3.5" : ""
                      }`}
                    >
                      <div className="font-sans text-[13px] text-chalk-90">{o.label}</div>
                      <div className="mt-0.5 font-sans text-[11px] text-chalk-40">{o.sub}</div>
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

          {/* Un anneau qui respire autour du bouton, très doucement — signale
              le CTA sans clignoter ni distraire de la lecture. */}
          <div className="relative inline-block">
            <span
              aria-hidden
              className="absolute -inset-1 rounded-full border border-brand/50"
              style={{ animation: "sp-navpulse 2.4s ease-out infinite" }}
            />
            <Link
              href="/brand-narrative-audit"
              className="relative rounded-full px-5 py-2.5 font-sans text-[13px] font-semibold tracking-[0.04em] text-white no-underline"
              style={{ background: "linear-gradient(135deg,#e63946,#ff1a1a)" }}
            >
              {t.cta}
            </Link>
          </div>
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
                className="pl-3 no-underline"
              >
                <div className="font-sans text-[14.5px] text-chalk-75">{o.label}</div>
                <div className="mt-0.5 font-sans text-[12px] text-chalk-40">{o.sub}</div>
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
              href="/brand-narrative-audit"
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
