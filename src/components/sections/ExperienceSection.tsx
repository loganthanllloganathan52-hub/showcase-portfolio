import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "AI Intern",
    company: "Niyata Info Tech",
    period: "Jul 2025 – Sep 2025",
    bullets: [
      "Designed and implemented Retrieval-Augmented Generation (RAG) systems using LangChain and vector databases (FAISS/Chroma) for intelligent document Q&A.",
      "Built agentic AI workflows and multi-agent systems using CrewAI and LangGraph for task automation and orchestration.",
      "Integrated LLMs (Google Gemini, Groq, OpenAI) into production-ready applications using FastAPI and Streamlit.",
      "Developed an MCP (Model Context Protocol) based client-server RAG architecture enabling scalable, multi-model interactions.",
      "Collaborated in Agile sprints, contributed to internal AI tooling, and documented model performance benchmarks.",
    ],
  },
  {
    role: "Data Science Intern",
    company: "Bics Global",
    period: "Jun 2024 – Jul 2024",
    bullets: [
      "Performed end-to-end data preprocessing, feature engineering, and exploratory data analysis (EDA) on real-world datasets.",
      "Built and evaluated machine learning models (classification & regression) using Scikit-learn and XGBoost.",
      "Created interactive data dashboards and visualizations using Power BI and Plotly.",
      "Assisted in automating data pipelines and report generation using Python scripts.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-gradient">Work Experience</h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-10" />
        </motion.div>

        <div className="relative border-l-2 border-primary/30 ml-4 space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative pl-10"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                <Briefcase className="w-2.5 h-2.5 text-primary" />
              </div>

              <div className="glass rounded-xl p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                    <p className="text-primary text-sm font-medium">{exp.company}</p>
                  </div>
                  <span className="text-xs text-muted-foreground mt-1 sm:mt-0 bg-secondary/50 px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-accent mt-1 shrink-0">▹</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
