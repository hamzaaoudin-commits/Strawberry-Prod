import { LocaleLink as Link } from "@/components/locale-link"
import { TrackedLink } from "@/components/strawberry/tracked-link"
import { pick } from "@/lib/t"
import type { Lang } from "@/lib/lang"
import { LIVE } from "@/lib/config"
import { ViewTracker } from "@/components/strawberry/view-tracker"
import { OfferCover } from "@/components/strawberry/offer-covers"
import { DeliverablesTabs } from "@/components/strawberry/deliverables-tabs"

/**
 * L'offre. Une seule.
 *
 * La page d'accueil ne vend plus que BRAND NARRATIVE ARCHITECTURE. Chaque
 * autre offre a sa propre page, accessible depuis le pied de page.
 *
 * Les vingt pièces portent chacune une ligne de bénéfice en tête et la
 * caractéristique en dessous : vingt caractéristiques se lisent comme une
 * facture, vingt bénéfices se lisent comme une transformation. Les six
 * dernières sont les playbooks par département — marketing, contenu, réseaux
 * sociaux, vente, support, RH — ajoutés au corps de l'offre plutôt qu'en
 * supplément : ils servent autant à un collaborateur qu'à l'IA du client.
 *
 * Trois choses qui étaient enterrées dans la FAQ remontent ici, collées au
 * prix, parce que c'est là qu'un acheteur décide : la garantie, la fenêtre de
 * remboursement, et la justification du montant.
 */

