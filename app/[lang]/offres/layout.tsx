import type { Metadata } from 'next'
import { alternatesFor, SITE } from '@/lib/routing'
import { isLang, type Lang } from '@/lib/lang'

const COPY: Record<Lang, { title: string; description: string }> = {
  fr: {
    title: 'Les offres — Strawberry Production',
    description:
      "Quatre façons de travailler avec le studio : RADAR, BRAND NARRATIVE AUDIT, BRAND NARRATIVE ARCHITECTURE et MOMENTUM. Vous pouvez entrer par n'importe laquelle.",
  },
  en: {
    title: 'The offers — Strawberry Production',
    description:
      'Four ways to work with the studio: RADAR, BRAND NARRATIVE AUDIT, BRAND NARRATIVE ARCHITECTURE and MOMENTUM. You can enter at any one of them.',
  },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang: raw } = await params
  const lang: Lang = isLang(raw) ? raw : 'fr'
  const c = COPY[lang]
  return {
    title: c.title,
    description: c.description,
    alternates: alternatesFor('/offres'),
    openGraph: {
      title: c.title,
      description: c.description,
      url: `${SITE}/${lang}/offres`,
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
