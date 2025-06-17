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
