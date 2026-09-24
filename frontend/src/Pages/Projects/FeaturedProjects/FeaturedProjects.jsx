import { Link } from 'react-router-dom'
import ProjectGrid from '../../../Components/ProjectGrid/ProjectGrid'
import { getFeaturedProjects } from '../../../Data/Projects'
import './FeaturedProjects.css'

function FeaturedProjects() {
  const featured = getFeaturedProjects(3)

  return (
    <section className="featured-projects">
      <div className="section-head">
        <p className="section-eyebrow">Selected work</p>
        <h2>Projects that shipped, not just prototypes</h2>
      </div>

      <ProjectGrid projects={featured} />

      <Link to="/projects" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })} className="view-all-link">
        View all projects <i className="bi bi-arrow-right"></i>
      </Link>
    </section>
  )
}

export default FeaturedProjects