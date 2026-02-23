import React from "react"
import Navbar from "./Components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Components/Home"
import ProjectsPage from "./Components/ProjectsPage"
import ProjectDetail from "./Components/ProjectDetail"
import AboutPage from "./Components/AboutPage"
import ContactPage from "./Components/ContactPage"
import Footer from "./Components/Footer"
const App = () => {
  return (
    <BrowserRouter>
      <div className='font-poppins overflow-x-hidden'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/projects/:id' element={<ProjectDetail />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
