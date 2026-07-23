import type { Metadata } from 'next'
import { alternatesFor, SITE } from '@/lib/routing'
import { isLang, type Lang } from '@/lib/lang'

const COPY: Record<Lang, { title: string; description: string }> = {
  fr: { title: "BRAND NARRATIVE AUDIT — 490€", description: "Un diagnostic écrit de votre récit actuel : ce qui porte, ce qui vous confond avec vos concurrents, et les mouvements à faire." },
  en: { title: "BRAND NARRATIVE AUDIT — 490€", description: "A written diagnosis of your current narrative: what lands, what blurs you, and the moves to make." },
  es: { title: "BRAND NARRATIVE AUDIT — 490€", description: "Un diagnóstico escrito de su relato actual: lo que aterriza, lo que le difumina y los movimientos a realizar." },
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
    alternates: alternatesFor('/audit'),
    openGraph: {
      title: c.title,
      description: c.description,
      url: `${SITE}/${lang}/audit`,
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
