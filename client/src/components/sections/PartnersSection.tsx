/**
 * AVIORA — Partners Section
 * Design: Warm cream, editorial layout
 * Robert Halasz as principal partner with credentials
 */

import { useEffect, useRef } from "react";

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

export default function PartnersSection() {
  return (
    <section
      id="partners"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "oklch(0.97 0.01 80)" }}
    >
      <div className="container">
        <RevealDiv className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="bronze-rule" />
            <span className="section-label">Leadership</span>
          </div>
          <h2
            className="display-headline"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", maxWidth: "600px" }}
          >
            Partners
          </h2>
        </RevealDiv>

        {/* Partner card — Robert Halasz */}
        <RevealDiv delay={80}>
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image side */}
            <div
              className="relative overflow-hidden"
              style={{
                aspectRatio: "4/3",
                backgroundColor: "oklch(0.94 0.01 80)",
                border: "1px solid rgba(154,123,79,0.2)",
              }}
            >
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663706999420/vdHeHPJmiHUKKyJN.png"
                alt="Robert Halasz"
                className="w-full h-full object-cover object-top"
              />
              <div
                className="absolute top-4 left-4 w-10 h-10 border-t border-l"
                style={{ borderColor: "rgba(154,123,79,0.5)" }}
              />
              <div
                className="absolute bottom-4 right-4 w-10 h-10 border-b border-r"
                style={{ borderColor: "rgba(154,123,79,0.5)" }}
              />
            </div>

            {/* Text side */}
            <div
              className="flex flex-col justify-center p-10 lg:p-14"
              style={{
                backgroundColor: "oklch(0.28 0.12 258)",
              }}
            >
              <span
                className="block text-xs font-semibold uppercase mb-2"
                style={{ color: "oklch(0.72 0.06 55)", letterSpacing: "0.16em" }}
              >
                Founding Partner
              </span>
              <h3
                className="font-display text-4xl font-semibold italic mb-2"
                style={{ color: "oklch(0.97 0.005 80)" }}
              >
                Robert Halasz
              </h3>
              <div className="bronze-rule mb-6" />
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: "oklch(0.78 0.01 80)" }}
              >
                Robert Halasz brings more than 15 years of real estate experience and over 10 years in advisory, investment consulting, and strategic market development across multiple continents. His background combines real estate development expertise, market-entry strategy, investor alignment, and transaction-driven consulting — with a particular focus on complex opportunities connecting the UAE to international capital and development ecosystems.
              </p>
              <p
                className="text-sm leading-relaxed mb-8"
                style={{ color: "oklch(0.78 0.01 80)" }}
              >
                Through Aviora Consultancy, he advises developers, investors, and strategic partners on land opportunities, feasibility, capital structuring, luxury residential repositioning, redevelopment strategy, and AI-guided real estate decision-making.
              </p>

              {/* Credentials */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  "15+ Years in Real Estate",
                  "10+ Years Advisory & Investment",
                  "UAE & Cross-Border Focus",
                  "Luxury Residential & Land",
                  "Capital Strategy",
                  "AI-Guided Decision-Making",
                ].map((c) => (
                  <div key={c} className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: "var(--bronze)" }} />
                    <span className="text-xs leading-snug" style={{ color: "oklch(0.68 0.01 80)" }}>{c}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <a
                  href="mailto:info@aviora.ae"
                  className="btn-bronze text-xs"
                  style={{ display: "inline-flex" }}
                >
                  Contact Robert
                </a>
              </div>
            </div>
          </div>
        </RevealDiv>
      </div>
    </section>
  );
}
