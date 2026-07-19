import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SILLAGE — a complete Brand Narrative Architecture | Strawberry Production',
  description:
    'A full fourteen-part narrative architecture, applied to a fictional house and published in the open. Read exactly what the commission produces before ordering it.',
  alternates: { canonical: 'https://www.gostrawberryprod.com/sample-audit' },
  openGraph: {
    title: 'SILLAGE — a complete Brand Narrative Architecture',
    description: 'Fourteen parts, applied to a demonstration house and published in the open.',
    url: 'https://www.gostrawberryprod.com/sample-audit',
    images: [{ url: 'https://www.gostrawberryprod.com/og-image.png', width: 1200, height: 630 }],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
