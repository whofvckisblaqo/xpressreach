"use client";

import { useState } from "react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function CareersPage() {
  const [activeJob, setActiveJob] = useState(null);

  const perks = [
    {
      title: "Flexible Working",
      description: "Work remotely or from one of our global offices. We trust our team to deliver results from anywhere.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="3" width="20" height="14" rx="2" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 21h8M12 17v4" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental wellness programs, and gym memberships for every team member.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: "Career Growth",
      description: "Continuous learning budget, mentorship programs, and fast-track promotion paths for high performers.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M18 20V10M12 20V4M6 20v-6" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: "Global Team",
      description: "Work alongside talented professionals from over 40 countries in a diverse and inclusive environment.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="#E84C1E" strokeWidth="2"/>
          <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      title: "Competitive Pay",
      description: "Market-leading salaries, performance bonuses, and equity packages to reward your contribution.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <line x1="12" y1="1" x2="12" y2="23" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round"/>
          <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: "Modern Tools",
      description: "Latest tech stack, top-of-the-line equipment, and software tools to help you do your best work.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <polyline points="16 18 22 12 16 6" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="8 6 2 12 8 18" stroke="#E84C1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  const jobs = [
    {
      title: "Senior Logistics Coordinator",
      department: "Operations",
      location: "New York, USA (Hybrid)",
      type: "Full-time",
      description: "We are looking for an experienced logistics coordinator to manage end-to-end shipment operations, liaise with carriers, and ensure on-time delivery for our global clients.",
      requirements: [
        "5+ years in logistics or supply chain management",
        "Strong knowledge of international shipping regulations",
        "Experience with freight forwarding software",
        "Excellent communication and negotiation skills",
        "Bachelor's degree in Logistics, Business, or related field",
      ],
    },
    {
      title: "Full Stack Developer",
      department: "Technology",
      location: "Remote (Worldwide)",
      type: "Full-time",
      description: "Join our tech team to build and scale the platforms that power XpressReach's global logistics operations. You'll work on tracking systems, customer portals, and internal tools.",
      requirements: [
        "4+ years of full stack development experience",
        "Proficiency in React, Node.js, and MongoDB",
        "Experience building scalable REST APIs",
        "Familiarity with cloud platforms (AWS or GCP)",
        "Strong problem-solving and collaboration skills",
      ],
    },
    {
      title: "Customer Success Manager",
      department: "Customer Experience",
      location: "London, UK (On-site)",
      type: "Full-time",
      description: "Be the primary point of contact for our enterprise clients. You'll ensure smooth onboarding, resolve escalations, and build long-term relationships that drive retention and growth.",
      requirements: [
        "3+ years in customer success or account management",
        "Experience in logistics or B2B SaaS is a plus",
        "Strong empathy and problem-solving abilities",
        "Excellent written and verbal communication",
        "Proficiency in CRM tools like HubSpot or Salesforce",
      ],
    },
    {
      title: "Freight Sales Executive",
      department: "Sales",
      location: "Dubai, UAE (Hybrid)",
      type: "Full-time",
      description: "Drive new business growth by identifying and closing deals with companies needing global freight solutions. You'll manage the full sales cycle from prospecting to contract signing.",
      requirements: [
        "3+ years of B2B sales experience",
        "Background in freight, logistics, or shipping preferred",
        "Proven track record of hitting sales targets",
        "Strong networking and relationship-building skills",
        "Ability to travel as needed",
      ],
    },
    {
      title: "Warehouse Operations Supervisor",
      department: "Operations",
      location: "Singapore (On-site)",
      type: "Full-time",
      description: "Oversee daily warehouse operations including receiving, storage, pick-and-pack, and dispatch. You'll lead a team to ensure efficiency, accuracy, and safety standards are maintained.",
      requirements: [
        "4+ years of warehouse or distribution center experience",
        "Leadership and team management skills",
        "Familiarity with WMS (Warehouse Management Systems)",
        "Strong attention to detail and process orientation",
        "Health & Safety certification is a plus",
      ],
    },
  ];

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
          backgroundImage: `url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=60)`,
          backgroundSize: "cover", backgroundPosition: "center",
          opacity: 0.15,
        }} />
        <div style={{
          position: "relative", zIndex: 1,
          maxWidth: "1280px", margin: "0 auto",
          padding: "6rem 2rem",
        }}>
          <p style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "0.75rem", fontWeight: 700,
            letterSpacing: "0.15em", textTransform: "uppercase",
            color: "#E84C1E", marginBottom: "1rem",
          }}>
            Join Our Team
          </p>
          <h1 style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "clamp(2.2rem, 5vw, 4rem)",
            fontWeight: 900, color: "#fff",
            letterSpacing: "-0.02em", lineHeight: 1.1,
            maxWidth: "700px", marginBottom: "1.5rem",
            textTransform: "uppercase",
          }}>
            Build the Future of Global Logistics
          </h1>
          <p style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "1.05rem", color: "rgba(255,255,255,0.65)",
            lineHeight: 1.8, maxWidth: "560px", marginBottom: "2rem",
          }}>
            At XpressReach, we're on a mission to make global shipping simple, transparent, and reliable. Join a team of passionate people making it happen every day.
          </p>
          <a href="#open-roles" style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "#E84C1E", color: "#fff",
            padding: "1rem 2rem", borderRadius: "8px",
            fontFamily: "var(--font-barlow), sans-serif",
            fontWeight: 700, fontSize: "0.95rem",
            textDecoration: "none",
          }}>
            View Open Roles
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>

      {/* Perks */}
      <section style={{ background: "#fff", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{
              fontFamily: "var(--font-barlow), sans-serif",
              fontSize: "0.75rem", fontWeight: 700,
              letterSpacing: "0.15em", textTransform: "uppercase",
              color: "#E84C1E", marginBottom: "0.75rem",
            }}>
              Why Work With Us
            </p>
            <h2 style={{
              fontFamily: "var(--font-barlow), sans-serif",
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              fontWeight: 900, color: "#111",
              letterSpacing: "-0.02em",
            }}>
              Perks & Benefits
            </h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }} className="perks-grid">
            {perks.map((perk) => (
              <div key={perk.title} style={{
                background: "#F5F5F5", borderRadius: "16px",
                padding: "2rem", border: "1px solid #eee",
                transition: "border-color 0.3s, box-shadow 0.3s",
              }} className="perk-card">
                <div style={{
                  width: "56px", height: "56px",
                  background: "#FFF5F2", borderRadius: "12px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: "1.25rem",
                }}>
                  {perk.icon}
                </div>
                <h3 style={{
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontWeight: 800, fontSize: "1rem",
                  color: "#111", marginBottom: "0.6rem",
                  textTransform: "uppercase",
                }}>
                  {perk.title}
                </h3>
                <p style={{
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontSize: "0.85rem", color: "#777", lineHeight: 1.7,
                }}>
                  {perk.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .perk-card:hover {
            border-color: #E84C1E !important;
            box-shadow: 0 8px 32px rgba(232,76,30,0.1);
          }
          @media (max-width: 900px) {
            .perks-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 540px) {
            .perks-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* Open Roles */}
      <section id="open-roles" style={{ background: "#F5F5F5", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{
              fontFamily: "var(--font-barlow), sans-serif",
              fontSize: "0.75rem", fontWeight: 700,
              letterSpacing: "0.15em", textTransform: "uppercase",
              color: "#E84C1E", marginBottom: "0.75rem",
            }}>
              We Are Hiring
            </p>
            <h2 style={{
              fontFamily: "var(--font-barlow), sans-serif",
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              fontWeight: 900, color: "#111",
              letterSpacing: "-0.02em",
            }}>
              Open Positions
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {jobs.map((job, i) => (
              <div key={job.title} style={{
                background: "#fff", borderRadius: "16px",
                border: `1px solid ${activeJob === i ? "#E84C1E" : "#eee"}`,
                overflow: "hidden",
                transition: "border-color 0.2s",
              }}>
                {/* Job Header */}
                <button onClick={() => setActiveJob(activeJob === i ? null : i)} style={{
                  width: "100%", padding: "1.5rem 2rem",
                  background: "none", border: "none",
                  display: "flex", justifyContent: "space-between",
                  alignItems: "center", cursor: "pointer",
                  gap: "1rem", flexWrap: "wrap",
                }}>
                  <div style={{ textAlign: "left", flex: 1 }}>
                    <h3 style={{
                      fontFamily: "var(--font-barlow), sans-serif",
                      fontWeight: 800, fontSize: "1.05rem",
                      color: "#111", marginBottom: "0.4rem",
                    }}>
                      {job.title}
                    </h3>
                    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                      {[
                        { icon: "🏢", text: job.department },
                        { icon: "📍", text: job.location },
                        { icon: "⏱️", text: job.type },
                      ].map((tag) => (
                        <span key={tag.text} style={{
                          fontFamily: "var(--font-barlow), sans-serif",
                          fontSize: "0.78rem", color: "#777", fontWeight: 500,
                        }}>
                          {tag.icon} {tag.text}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div style={{
                    display: "flex", alignItems: "center", gap: "0.75rem",
                  }}>
                    <span style={{
                      background: "#FFF5F2", color: "#E84C1E",
                      padding: "6px 14px", borderRadius: "100px",
                      fontFamily: "var(--font-barlow), sans-serif",
                      fontWeight: 700, fontSize: "0.78rem",
                    }}>
                      {job.type}
                    </span>
                    <div style={{
                      width: "32px", height: "32px",
                      background: activeJob === i ? "#E84C1E" : "#F5F5F5",
                      borderRadius: "50%",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "background 0.2s",
                      flexShrink: 0,
                    }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                        style={{ transform: activeJob === i ? "rotate(180deg)" : "none", transition: "transform 0.3s" }}>
                        <path d="M6 9l6 6 6-6" stroke={activeJob === i ? "#fff" : "#555"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </button>

                {/* Job Details */}
                {activeJob === i && (
                  <div style={{
                    padding: "0 2rem 2rem",
                    borderTop: "1px solid #f0f0f0",
                  }}>
                    <p style={{
                      fontFamily: "var(--font-barlow), sans-serif",
                      fontSize: "0.9rem", color: "#555",
                      lineHeight: 1.8, marginBottom: "1.5rem",
                      paddingTop: "1.25rem",
                    }}>
                      {job.description}
                    </p>

                    <h4 style={{
                      fontFamily: "var(--font-barlow), sans-serif",
                      fontWeight: 800, fontSize: "0.85rem",
                      color: "#111", textTransform: "uppercase",
                      letterSpacing: "0.08em", marginBottom: "1rem",
                    }}>
                      Requirements
                    </h4>

                    <div style={{ marginBottom: "1.75rem" }}>
                      {job.requirements.map((req) => (
                        <div key={req} style={{
                          display: "flex", alignItems: "flex-start",
                          gap: "10px", marginBottom: "0.6rem",
                        }}>
                          <div style={{
                            width: "20px", height: "20px", flexShrink: 0,
                            marginTop: "2px",
                            background: "#E84C1E", borderRadius: "50%",
                            display: "flex", alignItems: "center", justifyContent: "center",
                          }}>
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                              <path d="M20 6L9 17l-5-5" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <span style={{
                            fontFamily: "var(--font-barlow), sans-serif",
                            fontSize: "0.875rem", color: "#555",
                          }}>
                            {req}
                          </span>
                        </div>
                      ))}
                    </div>

                    <a href={`mailto:xpressreach@outlook.com?subject=Application for ${job.title}`} style={{
                      display: "inline-flex", alignItems: "center", gap: "8px",
                      background: "#E84C1E", color: "#fff",
                      padding: "0.85rem 2rem", borderRadius: "8px",
                      fontFamily: "var(--font-barlow), sans-serif",
                      fontWeight: 700, fontSize: "0.9rem",
                      textDecoration: "none",
                    }}>
                      Apply for this Role
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ background: "#111", padding: "5rem 2rem" }}>
        <div style={{
          maxWidth: "700px", margin: "0 auto", textAlign: "center",
        }}>
          <h2 style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
            fontWeight: 900, color: "#fff",
            letterSpacing: "-0.02em", marginBottom: "1rem",
          }}>
            Don't See a Role That Fits?
          </h2>
          <p style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "1rem", color: "rgba(255,255,255,0.6)",
            lineHeight: 1.7, marginBottom: "2rem",
          }}>
            We're always looking for talented people. Send us your CV and tell us how you can contribute to XpressReach.
          </p>
          <a href="mailto:xpressreach@outlook.com?subject=Open Application - XpressReach" style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "#E84C1E", color: "#fff",
            padding: "1rem 2.5rem", borderRadius: "8px",
            fontFamily: "var(--font-barlow), sans-serif",
            fontWeight: 700, fontSize: "0.95rem",
            textDecoration: "none",
          }}>
            Send Open Application
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}