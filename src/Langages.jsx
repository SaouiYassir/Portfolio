import React from 'react';
import './Langages.css'

import c from './assets/Langages/c.png'
import cpp from './assets/Langages/cpp.png'
import git from './assets/Langages/git.png'
import html from './assets/Langages/html.png'
import css from './assets/Langages/css.png'
import jquery from './assets/Langages/jquery.png'
import js from './assets/Langages/js.png'
import mysql from './assets/Langages/mysql.png'
import nodejs from './assets/Langages/nodejs.png'
import python from './assets/Langages/python.png'
import reactjs from './assets/Langages/reactjs.png'


const Langages = () => {
    const skills = [
        { img: html, name: "HTML" },
        { img: css, name: "CSS" },
        { img: js, name: "JavaScript" },
        { img: nodejs, name: "NodeJS" },
        { img: reactjs, name: "React" },
        { img: mysql, name: "mySQL" },
        { img: git, name: "GIT" },
        { img: python, name: "Python" },
        { img: c, name: "C" },
        { img: cpp, name: "C++" }
    ];

    const scrollingSkills = [...skills, ...skills];

    return (
        <div className="logos-slider">
            <div className="logos-slide-track">
                {scrollingSkills.map((skill, index) => (
                    <div className="logo-slide" key={index}>
                        <img src={skill.img} alt={skill.name} className="tech-logo" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Langages;