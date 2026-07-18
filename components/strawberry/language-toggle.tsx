"use client"

import { useLang, LANGS, type Lang } from "@/lib/i18n"

const SANS = "var(--font-dm-sans), 'DM Sans', sans-serif"
const COLOR = "#e63946"

export function LanguageToggle({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useLang()
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 0 }}>
      {LANGS.map((l: Lang, i) => {
        const active = lang === l
        return (
          <span key={l} style={{ display: "inline-flex", alignItems: "center" }}>
            {i > 0 && <span style={{ color: "rgba(255,255,255,0.18)", fontSize: 10, margin: "0 6px", userSelect: "none" }}>/</span>}
            <button
              onClick={() => setLang(l)}
              aria-pressed={active}
              style={{
                fontFamily: SANS,
                fontSize: compact ? 12 : 11,
                fontWeight: active ? 600 : 400,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: 0,
                background: "transparent",
                border: "none",
                cursor: "pointer",
                transition: "color 0.2s ease",
                color: active ? COLOR : "rgba(255,255,255,0.4)",
              }}
              onMouseEnter={(e) => { if (!active) (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.75)" }}
              onMouseLeave={(e) => { if (!active) (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.4)" }}
            >
              {l}
            </button>
          </span>
        )
      })}
    </div>
  )
}
