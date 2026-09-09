"use client"

import { LocaleLink as Link } from "@/components/locale-link"
import { useT } from "@/lib/i18n"
import { ViewTracker } from "@/components/strawberry/view-tracker"

/**
 * Les quatre terrains de l'audit narratif.
 *
 * Un seul métier — le narratif — appliqué à quatre objets. La grille pose
 * les quatre côte à côte avec le même prix, le même délai et la même
 * méthode : c'est la démonstration visuelle de l'argument, bien plus que
 * ne le ferait un paragraphe qui l'affirme.
 *
 * Le prix est affiché une fois, au-dessus de la grille, et non répété dans
 * chaque carte. Répété quatre fois il se lit comme quatre offres à
 * comparer ; affiché une fois il se lit comme ce qu'il est — un tarif
 * unique, quel que soit le terrain.
 */

const T = {
  fr: {
    kicker: "Un métier, quatre terrains",
    h2a: "Tout tient sur un récit.",
    h2b: "Personne ne l'a écrit.",
    lead: "Une marque, une entreprise, un lieu ou une personne : le travail est le même. On lit ce que vous racontez aujourd'hui, on dit ce que le marché en entend, et on donne les mouvements qui changent ça.",
    priceLabel: "Le même audit, quel que soit le terrain",
    price: "490 €",
    priceMeta: "Livré en sept jours · Payé une fois",
    terrains: [
      {
        key: "marques",
        label: "Marques",
        body: "Vous vendez un produit ou un service, et on vous compare au prix parce que rien ne dit qui vous êtes.",
        href: "/brand-narrative-audit",
      },
      {
        key: "entreprises",
        label: "Entreprises",
        body: "Votre métier est clair en interne, illisible dehors. Vos équipes racontent quatre versions différentes.",
        href: "/brand-narrative-audit",
      },
      {
        key: "lieux",
        label: "Lieux",
        body: "Restaurant, bar, club, coffee shop. La salle est pleine et pourtant chaque publication repart de zéro.",
        href: "/brand-narrative-audit",
      },
      {
        key: "artistes",
        label: "Artistes & fondateurs",
        body: "Vos sorties ne s'additionnent pas. Votre nom porte un travail que personne n'a encore formulé.",
        href: "/brand-narrative-audit",
      },
    ],
    cta: "Commander l'audit →",
    afterLabel: "Après l'audit, si vous voulez qu'on construise",
    after: [
      { name: "L'ARCHITECTURE", meta: "Vingt pièces · sur commande", href: "/brand-narrative-architecture" },
      { name: "THE ROOM", meta: "Lieux · sprint de 2 à 3 semaines", href: "/the-room" },
    ],
  },
  en: {
    kicker: "One craft, four grounds",
    h2a: "It all rests on a story.",
    h2b: "Nobody has written it.",
    lead: "A brand, a company, a venue or a person: the work is the same. We read what you are saying today, state what the market actually hears, and give you the moves that change it.",
    priceLabel: "The same audit, whatever the ground",
    price: "490 €",
    priceMeta: "Delivered in seven days · Paid once",
    terrains: [
      {
        key: "marques",
        label: "Brands",
        body: "You sell a product or a service, and you get compared on price because nothing says who you are.",
        href: "/brand-narrative-audit",
      },
      {
        key: "entreprises",
        label: "Companies",
        body: "Your work is clear inside, unreadable outside. Your teams tell four different versions of it.",
        href: "/brand-narrative-audit",
      },
      {
        key: "lieux",
        label: "Venues",
        body: "Restaurant, bar, club, coffee shop. The room is full, yet every post starts from nothing.",
        href: "/brand-narrative-audit",
      },
      {
        key: "artistes",
        label: "Artists & founders",
        body: "Your releases do not add up. Your name carries work nobody has put into words yet.",
        href: "/brand-narrative-audit",
      },
    ],
    cta: "Order the audit →",
    afterLabel: "After the audit, if you want it built",
    after: [
      { name: "THE ARCHITECTURE", meta: "Twenty parts · on commission", href: "/brand-narrative-architecture" },
      { name: "THE ROOM", meta: "Venues · two to three week sprint", href: "/the-room" },
    ],
  },
}

export function TerrainsSection() {
  const t = useT(T)

  return (
    <section className="section border-t border-hair bg-ink-soft">
      <ViewTracker name="terrains" />
      <div className="shell">
        <div className="mx-auto mb-12 max-w-[720px] text-center">
          <div className="kicker mb-5">{t.kicker}</div>
          <h2 className="h-section mb-5">
            {t.h2a} <span className="text-gradient">{t.h2b}</span>
          </h2>
          <p className="lede">{t.lead}</p>
        </div>

        {/* Le prix, une fois. Répété dans chaque carte, il inviterait à
            comparer quatre offres ; posé une fois au-dessus des quatre, il
            dit ce qu'il est — un tarif unique. */}
        <div className="mx-auto mb-10 max-w-[520px] border border-brand-hair bg-brand/[0.04] px-6 py-6 text-center">
          <div className="mb-2 font-sans text-[11px] uppercase tracking-[0.18em] text-brand">{t.priceLabel}</div>
          <div className="font-serif text-[clamp(2.2rem,5vw,3rem)] font-bold leading-none text-gradient">{t.price}</div>
          <div className="mt-3 font-sans text-[12.5px] text-chalk-55">{t.priceMeta}</div>
        </div>

        <div className="mx-auto grid max-w-[1000px] gap-px bg-white/10 sm:grid-cols-2">
          {t.terrains.map((x) => (
            <Link
              key={x.key}
              href={x.href}
              className="group relative flex flex-col bg-ink px-7 py-8 no-underline transition-colors duration-500 hover:bg-white/[0.02]"
            >
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-brand transition-transform duration-500 group-hover:scale-x-100"
              />
              <div className="mb-3 font-sans text-[11px] uppercase tracking-[0.2em] text-brand">{x.label}</div>
              <p className="m-0 font-sans text-[14.5px] leading-[1.7] text-chalk-65">{x.body}</p>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/brand-narrative-audit" className="btn-primary">
            {t.cta}
          </Link>
        </div>

        {/* Les deux commandes, après l'audit et clairement en second plan.
            L'audit est le même pour les quatre terrains ; ces deux-là sont
            ce qu'on construit ensuite, quand le diagnostic a été posé. Les
            citer ici évite qu'un visiteur les découvre par accident dans le
            menu et croie à quatre offres concurrentes. */}
        <div className="mx-auto mt-14 max-w-[720px] border-t border-hair pt-8 text-center">
          <div className="mb-5 font-sans text-[11px] uppercase tracking-[0.18em] text-chalk-40">{t.afterLabel}</div>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {t.after.map((a) => (
              <Link key={a.name} href={a.href} className="group no-underline">
                <span className="font-sans text-[13px] font-semibold tracking-[0.06em] text-brand transition-colors group-hover:text-white">
                  {a.name}
                </span>
                <span className="ml-2 font-sans text-[12px] text-chalk-40">{a.meta}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
