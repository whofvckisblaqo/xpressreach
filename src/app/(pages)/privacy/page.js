"use client";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function PrivacyPage() {
  const sections = [
    {
      title: "Information We Collect",
      content: `We collect information you provide directly to us, such as when you create an account, request a quote, track a shipment, or contact our support team. This includes:

- Full name, email address, phone number, and billing address
- Shipment details including origin, destination, package weight and dimensions
- Payment information (processed securely via encrypted payment providers)
- Communications you send us including support requests and feedback
- Device information, IP address, browser type, and usage data when you visit our platform`,
    },
    {
      title: "How We Use Your Information",
      content: `XpressReach uses the information we collect to:

- Process and manage your shipments and logistics requests
- Send booking confirmations, tracking updates, and delivery notifications
- Respond to your inquiries and provide customer support
- Improve our platform, services, and user experience
- Send you relevant updates, promotions, and service announcements (you may opt out at any time)
- Comply with legal obligations and prevent fraudulent activity
- Analyze platform usage to enhance performance and reliability`,
    },
    {
      title: "Information Sharing",
      content: `We do not sell, rent, or trade your personal information to third parties. We may share your information in the following circumstances:

- With logistics partners, carriers, and customs agents necessary to fulfill your shipment
- With trusted service providers who assist in operating our platform (subject to confidentiality agreements)
- When required by law, court order, or governmental authority
- In connection with a business merger, acquisition, or sale of assets
- With your explicit consent for any other purpose not listed here`,
    },
    {
      title: "Data Security",
      content: `We implement industry-standard security measures to protect your personal information including:

- SSL/TLS encryption for all data transmitted through our platform
- Secure data centers with restricted physical and digital access
- Regular security audits and vulnerability assessments
- Role-based access controls for our internal teams
- Automatic session timeouts and multi-factor authentication options

While we strive to protect your information, no method of transmission over the internet is 100% secure. We encourage you to use strong passwords and keep your account credentials confidential.`,
    },
    {
      title: "Cookies & Tracking Technologies",
      content: `We use cookies and similar tracking technologies to enhance your experience on our platform. These include:

- Essential cookies required for the platform to function properly
- Analytics cookies that help us understand how visitors use our site
- Preference cookies that remember your settings and choices
- Marketing cookies used to deliver relevant advertisements

You can control cookie settings through your browser preferences. Disabling certain cookies may affect the functionality of our platform. For full details, see our Cookie Policy.`,
    },
    {
      title: "Data Retention",
      content: `We retain your personal information for as long as necessary to provide our services and comply with legal obligations. Specifically:

- Account information is retained for the duration of your account plus 3 years after closure
- Shipment records are retained for 7 years for legal and tax compliance
- Support communications are retained for 2 years
- Marketing preferences are retained until you opt out

You may request deletion of your data at any time, subject to legal retention requirements.`,
    },
    {
      title: "Your Rights",
      content: `Depending on your location, you may have the following rights regarding your personal data:

- Right to access the personal information we hold about you
- Right to correct inaccurate or incomplete information
- Right to request deletion of your personal data
- Right to object to or restrict certain processing activities
- Right to data portability — receiving your data in a structured format
- Right to withdraw consent at any time where processing is based on consent

To exercise any of these rights, please contact us at xpressreach@outlook.com. We will respond to your request within 30 days.`,
    },
    {
      title: "Third-Party Links",
      content: `Our platform may contain links to third-party websites, services, or applications. We are not responsible for the privacy practices or content of these third parties. We encourage you to review the privacy policies of any third-party services you visit through links on our platform.`,
    },
    {
      title: "Children's Privacy",
      content: `XpressReach services are not directed at children under the age of 16. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately at xpressreach@outlook.com and we will promptly delete such information.`,
    },
    {
      title: "Changes to This Policy",
      content: `We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. We will notify you of material changes by posting the updated policy on our website with a revised effective date. Your continued use of our services after any changes constitutes your acceptance of the updated policy.`,
    },
    {
      title: "Contact Us",
      content: `If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal data, please contact us:

Email: xpressreach@outlook.com
Address: 123 Global Trade Ave, New York, USA
Support Hours: 24/7

We are committed to resolving any privacy concerns promptly and transparently.`,
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
          position: "relative", zIndex: 1,
          maxWidth: "1280px", margin: "0 auto",
          padding: "5rem 2rem",
        }}>
          <p style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "0.75rem", fontWeight: 700,
            letterSpacing: "0.15em", textTransform: "uppercase",
            color: "#E84C1E", marginBottom: "1rem",
          }}>
            Legal
          </p>
          <h1 style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 900, color: "#fff",
            letterSpacing: "-0.02em", lineHeight: 1.1,
            marginBottom: "1rem", textTransform: "uppercase",
          }}>
            Privacy Policy
          </h1>
          <p style={{
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "0.9rem", color: "rgba(255,255,255,0.5)",
          }}>
            Last updated: May 20, 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ background: "#F5F5F5", padding: "5rem 2rem" }}>
        <div style={{
          maxWidth: "1100px", margin: "0 auto",
          display: "grid", gridTemplateColumns: "260px 1fr",
          gap: "3rem", alignItems: "start",
        }} className="legal-grid">

          {/* Sidebar TOC */}
          <div style={{
            position: "sticky", top: "90px",
            background: "#fff", borderRadius: "16px",
            padding: "1.5rem",
            border: "1px solid #eee",
          }} className="legal-toc">
            <p style={{
              fontFamily: "var(--font-barlow), sans-serif",
              fontSize: "0.72rem", fontWeight: 700,
              textTransform: "uppercase", letterSpacing: "0.12em",
              color: "#999", marginBottom: "1rem",
            }}>
              Contents
            </p>
            {sections.map((s, i) => (
              <a key={i} href={`#section-${i}`} style={{
                display: "block", padding: "0.45rem 0",
                fontFamily: "var(--font-barlow), sans-serif",
                fontSize: "0.8rem", color: "#666",
                textDecoration: "none", fontWeight: 500,
                borderBottom: "1px solid #f5f5f5",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => e.target.style.color = "#E84C1E"}
              onMouseLeave={e => e.target.style.color = "#666"}
              >
                {i + 1}. {s.title}
              </a>
            ))}
          </div>

          {/* Sections */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{
              background: "#fff", borderRadius: "16px",
              padding: "2rem", border: "1px solid #eee",
            }}>
              <p style={{
                fontFamily: "var(--font-barlow), sans-serif",
                fontSize: "0.95rem", color: "#555", lineHeight: 1.8,
              }}>
                At XpressReach, we are committed to protecting your privacy and handling your personal data with the utmost care and transparency. This Privacy Policy explains how we collect, use, store, and protect your information when you use our platform and services.
              </p>
            </div>

            {sections.map((s, i) => (
              <div key={i} id={`section-${i}`} style={{
                background: "#fff", borderRadius: "16px",
                padding: "2rem", border: "1px solid #eee",
              }}>
                <h2 style={{
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontWeight: 900, fontSize: "1.1rem",
                  color: "#111", marginBottom: "1.25rem",
                  textTransform: "uppercase", letterSpacing: "0.02em",
                  paddingBottom: "0.75rem",
                  borderBottom: "2px solid #E84C1E",
                  display: "inline-block",
                }}>
                  {i + 1}. {s.title}
                </h2>
                <p style={{
                  fontFamily: "var(--font-barlow), sans-serif",
                  fontSize: "0.9rem", color: "#555",
                  lineHeight: 1.9, whiteSpace: "pre-line",
                }}>
                  {s.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .legal-grid { grid-template-columns: 1fr !important; }
            .legal-toc { position: static !important; }
          }
        `}</style>
      </section>

      <Footer />
    </main>
  );
}