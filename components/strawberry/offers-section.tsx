import { LocaleLink as Link } from "@/components/locale-link"
import { pick } from "@/lib/t"
import type { Lang } from "@/lib/lang"
import { LIVE } from "@/lib/config"
import { OfferCover } from "@/components/strawberry/offer-covers"

/**
 * L'offre. Une seule.
 *
 * La page d'accueil ne vend plus que BRAND NARRATIVE ARCHITECTURE. L'audit à
 * 490€ et le reste de l'échelle vivent sur /offres, pour qui vient comparer.
 *
 * Les quatorze pièces portent chacune une ligne de bénéfice en tête et la
 * caractéristique en dessous : quatorze caractéristiques se lisent comme une
 * facture, quatorze bénéfices se lisent comme une transformation.
 *
 * Trois choses qui étaient enterrées dans la FAQ remontent ici, collées au
 * prix, parce que c'est là qu'un acheteur décide : la garantie, la fenêtre de
 * remboursement, et la justification du montant.
 *
 * Le prix n'ouvre plus la section : c'est une conséquence de la perception,
 * pas l'argument. Ce qu'on vend, c'est une marque qu'on reconnaît et à
 * laquelle on reste — le prix cesse d'être la question qu'on se pose.
 */

const T = {
  en: {
    kicker: "The commission",
    h2a: "What you become:",
    h2b: "a brand people follow, not compare.",
    intro:
      "Three weeks. One house at a time. Not a style guide — the story that makes people see you differently and stay.",
    coverFoot: "Fourteen parts",
    h3: "The brand story no competitor can copy — and no machine can write.",
    body:
      "It begins with an extraction no AI automates: your truth, your singularity, what you no longer see because you are inside it.",
    deliverablesKicker: "What changes, part by part",
    deliverables: [
      "You are never compared to the competitor next door again.",
      "You know what to answer when someone asks what you do.",
      "Your words stop being everyone else's.",
      "You know what to do the Monday after.",
      "You settle questions alone, without calling us back.",
      "You raise your prices with a reason you can give.",
      "You are introduced correctly when you're not in the room.",
      "You know exactly where each rival is weak.",
      "You have something to publish that resembles nobody.",
      "People understand why you exist, in one paragraph.",
      "You hold the same story in front of any investor.",
      "Your designer stops guessing.",
      "You see the empty ground nobody occupies.",
      "You speak each segment's language without changing position.",
    ],
    specs: [
      { k: "Lead time", v: "3 to 4 weeks" },
      { k: "Format", v: "One editorial document" },
      { k: "Scarcity", v: "4 commissions per quarter" },
    ],
    scarcityLabel: "Availability",
    scarcityLine: (p: string, r: number) => `${p}: ${r} place${r > 1 ? "s" : ""} left.`,
    scarcityNext: (d: string) => `Next opening ${d}.`,
    scarcityCloses: (d: string) => `Applications close ${d}.`,
    investKicker: "The investment",
    price: "4,500€",
    priceCadence: "one commission, paid once",
    justify:
      "It is the price of a few weeks of advertising that evaporates the day you stop paying. Your story belongs to you and works for you indefinitely.",
    roiTitle: "The return frame",
    roi: "One deal signed at full price, or one rate increase you actually hold, and the document has paid for itself.",
    clock: "Already commissioned the audit? Its 490€ comes off this price — the clock runs sixty days.",
    guaranteeTitle: "The V2 guarantee",
    guaranteeBody:
      "If the delivered document does not hit the mark, we write a second version. No discussion, no extra invoice.",
    refundTitle: "The window before production",
    refundBody:
      "Within seven days of payment, and as long as the extraction interview has not taken place, you can cancel and be refunded in full, within fifteen days.",
    cta1: "Commission the Work →",
    cta2: "See the other offers",
    limit: "Four commissions per quarter. Not a sales tactic — the structural limit of full attention.",
    ladderCta: "See the other ways to work with the studio",
  },
  fr: {
    kicker: "La commande signature",
    h2a: "Ce que vous devenez :",
    h2b: "une marque qu'on suit, pas qu'on compare.",
    intro:
      "Trois semaines. Une maison à la fois. Pas une charte — le récit qui fait qu'on vous voit différemment, et qu'on reste.",
    coverFoot: "Quatorze pièces",
    h3: "Le récit de marque qu'aucun concurrent ne peut copier — et qu'aucune machine ne peut écrire.",
    body:
      "Tout commence par une extraction qu'aucune IA n'automatise : votre vérité, votre singularité, ce que vous ne voyez plus parce que vous êtes dedans.",
    deliverablesKicker: "Ce qui change, pièce par pièce",
    deliverables: [
      "Vous n'êtes plus jamais comparé au concurrent d'à côté.",
      "Vous savez quoi répondre quand on demande ce que vous faites.",
      "Vos mots cessent d'être ceux de tout le monde.",
      "Vous savez quoi faire dès le lundi qui suit.",
      "Vous tranchez seul, sans avoir à nous rappeler.",
      "Vous augmentez vos prix avec une raison à donner.",
      "On vous présente correctement en votre absence.",
      "Vous savez exactement où chaque rival est faible.",
      "Vous avez quelque chose à publier qui ne ressemble à personne.",
      "On comprend pourquoi vous existez, en un paragraphe.",
      "Vous tenez le même récit devant n'importe quel investisseur.",
      "Votre designer arrête de deviner.",
      "Vous voyez le terrain vide que personne n'occupe.",
      "Vous parlez la langue de chaque segment sans changer de position.",
    ],
    specs: [
      { k: "Délai", v: "3 à 4 semaines" },
      { k: "Format", v: "Un document éditorial" },
      { k: "Rareté", v: "4 commandes par trimestre" },
    ],
    scarcityLabel: "Disponibilité",
    scarcityLine: (p: string, r: number) => `${p} : ${r} place${r > 1 ? "s" : ""} restante${r > 1 ? "s" : ""}.`,
    scarcityNext: (d: string) => `Prochaine ouverture le ${d}.`,
    scarcityCloses: (d: string) => `Clôture des candidatures le ${d}.`,
    investKicker: "L'investissement",
    price: "4 500€",
    priceCadence: "une commande, payée une fois",
    justify:
      "C'est le prix de quelques semaines de publicité qui s'évapore dès que vous arrêtez de payer. Votre récit vous appartient et travaille pour vous indéfiniment.",
    roiTitle: "Le cadre de retour",
    roi: "Un seul contrat signé au prix plein, ou une augmentation de tarif que vous tenez, et le document est remboursé.",
    clock: "Vous avez déjà commandé l'audit ? Ses 490€ sont déduits de ce prix — l'horloge court soixante jours.",
    guaranteeTitle: "La garantie V2",
    guaranteeBody:
      "Si le document livré ne tape pas juste, nous écrivons une seconde version. Sans discuter, sans facture supplémentaire.",
    refundTitle: "La fenêtre avant production",
    refundBody:
      "Dans les sept jours suivant le paiement, et tant que l'entretien d'extraction n'a pas eu lieu, vous pouvez annuler et être remboursé intégralement, sous quinze jours.",
    cta1: "Commander le travail →",
    cta2: "Voir les autres offres",
    limit: "Quatre commandes par trimestre. Ce n'est pas une tactique de vente — c'est la limite structurelle d'une attention pleine.",
    ladderCta: "Voir les autres façons de travailler avec le studio",
  },
}

