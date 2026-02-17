import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-2">About Me</h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-6">
          Building <span className="text-gradient">Intelligent</span> Solutions
        </h3>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Highly motivated Artificial Intelligence student specializing in Natural Language Processing (NLP) 
          and Deep Learning. I am dedicated to developing innovative AI solutions by leveraging technical 
          expertise in Python, Transformers, and RAG systems. With a strong commitment to continuous learning 
          and a proven track record of contributing to impactful projects, I am seeking an entry-level position 
          where I can apply my skills in a dynamic, forward-thinking environment.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;
