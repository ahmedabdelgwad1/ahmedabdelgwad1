import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(175 80% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(175 80% 50%) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-primary text-sm md:text-base mb-4 tracking-widest uppercase">
            {"< Hello World />"}
          </p>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          Ahmed{" "}
          <span className="text-gradient">Abdelgwad</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl lg:text-3xl font-light text-muted-foreground mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          NLP Engineer & AI Developer
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          <a href="mailto:ahmedabdelgwa135@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail className="w-4 h-4" /> ahmedabdelgwa135@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/ahmed--abdelgwad" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4" /> Alexandria, Egypt
          </span>
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <a href="#about" className="inline-block animate-float">
            <ChevronDown className="w-6 h-6 text-primary" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
