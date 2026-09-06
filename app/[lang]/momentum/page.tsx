import { redirect } from "next/navigation"

/**
 * Route retirée lors du passage du site à deux portes (Marques et Lieux).
 * Redirection plutôt que suppression du dossier : un patch ne peut pas
 * retirer un fichier, et les liens indexés doivent résoudre plutôt que
 * renvoyer une 404. Le dossier peut être supprimé du dépôt à la main.
 */
export default async function RetiredRoute({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  redirect(`/${lang}`)
}
