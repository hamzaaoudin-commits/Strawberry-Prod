"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

export type Lang = "fr" | "en" | "es"
export const LANGS: Lang[] = ["fr", "en", "es"]

const LangCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "en",
  setLang: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en")

  useEffect(() => {
    try {
      const s = localStorage.getItem("sp_lang") as Lang | null
      if (s && LANGS.includes(s)) setLangState(s)
    } catch {}
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    try {
      localStorage.setItem("sp_lang", l)
      document.documentElement.lang = l
    } catch {}
  }

  return <LangCtx.Provider value={{ lang, setLang }}>{children}</LangCtx.Provider>
}

export const useLang = () => useContext(LangCtx)

/** Pass a dict keyed by language; returns the entry for the active language (falls back to EN). */
export function useT<T extends Partial<Record<Lang, unknown>>>(dict: T): NonNullable<T["en"]> {
  const { lang } = useLang()
  return (dict[lang] ?? dict.en) as NonNullable<T["en"]>
}
