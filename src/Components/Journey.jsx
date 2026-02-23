import React from "react"
import SectionHeading from "./SectionHeading"
import { journey } from "../data"
import { motion } from "framer-motion"
import { useScroll } from "framer-motion"
import { useSpring } from "framer-motion"
import { FaMapMarkerAlt } from "react-icons/fa"

const Journey = () => {
  const { scrollYProgress } = useScroll()
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })
  return (
    <section className='bg-white dark:bg-slate-900 py-20 px-6' id='journey'>
      <SectionHeading text={"My Journey"}></SectionHeading>

      <div className='relative flex flex-col items-center'>
        <motion.div
          style={{ scaleY }}
          className='origin-top absolute w-1 bg-cyan-700 dark:bg-cyan-400 h-full left-1/2 transform -translate-x-1/2'
        ></motion.div>
        <div className='absolute top-0 -translate-y-1/2 left-1/2 transform -translate-x-1/2 z-20'>
          <FaMapMarkerAlt className='text-cyan-700 dark:text-cyan-400 text-xl' />
        </div>

        {journey.map((item, index) => {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative w-full md:w-1/2 px-6 py-4 mb-12 ${
                index % 2 === 0 ? "self-start text-left" : "self-end text-right"
              }`}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className='absolute w-4 h-4 bg-cyan-900 dark:bg-cyan-400 rounded-full left-1/2 top-4 transform -translate-x-1/2 z-10'
              ></motion.div>
              <div className='bg-gray-100 dark:bg-slate-800 p-4 rounded-lg shadow-md'>
                <p className='text-sm text-gray-500 dark:text-gray-400'>
                  {item.year}
                </p>
                <h3 className='text-xl font-semibold text-slate-800 dark:text-white'>
                  {item.title}
                </h3>
                <p className='text-sm text-gray-700 dark:text-gray-300 max-w-prose mt-2'>
                  {item.description}
                </p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default Journey
