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
    h2a: "We can't show you our commissioners.",
    h2b: "So we published the work itself.",
    lead: "The houses this studio builds are confidential — their narrative architecture is the one thing they cannot afford to share. So instead of testimonials you cannot verify, here is a complete commission, applied to a house that does not exist and says so.",
    docTitle: "SILLAGE",
    docSub: "A fourteen-part Brand Narrative Architecture",
    docMeta: "Fictional house · Free · No email required",
    points: [
      { n: "01", t: "The field, dissected", d: "Five competitors, their sentences taken apart, and the ground none of them occupies." },
      { n: "02", t: "The position, defended", d: "One sentence a competitor could not write without lying — and why it holds." },
      { n: "03", t: "The words, decided", d: "The lexicon that becomes theirs, and the forbidden list drawn from rivals' real copy." },
      { n: "04", t: "The first ninety days", d: "What gets said, in what order, on which surface — day one to day ninety." },
    ],
    cta: "Read the SILLAGE document →",
    note: "Every part of a real commission is represented. SILLAGE itself is invented, and the document says so on every page.",
  },
  fr: {
    kicker: "Le travail, en entier",
    h2a: "Nous ne pouvons pas vous montrer nos commanditaires.",
    h2b: "Alors nous avons publié le travail.",
    lead: "Les maisons que ce studio bâtit sont confidentielles — leur architecture narrative est la seule chose qu'elles ne peuvent pas se permettre de partager. Plutôt que des témoignages invérifiables, voici une commande complète, appliquée à une maison qui n'existe pas et qui le dit.",
    docTitle: "SILLAGE",
    docSub: "Une Brand Narrative Architecture en quatorze pièces",
    docMeta: "Maison fictive · Accès libre · Sans email",
    points: [
      { n: "01", t: "Le champ, disséqué", d: "Cinq concurrents, leurs phrases démontées, et le terrain qu'aucun n'occupe." },
      { n: "02", t: "La position, défendue", d: "Une phrase qu'un concurrent ne pourrait pas écrire sans mentir — et pourquoi elle tient." },
      { n: "03", t: "Les mots, tranchés", d: "Le lexique qui devient le leur, et la liste interdite tirée du copy réel des rivaux." },
      { n: "04", t: "Les quatre-vingt-dix premiers jours", d: "Ce qui se dit, dans quel ordre, sur quelle surface — du jour un au jour quatre-vingt-dix." },
    ],
    cta: "Lire le document SILLAGE →",
    note: "Chaque pièce d'une commande réelle est représentée. SILLAGE est inventée, et le document le déclare à chaque page.",
  },
  es: {
    kicker: "El trabajo, entero",
    h2a: "No podemos mostrarle a nuestros comitentes.",
    h2b: "Así que publicamos el trabajo.",
    lead: "Las casas que este estudio construye son confidenciales — su arquitectura narrativa es lo único que no pueden permitirse compartir. En lugar de testimonios que usted no puede verificar, aquí hay un encargo completo, aplicado a una casa que no existe y que lo dice.",
    docTitle: "SILLAGE",
    docSub: "Una Brand Narrative Architecture en catorce piezas",
    docMeta: "Casa ficticia · Acceso libre · Sin email",
    points: [
      { n: "01", t: "El campo, diseccionado", d: "Cinco competidores, sus frases desmontadas, y el terreno que ninguno ocupa." },
      { n: "02", t: "La posición, defendida", d: "Una frase que un competidor no podría escribir sin mentir — y por qué se sostiene." },
      { n: "03", t: "Las palabras, decididas", d: "El léxico que se vuelve suyo, y la lista prohibida extraída del copy real de los rivales." },
      { n: "04", t: "Los primeros noventa días", d: "Qué se dice, en qué orden, en qué superficie — del día uno al día noventa." },
    ],
    cta: "Leer el documento SILLAGE →",
    note: "Cada pieza de un encargo real está representada. SILLAGE es inventada, y el documento lo declara en cada página.",
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
          <p className="lede">{t.lead}</p>
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

          <div className="mb-10 grid gap-px border border-white/[0.07] bg-white/[0.07] [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
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

          <p className="mt-6 max-w-[620px] font-sans text-[13px] leading-relaxed text-chalk-40">{t.note}</p>
        </div>
      </div>
    </section>
  )
}
