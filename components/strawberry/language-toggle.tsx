"use client"

import NextLink from "next/link"
import { usePathname } from "next/navigation"
import { useLang, LANGS, type Lang } from "@/lib/i18n"

/**
 * Language switcher.
 *
 * Each language is a real link to the same page in that locale, so the choice is
 * crawlable and shareable rather than a hidden client-side state.
 */
export function LanguageToggle() {
  const { lang } = useLang()
  const pathname = usePathname() || `/${lang}`

  /** Swap the leading locale segment, keeping the rest of the path. */
  const swapTo = (l: Lang) => {
    const parts = pathname.split("/").filter(Boolean)
    if (parts.length && (LANGS as string[]).includes(parts[0])) parts[0] = l
    else parts.unshift(l)
    return "/" + parts.join("/")
  }

  return (
    <div className="inline-flex items-center" role="group" aria-label="Language">
      {LANGS.map((l: Lang, i) => {
        const active = lang === l
        return (
          <span key={l} className="inline-flex items-center">
            {i > 0 && <span className="mx-1.5 select-none text-[10px] text-white/20">/</span>}
            <NextLink
              href={swapTo(l)}
              hrefLang={l}
              lang={l}
              aria-current={active ? "true" : undefined}
              className={[
                "font-sans text-xs uppercase tracking-[0.08em] no-underline transition-colors",
                active ? "font-semibold text-brand" : "text-chalk-40 hover:text-chalk-75",
              ].join(" ")}
            >
              {l}
            </NextLink>
          </span>
        )
      })}
    </div>
  )
}
