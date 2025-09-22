export interface Education {
  institution: string;
  degree: string;
  time: string;
}

export interface Experience {
  organization: string;
  role: string;
  time: string;
  bullets: string[];
  url?: string;
  category: "research" | "industry" | "teaching" | "service";
}

export interface Publication {
  citation: string;
  link?: string;
}

export interface SkillGroup {
  heading: string;
  items: string[];
}

export interface Award {
  name: string;
  issuer?: string;
  time?: string;
}

export interface ResumeData {
  name: string;
  preferredName?: string;
  title: string;
  about: string;
  email: string;
  phone: string;
  location: string;
  twitter?: string;
  links: { name: string; url: string }[];
  education: Education[];
  experience: Experience[];
  publications?: Publication[];
}

export const resumeData: ResumeData = {
  name: "Min Chun Fu",
  preferredName: "Daniel",
  title: "System Design Engineer",
  about:
    "Designs systems that help people complete complex, real‑time work with less friction. Recent focus on AI agent user interfaces.",
  email: "daniel.fu90@gmail.com",
  phone: "+1 929 513 2767",
  location: "HK/SF",
  twitter: "@d2ac__",
  links: [
    { name: "GitHub", url: "https://github.com/itsnotaka" },
    { name: "LinkedIn", url: "https://linkedin.com/in/nameisdaniel" },
  ],
  education: [
    {
      institution: "Penn State University",
      degree: "B.S. Business Management",
      time: "Jul 2021 – May 2025",
    },
    {
      institution: "The Chinese University of Hong Kong",
      degree: "Exchange Program",
      time: "Jan 2024 – Jun 2024",
    },
  ],
  experience: [
    {
      organization: "Firetiger",
      role: "System Design Engineer (first design‑engineering hire)",
      time: "May 2025 – Present",
      category: "industry",
      url: "https://firetiger.com/",
      bullets: [
        "Designed the agent‑investigation UI and chat flow, defining information architecture, interaction patterns, and design system components.",
        "Built SLO monitoring and observer dashboard views over the data lake (logs, traces, metrics) to support investigations.",
        "Prototyped multiple user interface components and flows, provided visual examples to validate product decisions.",
      ],
    },
    {
      organization: "PartyKit (acquired by Cloudflare)",
      role: "Software Engineer (Community)",
      time: "Aug 2023 – Nov 2024",
      category: "industry",
      url: "https://www.partykit.io/",
      bullets: [
        "Prototyped and built multiple multiplayer demos with different interaction patterns that community could adopt.",
        "Researched and wrote documentation for project fixtures that are now the de-facto standard for multiplayer usage.",
      ],
    },
    {
      organization: "Flowapp",
      role: "Founder & Software Engineer",
      time: "Jan 2021 – Mar 2025",
      category: "industry",
      url: "https://www.flowapp.so/",
      bullets: [
        "Created an AI writing assistant from beta to production with ownership across product, engineering, and support.",
        "Led user interviews and feedback synthesis to prioritize workflows and ship focused iterations.",
      ],
    },
    {
      organization: "Aiplux",
      role: "Lead Frontend Engineer",
      time: "Aug 2024 – Nov 2024",
      category: "industry",
      url: "https://aiplux.com/",
      bullets: [
        "Consolidated a legacy codebase into a monorepo, aligning teams and compressing the delivery timeline (from 12 months to 2 months).",
      ],
    },
  ],
};
