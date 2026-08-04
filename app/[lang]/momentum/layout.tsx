import type { Metadata } from 'next'
import { isLang, type Lang } from '@/lib/lang'

/**
 * L'offre MOMENTUM n'est plus vendue : cette page ne fait plus que rediriger,
 * donc elle ne doit plus être indexée sous son ancien titre commercial.
 * /momentum/atelier, qui vit sous ce même layout, reste de toute façon hors
 * index — il est bloqué dans robots.txt.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang: raw } = await params
  const lang: Lang = isLang(raw) ? raw : 'fr'
  return {
    title: lang === 'fr' ? 'Strawberry Production' : 'Strawberry Production',
    robots: { index: false, follow: true },
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
