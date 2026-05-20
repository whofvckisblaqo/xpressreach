"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminSidebar from "@/components/ui/AdminSidebar";

export default function AdminShipmentsPage() {
  const router = useRouter();
  const [shipments, setShipments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editShipment, setEditShipment] = useState(null);
  const [search, setSearch] = useState("");
  const [form, setForm] = useState({
    senderName: "", senderEmail: "",
    receiverName: "", receiverEmail: "",
    origin: "", destination: "",
    shipmentType: "ocean", weight: "",
    description: "", status: "pending",
    estimatedDelivery: "",
  });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("xr_user");
    if (!user) { router.push("/login"); return; }
    const parsed = JSON.parse(user);
    if (parsed.role !== "admin") { router.push("/dashboard"); return; }
    fetchShipments();
  }, []);

  const fetchShipments = async () => {
    try {
      const res = await fetch("/api/admin/shipments");
      const data = await res.json();
      setShipments(data.shipments || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    setSaving(true);
    try {
      if (editShipment) {
        await fetch(`/api/admin/shipments/${editShipment._id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      } else {
        await fetch("/api/admin/shipments", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      }
      await fetchShipments();
      setShowForm(false);
      setEditShipment(null);
      setForm({
        senderName: "", senderEmail: "",
        receiverName: "", receiverEmail: "",
        origin: "", destination: "",
        shipmentType: "ocean", weight: "",
        description: "", status: "pending",
        estimatedDelivery: "",
      });
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (s) => {
    setEditShipment(s);
    setForm({
      senderName: s.senderName, senderEmail: s.senderEmail,
      receiverName: s.receiverName, receiverEmail: s.receiverEmail,
      origin: s.origin, destination: s.destination,
      shipmentType: s.shipmentType || "ocean",
      weight: s.weight || "", description: s.description || "",
      status: s.status,
      estimatedDelivery: s.estimatedDelivery ? s.estimatedDelivery.split("T")[0] : "",
    });
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this shipment?")) return;
    await fetch(`/api/admin/shipments/${id}`, { method: "DELETE" });
    fetchShipments();
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

  const inputStyle = {
    width: "100%", padding: "0.8rem 1rem",
    border: "1px solid #e0e0e0", borderRadius: "8px",
    fontFamily: "var(--font-barlow), sans-serif",
    fontSize: "0.875rem", color: "#333",
    background: "#fafafa", outline: "none",
    boxSizing: "border-box",
  };

  const labelStyle = {
    fontFamily: "var(--font-barlow), sans-serif",
    fontSize: "0.72rem", fontWeight: 700,
    color: "#666", marginBottom: "5px",
    display: "block", textTransform: "uppercase",
    letterSpacing: "0.05em",
  };

  const filtered = shipments.filter((s) =>
    s.trackingCode?.toLowerCase().includes(search.toLowerCase()) ||
    s.senderName?.toLowerCase().includes(search.toLowerCase()) ||
    s.receiverName?.toLowerCase().includes(search.toLowerCase()) ||
    s.origin?.toLowerCase().includes(search.toLowerCase()) ||
    s.destination?.toLowerCase().includes(search.toLowerCase())
  );

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
          <h1 style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontWeight: 900, fontSize: "1.4rem", color: "#111",
            letterSpacing: "-0.02em",
          }}>
            Manage Shipments
          </h1>
          <button onClick={() => { setShowForm(true); setEditShipment(null); }} style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "#E84C1E", color: "#fff",
            padding: "0.7rem 1.5rem", borderRadius: "8px",
            fontFamily: "var(--font-barlow), sans-serif",
            fontWeight: 700, fontSize: "0.875rem",
            border: "none", cursor: "pointer",
          }}>
            + Add Shipment
          </button>
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
              type="text" placeholder="Search shipments..."
              value={search} onChange={(e) => setSearch(e.target.value)}
              style={{
                border: "none", outline: "none", background: "none",
                fontFamily: "var(--font-barlow), sans-serif",
                fontSize: "0.875rem", color: "#333", flex: 1,
              }}
            />
          </div>

          {/* Add/Edit Form */}
          {showForm && (
            <div style={{
              background: "#fff", borderRadius: "16px",
              border: "1px solid #eee", padding: "2rem",
              marginBottom: "1.5rem",
            }}>
              <h2 style={{
                fontFamily: "var(--font-barlow), sans-serif",
                fontWeight: 900, fontSize: "1rem", color: "#111",
                textTransform: "uppercase", marginBottom: "1.5rem",
              }}>
                {editShipment ? "Edit Shipment" : "New Shipment"}
              </h2>

              <div style={{
                display: "grid", gridTemplateColumns: "repeat(2, 1fr)",
                gap: "1rem", marginBottom: "1rem",
              }} className="form-grid">
                {[
                  { label: "Sender Name", key: "senderName", placeholder: "John Smith" },
                  { label: "Sender Email", key: "senderEmail", placeholder: "john@email.com" },
                  { label: "Receiver Name", key: "receiverName", placeholder: "Jane Doe" },
                  { label: "Receiver Email", key: "receiverEmail", placeholder: "jane@email.com" },
                  { label: "Origin", key: "origin", placeholder: "New York, USA" },
                  { label: "Destination", key: "destination", placeholder: "London, UK" },
                  { label: "Weight", key: "weight", placeholder: "500kg" },
                  { label: "Est. Delivery", key: "estimatedDelivery", type: "date" },
                ].map((field) => (
                  <div key={field.key}>
                    <label style={labelStyle}>{field.label}</label>
                    <input
                      type={field.type || "text"}
                      placeholder={field.placeholder}
                      value={form[field.key]}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      style={inputStyle}
                    />
                  </div>
                ))}

                <div>
                  <label style={labelStyle}>Shipment Type</label>
                  <select
                    value={form.shipmentType}
                    onChange={(e) => setForm({ ...form, shipmentType: e.target.value })}
                    style={{ ...inputStyle, cursor: "pointer" }}
                  >
                    <option value="ocean">Ocean Freight</option>
                    <option value="air">Air Freight</option>
                    <option value="road">Road Transport</option>
                    <option value="warehouse">Warehousing</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>Status</label>
                  <select
                    value={form.status}
                    onChange={(e) => setForm({ ...form, status: e.target.value })}
                    style={{ ...inputStyle, cursor: "pointer" }}
                  >
                    <option value="pending">Pending</option>
                    <option value="picked-up">Picked Up</option>
                    <option value="in-transit">In Transit</option>
                    <option value="out-for-delivery">Out for Delivery</option>
                    <option value="delivered">Delivered</option>
                    <option value="failed">Failed</option>
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <label style={labelStyle}>Description</label>
                <textarea
                  placeholder="Cargo description..."
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  rows={3}
                  style={{ ...inputStyle, resize: "vertical" }}
                />
              </div>

              <div style={{ display: "flex", gap: "1rem" }}>
                <button onClick={handleSubmit} disabled={saving} style={{
                  background: "#E84C1E", color: "#fff",
                  border: "none", borderRadius: "8px",
                  padding: "0.85rem 2rem", cursor: "pointer",
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontWeight: 700, fontSize: "0.9rem",
                }}>
                  {saving ? "Saving..." : editShipment ? "Update Shipment" : "Create Shipment"}
                </button>
                <button onClick={() => { setShowForm(false); setEditShipment(null); }} style={{
                  background: "#F5F5F5", color: "#555",
                  border: "1px solid #eee", borderRadius: "8px",
                  padding: "0.85rem 2rem", cursor: "pointer",
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontWeight: 700, fontSize: "0.9rem",
                }}>
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Shipments Table */}
          <div style={{
            background: "#fff", borderRadius: "16px",
            border: "1px solid #eee", overflow: "hidden",
          }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "1.5fr 1fr 1fr 1fr 130px 100px",
              padding: "0.75rem 1.5rem",
              background: "#fafafa",
              borderBottom: "1px solid #f0f0f0",
            }} className="sh-header">
              {["Tracking #", "Sender", "Route", "Type", "Status", "Actions"].map((h) => (
                <span key={h} style={{
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontSize: "0.7rem", fontWeight: 700,
                  color: "#aaa", textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}>
                  {h}
                </span>
              ))}
            </div>

            {loading ? (
              <div style={{ padding: "3rem", textAlign: "center", color: "#aaa" }}>
                Loading...
              </div>
            ) : filtered.length === 0 ? (
              <div style={{ padding: "3rem", textAlign: "center", color: "#bbb" }}>
                No shipments found.
              </div>
            ) : (
              filtered.map((s) => (
                <div key={s._id} style={{
                  display: "grid",
                  gridTemplateColumns: "1.5fr 1fr 1fr 1fr 130px 100px",
                  padding: "1rem 1.5rem",
                  borderBottom: "1px solid #f5f5f5",
                  alignItems: "center",
                }} className="sh-row">
                  <div>
                    <p style={{
                      fontFamily: "var(--font-barlow), sans-serif",
                      fontWeight: 700, fontSize: "0.85rem", color: "#111",
                    }}>
                      {s.trackingCode}
                    </p>
                    <p style={{
                      fontFamily: "var(--font-barlow), sans-serif",
                      fontSize: "0.72rem", color: "#aaa",
                    }}>
                      {new Date(s.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <span style={{
                    fontFamily: "var(--font-barlow), sans-serif",
                    fontSize: "0.82rem", color: "#555",
                  }}>
                    {s.senderName}
                  </span>
                  <span style={{
                    fontFamily: "var(--font-barlow), sans-serif",
                    fontSize: "0.82rem", color: "#555",
                  }}>
                    {s.origin} → {s.destination}
                  </span>
                  <span style={{
                    fontFamily: "var(--font-barlow), sans-serif",
                    fontSize: "0.82rem", color: "#555",
                    textTransform: "capitalize",
                  }}>
                    {s.shipmentType}
                  </span>
                  <span style={{
                    background: statusColor(s.status).bg,
                    color: statusColor(s.status).color,
                    padding: "4px 10px", borderRadius: "100px",
                    fontFamily: "var(--font-barlow), sans-serif",
                    fontWeight: 700, fontSize: "0.7rem",
                    textTransform: "capitalize",
                    display: "inline-block",
                  }}>
                    {s.status.replace(/-/g, " ")}
                  </span>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <button onClick={() => handleEdit(s)} style={{
                      background: "#F5F5F5", border: "1px solid #eee",
                      borderRadius: "6px", padding: "6px 10px",
                      cursor: "pointer", fontFamily: "var(--font-barlow), sans-serif",
                      fontSize: "0.75rem", fontWeight: 700, color: "#555",
                    }}>
                      Edit
                    </button>
                    <button onClick={() => handleDelete(s._id)} style={{
                      background: "#fee2e2", border: "none",
                      borderRadius: "6px", padding: "6px 10px",
                      cursor: "pointer", fontFamily: "var(--font-barlow), sans-serif",
                      fontSize: "0.75rem", fontWeight: 700, color: "#dc2626",
                    }}>
                      Del
                    </button>
                  </div>
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