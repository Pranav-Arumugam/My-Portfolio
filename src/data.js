import { nanoid } from "nanoid"
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFramer,
  SiGit,
  SiFigma,
} from "react-icons/si"

import { BiLogoVisualStudio } from "react-icons/bi"

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
    title: "Personal Portfolio",
    description:
      "A responsive, dark-mode-enabled React + Tailwind portfolio to showcase my skills.",
    image: "../public/project-image.jpg", // or import
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/pranav/portfolio",
    demo: "https://your-portfolio-url.com",
  },
  {
    title: "Madura Creation – Portfolio Website",
    description:
      "A dynamic portfolio website designed to elevate brand identity and boost user engagement, contributing to a potential 35% increase in retention. Implemented responsive UI with performance optimization that halved load times.",
    image: "../public/project-image.jpg", // Replace with actual image path
    tech: ["React.js", "Tailwind CSS", "Web Design"],
    github: "https://github.com/your-username/madura-portfolio", // Replace with real URL if available
    demo: "https://madura-creation.com", // Replace with real live link
    highlights: [
      "Performance improved by 50%, reducing load times significantly",
      "Actively collaborated with client and integrated regular feedback",
      "Resolved frontend bottlenecks for smoother cross-device experience",
    ],
  },
]

export const skills = [
  { name: "React.js", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Framer Motion", icon: SiFramer },
  { name: "Git", icon: SiGit },
  { name: "VS Code", icon: BiLogoVisualStudio },
  { name: "Figma", icon: SiFigma },
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
    year: "2024 – Present",
    title: "Master's in Advanced Computer Science",
    description:
      "Currently pursuing my MSc at the University of Liverpool, specialising in software engineering, web development, and machine learning.",
  },
]
