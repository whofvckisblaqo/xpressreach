"use client";
export default function WhyUs() {
  const features = [
    {
      title: "Global Reach",
      description: "Leveraging an extensive network that spans major trade routes across the globe, we guarantee seamless connectivity wherever your business takes you.",
    },
    {
      title: "Advanced Technology",
      description: "Utilizing cutting-edge technology that connects key trade routes worldwide, ensuring smooth and prompt delivery no matter where your business leads.",
    },
    {
      title: "Experienced Team",
      description: "Dedicated professionals committed to delivering excellence and customer satisfaction on every single shipment.",
    },
    {
      title: "Reliability & Security",
      description: "Extensive network covering key trade routes worldwide with end-to-end security and full shipment protection.",
    },
  ];

  return (
    <section style={{ background: "#F5F5F5", padding: "6rem 2rem" }}>
      <div style={{
        maxWidth: "1280px", margin: "0 auto",
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: "5rem", alignItems: "center",
      }} className="whyus-grid">

        {/* Left Image */}
        <div style={{ position: "relative" }}>
          <div style={{
            borderRadius: "16px", overflow: "hidden",
            height: "520px",
          }}>
            <img
              src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80"
              alt="Why XpressReach"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          {/* Floating badge */}
          <div style={{
            position: "absolute", bottom: "-1.5rem", right: "-1.5rem",
            background: "#E84C1E", borderRadius: "12px",
            padding: "1.25rem 1.75rem",
            boxShadow: "0 12px 40px rgba(232,76,30,0.4)",
          }} className="whyus-badge">
            <div style={{
              fontFamily: "var(--font-barlow), sans-serif",
              fontWeight: 900, fontSize: "2rem", color: "#fff",
            }}>
              10+
            </div>
            <div style={{
              fontFamily: "var(--font-barlow), sans-serif",
              fontSize: "0.8rem", color: "rgba(255,255,255,0.85)",
            }}>
              Years of Experience
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div>
          <p style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "0.75rem", fontWeight: 700,
            letterSpacing: "0.15em", textTransform: "uppercase",
            color: "#E84C1E", marginBottom: "0.75rem",
          }}>
            Why Us
          </p>

          <h2 style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)",
            fontWeight: 900, color: "#111",
            letterSpacing: "-0.02em", lineHeight: 1.2,
            marginBottom: "0.4rem",
          }}>
            We Specialize in Providing
          </h2>
          <h2 style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)",
            fontWeight: 900, color: "#aaa",
            letterSpacing: "-0.02em", lineHeight: 1.2,
            marginBottom: "1.25rem",
          }}>
            Reliable and Efficient Solutions
          </h2>

          <p style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "0.95rem", color: "#666",
            lineHeight: 1.75, marginBottom: "2.5rem",
            maxWidth: "480px",
          }}>
            With a focus on consistency, speed, and service quality, we ensure every shipment is handled with precision from start to finish.
          </p>

          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
          }} className="features-grid">
            {features.map((f) => (
              <div key={f.title}>
                <h4 style={{
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontWeight: 800, fontSize: "1rem",
                  color: "#111", marginBottom: "0.5rem",
                }}>
                  {f.title}
                </h4>
                <p style={{
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontSize: "0.82rem", color: "#666",
                  lineHeight: 1.7, marginBottom: "0.6rem",
                }}>
                  {f.description}
                </p>
                <a href="#" style={{
                  display: "inline-flex", alignItems: "center", gap: "6px",
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontWeight: 700, fontSize: "0.8rem",
                  color: "#E84C1E", textDecoration: "none",
                }}>
                  Learn More
                  <div style={{
                    width: "20px", height: "20px",
                    background: "#E84C1E", borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .whyus-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .whyus-badge {
            right: 1rem !important;
            bottom: 1rem !important;
          }
        }
        @media (max-width: 480px) {
          .features-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}