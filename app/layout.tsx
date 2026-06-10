import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.gostrawberryprod.com'),
  title: {
    default: 'Strawberry Production · Brand Narrative Architecture',
    template: '%s · Strawberry Production',
  },
  description: "A narrative perception studio building the identity, position, and language that make founders impossible to confuse — and impossible to generate. From Paris. One commission per house, four per quarter.",
  keywords: [
    'brand narrative',
    'narrative architecture',
    'founder positioning',
    'brand strategy',
    'narrative perception studio',
    'Paris brand consultancy',
    'founder identity',
    'AI-proof branding',
  ],
  authors: [{ name: 'Hamza El Jaouahiry', url: 'https://www.gostrawberryprod.com' }],
  creator: 'Hamza El Jaouahiry',
  publisher: 'Strawberry Production',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://www.gostrawberryprod.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['fr_FR'],
    url: 'https://www.gostrawberryprod.com',
    siteName: 'Strawberry Production',
    title: 'Strawberry Production · Narrative Perception Studio',
    description: "We don't build brands. We build the universe they live in. A narrative perception studio from Paris, for founders who refuse to sound like everyone else.",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Strawberry Production — Narrative Perception Studio · Paris',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Strawberry Production · Narrative Perception Studio',
    description: "We don't build brands. We build the universe they live in.",
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
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  category: 'business',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased bg-[#0a0a0a] text-white overflow-x-hidden">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Strawberry Production",
              "url": "https://www.gostrawberryprod.com",
              "founder": {
                "@type": "Person",
                "name": "Hamza El Jaouahiry"
              },
              "description": "A narrative perception studio building the identity, position, and language that make founders impossible to confuse — and impossible to generate.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Paris",
                "addressCountry": "FR"
              },
              "priceRange": "4500€",
              "availableLanguage": ["French", "English"],
              "sameAs": [
                "https://instagram.com/strawberry_prods"
              ]
            })
          }}
        />
      </body>
    </html>
  )
}
