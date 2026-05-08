import './Card.css'

function Card({title, srcImg, desc, link}) {
    return (
        <div className='card-comp'>
            <img src={srcImg} alt={title} className='img-card' />
            <div className='card-info'>
                <h2 className='title-card'>{title}</h2>
                <p className='desc-card'>{desc}</p>
                <a href={link} target='_blank' className='link-card'>About the Project</a>
            </div>
        </div>
    );
}

export default Card;