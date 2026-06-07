/**
 * AVIORA — Footer Component
 * Design: Minimal, dark cobalt, elegant
 * Logo, descriptor, nav links, email, legal disclaimer
 */

const NAV_LINKS = [
  { label: "Advisory", href: "#services" },
  { label: "Markets", href: "#markets" },
  { label: "Founder", href: "#founder" },
  { label: "Network", href: "#network" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <footer
      style={{ backgroundColor: "oklch(0.16 0.10 258)" }}
    >
      <div className="container py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img
              src="/manus-storage/aviora-logo-1_25f55cf2.png"
              alt="Aviora Consultancy"
              className="h-12 w-auto mb-4"
            />
            <p
              className="text-xs font-semibold uppercase mb-3"
              style={{ color: "oklch(0.72 0.06 55)", letterSpacing: "0.14em" }}
            >
              AI-Based Real Estate Advisory
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "oklch(0.62 0.01 80)" }}
            >
              Strategic real estate advisory across Dubai, the UAE, and global capital corridors.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p
              className="text-xs font-semibold uppercase mb-5"
              style={{ color: "oklch(0.55 0.01 80)", letterSpacing: "0.14em" }}
            >
              Navigation
            </p>
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-sm transition-colors duration-200"
                  style={{ color: "oklch(0.62 0.01 80)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.72 0.06 55)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.62 0.01 80)")}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-xs font-semibold uppercase mb-5"
              style={{ color: "oklch(0.55 0.01 80)", letterSpacing: "0.14em" }}
            >
              Contact
            </p>
            <div className="space-y-3">
              <div>
                <p className="text-xs mb-1" style={{ color: "oklch(0.50 0.01 80)" }}>
                  Principal Advisor
                </p>
                <p className="text-sm" style={{ color: "oklch(0.82 0.01 80)" }}>
                  Robert Halasz
                </p>
              </div>
              <div>
                <p className="text-xs mb-1" style={{ color: "oklch(0.50 0.01 80)" }}>
                  Email
                </p>
                <a
                  href="mailto:info@aviora.ae"
                  className="text-sm transition-colors duration-200"
                  style={{ color: "oklch(0.72 0.06 55)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.82 0.06 55)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.72 0.06 55)")}
                >
                  info@aviora.ae
                </a>
              </div>
              <div>
                <p className="text-xs mb-1" style={{ color: "oklch(0.50 0.01 80)" }}>
                  Location
                </p>
                <p className="text-sm" style={{ color: "oklch(0.62 0.01 80)" }}>
                  Dubai, United Arab Emirates
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="w-full h-px mb-8"
          style={{ backgroundColor: "oklch(1 0 0 / 0.08)" }}
        />

        {/* Legal */}
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <p
            className="text-xs"
            style={{ color: "oklch(0.42 0.01 80)", maxWidth: "600px", lineHeight: 1.6 }}
          >
            Information presented is for general corporate and advisory positioning and does not constitute an offer, solicitation, or formal investment advice. Aviora Consultancy operates in the United Arab Emirates.
          </p>
          <p
            className="text-xs flex-shrink-0"
            style={{ color: "oklch(0.38 0.01 80)" }}
          >
            © {new Date().getFullYear()} Aviora Consultancy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
