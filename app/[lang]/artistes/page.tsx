import { redirect } from "next/navigation"

/**
 * /artistes — remplacée par /the-name.
 *
 * L'ancienne page portait la mise en page de MOMENTUM : une charte de plus
 * à maintenir, pour un terrain qui n'avait aucune raison d'avoir la sienne.
 * Les trois terrains partagent désormais le même gabarit.
 */
export default async function ArtistesRedirect({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  redirect(`/${lang}/the-name`)
}
