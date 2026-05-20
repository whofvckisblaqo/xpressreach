"use client";

import { useState } from "react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function QuotePage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    origin: "",
    destination: "",
    shipmentType: "",
    weight: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.origin || !form.destination || !form.shipmentType) {
      setError("Please fill in all required fields.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/quotes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to submit");
      setSuccess(true);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: "100%", padding: "0.875rem 1rem",
    border: "1px solid #e0e0e0", borderRadius: "8px",
    fontFamily: "var(--font-barlow), sans-serif",
    fontSize: "0.9rem", color: "#333",
    background: "#fafafa", outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
  };

  const labelStyle = {
    fontFamily: "var(--font-barlow), sans-serif",
    fontSize: "0.8rem", fontWeight: 700,
    color: "#444", marginBottom: "6px",
    display: "block", textTransform: "uppercase",
    letterSpacing: "0.05em",
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
          backgroundImage: `url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=60)`,
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
            Get Started
          </p>
          <h1 style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 900, color: "#fff",
            letterSpacing: "-0.02em", lineHeight: 1.1,
            marginBottom: "1.25rem", textTransform: "uppercase",
          }}>
            Request a Free Quote
          </h1>
          <p style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "1rem", color: "rgba(255,255,255,0.6)",
            lineHeight: 1.8, maxWidth: "500px", margin: "0 auto",
          }}>
            Fill in your shipment details and our logistics experts will get back to you within 24 hours with the best rates.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section style={{ background: "#F5F5F5", padding: "5rem 2rem" }}>
        <div style={{
          maxWidth: "1100px", margin: "0 auto",
          display: "grid", gridTemplateColumns: "1fr 380px",
          gap: "3rem", alignItems: "start",
        }} className="quote-grid">

          {/* Form */}
          <div style={{
            background: "#fff", borderRadius: "16px",
            padding: "2.5rem",
            boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
            border: "1px solid #f0f0f0",
          }}>
            {success ? (
              <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                <div style={{
                  width: "72px", height: "72px",
                  background: "#E84C1E", borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 1.5rem",
                }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17l-5-5" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h2 style={{
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontWeight: 900, fontSize: "1.5rem", color: "#111",
                  marginBottom: "0.75rem",
                }}>
                  Quote Request Submitted!
                </h2>
                <p style={{
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontSize: "0.95rem", color: "#777", lineHeight: 1.7,
                  marginBottom: "1.5rem",
                }}>
                  Thank you, {form.name}! Our team will review your request and reach out to you at <strong>{form.email}</strong> within 24 hours.
                </p>
                <button onClick={() => { setSuccess(false); setForm({ name: "", email: "", phone: "", origin: "", destination: "", shipmentType: "", weight: "", message: "" }); }} style={{
                  background: "#E84C1E", color: "#fff",
                  border: "none", borderRadius: "8px",
                  padding: "0.85rem 2rem", cursor: "pointer",
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontWeight: 700, fontSize: "0.9rem",
                }}>
                  Submit Another Quote
                </button>
              </div>
            ) : (
              <>
                <h2 style={{
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontWeight: 900, fontSize: "1.3rem", color: "#111",
                  marginBottom: "0.5rem", textTransform: "uppercase",
                }}>
                  Shipment Details
                </h2>
                <p style={{
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontSize: "0.85rem", color: "#999", marginBottom: "2rem",
                }}>
                  Fields marked with * are required.
                </p>

                {/* Personal Info */}
                <div style={{
                  display: "grid", gridTemplateColumns: "1fr 1fr",
                  gap: "1.25rem", marginBottom: "1.25rem",
                }} className="form-row">
                  <div>
                    <label style={labelStyle}>Full Name *</label>
                    <input
                      name="name" value={form.name}
                      onChange={handleChange}
                      placeholder="James Thornton"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Email Address *</label>
                    <input
                      name="email" value={form.email}
                      onChange={handleChange}
                      placeholder="james@company.com"
                      type="email" style={inputStyle}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: "1.25rem" }}>
                  <label style={labelStyle}>Phone Number</label>
                  <input
                    name="phone" value={form.phone}
                    onChange={handleChange}
                    placeholder="+1 234 567 890"
                    style={inputStyle}
                  />
                </div>

                {/* Shipment Info */}
                <div style={{
                  height: "1px", background: "#f0f0f0",
                  margin: "1.5rem 0",
                }} />

                <div style={{
                  display: "grid", gridTemplateColumns: "1fr 1fr",
                  gap: "1.25rem", marginBottom: "1.25rem",
                }} className="form-row">
                  <div>
                    <label style={labelStyle}>Origin *</label>
                    <input
                      name="origin" value={form.origin}
                      onChange={handleChange}
                      placeholder="e.g. New York, USA"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Destination *</label>
                    <input
                      name="destination" value={form.destination}
                      onChange={handleChange}
                      placeholder="e.g. London, UK"
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div style={{
                  display: "grid", gridTemplateColumns: "1fr 1fr",
                  gap: "1.25rem", marginBottom: "1.25rem",
                }} className="form-row">
                  <div>
                    <label style={labelStyle}>Shipment Type *</label>
                    <select
                      name="shipmentType" value={form.shipmentType}
                      onChange={handleChange}
                      style={{ ...inputStyle, cursor: "pointer" }}
                    >
                      <option value="">Select type</option>
                      <option value="ocean">Ocean Freight</option>
                      <option value="air">Air Freight</option>
                      <option value="road">Road Transport</option>
                      <option value="warehouse">Warehousing</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Estimated Weight</label>
                    <input
                      name="weight" value={form.weight}
                      onChange={handleChange}
                      placeholder="e.g. 500kg"
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: "1.75rem" }}>
                  <label style={labelStyle}>Additional Notes</label>
                  <textarea
                    name="message" value={form.message}
                    onChange={handleChange}
                    placeholder="Any special requirements, cargo description, or questions..."
                    rows={4}
                    style={{
                      ...inputStyle,
                      resize: "vertical",
                      minHeight: "110px",
                    }}
                  />
                </div>

                {error && (
                  <p style={{
                    fontFamily: "var(--font-barlow), sans-serif",
                    fontSize: "0.85rem", color: "#E84C1E",
                    marginBottom: "1rem",
                    background: "#FFF5F2",
                    padding: "0.75rem 1rem",
                    borderRadius: "8px",
                    border: "1px solid #ffd5c8",
                  }}>
                    {error}
                  </p>
                )}

                <button onClick={handleSubmit} disabled={loading} style={{
                  width: "100%", padding: "1rem",
                  background: loading ? "#f0a080" : "#E84C1E",
                  color: "#fff", border: "none",
                  borderRadius: "8px", cursor: loading ? "not-allowed" : "pointer",
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontWeight: 700, fontSize: "1rem",
                  letterSpacing: "0.03em",
                  display: "flex", alignItems: "center",
                  justifyContent: "center", gap: "8px",
                }}>
                  {loading ? "Submitting..." : "Submit Quote Request"}
                  {!loading && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </button>
              </>
            )}
          </div>

          {/* Sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>

            {/* Contact card */}
            <div style={{
              background: "#E84C1E", borderRadius: "16px",
              padding: "2rem",
            }}>
              <h3 style={{
                fontFamily: "var(--font-barlow), sans-serif",
                fontWeight: 900, fontSize: "1.1rem",
                color: "#fff", marginBottom: "0.75rem",
                textTransform: "uppercase",
              }}>
                Need Help?
              </h3>
              <p style={{
                fontFamily: "var(--font-barlow), sans-serif",
                fontSize: "0.85rem", color: "rgba(255,255,255,0.8)",
                lineHeight: 1.7, marginBottom: "1.5rem",
              }}>
                Our logistics experts are available 24/7 to help you find the best shipping solution.
              </p>
              {[
                {
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                  text: "+1 234 567 890",
                },
                {
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M22 6l-10 7L2 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                  text: "xpressreach@outlook.com",
                },
              ].map((c, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: "10px",
                  marginBottom: "0.75rem",
                }}>
                  {c.icon}
                  <span style={{
                    fontFamily: "var(--font-barlow), sans-serif",
                    fontSize: "0.85rem", color: "#fff", fontWeight: 600,
                  }}>
                    {c.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Why us card */}
            <div style={{
              background: "#fff", borderRadius: "16px",
              padding: "2rem",
              boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
              border: "1px solid #f0f0f0",
            }}>
              <h3 style={{
                fontFamily: "var(--font-barlow), sans-serif",
                fontWeight: 900, fontSize: "1rem",
                color: "#111", marginBottom: "1.25rem",
                textTransform: "uppercase",
              }}>
                Why Choose Us
              </h3>
              {[
                "Response within 24 hours",
                "Competitive global rates",
                "No hidden charges",
                "End-to-end tracking",
                "Dedicated account manager",
              ].map((item) => (
                <div key={item} style={{
                  display: "flex", alignItems: "center",
                  gap: "10px", marginBottom: "0.75rem",
                }}>
                  <div style={{
                    width: "20px", height: "20px", flexShrink: 0,
                    background: "#FFF5F2", border: "1px solid #ffd5c8",
                    borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17l-5-5" stroke="#E84C1E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span style={{
                    fontFamily: "var(--font-barlow), sans-serif",
                    fontSize: "0.85rem", color: "#555", fontWeight: 500,
                  }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .quote-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 540px) {
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <Footer />
    </main>
  );
}