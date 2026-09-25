"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TerminalSquare, X } from "lucide-react";
import { profile, projects, skills } from "@/data/portfolio";

type Line = { type: "input" | "output"; text: string };

const COMMANDS = ["help", "about", "skills", "projects", "contact", "whoami", "sudo", "clear"];

function run(raw: string): string[] {
  const cmd = raw.trim().toLowerCase();

  switch (cmd) {
    case "help":
      return [
        "available commands:",
        ...COMMANDS.map((c) => `  ${c}`),
      ];
    case "about":
      return [profile.bio];
    case "whoami":
      return [`${profile.name} — ${profile.role}, ${profile.location}`];
    case "skills":
      return skills.map((s) => `${s.category}: ${s.skills.join(", ")}`);
    case "projects":
      return projects.map((p) => `• ${p.title} — ${p.tags.join(", ")}`);
    case "contact":
      return [`email: ${profile.email}`, `github: ${profile.socials.github}`, `linkedin: ${profile.socials.linkedin}`];
    case "sudo":
      return ["nice try. permission denied."];
    case "cat":
      return [
        " /\\_/\\",
        "( o.o )  meow.",
        " > ^ <",
      ];
    case "clear":
      return ["__CLEAR__"];
    case "":
      return [];
    default:
      return [`command not found: ${cmd} — try "help"`];
  }
}

const HACK_SEQUENCE = [
  "initiating breach sequence...",
  "scanning ports 22, 80, 443, 8080...",
  "bypassing firewall... [########..] 82%",
  "cracking password hash... 7a3f9c2e",
  "access: ",
  "",
  "...just kidding. nice try though.",
  "(no systems were harmed in the making of this joke)",
];

export default function Terminal() {
  const [open, setOpen] = useState(false);
  const [lines, setLines] = useState<Line[]>([
    { type: "output", text: `Welcome. Type "help" to see what this does.` },
  ]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open && !busy) inputRef.current?.focus();
  }, [open, busy]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [lines]);

  const MAX_LINES = 300;
  function appendLines(next: Line[]) {
    setLines((prev) => [...prev, ...next].slice(-MAX_LINES));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (busy) return;
    const cmd = input.trim().toLowerCase();
    setInput("");

    if (cmd === "hack") {
      appendLines([{ type: "input", text: cmd }]);
      setBusy(true);
      for (const text of HACK_SEQUENCE) {
        await new Promise((resolve) => setTimeout(resolve, 380));
        appendLines([{ type: "output", text }]);
      }
      setBusy(false);
      return;
    }

    const result = run(cmd);
    if (result[0] === "__CLEAR__") {
      setLines([]);
    } else {
      appendLines([
        { type: "input", text: cmd },
        ...result.map((text) => ({ type: "output" as const, text })),
      ]);
    }
  }

  return (
    <>
      <motion.button
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        aria-label="Toggle terminal"
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center shadow-lg"
      >
        {open ? <X size={20} /> : <TerminalSquare size={20} />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[min(92vw,380px)] rounded-xl border border-border bg-black/95 text-green-400 font-mono text-xs shadow-2xl overflow-hidden"
          >
            <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/10 bg-white/5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              <span className="ml-2 text-white/50 text-[11px]">guest@{profile.name.split(" ")[0].toLowerCase()}-portfolio</span>
            </div>
            <div ref={scrollRef} className="h-56 overflow-y-auto px-3 py-3 space-y-1">
              {lines.map((line, i) => (
                <div
                  key={i}
                  className={`whitespace-pre ${line.type === "input" ? "text-white" : "text-green-400"}`}
                >
                  {line.type === "input" ? `$ ${line.text}` : line.text}
                </div>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="flex items-center gap-1.5 px-3 py-2 border-t border-white/10">
              <span className="text-white/50">$</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                autoComplete="off"
                spellCheck={false}
                maxLength={200}
                disabled={busy}
                className="flex-1 bg-transparent outline-none text-white placeholder:text-white/30 disabled:opacity-40"
                placeholder={busy ? "" : "type help"}
              />
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
