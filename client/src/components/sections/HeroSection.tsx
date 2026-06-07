/**
 * AVIORA — Hero Section
 * Design: Full-screen split layout
 * Left: Headline, subheadline, CTAs, trust line, proof points
 * Right: Premium architectural image with parallax
 * Background: Warm cream with subtle grid texture
 */

import { useEffect, useRef } from "react";

export default function HeroSection() {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (imgRef.current) {
        const scrollY = window.scrollY;
        imgRef.current.style.transform = `translateY(${scrollY * 0.18}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "oklch(0.97 0.01 80)" }}
    >
      {/* Subtle dot grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, oklch(0.75 0.01 65 / 0.25) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen py-32 lg:py-0">
          {/* Left: Text Content */}
          <div className="flex flex-col justify-center">
            {/* Section label */}
            <div className="flex items-center gap-3 mb-8 animate-fade-up" style={{ animationDelay: "0ms" }}>
              <div className="bronze-rule" />
              <span className="section-label">UAE-Based Strategic Advisory</span>
            </div>

            {/* Headline */}
            <h1
              className="display-headline mb-6 animate-fade-up"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.25rem)",
                animationDelay: "100ms",
              }}
            >
              AI-Guided Real Estate Advisory for Complex Capital, Land, and Luxury Property Decisions
            </h1>

            {/* Subheadline */}
            <p
              className="text-base leading-relaxed mb-10 animate-fade-up"
              style={{
                color: "oklch(0.42 0.01 65)",
                maxWidth: "520px",
                animationDelay: "200ms",
              }}
            >
              Aviora Consultancy advises developers, investors, and strategic partners on land, luxury residential opportunities, redevelopment strategy, feasibility, joint ventures, and cross-border capital flows — with a strong focus on Dubai, the UAE, and UAE-Miami relations.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-10 animate-fade-up" style={{ animationDelay: "300ms" }}>
              <button
                onClick={() => handleScroll("#contact")}
                className="btn-bronze"
              >
                Schedule a Consultation
              </button>
              <button
                onClick={() => handleScroll("#services")}
                className="btn-bronze-outline"
              >
                Explore Advisory Services
              </button>
            </div>

            {/* Trust line */}
            <p
              className="text-xs mb-8 animate-fade-up"
              style={{
                color: "oklch(0.55 0.01 65)",
                letterSpacing: "0.02em",
                animationDelay: "400ms",
              }}
            >
              Trusted relationships across developers, capital partners, and advisory networks in the UAE, Miami, Turkey, Georgia, and beyond.
            </p>

            {/* Proof points */}
            <div className="flex flex-wrap gap-8 animate-fade-up" style={{ animationDelay: "500ms" }}>
              {[
                { value: "15+", label: "Years Real Estate Experience" },
                { value: "10+", label: "Years Advisory & Investment" },
                { value: "UAE", label: "Focused, Globally Connected" },
              ].map((point) => (
                <div key={point.value} className="flex flex-col">
                  <span
                    className="font-display text-3xl font-semibold italic"
                    style={{ color: "var(--bronze)" }}
                  >
                    {point.value}
                  </span>
                  <span
                    className="text-xs mt-1"
                    style={{ color: "oklch(0.50 0.01 65)", letterSpacing: "0.04em" }}
                  >
                    {point.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative lg:h-screen flex items-center animate-fade-up" style={{ animationDelay: "150ms" }}>
            <div
              className="relative w-full overflow-hidden"
              style={{
                height: "clamp(400px, 65vh, 700px)",
                border: "1px solid rgba(154, 123, 79, 0.2)",
              }}
            >
              <div ref={imgRef} className="absolute inset-0 scale-110">
                <img
                  src="/assets/hero-villa.jpg"
                  alt="Premium Dubai luxury villa"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Subtle overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to bottom, transparent 60%, rgba(28, 26, 23, 0.3) 100%)",
                }}
              />
              {/* Corner accent */}
              <div
                className="absolute top-4 right-4 w-12 h-12 border-t border-r"
                style={{ borderColor: "rgba(154, 123, 79, 0.5)" }}
              />
              <div
                className="absolute bottom-4 left-4 w-12 h-12 border-b border-l"
                style={{ borderColor: "rgba(154, 123, 79, 0.5)" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up" style={{ animationDelay: "800ms" }}>
        <span className="section-label" style={{ fontSize: "0.6rem" }}>Scroll</span>
        <div
          className="w-px h-10"
          style={{
            background: "linear-gradient(to bottom, var(--bronze), transparent)",
          }}
        />
      </div>
    </section>
  );
}
