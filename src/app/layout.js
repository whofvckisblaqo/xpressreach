import { Barlow } from "next/font/google";
import "./globals.css";
import TawkTo from "@/components/ui/TawkTo";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow",
});

export const metadata = {
  title: "XpressReach — Global Consignment & Logistics",
  description:
    "Fast, reliable global shipping. Ocean freight, air freight, road transport and warehousing solutions worldwide.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={barlow.variable} style={{ fontFamily: "var(--font-barlow), sans-serif" }}>
        {children}
        <TawkTo />
      </body>
    </html>
  );
}