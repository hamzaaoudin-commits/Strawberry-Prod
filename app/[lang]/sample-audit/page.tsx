import { LocaleLink as Link } from "@/components/locale-link"
import { NavBar } from "@/components/strawberry/navbar"
import { Footer } from "@/components/strawberry/footer"
import { SAMPLE_DOC, type Block } from "@/lib/sample-sillage"
import { isLang, type Lang } from "@/lib/lang"
import { STRIPE_LINKS } from "@/lib/config"

/**
 * The SILLAGE demonstration document.
 *
 * Content lives in lib/sample-sillage.ts as plain data, so the whole document is
 * prerendered into static HTML at build time — the page ships no data fetching
 * and is fully indexable.
 */

function RenderBlock({ b }: { b: Block }) {
  switch (b.kind) {
    case "h":
      return (
        <h3 className="mb-4 mt-10 font-serif text-[clamp(1.15rem,2vw,1.5rem)] font-bold tracking-[-0.01em] text-white first:mt-0">
          {b.text}
        </h3>
      )

    case "lead":
      return <p className="mb-5 font-serif text-[1.15rem] italic leading-relaxed text-chalk-90">{b.text}</p>

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
                  <th
                    key={h}
                    className="border-b border-white/15 pb-3 pr-5 font-sans text-[10px] uppercase tracking-[0.18em] text-brand"
                  >
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

export default async function SampleAuditPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  // Server component: the SILLAGE document is rendered to HTML at build time and
  // never shipped to the browser as JavaScript.
  const { lang: raw } = await params
  const lang: Lang = isLang(raw) ? raw : "fr"
  const d = SAMPLE_DOC[lang] ?? SAMPLE_DOC.fr

  return (
    <main className="min-h-screen overflow-hidden bg-ink font-sans text-white">
      <NavBar />

      {/* MASTHEAD */}
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

      {/* PARTIAL-EXTRACT NOTICE — the honest frame, stated up front */}
      <section className="px-gutter pb-16">
        <div className="relative mx-auto max-w-[820px] border border-brand-hair bg-[linear-gradient(180deg,rgba(230,57,70,0.06)_0%,rgba(10,10,10,0.6)_100%)] p-8 md:p-12">
          <span className="bracket-tl" aria-hidden />
          <span className="bracket-br" aria-hidden />

          <h2 className="mb-4 font-serif text-[clamp(1.35rem,2.6vw,1.95rem)] font-bold tracking-[-0.02em]">
            {d.partialTitle}
          </h2>

          <p className="mb-7 font-sans text-[15.5px] leading-relaxed text-chalk-75">{d.partialBody}</p>

          <ul className="m-0 flex list-none flex-col gap-3 p-0">
            {d.partialPoints.map((pt) => (
              <li key={pt} className="flex items-start gap-3.5 font-sans text-[14.5px] leading-relaxed text-chalk-65">
                <span aria-hidden className="mt-0.5 shrink-0 text-brand">+</span>
                {pt}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* DOSSIER */}
      <section className="px-gutter pb-16">
        <div className="mx-auto max-w-[820px]">
          <div className="kicker mb-6">{d.dossierTitle}</div>
          <dl className="m-0 flex flex-col">
            {d.dossierRows.map(([k, v]) => (
              <div key={k} className="flex flex-col gap-1.5 border-t border-white/[0.08] py-5 md:flex-row md:gap-8">
                <dt className="shrink-0 font-sans text-[11px] uppercase tracking-[0.18em] text-chalk-40 md:w-[180px]">
                  {k}
                </dt>
                <dd className="m-0 font-sans text-[15px] leading-relaxed text-chalk-75">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CONTENTS */}
      <section className="px-gutter pb-16">
        <div className="mx-auto max-w-[820px] border-t border-white/[0.08] pt-10">
          <div className="kicker mb-6">{d.contentsTitle}</div>
          <ol className="m-0 grid list-none gap-x-8 gap-y-2.5 p-0 md:grid-cols-2">
            {d.parts.map((part) => (
              <li key={part.n}>
                <a
                  href={`#part-${part.n}`}
                  className="flex items-baseline gap-3 font-sans text-[14px] text-chalk-65 no-underline transition-colors hover:text-white"
                >
                  <span className="font-serif text-brand">{part.n}</span>
                  {part.title}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* THE DOCUMENT */}
      <div className="px-gutter">
        <div className="mx-auto max-w-[820px]">
          {d.parts.map((part) => (
            <section key={part.n} id={`part-${part.n}`} className="scroll-mt-24 border-t border-white/[0.08] py-14 md:py-20">
              <div className="mb-2 flex items-baseline gap-4">
                <span className="font-serif text-[2rem] font-bold leading-none text-brand">{part.n}</span>
                <span className="eyebrow">{part.subtitle}</span>
              </div>

              <h2 className="mb-9 font-serif text-[clamp(1.6rem,3.4vw,2.4rem)] font-bold leading-tight tracking-[-0.02em]">
                {part.title}
              </h2>

              {part.blocks.map((b, i) => (
                <RenderBlock key={i} b={b} />
              ))}
            </section>
          ))}
        </div>
      </div>

      {/* DISCLAIMER */}
      <section className="px-gutter py-12">
        <p className="mx-auto max-w-[720px] border-t border-white/[0.08] pt-8 text-center font-sans text-[13px] leading-relaxed text-chalk-40">
          {d.disclaimer}
        </p>
      </section>

      {/* CTA */}
      <section className="section pb-28 text-center">
        <div className="mx-auto max-w-[720px]">
          <h2 className="mb-5 font-serif text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-[-0.02em]">
            {d.ctaTitle}
          </h2>
          <p className="lede mx-auto mb-9 max-w-[620px]">{d.ctaBody}</p>

          <div className="flex flex-wrap justify-center gap-3.5">
            <a href={STRIPE_LINKS.architecture} className="btn-primary" rel="noopener">{d.ctaPrimary}</a>
            <Link href="/audit" className="btn-ghost">{d.ctaSecondary}</Link>
          </div>

          <p className="mt-6 font-sans text-[13px] text-chalk-40">{d.ctaFoot}</p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
