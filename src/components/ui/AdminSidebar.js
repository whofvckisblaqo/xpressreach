"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleSignOut = () => {
    localStorage.removeItem("xr_admin");
    router.push("/login");
  };

  const links = [
    {
      label: "Overview",
      href: "/admin",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      label: "Shipments",
      href: "/admin/shipments",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      label: "Tracking",
      href: "/admin/tracking",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
          <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      label: "Quotes",
      href: "/admin/quotes",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      label: "Users",
      href: "/admin/users",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside style={{
        width: "240px", flexShrink: 0,
        background: "#111", minHeight: "100vh",
        display: "flex", flexDirection: "column",
        position: "sticky", top: 0, height: "100vh",
      }} className="admin-sidebar">

        {/* Logo */}
        <div style={{
          padding: "1.75rem 1.5rem",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}>
          <Link href="/admin" style={{ textDecoration: "none" }}>
            <div style={{
              fontFamily: "var(--font-barlow), sans-serif",
              fontWeight: 900, fontSize: "1.1rem",
              color: "#fff", textTransform: "uppercase",
              letterSpacing: "-0.02em",
            }}>
              XPRESS<span style={{ color: "#E84C1E" }}>REACH</span>
            </div>
            <div style={{
              fontFamily: "var(--font-barlow), sans-serif",
              fontSize: "0.6rem", fontWeight: 700,
              color: "#E84C1E", letterSpacing: "0.15em",
              textTransform: "uppercase", marginTop: "2px",
            }}>
              Admin Panel
            </div>
          </Link>
        </div>

        {/* Nav Links */}
        <nav style={{ flex: 1, padding: "1rem 0" }}>
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} style={{
                display: "flex", alignItems: "center", gap: "12px",
                padding: "0.85rem 1.5rem",
                fontFamily: "var(--font-barlow), sans-serif",
                fontWeight: 700, fontSize: "0.875rem",
                color: active ? "#fff" : "#777",
                textDecoration: "none",
                background: active ? "rgba(232,76,30,0.15)" : "none",
                borderLeft: active ? "3px solid #E84C1E" : "3px solid transparent",
                transition: "all 0.2s",
              }}
              className="sidebar-link"
              >
                <span style={{ color: active ? "#E84C1E" : "currentColor" }}>
                  {link.icon}
                </span>
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Bottom */}
        <div style={{
          padding: "1.5rem",
          borderTop: "1px solid rgba(255,255,255,0.07)",
        }}>
          <Link href="/" style={{
            display: "flex", alignItems: "center", gap: "10px",
            fontFamily: "var(--font-barlow), sans-serif",
            fontWeight: 600, fontSize: "0.82rem",
            color: "#777", textDecoration: "none",
            marginBottom: "0.75rem",
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="#777" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 22V12h6v10" stroke="#777" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            View Site
          </Link>
          <button onClick={handleSignOut} style={{
            display: "flex", alignItems: "center", gap: "10px",
            fontFamily: "var(--font-barlow), sans-serif",
            fontWeight: 600, fontSize: "0.82rem",
            color: "#777", background: "none",
            border: "none", cursor: "pointer", padding: 0,
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" stroke="#777" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Sign Out
          </button>
        </div>
      </aside>

      <style>{`
        .sidebar-link:hover {
          color: #fff !important;
          background: rgba(255,255,255,0.05) !important;
        }
        @media (max-width: 768px) {
          .admin-sidebar { display: none !important; }
        }
      `}</style>
    </>
  );
}