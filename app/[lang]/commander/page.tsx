import { LocaleLink as Link } from "@/components/locale-link"
import { NavBar } from "@/components/strawberry/navbar"
import { Footer } from "@/components/strawberry/footer"
import { STRIPE_LINKS, HAS_3X, LIVE, HOUSES } from "@/lib/config"
import { pick } from "@/lib/t"
import { isLang, type Lang } from "@/lib/lang"

/**
 * La page de commande.
 *
 * Le bouton envoyait directement sur un lien Stripe nu : aucun récapitulatif,
 * aucune suite annoncée, aucun rappel de la garantie — au moment précis où la
 * carte sort et où la peur est maximale, le site ne disait plus rien.
 *
 * Cette page occupe cet intervalle. Elle ne vend pas : elle rassure et elle
 * date. Ce qui est acheté, ce qui arrive sous 24 heures, ce qui protège, et le
 * choix entre payer une fois ou trois.
 */

const T = {
  fr: {
    kicker: "Commande",
    h1: "BRAND NARRATIVE ARCHITECTURE",
    lead: "Avant de payer, voici exactement ce que vous achetez, ce qui se passe ensuite, et ce qui vous protège si ça ne va pas.",
    recapKicker: "Récapitulatif",
    recap: [
      ["Ce que vous recevez", "Un document éditorial de quatorze pièces, écrit pour votre maison seule."],
      ["Délai", "Trois à quatre semaines à compter de l'entretien d'extraction."],
      ["Format", "PDF."],
      ["Propriété", "Le document est à vous, définitivement. Aucun abonnement, aucune reconduction."],
    ],
    nextKicker: "Ce qui se passe dans les 24 heures",
    next: [
      "Vous recevez la confirmation de paiement et la facture.",
      "Vous recevez le questionnaire d'extraction : vingt à trente minutes, à remplir quand vous voulez.",
      "Nous vous proposons trois créneaux pour l'entretien d'extraction, en visio ou à Paris.",
    ],
    payKicker: "Payer",
    payOnce: "En une fois",
    payOnceSub: "4 500€ aujourd'hui.",
    pay3x: "En trois fois",
    pay3xSub: "1 500€ aujourd'hui, puis deux échéances mensuelles. Sans frais.",
    pay3xNote: "Le paiement en trois fois n'est pas encore ouvert. Écrivez-nous et nous le mettons en place.",
    payCta: "Payer 4 500€",
    pay3xCta: "Payer 1 500€ aujourd'hui",
    contactCta: "Nous écrire",
    protectKicker: "Ce qui vous protège",
    protect: [
      ["La garantie V2", "Si le document livré ne tape pas juste, nous en écrivons une seconde version. Sans discuter, sans facture supplémentaire."],
      ["La fenêtre avant production", "Dans les sept jours suivant le paiement, et tant que l'entretien d'extraction n'a pas eu lieu, vous annulez et êtes remboursé intégralement, sous quinze jours."],
    ],
    houseKicker: "Ce que vous devenez",
    houseBody: (n: number, p: string, r: number) =>
      `Vous entrez dans les Maisons. Votre commande portera le numéro ${String(n).padStart(3, "0")}. ${p} : ${r} place${r > 1 ? "s" : ""} restante${r > 1 ? "s" : ""}.`,
    houseCta: "Voir le registre",
    afterKicker: "Après",
    afterBody: "L'architecture livrée, vous n'avez besoin de rien d'autre : elle vous appartient et ne se paie qu'une fois. Si vous voulez que le studio continue d'écrire à partir d'elle — scripts, récits, site web, plannings — MOMENTUM existe, au mois. Ce n'est pas la suite obligatoire, c'est une option.",
    afterCta: "Voir MOMENTUM",
    back: "Relire la page de l'offre",
  },
  en: {
    kicker: "Commission",
    h1: "BRAND NARRATIVE ARCHITECTURE",
    lead: "Before you pay, here is exactly what you are buying, what happens next, and what protects you if it goes wrong.",
    recapKicker: "Summary",
    recap: [
      ["What you receive", "An editorial document of fourteen parts, written for your house alone."],
      ["Lead time", "Three to four weeks from the extraction interview."],
      ["Format", "PDF."],
      ["Ownership", "The document is yours, permanently. No subscription, no renewal."],
    ],
    nextKicker: "What happens within 24 hours",
    next: [
      "You receive the payment confirmation and the invoice.",
      "You receive the extraction questionnaire: twenty to thirty minutes, filled in whenever suits you.",
      "We offer you three slots for the extraction interview, by video or in Paris.",
    ],
    payKicker: "Pay",
    payOnce: "In one payment",
    payOnceSub: "4,500€ today.",
    pay3x: "In three instalments",
    pay3xSub: "1,500€ today, then two monthly instalments. No fees.",
    pay3xNote: "Instalments are not open yet. Write to us and we will set it up.",
    payCta: "Pay 4,500€",
    pay3xCta: "Pay 1,500€ today",
    contactCta: "Write to us",
    protectKicker: "What protects you",
    protect: [
      ["The V2 guarantee", "If the delivered document does not hit the mark, we write a second version. No discussion, no extra invoice."],
      ["The window before production", "Within seven days of payment, and as long as the extraction interview has not taken place, you cancel and are refunded in full, within fifteen days."],
    ],
    houseKicker: "What you become",
    houseBody: (n: number, p: string, r: number) =>
      `You enter the Houses. Your commission will carry number ${String(n).padStart(3, "0")}. ${p}: ${r} place${r > 1 ? "s" : ""} left.`,
    houseCta: "See the register",
    afterKicker: "Afterwards",
    afterBody: "Once the architecture is delivered you need nothing else: it is yours and it is paid for once. If you want the studio to keep writing from it — scripts, narratives, website, calendars — MOMENTUM exists, monthly. It is not the obligatory next step, it is an option.",
    afterCta: "See MOMENTUM",
    back: "Read the offer page again",
  },
}

