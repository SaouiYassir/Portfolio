// ServicesPage.jsx
import FAQAccordion from './Sections/FAQAccordion/FAQAccordion'
import ServiceList from './Sections/ServicesList/ServiceList'
import ServicesCTA from './Sections/ServicesCTA/ServicesCTA'
import './Services.css'

function Services() {
  return (
    <>
      <section className="services-hero">
        <p className="section-eyebrow">Services</p>
        <h1>What I can build for you</h1>
        <p className="services-hero-text">
          Frontend development for businesses and individuals who need a site
          that works — fast, clean, and built to actually convert visitors
          into customers.
        </p>
      </section>

      <ServiceList />
      <FAQAccordion />
      <ServicesCTA />
    </>
  )
}

export default Services