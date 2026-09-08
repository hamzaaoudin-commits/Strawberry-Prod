import { NavBar } from "@/components/strawberry/navbar"
import { HeroSection } from "@/components/strawberry/hero-section"
import { ReadMarquee } from "@/components/strawberry/read-marquee"
import { ProblemSection } from "@/components/strawberry/problem-section"
import { DiagnosisSection } from "@/components/strawberry/diagnosis-section"
import { ImpactStats } from "@/components/strawberry/impact-stats"
import { MechanismStrip } from "@/components/strawberry/mechanism-strip"
import { OffersSection } from "@/components/strawberry/offers-section"
import { FaqSection } from "@/components/strawberry/faq-section"
import { FAQ_AUDIT } from "@/lib/faqs"
import { CTABanner } from "@/components/strawberry/cta-banner"
import { BookSection } from "@/components/strawberry/book-section"
import { ContactSection } from "@/components/strawberry/contact-section"
import { Footer } from "@/components/strawberry/footer"
import { isLang, type Lang } from "@/lib/lang"

/**
 * La page d'accueil.
 *
 * La page d'accueil — la porte Marques.
 *
 * Elle reste la racine du site plutôt qu'une page de choix intercalée :
 * c'est elle qui porte le référencement du domaine et l'offre principale,
 * et un écran de sélection en amont imposait un clic avant la moindre
 * proposition de valeur. La porte THE ROOM est proposée dans le hero, sur
 * une ligne discrète et permanente — visible dès la première seconde, sans
 * rien retarder pour les autres.
 *
 * Le parcours suit la décision d'achat :
 * bandeau de marques, problème, diagnostic, puis l'offre — remontée avant
 * les statistiques et le mécanisme, qui la retardaient sans être
 * nécessaires pour la comprendre. Ils la suivent désormais comme
 * justification pour qui n'a pas encore décidé. Ensuite le livre, le
 * bandeau final, les objections et le formulaire.
 *
 * La frise "4 par trimestre / 1 studio, un fondateur" a été retirée à la
 * demande du fondateur — l'offre et le pacte humain, plus bas, disent déjà
 * la même chose.
 *
 * L'Atlas n'est plus ici : il vit désormais sur les pages d'offre
 * (Architecture, Audit) plutôt que sur la home — une ressource gratuite
 * juste après avoir présenté ce qu'on vend a plus de sens qu'avant même
 * d'avoir montré l'offre.
 *
 * Le document SILLAGE n'est plus ici non plus : il a déménagé sur la page
 * /brand-narrative-architecture, avec le curseur avant/après qui
 * l'accompagne — un document complet en plus du reste, c'était trop à lire
 * pour quelqu'un qui découvre à peine l'offre sur la home.
 */
export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang: raw } = await params
  const lang: Lang = isLang(raw) ? raw : "fr"

  return (
    <main className="min-h-screen">
      <NavBar />
      <HeroSection />
      <ReadMarquee />
      <ProblemSection lang={lang} />
      <DiagnosisSection lang={lang} />
      <OffersSection lang={lang} />
      <ImpactStats lang={lang} />
      <MechanismStrip lang={lang} />
      <BookSection lang={lang} />
      <CTABanner />
      <FaqSection faqs={FAQ_AUDIT} />
      <ContactSection />
      <Footer />
    </main>
  )
}
