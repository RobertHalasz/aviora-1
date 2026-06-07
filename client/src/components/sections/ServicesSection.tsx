/**
 * AVIORA — Services Section
 * Includes: Intro statement + asymmetric services grid
 * Design: Warm cream base, one featured large card + 7 supporting
 * No cartoon icons, subtle numeric labels, bronze hover effects
 */

import { useEffect, useRef } from "react";

const SERVICES = [
  {
    id: "01",
    title: "AI-Based Real Estate Consultancy",
    description: "Data-informed strategic guidance for acquisitions, repositioning, redevelopment, and investment selection.",
    featured: true,
  },
  {
    id: "02",
    title: "Investment Advisory",
    description: "Full-service real estate investment advice across the UAE and international markets for private and institutional capital.",
    featured: false,
  },
  {
    id: "03",
    title: "Cross-Border Capital Raising",
    description: "Advisory support for real estate developments seeking aligned regional and international capital.",
    featured: false,
  },
  {
    id: "04",
    title: "JV Formation Advisory",
    description: "Structuring strategic partnerships between landowners, developers, operators, and capital partners.",
    featured: false,
  },
  {
    id: "05",
    title: "Land Sales Advisory",
    description: "Targeted advisory on land opportunities in the UAE, including highest-and-best-use positioning and investor alignment.",
    featured: false,
  },
  {
    id: "06",
    title: "Feasibility Studies",
    description: "Commercial, market, and strategic feasibility analysis to support land acquisition, development planning, and project execution.",
    featured: false,
  },
  {
    id: "07",
    title: "Luxury & Distressed Opportunities",
    description: "Curated advisory on luxury villas, distressed deals, and high-potential residential assets across Dubai.",
    featured: false,
  },
  {
    id: "08",
    title: "Redevelopment Strategy",
    description: "Consulting for villa redevelopment and luxury fix-and-flip strategies tailored to Dubai's premium residential segment.",
    featured: false,
  },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
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
  }, []);
  return ref;
}

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

export default function ServicesSection() {
  const featured = SERVICES[0];
  const rest = SERVICES.slice(1);

  return (
    <>
      {/* Intro Statement */}
      <section
        className="py-24 lg:py-32"
        style={{ backgroundColor: "oklch(0.99 0.005 80)" }}
      >
        <div className="container">
          <RevealDiv className="max-w-3xl mx-auto text-center">
            <div className="bronze-rule mx-auto mb-8" />
            <p
              className="display-headline"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontStyle: "italic" }}
            >
              Aviora Consultancy is a boutique advisory platform operating at the intersection of real estate, capital, data, and execution. We advise on land, luxury residential opportunities, redevelopment strategies, cross-border capital raises, feasibility, and joint venture structures for clients seeking intelligent and discreet market positioning.
            </p>
          </RevealDiv>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-24 lg:py-32"
        style={{ backgroundColor: "oklch(0.97 0.01 80)" }}
      >
        <div className="container">
          {/* Section header */}
          <RevealDiv className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="bronze-rule" />
              <span className="section-label">Advisory Services</span>
            </div>
            <h2
              className="display-headline"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", maxWidth: "600px" }}
            >
              Where We Add Strategic Value
            </h2>
          </RevealDiv>

          {/* Asymmetric grid */}
          <div className="grid lg:grid-cols-3 gap-0.5">
            {/* Featured large card */}
            <RevealDiv
              delay={0}
              className="lg:col-span-1 lg:row-span-2"
            >
              <div
                className="h-full p-10 flex flex-col justify-between group cursor-default"
                style={{
                  backgroundColor: "oklch(0.28 0.12 258)",
                  minHeight: "380px",
                  transition: "background-color 300ms",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.backgroundColor = "oklch(0.32 0.13 258)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.backgroundColor = "oklch(0.28 0.12 258)";
                }}
              >
                <div>
                  <span
                    className="block text-7xl font-display font-semibold italic mb-8"
                    style={{ color: "rgba(154, 123, 79, 0.25)", lineHeight: 1 }}
                  >
                    {featured.id}
                  </span>
                  <h3
                    className="font-display text-2xl font-semibold italic mb-4"
                    style={{ color: "oklch(0.97 0.005 80)", lineHeight: 1.2 }}
                  >
                    {featured.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "oklch(0.78 0.01 80)" }}
                  >
                    {featured.description}
                  </p>
                </div>
                <div
                  className="mt-8 w-8 h-px transition-all duration-300 group-hover:w-16"
                  style={{ backgroundColor: "var(--bronze)" }}
                />
              </div>
            </RevealDiv>

            {/* Supporting cards */}
            {rest.map((service, i) => (
              <RevealDiv key={service.id} delay={(i + 1) * 60}>
                <div
                  className="p-8 flex flex-col justify-between group cursor-default h-full"
                  style={{
                    backgroundColor: "oklch(0.99 0.005 80)",
                    borderLeft: "1px solid oklch(0.88 0.01 80)",
                    borderBottom: "1px solid oklch(0.88 0.01 80)",
                    minHeight: "180px",
                    transition: "background-color 250ms",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.backgroundColor = "oklch(0.96 0.01 80)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.backgroundColor = "oklch(0.99 0.005 80)";
                  }}
                >
                  <div>
                    <span
                      className="block text-xs font-semibold mb-3"
                      style={{ color: "oklch(0.75 0.06 55)", letterSpacing: "0.1em" }}
                    >
                      {service.id}
                    </span>
                    <h3
                      className="font-display text-lg font-semibold italic mb-2"
                      style={{ color: "oklch(0.18 0.01 65)", lineHeight: 1.25 }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "oklch(0.45 0.01 65)" }}
                    >
                      {service.description}
                    </p>
                  </div>
                  <div
                    className="mt-4 w-4 h-px transition-all duration-300 group-hover:w-10"
                    style={{ backgroundColor: "var(--bronze)" }}
                  />
                </div>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
