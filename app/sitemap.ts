import type { MetadataRoute } from "next"
import { LANGS } from "@/lib/lang"
import { SITE, localePath } from "@/lib/routing"

/**
 * Generated sitemap, one entry per page per language, each carrying its
 * hreflang alternates. Replaces the hand-maintained public/sitemap.xml, which
 * listed a single language and drifted every time a route changed.
 */
const ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/brand-narrative-architecture", priority: 0.95, changeFrequency: "monthly" },
  { path: "/brand-narrative-audit", priority: 0.9, changeFrequency: "monthly" },
  { path: "/sample-audit", priority: 0.9, changeFrequency: "monthly" },
  { path: "/exemple-audit", priority: 0.85, changeFrequency: "monthly" },
  { path: "/radar", priority: 0.85, changeFrequency: "daily" },
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
  return ROUTES.flatMap((r) =>
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
