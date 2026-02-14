import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming & Web",
    skills: ["Python", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "AI, ML & Deep Learning",
    skills: ["Machine Learning", "Deep Learning", "Neural Networks", "CNN", "ANN", "Transfer Learning", "Scikit-learn", "TensorFlow", "Keras", "PyTorch"],
  },
  {
    title: "Generative AI & LLMs",
    skills: ["Prompt Engineering", "RAG (Retrieval-Augmented Generation)", "LLM Fine-Tuning", "Google Gemini API", "Groq", "OpenAI API", "Hugging Face Transformers"],
  },
  {
    title: "Agentic AI & Orchestration",
    skills: ["LangChain", "LangGraph", "CrewAI", "MCP (Model Context Protocol)", "Multi-Agent Systems", "AI Agent Workflows"],
  },
  {
    title: "NLP & Computer Vision",
    skills: ["Text Preprocessing", "Tokenization", "Named Entity Recognition (NER)", "Text Classification", "Sentiment Analysis", "Image Classification", "Object Detection", "OpenCV", "NLTK", "spaCy"],
  },
  {
    title: "APIs & Data Engineering",
    skills: ["FastAPI", "RESTful APIs", "Web Scraping (BeautifulSoup, Selenium)", "SQL", "Vector Databases (FAISS, Chroma)"],
  },
  {
    title: "DevOps & Cloud",
    skills: ["Git", "GitHub", "Docker (Basic)", "Streamlit Cloud", "GCP (Basic)", "CI/CD Basics"],
  },
  {
    title: "Visualization & Tools",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Power BI", "Streamlit", "Jupyter Notebook", "VS Code", "Google Colab"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-gradient">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-10" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-xl p-6"
            >
              <h3 className="text-base font-semibold text-primary mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-colors cursor-default"
                  >
                    {skill}
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

export default SkillsSection;
