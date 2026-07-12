import FeaturedProjects from "./FeaturedProjects/FeaturedProjects"
import ProjectsSection from "./ProjectsSection/ProjectsSection"
import SEO from "../../Components/SEO/SEO"

function Projects({ page }) {
    if (page === false) {
        return (
            <FeaturedProjects />
        )
    }

    return (
        <>
            <SEO
                title="Projects"
                description="Selected work from Yassir Saoui — a shipped freelance car rental platform, a custom-built portfolio design system, and an open-source typewriter animation library."
                path="/projects"
            />
            <main>
                <ProjectsSection />
            </main>
        </>
    )
}

export default Projects