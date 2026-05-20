"use client";

import { useState } from "react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function TrackingPage() {
  const [trackingCode, setTrackingCode] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleTrack = async () => {
    if (!trackingCode.trim()) {
      setError("Please enter a tracking number.");
      return;
    }
    setError("");
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch(`/api/shipments?code=${trackingCode.trim()}`);
      const data = await res.json();
      if (!res.ok || !data.shipment) {
        setError("No shipment found with that tracking number. Please check and try again.");
      } else {
        setResult(data.shipment);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const statusSteps = ["Order Placed", "Picked Up", "In Transit", "Out for Delivery", "Delivered"];

  const getStatusIndex = (status) => {
    const map = {
      pending: 0,
      "picked-up": 1,
      "in-transit": 2,
      "out-for-delivery": 3,
      delivered: 4,
    };
    return map[status] ?? 0;
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
          backgroundImage: `url(https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1600&q=60)`,
          backgroundSize: "cover", backgroundPosition: "center",
          opacity: 0.12,
        }} />
        <div style={{
          position: "relative", zIndex: 1,
          maxWidth: "1280px", margin: "0 auto",
          padding: "5rem 2rem",
          textAlign: "center",
        }}>
          <p style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "0.75rem", fontWeight: 700,
            letterSpacing: "0.15em", textTransform: "uppercase",
            color: "#E84C1E", marginBottom: "1rem",
          }}>
            Shipment Tracking
          </p>
          <h1 style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 900, color: "#fff",
            letterSpacing: "-0.02em", lineHeight: 1.1,
            marginBottom: "1.25rem",
            textTransform: "uppercase",
          }}>
            Track Your Shipment
          </h1>
          <p style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "1rem", color: "rgba(255,255,255,0.6)",
            lineHeight: 1.8, maxWidth: "500px",
            margin: "0 auto 2.5rem",
          }}>
            Enter your tracking number below to get real-time updates on your shipment status and location.
          </p>

          {/* Track Input */}
          <div style={{
            maxWidth: "600px", margin: "0 auto",
            display: "flex", gap: "0",
            background: "#fff", borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0 8px 40px rgba(0,0,0,0.3)",
          }} className="track-input-wrap">
            <input
              type="text"
              placeholder="Enter tracking number e.g. XR-2024-001"
              value={trackingCode}
              onChange={(e) => setTrackingCode(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleTrack()}
              style={{
                flex: 1, border: "none", outline: "none",
                padding: "1rem 1.25rem",
                fontFamily: "var(--font-barlow), sans-serif",
                fontSize: "0.95rem", color: "#333",
              }}
            />
            <button onClick={handleTrack} style={{
              background: "#E84C1E", color: "#fff",
              border: "none", cursor: "pointer",
              padding: "1rem 2rem",
              fontFamily: "var(--font-barlow), sans-serif",
              fontWeight: 700, fontSize: "0.95rem",
              letterSpacing: "0.03em",
              whiteSpace: "nowrap",
            }}>
              {loading ? "Tracking..." : "Track Now"}
            </button>
          </div>

          {error && (
            <p style={{
              marginTop: "1rem",
              fontFamily: "var(--font-barlow), sans-serif",
              fontSize: "0.85rem", color: "#ff9a7a",
            }}>
              {error}
            </p>
          )}
        </div>
      </section>

      {/* Result */}
      <section style={{ background: "#F5F5F5", padding: "5rem 2rem", minHeight: "400px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>

          {!result && !loading && (
            <div style={{ textAlign: "center", padding: "4rem 0" }}>
              <div style={{
                width: "80px", height: "80px",
                background: "#fff", borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 1.5rem",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              }}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                  <circle cx="11" cy="11" r="8" stroke="#E84C1E" strokeWidth="2"/>
                  <path d="m21 21-4.35-4.35" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 style={{
                fontFamily: "var(--font-barlow), sans-serif",
                fontWeight: 800, fontSize: "1.2rem", color: "#111",
                marginBottom: "0.5rem",
              }}>
                Enter Your Tracking Number
              </h3>
              <p style={{
                fontFamily: "var(--font-barlow), sans-serif",
                fontSize: "0.9rem", color: "#999",
              }}>
                Your shipment details will appear here once you search.
              </p>
            </div>
          )}

          {loading && (
            <div style={{ textAlign: "center", padding: "4rem 0" }}>
              <div style={{
                width: "48px", height: "48px",
                border: "4px solid #f0f0f0",
                borderTop: "4px solid #E84C1E",
                borderRadius: "50%",
                margin: "0 auto 1.5rem",
                animation: "spin 0.8s linear infinite",
              }} />
              <p style={{
                fontFamily: "var(--font-barlow), sans-serif",
                fontSize: "0.95rem", color: "#777",
              }}>
                Fetching your shipment details...
              </p>
            </div>
          )}

          {result && (
            <div>
              {/* Shipment Info Card */}
              <div style={{
                background: "#fff", borderRadius: "16px",
                padding: "2rem", marginBottom: "1.5rem",
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                border: "1px solid #f0f0f0",
              }}>
                <div style={{
                  display: "flex", justifyContent: "space-between",
                  alignItems: "flex-start", flexWrap: "wrap", gap: "1rem",
                  marginBottom: "1.5rem",
                }}>
                  <div>
                    <p style={{
                      fontFamily: "var(--font-barlow), sans-serif",
                      fontSize: "0.75rem", fontWeight: 700,
                      letterSpacing: "0.12em", textTransform: "uppercase",
                      color: "#999", marginBottom: "4px",
                    }}>
                      Tracking Number
                    </p>
                    <h2 style={{
                      fontFamily: "var(--font-barlow), sans-serif",
                      fontWeight: 900, fontSize: "1.4rem", color: "#111",
                    }}>
                      {result.trackingCode}
                    </h2>
                  </div>
                  <div style={{
                    background: result.status === "delivered" ? "#dcfce7" : "#FFF5F2",
                    color: result.status === "delivered" ? "#16a34a" : "#E84C1E",
                    padding: "8px 18px", borderRadius: "100px",
                    fontFamily: "var(--font-barlow), sans-serif",
                    fontWeight: 700, fontSize: "0.85rem",
                    textTransform: "capitalize",
                  }}>
                    {result.status.replace(/-/g, " ")}
                  </div>
                </div>

                {/* Route */}
                <div style={{
                  display: "flex", alignItems: "center", gap: "1rem",
                  background: "#F5F5F5", borderRadius: "10px",
                  padding: "1.25rem", marginBottom: "1.5rem",
                  flexWrap: "wrap",
                }}>
                  <div style={{ flex: 1, minWidth: "120px" }}>
                    <p style={{
                      fontFamily: "var(--font-barlow), sans-serif",
                      fontSize: "0.7rem", color: "#999", fontWeight: 600,
                      textTransform: "uppercase", letterSpacing: "0.1em",
                      marginBottom: "4px",
                    }}>
                      From
                    </p>
                    <p style={{
                      fontFamily: "var(--font-barlow), sans-serif",
                      fontWeight: 800, fontSize: "1rem", color: "#111",
                    }}>
                      {result.origin}
                    </p>
                  </div>
                  <div style={{ color: "#E84C1E" }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="#E84C1E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div style={{ flex: 1, minWidth: "120px", textAlign: "right" }}>
                    <p style={{
                      fontFamily: "var(--font-barlow), sans-serif",
                      fontSize: "0.7rem", color: "#999", fontWeight: 600,
                      textTransform: "uppercase", letterSpacing: "0.1em",
                      marginBottom: "4px",
                    }}>
                      To
                    </p>
                    <p style={{
                      fontFamily: "var(--font-barlow), sans-serif",
                      fontWeight: 800, fontSize: "1rem", color: "#111",
                    }}>
                      {result.destination}
                    </p>
                  </div>
                </div>

                {/* Details Grid */}
                <div style={{
                  display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "1rem",
                }} className="details-grid">
                  {[
                    { label: "Sender", value: result.senderName },
                    { label: "Receiver", value: result.receiverName },
                    { label: "Shipment Type", value: result.shipmentType || "Standard" },
                    { label: "Weight", value: result.weight || "N/A" },
                    { label: "Est. Delivery", value: result.estimatedDelivery ? new Date(result.estimatedDelivery).toLocaleDateString() : "TBD" },
                    { label: "Date Placed", value: new Date(result.createdAt).toLocaleDateString() },
                  ].map((d) => (
                    <div key={d.label} style={{
                      background: "#fafafa", borderRadius: "8px",
                      padding: "1rem", border: "1px solid #f0f0f0",
                    }}>
                      <p style={{
                        fontFamily: "var(--font-barlow), sans-serif",
                        fontSize: "0.7rem", color: "#aaa",
                        fontWeight: 600, textTransform: "uppercase",
                        letterSpacing: "0.08em", marginBottom: "4px",
                      }}>
                        {d.label}
                      </p>
                      <p style={{
                        fontFamily: "var(--font-barlow), sans-serif",
                        fontWeight: 700, fontSize: "0.9rem", color: "#111",
                      }}>
                        {d.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Progress Tracker */}
              <div style={{
                background: "#fff", borderRadius: "16px",
                padding: "2rem",
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                border: "1px solid #f0f0f0",
              }}>
                <h3 style={{
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontWeight: 800, fontSize: "1rem", color: "#111",
                  textTransform: "uppercase", letterSpacing: "0.05em",
                  marginBottom: "2rem",
                }}>
                  Shipment Progress
                </h3>

                <div style={{
                  display: "flex", justifyContent: "space-between",
                  position: "relative",
                }} className="progress-steps">
                  {/* Line */}
                  <div style={{
                    position: "absolute", top: "20px",
                    left: "10%", right: "10%", height: "3px",
                    background: "#f0f0f0", zIndex: 0,
                  }}>
                    <div style={{
                      height: "100%", background: "#E84C1E",
                      width: `${(getStatusIndex(result.status) / (statusSteps.length - 1)) * 100}%`,
                      transition: "width 0.5s ease",
                    }} />
                  </div>

                  {statusSteps.map((step, i) => {
                    const active = i <= getStatusIndex(result.status);
                    return (
                      <div key={step} style={{
                        display: "flex", flexDirection: "column",
                        alignItems: "center", position: "relative", zIndex: 1,
                        flex: 1,
                      }}>
                        <div style={{
                          width: "42px", height: "42px",
                          borderRadius: "50%",
                          background: active ? "#E84C1E" : "#f0f0f0",
                          border: `3px solid ${active ? "#E84C1E" : "#e0e0e0"}`,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          marginBottom: "0.75rem",
                          transition: "all 0.3s",
                        }}>
                          {active ? (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                              <path d="M20 6L9 17l-5-5" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          ) : (
                            <div style={{ width: "10px", height: "10px", background: "#ccc", borderRadius: "50%" }} />
                          )}
                        </div>
                        <p style={{
                          fontFamily: "var(--font-barlow), sans-serif",
                          fontSize: "0.7rem", fontWeight: 700,
                          color: active ? "#111" : "#aaa",
                          textAlign: "center", lineHeight: 1.3,
                        }}>
                          {step}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @media (max-width: 640px) {
          .track-input-wrap {
            flex-direction: column !important;
            border-radius: 10px !important;
            overflow: hidden !important;
          }
          .track-input-wrap input {
            border-radius: 0 !important;
          }
          .details-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .progress-steps {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>

      <Footer />
    </main>
  );
}
