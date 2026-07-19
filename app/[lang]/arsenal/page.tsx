import { redirect } from "next/navigation"

/**
 * ARSENAL has been retired from the offer ladder.
 *
 * Redirect stub — see app/nova/page.tsx for the rationale. Safe to delete this
 * folder; next.config.mjs carries a permanent redirect for /arsenal.
 */
export default function RetiredArsenalPage() {
  redirect("/")
}
