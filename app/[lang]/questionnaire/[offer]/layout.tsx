import type { Metadata } from "next"

/** Private, single-use interview page — never indexed. */
export async function generateMetadata(): Promise<Metadata> {
  return { robots: { index: false, follow: false } }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
