// FeaturedProjects.jsx
import { Link } from 'react-router-dom'
import { PROJECTS } from '../../../Data/Projects'
import './FeaturedProjects.css'

import ProjectCard from '../../../Components/ProjectCard/ProjectCard'

function FeaturedProjects() {
  const featured = PROJECTS.slice(0, 3)

  return (
    <section className="featured-projects">
      <div className="section-head">
        <p className="section-eyebrow">Selected work</p>
        <h2>Projects that shipped, not just prototypes</h2>
      </div>

      <div className="projects-grid">
        {featured.map(project => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

      <Link to="/projects" className="view-all-link" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>
        View all projects <i className="bi bi-arrow-right"></i>
      </Link>
    </section>
  )
}

export default FeaturedProjects