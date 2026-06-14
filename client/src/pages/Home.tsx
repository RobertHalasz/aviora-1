/**
 * AVIORA CONSULTANCY — Home Page (Upgraded)
 * Sections: Header, Hero (WebGL), Intro+Services, Markets, Founder,
 *           Network, Opportunities, Approach, Partners, Case Studies, Contact, Footer
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
import PartnersSection from "@/components/sections/PartnersSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
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
        <PartnersSection />
        <CaseStudiesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
