import { React, useCallback } from "react"
import { FaGithubSquare, FaLinkedinIn } from "react-icons/fa"
import heroimg from "../assets/pfp.jpg"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import Spline from "@splinetool/react-spline"
import { FaDownload } from "react-icons/fa"

const Hero = () => {
  const gitLink = import.meta.env.VITE_EMAILJS_GIT_LINK
  const linkedin = import.meta.env.VITE_EMAILJS_LINKEDIN_LINK
  return (
    <div className='relative min-h-screen flex items-center justify-center bg-cyan-100 dark:bg-slate-900 py-24 '>
      <Spline
        scene='https://prod.spline.design/uh2upU4LEOGktO6K/scene.splinecode'
        className='absolute top-0 w-full h-full left-0'
      />
      <div className='relative z-10 w-full'>
        <div className='align-elements grid md:grid-cols-2 items-center gap-8'>
          <motion.article
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className='text-4xl sm:text-6xl capitalize font-bold   tracking-wider text-slate-800 dark:text-white'>
              hi, i'm pranav Arumugam
            </h1>
            <div className='mt-4 text-2xl sm:text-3xl capitalize tracking-wide font-medium text-cyan-700 dark:text-cyan-400'>
              <TypeAnimation
                sequence={[
                  "Front-end Developer",
                  2000,
                  "UI/UX Designer",
                  2000,
                  "React Specialist",
                  2000,
                  "Web Animator",
                  2000,
                ]}
                wrapper='span'
                speed={50}
                repeat={Infinity}
              ></TypeAnimation>
            </div>
            <p className='mt-2 text-lg tracking-wide font-body text-slate-700 dark:text-slate-300'>
              I craft responsive and accessible user interfaces with modern
              tools like React, Tailwind, and a touch of flair.
            </p>

            <div className='flex flex-wrap gap-3 mt-4'>
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Tailwind",
                "Typescript",
              ].map((tech) => (
                <span
                  key={tech}
                  className='bg-white dark:bg-slate-800 px-3 py-1 rounded-full shadow text-sm font-medium text-gray-700 dark:text-white hover:scale-105 transition'
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className='flex items-center gap-x-4 mt-6'>
              <a href={gitLink}>
                <FaGithubSquare className='h-8 w-8 text-gray-300 hover:text-cyan-800 transition' />
              </a>
              <a href={linkedin}>
                <FaLinkedinIn
                  className='h-8 w-8 text-gray-300
                 hover:text-cyan-800 transition'
                />
              </a>
            </div>

            <div className='mt-6 flex flex-row z-10'>
              <a
                className='bg-cyan-600 text-white px-6 py-2 rounded hover:bg-cyan-800 transition'
                href='#projects'
              >
                View Projects
              </a>
              <a
                href='/resume.pdf'
                download
                className='border border-cyan-600 px-6 py-2 rounded hover:bg-cyan-100 dark:hover:bg-slate-800 ml-3 transition text-cyan-700 dark:text-white flex items-center gap-2'
              >
                <FaDownload />
                Download Resume
              </a>
            </div>
          </motion.article>
          <motion.article
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className='hidden md:block'
          >
            <div
              className="mx-auto relative w-[300px] h-[300px] rounded-[50%]
                  before:content-[''] before:w-full before:h-full 
                  before:absolute before:top-[-0.25rem] before:right-[-0.5rem] 
                  before:rounded-[50%] before:bg-cyan-500"
            >
              <img
                src={heroimg}
                alt='profile'
                className='w-full h-full block object-cover rounded-[50%] relative'
              />
            </div>
          </motion.article>
        </div>
      </div>
    </div>
  )
}

export default Hero
