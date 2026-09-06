import { redirect } from "next/navigation"

/**
 * NOCTA — ancienne route.
 *
 * Elle redirigeait vers /momentum, retiré lors du passage à deux portes :
 * la chaîne aboutissait à une redirection vers une redirection. Elle pointe
 * désormais vers /lieux, la porte qui a repris son contenu.
 */
export default async function RetiredNoctaPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  redirect(`/${lang}/lieux`)
}
