"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { projects, type Project } from "@/data/portfolio";

export default function Projects() {
  const allTags = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return ["All", ...Array.from(set)];
  }, []);

  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.tags.includes(active));

  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-mono text-sm text-accent mb-2">03 · projects</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Things I&apos;ve built</h2>
      </motion.div>

      <div className="flex flex-wrap gap-2 mb-10">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActive(tag)}
            className={`text-sm px-3.5 py-1.5 rounded-full border transition-colors ${
              active === tag
                ? "bg-foreground text-background border-foreground"
                : "border-border text-muted hover:border-accent hover:text-accent"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <motion.div layout className="grid sm:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -6, y: px * 6 });
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transformStyle: "preserve-3d",
      }}
      className={`group relative rounded-2xl border p-6 bg-card transition-shadow hover:shadow-xl ${
        project.featured ? "border-accent/30" : "border-border"
      }`}
    >
      {project.featured && (
        <span className="absolute -top-2.5 right-5 text-[10px] font-mono uppercase tracking-wider bg-accent text-white px-2 py-0.5 rounded-full">
          Featured
        </span>
      )}
      <p className="text-xs font-mono text-muted mb-2">{project.meta}</p>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
        {project.title}
      </h3>
      <p className="text-sm text-muted leading-relaxed mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 rounded-full bg-accent-soft text-accent border border-accent/20"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-4 text-sm font-medium">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-accent transition-colors"
          >
            <GithubIcon size={15} /> Code
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-accent transition-colors"
          >
            <ExternalLink size={15} /> Live
          </a>
        )}
      </div>
    </motion.div>
  );
}
