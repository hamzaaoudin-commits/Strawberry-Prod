import { LocaleLink as Link } from "@/components/locale-link"
import { NavBar } from "@/components/strawberry/navbar"
import { Footer } from "@/components/strawberry/footer"
import { AUDIT_DOC, type AuditBlock } from "@/lib/sample-verso"
import { isLang, type Lang } from "@/lib/lang"
import { STRIPE_LINKS } from "@/lib/config"
import { BackHomeButton } from "@/components/strawberry/back-home-button"

/**
 * VERSO — the demonstration document for the 490€ audit.
 *
 * Server component: the document is rendered to static HTML at build time and
 * never shipped as JavaScript.
 */

function Block({ b }: { b: AuditBlock }) {
  switch (b.kind) {
    case "p":
      return <p className="mb-5 font-sans text-[15.5px] leading-[1.75] text-chalk-75">{b.text}</p>

    case "quote":
      return (
        <blockquote className="my-7 border-l-2 border-brand bg-white/[0.02] py-5 pl-6 pr-5">
          <p className="m-0 font-serif text-[clamp(1rem,1.6vw,1.2rem)] italic leading-[1.6] text-chalk-90">
            {b.text}
          </p>
        </blockquote>
      )

    case "list":
      return (
        <ul className="mb-6 flex list-none flex-col gap-3.5 p-0">
          {b.items.map((it, i) => (
            <li key={i} className="flex items-start gap-3.5 font-sans text-[15px] leading-[1.7] text-chalk-75">
              <span aria-hidden className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-brand" />
              {it}
            </li>
          ))}
        </ul>
      )

    case "table":
      return (
        <div className="mb-7 overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr>
                {b.head.map((h) => (
                  <th key={h} className="border-b border-white/15 pb-3 pr-5 font-sans text-[10px] uppercase tracking-[0.18em] text-brand">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {b.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className={`border-b border-white/[0.07] py-4 pr-5 align-top font-sans text-[13.5px] leading-relaxed ${
                        j === 0 ? "font-semibold text-white" : "text-chalk-65"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )

    case "pair":
      return (
        <div className="mb-6 grid gap-3 md:grid-cols-2">
          <div className="border border-white/10 bg-white/[0.02] p-5">
            <div className="mb-2.5 font-sans text-[10px] uppercase tracking-[0.2em] text-white/35">{b.beforeLabel}</div>
            <p className="m-0 font-sans text-[14px] leading-relaxed text-white/45">{b.before}</p>
          </div>
          <div className="border border-brand-hair bg-brand/[0.05] p-5">
            <div className="mb-2.5 font-sans text-[10px] uppercase tracking-[0.2em] text-brand">{b.afterLabel}</div>
            <p className="m-0 font-sans text-[14px] leading-relaxed text-chalk-90">{b.after}</p>
          </div>
        </div>
      )
  }
}

export default async function AuditSamplePage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang: raw } = await params
  const lang: Lang = isLang(raw) ? raw : "fr"
  const d = AUDIT_DOC[lang] ?? AUDIT_DOC.fr

  return (
    <main className="min-h-screen overflow-hidden bg-ink font-sans text-white">
      <NavBar />
      <BackHomeButton />

      <section className="section-hero pb-14 pt-40">
        <div className="glow-top" aria-hidden />
        <div className="shell-sm relative">
          <div className="pill mb-8">{d.eyebrow}</div>
          <div className="mb-3 font-sans text-[11px] uppercase tracking-[0.3em] text-chalk-55">{d.title}</div>
          <h1 className="mb-5 font-serif text-[clamp(3rem,12vw,7rem)] font-bold leading-[0.95] tracking-[-0.04em]">
            <span className="text-gradient">{d.house}</span>
          </h1>
          <div className="font-sans text-[13px] uppercase tracking-[0.15em] text-chalk-40">{d.edition}</div>
        </div>
      </section>

      <section className="px-gutter pb-14">
        <div className="mx-auto max-w-[820px]">
          <div className="kicker mb-6">{d.dossierTitle}</div>
          <dl className="m-0 flex flex-col">
            {d.dossierRows.map(([k, v]) => (
              <div key={k} className="flex flex-col gap-1.5 border-t border-white/[0.08] py-5 md:flex-row md:gap-8">
                <dt className="shrink-0 font-sans text-[11px] uppercase tracking-[0.18em] text-chalk-40 md:w-[180px]">{k}</dt>
                <dd className="m-0 font-sans text-[15px] leading-relaxed text-chalk-75">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <div className="px-gutter">
        <div className="mx-auto max-w-[820px]">
          {d.parts.map((part) => (
            <section key={part.n} className="border-t border-white/[0.08] py-14">
              <div className="mb-2 flex items-baseline gap-4">
                <span className="font-serif text-[2rem] font-bold leading-none text-brand">{part.n}</span>
              </div>
              <h2 className="mb-9 font-serif text-[clamp(1.6rem,3.4vw,2.4rem)] font-bold leading-tight tracking-[-0.02em]">
                {part.title}
              </h2>
              {part.blocks.map((b, i) => (
                <Block key={i} b={b} />
              ))}
            </section>
          ))}
        </div>
      </div>

      {/* SCOPE — the boundary against the 4,500€ commission, stated inside the sample */}
      <section className="px-gutter py-14">
        <div className="relative mx-auto max-w-[820px] border border-hair-strong bg-white/[0.02] p-8 md:p-12">
          <h2 className="mb-4 font-serif text-[clamp(1.35rem,2.6vw,1.95rem)] font-bold tracking-[-0.02em]">
            {d.scopeTitle}
          </h2>
          <p className="mb-7 font-sans text-[15.5px] leading-relaxed text-chalk-75">{d.scopeBody}</p>
          <ul className="m-0 flex list-none flex-col gap-3 p-0">
            {d.scopeNot.map((n) => (
              <li key={n} className="flex items-start gap-3.5 font-sans text-[14.5px] leading-relaxed text-chalk-65">
                <span aria-hidden className="mt-0.5 shrink-0 text-brand">✕</span>
                {n}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section pb-28 text-center">
        <div className="mx-auto max-w-[720px]">
          <h2 className="mb-5 font-serif text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-[-0.02em]">{d.ctaTitle}</h2>
          <p className="lede mx-auto mb-9 max-w-[620px]">{d.ctaBody}</p>
          <div className="flex flex-wrap justify-center gap-3.5">
            <a href={STRIPE_LINKS.audit490} className="btn-primary" rel="noopener">{d.ctaPrimary}</a>
            <Link href="/documents/sillage" className="btn-ghost">{d.ctaSecondary}</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
