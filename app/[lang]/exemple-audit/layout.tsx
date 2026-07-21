import type { Metadata } from 'next'
import { alternatesFor, SITE } from '@/lib/routing'
import { isLang, type Lang } from '@/lib/lang'

const COPY: Record<Lang, { title: string; description: string }> = {
  fr: { title: "VERSO — un exemple de Brand Narrative Audit", description: "Un audit de diagnostic complet, appliqué à une maison fictive et publié en clair. Cinq blocs, comme le document que vous recevrez." },
  en: { title: "VERSO — a sample Brand Narrative Audit", description: "A complete diagnostic audit applied to a fictional house and published in the open. Five blocks, like the document you would receive." },
  es: { title: "VERSO — un ejemplo de Brand Narrative Audit", description: "Una auditoría de diagnóstico completa aplicada a una casa ficticia y publicada abiertamente. Cinco bloques, como el documento que recibiría." },
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
