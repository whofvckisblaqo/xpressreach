import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/ui/Hero";
import Services from "@/components/ui/Services";
import WhyUs from "@/components/ui/WhyUs";
import Stats from "@/components/ui/Stats";
import HowItWorks from "@/components/ui/HowItWorks";
import CoverageMap from "@/components/ui/CoverageMap";
import Testimonials from "@/components/ui/Testimonials";
import AppDownload from "@/components/ui/AppDownload";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Stats />
      <HowItWorks />
      <CoverageMap />
      <Testimonials />
      <AppDownload />
      <Footer />
    </main>
  );
}