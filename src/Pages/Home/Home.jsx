import './Home.css'

import CV from '../../../public/Mon_CV.pdf'
import pic from '../../../public/hero-pic.jpg'

function Home() {
    return(
        <div className="home-container">
            <div className="hero-container">
                <div className="text-hero">
                    <p>Available for freelance work</p>
                    <h1>Hi, I'm Yassir</h1>
                    <p>Computer science student with a strong interest in software development and modern web technologies. Currently building projects with HTML, CSS, JavaScript and React.</p>
                    <div className="hero-btns">
                        <a className='ctc-links' href={CV} download="Yassir_Saoui_Cv.pdf"><p>Download My CV</p></a>
                        <a href="https://linkedin.com/in/yassir-saoui/" target='_blanc'>LinkedIn</a>
                        <a href="https://github.com/SaouiYassir/"  target='_blanc'>GitHub</a>
                    </div>
                </div>
                <div className="img-hero">
                    <img src={pic} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Home