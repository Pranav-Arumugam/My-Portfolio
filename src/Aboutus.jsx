import React from "react"
import { motion } from "framer-motion"
import SectionHeading from "./Components/SectionHeading"

const Aboutus = () => {
  return (
    <section id='about' className='bg-white dark:bg-slate-900 py-20 px-6'>
      <div className='max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {" "}
          <SectionHeading text={"About me"}></SectionHeading>
          <p className='text-lg text-slate-600 dark:text-slate-300 mb-6'>
            I’m Pranav Arumugam, a web developer with a strong foundation in
            building responsive, accessible, and performance-focused web
            applications. From crafting seamless user interfaces with React and
            Tailwind CSS to optimising interactions for real-world clients, I
            enjoy turning ideas into elegant digital solutions.
          </p>
          <p className='text-lg text-slate-600 dark:text-slate-300 mb-6'>
            Currently pursuing my Master’s in Advanced Computer Science at the
            University of Liverpool, I’m expanding my skills across modern
            frameworks, software design, and user-centric development.
          </p>
          <p className='text-lg text-slate-600 dark:text-slate-300 mb-6'>
            Outside of code, I’m always curious whether it’s exploring emerging
            tech or pushing myself at the gym. I believe in showing up with
            purpose, staying humble, and constantly evolving as a developer and
            a person.
          </p>
          <div className='mt-6'>
            <a
              href='#'
              className='inline-block bg-cyan-600 text-white px-6 py-2 rounded hover:bg-cyan-800 transition'
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='hidden md:block'
        >
          <div className='w-full h-[300px] bg-cyan-200 dark:bg-slate-700 rounded-xl shadow-lg flex items-center justify-center text-3xl font-bold text-cyan-800 dark:text-cyan-300 '>
            👋 Let's Build Something Cool!
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Aboutus
