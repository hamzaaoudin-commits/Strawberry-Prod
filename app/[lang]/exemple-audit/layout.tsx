import type { Metadata } from 'next'
import { alternatesFor, SITE } from '@/lib/routing'
import { isLang, type Lang } from '@/lib/lang'

const COPY: Record<Lang, { title: string; description: string }> = {
  fr: { title: "VERSO — un exemple d'audit complet", description: "Un audit de diagnostic complet, publié en entier. Cinq blocs — exactement le document que vous recevrez." },
  en: { title: "VERSO — a complete sample audit", description: "A complete diagnostic audit, published in full. Five blocks — exactly the document you would receive." },
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
    alternates: alternatesFor('/exemple-audit'),
    openGraph: {
      title: c.title,
      description: c.description,
      url: `${SITE}/${lang}/exemple-audit`,
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
