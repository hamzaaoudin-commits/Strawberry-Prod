import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.gostrawberryprod.com/strawberry-method' },
  openGraph: {
    url: 'https://www.gostrawberryprod.com/strawberry-method',
    images: [{ url: 'https://www.gostrawberryprod.com/og-image.png', width: 1200, height: 630 }],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