const T = {
  en: {
    kicker: "The commission",
    h2a: "Your market stops comparing you.",
    h2b: "It starts understanding you.",
    intro:
      "Three weeks. One house at a time. What comes out is not a style guide — it is the written constitution by which your market learns to tell you apart.",
    coverFoot: "Twenty parts",
    h3: "The brand story no competitor can copy — and no machine can write.",
    body:
      "It begins with an extraction no AI automates: your truth, your singularity, what you no longer see because you are inside it.",
    bibleName: "Also called the Brand Narrative Bible.",
    deliverablesKicker: "What changes, part by part",
    groups: [
      {
        icon: "diagnostic",
        title: "Diagnostic",
        items: [
          ["You will never again be compared to the competitor next door.", "Differentiation diagnostic — five competitors dissected, the words they share, and the empty ground you take."],
          ["You know exactly where each rival is weak.", "Competitor autopsy — one sheet per player in the market."],
          ["You see the empty ground nobody occupies.", "Positioning map — two axes that reveal what category axes hide."],
          ["You speak each segment's language without changing position.", "Audience intelligence report — four segments, one language each."],
        ],
      },
      {
        icon: "identity",
        title: "Identity & language",
        items: [
          ["You know what to answer when someone asks what you do.", "Narrative platform — the constitution of the house, in writing."],
          ["Your words stop being everyone else's.", "Language system — the vocabulary, the tone, the daily tests."],
          ["You raise your prices with a reason you can give.", "Pricing narrative — price as doctrine, not as a number."],
          ["People understand why you exist in two hundred and fifty words.", "Origin manifesto — exactly that length, no more."],
        ],
      },
      {
        icon: "assets",
        title: "Assets & deployment",
        items: [
          ["You know what to do the Monday after.", "Deployment kit — the first ninety days, in order."],
          ["You settle questions alone, without calling us back.", "Coherence guide — written for the founder, not for the team."],
          ["You are introduced correctly when you are not in the room.", "Biography system — four formats, one single break."],
          ["You have something to publish that resembles nobody.", "The signature piece — an essay publishable as it stands."],
          ["You hold the same story in front of whoever is pricing a bet.", "Investor and partner translation."],
          ["Your designer stops guessing.", "Visual identity brief — written for a designer who thinks."],
        ],
      },
      {
        icon: "playbooks",
        title: "The six department playbooks",
        covers: ["Marketing", "Content", "Social", "Sales", "Support", "HR"],
        playbooksNote: "Each playbook is written to be used by a human teammate and handed to an AI agent without changing a word \u2014 same page, same rules, either side.",
        items: [
          ["Your marketing team stops guessing which ideas the house would refuse.", "Marketing playbook — the angles you can explore, the ones you can't, and how to catch an idea that betrays the house."],
          ["Anyone who writes for you sounds like you.", "Content playbook — the voice turned into concrete rules, with corrected examples."],
          ["Your editorial calendar stops drifting after month three.", "Social media playbook — tone by platform, posting rhythm, how to answer comments without contradicting yourself."],
          ["Your sales team answers objections with your own words, not theirs.", "Sales playbook — how to present the house, defuse common objections, adapt the pitch without betraying it."],
          ["An angry customer reads the same house as a happy one.", "Support playbook — how to handle sensitive situations without losing the tone that sets you apart."],
          ["A new hire understands who you are in their first week.", "HR & management playbook — the culture handed down at onboarding, retranslated to guide internal decisions."],
        ],
      },
    ],
    specs: [
      { k: "Lead time", v: "3 to 4 weeks" },
      { k: "Format", v: "One editorial document" },
      { k: "Scarcity", v: "4 commissions per quarter" },
    ],
    aiCompat: "Every written piece, including the six playbooks, is written to be understood and pasted directly into whatever AI tool your teams already use \u2014 nothing to configure, nothing we maintain on your behalf.",
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
    clock: "Already commissioned the audit? Its 490€ comes off this price, provided you commission within the following sixty days.",
    guaranteeShort: "V2 guarantee if it misses",
    refundShort: "Refundable within 7 days",
    guaranteeTitle: "The V2 guarantee",
    guaranteeBody:
      "If the delivered document does not hit the mark, we write a second version. No discussion, no extra invoice.",
    refundTitle: "The window before production",
    refundBody:
      "Within seven days of payment, and as long as the extraction interview has not taken place, you can cancel and be refunded in full, within fifteen days.",
    cta1: "Place your commission →",
    cta2: "Read the full brief",
    limit: "Four commissions per quarter. Not a sales tactic — the structural limit of full attention.",
  },
  fr: {
    kicker: "La commande signature",
    h2a: "Votre marché arrête de vous comparer.",
    h2b: "Il commence à vous comprendre.",
    intro:
      "Trois semaines. Une maison à la fois. Ce qui en sort n'est pas une charte — c'est la constitution écrite par laquelle votre marché apprend à vous distinguer.",
    coverFoot: "Vingt pièces",
    h3: "Le récit de marque qu'aucun concurrent ne peut copier — et qu'aucune machine ne peut écrire.",
    body:
      "Tout commence par une extraction qu'aucune IA n'automatise : votre vérité, votre singularité, ce que vous ne voyez plus parce que vous êtes dedans.",
    bibleName: "Aussi appelée la Brand Narrative Bible.",
    deliverablesKicker: "Ce qui change, pièce par pièce",
    groups: [
      {
        icon: "diagnostic",
        title: "Diagnostic",
        items: [
          ["Vous ne serez plus jamais comparé au concurrent d'à côté.", "Diagnostic de différenciation — cinq concurrents disséqués, leurs mots communs, et le terrain vide que vous prenez."],
          ["Vous savez exactement où chaque rival est faible.", "Autopsie des concurrents — une fiche par acteur du marché."],
          ["Vous voyez le terrain vide que personne n'occupe.", "Carte de positionnement — deux axes qui révèlent ce que les axes de catégorie masquent."],
          ["Vous parlez la langue de chaque segment sans changer de position.", "Rapport d'intelligence d'audience — quatre segments, un langage par segment."],
        ],
      },
      {
        icon: "identity",
        title: "Identité & langage",
        items: [
          ["Vous savez quoi répondre quand on vous demande ce que vous faites.", "Plateforme narrative — la constitution de la maison, par écrit."],
          ["Vos mots cessent d'être ceux de tout le monde.", "Système de langage — le vocabulaire, le ton, les tests quotidiens."],
          ["Vous augmentez vos prix avec une raison à donner.", "Récit tarifaire — le prix comme doctrine, pas comme un chiffre."],
          ["On comprend pourquoi vous existez en deux cent cinquante mots.", "Manifeste d'origine — exactement cette longueur, pas une de plus."],
        ],
      },
      {
        icon: "assets",
        title: "Pièces & déploiement",
        items: [
          ["Vous savez quoi faire dès le lundi qui suit.", "Kit de déploiement — les quatre-vingt-dix premiers jours, dans l'ordre."],
          ["Vous tranchez seul, sans avoir à nous rappeler.", "Guide de cohérence — écrit pour le fondateur, pas pour l'équipe."],
          ["On vous présente correctement quand vous n'êtes pas dans la pièce.", "Système biographique — quatre formats, une seule rupture."],
          ["Vous avez quelque chose à publier qui ne ressemble à personne.", "La pièce signature — un essai publiable en l'état."],
          ["Vous tenez le même récit devant qui évalue un pari.", "Traduction investisseurs et partenaires."],
          ["Votre designer arrête de deviner.", "Brief d'identité visuelle — écrit pour un designer qui pense."],
        ],
      },
      {
        icon: "playbooks",
        title: "Les six playbooks par département",
        covers: ["Marketing", "Contenu", "Réseaux", "Vente", "Support", "RH"],
        playbooksNote: "Chaque playbook est écrit pour être utilisé par un collaborateur humain et remis tel quel à un agent IA — la même page, les mêmes règles, des deux côtés.",
        items: [
          ["Votre équipe marketing arrête de deviner ce que la maison refuserait.", "Playbook marketing — les axes que vous pouvez explorer, ceux que vous devez refuser, et comment reconnaître une idée qui trahit la maison."],
          ["Toute personne qui écrit pour vous sonne comme vous.", "Playbook contenu — la voix mise en règles concrètes, avec des exemples corrigés."],
          ["Votre calendrier éditorial ne dérive plus au bout de trois mois.", "Playbook réseaux sociaux — le ton par plateforme, le rythme de publication, comment répondre aux commentaires sans se contredire."],
          ["Votre équipe commerciale répond aux objections avec vos mots, pas les leurs.", "Playbook vente — comment présenter la maison, désamorcer les objections courantes, adapter le discours sans le trahir."],
          ["Un client en colère lit la même maison qu'un client satisfait.", "Playbook support — comment répondre dans les situations sensibles sans perdre le ton qui vous distingue."],
          ["Un nouvel employé comprend qui vous êtes dès sa première semaine.", "Playbook RH & management — la culture transmise à l'arrivée, retraduite pour guider les décisions internes."],
        ],
      },
    ],
    specs: [
      { k: "Délai", v: "3 à 4 semaines" },
      { k: "Format", v: "Un document éditorial" },
      { k: "Rareté", v: "4 commandes par trimestre" },
    ],
    aiCompat: "Chaque pièce écrite, y compris les six playbooks, est rédigée pour être comprise et collée directement dans l’outil IA que vos équipes utilisent déjà \u2014 rien à configurer, rien que nous maintenions à votre place.",
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
    clock: "Vous avez déjà commandé l'audit ? Ses 490€ sont déduits de ce prix, à condition de commander dans les soixante jours qui suivent.",
    guaranteeShort: "Garantie V2 si le document ne tape pas juste",
    refundShort: "Remboursable sous 7 jours",
    guaranteeTitle: "La garantie V2",
    guaranteeBody:
      "Si le document livré ne tape pas juste, nous écrivons une seconde version. Sans discuter, sans facture supplémentaire.",
    refundTitle: "La fenêtre avant production",
    refundBody:
      "Dans les sept jours suivant le paiement, et tant que l'entretien d'extraction n'a pas eu lieu, vous pouvez annuler et être remboursé intégralement, sous quinze jours.",
    cta1: "Passer commande →",
    cta2: "Lire le brief complet",
    limit: "Quatre commandes par trimestre. Ce n'est pas une tactique de vente — c'est la limite structurelle d'une attention pleine.",
  },
}

