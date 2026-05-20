"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Hero() {
  const [tab, setTab] = useState("track");
  const [trackingCode, setTrackingCode] = useState("");
  const router = useRouter();

  const handleTrack = () => {
    if (trackingCode.trim()) {
      router.push(`/tracking?code=${trackingCode.trim()}`);
    }
  };

  return (
    <section style={{ paddingTop: "70px", minHeight: "100vh", position: "relative", overflow: "hidden" }}>

      {/* Full background image */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: `url(https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1600&q=80)`,
        backgroundSize: "cover", backgroundPosition: "center",
        filter: "brightness(0.25)",
      }} />

      {/* Orange tint overlay */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 1,
        background: "linear-gradient(135deg, rgba(232,76,30,0.18) 0%, rgba(0,0,0,0.55) 100%)",
      }} />

      {/* Content */}
      <div style={{
        position: "relative", zIndex: 2,
        maxWidth: "1280px", margin: "0 auto",
        padding: "5rem 2rem 4rem",
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: "3rem", alignItems: "center", minHeight: "calc(100vh - 70px)",
      }} className="hero-grid">

        {/* Left */}
        <div>
          {/* Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(232,76,30,0.2)", border: "1px solid rgba(232,76,30,0.5)",
            borderRadius: "100px", padding: "6px 16px", marginBottom: "1.5rem",
          }}>
            <div style={{ width: "7px", height: "7px", background: "#E84C1E", borderRadius: "50%" }} />
            <span style={{
              fontFamily: "var(--font-barlow), sans-serif",
              fontSize: "0.75rem", fontWeight: 700,
              color: "#ff9a7a", letterSpacing: "0.08em", textTransform: "uppercase",
            }}>
              Global Consignment & Logistics
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "clamp(2rem, 4.5vw, 3.6rem)",
            fontWeight: 900, lineHeight: 1.08,
            color: "#fff", marginBottom: "1.25rem",
            textTransform: "uppercase", letterSpacing: "-0.02em",
          }}>
            BRINGING THE <br />
            <span style={{ color: "#E84C1E" }}>WORLD CLOSER,</span><br />
            ONE SHIPMENT<br />AT A TIME
          </h1>

          <p style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "1rem", color: "rgba(255,255,255,0.75)",
            lineHeight: 1.75, marginBottom: "2rem", maxWidth: "440px",
          }}>
            We provide reliable shipping wherever you need it. Precision, speed, and confidence at every step of the journey.
          </p>

          {/* Track Widget */}
          <div style={{
            background: "#fff", borderRadius: "14px",
            padding: "1.25rem", maxWidth: "420px",
            boxShadow: "0 8px 40px rgba(0,0,0,0.25)",
            marginBottom: "2rem",
          }}>
            {/* Tabs */}
            <div style={{ display: "flex", borderBottom: "2px solid #f0f0f0", marginBottom: "1rem" }}>
              {[
                { key: "track", label: "Track Shipment" },
                { key: "ship", label: "Ship Order" },
              ].map((t) => (
                <button key={t.key} onClick={() => setTab(t.key)} style={{
                  flex: 1, padding: "0.55rem 0.5rem",
                  background: "none", border: "none",
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontWeight: 700, fontSize: "0.82rem",
                  cursor: "pointer",
                  color: tab === t.key ? "#E84C1E" : "#999",
                  borderBottom: tab === t.key ? "2px solid #E84C1E" : "2px solid transparent",
                  marginBottom: "-2px",
                }}>
                  {t.label}
                </button>
              ))}
            </div>

            {tab === "track" ? (
              <>
                <div style={{
                  display: "flex", alignItems: "center", gap: "8px",
                  border: "1px solid #e0e0e0", borderRadius: "8px",
                  padding: "0 12px", marginBottom: "0.75rem", background: "#fafafa",
                }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="#aaa" strokeWidth="2"/>
                    <circle cx="12" cy="10" r="3" stroke="#aaa" strokeWidth="2"/>
                  </svg>
                  <input
                    type="text"
                    placeholder="Enter tracking number..."
                    value={trackingCode}
                    onChange={(e) => setTrackingCode(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleTrack()}
                    style={{
                      flex: 1, border: "none", background: "none",
                      padding: "0.75rem 0",
                      fontFamily: "var(--font-barlow), sans-serif",
                      fontSize: "0.9rem", color: "#333", outline: "none",
                    }}
                  />
                </div>
                <button onClick={handleTrack} style={{
                  width: "100%", padding: "0.85rem",
                  background: "#E84C1E", color: "#fff",
                  border: "none", borderRadius: "8px",
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontWeight: 700, fontSize: "1rem",
                  cursor: "pointer", letterSpacing: "0.04em",
                  transition: "background 0.2s",
                }}>
                  Track
                </button>
                <p style={{
                  marginTop: "0.6rem", fontSize: "0.72rem", color: "#aaa",
                  fontFamily: "var(--font-barlow), sans-serif",
                  display: "flex", justifyContent: "space-between",
                }}>
                  <span>Multiple Tracking Numbers</span>
                  <span style={{ color: "#E84C1E", cursor: "pointer" }}>ⓘ Need Help</span>
                </p>
              </>
            ) : (
              <div style={{ textAlign: "center", padding: "0.75rem 0" }}>
                <p style={{
                  fontFamily: "var(--font-barlow), sans-serif",
                  color: "#555", marginBottom: "1rem", fontSize: "0.9rem",
                }}>
                  Ready to ship your package globally?
                </p>
                <a href="/quote" style={{
                  display: "inline-block", padding: "0.8rem 2rem",
                  background: "#E84C1E", color: "#fff",
                  borderRadius: "8px", textDecoration: "none",
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontWeight: 700, fontSize: "0.95rem",
                }}>
                  Request a Quote →
                </a>
              </div>
            )}
          </div>

          {/* App Badges */}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {[
              { label: "Google Play", sub: "GET IT ON", icon: "▶" },
              { label: "App Store", sub: "Download on the", icon: "🍎" },
            ].map((b) => (
              <a key={b.label} href="#" style={{
                display: "flex", alignItems: "center", gap: "10px",
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.25)",
                padding: "10px 18px", borderRadius: "8px",
                textDecoration: "none", backdropFilter: "blur(4px)",
              }}>
                <span style={{ fontSize: "1.3rem" }}>{b.icon}</span>
                <div>
                  <div style={{ fontSize: "0.58rem", color: "rgba(255,255,255,0.65)", fontFamily: "var(--font-barlow), sans-serif" }}>{b.sub}</div>
                  <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#fff", fontFamily: "var(--font-barlow), sans-serif" }}>{b.label}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right — floating card visible on all screens */}
        <div className="hero-right" style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "flex-end" }}>

          {/* Main image card */}
          <div style={{
            width: "100%", maxWidth: "480px",
            borderRadius: "16px", overflow: "hidden",
            height: "340px", position: "relative",
            boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
          }}>
            <img
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80"
              alt="Global Freight"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)",
            }} />
            <div style={{
              position: "absolute", bottom: "1.25rem", left: "1.25rem",
            }}>
              <div style={{ color: "#fff", fontFamily: "var(--font-barlow), sans-serif", fontWeight: 800, fontSize: "1.1rem" }}>Air Freight</div>
              <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.78rem", fontFamily: "var(--font-barlow), sans-serif" }}>Fast & secure worldwide</div>
            </div>
          </div>

          {/* Stats row */}
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr",
            gap: "1rem", width: "100%", maxWidth: "480px",
          }}>
            {[
              { value: "15k+", label: "Satisfied Clients" },
              { value: "5k+", label: "Deliveries Monthly" },
              { value: "1.7k+", label: "Reviews" },
              { value: "3452", label: "Total Stores" },
            ].map((stat) => (
              <div key={stat.label} style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.18)",
                borderRadius: "12px", padding: "1rem 1.25rem",
                backdropFilter: "blur(8px)",
              }}>
                <div style={{
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontWeight: 900, fontSize: "1.4rem", color: "#E84C1E",
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontSize: "0.75rem", color: "rgba(255,255,255,0.7)",
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            padding: 3rem 1.25rem 3rem !important;
          }
          .hero-right {
            align-items: center !important;
          }
        }
        @media (max-width: 480px) {
          .hero-right img {
            height: 220px !important;
          }
        }
      `}</style>
    </section>
  );
}