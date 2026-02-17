import { motion } from "framer-motion";
import { Bot, Search, FileText } from "lucide-react";

const projects = [
  {
    icon: Bot,
    title: "Interactive AI Tourist Robot",
    badge: "Graduation Project",
    description: "Orchestrated the AI module for an autonomous museum guide (RoboMuse), implementing LLMs and RAG systems for context-aware visitor interactions with Computer Vision integration.",
    tags: ["Python", "LLMs", "RAG", "NLP", "Robotics"],
  },
  {
    icon: Search,
    title: "RAG-based Question Answering System",
    badge: "NLP",
    description: "Engineered a context-aware QA system leveraging RAG by integrating Google Gemini API with LangChain and optimizing vector data retrieval using ChromaDB.",
    tags: ["LangChain", "Gemini API", "ChromaDB", "Transformers"],
  },
  {
    icon: FileText,
    title: "Text Summarization System",
    badge: "Deep Learning",
    description: "Developed an automated summarization pipeline utilizing BART/T5 Transformer models, fine-tuned on large datasets and evaluated using ROUGE metrics.",
    tags: ["Python", "PyTorch", "Hugging Face"],
  },
];

const ProjectsSection = () => {
  return (
    <section className="section-padding max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-2">Projects</h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-12">
          Featured <span className="text-gradient">Work</span>
        </h3>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="group bg-card border border-border rounded-xl p-6 hover:glow-border transition-all duration-300 flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <project.icon className="w-5 h-5 text-primary" />
            </div>
            <span className="font-mono text-[10px] text-primary uppercase tracking-wider">{project.badge}</span>
            <h4 className="text-lg font-bold mt-1 mb-3">{project.title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed flex-1">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag) => (
                <span key={tag} className="text-[11px] font-mono px-2 py-1 rounded-md bg-secondary text-secondary-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
