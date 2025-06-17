import React from "react"
import { FaGithubSquare, FaLinkedinIn } from "react-icons/fa"
import heroimg from "../assets/pfp.jpg"
const Hero = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-cyan-100 py-24 '>
      <div className='align-elements grid md:grid-cols-2 items-center gap-8'>
        <article>
          <h1 className='text-6xl capitalize font-bold tracking-wider'>
            hi , i'm pranav Arumugam
          </h1>
          <p className='mt-4 text-3xl capitalize tracking-wide'>
            front-end developer
          </p>
          <p className='mt-2 text-lg tracking-wide'>
            I design and code beautifully simple things, and I love what I do.
          </p>
          <div className='flex items-center justify-center gap-x-4 mt-4'>
            <a href='#'>
              <FaGithubSquare className='h-8 w-8 text-cyan-600' />
            </a>
            <a href='#'>
              <FaLinkedinIn className='h-8 w-8 text-cyan-600' />
            </a>
          </div>
        </article>
        <article className='hidden md:block'>
          <div
            className="mx-auto relative w-[300px] h-[300px] rounded-[50%]
                  before:content-[''] before:w-full before:h-full 
                  before:absolute before:top-[-0.25rem] before:right-[-0.5rem] 
                  before:rounded-[50%] before:bg-cyan-600"
          >
            <img
              src={heroimg}
              alt=''
              className='w-full h-full block object-cover rounded-[50%] relative'
            />
          </div>
        </article>
      </div>
    </div>
  )
}

export default Hero
