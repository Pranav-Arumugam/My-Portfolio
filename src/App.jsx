import React from "react"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Projects from "./Components/Projects"
import Skills from "./Components/Skills"
import Journey from "./Components/Journey"
import Aboutus from "./Aboutus"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
const App = () => {
  return (
    <div className='font-poppins overflow-x-hidden'>
      <Navbar></Navbar>
      <Hero></Hero>
      <Aboutus></Aboutus>
      <Projects></Projects>
      <Skills></Skills>
      <Journey></Journey>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App
