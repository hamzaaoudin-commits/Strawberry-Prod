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

/** Public Formspree form ID. Override with NEXT_PUBLIC_FORMSPREE_ID. */
const FORMSPREE_ID = env(process.env.NEXT_PUBLIC_FORMSPREE_ID, "xnjwroeq")

export const FORMSPREE_URL = `https://formspree.io/f/${FORMSPREE_ID}`

/**
 * Stripe payment links. Anything not yet created falls back to the contact
 * anchor, so a missing link sends the visitor somewhere useful instead of 404.
 */
export const STRIPE_LINKS = {
  architecture: env(process.env.NEXT_PUBLIC_STRIPE_AUDIT_URL, "https://buy.stripe.com/fZu8wIb2A62E9Eq8buf7i0b"),
  audit490: env(process.env.NEXT_PUBLIC_STRIPE_AUDIT490_URL, "/#contact"),
  radar: env(process.env.NEXT_PUBLIC_STRIPE_RADAR_URL, "/#contact"),
} as const

export const SITE_URL = env(process.env.NEXT_PUBLIC_SITE_URL, "https://www.gostrawberryprod.com")
