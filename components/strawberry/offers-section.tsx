import { LocaleLink as Link } from "@/components/locale-link"
import { pick } from "@/lib/t"
import type { Lang } from "@/lib/lang"
import { STRIPE_LINKS } from "@/lib/config"
import { OfferCover } from "@/components/strawberry/offer-covers"

/**
 * La commande signature.
 *
 * Composant serveur : cette section n'a aucune interaction, donc rien n'a à être
 * hydraté côté navigateur. C'est l'un des blocs qui allongeaient le plus le
 * chargement sur téléphone.
 *
 * La présentation montre l'artefact avant de le décrire : la couverture à
 * gauche, la position à droite, les livrables en registre numéroté plutôt qu'en
 * liste à puces, et une bande de spécifications qui répond aux trois objections
 * qu'un prospect ne pose jamais à voix haute — combien de temps, sous quelle
 * forme, et pourquoi ce n'est pas disponible en permanence.
 */

const T = {
  en: {
    kicker: "The Signature Commission",
    h2a: "We don't build brands.",
    h2b: "We build the universe they live in.",
    intro:
      "One offer, refined commission after commission. Not a logo and not a campaign: the identity, the position and the language a house lives inside — the structure everything else has to answer to.",
    h3: "The brand story that no competitor can copy — and no machine can write.",
    body:
      "It begins with an extraction no AI can automate: your truth, your singularity, the thing you no longer see because you are inside it. From it, a complete repositioning — delivered and exploitable the Monday after.",
    deliverables: [
      "Differentiation Diagnostic",
      "Narrative Platform",
      "Language System",
      "Deployment Kit",
      "Coherence Guide",
    ],
    specs: [
      { k: "Lead time", v: "3 to 4 weeks" },
      { k: "Format", v: "One editorial document" },
      { k: "Scarcity", v: "4 commissions per quarter" },
    ],
    coverFoot: "Fourteen parts",
    cta1: "Commission the Work →",
    cta2: "Read the Full Brief",
    limit: "Limited to four commissions per quarter.",
    auditTag: "Diagnosis only · 490€",
    auditName: "BRAND NARRATIVE AUDIT",
    auditLead: "Not ready for the full architecture? Start with the diagnosis.",
    auditBody: "A written read of your current narrative — what lands, what makes you indistinguishable, and the precise moves to make. Deducted from the commission if you go further within 60 days.",
    auditCta: "See the audit — 490€ →",
  },
  fr: {
    kicker: "La Commande Signature",
    h2a: "On ne construit pas des marques.",
    h2b: "On construit l'univers dans lequel elles vivent.",
    intro:
      "Une seule offre, affinée commande après commande. Ni un logo ni une campagne : l'identité, la position et le langage dans lesquels une maison vit — la structure à laquelle tout le reste doit répondre.",
    h3: "Le récit de marque qu'aucun concurrent ne peut copier — et qu'aucune machine ne peut écrire.",
    body:
      "Tout commence par une extraction qu'aucune IA n'automatise : votre vérité, votre singularité, ce que vous ne voyez plus parce que vous êtes dedans. Puis un repositionnement complet — livré et exploitable dès le lundi suivant.",
    deliverables: [
      "Diagnostic de différenciation",
      "Plateforme narrative",
      "Système de langage",
      "Kit de déploiement",
      "Guide de cohérence",
    ],
    specs: [
      { k: "Délai", v: "3 à 4 semaines" },
      { k: "Format", v: "Un document éditorial" },
      { k: "Rareté", v: "4 commandes par trimestre" },
    ],
    coverFoot: "Quatorze pièces",
    cta1: "Commander le travail →",
    cta2: "Lire le brief complet",
    limit: "Limité à quatre commandes par trimestre.",
    auditTag: "Diagnostic seul · 490€",
    auditName: "BRAND NARRATIVE AUDIT",
    auditLead: "Pas prêt pour l'architecture complète ? Commencez par le diagnostic.",
    auditBody: "Une lecture écrite de votre récit actuel — ce qui porte, ce qui vous rend indifférenciable, et les mouvements précis à faire. Déduit de la commande si vous allez plus loin dans les 60 jours.",
    auditCta: "Voir l'audit — 490€ →",
  },
}

