import Hero from './Sections/Hero/Hero'
import StackStrip from './Sections/StackStrip/StackStrip'
import FeaturedProjects from '../Projects/FeaturedProjects/FeaturedProjects'
import Process from './Sections/Process/Process'
import Education from './Sections/Education/Education'
import SEO from '../../Components/SEO/SEO'

function Home() {
  return (
    <>
      <SEO
        title="Frontend Developer & CS Student"
        description="Yassir Saoui — frontend developer and computer science student in Marrakech, building fast, modern web experiences for clients and personal projects."
        path="/"
      />
      <main>
        <Hero />
        <StackStrip />
        <FeaturedProjects />
        <Process />
        <Education />
      </main>
    </>
  )
}

export default Home