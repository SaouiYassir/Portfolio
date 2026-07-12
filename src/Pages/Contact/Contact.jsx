import './Contact.css'

import Form from '../../Components/Form/Form.jsx'
import SEO from '../../Components/SEO/SEO.jsx';

function Contact() {
    return (
        <>
            <SEO
                title="Contact"
                description="Get in touch with Yassir Saoui for freelance frontend development work — available for new projects, based in Marrakech, working with clients remotely."
                path="/contact"
            />
            <main>
                <div className='contact-page'>
                    <div className="contact-hero">
                        <p className="hero-badge">Available for freelance work</p>

                        <h1>Let's build something together</h1>

                        <p className="contact-hero-text">
                            Have a project, a question, or just want to talk through an idea?
                            WhatsApp is the fastest way to reach me — I usually reply within
                            a few hours.
                        </p>

                        <a
                            href="https://wa.me/212601109965"
                            target="_blank"
                            rel="noreferrer"
                            className="whatsapp-btn"
                        >
                            <i className="bi bi-whatsapp"></i>
                            Message me on WhatsApp
                        </a>

                        <div className="contact-meta">
                            <p><i className="bi bi-clock"></i> Usually replies within 24 hours</p>
                            <p><i className="bi bi-geo-alt"></i> Based in Marrakech — working with clients remotely</p>
                        </div>
                    </div >
                    <Form />
                </div>        
            </main>
        </>
    );
}

export default Contact