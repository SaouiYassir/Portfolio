import Hero from './Sections/Hero/Hero';
import StackStrip from './Sections/StackStrip/StackStrip';
import FeaturedProjects from '../../Components/FeaturedProjects/FeaturedProjects';
import Process from './Sections/Process/Process';
import Education from './Sections/Education/Education';

function Home() {
    return(
        <>
            <Hero />
            <StackStrip />
            <Education />
            <FeaturedProjects />
            <Process />
        </>
    );
}

export default Home