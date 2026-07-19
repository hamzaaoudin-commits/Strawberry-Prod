"use client"

import Link from "next/link"
import { useT } from "@/lib/i18n"

const T = {
  en: { h1: "This page doesn't exist.", p: "The house you're looking for hasn't been built \u2014 or refused to be found.", cta: "Back to the studio \u2192" },
  fr: { h1: "Cette page n'existe pas.", p: "La maison que vous cherchez n'a pas \u00e9t\u00e9 b\u00e2tie \u2014 ou a refus\u00e9 d'\u00eatre trouv\u00e9e.", cta: "Retour au studio \u2192" },
  es: { h1: "Esta p\u00e1gina no existe.", p: "La casa que busca no ha sido construida \u2014 o se neg\u00f3 a ser encontrada.", cta: "Volver al estudio \u2192" },
}


export default function NotFound() {
  const t = useT(T)

  return (
    <main className="relative flex min-h-screen items-center justify-center bg-ink px-gutter font-sans text-white">
      <div className="glow-center" aria-hidden />

      <div className="relative w-full max-w-[640px] text-center">
        <div className="mb-2 font-serif text-[clamp(6rem,18vw,12rem)] font-bold leading-none tracking-[-0.05em] text-gradient">
          404
        </div>

        <div className="mx-auto mb-8 h-px w-10 bg-brand" aria-hidden />

        <h1 className="mb-5 font-serif text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-tight tracking-[-0.02em]">
          {t.h1}
        </h1>

        <p className="mb-12 font-serif text-[clamp(1rem,1.4vw,1.15rem)] italic leading-relaxed text-white/60">
          {t.p}
        </p>

        <Link href="/" className="btn-primary px-10 py-4 tracking-[0.06em] shadow-[0_12px_40px_rgba(230,57,70,0.35)]">
          {t.cta}
        </Link>
      </div>
    </main>
  )
}
