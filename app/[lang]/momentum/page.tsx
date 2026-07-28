import { LocaleLink as Link } from "@/components/locale-link"
import { NavBar } from "@/components/strawberry/navbar"
import { Footer } from "@/components/strawberry/footer"
import { pick } from "@/lib/t"
import { isLang, type Lang } from "@/lib/lang"
import { FaqSection } from "@/components/strawberry/faq-section"
import { BokehField } from "@/components/strawberry/bokeh-field"
import { RackFocus } from "@/components/strawberry/rack-focus"
import { SpotlightCard } from "@/components/strawberry/spotlight-card"
import { FAQ_MOMENTUM } from "@/lib/faqs"
import { BackHomeButton } from "@/components/strawberry/back-home-button"
import { STRIPE_LINKS } from "@/lib/config"


const T = {
  en: {
    badge: "After the architecture · monthly",
    h1a: "The architecture is written.",
    h1b: "MOMENTUM keeps it written.",
    lead: "BRAND NARRATIVE ARCHITECTURE gives you the position. MOMENTUM is the studio that keeps writing from it, month after month: the scripts, the narratives, the website, and the calendars that decide what gets said and when. Written work and web only — we do not produce your content.",
    cta: "Start MOMENTUM",
    seeTiers: "See the rate",

    scopeKicker: "What is included",
    scopeTitle: "Written work and the website. Nothing else.",
    scopeLead: "This deliberately excludes photo, video, sound and social publishing. A studio that writes positions should not be judged on its editing. What we hold is the word and the surface that carries it.",
    scope: [
      { t: "Scripts", b: "What you say on camera, on stage, on a call, in a demo. Written to be spoken, not to be read — with the objections anticipated where they actually arrive." },
      { t: "Narratives", b: "Long-form pieces, manifestos, founder essays, launch and pricing narratives. Each one written against the architecture, so nothing drifts from the position you paid for." },
      { t: "The website", b: "Pages written, structured and put online. Hosted by us. Improved week by week or month by month, so the site never lags behind what you actually sell today." },
      { t: "Writing and publishing calendars", b: "What gets written, in what order, and on which surface it appears — with the dates. The plan is a document, not a conversation." },
    ],
    scopeOutTitle: "What is not included",
    scopeOut: [
      "No photo, video or sound production.",
      "No community management or publishing on your behalf.",
      "No paid media buying or advertising campaigns.",
      "No logo, brand guidelines or visual identity design.",
    ],

    siteKicker: "The website",
    siteTitle: "Hosted, and never out of date.",
    siteBody: "The site is not a delivery you receive once and watch age. We host it, and we keep editing it — a new offer, a raised price, a repositioned page, a new narrative to publish. Week by week or month by month, depending on how fast you move. You send what has changed; the site follows.",
    sitePoints: [
      "Hosting and maintenance included, no separate invoice.",
      "Editorial changes made by us, not by a ticket queue.",
      "Every page checked against the architecture before it goes live.",
    ],

    diffTitle: "How is this different from BRAND NARRATIVE ARCHITECTURE?",
    diffBody: "BRAND NARRATIVE ARCHITECTURE decides. It is written once, it fixes the position, the identity and the language, and it is yours forever. MOMENTUM applies. Every month it turns that position into new written material and keeps the website aligned with it. One is the constitution; the other is what gets written under it. You never pay twice for the same work — and if you never want a single new page written, you never need MOMENTUM at all.",

    tiersKicker: "The rate",
    tiers: [
      { name: "MOMENTUM", price: "2,500€", cadence: "/ month", line: "Scripts, narratives, website and calendars, written by the studio from the architecture it wrote. One rate, no tiers, no scope to negotiate.", featured: true },
    ],
    tierCta: "Start MOMENTUM",
    bridge: "No architecture yet? MOMENTUM comes after. Start with BRAND NARRATIVE ARCHITECTURE.",
    bridgeCta: "See BRAND NARRATIVE ARCHITECTURE →",
  },
  fr: {
    badge: "Après l'architecture · au mois",
    h1a: "L'architecture est écrite.",
    h1b: "MOMENTUM la maintient écrite.",
    lead: "BRAND NARRATIVE ARCHITECTURE vous donne la position. MOMENTUM est le studio qui continue d'écrire à partir d'elle, mois après mois : les scripts, les récits, le site web, et les plannings qui décident de ce qui se dit et quand. De l'écrit et du web uniquement — nous ne produisons pas votre contenu.",
    cta: "Démarrer MOMENTUM",
    seeTiers: "Voir le tarif",

    scopeKicker: "Ce qui est compris",
    scopeTitle: "L'écrit et le site. Rien d'autre.",
    scopeLead: "Sont volontairement exclus la photo, la vidéo, le son et la publication sur les réseaux. Un studio qui écrit des positions n'a pas à être jugé sur son montage. Ce que nous tenons, c'est le mot et la surface qui le porte.",
    scope: [
      { t: "Les scripts", b: "Ce que vous dites face caméra, sur scène, en rendez-vous, en démonstration. Écrit pour être dit et non pour être lu — avec les objections anticipées là où elles arrivent vraiment." },
      { t: "Les récits", b: "Pièces longues, manifestes, essais de fondateur, récits de lancement et de prix. Chacun écrit contre l'architecture, pour que rien ne dérive de la position que vous avez payée." },
      { t: "Le site web", b: "Les pages écrites, structurées et mises en ligne. Hébergées par nous. Améliorées semaine après semaine ou mois après mois, pour que le site ne traîne jamais derrière ce que vous vendez aujourd'hui." },
      { t: "Les plannings d'écriture et de diffusion", b: "Ce qui s'écrit, dans quel ordre, et sur quelle surface cela paraît — avec les dates. Le plan est un document, pas une conversation." },
    ],
    scopeOutTitle: "Ce qui n'est pas compris",
    scopeOut: [
      "Aucune production photo, vidéo ou son.",
      "Aucune animation de communauté ni publication à votre place.",
      "Aucun achat média ni campagne publicitaire.",
      "Aucun logo, charte ou identité visuelle.",
    ],

    siteKicker: "Le site web",
    siteTitle: "Hébergé, et jamais périmé.",
    siteBody: "Le site n'est pas une livraison qu'on reçoit une fois et qu'on regarde vieillir. Nous l'hébergeons, et nous continuons de l'écrire : une offre nouvelle, un prix relevé, une page repositionnée, un récit à publier. Semaine après semaine ou mois après mois, selon votre rythme. Vous nous dites ce qui a changé ; le site suit.",
    sitePoints: [
      "Hébergement et maintenance compris, sans facture séparée.",
      "Les modifications éditoriales sont faites par nous, pas par une file de tickets.",
      "Chaque page est confrontée à l'architecture avant sa mise en ligne.",
    ],

    diffTitle: "En quoi est-ce différent de BRAND NARRATIVE ARCHITECTURE ?",
    diffBody: "BRAND NARRATIVE ARCHITECTURE tranche. Elle s'écrit une fois, fixe la position, l'identité et le langage, et vous appartient pour toujours. MOMENTUM applique. Chaque mois, elle transforme cette position en écrits nouveaux et maintient le site aligné dessus. L'une est la constitution ; l'autre est ce qui s'écrit dessous. Vous ne payez jamais deux fois le même travail — et si vous ne voulez plus jamais faire écrire une seule page, MOMENTUM ne vous sert à rien.",

    tiersKicker: "Le tarif",
    tiers: [
      { name: "MOMENTUM", price: "2 500€", cadence: "/ mois", line: "Scripts, récits, site web et plannings, écrits par le studio à partir de l'architecture qu'il a rédigée. Un seul tarif, aucun palier, aucun périmètre à négocier.", featured: true },
    ],
    tierCta: "Démarrer MOMENTUM",
    bridge: "Pas encore d'architecture ? MOMENTUM vient après. Commencez par BRAND NARRATIVE ARCHITECTURE.",
    bridgeCta: "Voir BRAND NARRATIVE ARCHITECTURE →",
  },
}

