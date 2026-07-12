import AboutHero from "./Sections/Hero/AboutHero";
import SkillsGrouped from "../../Components/SkillsGrouped/SkillsGrouped";
import Education from "../Home/Sections/Education/Education";
import SEO from "../../Components/SEO/SEO";

function About() {
    return (
        <>
            <SEO
                title="About"
                description="Computer science student at Faculté des Sciences Semlalia and freelance frontend developer — the story behind the code, and how one client project evolved from prototype to production."
                path="/about"
            />
            <main>
                <AboutHero />
                <SkillsGrouped />
                <Education />
            </main>
        </>
    );
}

export default About