"use client"

import { LocaleLink as Link } from "@/components/locale-link"
import { useT } from "@/lib/i18n"

/**
 * Replaces the former case-studies section.
 *
 * The studio has no client results it can publish honestly, so it publishes the
 * method instead: a complete narrative architecture applied to a house that is
 * explicitly fictional. Verifiable, readable in full, and impossible to accuse
 * of invention — because it declares itself.
 */

const T = {
  en: {
    kicker: "The work, in full",
    h2a: "The work itself,",
    h2b: "published in full.",
    lead: "A narrative architecture is the one document a house cannot share — it is the position itself. So we wrote a complete commission and published every part of it, so you can read exactly what you would receive.",
    docTitle: "SILLAGE",
    docSub: "A fourteen-part Brand Narrative Architecture",
    docMeta: "Free · No email required",
    points: [
      { n: "01", t: "The field, dissected", d: "Five competitors, their sentences taken apart, and the ground none of them occupies." },
      { n: "02", t: "The position, defended", d: "One sentence a competitor could not write without lying — and why it holds." },
      { n: "03", t: "The words, decided", d: "The lexicon that becomes theirs, and the forbidden list drawn from rivals' real copy." },
      { n: "04", t: "The first ninety days", d: "What gets said, in what order, on which surface — day one to day ninety." },
    ],
    cta: "Read the SILLAGE document →",
    note: "An example of what a commission produces, published in full so you can judge the work before commissioning it.",
  },
  fr: {
    kicker: "Le travail, en entier",
    h2a: "Le travail lui-même,",
    h2b: "publié en entier.",
    lead: "Une architecture narrative est le seul document qu'une maison ne peut pas partager — c'est la position elle-même. Nous avons donc écrit une commande complète et publié chacune de ses pièces, pour que vous lisiez exactement ce que vous recevrez.",
    docTitle: "SILLAGE",
    docSub: "Une Brand Narrative Architecture en quatorze pièces",
    docMeta: "Accès libre · Sans email",
    points: [
      { n: "01", t: "Le champ, disséqué", d: "Cinq concurrents, leurs phrases démontées, et le terrain qu'aucun n'occupe." },
      { n: "02", t: "La position, défendue", d: "Une phrase qu'un concurrent ne pourrait pas écrire sans mentir — et pourquoi elle tient." },
      { n: "03", t: "Les mots, tranchés", d: "Le lexique qui devient le leur, et la liste interdite tirée du copy réel des rivaux." },
      { n: "04", t: "Les quatre-vingt-dix premiers jours", d: "Ce qui se dit, dans quel ordre, sur quelle surface — du jour un au jour quatre-vingt-dix." },
    ],
    cta: "Lire le document SILLAGE →",
    note: "Un exemple de ce que produit une commande, publié en entier pour que vous puissiez juger le travail avant de le commander.",
  },
  es: {
    kicker: "El trabajo, entero",
    h2a: "El trabajo mismo,",
    h2b: "publicado entero.",
    lead: "Una arquitectura narrativa es el único documento que una casa no puede compartir — es la posición misma. Escribimos por tanto un encargo completo y publicamos cada una de sus piezas, para que lea exactamente lo que recibirá.",
    docTitle: "SILLAGE",
    docSub: "Una Brand Narrative Architecture en catorce piezas",
    docMeta: "Acceso libre · Sin email",
    points: [
      { n: "01", t: "El campo, diseccionado", d: "Cinco competidores, sus frases desmontadas, y el terreno que ninguno ocupa." },
      { n: "02", t: "La posición, defendida", d: "Una frase que un competidor no podría escribir sin mentir — y por qué se sostiene." },
      { n: "03", t: "Las palabras, decididas", d: "El léxico que se vuelve suyo, y la lista prohibida extraída del copy real de los rivales." },
      { n: "04", t: "Los primeros noventa días", d: "Qué se dice, en qué orden, en qué superficie — del día uno al día noventa." },
    ],
    cta: "Leer el documento SILLAGE →",
    note: "Un ejemplo de lo que produce un encargo, publicado entero para que pueda juzgar el trabajo antes de encargarlo.",
  },
}

export function SillageSection() {
  const t = useT(T)

  return (
    <section id="work" className="section relative overflow-hidden bg-ink-soft text-white">
      <div className="glow-center" aria-hidden />

      <div className="shell relative">
        <div className="mx-auto mb-14 max-w-[760px] text-center">
          <div className="kicker mb-6">{t.kicker}</div>
          <h2 className="h-section mb-7">
            {t.h2a}
            <br />
            <span className="text-gradient">{t.h2b}</span>
          </h2>
          <p className="lede mb-9">{t.lead}</p>

          <p className="mx-auto max-w-[760px] font-serif text-[clamp(1.25rem,2.6vw,1.85rem)] leading-snug text-chalk-90">
            {t.note}
          </p>
        </div>

        <div className="card-featured mx-auto max-w-[900px] p-8 md:p-14">
          <span className="bracket-tl" aria-hidden />
          <span className="bracket-br" aria-hidden />

          <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h3 className="mb-2 font-serif text-[clamp(2.5rem,7vw,4.5rem)] font-bold leading-[0.95] tracking-[-0.04em]">
                <span className="text-gradient">{t.docTitle}</span>
              </h3>
              <p className="m-0 font-serif text-[clamp(1rem,1.6vw,1.25rem)] italic text-chalk-75">{t.docSub}</p>
            </div>
            <div className="tag border-brand text-brand">{t.docMeta}</div>
          </div>

          <div className="mb-9 grid gap-px border border-white/[0.07] bg-white/[0.07] [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
            {t.points.map((p) => (
              <div key={p.n} className="bg-ink px-6 py-7">
                <div className="mb-2.5 font-serif text-xl font-bold text-brand">{p.n}</div>
                <h4 className="mb-2 font-serif text-[1.1rem] font-bold text-white">{p.t}</h4>
                <p className="m-0 font-sans text-[13.5px] leading-relaxed text-chalk-65">{p.d}</p>
              </div>
            ))}
          </div>

          <Link href="/sample-audit" className="btn-primary">
            {t.cta}
          </Link>
        </div>
      </div>
    </section>
  )
}
