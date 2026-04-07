import { motion } from "framer-motion";
import { Code2, Database, Globe, Layout, Palette, Server, Smartphone, Terminal } from "lucide-react";

const techs = [
  { name: "React", icon: Code2 },
  { name: "Laravel", icon: Server },
  { name: "Java", icon: Terminal },
  { name: "Bootstrap", icon: Layout },
  { name: "JavaScript", icon: Code2 },
  { name: "HTML/CSS", icon: Globe },
  { name: "Tailwind CSS", icon: Palette },
  { name: "MySQL", icon: Database },
  { name: "Git", icon: Terminal },
  { name: "Responsive Design", icon: Smartphone },
];

const TechMarquee = () => {
  const doubled = [...techs, ...techs];

  return (
    <section className="py-10 border-t border-b border-border/50 overflow-hidden relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent" />

      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="flex gap-8 w-max"
      >
        {doubled.map((tech, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-6 py-3 rounded-full border border-border/50 bg-secondary/50 backdrop-blur-sm whitespace-nowrap group hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
          >
            <tech.icon size={18} className="text-primary shrink-0" />
            <span className="text-sm font-display font-medium text-muted-foreground group-hover:text-foreground transition-colors">
              {tech.name}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default TechMarquee;
