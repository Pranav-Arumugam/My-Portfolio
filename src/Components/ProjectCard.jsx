import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const ProjectCard = ({
  id,
  title,
  description,
  image,
  tech,
  github,
  demo,
  currentlyBuilding,
}) => {
  return (
    <motion.div
      className='relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-cyan-500/20 hover:shadow-xl transition-all duration-300 group'
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Currently Building Badge */}
      {currentlyBuilding && (
        <div className='absolute top-3 left-3 z-20 flex items-center gap-2 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-cyan-500/40 shadow-lg'>
          {/* Pulsing dot */}
          <span className='relative flex h-2 w-2'>
            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75'></span>
            <span className='relative inline-flex rounded-full h-2 w-2 bg-cyan-500'></span>
          </span>
          Currently Building
        </div>
      )}

      {/* Glowing border effect for active project */}
      {currentlyBuilding && (
        <div className='absolute inset-0 rounded-2xl ring-2 ring-cyan-500/50 pointer-events-none z-10'></div>
      )}

      {/* Project image */}
      <div className='h-48 overflow-hidden'>
        <img
          src={image}
          alt={title}
          className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
        />
      </div>

      {/* Card content */}
      <div className='p-6'>
        <h3 className='text-xl font-bold text-slate-800 dark:text-white mb-2'>
          {title}
        </h3>
        <p className='text-sm text-slate-600 dark:text-slate-300 line-clamp-2 mb-4'>
          {description}
        </p>

        {/* Tech tags */}
        <div className='flex flex-wrap gap-2 mb-5'>
          {tech.map((t, i) => (
            <span
              key={i}
              className='bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 px-2 py-1 rounded-full text-xs font-medium'
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className='flex items-center justify-between'>
          <div className='flex gap-4'>
            {github && (
              <a
                href={github}
                target='_blank'
                rel='noopener noreferrer'
                className='text-sm text-indigo-500 hover:text-indigo-700 underline font-medium'
              >
                GitHub
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target='_blank'
                rel='noopener noreferrer'
                className='text-sm text-teal-500 hover:text-teal-700 underline font-medium'
              >
                Live Demo
              </a>
            )}
          </div>
          {id && (
            <Link
              to={`/projects/${id}`}
              className='text-xs bg-cyan-600 text-white px-3 py-1.5 rounded-lg hover:bg-cyan-700 transition font-medium'
            >
              Case Study →
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
