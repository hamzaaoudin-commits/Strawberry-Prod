import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BRAND NARRATIVE AUDIT — 490€ | Strawberry Production',
  description:
    "A written diagnosis of your current brand narrative: what lands, what makes you indistinguishable from competitors, and the precise moves to make. Seven days, no call.",
  alternates: { canonical: 'https://www.gostrawberryprod.com/audit' },
  openGraph: {
    title: 'BRAND NARRATIVE AUDIT — 490€',
    description: 'A written diagnosis of your current brand narrative. Seven days, no call.',
    url: 'https://www.gostrawberryprod.com/audit',
    images: [{ url: 'https://www.gostrawberryprod.com/og-image.png', width: 1200, height: 630 }],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
