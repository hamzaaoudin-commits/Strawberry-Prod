import { LocaleLink as Link } from "@/components/locale-link"
import { NavBar } from "@/components/strawberry/navbar"
import { Footer } from "@/components/strawberry/footer"
import { pick } from "@/lib/t"
import { isLang, type Lang } from "@/lib/lang"

/**
 * L'index des documents publiés.
 *
 * Cinq adresses disaient presque la même chose : /audit, /brand-narrative-audit,
 * /sample-audit, /exemple-audit, /radar/lecture. Un visiteur ne savait pas
 * laquelle ouvrir, et Google pas laquelle indexer. Les deux documents de
 * démonstration se rangent ici, sous une adresse qui dit ce qu'elle contient.
 */

const T = {
  fr: {
    kicker: "Les documents publiés",
    h1a: "Lisez le travail",
    h1b: "avant de le commander.",
    lead: "Deux documents complets, publiés en entier, sans email à laisser. Ils portent sur des maisons inventées pour l'exercice — aucun client n'a à servir de vitrine.",
    docs: [
      { name: "SILLAGE", motif: "sillage", sub: "Logiciel de chantier", kind: "BRAND NARRATIVE ARCHITECTURE · quatorze pièces", body: "Une commande complète, de la dissection du champ narratif jusqu'aux quatre-vingt-dix premiers jours de déploiement.", href: "/documents/sillage" },
      { name: "VERSO", motif: "verso", sub: "Reliure d'art", kind: "BRAND NARRATIVE AUDIT · cinq blocs", body: "Un diagnostic écrit : ce qui porte, ce qui vous confond avec vos concurrents, et les mouvements précis à faire. Le format de l'offre d'entrée, en entier.", href: "/documents/verso" },
    ],
    read: "Lire le document →",
  },
  en: {
    kicker: "The published documents",
    h1a: "Read the work",
    h1b: "before commissioning it.",
    lead: "Two complete documents, published in full, with no email to leave. They cover houses invented for the exercise — no client has to serve as a showcase.",
    docs: [
      { name: "SILLAGE", motif: "sillage", sub: "Construction software", kind: "BRAND NARRATIVE ARCHITECTURE · fourteen parts", body: "A complete commission, from the dissection of the narrative field to the first ninety days of deployment.", href: "/documents/sillage" },
      { name: "VERSO", motif: "verso", sub: "Art bindery", kind: "BRAND NARRATIVE AUDIT · five blocks", body: "A written diagnosis: what lands, what makes you indistinguishable from competitors, and the precise moves to make. The entry offer's format, in full.", href: "/documents/verso" },
    ],
    read: "Read the document →",
  },
}

export default async function DocumentsIndex({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang: raw } = await params
  const lang: Lang = isLang(raw) ? raw : "fr"
  const t = pick(T, lang)

  return (
    <main className="min-h-screen bg-ink text-white">
      <NavBar />

      <section className="section-hero pb-14 pt-36">
        <div className="shell">
          <div className="kicker mb-6">{t.kicker}</div>
          <h1 className="mb-7 font-serif text-[clamp(2rem,5vw,3.6rem)] font-bold leading-[1.08] tracking-[-0.02em]">
            {t.h1a}
            <br />
            <span className="text-gradient">{t.h1b}</span>
          </h1>
          <p className="lede max-w-[640px]">{t.lead}</p>
        </div>
      </section>

      <section className="section pt-0">
        <div className="shell grid max-w-[900px] gap-6 md:grid-cols-2">
          {t.docs.map((d) => (
            <div key={d.name} className="flex flex-col border border-hair p-7 transition-colors duration-[900ms] ease-[cubic-bezier(.22,.68,0,1.2)] hover:border-brand/35 md:p-9">
              <div className="mx-auto mb-7 w-[140px] max-w-full">
                <DocCover motif={d.motif} name={d.name} />
              </div>

              <div className="mb-2 font-serif text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-[0.05em] text-brand">
                {d.name}
              </div>
              <div className="mb-5 font-sans text-[13px] uppercase tracking-[0.14em] text-chalk-40">{d.sub}</div>
              <div className="mb-5 font-sans text-[12px] uppercase tracking-[0.12em] text-chalk-55">{d.kind}</div>
              <p className="mb-8 font-sans text-[15px] leading-relaxed text-chalk-65">{d.body}</p>
              <Link href={d.href} className="btn-primary mt-auto self-start">
                {t.read}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}

/**
 * Une couverture par document, chacune avec son propre motif — SILLAGE
 * (architecture, grille de plan) et VERSO (reliure, tranches de dos de
 * livre) ne doivent pas se lire comme deux variantes du même gabarit.
 */
function DocCover({ motif, name }: { motif: string; name: string }) {
  return (
    <div className="relative flex aspect-[3/4] flex-col items-center justify-center overflow-hidden border border-brand/25 bg-[linear-gradient(155deg,#120d0e_0%,#0a0a0a_65%)] px-4 text-center shadow-[0_24px_54px_rgba(0,0,0,0.5)]">
      <span className="bracket-tl" aria-hidden />
      <span className="bracket-br" aria-hidden />

      <svg viewBox="0 0 140 187" aria-hidden className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.14]">
        {motif === "sillage" ? (
          <>
            {[32, 64, 96, 128, 160].map((y) => (
              <line key={y} x1="0" y1={y} x2="140" y2={y} stroke="#e63946" strokeWidth="0.5" />
            ))}
            {[28, 56, 84, 112].map((x) => (
              <line key={x} x1={x} y1="0" x2={x} y2="187" stroke="#e63946" strokeWidth="0.5" />
            ))}
            <circle cx="70" cy="93" r="17" fill="none" stroke="#e63946" strokeWidth="0.6" />
          </>
        ) : (
          <>
            {/* VERSO : tranches de dos de livre — des bandes verticales de
                largeur inégale, comme une reliure cousue à la main. */}
            {[10, 24, 40, 58, 78, 100, 124].map((x, i) => (
              <line key={x} x1={x} y1="8" x2={x} y2="179" stroke="#e63946" strokeWidth={i % 2 === 0 ? 1.1 : 0.5} />
            ))}
            <line x1="0" y1="18" x2="140" y2="18" stroke="#e63946" strokeWidth="0.5" />
            <line x1="0" y1="169" x2="140" y2="169" stroke="#e63946" strokeWidth="0.5" />
          </>
        )}
      </svg>

      <div className="relative font-serif text-[1.15rem] font-bold tracking-[0.06em] text-brand">{name}</div>
      <div aria-hidden className="relative my-2.5 h-px w-6 bg-brand/50" />
      <div className="relative font-sans text-[9px] uppercase tracking-[0.14em] text-chalk-40">
        {motif === "sillage" ? "Architecture" : "Audit"}
      </div>
    </div>
  )
}
