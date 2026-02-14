import { motion } from "framer-motion";
import { Brain, Cpu, Sparkles } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-gradient">About Me</h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-8" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg text-muted-foreground leading-relaxed mb-10"
        >
          Aspiring AI developer with hands-on experience in building intelligent solutions using Python, machine learning, deep learning, NLP, computer vision, and generative AI. Skilled in developing retrieval-augmented generation (RAG) models, agentic AI workflows, and full-stack AI-powered web applications. Passionate about applying AI to solve real-world problems and continuously exploring cutting-edge technologies in the field.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Brain, title: "AI & ML", desc: "Building intelligent models with deep learning, NLP, and computer vision for real-world applications." },
            { icon: Sparkles, title: "Generative AI", desc: "Developing RAG models, LLM-powered applications, and agentic AI workflows with LangChain & CrewAI." },
            { icon: Cpu, title: "Full-Stack AI", desc: "End-to-end AI application development from data pipeline to deployment using FastAPI, Streamlit & cloud." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
              className="glass rounded-xl p-6 hover:glow-primary transition-shadow duration-300"
            >
              <item.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
