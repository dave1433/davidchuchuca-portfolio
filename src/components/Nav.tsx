"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { profile } from "@/data/portfolio";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-accent origin-left z-50"
        style={{ scaleX }}
      />
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
          scrolled
            ? "backdrop-blur-md bg-background/70 border-b border-border"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="mx-auto max-w-5xl px-6 h-16 flex items-center justify-between">
          <a
            href="#top"
            className="font-mono text-sm font-semibold tracking-tight hover:text-accent transition-colors"
          >
            {profile.name.split(" ")[0]}
            <span className="text-accent">.</span>
            {profile.name.split(" ").slice(1).join("")}
          </a>
          <ul className="hidden sm:flex items-center gap-7 text-sm text-muted">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative py-1 hover:text-foreground transition-colors group"
                >
                  {link.label}
                  <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium rounded-full border border-border px-4 py-1.5 hover:border-accent hover:text-accent transition-colors"
          >
            Resume
          </a>
        </nav>
      </header>
    </>
  );
}
