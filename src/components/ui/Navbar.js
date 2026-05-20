"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Tracking", href: "/tracking" },
    { label: "Support", href: "/support" },
    { label: "About Us", href: "/about" },
  ];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      background: "#fff",
      boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.10)" : "0 1px 0 #eee",
      transition: "box-shadow 0.3s ease",
    }}>
      <div style={{
        maxWidth: "1280px", margin: "0 auto",
        padding: "0 2rem", height: "70px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>

        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
          {/* Icon: X arrow mark */}
          <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="38" height="38" rx="8" fill="#E84C1E"/>
            <path d="M8 19H30M30 19L21 10M30 19L21 28" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 13L14 19L8 25" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
          </svg>
          <div style={{ lineHeight: 1 }}>
            <span style={{
              fontFamily: "var(--font-barlow), sans-serif",
              fontWeight: 900, fontSize: "1.3rem",
              color: "#111", letterSpacing: "-0.03em",
              textTransform: "uppercase",
            }}>
              XPRESS<span style={{ color: "#E84C1E" }}>REACH</span>
            </span>
            <div style={{
              fontSize: "0.55rem", fontWeight: 700,
              letterSpacing: "0.18em", color: "#999",
              textTransform: "uppercase",
              fontFamily: "var(--font-barlow), sans-serif",
            }}>
              Global Logistics
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="xr-desktop-nav" style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} style={{
              fontFamily: "var(--font-barlow), sans-serif",
              fontWeight: 600, fontSize: "0.9rem",
              color: "#333", textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={e => e.target.style.color = "#E84C1E"}
            onMouseLeave={e => e.target.style.color = "#333"}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right */}
        <div className="xr-desktop-nav" style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
          <a href="tel:+1234567890" style={{
            display: "flex", alignItems: "center", gap: "6px",
            fontFamily: "var(--font-barlow), sans-serif",
            fontWeight: 600, fontSize: "0.85rem",
            color: "#333", textDecoration: "none",
          }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            +1 234 567 890
          </a>
          <Link href="/login" style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontWeight: 700, fontSize: "0.875rem",
            padding: "0.55rem 1.5rem",
            background: "#E84C1E", color: "#fff",
            borderRadius: "6px", textDecoration: "none",
          }}>
            Log In
          </Link>
        </div>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="xr-hamburger" style={{
          background: "none", border: "none", cursor: "pointer", padding: "6px", display: "none",
        }}>
          <div style={{ width: "24px", height: "2px", background: "#111", marginBottom: "5px", transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
          <div style={{ width: "24px", height: "2px", background: "#111", marginBottom: "5px", opacity: menuOpen ? 0 : 1, transition: "opacity 0.2s" }} />
          <div style={{ width: "24px", height: "2px", background: "#111", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: "#fff", borderTop: "1px solid #eee",
          padding: "1rem 1.5rem 1.5rem",
        }}>
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} onClick={() => setMenuOpen(false)} style={{
              display: "block", padding: "0.8rem 0",
              fontFamily: "var(--font-barlow), sans-serif",
              fontWeight: 600, fontSize: "1rem",
              color: "#333", textDecoration: "none",
              borderBottom: "1px solid #f0f0f0",
            }}>
              {link.label}
            </Link>
          ))}
          <div style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <a href="tel:+1234567890" style={{
              textAlign: "center", padding: "0.7rem",
              border: "1px solid #E84C1E", color: "#E84C1E",
              borderRadius: "6px", textDecoration: "none",
              fontFamily: "var(--font-barlow), sans-serif", fontWeight: 700,
            }}>
              📞 +1 234 567 890
            </a>
            <Link href="/login" onClick={() => setMenuOpen(false)} style={{
              display: "block", padding: "0.75rem", textAlign: "center",
              background: "#E84C1E", color: "#fff",
              fontFamily: "var(--font-barlow), sans-serif",
              fontWeight: 700, fontSize: "0.9rem",
              borderRadius: "6px", textDecoration: "none",
            }}>
              Log In
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .xr-desktop-nav { display: none !important; }
          .xr-hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  );
}