export default async function MomentumPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang: raw } = await params
  const lang: Lang = isLang(raw) ? raw : "fr"
  const t = pick(T, lang)

  return (
    <main className="min-h-screen overflow-hidden bg-ink font-sans text-white">
      <NavBar />
      <BackHomeButton />

      <section className="section-hero relative min-h-[88vh] items-center overflow-hidden pb-24 pt-40">
        <BokehField />
        <div className="glow-top" aria-hidden />
        <div className="shell-md relative">
          <div className="pill mb-9">{t.badge}</div>

          <h1 className="h-display mb-7">
            {t.h1a}
            <br />
            <span className="text-gradient">{t.h1b}</span>
          </h1>

          <p className="lede mx-auto mb-10 max-w-[660px]">{t.lead}</p>

          <div className="flex flex-wrap justify-center gap-3.5">
            <a href={STRIPE_LINKS.momentum} className="btn-primary" rel="noopener">{t.cta}</a>
            <a href="#tiers" className="btn-ghost">{t.seeTiers}</a>
          </div>
        </div>
      </section>

      {/* LE PÉRIMÈTRE — dit en positif puis en négatif, parce qu'une offre au
          mois se vend autant sur ce qu'elle refuse que sur ce qu'elle couvre. */}
      <section className="section">
        <div className="shell-lg">
          <div className="mb-12 text-center">
            <div className="kicker mb-5">{t.scopeKicker}</div>
            <h2 className="h-section mb-6">{t.scopeTitle}</h2>
            <p className="lede mx-auto max-w-[640px]">{t.scopeLead}</p>
          </div>

          <RackFocus>
            <div className="grid-auto-wide">
              {t.scope.map((a) => (
                <SpotlightCard key={a.t} className="px-8 py-9">
                  <h3 className="mb-3 font-serif text-2xl font-bold">{a.t}</h3>
                  <p className="font-sans text-[15px] leading-relaxed text-chalk-65">{a.b}</p>
                </SpotlightCard>
              ))}
            </div>
          </RackFocus>

          <div className="mx-auto mt-10 max-w-[760px] border border-hair p-7 md:p-9">
            <div className="mb-5 font-sans text-[11px] uppercase tracking-[0.2em] text-chalk-40">
              {t.scopeOutTitle}
            </div>
            <ul className="list-none p-0">
              {t.scopeOut.map((o) => (
                <li
                  key={o}
                  className="flex items-baseline gap-3 border-b border-white/[0.06] py-3 font-sans text-[14.5px] text-chalk-55 last:border-b-0"
                >
                  <span aria-hidden className="text-brand">&#215;</span>
                  {o}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* LE SITE — l'élément que personne d'autre ne tient au mois. */}
      <section className="section bg-ink-soft">
        <div className="shell">
          <div className="mx-auto max-w-[760px]">
            <div className="kicker mb-5">{t.siteKicker}</div>
            <h2 className="h-section mb-7">{t.siteTitle}</h2>
            <p className="mb-9 font-sans text-base leading-[1.85] text-chalk-65">{t.siteBody}</p>
            <ul className="list-none border-t border-hair p-0">
              {t.sitePoints.map((sp, i) => (
                <li
                  key={sp}
                  className="flex items-baseline gap-4 border-b border-white/[0.06] py-3.5 font-sans text-[15px] text-chalk-75"
                >
                  <span className="font-serif text-[13px] text-brand">{String(i + 1).padStart(2, "0")}</span>
                  {sp}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* LA DISTINCTION AVEC L'ARCHITECTURE — la seule question que tout
          prospect se pose et qu'aucune page ne répondait clairement. */}
      <section className="section">
        <div className="mx-auto max-w-[760px] border border-hair-strong bg-white/[0.02] p-8 md:p-12">
          <h3 className="mb-4 font-serif text-[clamp(1.4rem,2.5vw,1.9rem)] font-bold">{t.diffTitle}</h3>
          <p className="font-sans text-[15.5px] leading-[1.7] text-chalk-75">{t.diffBody}</p>
        </div>
      </section>

      <section id="tiers" className="section">
        <div className="shell">
          <div className="mb-12 text-center">
            <div className="kicker">{t.tiersKicker}</div>
          </div>

          <RackFocus>
          <div className="grid-auto-wide">
            {t.tiers.map((tier) => (
              <SpotlightCard key={tier.name} featured={tier.featured} className="px-8 py-9">
                <h3 className="mb-3.5 font-serif text-[1.6rem] font-bold">{tier.name}</h3>

                <div className="mb-4 flex items-baseline gap-1.5">
                  <span className={`font-serif text-[2rem] font-bold ${tier.featured ? "text-brand" : "text-white"}`}>
                    {tier.price}
                  </span>
                  <span className="font-sans text-[13px] text-chalk-55">{tier.cadence}</span>
                </div>

                <p className="mb-6 body-sm">{tier.line}</p>

                <a href={STRIPE_LINKS.momentum} rel="noopener" className="btn-primary px-7 py-3.5 text-sm">
                  {t.tierCta}
                </a>
              </SpotlightCard>
            ))}
            </div>
          </RackFocus>
        </div>
      </section>

      <section className="section pb-28 text-center">
        <div className="mx-auto max-w-[720px]">
          <p className="font-serif text-[clamp(1.15rem,2vw,1.5rem)] italic leading-snug text-chalk-75">
            {t.bridge}
          </p>
          <Link href="/brand-narrative-architecture" className="btn-quiet mt-5">{t.bridgeCta}</Link>
        </div>
      </section>

      <FaqSection faqs={FAQ_MOMENTUM} />

      <Footer />
    </main>
  )
}
