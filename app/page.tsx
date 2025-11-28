import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProgramsSection from "@/components/ProgramsSection";
import UniqueSection from "@/components/UniqueSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <Hero />
      <AboutSection />
      <FeaturesSection />
      <UniqueSection />
      <ProgramsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
