import { LANGS, DEFAULT_LANG, type Lang } from "@/lib/lang"

export const SITE = "https://www.gostrawberryprod.com"

/** Prefix an app-relative path with the active locale: ("/momentum","fr") -> "/fr/momentum" */
export function localePath(path: string, lang: Lang): string {
  if (!path) return `/${lang}`
  if (!path.startsWith("/")) return path
  if (path === "/") return `/${lang}`
  return `/${lang}${path}`
}

/**
 * hreflang alternates for a given app-relative path.
 * Declaring these is what tells search engines the three versions are the same
 * page in different languages, instead of three competing pages.
 */
export function alternatesFor(path: string) {
  const languages: Record<string, string> = {}
  for (const l of LANGS) languages[l] = `${SITE}${localePath(path, l)}`
  languages["x-default"] = `${SITE}${localePath(path, DEFAULT_LANG)}`
  return {
    canonical: `${SITE}${localePath(path, DEFAULT_LANG)}`,
    languages,
  }
}
