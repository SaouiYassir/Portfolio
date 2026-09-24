// ServiceList.jsx
import './ServiceList.css'

const SERVICES = [
  {
    icon: 'bi-window-stack',
    title: 'Custom website builds',
    desc: 'A full site built from scratch for your business — homepage, service pages, contact flow, mobile-optimized from day one.',
  },
  {
    icon: 'bi-calendar-check',
    title: 'Booking & catalogue systems',
    desc: 'Product or service catalogues with filtering, plus WhatsApp or form-based booking flows — no backend required.',
  },
  {
    icon: 'bi-palette',
    title: 'Design system & UI refresh',
    desc: 'Take an existing site and give it a coherent visual identity — consistent colors, typography, and components.',
  },
  {
    icon: 'bi-speedometer2',
    title: 'Performance & SEO setup',
    desc: 'Per-page metadata, sitemap, and structured data so your site is actually findable, not just online.',
  },
  {
    icon: 'bi-tools',
    title: 'Ongoing maintenance',
    desc: 'Bug fixes, content updates, and small feature additions for sites already in production.',
  },
]

function ServiceList() {
  return (
    <section className="service-list">
      <div className="service-list-grid">
        {SERVICES.map(service => (
          <div className="service-item" key={service.title}>
            <i className={`bi ${service.icon}`}></i>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ServiceList