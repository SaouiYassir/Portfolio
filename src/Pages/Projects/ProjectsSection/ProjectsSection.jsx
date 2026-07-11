// ProjectsSection.jsx — full grid
import ProjectCard from '../../../Components/ProjectCard/ProjectCard'
import { PROJECTS } from '../../../Data/Projects'
import './ProjectsSection.css'

function ProjectsSection() {
  return (
    <section className="projects-page">
      <div className="section-head">
        <p className="section-eyebrow">Selected work</p>
        <h1>Projects that shipped, not just prototypes</h1>
        <p className="projects-stat">3 shipped projects · 1 freelance client · 0 backend costs</p>
      </div>

      <div className="projects-page-grid">
        {PROJECTS.map(project => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection