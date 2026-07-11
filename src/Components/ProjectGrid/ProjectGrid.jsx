import ProjectCard from '../ProjectCard/ProjectCard'
import './ProjectGrid.css'

function ProjectGrid({ projects = [] }) {
  if (projects.length === 0) return null

  return (
    <div className="project-grid" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  )
}

export default ProjectGrid