import AboutHero from "./Sections/Hero/AboutHero";
import SkillsGrouped from "../../Components/SkillsGrouped/SkillsGrouped";
import Education from "../Home/Sections/Education/Education";

function About() {
    return(
        <>
            <AboutHero />
            <SkillsGrouped />
            <Education />
        </>
    );
}

export default About