import './Contacts.css'
import profile from './assets/profile.jpg'
import cv from './assets/Mon_CV.pdf';



import React, { useEffect, useRef } from 'react';
import $ from 'jquery';



function Contacts() {
    const imgRef = useRef(null);

    return (
        <>
            <div className='from-cont' id='Contacts'>
                <div className='profile-part'>
                    <img ref={imgRef} src={profile} alt="" className='profile' />
                </div>
                <div className='ctc-part'>
                    <a className='ctc-links' href="https://www.linkedin.com/in/yassir-saoui/" target='_blank'><i className="bi bi-linkedin"></i><p>Visit my LinkedIn</p></a>
                    <a className='ctc-links' href="https://github.com/SaouiYassir/" target='_blank'><i className="bi bi-github"></i><p>Visit my GitHub</p></a>
                    <a className='ctc-links' href="https://www.instagram.com/yassiiir_sa/" target='_blank'><i className="bi bi-instagram"></i><p>Visit my Instagram</p></a>
                    <a className='ctc-links' href={cv} download="Yassir_Saoui_Cv.pdf"><i className="bi bi-download"></i><p>Download My CV</p></a>
                </div>
            </div>
            <div className='msg'>
                <h1>Let’s build something great ...</h1>
                <div className='par-msg'>
                    <p>Always looking for new projects and interesting people.</p>
                    <p>Drop a line and let’s see what we can create together.</p>
                </div>
                <a href="mailto:yassirsaoui06@gmail.com">SAY HELLOOO !!!</a>
            </div>
        </>
    );
}

export default Contacts;