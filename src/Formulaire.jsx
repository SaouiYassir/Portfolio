import './Formulaire.css'
import profile from './assets/profile.jpg'
import cv from './assets/Mon_CV.pdf';



import React, { useEffect, useRef } from 'react';
import $ from 'jquery';



function Formulaire() {
    const imgRef = useRef(null);

    useEffect(() => {
        const $el = $(imgRef.current);

        function pulse() {
            $({ deg: 1 }).animate({ deg: 1.2 }, {
                duration: 2000,
                step: function (now) {
                    $el.css({ transform: 'scale(' + now + ')' });
                },
                complete: function () {
                    $({ deg: 1.2 }).animate({ deg: 1 }, {
                        duration: 2000,
                        step: function (now) {
                            $el.css({ transform: 'scale(' + now + ')' });
                        },
                        complete: pulse 
                    });
                }
            });
        }

        pulse();

        return () => $el.stop(true, true);
    }, []);


    return (
        <div className='from-cont'>
            <div className='profile-part'>
                <img ref={imgRef} src={profile} alt="" srcset="" className='profile' />
            </div>
            <div className='ctc-part'>
                <a className='ctc-links' href="https://www.linkedin.com/in/yassir-saoui/" target='_blank'><i className="bi bi-linkedin"></i>  Visit my LinkedIn</a>
                <a className='ctc-links' href="https://github.com/SaouiYassir/" target='_blank'><i className="bi bi-github"></i>  Visit my GitHub</a>
                <a className='ctc-links' href="https://www.instagram.com/yassiiir_sa/" target='_blank'><i className="bi bi-instagram"></i>  Visit my Instagram</a>
                <a className='ctc-links' href={cv} download="Yassir_Saoui_Cv.pdf"><i class="bi bi-download"></i>  Download My CV</a>
            </div>
        </div>
    );
}

export default Formulaire;