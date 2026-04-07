import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { GraduationCap, Briefcase, Award } from "lucide-react";
import { useRef } from "react";

const timeline = [
  {
    year: "2025 - Present",
    title: "Frontend Developer",
    org: "Viraj Soft Tech Solutions, Jabalpur",
    desc: "Building modern web applications using React, Tailwind CSS, and Laravel for various clients.",
    icon: Briefcase,
    type: "work" as const,
  },
  {
    year: "2025 - Present",
    title: "Web Development Intern",
    org: "Viraj Soft Tech Solutions, Jabalpur",
    desc: "Developed responsive UI components, collaborated with design teams, and optimized application performance.",
    icon: Briefcase,
    type: "work" as const,
  },
  {
    year: "2023 - Present",
    title: "B.Tech in Computer Science (AIML)",
    org: "Baderia Global Institute of Engineering and Management, Jabalpur",
    desc: "Focused on software engineering, data structures, algorithms, and full-stack web development.",
    icon: GraduationCap,
    type: "education" as const,
  },
  {
    year: "2023",
    title: "Higher Secondary (12th)",
    org: "Millennium Academy H.S. School, Jabalpur",
    desc: "Completed with distinction in Mathematics and Science.",
    icon: Award,
    type: "education" as const,
  },
];

const Card3D = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });

  const handleMouse = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const TimelineSection = () => (
  <section id="experience" className="py-24 relative overflow-hidden">
    {/* Background ambient effects */}
    <div className="absolute top-1/3 left-0 w-72 h-72 rounded-full bg-primary/5 blur-[120px]" />
    <div className="absolute bottom-1/4 right-0 w-64 h-64 rounded-full bg-glow-secondary/5 blur-[100px]" />

    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary font-display text-sm tracking-widest uppercase mb-2">My Journey</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
          Experience & <span className="gradient-text">Education</span>
        </h2>
      </motion.div>

      <div className="relative max-w-3xl mx-auto">
        {/* Animated vertical line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px origin-top md:-translate-x-px"
          style={{
            background: "linear-gradient(to bottom, hsl(var(--primary) / 0.8), hsl(var(--primary) / 0.3), transparent)",
          }}
        />

        {timeline.map((item, i) => {
          const isLeft = i % 2 === 0;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: isLeft ? -60 : 60, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.2, type: "spring", stiffness: 120, damping: 20 }}
              className={`relative flex items-start mb-12 md:mb-16 ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              } flex-row`}
            >
              {/* 3D Content card */}
              <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? "md:pr-0 md:text-right" : "md:pl-0 md:text-left"}`}>
                <Card3D>
                  <div className="glass rounded-xl p-6 group relative overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)]">
                    {/* Animated gradient border on hover */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: "linear-gradient(135deg, hsl(var(--primary) / 0.1), transparent 50%, hsl(var(--primary) / 0.05))",
                      }}
                    />
                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: "linear-gradient(105deg, transparent 40%, hsl(var(--primary) / 0.08) 45%, hsl(var(--primary) / 0.12) 50%, hsl(var(--primary) / 0.08) 55%, transparent 60%)",
                      }}
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.8 }}
                    />

                    <div className="relative z-10">
                      <motion.span
                        initial={{ width: 0 }}
                        whileInView={{ width: "auto" }}
                        viewport={{ once: true }}
                        className="inline-block text-xs font-display font-semibold text-primary mb-2 tracking-wider uppercase overflow-hidden"
                      >
                        {item.year}
                      </motion.span>
                      <h3 className="text-lg font-display font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-sm text-primary/80 font-medium mb-2">{item.org}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </Card3D>
              </div>

              {/* Center icon with pulse animation */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                  className="relative"
                >
                  {/* Pulse rings */}
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.5 }}
                    className="absolute inset-0 rounded-full border border-primary/30"
                  />
                  <div className="w-12 h-12 rounded-full bg-secondary border-2 border-primary/50 flex items-center justify-center shadow-[0_0_25px_hsl(var(--primary)/0.4)] z-10 relative">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon size={18} className="text-primary" />
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* Spacer */}
              <div className="hidden md:block md:w-[calc(50%-2rem)]" />
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default TimelineSection;
