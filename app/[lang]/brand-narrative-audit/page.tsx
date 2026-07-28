import { LocaleLink as Link } from "@/components/locale-link"
import { NavBar } from "@/components/strawberry/navbar"
import { Footer } from "@/components/strawberry/footer"
import { FaqSection } from "@/components/strawberry/faq-section"
import { FAQ_AUDIT490 } from "@/lib/faqs"
import { pick } from "@/lib/t"
import { isLang, type Lang } from "@/lib/lang"
import { STRIPE_LINKS } from "@/lib/config"
import { AUDIT_DOC } from "@/lib/sample-verso"
import { BackHomeButton } from "@/components/strawberry/back-home-button"

const T = {
  fr: {
    badge: "BRAND NARRATIVE AUDIT · 490€",
    h1a: "Ce que votre marque",
    h1b: "raconte vraiment.",
    lead: "Un diagnostic écrit de votre récit actuel : ce qui porte, ce qui vous confond avec vos concurrents, et les mouvements précis à faire. Pas une refonte — une lecture.",
    cta: "Commander l'audit — 490€",
    ctaSecondary: "Voir un exemple de livrable",
    previewKicker: "Un exemplaire, publié en entier",
    previewH2: "Voici exactement ce que vous recevrez.",
    previewLead: "Voici trois extraits d'un audit complet, mené sur VERSO — une maison de reliure d'art inventée pour l'exercice, afin qu'aucun client n'ait à servir de vitrine. Les cinq blocs sont lisibles en entier, gratuitement.",
    previewHouse: "VERSO",
    previewHouseSub: "Reliure et édition d'art · Bordeaux · maison de démonstration",
    previewCta: "Lire les cinq blocs \u2192",
    previewLabels: ["Bloc 01 — La lecture du champ", "Bloc 02 — L'autopsie de votre phrase", "Bloc 05 — Le verdict"],
    // — What it is
    whatKicker: "Ce que vous recevez",
    whatH2: "Un document écrit, rien d'autre.",
    whatLead: "Vous remplissez un questionnaire de vingt minutes et vous envoyez vos liens. Sept jours plus tard, vous recevez un PDF de vingt à trente pages qui dit ce que votre marque raconte aujourd'hui, et ce qu'elle devrait raconter.",
    blocks: [
      { n: "01", t: "La lecture du champ", d: "Vos trois à cinq concurrents directs, leurs phrases, ce qu'ils promettent réellement. La carte de ce qui est déjà occupé — et le terrain qui ne l'est pas." },
      { n: "02", t: "L'autopsie de votre phrase", d: "Votre phrase de positionnement actuelle, disséquée mot par mot. Ce qu'elle emprunte au champ, ce qu'elle dilue, ce qui est mort à l'arrivée parce que tout le monde l'emploie déjà." },
      { n: "03", t: "Les mots à retirer", d: "La liste précise des termes que vous devez abandonner, extraits des phrases réelles de vos concurrents. Et ceux qui peuvent devenir les vôtres." },
      { n: "04", t: "Le cap", d: "Les trois à cinq mouvements de repositionnement que nous recommandons, par ordre de priorité, avec ce que chacun coûte et ce qu'il débloque." },
      { n: "05", t: "Le verdict", d: "Un paragraphe. Le diagnostic le plus net possible sur l'endroit où votre marque se tient aujourd'hui dans la perception de son marché." },
    ],
    // — Boundary
    limitKicker: "La limite, dite franchement",
    limitH2: "Ce que cet audit ne fait pas.",
    limitLead: "Un diagnostic n'est pas une architecture. Voici précisément où s'arrête celui-ci.",
    limits: [
      "Il ne réécrit pas votre récit de marque. Il vous dit ce qui ne va pas et vers où aller — pas la formulation finale.",
      "Il ne produit pas de plateforme narrative, ni de piliers de message, ni de système de langage complet.",
      "Il ne contient aucun copy prêt à l'emploi : pas de page d'accueil réécrite, pas d'angles de contenu, pas de plan de lancement.",
      "Il ne comprend ni extraction en profondeur, ni allers-retours, ni revue à trente jours.",
      "Il est produit à partir de ce que vous envoyez. La commande complète, elle, commencez par vous faire parler longuement.",
    ],
    limitClose: "Si vous voulez qu'on bâtisse l'architecture et pas seulement qu'on la diagnostique, c'est la commande à 4 500€.",
    limitCta: "Voir BRAND NARRATIVE ARCHITECTURE →",
    // — For whom
    forKicker: "Pour qui",
    forYes: "C'est pour vous si",
    forNo: "Ce n'est pas pour vous si",
    yes: [
      "Vous avez une marque qui tourne et vous sentez qu'elle ne se distingue pas assez",
      "Vous voulez savoir ce qui cloche avant d'engager un budget de refonte",
      "Vous avez un doute précis sur votre positionnement et vous voulez un avis extérieur documenté",
      "Vous préparez une levée, un lancement ou un repositionnement et vous voulez un état des lieux",
    ],
    no: [
      "Vous n'avez pas encore lancé — il n'y a rien à auditer",
      "Vous voulez qu'on écrive votre récit à votre place : c'est la commande complète",
      "Vous cherchez un logo, une charte ou du contenu",
      "Vous voulez un appel de conseil : cette offre est un document, sans appel",
    ],
    // — Price
    priceLabel: "Paiement unique",
    priceTitle: "490€. Un document, écrit pour votre maison.",
    priceBody: "Sans appel, sans devis, sans allers-retours. Vous payez, vous remplissez le questionnaire, vous recevez.",
    priceNote: "Si vous commandez l'architecture complète dans les 60 jours, les 490€ sont déduits.",
    // — Bridge
    bridgeH2: "Un exemple vaut mieux qu'une promesse.",
    bridgeP: "Nous avons publié un audit complet, page par page. Vous pouvez lire précisément ce que fait le document avant d'en commander un.",
    bridgeCta: "Lire l'exemple complet →",
  },
  en: {
    badge: "BRAND NARRATIVE AUDIT · 490€",
    h1a: "What your brand",
    h1b: "actually says.",
    lead: "A written diagnosis of your current narrative: what lands, what makes you indistinguishable from competitors, and the precise moves to make. Not a rebuild — a read.",
    cta: "Commission the audit — 490€",
    ctaSecondary: "See a sample deliverable",
    previewKicker: "One copy, published in full",
    previewH2: "This is exactly what you would receive.",
    previewLead: "Three excerpts from a complete audit, run on VERSO — an art bindery invented for the exercise, so that no client has to serve as a showcase. All five blocks are readable in full, free.",
    previewHouse: "VERSO",
    previewHouseSub: "Art binding and editions · Bordeaux · demonstration house",
    previewCta: "Read all five blocks \u2192",
    previewLabels: ["Block 01 — The field, read", "Block 02 — Your sentence, autopsied", "Block 05 — The verdict"],
    whatKicker: "What you receive",
    whatH2: "One written document, nothing else.",
    whatLead: "You fill in a twenty-minute questionnaire and send your links. Seven days later you receive a twenty to thirty page PDF stating what your brand says today, and what it should be saying.",
    blocks: [
      { n: "01", t: "The field, read", d: "Your three to five direct competitors, their sentences, what they actually promise. A map of what is already occupied — and the ground that isn't." },
      { n: "02", t: "Your sentence, autopsied", d: "Your current positioning sentence, dissected word by word. What it borrows from the field, where it dilutes, which words are dead on arrival because everyone already uses them." },
      { n: "03", t: "The words to retire", d: "The precise list of terms you must abandon, extracted from your competitors' real sentences. And the ones that could become yours." },
      { n: "04", t: "The heading", d: "The three to five repositioning moves we would recommend, in priority order, with what each one costs and what it unlocks." },
      { n: "05", t: "The verdict", d: "One paragraph. The sharpest possible diagnosis of where your brand currently stands in the perception of its market." },
    ],
    limitKicker: "The limit, stated plainly",
    limitH2: "What this audit does not do.",
    limitLead: "A diagnosis is not an architecture. Here is exactly where this one stops.",
    limits: [
      "It does not rewrite your brand narrative. It tells you what is wrong and where to go — not the final wording.",
      "It produces no narrative platform, no message pillars, no complete language system.",
      "It contains no ready-to-use copy: no rewritten homepage, no content angles, no launch plan.",
      "It includes no deep extraction, no revisions, no thirty-day walkthrough.",
      "It is produced from what you send. The full commission, by contrast, begins by making you talk at length.",
    ],
    limitClose: "If you want the architecture built and not merely diagnosed, that is the 4,500€ commission.",
    limitCta: "See BRAND NARRATIVE ARCHITECTURE →",
    forKicker: "Who it's for",
    forYes: "This is for you if",
    forNo: "This is not for you if",
    yes: [
      "You have a running brand and you sense it doesn't stand apart enough",
      "You want to know what's broken before committing a rebuild budget",
      "You have a specific doubt about your positioning and want a documented outside read",
      "You're preparing a raise, a launch or a repositioning and want a state of play",
    ],
    no: [
      "You haven't launched yet — there is nothing to audit",
      "You want the narrative written for you: that's the full commission",
      "You're looking for a logo, a visual identity or content",
      "You want a consulting call: this offer is a document, with no call",
    ],
    priceLabel: "One-time payment",
    priceTitle: "490€. One document, written for your house.",
    priceBody: "No call, no quote, no back and forth. You pay, you fill in the questionnaire, you receive.",
    priceNote: "If you commission the full architecture within 60 days, the 490€ is deducted.",
    bridgeH2: "An example beats a promise.",
    bridgeP: "We published a complete audit, page by page. You can read precisely what the document does before commissioning one.",
    bridgeCta: "Read the full example →",
  },
}

