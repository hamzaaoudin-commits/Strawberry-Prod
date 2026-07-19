import type { Metadata } from 'next'
import { alternatesFor, SITE } from '@/lib/routing'
import { isLang, type Lang } from '@/lib/lang'

const COPY: Record<Lang, { title: string; description: string }> = {
  fr: { title: "SILLAGE — une architecture narrative complète", description: "Une commande en quatorze pièces, appliquée à une maison fictive et publiée en clair." },
  en: { title: "SILLAGE — a complete narrative architecture", description: "A fourteen-part commission applied to a fictional house and published in the open." },
  es: { title: "SILLAGE — una arquitectura narrativa completa", description: "Un encargo en catorce piezas aplicado a una casa ficticia y publicado abiertamente." },
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
    alternates: alternatesFor('/sample-audit'),
    openGraph: {
      title: c.title,
      description: c.description,
      url: `${SITE}/${lang}/sample-audit`,
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
