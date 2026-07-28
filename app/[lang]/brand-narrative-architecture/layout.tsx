import type { Metadata } from 'next'
import { alternatesFor, SITE } from '@/lib/routing'
import { isLang, type Lang } from '@/lib/lang'

const COPY: Record<Lang, { title: string; description: string }> = {
  fr: { title: "BRAND NARRATIVE ARCHITECTURE — 4 500€", description: "Le récit de marque qui vous rend impossible à confondre — et impossible à générer." },
  en: { title: "BRAND NARRATIVE ARCHITECTURE — 4,500€", description: "The brand story that makes you impossible to confuse — and impossible to generate." },
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
    alternates: alternatesFor('/brand-narrative-architecture'),
    openGraph: {
      title: c.title,
      description: c.description,
      url: `${SITE}/${lang}/brand-narrative-architecture`,
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
