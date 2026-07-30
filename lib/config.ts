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

/* ---------------------------------------------------------------------------
 * VALEURS À TENIR À JOUR À LA MAIN
 *
 * Tout ce qui suit s'affiche sur la home. Une rareté qui ne bouge jamais et un
 * compteur faux se retournent contre celui qui les publie : ces constantes
 * n'ont de valeur persuasive que si elles sont vraies. Les changer prend dix
 * secondes, et c'est le seul entretien que la page demande.
 * ------------------------------------------------------------------------- */

/**
 * La rareté, datée et décomptée. « Quatre commandes par trimestre » est une
 * affirmation ; « deux places, fermeture le 1er octobre » est une horloge.
 */
export const SCARCITY = {
  /** Le trimestre en cours, tel qu'affiché. */
  quarter: { fr: "T3 2026", en: "Q3 2026" },
  /** Places restantes sur les quatre du trimestre. Mettre 0 quand c'est complet. */
  remaining: 2,
  /** Ouverture du trimestre suivant. */
  nextOpening: { fr: "1er octobre", en: "October 1" },
} as const

/**
 * Nombre de marques disséquées dans RADAR depuis le lancement.
 * Un chiffre est une preuve — à condition d'être exact. À réajuster chaque mois.
 */
export const RADAR_COUNT = 340

/**
 * Lien d'achat ou de téléchargement du livre.
 * Tant qu'il pointe sur le formulaire de contact, la meilleure preuve
 * d'autorité du site est un cul-de-sac. Une seule ligne à changer.
 */
export const BOOK_URL = env(process.env.NEXT_PUBLIC_BOOK_URL, "/#contact")

/**
 * L'édition reliée, en supplément de la commande.
 * Elle était offerte sur demande : de l'exclusivité donnée gratuitement.
 * Fixer le prix ici — il s'affiche dans le bloc d'investissement.
 */
export const BOUND_EDITION = {
  price: { fr: "+ 500 €", en: "+ €500" },
} as const
