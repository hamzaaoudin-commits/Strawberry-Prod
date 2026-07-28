import type { Metadata } from 'next'
import { alternatesFor, SITE } from '@/lib/routing'
import { isLang, type Lang } from '@/lib/lang'

const COPY: Record<Lang, { title: string; description: string }> = {
  fr: { title: "La Méthode Strawberry", description: "Cinq étapes. Une doctrine. L'architecture reproductible du studio." },
  en: { title: "The Strawberry Method", description: "Five stages. One doctrine. The repeatable architecture behind every house." },
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
    alternates: alternatesFor('/strawberry-method'),
    openGraph: {
      title: c.title,
      description: c.description,
      url: `${SITE}/${lang}/strawberry-method`,
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
