"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="font-mono text-sm text-accent mb-2">05 · contact</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let&apos;s talk</h2>
        <p className="text-muted max-w-md mx-auto mb-10">
          Looking for candidates for an IT internship starting August 2026? Or just want to say
          hi — my inbox is open.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-medium hover:opacity-85 transition-opacity mb-10"
        >
          <Mail size={16} />
          {profile.email}
        </a>

        <div className="flex items-center justify-center gap-4 text-sm text-muted">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-accent transition-colors"
          >
            <GithubIcon size={16} /> GitHub
          </a>
          <span className="text-border">·</span>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-accent transition-colors"
          >
            <LinkedinIcon size={16} /> LinkedIn
          </a>
          <span className="text-border">·</span>
          <a
            href={`tel:${profile.phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-1.5 hover:text-accent transition-colors"
          >
            <Phone size={16} /> {profile.phone}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
