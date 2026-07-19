import type { Metadata } from 'next'
import { alternatesFor, SITE } from '@/lib/routing'
import { isLang, type Lang } from '@/lib/lang'

const COPY: Record<Lang, { title: string; description: string }> = {
  fr: { title: "Les Manifestes Strawberry", description: "Neuf manifestes. Une doctrine. Ouverts et lisibles dans votre navigateur." },
  en: { title: "The Strawberry Manifestos", description: "Nine manifestos. One doctrine. Open, free, readable in your browser." },
  es: { title: "Los Manifiestos Strawberry", description: "Nueve manifiestos. Una doctrina. Abiertos y legibles en su navegador." },
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
    alternates: alternatesFor('/manifesto'),
    openGraph: {
      title: c.title,
      description: c.description,
      url: `${SITE}/${lang}/manifesto`,
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
