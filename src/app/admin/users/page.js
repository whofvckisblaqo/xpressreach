"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminSidebar from "@/components/ui/AdminSidebar";

export default function AdminUsersPage() {
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

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
    } finally {
      setLoading(false);
    }
  };

  const filtered = users.filter((u) =>
    u.name?.toLowerCase().includes(search.toLowerCase()) ||
    u.email?.toLowerCase().includes(search.toLowerCase())
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
            All Users
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
              type="text" placeholder="Search users..."
              value={search} onChange={(e) => setSearch(e.target.value)}
              style={{
                border: "none", outline: "none", background: "none",
                fontFamily: "var(--font-barlow), sans-serif",
                fontSize: "0.875rem", color: "#333", flex: 1,
              }}
            />
          </div>

          {/* Users Table */}
          <div style={{
            background: "#fff", borderRadius: "16px",
            border: "1px solid #eee", overflow: "hidden",
          }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "2fr 2fr 1fr 1fr",
              padding: "0.75rem 1.5rem",
              background: "#fafafa",
              borderBottom: "1px solid #f0f0f0",
            }} className="users-header">
              {["Name", "Email", "Role", "Joined"].map((h) => (
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
              <div style={{ padding: "3rem", textAlign: "center", color: "#aaa" }}>Loading...</div>
            ) : filtered.length === 0 ? (
              <div style={{ padding: "3rem", textAlign: "center", color: "#bbb" }}>No users found.</div>
            ) : (
              filtered.map((u) => (
                <div key={u._id} style={{
                  display: "grid",
                  gridTemplateColumns: "2fr 2fr 1fr 1fr",
                  padding: "1rem 1.5rem",
                  borderBottom: "1px solid #f5f5f5",
                  alignItems: "center",
                }} className="users-row">
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{
                      width: "38px", height: "38px",
                      background: "#E84C1E", borderRadius: "50%",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      <span style={{
                        fontFamily: "var(--font-barlow), sans-serif",
                        fontWeight: 800, fontSize: "0.8rem", color: "#fff",
                      }}>
                        {u.name?.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <span style={{
                      fontFamily: "var(--font-barlow), sans-serif",
                      fontWeight: 700, fontSize: "0.875rem", color: "#111",
                    }}>
                      {u.name}
                    </span>
                  </div>
                  <span style={{
                    fontFamily: "var(--font-barlow), sans-serif",
                    fontSize: "0.85rem", color: "#555",
                  }}>
                    {u.email}
                  </span>
                  <span style={{
                    background: u.role === "admin" ? "#FFF5F2" : "#f0f0f0",
                    color: u.role === "admin" ? "#E84C1E" : "#777",
                    padding: "3px 10px", borderRadius: "100px",
                    fontFamily: "var(--font-barlow), sans-serif",
                    fontWeight: 700, fontSize: "0.72rem",
                    textTransform: "capitalize",
                    display: "inline-block",
                  }}>
                    {u.role}
                  </span>
                  <span style={{
                    fontFamily: "var(--font-barlow), sans-serif",
                    fontSize: "0.82rem", color: "#aaa",
                  }}>
                    {new Date(u.createdAt).toLocaleDateString()}
                  </span>
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