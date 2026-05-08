import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css'
import Header from './Components/Header/Header.jsx'
import About from './Sections/About.jsx'
import Projects from './Sections/Projects.jsx'
import Langages from './Components/Languages/Langages.jsx'
import Contacts from './Sections/Contacts.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <About />
    <Projects />
    <Langages />
    <Contacts />
  </StrictMode>,
)
