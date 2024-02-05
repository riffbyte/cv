// import {
//   ClevertechLogo,
//   ParabolLogo,
// } from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Oleg Semyonov",
  initials: "OS",
  location: "Tbilisi, Georgia, CET+3",
  locationLink: "https://www.google.com/maps/place/Tbilisi",
  about:
    "Full Stack Engineer with great eye for design and attention to detail",
  summary:
    "During 7 years of my experience as a Full Stack Engineer, I have developed a multitude of products, both solo and in a team. I'm an effective leader and a good mentor, with strong presentational skills. My main stack is TypeScript, React.js, Next.js and Node.js",
  avatarUrl: "https://avatars.githubusercontent.com/u/1641218?v=4",
  personalWebsiteUrl: "https://riffbyte.dev",
  contact: {
    email: "oleg@riffbyte.dev",
    tel: "+995571145895",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/oleg-semyonov",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/oleg-semyonov-609176250/",
        icon: LinkedInIcon,
      },
      {
        name: "Twitter",
        url: "https://twitter.com/riffbyte",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school:
        "Moscow State University of Economics, Statistics and Informatics (MESI) ",
      degree:
        "Bachelor's degree, Computer and Information Sciences and Support Services",
      start: "2011",
      end: "2015",
    },
  ],
  work: [
    {
      company: "Prezly",
      link: "https://prezly.com",
      badges: ["Remote"],
      title: "Senior Full Stack Developer",
      // logo: ParabolLogo,
      start: "2021",
      end: "2024",
      description:
        "Led the development of new generation of Prezly CMS Themes, accompanying open-source libraries and the prezly.com website. Implemented new features on the main app, introduced design systems to the app and the website, onboarded and mentored junior developers. Technologies: React, Next.js, TypeScript, Contentful, PHP",
    },
    {
      company: "Anyway Labs",
      link: "https://anywaylabs.com/",
      badges: ["Remote"],
      title: "Frontend Developer → Full Stack Developer",
      // logo: ClevertechLogo,
      start: "2017",
      end: "2021",
      description:
        "Developed hybrid mobile apps, web applications and REST APIs for various clients. Technologies: jQuery, Cordova, Ionic, React, TypeScript, Koa, Python",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "CSS/Tailwind",
  ],
  projects: [
    {
      title: "Prezly Analytics package",
      techStack: ["Lead Developer", "TypeScript", "Next.js", "Open Source"],
      description:
        "A rewrite of Prezly's old Analytics library, utilizing Segment's analytics-next package. It is used by Prezly Themes running on Next.js",
      // logo: ConsultlyLogo,
      link: {
        label: "github.com",
        href: "https://github.com/prezly/analytics",
      },
    },
    {
      title: "Bea Prezly Theme",
      techStack: [
        "Lead Full Stack Developer",
        "TypeScript",
        "Next.js",
        "Open Source",
      ],
      description:
        "First Prezly CMS theme made on the new stack, using NextJS, Typescript and Prezly SDK.",
      // logo: ConsultlyLogo,
      link: {
        label: "prezly.com",
        href: "https://www.prezly.com/themes/bea",
      },
    },
    {
      title: "Prezly code-style package",
      techStack: ["Utility", "Open Source"],
      description:
        "ESLint, Prettier and StyleLint configs used for Prezly TypeScript projects.",
      // logo: ConsultlyLogo,
      link: {
        label: "github.com",
        href: "https://github.com/prezly/code-style",
      },
    },
    {
      title: "Prezly Theme Kit",
      techStack: ["Lead Developer", "TypeScript", "Next.js", "Open Source"],
      description:
        "Data layer and utility library for developing Prezly themes with NextJS and TypeScript.",
      // logo: ConsultlyLogo,
      link: {
        label: "github.com",
        href: "https://github.com/prezly/theme-kit-js",
      },
    },
    {
      title: "Prezly Privacy Portal",
      techStack: [
        "Lead Full Stack Developer",
        "TypeScript",
        "Next.js",
        "Tailwind",
      ],
      description:
        "Standalone multi-language application to handle subscribing/unsubscribing from Prezly Sites, as well as GDPR Data Requests.",
      // logo: ConsultlyLogo,
      link: {
        label: "privacy.prezly.com",
        href: "https://privacy.prezly.com/newsroom/578e78e9-9a5b-44ad-bda2-5214895ee036/subscribe",
      },
    },
    {
      title: "Prezly Marketing Website",
      techStack: [
        "Lead Full Stack Developer",
        "TypeScript",
        "Next.js",
        "Contentful",
      ],
      description:
        "Website built using NextJS and Contenful CMS. The project includes over 1300 statically-generated pages and more than 50 custom display components.",
      // logo: ConsultlyLogo,
      link: {
        label: "prezly.com",
        href: "https://prezly.com/",
      },
    },
    {
      title: "RiffByte.dev",
      techStack: ["Side Project", "Next.js", "Tailwind", "Contentful"],
      description: "My personal portfolio website.",
      // logo: JarockiMeLogo,
      link: {
        label: "riffbyte.dev",
        href: "https://riffbyte.dev/",
      },
    },
    {
      title: "Telegram Web",
      techStack: ["Lead Frontend Developer", "TypeScript", "Contest"],
      description:
        "I was a core member of the team that won the Telegram JavaScript contest. The result of our work later became the official Telegram Web Client.",
      // logo: JarockiMeLogo,
      link: {
        label: "web.telegram.org",
        href: "https://web.telegram.org/",
      },
    },
    {
      title: "FlightVector Crew App",
      techStack: ["Lead Frontend Developer", "Ionic", "React.js", "TypeScript"],
      description:
        "A hybrid mobile app for crew members of private emergency services with GMaps integration for route navigation, duty dashboards and more.",
      // logo: JarockiMeLogo,
      link: {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.flightvector.crew",
      },
    },
    {
      title: "FlightCall API",
      techStack: ["Backend Developer", "Koa/Express", "PostgreSQL"],
      description:
        "Supporting API that connects FlightVector backend systems with the frontend applications.",
      // logo: JarockiMeLogo,
    },
    {
      title: "FlightVector Transport App",
      techStack: ["Frontend Developer", "Handlebars", "Cordova"],
      description:
        "Hybrid mobile app for private medical organization clients with GMaps integration for tracking requests",
      // logo: JarockiMeLogo,
      link: {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.softtechinc.flightcall",
      },
    },
  ],
} as const;
