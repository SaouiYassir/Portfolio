// ProjectCard.jsx
import { Link } from 'react-router-dom'
import './ProjectCard.css'

function ProjectCard({ title, pitch, tags, link }) {
  return (
    <Link to={link} className="project-card">
      <div className="project-card-top">
        <h3>{title}</h3>
        <i className="bi bi-arrow-up-right"></i>
      </div>
      <p>{pitch}</p>
      <div className="project-tags">
        {tags.map(tag => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </Link>
  )
}

export default ProjectCard