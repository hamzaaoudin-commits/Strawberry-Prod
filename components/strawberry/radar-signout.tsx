"use client"

import { useRouter } from "next/navigation"
import type { Lang } from "@/lib/lang"

const LABEL: Record<Lang, string> = {
  fr: "Fermer l'accès sur cet appareil",
  en: "Close access on this device",
  es: "Cerrar el acceso en este dispositivo",
}

export function RadarSignOut({ lang }: { lang: Lang }) {
  const router = useRouter()

  async function signOut() {
    await fetch("/api/radar/logout", { method: "POST", credentials: "same-origin" })
    router.replace(`/${lang}/radar`)
    router.refresh()
  }

  return (
    <button
      type="button"
      onClick={signOut}
      className="font-sans text-[12px] text-chalk-40 underline underline-offset-4 transition-colors hover:text-white"
    >
      {LABEL[lang] ?? LABEL.fr}
    </button>
  )
}
