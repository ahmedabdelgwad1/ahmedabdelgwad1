import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "C++", "Java"],
  },
  {
    title: "AI & NLP",
    skills: ["LLMs", "RAG", "BERT", "T5", "GPT", "Deep Learning", "Machine Learning"],
  },
  {
    title: "Frameworks",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "LangChain", "Pandas", "NumPy"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Google Colab", "Jupyter"],
  },
  {
    title: "Specializations",
    skills: ["Generative AI", "Computer Vision", "Data Preprocessing", "Model Optimization", "Sequence Modeling"],
  },
];

const SkillsSection = () => {
  return (
    <section className="section-padding max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-2">Skills</h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-12">
          Technical <span className="text-gradient">Arsenal</span>
        </h3>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            className="bg-card border border-border rounded-xl p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <h4 className="font-mono text-xs text-primary uppercase tracking-wider mb-4">{cat.title}</h4>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground border border-border hover:glow-border transition-shadow duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
