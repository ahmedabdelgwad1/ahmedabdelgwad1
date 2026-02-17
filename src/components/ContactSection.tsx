import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="section-padding max-w-3xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-2">Contact</h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Let's <span className="text-gradient">Connect</span>
        </h3>
        <p className="text-muted-foreground mb-10">
          Interested in AI collaboration or have an opportunity? Feel free to reach out.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          <a
            href="mailto:ahmedabdelgwa135@gmail.com"
            className="flex items-center gap-3 bg-card border border-border rounded-xl p-5 hover:glow-border transition-all duration-300"
          >
            <Mail className="w-5 h-5 text-primary shrink-0" />
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="text-sm font-medium">ahmedabdelgwa135@gmail.com</p>
            </div>
          </a>

          <a
            href="tel:+201009780937"
            className="flex items-center gap-3 bg-card border border-border rounded-xl p-5 hover:glow-border transition-all duration-300"
          >
            <Phone className="w-5 h-5 text-primary shrink-0" />
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Phone</p>
              <p className="text-sm font-medium">+20 100 978 0937</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/ahmed--abdelgwad"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-card border border-border rounded-xl p-5 hover:glow-border transition-all duration-300"
          >
            <Linkedin className="w-5 h-5 text-primary shrink-0" />
            <div className="text-left">
              <p className="text-xs text-muted-foreground">LinkedIn</p>
              <p className="text-sm font-medium">ahmed--abdelgwad</p>
            </div>
          </a>

          <div className="flex items-center gap-3 bg-card border border-border rounded-xl p-5">
            <MapPin className="w-5 h-5 text-primary shrink-0" />
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Location</p>
              <p className="text-sm font-medium">Alexandria, Egypt</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.p
        className="text-xs text-muted-foreground mt-16 pb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        © 2026 Ahmed Abdelgwad. Built with passion.
      </motion.p>
    </section>
  );
};

export default ContactSection;
