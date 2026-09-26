// ============================================================================
// PORTFOLIO DATA — sourced from David Chuchuca's CV (Sep 2026)
// ----------------------------------------------------------------------------
// A few fields are marked TODO where the CV didn't have enough detail
// (e.g. individual repo links, a longer personal bio). Fill those in
// whenever you have them handy — everything else is pulled straight
// from the CV.
// ============================================================================

export const profile = {
  name: "David Chuchuca",
  role: "Software Development Intern & Computer Science Student",
  roles: [
    "Software Development Intern @ Mass IT",
    "Computer Science Student",
    ".NET & C# Developer",
    "React Developer",
  ],
  location: "Esbjerg, Denmark",
  bio:
    "Computer Science student at Syddansk Erhvervsakademi, currently interning as a Software Development Intern at Mass IT, a small startup. Hands-on experience with .NET, C#, and React. Interested in backend development, CI/CD, and software architecture.",
  email: "rauldavidch_ord@outlook.es",
  phone: "+45 31 82 80 73",
  resumeUrl: "/DavidCV2026.pdf",
  socials: {
    github: "https://github.com/dave1433",
    linkedin: "https://linkedin.com/in/david-chuchuca-5b7092196",
    twitter: "",
  },
};

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  meta?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "socialware",
    title: "Socialware — Urban Analysis Tool",
    description:
      "Built at the AEC Hackathon in Copenhagen: an AI-assisted geospatial analysis tool using real-world datasets. Supported backend setup with .NET (C#) and Docker, helped run and test frontend components in Node.js, and pushed for cleaner separation of concerns and better use of React hooks. Presented the final solution to close out the hackathon.",
    tags: [".NET", "C#", "Docker", "React", "Node.js"],
    meta: "AEC Hackathon · Copenhagen, Denmark · March 2026",
    // no repo link — team repo is owned by a teammate and kept private
    featured: true,
  },
  {
    id: "dead-pigeons",
    title: "Dead Pigeons",
    description:
      "A full-stack web app built as a 3rd semester project. Built the REST API with ASP.NET Core and C#, designed and implemented the endpoints powering the app's features, and worked GitFlow properly — feature branches, pull requests, rebasing. Contributed across debugging, testing, and system integration.",
    tags: ["ASP.NET Core", "C#", "REST API", "GitFlow"],
    meta: "3rd Semester Project · SEA · 2025",
    githubUrl: "https://github.com/dave1433/DeadPigeons",
    featured: true,
  },
  {
    id: "merman-in-danger",
    title: "Merman in Danger",
    description:
      "A text-based adventure game refactored and extended from the World of Zuul architecture. Split game logic into dedicated classes (Game, Parser, Command, Room, Item), applied OOP principles like encapsulation and modular responsibilities, and built out command parsing and game state management for player interaction.",
    tags: ["Java", "OOP", "Academic Project"],
    meta: "Academic Project · 2024",
    githubUrl: "https://github.com/dave1433/Merman-In-DangerOG",
    featured: false,
  },
];

export type SkillCategory = {
  category: string;
  skills: string[];
};

export const skills: SkillCategory[] = [
  { category: "Languages", skills: ["C#", "Java", "JavaScript", "TypeScript"] },
  { category: "Frameworks", skills: [".NET", "ASP.NET Core", "React"] },
  { category: "Tools", skills: ["Git (GitFlow, rebasing)", "Docker", "CI/CD"] },
];

export type ExperienceItem = {
  id: string;
  role: string;
  org: string;
  period: string;
  description: string;
  type: "work" | "education";
};

export const experience: ExperienceItem[] = [
  {
    id: "work-mass-it",
    role: "Software Development Intern",
    org: "Mass IT",
    period: "Aug 2026 — Present",
    description:
      "Interning at a small startup, getting hands-on experience across the stack in a fast-moving, small-team environment.",
    type: "work",
  },
  {
    id: "edu-sea",
    role: "AP Computer Science Programme",
    org: "Syddansk Erhvervsakademi (SEA), Esbjerg, Denmark",
    period: "2024 — 2027",
    description:
      "Coursework and project work spanning .NET/C#, React, REST API design, and software architecture — including the Dead Pigeons full-stack project and the Socialware hackathon build.",
    type: "education",
  },
  {
    id: "edu-bachillerato",
    role: "Sciences Baccalaureate",
    org: "Colegio de Bachillerato Ing. José Corsino Cárdenas, Pasaje, Ecuador",
    period: "2015 — 2021",
    description: "Secondary education, sciences track.",
    type: "education",
  },
];

export const languages = [
  { name: "Spanish", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "Danish", level: "Beginner (currently studying)" },
];
