import { redirect } from "next/navigation"

/**
 * /brand-narrative-architecture — page retirée.
 *
 * L'Architecture n'est plus une offre séparée : ses livrables — la
 * plateforme de marque, les playbooks, les textes réécrits — font partie
 * de l'offre unique, désormais nommée L'Architecture Narrative.
 *
 * Garder deux pages revenait à vendre deux fois la même chose à deux prix
 * différents, et la tournée de la home annonçait déjà les playbooks que
 * cette page facturait à part.
 *
 * Redirection conservée : l'adresse a été indexée et diffusée.
 */
export default async function ArchitectureRedirect({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  redirect(`/${lang}`)
}
