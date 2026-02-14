import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const contactItems = [
  { icon: Mail, label: "Email", value: "dheenadhayalan0902@gmail.com", href: "mailto:dheenadhayalan0902@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 93611 79549", href: "tel:+919361179549" },
  { icon: MapPin, label: "Location", value: "Vellore, Tamil Nadu, India", href: null },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/dheenadhayalan-l-02b1a5259", href: "https://linkedin.com/in/dheenadhayalan-l-02b1a5259" },
  { icon: Github, label: "GitHub", value: "github.com/dheenadhayalan09", href: "https://github.com/dheenadhayalan09" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding relative z-10">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-gradient">Get in Touch</h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-4" />
          <p className="text-muted-foreground">
            I'm always open to discussing AI projects, collaboration opportunities, or just a friendly chat about technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contactItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="glass rounded-xl p-5 flex items-center gap-4 hover:glow-primary transition-all duration-300 group block"
                >
                  <item.icon className="w-5 h-5 text-primary group-hover:text-accent transition-colors shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="text-sm text-foreground truncate">{item.value}</p>
                  </div>
                </a>
              ) : (
                <div className="glass rounded-xl p-5 flex items-center gap-4">
                  <item.icon className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="text-sm text-foreground">{item.value}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mt-20 pt-8 border-t border-border/50"
      >
        <p className="text-sm text-muted-foreground">
          © 2026 Dheenadhayalan L. Built with passion for AI.
        </p>
      </motion.footer>
    </section>
  );
};

export default ContactSection;
