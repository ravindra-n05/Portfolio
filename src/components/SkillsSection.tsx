import { motion } from "framer-motion";

const skills = [
  { name: "React", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Tailwind CSS", level: 92 },
  { name: "Laravel", level: 80 },
  { name: "Bootstrap", level: 88 },
  { name: "Java", level: 75 },
  { name: "Node.js", level: 75 },
  { name: "Python", level: 70 },
  { name: "Git & DevOps", level: 80 },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 bg-secondary/30">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary font-display text-sm tracking-widest uppercase mb-2">My Skills</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
          Technical <span className="gradient-text">Proficiency</span>
        </h2>
      </motion.div>

      <div className="max-w-2xl mx-auto space-y-6">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="space-y-2"
          >
            <div className="flex justify-between text-sm">
              <span className="font-display font-medium text-foreground">{skill.name}</span>
              <span className="text-primary">{skill.level}%</span>
            </div>
            <div className="h-2.5 rounded-full bg-muted overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                className="h-full rounded-full bg-gradient-to-r from-primary to-glow-secondary"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
