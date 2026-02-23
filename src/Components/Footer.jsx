import React from "react"
import { Link } from "react-router-dom"
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa"

const navLinks = [
  { id: 1, to: "/", text: "Home" },
  { id: 2, to: "/about", text: "About" },
  { id: 3, to: "/projects", text: "Projects" },
  { id: 4, to: "/contact", text: "Contact" },
]

const Footer = () => {
  const gitLink = import.meta.env.VITE_EMAILJS_GIT_LINK
  const linkedin = import.meta.env.VITE_EMAILJS_LINKEDIN_LINK

  return (
    <footer className='bg-slate-900 text-white py-12 px-6'>
      <div className='max-w-4xl mx-auto flex flex-col items-center gap-6'>
        {/* Logo */}
        <Link to='/'>
          <h2 className='text-2xl font-bold text-white'>
            Pranav <span className='text-cyan-400'>Arumugam</span>
          </h2>
        </Link>

        {/* Nav links */}
        <div className='flex flex-wrap justify-center gap-6 text-sm text-slate-400'>
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.to}
              className='hover:text-cyan-400 transition-colors duration-300 capitalize'
            >
              {link.text}
            </Link>
          ))}
        </div>

        {/* Divider */}
        <div className='w-full h-px bg-slate-700' />

        {/* Social icons */}
        <div className='flex gap-6'>
          <a
            href='mailto:pranavcr28@gmail.com'
            aria-label='Email'
            className='text-slate-400 hover:text-cyan-400 transition text-2xl'
          >
            <FaEnvelope />
          </a>
          <a
            href={linkedin}
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'
            className='text-slate-400 hover:text-cyan-400 transition text-2xl'
          >
            <FaLinkedin />
          </a>
          <a
            href={gitLink}
            target='_blank'
            rel='noopener noreferrer'
            aria-label='GitHub'
            className='text-slate-400 hover:text-cyan-400 transition text-2xl'
          >
            <FaGithub />
          </a>
        </div>

        {/* Tagline */}
        <p className='text-slate-400 text-sm text-center max-w-md'>
          Thanks for visiting my website. Feel free to reach out — I'm always
          open to exciting opportunities and conversations.
        </p>

        {/* Copyright */}
        <p className='text-xs text-slate-600'>
          &copy; {new Date().getFullYear()} Pranav Arumugam. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
