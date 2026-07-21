import type { Metadata } from 'next'
import { alternatesFor, SITE } from '@/lib/routing'
import { isLang, type Lang } from '@/lib/lang'

const COPY: Record<Lang, { title: string; description: string }> = {
  fr: { title: "SILLAGE — un exemple de commande complète", description: "Une commande en quatorze pièces, publiée en entier. Lisez exactement ce que vous recevrez avant de la commander." },
  en: { title: "SILLAGE — a complete sample commission", description: "A fourteen-part commission, published in full. Read exactly what you would receive before you order it." },
  es: { title: "SILLAGE — un ejemplo de encargo completo", description: "Un encargo en catorce piezas, publicado entero. Lea exactamente lo que recibirá antes de encargarlo." },
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
