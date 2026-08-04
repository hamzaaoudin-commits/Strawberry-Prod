import { redirect } from "next/navigation"
import { isLang } from "@/lib/lang"

/**
 * Route retirée.
 *
 * La page d'échelle comparant les quatre offres n'apporte pas assez pour
 * justifier son existence : chaque offre a déjà sa propre page, accessible
 * depuis le pied de page.
 */
export default async function LegacyOffresRoute({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang: raw } = await params
  const lang = isLang(raw) ? raw : "fr"
  redirect(`/${lang}/brand-narrative-architecture`)
}
