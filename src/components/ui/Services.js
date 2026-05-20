"use client";
export default function Services() {
  const services = [
    {
      title: "Ocean Freight",
      description: "Cost-effective and reliable sea transportation for large volumes across global trade routes.",
      image: "https://images.unsplash.com/photo-1515861461225-1488dfdaf0a8?w=800&q=80",
    },
    {
      title: "Air Freight",
      description: "Fast and secure air cargo services for time-sensitive shipments worldwide.",
      image: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=800&q=80",
    },
    {
      title: "Warehousing & Distribution",
      description: "Secure storage and efficient distribution solutions for your inventory at scale.",
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
    },
    {
      title: "Road Transport",
      description: "Flexible road freight solutions covering both local and international routes.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    },
  ];

  return (
    <section style={{ background: "#fff", padding: "6rem 2rem" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        <p style={{
          fontFamily: "var(--font-barlow), sans-serif",
          fontSize: "0.75rem", fontWeight: 700,
          letterSpacing: "0.15em", textTransform: "uppercase",
          color: "#E84C1E", textAlign: "center", marginBottom: "0.75rem",
        }}>
          Services
        </p>

        <h2 style={{
          fontFamily: "var(--font-barlow), sans-serif",
          fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
          fontWeight: 900, color: "#111",
          textAlign: "center", marginBottom: "3rem",
          letterSpacing: "-0.02em",
        }}>
          Shipping That Works Like You Do.
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1.25rem",
        }} className="services-grid">
          {services.map((service) => (
            <div key={service.title} className="service-card" style={{
              borderRadius: "12px", overflow: "hidden",
              position: "relative", height: "320px",
              cursor: "pointer",
            }}>
              <img
                src={service.image}
                alt={service.title}
                className="service-img"
                style={{
                  width: "100%", height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.5s ease",
                }}
              />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)",
              }} />
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0,
                height: "4px", background: "#E84C1E",
              }} />
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                padding: "1.5rem",
              }}>
                <h3 style={{
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontWeight: 800, fontSize: "1.05rem",
                  color: "#fff", marginBottom: "0.5rem",
                  textTransform: "uppercase", letterSpacing: "0.02em",
                }}>
                  {service.title}
                </h3>
                <p style={{
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontSize: "0.8rem", color: "rgba(255,255,255,0.75)",
                  lineHeight: 1.6,
                }}>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .service-card:hover .service-img {
          transform: scale(1.05);
        }
        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 540px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
          .service-card {
            height: 260px !important;
          }
        }
      `}</style>
    </section>
  );
}