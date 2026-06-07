/**
 * AVIORA — Founder Section
 * Design: Split layout — image left, text + credentials right
 * Personal but senior, not promotional
 * Cobalt blue accent section
 */

import { useEffect, useRef } from "react";

function RevealDiv({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transitionDelay = `${delay}ms`;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

const CREDENTIALS = [
  "15+ Years in Real Estate",
  "10+ Years in Advisory & Investment Consulting",
  "UAE and Cross-Border Focus",
  "Luxury Residential, Land, Capital Strategy",
  "International Market Development",
  "AI-Guided Real Estate Decision-Making",
];

export default function FounderSection() {
  return (
    <section
      id="founder"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "oklch(0.99 0.005 80)" }}
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Image */}
          <RevealDiv delay={0}>
            <div className="relative">
              <div
                className="relative overflow-hidden"
                style={{
                  border: "1px solid rgba(154, 123, 79, 0.2)",
                  aspectRatio: "3/4",
                  maxHeight: "600px",
                  backgroundColor: "oklch(0.94 0.01 80)",
                }}
              >
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663706999420/vdHeHPJmiHUKKyJN.png"
                  alt="Robert Halasz — Principal Advisor, Aviora Consultancy"
                  className="w-full h-full object-cover object-top"
                />
                {/* Corner accents */}
                <div
                  className="absolute top-4 left-4 w-10 h-10 border-t border-l"
                  style={{ borderColor: "rgba(154, 123, 79, 0.5)" }}
                />
                <div
                  className="absolute bottom-4 right-4 w-10 h-10 border-b border-r"
                  style={{ borderColor: "rgba(154, 123, 79, 0.5)" }}
                />
              </div>
              {/* Floating credentials card */}
              <div
                className="absolute -bottom-6 -right-6 p-6 hidden lg:block"
                style={{
                  backgroundColor: "oklch(0.28 0.12 258)",
                  width: "220px",
                }}
              >
                <p
                  className="text-xs font-semibold uppercase mb-4"
                  style={{ color: "oklch(0.72 0.06 55)", letterSpacing: "0.14em" }}
                >
                  Credentials
                </p>
                {CREDENTIALS.slice(0, 4).map((cred) => (
                  <div key={cred} className="flex items-start gap-2 mb-2">
                    <div
                      className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0"
                      style={{ backgroundColor: "var(--bronze)" }}
                    />
                    <span
                      className="text-xs leading-snug"
                      style={{ color: "oklch(0.82 0.01 80)" }}
                    >
                      {cred}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </RevealDiv>

          {/* Right: Text */}
          <RevealDiv delay={150} className="lg:pt-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bronze-rule" />
              <span className="section-label">The Founder</span>
            </div>

            <h2
              className="display-headline mb-8"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
            >
              Robert Halasz
            </h2>

            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "oklch(0.38 0.01 65)" }}
            >
              Robert Halasz brings more than 15 years of real estate experience and over 10 years in advisory, investment consulting, and strategic market development across multiple continents. His background combines real estate development expertise, market-entry strategy, investor alignment, and transaction-driven consulting — with a particular focus on complex opportunities connecting the UAE to international capital and development ecosystems.
            </p>

            <p
              className="text-base leading-relaxed mb-10"
              style={{ color: "oklch(0.38 0.01 65)" }}
            >
              Through Aviora Consultancy, he advises developers, investors, and strategic partners on land opportunities, feasibility, capital structuring, luxury residential repositioning, redevelopment strategy, and AI-guided real estate decision-making. The firm's approach is grounded in discretion, commercial logic, and execution-oriented market intelligence.
            </p>

            {/* Credentials list — visible on mobile */}
            <div className="lg:hidden mb-10">
              <p
                className="text-xs font-semibold uppercase mb-4"
                style={{ color: "oklch(0.72 0.06 55)", letterSpacing: "0.14em" }}
              >
                Credentials
              </p>
              {CREDENTIALS.map((cred) => (
                <div key={cred} className="flex items-start gap-3 mb-3">
                  <div
                    className="w-1 h-1 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "var(--bronze)" }}
                  />
                  <span className="text-sm" style={{ color: "oklch(0.38 0.01 65)" }}>
                    {cred}
                  </span>
                </div>
              ))}
            </div>

            {/* Credentials — desktop sidebar style */}
            <div className="hidden lg:block">
              <div
                className="p-6"
                style={{
                  borderLeft: "2px solid var(--bronze)",
                  backgroundColor: "oklch(0.95 0.008 80)",
                }}
              >
                <p
                  className="text-xs font-semibold uppercase mb-4"
                  style={{ color: "oklch(0.55 0.01 65)", letterSpacing: "0.14em" }}
                >
                  Areas of Focus
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {CREDENTIALS.map((cred) => (
                    <div key={cred} className="flex items-start gap-2">
                      <div
                        className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0"
                        style={{ backgroundColor: "var(--bronze)" }}
                      />
                      <span className="text-xs leading-snug" style={{ color: "oklch(0.38 0.01 65)" }}>
                        {cred}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={() => {
                  const el = document.querySelector("#contact");
                  if (el) {
                    const top = el.getBoundingClientRect().top + window.scrollY - 80;
                    window.scrollTo({ top, behavior: "smooth" });
                  }
                }}
                className="btn-bronze-outline"
              >
                Discuss an Opportunity
              </button>
            </div>
          </RevealDiv>
        </div>
      </div>
    </section>
  );
}
