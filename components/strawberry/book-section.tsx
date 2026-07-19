"use client"

import { LocaleLink as Link } from "@/components/locale-link"
import { useT } from "@/lib/i18n"

/**
 * The book, on the home page.
 *
 * A published book is the hardest form of authority to fake, and it was
 * previously buried on the About page. It belongs on the path a first-time
 * visitor actually walks.
 */

const T = {
  en: {
    kicker: "The Book",
    title: "The Clearest Doctrine",
    sub: "Narrative Architecture in the Age of the Machine",
    author: "Hamza El Jaouahiry · 158 pages · Strawberry Production, Paris",
    epigraph:
      "In a market where everyone has access to the same machine, the best product no longer wins. The clearest doctrine does.",
    body: "This studio does not improvise its doctrine commission by commission. It is written down, argued across 158 pages, and published in French and in English — including the five-stage method, demonstrated end to end on three houses.",
    close: "The machine made everyone identical. Start underground.",
    cta: "Read about the book →",
  },
  fr: {
    kicker: "Le Livre",
    title: "La Doctrine la plus claire",
    sub: "L'architecture narrative à l'âge de la machine",
    author: "Hamza El Jaouahiry · 158 pages · Strawberry Production, Paris",
    epigraph:
      "Sur un marché où tout le monde a accès à la même machine, le meilleur produit ne gagne plus. C'est la doctrine la plus claire qui gagne.",
    body: "Ce studio n'improvise pas sa doctrine commande après commande. Elle est écrite, argumentée sur 158 pages, et publiée en français et en anglais — méthode en cinq étapes comprise, démontrée de bout en bout sur trois maisons.",
    close: "La machine a rendu tout le monde identique. Commencez sous terre.",
    cta: "En savoir plus sur le livre →",
  },
  es: {
    kicker: "El Libro",
    title: "La Doctrina más clara",
    sub: "La arquitectura narrativa en la era de la máquina",
    author: "Hamza El Jaouahiry · 158 páginas · Strawberry Production, París",
    epigraph:
      "En un mercado donde todos tienen acceso a la misma máquina, el mejor producto ya no gana. Gana la doctrina más clara.",
    body: "Este estudio no improvisa su doctrina encargo tras encargo. Está escrita, argumentada a lo largo de 158 páginas, y publicada en francés y en inglés — método de cinco etapas incluido, demostrado de principio a fin sobre tres casas.",
    close: "La máquina volvió idénticos a todos. Empiece bajo tierra.",
    cta: "Saber más sobre el libro →",
  },
}

export function BookSection() {
  const t = useT(T)

  return (
    <section className="section bg-ink text-white">
      <div className="shell-lg">
        <div className="grid items-center gap-10 md:gap-16 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
          {/* Cover, composed in type — no asset required */}
          <div className="mx-auto w-full max-w-[300px]">
            <div className="relative flex aspect-[2/3] flex-col justify-between border border-hair-strong bg-[linear-gradient(160deg,#101010_0%,#0a0a0a_60%)] px-7 py-9 shadow-[0_40px_90px_rgba(0,0,0,0.6)]">
              <span className="bracket-tl" aria-hidden />
              <span className="bracket-br" aria-hidden />

              <div className="text-center font-sans text-[8px] uppercase tracking-[0.3em] text-chalk-40">
                Strawberry Production · Paris
              </div>

              <div className="text-center">
                <div className="mb-4 text-brand" aria-hidden>❖</div>
                <h3 className="mb-3 font-serif text-[clamp(1.3rem,2.6vw,1.75rem)] font-bold uppercase leading-[1.1] tracking-[0.02em]">
                  {t.title}
                </h3>
                <p className="m-0 font-serif text-[12px] italic leading-snug text-chalk-55">{t.sub}</p>
              </div>

              <div className="text-center font-sans text-[8px] uppercase tracking-[0.25em] text-chalk-55">
                Hamza El Jaouahiry
              </div>
            </div>
          </div>

          <div>
            <div className="kicker mb-6">{t.kicker}</div>

            <blockquote className="mb-7 border-l-2 border-brand py-1 pl-6">
              <p className="m-0 font-serif text-[clamp(1.1rem,2vw,1.4rem)] italic leading-snug text-chalk-90">
                {t.epigraph}
              </p>
            </blockquote>

            <p className="mb-6 font-sans text-[16px] leading-[1.8] text-chalk-65">{t.body}</p>

            <p className="mb-8 font-serif text-[1.05rem] italic text-chalk-75">{t.close}</p>

            <div className="mb-6 border-t border-white/10 pt-5 font-sans text-[13px] text-chalk-40">
              {t.author}
            </div>

            <Link href="/about" className="btn-quiet">
              {t.cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
