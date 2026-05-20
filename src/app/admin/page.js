"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AdminSidebar from "@/components/ui/AdminSidebar";

export default function AdminPage() {
  const router = useRouter();
  const [stats, setStats] = useState(null);
  const [recentShipments, setRecentShipments] = useState([]);
  const [recentQuotes, setRecentQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem("xr_user");
    if (!user) { router.push("/login"); return; }
    const parsed = JSON.parse(user);
    if (parsed.role !== "admin") { router.push("/dashboard"); return; }
    fetchAll();
  }, []);

  const fetchAll = async () => {
    try {
      const [statsRes, shipmentsRes, quotesRes] = await Promise.all([
        fetch("/api/admin/stats"),
        fetch("/api/admin/shipments"),
        fetch("/api/admin/quotes"),
      ]);
      const statsData = await statsRes.json();
      const shipmentsData = await shipmentsRes.json();
      const quotesData = await quotesRes.json();
      setStats(statsData);
      setRecentShipments(shipmentsData.shipments?.slice(0, 5) || []);
      setRecentQuotes(quotesData.quotes?.slice(0, 5) || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
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

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#F5F5F5" }}>
      <AdminSidebar />

      <main style={{ flex: 1, overflow: "auto" }}>
        {/* Header */}
        <div style={{
          background: "#fff", padding: "1.5rem 2rem",
          borderBottom: "1px solid #eee",
          display: "flex", justifyContent: "space-between",
          alignItems: "center", flexWrap: "wrap", gap: "1rem",
        }}>
          <div>
            <h1 style={{
              fontFamily: "var(--font-barlow), sans-serif",
              fontWeight: 900, fontSize: "1.4rem", color: "#111",
              letterSpacing: "-0.02em",
            }}>
              Admin Overview
            </h1>
            <p style={{
              fontFamily: "var(--font-barlow), sans-serif",
              fontSize: "0.82rem", color: "#999", marginTop: "2px",
            }}>
              XpressReach Control Panel
            </p>
          </div>
          <Link href="/admin/shipments" style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "#E84C1E", color: "#fff",
            padding: "0.7rem 1.5rem", borderRadius: "8px",
            fontFamily: "var(--font-barlow), sans-serif",
            fontWeight: 700, fontSize: "0.875rem",
            textDecoration: "none",
          }}>
            + Add Shipment
          </Link>
        </div>

        <div style={{ padding: "2rem" }}>

          {/* Stats Grid */}
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(5, 1fr)",
            gap: "1rem", marginBottom: "2rem",
          }} className="admin-stats">
            {[
              { label: "Total Users", value: stats?.users, icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="9" cy="7" r="4" stroke="#E84C1E" strokeWidth="2"/>
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )},
              { label: "Total Shipments", value: stats?.shipments, icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )},
              { label: "Active", value: stats?.activeShipments, icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="#E84C1E" strokeWidth="2"/>
                  <path d="M12 8v4l3 3" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              )},
              { label: "Delivered", value: stats?.deliveredShipments, icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M22 4L12 14.01l-3-3" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              )},
              { label: "Quotes", value: stats?.quotes, icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2v6h6" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )},
            ].map((stat) => (
              <div key={stat.label} style={{
                background: "#fff", borderRadius: "14px",
                padding: "1.25rem", border: "1px solid #eee",
              }}>
                <div style={{
                  width: "44px", height: "44px",
                  background: "#FFF5F2", borderRadius: "10px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: "1rem",
                }}>
                  {stat.icon}
                </div>
                <div style={{
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontWeight: 900, fontSize: "1.75rem",
                  color: "#111", lineHeight: 1,
                }}>
                  {loading ? "—" : stat.value ?? 0}
                </div>
                <div style={{
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontSize: "0.78rem", color: "#aaa", marginTop: "4px",
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Recent Tables */}
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr",
            gap: "1.5rem",
          }} className="admin-tables">

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
                  fontWeight: 800, fontSize: "0.9rem", color: "#111",
                  textTransform: "uppercase", letterSpacing: "0.05em",
                }}>
                  Recent Shipments
                </h3>
                <Link href="/admin/shipments" style={{
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontSize: "0.78rem", fontWeight: 700,
                  color: "#E84C1E", textDecoration: "none",
                }}>
                  View All →
                </Link>
              </div>

              {recentShipments.length === 0 ? (
                <div style={{ padding: "2rem", textAlign: "center" }}>
                  <p style={{
                    fontFamily: "var(--font-barlow), sans-serif",
                    fontSize: "0.875rem", color: "#bbb",
                  }}>
                    No shipments yet
                  </p>
                </div>
              ) : (
                recentShipments.map((s) => (
                  <div key={s._id} style={{
                    padding: "1rem 1.5rem",
                    borderBottom: "1px solid #f5f5f5",
                    display: "flex", justifyContent: "space-between",
                    alignItems: "center", gap: "1rem",
                  }}>
                    <div>
                      <p style={{
                        fontFamily: "var(--font-barlow), sans-serif",
                        fontWeight: 700, fontSize: "0.85rem", color: "#111",
                        marginBottom: "2px",
                      }}>
                        {s.trackingCode}
                      </p>
                      <p style={{
                        fontFamily: "var(--font-barlow), sans-serif",
                        fontSize: "0.75rem", color: "#aaa",
                      }}>
                        {s.origin} → {s.destination}
                      </p>
                    </div>
                    <span style={{
                      background: statusColor(s.status).bg,
                      color: statusColor(s.status).color,
                      padding: "3px 10px", borderRadius: "100px",
                      fontFamily: "var(--font-barlow), sans-serif",
                      fontWeight: 700, fontSize: "0.7rem",
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
                  fontWeight: 800, fontSize: "0.9rem", color: "#111",
                  textTransform: "uppercase", letterSpacing: "0.05em",
                }}>
                  Recent Quotes
                </h3>
                <Link href="/admin/quotes" style={{
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontSize: "0.78rem", fontWeight: 700,
                  color: "#E84C1E", textDecoration: "none",
                }}>
                  View All →
                </Link>
              </div>

              {recentQuotes.length === 0 ? (
                <div style={{ padding: "2rem", textAlign: "center" }}>
                  <p style={{
                    fontFamily: "var(--font-barlow), sans-serif",
                    fontSize: "0.875rem", color: "#bbb",
                  }}>
                    No quotes yet
                  </p>
                </div>
              ) : (
                recentQuotes.map((q) => (
                  <div key={q._id} style={{
                    padding: "1rem 1.5rem",
                    borderBottom: "1px solid #f5f5f5",
                    display: "flex", justifyContent: "space-between",
                    alignItems: "center", gap: "1rem",
                  }}>
                    <div>
                      <p style={{
                        fontFamily: "var(--font-barlow), sans-serif",
                        fontWeight: 700, fontSize: "0.85rem", color: "#111",
                        marginBottom: "2px",
                      }}>
                        {q.name}
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
                      padding: "3px 10px", borderRadius: "100px",
                      fontFamily: "var(--font-barlow), sans-serif",
                      fontWeight: 700, fontSize: "0.7rem",
                      textTransform: "capitalize",
                    }}>
                      {q.status}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </main>

      <style>{`
        @media (max-width: 1100px) {
          .admin-stats { grid-template-columns: repeat(3, 1fr) !important; }
          .admin-tables { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .admin-stats { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}