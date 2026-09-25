"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-mono text-sm text-accent mb-2">02 · skills</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">What I work with</h2>
      </motion.div>

      <div className="grid sm:grid-cols-3 gap-6">
        {skills.map((group, gi) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: gi * 0.1 }}
            className="rounded-2xl border border-border p-6 bg-card"
          >
            <h3 className="text-sm font-mono text-muted mb-4">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, si) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.3, delay: gi * 0.1 + si * 0.05 }}
                  whileHover={{ y: -3, scale: 1.05 }}
                  className="cursor-default rounded-full bg-accent-soft text-accent text-sm font-medium px-3.5 py-1.5 border border-accent/20"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
