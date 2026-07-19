import { redirect } from "next/navigation"

/**
 * Legacy flat URL, superseded by language routing.
 * Overwritten rather than deleted: a zip cannot remove files, and this keeps
 * indexed links and bookmarks working instead of 404-ing.
 */
export default function LegacyRoute() {
  redirect("/fr")
}
