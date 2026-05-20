"use client";

export default function AppDownload() {
  return (
    <section style={{ background: "#111", padding: "6rem 2rem", overflow: "hidden" }}>
      <div style={{
        maxWidth: "1280px", margin: "0 auto",
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: "4rem", alignItems: "center",
      }} className="app-grid">

        {/* Left */}
        <div>
          <p style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "0.75rem", fontWeight: 700,
            letterSpacing: "0.15em", textTransform: "uppercase",
            color: "#E84C1E", marginBottom: "0.75rem",
          }}>
            Mobile App
          </p>

          <h2 style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
            fontWeight: 900, color: "#fff",
            letterSpacing: "-0.02em", lineHeight: 1.15,
            marginBottom: "1.25rem",
          }}>
            Manage Your Shipments <span style={{ color: "#E84C1E" }}>On the Go</span>
          </h2>

          <p style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "1rem", color: "rgba(255,255,255,0.6)",
            lineHeight: 1.75, marginBottom: "2.5rem",
            maxWidth: "460px",
          }}>
            Track shipments in real time, request quotes, schedule pickups, and get instant notifications — all from the palm of your hand.
          </p>

          {/* Feature list */}
          <div style={{ marginBottom: "2.5rem" }}>
            {[
              "Real-time shipment tracking",
              "Instant delivery notifications",
              "One-tap quote requests",
              "Full shipment history",
            ].map((feature) => (
              <div key={feature} style={{
                display: "flex", alignItems: "center", gap: "12px",
                marginBottom: "0.85rem",
              }}>
                <div style={{
                  width: "22px", height: "22px", flexShrink: 0,
                  background: "#E84C1E", borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17l-5-5" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span style={{
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontSize: "0.9rem", color: "rgba(255,255,255,0.75)",
                  fontWeight: 500,
                }}>
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* Download Buttons */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            {/* Google Play */}
            <a href="#" style={{
              display: "flex", alignItems: "center", gap: "12px",
              background: "#fff", color: "#111",
              padding: "12px 22px", borderRadius: "10px",
              textDecoration: "none",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            className="store-btn"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 20.5v-17c0-.83 1-.83 1.5-.5l14 8.5-14 8.5c-.5.33-1.5.33-1.5-.5z" fill="#E84C1E"/>
                <path d="M3 3.5l8.5 8.5L3 20.5" stroke="#111" strokeWidth="0.5"/>
              </svg>
              <div>
                <div style={{ fontSize: "0.6rem", fontFamily: "var(--font-barlow), sans-serif", color: "#666", fontWeight: 600 }}>GET IT ON</div>
                <div style={{ fontSize: "0.95rem", fontWeight: 800, fontFamily: "var(--font-barlow), sans-serif" }}>Google Play</div>
              </div>
            </a>

            {/* App Store */}
            <a href="#" style={{
              display: "flex", alignItems: "center", gap: "12px",
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "#fff",
              padding: "12px 22px", borderRadius: "10px",
              textDecoration: "none",
              transition: "transform 0.2s, background 0.2s",
            }}
            className="store-btn-dark"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" fill="#fff"/>
              </svg>
              <div>
                <div style={{ fontSize: "0.6rem", fontFamily: "var(--font-barlow), sans-serif", color: "rgba(255,255,255,0.6)", fontWeight: 600 }}>DOWNLOAD ON THE</div>
                <div style={{ fontSize: "0.95rem", fontWeight: 800, fontFamily: "var(--font-barlow), sans-serif" }}>App Store</div>
              </div>
            </a>
          </div>
        </div>

        {/* Right — Phone Mockup */}
        <div style={{
          display: "flex", justifyContent: "center",
          position: "relative",
        }} className="app-mockup">

          {/* Glow */}
          <div style={{
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            width: "300px", height: "300px",
            background: "radial-gradient(circle, rgba(232,76,30,0.3) 0%, transparent 70%)",
            borderRadius: "50%",
          }} />

          {/* Phone frame */}
          <div style={{
            width: "260px",
            background: "#1a1a1a",
            borderRadius: "36px",
            padding: "12px",
            boxShadow: "0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.1)",
            position: "relative", zIndex: 1,
          }}>
            {/* Notch */}
            <div style={{
              width: "80px", height: "24px",
              background: "#111", borderRadius: "12px",
              margin: "0 auto 12px",
            }} />

            {/* Screen */}
            <div style={{
              background: "#fff", borderRadius: "24px",
              overflow: "hidden", height: "420px",
              position: "relative",
            }}>
              {/* App UI mockup */}
              <div style={{ background: "#E84C1E", padding: "1.25rem 1rem 1.5rem" }}>
                <div style={{
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontSize: "0.6rem", color: "rgba(255,255,255,0.7)",
                  fontWeight: 600, marginBottom: "2px",
                }}>
                  Good morning, James 👋
                </div>
                <div style={{
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontSize: "0.9rem", color: "#fff",
                  fontWeight: 800,
                }}>
                  Track your shipments
                </div>

                {/* Search bar */}
                <div style={{
                  background: "rgba(255,255,255,0.2)",
                  borderRadius: "8px", padding: "8px 10px",
                  marginTop: "12px",
                  display: "flex", alignItems: "center", gap: "6px",
                }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <circle cx="11" cy="11" r="8" stroke="rgba(255,255,255,0.8)" strokeWidth="2"/>
                    <path d="m21 21-4.35-4.35" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-barlow), sans-serif" }}>
                    Enter tracking number...
                  </span>
                </div>
              </div>

              {/* Shipment cards */}
              <div style={{ padding: "1rem" }}>
                <div style={{
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontSize: "0.65rem", fontWeight: 800,
                  color: "#111", marginBottom: "0.75rem",
                  textTransform: "uppercase", letterSpacing: "0.05em",
                }}>
                  Active Shipments
                </div>

                {[
                  { code: "XR-2024-001", from: "New York", to: "London", status: "In Transit", color: "#E84C1E" },
                  { code: "XR-2024-002", from: "Dubai", to: "Tokyo", status: "Delivered", color: "#22c55e" },
                  { code: "XR-2024-003", from: "Lagos", to: "Berlin", status: "Pending", color: "#f59e0b" },
                ].map((s) => (
                  <div key={s.code} style={{
                    background: "#f9f9f9", borderRadius: "10px",
                    padding: "10px", marginBottom: "8px",
                    border: "1px solid #f0f0f0",
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                      <span style={{ fontFamily: "var(--font-barlow), sans-serif", fontSize: "0.6rem", fontWeight: 800, color: "#111" }}>
                        {s.code}
                      </span>
                      <span style={{
                        fontFamily: "var(--font-barlow), sans-serif",
                        fontSize: "0.55rem", fontWeight: 700,
                        color: s.color, background: `${s.color}18`,
                        padding: "2px 6px", borderRadius: "4px",
                      }}>
                        {s.status}
                      </span>
                    </div>
                    <div style={{
                      fontFamily: "var(--font-barlow), sans-serif",
                      fontSize: "0.58rem", color: "#888",
                      display: "flex", alignItems: "center", gap: "4px",
                    }}>
                      {s.from}
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke="#E84C1E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {s.to}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Home indicator */}
            <div style={{
              width: "80px", height: "4px",
              background: "rgba(255,255,255,0.3)",
              borderRadius: "2px", margin: "10px auto 0",
            }} />
          </div>
        </div>
      </div>

      <style>{`
        .store-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(255,255,255,0.2);
        }
        .store-btn-dark:hover {
          background: rgba(255,255,255,0.12) !important;
          transform: translateY(-2px);
        }
        @media (max-width: 900px) {
          .app-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .app-mockup {
            order: -1;
          }
        }
      `}</style>
    </section>
  );
}