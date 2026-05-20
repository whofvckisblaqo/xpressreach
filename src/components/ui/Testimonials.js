"use client";
export default function Testimonials() {
  const testimonials = [
    {
      name: "James Thornton",
      role: "CEO, Thornton Imports",
      country: "United Kingdom",
      review: "XpressReach completely transformed how we manage our global logistics. Every shipment has been on time, tracking is seamless, and their support team is always available. Highly recommended.",
      rating: 5,
      avatar: "JT",
    },
    {
      name: "Sofia Delgado",
      role: "Operations Manager, DelMar Co.",
      country: "Spain",
      review: "We've cut delivery times by 40% since switching to XpressReach. Their air freight service is outstanding — fast, reliable, and always kept us informed every step of the way.",
      rating: 5,
      avatar: "SD",
    },
    {
      name: "Chukwudi Obi",
      role: "Founder, ObiTech Supplies",
      country: "Canada",
      review: "As a growing business shipping internationally, XpressReach gave us the confidence we needed. Their tech is on point and the team genuinely cares about your cargo.",
      rating: 5,
      avatar: "CO",
    },
  ];

  return (
    <section style={{ background: "#FFF5F2", padding: "6rem 2rem" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "0.75rem", fontWeight: 700,
            letterSpacing: "0.15em", textTransform: "uppercase",
            color: "#E84C1E", marginBottom: "0.75rem",
          }}>
            Client Testimonials
          </p>
          <h2 style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
            fontWeight: 900, color: "#111",
            letterSpacing: "-0.02em",
          }}>
            Trusted by Businesses Like Yours
          </h2>
        </div>

        {/* Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.5rem",
        }} className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={t.name} style={{
              background: "#fff",
              borderRadius: "16px",
              padding: "2rem",
              boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
              border: "1px solid #f0e8e5",
              position: "relative",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            className="testimonial-card"
            >
              {/* Quote mark */}
              <div style={{
                position: "absolute", top: "1.5rem", right: "1.75rem",
                fontFamily: "Georgia, serif",
                fontSize: "5rem", lineHeight: 1,
                color: "#E84C1E", opacity: 0.12,
                userSelect: "none",
              }}>
                "
              </div>

              {/* Stars */}
              <div style={{ display: "flex", gap: "4px", marginBottom: "1.25rem" }}>
                {Array.from({ length: t.rating }).map((_, j) => (
                  <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="#E84C1E">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>

              {/* Review */}
              <p style={{
                fontFamily: "var(--font-barlow), sans-serif",
                fontSize: "0.9rem", color: "#555",
                lineHeight: 1.8, marginBottom: "1.75rem",
                fontStyle: "italic",
              }}>
                "{t.review}"
              </p>

              {/* Divider */}
              <div style={{ height: "1px", background: "#f0e8e5", marginBottom: "1.25rem" }} />

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{
                  width: "46px", height: "46px",
                  background: "#E84C1E", borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <span style={{
                    fontFamily: "var(--font-barlow), sans-serif",
                    fontWeight: 800, fontSize: "0.85rem", color: "#fff",
                  }}>
                    {t.avatar}
                  </span>
                </div>
                <div>
                  <div style={{
                    fontFamily: "var(--font-barlow), sans-serif",
                    fontWeight: 800, fontSize: "0.95rem", color: "#111",
                  }}>
                    {t.name}
                  </div>
                  <div style={{
                    fontFamily: "var(--font-barlow), sans-serif",
                    fontSize: "0.78rem", color: "#999",
                  }}>
                    {t.role} · {t.country}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .testimonial-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(232,76,30,0.12) !important;
        }
        @media (max-width: 900px) {
          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 540px) {
          .testimonials-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}