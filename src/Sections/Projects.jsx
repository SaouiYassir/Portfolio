import Card from "../Components/Card/Card.jsx";
import './Projects.css'
import pic1 from '../assets/prj1.png'
import pic2 from '../assets/prj2.png'
import pic3 from '../assets/prj3.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function Projects() {
    return (
        <section className="prj-section" id="Projects">
            <h1 className="tile-prj" data-aos="fade-up" data-aos-anchor-placement="center-bottom">Featured Projects</h1>
            <div className="cards">
                <Card
                    title= "Personal Portfolio"
                    srcImg= {pic3}
                    desc= "A modern and responsive personal portfolio built with React and Tailwind CSS, featuring a clean UI, seamless navigation, and a structured layout to showcase frontend projects and professional skills."
                    techs={['JS', 'CSS', 'React', 'Git']}
                    link_github= "https://github.com/SaouiYassir/SaouiYassir.github.io"
                    link_demo= "https://saouiyassir.github.io/"
                />
                <Card 
                    title= "LuxAuto Parts & Services"
                    srcImg= {pic1}
                    desc= "Responsive luxury car parts e-commerce website built with HTML, CSS, and JS featuring modern UI and product-focused design."
                    techs={['HTML', 'CSS', 'JS', 'Git']}
                    link_github = "https://github.com/SaouiYassir/Web_Projet"
                    link_demo= "https://saouiyassir.github.io/Web_Projet/"
                />
                <Card 
                    title= "Mini Game C++"
                    srcImg= {pic2}
                    desc= "A polished 2D mini-game built with C++ and SFML 2, featuring smooth animations, collisions, health UI, and scalable OOP architecture."
                    techs={['C++', 'OOP', 'SFML 2', 'Git']}
                    link_github= "https://github.com/SaouiYassir/miniGame_cpp"
                    link_demo= "https://github.com/SaouiYassir/miniGame_cpp"
                />
            </div>
        </section>
    );
}

export default Projects;