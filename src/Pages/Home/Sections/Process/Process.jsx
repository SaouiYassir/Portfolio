// Process.jsx
import './Process.css'

const STEPS = [
  { number: '01', title: 'Discovery call', desc: 'We talk through your goals, audience, and what "done" looks like before any code is written.' },
  { number: '02', title: 'Design & build', desc: 'I build in stages, sharing a live preview link so you can see progress, not just a final reveal.' },
  { number: '03', title: 'Ship & support', desc: 'Deployed, tested across devices, and handed off with a short window of post-launch fixes included.' },
]

function Process() {
  return (
    <section className="process">
      <div className="section-head">
        <p className="section-eyebrow">How I work</p>
        <h2>A process built for clarity, not surprises</h2>
      </div>

      <div className="process-grid">
        {STEPS.map(step => (
          <div className="process-step" key={step.number}>
            <span className="process-number">{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Process