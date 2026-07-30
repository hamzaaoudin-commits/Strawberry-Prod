import type { MetadataRoute } from "next"
import { LANGS } from "@/lib/lang"
import { publishedReads } from "@/lib/radar-reads"
import { SITE, localePath } from "@/lib/routing"

/**
 * Generated sitemap, one entry per page per language, each carrying its
 * hreflang alternates. Replaces the hand-maintained public/sitemap.xml, which
 * listed a single language and drifted every time a route changed.
 */
type Route = {
  path: string
  priority: number
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
}

const ROUTES: Route[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/brand-narrative-architecture", priority: 0.95, changeFrequency: "monthly" },
  { path: "/offres", priority: 0.9, changeFrequency: "monthly" },
  { path: "/brand-narrative-audit", priority: 0.9, changeFrequency: "monthly" },
  { path: "/documents", priority: 0.9, changeFrequency: "monthly" },
  { path: "/documents/sillage", priority: 0.9, changeFrequency: "monthly" },
  { path: "/documents/verso", priority: 0.85, changeFrequency: "monthly" },
  { path: "/radar", priority: 0.85, changeFrequency: "daily" },
  { path: "/lectures", priority: 0.9, changeFrequency: "daily" },
  { path: "/maisons", priority: 0.8, changeFrequency: "monthly" },
  { path: "/momentum", priority: 0.8, changeFrequency: "monthly" },
  { path: "/strawberry-method", priority: 0.8, changeFrequency: "monthly" },
  { path: "/le-livre", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about", priority: 0.75, changeFrequency: "monthly" },
  { path: "/cgv", priority: 0.3, changeFrequency: "yearly" },
  { path: "/mentions-legales", priority: 0.3, changeFrequency: "yearly" },
  { path: "/politique-confidentialite", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/legal-notice", priority: 0.3, changeFrequency: "yearly" },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  /**
   * Les lectures publiques s'ajoutent automatiquement. Une fiche publiée dans
   * radar-reads.ts entre dans le sitemap le jour de sa parution, sans qu'aucune
   * liste n'ait à être tenue à la main.
   */
  const readRoutes: Route[] = publishedReads().map((r) => ({
    path: `/lectures/${r.slug}`,
    priority: 0.7,
    changeFrequency: "monthly",
  }))

  return [...ROUTES, ...readRoutes].flatMap((r) =>
    LANGS.map((lang) => ({
      url: `${SITE}${localePath(r.path, lang)}`,
      lastModified: now,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
      alternates: {
        languages: Object.fromEntries(
          LANGS.map((l) => [l, `${SITE}${localePath(r.path, l)}`])
        ),
      },
    }))
  )
}
