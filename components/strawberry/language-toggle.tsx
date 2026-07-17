"use client"

import { useLang, LANGS, type Lang } from "@/lib/i18n"

const SANS = "var(--font-dm-sans), 'DM Sans', sans-serif"
const COLOR = "#e63946"

export function LanguageToggle({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useLang()
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 2, border: "1px solid rgba(255,255,255,0.14)", borderRadius: 100, padding: 2, background: "rgba(255,255,255,0.02)" }}>
      {LANGS.map((l: Lang) => {
        const active = lang === l
        return (
          <button
            key={l}
            onClick={() => setLang(l)}
            aria-pressed={active}
            style={{
              fontFamily: SANS,
              fontSize: compact ? 12 : 11,
              fontWeight: active ? 700 : 500,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              padding: compact ? "5px 10px" : "4px 9px",
              borderRadius: 100,
              cursor: "pointer",
              border: "none",
              transition: "all 0.2s ease",
              background: active ? `linear-gradient(135deg, ${COLOR}, #ff1a1a)` : "transparent",
              color: active ? "#fff" : "rgba(255,255,255,0.55)",
            }}
          >
            {l}
          </button>
        )
      })}
    </div>
  )
}
