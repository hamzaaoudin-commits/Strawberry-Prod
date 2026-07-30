"use client"

import { LocaleLink as Link } from "@/components/locale-link"
import { useT, useLang } from "@/lib/i18n"
import { LanguageToggle } from "@/components/strawberry/language-toggle"
import { RADAR_COUNT } from "@/lib/config"

const EXPLORE_HREFS = ["/", "/offres", "/about", "/le-livre", "/strawberry-method"]
/**
 * Le bloc « Le Travail ».
 *
 * Chaque entrée porte son href ET ses libellés. L'ancienne version mappait deux
 * tableaux par index : dès que la liste anglaise et la liste française n'ont pas
 * eu la même longueur, tous les liens français ont glissé d'un cran.
 */
const WORK_LINKS: { href: string; label: Record<string, string> }[] = [
  // RADAR porte son compteur : un chiffre exact est une preuve, et c'est la
  // seule que ce lien discret puisse transporter.
  {
    href: "/radar",
    label: {
      fr: `RADAR — ${RADAR_COUNT} marques lues`,
      en: `RADAR — ${RADAR_COUNT} brands read`,
    },
  },
  { href: "/radar/acces", label: { fr: "Accès abonné", en: "Subscriber access" } },
  { href: "/brand-narrative-audit", label: { fr: "BRAND NARRATIVE AUDIT — 490€", en: "BRAND NARRATIVE AUDIT — 490€" } },
  { href: "/brand-narrative-architecture", label: { fr: "BRAND NARRATIVE ARCHITECTURE — 4 500€", en: "BRAND NARRATIVE ARCHITECTURE — 4,500€" } },
  { href: "/momentum", label: { fr: "MOMENTUM — au mois", en: "MOMENTUM — monthly" } },
  { href: "/sample-audit", label: { fr: "Les documents publiés", en: "The published documents" } },
]
const REACH_HREFS: { href: string; external?: boolean }[] = [
  { href: "/#contact" },
  { href: "https://instagram.com/strawberry_prods", external: true },
  { href: "mailto:Strawberryprod.contact@gmail.com" },
]

const LEGAL: Record<string, { label: string; href: string }[]> = {
  fr: [
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "CGV", href: "/cgv" },
    { label: "Politique de confidentialité", href: "/politique-confidentialite" },
  ],
  en: [
    { label: "Legal notice", href: "/legal-notice" },
    { label: "Terms", href: "/terms" },
    { label: "Privacy", href: "/privacy" },
  ],
}

const T = {
  en: {
    tagline: "A narrative perception studio. From Paris, for founders who refuse to sound like everyone else.",
    location: "Paris · France",
    hExplore: "Explore",
    hWork: "The Work",
    hReach: "Reach",
    explore: ["Home", "The offers", "About", "The Book", "The Method"],
    reach: ["Let's Talk", "Instagram", "Email"],
    rights: "All rights reserved.",
  },
  fr: {
    tagline: "Un studio de perception narrative. Depuis Paris, pour les fondateurs qui refusent de sonner comme tout le monde.",
    location: "Paris · France",
    hExplore: "Explorer",
    hWork: "Le Travail",
    hReach: "Contact",
    explore: ["Accueil", "Les offres", "À propos", "Le Livre", "La Méthode"],
    reach: ["Parlons-en", "Instagram", "Email"],
    rights: "Tous droits réservés.",
  },
}

const currentYear = new Date().getFullYear()

const linkClass = "font-sans text-[13px] text-chalk-55 no-underline transition-colors hover:text-white"
const headClass = "mb-6 font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-brand"

export function Footer() {
  const t = useT(T)
  const { lang } = useLang()
  const EXPLORE = t.explore.map((label, i) => ({ label, href: EXPLORE_HREFS[i] }))
  const WORK = WORK_LINKS.map((l) => ({ href: l.href, label: l.label[lang] ?? l.label.fr }))
  const REACH = t.reach.map((label, i) => ({ label, ...REACH_HREFS[i] }))

  return (
    <footer className="relative border-t border-hair bg-ink font-sans text-white">
      <div className="mx-auto max-w-[1280px] px-gutter pb-12 pt-20">
        <div className="mb-16 grid gap-8 md:gap-20 [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]">
          <div>
            <Link href="/" className="mb-5 inline-block font-serif text-[22px] font-bold tracking-[-0.02em] text-white no-underline">
              <span className="text-gradient">Strawberry</span> Prod.
            </Link>
            <p className="mb-5 max-w-[240px] text-[13px] leading-relaxed text-chalk-55">{t.tagline}</p>
            <div className="text-[11px] uppercase tracking-[0.1em] text-chalk-40">{t.location}</div>
          </div>

          <div>
            <div className={headClass}>{t.hExplore}</div>
            <div className="flex flex-col gap-3">
              {EXPLORE.map((l) => (
                <Link key={l.href} href={l.href} className={linkClass}>{l.label}</Link>
              ))}
            </div>
          </div>

          <div>
            <div className={headClass}>{t.hWork}</div>
            <div className="flex flex-col gap-3">
              {WORK.map((l) => (
                <Link key={l.href} href={l.href} className={linkClass}>{l.label}</Link>
              ))}
            </div>
          </div>

          <div>
            <div className={headClass}>{t.hReach}</div>
            <div className="flex flex-col gap-3">
              {REACH.map((l) =>
                l.external ? (
                  // noopener/noreferrer: stops the opened tab from reaching back
                  // into this page via window.opener, and strips the referrer.
                  <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer nofollow" className={linkClass}>
                    {l.label}
                  </a>
                ) : (
                  <Link key={l.href} href={l.href} className={linkClass}>{l.label}</Link>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* LEGAL STRIP — language toggle lives here, next to the legal links. */}
      <div className="border-t border-hair bg-black/30">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-4 px-gutter py-6">
          <div className="text-xs tracking-[0.02em] text-chalk-40">
            © {currentYear} Hamza El Jaouahiry — Strawberry Production. {t.rights}
          </div>

          <div className="flex flex-wrap items-center gap-5">
            {(LEGAL[lang] ?? LEGAL.fr).map((l) => (
              <Link key={l.href} href={l.href} className="text-xs text-chalk-55 no-underline transition-colors hover:text-white">
                {l.label}
              </Link>
            ))}
            <span className="h-3 w-px bg-white/15" aria-hidden />
            <LanguageToggle />
          </div>
        </div>
      </div>
    </footer>
  )
}
