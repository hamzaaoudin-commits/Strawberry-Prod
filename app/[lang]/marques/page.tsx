import { redirect } from "next/navigation"

/**
 * /marques — la porte Marques est redevenue la page d'accueil.
 *
 * La route a existé publiquement le temps d'un essai de page d'entrée à
 * deux portes ; redirection conservée pour ne casser aucun lien.
 */
export default async function MarquesRedirect({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  redirect(`/${lang}`)
}
