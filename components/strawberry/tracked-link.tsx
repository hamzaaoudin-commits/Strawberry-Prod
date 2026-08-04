"use client"

import { track } from "@vercel/analytics"
import { LocaleLink as Link } from "@/components/locale-link"

/**
 * Un lien qui trace son clic, pour les sections qui restent des composants
 * serveur. Seul ce petit élément s'hydrate — pas toute la section autour.
 */
export function TrackedLink({
  href,
  className,
  event,
  data,
  children,
}: {
  href: string
  className?: string
  event: string
  data?: Record<string, string>
  children: React.ReactNode
}) {
  return (
    <Link href={href} className={className} onClick={() => track(event, data)}>
      {children}
    </Link>
  )
}
