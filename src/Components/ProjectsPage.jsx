import React from "react"
import SectionHeading from "../Components/SectionHeading"
import ProjectCard from "../Components/ProjectCard"
import { projects } from "../data"

const ProjectsPage = () => {
  return (
    <section className='min-h-screen dark:bg-slate-900 pt-24 pb-20 px-6'>
      <SectionHeading text={"Projects"} />

      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8'>
        {projects.map((project, index) => (
          <ProjectCard key={project.id || index} {...project} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsPage
