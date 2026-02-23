import { nanoid } from "nanoid"
import {
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiPandas,
  SiNumpy,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiSupabase,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiGithub,
  SiVite,
  SiVercel,
  SiPostman,
  SiDocker,
  SiAmazon,
  SiJupyter,
} from "react-icons/si"
import { FaDatabase, FaCode, FaServer, FaTools, FaBrain } from "react-icons/fa"
import { FaDumbbell, FaRocket, FaLaptopCode } from "react-icons/fa"

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#projects", text: "projects" },
]

export const questions = [
  {
    question: "What was my first programming language?",
    options: ["C++", "Python", "HTML", "Scratch"],
    answer: "C++",
    explanation:
      "C++ — where I first met the love of my life: segmentation fault.",
  },
  {
    question: "When I’m not coding, I’m likely...",
    options: [
      "Playing football",
      "Designing UIs",
      "Watching anime",
      "Cooking rice",
    ],
    answer: "Playing football",
    explanation: "I love the pitch as much as the console!",
  },
  {
    question: "Which project did I spend way too much time on?",
    options: [
      "Portfolio site",
      "Fitness Tracker",
      "Discord Bot",
      "E-commerce App",
    ],
    answer: "Portfolio site",
    explanation: "You're looking at the result 😉",
  },
]

export const projects = [
  {
    id: "altiora",
    title: "Altiora – Personal Development Web App",
    description:
      "A full-stack personal development platform combining Pomodoro timer, habit tracking, workout logging, and body metrics into a unified interface — with an AI-powered suggestion engine.",
    image: "/altiora.png",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "Groq API",
      "Vercel",
    ],
    github: "https://github.com/Pranav-Arumugam/Altiora",
    demo: "https://altiora-omega.vercel.app/",
    caseStudy: {
      overview:
        "Altiora is a full-stack personal development platform I built to unify productivity, fitness, and wellness tracking into one coherent experience. It includes a Pomodoro timer, habit tracker, workout logger, and body metrics dashboard all connected to an AI suggestion engine powered by the Groq API.",
      problem:
        "Most productivity and wellness apps are spread across , you track habits in one app, workouts in another, focus sessions in another. There's no system that understands your overall state and gives contextual feedback. I wanted to build something that connected all of these together.",
      approach:
        "I chose Next.js for its SSR capabilities and Supabase for the backend, leveraging PostgreSQL with Row Level Security (RLS) to ensure each user's data is completely isolated at the database level. JWT authentication handles sessions. The Groq API powers the AI suggestion engine, which reads across the user's habits, productivity streaks, and wellness data to deliver personalised feedback.",
      features: [
        "Supabase + PostgreSQL backend with Row Level Security (RLS)",
        "JWT authentication with protected routes",
        "AI-powered suggestion engine via Groq API",
        "Interactive dashboards with data visualisations",
        "Streak tracking improved user engagement by 30% in pilot testing",
        "Pomodoro timer, habit tracker, workout logger in one app",
        "Deployed on Vercel with CI/CD",
      ],
      outcome:
        "During pilot testing, the streak and dashboard features improved user engagement by 30%. This project significantly deepened my understanding of database security (RLS), asynchronous state management across complex data, and integrating third-party AI APIs into production applications.",
    },
  },
  {
    id: "applyflow",
    title: "ApplyFlow – Job Application & Interview Manager",
    description:
      "A full-stack web application to track job applications, manage interview schedules, and evaluate skill-to-role alignment. built with Mern Stack.",
    image: "/applyFlow.png",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
      "REST APIs",
      "React Query",
      "Express Validator",
    ],
    github: "https://github.com/Pranav-Arumugam/applyFlow",
    demo: "https://applyflow-10e4.onrender.com",
    caseStudy: {
      overview:
        "ApplyFlow is a full-stack job application management system designed to reduce the friction of tracking multiple job applications. It lets users log applications, schedule interviews on a calendar view, and assess how well their skills align with each role all in one dashboard.",
      problem:
        "I was job seeker managing multiple applications across different platforms quickly lose track of where i am in each process. Spreadsheets are messy and don't support scheduling or skill mapping. I wanted to build a proper tool that reflects how the process actually works.",
      approach:
        "I built RESTful APIs with Node.js and Express to handle application and interview workflows, with robust data validation at every endpoint and React Query to handle auto data refetches . MongoDB with Mongoose handles the data layer, with schema design focused on maintainable state transitions (Applied → Interview → Offer → Rejected). The React frontend includes calendar-based interview scheduling to visualise upcoming events.",
      features: [
        "RESTful API with Node.js and Express — full CRUD for applications and interviews",
        "MongoDB + Mongoose with maintainable schema design",
        "Calendar-based interview scheduling with timeline view",
        "Skill-to-role alignment scoring",
        "Asynchronous state management for multi-step workflows",
        "Responsive React frontend with React Router",
        "React Query and its built-in state management for effective data fetch",
        "Focused on reducing friction in multi-step application processes",
      ],
      outcome:
        "ApplyFlow demonstrated my ability to design and build a complete full-stack system end-to-end from scratch , database schema to REST API to React UI. The project reinforced my understanding of clean data flow, real-world state transitions, and building for actual user workflows rather than demo-style features. The interesting and toughest part was building the backend i took good amount of time learn how to design them and optimize it to make it efficient and secure.",
    },
  },
  {
    id: "applybuddy",
    title: "ApplyBuddy – Chrome Extension for Job Applications",
    currentlyBuilding: true,
    description:
      "A browser extension built with TypeScript, React, and Manifest V3 that streamlines job applications by autofilling forms across job platforms and syncing data to the ApplyFlow backend.",
    image: "/applyBuddy.png",
    tech: [
      "TypeScript",
      "React",
      "Manifest V3",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "Cors",
    ],
    github: "",
    demo: "",
    caseStudy: {
      overview:
        "ApplyBuddy is a Chrome extension that sits alongside the user as they browse job boards, automatically detecting application forms and offering to autofill them with saved profile data. It syncs with the ApplyFlow backend to keep job tracking data consistent across browser and web app.",
      problem:
        "Even though ApplyFlow supports manual job application logging,  copying the job details every time from the web pages without an extra unwanted data will be time consuming and might log wrong job detail ",
      approach:
        "Built with TypeScript and React on Manifest V3 Chrome's current extension standard. The extension uses content scripts for cross-site data injection, injecting form-fill logic into job board pages. LocalStorage provides persistence within the extension, while a secure API connection syncs application records to the ApplyFlow Node/Express backend.",
      features: [
        "Built with TypeScript, React, and Chrome Manifest V3",
        "Context-aware autofill across major job platforms",
        "Cross-site data injection via content scripts",
        "Secure API sync with ApplyFlow backend",
        "Local storage persistence for offline use",
        "Focused on data security and clean UI integration",
      ],
      outcome:
        "This project pushed me into a completely new environment which was browser extension APIs. I added a new route handler for this browser extension in my up and running applyFlow server. Manifest V3's stricter security model, and cross-site scripting constraints.Building this project taught me how cross-origin request works and how to prevent CSRF and implement safe SOP .It's the most technically unusual thing in my portfolio and demonstrates I can learn and build in unfamiliar environments quickly.",
    },
  },
]

