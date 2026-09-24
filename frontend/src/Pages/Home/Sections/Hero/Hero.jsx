import './Hero.css'

import CV from '../../../../../public/Mon_CV.pdf'
import pic from '../../../../../public/hero-pic.jpg'

function Hero() {
    return(
        <div className="home-container">
            <div className="hero-bg-grid"></div>
            <div className="hero-bg-glow"></div>

            <div className="hero-container">
                <div className="text-hero">
                    <p className="hero-badge">Available for freelance work</p>
                    <h1>Building fast, modern <span>web experiences</span></h1>
                    <p className="hero-subtext">
                        Computer science student and freelance frontend developer — I turn client
                        requirements into shipped, production-ready interfaces, from first wireframe
                        to deployed site.
                    </p>
                    <div className="hero-btns">
                        <a className="btn-primary" href="/projects">
                            View my work <i className="bi bi-arrow-right"></i>
                        </a>
                        <a className="btn-secondary" href="/contact">
                            Get in touch
                        </a>
                        <a className="btn-ghost" href={CV} download="Yassir_Saoui_Cv.pdf">
                            <i className="bi bi-download"></i> Resume
                        </a>
                    </div>
                </div>

                <div className="img-hero">
                    <div className="img-hero-frame">
                        <img src={pic} alt="Yassir Saoui" />
                    </div>
                    <div className="img-hero-tag">
                        <i className="bi bi-code-slash"></i> React / Vite
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero