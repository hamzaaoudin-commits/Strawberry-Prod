import { redirect } from "next/navigation"

/**
 * RADAR n'est plus une offre du site.
 *
 * L'abonnement a été retiré — nav, footer, formulaire de contact, FAQ, et
 * la page elle-même. Redirection plutôt que suppression du dossier, pour
 * que les liens existants et l'indexation n'atterrissent pas sur une 404.
 */
export default async function RadarRemoved({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  redirect(`/${lang}`)
}
