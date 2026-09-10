"use client"

import { LocaleLink as Link } from "@/components/locale-link"
import { useT } from "@/lib/i18n"
import { NavBar } from "@/components/strawberry/navbar"
import { Footer } from "@/components/strawberry/footer"
import { ViewTracker } from "@/components/strawberry/view-tracker"

/**
 * Le terrain marques & entreprises.
 *
 * Troisième page de terrain, à côté de THE ROOM (lieux) et de la page
 * artistes. Comme elles : elle convainc que c'est pour vous, elle ne vend
 * pas. L'achat se fait sur la page d'offre, à un seul endroit.
 *
 * Les deux cibles tiennent sur une page parce que leur problème est le
 * même vu de deux côtés — une marque est illisible de l'extérieur, une
 * entreprise est illisible de l'extérieur *et* incohérente de l'intérieur.
 * Les séparer aurait dupliqué l'argumentaire pour une nuance qui se dit en
 * deux blocs.
 *
 * Écrite au « nous » et signée du studio, comme le reste du site.
 */

const T = {
  fr: {
    badge: "Terrain · Marques & entreprises",
    h1a: "On vous compare au prix",
    h1b: "parce que rien ne dit qui vous êtes.",
    lead: "Votre produit tient. Vos clients reviennent. Et pourtant, dans la tête de votre marché, vous occupez la même case que six autres — celle où l'on décide sur le tarif.",

    lSigns: "Les signes",
    signs: [
      "Votre meilleur argument, un concurrent pourrait le signer sans mentir.",
      "On vous demande un devis comparatif avant même de vous avoir écouté.",
      "Vos équipes racontent quatre versions différentes de votre métier.",
      "Vous baissez vos prix pour des raisons que vous n'assumez pas.",
    ],

    lTwo: "Deux problèmes, une racine",
    twoTitle: "Illisible dehors, incohérent dedans.",
    brandTitle: "Une marque",
    brandBody: "Le problème est extérieur : le marché ne sait pas ce que vous refusez, donc il vous range par défaut avec les autres. Sans refus, il n'y a pas d'identité à laquelle s'accrocher — seulement une offre à comparer.",
    coTitle: "Une entreprise",
    coBody: "Le problème est aussi intérieur : votre métier est clair pour vous et illisible dehors, parce que personne n'a jamais tranché la version qui fait foi. Chaque équipe improvise la sienne, et le marché reçoit quatre signaux.",

    lWork: "Le travail",
    workTitle: "On lit d'abord. On tranche ensuite.",
    workBody: "L'audit narratif dit ce que vous racontez aujourd'hui, ce que votre marché en entend, et les mouvements qui changent ça. C'est un état des lieux écrit, pas une refonte : rien n'est réécrit à votre place. Si vous voulez qu'on construise, l'architecture narrative vient après.",

    lStudio: "Strawberry Production",
    studioTitle: "Un studio d'architecture narrative, à Paris.",
    studioBody: "Nous écrivons le narratif de marque comme une discipline, pas comme du marketing — pour des marques, des entreprises, des lieux et des noms propres. Même méthode, même prix, même délai, quel que soit le terrain.",

    ctaTitle: "Commencez par savoir ce que vous racontez.",
    ctaBody: "L'audit narratif, 490 €, livré en sept jours.",
    cta: "Voir l'offre →",
  },
  en: {
    badge: "Ground · Brands & companies",
    h1a: "You get compared on price",
    h1b: "because nothing says who you are.",
    lead: "Your product holds. Your customers come back. And yet, in your market's head, you sit in the same box as six others — the one where the decision is made on the rate.",

    lSigns: "The signs",
    signs: [
      "Your best argument could be signed by a competitor without lying.",
      "You get asked for a comparative quote before anyone has listened to you.",
      "Your teams tell four different versions of what you do.",
      "You drop your prices for reasons you would not defend out loud.",
    ],

    lTwo: "Two problems, one root",
    twoTitle: "Unreadable outside, incoherent inside.",
    brandTitle: "A brand",
    brandBody: "The problem is external: the market does not know what you refuse, so it files you with the others by default. Without a refusal there is no identity to hold onto — only an offer to compare.",
    coTitle: "A company",
    coBody: "The problem is internal too: your work is clear to you and unreadable outside, because nobody ever settled the version that counts. Every team improvises its own, and the market receives four signals.",

    lWork: "The work",
    workTitle: "We read first. We settle after.",
    workBody: "The narrative audit states what you are saying today, what your market actually hears, and the moves that change it. It is a written assessment, not a rebuild: nothing is rewritten in your place. If you want it built, the narrative architecture comes after.",

    lStudio: "Strawberry Production",
    studioTitle: "A narrative architecture studio, in Paris.",
    studioBody: "We write brand narrative as a discipline, not as marketing — for brands, companies, venues and names. Same method, same price, same turnaround, whatever the ground.",

    ctaTitle: "Start by knowing what you are saying.",
    ctaBody: "The narrative audit, 490 €, delivered in seven days.",
    cta: "See the offer →",
  },
}

