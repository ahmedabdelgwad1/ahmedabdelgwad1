import { motion } from "framer-motion";
import { GraduationCap, Briefcase, BookOpen } from "lucide-react";

const timeline = [
  {
    icon: GraduationCap,
    title: "B.Sc. Computer Science & AI",
    place: "Pharos University in Alexandria",
    date: "2022 – 2026",
    description: "Current Grade: Very Good. Expected Graduation: 2026.",
    type: "education" as const,
  },
  {
    icon: Briefcase,
    title: "Intern – Generative AI Professional Track",
    place: "Digital Egypt Pioneers Initiative (DEPI)",
    date: "Nov 2025 – Present",
    description: "Working on advanced Generative AI architectures including LLMs, GANs, and Hugging Face integration. Developing NLP expertise with Attention Models and Transfer Learning.",
    type: "work" as const,
  },
  {
    icon: BookOpen,
    title: "Diploma in Machine Learning",
    place: "GSkilled Academy",
    date: "July 2025 – Mar 2026",
    description: "Comprehensive curriculum covering Supervised and Unsupervised Learning, model optimization, and data science libraries.",
    type: "course" as const,
  },
  {
    icon: BookOpen,
    title: "Advanced NLP Track",
    place: "Route IT Training Center",
    date: "July 2025 – Nov 2025",
    description: "Specialized in Transformer architectures (BERT, GPT, T5), fine-tuning LLMs, and implementing Attention mechanisms.",
    type: "course" as const,
  },
];

const ExperienceSection = () => {
  return (
    <section className="section-padding max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-2">Experience & Education</h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-12">
          My <span className="text-gradient">Journey</span>
        </h3>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-10">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              className="relative pl-14 md:pl-16"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Icon */}
              <div className="absolute left-0 top-0 w-9 h-9 md:w-12 md:h-12 rounded-full bg-card border border-border flex items-center justify-center glow-border">
                <item.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              </div>

              <div className="bg-card border border-border rounded-lg p-5 hover:glow-border transition-shadow duration-300">
                <span className="font-mono text-xs text-primary">{item.date}</span>
                <h4 className="text-lg font-semibold mt-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.place}</p>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
