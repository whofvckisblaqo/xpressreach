"use client";

import { useState } from "react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Logistics", "Technology", "Industry News", "Tips & Guides", "Company"];

  const posts = [
    {
      title: "The Future of Ocean Freight: Trends Shaping Global Shipping in 2025",
      category: "Logistics",
      date: "May 12, 2025",
      readTime: "6 min read",
      excerpt: "As global trade volumes continue to rise, ocean freight is undergoing a major transformation. From digitalization to sustainable shipping practices, here's what to expect in the years ahead.",
      image: "https://images.unsplash.com/photo-1515861461225-1488dfdaf0a8?w=800&q=80",
      featured: true,
    },
    {
      title: "How Real-Time Tracking Is Revolutionizing Supply Chain Visibility",
      category: "Technology",
      date: "April 28, 2025",
      readTime: "4 min read",
      excerpt: "Real-time shipment tracking has moved from a luxury to a necessity. We explore how modern tracking technology is giving businesses unprecedented visibility into their supply chains.",
      image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80",
      featured: false,
    },
    {
      title: "Air Freight vs Ocean Freight: Which Is Right for Your Business?",
      category: "Tips & Guides",
      date: "April 15, 2025",
      readTime: "5 min read",
      excerpt: "Choosing between air and ocean freight can significantly impact your costs and delivery timelines. Here's a comprehensive breakdown to help you make the right decision.",
      image: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=800&q=80",
      featured: false,
    },
    {
      title: "XpressReach Expands Operations to 12 New Countries in Asia Pacific",
      category: "Company",
      date: "March 30, 2025",
      readTime: "3 min read",
      excerpt: "We are excited to announce our expansion into 12 new markets across the Asia Pacific region, bringing our fast and reliable logistics services to more businesses worldwide.",
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
      featured: false,
    },
    {
      title: "Global Supply Chain Disruptions: Lessons Learned and How to Stay Resilient",
      category: "Industry News",
      date: "March 18, 2025",
      readTime: "7 min read",
      excerpt: "Recent global events have exposed vulnerabilities in international supply chains. We break down the key lessons and strategies businesses can adopt to build more resilient operations.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      featured: false,
    },
    {
      title: "10 Tips for Packaging Your Cargo for International Shipping",
      category: "Tips & Guides",
      date: "March 5, 2025",
      readTime: "4 min read",
      excerpt: "Proper packaging is the first line of defense against damage during transit. Follow these expert tips to ensure your goods arrive safely no matter the distance.",
      image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&q=80",
      featured: false,
    },
  ];

  const filtered = activeCategory === "All"
    ? posts
    : posts.filter((p) => p.category === activeCategory);

  const featured = posts.find((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section style={{
        paddingTop: "70px", background: "#111",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(https://images.unsplash.com/photo-1553413077-190dd305871c?w=1600&q=60)`,
          backgroundSize: "cover", backgroundPosition: "center",
          opacity: 0.12,
        }} />
        <div style={{
          position: "relative", zIndex: 1,
          maxWidth: "1280px", margin: "0 auto",
          padding: "5rem 2rem", textAlign: "center",
        }}>
          <p style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "0.75rem", fontWeight: 700,
            letterSpacing: "0.15em", textTransform: "uppercase",
            color: "#E84C1E", marginBottom: "1rem",
          }}>
            XpressReach Blog
          </p>
          <h1 style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 900, color: "#fff",
            letterSpacing: "-0.02em", lineHeight: 1.1,
            marginBottom: "1.25rem", textTransform: "uppercase",
          }}>
            Insights, News & Guides
          </h1>
          <p style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "1rem", color: "rgba(255,255,255,0.6)",
            lineHeight: 1.8, maxWidth: "500px", margin: "0 auto",
          }}>
            Stay up to date with the latest trends, tips, and news from the world of global logistics and shipping.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section style={{ background: "#fff", borderBottom: "1px solid #eee", padding: "1.25rem 2rem" }}>
        <div style={{
          maxWidth: "1280px", margin: "0 auto",
          display: "flex", gap: "0.75rem",
          flexWrap: "wrap", alignItems: "center",
        }}>
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)} style={{
              padding: "0.5rem 1.25rem",
              background: activeCategory === cat ? "#E84C1E" : "#F5F5F5",
              color: activeCategory === cat ? "#fff" : "#555",
              border: "none", borderRadius: "100px",
              fontFamily: "var(--font-barlow), sans-serif",
              fontWeight: 700, fontSize: "0.82rem",
              cursor: "pointer", transition: "all 0.2s",
            }}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Post */}
      {activeCategory === "All" && featured && (
        <section style={{ background: "#fff", padding: "4rem 2rem 0" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{
              display: "grid", gridTemplateColumns: "1.2fr 1fr",
              gap: "3rem", alignItems: "center",
              background: "#F5F5F5", borderRadius: "20px",
              overflow: "hidden",
            }} className="featured-grid">
              <div style={{ height: "420px", overflow: "hidden" }}>
                <img
                  src={featured.image}
                  alt={featured.title}
                  style={{
                    width: "100%", height: "100%", objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                  className="featured-img"
                />
              </div>
              <div style={{ padding: "2.5rem 2.5rem 2.5rem 0" }} className="featured-content">
                <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1rem", flexWrap: "wrap" }}>
                  <span style={{
                    background: "#E84C1E", color: "#fff",
                    padding: "4px 12px", borderRadius: "100px",
                    fontFamily: "var(--font-barlow), sans-serif",
                    fontWeight: 700, fontSize: "0.72rem",
                  }}>
                    Featured
                  </span>
                  <span style={{
                    background: "#FFF5F2", color: "#E84C1E",
                    padding: "4px 12px", borderRadius: "100px",
                    fontFamily: "var(--font-barlow), sans-serif",
                    fontWeight: 700, fontSize: "0.72rem",
                  }}>
                    {featured.category}
                  </span>
                </div>
                <h2 style={{
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontWeight: 900, fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
                  color: "#111", letterSpacing: "-0.02em",
                  lineHeight: 1.25, marginBottom: "1rem",
                }}>
                  {featured.title}
                </h2>
                <p style={{
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontSize: "0.9rem", color: "#666",
                  lineHeight: 1.75, marginBottom: "1.5rem",
                }}>
                  {featured.excerpt}
                </p>
                <div style={{
                  display: "flex", alignItems: "center",
                  gap: "1rem", marginBottom: "1.5rem",
                }}>
                  <span style={{
                    fontFamily: "var(--font-barlow), sans-serif",
                    fontSize: "0.78rem", color: "#999",
                  }}>
                    {featured.date}
                  </span>
                  <span style={{ color: "#ddd" }}>•</span>
                  <span style={{
                    fontFamily: "var(--font-barlow), sans-serif",
                    fontSize: "0.78rem", color: "#999",
                  }}>
                    {featured.readTime}
                  </span>
                </div>
                <a href="#" style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  background: "#E84C1E", color: "#fff",
                  padding: "0.85rem 1.75rem", borderRadius: "8px",
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontWeight: 700, fontSize: "0.9rem",
                  textDecoration: "none",
                }}>
                  Read Article
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <style>{`
            .featured-img:hover { transform: scale(1.04); }
            @media (max-width: 900px) {
              .featured-grid { grid-template-columns: 1fr !important; }
              .featured-content { padding: 1.5rem !important; }
            }
          `}</style>
        </section>
      )}

      {/* Posts Grid */}
      <section style={{ background: "#fff", padding: "4rem 2rem 6rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          {rest.length === 0 && (
            <div style={{ textAlign: "center", padding: "4rem 0" }}>
              <p style={{
                fontFamily: "var(--font-barlow), sans-serif",
                fontSize: "1rem", color: "#999",
              }}>
                No posts found in this category yet.
              </p>
            </div>
          )}

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }} className="posts-grid">
            {rest.map((post) => (
              <div key={post.title} style={{
                background: "#fff", borderRadius: "16px",
                border: "1px solid #eee", overflow: "hidden",
                transition: "box-shadow 0.3s, transform 0.3s",
              }} className="post-card">
                <div style={{ height: "220px", overflow: "hidden" }}>
                  <img
                    src={post.image}
                    alt={post.title}
                    style={{
                      width: "100%", height: "100%", objectFit: "cover",
                      transition: "transform 0.5s ease",
                    }}
                    className="post-img"
                  />
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.75rem" }}>
                    <span style={{
                      background: "#FFF5F2", color: "#E84C1E",
                      padding: "3px 10px", borderRadius: "100px",
                      fontFamily: "var(--font-barlow), sans-serif",
                      fontWeight: 700, fontSize: "0.7rem",
                    }}>
                      {post.category}
                    </span>
                  </div>
                  <h3 style={{
                    fontFamily: "var(--font-barlow), sans-serif",
                    fontWeight: 800, fontSize: "1rem",
                    color: "#111", lineHeight: 1.4,
                    marginBottom: "0.75rem", letterSpacing: "-0.01em",
                  }}>
                    {post.title}
                  </h3>
                  <p style={{
                    fontFamily: "var(--font-barlow), sans-serif",
                    fontSize: "0.83rem", color: "#777",
                    lineHeight: 1.7, marginBottom: "1.25rem",
                  }}>
                    {post.excerpt}
                  </p>
                  <div style={{
                    display: "flex", justifyContent: "space-between",
                    alignItems: "center",
                  }}>
                    <div style={{ display: "flex", gap: "0.75rem" }}>
                      <span style={{
                        fontFamily: "var(--font-barlow), sans-serif",
                        fontSize: "0.75rem", color: "#aaa",
                      }}>
                        {post.date}
                      </span>
                      <span style={{ color: "#ddd" }}>•</span>
                      <span style={{
                        fontFamily: "var(--font-barlow), sans-serif",
                        fontSize: "0.75rem", color: "#aaa",
                      }}>
                        {post.readTime}
                      </span>
                    </div>
                    <a href="#" style={{
                      fontFamily: "var(--font-barlow), sans-serif",
                      fontWeight: 700, fontSize: "0.8rem",
                      color: "#E84C1E", textDecoration: "none",
                      display: "flex", alignItems: "center", gap: "4px",
                    }}>
                      Read
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke="#E84C1E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .post-card:hover {
            box-shadow: 0 12px 40px rgba(0,0,0,0.1);
            transform: translateY(-4px);
          }
          .post-card:hover .post-img { transform: scale(1.05); }
          @media (max-width: 900px) {
            .posts-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 540px) {
            .posts-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      <Footer />
    </main>
  );
}