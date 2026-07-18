/**
 * Centralised runtime configuration.
 *
 * Values come from environment variables so that IDs and endpoints are never
 * hardcoded in source. Copy `.env.example` to `.env.local` and fill it in.
 *
 * NEXT_PUBLIC_* variables are inlined into the client bundle and are therefore
 * PUBLIC by definition. Only put non-secret identifiers here (a Formspree form
 * ID and a Stripe payment link are both public by design — they are safe to
 * expose, but keeping them in env keeps the code clean and lets you rotate them
 * without a code change). Never put an API secret key in a NEXT_PUBLIC_ var.
 */

function required(value: string | undefined, name: string): string {
  if (!value) {
    // Fail loudly at build time rather than silently posting to nowhere.
    throw new Error(`Missing environment variable: ${name}`)
  }
  return value
}

const FORMSPREE_ID = required(process.env.NEXT_PUBLIC_FORMSPREE_ID, "NEXT_PUBLIC_FORMSPREE_ID")

export const FORMSPREE_URL = `https://formspree.io/f/${FORMSPREE_ID}`

export const STRIPE_LINKS = {
  audit: process.env.NEXT_PUBLIC_STRIPE_AUDIT_URL ?? "/#contact",
  nova: process.env.NEXT_PUBLIC_STRIPE_NOVA_URL ?? "/#contact",
  radar: process.env.NEXT_PUBLIC_STRIPE_RADAR_URL ?? "/#contact",
  arsenal: process.env.NEXT_PUBLIC_STRIPE_ARSENAL_URL ?? "/#contact",
} as const

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.gostrawberryprod.com"
