import React, { useEffect, useState } from "react"
import { links } from "../data"

const Navbar = () => {
  const [visible, setVisible] = useState(false)

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
          ? "bg-white dark:bg-slate-900 shadow-md"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className='mx-auto max-w-7xl px-8 py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8 '>
        <h2 className='text-3xl font-bold text-cyan-500'>
          Pranav <span className='text-cyan-950'>Arumugam</span>
        </h2>
        <div className='flex gap-x-3'>
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
          <button className='ml-4'>🌓</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
