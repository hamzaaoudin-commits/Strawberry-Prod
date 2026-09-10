"use client"

import { LocaleLink as Link } from "@/components/locale-link"
import { useT } from "@/lib/i18n"
import { ViewTracker } from "@/components/strawberry/view-tracker"

/**
 * Les trois terrains de l'audit — dans la forme de « La tournée » de
 * THE ROOM.
 *
 * Sur THE ROOM, chaque type de lieu reçoit une carte large : un surtitre,
 * un titre en dégradé, une phrase d'ambiance en italique, puis quatre
 * entrées courtes qui donnent la matière. C'est la section la plus forte
 * de cette page, parce qu'elle montre au lieu d'affirmer. La même forme
 * appliquée aux terrains fait la même chose : chacun se reconnaît dans sa
 * propre scène plutôt que dans une case.
 *
 * Trois terrains et non quatre : « entreprises » a été retiré — marques le
 * couvre déjà, et une case de plus ne faisait qu'ajouter une frontière que
 * personne n'a besoin de trancher pour acheter.
 *
 * L'Architecture n'apparaît pas ici : la home vend l'audit, et rien
 * d'autre.
 */

const T = {
  fr: {
    kicker: "Un métier, trois terrains",
    h2a: "Tout tient sur un récit.",
    h2b: "Personne ne l'a écrit.",
    lead: "Le même audit, le même prix, le même délai. Seul le questionnaire change, parce que votre terrain n'est pas celui du voisin.",
    priceLabel: "L'audit narratif",
    price: "490 €",
    priceMeta: "Livré en sept jours · Payé une fois",
    terrains: [
      {
        k: "Marques & entreprises",
        t: "Le rayon",
        line: "On vous demande un devis comparatif avant même de vous avoir écouté.",
        facts: [
          ["Le symptôme", "Votre meilleur argument, un concurrent pourrait le signer sans mentir"],
          ["La racine", "Le marché ne sait pas ce que vous refusez, donc il vous range par défaut"],
          ["Ce qu'on lit", "Site, discours commercial, ce que vos équipes racontent chacune de leur côté"],
          ["Ce qui change", "Une position que personne d'autre ne peut revendiquer sans mentir"],
        ],
        href: "/marques-entreprises",
      },
      {
        k: "Lieux",
        t: "La salle",
        line: "La salle est pleine, et pourtant chaque publication repart de zéro.",
        facts: [
          ["Le symptôme", "Personne dans l'équipe ne sait quoi filmer ni quoi écrire dessous"],
          ["La racine", "Le monde du lieu existe déjà — il n'a jamais été écrit"],
          ["Ce qu'on lit", "La salle, la carte, les avis, ce que les habitués répètent"],
          ["Ce qui change", "Un lieu qu'on reconnaît avant d'en avoir lu le nom"],
        ],
        href: "/the-room",
      },
      {
        k: "Artistes & fondateurs",
        t: "Le nom",
        line: "Vos sorties ne s'additionnent pas. Chacune repart à zéro.",
        facts: [
          ["Le symptôme", "On aime ce que vous faites sans savoir dire ce que vous êtes"],
          ["La racine", "Votre nom porte un travail que personne n'a encore formulé"],
          ["Ce qu'on lit", "Vos sorties, vos textes, ce que la presse retient de vous"],
          ["Ce qui change", "Un fil que le public reconnaît d'une sortie à l'autre"],
        ],
        href: "/artistes",
      },
    ],
    outro: "Tout ça existe déjà chez vous. Il faut juste l'écrire.",
    cta: "Commander l'audit →",
  },
  en: {
    kicker: "One craft, three grounds",
    h2a: "It all rests on a story.",
    h2b: "Nobody has written it.",
    lead: "The same audit, the same price, the same turnaround. Only the questionnaire changes, because your ground is not your neighbour's.",
    priceLabel: "The narrative audit",
    price: "490 €",
    priceMeta: "Delivered in seven days · Paid once",
    terrains: [
      {
        k: "Brands & companies",
        t: "The aisle",
        line: "You get asked for a comparative quote before anyone has listened to you.",
        facts: [
          ["The symptom", "Your best argument could be signed by a competitor without lying"],
          ["The root", "The market does not know what you refuse, so it files you by default"],
          ["What we read", "Site, sales pitch, and what each of your teams says on its own"],
          ["What changes", "A position nobody else can claim without lying"],
        ],
        href: "/marques-entreprises",
      },
      {
        k: "Venues",
        t: "The room",
        line: "The room is full, and yet every post starts from nothing.",
        facts: [
          ["The symptom", "Nobody on the team knows what to film, or what to write underneath"],
          ["The root", "The world of the venue already exists — it has never been written"],
          ["What we read", "The room, the menu, the reviews, what the regulars repeat"],
          ["What changes", "A venue people recognise before reading its name"],
        ],
        href: "/the-room",
      },
      {
        k: "Artists & founders",
        t: "The name",
        line: "Your releases do not add up. Each one starts from zero.",
        facts: [
          ["The symptom", "People like what you do without being able to say what you are"],
          ["The root", "Your name carries work nobody has put into words yet"],
          ["What we read", "Your releases, your writing, what the press keeps of you"],
          ["What changes", "A thread the audience recognises from one release to the next"],
        ],
        href: "/artistes",
      },
    ],
    outro: "All of it already exists. It just needs writing.",
    cta: "Order the audit →",
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

        {/* Le prix, une fois, au-dessus des trois : répété dans chaque carte
            il inviterait à comparer trois offres. */}
        <div className="mx-auto mb-12 max-w-[520px] border border-brand-hair bg-brand/[0.04] px-6 py-6 text-center">
          <div className="mb-2 font-sans text-[11px] uppercase tracking-[0.18em] text-brand">{t.priceLabel}</div>
          <div className="font-serif text-[clamp(2.2rem,5vw,3rem)] font-bold leading-none text-gradient">{t.price}</div>
          <div className="mt-3 font-sans text-[12.5px] text-chalk-55">{t.priceMeta}</div>
        </div>

        {/* Les trois cartes, dans la forme de « La tournée ». */}
        <div className="mx-auto grid max-w-[1000px] gap-5">
          {t.terrains.map((x, i) => (
            <Link key={x.k} href={x.href} className={`carte-room reveal d${Math.min(i + 1, 3)} block no-underline`}>
              <div className="mb-4 flex flex-wrap items-baseline gap-3">
                <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-chalk-40">{x.k}</span>
                <h3 className="m-0 font-serif text-[clamp(1.35rem,3vw,2.1rem)] font-bold leading-[1.1] text-gradient">
                  {x.t}
                </h3>
              </div>

              <p className="accroche m-0 mb-7">{x.line}</p>

              <div className="grid gap-5 sm:grid-cols-2">
                {x.facts.map(([label, detail]) => (
                  <div key={label}>
                    <div className="mb-1.5 font-sans text-[10px] uppercase tracking-[0.2em] text-brand">{label}</div>
                    <p className="m-0 font-sans text-[13.5px] leading-[1.6] text-chalk-55">{detail}</p>
                  </div>
                ))}
              </div>
            </Link>
          ))}
        </div>

        <p className="accroche mx-auto mt-12 max-w-[620px] text-center text-gradient">{t.outro}</p>

        <div className="mt-10 text-center">
          <Link href="/brand-narrative-audit" className="btn-primary">
            {t.cta}
          </Link>
        </div>
      </div>
    </section>
  )
}
