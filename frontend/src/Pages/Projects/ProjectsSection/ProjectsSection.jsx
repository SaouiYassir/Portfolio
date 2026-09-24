import ProjectGrid from '../../../Components/ProjectGrid/ProjectGrid'
import { PROJECTS } from '../../../Data/Projects'
import './ProjectsSection.css'

function ProjectsSection() {
  return (
    <section className="projects-page">
      <div className="section-head">
        <p className="section-eyebrow">Selected work</p>
        <h1>Projects that shipped, not just prototypes</h1>
        <p className="projects-stat">3 shipped projects · 2 freelance client · 0 backend costs</p>
      </div>

      <ProjectGrid projects={PROJECTS} />
    </section>
  )
}

export default ProjectsSection