export function OffersSection({ lang }: { lang: Lang }) {
  const t = pick(T, lang)
  const sc = LIVE.scarcity

  return (
    <section id="offers" className="section relative overflow-hidden bg-ink text-white">
      <ViewTracker name="offers" />
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
              <div className="pill mb-3">BRAND NARRATIVE ARCHITECTURE</div>
              <div className="mb-7 font-serif text-[13px] italic text-chalk-40">{t.bibleName}</div>

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

          {/* LES VINGT PIÈCES, regroupées en quatre catégories avec une icône
              chacune — un long registre uniforme de vingt lignes se parcourt
              mal ; des groupes qu'on peut saisir d'un coup d'œil se lisent. */}
          <div className="relative mt-14">
            <div className="mb-7 font-sans text-[11px] uppercase tracking-[0.2em] text-brand">
              {t.deliverablesKicker}
            </div>

            <DeliverablesTabs groups={t.groups} />

            <p className="mt-7 max-w-[620px] font-sans text-[13.5px] leading-relaxed text-chalk-40">
              {t.aiCompat}
            </p>
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

            {/* Les garanties, en icônes, juste sous le prix — au lieu de
                phrases qu'il fallait descendre chercher plus bas. Le détail
                complet reste en dessous pour qui veut le lire en entier. */}
            <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:gap-6">
              <div className="flex items-center gap-2.5">
                <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden fill="none" stroke="#e63946" strokeWidth="1.6">
                  <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
                <span className="font-sans text-[12.5px] text-chalk-65">{t.guaranteeShort}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden fill="none" stroke="#e63946" strokeWidth="1.6">
                  <rect x="3" y="6" width="18" height="13" rx="1.5" />
                  <path d="M3 10h18" />
                </svg>
                <span className="font-sans text-[12.5px] text-chalk-65">{t.refundShort}</span>
              </div>
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
            <div className="mt-8 border border-hair px-5 py-4">
              <div className="mb-3 flex flex-wrap items-center gap-3">
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

              {/* La jauge : autant de segments que de commandes possibles ce
                  trimestre, remplis selon ce qui est déjà pris. */}
              <div className="flex gap-1.5" aria-hidden>
                {Array.from({ length: sc.total }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-[7px] flex-1 ${i < sc.total - sc.remaining ? "bg-brand" : "bg-white/10"}`}
                  />
                ))}
              </div>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              {/* Le paiement ne s'ouvre plus depuis la page d'accueil.
                  Envoyer une carte bancaire à quelqu'un qui n'a pas lu la page
                  de vente, c'est parler de l'étape cinq pendant l'étape une. */}
              <TrackedLink
                href="/brand-narrative-architecture"
                className="btn-primary"
                event="cta_click"
                data={{ section: "offers", target: "architecture" }}
              >
                {t.cta1}
              </TrackedLink>
              <Link href="/brand-narrative-architecture" className="btn-quiet">
                {t.cta2}
              </Link>
            </div>

            <p className="mt-6 font-sans text-[13px] text-chalk-40">{t.limit}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
