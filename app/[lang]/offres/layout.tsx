import type { Metadata } from 'next'
import { alternatesFor, SITE } from '@/lib/routing'
import { isLang, type Lang } from '@/lib/lang'

const COPY: Record<Lang, { title: string; description: string }> = {
  fr: {
    title: "Les offres — quatre façons de travailler avec le studio",
    description:
      "De RADAR à 15€ par mois à la BRAND NARRATIVE ARCHITECTURE à 4 500€ : les quatre façons d'entrer, et celle qui correspond à où vous en êtes.",
  },
  en: {
    title: "The offers — four ways to work with the studio",
    description:
      "From RADAR at 15€ a month to the 4,500€ BRAND NARRATIVE ARCHITECTURE: four ways in, and the one that matches where you are.",
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
    alternates: alternatesFor('/offres'),
    openGraph: {
      title: c.title,
      description: c.description,
      url: `${SITE}/${lang}/offres`,
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
