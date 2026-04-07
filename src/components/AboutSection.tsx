import { motion } from "framer-motion";
import { Code2, Palette, Zap, Globe } from "lucide-react";

const highlights = [
  { icon: Code2, title: "Clean Code", desc: "Writing maintainable, scalable solutions" },
  { icon: Palette, title: "UI/UX Design", desc: "Pixel-perfect interfaces with purpose" },
  { icon: Zap, title: "Performance", desc: "Optimized for speed and efficiency" },
  { icon: Globe, title: "Modern Stack", desc: "React, Laravel, Bootstrap, Java & more" },
];

const AboutSection = () => (
  <section id="about" className="py-24 relative">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary font-display text-sm tracking-widest uppercase mb-2">About Me</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
          Passionate About <span className="gradient-text">Technology</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            whileHover={{ y: -8, rotateY: 5, scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
            className="card-3d glass rounded-xl p-6 text-center space-y-3 hover:glow-border transition-shadow"
          >
            <div className="w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center">
              <item.icon className="text-primary" size={24} />
            </div>
            <h3 className="font-display font-semibold text-foreground">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
