import { motion } from "framer-motion";
import { Download, ChevronDown, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center section-padding">
      <div className="max-w-5xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Welcome to my portfolio
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4"
        >
          <span className="text-foreground">Hi, I'm </span>
          <span className="text-gradient">Dheenadhayalan L</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl text-muted-foreground mb-3"
        >
          AI Developer &amp; Data Science Enthusiast
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground mb-8"
        >
          <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-accent" /> Vellore, Tamil Nadu</span>
          <span className="flex items-center gap-1"><Mail className="w-4 h-4 text-accent" /> dheenadhayalan0902@gmail.com</span>
          <span className="flex items-center gap-1"><Phone className="w-4 h-4 text-accent" /> +91 93611 79549</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap gap-4 justify-center mb-8"
        >
          <a href="/Dheenadhayalan_Resume.pdf" download>
            <Button size="lg" className="glow-primary text-base px-8">
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </a>
          <Button
            size="lg"
            variant="outline"
            className="border-glow text-base px-8"
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get in Touch
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="flex gap-4 justify-center"
        >
          <a href="https://linkedin.com/in/dheenadhayalan-l-02b1a5259" target="_blank" rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors text-sm underline underline-offset-4">
            LinkedIn
          </a>
          <a href="https://github.com/dheenadhayalan09" target="_blank" rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors text-sm underline underline-offset-4">
            GitHub
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-muted-foreground animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
