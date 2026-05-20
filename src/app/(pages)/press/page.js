"use client";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function PressPage() {
  const pressReleases = [
    {
      title: "XpressReach Raises $50M Series B to Accelerate Global Expansion",
      date: "May 10, 2025",
      category: "Funding",
      excerpt: "XpressReach has secured $50 million in Series B funding led by Global Ventures, with participation from Horizon Capital and LogisTech Fund. The funds will be used to expand operations into 20 new markets.",
    },
    {
      title: "XpressReach Named Top 10 Logistics Innovator by FreightWeek Magazine",
      date: "April 22, 2025",
      category: "Award",
      excerpt: "FreightWeek Magazine has recognized XpressReach as one of the top 10 most innovative logistics companies globally, citing its cutting-edge tracking platform and exceptional customer service.",
    },
    {
      title: "XpressReach Launches Carbon-Neutral Shipping Initiative",
      date: "March 15, 2025",
      category: "Sustainability",
      excerpt: "XpressReach today announced its commitment to achieving carbon-neutral shipping across all operations by 2027, through fleet electrification, carbon offsets, and sustainable packaging programs.",
    },
    {
      title: "XpressReach Partners with AirGlobal to Expand Air Freight Capacity",
      date: "February 28, 2025",
      category: "Partnership",
      excerpt: "A new strategic partnership with AirGlobal Airlines will give XpressReach access to dedicated cargo space on over 200 routes worldwide, significantly expanding air freight capacity for clients.",
    },
    {
      title: "XpressReach Surpasses 15,000 Active Business Clients Worldwide",
      date: "January 14, 2025",
      category: "Milestone",
      excerpt: "XpressReach has officially crossed the 15,000 active business client milestone, reflecting strong year-on-year growth and the expanding demand for reliable global logistics solutions.",
    },
  ];

  const mediaLogos = [
    { name: "FreightWeek", abbr: "FW" },
    { name: "LogisticsToday", abbr: "LT" },
    { name: "TradeGlobal", abbr: "TG" },
    { name: "ShippingNews", abbr: "SN" },
    { name: "SupplyChainPro", abbr: "SC" },
    { name: "CargoWorld", abbr: "CW" },
  ];

  const categoryColors = {
    Funding: { bg: "#dcfce7", color: "#16a34a" },
    Award: { bg: "#fef9c3", color: "#a16207" },
    Sustainability: { bg: "#d1fae5", color: "#065f46" },
    Partnership: { bg: "#dbeafe", color: "#1d4ed8" },
    Milestone: { bg: "#FFF5F2", color: "#E84C1E" },
  };

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section style={{
        paddingTop: "70px", background: "#111",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=60)`,
          backgroundSize: "cover", backgroundPosition: "center",
          opacity: 0.12,
        }} />
        <div style={{
          position: "relative", zIndex: 1,
          maxWidth: "1280px", margin: "0 auto",
          padding: "5rem 2rem", textAlign: "center",
        }}>
          <p style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "0.75rem", fontWeight: 700,
            letterSpacing: "0.15em", textTransform: "uppercase",
            color: "#E84C1E", marginBottom: "1rem",
          }}>
            Newsroom
          </p>
          <h1 style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 900, color: "#fff",
            letterSpacing: "-0.02em", lineHeight: 1.1,
            marginBottom: "1.25rem", textTransform: "uppercase",
          }}>
            XpressReach in the Press
          </h1>
          <p style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "1rem", color: "rgba(255,255,255,0.6)",
            lineHeight: 1.8, maxWidth: "520px", margin: "0 auto 2rem",
          }}>
            Latest news, press releases, and media coverage from XpressReach. For media inquiries, contact our press team.
          </p>
          <a href="mailto:xpressreach@outlook.com?subject=Press Inquiry" style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "#E84C1E", color: "#fff",
            padding: "0.9rem 2rem", borderRadius: "8px",
            fontFamily: "var(--font-barlow), sans-serif",
            fontWeight: 700, fontSize: "0.9rem",
            textDecoration: "none",
          }}>
            Media Enquiries
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 6l-10 7L2 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>

      {/* As Seen In */}
      <section style={{ background: "#F5F5F5", padding: "3rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <p style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "0.75rem", fontWeight: 700,
            letterSpacing: "0.15em", textTransform: "uppercase",
            color: "#999", textAlign: "center", marginBottom: "2rem",
          }}>
            As Featured In
          </p>
          <div style={{
            display: "flex", justifyContent: "center",
            gap: "1.5rem", flexWrap: "wrap",
          }}>
            {mediaLogos.map((logo) => (
              <div key={logo.name} style={{
                background: "#fff", borderRadius: "12px",
                padding: "1rem 2rem",
                border: "1px solid #eee",
                display: "flex", alignItems: "center", gap: "10px",
                minWidth: "150px", justifyContent: "center",
              }}>
                <div style={{
                  width: "36px", height: "36px",
                  background: "#E84C1E", borderRadius: "8px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <span style={{
                    fontFamily: "var(--font-barlow), sans-serif",
                    fontWeight: 900, fontSize: "0.7rem", color: "#fff",
                  }}>
                    {logo.abbr}
                  </span>
                </div>
                <span style={{
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontWeight: 800, fontSize: "0.85rem", color: "#333",
                }}>
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section style={{ background: "#fff", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ marginBottom: "3rem" }}>
            <p style={{
              fontFamily: "var(--font-barlow), sans-serif",
              fontSize: "0.75rem", fontWeight: 700,
              letterSpacing: "0.15em", textTransform: "uppercase",
              color: "#E84C1E", marginBottom: "0.75rem",
            }}>
              Latest News
            </p>
            <h2 style={{
              fontFamily: "var(--font-barlow), sans-serif",
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              fontWeight: 900, color: "#111",
              letterSpacing: "-0.02em",
            }}>
              Press Releases
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {pressReleases.map((pr, i) => (
              <div key={pr.title} style={{
                background: "#fff", borderRadius: "16px",
                border: "1px solid #eee", padding: "2rem",
                display: "grid", gridTemplateColumns: "1fr auto",
                gap: "2rem", alignItems: "center",
                transition: "border-color 0.2s, box-shadow 0.2s",
              }} className="press-card">
                <div>
                  <div style={{ display: "flex", gap: "0.75rem", marginBottom: "0.75rem", flexWrap: "wrap" }}>
                    <span style={{
                      background: categoryColors[pr.category]?.bg || "#f0f0f0",
                      color: categoryColors[pr.category]?.color || "#555",
                      padding: "3px 12px", borderRadius: "100px",
                      fontFamily: "var(--font-barlow), sans-serif",
                      fontWeight: 700, fontSize: "0.72rem",
                    }}>
                      {pr.category}
                    </span>
                    <span style={{
                      fontFamily: "var(--font-barlow), sans-serif",
                      fontSize: "0.78rem", color: "#aaa",
                    }}>
                      {pr.date}
                    </span>
                  </div>
                  <h3 style={{
                    fontFamily: "var(--font-barlow), sans-serif",
                    fontWeight: 800, fontSize: "1.05rem",
                    color: "#111", marginBottom: "0.6rem",
                    lineHeight: 1.4,
                  }}>
                    {pr.title}
                  </h3>
                  <p style={{
                    fontFamily: "var(--font-barlow), sans-serif",
                    fontSize: "0.875rem", color: "#777",
                    lineHeight: 1.7,
                  }}>
                    {pr.excerpt}
                  </p>
                </div>
                <a href="#" style={{
                  display: "inline-flex", alignItems: "center", gap: "6px",
                  background: "#F5F5F5", color: "#111",
                  padding: "0.75rem 1.5rem", borderRadius: "8px",
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontWeight: 700, fontSize: "0.82rem",
                  textDecoration: "none", whiteSpace: "nowrap",
                  transition: "background 0.2s",
                }} className="read-btn">
                  Read More
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .press-card:hover {
            border-color: #E84C1E !important;
            box-shadow: 0 8px 32px rgba(232,76,30,0.08);
          }
          .press-card:hover .read-btn {
            background: #E84C1E !important;
            color: #fff !important;
          }
          @media (max-width: 640px) {
            .press-card {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* Media Kit */}
      <section style={{ background: "#111", padding: "5rem 2rem" }}>
        <div style={{
          maxWidth: "800px", margin: "0 auto", textAlign: "center",
        }}>
          <h2 style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
            fontWeight: 900, color: "#fff",
            letterSpacing: "-0.02em", marginBottom: "1rem",
          }}>
            Need Our Media Kit?
          </h2>
          <p style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "1rem", color: "rgba(255,255,255,0.6)",
            lineHeight: 1.7, marginBottom: "2rem",
          }}>
            Download our official logos, brand assets, company overview, and executive bios for media use. For specific requests, reach out to our press team directly.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "#E84C1E", color: "#fff",
              padding: "1rem 2rem", borderRadius: "8px",
              fontFamily: "var(--font-barlow), sans-serif",
              fontWeight: 700, fontSize: "0.95rem",
              textDecoration: "none",
            }}>
              Download Media Kit
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="mailto:xpressreach@outlook.com?subject=Press Inquiry" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "transparent", color: "#fff",
              padding: "1rem 2rem", borderRadius: "8px",
              border: "2px solid rgba(255,255,255,0.3)",
              fontFamily: "var(--font-barlow), sans-serif",
              fontWeight: 700, fontSize: "0.95rem",
              textDecoration: "none",
            }}>
              Contact Press Team
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}