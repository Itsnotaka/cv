export interface Experience {
  company: string;
  role: string;
  time: string;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  time: string;
}

export interface Link {
  name: string;
  url: string;
}

export type SkillProficiency =
  | 'beginner'
  | 'intermediate'
  | 'advanced'
  | 'expert';
export type SkillCategory =
  | 'frontend'
  | 'backend'
  | 'fullstack'
  | 'architecture'
  | 'integration';

export interface Skill {
  name: string;
  proficiency: SkillProficiency;
  category: SkillCategory;
  stackPosition: number; // 0 (pure frontend) to 100 (pure backend)
}

export interface ResumeData {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  twitter?: string;
  summary: string;
  links: Link[];
  experience: Experience[];
  education: Education[];
  skills: Skill[];
}

export const resumeData: ResumeData = {
  name: 'Min Chun Fu',
  title: 'System Design Engineer',
  location: 'SF/NYC',
  email: 'mjfu@flowapp.so',
  phone: '+1 929 513 2767',
  twitter: '@d2ac__',
  summary: `I'm the first Design Engineer at Firetiger where I translate agent investigations into simple user experiences. Before that, I was the community engineer at PartyKit.`,
  links: [
    {
      name: 'GitHub',
      url: 'https://github.com/itsnotaka',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/nameisdaniel',
    },
  ],
  experience: [
    {
      company: 'Firetiger',
      role: 'System Design Engineer',
      time: 'May 2025 — Present',
      description: 'Designing & building the UI for the agent investigations.',
    },
    {
      company: 'Flowapp',
      role: 'Software Engineer',
      time: 'January 2019 — Present',
      description: `Design, build, and launch Flow's web app out of Beta. Handled marketing, sales, customer support, and everything in between. Mentioned in @supermemoryai and @partykit`,
    },
    {
      company: 'Aiplux',
      role: 'First Lead Frontend Developer Intern',
      time: 'August 2024 — November 2024',
      description:
        'Built a web app for a startup that helps users track their daily habits and goals.',
    },
    {
      company: 'Noya Software (YC W24)',
      role: 'Software Engineer',
      time: 'October 2024 — November 2024',
      description:
        'Collaborated with the CEO to create a demo project showcasing their technology stack and product capabilities.',
    },
    {
      company: 'PartyKit (acquired by Cloudflare)',
      role: 'Software Engineer',
      time: 'August 2023 — November 2024',
      description:
        'Worked on a cloud platform that transforms Cloudflare durable objects into a host for real-time applications.',
    },
  ],
  education: [
    {
      institution: 'Penn State University',
      degree: 'Bachelor of Science - BS, Business/Computer Science',
      time: 'July 2021 — May 2025',
    },
    {
      institution: 'The Chinese University of Hong Kong',
      degree: 'Exchange Program',
      time: 'January 2024 — June 2024',
    },
  ],
  skills: [
    {
      name: 'TypeScript',
      proficiency: 'expert',
      category: 'fullstack',
      stackPosition: 50,
    },
    {
      name: 'JavaScript',
      proficiency: 'expert',
      category: 'fullstack',
      stackPosition: 50,
    },
    {
      name: 'React',
      proficiency: 'expert',
      category: 'frontend',
      stackPosition: 20,
    },
    {
      name: 'Vue.js',
      proficiency: 'advanced',
      category: 'frontend',
      stackPosition: 25,
    },
    {
      name: 'Next.js',
      proficiency: 'expert',
      category: 'fullstack',
      stackPosition: 40,
    },
    {
      name: 'Node.js',
      proficiency: 'advanced',
      category: 'backend',
      stackPosition: 80,
    },
    {
      name: 'Monorepo Architecture',
      proficiency: 'advanced',
      category: 'architecture',
      stackPosition: 60,
    },
    {
      name: 'Real-time Applications',
      proficiency: 'advanced',
      category: 'fullstack',
      stackPosition: 65,
    },
    {
      name: 'AI Integration',
      proficiency: 'intermediate',
      category: 'integration',
      stackPosition: 70,
    },
    {
      name: 'CSS/Tailwind',
      proficiency: 'expert',
      category: 'frontend',
      stackPosition: 15,
    },
    {
      name: 'GraphQL',
      proficiency: 'advanced',
      category: 'fullstack',
      stackPosition: 55,
    },
    {
      name: 'PostgreSQL',
      proficiency: 'intermediate',
      category: 'backend',
      stackPosition: 85,
    },
    {
      name: 'Docker',
      proficiency: 'intermediate',
      category: 'backend',
      stackPosition: 90,
    },
    {
      name: 'Git/GitHub',
      proficiency: 'expert',
      category: 'fullstack',
      stackPosition: 50,
    },
  ],
};
