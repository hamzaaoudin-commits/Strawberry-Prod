import type { Metadata } from 'next'
import { alternatesFor, SITE } from '@/lib/routing'
import { isLang, type Lang } from '@/lib/lang'

const COPY: Record<Lang, { title: string; description: string }> = {
  fr: { title: "À propos — le studio", description: "Un studio d'un seul, depuis Paris, par héritage. Ce qu'il est et ce qu'il n'est pas." },
  en: { title: "About — the studio", description: "A studio of one. From Paris. By inheritance. What it is and what it is not." },
  es: { title: "Nosotros — el estudio", description: "Un estudio de uno solo. Desde París. Por herencia." },
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
    alternates: alternatesFor('/about'),
    openGraph: {
      title: c.title,
      description: c.description,
      url: `${SITE}/${lang}/about`,
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