export const skillCategories = [
  {
    label: "Languages",
    color: "text-violet-400",
    skills: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Python", icon: SiPython },
      { name: "C++", icon: SiCplusplus },
      { name: "SQL", icon: FaDatabase },
    ],
  },
  {
    label: "Frameworks & Libraries",
    color: "text-cyan-400",
    skills: [
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Framer Motion", icon: SiFramer },
      { name: "Pandas", icon: SiPandas },
      { name: "NumPy", icon: SiNumpy },
    ],
  },
  {
    label: "Backend",
    color: "text-emerald-400",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST APIs", icon: FaServer },
      { name: "JWT Auth", icon: FaCode },
    ],
  },
  {
    label: "Databases",
    color: "text-orange-400",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Supabase", icon: SiSupabase },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    label: "Tools & Platforms",
    color: "text-pink-400",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Vite", icon: SiVite },
      { name: "Vercel", icon: SiVercel },
      { name: "Postman", icon: SiPostman },
      { name: "Docker", icon: SiDocker },
      { name: "AWS (learning)", icon: SiAmazon },
      { name: "Jupyter", icon: SiJupyter },
    ],
  },
]

export const journey = [
  {
    year: "2018 – 2020",
    title: "High School",
    description:
      "Completed my higher secondary education with a focus on computer science and mathematics. This is where my passion for tech truly started.",
  },
  {
    year: "2020 – 2023",
    title: "Bachelor's in Computer Applications",
    description:
      "Studied the fundamentals of computer science, programming, and software development. Developed several academic projects and gained real-world exposure.",
  },
  {
    year: "2024 – 2025",
    title: "MSc Advanced Computer Science — University of Liverpool",
    description:
      "Graduated with First Class with Distinction (December 2025). Expanded skills across modern frameworks, software design, distributed systems, data structures and algorithms, bio-inspired machine learning, data mining and visualisation, and user-centric development.",
  },
]
export const values = [
  {
    icon: FaBrain,
    title: "Curious Mind",
    desc: "Always exploring new ideas and emerging technologies.",
  },
  {
    icon: FaDumbbell,
    title: "Discipline",
    desc: "Whether it’s coding or fitness, I show up every day.",
  },
  {
    icon: FaLaptopCode,
    title: "Craftsmanship",
    desc: "I take pride in writing clean, scalable, and thoughtful code.",
  },
  {
    icon: FaRocket,
    title: "Growth-Oriented",
    desc: "I believe in constant learning and pushing boundaries.",
  },
]
