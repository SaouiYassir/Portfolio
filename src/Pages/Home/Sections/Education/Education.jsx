// Education.jsx
import './Education.css'

const CURSUS = [
  {
    year: '2025 — 2026',
    title: 'L2 Informatique ( DEUG )',
    place: 'Faculté des Sciences Semlalia, Marrakech',
    desc: 'Core computer science: algorithms, data structures, systems programming, and software engineering fundamentals.',
  },
  {
    year: '2024 — 2025',
    title: 'L1 Informatique',
    place: 'Faculté des Sciences Semlalia, Marrakech',
    desc: 'Foundations year — programming logic, discrete math, and first exposure to web development.',
  },
  {
    year: '2023 — 2024',
    title: 'Baccalauréat',
    place: 'Wahat Ezzaitoune 2',
    desc: 'Foundations year — programming logic, discrete math, and first exposure to web development.',
  }
]

function Education() {
  return (
    <section className="education">
      <div className="section-head">
        <p className="section-eyebrow">Education</p>
        <h2>Grounded in fundamentals, built through practice</h2>
      </div>

      <div className="education-timeline">
        {CURSUS.map(entry => (
          <div className="education-entry" key={entry.title}>
            <span className="education-year">{entry.year}</span>
            <div className="education-body">
              <h3>{entry.title}</h3>
              <p className="education-place">{entry.place}</p>
              <p>{entry.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education