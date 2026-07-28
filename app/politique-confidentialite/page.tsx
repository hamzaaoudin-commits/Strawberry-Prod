import { redirect } from "next/navigation"

/**
 * Route héritée d'avant le routage par langue.
 *
 * Vidée plutôt que supprimée : un zip ne sait pas retirer un fichier, et une
 * copie complète laissée là finit toujours par diverger — c'est ainsi que cette
 * page a longtemps affiché une politique de confidentialité dupliquée.
 *
 * next.config.mjs porte déjà une redirection permanente pour ce chemin ; ceci
 * est la ceinture en plus des bretelles. Le dossier peut être supprimé sans
 * risque.
 */
export default function LegacyRoute() {
  redirect("/fr/politique-confidentialite")
}
