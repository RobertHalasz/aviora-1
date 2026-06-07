/**
 * AVIORA — Opportunities Section
 * Design: Structured editorial layout with architectural image
 * "Where We Create Value" — verticals listed with premium styling
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

const VERTICALS = [
  "Land Sales in the UAE",
  "Luxury Villas in Dubai",
  "Al Barari Residential Opportunities",
  "Distressed Residential Deals",
  "Villa Redevelopment Consulting",
  "Luxury Fix-and-Flip Strategy",
  "Development Feasibility",
  "Developer Capital Readiness",
  "Cross-Border Investor Introductions",
];

export default function OpportunitiesSection() {
  return (
    <section
      id="opportunities"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "oklch(0.99 0.005 80)" }}
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Text */}
          <RevealDiv delay={0}>
            <div className="flex items-center gap-3 mb-4">
              <div className="bronze-rule" />
              <span className="section-label">Value Creation</span>
            </div>
            <h2
              className="display-headline mb-6"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
            >
              Where We Create Value
            </h2>
            <p
              className="text-base leading-relaxed mb-10"
              style={{ color: "oklch(0.42 0.01 65)", maxWidth: "480px" }}
            >
              Aviora Consultancy focuses on situations where insight, speed, structure, and positioning materially affect outcome — from land and feasibility to luxury acquisition strategy, distressed opportunities, redevelopment planning, and capital partner alignment.
            </p>

            {/* Verticals list */}
            <div className="space-y-0">
              {VERTICALS.map((vertical, i) => (
                <div
                  key={vertical}
                  className="flex items-center gap-4 py-4 group"
                  style={{
                    borderBottom: "1px solid oklch(0.88 0.01 80)",
                    transition: "background-color 200ms",
                  }}
                >
                  <span
                    className="text-xs font-semibold flex-shrink-0"
                    style={{ color: "oklch(0.72 0.06 55)", letterSpacing: "0.08em", minWidth: "2rem" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="font-display text-lg font-semibold italic transition-colors duration-200 group-hover:text-[oklch(0.58_0.08_55)]"
                    style={{ color: "oklch(0.22 0.01 65)" }}
                  >
                    {vertical}
                  </span>
                  <div
                    className="ml-auto w-0 h-px transition-all duration-300 group-hover:w-8"
                    style={{ backgroundColor: "var(--bronze)" }}
                  />
                </div>
              ))}
            </div>

            <div className="mt-10">
              <button
                onClick={() => {
                  const el = document.querySelector("#contact");
                  if (el) {
                    const top = el.getBoundingClientRect().top + window.scrollY - 80;
                    window.scrollTo({ top, behavior: "smooth" });
                  }
                }}
                className="btn-bronze"
              >
                Discuss an Opportunity
              </button>
            </div>
          </RevealDiv>

          {/* Right: Image */}
          <RevealDiv delay={150} className="lg:sticky lg:top-24">
            <div
              className="relative overflow-hidden"
              style={{
                border: "1px solid rgba(154, 123, 79, 0.2)",
                aspectRatio: "4/3",
              }}
            >
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663706999420/zHVtSamHUOuugcNX.jpg"
                alt="Premium architectural detail"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute top-4 right-4 w-10 h-10 border-t border-r"
                style={{ borderColor: "rgba(154, 123, 79, 0.5)" }}
              />
              <div
                className="absolute bottom-4 left-4 w-10 h-10 border-b border-l"
                style={{ borderColor: "rgba(154, 123, 79, 0.5)" }}
              />
            </div>
            {/* Caption */}
            <p
              className="mt-4 text-xs"
              style={{ color: "oklch(0.60 0.01 65)", letterSpacing: "0.06em" }}
            >
              Advisory across Dubai's premium residential and land markets
            </p>
          </RevealDiv>
        </div>
      </div>
    </section>
  );
}
