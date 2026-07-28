"use client"

import { useState } from "react"
import { useLang, type Lang } from "@/lib/i18n"

export type FaqEntry = { q: string; a: string }
export type FaqSet = Record<Lang, FaqEntry[]>

const HEAD: Record<Lang, { kicker: string; h2a: string; h2b: string }> = {
  en: { kicker: "FAQ", h2a: "Everything you need", h2b: "to decide." },
  fr: { kicker: "FAQ", h2a: "Tout ce qu'il faut", h2b: "pour décider." },
}

/**
 * Per-offer FAQ. Each offer page passes its own question set,
 * so a visitor only ever reads questions about the thing they're looking at.
 */
export function FaqSection({ faqs }: { faqs: FaqSet }) {
  const { lang } = useLang()
  const [open, setOpen] = useState<number | null>(null)
  const head = HEAD[lang] ?? HEAD.en
  const items = faqs[lang] ?? faqs.en

  return (
    <section className="section relative overflow-hidden bg-ink text-white">
      <div className="glow-center" aria-hidden />

      <div className="relative mx-auto w-full max-w-[800px]">
        <div className="mb-14 text-center">
          <div className="kicker mb-6">{head.kicker}</div>
          <h2 className="h-section">
            {head.h2a} <span className="text-gradient">{head.h2b}</span>
          </h2>
        </div>

        <div className="flex flex-col">
          {items.map((faq, i) => {
            const isOpen = open === i
            return (
              <div key={faq.q} className="overflow-hidden border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-trigger-${i}`}
                  className="flex w-full items-center justify-between gap-6 border-none bg-transparent py-7 text-left"
                >
                  <span className="font-serif text-[clamp(1rem,1.8vw,1.25rem)] font-semibold leading-snug tracking-[-0.01em] text-white">
                    {faq.q}
                  </span>
                  <span
                    aria-hidden
                    className={`shrink-0 text-[22px] text-brand transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>

                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${i}`}
                  hidden={!isOpen}
                  className="pb-7"
                >
                  <p className="m-0 font-sans text-[clamp(0.95rem,1.2vw,1.05rem)] leading-[1.75] text-chalk-65">
                    {faq.a}
                  </p>
                </div>
              </div>
            )
          })}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  )
}
