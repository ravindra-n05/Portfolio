import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TechMarquee from "@/components/TechMarquee";
import AboutSection from "@/components/AboutSection";
import TimelineSection from "@/components/TimelineSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";

import ContactSection from "@/components/ContactSection";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <TechMarquee />
    <AboutSection />
    <TimelineSection />
    <SkillsSection />
    <ProjectsSection />
    
    <ContactSection />
    <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border/50">
      <p>&copy; 2026 Ravindra Namdev. Built with passion & code.</p>
    </footer>
  </div>
);

export default Index;

