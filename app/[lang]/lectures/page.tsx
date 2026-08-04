import { redirect } from "next/navigation"
import { isLang } from "@/lib/lang"

/**
 * Route retirée.
 *
 * Les lectures gratuites en libre accès sont supprimées : plus de démonstration
 * publique des fiches RADAR. La seule porte d'entrée gratuite est désormais
 * l'inscription à la newsletter, qui envoie une lecture par semaine par email
 * — proposée directement sur /radar.
 */
export default async function LegacyLecturesRoute({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang: raw } = await params
  const lang = isLang(raw) ? raw : "fr"
  redirect(`/${lang}/radar`)
}