export default async function CommanderPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang: raw } = await params
  const lang: Lang = isLang(raw) ? raw : "fr"
  const t = pick(T, lang)
  const sc = LIVE.scarcity

  return (
    <main className="min-h-screen bg-ink text-white">
      <NavBar />

      <section className="section-hero pb-14 pt-36">
        <div className="shell">
          <div className="kicker mb-5">{t.kicker}</div>
          <h1 className="mb-6 font-serif text-[clamp(1.8rem,4.5vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em]">
            {t.h1}
          </h1>
          <p className="lede max-w-[620px]">{t.lead}</p>
        </div>
      </section>

      <section className="section pt-0">
        <div className="shell max-w-[860px]">
          <div className="mb-4 font-sans text-[11px] uppercase tracking-[0.2em] text-brand">{t.recapKicker}</div>
          <dl className="m-0 grid gap-px border border-white/[0.09] bg-white/[0.09] sm:grid-cols-2">
            {t.recap.map(([k, v]) => (
              <div key={k} className="bg-ink px-5 py-4">
                <dt className="mb-1.5 font-sans text-[11px] uppercase tracking-[0.16em] text-chalk-40">{k}</dt>
                <dd className="m-0 font-sans text-[14.5px] leading-relaxed text-chalk-75">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-12 border border-hair p-7 md:p-9">
            <div className="mb-5 font-sans text-[11px] uppercase tracking-[0.2em] text-brand">{t.nextKicker}</div>
            <ol className="list-none p-0">
              {t.next.map((n, i) => (
                <li
                  key={n}
                  className="flex items-baseline gap-4 border-b border-white/[0.06] py-3.5 font-sans text-[15px] text-chalk-75 last:border-b-0"
                >
                  <span className="font-serif text-[13px] text-brand">{String(i + 1).padStart(2, "0")}</span>
                  {n}
                </li>
              ))}
            </ol>
          </div>

          {/* LE PAIEMENT — une fois, ou trois. */}
          <div className="mt-12">
            <div className="mb-5 font-sans text-[11px] uppercase tracking-[0.2em] text-brand">{t.payKicker}</div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col border border-brand-hair bg-brand/[0.04] p-7">
                <h2 className="mb-2 font-serif text-[1.3rem] font-bold">{t.payOnce}</h2>
                <p className="mb-7 font-sans text-[14.5px] text-chalk-65">{t.payOnceSub}</p>
                <a href={STRIPE_LINKS.architecture} className="btn-primary mt-auto self-start" rel="noopener">
                  {t.payCta}
                </a>
              </div>

              <div className="flex flex-col border border-hair p-7">
                <h2 className="mb-2 font-serif text-[1.3rem] font-bold">{t.pay3x}</h2>
                <p className="mb-7 font-sans text-[14.5px] text-chalk-65">{t.pay3xSub}</p>
                {HAS_3X ? (
                  <a href={STRIPE_LINKS.architecture3x} className="btn-ghost mt-auto self-start" rel="noopener">
                    {t.pay3xCta}
                  </a>
                ) : (
                  <>
                    <p className="mb-5 font-sans text-[13px] text-chalk-40">{t.pay3xNote}</p>
                    <Link href="/#contact" className="btn-ghost mt-auto self-start">
                      {t.contactCta}
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-px bg-white/10 sm:grid-cols-2">
            {t.protect.map(([k, v]) => (
              <div key={k} className="bg-ink px-6 py-5">
                <div className="mb-2 font-sans text-[11px] uppercase tracking-[0.18em] text-brand">{k}</div>
                <p className="m-0 font-sans text-[14.5px] leading-relaxed text-chalk-75">{v}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 border border-hair p-7">
            <div className="mb-3 font-sans text-[11px] uppercase tracking-[0.2em] text-chalk-40">{t.houseKicker}</div>
            <p className="mb-6 font-serif text-[clamp(1.05rem,2vw,1.3rem)] leading-snug text-white">
              {t.houseBody(HOUSES.nextNumber, sc.period, sc.remaining)}
            </p>
            <Link href="/maisons" className="btn-quiet">
              {t.houseCta}
            </Link>
          </div>

          <div className="mt-6 border border-hair p-7">
            <div className="mb-3 font-sans text-[11px] uppercase tracking-[0.2em] text-chalk-40">{t.afterKicker}</div>
            <p className="mb-6 font-sans text-[14.5px] leading-relaxed text-chalk-65">{t.afterBody}</p>
            <Link href="/momentum" className="btn-quiet">
              {t.afterCta}
            </Link>
          </div>

          <div className="mt-10">
            <Link href="/brand-narrative-architecture" className="btn-quiet">
              {t.back}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
