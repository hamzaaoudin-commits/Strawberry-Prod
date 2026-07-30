/**
 * Centralised runtime configuration.
 *
 * Every value has a working default, so the site builds and deploys even when
 * no environment variables are set. Setting them in .env.local (or in the
 * Vercel dashboard) overrides the default without touching code.
 *
 * IMPORTANT — nothing in this file may throw at module scope. This module is
 * imported by components that are prerendered at build time, so a throw here
 * takes down the whole build. Missing config degrades gracefully instead.
 *
 * NEXT_PUBLIC_* values are inlined into the client bundle and are therefore
 * PUBLIC by definition. A Formspree form ID and a Stripe payment link are both
 * public by design — safe to expose, and kept in env only so they can be
 * rotated without a code change. Never put a secret API key in a NEXT_PUBLIC_
 * variable.
 */

/** Read an env var, falling back to a default when unset or empty. */
function env(value: string | undefined, fallback: string): string {
  const v = value?.trim()
  return v && v.length > 0 ? v : fallback
}

/**
 * Submissions go to our own API route, never straight to the form provider.
 *
 * The provider's ID now lives in a server-only variable (FORMSPREE_ID) read by
 * app/api/contact/route.ts. Nothing in the browser bundle reveals where the
 * data ultimately goes, so the endpoint cannot be scraped and flooded.
 */
export const CONTACT_ENDPOINT = "/api/contact"

/**
 * Stripe payment links. Anything not yet created falls back to the contact
 * anchor, so a missing link sends the visitor somewhere useful instead of 404.
 */
export const STRIPE_LINKS = {
  architecture: env(process.env.NEXT_PUBLIC_STRIPE_AUDIT_URL, "https://buy.stripe.com/fZu8wIb2A62E9Eq8buf7i0b"),
  audit490: env(process.env.NEXT_PUBLIC_STRIPE_AUDIT490_URL, "https://buy.stripe.com/fZudR24EcgHicQC1N6f7i0e"),
  radar: env(process.env.NEXT_PUBLIC_STRIPE_RADAR_URL, "https://buy.stripe.com/3cI9AM1s0bmY7widvOf7i0c"),
  momentum: env(process.env.NEXT_PUBLIC_STRIPE_MOMENTUM_URL, "https://buy.stripe.com/7sYdR26Mk0IkeYKcrKf7i0d"),
} as const

export const SITE_URL = env(process.env.NEXT_PUBLIC_SITE_URL, "https://www.gostrawberryprod.com")

/**
 * Valeurs vivantes de la page d'accueil.
 *
 * Elles sont ici, et nulle part ailleurs, pour être modifiables à la main sans
 * toucher au moindre composant. Aucune n'est calculée : une rareté ou un
 * compteur inventés par le code seraient de la preuve fabriquée.
 */
export const LIVE = {
  /** Rareté. À mettre à jour à chaque place vendue et à chaque trimestre. */
  scarcity: {
    period: "T3 2026",
    remaining: 2,
    total: 4,
    nextOpening: { fr: "1er octobre", en: "1 October" },
  },

  /**
   * Compteur RADAR. À REMPLACER par le nombre réel de marques publiées.
   * `since` est le mois de départ affiché à côté du chiffre.
   */
  radar: {
    count: 340,
    since: { fr: "janvier", en: "January" },
  },
} as const

/**
 * Le livre.
 *
 * `BOOK_URL` doit pointer vers la page de vente ou de téléchargement réelle.
 * Tant qu'elle vaut la valeur par défaut, la page du livre affiche le
 * formulaire de contact — ce qui fait de la meilleure preuve d'autorité du
 * studio un cul-de-sac. À changer en priorité.
 */
export const BOOK_URL = env(process.env.NEXT_PUBLIC_BOOK_URL, "/#contact")

/**
 * L'Objet relié : édition numérotée, reliée à la main, signée.
 * Vendu en supplément de l'architecture au lieu d'être offert sur demande.
 */
export const BOUND_OBJECT = {
  price: env(process.env.NEXT_PUBLIC_BOUND_OBJECT_PRICE, "490€"),
  url: env(process.env.NEXT_PUBLIC_STRIPE_BOUND_OBJECT_URL, "/#contact"),
} as const