export default async function BrandNarrativeAuditPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang: raw } = await params
  const lang: Lang = isLang(raw) ? raw : "fr"
  const t = pick(T, lang)

  // Real excerpts, taken from the published VERSO document rather than rewritten
  // for the sales page — a preview that differs from the document is a promise
  // the document then breaks.
  const doc = AUDIT_DOC[lang] ?? AUDIT_DOC.fr
  const excerpts = [
    doc.parts[0].blocks.find((b) => b.kind === "quote"),
    doc.parts[1].blocks.find((b) => b.kind === "quote"),
    doc.parts[4].blocks.find((b) => b.kind === "p"),
  ] as ({ kind: string; text: string } | undefined)[]

  return (
    <main className="min-h-screen overflow-hidden bg-ink font-sans text-white">
      <NavBar />
      <BackHomeButton />

      {/* HERO */}
      <section className="section-hero pb-24 pt-40">
        <div className="glow-top" aria-hidden />
        <div className="shell-md relative">
          <div className="pill mb-9">{t.badge}</div>

          <h1 className="h-display mb-7">
            {t.h1a}
            <br />
            <span className="text-gradient">{t.h1b}</span>
          </h1>

          <p className="lede mx-auto mb-10 max-w-[640px]">{t.lead}</p>

          <div className="flex flex-wrap justify-center gap-3.5">
            <a href={STRIPE_LINKS.audit490} className="btn-primary" rel="noopener">{t.cta}</a>
            <Link href="/exemple-audit" className="btn-ghost">{t.ctaSecondary}</Link>
          </div>
        </div>
      </section>

      {/* THE PUBLISHED SAMPLE — real excerpts, placed high on purpose.
          A prospect deciding on 490€ should see the artefact before the argument. */}
      <section className="section">
        <div className="relative mx-auto max-w-[900px] border border-brand-hair bg-[linear-gradient(180deg,rgba(230,57,70,0.06)_0%,rgba(10,10,10,0.6)_100%)] p-8 md:p-12">
          <span className="bracket-tl" aria-hidden />
          <span className="bracket-br" aria-hidden />

          <div className="tag mb-6 border-brand text-brand">{t.previewKicker}</div>

          <h2 className="mb-4 font-serif text-[clamp(1.5rem,3.2vw,2.25rem)] font-bold leading-tight tracking-[-0.02em]">
            {t.previewH2}
          </h2>
          <p className="mb-9 max-w-[640px] font-sans text-[15.5px] leading-relaxed text-chalk-65">
            {t.previewLead}
          </p>

          {/* document header, echoing the real one */}
          <div className="mb-7 flex flex-wrap items-baseline justify-between gap-3 border-b border-white/10 pb-5">
            <span className="font-serif text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-none tracking-[-0.03em] text-gradient">
              {t.previewHouse}
            </span>
            <span className="font-sans text-[12px] uppercase tracking-[0.15em] text-chalk-40">
              {t.previewHouseSub}
            </span>
          </div>

          <div className="flex flex-col gap-6">
            {excerpts.map((ex, i) =>
              ex ? (
                <div key={i}>
                  <div className="mb-2.5 font-sans text-[10px] uppercase tracking-[0.2em] text-brand">
                    {t.previewLabels[i]}
                  </div>
                  <p className="m-0 border-l-2 border-white/12 pl-5 font-serif text-[clamp(0.98rem,1.5vw,1.12rem)] italic leading-[1.65] text-chalk-90">
                    {ex.text}
                  </p>
                </div>
              ) : null
            )}
          </div>

          {/* fade-out, so the excerpt reads as a fragment of something longer */}
          <div className="relative mt-7 h-16">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(10,10,10,0.9))]" aria-hidden />
          </div>

          <Link href="/exemple-audit" className="btn-primary">
            {t.previewCta}
          </Link>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="section">
        <div className="shell-md">
          <div className="mb-12 text-center">
            <div className="kicker mb-5">{t.whatKicker}</div>
            <h2 className="h-section mb-6">{t.whatH2}</h2>
            <p className="lede mx-auto max-w-[620px]">{t.whatLead}</p>
          </div>

          <div className="flex flex-col gap-px border border-white/[0.07] bg-white/[0.07]">
            {t.blocks.map((b) => (
              <div key={b.n} className="flex items-start gap-6 bg-ink px-7 py-7">
                <div className="min-w-[44px] font-serif text-3xl font-bold leading-none text-brand">{b.n}</div>
                <div>
                  <h3 className="mb-1.5 font-serif text-[1.3rem] font-bold">{b.t}</h3>
                  <p className="font-sans text-sm leading-relaxed text-white/60">{b.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE LIMIT — stated before the price, on purpose */}
      <section className="section">
        <div className="mx-auto max-w-[820px] border border-hair-strong bg-white/[0.02] p-8 md:p-12">
          <div className="kicker mb-5">{t.limitKicker}</div>
          <h2 className="mb-4 font-serif text-[clamp(1.5rem,3vw,2.15rem)] font-bold tracking-[-0.02em]">
            {t.limitH2}
          </h2>
          <p className="mb-8 font-sans text-[15.5px] leading-relaxed text-chalk-65">{t.limitLead}</p>

          <ul className="m-0 mb-8 flex list-none flex-col gap-4 p-0">
            {t.limits.map((l) => (
              <li key={l} className="flex items-start gap-3.5 font-sans text-[15px] leading-relaxed text-chalk-75">
                <span aria-hidden className="mt-0.5 shrink-0 text-brand">✕</span>
                {l}
              </li>
            ))}
          </ul>

          <div className="border-t border-white/10 pt-6">
            <p className="mb-3 font-serif text-[1.1rem] italic text-chalk-75">{t.limitClose}</p>
            <Link href="/brand-narrative-architecture" className="btn-quiet">{t.limitCta}</Link>
          </div>
        </div>
      </section>

      {/* FIT */}
      <section className="section">
        <div className="shell-lg">
          <div className="mb-12 text-center">
            <div className="kicker">{t.forKicker}</div>
          </div>

          <div className="grid-auto-wide">
            <div className="card px-8 py-9">
              <h3 className="mb-6 font-serif text-[1.35rem] font-bold text-brand">{t.forYes}</h3>
              <ul className="m-0 flex list-none flex-col gap-3.5 p-0">
                {t.yes.map((y) => (
                  <li key={y} className="flex items-start gap-3 font-sans text-[14.5px] leading-relaxed text-chalk-75">
                    <span aria-hidden className="mt-0.5 shrink-0 text-brand">✦</span>
                    {y}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card px-8 py-9">
              <h3 className="mb-6 font-serif text-[1.35rem] font-bold text-chalk-55">{t.forNo}</h3>
              <ul className="m-0 flex list-none flex-col gap-3.5 p-0">
                {t.no.map((n) => (
                  <li key={n} className="flex items-start gap-3 font-sans text-[14.5px] leading-relaxed text-chalk-55">
                    <span aria-hidden className="mt-0.5 shrink-0 text-white/25">✕</span>
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PRICE */}
      <section className="section text-center">
        <div className="card-featured mx-auto max-w-[620px] p-10 md:p-14">
          <span className="bracket-tl" aria-hidden />
          <span className="bracket-br" aria-hidden />

          <span className="tag border-brand text-brand">{t.priceLabel}</span>

          <div className="mb-1.5 mt-6 font-serif text-[3.5rem] font-bold">490€</div>
          <h3 className="mb-3 font-serif text-[1.4rem] font-bold">{t.priceTitle}</h3>
          <p className="mx-auto mb-8 max-w-[420px] font-sans text-[15px] leading-relaxed text-chalk-65">
            {t.priceBody}
          </p>

          <a href={STRIPE_LINKS.audit490} className="btn-primary px-9" rel="noopener">{t.cta}</a>

          <p className="mt-6 font-sans text-[13px] text-chalk-40">{t.priceNote}</p>
        </div>
      </section>

      {/* SAMPLE BRIDGE */}
      <section className="section pb-28 text-center">
        <div className="mx-auto max-w-[720px]">
          <h2 className="mb-5 font-serif text-[clamp(1.4rem,2.5vw,2rem)] font-bold tracking-[-0.02em]">
            {t.bridgeH2}
          </h2>
          <p className="lede mx-auto mb-7 max-w-[620px]">{t.bridgeP}</p>
          <Link href="/exemple-audit" className="btn-primary">{t.bridgeCta}</Link>
        </div>
      </section>

      <FaqSection faqs={FAQ_AUDIT490} />

      <Footer />
    </main>
  )
}
