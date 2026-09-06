import { redirect } from "next/navigation"

/**
 * /lieux — renommé en /the-room.
 *
 * Redirection conservée : la route a existé publiquement, et un nom bilingue
 * évite d'avoir à servir /lieux en français et /venues en anglais.
 */
export default async function RenamedLieuxPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  redirect(`/${lang}/the-room`)
}
