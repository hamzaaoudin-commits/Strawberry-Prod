import { NavBar } from "@/components/strawberry/navbar"
import { LadderSection } from "@/components/strawberry/ladder-section"
import { FaqSection } from "@/components/strawberry/faq-section"
import { FAQ_AUDIT } from "@/lib/faqs"
import { CTABanner } from "@/components/strawberry/cta-banner"
import { Footer } from "@/components/strawberry/footer"

/**
 * Les quatre façons d'entrer.
 *
 * Cette page existe parce que l'échelle ne peut pas vivre sur la home : quatre
 * prix affichés ensemble transforment une décision en arbitrage, et le plus
 * petit d'entre eux devient l'ancre. Ici, en revanche, le visiteur est venu
 * comparer — c'est exactement ce qu'il cherche, et le sélecteur de situation
 * fait son travail.
 */
export default function OffersPage() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <div className="pt-[72px]" />
      <LadderSection />
      <FaqSection faqs={FAQ_AUDIT} />
      <CTABanner />
      <Footer />
    </main>
  )
}
