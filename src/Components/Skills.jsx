import React from "react"
import SectionHeading from "./SectionHeading"
import { skills } from "../data"
import { motion } from "framer-motion"
const Skills = () => {
  return (
    <section className='bg-white py-16 px-6 dark:bg-slate-900' id='skills'>
      <SectionHeading text={"my skills"}></SectionHeading>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8'>
        {skills.map(({ name, icon: Icon }, index) => {
          return (
            <motion.div
              key={name}
              className='relative group flex flex-col items-center justify-center gap-2 p-4 bg-gray-100 dark:bg-slate-800 rounded-xl shadow hover:scale-105 transition'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Icon className='text-4xl text-cyan-900 dark:text-cyan-400 group-hover:scale-110 transition-transform duration-300'></Icon>
              <p className='text-sm text-slate-700 dark:text-gray-300'>
                {name}
              </p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default Skills
