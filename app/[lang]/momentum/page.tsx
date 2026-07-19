import { LocaleLink as Link } from "@/components/locale-link"
import { NavBar } from "@/components/strawberry/navbar"
import { Footer } from "@/components/strawberry/footer"
import { pick } from "@/lib/t"
import { isLang, type Lang } from "@/lib/lang"
import { FaqSection } from "@/components/strawberry/faq-section"
import { FAQ_MOMENTUM } from "@/lib/faqs"


const T = {
  en: {
    badge: "After the audit · monthly",
    h1a: "The architecture is built.",
    h1b: "MOMENTUM keeps it alive.",
    lead: "The commission gives you the architecture — position, identity, language. MOMENTUM is the team that carries it forward: creative direction that guards the narrative, and content execution that puts it into the feed, every week.",
    cta: "Start MOMENTUM",
    seeTiers: "See the tiers",
    collisionTitle: "Wait — isn't the audit already 4,500€?",
    collisionBody: "Yes. The audit is one-shot: you pay 4,500€ once, you own the architecture forever. MOMENTUM is different — it starts after the audit, monthly, only if you want the studio to keep executing. One is the blueprint. The other is the crew that keeps building. You never pay twice for the same thing.",
    twoKicker: "Two arms, one engagement",
    arms: [
      { t: "Creative direction", b: "The guardrail. Every campaign, page, film and post checked against the architecture — so the narrative never drifts as you scale." },
      { t: "Content execution", b: "The output. Story, design, web and sound produced in-house to the same standard — the arm that turns the position into a feed, not a folder." },
    ],
    tiersKicker: "The tiers",
    tiers: [
      { name: "Établi", price: "1,500€", cadence: "/ month", line: "Creative direction + a steady content cadence. The narrative stays coherent while you run.", featured: false },
      { name: "Maison", price: "2,500€", cadence: "/ month", line: "Direction, execution and monthly campaigns across channels. The full studio, on tap.", featured: true },
      { name: "Souverain", price: "4,500€", cadence: "/ month", line: "Priority direction, high-volume execution and a partner in the room for every major move.", featured: false },
    ],
    tierCta: "Talk to the studio",
    bridge: "No architecture yet? MOMENTUM comes after. Start with the commission.",
    bridgeCta: "See BRAND NARRATIVE ARCHITECTURE →",
  },
  fr: {
    badge: "Après l'audit · au mois",
    h1a: "L'architecture est posée.",
    h1b: "MOMENTUM la fait vivre.",
    lead: "La commande vous donne l'architecture — position, identité, langage. MOMENTUM, c'est l'équipe qui la porte dans le temps : une direction créative qui garde le récit, et une exécution de contenu qui le met dans le feed, chaque semaine.",
    cta: "Démarrer MOMENTUM",
    seeTiers: "Voir les paliers",
    collisionTitle: "Attends — l'audit n'est-il pas déjà à 4 500€ ?",
    collisionBody: "Si. L'audit est one-shot : vous payez 4 500€ une fois, l'architecture est à vous pour toujours. MOMENTUM, c'est autre chose — ça commence après l'audit, au mois, seulement si vous voulez que le studio continue d'exécuter. L'un est le plan. L'autre, l'équipe qui continue de construire. Vous ne payez jamais deux fois la même chose.",
    twoKicker: "Deux bras, un seul engagement",
    arms: [
      { t: "Direction créative", b: "Le garde-fou. Chaque campagne, page, film et post confronté à l'architecture — pour que le récit ne dérive pas quand vous passes à l'échelle." },
      { t: "Exécution de contenu", b: "La production. Récit, design, web et son produits en interne au même standard — le bras qui transforme la position en feed, pas en dossier." },
    ],
    tiersKicker: "Les paliers",
    tiers: [
      { name: "Établi", price: "1 500€", cadence: "/ mois", line: "Direction créative + une cadence de contenu régulière. Le récit reste cohérent pendant que vous avances.", featured: false },
      { name: "Maison", price: "2 500€", cadence: "/ mois", line: "Direction, exécution et campagnes mensuelles multicanal. Le studio complet, à volonté.", featured: true },
      { name: "Souverain", price: "4 500€", cadence: "/ mois", line: "Direction prioritaire, exécution à haut volume et un partenaire dans la pièce à chaque grand mouvement.", featured: false },
    ],
    tierCta: "Parler au studio",
    bridge: "Pas encore d'architecture ? MOMENTUM vient après. Commencez par la commande.",
    bridgeCta: "Voir BRAND NARRATIVE ARCHITECTURE →",
  },
  es: {
    badge: "Tras la auditoría · mensual",
    h1a: "La arquitectura está construida.",
    h1b: "MOMENTUM la mantiene viva.",
    lead: "El encargo le da la arquitectura — posición, identidad, lenguaje. MOMENTUM es el equipo que la lleva adelante: dirección creativa que cuida el relato, y ejecución de contenido que lo pone en el feed, cada semana.",
    cta: "Empezar MOMENTUM",
    seeTiers: "Ver los niveles",
    collisionTitle: "Espera — ¿la auditoría no cuesta ya 4.500€?",
    collisionBody: "Sí. La auditoría es de pago único: paga 4.500€ una vez y la arquitectura es suya para siempre. MOMENTUM es distinto — empieza después de la auditoría, mensual, solo si quiere que el estudio siga ejecutando. Uno es el plano. El otro, el equipo que sigue construyendo. Nunca paga dos veces por lo mismo.",
    twoKicker: "Dos brazos, un solo compromiso",
    arms: [
      { t: "Dirección creativa", b: "La barandilla. Cada campaña, página, film y post contrastado con la arquitectura — para que el relato no se desvíe al escalar." },
      { t: "Ejecución de contenido", b: "La producción. Relato, diseño, web y sonido producidos en casa al mismo estándar — el brazo que convierte la posición en feed, no en carpeta." },
    ],
    tiersKicker: "Los niveles",
    tiers: [
      { name: "Établi", price: "1.500€", cadence: "/ mes", line: "Dirección creativa + una cadencia de contenido constante. El relato se mantiene coherente mientras avanza.", featured: false },
      { name: "Maison", price: "2.500€", cadence: "/ mes", line: "Dirección, ejecución y campañas mensuales multicanal. El estudio completo, a demanda.", featured: true },
      { name: "Souverain", price: "4.500€", cadence: "/ mes", line: "Dirección prioritaria, ejecución de alto volumen y un socio en la sala en cada gran movimiento.", featured: false },
    ],
    tierCta: "Hablar con el estudio",
    bridge: "¿Aún sin arquitectura? MOMENTUM viene después. Empiece por el encargo.",
    bridgeCta: "Ver BRAND NARRATIVE ARCHITECTURE →",
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

      <section className="section-hero pb-24 pt-40">
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
            <a href="/#contact" className="btn-primary">{t.cta}</a>
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

          <div className="grid-auto-wide">
            {t.arms.map((a) => (
              <div key={a.t} className="card px-8 py-9">
                <h3 className="mb-3 font-serif text-2xl font-bold">{a.t}</h3>
                <p className="font-sans text-[15px] leading-relaxed text-chalk-65">{a.b}</p>
              </div>
            ))}
          </div>
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

          <div className="grid-auto-wide">
            {t.tiers.map((tier) => (
              <div
                key={tier.name}
                className={tier.featured ? "card-featured px-8 py-9" : "card px-8 py-9"}
              >
                {tier.featured && (
                  <>
                    <span className="bracket-tl" aria-hidden />
                    <span className="bracket-br" aria-hidden />
                  </>
                )}

                <h3 className="mb-3.5 font-serif text-[1.6rem] font-bold">{tier.name}</h3>

                <div className="mb-4 flex items-baseline gap-1.5">
                  <span className={`font-serif text-[2rem] font-bold ${tier.featured ? "text-brand" : "text-white"}`}>
                    {tier.price}
                  </span>
                  <span className="font-sans text-[13px] text-chalk-55">{tier.cadence}</span>
                </div>

                <p className="mb-6 body-sm">{tier.line}</p>

                <a href="/#contact" className={tier.featured ? "btn-primary px-6 py-3 text-sm" : "btn-ghost px-6 py-3 text-sm font-semibold"}>
                  {t.tierCta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section pb-28 text-center">
        <div className="mx-auto max-w-[720px]">
          <p className="font-serif text-[clamp(1.15rem,2vw,1.5rem)] italic leading-snug text-chalk-75">
            {t.bridge}
          </p>
          <Link href="/brand-narrative-audit" className="btn-quiet mt-5">{t.bridgeCta}</Link>
        </div>
      </section>

      <FaqSection faqs={FAQ_MOMENTUM} />

      <Footer />
    </main>
  )
}
