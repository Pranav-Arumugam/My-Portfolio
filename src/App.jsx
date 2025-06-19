import React from "react"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Projects from "./Components/Projects"
import Skills from "./Components/Skills"
import Journey from "./Components/Journey"
import Aboutus from "./Aboutus"
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Aboutus></Aboutus>
      <Projects></Projects>
      <Skills></Skills>
      <Journey></Journey>
    </div>
  )
}

export default App
