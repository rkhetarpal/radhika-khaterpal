// app/page.tsx

import HeroSection from "@/app/components/HeroSection";
import AboutSection from "@/app/components/AboutSection";
import ProjectsSection from "@/app/components/ProjectsSection";
import ExperienceSection from "@/app/components/ExperienceSection";
import SkillsSection from "@/app/components/SkillsSection";
import ContactSection from "@/app/components/ContactSection";
import ScrollProgress from "@/app/components/ScrollProgress";
import Navbar from "@/app/components/Navbar";
import FadeUp from "@/app/components/FadeUp";
import Footer from "@/app/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <FadeUp>
        <AboutSection />
      </FadeUp>
      <FadeUp>
        <ExperienceSection />
      </FadeUp>
      <FadeUp>
        <ProjectsSection />
      </FadeUp>
      <FadeUp>
        <SkillsSection />
      </FadeUp>
      <FadeUp>
        <ContactSection />
      </FadeUp>
      <Footer />
    </main>
  );
}