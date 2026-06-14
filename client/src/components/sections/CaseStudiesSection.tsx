/**
 * AVIORA — Case Studies Section
 * Design: Dark cobalt background, editorial layout
 * One featured case study: mixed-use harbour development
 * No client names, no project names, no partner names
 */

import { useEffect, useRef, useState } from "react";

function RevealDiv({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transitionDelay = `${delay}ms`;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("revealed"); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

const CASE_IMAGES = [
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663706999420/rYPZZypsnpMAPkGi.png",
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663706999420/DLJyvPNOPBsKbuAb.png",
];

export default function CaseStudiesSection() {
  const [activeImg, setActiveImg] = useState(0);

  return (
    <section
      id="case-studies"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "oklch(0.99 0.005 80)" }}
    >
      <div className="container">
        {/* Header */}
        <RevealDiv className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="bronze-rule" />
            <span className="section-label">Advisory Work</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <h2
              className="display-headline"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              Case Studies
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ color: "oklch(0.42 0.01 65)", maxWidth: "480px" }}
            >
              Selected advisory engagements presented on a non-confidential basis. Client identities, project names, and counterparty details are withheld in accordance with our advisory mandate.
            </p>
          </div>
        </RevealDiv>

        {/* Case Study Card */}
        <RevealDiv delay={80}>
          <div
            className="grid lg:grid-cols-2 gap-0"
            style={{ border: "1px solid oklch(0.88 0.01 80)" }}
          >
            {/* Image gallery */}
            <div className="relative overflow-hidden" style={{ minHeight: "480px" }}>
              {CASE_IMAGES.map((src, i) => (
                <div
                  key={i}
                  className="absolute inset-0"
                  style={{
                    opacity: i === activeImg ? 1 : 0,
                    transition: "opacity 0.8s ease-in-out",
                  }}
                >
                  <img
                    src={src}
                    alt={`Development rendering ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              {/* Image switcher */}
              <div className="absolute bottom-4 left-4 z-10 flex gap-2">
                {CASE_IMAGES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    style={{
                      width: i === activeImg ? "1.5rem" : "0.4rem",
                      height: "0.4rem",
                      backgroundColor: i === activeImg ? "var(--bronze)" : "rgba(255,255,255,0.5)",
                      border: "none",
                      borderRadius: "2px",
                      transition: "all 0.3s",
                    }}
                  />
                ))}
              </div>
              {/* Label */}
              <div
                className="absolute top-4 left-4 z-10 px-3 py-1"
                style={{ backgroundColor: "oklch(0.28 0.12 258)" }}
              >
                <span className="text-xs font-semibold uppercase" style={{ color: "oklch(0.72 0.06 55)", letterSpacing: "0.12em" }}>
                  Advisory Mandate
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-10 lg:p-12 flex flex-col justify-between" style={{ backgroundColor: "oklch(0.99 0.005 80)" }}>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="section-label">Mixed-Use Mega Development</span>
                </div>
                <h3
                  className="display-headline text-3xl mb-2"
                  style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)" }}
                >
                  Waterfront Urban District
                </h3>
                <p
                  className="text-xs mb-6"
                  style={{ color: "oklch(0.60 0.01 65)", letterSpacing: "0.06em" }}
                >
                  North America · Mixed-Use · Capital Advisory. 2026
                </p>
                <div className="bronze-rule mb-6" />

                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "oklch(0.38 0.01 65)" }}
                >
                  A large-scale waterfront urban regeneration project comprising residential towers, retail and hospitality components, and public harbour promenade infrastructure. The development spans multiple city blocks adjacent to a navigable waterway in a major North American metropolitan market.
                </p>
                <p
                  className="text-sm leading-relaxed mb-8"
                  style={{ color: "oklch(0.38 0.01 65)" }}
                >
                  Aviora Consultancy was engaged to provide strategic capital advisory, investor positioning, and cross-border capital introduction services — connecting the development with aligned capital partners from the UAE and international markets. The advisory scope included feasibility validation, capital stack structuring guidance, and investor narrative development.
                </p>

                {/* Key metrics */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { label: "Asset Class", value: "Mixed-Use / Residential" },
                    { label: "Advisory Scope", value: "Capital Introduction, JV Formation, Due Diligence" },
                    { label: "Market", value: "North America" },
                    { label: "Capital Origin", value: "UAE & USA" },
                    { label: "Components", value: "Residential, Retail, Hospitality" },
                    { label: "Status", value: "Active Advisory Mandate" },
                  ].map((m) => (
                    <div key={m.label}>
                      <p className="text-xs font-semibold uppercase mb-1" style={{ color: "oklch(0.60 0.01 65)", letterSpacing: "0.1em" }}>{m.label}</p>
                      <p className="text-sm font-display italic" style={{ color: "oklch(0.22 0.01 65)" }}>{m.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div
                  className="p-4 mb-6"
                  style={{
                    borderLeft: "2px solid var(--bronze)",
                    backgroundColor: "oklch(0.95 0.008 80)",
                  }}
                >
                  <p
                    className="text-sm italic leading-relaxed"
                    style={{ color: "oklch(0.38 0.01 65)" }}
                  >
                    "Aviora's role in this mandate demonstrates the firm's ability to bridge complex cross-border capital requirements with large-scale mixed-use development opportunities — applying market intelligence, investor network access, and structured advisory support to materially improve capital readiness."
                  </p>
                  <p className="text-xs mt-2" style={{ color: "oklch(0.60 0.01 65)" }}>— Aviora Client, Confidential</p>
                </div>
                <button
                  onClick={() => {
                    const el = document.querySelector("#contact");
                    if (el) { const top = el.getBoundingClientRect().top + window.scrollY - 88; window.scrollTo({ top, behavior: "smooth" }); }
                  }}
                  className="btn-bronze-outline"
                >
                  Discuss a Similar Mandate
                </button>
              </div>
            </div>
          </div>
        </RevealDiv>

        {/* Case Study 2 — Al Barari Villa Redevelopment */}
        <RevealDiv delay={120} className="mt-0.5">
          <div
            className="grid lg:grid-cols-2 gap-0"
            style={{ border: "1px solid oklch(0.88 0.01 80)", borderTop: "none" }}
          >
            {/* Content side — left this time */}
            <div className="p-10 lg:p-12 flex flex-col justify-between" style={{ backgroundColor: "oklch(0.28 0.12 258)" }}>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="section-label" style={{ color: "oklch(0.72 0.06 55)" }}>Luxury Villa Redevelopment</span>
                </div>
                <h3
                  className="display-headline mb-2"
                  style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)", color: "oklch(0.97 0.005 80)" }}
                >
                  Al Barari Luxury Redevelopment
                </h3>
                <p
                  className="text-xs mb-6"
                  style={{ color: "oklch(0.62 0.01 80)", letterSpacing: "0.06em" }}
                >
                  Dubai, UAE · Residential · Capital Creation &amp; Investor Relations · 2025–2026
                </p>
                <div className="bronze-rule mb-6" />

                <p className="text-sm leading-relaxed mb-4" style={{ color: "oklch(0.78 0.01 80)" }}>
                  A luxury villa acquisition and full redevelopment mandate in Al Barari — Dubai's most prestigious botanical residential community. The property was acquired, comprehensively redeveloped, and repositioned for the ultra-premium residential market, encompassing full architectural renovation, interior design, landscaping, furnishing, and a curated sales and marketing programme.
                </p>
                <p className="text-sm leading-relaxed mb-8" style={{ color: "oklch(0.78 0.01 80)" }}>
                  Aviora Consultancy's role in this mandate centred on capital creation and investor relations — structuring the investment framework, aligning capital partners, and managing investor communication throughout the acquisition, redevelopment, and exit phases.
                </p>

                {/* Financial metrics */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { label: "Acquisition Price", value: "AED 20,000,000" },
                    { label: "Total Project Costs", value: "AED 10,000,000" },
                    { label: "Exit / Sale Price", value: "AED 45,000,000" },
                    { label: "Gross Profit", value: "AED 15,000,000" },
                    { label: "Return on Cost", value: "~50% on Total Invested" },
                    { label: "Aviora Role", value: "Capital Creation & Investor Relations" },
                  ].map((m) => (
                    <div key={m.label}>
                      <p className="text-xs font-semibold uppercase mb-1" style={{ color: "oklch(0.55 0.01 80)", letterSpacing: "0.1em" }}>{m.label}</p>
                      <p className="text-sm font-display italic" style={{ color: "oklch(0.92 0.005 80)" }}>{m.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div
                  className="p-4 mb-6"
                  style={{ borderLeft: "2px solid var(--bronze)", backgroundColor: "oklch(1 0 0 / 0.05)" }}
                >
                  <p className="text-sm italic leading-relaxed" style={{ color: "oklch(0.78 0.01 80)" }}>
                    "A disciplined acquisition, a precise redevelopment, and a well-timed exit — this mandate illustrates Aviora's ability to create and structure capital around high-conviction residential opportunities in Dubai's premium market."
                  </p>
                  <p className="text-xs mt-2" style={{ color: "oklch(0.55 0.01 80)" }}>— Aviora Investor, Confidential</p>
                </div>
                <button
                  onClick={() => {
                    const el = document.querySelector("#contact");
                    if (el) { const top = el.getBoundingClientRect().top + window.scrollY - 88; window.scrollTo({ top, behavior: "smooth" }); }
                  }}
                  className="btn-bronze"
                >
                  Discuss a Similar Mandate
                </button>
              </div>
            </div>

            {/* Image side */}
            <div className="relative overflow-hidden" style={{ minHeight: "480px" }}>
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663706999420/SdqFrkhrGlCceGZG.jpg"
                alt="Al Barari luxury villa redevelopment"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute top-4 right-4 px-3 py-1"
                style={{ backgroundColor: "oklch(0.28 0.12 258)" }}
              >
                <span className="text-xs font-semibold uppercase" style={{ color: "oklch(0.72 0.06 55)", letterSpacing: "0.12em" }}>
                  Completed · Sold
                </span>
              </div>
              <div className="absolute top-4 left-4 w-10 h-10 border-t border-l" style={{ borderColor: "rgba(154,123,79,0.5)" }} />
              <div className="absolute bottom-4 right-4 w-10 h-10 border-b border-r" style={{ borderColor: "rgba(154,123,79,0.5)" }} />
            </div>
          </div>
        </RevealDiv>

        {/* More coming */}
        <RevealDiv delay={200} className="mt-12 text-center">
          <p className="text-xs" style={{ color: "oklch(0.60 0.01 65)", letterSpacing: "0.06em" }}>
            Additional case studies available upon request under NDA.
          </p>
        </RevealDiv>
      </div>
    </section>
  );
}
