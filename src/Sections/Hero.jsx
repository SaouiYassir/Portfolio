import './Hero.css'
import profile from '../assets/profile.jpg'
import cv from '../assets/Mon_CV.pdf';
import React, { useRef } from 'react';

function Hero() {
    const imgRef = useRef(null);

    return (
        <section className='hero-section'>
            <div className='hero-first-part' data-aos="fade-right" data-aos-duration="500">
                <div className='hero-intro'>
                    <h1 className='title1-hero'>Hi, I'm Yassir</h1>
                    <h3 className='title3-hero'>Frontend Developer & CS Student</h3>
                    <p className='par-hero'>Computer science student with a strong interest in software development, game programming, and modern web technologies. Currently building projects with C++, SFML, HTML, CSS, and JavaScript while continuously improving my skills.</p>            
                </div>
                <div className='profile-part' data-aos="fade-left" data-aos-duration="1000">
                    <img src={profile} alt="" className='profile' />
                </div>            
            </div>
            <div className='ctc-part'>
                <a data-aos="fade-down" data-aos-duration="500" className='ctc-links' href="https://www.linkedin.com/in/yassir-saoui/" target='_blank'><i className="bi bi-linkedin"></i><p>Visit my LinkedIn</p></a>
                <a data-aos="fade-down" data-aos-duration="800" className='ctc-links' href="https://github.com/SaouiYassir/" target='_blank'><i className="bi bi-github"></i><p>Visit my GitHub</p></a>
                <a data-aos="fade-down" data-aos-duration="1100" className='ctc-links' href="https://www.instagram.com/yassiiir_sa/" target='_blank'><i className="bi bi-instagram"></i><p>Visit my Instagram</p></a>
                <a data-aos="fade-down" data-aos-duration="1400" className='ctc-links' href={cv} download="Yassir_Saoui_Cv.pdf"><i className="bi bi-download"></i><p>Download My CV</p></a>
            </div>
        </section>
    );
}

export default Hero;