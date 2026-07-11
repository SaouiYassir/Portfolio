import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Header from './Components/Header/Header.jsx'
import Home from './Pages/Home/Home.jsx'
import About from './Pages/About/About.jsx'
import Contact from './Pages/Contact/Contact.jsx'
import Projects from './Pages/Projects/Projects.jsx'
import ProjectDetail from './Pages/Projects/ProjectDetail/ProjectDetail.jsx'
import Services from './Pages/Services/Services.jsx'
import Footer from './Components/Footer/Footer.jsx'

function App() {
  return (
    <BrowserRouter>
      <Header />   
      
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/services' element={<Services />}></Route>

      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App