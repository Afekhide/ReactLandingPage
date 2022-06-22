import {React} from 'react';
import {Feature} from '../../components/exports';
import './features.css';
import {CTA} from '../../components/exports';

const Features = () => {
    let features = [
        {
            title: 'First Click Tests',
            description: 'While most people enjoy casino gambling.'
        },
        {
            title: 'Design Surveys', 
            description: 'Sports betting, lottery and bingo playing for the fun.'
        },

        {
            title: 'Preference Tests',
            description: 'The Myspace page defines the individual.'
        },

        {
            title: 'Five Seconds Tests',
            description: 'Personal choices and the overall personality of the person. '} 
    ]

    return (
        <>
        <section id='features' className='block_container pdly__features'>
            <section className='features-heading'>
                <h4>We design tools to unveil your super power</h4>
            </section>
            <section className='features-container'>
                {features.map((feature, index) => <Feature key={index} title={feature.title} description={feature.description} />)}
            </section>
            <section className="features-cta">
                <CTA _value={'Sign Up Now'}/>
            </section>
        </section>
       
        </>
    )
}


export default Features;