/**
 * AVIORA CONSULTANCY — Header Component
 * Design: Warm Mineral Light / Quiet Luxury
 * - Cobalt blue background (matching logo) — always solid
 * - Logo larger and clearly visible against cobalt
 * - Nav links in white/cream, bronze hover underline
 * - CTA button in bronze
 * - Mobile: hamburger with slide-down menu
 */

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Advisory", href: "#services" },
  { label: "Markets", href: "#markets" },
  { label: "Founder", href: "#founder" },
  { label: "Network", href: "#network" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#contact" },
];

// Cobalt blue from logo: oklch(0.42 0.13 258) ≈ #2B4A8A
const COBALT = "oklch(0.38 0.14 258)";
const COBALT_BORDER = "oklch(1 0 0 / 0.10)";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: COBALT,
        borderBottom: scrolled ? `1px solid ${COBALT_BORDER}` : "1px solid transparent",
        boxShadow: scrolled ? "0 2px 24px oklch(0 0 0 / 0.18)" : "none",
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-[88px]">
          {/* Logo — larger, clearly visible on cobalt */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
            className="flex items-center gap-3 flex-shrink-0"
          >
              <img
              src="/assets/aviora-logo.png"
              alt="Aviora Consultancy"
              className="h-20 w-auto"
              style={{ border: 'none', outline: 'none' }}
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="relative text-xs font-semibold uppercase tracking-widest transition-colors duration-200 group pb-0.5"
                style={{
                  color: "oklch(0.92 0.005 80)",
                  letterSpacing: "0.12em",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(1 0 0)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.92 0.005 80)")}
              >
                {link.label}
                <span
                  className="absolute bottom-0 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: "var(--bronze)" }}
                />
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => handleNavClick("#contact")}
              className="btn-bronze text-xs"
            >
              Schedule a Consultation
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className="block w-6 h-px transition-all duration-300"
              style={{
                backgroundColor: "oklch(0.92 0.005 80)",
                transform: mobileOpen ? "rotate(45deg) translate(3px, 3px)" : "none",
              }}
            />
            <span
              className="block w-6 h-px transition-all duration-300"
              style={{
                backgroundColor: "oklch(0.92 0.005 80)",
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-6 h-px transition-all duration-300"
              style={{
                backgroundColor: "oklch(0.92 0.005 80)",
                transform: mobileOpen ? "rotate(-45deg) translate(3px, -3px)" : "none",
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className="lg:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: mobileOpen ? "400px" : "0",
          backgroundColor: "oklch(0.34 0.14 258)",
          borderBottom: mobileOpen ? `1px solid ${COBALT_BORDER}` : "none",
        }}
      >
        <div className="container py-6 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left text-xs font-semibold uppercase transition-colors duration-200"
              style={{
                color: "oklch(0.85 0.005 80)",
                letterSpacing: "0.12em",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(1 0 0)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.85 0.005 80)")}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#contact")}
            className="btn-bronze text-xs mt-2 self-start"
          >
            Schedule a Consultation
          </button>
        </div>
      </div>
    </header>
  );
}
