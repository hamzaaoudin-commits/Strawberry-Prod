import { pick } from "@/lib/t"
import type { Lang } from "@/lib/lang"
import { STRIPE_LINKS, SCARCITY, BOUND_EDITION } from "@/lib/config"
import { OfferCover } from "@/components/strawberry/offer-covers"

/**
 * La commande signature — et rien d'autre.
 *
 * Composant serveur : cette section n'a aucune interaction, donc rien n'a à être
 * hydraté côté navigateur.
 *
 * Trois changements de fond par rapport à la version précédente :
 *
 * 1. L'audit à 490€ n'est plus ici. La page d'accueil vend une seule chose ;
 *    deux prix côte à côte obligent le lecteur à arbitrer au lieu de décider.
 *    Les autres façons d'entrer vivent sur /offres.
 * 2. Chaque livrable est précédé de ce qu'il change pour le lecteur. La
 *    caractéristique passe en dessous, en petit : elle rationalise l'achat, elle
 *    ne le déclenche pas.
 * 3. Le bloc d'investissement rassemble ce qui était éparpillé — le prix, sa
 *    justification, la garantie, la rareté datée et l'édition reliée. C'est le
 *    seul endroit de la page où le lecteur décide ; tout doit y être.
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
    deliverablesLabel: "What changes, piece by piece",
    deliverables: [
      {
        gain: "You will never be compared to the competitor next door again.",
        spec: "Differentiation diagnostic — five competitors dissected, the words they all share, and the empty ground you take.",
      },
      {
        gain: "You will be able to say in one sentence what no one else can say.",
        spec: "Narrative platform — your defensible position, your origin story, your three to four message pillars.",
      },
      {
        gain: "People will recognise your writing without your logo on it.",
        spec: "Language system — your lexicon, the forbidden list drawn from your rivals' own copy, before/after examples.",
      },
      {
        gain: "You will publish on Monday without rewriting anything.",
        spec: "Deployment kit — homepage rewritten, your introduction in three formats, ten to fifteen speaking angles, a reusable bio.",
      },
      {
        gain: "Your team will write in your voice, without you.",
        spec: "Coherence guide — rules, examples, do and don't.",
      },
    ],
    specs: [
      { k: "Lead time", v: "3 to 4 weeks" },
      { k: "Format", v: "One editorial document" },
      { k: "Pieces", v: "Fourteen, none optional" },
    ],
    coverFoot: "Fourteen parts",
    cta1: "Commission the Work →",
    investKicker: "The investment",
    price: "4,500€",
    priceNote: "One-time. Yours for good.",
    justify:
      "It is the price of a few weeks of advertising that vanishes the moment you stop paying. Your narrative, by contrast, belongs to you and works for you indefinitely.",
    returnFrame:
      "One deal signed at full price, or one rate increase held, and the document has paid for itself.",
    guaranteeLabel: "The V2 guarantee",
    guarantee:
      "If the deliverable doesn't hit the mark, we write a second version. No discussion, no extra charge. And as long as production hasn't started, the refund is full.",
    scarcityLabel: "Availability",
    scarcityOpen: (q: string, n: number) => `${q}: ${n} ${n > 1 ? "slots" : "slot"} left of four.`,
    scarcityFull: (q: string) => `${q}: full.`,
    scarcityNext: (d: string) => `Next opening ${d}.`,
    boundLabel: "The bound edition",
    bound:
      "Printed, hand-bound, signed, numbered for your house alone. Delivered to your office or your home. The PDF is for working; this one is for keeping.",
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
    deliverablesLabel: "Ce que ça change, pièce par pièce",
    deliverables: [
      {
        gain: "Vous ne serez plus jamais comparé au concurrent d'à côté.",
        spec: "Diagnostic de différenciation — cinq concurrents disséqués, leurs mots communs, et le terrain vide que vous prenez.",
      },
      {
        gain: "Vous saurez dire en une phrase ce que personne d'autre ne peut dire.",
        spec: "Plateforme narrative — votre position défendable, votre récit d'origine, vos trois à quatre piliers de message.",
      },
      {
        gain: "On reconnaîtra vos textes sans votre logo dessus.",
        spec: "Système de langage — votre lexique, la liste interdite tirée du copy réel de vos concurrents, des exemples avant/après.",
      },
      {
        gain: "Vous publierez dès lundi sans rien réécrire.",
        spec: "Kit de déploiement — page d'accueil réécrite, votre présentation en trois formats, dix à quinze angles de prise de parole, une bio réutilisable.",
      },
      {
        gain: "Votre équipe écrira comme vous, sans vous.",
        spec: "Guide de cohérence — règles, exemples, à faire et à ne pas faire.",
      },
    ],
    specs: [
      { k: "Délai", v: "3 à 4 semaines" },
      { k: "Format", v: "Un document éditorial" },
      { k: "Pièces", v: "Quatorze, aucune en option" },
    ],
    coverFoot: "Quatorze pièces",
    cta1: "Commander le travail →",
    investKicker: "L'investissement",
    price: "4 500 €",
    priceNote: "Une fois. À vous, définitivement.",
    justify:
      "C'est le prix de quelques semaines de publicité qui s'évapore dès que vous arrêtez de payer. Votre récit, lui, vous appartient et travaille pour vous indéfiniment.",
    returnFrame:
      "Un seul dossier signé au prix plein, ou une hausse de tarif tenue, et le document est amorti.",
    guaranteeLabel: "La garantie V2",
    guarantee:
      "Si le livrable ne tape pas juste, nous en écrivons une seconde version. Sans discuter, sans supplément. Et tant que la production n'a pas commencé, le remboursement est intégral.",
    scarcityLabel: "Disponibilité",
    scarcityOpen: (q: string, n: number) => `${q} : ${n} place${n > 1 ? "s" : ""} restante${n > 1 ? "s" : ""} sur quatre.`,
    scarcityFull: (q: string) => `${q} : complet.`,
    scarcityNext: (d: string) => `Prochaine ouverture le ${d}.`,
    boundLabel: "L'édition reliée",
    bound:
      "Imprimée, reliée main, signée, numérotée pour votre maison seule. Livrée à votre bureau ou chez vous. Le PDF sert à travailler ; celle-ci se garde.",
  },
}

export function OffersSection({ lang }: { lang: Lang }) {
  const t = pick(T, lang)
  const quarter = SCARCITY.quarter[lang] ?? SCARCITY.quarter.fr
  const nextOpening = SCARCITY.nextOpening[lang] ?? SCARCITY.nextOpening.fr
  const boundPrice = BOUND_EDITION.price[lang] ?? BOUND_EDITION.price.fr
  const remaining = SCARCITY.remaining

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
              <div className="pill mb-7">BRAND NARRATIVE ARCHITECTURE · {t.price}</div>

              <h3 className="mb-6 font-serif text-[clamp(1.6rem,3.2vw,2.5rem)] font-bold leading-[1.15] tracking-[-0.02em]">
                {t.h3}
              </h3>

              <p className="mb-9 max-w-[620px] font-sans text-base leading-relaxed text-chalk-65">{t.body}</p>

              {/* Le bénéfice d'abord, en gras. La caractéristique en dessous, en
                  petit : elle sert à rationaliser, pas à convaincre. */}
              <div className="mb-4 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-brand">
                {t.deliverablesLabel}
              </div>
              <ol className="mb-9 list-none border-t border-hair p-0">
                {t.deliverables.map((d, i) => (
                  <li key={d.gain} className="flex items-baseline gap-4 border-b border-white/[0.06] py-4">
                    <span className="shrink-0 font-serif text-[13px] text-brand">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="m-0 font-sans text-[16px] font-semibold leading-snug text-white">{d.gain}</p>
                      <p className="mt-1.5 mb-0 font-sans text-[13.5px] leading-relaxed text-chalk-55">{d.spec}</p>
                    </div>
                  </li>
                ))}
              </ol>

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

          {/* L'INVESTISSEMENT — prix, justification, retour, garantie, rareté,
              édition reliée, et le seul geste de la page. Tout ce dont la
              décision a besoin, au même endroit. */}
          <div className="relative mt-10 border-t border-brand-hair pt-10">
            <div className="kicker mb-6">{t.investKicker}</div>

            <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_320px] md:gap-14">
              <div>
                <div className="mb-2 flex items-baseline gap-3">
                  <span className="font-serif text-[clamp(2.4rem,6vw,3.4rem)] font-bold leading-none text-brand">
                    {t.price}
                  </span>
                  <span className="font-sans text-[13px] text-chalk-55">{t.priceNote}</span>
                </div>

                <p className="mb-4 max-w-[560px] font-sans text-[15.5px] leading-[1.75] text-chalk-75">{t.justify}</p>

                <p className="mb-8 max-w-[560px] font-serif text-[clamp(1.05rem,1.9vw,1.3rem)] italic leading-snug text-white">
                  {t.returnFrame}
                </p>

                <a href={STRIPE_LINKS.architecture} className="btn-primary" rel="noopener">
                  {t.cta1}
                </a>

                {/* La rareté, datée et décomptée depuis lib/config.ts. */}
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <span className="font-sans text-[11px] uppercase tracking-[0.16em] text-chalk-40">
                    {t.scarcityLabel}
                  </span>
                  <span
                    aria-hidden
                    className={`h-[7px] w-[7px] rounded-full ${remaining > 0 ? "bg-brand shadow-[0_0_8px_#e63946]" : "bg-white/25"}`}
                  />
                  <span className="font-sans text-[14px] font-semibold text-white">
                    {remaining > 0 ? t.scarcityOpen(quarter, remaining) : t.scarcityFull(quarter)}
                  </span>
                  <span className="font-sans text-[14px] text-chalk-55">{t.scarcityNext(nextOpening)}</span>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                {/* La garantie, collée au prix. Elle était en septième question
                    d'une FAQ — c'est-à-dire invisible au moment où la peur
                    apparaît. */}
                <div className="border border-brand bg-brand/[0.08] px-6 py-5">
                  <div className="mb-2.5 flex items-center gap-2">
                    <span aria-hidden className="text-brand">
                      &#10003;
                    </span>
                    <span className="font-serif text-[1.05rem] font-bold text-white">{t.guaranteeLabel}</span>
                  </div>
                  <p className="m-0 font-sans text-[13.5px] leading-relaxed text-chalk-75">{t.guarantee}</p>
                </div>

                {/* L'édition reliée cesse d'être offerte sur demande. */}
                <div className="border border-hair-strong bg-white/[0.02] px-6 py-5">
                  <div className="mb-2.5 flex items-baseline justify-between gap-3">
                    <span className="font-serif text-[1.05rem] font-bold text-white">{t.boundLabel}</span>
                    <span className="font-serif text-[15px] font-bold text-brand">{boundPrice}</span>
                  </div>
                  <p className="m-0 font-sans text-[13.5px] leading-relaxed text-chalk-55">{t.bound}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
