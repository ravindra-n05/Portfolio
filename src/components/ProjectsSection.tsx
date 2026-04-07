import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import aiChatImg from "@/assets/project-Shaadi-Jeevan.jpg";
import ecommerceImg from "@/assets/project-ecommerce.jpg";
import portfolioImg from "@/assets/project-portfolio.jpg";
import taskManagerImg from "@/assets/project-taskmanager.jpg";

const projects = [
  {
    title: "Shaadi Jeevan Website",
    description:
      "A modern matrimonial platform built using Tailwind CSS, JavaScript, and PHP, focused on delivering a seamless user experience with elegant design and optimized performance.",
    image: aiChatImg,
    stack: ["Php", "JavaScript", "Tailwind"],
    liveHref: "https://shaadijeevan.com/",
    codeHref: "https://github.com/ravindra-n05/shaadi_jeevan",
  },
  {
    title: "Modern Ecommerce UI",
    description:
      "A responsive storefront with category discovery, product storytelling, and conversion-friendly layouts.",
    image: ecommerceImg,
    stack: ["React", "Bootstrap", "REST API"],
  },
  {
    title: "Portfolio Platform",
    description:
      "A personal portfolio designed to showcase projects, motion design, and a strong frontend visual identity.",
    image: portfolioImg,
    stack: ["Vite", "React", "Tailwind", "TypeScript"],
  },
  {
    title: "Task Manager Dashboard",
    description:
      "A productivity dashboard with structured workflows, clean visual hierarchy, and scalable component patterns.",
    image: taskManagerImg,
    stack: ["React", "Laravel", "MySQL"],
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 relative overflow-hidden">
    <div className="absolute inset-x-0 top-10 h-72 bg-primary/5 blur-[110px]" />

    <div className="container relative z-10 mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <p className="mb-2 text-sm font-display uppercase tracking-widest text-primary">
          Featured Work
        </p>
        <h2 className="text-3xl font-display font-bold text-foreground md:text-4xl">
          Projects With <span className="gradient-text">Purpose</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          A selection of builds that blend thoughtful UI, practical engineering, and a clear focus on user experience.
        </p>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: index * 0.12 }}
            className="group overflow-hidden rounded-3xl border border-border/60 bg-card/70 shadow-[0_24px_60px_hsl(var(--background)/0.35)] backdrop-blur"
          >
            <div className="h-72 overflow-hidden bg-secondary/40 md:h-80">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="space-y-5 p-6">
              <div className="space-y-3">
                <h3 className="text-2xl font-display font-bold text-foreground transition-colors group-hover:text-primary">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {project.liveHref ? (
                  <a
                    href={project.liveHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
                  >
                    Live Preview
                    <ArrowUpRight size={16} />
                  </a>
                ) : null}
                {project.codeHref ? (
                  <a
                    href={project.codeHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border/60 px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    Source
                    <Github size={16} />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-border/60 px-4 py-2 text-sm font-semibold text-muted-foreground">
                    Private Build
                  </span>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
