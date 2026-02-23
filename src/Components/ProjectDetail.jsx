import React from "react"
import { useParams, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { projects } from "../data"
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa"

const ProjectDetail = () => {
  const { id } = useParams()
  const project = projects.find((p) => String(p.id) === String(id))

  if (!project) {
    return (
      <div className='min-h-screen dark:bg-slate-900 flex flex-col items-center justify-center text-center px-6 pt-20'>
        <h2 className='text-3xl font-bold text-slate-800 dark:text-white mb-4'>
          Project not found
        </h2>
        <Link
          to='/projects'
          className='text-cyan-500 hover:text-cyan-700 flex items-center gap-2'
        >
          <FaArrowLeft /> Back to Projects
        </Link>
      </div>
    )
  }

  return (
    <div className='min-h-screen dark:bg-slate-900 pt-24 pb-20 px-6'>
      <div className='max-w-4xl mx-auto'>
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            to='/projects'
            className='inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-700 mb-8 font-medium transition'
          >
            <FaArrowLeft /> Back to Projects
          </Link>
        </motion.div>

        {/* Hero image */}
        <motion.div
          className='rounded-2xl overflow-hidden shadow-2xl mb-10'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={project.image}
            alt={project.title}
            className='w-full h-72 object-cover'
          />
        </motion.div>

        {/* Title + links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6'
        >
          <h1 className='text-4xl font-bold text-slate-900 dark:text-white'>
            {project.title}
          </h1>
          <div className='flex gap-4'>
            <a
              href={project.github}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition text-sm font-medium'
            >
              <FaGithub /> GitHub
            </a>
            <a
              href={project.demo}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition text-sm font-medium'
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          </div>
        </motion.div>

        {/* Tech stack */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='flex flex-wrap gap-2 mb-10'
        >
          {project.tech.map((t, i) => (
            <span
              key={i}
              className='bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 px-3 py-1.5 rounded-full text-sm font-medium'
            >
              {t}
            </span>
          ))}
        </motion.div>

        {/* Case study sections */}
        <div className='space-y-12'>
          {/* Overview */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className='text-2xl font-bold text-slate-800 dark:text-white mb-3 flex items-center gap-2'>
              <span className='text-cyan-500'>01.</span> Overview
            </h2>
            <p className='text-slate-600 dark:text-slate-300 text-lg leading-relaxed'>
              {project.caseStudy?.overview || project.description}
            </p>
          </motion.section>

          {/* Problem */}
          {project.caseStudy?.problem && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className='bg-red-50 dark:bg-slate-800 border-l-4 border-red-400 rounded-r-xl p-6'
            >
              <h2 className='text-2xl font-bold text-slate-800 dark:text-white mb-3 flex items-center gap-2'>
                <span className='text-red-400'>02.</span> The Problem
              </h2>
              <p className='text-slate-600 dark:text-slate-300 leading-relaxed'>
                {project.caseStudy.problem}
              </p>
            </motion.section>
          )}

          {/* Approach */}
          {project.caseStudy?.approach && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className='text-2xl font-bold text-slate-800 dark:text-white mb-3 flex items-center gap-2'>
                <span className='text-cyan-500'>03.</span> My Approach
              </h2>
              <p className='text-slate-600 dark:text-slate-300 leading-relaxed'>
                {project.caseStudy.approach}
              </p>
            </motion.section>
          )}

          {/* Key features */}
          {project.caseStudy?.features && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className='text-2xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2'>
                <span className='text-cyan-500'>04.</span> Key Features
              </h2>
              <ul className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                {project.caseStudy.features.map((feature, i) => (
                  <li
                    key={i}
                    className='flex items-start gap-3 bg-gray-50 dark:bg-slate-800 p-4 rounded-xl'
                  >
                    <span className='text-cyan-500 font-bold mt-0.5'>✓</span>
                    <span className='text-slate-700 dark:text-slate-300'>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.section>
          )}

          {/* Learnings / Outcome */}
          {project.caseStudy?.outcome && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className='bg-cyan-50 dark:bg-slate-800 border-l-4 border-cyan-500 rounded-r-xl p-6'
            >
              <h2 className='text-2xl font-bold text-slate-800 dark:text-white mb-3 flex items-center gap-2'>
                <span className='text-cyan-500'>05.</span> Outcome & Learnings
              </h2>
              <p className='text-slate-600 dark:text-slate-300 leading-relaxed'>
                {project.caseStudy.outcome}
              </p>
            </motion.section>
          )}
        </div>

        {/* Next project navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='mt-20 pt-8 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center'
        >
          <Link
            to='/projects'
            className='text-cyan-500 hover:text-cyan-700 flex items-center gap-2 font-medium transition'
          >
            <FaArrowLeft /> All Projects
          </Link>
          <Link
            to='/contact'
            className='bg-cyan-600 text-white px-5 py-2 rounded-lg hover:bg-cyan-700 transition font-medium'
          >
            Hire Me →
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default ProjectDetail
