"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "", email: "", phone: "", password: "", confirm: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.password || !form.confirm) {
      setError("Please fill in all required fields.");
      return;
    }
    if (form.password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (form.password !== form.confirm) {
      setError("Passwords do not match.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          password: form.password,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Signup failed");
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

  const PasswordToggle = ({ show, onToggle }) => (
    <button
      onClick={onToggle}
      style={{
        position: "absolute", right: "12px", top: "50%",
        transform: "translateY(-50%)",
        background: "none", border: "none",
        cursor: "pointer", padding: "4px", color: "#aaa",
      }}
    >
      {show ? (
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
  );

  const strength = form.password.length === 0 ? 0
    : form.password.length < 6 ? 1
    : form.password.length < 10 ? 2
    : 3;

  const strengthLabel = ["", "Weak", "Fair", "Strong"];
  const strengthColor = ["", "#ef4444", "#f59e0b", "#22c55e"];

  return (
    <main style={{
      minHeight: "100vh", background: "#F5F5F5",
      display: "flex", alignItems: "center",
      justifyContent: "center", padding: "2rem",
      position: "relative", overflow: "hidden",
    }}>

      {/* Background */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=60)`,
        backgroundSize: "cover", backgroundPosition: "center",
        opacity: 0.06,
      }} />

      {/* Card */}
      <div style={{
        width: "100%", maxWidth: "520px",
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
          Create Account
        </h1>
        <p style={{
          fontFamily: "var(--font-barlow), sans-serif",
          fontSize: "0.9rem", color: "#999",
          marginBottom: "2rem",
        }}>
          Join XpressReach and start shipping globally today
        </p>

        {/* Form */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

          {/* Name + Phone */}
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
          }} className="signup-row">
            <div>
              <label style={labelStyle}>Full Name *</label>
              <input
                name="name" value={form.name}
                onChange={handleChange}
                placeholder="James Thornton"
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = "#E84C1E"}
                onBlur={e => e.target.style.borderColor = "#e0e0e0"}
              />
            </div>
            <div>
              <label style={labelStyle}>Phone</label>
              <input
                name="phone" value={form.phone}
                onChange={handleChange}
                placeholder="+1 234 567 890"
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = "#E84C1E"}
                onBlur={e => e.target.style.borderColor = "#e0e0e0"}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label style={labelStyle}>Email Address *</label>
            <input
              name="email" type="email" value={form.email}
              onChange={handleChange}
              placeholder="james@company.com"
              style={inputStyle}
              onFocus={e => e.target.style.borderColor = "#E84C1E"}
              onBlur={e => e.target.style.borderColor = "#e0e0e0"}
            />
          </div>

          {/* Password */}
          <div>
            <label style={labelStyle}>Password *</label>
            <div style={{ position: "relative" }}>
              <input
                name="password" value={form.password}
                type={showPassword ? "text" : "password"}
                onChange={handleChange}
                placeholder="Min. 8 characters"
                style={{ ...inputStyle, paddingRight: "3rem" }}
                onFocus={e => e.target.style.borderColor = "#E84C1E"}
                onBlur={e => e.target.style.borderColor = "#e0e0e0"}
              />
              <PasswordToggle show={showPassword} onToggle={() => setShowPassword(!showPassword)} />
            </div>

            {/* Strength bar */}
            {form.password.length > 0 && (
              <div style={{ marginTop: "8px" }}>
                <div style={{
                  display: "flex", gap: "4px", marginBottom: "4px",
                }}>
                  {[1, 2, 3].map((level) => (
                    <div key={level} style={{
                      flex: 1, height: "4px", borderRadius: "2px",
                      background: strength >= level ? strengthColor[strength] : "#f0f0f0",
                      transition: "background 0.3s",
                    }} />
                  ))}
                </div>
                <span style={{
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontSize: "0.72rem", fontWeight: 700,
                  color: strengthColor[strength],
                }}>
                  {strengthLabel[strength]} password
                </span>
              </div>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label style={labelStyle}>Confirm Password *</label>
            <div style={{ position: "relative" }}>
              <input
                name="confirm" value={form.confirm}
                type={showConfirm ? "text" : "password"}
                onChange={handleChange}
                placeholder="Repeat your password"
                style={{
                  ...inputStyle, paddingRight: "3rem",
                  borderColor: form.confirm && form.password !== form.confirm ? "#ef4444" : "#e0e0e0",
                }}
                onFocus={e => e.target.style.borderColor = "#E84C1E"}
                onBlur={e => e.target.style.borderColor = form.confirm && form.password !== form.confirm ? "#ef4444" : "#e0e0e0"}
              />
              <PasswordToggle show={showConfirm} onToggle={() => setShowConfirm(!showConfirm)} />
            </div>
            {form.confirm && form.password !== form.confirm && (
              <p style={{
                fontFamily: "var(--font-barlow), sans-serif",
                fontSize: "0.75rem", color: "#ef4444",
                marginTop: "4px",
              }}>
                Passwords do not match
              </p>
            )}
          </div>

          {/* Terms */}
          <p style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "0.78rem", color: "#999", lineHeight: 1.6,
          }}>
            By creating an account, you agree to our{" "}
            <Link href="/terms" style={{ color: "#E84C1E", fontWeight: 600, textDecoration: "none" }}>
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" style={{ color: "#E84C1E", fontWeight: 600, textDecoration: "none" }}>
              Privacy Policy
            </Link>
          </p>

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
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </div>

        {/* Sign in link */}
        <p style={{
          fontFamily: "var(--font-barlow), sans-serif",
          fontSize: "0.875rem", color: "#999",
          textAlign: "center", marginTop: "1.75rem",
        }}>
          Already have an account?{" "}
          <Link href="/login" style={{
            color: "#E84C1E", fontWeight: 700,
            textDecoration: "none",
          }}>
            Sign In
          </Link>
        </p>
      </div>

      <style>{`
        @media (max-width: 480px) {
          .signup-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}