import React from 'react';
import './Langages.css'

import c from '../../assets/techs/c.svg'
import cpp from '../../assets/techs/cpp.svg'
import git from '../../assets/techs/git.svg'
import html from '../../assets/techs/html.svg'
import css from '../../assets/techs/css.svg'
import jquery from '../../assets/techs/jquery.svg'
import js from '../../assets/techs/js.svg'
import mysql from '../../assets/techs/mysql.svg'
import nodejs from '../../assets/techs/nodejs.svg'
import python from '../../assets/techs/python.svg'
import reactjs from '../../assets/techs/reactjs.svg'


const Langages = () => {
    const skills = [
        { img: html, name: "HTML" },
        { img: css, name: "CSS" },
        { img: js, name: "JavaScript" },
        { img: nodejs, name: "NodeJS" },
        { img: jquery, name: "JQuery" },
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