"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-mono text-sm text-accent mb-2">04 · experience</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">Education & background</h2>
      </motion.div>

      <div className="relative border-l border-border ml-3">
        {experience.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="relative pl-8 pb-10 last:pb-0"
          >
            <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-background border-2 border-accent flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            </span>
            <div className="flex items-center gap-2 text-accent mb-1">
              {item.type === "education" ? (
                <GraduationCap size={16} />
              ) : (
                <Briefcase size={16} />
              )}
              <span className="text-xs font-mono uppercase tracking-wider">
                {item.type === "education" ? "Education" : "Work"}
              </span>
            </div>
            <h3 className="text-lg font-semibold">{item.role}</h3>
            <p className="text-sm text-muted mb-1">
              {item.org} · {item.period}
            </p>
            <p className="text-sm text-muted leading-relaxed max-w-xl">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
