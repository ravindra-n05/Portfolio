import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import profileImg from "@/assets/profile.png";

const roles = ["Frontend Developer", "UI/UX Designer", "React Developer", "Tech Enthusiast"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length === current.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-glow-secondary/5 blur-[80px]" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Profile image - LEFT on desktop, matching reference design */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
          className="relative flex justify-center z-10 order-first"
        >
          <div className="relative">
            {/* Outer glowing ring */}
            <div className="absolute -inset-6 rounded-full border-2 border-primary/30 animate-pulse-glow" />
            {/* Middle rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 rounded-full"
              style={{
                background: "conic-gradient(from 0deg, transparent 0%, hsl(var(--primary)) 25%, transparent 50%, hsl(var(--primary)) 75%, transparent 100%)",
                mask: "radial-gradient(farthest-side, transparent calc(100% - 3px), white calc(100% - 3px))",
                WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 3px), white calc(100% - 3px))",
              }}
            />
            {/* Inner glow behind image */}
            <div className="absolute -inset-2 rounded-full bg-primary/20 blur-xl" />
            {/* Profile image */}
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/50 relative animate-float shadow-[0_0_40px_hsl(var(--primary)/0.3)]">
              <img
                src={profileImg}
                alt="Ravindra Namdev - Tech Student"
                width={512}
                height={512}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Orbiting dot */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-8 rounded-full"
            >
              <div className="absolute -top-1.5 left-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary)/0.8)]" />
            </motion.div>
          </div>
        </motion.div>

        {/* Text - RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 z-10"
        >
          <p className="text-muted-foreground text-lg">Hello, I'm</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight">
            Ravindra <span className="gradient-text">Namdev</span>
          </h1>
          <div className="flex items-center gap-2 text-xl md:text-2xl font-display">
            <span className="text-muted-foreground">And I'm a</span>
            <span className="text-primary glow-text font-semibold">
              {text}
              <span className="border-r-2 border-primary animate-blink ml-0.5">&nbsp;</span>
            </span>
          </div>
          <p className="text-muted-foreground max-w-md leading-relaxed">
            Passionate tech student crafting modern web experiences with clean code and bold design. Turning ideas into interactive digital realities.
          </p>

          <div className="flex gap-4 pt-2">
            {[
              { Icon: Github, href: "https://github.com/ravindra-n05" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/ravindra-namdev-51069830b/" },
              { Icon: Instagram, href: "https://www.instagram.com/ravindra_m53/" },
              { Icon: Mail, href: "#contact" },
            ].map(({ Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-border transition-all"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
