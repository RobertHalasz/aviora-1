/**
 * AVIORA CONSULTANCY — Home Page
 * Design: Warm Mineral Light / Quiet Luxury / Private Advisory
 * Single-page scrolling site with sticky header
 * 
 * Sections:
 * 1. Header (sticky)
 * 2. Hero
 * 3. Intro Statement + Services
 * 4. Markets
 * 5. Founder
 * 6. Network
 * 7. Opportunities
 * 8. Approach
 * 9. Contact
 * 10. Footer
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import MarketsSection from "@/components/sections/MarketsSection";
import FounderSection from "@/components/sections/FounderSection";
import NetworkSection from "@/components/sections/NetworkSection";
import OpportunitiesSection from "@/components/sections/OpportunitiesSection";
import ApproachSection from "@/components/sections/ApproachSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "oklch(0.97 0.01 80)" }}>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <MarketsSection />
        <FounderSection />
        <NetworkSection />
        <OpportunitiesSection />
        <ApproachSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
