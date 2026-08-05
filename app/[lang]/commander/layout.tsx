import type { Metadata } from 'next'

/** Route héritée, neutralisée : la page ne fait plus que rediriger vers Stripe. */
export async function generateMetadata(): Promise<Metadata> {
  return { robots: { index: false, follow: false } }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
