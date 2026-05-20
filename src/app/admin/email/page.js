"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminSidebar from "@/components/ui/AdminSidebar";

export default function AdminEmailPage() {
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    to: "",
    name: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [sendType, setSendType] = useState("single");
  const [sentEmails, setSentEmails] = useState([]);

  useEffect(() => {
    const user = localStorage.getItem("xr_user");
    if (!user) { router.push("/login"); return; }
    const parsed = JSON.parse(user);
    if (parsed.role !== "admin") { router.push("/dashboard"); return; }
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await fetch("/api/admin/users");
      const data = await res.json();
      setUsers(data.users || []);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSend = async () => {
    if (!form.subject || !form.message) {
      setError("Please fill in subject and message.");
      return;
    }
    if (sendType === "single" && !form.to) {
      setError("Please enter or select a recipient.");
      return;
    }

    setError("");
    setLoading(true);
    setSuccess("");

    try {
      if (sendType === "all") {
        // Send to all users
        const results = await Promise.allSettled(
          users.map((u) =>
            fetch("/api/admin/email", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                to: u.email,
                name: u.name,
                subject: form.subject,
                message: form.message,
              }),
            })
          )
        );
        const sent = results.filter((r) => r.status === "fulfilled").length;
        setSuccess(`Email sent to ${sent} out of ${users.length} users!`);
        setSentEmails((prev) => [{
          to: `All Users (${users.length})`,
          subject: form.subject,
          time: new Date().toLocaleString(),
        }, ...prev]);
      } else {
        const res = await fetch("/api/admin/email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to send");
        setSuccess(`Email sent successfully to ${form.to}!`);
        setSentEmails((prev) => [{
          to: form.to,
          subject: form.subject,
          time: new Date().toLocaleString(),
        }, ...prev]);
      }

      setForm({ to: "", name: "", subject: "", message: "" });
    } catch (err) {
      setError(err.message);
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
  };

  const labelStyle = {
    fontFamily: "var(--font-barlow), sans-serif",
    fontSize: "0.72rem", fontWeight: 700,
    color: "#666", marginBottom: "5px",
    display: "block", textTransform: "uppercase",
    letterSpacing: "0.05em",
  };

  const templates = [
    {
      label: "Shipment Update",
      subject: "Your Shipment Has Been Updated",
      message: "We wanted to let you know that your shipment has been updated. Please log in to your XpressReach account or visit our tracking page to see the latest status.\n\nIf you have any questions, feel free to reach out to us.\n\nThank you for choosing XpressReach.",
    },
    {
      label: "Quote Follow-up",
      subject: "Following Up on Your Quote Request",
      message: "Thank you for submitting a quote request with XpressReach. Our logistics team has reviewed your request and we would love to discuss the best shipping options available for you.\n\nPlease reply to this email or contact us at xpressreach@outlook.com to proceed.\n\nWe look forward to hearing from you.",
    },
    {
      label: "Welcome Email",
      subject: "Welcome to XpressReach!",
      message: "Welcome to XpressReach — your trusted global logistics partner!\n\nWe are excited to have you on board. With XpressReach, you can ship packages anywhere in the world with real-time tracking, competitive rates, and 24/7 support.\n\nGet started by logging into your account and requesting your first quote today.\n\nThank you for choosing XpressReach.",
    },
    {
      label: "Delivery Confirmed",
      subject: "Your Shipment Has Been Delivered!",
      message: "Great news! Your shipment has been successfully delivered to its destination.\n\nThank you for trusting XpressReach with your logistics needs. We hope everything arrived in perfect condition.\n\nIf you need to ship again or have any feedback, we'd love to hear from you.\n\nThank you for choosing XpressReach.",
    },
  ];

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#F5F5F5" }}>
      <AdminSidebar />

      <main style={{ flex: 1, overflow: "auto" }}>
        {/* Header */}
        <div style={{
          background: "#fff", padding: "1.5rem 2rem",
          borderBottom: "1px solid #eee",
        }}>
          <h1 style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontWeight: 900, fontSize: "1.4rem", color: "#111",
            letterSpacing: "-0.02em",
          }}>
            Email Users
          </h1>
          <p style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "0.82rem", color: "#999", marginTop: "2px",
          }}>
            Send custom emails to individual users or all users at once
          </p>
        </div>

        <div style={{
          padding: "2rem",
          display: "grid", gridTemplateColumns: "1fr 340px",
          gap: "1.5rem", alignItems: "start",
        }} className="email-layout">

          {/* Compose Form */}
          <div style={{
            background: "#fff", borderRadius: "16px",
            border: "1px solid #eee", overflow: "hidden",
          }}>
            {/* Send Type Toggle */}
            <div style={{
              padding: "1.25rem 1.5rem",
              borderBottom: "1px solid #f0f0f0",
              display: "flex", gap: "0",
            }}>
              {[
                { key: "single", label: "Single User" },
                { key: "all", label: `All Users (${users.length})` },
              ].map((t) => (
                <button key={t.key} onClick={() => setSendType(t.key)} style={{
                  flex: 1, padding: "0.6rem 1rem",
                  background: sendType === t.key ? "#E84C1E" : "#F5F5F5",
                  color: sendType === t.key ? "#fff" : "#777",
                  border: "none", cursor: "pointer",
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontWeight: 700, fontSize: "0.82rem",
                  borderRadius: t.key === "single" ? "8px 0 0 8px" : "0 8px 8px 0",
                  transition: "all 0.2s",
                }}>
                  {t.label}
                </button>
              ))}
            </div>

            <div style={{ padding: "1.5rem" }}>

              {/* Recipient */}
              {sendType === "single" && (
                <div style={{ marginBottom: "1.25rem" }}>
                  <label style={labelStyle}>Recipient Email *</label>
                  <div style={{ display: "flex", gap: "0.75rem" }} className="recipient-row">
                    <input
                      type="email"
                      placeholder="Enter email address"
                      value={form.to}
                      onChange={(e) => setForm({ ...form, to: e.target.value })}
                      style={{ ...inputStyle, flex: 1 }}
                    />
                    <select
                      onChange={(e) => {
                        const user = users.find((u) => u.email === e.target.value);
                        if (user) setForm({ ...form, to: user.email, name: user.name });
                      }}
                      style={{
                        ...inputStyle,
                        width: "auto", cursor: "pointer",
                        minWidth: "160px",
                      }}
                      defaultValue=""
                    >
                      <option value="" disabled>Pick a user</option>
                      {users.map((u) => (
                        <option key={u._id} value={u.email}>
                          {u.name} — {u.email}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              {sendType === "all" && (
                <div style={{
                  background: "#FFF5F2", border: "1px solid #ffd5c8",
                  borderRadius: "8px", padding: "1rem",
                  marginBottom: "1.25rem",
                  display: "flex", alignItems: "center", gap: "10px",
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="#E84C1E" strokeWidth="2"/>
                    <line x1="12" y1="8" x2="12" y2="12" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="12" y1="16" x2="12.01" y2="16" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <p style={{
                    fontFamily: "var(--font-barlow), sans-serif",
                    fontSize: "0.82rem", color: "#E84C1E", fontWeight: 600,
                  }}>
                    This will send an email to all {users.length} registered users.
                  </p>
                </div>
              )}

              {/* Subject */}
              <div style={{ marginBottom: "1.25rem" }}>
                <label style={labelStyle}>Subject *</label>
                <input
                  type="text"
                  placeholder="Email subject"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  style={inputStyle}
                />
              </div>

              {/* Message */}
              <div style={{ marginBottom: "1.5rem" }}>
                <label style={labelStyle}>Message *</label>
                <textarea
                  placeholder="Write your message here..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={10}
                  style={{ ...inputStyle, resize: "vertical", minHeight: "200px" }}
                />
              </div>

              {/* Error / Success */}
              {error && (
                <div style={{
                  background: "#FFF5F2", border: "1px solid #ffd5c8",
                  borderRadius: "8px", padding: "0.75rem 1rem",
                  marginBottom: "1rem",
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontSize: "0.85rem", color: "#E84C1E",
                }}>
                  {error}
                </div>
              )}

              {success && (
                <div style={{
                  background: "#dcfce7", border: "1px solid #bbf7d0",
                  borderRadius: "8px", padding: "0.75rem 1rem",
                  marginBottom: "1rem",
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontSize: "0.85rem", color: "#16a34a", fontWeight: 600,
                }}>
                  ✓ {success}
                </div>
              )}

              {/* Send Button */}
              <button onClick={handleSend} disabled={loading} style={{
                width: "100%", padding: "1rem",
                background: loading ? "#f0a080" : "#E84C1E",
                color: "#fff", border: "none",
                borderRadius: "8px",
                cursor: loading ? "not-allowed" : "pointer",
                fontFamily: "var(--font-barlow), sans-serif",
                fontWeight: 700, fontSize: "1rem",
                display: "flex", alignItems: "center",
                justifyContent: "center", gap: "8px",
              }}>
                {loading ? "Sending..." : (
                  <>
                    Send Email
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>

            {/* Templates */}
            <div style={{
              background: "#fff", borderRadius: "16px",
              border: "1px solid #eee", overflow: "hidden",
            }}>
              <div style={{
                padding: "1.25rem 1.5rem",
                borderBottom: "1px solid #f0f0f0",
              }}>
                <h3 style={{
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontWeight: 800, fontSize: "0.9rem", color: "#111",
                  textTransform: "uppercase", letterSpacing: "0.05em",
                }}>
                  Quick Templates
                </h3>
              </div>
              <div style={{ padding: "1rem" }}>
                {templates.map((t) => (
                  <button
                    key={t.label}
                    onClick={() => setForm({ ...form, subject: t.subject, message: t.message })}
                    style={{
                      width: "100%", padding: "0.75rem 1rem",
                      background: "#F5F5F5", border: "1px solid #eee",
                      borderRadius: "8px", cursor: "pointer",
                      fontFamily: "var(--font-barlow), sans-serif",
                      fontWeight: 700, fontSize: "0.82rem",
                      color: "#555", textAlign: "left",
                      marginBottom: "0.5rem",
                      transition: "all 0.2s",
                      display: "flex", alignItems: "center",
                      justifyContent: "space-between",
                    }}
                    className="template-btn"
                  >
                    {t.label}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="#E84C1E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Sent */}
            {sentEmails.length > 0 && (
              <div style={{
                background: "#fff", borderRadius: "16px",
                border: "1px solid #eee", overflow: "hidden",
              }}>
                <div style={{
                  padding: "1.25rem 1.5rem",
                  borderBottom: "1px solid #f0f0f0",
                }}>
                  <h3 style={{
                    fontFamily: "var(--font-barlow), sans-serif",
                    fontWeight: 800, fontSize: "0.9rem", color: "#111",
                    textTransform: "uppercase", letterSpacing: "0.05em",
                  }}>
                    Recently Sent
                  </h3>
                </div>
                <div>
                  {sentEmails.map((e, i) => (
                    <div key={i} style={{
                      padding: "0.875rem 1.5rem",
                      borderBottom: "1px solid #f5f5f5",
                    }}>
                      <p style={{
                        fontFamily: "var(--font-barlow), sans-serif",
                        fontWeight: 700, fontSize: "0.82rem", color: "#111",
                        marginBottom: "2px",
                      }}>
                        {e.subject}
                      </p>
                      <p style={{
                        fontFamily: "var(--font-barlow), sans-serif",
                        fontSize: "0.72rem", color: "#aaa",
                      }}>
                        To: {e.to}
                      </p>
                      <p style={{
                        fontFamily: "var(--font-barlow), sans-serif",
                        fontSize: "0.68rem", color: "#ccc",
                        marginTop: "2px",
                      }}>
                        {e.time}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Users count card */}
            <div style={{
              background: "#111", borderRadius: "16px",
              padding: "1.5rem",
            }}>
              <div style={{
                fontFamily: "var(--font-barlow), sans-serif",
                fontWeight: 900, fontSize: "2rem",
                color: "#E84C1E", lineHeight: 1,
              }}>
                {users.length}
              </div>
              <div style={{
                fontFamily: "var(--font-barlow), sans-serif",
                fontSize: "0.82rem", color: "#777",
                marginTop: "4px",
              }}>
                Registered Users
              </div>
            </div>
          </div>
        </div>
      </main>

      <style>{`
        .template-btn:hover {
          background: #FFF5F2 !important;
          border-color: #E84C1E !important;
          color: #E84C1E !important;
        }
        @media (max-width: 768px) {
          main { padding-top: 60px; }
          .email-layout { grid-template-columns: 1fr !important; }
          .recipient-row { flex-direction: column !important; }
        }
      `}</style>
    </div>
  );
}