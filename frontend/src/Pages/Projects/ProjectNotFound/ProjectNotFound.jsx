import { Link } from 'react-router-dom'
import SEO from '../../../Components/SEO/SEO'
import './ProjectNotFound.css'

function ProjectNotFound() {
  return (
    <>
      <SEO
        title="Project not found"
        description="The requested project could not be found."
        path="/projects/not-found"
        noIndex
      />

      <main className="project-not-found">
        <div className="project-not-found__glow project-not-found__glow--one" />
        <div className="project-not-found__glow project-not-found__glow--two" />

        <div className="project-not-found__content">
          <span className="project-not-found__code">404</span>

          <div className="project-not-found__icon" aria-hidden="true">
            <i className="bi bi-folder-x" />
          </div>

          <p className="project-not-found__eyebrow">
            Missing project
          </p>

          <h1>Project not found</h1>

          <p className="project-not-found__description">
            This project may have been removed, renamed, or the link may be
            incorrect.
          </p>

          <div className="project-not-found__actions">
            <Link to="/projects" className="project-not-found__primary">
              View all projects
              <i className="bi bi-arrow-right" aria-hidden="true" />
            </Link>

            <Link to="/" className="project-not-found__secondary">
              <i className="bi bi-house" aria-hidden="true" />
              Back home
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default ProjectNotFound