"use client"

import { LocaleLink as Link } from "@/components/locale-link"
import { useT } from "@/lib/i18n"
import { STRIPE_LINKS } from "@/lib/config"

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
    cta1: "Commander le travail →",
    cta2: "Lire le brief complet",
    limit: "Limité à quatre commandes par trimestre.",
    auditTag: "Diagnostic seul · 490€",
    auditName: "BRAND NARRATIVE AUDIT",
    auditLead: "Pas prêt pour l'architecture complète ? Commencez par le diagnostic.",
    auditBody: "Une lecture écrite de votre récit actuel — ce qui porte, ce qui vous rend indifférenciable, et les mouvements précis à faire. Déduit de la commande si vous allez plus loin dans les 60 jours.",
    auditCta: "Voir l'audit — 490€ →",
  },
  es: {
    kicker: "El Encargo Insignia",
    h2a: "No construimos marcas.",
    h2b: "Construimos el universo en el que viven.",
    intro:
      "Una sola oferta, afinada encargo tras encargo. Ni un logo ni una campaña: la identidad, la posición y el lenguaje en los que vive una casa — la estructura a la que todo lo demás debe responder.",
    h3: "El relato de marca que ningún competidor puede copiar — y que ninguna máquina puede escribir.",
    body:
      "Empieza con una extracción que ninguna IA automatiza: su verdad, su singularidad, eso que ya no ve porque está dentro. De ahí, un reposicionamiento completo — entregado y utilizable el lunes siguiente.",
    deliverables: [
      "Diagnóstico de diferenciación",
      "Plataforma narrativa",
      "Sistema de lenguaje",
      "Kit de despliegue",
      "Guía de coherencia",
    ],
    cta1: "Encargar el trabajo →",
    cta2: "Leer el brief completo",
    limit: "Limitado a cuatro encargos por trimestre.",
    auditTag: "Solo diagnóstico · 490€",
    auditName: "BRAND NARRATIVE AUDIT",
    auditLead: "¿Aún no listo para la arquitectura complete? Empiece por el diagnóstico.",
    auditBody: "Una lectura escrita de su relato actual — lo que aterriza, lo que le vuelve indistinguible y los movimientos precisos a realizar. Se descuenta del encargo si va más lejos en 60 días.",
    auditCta: "Ver la auditoría — 490€ →",
  },
}

export function OffersSection() {
  const t = useT(T)

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

        {/* THE COMMISSION */}
        <div className="card-featured mx-auto max-w-[900px] p-8 md:p-14">
          <span className="bracket-tl" aria-hidden />
          <span className="bracket-br" aria-hidden />

          <div className="pill mb-8">BRAND NARRATIVE ARCHITECTURE · 4,500€</div>

          <h3 className="mb-6 font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold leading-[1.15] tracking-[-0.02em]">
            {t.h3}
          </h3>

          <p className="mb-9 max-w-[680px] font-sans text-base leading-relaxed text-chalk-65">{t.body}</p>

          <ul className="mb-10 grid list-none gap-3 p-0 [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]">
            {t.deliverables.map((d, i) => (
              <li key={d} className="flex items-baseline gap-3 font-sans text-[14.5px] text-chalk-75">
                <span className="font-serif text-brand">{String(i + 1).padStart(2, "0")}</span>
                {d}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-4">
            <a href={STRIPE_LINKS.architecture} className="btn-primary" rel="noopener">
              {t.cta1}
            </a>
            <Link href="/brand-narrative-audit" className="btn-ghost">
              {t.cta2}
            </Link>
          </div>

          <p className="mt-6 font-sans text-[13px] text-chalk-40">{t.limit}</p>
        </div>

        {/* THE 490 AUDIT — the step below the commission. */}
        <div className="mx-auto mt-6 max-w-[900px] border border-brand-hair bg-white/[0.02] p-8 md:p-14">
          <div className="tag mb-7 border-brand text-brand">{t.auditTag}</div>

          <h3 className="mb-5 font-serif text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-[1.05] tracking-[-0.03em]">
            <span className="text-gradient">{t.auditName}</span>
          </h3>

          <p className="mb-4 font-serif text-[clamp(1.1rem,2vw,1.4rem)] leading-snug text-chalk-90">
            {t.auditLead}
          </p>
          <p className="mb-8 max-w-[620px] body-sm">{t.auditBody}</p>

          <Link href="/audit" className="btn-primary">
            {t.auditCta}
          </Link>
        </div>
      </div>
    </section>
  )
}
