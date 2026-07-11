// ServicesCTA.jsx
import { Link } from 'react-router-dom'
import './ServicesCTA.css'

function ServicesCTA() {
  return (
    <section className="services-cta">
      <h2>Have a project in mind?</h2>
      <p>Tell me what you need — I'll get back to you with a clear plan and quote.</p>
      <Link to="/contact" className="services-cta-btn">
        Get in touch <i className="bi bi-arrow-right"></i>
      </Link>
    </section>
  )
}

export default ServicesCTA