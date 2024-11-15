import { CloudflareLogo, GitHubIcon, LinkedInIcon, XIcon } from "~/components/icons";
import { YCombinatorLogo, aipluxLogo, flowLogo, liveblockLogo } from "~/images/logos";

// Add type for imported images
type StaticImageData = {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
};

export const RESUME_DATA = {
  name: "Min Chun Fu",
  initials: "MCF",
  location: "United States / Taiwan / Hong Kong",
  locationLink: "https://www.google.com/maps/place/State+College+PA",
  about: "Business Management student and self-taught Full Stack Engineer focused on building web applications.",
  summary:
    "I lead web application development using cutting-edge technologies, specializing in project and team management from concept to launch. With an entrepreneurial spirit, I build impactful personal projects while seeking opportunities to grow.",
  personalWebsiteUrl: "https://nameisdaniel.com",
  contact: {
    email: "nameisdaniel@flowapp.so",
    tel: "+19295132767",
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
      school: "Chinese University of Hong Kong",
      degree: "Exchange Student",
      start: "2023",
      end: "2024",
    },
    {
      school: "Pennsylvania State University",
      degree: "Bachelor's Degree in Business Management (Minor in International Business)",
      start: "2021",
      end: "2025",
    },
  ],
  work: [
    {
      company: "Partykit (Acq. Cloudflare)",
      link: "https://www.partykit.io/",
      badges: ["Remote", "Part time"],
      title: "Developer Advocate",
      logo: CloudflareLogo,
      start: "2023",
      end: null,
      description: `As the earliest team members at Partykit, I work directly with the founder as a key strategic advisor and core contributor since the company's inception. I lead critical technical initiatives, implement core platform features, and developed Flow - the company's flagship reference application. My contributions have been instrumental in shaping the product's technical architecture and driving its early success.`,
    },
    {
      company: "Y Combinator",
      link: "https://www.ycombinator.com/",
      badges: ["Part time"],
      title: "Frontend Engineer",
      logo: YCombinatorLogo,
      start: "2024",
      end: "2024",
      description:
        "Collaborated with a YC-backed startup to create a demo project showcasing their technology stack and product capabilities.",
    },
    {
      company: "Aiplux",
      link: "https://aiplux.com/",
      badges: ["Remote", "Full time internship"],
      title: "Manager & Software Engineer",
      logo: aipluxLogo as StaticImageData,
      start: "2024",
      end: "2024",
      description:
        "Inherited a messy Vue.js codebase from another team and led a complete transformation, converting it from a single repository into a well-structured monorepo architecture. Successfully rewrote and delivered the application in 2 months despite the original 12-month timeline. Leveraged Vue, Nuxt.js, TypeScript, Node.js and Turborepo to implement a maintainable and scalable system.",
    },
    {
      company: "Liveblocks",
      link: "https://liveblocks.io",
      badges: ["Full time", "IC3 Developer", "Offer Received"],
      title: "Full Stack Engineer",
      logo: liveblockLogo as StaticImageData,
      start: "2024",
      end: "2024",
      description:
        "Received an offer from liveblocks after 2 rounds of interviews. Unfortunately, I turned it down to focus on my studies.",
    },
  ],
  projects: [
    {
      title: "Flow",
      techStack: ["Typescript", "React", "Next.js", "TailwindCSS", "Partykit"],
      description:
        "A modern collaborative workspace with real-time editing, AI-powered search, and smart organization tools for teams.",
      link: "https://flowapp.so",
      logo: flowLogo,
    },
  ],
  skills: [
    "Github",
    "Typescript",
    "React",
    "Websockets",
    "Real-time",
    "Slack",
    "Vercel",
    "Google Suite",
    "TailwindCSS",
    "Next.js",
    "Figma",
    "AWS",
  ],
} as const;
