import type { Metadata } from 'next'
import { alternatesFor, SITE } from '@/lib/routing'
import { isLang, type Lang } from '@/lib/lang'

const COPY: Record<Lang, { title: string; description: string }> = {
  fr: { title: "MOMENTUM — direction créative au mois", description: "Direction créative et exécution de contenu, après l'architecture." },
  en: { title: "MOMENTUM — creative direction, monthly", description: "Creative direction and content execution, after the architecture." },
  es: { title: "MOMENTUM — dirección creativa mensual", description: "Dirección creativa y ejecución de contenido, tras la arquitectura." },
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
    alternates: alternatesFor('/momentum'),
    openGraph: {
      title: c.title,
      description: c.description,
      url: `${SITE}/${lang}/momentum`,
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
