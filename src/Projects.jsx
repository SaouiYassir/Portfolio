import Card from "./Card";

function Projects() {
    return (
        <section>
            <h1>See my works</h1>
            <Card 
                title= "Title"
                srcImg= "https://picsum.photos/300/200"
                desc= "Description"
                link= "https://instagram.com"
            />
        </section>
    );
}

export default Projects;