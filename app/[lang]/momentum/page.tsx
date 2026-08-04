import { redirect } from "next/navigation"
import { isLang } from "@/lib/lang"

/**
 * Offre retirée.
 *
 * MOMENTUM ne fait plus partie des offres commerciales du studio. Cette
 * route reste comme redirection — un zip ne sait pas supprimer un fichier —
 * et renvoie vers l'offre qui reste : BRAND NARRATIVE ARCHITECTURE.
 *
 * /momentum/atelier n'est pas touché : c'est l'espace privé des maisons déjà
 * accompagnées, pas une page marketing. Le retirer couperait l'accès de
 * clients actifs à leur espace de livraison.
 */
export default async function LegacyMomentumRoute({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang: raw } = await params
  const lang = isLang(raw) ? raw : "fr"
  redirect(`/${lang}/brand-narrative-architecture`)
}
