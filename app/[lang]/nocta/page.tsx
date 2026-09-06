import { redirect } from "next/navigation"

/**
 * NOCTA — ancienne route, désormais sans destination.
 *
 * Elle redirigeait vers /momentum, retiré lors du passage à deux portes :
 * la chaîne aboutissait donc à une redirection vers une redirection. Elle
 * pointe vers l'accueil en attendant que la porte Lieux existe, et devra
 * pointer vers /lieux le jour où celle-ci sera créée.
 */
export default async function RetiredNoctaPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  redirect(`/${lang}`)
}
