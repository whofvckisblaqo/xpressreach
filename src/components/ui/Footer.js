"use client";

import Link from "next/link";

export default function Footer() {
  const links = {
    Company: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Blog", href: "/blog" },
    ],
    Services: [
      { label: "Ocean Freight", href: "/services" },
      { label: "Air Freight", href: "/services" },
      { label: "Road Transport", href: "/services" },
      { label: "Warehousing", href: "/services" },
    ],
    Support: [
      { label: "Track Shipment", href: "/tracking" },
      { label: "Get a Quote", href: "/quote" },
      { label: "FAQs", href: "/support" },
      { label: "Contact Us", href: "/support" },
    ],
    Legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  };

  return (
    <footer>
      {/* CTA Banner */}
      <div style={{
        background: "#E84C1E",
        padding: "5rem 2rem",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url("https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1600&q=60")`,
          backgroundSize: "cover", backgroundPosition: "center",
          opacity: 0.12,
        }} />

        <div style={{
          position: "relative", zIndex: 1,
          maxWidth: "700px", margin: "0 auto", textAlign: "center",
        }}>
          <p style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "0.75rem", fontWeight: 700,
            letterSpacing: "0.2em", textTransform: "uppercase",
            color: "rgba(255,255,255,0.7)", marginBottom: "1rem",
          }}>
            Get Started Today
          </p>
          <h2 style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            fontWeight: 900, color: "#fff",
            letterSpacing: "-0.02em", lineHeight: 1.15,
            marginBottom: "1.5rem",
          }}>
            Ready to Ship Anywhere in the World?
          </h2>
          <p style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "1rem", color: "rgba(255,255,255,0.8)",
            lineHeight: 1.7, marginBottom: "2.5rem",
          }}>
            Join thousands of businesses that trust XpressReach for fast, secure, and reliable global logistics.
          </p>
          <div style={{
            display: "flex", gap: "1rem",
            justifyContent: "center", flexWrap: "wrap",
          }}>
            <Link href="/quote" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "#fff", color: "#E84C1E",
              padding: "1rem 2rem", borderRadius: "8px",
              fontFamily: "var(--font-barlow), sans-serif",
              fontWeight: 800, fontSize: "0.95rem",
              textDecoration: "none",
            }}>
              Request a Quote
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="#E84C1E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link href="/tracking" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "transparent", color: "#fff",
              padding: "1rem 2rem", borderRadius: "8px",
              border: "2px solid rgba(255,255,255,0.5)",
              fontFamily: "var(--font-barlow), sans-serif",
              fontWeight: 700, fontSize: "0.95rem",
              textDecoration: "none",
            }}>
              Track a Shipment
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div style={{ background: "#111", padding: "5rem 2rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

          {/* Top Row */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1.5fr repeat(4, 1fr)",
            gap: "3rem",
            marginBottom: "4rem",
          }} className="footer-grid">

            {/* Brand */}
            <div>
              <div style={{
                display: "flex", alignItems: "center",
                gap: "8px", marginBottom: "1.25rem",
              }}>
                <svg width="36" height="36" viewBox="0 0 38 38" fill="none">
                  <rect width="38" height="38" rx="8" fill="#E84C1E"/>
                  <path d="M8 19H30M30 19L21 10M30 19L21 28" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 13L14 19L8 25" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
                </svg>
                <div>
                  <div style={{
                    fontFamily: "var(--font-barlow), sans-serif",
                    fontWeight: 900, fontSize: "1.2rem",
                    color: "#fff", letterSpacing: "-0.02em",
                    textTransform: "uppercase",
                  }}>
                    XPRESS<span style={{ color: "#E84C1E" }}>REACH</span>
                  </div>
                  <div style={{
                    fontSize: "0.55rem", fontWeight: 700,
                    letterSpacing: "0.18em", color: "#666",
                    textTransform: "uppercase",
                    fontFamily: "var(--font-barlow), sans-serif",
                  }}>
                    Global Logistics
                  </div>
                </div>
              </div>

              <p style={{
                fontFamily: "var(--font-barlow), sans-serif",
                fontSize: "0.85rem", color: "#777",
                lineHeight: 1.8, marginBottom: "1.5rem",
                maxWidth: "260px",
              }}>
                Connecting businesses and people worldwide through fast, secure, and reliable logistics solutions.
              </p>

              {/* Social Icons */}
              <div style={{ display: "flex", gap: "12px" }}>
                {[
                  {
                    label: "Facebook",
                    path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
                  },
                  {
                    label: "Twitter",
                    path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
                  },
                  {
                    label: "LinkedIn",
                    path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z",
                  },
                  {
                    label: "Instagram",
                    path: "M17.5 6.5h.01M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z M12 16a4 4 0 100-8 4 4 0 000 8z",
                  },
                ].map((s) => (
                    <a
                    key={s.label}
                    href="#"
                    className="social-icon"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d={s.path} stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(links).map(([heading, items]) => (
              <div key={heading}>
                <h4 style={{
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontWeight: 800, fontSize: "0.85rem",
                  color: "#fff", textTransform: "uppercase",
                  letterSpacing: "0.1em", marginBottom: "1.25rem",
                }}>
                  {heading}
                </h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {items.map((item) => (
                    <li key={item.label} style={{ marginBottom: "0.75rem" }}>
                      <Link
                        href={item.href}
                        className="footer-link"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Strip */}
          <div style={{
            display: "flex", gap: "2rem", flexWrap: "wrap",
            padding: "2rem 0",
            borderTop: "1px solid rgba(255,255,255,0.07)",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            marginBottom: "2rem",
          }} className="contact-strip">
            {[
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                label: "+1 234 567 890",
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 6l-10 7L2 6" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                label: "xpressreach@outlook.com",
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="#E84C1E" strokeWidth="2"/>
                    <circle cx="12" cy="10" r="3" stroke="#E84C1E" strokeWidth="2"/>
                  </svg>
                ),
                label: "123 Global Trade Ave, New York, USA",
              },
            ].map((c) => (
              <div key={c.label} style={{
                display: "flex", alignItems: "center", gap: "10px",
              }}>
                {c.icon}
                <span style={{
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontSize: "0.85rem", color: "#777",
                }}>
                  {c.label}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div style={{
            display: "flex", justifyContent: "space-between",
            alignItems: "center", flexWrap: "wrap", gap: "1rem",
          }}>
            <p style={{
              fontFamily: "var(--font-barlow), sans-serif",
              fontSize: "0.8rem", color: "#555",
            }}>
              © {new Date().getFullYear()} XpressReach. All rights reserved.
            </p>
            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
              {[
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
                { label: "Cookies", href: "/cookies" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="footer-bottom-link"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .footer-link {
          font-family: var(--font-barlow), sans-serif;
          font-size: 0.85rem;
          color: #777;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-link:hover {
          color: #E84C1E;
        }
        .footer-bottom-link {
          font-family: var(--font-barlow), sans-serif;
          font-size: 0.8rem;
          color: #555;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-bottom-link:hover {
          color: #E84C1E;
        }
        .social-icon {
          width: 38px;
          height: 38px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s, border-color 0.2s;
          text-decoration: none;
        }
        .social-icon:hover {
          background: #E84C1E;
          border-color: #E84C1E;
        }
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 2rem !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
          .contact-strip {
            flex-direction: column !important;
            gap: 1rem !important;
          }
        }
      `}</style>
    </footer>
  );
}