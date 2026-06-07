/**
 * AVIORA CONSULTANCY — Header Component
 * Design: Warm Mineral Light / Quiet Luxury
 * - Transparent on load, solid cream on scroll
 * - Logo left, nav center-right, CTA right
 * - Bronze hover underline micro-accent
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
        backgroundColor: scrolled ? "rgba(245, 242, 238, 0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(154, 123, 79, 0.15)" : "none",
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
            className="flex items-center gap-3 flex-shrink-0"
          >
            <img
              src="/manus-storage/aviora-logo-1_25f55cf2.png"
              alt="Aviora Consultancy"
              className="h-10 w-auto"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="relative text-xs font-semibold uppercase tracking-widest text-[oklch(0.30_0.01_65)] hover:text-[oklch(0.58_0.08_55)] transition-colors duration-200 group pb-0.5"
                style={{ letterSpacing: "0.12em" }}
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
                backgroundColor: "oklch(0.30 0.01 65)",
                transform: mobileOpen ? "rotate(45deg) translate(3px, 3px)" : "none",
              }}
            />
            <span
              className="block w-6 h-px transition-all duration-300"
              style={{
                backgroundColor: "oklch(0.30 0.01 65)",
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-6 h-px transition-all duration-300"
              style={{
                backgroundColor: "oklch(0.30 0.01 65)",
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
          backgroundColor: "rgba(245, 242, 238, 0.98)",
          backdropFilter: "blur(8px)",
          borderBottom: mobileOpen ? "1px solid rgba(154, 123, 79, 0.15)" : "none",
        }}
      >
        <div className="container py-6 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left text-xs font-semibold uppercase tracking-widest text-[oklch(0.30_0.01_65)] hover:text-[oklch(0.58_0.08_55)] transition-colors duration-200"
              style={{ letterSpacing: "0.12em" }}
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
