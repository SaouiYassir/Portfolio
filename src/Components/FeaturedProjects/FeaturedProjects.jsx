// FeaturedProjects.jsx
import { Link } from 'react-router-dom'
import './FeaturedProjects.css'

const FEATURED = [
  {
    title: 'Casablanca Location',
    pitch: 'A full car-rental platform shipped for a Moroccan agency — booking flow, live catalogue, zero backend cost.',
    tags: ['React', 'WhatsApp booking', 'EmailJS'],
    link: '/projects/casablanca-location',
  },
  {
    title: 'Personal portfolio',
    pitch: 'This site — designed and built from scratch with a custom theming system and scroll-driven animations.',
    tags: ['React', 'Vite', 'Design system'],
    link: '/projects/portfolio',
  },
  {
    title: 'TOA — typewriter library',
    pitch: 'A lightweight, scroll-triggered typewriter effect built as a standalone, reusable JS utility.',
    tags: ['Vanilla JS', 'Open source'],
    link: '/projects/toa',
  },
]

function FeaturedProjects() {
  return (
    <section className="featured-projects">
      <div className="section-head">
        <p className="section-eyebrow">Selected work</p>
        <h2>Projects that shipped, not just prototypes</h2>
      </div>

      <div className="projects-grid">
        {FEATURED.map(project => (
          <Link to={project.link} className="project-card" key={project.title}>
            <div className="project-card-top">
              <h3>{project.title}</h3>
              <i className="bi bi-arrow-up-right"></i>
            </div>
            <p>{project.pitch}</p>
            <div className="project-tags">
              {project.tags.map(tag => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>

      <Link to="/projects" className="view-all-link">
        View all projects <i className="bi bi-arrow-right"></i>
      </Link>
    </section>
  )
}

export default FeaturedProjects