import {React} from 'react';
import PropTypes from 'prop-types';
import './card.css';


const Card = ({data}) => {
    return (
        <section className='pdly__card'>
            <img src={data.imgUrl} alt="Card image" />
            <section className="card-info">
                <p>By <b>{data.author}</b> |</p>
                <p> {data.date}</p>
            </section>
            <h3>{data.txt}</h3>
        </section>
    )
}

Card.propTypes = {
    data: PropTypes.object
}

export default Card;