/**
 * Language constants, deliberately kept out of any "use client" module.
 *
 * The layout, the proxy and generateStaticParams all run on the server; importing
 * these from a client module makes them unavailable at build time.
 */
export type Lang = "fr" | "en" | "es"

export const LANGS: Lang[] = ["fr", "en", "es"]
export const DEFAULT_LANG: Lang = "fr"

export function isLang(v: string | undefined): v is Lang {
  return !!v && (LANGS as string[]).includes(v)
}
