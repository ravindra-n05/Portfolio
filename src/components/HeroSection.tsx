import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import profileImg from "@/assets/profile.png";
import profileLightImg from "@/assets/profile2.png";

const roles = ["Frontend Developer", "Full-Stack Developer", "Creative Coder", "Tech Enthusiast"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isLightTheme, setIsLightTheme] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const syncTheme = () => setIsLightTheme(root.classList.contains("light"));

    syncTheme();
    const observer = new MutationObserver(syncTheme);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

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

  const handlePointerMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - bounds.left) / bounds.width;
    const py = (event.clientY - bounds.top) / bounds.height;

    setTilt({
      x: (0.5 - py) * 14,
      y: (px - 0.5) * 18,
    });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <div className="absolute inset-0 hero-surface" />
      <div className="absolute inset-0 hero-grid" />
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-glow-secondary/10 blur-[120px]" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
          className="relative z-10 order-first flex justify-center"
        >
          <motion.div
            onMouseMove={handlePointerMove}
            onMouseLeave={resetTilt}
            animate={{
              rotateX: tilt.x,
              rotateY: tilt.y,
              y: [0, -10, 0],
            }}
            transition={{
              rotateX: { type: "spring", stiffness: 160, damping: 16 },
              rotateY: { type: "spring", stiffness: 160, damping: 16 },
              y: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
            }}
            style={{ transformStyle: "preserve-3d", perspective: "1600px" }}
            className="relative flex h-[320px] w-[320px] items-center justify-center sm:h-[420px] sm:w-[420px]"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
              className="absolute inset-1 rounded-full border border-primary/30"
              style={{ boxShadow: "0 0 30px rgba(0,214,255,0.18), inset 0 0 30px rgba(0,214,255,0.08)" }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute inset-5 rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, rgba(0, 224, 255, 0.9), rgba(125, 88, 255, 0.7), rgba(0, 224, 255, 0.15), rgba(0, 224, 255, 0.9))",
                mask: "radial-gradient(farthest-side, transparent calc(100% - 4px), white calc(100% - 4px))",
                WebkitMask:
                  "radial-gradient(farthest-side, transparent calc(100% - 4px), white calc(100% - 4px))",
                filter: "drop-shadow(0 0 18px rgba(0,224,255,0.3))",
              }}
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 11, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full"
            >
              <div className="absolute left-1/2 top-2 h-4 w-4 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_18px_4px_rgba(0,214,255,0.9)]" />
              <div className="absolute bottom-5 right-10 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_16px_4px_rgba(34,211,238,0.9)]" />
            </motion.div>

            <div className="absolute inset-[54px] rounded-full hero-avatar-core shadow-[0_0_70px_rgba(0,110,255,0.2)]" />
            <div className="absolute inset-[42px] rounded-full border border-primary/20 shadow-[0_0_25px_rgba(0,214,255,0.15)]" />
            <div className="absolute inset-[72px] rounded-full border-2 border-[#1f8cff] shadow-[0_0_24px_rgba(31,140,255,0.8)]" />

            <div className="absolute inset-[56px] rounded-full bg-primary/10 blur-2xl" />

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative z-10 h-[250px] w-[250px] overflow-hidden rounded-full sm:h-[310px] sm:w-[310px]"
              style={{
                transform: "translateZ(48px)",
                filter: "drop-shadow(0 24px 30px rgba(0,0,0,0.45))",
              }}
            >
              <img
                src={isLightTheme ? profileLightImg : profileImg}
                alt="Ravindra Namdev - Tech Student"
                width={512}
                height={512}
                className="h-full w-full object-cover object-top"
              />
            </motion.div>

          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 z-10"
        >
          <p className="text-lg text-muted-foreground">Hello, I'm</p>
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
