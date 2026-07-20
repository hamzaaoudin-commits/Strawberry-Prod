import { redirect } from "next/navigation"

/**
 * Withdrawn.
 *
 * This page presented composite houses as anonymised commissioners. The same
 * houses appear in the studio's book as explicitly fictional teaching examples,
 * which made the page contradict its own source. It is replaced by the SILLAGE
 * document — a complete commission applied to a house that declares itself invented.
 *
 * Kept as a redirect rather than deleted: a zip cannot remove files, and this
 * also stops the old page importing form internals that no longer exist.
 */
export default function WithdrawnCaseStudies() {
  redirect("/fr/sample-audit")
}
