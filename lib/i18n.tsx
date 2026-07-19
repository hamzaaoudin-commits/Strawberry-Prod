"use client"

import { createContext, useContext, type ReactNode } from "react"
import { DEFAULT_LANG, type Lang } from "@/lib/lang"

export { LANGS, DEFAULT_LANG, isLang } from "@/lib/lang"
export type { Lang } from "@/lib/lang"

/**
 * Language comes from the URL segment (/fr, /en, /es), not from localStorage.
 *
 * That single change is what makes the site indexable in three languages: each
 * locale gets its own prerendered URLs, its own <html lang> and its own hreflang
 * alternates. The provider carries the value the route already decided, so
 * components keep using useT() unchanged.
 */
const LangCtx = createContext<Lang>(DEFAULT_LANG)

export function LanguageProvider({ lang, children }: { lang: Lang; children: ReactNode }) {
  return <LangCtx.Provider value={lang}>{children}</LangCtx.Provider>
}

export const useLang = () => ({ lang: useContext(LangCtx) })

/** Pass a dict keyed by language; returns the entry for the active language (falls back to FR). */
export function useT<T extends Partial<Record<Lang, unknown>>>(dict: T): NonNullable<T["fr"]> {
  const lang = useContext(LangCtx)
  return (dict[lang] ?? dict.fr ?? dict.en) as NonNullable<T["fr"]>
}
