import Card from "../Components/Card/Card.jsx";
import './Projects.css'
import pic1 from '../assets/prj1.png'
import pic2 from '../assets/prj2.png'

function Projects() {
    return (
        <section className="prj-section" id="Projects">
            <h1 className="tile-prj">Featured Projects</h1>
            <div className="cards">
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
                    techs={['C++', 'POO', 'SFML 2', 'Git']}
                    link_github= "https://github.com/SaouiYassir/miniGame_cpp"
                    link_demo= "https://github.com/SaouiYassir/miniGame_cpp"
                />
            </div>
        </section>
    );
}

export default Projects;