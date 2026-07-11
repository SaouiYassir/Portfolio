import { Link } from 'react-router-dom'
import { getProjectLink } from '../../Data/Projects'
import './ProjectCard.css'

function ProjectCard({ project }) {
  if (!project) {
    if (import.meta.env.DEV) {
      console.warn('ProjectCard rendered without a `project` prop.')
    }
    return null
  }

  const { title, pitch, tags = [] } = project

  return (
    <Link to={getProjectLink(project)} className="project-card">
      <div className="project-card-top">
        <h3>{title}</h3>
        <i className="bi bi-arrow-up-right"></i>
      </div>
      <p>{pitch}</p>
      <div className="project-tags">
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </Link>
  )
}

export default ProjectCard