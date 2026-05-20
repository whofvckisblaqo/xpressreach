"use client";

import { useState } from "react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function SupportPage() {
  const [form, setForm] = useState({
    name: "", email: "", subject: "", message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.subject || !form.message) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 1500));
      setSuccess(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const faqs = [
    {
      q: "How do I track my shipment?",
      a: "You can track your shipment by visiting our Tracking page and entering your unique tracking number. You'll get real-time updates on your shipment's location and status.",
    },
    {
      q: "How long does international shipping take?",
      a: "Delivery times vary by service. Air freight typically takes 3–7 business days, ocean freight 15–30 days depending on the route, and road transport varies by distance.",
    },
    {
      q: "What items are prohibited from shipping?",
      a: "Prohibited items include hazardous materials, illegal substances, live animals (without special permits), perishable goods (without cold chain service), and counterfeit products.",
    },
    {
      q: "How is my shipment insured?",
      a: "All shipments are covered by our standard liability policy. We also offer comprehensive cargo insurance for high-value goods. Contact us to learn more about coverage options.",
    },
    {
      q: "Can I change my delivery address after shipping?",
      a: "Address changes may be possible depending on the shipment's current status. Contact our support team as soon as possible and we'll do our best to accommodate the change.",
    },
    {
      q: "How do I get a shipping quote?",
      a: "You can request a free quote through our Quote page. Fill in your shipment details and our team will respond within 24 hours with the best available rates.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept all major credit/debit cards, bank transfers, and online payment platforms. Payment terms vary depending on the service and shipment size.",
    },
    {
      q: "What happens if my shipment is delayed?",
      a: "In case of delays, our team proactively notifies you with updated delivery estimates. You can also reach out to our 24/7 support team for immediate assistance.",
    },
  ];

  const inputStyle = {
    width: "100%", padding: "0.875rem 1rem",
    border: "1px solid #e0e0e0", borderRadius: "8px",
    fontFamily: "var(--font-barlow), sans-serif",
    fontSize: "0.9rem", color: "#333",
    background: "#fafafa", outline: "none",
    boxSizing: "border-box",
  };

  const labelStyle = {
    fontFamily: "var(--font-barlow), sans-serif",
    fontSize: "0.78rem", fontWeight: 700,
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
          backgroundImage: `url(https://images.unsplash.com/photo-1553413077-190dd305871c?w=1600&q=60)`,
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
            We Are Here For You
          </p>
          <h1 style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 900, color: "#fff",
            letterSpacing: "-0.02em", lineHeight: 1.1,
            marginBottom: "1.25rem", textTransform: "uppercase",
          }}>
            How Can We Help You?
          </h1>
          <p style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "1rem", color: "rgba(255,255,255,0.6)",
            lineHeight: 1.8, maxWidth: "500px", margin: "0 auto",
          }}>
            Our support team is available 24/7 to assist you with any questions, shipment issues, or general inquiries.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section style={{ background: "#fff", padding: "4rem 2rem" }}>
        <div style={{
          maxWidth: "1280px", margin: "0 auto",
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.5rem",
        }} className="contact-options">
          {[
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
              title: "Call Us",
              detail: "+1 234 567 890",
              sub: "Mon – Sun, 24/7",
              href: "tel:+1234567890",
            },
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 6l-10 7L2 6" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
              title: "Email Us",
              detail: "xpressreach@outlook.com",
              sub: "Response within 24 hours",
              href: "mailto:xpressreach@outlook.com",
            },
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
              title: "Live Chat",
              detail: "Chat with an Agent",
              sub: "Available 24/7",
              href: "#",
            },
          ].map((c) => (
            <a key={c.title} href={c.href} style={{
              background: "#F5F5F5", borderRadius: "16px",
              padding: "2rem", textAlign: "center",
              border: "1px solid #eee", textDecoration: "none",
              transition: "border-color 0.3s, box-shadow 0.3s",
              display: "block",
            }} className="contact-option-card">
              <div style={{
                width: "60px", height: "60px",
                background: "#FFF5F2", borderRadius: "12px",
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 1.25rem",
              }}>
                {c.icon}
              </div>
              <h3 style={{
                fontFamily: "var(--font-barlow), sans-serif",
                fontWeight: 800, fontSize: "1rem",
                color: "#111", marginBottom: "0.4rem",
              }}>
                {c.title}
              </h3>
              <p style={{
                fontFamily: "var(--font-barlow), sans-serif",
                fontWeight: 700, fontSize: "0.9rem",
                color: "#E84C1E", marginBottom: "0.25rem",
              }}>
                {c.detail}
              </p>
              <p style={{
                fontFamily: "var(--font-barlow), sans-serif",
                fontSize: "0.78rem", color: "#999",
              }}>
                {c.sub}
              </p>
            </a>
          ))}
        </div>

        <style>{`
          .contact-option-card:hover {
            border-color: #E84C1E !important;
            box-shadow: 0 8px 32px rgba(232,76,30,0.1);
          }
          @media (max-width: 768px) {
            .contact-options { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* FAQ + Form */}
      <section style={{ background: "#F5F5F5", padding: "5rem 2rem" }}>
        <div style={{
          maxWidth: "1280px", margin: "0 auto",
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: "4rem", alignItems: "start",
        }} className="support-grid">

          {/* FAQ */}
          <div>
            <p style={{
              fontFamily: "var(--font-barlow), sans-serif",
              fontSize: "0.75rem", fontWeight: 700,
              letterSpacing: "0.15em", textTransform: "uppercase",
              color: "#E84C1E", marginBottom: "0.75rem",
            }}>
              FAQ
            </p>
            <h2 style={{
              fontFamily: "var(--font-barlow), sans-serif",
              fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
              fontWeight: 900, color: "#111",
              letterSpacing: "-0.02em", marginBottom: "2rem",
            }}>
              Frequently Asked Questions
            </h2>

            <div>
              {faqs.map((faq, i) => (
                <div key={i} style={{
                  background: "#fff", borderRadius: "10px",
                  marginBottom: "0.75rem", overflow: "hidden",
                  border: `1px solid ${openFaq === i ? "#E84C1E" : "#eee"}`,
                  transition: "border-color 0.2s",
                }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{
                    width: "100%", padding: "1.1rem 1.25rem",
                    background: "none", border: "none",
                    display: "flex", justifyContent: "space-between",
                    alignItems: "center", cursor: "pointer",
                    gap: "1rem",
                  }}>
                    <span style={{
                      fontFamily: "var(--font-barlow), sans-serif",
                      fontWeight: 700, fontSize: "0.9rem",
                      color: "#111", textAlign: "left",
                    }}>
                      {faq.q}
                    </span>
                    <div style={{
                      width: "26px", height: "26px", flexShrink: 0,
                      background: openFaq === i ? "#E84C1E" : "#F5F5F5",
                      borderRadius: "50%",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "background 0.2s",
                    }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                        style={{ transform: openFaq === i ? "rotate(180deg)" : "none", transition: "transform 0.3s" }}>
                        <path d="M6 9l6 6 6-6" stroke={openFaq === i ? "#fff" : "#555"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </button>
                  {openFaq === i && (
                    <div style={{
                      padding: "0 1.25rem 1.25rem",
                      fontFamily: "var(--font-barlow), sans-serif",
                      fontSize: "0.875rem", color: "#666",
                      lineHeight: 1.75,
                    }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
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
                <h3 style={{
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontWeight: 900, fontSize: "1.3rem", color: "#111",
                  marginBottom: "0.75rem",
                }}>
                  Message Sent!
                </h3>
                <p style={{
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontSize: "0.9rem", color: "#777", lineHeight: 1.7,
                }}>
                  Thank you for reaching out, {form.name}. Our team will get back to you at <strong>{form.email}</strong> shortly.
                </p>
              </div>
            ) : (
              <>
                <h2 style={{
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontWeight: 900, fontSize: "1.3rem", color: "#111",
                  marginBottom: "0.5rem", textTransform: "uppercase",
                }}>
                  Send Us a Message
                </h2>
                <p style={{
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontSize: "0.85rem", color: "#999",
                  marginBottom: "2rem",
                }}>
                  We'll get back to you within 24 hours.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <div>
                    <label style={labelStyle}>Full Name</label>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="James Thornton" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Email Address</label>
                    <input name="email" value={form.email} onChange={handleChange} placeholder="james@company.com" type="email" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Subject</label>
                    <input name="subject" value={form.subject} onChange={handleChange} placeholder="e.g. Shipment delay inquiry" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Message</label>
                    <textarea
                      name="message" value={form.message}
                      onChange={handleChange}
                      placeholder="Describe your issue or question in detail..."
                      rows={5}
                      style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
                    />
                  </div>

                  {error && (
                    <p style={{
                      fontFamily: "var(--font-barlow), sans-serif",
                      fontSize: "0.85rem", color: "#E84C1E",
                      background: "#FFF5F2", padding: "0.75rem 1rem",
                      borderRadius: "8px", border: "1px solid #ffd5c8",
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
                    display: "flex", alignItems: "center",
                    justifyContent: "center", gap: "8px",
                  }}>
                    {loading ? "Sending..." : "Send Message"}
                    {!loading && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .support-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      <Footer />
    </main>
  );
}