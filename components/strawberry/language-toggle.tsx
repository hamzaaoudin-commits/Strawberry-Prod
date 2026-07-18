"use client"

import { useLang, LANGS, type Lang } from "@/lib/i18n"

/**
 * Minimal language switcher: plain text `fr / en / es`.
 * Lives in the footer legal strip — deliberately quiet.
 */
export function LanguageToggle() {
  const { lang, setLang } = useLang()

  return (
    <div className="inline-flex items-center" role="group" aria-label="Language">
      {LANGS.map((l: Lang, i) => {
        const active = lang === l
        return (
          <span key={l} className="inline-flex items-center">
            {i > 0 && <span className="mx-1.5 select-none text-[10px] text-white/20">/</span>}
            <button
              type="button"
              onClick={() => setLang(l)}
              aria-pressed={active}
              lang={l}
              className={[
                "font-sans text-xs uppercase tracking-[0.08em] transition-colors",
                active ? "font-semibold text-brand" : "text-chalk-40 hover:text-chalk-75",
              ].join(" ")}
            >
              {l}
            </button>
          </span>
        )
      })}
    </div>
  )
}
