// Education.jsx
import './Education.css'

const CURSUS = [
  {
    year: '2025 — 2026',
    title: 'DEUG in Computer Science — Second Year',
    place: 'Faculté des Sciences Semlalia, Marrakech',
    desc: 'Advanced coursework in algorithms, data structures, operating systems, databases, and software engineering.',
  },
  {
    year: '2024 — 2025',
    title: 'L1 Informatique',
    place: 'Faculté des Sciences Semlalia, Marrakech',
    desc: 'Built foundations in programming, discrete mathematics, computer architecture, and web development.',
  },
  {
    year: '2023 — 2024',
    title: 'Baccalauréat',
    place: 'Wahat Ezzaitoune 2',
    desc: 'Developed a strong foundation in mathematics, physics, logical reasoning, and problem-solving.',
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