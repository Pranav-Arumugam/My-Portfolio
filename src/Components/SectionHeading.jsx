import React from "react"

const SectionHeading = ({ text }) => {
  return (
    <div className='mx-auto mb-5 p-6 text-3xl font-bold font-heading text-center capitalize text-slate-900 md:text-4xl lg:text-5xl  dark:text-white'>
      {text}
    </div>
  )
}

export default SectionHeading
