import './Card.css'

function Card({title, srcImg, desc, link_github, link_demo}) {
    return (
        <div className='card-comp'>
            <img src={srcImg} alt={title} className='img-card' />
            <div className='card-info'>
                <h2 className='title-card'>{title}</h2>
                <p className='desc-card'>{desc}</p>
                <div className='card-links'>
                    <a href={link_github} target='_blank' className='link-card'>View on GitHub</a>
                    <a href={link_demo} target='_blank' className='link-card'>Live Demo</a>
                </div>
            </div>
        </div>
    );
}

export default Card;