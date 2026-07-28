"use client"

import { LocaleLink as Link } from "@/components/locale-link"
import { useT } from "@/lib/i18n"

/**
 * Avant / après.
 *
 * Les paires viennent des deux documents publiés — SILLAGE et VERSO — et non
 * d'un client inventé. Chacune est donc vérifiable : le lecteur peut ouvrir le
 * document et retrouver le raisonnement qui mène de la ligne de gauche à celle
 * de droite. C'est ce qui distingue une démonstration d'un argumentaire.
 */

const T = {
  fr: {
    kicker: "Avant / après",
    h2a: "Ce qui change,",
    h2b: "concrètement.",
    lead: "Une architecture ne se juge pas sur une intention mais sur une phrase. Voici trois déplacements, tirés mot pour mot des deux documents publiés — vous pouvez ouvrir chacun et retrouver le raisonnement complet.",
    beforeLabel: "Avant",
    afterLabel: "Après",
    pairs: [
      {
        house: "SILLAGE · logiciel de chantier",
        before: "Le suivi de chantier simple et visuel.",
        after: "Sur un chantier, ce n'est pas ce qui s'est passé qui compte. C'est ce que vous pouvez prouver.",
        gain: "Sort de la comparaison avec un outil de productivité. Le prix cesse d'être arbitré sur des heures gagnées.",
        href: "/sample-audit",
      },
      {
        house: "VERSO · reliure d'art",
        before: "L'artisanat de la reliure, au service de vos projets.",
        after: "Nous relions les ouvrages destinés à durer plus longtemps que ceux qui les commandent.",
        gain: "Quitte la position d'exécutant. La maison se compare à un encadrement muséal, plus à un devis d'impression.",
        href: "/exemple-audit",
      },
      {
        house: "SILLAGE · question d'ouverture en rendez-vous",
        before: "Comment gérez-vous vos chantiers aujourd'hui ?",
        after: "Votre dernière contestation, elle remonte à quand ?",
        gain: "Une question déplace la classe de référence plus vite que trois mois de contenu.",
        href: "/sample-audit",
      },
    ],
    cta: "Lire le document complet →",
    note: "Maisons de démonstration. Les documents dont ces phrases sont tirées sont publiés en entier, gratuitement.",
  },
  en: {
    kicker: "Before / after",
    h2a: "What actually",
    h2b: "changes.",
    lead: "An architecture isn't judged on an intention but on a sentence. Here are three real shifts, taken from the two published documents — you can open either and follow the full reasoning.",
    beforeLabel: "Before",
    afterLabel: "After",
    pairs: [
      {
        house: "SILLAGE · construction software",
        before: "Simple, visual construction site tracking.",
        after: "On a building site, what happened isn't what counts. What you can prove is.",
        gain: "Leaves the productivity-tool comparison. Price stops being judged on hours saved.",
        href: "/sample-audit",
      },
      {
        house: "VERSO · art binding",
        before: "The craft of binding, at the service of your projects.",
        after: "We bind the volumes meant to last longer than the people who commission them.",
        gain: "Leaves the executor position. The house is compared to museum framing, not to a printing quote.",
        href: "/exemple-audit",
      },
      {
        house: "SILLAGE · opening question in meetings",
        before: "How do you manage your sites today?",
        after: "When was your last dispute?",
        gain: "One question shifts the reference class faster than three months of content.",
        href: "/sample-audit",
      },
    ],
    cta: "Read the full document →",
    note: "Demonstration houses. The documents these sentences come from are published in full, free.",
  },
  es: {
    kicker: "Antes / después",
    h2a: "Lo que cambia,",
    h2b: "concretamente.",
    lead: "Una arquitectura no se juzga por una intención sino por una frase. Aquí tiene tres desplazamientos reales, extraídos de los dos documentos publicados — puede abrir cualquiera y seguir el razonamiento completo.",
    beforeLabel: "Antes",
    afterLabel: "Después",
    pairs: [
      {
        house: "SILLAGE · software de obra",
        before: "Seguimiento de obra simple y visual.",
        after: "En una obra, no cuenta lo que pasó. Cuenta lo que puede probar.",
        gain: "Sale de la comparación con una herramienta de productividad. El precio deja de arbitrarse en horas ganadas.",
        href: "/sample-audit",
      },
      {
        house: "VERSO · encuadernación de arte",
        before: "La artesanía de la encuadernación, al servicio de sus proyectos.",
        after: "Encuadernamos las obras destinadas a durar más que quienes las encargan.",
        gain: "Abandona la posición de ejecutor. La casa se compara con un enmarcado museístico, no con un presupuesto de imprenta.",
        href: "/exemple-audit",
      },
      {
        house: "SILLAGE · pregunta de apertura en reunión",
        before: "¿Cómo gestionan sus obras hoy?",
        after: "¿Cuándo fue su última impugnación?",
        gain: "Una pregunta desplaza la clase de referencia más rápido que tres meses de contenido.",
        href: "/sample-audit",
      },
    ],
    cta: "Leer el documento completo →",
    note: "Casas de demostración. Los documentos de los que provienen estas frases están publicados enteros, gratis.",
  },
}

export function BeforeAfterSection() {
  const t = useT(T)

  return (
    <section className="section bg-ink-soft text-white">
      <div className="shell-lg">
        <div className="mx-auto mb-14 max-w-[720px] text-center">
          <div className="kicker mb-6">{t.kicker}</div>
          <h2 className="h-section mb-7">
            {t.h2a} <span className="text-gradient">{t.h2b}</span>
          </h2>
          <p className="lede">{t.lead}</p>
        </div>

        <div className="flex flex-col gap-4">
          {t.pairs.map((p) => (
            <div key={p.after} className="border border-hair-strong bg-white/[0.02] p-6 md:p-8">
              <div className="mb-5 font-sans text-[10px] uppercase tracking-[0.2em] text-chalk-40">{p.house}</div>

              <div className="mb-5 grid gap-3 md:grid-cols-2">
                <div className="border border-white/10 bg-white/[0.02] p-5">
                  <div className="mb-2.5 font-sans text-[10px] uppercase tracking-[0.2em] text-white/35">
                    {t.beforeLabel}
                  </div>
                  <p className="m-0 font-serif text-[clamp(0.95rem,1.5vw,1.1rem)] leading-snug text-white/45 line-through decoration-white/20">
                    {p.before}
                  </p>
                </div>

                <div className="border border-brand-hair bg-brand/[0.06] p-5">
                  <div className="mb-2.5 font-sans text-[10px] uppercase tracking-[0.2em] text-brand">
                    {t.afterLabel}
                  </div>
                  <p className="m-0 font-serif text-[clamp(0.95rem,1.5vw,1.1rem)] leading-snug text-chalk-90">
                    {p.after}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-baseline justify-between gap-4 border-t border-white/[0.07] pt-4">
                <p className="m-0 max-w-[560px] font-sans text-[13.5px] leading-relaxed text-chalk-65">{p.gain}</p>
                <Link href={p.href} className="btn-quiet whitespace-nowrap text-[12px]">
                  {t.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-[620px] text-center font-sans text-[12px] leading-relaxed text-chalk-40">
          {t.note}
        </p>
      </div>
    </section>
  )
}
