import { redirect } from "next/navigation"

/**
 * NOVA has been retired from the offer ladder.
 *
 * This file exists as a redirect stub rather than being deleted so that the
 * build never depends on a manual file deletion, and so any existing link,
 * bookmark or indexed URL lands somewhere useful instead of a 404.
 *
 * Safe to delete this folder entirely — next.config.mjs carries a permanent
 * redirect for /nova that takes over once the route is gone.
 */
export default function RetiredNovaPage() {
  redirect("/")
}
