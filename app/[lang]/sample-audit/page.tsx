import { redirect } from "next/navigation"
import { isLang } from "@/lib/lang"

/**
 * Ancien emplacement d'un document publié.
 *
 * Les deux documents vivent désormais sous /documents. Ce fichier reste comme
 * redirection : un zip ne sait pas supprimer, et sans lui l'ancienne page
 * continuerait de s'afficher à côté de la nouvelle. Le dossier peut être
 * supprimé sans risque.
 */
export default async function LegacyDocumentRoute({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang: raw } = await params
  const lang = isLang(raw) ? raw : "fr"
  redirect(`/${lang}/documents/sillage`)
}
