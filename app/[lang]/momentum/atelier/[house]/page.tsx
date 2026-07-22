import { notFound } from "next/navigation"
import { LocaleLink as Link } from "@/components/locale-link"
import { NavBar } from "@/components/strawberry/navbar"
import { BackHomeButton } from "@/components/strawberry/back-home-button"
import { Footer } from "@/components/strawberry/footer"
import { getClientSpace, type Status } from "@/lib/momentum-clients"
import { isLang, type Lang } from "@/lib/lang"

/**
 * L'atelier d'une maison.
 *
 * Composant serveur derrière la barrière du proxy. La page tient deux choses :
 * la livraison du mois, qui tourne, et l'architecture de la maison, qui ne
 * bouge pas. C'est délibéré — un client qui valide un texte sans avoir sa
 * position et ses mots interdits sous les yeux valide au ressenti, et c'est
 * ainsi qu'une architecture se dilue mois après mois.
 */
export const dynamic = "force-dynamic"

const T = {
  fr: { month: "Livraison du mois", of: "sur", pieces: "pièces", delivered: "livrées",
        doctrine: "Votre architecture", permanent: "permanente", deliveredOn: "Livrée le",
        position: "La position", pillars: "Les quatre piliers", forbidden: "Mots interdits",
        full: "Le document complet reste accessible.",
        st: { todo: "À valider", delivered: "✓ Livré", wip: "En cours" } as Record<Status, string>,
        open: "Ouvrir" },
  en: { month: "This month's delivery", of: "of", pieces: "pieces", delivered: "delivered",
        doctrine: "Your architecture", permanent: "permanent", deliveredOn: "Delivered",
        position: "The position", pillars: "The four pillars", forbidden: "Forbidden words",
        full: "The complete document stays available.",
        st: { todo: "To review", delivered: "✓ Delivered", wip: "In progress" } as Record<Status, string>,
        open: "Open" },
  es: { month: "Entrega del mes", of: "de", pieces: "piezas", delivered: "entregadas",
        doctrine: "Su arquitectura", permanent: "permanente", deliveredOn: "Entregada el",
        position: "La posición", pillars: "Los cuatro pilares", forbidden: "Palabras prohibidas",
        full: "El documento completo sigue disponible.",
        st: { todo: "Por validar", delivered: "✓ Entregado", wip: "En curso" } as Record<Status, string>,
        open: "Abrir" },
}

