import { redirect } from "next/navigation"
import { isLang } from "@/lib/lang"

/**
 * Ancienne fiche de lecture publique, neutralisée.
 *
 * Les lectures gratuites en libre accès sont retirées : plus de démonstration
 * publique des fiches RADAR, seulement l'inscription à la newsletter
 * hebdomadaire, proposée sur /radar. Cette route reste comme redirection —
 * un zip ne sait pas supprimer un fichier.
 */
export default async function LegacyLectureRoute({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>
}) {
  const { lang: raw } = await params
  const lang = isLang(raw) ? raw : "fr"
  redirect(`/${lang}/radar`)
}
