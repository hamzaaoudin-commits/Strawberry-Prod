import type { Metadata } from 'next'

export const commissionMetadata: Metadata = {
  title: 'The Commission · Brand Narrative Architecture',
  description: "The identity, position, and language that make founders impossible to confuse — and impossible to generate. One offer. 4,500€. Four commissions per quarter.",
  alternates: {
    canonical: 'https://www.gostrawberryprod.com/brand-narrative-audit',
  },
  openGraph: {
    url: 'https://www.gostrawberryprod.com/brand-narrative-audit',
    title: 'Brand Narrative Architecture · Strawberry Production',
    description: "The brand story that makes you impossible to confuse — and impossible to generate.",
    images: [
      {
        url: 'https://www.gostrawberryprod.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Strawberry Production — Brand Narrative Architecture',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brand Narrative Architecture · Strawberry Production',
    description: "The brand story that makes you impossible to confuse — and impossible to generate.",
    images: ['https://www.gostrawberryprod.com/og-image.png'],
  },
}
