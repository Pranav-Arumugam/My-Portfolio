import React, { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { id: 1, to: "/", text: "Home" },
  { id: 2, to: "/about", text: "About" },
  { id: 3, to: "/projects", text: "Projects" },
  { id: 4, to: "/contact", text: "Contact" },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === "/"

  useEffect(() => {
    // Setting the initial scroll state when route changes
    setScrolled(window.scrollY > 100)
    setMenuOpen(false)

    const handleScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [location.pathname])

  // making the navbar scroll only in the home page.
  const visible = isHome ? scrolled : true

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        visible
          ? "bg-white dark:bg-slate-900 shadow-md opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className='mx-auto max-w-7xl px-8 py-4 flex flex-row items-center justify-between'>
        <Link to='/'>
          <h2 className='text-2xl font-bold text-slate-900 dark:text-white'>
            Pranav <span className='text-cyan-500'>Arumugam</span>
          </h2>
        </Link>

        {/* Desktop links */}
        <div className='hidden md:flex gap-8 items-center'>
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.to}
              className={`capitalize text-lg tracking-wide transition duration-300 ${
                location.pathname === link.to
                  ? "text-cyan-500 font-semibold"
                  : "text-slate-700 dark:text-white hover:text-cyan-500"
              }`}
            >
              {link.text}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <div className='md:hidden'>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className='text-2xl text-slate-800 dark:text-white'
          >
            {menuOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
        </div>
      </div>

      {/* Mobile links */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className='md:hidden px-8 pb-4 flex flex-col gap-4 bg-white dark:bg-slate-900'
          >
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={`capitalize text-lg transition ${
                  location.pathname === link.to
                    ? "text-cyan-500 font-semibold"
                    : "text-slate-800 dark:text-white hover:text-cyan-500"
                }`}
              >
                {link.text}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
