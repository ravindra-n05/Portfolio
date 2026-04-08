import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BadgeCheck, Code2, Figma, Github, Instagram, Linkedin, Mail } from "lucide-react";
import profileImg from "@/assets/profile.png";

const roles = ["Frontend Developer", "UI/UX Designer", "React Developer", "Tech Enthusiast"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(15,105,122,0.18),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(95,48,255,0.12),transparent_25%),linear-gradient(180deg,rgba(5,12,24,0.96),rgba(6,11,20,1))]" />
      <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(0,209,255,0.08)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />
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

            <div className="absolute inset-[54px] rounded-full bg-[radial-gradient(circle_at_50%_35%,rgba(11,40,98,0.82),rgba(6,12,30,0.97)_70%)] shadow-[0_0_70px_rgba(0,110,255,0.2)]" />
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
                src={profileImg}
                alt="Ravindra Namdev - Tech Student"
                width={512}
                height={512}
                className="h-full w-full object-cover object-top"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
              transition={{ delay: 0.8, duration: 0.6, y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
              className="absolute right-0 top-10 z-20 flex items-center gap-2 rounded-2xl border border-primary/30 bg-[rgba(7,16,32,0.82)] px-4 py-3 text-sm font-medium text-primary shadow-[0_0_22px_rgba(0,214,255,0.15)] backdrop-blur-xl sm:right-2"
              style={{ transform: "translateZ(80px)" }}
            >
              <Code2 size={16} className="text-primary" />
              <span>React</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0, y: [0, 10, 0] }}
              transition={{ delay: 1, duration: 0.6, y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
              className="absolute bottom-12 left-0 z-20 flex items-center gap-2 rounded-2xl border border-[#5f60ff]/35 bg-[rgba(11,17,34,0.84)] px-4 py-3 text-sm font-medium text-[#6e7cff] shadow-[0_0_22px_rgba(95,96,255,0.12)] backdrop-blur-xl sm:left-2"
              style={{ transform: "translateZ(72px)" }}
            >
              <Figma size={16} className="text-cyan-300" />
              <span>UI/UX</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0, y: [0, 8, 0] }}
              transition={{ delay: 1.1, duration: 0.6, y: { duration: 4.8, repeat: Infinity, ease: "easeInOut" } }}
              className="absolute bottom-14 right-3 z-20 flex items-center gap-2 rounded-full border border-emerald-400/30 bg-[rgba(7,22,27,0.82)] px-4 py-2.5 text-sm font-medium text-slate-100 shadow-[0_0_22px_rgba(16,185,129,0.14)] backdrop-blur-xl"
              style={{ transform: "translateZ(76px)" }}
            >
              <BadgeCheck size={16} className="text-emerald-300" />
              <span>Available</span>
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
