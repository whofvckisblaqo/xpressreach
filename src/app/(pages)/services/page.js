"use client";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function ServicesPage() {
  const services = [
    {
      title: "Ocean Freight",
      description: "Our ocean freight service connects major ports across the globe with cost-effective, reliable sea transportation. Whether you're shipping full container loads (FCL) or less than container loads (LCL), we handle it all with precision.",
      features: ["FCL & LCL Options", "Port-to-Port Delivery", "Live Cargo Tracking", "Customs Clearance Support", "Hazardous Cargo Handling"],
      image: "https://images.unsplash.com/photo-1515861461225-1488dfdaf0a8?w=800&q=80",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M2 20h20M6 20V10l6-6 6 6v10" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 20v-5" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      title: "Air Freight",
      description: "When speed is critical, our air freight service delivers. We partner with major airlines worldwide to offer express and standard air cargo solutions for time-sensitive shipments of any size.",
      features: ["Express & Standard Options", "Airport-to-Airport", "Temperature Controlled", "Priority Handling", "Real-time Flight Tracking"],
      image: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=800&q=80",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 00-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: "Road Transport",
      description: "Our road transport network covers key routes across continents with a fleet of modern vehicles. From full truckloads to groupage shipments, we offer flexible, door-to-door delivery solutions.",
      features: ["Full Truckload (FTL)", "Less Than Truckload (LTL)", "Door-to-Door Service", "Cross-border Shipping", "GPS Fleet Tracking"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <rect x="1" y="3" width="15" height="13" rx="2" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 8h4l3 3v5h-7V8z" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="5.5" cy="18.5" r="2.5" stroke="#E84C1E" strokeWidth="2"/>
          <circle cx="18.5" cy="18.5" r="2.5" stroke="#E84C1E" strokeWidth="2"/>
        </svg>
      ),
    },
    {
      title: "Warehousing & Distribution",
      description: "Our strategically located warehouses across key global hubs offer secure storage, inventory management, and efficient distribution services to keep your supply chain running smoothly.",
      features: ["Secure Storage Facilities", "Inventory Management", "Pick & Pack Services", "Last-Mile Delivery", "Cold Chain Storage"],
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 22V12h6v10" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

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
          backgroundImage: `url(https://images.unsplash.com/photo-1515861461225-1488dfdaf0a8?w=1600&q=60)`,
          backgroundSize: "cover", backgroundPosition: "center",
          opacity: 0.15,
        }} />
        <div style={{
          position: "relative", zIndex: 1,
          maxWidth: "1280px", margin: "0 auto",
          padding: "6rem 2rem",
        }}>
          <p style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "0.75rem", fontWeight: 700,
            letterSpacing: "0.15em", textTransform: "uppercase",
            color: "#E84C1E", marginBottom: "1rem",
          }}>
            What We Offer
          </p>
          <h1 style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "clamp(2.2rem, 5vw, 4rem)",
            fontWeight: 900, color: "#fff",
            letterSpacing: "-0.02em", lineHeight: 1.1,
            maxWidth: "700px", marginBottom: "1.5rem",
            textTransform: "uppercase",
          }}>
            Logistics Solutions for Every Need
          </h1>
          <p style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "1.05rem", color: "rgba(255,255,255,0.65)",
            lineHeight: 1.8, maxWidth: "560px",
          }}>
            From ocean freight to last-mile delivery, XpressReach offers end-to-end logistics services designed to move your cargo anywhere in the world — fast, safe, and on time.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section style={{ background: "#fff", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          {services.map((service, i) => (
            <div key={service.title} style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "5rem",
              alignItems: "center",
              marginBottom: i < services.length - 1 ? "7rem" : 0,
            }} className="service-row">

              {/* Image */}
              <div style={{
                order: i % 2 === 0 ? 0 : 1,
                borderRadius: "16px", overflow: "hidden",
                height: "420px",
              }} className="service-img-wrap">
                <img
                  src={service.image}
                  alt={service.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              {/* Content */}
              <div style={{ order: i % 2 === 0 ? 1 : 0 }}>
                {/* Icon */}
                <div style={{
                  width: "60px", height: "60px",
                  background: "#FFF5F2", borderRadius: "14px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: "1.25rem",
                }}>
                  {service.icon}
                </div>

                <h2 style={{
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                  fontWeight: 900, color: "#111",
                  letterSpacing: "-0.02em", marginBottom: "1rem",
                  textTransform: "uppercase",
                }}>
                  {service.title}
                </h2>

                <p style={{
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontSize: "0.95rem", color: "#666",
                  lineHeight: 1.8, marginBottom: "1.75rem",
                }}>
                  {service.description}
                </p>

                {/* Features */}
                <div style={{ marginBottom: "2rem" }}>
                  {service.features.map((f) => (
                    <div key={f} style={{
                      display: "flex", alignItems: "center", gap: "10px",
                      marginBottom: "0.65rem",
                    }}>
                      <div style={{
                        width: "20px", height: "20px", flexShrink: 0,
                        background: "#E84C1E", borderRadius: "50%",
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                          <path d="M20 6L9 17l-5-5" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span style={{
                        fontFamily: "var(--font-barlow), sans-serif",
                        fontSize: "0.875rem", color: "#444", fontWeight: 600,
                      }}>
                        {f}
                      </span>
                    </div>
                  ))}
                </div>

                <a href="/quote" style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  background: "#E84C1E", color: "#fff",
                  padding: "0.85rem 2rem", borderRadius: "8px",
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontWeight: 700, fontSize: "0.9rem",
                  textDecoration: "none", letterSpacing: "0.03em",
                }}>
                  Get a Quote
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <style>{`
          @media (max-width: 900px) {
            .service-row {
              grid-template-columns: 1fr !important;
              gap: 2.5rem !important;
              margin-bottom: 4rem !important;
            }
            .service-img-wrap {
              order: 0 !important;
              height: 280px !important;
            }
          }
        `}</style>
      </section>

      {/* Bottom CTA */}
      <section style={{ background: "#F5F5F5", padding: "5rem 2rem" }}>
        <div style={{
          maxWidth: "700px", margin: "0 auto", textAlign: "center",
        }}>
          <h2 style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
            fontWeight: 900, color: "#111",
            letterSpacing: "-0.02em", marginBottom: "1rem",
          }}>
            Not Sure Which Service You Need?
          </h2>
          <p style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "1rem", color: "#777",
            lineHeight: 1.7, marginBottom: "2rem",
          }}>
            Our logistics experts are available 24/7 to help you find the best shipping solution for your needs and budget.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/quote" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "#E84C1E", color: "#fff",
              padding: "1rem 2rem", borderRadius: "8px",
              fontFamily: "var(--font-barlow), sans-serif",
              fontWeight: 700, fontSize: "0.95rem",
              textDecoration: "none",
            }}>
              Request a Quote
            </a>
            <a href="/support" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "#fff", color: "#111",
              padding: "1rem 2rem", borderRadius: "8px",
              border: "1px solid #ddd",
              fontFamily: "var(--font-barlow), sans-serif",
              fontWeight: 700, fontSize: "0.95rem",
              textDecoration: "none",
            }}>
              Talk to an Expert
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}