export function OffersSection({ lang }: { lang: Lang }) {
  const t = pick(T, lang)

  return (
    <section id="offers" className="section relative overflow-hidden bg-ink text-white">
      <div className="glow-center" aria-hidden />

      <div className="shell relative">
        <div className="mx-auto mb-16 max-w-[720px] text-center">
          <div className="kicker mb-6">{t.kicker}</div>
          <h2 className="h-section mb-7">
            {t.h2a}
            <br />
            <span className="text-gradient">{t.h2b}</span>
          </h2>
          <p className="lede">{t.intro}</p>
        </div>

        {/* LA COMMANDE */}
        <div className="card-featured mx-auto max-w-[980px] p-7 md:p-12">
          <span className="bracket-tl" aria-hidden />
          <span className="bracket-br" aria-hidden />

          <div className="relative grid gap-10 md:grid-cols-[190px_minmax(0,1fr)] md:gap-12">
            {/* L'objet, avant l'argument. */}
            <div className="mx-auto w-[180px] max-w-full md:mx-0 md:w-full">
              <OfferCover
                k="architecture"
                name={
                  <>
                    Brand
                    <br />
                    Narrative
                    <br />
                    Architecture
                  </>
                }
                featured
              />
              <div className="mt-3 text-center font-sans text-[11px] uppercase tracking-[0.18em] text-chalk-40">
                {t.coverFoot}
              </div>
            </div>

            <div>
              <div className="pill mb-7">BRAND NARRATIVE ARCHITECTURE · 4 500€</div>

              <h3 className="mb-6 font-serif text-[clamp(1.6rem,3.2vw,2.5rem)] font-bold leading-[1.15] tracking-[-0.02em]">
                {t.h3}
              </h3>

              <p className="mb-9 max-w-[620px] font-sans text-base leading-relaxed text-chalk-65">{t.body}</p>

              {/* Registre : chaque livrable sur sa ligne, séparé par un filet.
                  Une liste à puces sur deux colonnes se lisait comme un
                  bordereau de fonctionnalités. */}
              <ol className="mb-9 list-none border-t border-hair p-0">
                {t.deliverables.map((d, i) => (
                  <li
                    key={d}
                    className="flex items-baseline gap-4 border-b border-white/[0.06] py-3 font-sans text-[15px] text-chalk-75"
                  >
                    <span className="font-serif text-[13px] text-brand">{String(i + 1).padStart(2, "0")}</span>
                    {d}
                  </li>
                ))}
              </ol>

              <div className="mb-9 grid gap-px bg-white/10 sm:grid-cols-3">
                {t.specs.map((sp) => (
                  <div key={sp.k} className="bg-ink px-4 py-3.5">
                    <div className="mb-1.5 font-sans text-[11px] uppercase tracking-[0.16em] text-chalk-40">
                      {sp.k}
                    </div>
                    <div className="font-serif text-[15px] text-white">{sp.v}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a href={STRIPE_LINKS.architecture} className="btn-primary" rel="noopener">
                  {t.cta1}
                </a>
                <Link href="/brand-narrative-architecture" className="btn-ghost">
                  {t.cta2}
                </Link>
              </div>

              <p className="mt-6 font-sans text-[13px] text-chalk-40">{t.limit}</p>
            </div>
          </div>
        </div>

        {/* L'AUDIT À 490€ — le barreau en dessous. */}
        <div className="mx-auto mt-6 max-w-[980px] border border-brand-hair bg-white/[0.02] p-7 md:p-12">
          <div className="grid gap-8 md:grid-cols-[190px_minmax(0,1fr)] md:gap-12">
            <div className="mx-auto w-[140px] max-w-full md:mx-0 md:w-full">
              <OfferCover
                k="audit"
                name={
                  <>
                    Brand
                    <br />
                    Narrative
                    <br />
                    Audit
                  </>
                }
              />
            </div>

            <div>
              <div className="tag mb-6 border-brand text-brand">{t.auditTag}</div>

              <h3 className="mb-5 font-serif text-[clamp(1.5rem,3.4vw,2.4rem)] font-bold leading-[1.05] tracking-[-0.03em]">
                <span className="text-gradient">{t.auditName}</span>
              </h3>

              <p className="mb-4 font-serif text-[clamp(1.05rem,1.9vw,1.35rem)] leading-snug text-chalk-90">
                {t.auditLead}
              </p>
              <p className="mb-8 max-w-[620px] body-sm">{t.auditBody}</p>

              <Link href="/brand-narrative-audit" className="btn-primary">
                {t.auditCta}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
