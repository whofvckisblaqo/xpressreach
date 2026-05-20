"use client";
export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Place Your Order",
      description: "Fill out our simple shipment form with pickup and delivery details. Get an instant quote and confirm your booking in minutes.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      number: "02",
      title: "We Pick It Up",
      description: "Our certified logistics team picks up your shipment from your location. Every package is handled with care and fully insured.",
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
      number: "03",
      title: "Track In Real Time",
      description: "Monitor your shipment live with our advanced tracking system. Get instant updates at every checkpoint along the route.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="#E84C1E" strokeWidth="2"/>
          <path d="M12 8v4l3 3" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      number: "04",
      title: "Delivered to You",
      description: "Your shipment arrives safely at its destination on time. Recipient gets a confirmation and proof of delivery instantly.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 4L12 14.01l-3-3" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  return (
    <section style={{ background: "#fff", padding: "6rem 2rem" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "0.75rem", fontWeight: 700,
            letterSpacing: "0.15em", textTransform: "uppercase",
            color: "#E84C1E", marginBottom: "0.75rem",
          }}>
            How It Works
          </p>
          <h2 style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
            fontWeight: 900, color: "#111",
            letterSpacing: "-0.02em", marginBottom: "1rem",
          }}>
            Simple. Fast. Reliable.
          </h2>
          <p style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "1rem", color: "#777",
            maxWidth: "500px", margin: "0 auto", lineHeight: 1.7,
          }}>
            From booking to delivery, we've made the entire process seamless so you can focus on what matters most.
          </p>
        </div>

        {/* Steps */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "0",
          position: "relative",
        }} className="steps-grid">

          {/* Connector line */}
          <div style={{
            position: "absolute",
            top: "52px", left: "12.5%", right: "12.5%",
            height: "2px",
            background: "linear-gradient(to right, #E84C1E, #ffb89a)",
            zIndex: 0,
          }} className="connector-line" />

          {steps.map((step, i) => (
            <div key={step.number} style={{
              textAlign: "center",
              padding: "0 1.5rem",
              position: "relative", zIndex: 1,
            }} className="step-item">

              {/* Icon circle */}
              <div style={{
                width: "80px", height: "80px",
                background: i % 2 === 0 ? "#E84C1E" : "#fff",
                border: "3px solid #E84C1E",
                borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 1.5rem",
                boxShadow: "0 8px 24px rgba(232,76,30,0.2)",
                position: "relative",
              }}>
                {/* Render icon with color override for filled circles */}
                <div style={{ filter: i % 2 === 0 ? "brightness(0) invert(1)" : "none" }}>
                  {step.icon}
                </div>

                {/* Step number badge */}
                <div style={{
                  position: "absolute", top: "-8px", right: "-8px",
                  width: "26px", height: "26px",
                  background: "#111", borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <span style={{
                    fontFamily: "var(--font-barlow), sans-serif",
                    fontSize: "0.65rem", fontWeight: 800,
                    color: "#fff",
                  }}>
                    {step.number}
                  </span>
                </div>
              </div>

              <h3 style={{
                fontFamily: "var(--font-barlow), sans-serif",
                fontWeight: 800, fontSize: "1.05rem",
                color: "#111", marginBottom: "0.75rem",
                textTransform: "uppercase", letterSpacing: "0.02em",
              }}>
                {step.title}
              </h3>
              <p style={{
                fontFamily: "var(--font-barlow), sans-serif",
                fontSize: "0.85rem", color: "#777",
                lineHeight: 1.7,
              }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "3.5rem" }}>
          <a href="/quote" style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            background: "#E84C1E", color: "#fff",
            padding: "1rem 2.5rem", borderRadius: "8px",
            fontFamily: "var(--font-barlow), sans-serif",
            fontWeight: 700, fontSize: "1rem",
            textDecoration: "none", letterSpacing: "0.03em",
          }}>
            Get a Free Quote
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .steps-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 3rem !important;
          }
          .connector-line {
            display: none !important;
          }
        }
        @media (max-width: 540px) {
          .steps-grid {
            grid-template-columns: 1fr !important;
          }
          .step-item {
            padding: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}