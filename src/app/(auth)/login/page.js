"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.email || !form.password) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Login failed");
      localStorage.setItem("xr_user", JSON.stringify(data.user));
      router.push("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: "100%", padding: "0.9rem 1rem",
    border: "1px solid #e0e0e0", borderRadius: "8px",
    fontFamily: "var(--font-barlow), sans-serif",
    fontSize: "0.95rem", color: "#333",
    background: "#fafafa", outline: "none",
    boxSizing: "border-box", transition: "border-color 0.2s",
  };

  const labelStyle = {
    fontFamily: "var(--font-barlow), sans-serif",
    fontSize: "0.78rem", fontWeight: 700,
    color: "#444", marginBottom: "6px",
    display: "block", textTransform: "uppercase",
    letterSpacing: "0.05em",
  };

  return (
    <main style={{
      minHeight: "100vh", background: "#F5F5F5",
      display: "flex", alignItems: "center",
      justifyContent: "center", padding: "2rem",
      position: "relative", overflow: "hidden",
    }}>

      {/* Background image */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `url(https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1600&q=60)`,
        backgroundSize: "cover", backgroundPosition: "center",
        opacity: 0.06,
      }} />

      {/* Card */}
      <div style={{
        width: "100%", maxWidth: "480px",
        background: "#fff", borderRadius: "20px",
        padding: "3rem 2.5rem",
        boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
        border: "1px solid #f0f0f0",
        position: "relative", zIndex: 1,
      }}>

        {/* Logo */}
        <Link href="/" style={{
          display: "inline-flex", alignItems: "center",
          gap: "8px", textDecoration: "none", marginBottom: "2rem",
        }}>
          <svg width="36" height="36" viewBox="0 0 38 38" fill="none">
            <rect width="38" height="38" rx="8" fill="#E84C1E"/>
            <path d="M8 19H30M30 19L21 10M30 19L21 28" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 13L14 19L8 25" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
          </svg>
          <div>
            <div style={{
              fontFamily: "var(--font-barlow), sans-serif",
              fontWeight: 900, fontSize: "1.2rem",
              color: "#111", textTransform: "uppercase",
              letterSpacing: "-0.02em",
            }}>
              XPRESS<span style={{ color: "#E84C1E" }}>REACH</span>
            </div>
            <div style={{
              fontSize: "0.5rem", fontWeight: 700,
              letterSpacing: "0.18em", color: "#999",
              textTransform: "uppercase",
              fontFamily: "var(--font-barlow), sans-serif",
            }}>
              Global Logistics
            </div>
          </div>
        </Link>

        {/* Header */}
        <h1 style={{
          fontFamily: "var(--font-barlow), sans-serif",
          fontWeight: 900, fontSize: "1.75rem",
          color: "#111", marginBottom: "0.4rem",
          letterSpacing: "-0.02em",
        }}>
          Welcome Back
        </h1>
        <p style={{
          fontFamily: "var(--font-barlow), sans-serif",
          fontSize: "0.9rem", color: "#999",
          marginBottom: "2rem",
        }}>
          Sign in to your XpressReach account
        </p>

        {/* Form */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

          {/* Email */}
          <div>
            <label style={labelStyle}>Email Address</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="james@company.com"
              style={inputStyle}
              onFocus={e => e.target.style.borderColor = "#E84C1E"}
              onBlur={e => e.target.style.borderColor = "#e0e0e0"}
            />
          </div>

          {/* Password */}
          <div>
            <div style={{
              display: "flex", justifyContent: "space-between",
              alignItems: "center", marginBottom: "6px",
            }}>
              <label style={{ ...labelStyle, marginBottom: 0 }}>Password</label>
              <Link href="#" style={{
                fontFamily: "var(--font-barlow), sans-serif",
                fontSize: "0.78rem", color: "#E84C1E",
                textDecoration: "none", fontWeight: 600,
              }}>
                Forgot password?
              </Link>
            </div>
            <div style={{ position: "relative" }}>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                style={{ ...inputStyle, paddingRight: "3rem" }}
                onFocus={e => e.target.style.borderColor = "#E84C1E"}
                onBlur={e => e.target.style.borderColor = "#e0e0e0"}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute", right: "12px", top: "50%",
                  transform: "translateY(-50%)",
                  background: "none", border: "none",
                  cursor: "pointer", padding: "4px",
                  color: "#aaa",
                }}
              >
                {showPassword ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" stroke="#aaa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="1" y1="1" x2="23" y2="23" stroke="#aaa" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="#aaa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="3" stroke="#aaa" strokeWidth="2"/>
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Error */}
          {error && (
            <div style={{
              background: "#FFF5F2", border: "1px solid #ffd5c8",
              borderRadius: "8px", padding: "0.75rem 1rem",
              fontFamily: "var(--font-barlow), sans-serif",
              fontSize: "0.85rem", color: "#E84C1E",
            }}>
              {error}
            </div>
          )}

          {/* Submit */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            style={{
              width: "100%", padding: "1rem",
              background: loading ? "#f0a080" : "#E84C1E",
              color: "#fff", border: "none",
              borderRadius: "8px",
              cursor: loading ? "not-allowed" : "pointer",
              fontFamily: "var(--font-barlow), sans-serif",
              fontWeight: 700, fontSize: "1rem",
              letterSpacing: "0.03em",
              transition: "background 0.2s",
            }}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>

          {/* Divider */}
          <div style={{
            display: "flex", alignItems: "center", gap: "1rem",
          }}>
            <div style={{ flex: 1, height: "1px", background: "#f0f0f0" }} />
            <span style={{
              fontFamily: "var(--font-barlow), sans-serif",
              fontSize: "0.78rem", color: "#ccc", fontWeight: 600,
            }}>
              OR
            </span>
            <div style={{ flex: 1, height: "1px", background: "#f0f0f0" }} />
          </div>

          {/* Track without login */}
          <Link href="/tracking" style={{
            width: "100%", padding: "1rem",
            background: "#F5F5F5", color: "#555",
            border: "1px solid #e0e0e0",
            borderRadius: "8px", textDecoration: "none",
            fontFamily: "var(--font-barlow), sans-serif",
            fontWeight: 700, fontSize: "0.9rem",
            textAlign: "center", display: "block",
            transition: "background 0.2s",
          }}>
            Track a Shipment Without Login
          </Link>
        </div>

        {/* Sign up link */}
        <p style={{
          fontFamily: "var(--font-barlow), sans-serif",
          fontSize: "0.875rem", color: "#999",
          textAlign: "center", marginTop: "1.75rem",
        }}>
          Don't have an account?{" "}
          <Link href="/signup" style={{
            color: "#E84C1E", fontWeight: 700,
            textDecoration: "none",
          }}>
            Create Account
          </Link>
        </p>
      </div>
    </main>
  );
}