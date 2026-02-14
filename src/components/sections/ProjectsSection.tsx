import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "IntelliDecision AI – Automated ML Platform",
    highlights: [
      "Built an end-to-end Automated Machine Learning (AutoML) web platform using Streamlit.",
      "Supports CSV data upload, auto preprocessing, and model training with multiple ML algorithms.",
      "Auto-selects the best-performing model based on evaluation metrics (accuracy, F1-score, RMSE).",
      "Features include EDA visualizations, feature importance charts, and downloadable trained models.",
      "Designed for non-technical users to perform ML tasks without writing code.",
    ],
    tech: ["Python", "Streamlit", "Scikit-learn", "Pandas", "Matplotlib"],
  },
  {
    title: "MCP-based RAG Model (Client-Server Architecture)",
    highlights: [
      "Developed a Retrieval-Augmented Generation system using Model Context Protocol (MCP) architecture.",
      "Implemented a client-server model where the server manages document indexing and retrieval via FAISS vector store.",
      "The client sends natural language queries, retrieves relevant context, and generates responses using Google Gemini API.",
      "Supports multi-document ingestion, chunking, and semantic search for accurate, context-aware answers.",
      "Built with Python, LangChain, and FastAPI for scalable, production-ready deployment.",
    ],
    tech: ["Python", "LangChain", "FAISS", "Google Gemini", "FastAPI", "MCP"],
  },
  {
    title: "RAG Model (LangChain-based)",
    highlights: [
      "Built a Retrieval-Augmented Generation (RAG) pipeline using LangChain and Chroma vector database.",
      "Enables intelligent Q&A over custom documents (PDFs, text files) by combining retrieval with LLM generation.",
      "Integrated Google Gemini API for high-quality, context-grounded responses.",
      "Implemented document chunking, embedding generation (HuggingFace/OpenAI), and similarity search.",
      "Deployed as a Streamlit web app for interactive document-based querying.",
    ],
    tech: ["Python", "LangChain", "Chroma", "Google Gemini", "Streamlit", "HuggingFace"],
  },
  {
    title: "Chronic Disease Prediction using ML",
    highlights: [
      "Developed a machine learning-based web app to predict chronic diseases (diabetes, heart disease) from patient health data.",
      "Trained and compared multiple ML models (Logistic Regression, Random Forest, SVM, XGBoost) for optimal accuracy.",
      "Performed feature engineering, data balancing (SMOTE), and hyperparameter tuning for robust predictions.",
      "Built an interactive Streamlit UI for users to input symptoms and receive instant risk predictions.",
      "Achieved 90%+ accuracy on test datasets with detailed model performance dashboards.",
    ],
    tech: ["Python", "Scikit-learn", "XGBoost", "Streamlit", "Pandas", "SMOTE"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-gradient">Projects</h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-10" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-xl p-6 hover:glow-primary transition-shadow duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-foreground pr-4">{proj.title}</h3>
                <ExternalLink className="w-4 h-4 text-muted-foreground shrink-0 mt-1" />
              </div>

              <ul className="space-y-2 mb-5 flex-1">
                {proj.highlights.map((h, j) => (
                  <li key={j} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-accent mt-0.5 shrink-0">▹</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                {proj.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
