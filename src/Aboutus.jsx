import React from "react"
import { motion } from "framer-motion"
import SectionHeading from "./Components/SectionHeading"
import { values } from "./data"

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
            I’m Pranav Arumugam, a Masters' graduate in Advanced Computer
            Science from University of Liverpool and a full-stack developer
            focused on building practical systems that solve real problems . i
            care about clean architecture, scalable design, and shipping
            products that people actually use.
          </p>
          <p className='text-lg text-slate-600 dark:text-slate-300 mb-6'>
            My works sits at the intersection of engineering and product
            thinking. i build <b>ApplyFlow</b>, a job tracking and interview
            scheduling platform. and I'm developing <b>ApplyBuddy</b>, a browser
            extension that captures job data directly from application pages and
            syncs it to a live backend with authentication , duplicate detection
            and offline fallbacks .What started as a personal frustration became
            a fully integreated system handling real-world edge cases.
          </p>
          <p className='text-lg text-slate-600 dark:text-slate-300 mb-6'>
            My core stack includes React , Typescript, Next.js, Node.js,
            Express.js,MongoDB,Supabase and Docker.I foucs on API design, data
            modeling, performance, and reliability not just getting features to
            work, but making them resilient and maintainable.
          </p>
          <p className='text-lg text-slate-600 dark:text-slate-300 mb-6'>
            Outside of coding , I value discipline and continuous improvement.
            Whether in research , building side projects, or pushing myself
            physically, i approach growth with consistency and focus.
          </p>
          <div className='mt-6'>
            <a
              href='/MyResume.pdf'
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
          {values.map((val, index) => {
            const { icon: Icon, desc, title } = val
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className='bg-cyan-50 dark:bg-slate-800 p-6 rounded-xl shawdow hover:shadow-lg transition mt-1'
              >
                <div className='text-3xl text-cyan-600 dark:text-cyan-300 mb-2'>
                  <Icon></Icon>
                </div>
                <h4 className='text-xl font-semibold mb-1 text-slate-800 dark:text-white'>
                  {title}
                </h4>
                <p className='text-slate-600 dark:text-slate-300 text-sm'>
                  {val.desc}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Aboutus
