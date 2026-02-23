import React, { useState } from "react"
import SectionHeading from "./SectionHeading"
import { motion } from "framer-motion"
import { skillCategories } from "../data"
import { FaCode, FaServer, FaTools, FaBrain, FaDatabase } from "react-icons/fa"
const categoryIcons = {
  Languages: FaCode,
  "Frameworks & Libraries": FaBrain,
  Backend: FaServer,
  Databases: FaDatabase,
  "Tools & Platforms": FaTools,
}

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(null)

  const displayed = activeCategory
    ? skillCategories.filter((c) => c.label === activeCategory)
    : skillCategories

  return (
    <section className='bg-white dark:bg-slate-900 py-20 px-6' id='skills'>
      <SectionHeading text={"My Skills"} />

      {/* Filter tabs */}
      <div className='flex flex-wrap justify-center gap-3 mb-12'>
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
            activeCategory === null
              ? "bg-cyan-500 text-white border-cyan-500"
              : "border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:border-cyan-400 hover:text-cyan-400"
          }`}
        >
          All
        </button>
        {skillCategories.map((cat) => (
          <button
            key={cat.label}
            onClick={() =>
              setActiveCategory(activeCategory === cat.label ? null : cat.label)
            }
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
              activeCategory === cat.label
                ? "bg-cyan-500 text-white border-cyan-500"
                : "border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:border-cyan-400 hover:text-cyan-400"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Skill categories */}
      <div className='max-w-6xl mx-auto space-y-10'>
        {displayed.map((category, catIndex) => {
          const CatIcon = categoryIcons[category.label] || FaCode
          return (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.05 }}
              viewport={{ once: true }}
            >
              {/* Category header */}
              <div className='flex items-center gap-2 mb-4'>
                <CatIcon className={`text-lg ${category.color}`} />
                <h3 className='text-sm font-semibold text-slate-700 dark:text-slate-200 uppercase tracking-widest'>
                  {category.label}
                </h3>
                <div className='flex-1 h-px bg-slate-200 dark:bg-slate-700 ml-2' />
              </div>

              {/* Skill chips */}
              <div className='flex flex-wrap gap-3'>
                {category.skills.map(({ name, icon: Icon }, index) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.04 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.06 }}
                    className='flex items-center gap-2 px-4 py-2.5 rounded-xl border bg-gray-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-cyan-400 dark:hover:border-cyan-500 shadow-sm transition-all duration-200 cursor-default'
                  >
                    <Icon className={`text-lg ${category.color}`} />
                    <span className='text-sm font-medium text-slate-700 dark:text-slate-200'>
                      {name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default Skills
