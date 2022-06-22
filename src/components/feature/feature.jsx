import {React} from 'react';
import './feature.css';
import {PropTypes} from 'prop-types';
import {MdStars} from 'react-icons/md';


const Feature = ({title, description}) => {

    return (
        <section className='pdly__feature'>
            <section className="feature-icon">
                <p className='icon-container'>
                    <MdStars fill='#fff' color='white' size="1rem"/>
                </p>
            </section>
            <h6 className='title'>{title}</h6>
            <p className='description'>{description}</p>
        </section>
    )
}


Feature.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
}

export default Feature;


