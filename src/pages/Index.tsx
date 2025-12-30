import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ParticlesBackground from "@/components/ParticlesBackground";
import GradientBlurs from "@/components/GradientBlurs";
import Scene3D from "@/components/Scene3D";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ResumeSection from "@/components/sections/ResumeSection";
import ArticlesSection from "@/components/sections/ArticlesSection";
import ProfilesSection from "@/components/sections/ProfilesSection";
import ContactSection from "@/components/sections/ContactSection";
import SocialLinks from "@/components/sections/SocialLinks";

const sectionIds = ["hero", "about", "projects", "skills", "resume", "articles", "profiles", "contact"];

const Index = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (index: number) => {
    const element = document.getElementById(sectionIds[index]);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setCurrentSection(index);
    }
  };

  return (
    <div ref={containerRef} className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Background layers */}
      <GradientBlurs />
      <ParticlesBackground />
      <Scene3D />

      {/* Navigation */}
      <Navigation currentSection={currentSection} onNavigate={scrollToSection} />

      {/* Main content */}
      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div id="hero">
            <HeroSection onScrollDown={() => scrollToSection(1)} />
          </div>
          <div id="about"><AboutSection /></div>
          <div id="projects"><ProjectsSection /></div>
          <div id="skills"><SkillsSection /></div>
          <div id="resume"><ResumeSection /></div>
          <div id="articles"><ArticlesSection /></div>
          <div id="profiles"><ProfilesSection /></div>
          <div id="contact"><ContactSection /></div>
          <SocialLinks />
        </motion.main>
      </AnimatePresence>
    </div>
  );
};

export default Index;