export default async function MomentumWorkshopPage({
  params,
  searchParams,
}: {
  params: Promise<{ lang: string; house: string }>
  searchParams: Promise<{ mois?: string }>
}) {
  const { lang: raw, house } = await params
  const { mois } = await searchParams
  const lang: Lang = isLang(raw) ? raw : "fr"
  const t = T[lang] ?? T.fr

  const space = getClientSpace(house)
  if (!space) notFound()

  const current = space.months.find((m) => m.key === mois) ?? space.months[0]
  const done = current.items.filter((i) => i.status === "delivered").length
  const pct = current.items.length ? Math.round((done / current.items.length) * 100) : 0

  return (
    <main className="min-h-screen overflow-hidden bg-ink font-sans text-white">
      <NavBar />
      <BackHomeButton />

      <section className="relative overflow-hidden border-b border-hair px-gutter pb-8 pt-36">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(230,57,70,0.16),transparent_58%)]"
        />
        <div className="relative mx-auto max-w-[900px]">
          <div className="mb-3 font-sans text-[10px] uppercase tracking-[0.16em] text-chalk-40">
            {space.house} · {space.tier}
          </div>
          <div className="kicker mb-3">{t.month}</div>
          <h1 className="mb-2 font-serif text-[clamp(2.25rem,6vw,3.25rem)] font-bold leading-none tracking-[-0.03em]">
            {current.label}
          </h1>
          <p className="mb-5 font-sans text-[13px] text-chalk-55">
            {t.month === "Livraison du mois" ? "Mois" : "Month"} {space.monthIndex} {t.of} {space.monthTotal} ·{" "}
            {done} {t.of} {current.items.length} {t.pieces} {t.delivered}
          </p>
          <div className="h-[2px] max-w-[420px] bg-white/[0.09]">
            <div className="h-[2px] bg-brand" style={{ width: `${pct}%` }} />
          </div>
        </div>
      </section>

      <section className="px-gutter py-8">
        <div className="mx-auto max-w-[900px]">
          <div className="mb-5 flex flex-wrap gap-2">
            {space.months.map((m) => {
              const active = m.key === current.key
              return (
                <Link
                  key={m.key}
                  href={`/momentum/atelier/${space.slug}?mois=${m.key}`}
                  className={[
                    "rounded-full px-3.5 py-1.5 font-sans text-[11px] no-underline transition-colors",
                    active
                      ? "bg-brand text-white"
                      : "border border-white/15 text-chalk-55 hover:border-white/35 hover:text-white",
                  ].join(" ")}
                >
                  {m.label.split(" ")[0]}
                </Link>
              )
            })}
          </div>

          <div className="border border-white/[0.08]">
            {current.items.map((it, i) => (
              <div
                key={it.title}
                className={[
                  "flex flex-wrap items-center justify-between gap-4 px-5 py-4",
                  i === 0 ? "bg-ink-soft" : "bg-ink",
                  i < current.items.length - 1 ? "border-b border-white/[0.07]" : "",
                  it.status === "wip" ? "opacity-45" : "",
                ].join(" ")}
              >
                <div className="min-w-[220px] flex-1">
                  <div className="mb-1 font-serif text-[15px] leading-snug text-white">{it.title}</div>
                  <div className="font-sans text-[10px] uppercase tracking-[0.1em] text-white/35">{it.meta}</div>
                </div>

                <div className="flex items-center gap-4">
                  {it.href && it.status !== "wip" && (
                    <a
                      href={it.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-[11px] text-chalk-55 underline underline-offset-4 hover:text-white"
                    >
                      {t.open}
                    </a>
                  )}
                  <span
                    className={[
                      "whitespace-nowrap font-sans text-[9px] uppercase tracking-[0.14em]",
                      it.status === "todo"
                        ? "rounded-full border border-brand/45 px-2.5 py-1 text-brand"
                        : "text-white/40",
                    ].join(" ")}
                  >
                    {t.st[it.status]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* L'ARCHITECTURE — permanente, sous les livrables, pour juger sur pièce */}
      <section className="border-t border-hair px-gutter py-9">
        <div className="mx-auto max-w-[900px]">
          <div className="mb-3.5 flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="eyebrow tracking-[0.22em] text-brand">{t.doctrine}</h2>
            <span className="font-sans text-[9px] text-white/25">
              {t.deliveredOn} {space.doctrine.deliveredOn} · {t.permanent}
            </span>
          </div>

          <div className="mb-3 border-l-2 border-brand bg-white/[0.02] px-5 py-4">
            <div className="mb-1.5 font-sans text-[9px] uppercase tracking-[0.16em] text-white/40">{t.position}</div>
            <p className="m-0 font-serif text-[clamp(0.95rem,1.5vw,1.1rem)] italic leading-snug text-chalk-90">
              « {space.doctrine.position} »
            </p>
          </div>

          <div className="grid gap-2.5 [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]">
            <div className="border border-white/10 px-4 py-3.5">
              <div className="mb-2 font-sans text-[9px] uppercase tracking-[0.14em] text-white/40">{t.pillars}</div>
              <ul className="m-0 list-none p-0 font-sans text-[11px] leading-[1.75] text-chalk-65">
                {space.doctrine.pillars.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
            <div className="border border-white/10 px-4 py-3.5">
              <div className="mb-2 font-sans text-[9px] uppercase tracking-[0.14em] text-white/40">{t.forbidden}</div>
              <p className="m-0 font-sans text-[11px] leading-[1.8] text-chalk-65">
                {space.doctrine.forbidden.join(" · ")}
              </p>
            </div>
          </div>

          {space.doctrine.href && (
            <p className="mt-3.5">
              <Link href={space.doctrine.href} className="btn-quiet text-[12px]">
                {t.full}
              </Link>
            </p>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
