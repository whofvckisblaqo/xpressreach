"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminSidebar from "@/components/ui/AdminSidebar";

export default function AdminQuotesPage() {
  const router = useRouter();
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("xr_user");
    if (!user) { router.push("/login"); return; }
    const parsed = JSON.parse(user);
    if (parsed.role !== "admin") { router.push("/dashboard"); return; }
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    try {
      const res = await fetch("/api/admin/quotes");
      const data = await res.json();
      setQuotes(data.quotes || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (id, status) => {
    await fetch(`/api/admin/quotes/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    fetchQuotes();
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this quote?")) return;
    await fetch(`/api/admin/quotes/${id}`, { method: "DELETE" });
    fetchQuotes();
  };

  const filtered = quotes.filter((q) =>
    q.name?.toLowerCase().includes(search.toLowerCase()) ||
    q.email?.toLowerCase().includes(search.toLowerCase()) ||
    q.origin?.toLowerCase().includes(search.toLowerCase()) ||
    q.destination?.toLowerCase().includes(search.toLowerCase())
  );

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
            Quote Requests
          </h1>
        </div>

        <div style={{ padding: "2rem" }}>

          {/* Search */}
          <div style={{
            background: "#fff", borderRadius: "10px",
            border: "1px solid #eee", padding: "0.75rem 1rem",
            display: "flex", alignItems: "center", gap: "10px",
            marginBottom: "1.5rem", maxWidth: "400px",
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="8" stroke="#aaa" strokeWidth="2"/>
              <path d="m21 21-4.35-4.35" stroke="#aaa" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <input
              type="text" placeholder="Search quotes..."
              value={search} onChange={(e) => setSearch(e.target.value)}
              style={{
                border: "none", outline: "none", background: "none",
                fontFamily: "var(--font-barlow), sans-serif",
                fontSize: "0.875rem", color: "#333", flex: 1,
              }}
            />
          </div>

          {/* Quotes List */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {loading ? (
              <div style={{
                background: "#fff", borderRadius: "16px",
                padding: "3rem", textAlign: "center", color: "#aaa",
              }}>
                Loading...
              </div>
            ) : filtered.length === 0 ? (
              <div style={{
                background: "#fff", borderRadius: "16px",
                padding: "3rem", textAlign: "center", color: "#bbb",
              }}>
                No quotes found.
              </div>
            ) : (
              filtered.map((q) => (
                <div key={q._id} style={{
                  background: "#fff", borderRadius: "16px",
                  border: "1px solid #eee", padding: "1.5rem",
                }}>
                  <div style={{
                    display: "flex", justifyContent: "space-between",
                    alignItems: "flex-start", flexWrap: "wrap", gap: "1rem",
                    marginBottom: "1rem",
                  }}>
                    <div>
                      <h3 style={{
                        fontFamily: "var(--font-barlow), sans-serif",
                        fontWeight: 800, fontSize: "1rem", color: "#111",
                        marginBottom: "4px",
                      }}>
                        {q.name}
                      </h3>
                      <p style={{
                        fontFamily: "var(--font-barlow), sans-serif",
                        fontSize: "0.82rem", color: "#aaa",
                      }}>
                        {q.email} · {q.phone || "No phone"}
                      </p>
                    </div>
                    <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                      <select
                        value={q.status}
                        onChange={(e) => handleStatusUpdate(q._id, e.target.value)}
                        style={{
                          padding: "6px 10px", borderRadius: "6px",
                          border: "1px solid #eee", background: "#fafafa",
                          fontFamily: "var(--font-barlow), sans-serif",
                          fontSize: "0.78rem", fontWeight: 700,
                          cursor: "pointer", outline: "none",
                        }}
                      >
                        <option value="pending">Pending</option>
                        <option value="reviewed">Reviewed</option>
                        <option value="closed">Closed</option>
                      </select>
                      <button onClick={() => handleDelete(q._id)} style={{
                        background: "#fee2e2", border: "none",
                        borderRadius: "6px", padding: "6px 12px",
                        cursor: "pointer",
                        fontFamily: "var(--font-barlow), sans-serif",
                        fontSize: "0.78rem", fontWeight: 700, color: "#dc2626",
                      }}>
                        Delete
                      </button>
                    </div>
                  </div>

                  <div style={{
                    display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
                    gap: "1rem", background: "#fafafa",
                    borderRadius: "10px", padding: "1rem",
                  }} className="quote-details">
                    {[
                      { label: "From", value: q.origin },
                      { label: "To", value: q.destination },
                      { label: "Type", value: q.shipmentType || "N/A" },
                      { label: "Weight", value: q.weight || "N/A" },
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

                  {q.message && (
                    <p style={{
                      fontFamily: "var(--font-barlow), sans-serif",
                      fontSize: "0.85rem", color: "#666",
                      marginTop: "1rem", lineHeight: 1.6,
                      fontStyle: "italic",
                    }}>
                      "{q.message}"
                    </p>
                  )}

                  <p style={{
                    fontFamily: "var(--font-barlow), sans-serif",
                    fontSize: "0.72rem", color: "#ccc",
                    marginTop: "0.75rem",
                  }}>
                    Submitted: {new Date(q.createdAt).toLocaleString()}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </main>

     <style>{`
  @media (max-width: 768px) {
    main { padding-top: 60px; }
  }
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