import './Contacts.css';
import ContactForm from '../Components/Form/ContactForm.jsx';
import Typewriter from 'typewriter-effect';
import { useEffect, useRef, useState } from 'react';

function Contacts() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [key, setKey] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {

                if (entry.isIntersecting) {
                    setIsVisible(true);

                    // restart animation every time section appears
                    setKey(prev => prev + 1);
                }
            },
            {
                threshold: 0.5,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <div className='msg' id='Contacts' ref={sectionRef}>

                <h1
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                >
                    {isVisible && (
                        <Typewriter
                            key={key}
                            options={{
                                strings: ['Let’s build something great ...'],
                                autoStart: true,
                                loop: false,
                                deleteSpeed: Infinity, // never delete
                                delay: 50,
                                cursor: '|',
                            }}
                        />
                    )}
                </h1>

                <div
                    className='par-msg'
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                >
                    <p>
                        Always looking for new projects and interesting people.
                    </p>

                    <p>
                        Drop a line and let’s see what we can create together.
                    </p>
                </div>

                <a
                    href="#ContactForm"
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                >
                    Get in Touch
                </a>
            </div>

            <ContactForm />
        </>
    );
}

export default Contacts;