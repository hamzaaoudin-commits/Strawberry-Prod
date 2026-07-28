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
    badge: "After the commission · monthly",
    h1a: "The architecture is built.",
    h1b: "MOMENTUM keeps it alive.",
    lead: "The commission gives you the architecture — position, identity, language. MOMENTUM is the team that carries it forward: creative direction that guards the narrative, and content execution that puts it into the feed, every week.",
    cta: "Start MOMENTUM",
    seeTiers: "See the tiers",
    collisionTitle: "Isn't the commission already 4,500€?",
    collisionBody: "Yes. BRAND NARRATIVE ARCHITECTURE is one-shot: you pay 4,500€ once, you own the architecture forever. MOMENTUM is different — it starts after the commission, monthly, only if you want the studio to keep executing. One is the blueprint. The other is the crew that keeps building. You never pay twice for the same thing.",
    twoKicker: "Two arms, one engagement",
    arms: [
      { t: "Creative direction", b: "The guardrail. Every campaign, page, film and post checked against the architecture — so the narrative never drifts as you scale." },
      { t: "Content execution", b: "The output. Story, design, web and sound produced in-house to the same standard — the arm that turns the position into a feed, not a folder." },
    ],
    tiersKicker: "The rate",
    tiers: [
      { name: "MOMENTUM", price: "2,500€", cadence: "/ month", line: "Creative direction and content execution, run by the studio against the architecture it wrote. One rate, no tiers, no scope to negotiate.", featured: true },
    ],
    tierCta: "Start MOMENTUM — 2,500€/month",
    bridge: "No architecture yet? MOMENTUM comes after. Start with the commission.",
    bridgeCta: "See BRAND NARRATIVE ARCHITECTURE →",
  },
  fr: {
    badge: "Après la commande · au mois",
    h1a: "L'architecture est posée.",
    h1b: "MOMENTUM la fait vivre.",
    lead: "La commande vous donne l'architecture — position, identité, langage. MOMENTUM, c'est l'équipe qui la porte dans le temps : une direction créative qui garde le récit, et une exécution de contenu qui le met dans le feed, chaque semaine.",
    cta: "Démarrer MOMENTUM",
    seeTiers: "Voir les paliers",
    collisionTitle: "La commande n'est-elle pas déjà à 4 500€ ?",
    collisionBody: "Si. BRAND NARRATIVE ARCHITECTURE est one-shot : vous payez 4 500€ une fois, l'architecture est à vous pour toujours. MOMENTUM, c'est autre chose — cela commence après la commande, au mois, seulement si vous voulez que le studio continue d'exécuter. L'un est le plan. L'autre, l'équipe qui continue de construire. Vous ne payez jamais deux fois la même chose.",
    twoKicker: "Deux bras, un seul engagement",
    arms: [
      { t: "Direction créative", b: "Le garde-fou. Chaque campagne, page, film et post confronté à l'architecture — pour que le récit ne dérive pas quand vous passez à l'échelle." },
      { t: "Exécution de contenu", b: "La production. Récit, design, web et son produits en interne au même standard — le bras qui transforme la position en feed, pas en dossier." },
    ],
    tiersKicker: "Le tarif",
    tiers: [
      { name: "MOMENTUM", price: "2 500€", cadence: "/ mois", line: "Direction créative et exécution de contenu, menées par le studio à partir de l'architecture qu'il a écrite. Un seul tarif, aucun palier, aucun périmètre à négocier.", featured: true },
    ],
    tierCta: "Démarrer MOMENTUM — 2 500€/mois",
    bridge: "Pas encore d'architecture ? MOMENTUM vient après. Commencez par la commande.",
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

      {/* TWO ARMS — creative direction + content execution (ex-NOCTA). */}
      <section className="section">
        <div className="shell-lg">
          <div className="mb-12 text-center">
            <div className="kicker">{t.twoKicker}</div>
          </div>

          <RackFocus>
            <div className="grid-auto-wide">
              {t.arms.map((a) => (
                <SpotlightCard key={a.t} className="px-8 py-9">
                  <h3 className="mb-3 font-serif text-2xl font-bold">{a.t}</h3>
                  <p className="font-sans text-[15px] leading-relaxed text-chalk-65">{a.b}</p>
                </SpotlightCard>
              ))}
            </div>
          </RackFocus>
        </div>
      </section>

      {/* PRICE-COLLISION RESOLVER */}
      <section className="section">
        <div className="mx-auto max-w-[760px] border border-hair-strong bg-white/[0.02] p-8 md:p-12">
          <h3 className="mb-4 font-serif text-[clamp(1.4rem,2.5vw,1.9rem)] font-bold">{t.collisionTitle}</h3>
          <p className="font-sans text-[15.5px] leading-[1.7] text-chalk-75">{t.collisionBody}</p>
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
