import { useParams, Link } from 'react-router-dom'
import { getProjectBySlug, getNextProject } from '../../../Data/Projects'
import './ProjectDetail.css'

function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) {
    return (
      <section className="project-detail-notfound">
        <h1>Project not found</h1>
        <Link to="/projects">Back to all projects</Link>
      </section>
    )
  }

  const nextProject = getNextProject(project.slug)

  return (
    <article className="project-detail">
      <div className="project-detail-header">
        <Link to="/projects" className="back-link">
          <i className="bi bi-arrow-left"></i> All projects
        </Link>

        <h1>{project.title}</h1>
        <p className="project-detail-pitch">{project.pitch}</p>

        <div className="project-detail-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <div className="project-detail-links">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-primary">
              Visit live site <i className="bi bi-box-arrow-up-right"></i>
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noreferrer" className="btn-secondary">
              <i className="bi bi-github"></i> View code
            </a>
          )}
        </div>
      </div>

      <section className="project-detail-section">
        <p className="section-eyebrow">The brief</p>
        <p className="project-detail-brief">{project.brief}</p>
      </section>

      <section className="project-detail-section">
        <p className="section-eyebrow">The build</p>
        <div className="build-blocks">
          {project.build.map((item) => (
            <div className="build-block" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {project.gallery.length > 0 && (
        <section className="project-detail-section">
          <p className="section-eyebrow">Gallery</p>
          <div className="project-gallery">
            {project.gallery.map((img, i) => (
              <img src={img} alt={`${project.title} screenshot ${i + 1}`} key={img} />
            ))}
          </div>
        </section>
      )}

      <section className="project-detail-section">
        <p className="section-eyebrow">Outcome</p>
        <p className="project-detail-outcome">{project.outcome}</p>
      </section>

      <footer className="project-detail-footer">
        <Link to={`/projects/${nextProject.slug}`} className="next-project-link" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>
          <span>Next project</span>
          <strong>{nextProject.title} <i className="bi bi-arrow-right"></i></strong>
        </Link>
      </footer>
    </article>
  )
}

export default ProjectDetail