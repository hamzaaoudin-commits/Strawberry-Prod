import { NavBar } from "@/components/strawberry/navbar"
import { HeroSection } from "@/components/strawberry/hero-section"
import { ProblemSection } from "@/components/strawberry/problem-section"
import { ServicesSection } from "@/components/strawberry/services-section"
import { OffersSection } from "@/components/strawberry/offers-section"
import { AboutSection } from "@/components/strawberry/about-section"
import { CasesSection } from "@/components/strawberry/cases-section"
import { CTABanner } from "@/components/strawberry/cta-banner"
import { ContactSection } from "@/components/strawberry/contact-section"
import { Footer } from "@/components/strawberry/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <OffersSection />
      <AboutSection />
      <CasesSection />
      <CTABanner />
      <ContactSection />
      <Footer />
    </main>
  )
}
