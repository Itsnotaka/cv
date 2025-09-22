export interface Education {
  institution: string;
  degree: string;
  time: string;
  gpa?: string;
  coursework?: string[];
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
  skills?: SkillGroup[];
  awards?: Award[];
  // Optional: keep objective for internal use
  objective?: string;
}

export const resumeData: ResumeData = {
  name: "Min Chun Fu",
  preferredName: "Daniel",
  title: "System Design Engineer",
  about:
    "Designs systems that help people complete complex, real‑time work with less friction. Recent focus on agent‑investigation workflows—observing hesitation points, restructuring flows, and validating improvements with studies and instrumentation.",
  email: "daniel.fu90@gmail.com",
  phone: "+1 929 513 2767",
  location: "HK/SF",
  twitter: "@d2ac__",
  links: [
    { name: "GitHub", url: "https://github.com/itsnotaka" },
    { name: "LinkedIn", url: "https://linkedin.com/in/nameisdaniel" }
  ],
  objective:
    "I design systems that help people complete complex, real‑time work with less friction. Recently I’ve focused on agent‑investigation workflows",
    {
      institution: "Penn State University",
      degree: "B.S. Business Management",
      time: "Jul 2021 – May 2025",
      coursework: [
        "Statistics",
        "Data Analysis",
        "Project Management",
        "Human Resources",
      ],
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
      category: "research",
      url: "https://firetiger.com/",
      bullets: [
        "Designed the agent‑investigation UI and chat flow from scratch, defining information architecture, interaction patterns, and system components.",
        "Built monitoring views over the data lake (logs, traces, metrics) to support investigations and day‑to‑day operations.",
        "Created SLO monitoring and observer dashboards to surface regressions proactively and guide fixes.",
        "Prototyped an embedded SQL editor and analysis tools to enable self‑serve debugging and data exploration.",
      ],
    },
    {
      organization: "PartyKit (acquired by Cloudflare)",
      role: "Software Engineer (Community)",
      time: "Aug 2023 – Nov 2024",
      category: "industry",
      url: "https://www.partykit.io/",
      bullets: [
        "Built a multiplayer demo and authored practical guides that improved developer onboarding clarity.",
        "Converted recurring integration questions into documentation and examples adopted by hundreds of developers.",
      ],
    },
    {
      organization: "Flowapp",
      role: "Founder & Software Engineer",
      time: "Jan 2021 – Mar 2025",
      category: "industry",
      url: "https://www.flowapp.so/",
      bullets: [
        "Delivered a web application from beta to production with end‑to‑end ownership across product, engineering, and support.",
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
        "Consolidated a legacy codebase into a monorepo, aligning teams and compressing the delivery timeline by several months.",
      ],
    },
  ],
};
