import { redirect } from "next/navigation"

/**
 * NOCTA was merged into MOMENTUM.
 *
 * Redirect stub so the old URL keeps working. Safe to delete this folder;
 * next.config.mjs carries a permanent redirect for /nocta.
 */
export default function RetiredNoctaPage() {
  redirect("/momentum")
}
