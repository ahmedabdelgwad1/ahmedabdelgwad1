import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <div id="about"><AboutSection /></div>
      <div id="experience"><ExperienceSection /></div>
      <div id="projects"><ProjectsSection /></div>
      <div id="skills"><SkillsSection /></div>
      <div id="contact"><ContactSection /></div>
    </div>
  );
};

export default Index;
