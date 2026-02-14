import { motion } from "framer-motion";
import { Award, Trophy } from "lucide-react";

const certifications = [
  "Artificial Intelligence – Infosys Springboard",
  "Deep Learning – Infosys Springboard",
  "Introduction to Python – Infosys Springboard",
  "AI using Python – Top Engineers",
];

const achievements = [
  {
    title: "1st Place – VIBEAITHON Hackathon",
    desc: "Won first place in an AI-focused hackathon, demonstrating innovative problem-solving and rapid prototyping skills in building AI-powered solutions.",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="section-padding relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-gradient">Certifications & Achievements</h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-10" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="glass rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-5">
              <Award className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Certifications</h3>
            </div>
            <ul className="space-y-3">
              {certifications.map((cert, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                  {cert}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-5">
              <Trophy className="w-6 h-6 text-accent" />
              <h3 className="text-lg font-semibold text-foreground">Achievements</h3>
            </div>
            {achievements.map((a, i) => (
              <div key={i}>
                <h4 className="text-base font-semibold text-accent mb-2">{a.title}</h4>
                <p className="text-sm text-muted-foreground">{a.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
