import React, { useEffect, useState } from "react"
import { links } from "../data"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"

const Navbar = () => {
  const [visible, setVisible] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const toggleNavbar = () => {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener("scroll", toggleNavbar)
    return () => window.removeEventListener("scroll", toggleNavbar)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        visible
          ? " bg-white text-black dark:bg-slate-900 dark:text-white transition-colors duration-300 "
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className='mx-auto max-w-7xl px-8 py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8 '>
        <h2 className='text-3xl font-bold text-white'>
          Pranav <span className='text-cyan-400'>Arumugam</span>
        </h2>
        <div className='hidden  md:flex gap-8 items-center text-slate-800 dark:text-white'>
          {links.map((link) => {
            const { id, href, text } = link
            return (
              <a
                key={id}
                href={href}
                className='capitalize text-lg tracking-wide hover:text-cyan-600 duration-300'
              >
                {text}
              </a>
            )
          })}
        </div>
        <div className='md:hidden flex items-center mt-2'>
          <button
            onClick={() => {
              setMenuOpen(!menuOpen)
            }}
            className='text-2xl text-slate-800 dark:text-white'
          >
            {menuOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
        </div>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className='md:hidden px-6 pb-4 flex flex-col gap-4 text-slate-800 dark:text-white'
          >
            {links.map((link) => {
              const { id, href, text } = link
              return (
                <a
                  key={id}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className='capitalize text-lg hover:text-cyan-600 transition'
                >
                  {text}
                </a>
              )
            })}
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
