import FeaturedProjects from "./FeaturedProjects/FeaturedProjects"
import ProjectsSection from "./ProjectsSection/ProjectsSection"

function Projects({ page }) {
    if (page === false) {
        return (
            <FeaturedProjects />
        )
    }

    return (
        <ProjectsSection />
    )
}

export default Projects