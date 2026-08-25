import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { notFound } from 'next/navigation'
import { LanguageProvider } from '@/lib/i18n'
import { LANGS, isLang, type Lang } from '@/lib/lang'
import { alternatesFor, SITE } from '@/lib/routing'
import '../globals.css'
import { LoadingIntro } from '@/components/strawberry/loading-intro'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

/** Prerender one full set of pages per language. */
export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }))
}

const OG_LOCALE: Record<Lang, string> = { fr: 'fr_FR', en: 'en_US' }

const COPY: Record<Lang, { title: string; description: string; ogTitle: string; ogDesc: string }> = {
  fr: {
    title: 'Strawberry Production · Architecture narrative de marque',
    description:
      "Un studio d'architecture narrative qui bâtit l'identité, la position et le langage qui rendent un fondateur impossible à confondre — et impossible à générer. Depuis Paris. Une commande par maison, quatre par trimestre.",
    ogTitle: 'Strawberry Production · Studio d\'architecture narrative',
    ogDesc:
      "Nous ne construisons pas des marques. Nous construisons l'architecture qui les gouverne. Un studio d'architecture narrative, depuis Paris.",
  },
  en: {
    title: 'Strawberry Production · Brand Narrative Architecture',
    description:
      'A narrative architecture studio building the identity, position, and language that make founders impossible to confuse — and impossible to generate. From Paris. One commission per house, four per quarter.',
    ogTitle: 'Strawberry Production · Narrative Architecture Studio',
    ogDesc:
      "We don't build brands. We build the architecture that governs them. A narrative architecture studio from Paris.",
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
    metadataBase: new URL(SITE),
    title: { default: c.title, template: '%s · Strawberry Production' },
    description: c.description,
    keywords: [
      'brand narrative',
      'narrative architecture',
      'architecture narrative',
      'positionnement de marque',
      'founder positioning',
      'narrative architecture studio',
      'studio d\'architecture narrative',
      'Paris brand consultancy',
      'AI-proof branding',
    ],
    authors: [{ name: 'Hamza El Jaouahiry', url: SITE }],
    creator: 'Hamza El Jaouahiry',
    publisher: 'Strawberry Production',
    formatDetection: { email: false, address: false, telephone: false },
    alternates: alternatesFor('/'),
    openGraph: {
      type: 'website',
      locale: OG_LOCALE[lang],
      alternateLocale: LANGS.filter((l) => l !== lang).map((l) => OG_LOCALE[l]),
      url: `${SITE}/${lang}`,
      siteName: 'Strawberry Production',
      title: c.ogTitle,
      description: c.ogDesc,
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Strawberry Production — Narrative Architecture Studio · Paris',
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: c.ogTitle,
      description: c.ogDesc,
      images: ['/og-image.png'],
      creator: '@strawberry_prods',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: { icon: '/favicon.ico', apple: '/apple-touch-icon.png' },
    category: 'business',
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang: raw } = await params
  if (!isLang(raw)) notFound()
  const lang: Lang = raw

  return (
    <html lang={lang} className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased bg-[#0a0a0a] text-white overflow-x-hidden">
        <LoadingIntro />
        <LanguageProvider lang={lang}>{children}</LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Strawberry Production',
              url: `${SITE}/${lang}`,
              founder: { '@type': 'Person', name: 'Hamza El Jaouahiry' },
              description: COPY[lang].description,
              address: { '@type': 'PostalAddress', addressLocality: 'Paris', addressCountry: 'FR' },
              priceRange: '15€ – 4500€',
              availableLanguage: ['French', 'English', 'Spanish'],
              sameAs: ['https://instagram.com/strawberry_prods'],
            }),
          }}
        />
      </body>
    </html>
  )
}
