import type { Metadata } from 'next'
import { alternatesFor, SITE } from '@/lib/routing'
import { isLang, type Lang } from '@/lib/lang'

const COPY: Record<Lang, { title: string; description: string }> = {
  fr: { title: "RADAR — 15€/mois", description: "Une marque réelle disséquée chaque jour. Lisez un positionnement en quelques secondes." },
  en: { title: "RADAR — 15€/month", description: "One real brand read every day. Read positioning in seconds." },
  es: { title: "RADAR — 15€/mes", description: "Una marca real diseccionada cada día. Lea un posicionamiento en segundos." },
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
    alternates: alternatesFor('/radar'),
    openGraph: {
      title: c.title,
      description: c.description,
      url: `${SITE}/${lang}/radar`,
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
