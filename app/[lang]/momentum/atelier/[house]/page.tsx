import { redirect } from "next/navigation"

/** Route retirée avec MOMENTUM. Voir app/[lang]/momentum/page.tsx. */
export default async function RetiredRoute({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  redirect(`/${lang}`)
}
