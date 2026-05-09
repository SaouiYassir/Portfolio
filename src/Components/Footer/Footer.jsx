import './Footer.css'

function Footer() {
    return (
        <div className='footer-container' data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <div className='footer-links'>
                <a href="https://www.linkedin.com/in/yassir-saoui/" target='_blank'><i className="bi bi-linkedin"></i></a>
                <a href="https://github.com/SaouiYassir/" target='_blank'><i className="bi bi-github"></i></a>
                <a href="https://www.instagram.com/yassiiir_sa/" target='_blank'><i className="bi bi-instagram"></i></a>
            </div>
            <div className='footer-text'>
                © 2026 <span>SAOUI Yassir</span>
            </div>
        </div>
    );
}

export default Footer