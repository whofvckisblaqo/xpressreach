"use client";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function AboutPage() {
  const team = [
    { name: "Marcus Elliot", role: "Chief Executive Officer", initials: "ME" },
    { name: "Priya Nair", role: "Chief Operations Officer", initials: "PN" },
    { name: "Daniel Schwartz", role: "Head of Logistics", initials: "DS" },
    { name: "Aisha Kamara", role: "Head of Customer Success", initials: "AK" },
  ];

  const values = [
    {
      title: "Speed",
      description: "We move fast so your shipments arrive on time, every time, without compromise.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: "Reliability",
      description: "Every package is handled with care. You can count on us to deliver what we promise.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: "Transparency",
      description: "Real-time tracking and clear communication keep you informed at every step.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <circle cx="11" cy="11" r="8" stroke="#E84C1E" strokeWidth="2"/>
          <path d="m21 21-4.35-4.35" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      title: "Global Reach",
      description: "With partners across 6 continents, we connect businesses to the entire world.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="#E84C1E" strokeWidth="2"/>
          <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round"/>
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
          backgroundImage: `url(https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1600&q=60)`,
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
            About Us
          </p>
          <h1 style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "clamp(2.2rem, 5vw, 4rem)",
            fontWeight: 900, color: "#fff",
            letterSpacing: "-0.02em", lineHeight: 1.1,
            maxWidth: "700px", marginBottom: "1.5rem",
            textTransform: "uppercase",
          }}>
            Moving the World, One Shipment at a Time
          </h1>
          <p style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "1.05rem", color: "rgba(255,255,255,0.65)",
            lineHeight: 1.8, maxWidth: "580px",
          }}>
            XpressReach is a global logistics company built on the belief that distance should never be a barrier to business. We connect businesses and individuals worldwide through fast, secure, and reliable shipping solutions.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section style={{ background: "#fff", padding: "6rem 2rem" }}>
        <div style={{
          maxWidth: "1280px", margin: "0 auto",
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: "5rem", alignItems: "center",
        }} className="about-grid">
          <div>
            <p style={{
              fontFamily: "var(--font-barlow), sans-serif",
              fontSize: "0.75rem", fontWeight: 700,
              letterSpacing: "0.15em", textTransform: "uppercase",
              color: "#E84C1E", marginBottom: "0.75rem",
            }}>
              Our Story
            </p>
            <h2 style={{
              fontFamily: "var(--font-barlow), sans-serif",
              fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)",
              fontWeight: 900, color: "#111",
              letterSpacing: "-0.02em", marginBottom: "1.25rem",
            }}>
              Built for the Modern World of Commerce
            </h2>
            <p style={{
              fontFamily: "var(--font-barlow), sans-serif",
              fontSize: "0.95rem", color: "#666",
              lineHeight: 1.8, marginBottom: "1.25rem",
            }}>
              Founded in 2014, XpressReach started as a small courier service with a single mission — make shipping simple, transparent, and reliable for everyone. Over the past decade, we've grown into a full-scale global logistics company serving thousands of businesses across 6 continents.
            </p>
            <p style={{
              fontFamily: "var(--font-barlow), sans-serif",
              fontSize: "0.95rem", color: "#666",
              lineHeight: 1.8, marginBottom: "2rem",
            }}>
              Today, XpressReach handles everything from same-day local deliveries to complex international freight — ocean, air, road, and warehousing — all powered by cutting-edge technology and a team of dedicated logistics professionals.
            </p>

            {/* Mini stats */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }} className="mini-stats">
              {[
                { value: "10+", label: "Years Experience" },
                { value: "91+", label: "Countries Served" },
                { value: "15k+", label: "Happy Clients" },
              ].map((s) => (
                <div key={s.label}>
                  <div style={{
                    fontFamily: "var(--font-barlow), sans-serif",
                    fontWeight: 900, fontSize: "2rem",
                    color: "#E84C1E", lineHeight: 1,
                  }}>
                    {s.value}
                  </div>
                  <div style={{
                    fontFamily: "var(--font-barlow), sans-serif",
                    fontSize: "0.8rem", color: "#999", marginTop: "4px",
                  }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ borderRadius: "16px", overflow: "hidden", height: "500px" }}>
            <img
              src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80"
              alt="Our Story"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .about-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
            .mini-stats { grid-template-columns: repeat(3, 1fr) !important; }
          }
          @media (max-width: 480px) {
            .mini-stats { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* Values */}
      <section style={{ background: "#F5F5F5", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{
              fontFamily: "var(--font-barlow), sans-serif",
              fontSize: "0.75rem", fontWeight: 700,
              letterSpacing: "0.15em", textTransform: "uppercase",
              color: "#E84C1E", marginBottom: "0.75rem",
            }}>
              What Drives Us
            </p>
            <h2 style={{
              fontFamily: "var(--font-barlow), sans-serif",
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              fontWeight: 900, color: "#111",
              letterSpacing: "-0.02em",
            }}>
              Our Core Values
            </h2>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.5rem",
          }} className="values-grid">
            {values.map((v) => (
              <div key={v.title} style={{
                background: "#fff", borderRadius: "16px",
                padding: "2rem", border: "1px solid #eee",
                transition: "border-color 0.3s, box-shadow 0.3s",
              }} className="value-card">
                <div style={{
                  width: "56px", height: "56px",
                  background: "#FFF5F2", borderRadius: "12px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: "1.25rem",
                }}>
                  {v.icon}
                </div>
                <h3 style={{
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontWeight: 800, fontSize: "1.05rem",
                  color: "#111", marginBottom: "0.75rem",
                  textTransform: "uppercase",
                }}>
                  {v.title}
                </h3>
                <p style={{
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontSize: "0.85rem", color: "#777",
                  lineHeight: 1.7,
                }}>
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .value-card:hover {
            border-color: #E84C1E !important;
            box-shadow: 0 8px 32px rgba(232,76,30,0.1);
          }
          @media (max-width: 900px) {
            .values-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 480px) {
            .values-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* Team */}
      <section style={{ background: "#fff", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{
              fontFamily: "var(--font-barlow), sans-serif",
              fontSize: "0.75rem", fontWeight: 700,
              letterSpacing: "0.15em", textTransform: "uppercase",
              color: "#E84C1E", marginBottom: "0.75rem",
            }}>
              The People Behind XpressReach
            </p>
            <h2 style={{
              fontFamily: "var(--font-barlow), sans-serif",
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              fontWeight: 900, color: "#111",
              letterSpacing: "-0.02em",
            }}>
              Meet Our Leadership Team
            </h2>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.5rem",
          }} className="team-grid">
            {team.map((member) => (
              <div key={member.name} style={{
                background: "#F5F5F5", borderRadius: "16px",
                padding: "2rem", textAlign: "center",
                border: "1px solid #eee",
                transition: "transform 0.3s",
              }} className="team-card">
                <div style={{
                  width: "80px", height: "80px",
                  background: "#E84C1E", borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 1.25rem",
                }}>
                  <span style={{
                    fontFamily: "var(--font-barlow), sans-serif",
                    fontWeight: 900, fontSize: "1.3rem", color: "#fff",
                  }}>
                    {member.initials}
                  </span>
                </div>
                <h3 style={{
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontWeight: 800, fontSize: "1rem",
                  color: "#111", marginBottom: "0.4rem",
                }}>
                  {member.name}
                </h3>
                <p style={{
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontSize: "0.8rem", color: "#E84C1E",
                  fontWeight: 600,
                }}>
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .team-card:hover { transform: translateY(-4px); }
          @media (max-width: 900px) {
            .team-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 480px) {
            .team-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      <Footer />
    </main>
  );
}