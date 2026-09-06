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

  /**
   * Paiement en trois fois pour l'architecture.
   *
   * À CRÉER dans Stripe (abonnement de 3 échéances de 1 500€, ou lien de
   * paiement échelonné), puis à coller dans NEXT_PUBLIC_STRIPE_ARCH_3X_URL.
   * Tant qu'il vaut la valeur par défaut, l'option n'est pas proposée : mieux
   * vaut ne rien annoncer qu'annoncer un paiement fractionné qui n'existe pas.
   */
  architecture3x: env(process.env.NEXT_PUBLIC_STRIPE_ARCH_3X_URL, ""),
} as const

/** Le paiement fractionné n'est affiché que lorsqu'il existe réellement. */
export const HAS_3X = STRIPE_LINKS.architecture3x.length > 0

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
    /**
     * Même date que `nextOpening` ci-dessus, au format ISO — sert à calculer
     * le compte à rebours en jours affiché à côté. Les deux doivent rester
     * synchronisées à la main : ce n'est pas calculé à partir de l'autre,
     * volontairement, pour qu'un oubli de mise à jour se voie tout de suite
     * plutôt que de dériver en silence.
     */
    nextOpeningDate: "2026-10-01",
    /**
     * Date de clôture des candidatures pour le trimestre en cours.
     * Laisser vide tant qu'elle n'est pas réelle : une échéance inventée est
     * exactement ce qu'un fondateur repère, et le studio vend de la crédibilité.
     */
    closesOn: { fr: "", en: "" },
  },
} as const

/**
 * Le livre.
 *
 * `BOOK_URL` pointe vers le lien Stripe de vente directe. À remplacer si le
 * lien Stripe change — `NEXT_PUBLIC_BOOK_URL` permet de le faire depuis
 * Vercel sans toucher au code.
 */
export const BOOK_URL = env(process.env.NEXT_PUBLIC_BOOK_URL, "https://buy.stripe.com/cNi6oAb2A4YA9EqfDWf7i0f")

/**
 * La cohorte.
 *
 * Le studio vend une appartenance autant qu'un document : on entre dans les
 * Maisons. Le registre est public et tenu à la main — chaque entrée doit
 * correspondre à une commande réelle, sauf les deux maisons de démonstration,
 * qui sont déclarées comme telles.
 *
 * `nextNumber` est le numéro que portera la prochaine commande. Il s'affiche
 * sur le site : il ne doit jamais être gonflé.
 */
export const HOUSES = {
  nextNumber: 12,
  register: [
    { n: "001", name: "SILLAGE", sector: { fr: "Logiciel de chantier", en: "Construction software" }, demo: true, href: "/documents/sillage" },
    { n: "002", name: "VERSO", sector: { fr: "Reliure d'art", en: "Art bindery" }, demo: true, href: "/documents/verso" },
  ],
} as const
