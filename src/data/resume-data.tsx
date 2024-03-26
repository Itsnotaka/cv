import {
  FlowLogo,
  BuildspaceLogo,
  PartykitLogo,
  CognosysAiLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Min Chun Fu",
  initials: "MCF",
  location: "HK / TW / USA",
  locationLink: "https://www.google.com/maps/place/Hong_Kong",
  about:
    "Business Management student, also a self-taught Full Stack Engineer. Focused on building web applications with attention to details.",
  summary:
    "My knowledge spans various areas of business, including economics, finance, marketing, and management.",
  avatarUrl: "",
  personalWebsiteUrl: "https://nameisdaniel.com",
  contact: {
    email: "nameisdaniel@flowapp.so",
    tel: "+85296104365",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/itsnotaka",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nameisdaniel/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/d2ac__",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Pennsylvania State University",
      degree: "Bachelor's Degree in Business Management & Economics",
      start: "2021",
      end: "2025",
    },
    {
      school: "Chinese University of Hong Kong",
      degree: "Bachelor's Degree in Business Management & Economics (exchange)",
      start: "2023",
      end: "2024",
    },
  ],
  work: [
    {
      company: "PartyKit",
      link: "https://partykit.io",
      badges: ["Remote", "Dev advocate"],
      title: "Dev Advocate",
      logo: PartykitLogo,
      start: "2022",
      end: "Current",
      description:
        "PartyKit is a platform for building realtime apps. I'm helping them with their documentation and community building. My project – Flow, is featured on their website.",
    },
    {
      company: "Buildspace",
      link: "https://buildspace.so",
      badges: ["Participant", "Intern"],
      title: "N&W S4 Builder",
      logo: BuildspaceLogo,
      start: "2023",
      end: "2023",
      description: `Selected for a 6-week program (funded by Y Combinator, a16z) to build a revolutionary product in a tech
        community with experts from around the world ending with a 3-day demo weekend in San Francisco`,
    },
    {
      company: "Cognosys AI",
      link: "https://www.cognosys.ai/",
      badges: ["Interview"],
      title: "Interviewee",
      logo: CognosysAiLogo,
      start: "2024",
      end: "2024",
      description:
        "An alumni of Cognosys AI, Vercel and Next.js. I have develope a realtime AI demo for them as a contractor.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js/Remix",
    "Node.js",
    "tRPC/GraphQL",
    "Tailwind CSS",
    "Docker",
    "SQL",
    "Electron",
  ],
  projects: [
    {
      title: "Flowapp",
      techStack: [
        "Main Project",
        "TypeScript",
        "Tailwindcss",
        "Next.js (Web)",
        "Expo (Mobile)",
        "Electron (Desktop)",
        "tRPC",
        "Clerk.js",
        "MySQL (PlanetScale)",
        "Websocket (partyKit)",
      ],
      description:
        "A realtime CMS for building web applications/Note taking/Project management",
      logo: FlowLogo,
      link: {
        label: "flowapp.so",
        href: "https://flowapp.so/",
      },
    },
  ],
} as const;