export function OffersSection({ lang }: { lang: Lang }) {
  const t = pick(T, lang)
  const sc = LIVE.scarcity

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

        <div className="card-featured mx-auto max-w-[980px] p-7 md:p-12">
          <span className="bracket-tl" aria-hidden />
          <span className="bracket-br" aria-hidden />

          <div className="relative grid gap-10 md:grid-cols-[190px_minmax(0,1fr)] md:gap-12">
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
              <div className="pill mb-7">BRAND NARRATIVE ARCHITECTURE</div>

              <h3 className="mb-6 font-serif text-[clamp(1.6rem,3.2vw,2.5rem)] font-bold leading-[1.15] tracking-[-0.02em]">
                {t.h3}
              </h3>

              <p className="mb-8 max-w-[620px] font-sans text-base leading-relaxed text-chalk-65">{t.body}</p>

              <div className="grid gap-px bg-white/10 sm:grid-cols-3">
                {t.specs.map((sp) => (
                  <div key={sp.k} className="bg-ink px-4 py-3.5">
                    <div className="mb-1.5 font-sans text-[11px] uppercase tracking-[0.16em] text-chalk-40">
                      {sp.k}
                    </div>
                    <div className="font-serif text-[15px] text-white">{sp.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* LES QUATORZE PIÈCES — une ligne par bénéfice, sur deux colonnes. */}
          <div className="relative mt-14">
            <div className="mb-7 font-sans text-[11px] uppercase tracking-[0.2em] text-brand">
              {t.deliverablesKicker}
            </div>
            <ol className="grid list-none gap-x-8 border-t border-hair p-0 sm:grid-cols-2">
              {t.deliverables.map((benefit, i) => (
                <li key={benefit} className="flex items-baseline gap-3 border-b border-white/[0.06] py-3">
                  <span className="font-serif text-[12px] text-brand">{String(i + 1).padStart(2, "0")}</span>
                  <p className="m-0 font-sans text-[14.5px] leading-snug text-white/85">{benefit}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* L'INVESTISSEMENT — prix, justification, retour, garanties, rareté. */}
          <div className="relative mt-14 border-t border-hair-strong pt-10">
            <div className="mb-6 font-sans text-[11px] uppercase tracking-[0.2em] text-brand">{t.investKicker}</div>

            <div className="flex flex-wrap items-baseline gap-4">
              <span className="font-serif text-[clamp(2.6rem,6vw,4rem)] font-bold leading-none text-white">
                {t.price}
              </span>
              <span className="font-sans text-[14px] text-chalk-40">{t.priceCadence}</span>
            </div>

            <p className="mt-6 max-w-[620px] font-sans text-[15.5px] leading-[1.8] text-chalk-65">{t.justify}</p>

            <div className="mt-8 border border-brand-hair bg-brand/[0.04] px-6 py-5">
              <div className="mb-2 font-sans text-[11px] uppercase tracking-[0.18em] text-brand">{t.roiTitle}</div>
              <p className="m-0 font-serif text-[clamp(1.05rem,2vw,1.3rem)] leading-snug text-white">{t.roi}</p>
            </div>

            <div className="mt-6 grid gap-px bg-white/10 sm:grid-cols-2">
              <div className="bg-ink px-6 py-5">
                <div className="mb-2 font-sans text-[11px] uppercase tracking-[0.18em] text-brand">
                  {t.guaranteeTitle}
                </div>
                <p className="m-0 font-sans text-[14.5px] leading-relaxed text-chalk-75">{t.guaranteeBody}</p>
              </div>
              <div className="bg-ink px-6 py-5">
                <div className="mb-2 font-sans text-[11px] uppercase tracking-[0.18em] text-brand">
                  {t.refundTitle}
                </div>
                <p className="m-0 font-sans text-[14.5px] leading-relaxed text-chalk-75">{t.refundBody}</p>
              </div>
            </div>

            <p className="mt-6 font-sans text-[13.5px] text-chalk-40">{t.clock}</p>

            {/* Rareté vérifiable : une constante tenue à la main dans config.ts. */}
            <div className="mt-8 flex flex-wrap items-center gap-3 border border-hair px-5 py-4">
              <span aria-hidden className="h-[7px] w-[7px] shrink-0 rounded-full bg-brand shadow-[0_0_8px_#e63946]" />
              <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-chalk-40">
                {t.scarcityLabel}
              </span>
              <span className="font-serif text-[15px] text-white">
                {t.scarcityLine(sc.period, sc.remaining)}
              </span>
              <span className="font-sans text-[13.5px] text-chalk-55">{t.scarcityNext(sc.nextOpening[lang])}</span>
              {sc.closesOn[lang] && (
                <span className="font-sans text-[13.5px] text-brand">{t.scarcityCloses(sc.closesOn[lang])}</span>
              )}
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              {/* Le paiement ne s'ouvre plus depuis la page d'accueil.
                  Envoyer une carte bancaire à quelqu'un qui n'a pas lu la page
                  de vente, c'est parler de l'étape cinq pendant l'étape une. */}
              <Link href="/brand-narrative-architecture" className="btn-primary">
                {t.cta1}
              </Link>
              <Link href="/offres" className="btn-quiet">
                {t.cta2}
              </Link>
            </div>

            <p className="mt-6 font-sans text-[13px] text-chalk-40">{t.limit}</p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link href="/offres" className="btn-quiet">
            {t.ladderCta}
          </Link>
        </div>
      </div>
    </section>
  )
}