export default function MarquesTerrainPage() {
  const t = useT(T)

  return (
    <main className="min-h-screen bg-ink text-white">
      <ViewTracker name="terrain_marques" />
      <NavBar />

      {/* HERO */}
      <section className="section relative overflow-hidden pt-32">
        <div className="glow-center" aria-hidden />
        <div className="shell relative mx-auto max-w-[860px]">
          <div className="pill mb-8">{t.badge}</div>
          <h1 className="mb-8 font-serif text-[clamp(1.9rem,5vw,3.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            {t.h1a}
            <br />
            <span className="text-gradient">{t.h1b}</span>
          </h1>
          <p className="accroche max-w-[680px]">{t.lead}</p>
        </div>
      </section>

      {/* LES SIGNES */}
      <section className="section border-t border-hair bg-ink-soft">
        <div className="shell mx-auto max-w-[780px]">
          <div className="kicker mb-8">{t.lSigns}</div>
          <ul className="m-0 list-none space-y-5 p-0">
            {t.signs.map((s, i) => (
              <li
                key={s}
                className={`reveal d${Math.min(i + 1, 3)} flex items-baseline gap-4 font-serif text-[clamp(1.05rem,2vw,1.4rem)] leading-snug text-white/85`}
              >
                <span aria-hidden className="text-[0.65em] text-brand">
                  ✦
                </span>
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* DEUX PROBLÈMES */}
      <section className="section border-t border-hair">
        <div className="shell">
          <div className="mx-auto mb-12 max-w-[720px] text-center">
            <div className="kicker mb-5">{t.lTwo}</div>
            <h2 className="h-section">{t.twoTitle}</h2>
          </div>
          <div className="mx-auto grid max-w-[940px] gap-5 sm:grid-cols-2">
            <div className="carte-room reveal">
              <div className="mb-3 font-sans text-[11px] uppercase tracking-[0.2em] text-brand">{t.brandTitle}</div>
              <p className="m-0 font-sans text-[15px] leading-[1.75] text-chalk-65">{t.brandBody}</p>
            </div>
            <div className="carte-room reveal d1">
              <div className="mb-3 font-sans text-[11px] uppercase tracking-[0.2em] text-brand">{t.coTitle}</div>
              <p className="m-0 font-sans text-[15px] leading-[1.75] text-chalk-65">{t.coBody}</p>
            </div>
          </div>
        </div>
      </section>

      {/* LE TRAVAIL */}
      <section className="section border-t border-hair bg-ink-soft">
        <div className="shell mx-auto max-w-[760px]">
          <div className="kicker mb-5">{t.lWork}</div>
          <h2 className="h-section mb-6">{t.workTitle}</h2>
          <p className="font-sans text-[16.5px] leading-[1.8] text-chalk-65">{t.workBody}</p>
        </div>
      </section>

      {/* LE STUDIO */}
      <section className="section border-t border-hair">
        <div className="shell mx-auto max-w-[760px]">
          <div className="kicker mb-5">{t.lStudio}</div>
          <h2 className="h-section mb-6">{t.studioTitle}</h2>
          <p className="font-sans text-[16.5px] leading-[1.8] text-chalk-65">{t.studioBody}</p>
        </div>
      </section>

      {/* CTA — vers l'offre, jamais vers un achat direct : cette page est
          un terrain, pas une page de vente. */}
      <section className="section relative overflow-hidden border-t border-hair text-center">
        <div className="ambiance" aria-hidden />
        <div className="shell relative mx-auto max-w-[680px]">
          <h2 className="h-section mb-5">{t.ctaTitle}</h2>
          <p className="lede mb-10">{t.ctaBody}</p>
          <Link href="/brand-narrative-audit" className="btn-primary">
            {t.cta}
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
