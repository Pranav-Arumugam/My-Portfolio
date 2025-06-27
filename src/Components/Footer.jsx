import React from "react"
import { links } from "../data"
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className='bg-slate-900 text-white py-8 px-6'>
      <div className='max-w-4xl mx-auto flex flex-col items-center gap-4'>
        <div className='flex gap-6 text-sm'>
          {links.map((link) => {
            const { id, href, text } = link
            return (
              <a
                key={id}
                href={href}
                className='capitalize hover:text-cyan-400 transition-colors duration-300'
              >
                {text}
              </a>
            )
          })}
        </div>
      </div>
      <div className='flex gap-5 text-xl mt-4 items-center justify-center'>
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
      <div className='max-w-4xl mx-auto text-center space-y-2'>
        <p className='text-lg  mt-4 font-medium '>
          Thanks for visting my website!. Feel free to reach out. I'm always
          open to exciting opportunities and conversations.
        </p>
        <p className='text-xs text-gray-400 mt-2 mx-auto'>
          &copy; {new Date().getFullYear()} Pranav Arumugam. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
