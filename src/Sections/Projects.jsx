import Card from "../Components/Card/Card.jsx";
import './Projects.css'
import pic1 from '../assets/prj1.png'
import pic2 from '../assets/prj2.png'

function Projects() {
    return (
        <section className="prj-section" id="Projects">
            <h1 className="tile-prj">See my works</h1>
            <div className="cards">
                <Card 
                    title= "LuxAuto Parts & Services"
                    srcImg= {pic1}
                    desc= "Static E-commerce website selling spare parts for luxury cars using HTML | CSS | JS."
                    link= "https://saouiyassir.github.io/Web_Projet/"
                />
                <Card 
                    title= "Mini Game C++"
                    srcImg= {pic2}
                    desc= "A polished 2D mini-game built with C++ and SFML 2, featuring smooth animations, collisions, health UI, and scalable OOP architecture."
                    link= "https://github.com/SaouiYassir/miniGame_cpp"
                />
            </div>
        </section>
    );
}

export default Projects;