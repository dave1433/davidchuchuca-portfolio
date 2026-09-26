"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Languages } from "lucide-react";
import { profile, languages } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-28">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
      >
        <p className="font-mono text-sm text-accent mb-2">01 · about</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">Who I am</h2>
      </motion.div>

      <div className="grid sm:grid-cols-[1.4fr_1fr] gap-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-muted leading-relaxed"
        >
          <p>{profile.bio}</p>
          <p className="mt-4">
            Outside of coursework, I&apos;ve worked service jobs across three countries — bartending
            at Roskilde Festival, working the floor at a Copenhagen pub, and crewing at Dublin
            Airport. Fast-paced, high-pressure, team-first environments — which is honestly good
            training for shipping software on a deadline too.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <InfoRow icon={<MapPin size={16} />} label="Location" value={profile.location} />
          <InfoRow
            icon={<GraduationCap size={16} />}
            label="Studying"
            value="AP Computer Science, SEA"
          />
          <InfoRow
            icon={<Languages size={16} />}
            label="Languages"
            value={languages.map((l) => l.name).join(" · ")}
          />
        </motion.div>
      </div>
    </section>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-border p-3.5">
      <span className="text-accent mt-0.5">{icon}</span>
      <div>
        <p className="text-xs text-muted">{label}</p>
        <p className="text-sm font-medium">{value}</p>
      </div>
    </div>
  );
}
