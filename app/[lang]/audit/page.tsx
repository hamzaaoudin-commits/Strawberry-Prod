import { redirect } from "next/navigation"
import { isLang } from "@/lib/lang"

/**
 * Ancien emplacement de l'audit à 490€.
 *
 * L'offre porte désormais son nom dans l'URL : /[langue]/brand-narrative-audit.
 * Ce fichier reste comme redirection permanente pour les liens déjà envoyés en
 * prospection, les signets et les pages indexées.
 */
export default async function LegacyAuditRoute({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang: raw } = await params
  const lang = isLang(raw) ? raw : "fr"
  redirect(`/${lang}/brand-narrative-audit`)
}
