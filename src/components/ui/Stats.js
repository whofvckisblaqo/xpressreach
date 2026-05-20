"use client";
const icons = {
  box: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  star: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  users: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="9" cy="7" r="4" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  globe: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="#E84C1E" strokeWidth="2"/>
      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

export default function Stats() {
  const stats = [
    { value: "5k+", label: "Deliveries Monthly", icon: icons.box },
    { value: "1.7k+", label: "Client Reviews", icon: icons.star },
    { value: "15k+", label: "Satisfied Clients", icon: icons.users },
    { value: "3,452", label: "Global Stores", icon: icons.globe },
  ];

  return (
    <section style={{ background: "#111", padding: "4rem 2rem" }}>
      <div style={{
        maxWidth: "1280px", margin: "0 auto",
        display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
        gap: "2rem", alignItems: "center",
      }} className="stats-grid">
        {stats.map((stat, i) => (
          <div key={stat.label} style={{
            textAlign: "center",
            borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
            padding: "1rem",
          }} className="stat-item">
            <div style={{
              display: "flex", justifyContent: "center",
              marginBottom: "0.75rem",
            }}>
              {stat.icon}
            </div>
            <div style={{
              fontFamily: "var(--font-barlow), sans-serif",
              fontWeight: 900, fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              color: "#fff", lineHeight: 1, marginBottom: "0.4rem",
            }}>
              {stat.value}
            </div>
            <div style={{
              fontFamily: "var(--font-barlow), sans-serif",
              fontSize: "0.85rem", color: "rgba(255,255,255,0.5)",
              fontWeight: 500,
            }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .stat-item {
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.08);
            padding-bottom: 2rem !important;
          }
        }
        @media (max-width: 400px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}