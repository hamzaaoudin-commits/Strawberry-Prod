import type { Metadata } from 'next'
import { commissionMetadata } from './metadata'

export const metadata: Metadata = commissionMetadata

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
