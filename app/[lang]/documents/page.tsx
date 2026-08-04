import { LocaleLink as Link } from "@/components/locale-link"
import { NavBar } from "@/components/strawberry/navbar"
import { Footer } from "@/components/strawberry/footer"
import { pick } from "@/lib/t"
import { isLang, type Lang } from "@/lib/lang"

/**
 * L'index des documents publiés.
 *
 * Cinq adresses disaient presque la même chose : /audit, /brand-narrative-audit,
 * /sample-audit, /exemple-audit, /radar/lecture. Un visiteur ne savait pas
 * laquelle ouvrir, et Google pas laquelle indexer. Les deux documents de
 * démonstration se rangent ici, sous une adresse qui dit ce qu'elle contient.
 */

const T = {
  fr: {
    kicker: "Les documents publiés",
    h1a: "Lisez le travail",
    h1b: "avant de le commander.",
    lead: "Deux documents complets, publiés en entier, sans email à laisser. Ils portent sur des maisons inventées pour l'exercice — aucun client n'a à servir de vitrine.",
    docs: [
      { name: "SILLAGE", sub: "Logiciel de chantier", kind: "BRAND NARRATIVE ARCHITECTURE · quatorze pièces sur vingt", body: "Une commande complète, de la dissection du champ narratif jusqu'aux quatre-vingt-dix premiers jours de déploiement. Publiée avant que les six playbooks par département rejoignent l'offre — lisez-la pour l'écriture, la commande actuelle en compte six de plus.", href: "/documents/sillage" },
      { name: "VERSO", sub: "Reliure d'art", kind: "BRAND NARRATIVE AUDIT · cinq blocs", body: "Un diagnostic écrit : ce qui porte, ce qui vous confond avec vos concurrents, et les mouvements précis à faire. Le format de l'offre d'entrée, en entier.", href: "/documents/verso" },
    ],
    read: "Lire le document →",
  },
  en: {
    kicker: "The published documents",
    h1a: "Read the work",
    h1b: "before commissioning it.",
    lead: "Two complete documents, published in full, with no email to leave. They cover houses invented for the exercise — no client has to serve as a showcase.",
    docs: [
      { name: "SILLAGE", sub: "Construction software", kind: "BRAND NARRATIVE ARCHITECTURE · fourteen of twenty parts", body: "A complete commission, from the dissection of the narrative field to the first ninety days of deployment. Published before the six department playbooks joined the offer — read it for the writing, the current commission includes six more.", href: "/documents/sillage" },
      { name: "VERSO", sub: "Art bindery", kind: "BRAND NARRATIVE AUDIT · five blocks", body: "A written diagnosis: what lands, what makes you indistinguishable from competitors, and the precise moves to make. The entry offer's format, in full.", href: "/documents/verso" },
    ],
    read: "Read the document →",
  },
}

export default async function DocumentsIndex({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang: raw } = await params
  const lang: Lang = isLang(raw) ? raw : "fr"
  const t = pick(T, lang)

  return (
    <main className="min-h-screen bg-ink text-white">
      <NavBar />

      <section className="section-hero pb-14 pt-36">
        <div className="shell">
          <div className="kicker mb-6">{t.kicker}</div>
          <h1 className="mb-7 font-serif text-[clamp(2rem,5vw,3.6rem)] font-bold leading-[1.08] tracking-[-0.02em]">
            {t.h1a}
            <br />
            <span className="text-gradient">{t.h1b}</span>
          </h1>
          <p className="lede max-w-[640px]">{t.lead}</p>
        </div>
      </section>

      <section className="section pt-0">
        <div className="shell grid max-w-[900px] gap-6 md:grid-cols-2">
          {t.docs.map((d) => (
            <div key={d.name} className="flex flex-col border border-hair p-7 md:p-9">
              <div className="mb-2 font-serif text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-[0.05em] text-brand">
                {d.name}
              </div>
              <div className="mb-5 font-sans text-[13px] uppercase tracking-[0.14em] text-chalk-40">{d.sub}</div>
              <div className="mb-5 font-sans text-[12px] uppercase tracking-[0.12em] text-chalk-55">{d.kind}</div>
              <p className="mb-8 font-sans text-[15px] leading-relaxed text-chalk-65">{d.body}</p>
              <Link href={d.href} className="btn-primary mt-auto self-start">
                {t.read}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
