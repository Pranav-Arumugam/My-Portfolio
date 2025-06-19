import React from "react"
import { motion, AnimatePresence } from "framer-motion"

const ProjectCard = ({ title, description, image, tech, github, demo }) => {
  return (
    <motion.div
      // className='lg:grid grid-cols-2'
      className='lg:grid grid-cols-2 gap-6 mb-16 items-center'
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.div
        className='relative mx-3 h-64 lg:h-full rounded-xl overflow-hidden shadow-lg'
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <img
          src={image}
          alt=''
          className='w-full h-full object-cover transform hover:scale-105 transition duration-500 rounded-xl'
        />
      </motion.div>
      <motion.div
        className='bg-white mx-3 my-9 lg:h-full p-4 lg:p-6 rounded-xl dark:bg-slate-800'
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className='font-bold capitalize text-2xl lg:text-4xl dark:text-white'>
          {title}
        </h2>
        <p className='mt-2 text-sm lg:text-lg font-light text-gray-700 dark:text-gray-300  lg:mt-4'>
          {description}
        </p>
        <div className='flex flex-wrap gap-2 mt-4'>
          {tech.map((t, index) => {
            return (
              <span
                key={index}
                className='bg-cyan-100 dark:bg-cyan-800 text-cyan-700 dark:text-cyan-100  px-3 py-1 rounded-full text-xs font-medium'
              >
                {t}
              </span>
            )
          })}
        </div>
        <div className='flex gap-4 mt-6'>
          <a
            href={github}
            target='_blank'
            rel='noopener noreferrer'
            className='text-sm text-indigo-600 hover:text-indigo-800 underline font-medium'
          >
            GitHub
          </a>
          <a
            href={demo}
            target='_blank'
            rel='noopener noreferrer'
            className='text-sm text-teal-600 hover:text-teal-800 underline font-medium'
          >
            Live Demo
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ProjectCard
