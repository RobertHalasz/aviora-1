/**
 * AVIORA — Markets Section
 * Design: Dark cobalt contrast section with aerial Dubai image
 * Editorial market blocks with location tags
 * Sub-focus areas listed elegantly
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

const MARKETS = [
  {
    city: "Dubai",
    region: "UAE",
    description: "Primary advisory focus. Luxury residential, land transactions, distressed opportunities, and villa redevelopment across Dubai's premium segments.",
    focus: ["Al Barari", "Luxury Villas", "Land Transactions", "Distressed Assets", "Villa Redevelopment"],
  },
  {
    city: "UAE",
    region: "Wider Emirates",
    description: "Strategic land advisory, development capital, and investor alignment across the broader UAE market.",
    focus: ["Land Opportunities", "Development Capital", "Investor Alignment"],
  },
  {
    city: "Miami",
    region: "United States",
    description: "Cross-border capital corridor connecting UAE investors and developers to Miami's premium residential and commercial market.",
    focus: ["Cross-Border Capital", "Developer Introductions", "Investor Matching"],
  },
  {
    city: "Global",
    region: "Capital Corridors",
    description: "Advisory relationships spanning Turkey, Georgia, and international capital networks aligned with UAE market opportunities.",
    focus: ["Turkey", "Georgia", "International Capital"],
  },
];

export default function MarketsSection() {
  return (
    <section
      id="markets"
      className="relative overflow-hidden"
      style={{ backgroundColor: "oklch(0.22 0.10 258)" }}
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663706999420/bt2aUCx6ZRoJ6xtRuMrVHh/markets-dubai-Pa8XGpkqPp8mu8KwcksBhY.webp"
          alt="Aerial Dubai luxury residential district"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, oklch(0.18 0.12 258 / 0.95) 0%, oklch(0.22 0.10 258 / 0.88) 100%)",
          }}
        />
      </div>

      <div className="container relative z-10 py-24 lg:py-32">
        {/* Section header */}
        <RevealDiv className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="bronze-rule" />
            <span className="section-label" style={{ color: "oklch(0.72 0.06 55)" }}>
              Geographic Focus
            </span>
          </div>
          <h2
            className="display-headline mb-6"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              color: "oklch(0.97 0.005 80)",
              maxWidth: "600px",
            }}
          >
            Markets & Specialisation
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ color: "oklch(0.78 0.01 80)", maxWidth: "600px" }}
          >
            With a core concentration in Dubai and the UAE, Aviora Consultancy advises on luxury residential markets, land transactions, capital strategy, and redevelopment opportunities while maintaining strong cross-border alignment with Miami and other global investor networks.
          </p>
        </RevealDiv>

        {/* Market blocks */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px">
          {MARKETS.map((market, i) => (
            <RevealDiv key={market.city} delay={i * 80}>
              <div
                className="p-8 h-full flex flex-col"
                style={{
                  backgroundColor: "oklch(1 0 0 / 0.04)",
                  borderTop: "1px solid oklch(1 0 0 / 0.12)",
                  transition: "background-color 250ms",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.backgroundColor = "oklch(1 0 0 / 0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.backgroundColor = "oklch(1 0 0 / 0.04)";
                }}
              >
                <div className="mb-6">
                  <span
                    className="block text-xs font-semibold uppercase mb-1"
                    style={{ color: "oklch(0.72 0.06 55)", letterSpacing: "0.14em" }}
                  >
                    {market.region}
                  </span>
                  <h3
                    className="font-display text-3xl font-semibold italic"
                    style={{ color: "oklch(0.97 0.005 80)" }}
                  >
                    {market.city}
                  </h3>
                </div>
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: "oklch(0.72 0.01 80)" }}
                >
                  {market.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {market.focus.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1"
                      style={{
                        backgroundColor: "oklch(1 0 0 / 0.07)",
                        color: "oklch(0.82 0.01 80)",
                        border: "1px solid oklch(1 0 0 / 0.12)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </RevealDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
