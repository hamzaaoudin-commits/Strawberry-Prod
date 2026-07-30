import type { Metadata } from 'next'
import { alternatesFor, SITE } from '@/lib/routing'
import { isLang, type Lang } from '@/lib/lang'

const COPY: Record<Lang, { title: string; description: string }> = {
  fr: {
    title: 'Les lectures — une marque disséquée par jour',
    description:
      "Chaque jour, une marque réelle passe au radar : ce qui émet, ce qui parasite, et la tension que personne n'a tranchée. Contexte, signal et bruit sont publiés en libre accès.",
  },
  en: {
    title: 'The readings — one brand dissected a day',
    description:
      'Every day, a real brand goes under the radar: what it emits, what interferes, and the tension nobody has settled. Context, signal and noise are published freely.',
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
    alternates: alternatesFor('/lectures'),
    openGraph: {
      title: c.title,
      description: c.description,
      url: `${SITE}/${lang}/lectures`,
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
