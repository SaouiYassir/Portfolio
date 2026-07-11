import Hero from './Sections/Hero/Hero';
import StackStrip from './Sections/StackStrip/StackStrip';
import Projects from '../Projects/Projects';
import Process from './Sections/Process/Process';
import Education from './Sections/Education/Education';

function Home() {
    return(
        <>
            <Hero />
            <StackStrip />
            <Education />
            <Projects page={false} />
            <Process />
        </>
    );
}

export default Home