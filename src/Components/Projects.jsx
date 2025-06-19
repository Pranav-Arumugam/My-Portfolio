import React from "react"
import SectionHeading from "./SectionHeading"
import { projects } from "../data"
import ProjectCard from "./ProjectCard"

const Projects = () => {
  return (
    <section className='bg-white min-h-screen'>
      <SectionHeading text={"projects"}></SectionHeading>
      <div className='mt-8 grid grid-cols-1 md:grid-cols-1 gap-10'>
        {projects.map((project, index) => {
          return <ProjectCard key={index} {...project}></ProjectCard>
        })}
      </div>
    </section>
  )
}

export default Projects
