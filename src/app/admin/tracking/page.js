"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminSidebar from "@/components/ui/AdminSidebar";

export default function AdminTrackingPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [shipment, setShipment] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [updating, setUpdating] = useState(false);
  const [newStatus, setNewStatus] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("xr_user");
    if (!user) { router.push("/login"); return; }
    const parsed = JSON.parse(user);
    if (parsed.role !== "admin") { router.push("/dashboard"); return; }
  }, []);

  const handleSearch = async () => {
    if (!search.trim()) return;
    setLoading(true);
    setError("");
    setShipment(null);
    setSuccess("");
    try {
      const res = await fetch(`/api/admin/tracking?code=${search.trim()}`);
      const data = await res.json();
      if (!data.shipment) {
        setError("No shipment found with that tracking number.");
      } else {
        setShipment(data.shipment);
        setNewStatus(data.shipment.status);
      }
    } catch {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateStatus = async () => {
    if (!shipment || !newStatus) return;
    setUpdating(true);
    setSuccess("");
    try {
      await fetch(`/api/admin/tracking/${shipment._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      setShipment({ ...shipment, status: newStatus });
      setSuccess("Shipment status updated successfully!");
    } catch {
      setError("Failed to update status.");
    } finally {
      setUpdating(false);
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

  const statusSteps = ["Order Placed", "Picked Up", "In Transit", "Out for Delivery", "Delivered"];
  const getStatusIndex = (status) => {
    const map = { pending: 0, "picked-up": 1, "in-transit": 2, "out-for-delivery": 3, delivered: 4 };
    return map[status] ?? 0;
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#F5F5F5" }}>
      <AdminSidebar />

      <main style={{ flex: 1, overflow: "auto" }}>
        <div style={{
          background: "#fff", padding: "1.5rem 2rem",
          borderBottom: "1px solid #eee",
        }}>
          <h1 style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontWeight: 900, fontSize: "1.4rem", color: "#111",
            letterSpacing: "-0.02em",
          }}>
            Shipment Tracking
          </h1>
          <p style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "0.82rem", color: "#999", marginTop: "2px",
          }}>
            Search and update shipment status in real time
          </p>
        </div>

        <div style={{ padding: "2rem", maxWidth: "800px" }}>

          {/* Search */}
          <div style={{
            background: "#fff", borderRadius: "12px",
            border: "1px solid #eee", padding: "1.5rem",
            marginBottom: "1.5rem",
          }}>
            <p style={{
              fontFamily: "var(--font-barlow), sans-serif",
              fontSize: "0.75rem", fontWeight: 700,
              textTransform: "uppercase", letterSpacing: "0.1em",
              color: "#aaa", marginBottom: "0.75rem",
            }}>
              Search by Tracking Number
            </p>
            <div style={{ display: "flex", gap: "0.75rem" }} className="track-search">
              <input
                type="text"
                placeholder="e.g. XR-2025-0001"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                style={{
                  flex: 1, padding: "0.85rem 1rem",
                  border: "1px solid #e0e0e0", borderRadius: "8px",
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontSize: "0.9rem", color: "#333",
                  background: "#fafafa", outline: "none",
                }}
              />
              <button onClick={handleSearch} style={{
                background: "#E84C1E", color: "#fff",
                border: "none", borderRadius: "8px",
                padding: "0.85rem 1.75rem",
                fontFamily: "var(--font-barlow), sans-serif",
                fontWeight: 700, fontSize: "0.9rem",
                cursor: "pointer", whiteSpace: "nowrap",
              }}>
                {loading ? "Searching..." : "Search"}
              </button>
            </div>
            {error && (
              <p style={{
                fontFamily: "var(--font-barlow), sans-serif",
                fontSize: "0.82rem", color: "#E84C1E",
                marginTop: "0.75rem",
              }}>
                {error}
              </p>
            )}
          </div>

          {/* Shipment Result */}
          {shipment && (
            <>
              {/* Info Card */}
              <div style={{
                background: "#fff", borderRadius: "12px",
                border: "1px solid #eee", padding: "1.5rem",
                marginBottom: "1rem",
              }}>
                <div style={{
                  display: "flex", justifyContent: "space-between",
                  alignItems: "center", marginBottom: "1.25rem",
                  flexWrap: "wrap", gap: "1rem",
                }}>
                  <div>
                    <h2 style={{
                      fontFamily: "var(--font-barlow), sans-serif",
                      fontWeight: 900, fontSize: "1.25rem", color: "#111",
                    }}>
                      {shipment.trackingCode}
                    </h2>
                    <p style={{
                      fontFamily: "var(--font-barlow), sans-serif",
                      fontSize: "0.78rem", color: "#aaa",
                    }}>
                      Created: {new Date(shipment.createdAt).toLocaleString()}
                    </p>
                  </div>
                  <span style={{
                    background: statusColor(shipment.status).bg,
                    color: statusColor(shipment.status).color,
                    padding: "6px 14px", borderRadius: "100px",
                    fontFamily: "var(--font-barlow), sans-serif",
                    fontWeight: 700, fontSize: "0.82rem",
                    textTransform: "capitalize",
                  }}>
                    {shipment.status.replace(/-/g, " ")}
                  </span>
                </div>

                <div style={{
                  display: "grid", gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "1rem", background: "#fafafa",
                  borderRadius: "10px", padding: "1.25rem",
                  marginBottom: "1.25rem",
                }} className="ship-details">
                  {[
                    { label: "Sender", value: `${shipment.senderName} (${shipment.senderEmail})` },
                    { label: "Receiver", value: `${shipment.receiverName} (${shipment.receiverEmail})` },
                    { label: "Origin", value: shipment.origin },
                    { label: "Destination", value: shipment.destination },
                    { label: "Type", value: shipment.shipmentType || "Standard" },
                    { label: "Weight", value: shipment.weight || "N/A" },
                  ].map((d) => (
                    <div key={d.label}>
                      <p style={{
                        fontFamily: "var(--font-barlow), sans-serif",
                        fontSize: "0.65rem", fontWeight: 700,
                        color: "#aaa", textTransform: "uppercase",
                        letterSpacing: "0.08em", marginBottom: "2px",
                      }}>
                        {d.label}
                      </p>
                      <p style={{
                        fontFamily: "var(--font-barlow), sans-serif",
                        fontSize: "0.875rem", fontWeight: 600, color: "#111",
                        textTransform: "capitalize",
                      }}>
                        {d.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Progress */}
                <div style={{
                  display: "flex", justifyContent: "space-between",
                  position: "relative", marginBottom: "1.5rem",
                }}>
                  <div style={{
                    position: "absolute", top: "20px",
                    left: "10%", right: "10%", height: "3px",
                    background: "#f0f0f0", zIndex: 0,
                  }}>
                    <div style={{
                      height: "100%", background: "#E84C1E",
                      width: `${(getStatusIndex(shipment.status) / (statusSteps.length - 1)) * 100}%`,
                      transition: "width 0.5s ease",
                    }} />
                  </div>
                  {statusSteps.map((step, i) => {
                    const active = i <= getStatusIndex(shipment.status);
                    return (
                      <div key={step} style={{
                        display: "flex", flexDirection: "column",
                        alignItems: "center", position: "relative",
                        zIndex: 1, flex: 1,
                      }}>
                        <div style={{
                          width: "40px", height: "40px",
                          borderRadius: "50%",
                          background: active ? "#E84C1E" : "#f0f0f0",
                          border: `3px solid ${active ? "#E84C1E" : "#e0e0e0"}`,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          marginBottom: "0.5rem",
                        }}>
                          {active && (
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                              <path d="M20 6L9 17l-5-5" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          )}
                        </div>
                        <p style={{
                          fontFamily: "var(--font-barlow), sans-serif",
                          fontSize: "0.62rem", fontWeight: 700,
                          color: active ? "#111" : "#aaa",
                          textAlign: "center", lineHeight: 1.3,
                        }}>
                          {step}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Update Status */}
                <div style={{
                  borderTop: "1px solid #f0f0f0", paddingTop: "1.25rem",
                }}>
                  <p style={{
                    fontFamily: "var(--font-barlow), sans-serif",
                    fontSize: "0.75rem", fontWeight: 700,
                    textTransform: "uppercase", letterSpacing: "0.1em",
                    color: "#aaa", marginBottom: "0.75rem",
                  }}>
                    Update Status
                  </p>
                  <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                    <select
                      value={newStatus}
                      onChange={(e) => setNewStatus(e.target.value)}
                      style={{
                        flex: 1, padding: "0.8rem 1rem",
                        border: "1px solid #e0e0e0", borderRadius: "8px",
                        fontFamily: "var(--font-barlow), sans-serif",
                        fontSize: "0.875rem", color: "#333",
                        background: "#fafafa", outline: "none",
                        cursor: "pointer",
                      }}
                    >
                      <option value="pending">Pending</option>
                      <option value="picked-up">Picked Up</option>
                      <option value="in-transit">In Transit</option>
                      <option value="out-for-delivery">Out for Delivery</option>
                      <option value="delivered">Delivered</option>
                      <option value="failed">Failed</option>
                    </select>
                    <button onClick={handleUpdateStatus} disabled={updating} style={{
                      background: "#E84C1E", color: "#fff",
                      border: "none", borderRadius: "8px",
                      padding: "0.8rem 1.75rem",
                      fontFamily: "var(--font-barlow), sans-serif",
                      fontWeight: 700, fontSize: "0.9rem",
                      cursor: updating ? "not-allowed" : "pointer",
                    }}>
                      {updating ? "Updating..." : "Update Status"}
                    </button>
                  </div>
                  {success && (
                    <p style={{
                      fontFamily: "var(--font-barlow), sans-serif",
                      fontSize: "0.82rem", color: "#16a34a",
                      marginTop: "0.75rem", fontWeight: 600,
                    }}>
                      ✓ {success}
                    </p>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </main>

      <style>{`
        @media (max-width: 640px) {
          .track-search { flex-direction: column !important; }
          .ship-details { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}