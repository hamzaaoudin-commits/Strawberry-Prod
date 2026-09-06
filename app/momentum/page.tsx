import { redirect } from "next/navigation"

/** Route héritée, retirée avec le passage à deux portes. */
export default function LegacyRoute() {
  redirect("/fr")
}
