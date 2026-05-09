import './Card.css'

function Card({title, srcImg, desc, techs = [], link_github, link_demo}) {
    return (
        <div className='cards-container' data-aos="zoom-in-up" data-aos-duration="800">        
            <div className='card-comp'>
                <img src={srcImg} alt={title} className='img-card' />
                <div className='card-info'>
                    <h2 className='title-card'>{title}</h2>
                    <p className='desc-card'>{desc}</p>
                    <div className="pill-group">
                        {techs.map(t => (
                        <span className="pill pill--secondary" key={t}>{t}</span>
                        ))}
                    </div>
                    <div className='card-links'>
                        <a href={link_github} target='_blank' className='link-card'>View on GitHub</a>
                        <a href={link_demo} target='_blank' className='link-card'>Live Demo</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;