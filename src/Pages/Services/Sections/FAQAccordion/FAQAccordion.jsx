// FAQAccordion.jsx
import { useState } from 'react'
import './FAQAccordion.css'

const FAQS = [
  {
    q: 'How much does a project cost?',
    a: 'It depends on scope — a simple site is different from a full booking system. Message me with your requirements and I\'ll send a custom quote, usually within a day or two.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'A standard site takes 1-3 weeks from kickoff to launch, depending on content readiness and revision rounds. I\'ll give you a specific timeline after our first call.',
  },
  {
    q: 'Do you work with clients outside Morocco?',
    a: 'Yes — all my tools and workflow (Git, Vercel, async communication) work fine remotely. Most of my communication happens over WhatsApp or email regardless of location.',
  },
  {
    q: 'Do I need to provide content and images?',
    a: 'Ideally yes, since you know your business best — but I can help source stock photography or write placeholder copy to keep things moving if you\'re not ready.',
  },
  {
    q: 'What happens after the site launches?',
    a: 'A short window of post-launch fixes is included in every project. After that, ongoing maintenance is available separately if you need it.',
  },
]

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => {
    setOpenIndex(prev => (prev === i ? null : i))
  }

  return (
    <section className="faq-section">
      <div className="section-head">
        <p className="section-eyebrow">FAQ</p>
        <h2>Questions clients usually ask</h2>
      </div>

      <div className="faq-list">
        {FAQS.map((item, i) => (
          <div className={`faq-item ${openIndex === i ? 'faq-item--open' : ''}`} key={item.q}>
            <button
              className="faq-question"
              onClick={() => toggle(i)}
              aria-expanded={openIndex === i}
            >
              {item.q}
              <i className="bi bi-chevron-down"></i>
            </button>
            <div className="faq-answer">
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQAccordion