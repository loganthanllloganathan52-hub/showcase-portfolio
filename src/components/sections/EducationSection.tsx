import { motion } from "framer-motion";
import { GraduationCap, Award, Globe } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="section-padding relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-gradient">Education</h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="glass rounded-xl p-8"
        >
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
              <GraduationCap className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                B.Tech in Artificial Intelligence & Data Science
              </h3>
              <p className="text-primary font-medium">Kingston Engineering College, Vellore</p>
              <p className="text-sm text-muted-foreground mt-1">2022 – 2026</p>
              <p className="text-sm text-muted-foreground mt-3">
                Focused on AI, machine learning, deep learning, data science, and software engineering. 
                Completed multiple projects in NLP, computer vision, and generative AI. 
                Active participant in hackathons, technical events, and AI research activities.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-xl p-6 mt-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <Globe className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">Languages</h3>
          </div>
          <div className="flex flex-wrap gap-4">
            {[
              { lang: "Tamil", level: "Fluent" },
              { lang: "English", level: "Intermediate" },
              { lang: "Telugu", level: "Intermediate" },
            ].map((l) => (
              <div key={l.lang} className="flex items-center gap-2">
                <span className="text-foreground text-sm font-medium">{l.lang}</span>
                <span className="text-xs text-muted-foreground bg-secondary/50 px-2 py-0.5 rounded-full">
                  {l.level}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
