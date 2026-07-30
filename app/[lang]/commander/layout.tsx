import type { Metadata } from 'next'
import { alternatesFor, SITE } from '@/lib/routing'
import { isLang, type Lang } from '@/lib/lang'

const COPY: Record<Lang, { title: string; description: string }> = {
  fr: {
    title: 'Commander BRAND NARRATIVE ARCHITECTURE',
    description:
      "Récapitulatif de la commande, ce qui se passe dans les 24 heures, la garantie V2 et la fenêtre de remboursement. En une fois ou en trois fois.",
  },
  en: {
    title: 'Commission BRAND NARRATIVE ARCHITECTURE',
    description:
      'Order summary, what happens within 24 hours, the V2 guarantee and the refund window. Paid once or in three instalments.',
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
    robots: { index: false, follow: true },
    alternates: alternatesFor('/commander'),
    openGraph: { title: c.title, description: c.description, url: `${SITE}/${lang}/commander` },
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
