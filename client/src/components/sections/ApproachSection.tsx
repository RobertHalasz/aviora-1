/**
 * AVIORA — Approach Section
 * Design: Dark cobalt background, 5-stage process
 * Editorial horizontal process with numbered stages
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

const STAGES = [
  {
    number: "01",
    label: "Evaluate",
    description: "Evaluate the asset, land, market, or mandate with rigorous commercial and strategic analysis.",
  },
  {
    number: "02",
    label: "Position",
    description: "Position the opportunity commercially and strategically for maximum market resonance and investor alignment.",
  },
  {
    number: "03",
    label: "Structure",
    description: "Structure the capital, JV, or advisory framework to reflect the opportunity's risk profile and stakeholder objectives.",
  },
  {
    number: "04",
    label: "Align",
    description: "Align counterparties, investors, and execution stakeholders around a coherent and actionable transaction framework.",
  },
  {
    number: "05",
    label: "Execute",
    description: "Execute with discretion, market intelligence, and a commitment to outcome-oriented advisory support.",
  },
];

export default function ApproachSection() {
  return (
    <section
      id="approach"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "oklch(0.20 0.11 258)" }}
    >
      <div className="container">
        {/* Section header */}
        <RevealDiv className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="bronze-rule" />
            <span className="section-label" style={{ color: "oklch(0.72 0.06 55)" }}>
              Our Process
            </span>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <h2
              className="display-headline"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", color: "oklch(0.97 0.005 80)" }}
            >
              The Aviora Approach
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ color: "oklch(0.72 0.01 80)" }}
            >
              Our work combines market understanding, strategic framing, financial logic, and practical execution support. Whether advising on land, capital, villas, redevelopment, or investment selection, the objective is always to improve decision quality and transaction readiness.
            </p>
          </div>
        </RevealDiv>

        {/* Process stages */}
        <div className="grid md:grid-cols-5 gap-px">
          {STAGES.map((stage, i) => (
            <RevealDiv key={stage.number} delay={i * 80}>
              <div
                className="p-8 h-full flex flex-col group"
                style={{
                  borderTop: "1px solid oklch(1 0 0 / 0.12)",
                  backgroundColor: "oklch(1 0 0 / 0.03)",
                  transition: "background-color 250ms",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.backgroundColor = "oklch(1 0 0 / 0.07)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.backgroundColor = "oklch(1 0 0 / 0.03)";
                }}
              >
                {/* Number */}
                <span
                  className="block text-5xl font-display font-semibold italic mb-4"
                  style={{ color: "oklch(1 0 0 / 0.12)", lineHeight: 1 }}
                >
                  {stage.number}
                </span>
                {/* Label */}
                <h3
                  className="font-display text-2xl font-semibold italic mb-4"
                  style={{ color: "oklch(0.97 0.005 80)" }}
                >
                  {stage.label}
                </h3>
                {/* Description */}
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "oklch(0.68 0.01 80)" }}
                >
                  {stage.description}
                </p>
                {/* Bronze accent line */}
                <div
                  className="mt-auto pt-6 w-4 h-px transition-all duration-300 group-hover:w-10"
                  style={{ backgroundColor: "var(--bronze)" }}
                />
              </div>
            </RevealDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
