import { redirect } from "next/navigation"

/**
 * /brand-narrative-audit — page retirée.
 *
 * Elle vendait l'audit à une époque où les pages de terrain se contentaient
 * de convaincre. Depuis qu'elles portent le prix, la méthode, la FAQ et le
 * bouton de commande, cette page n'était plus qu'une quatrième version du
 * même argumentaire, sans terrain et sans identité.
 *
 * Les boutons « Commander l'audit » mènent désormais directement au
 * paiement. Redirection conservée : l'adresse a été indexée et diffusée.
 */
export default async function AuditRedirect({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  redirect(`/${lang}`)
}
