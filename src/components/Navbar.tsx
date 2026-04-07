import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Download, Sun, Moon } from "lucide-react";

const links = ["Home", "About", "Experience", "Skills", "Projects", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return !document.documentElement.classList.contains("light");
    }
    return true;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("light", !dark);
  }, [dark]);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="#home" className="font-display text-xl font-bold gradient-text">
          Portfolio
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8">
          {links.map((link, i) => (
            <motion.li
              key={link}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
            >
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {link}
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setDark(!dark)}
            className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-border transition-all"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </motion.button>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-2 rounded-lg border border-primary/40 text-primary font-display text-sm font-semibold hover:glow-border transition-shadow"
          >
            <Download size={16} />
            Resume
          </a>
          <a
            href="#contact"
            className="inline-flex px-5 py-2 rounded-lg bg-primary text-primary-foreground font-display text-sm font-semibold hover:shadow-[0_0_20px_hsl(190_100%_50%/0.4)] transition-shadow"
          >
            Hire Me
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setDark(!dark)}
            className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary transition-all"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </motion.button>
          <button onClick={() => setOpen(!open)} className="text-foreground">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile */}
      {open && (
        <motion.ul
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden glass px-6 pb-4 space-y-3"
        >
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block text-sm text-muted-foreground hover:text-primary"
              >
                {link}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;
