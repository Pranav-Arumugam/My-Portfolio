import React from "react"
import { FaGithubSquare, FaLinkedinIn } from "react-icons/fa"
import { motion } from "framer-motion"
import { Link } from "react-router"
import { TypeAnimation } from "react-type-animation"
import Spline from "@splinetool/react-spline"
import { FaDownload } from "react-icons/fa"

const Hero = () => {
  const gitLink = import.meta.env.VITE_EMAILJS_GIT_LINK
  const linkedin = import.meta.env.VITE_EMAILJS_LINKEDIN_LINK

  return (
    <div
      className='relative min-h-screen flex items-center justify-center bg-cyan-100 dark:bg-slate-900'
      id='home'
    >
      {/* Spline background */}
      <Spline
        scene='https://prod.spline.design/uh2upU4LEOGktO6K/scene.splinecode'
        className='absolute top-0 w-full h-full left-0'
      />

      {/* Centered content */}
      <div className='relative z-10 w-full max-w-3xl mx-auto px-6 text-center'>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className='text-5xl sm:text-7xl font-bold tracking-tight text-slate-800 dark:text-white mb-4'>
            Hi, I'm <span className='text-cyan-500'>Pranav</span>
          </h1>

          <div className='text-2xl sm:text-3xl font-medium text-cyan-700 dark:text-cyan-400 mb-4'>
            <TypeAnimation
              sequence={[
                "Front-end Developer",
                2000,
                "React & TypeScript Engineer",
                2000,
                "Full-Stack Developer",
                2000,
                "Software Engineer",
                2000,
              ]}
              wrapper='span'
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className='text-lg text-slate-700 dark:text-slate-300 max-w-xl mx-auto mb-6'>
            I build fast, accessible web apps with React and TypeScript focused
            on clean code and real user impact.
          </p>

          {/* Tech tags */}
          <div className='flex flex-wrap justify-center gap-3 mb-8'>
            {[
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Node.js",
              "express.js",
              "MongoDb",
              "Supabase",
              "Docker",
            ].map((tech) => (
              <span
                key={tech}
                className='bg-white dark:bg-slate-800 px-3 py-1 rounded-full shadow text-sm font-medium text-gray-700 dark:text-white hover:scale-105 transition'
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Social icons */}
          <div className='flex justify-center items-center gap-5 mb-8'>
            <a href={gitLink} target='_blank' rel='noopener noreferrer'>
              <FaGithubSquare className='h-8 w-8 text-gray-300 hover:text-cyan-500 transition' />
            </a>
            <a href={linkedin} target='_blank' rel='noopener noreferrer'>
              <FaLinkedinIn className='h-8 w-8 text-gray-300 hover:text-cyan-500 transition' />
            </a>
          </div>

          {/* CTA buttons */}
          <div className='flex flex-wrap justify-center gap-4'>
            <Link
              to='/projects'
              className='bg-cyan-600 text-white px-8 py-3 rounded-lg hover:bg-cyan-700 transition font-medium'
            >
              View Projects
            </Link>
            <a
              href='/MyResume.pdf'
              download
              className='border border-cyan-600 text-cyan-600 dark:text-white px-8 py-3 rounded-lg hover:bg-cyan-50 dark:hover:bg-slate-800 transition font-medium flex items-center gap-2'
            >
              <FaDownload className='text-sm' />
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
