import { redirect } from "next/navigation"
import { STRIPE_LINKS } from "@/lib/config"

/**
 * Route retirée.
 *
 * Le paiement s'ouvre désormais directement depuis les pages de vente, sans
 * page de récapitulatif intermédiaire — décision explicite du studio. Cette
 * route redirige vers Stripe plutôt que de rester une impasse.
 */
export default async function LegacyCommanderRoute() {
  redirect(STRIPE_LINKS.architecture)
}
