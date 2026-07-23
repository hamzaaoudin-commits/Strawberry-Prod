import { redirect } from "next/navigation"

/**
 * Les manifestes ne sont plus une page publique.
 *
 * Les neuf volumes font désormais partie de l'abonnement RADAR : ils donnent à
 * l'abonnement son épaisseur, et une doctrine publiée gratuitement ne se vend
 * pas deux fois. Redirection plutôt que suppression, pour que les liens
 * existants et l'indexation atterrissent sur l'offre.
 */
export default function ManifestoMoved() {
  redirect("/fr/radar")
}
