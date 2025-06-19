import { nanoid } from "nanoid"

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
