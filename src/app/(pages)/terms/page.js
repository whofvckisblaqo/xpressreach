"use client";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function TermsPage() {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: `By accessing or using XpressReach's platform, website, or any of our logistics services, you confirm that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy.

If you are using our services on behalf of a business or organization, you represent that you have the authority to bind that entity to these terms. If you do not agree to these terms, please do not use our services.`,
    },
    {
      title: "Services Provided",
      content: `XpressReach provides global logistics and shipment services including but not limited to:

- Ocean freight forwarding (FCL and LCL)
- Air freight services (express and standard)
- Road transport and ground freight
- Warehousing and distribution
- Customs clearance assistance
- Shipment tracking and visibility tools
- Quote request and booking management

Service availability may vary by region. XpressReach reserves the right to modify, suspend, or discontinue any service at any time with reasonable notice.`,
    },
    {
      title: "User Accounts",
      content: `To access certain features of our platform, you must create an account. You agree to:

- Provide accurate, current, and complete information during registration
- Maintain the security and confidentiality of your account credentials
- Notify us immediately of any unauthorized access to your account
- Accept responsibility for all activities that occur under your account
- Not share your account credentials with any third party

XpressReach reserves the right to suspend or terminate accounts that violate these terms or engage in fraudulent activity.`,
    },
    {
      title: "Booking & Payment",
      content: `All shipment bookings are subject to availability and acceptance by XpressReach. By submitting a booking:

- You confirm that the shipment details provided are accurate and complete
- You agree to pay all applicable charges, fees, and taxes associated with the service
- You authorize XpressReach to charge your designated payment method
- You understand that quotes are estimates and final charges may vary based on actual shipment weight, dimensions, and route

Payments are due as specified in your service agreement or invoice. Late payments may incur additional charges.`,
    },
    {
      title: "Prohibited Shipments",
      content: `You agree not to ship any of the following prohibited items through XpressReach:

- Illegal substances, narcotics, or controlled drugs
- Weapons, firearms, ammunition, or explosives
- Counterfeit, pirated, or stolen goods
- Hazardous materials without proper documentation and authorization
- Live animals without required permits and documentation
- Items that violate any applicable law or regulation in the origin or destination country
- Perishable goods without appropriate cold chain arrangements

Violation of these restrictions may result in immediate account termination and legal action.`,
    },
    {
      title: "Liability & Claims",
      content: `XpressReach's liability for loss, damage, or delay of shipments is limited as follows:

- Our standard liability coverage is limited per kilogram of affected cargo
- Claims for loss or damage must be submitted within 14 days of delivery or expected delivery date
- XpressReach is not liable for delays caused by customs, weather, natural disasters, or other force majeure events
- We strongly recommend purchasing comprehensive cargo insurance for high-value shipments
- Consequential, indirect, or punitive damages are excluded from our liability

To file a claim, contact us at xpressreach@outlook.com with your tracking number and supporting documentation.`,
    },
    {
      title: "Intellectual Property",
      content: `All content on the XpressReach platform including text, graphics, logos, icons, images, software, and design elements are the exclusive property of XpressReach or its licensors and are protected by international copyright and intellectual property laws.

You may not reproduce, distribute, modify, or create derivative works from any content on our platform without our prior written consent. Unauthorized use of our intellectual property may result in legal action.`,
    },
    {
      title: "Termination",
      content: `Either party may terminate the service relationship at any time. XpressReach reserves the right to suspend or terminate your access to our platform immediately and without notice if:

- You violate any provision of these Terms of Service
- We suspect fraudulent, abusive, or illegal activity
- Required by law or regulatory authority
- Continued service would expose XpressReach to legal liability

Upon termination, all outstanding obligations and payments remain due. Provisions that by their nature should survive termination will remain in effect.`,
    },
    {
      title: "Governing Law",
      content: `These Terms of Service are governed by and construed in accordance with the laws of the State of New York, United States, without regard to its conflict of law provisions.

Any disputes arising from these terms or your use of our services shall be subject to the exclusive jurisdiction of the courts of New York. If any provision of these terms is found to be unenforceable, the remaining provisions will continue in full force and effect.`,
    },
    {
      title: "Changes to Terms",
      content: `XpressReach reserves the right to modify these Terms of Service at any time. We will notify users of material changes by posting the updated terms on our website and updating the effective date. Your continued use of our services after such changes constitutes your acceptance of the revised terms.

We encourage you to review these terms periodically to stay informed of any updates.`,
    },
    {
      title: "Contact Information",
      content: `For questions, concerns, or legal notices regarding these Terms of Service, please contact us:

Email: xpressreach@outlook.com
Address: 123 Global Trade Ave, New York, USA
Support: Available 24/7 through our Support page

We are committed to addressing your inquiries promptly and professionally.`,
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
            Terms of Service
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

          {/* TOC */}
          <div style={{
            position: "sticky", top: "90px",
            background: "#fff", borderRadius: "16px",
            padding: "1.5rem", border: "1px solid #eee",
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
                These Terms of Service govern your use of the XpressReach platform and all related logistics services. Please read them carefully before using our services. By using XpressReach, you agree to be bound by these terms.
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