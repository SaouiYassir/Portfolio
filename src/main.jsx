import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css'
import Header from './Header.jsx'
import About from './About.jsx'
import Projects from './Projects.jsx'
import Langages from './Langages.jsx'
import Contacts from './Contacts.jsx'
import ContactForm from './ContactForm.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <About />
    <Projects />
    <Langages />
    <Contacts />
    <ContactForm />
  </StrictMode>,
)
