"use client";

import { useState } from "react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function CookiesPage() {
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const cookieTypes = [
    {
      name: "Essential Cookies",
      required: true,
      enabled: true,
      description: "These cookies are necessary for the XpressReach platform to function properly. They enable core features such as session management, security, and account authentication. These cannot be disabled.",
      examples: ["Session authentication token", "Security CSRF token", "User preferences storage", "Load balancing cookies"],
    },
    {
      name: "Analytics Cookies",
      required: false,
      enabled: analytics,
      toggle: () => setAnalytics(!analytics),
      description: "These cookies help us understand how visitors interact with our platform. We use this data to improve our services, fix issues, and enhance the user experience. All data is anonymized.",
      examples: ["Page view tracking", "User journey analysis", "Performance monitoring", "Error reporting"],
    },
    {
      name: "Marketing Cookies",
      required: false,
      enabled: marketing,
      toggle: () => setMarketing(!marketing),
      description: "Marketing cookies are used to deliver relevant advertisements and promotional content based on your browsing behavior. They help us measure the effectiveness of our marketing campaigns.",
      examples: ["Ad targeting and personalization", "Campaign performance tracking", "Retargeting pixels", "Social media tracking"],
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
          position: "relative", zIndex: 1,
          maxWidth: "1280px", margin: "0 auto",
          padding: "5rem 2rem",
        }}>
          <p style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "0.75rem", fontWeight: 700,
            letterSpacing: "0.15em", textTransform: "uppercase",
            color: "#E84C1E", marginBottom: "1rem",
          }}>
            Legal
          </p>
          <h1 style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 900, color: "#fff",
            letterSpacing: "-0.02em", lineHeight: 1.1,
            marginBottom: "1rem", textTransform: "uppercase",
          }}>
            Cookie Policy
          </h1>
          <p style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "0.9rem", color: "rgba(255,255,255,0.5)",
          }}>
            Last updated: May 20, 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ background: "#F5F5F5", padding: "5rem 2rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>

          {/* Intro */}
          <div style={{
            background: "#fff", borderRadius: "16px",
            padding: "2rem", border: "1px solid #eee",
            marginBottom: "1.5rem",
          }}>
            <h2 style={{
              fontFamily: "var(--font-barlow), sans-serif",
              fontWeight: 900, fontSize: "1.1rem", color: "#111",
              marginBottom: "1rem", textTransform: "uppercase",
            }}>
              What Are Cookies?
            </h2>
            <p style={{
              fontFamily: "var(--font-barlow), sans-serif",
              fontSize: "0.9rem", color: "#555", lineHeight: 1.9,
              marginBottom: "1rem",
            }}>
              Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work efficiently, provide a better user experience, and give website owners useful insights about how their platform is being used.
            </p>
            <p style={{
              fontFamily: "var(--font-barlow), sans-serif",
              fontSize: "0.9rem", color: "#555", lineHeight: 1.9,
            }}>
              XpressReach uses cookies and similar tracking technologies to operate our platform, analyze usage patterns, and — with your consent — deliver relevant marketing content. This policy explains the types of cookies we use and how you can manage your preferences.
            </p>
          </div>

          {/* Cookie Types */}
          {cookieTypes.map((cookie, i) => (
            <div key={cookie.name} style={{
              background: "#fff", borderRadius: "16px",
              padding: "2rem", border: "1px solid #eee",
              marginBottom: "1.5rem",
            }}>
              <div style={{
                display: "flex", justifyContent: "space-between",
                alignItems: "center", marginBottom: "1rem",
                flexWrap: "wrap", gap: "1rem",
              }}>
                <div>
                  <h2 style={{
                    fontFamily: "var(--font-barlow), sans-serif",
                    fontWeight: 900, fontSize: "1.05rem", color: "#111",
                    marginBottom: "0.3rem",
                  }}>
                    {cookie.name}
                  </h2>
                  {cookie.required && (
                    <span style={{
                      background: "#F5F5F5", color: "#999",
                      padding: "2px 10px", borderRadius: "100px",
                      fontFamily: "var(--font-barlow), sans-serif",
                      fontWeight: 700, fontSize: "0.7rem",
                    }}>
                      Always Active
                    </span>
                  )}
                </div>

                {/* Toggle */}
                {!cookie.required && (
                  <button onClick={cookie.toggle} style={{
                    width: "52px", height: "28px",
                    borderRadius: "100px",
                    background: cookie.enabled ? "#E84C1E" : "#ddd",
                    border: "none", cursor: "pointer",
                    position: "relative",
                    transition: "background 0.3s",
                    flexShrink: 0,
                  }}>
                    <div style={{
                      width: "22px", height: "22px",
                      background: "#fff", borderRadius: "50%",
                      position: "absolute",
                      top: "3px",
                      left: cookie.enabled ? "27px" : "3px",
                      transition: "left 0.3s",
                      boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
                    }} />
                  </button>
                )}

                {cookie.required && (
                  <div style={{
                    width: "52px", height: "28px",
                    borderRadius: "100px",
                    background: "#E84C1E",
                    position: "relative",
                    opacity: 0.5,
                    flexShrink: 0,
                  }}>
                    <div style={{
                      width: "22px", height: "22px",
                      background: "#fff", borderRadius: "50%",
                      position: "absolute", top: "3px", left: "27px",
                      boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
                    }} />
                  </div>
                )}
              </div>

              <p style={{
                fontFamily: "var(--font-barlow), sans-serif",
                fontSize: "0.875rem", color: "#666",
                lineHeight: 1.75, marginBottom: "1.25rem",
              }}>
                {cookie.description}
              </p>

              <div>
                <p style={{
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontSize: "0.75rem", fontWeight: 700,
                  color: "#999", textTransform: "uppercase",
                  letterSpacing: "0.1em", marginBottom: "0.75rem",
                }}>
                  Examples
                </p>
                <div style={{
                  display: "grid", gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "0.5rem",
                }} className="examples-grid">
                  {cookie.examples.map((ex) => (
                    <div key={ex} style={{
                      display: "flex", alignItems: "center", gap: "8px",
                    }}>
                      <div style={{
                        width: "6px", height: "6px",
                        background: "#E84C1E", borderRadius: "50%",
                        flexShrink: 0,
                      }} />
                      <span style={{
                        fontFamily: "var(--font-barlow), sans-serif",
                        fontSize: "0.82rem", color: "#666",
                      }}>
                        {ex}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Save Preferences */}
          <div style={{
            background: "#fff", borderRadius: "16px",
            padding: "2rem", border: "1px solid #eee",
            marginBottom: "1.5rem",
            display: "flex", justifyContent: "space-between",
            alignItems: "center", flexWrap: "wrap", gap: "1rem",
          }}>
            <div>
              <h3 style={{
                fontFamily: "var(--font-barlow), sans-serif",
                fontWeight: 800, fontSize: "1rem", color: "#111",
                marginBottom: "0.3rem",
              }}>
                Save Your Preferences
              </h3>
              <p style={{
                fontFamily: "var(--font-barlow), sans-serif",
                fontSize: "0.83rem", color: "#999",
              }}>
                Your cookie preferences will be saved for 12 months.
              </p>
            </div>
            <button onClick={handleSave} style={{
              background: saved ? "#22c55e" : "#E84C1E",
              color: "#fff", border: "none",
              padding: "0.85rem 2rem", borderRadius: "8px",
              fontFamily: "var(--font-barlow), sans-serif",
              fontWeight: 700, fontSize: "0.9rem",
              cursor: "pointer", transition: "background 0.3s",
              display: "flex", alignItems: "center", gap: "8px",
            }}>
              {saved ? (
                <>
                  Saved!
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17l-5-5" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </>
              ) : "Save Preferences"}
            </button>
          </div>

          {/* More Info */}
          <div style={{
            background: "#fff", borderRadius: "16px",
            padding: "2rem", border: "1px solid #eee",
          }}>
            <h2 style={{
              fontFamily: "var(--font-barlow), sans-serif",
              fontWeight: 900, fontSize: "1.05rem", color: "#111",
              marginBottom: "1rem", textTransform: "uppercase",
            }}>
              Managing Cookies in Your Browser
            </h2>
            <p style={{
              fontFamily: "var(--font-barlow), sans-serif",
              fontSize: "0.9rem", color: "#555", lineHeight: 1.9,
              marginBottom: "1rem",
            }}>
              In addition to the controls above, you can manage cookies through your browser settings. Most browsers allow you to view, delete, and block cookies from specific websites. Note that blocking essential cookies may affect the functionality of our platform.
            </p>
            <p style={{
              fontFamily: "var(--font-barlow), sans-serif",
              fontSize: "0.9rem", color: "#555", lineHeight: 1.9,
              marginBottom: "1.25rem",
            }}>
              For questions about our Cookie Policy or to withdraw consent, please contact us at{" "}
              <a href="mailto:xpressreach@outlook.com" style={{ color: "#E84C1E", fontWeight: 600 }}>
                xpressreach@outlook.com
              </a>
            </p>
          </div>
        </div>

        <style>{`
          @media (max-width: 540px) {
            .examples-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      <Footer />
    </main>
  );
}