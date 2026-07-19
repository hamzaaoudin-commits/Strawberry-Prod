import { redirect } from "next/navigation"

/**
 * The former case-studies page has been withdrawn.
 *
 * It presented composite houses as anonymised commissioners. Those same houses
 * appear in the studio's book as explicitly fictional teaching examples, which
 * made the page contradict its own source. It is replaced by the SILLAGE
 * document: a complete commission applied to a house that declares itself invented.
 *
 * Redirect stub rather than a deletion so the build never depends on a manual
 * file removal, and so indexed links resolve instead of 404-ing.
 */
export default function WithdrawnCaseStudiesPage() {
  redirect("/sample-audit")
}
