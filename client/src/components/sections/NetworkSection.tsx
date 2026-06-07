/**
 * AVIORA — Selected Network Section
 * Design: Discreet, legally careful
 * Elegant wordmark wall with slow marquee
 * NOT presented as testimonials — "selected relationships" framing
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

const NETWORK = [
  { name: "Dezer Development", region: "USA" },
  { name: "Ohana Development", region: "UAE" },
  { name: "Zenith", region: "UAE" },
  { name: "FAM Holding", region: "UAE" },
  { name: "Apart Group", region: "Georgia" },
  { name: "Tasceken Holding", region: "Turkey" },
  { name: "Greenbull Group", region: "UAE" },
  { name: "R. Evolution", region: "UAE" },
];

// Duplicate for seamless marquee
const MARQUEE_ITEMS = [...NETWORK, ...NETWORK];

export default function NetworkSection() {
  return (
    <section
      id="network"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "oklch(0.97 0.01 80)" }}
    >
      <div className="container">
        <RevealDiv className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bronze-rule" />
            <span className="section-label">Market Relationships</span>
          </div>
          <h2
            className="display-headline mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", maxWidth: "600px" }}
          >
            Selected Relationships and Market Network
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ color: "oklch(0.42 0.01 65)", maxWidth: "640px" }}
          >
            In the course of advisory, development, and capital-related work, Aviora Consultancy and its leadership have built relationships across a range of respected developers, investment groups, and market participants. References are presented on a non-exhaustive and non-confidential basis.
          </p>
        </RevealDiv>
      </div>

      {/* Marquee — full width, outside container */}
      <div
        className="relative overflow-hidden py-10 mt-8"
        style={{
          borderTop: "1px solid oklch(0.88 0.01 80)",
          borderBottom: "1px solid oklch(0.88 0.01 80)",
        }}
      >
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to right, oklch(0.97 0.01 80), transparent)",
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to left, oklch(0.97 0.01 80), transparent)",
          }}
        />

        <div className="flex animate-marquee whitespace-nowrap">
          {MARQUEE_ITEMS.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 mx-12 flex-shrink-0"
            >
              <div
                className="w-1 h-1 rounded-full"
                style={{ backgroundColor: "var(--bronze)" }}
              />
              <div className="flex flex-col">
                <span
                  className="font-display text-xl font-semibold italic"
                  style={{ color: "oklch(0.25 0.01 65)" }}
                >
                  {item.name}
                </span>
                <span
                  className="text-xs"
                  style={{ color: "oklch(0.60 0.01 65)", letterSpacing: "0.08em" }}
                >
                  {item.region}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Editorial list */}
      <div className="container mt-16">
        <RevealDiv>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px">
            {NETWORK.map((item, i) => (
              <div
                key={item.name}
                className="p-6"
                style={{
                  borderBottom: "1px solid oklch(0.88 0.01 80)",
                  borderRight: "1px solid oklch(0.88 0.01 80)",
                }}
              >
                <span
                  className="block text-xs font-semibold uppercase mb-2"
                  style={{ color: "var(--bronze)", letterSpacing: "0.12em" }}
                >
                  {item.region}
                </span>
                <span
                  className="font-display text-lg font-semibold italic"
                  style={{ color: "oklch(0.22 0.01 65)" }}
                >
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </RevealDiv>
      </div>
    </section>
  );
}
