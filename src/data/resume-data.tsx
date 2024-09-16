import { GitHubIcon, LinkedInIcon, XIcon } from '~/components/icons';
import { aipluxLogo, flowLogo, partykitLogo } from '~/images/logos';

export const RESUME_DATA = {
  name: 'Min Chun Fu',
  initials: 'MCF',
  location: 'United States / Taiwan / Hong Kong',
  locationLink: 'https://www.google.com/maps/place/State+College+PA',
  about:
    'Business Management student, also a self-taught Full Stack Engineer. Focused on building web applications with attention to details.',
  summary:
    'As a Full Stack Engineer, I lead the development of web applications using cutting-edge technologies. I also specialize in managing projects and teams, guiding them from concept to launch. I enjoy working on various personal projects as well. With an entrepreneurial and innovative spirit, I am always seeking new opportunities to grow and make a positive impact.',
  personalWebsiteUrl: 'https://nameisdaniel.com',
  contact: {
    email: 'nameisdaniel@flowapp.so',
    tel: '+9295132767',
    social: [
      {
        name: 'GitHub',
        url: 'https://github.com/itsnotaka',
        icon: GitHubIcon,
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/nameisdaniel/',
        icon: LinkedInIcon,
      },
      {
        name: 'X',
        url: 'https://x.com/d2ac__',
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: 'Pennsylvania State University',
      degree: "Bachelor's Degree in Business Management (Minor in International Business)",
      start: '2021',
      end: '2025',
    },
  ],
  work: [
    {
      company: 'Partykit (Cloudflare)',
      link: 'https://www.partykit.io/',
      badges: ['Remote', 'Part time'],
      title: 'Developer Advocate',
      logo: partykitLogo,
      start: '2023',
      end: null,
      description:
        'Help engage with the developer community. Create projects, examples and documentations regarding partykit. Ship bug fixes and features for partykit. Technologies: Next.js, TailwindCSS, Partykit',
    },
    {
      company: 'Aiplux',
      link: 'https://aiplux.com/',

      badges: ['Remote', 'Full time internship'],
      title: 'Manager & Software Engineer',
      logo: aipluxLogo,
      start: '2024',
      end: '2024',
      description:
        'Leading the development of their project. Finished the project that were suppose to be finished in 1 year in 2 months. Technologies: Vue, Nuxt.js, TypeScript, Node.js, Turborepo (monorepo)',
    },
    {
      company: 'Liveblocks',
      link: 'https://liveblocks.io',
      badges: ['Full time', 'IC3 Developer', 'Offer Received'],
      title: 'Full Stack Engineer',
      logo: '',
      start: '2024',
      end: '2024',
      description:
        'Received an offer from liveblocks after 2 rounds of interviews. Unfortunately, I turned it down to focus on my studies.',
    },
  ],
  projects: [
    {
      title: 'Flow',
      techStack: ['Typescript', 'React', 'Next.js', 'TailwindCSS', 'Partykit'],
      description: 'A note managing platform that supports real-time collaboration and AI-powered search.',
      link: 'https://flowapp.so',
      logo: flowLogo,
    },
  ],
  skills: [
    'Github',
    'Typescript',
    'React',
    'Websockets',
    'Real-time',
    'Slack',
    'Vercel',
    'Google Suite',
    'TailwindCSS',
    'Next.js',
    'Figma',
    'AWS',
  ],
} as const;
