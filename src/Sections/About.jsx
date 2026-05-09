import './About.css';
import cv from '../assets/Mon_CV.pdf';

const skills = {
  frontend: ['React', 'JavaScript', 'HTML & CSS', 'Node.js'],
  other: ['C++', 'SFML', 'MySQL', 'Git', 'Python'],
  learning: ['TypeScript', 'PHP'],
};

const stats = [
  { num: '1+', label: 'Years coding' },
  { num: '2+', label: 'Projects built' },
  { num: '3',  label: 'Tech stacks' },
];

const openTo = ['Internships', 'Freelance', 'Remote'];

export default function About() {
  return (
    <section className="about-section" id="About">
      <p className="about-label" data-aos="fade-up" data-aos-anchor-placement="center-bottom">Get to know me</p>
      <h2 className="about-title" data-aos="fade-up" data-aos-anchor-placement="center-bottom">About me</h2>

      <div className="stat-row" >
        {stats.map(({ num, label }) => (
          <div className="stat-card" key={label} data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <span className="stat-num">{num}</span>
            <span className="stat-lbl">{label}</span>
          </div>
        ))}
      </div>

      <div className="about-grid">

        <div className="about-card about-card--wide" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
          <span className="card-icon"><i className="bi bi-person-fill"></i></span>
          <p className="card-label">Who I am</p>
          <p className="card-body">
            CS student in my second year, building real projects while still in school.
            I focus on frontend development and game programming — I enjoy the challenge
            of making things both functional and visually sharp. Currently open to
            internships and freelance work.
          </p>
        </div>

        <div className="about-card" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
          <span className="card-icon"><i className="bi bi-code-slash"></i></span>
          <p className="card-label">Frontend</p>
          <div className="pill-group">
            {skills.frontend.map(s => (
              <span className="pill pill--primary" key={s}>{s}</span>
            ))}
          </div>
        </div>

        <div className="about-card" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
          <span className="card-icon"><i className="bi bi-cpu"></i></span>
          <p className="card-label">Other skills</p>
          <div className="pill-group">
            {skills.other.map(s => (
              <span className="pill pill--secondary" key={s}>{s}</span>
            ))}
          </div>
        </div>

        <div className="about-card" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
          <span className="card-icon"><i className="bi bi-bullseye"></i></span>
          <p className="card-label">Currently learning</p>
          <div className="pill-group">
            {skills.learning.map(s => (
              <span className="pill pill--secondary" key={s}>{s}</span>
            ))}
          </div>
        </div>

        <div className="about-card" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
          <span className="card-icon"><i className="bi bi-briefcase-fill"></i></span>
          <p className="card-label">Open to</p>
          <div className="pill-group">
            {openTo.map(s => (
              <span className="pill pill--primary" key={s}>{s}</span>
            ))}
          </div>
        </div>

      </div>

      <div className="about-cta" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <span className="available-badge">
          <span className="available-dot"></span>
          Available for work
        </span>
        <a className="btn-primary" href={cv} download="Yassir_Saoui_Cv.pdf">
          <i className="bi bi-download"></i> Download CV
        </a>
        <a className="btn-outline" href="#Contacts">
          <i className="bi bi-envelope-fill"></i> Contact me
        </a>
      </div>
    </section>
  );
}
