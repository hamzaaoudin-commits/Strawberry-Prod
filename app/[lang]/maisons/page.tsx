import { redirect } from "next/navigation"
import { isLang } from "@/lib/lang"

/**
 * Page retirée.
 *
 * Le registre des Maisons ne fait plus partie du site. Redirection plutôt
 * que suppression — un zip ne peut pas retirer un fichier — vers la page qui
 * reste : BRAND NARRATIVE ARCHITECTURE.
 */
export default async function LegacyMaisonsRoute({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang: raw } = await params
  const lang = isLang(raw) ? raw : "fr"
  redirect(`/${lang}/brand-narrative-architecture`)
}
