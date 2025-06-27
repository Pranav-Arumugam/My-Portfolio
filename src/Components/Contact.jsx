import React, { useRef, useState } from "react"
import { motion } from "framer-motion"
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa"
import emailjs from "emailjs-com"
import.meta.env.VITE_EMAILJS_SERVICE_ID

const Contact = () => {
  const formRef = useRef(null)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm("")
    setSubmitted(true)
    formRef.current.reset()
  }
  return (
    <section className='bg-white dark:bg-slate-900 py-20 px-6' id='contact'>
      <div className='max-w-3xl mx-auto text-center'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white mb-4'
        >
          Get in Touch
        </motion.h2>
        <p className='text-slate-600 dark:text-slate-300 mb-8'>
          Have a project in mind or just want to connect? Drop a message - I’d
          love to hear from you.
        </p>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='grid grid-cols-1 gap-6 text-left'
        >
          <input
            type='text'
            placeholder='Your Name'
            required
            className='w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm foucs:outline-none focus:ring-2 focus:ring-cyan-500 text-white'
          />
          <input
            type='email'
            placeholder='Your Email'
            required
            className='w-full px-4 py-3 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white'
          />
          <textarea
            rows='5'
            placeholder='Your message'
            required
            className='w-full px-4 py-3 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white'
          />
          <button
            type='submit'
            className='w-full bg-cyan-600 text-white py-3 rounded-lg font-semibold hover:bg-cyan-800 transition'
          >
            Send Message
          </button>
        </form>
        {submitted && (
          <p className='mt-4 text-green-600 font-medium'>
            Thank you !, Your message has been sent
          </p>
        )}

        <div className='mt-10 flex justify-center gap-6 text-cyan-600 dark:text-cyan-400'>
          <a href='#' aria-label='Email'>
            <FaEnvelope className='text-2xl hover:text-cyan-800 transition' />
          </a>
          <a href='#' aria-label='LinkedIn'>
            <FaLinkedin className='text-2xl hover:text-cyan-800 transition' />
          </a>
          <a href='#' aria-label='GitHub'>
            <FaGithub className='text-2xl hover:text-cyan-800 transition' />
          </a>
        </div>
        <p>{serviceId}</p>
      </div>
    </section>
  )
}

export default Contact
