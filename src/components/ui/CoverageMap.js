"use client";

export default function CoverageMap() {
  const regions = [
    { name: "North America", count: "12 Countries" },
    { name: "Europe", count: "28 Countries" },
    { name: "Asia Pacific", count: "18 Countries" },
    { name: "Middle East", count: "8 Countries" },
    { name: "Africa", count: "15 Countries" },
    { name: "Latin America", count: "10 Countries" },
  ];

  const dots = [
    { top: "28%", left: "18%" },  // North America
    { top: "22%", left: "45%" },  // Europe
    { top: "35%", left: "70%" },  // Asia
    { top: "55%", left: "58%" },  // Middle East
    { top: "50%", left: "47%" },  // Africa
    { top: "65%", left: "28%" },  // Latin America
    { top: "20%", left: "52%" },  // UK
    { top: "40%", left: "75%" },  // Southeast Asia
    { top: "30%", left: "62%" },  // India
    { top: "25%", left: "80%" },  // Japan
    { top: "60%", left: "70%" },  // Australia
    { top: "32%", left: "22%" },  // USA East
  ];

  return (
    <section style={{ background: "#FFF5F2", padding: "6rem 2rem", overflow: "hidden" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "0.75rem", fontWeight: 700,
            letterSpacing: "0.15em", textTransform: "uppercase",
            color: "#E84C1E", marginBottom: "0.75rem",
          }}>
            We Serve
          </p>
          <h2 style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
            fontWeight: 900, color: "#111",
            letterSpacing: "-0.02em", marginBottom: "1rem",
          }}>
            Delivering the Last Mile Right
          </h2>
          <p style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "1rem", color: "#777",
            maxWidth: "520px", margin: "0 auto", lineHeight: 1.7,
          }}>
            We specialize in fast, reliable last mile delivery, ensuring your products reach your customers' doorsteps with precision and care.
          </p>
        </div>

        {/* Map Container */}
        <div style={{
          position: "relative",
          background: "#fff",
          borderRadius: "20px",
          padding: "2rem",
          boxShadow: "0 8px 40px rgba(232,76,30,0.08)",
          border: "1px solid #f0e8e5",
          marginBottom: "3rem",
          overflow: "hidden",
        }}>
          {/* Anywhere tags */}
          <div style={{
            position: "absolute", top: "50%", left: "2rem",
            transform: "translateY(-50%)", zIndex: 3,
          }}>
            <div style={{
              background: "#111", color: "#fff",
              padding: "8px 16px", borderRadius: "100px",
              fontFamily: "var(--font-barlow), sans-serif",
              fontWeight: 700, fontSize: "0.8rem",
              display: "flex", alignItems: "center", gap: "6px",
            }}>
              <div style={{ width: "8px", height: "8px", background: "#E84C1E", borderRadius: "50%" }} />
              Anywhere
            </div>
          </div>
          <div style={{
            position: "absolute", top: "50%", right: "2rem",
            transform: "translateY(-50%)", zIndex: 3,
          }}>
            <div style={{
              background: "#111", color: "#fff",
              padding: "8px 16px", borderRadius: "100px",
              fontFamily: "var(--font-barlow), sans-serif",
              fontWeight: 700, fontSize: "0.8rem",
              display: "flex", alignItems: "center", gap: "6px",
            }}>
              <div style={{ width: "8px", height: "8px", background: "#E84C1E", borderRadius: "50%" }} />
              Anywhere
            </div>
          </div>

          {/* World Map SVG */}
          <div style={{ position: "relative", width: "100%", height: "340px" }}>
            <svg
              viewBox="0 0 1000 500"
              style={{ width: "100%", height: "100%", opacity: 0.15 }}
              fill="#E84C1E"
            >
              {/* Simplified world map continents */}
              {/* North America */}
              <path d="M80,80 L180,60 L220,100 L200,180 L160,220 L120,200 L80,160 Z" />
              <path d="M140,200 L180,220 L170,280 L130,300 L110,260 L120,220 Z" />
              {/* South America */}
              <path d="M190,290 L240,270 L270,320 L260,400 L220,440 L190,400 L170,350 Z" />
              {/* Europe */}
              <path d="M420,60 L500,50 L520,100 L480,130 L440,120 L410,90 Z" />
              {/* Africa */}
              <path d="M430,160 L500,140 L540,200 L530,320 L480,380 L430,340 L400,260 L410,190 Z" />
              {/* Asia */}
              <path d="M520,50 L720,40 L780,100 L760,180 L680,200 L580,180 L520,140 Z" />
              <path d="M680,160 L760,150 L800,220 L760,280 L700,260 L660,200 Z" />
              {/* Australia */}
              <path d="M720,310 L820,300 L850,360 L820,410 L740,420 L700,370 Z" />
            </svg>

            {/* Animated dots */}
            {dots.map((dot, i) => (
              <div key={i} style={{
                position: "absolute",
                top: dot.top, left: dot.left,
                transform: "translate(-50%, -50%)",
              }}>
                {/* Pulse ring */}
                <div style={{
                  position: "absolute",
                  top: "50%", left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "24px", height: "24px",
                  borderRadius: "50%",
                  border: "2px solid #E84C1E",
                  opacity: 0.4,
                  animation: `pulse ${1.5 + (i % 3) * 0.5}s ease-out infinite`,
                  animationDelay: `${i * 0.2}s`,
                }} />
                {/* Core dot */}
                <div style={{
                  width: "10px", height: "10px",
                  background: "#E84C1E",
                  borderRadius: "50%",
                  boxShadow: "0 0 8px rgba(232,76,30,0.6)",
                  position: "relative", zIndex: 1,
                }} />
              </div>
            ))}

            {/* Delivery truck icon center */}
            <div style={{
              position: "absolute", top: "55%", left: "50%",
              transform: "translate(-50%, -50%)",
              background: "#E84C1E", borderRadius: "50%",
              width: "56px", height: "56px",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 8px 32px rgba(232,76,30,0.4)",
              zIndex: 4,
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <rect x="1" y="3" width="15" height="13" rx="2" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 8h4l3 3v5h-7V8z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="5.5" cy="18.5" r="2.5" stroke="#fff" strokeWidth="2"/>
                <circle cx="18.5" cy="18.5" r="2.5" stroke="#fff" strokeWidth="2"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Region grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: "1rem",
        }} className="regions-grid">
          {regions.map((region) => (
            <div key={region.name} style={{
              background: "#fff",
              border: "1px solid #f0e8e5",
              borderRadius: "12px",
              padding: "1.25rem 1rem",
              textAlign: "center",
              transition: "border-color 0.2s, box-shadow 0.2s",
            }}
            className="region-card"
            >
              <div style={{
                width: "10px", height: "10px",
                background: "#E84C1E", borderRadius: "50%",
                margin: "0 auto 0.75rem",
              }} />
              <div style={{
                fontFamily: "var(--font-barlow), sans-serif",
                fontWeight: 800, fontSize: "0.85rem",
                color: "#111", marginBottom: "0.25rem",
              }}>
                {region.name}
              </div>
              <div style={{
                fontFamily: "var(--font-barlow), sans-serif",
                fontSize: "0.75rem", color: "#E84C1E",
                fontWeight: 600,
              }}>
                {region.count}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 0.4; }
          100% { transform: translate(-50%, -50%) scale(2.5); opacity: 0; }
        }
        .region-card:hover {
          border-color: #E84C1E !important;
          box-shadow: 0 4px 20px rgba(232,76,30,0.1);
        }
        @media (max-width: 900px) {
          .regions-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .regions-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}