/**
 * AVIORA — Contact Section
 * Design: Clean, premium, direct
 * Contact form with area of interest dropdown
 * Split layout: text left, form right
 */

import { useState, useEffect, useRef } from "react";

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

const AREAS_OF_INTEREST = [
  "Investment Advisory",
  "Land Opportunities",
  "Capital Raising",
  "JV Advisory",
  "Luxury Residential",
  "Redevelopment Consulting",
  "Feasibility Studies",
  "General Inquiry",
];

interface FormState {
  name: string;
  email: string;
  company: string;
  phone: string;
  area: string;
  message: string;
}

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    phone: "",
    area: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Compose mailto link
    const subject = encodeURIComponent(`Advisory Inquiry — ${form.area || "General"} — ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nPhone: ${form.phone}\nArea of Interest: ${form.area}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:info@aviora.ae?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const inputStyle = {
    width: "100%",
    padding: "0.875rem 1rem",
    backgroundColor: "oklch(0.99 0.005 80)",
    border: "1px solid oklch(0.85 0.01 80)",
    color: "oklch(0.22 0.01 65)",
    fontSize: "0.875rem",
    outline: "none",
    transition: "border-color 200ms",
    fontFamily: "Inter, sans-serif",
  };

  return (
    <section
      id="contact"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "oklch(0.97 0.01 80)" }}
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Info */}
          <RevealDiv delay={0}>
            <div className="flex items-center gap-3 mb-4">
              <div className="bronze-rule" />
              <span className="section-label">Get in Touch</span>
            </div>
            <h2
              className="display-headline mb-6"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
            >
              Contact Aviora Consultancy
            </h2>
            <p
              className="text-base leading-relaxed mb-10"
              style={{ color: "oklch(0.42 0.01 65)", maxWidth: "440px" }}
            >
              For confidential discussions regarding land, capital, luxury residential opportunities, or strategic advisory mandates, contact Aviora Consultancy directly.
            </p>

            {/* Contact details */}
            <div className="space-y-6 mb-10">
              <div>
                <p
                  className="text-xs font-semibold uppercase mb-1"
                  style={{ color: "oklch(0.60 0.01 65)", letterSpacing: "0.14em" }}
                >
                  Principal Advisor
                </p>
                <p
                  className="font-display text-xl font-semibold italic"
                  style={{ color: "oklch(0.22 0.01 65)" }}
                >
                  Robert Halasz
                </p>
              </div>
              <div>
                <p
                  className="text-xs font-semibold uppercase mb-1"
                  style={{ color: "oklch(0.60 0.01 65)", letterSpacing: "0.14em" }}
                >
                  Email
                </p>
                <a
                  href="mailto:info@aviora.ae"
                  className="text-base transition-colors duration-200"
                  style={{ color: "var(--bronze)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.72 0.06 55)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--bronze)")}
                >
                  info@aviora.ae
                </a>
              </div>
              <div>
                <p
                  className="text-xs font-semibold uppercase mb-1"
                  style={{ color: "oklch(0.60 0.01 65)", letterSpacing: "0.14em" }}
                >
                  Location
                </p>
                <p className="text-base" style={{ color: "oklch(0.38 0.01 65)" }}>
                  Dubai, United Arab Emirates
                </p>
              </div>
            </div>

            {/* Advisory areas */}
            <div
              className="p-6"
              style={{
                borderLeft: "2px solid var(--bronze)",
                backgroundColor: "oklch(0.95 0.008 80)",
              }}
            >
              <p
                className="text-xs font-semibold uppercase mb-3"
                style={{ color: "oklch(0.55 0.01 65)", letterSpacing: "0.14em" }}
              >
                Advisory Areas
              </p>
              <div className="flex flex-wrap gap-2">
                {AREAS_OF_INTEREST.map((area) => (
                  <span
                    key={area}
                    className="text-xs px-3 py-1"
                    style={{
                      backgroundColor: "oklch(0.92 0.008 80)",
                      color: "oklch(0.38 0.01 65)",
                      border: "1px solid oklch(0.85 0.01 80)",
                    }}
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </RevealDiv>

          {/* Right: Form */}
          <RevealDiv delay={150}>
            {submitted ? (
              <div
                className="flex flex-col items-center justify-center h-full py-16 text-center"
                style={{ minHeight: "400px" }}
              >
                <div className="bronze-rule mx-auto mb-6" />
                <h3
                  className="display-headline text-2xl mb-4"
                  style={{ color: "oklch(0.22 0.01 65)" }}
                >
                  Inquiry Received
                </h3>
                <p style={{ color: "oklch(0.42 0.01 65)" }}>
                  Thank you for reaching out. Aviora Consultancy will be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-xs font-semibold uppercase mb-2"
                      style={{ color: "oklch(0.55 0.01 65)", letterSpacing: "0.12em" }}
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Full name"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "var(--bronze)")}
                      onBlur={(e) => (e.target.style.borderColor = "oklch(0.85 0.01 80)")}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs font-semibold uppercase mb-2"
                      style={{ color: "oklch(0.55 0.01 65)", letterSpacing: "0.12em" }}
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "var(--bronze)")}
                      onBlur={(e) => (e.target.style.borderColor = "oklch(0.85 0.01 80)")}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-xs font-semibold uppercase mb-2"
                      style={{ color: "oklch(0.55 0.01 65)", letterSpacing: "0.12em" }}
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Organisation"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "var(--bronze)")}
                      onBlur={(e) => (e.target.style.borderColor = "oklch(0.85 0.01 80)")}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs font-semibold uppercase mb-2"
                      style={{ color: "oklch(0.55 0.01 65)", letterSpacing: "0.12em" }}
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+971 ..."
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "var(--bronze)")}
                      onBlur={(e) => (e.target.style.borderColor = "oklch(0.85 0.01 80)")}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-xs font-semibold uppercase mb-2"
                    style={{ color: "oklch(0.55 0.01 65)", letterSpacing: "0.12em" }}
                  >
                    Area of Interest
                  </label>
                  <select
                    name="area"
                    value={form.area}
                    onChange={handleChange}
                    style={{
                      ...inputStyle,
                      appearance: "none",
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%239A7B4F' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 1rem center",
                      paddingRight: "2.5rem",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--bronze)")}
                    onBlur={(e) => (e.target.style.borderColor = "oklch(0.85 0.01 80)")}
                  >
                    <option value="">Select an area</option>
                    {AREAS_OF_INTEREST.map((area) => (
                      <option key={area} value={area}>
                        {area}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    className="block text-xs font-semibold uppercase mb-2"
                    style={{ color: "oklch(0.55 0.01 65)", letterSpacing: "0.12em" }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Briefly describe your advisory requirement or opportunity..."
                    style={{
                      ...inputStyle,
                      resize: "vertical",
                      minHeight: "120px",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--bronze)")}
                    onBlur={(e) => (e.target.style.borderColor = "oklch(0.85 0.01 80)")}
                  />
                </div>

                <button type="submit" className="btn-bronze w-full justify-center py-4">
                  Submit Inquiry
                </button>

                <p
                  className="text-xs text-center"
                  style={{ color: "oklch(0.60 0.01 65)" }}
                >
                  All inquiries are treated with strict confidentiality.
                </p>
              </form>
            )}
          </RevealDiv>
        </div>
      </div>
    </section>
  );
}
