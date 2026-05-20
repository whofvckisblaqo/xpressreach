"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [shipments, setShipments] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");

 useEffect(() => {
    const stored = localStorage.getItem("xr_user");
    if (!stored) {
      router.push("/login");
      return;
    }
    const parsed = JSON.parse(stored);
    setUser(parsed);
    if (parsed.role === "admin") {
      router.push("/admin");
      return;
    }
    fetchData(parsed.id);
  }, []);

  const fetchData = async (userId) => {
    try {
      const [shipmentsRes, quotesRes] = await Promise.all([
        fetch(`/api/shipments?userId=${userId}`),
        fetch(`/api/quotes?userId=${userId}`),
      ]);
      const shipmentsData = await shipmentsRes.json();
      const quotesData = await quotesRes.json();
      setShipments(shipmentsData.shipments || []);
      setQuotes(quotesData.quotes || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem("xr_user");
    router.push("/login");
  };

  const statusColor = (status) => {
    const map = {
      pending: { bg: "#fef9c3", color: "#a16207" },
      "picked-up": { bg: "#dbeafe", color: "#1d4ed8" },
      "in-transit": { bg: "#FFF5F2", color: "#E84C1E" },
      "out-for-delivery": { bg: "#ede9fe", color: "#7c3aed" },
      delivered: { bg: "#dcfce7", color: "#16a34a" },
      failed: { bg: "#fee2e2", color: "#dc2626" },
    };
    return map[status] || { bg: "#f0f0f0", color: "#666" };
  };

  if (!user) return null;

  const active = shipments.filter((s) => s.status !== "delivered" && s.status !== "failed").length;
  const delivered = shipments.filter((s) => s.status === "delivered").length;

  return (
    <main>
      <Navbar />

      <section style={{
        paddingTop: "70px", minHeight: "100vh",
        background: "#F5F5F5",
      }}>

        {/* Dashboard Header */}
        <div style={{ background: "#111", padding: "3rem 2rem" }}>
          <div style={{
            maxWidth: "1280px", margin: "0 auto",
            display: "flex", justifyContent: "space-between",
            alignItems: "center", flexWrap: "wrap", gap: "1rem",
          }}>
            <div>
              <p style={{
                fontFamily: "var(--font-barlow), sans-serif",
                fontSize: "0.75rem", fontWeight: 700,
                letterSpacing: "0.15em", textTransform: "uppercase",
                color: "#E84C1E", marginBottom: "0.4rem",
              }}>
                My Dashboard
              </p>
              <h1 style={{
                fontFamily: "var(--font-barlow), sans-serif",
                fontWeight: 900, fontSize: "clamp(1.5rem, 3vw, 2rem)",
                color: "#fff", letterSpacing: "-0.02em",
              }}>
                Welcome back, {user.name.split(" ")[0]}!
              </h1>
              <p style={{
                fontFamily: "var(--font-barlow), sans-serif",
                fontSize: "0.85rem", color: "#777", marginTop: "4px",
              }}>
                {user.email}
              </p>
            </div>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/quote" style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "#E84C1E", color: "#fff",
                padding: "0.75rem 1.5rem", borderRadius: "8px",
                fontFamily: "var(--font-barlow), sans-serif",
                fontWeight: 700, fontSize: "0.875rem",
                textDecoration: "none",
              }}>
                + New Quote
              </Link>
              <button onClick={handleSignOut} style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "8px", padding: "0.75rem 1.5rem",
                fontFamily: "var(--font-barlow), sans-serif",
                fontWeight: 700, fontSize: "0.875rem",
                color: "#fff", cursor: "pointer",
              }}>
                Sign Out
              </button>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div style={{ background: "#fff", borderBottom: "1px solid #eee" }}>
          <div style={{
            maxWidth: "1280px", margin: "0 auto",
            padding: "0 2rem",
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
          }} className="stats-strip">
            {[
              { label: "Total Shipments", value: shipments.length, icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )},
              { label: "Active", value: active, icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="#E84C1E" strokeWidth="2"/>
                  <path d="M12 8v4l3 3" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              )},
              { label: "Delivered", value: delivered, icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 4L12 14.01l-3-3" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )},
              { label: "Quote Requests", value: quotes.length, icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )},
            ].map((stat) => (
              <div key={stat.label} style={{
                padding: "1.5rem 1rem",
                borderRight: "1px solid #f0f0f0",
                display: "flex", alignItems: "center", gap: "1rem",
              }} className="stat-strip-item">
                <div style={{
                  width: "44px", height: "44px", flexShrink: 0,
                  background: "#FFF5F2", borderRadius: "10px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  {stat.icon}
                </div>
                <div>
                  <div style={{
                    fontFamily: "var(--font-barlow), sans-serif",
                    fontWeight: 900, fontSize: "1.5rem",
                    color: "#111", lineHeight: 1,
                  }}>
                    {loading ? "—" : stat.value}
                  </div>
                  <div style={{
                    fontFamily: "var(--font-barlow), sans-serif",
                    fontSize: "0.78rem", color: "#999",
                    marginTop: "2px",
                  }}>
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div style={{ background: "#fff", borderBottom: "1px solid #eee" }}>
          <div style={{
            maxWidth: "1280px", margin: "0 auto",
            padding: "0 2rem", display: "flex", gap: "0",
          }}>
            {[
              { key: "overview", label: "Overview" },
              { key: "shipments", label: "My Shipments" },
              { key: "quotes", label: "Quote Requests" },
              { key: "profile", label: "Profile" },
            ].map((tab) => (
              <button key={tab.key} onClick={() => setActiveTab(tab.key)} style={{
                padding: "1rem 1.5rem",
                background: "none", border: "none",
                fontFamily: "var(--font-barlow), sans-serif",
                fontWeight: 700, fontSize: "0.875rem",
                cursor: "pointer",
                color: activeTab === tab.key ? "#E84C1E" : "#777",
                borderBottom: activeTab === tab.key ? "2px solid #E84C1E" : "2px solid transparent",
                transition: "color 0.2s",
              }}>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "2.5rem 2rem" }}>

          {/* OVERVIEW */}
          {activeTab === "overview" && (
            <div>
              <div style={{
                display: "grid", gridTemplateColumns: "1fr 1fr",
                gap: "1.5rem",
              }} className="overview-grid">

                {/* Recent Shipments */}
                <div style={{
                  background: "#fff", borderRadius: "16px",
                  border: "1px solid #eee", overflow: "hidden",
                }}>
                  <div style={{
                    padding: "1.25rem 1.5rem",
                    borderBottom: "1px solid #f0f0f0",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                  }}>
                    <h3 style={{
                      fontFamily: "var(--font-barlow), sans-serif",
                      fontWeight: 800, fontSize: "0.95rem", color: "#111",
                      textTransform: "uppercase", letterSpacing: "0.05em",
                    }}>
                      Recent Shipments
                    </h3>
                    <button onClick={() => setActiveTab("shipments")} style={{
                      fontFamily: "var(--font-barlow), sans-serif",
                      fontSize: "0.78rem", fontWeight: 700,
                      color: "#E84C1E", background: "none",
                      border: "none", cursor: "pointer",
                    }}>
                      View All →
                    </button>
                  </div>

                  {loading ? (
                    <div style={{ padding: "2rem", textAlign: "center", color: "#aaa" }}>Loading...</div>
                  ) : shipments.length === 0 ? (
                    <div style={{ padding: "3rem", textAlign: "center" }}>
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" style={{ margin: "0 auto 1rem" }}>
                        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" stroke="#ddd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <p style={{
                        fontFamily: "var(--font-barlow), sans-serif",
                        fontSize: "0.875rem", color: "#bbb",
                      }}>
                        No shipments yet
                      </p>
                    </div>
                  ) : (
                    shipments.slice(0, 4).map((s) => (
                      <div key={s._id} style={{
                        padding: "1.1rem 1.5rem",
                        borderBottom: "1px solid #f5f5f5",
                        display: "flex", justifyContent: "space-between",
                        alignItems: "center", gap: "1rem",
                      }}>
                        <div>
                          <p style={{
                            fontFamily: "var(--font-barlow), sans-serif",
                            fontWeight: 700, fontSize: "0.875rem", color: "#111",
                            marginBottom: "2px",
                          }}>
                            {s.trackingCode}
                          </p>
                          <p style={{
                            fontFamily: "var(--font-barlow), sans-serif",
                            fontSize: "0.75rem", color: "#aaa",
                            display: "flex", alignItems: "center", gap: "4px",
                          }}>
                            {s.origin}
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                              <path d="M5 12h14M12 5l7 7-7 7" stroke="#E84C1E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            {s.destination}
                          </p>
                        </div>
                        <span style={{
                          background: statusColor(s.status).bg,
                          color: statusColor(s.status).color,
                          padding: "4px 10px", borderRadius: "100px",
                          fontFamily: "var(--font-barlow), sans-serif",
                          fontWeight: 700, fontSize: "0.72rem",
                          textTransform: "capitalize", whiteSpace: "nowrap",
                        }}>
                          {s.status.replace(/-/g, " ")}
                        </span>
                      </div>
                    ))
                  )}
                </div>

                {/* Recent Quotes */}
                <div style={{
                  background: "#fff", borderRadius: "16px",
                  border: "1px solid #eee", overflow: "hidden",
                }}>
                  <div style={{
                    padding: "1.25rem 1.5rem",
                    borderBottom: "1px solid #f0f0f0",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                  }}>
                    <h3 style={{
                      fontFamily: "var(--font-barlow), sans-serif",
                      fontWeight: 800, fontSize: "0.95rem", color: "#111",
                      textTransform: "uppercase", letterSpacing: "0.05em",
                    }}>
                      Quote Requests
                    </h3>
                    <button onClick={() => setActiveTab("quotes")} style={{
                      fontFamily: "var(--font-barlow), sans-serif",
                      fontSize: "0.78rem", fontWeight: 700,
                      color: "#E84C1E", background: "none",
                      border: "none", cursor: "pointer",
                    }}>
                      View All →
                    </button>
                  </div>

                  {loading ? (
                    <div style={{ padding: "2rem", textAlign: "center", color: "#aaa" }}>Loading...</div>
                  ) : quotes.length === 0 ? (
                    <div style={{ padding: "3rem", textAlign: "center" }}>
                      <p style={{
                        fontFamily: "var(--font-barlow), sans-serif",
                        fontSize: "0.875rem", color: "#bbb",
                      }}>
                        No quote requests yet
                      </p>
                      <Link href="/quote" style={{
                        display: "inline-block", marginTop: "0.75rem",
                        background: "#E84C1E", color: "#fff",
                        padding: "0.6rem 1.25rem", borderRadius: "6px",
                        fontFamily: "var(--font-barlow), sans-serif",
                        fontWeight: 700, fontSize: "0.8rem",
                        textDecoration: "none",
                      }}>
                        Request a Quote
                      </Link>
                    </div>
                  ) : (
                    quotes.slice(0, 4).map((q) => (
                      <div key={q._id} style={{
                        padding: "1.1rem 1.5rem",
                        borderBottom: "1px solid #f5f5f5",
                        display: "flex", justifyContent: "space-between",
                        alignItems: "center", gap: "1rem",
                      }}>
                        <div>
                          <p style={{
                            fontFamily: "var(--font-barlow), sans-serif",
                            fontWeight: 700, fontSize: "0.875rem", color: "#111",
                            marginBottom: "2px", textTransform: "capitalize",
                          }}>
                            {q.shipmentType} Freight
                          </p>
                          <p style={{
                            fontFamily: "var(--font-barlow), sans-serif",
                            fontSize: "0.75rem", color: "#aaa",
                          }}>
                            {q.origin} → {q.destination}
                          </p>
                        </div>
                        <span style={{
                          background: q.status === "reviewed" ? "#dcfce7" : "#FFF5F2",
                          color: q.status === "reviewed" ? "#16a34a" : "#E84C1E",
                          padding: "4px 10px", borderRadius: "100px",
                          fontFamily: "var(--font-barlow), sans-serif",
                          fontWeight: 700, fontSize: "0.72rem",
                          textTransform: "capitalize",
                        }}>
                          {q.status}
                        </span>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Quick Actions */}
              <div style={{
                marginTop: "1.5rem",
                display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1rem",
              }} className="quick-actions">
                {[
                  { label: "Track Shipment", href: "/tracking", icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <circle cx="11" cy="11" r="8" stroke="#E84C1E" strokeWidth="2"/>
                      <path d="m21 21-4.35-4.35" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  )},
                  { label: "Request a Quote", href: "/quote", icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14 2v6h6M12 18v-6M9 15h6" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )},
                  { label: "Contact Support", href: "/support", icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )},
                ].map((action) => (
                  <Link key={action.label} href={action.href} style={{
                    background: "#fff", borderRadius: "12px",
                    padding: "1.5rem", border: "1px solid #eee",
                    textDecoration: "none",
                    display: "flex", alignItems: "center", gap: "1rem",
                    transition: "border-color 0.2s, box-shadow 0.2s",
                  }} className="quick-action-card">
                    <div style={{
                      width: "44px", height: "44px", flexShrink: 0,
                      background: "#FFF5F2", borderRadius: "10px",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      {action.icon}
                    </div>
                    <span style={{
                      fontFamily: "var(--font-barlow), sans-serif",
                      fontWeight: 700, fontSize: "0.9rem", color: "#111",
                    }}>
                      {action.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* SHIPMENTS TAB */}
          {activeTab === "shipments" && (
            <div style={{
              background: "#fff", borderRadius: "16px",
              border: "1px solid #eee", overflow: "hidden",
            }}>
              <div style={{
                padding: "1.5rem",
                borderBottom: "1px solid #f0f0f0",
              }}>
                <h2 style={{
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontWeight: 900, fontSize: "1.1rem", color: "#111",
                  textTransform: "uppercase",
                }}>
                  My Shipments
                </h2>
              </div>

              {loading ? (
                <div style={{ padding: "3rem", textAlign: "center", color: "#aaa" }}>Loading...</div>
              ) : shipments.length === 0 ? (
                <div style={{ padding: "4rem", textAlign: "center" }}>
                  <p style={{
                    fontFamily: "var(--font-barlow), sans-serif",
                    fontSize: "1rem", color: "#bbb", marginBottom: "1rem",
                  }}>
                    You have no shipments yet.
                  </p>
                  <Link href="/quote" style={{
                    background: "#E84C1E", color: "#fff",
                    padding: "0.85rem 2rem", borderRadius: "8px",
                    fontFamily: "var(--font-barlow), sans-serif",
                    fontWeight: 700, fontSize: "0.9rem",
                    textDecoration: "none",
                  }}>
                    Request a Quote
                  </Link>
                </div>
              ) : (
                <div>
                  {/* Table Header */}
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "1.5fr 1fr 1fr 1fr 120px",
                    padding: "0.75rem 1.5rem",
                    background: "#fafafa",
                    borderBottom: "1px solid #f0f0f0",
                  }} className="table-header">
                    {["Tracking #", "From", "To", "Type", "Status"].map((h) => (
                      <span key={h} style={{
                        fontFamily: "var(--font-barlow), sans-serif",
                        fontSize: "0.72rem", fontWeight: 700,
                        color: "#aaa", textTransform: "uppercase",
                        letterSpacing: "0.08em",
                      }}>
                        {h}
                      </span>
                    ))}
                  </div>

                  {shipments.map((s) => (
                    <div key={s._id} style={{
                      display: "grid",
                      gridTemplateColumns: "1.5fr 1fr 1fr 1fr 120px",
                      padding: "1rem 1.5rem",
                      borderBottom: "1px solid #f5f5f5",
                      alignItems: "center",
                    }} className="table-row">
                      <span style={{
                        fontFamily: "var(--font-barlow), sans-serif",
                        fontWeight: 700, fontSize: "0.875rem", color: "#111",
                      }}>
                        {s.trackingCode}
                      </span>
                      <span style={{
                        fontFamily: "var(--font-barlow), sans-serif",
                        fontSize: "0.85rem", color: "#555",
                      }}>
                        {s.origin}
                      </span>
                      <span style={{
                        fontFamily: "var(--font-barlow), sans-serif",
                        fontSize: "0.85rem", color: "#555",
                      }}>
                        {s.destination}
                      </span>
                      <span style={{
                        fontFamily: "var(--font-barlow), sans-serif",
                        fontSize: "0.85rem", color: "#555",
                        textTransform: "capitalize",
                      }}>
                        {s.shipmentType || "Standard"}
                      </span>
                      <span style={{
                        background: statusColor(s.status).bg,
                        color: statusColor(s.status).color,
                        padding: "4px 10px", borderRadius: "100px",
                        fontFamily: "var(--font-barlow), sans-serif",
                        fontWeight: 700, fontSize: "0.72rem",
                        textTransform: "capitalize",
                        display: "inline-block",
                      }}>
                        {s.status.replace(/-/g, " ")}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* QUOTES TAB */}
          {activeTab === "quotes" && (
            <div style={{
              background: "#fff", borderRadius: "16px",
              border: "1px solid #eee", overflow: "hidden",
            }}>
              <div style={{
                padding: "1.5rem",
                borderBottom: "1px solid #f0f0f0",
                display: "flex", justifyContent: "space-between", alignItems: "center",
              }}>
                <h2 style={{
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontWeight: 900, fontSize: "1.1rem", color: "#111",
                  textTransform: "uppercase",
                }}>
                  Quote Requests
                </h2>
                <Link href="/quote" style={{
                  background: "#E84C1E", color: "#fff",
                  padding: "0.6rem 1.25rem", borderRadius: "6px",
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontWeight: 700, fontSize: "0.8rem",
                  textDecoration: "none",
                }}>
                  + New Quote
                </Link>
              </div>

              {loading ? (
                <div style={{ padding: "3rem", textAlign: "center", color: "#aaa" }}>Loading...</div>
              ) : quotes.length === 0 ? (
                <div style={{ padding: "4rem", textAlign: "center" }}>
                  <p style={{
                    fontFamily: "var(--font-barlow), sans-serif",
                    fontSize: "1rem", color: "#bbb", marginBottom: "1rem",
                  }}>
                    No quote requests yet.
                  </p>
                  <Link href="/quote" style={{
                    background: "#E84C1E", color: "#fff",
                    padding: "0.85rem 2rem", borderRadius: "8px",
                    fontFamily: "var(--font-barlow), sans-serif",
                    fontWeight: 700, fontSize: "0.9rem",
                    textDecoration: "none",
                  }}>
                    Request a Quote
                  </Link>
                </div>
              ) : (
                quotes.map((q) => (
                  <div key={q._id} style={{
                    padding: "1.25rem 1.5rem",
                    borderBottom: "1px solid #f5f5f5",
                    display: "flex", justifyContent: "space-between",
                    alignItems: "center", gap: "1rem", flexWrap: "wrap",
                  }}>
                    <div>
                      <p style={{
                        fontFamily: "var(--font-barlow), sans-serif",
                        fontWeight: 700, fontSize: "0.9rem", color: "#111",
                        marginBottom: "4px", textTransform: "capitalize",
                      }}>
                        {q.shipmentType} Freight — {q.origin} → {q.destination}
                      </p>
                      <p style={{
                        fontFamily: "var(--font-barlow), sans-serif",
                        fontSize: "0.78rem", color: "#aaa",
                      }}>
                        {q.weight && `Weight: ${q.weight} · `}
                        Submitted: {new Date(q.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <span style={{
                      background: q.status === "reviewed" ? "#dcfce7" : "#FFF5F2",
                      color: q.status === "reviewed" ? "#16a34a" : "#E84C1E",
                      padding: "5px 14px", borderRadius: "100px",
                      fontFamily: "var(--font-barlow), sans-serif",
                      fontWeight: 700, fontSize: "0.78rem",
                      textTransform: "capitalize",
                    }}>
                      {q.status}
                    </span>
                  </div>
                ))
              )}
            </div>
          )}

          {/* PROFILE TAB */}
          {activeTab === "profile" && (
            <div style={{
              maxWidth: "600px",
              background: "#fff", borderRadius: "16px",
              border: "1px solid #eee", padding: "2rem",
            }}>
              <h2 style={{
                fontFamily: "var(--font-barlow), sans-serif",
                fontWeight: 900, fontSize: "1.1rem", color: "#111",
                textTransform: "uppercase", marginBottom: "2rem",
              }}>
                Account Details
              </h2>

              {[
                { label: "Full Name", value: user.name },
                { label: "Email Address", value: user.email },
                { label: "Phone", value: user.phone || "Not provided" },
                { label: "Account Role", value: user.role },
              ].map((field) => (
                <div key={field.label} style={{
                  display: "flex", justifyContent: "space-between",
                  alignItems: "center", padding: "1rem 0",
                  borderBottom: "1px solid #f5f5f5",
                }}>
                  <span style={{
                    fontFamily: "var(--font-barlow), sans-serif",
                    fontSize: "0.8rem", fontWeight: 700,
                    color: "#aaa", textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}>
                    {field.label}
                  </span>
                  <span style={{
                    fontFamily: "var(--font-barlow), sans-serif",
                    fontSize: "0.9rem", fontWeight: 600, color: "#111",
                    textTransform: "capitalize",
                  }}>
                    {field.value}
                  </span>
                </div>
              ))}

              <button onClick={handleSignOut} style={{
                marginTop: "2rem", width: "100%",
                padding: "0.9rem", background: "none",
                border: "1px solid #eee", borderRadius: "8px",
                fontFamily: "var(--font-barlow), sans-serif",
                fontWeight: 700, fontSize: "0.9rem",
                color: "#E84C1E", cursor: "pointer",
              }}>
                Sign Out
              </button>
            </div>
          )}
        </div>
      </section>

      <style>{`
        .stats-strip { overflow-x: auto; }
        .quick-action-card:hover {
          border-color: #E84C1E !important;
          box-shadow: 0 4px 20px rgba(232,76,30,0.1);
        }
        @media (max-width: 1024px) {
          .overview-grid { grid-template-columns: 1fr !important; }
          .quick-actions { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .stats-strip { grid-template-columns: repeat(2, 1fr) !important; }
          .stat-strip-item { border-right: none !important; border-bottom: 1px solid #f0f0f0; }
          .table-header { display: none !important; }
          .table-row { grid-template-columns: 1fr 1fr !important; gap: 0.5rem !important; }
        }
        @media (max-width: 480px) {
          .stats-strip { grid-template-columns: 1fr !important; }
          .quick-actions { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <Footer />
    </main>
  );
}