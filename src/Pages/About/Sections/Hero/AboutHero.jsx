// AboutHero.jsx
import pic from '../../../../../public/hero-pic.jpg'
import './AboutHero.css'

function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero-img">
        <img src={pic} alt="Yassir Saoui" />
      </div>
      <div className="about-hero-text">
        <p className="section-eyebrow">About me</p>
        <h1>Frontend developer, CS student, and someone who likes finishing what he starts.</h1>
        <p>
          I started building web interfaces before I formally studied computer science —
          the two paths converged fast. Today I split my time between coursework at
          Faculté des Sciences Semlalia and freelance frontend work, shipping real
          projects for real clients rather than just class assignments.
        </p>
      </div>
    </section>
  )
}

export default AboutHero