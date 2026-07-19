import type { Metadata } from 'next'
import { alternatesFor, SITE } from '@/lib/routing'
import { isLang, type Lang } from '@/lib/lang'

const COPY: Record<Lang, { title: string; description: string }> = {
  fr: { title: "BRAND NARRATIVE AUDIT — 490€", description: "Un diagnostic écrit de votre récit actuel. Sept jours, sans appel." },
  en: { title: "BRAND NARRATIVE AUDIT — 490€", description: "A written diagnosis of your current narrative. Seven days, no call." },
  es: { title: "BRAND NARRATIVE AUDIT — 490€", description: "Un diagnóstico escrito de su relato actual. Siete días, sin llamada." },
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
