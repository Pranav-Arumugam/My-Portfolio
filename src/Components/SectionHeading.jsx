import React from "react"

const SectionHeading = ({ text }) => {
  return (
    <div className='mx-auto my-5 p-6 text-3xl font-bold text-center capitalize text-slate-900 md:text-7xl dark:text-white'>
      {text}
    </div>
  )
}

export default SectionHeading
