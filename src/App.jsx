import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Loader from './Components/Loader/Loader.jsx'
import Header from './Components/Header/Header.jsx'
const Home = lazy(() => import('./Pages/Home/Home'))
const About = lazy(() => import('./Pages/About/About')) 
const Projects = lazy(() => import('./Pages/Projects/Projects'))
const Services = lazy(() => import('./Pages/Services/Services')) 
const Contact = lazy(() => import('./Pages/Contact/Contact'))
import ProjectDetail from './Pages/Projects/ProjectDetail/ProjectDetail.jsx'
import Footer from './Components/Footer/Footer.jsx'
import NotFound from './Pages/NotFound/NotFound.jsx'

function App() {
  return (
    <BrowserRouter>
      <Loader />
      <Header />   
      
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/services' element={<Services />}></Route>

          <Route path="*" element={<NotFound />} />

        </Routes>
      </Suspense>

      <Footer />
    </BrowserRouter>
  )
}

export default App