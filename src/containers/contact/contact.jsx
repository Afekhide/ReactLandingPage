import {React} from 'react';
import './contact.css';
import {CTA} from '../../components/exports';


const Contact = () => {
    return (
        <section id="contact" className='block_container pdly__contact'>
            <section className="contact">
                <h3>Need A super hero?</h3>
                <p>Do you require some help for your project: Conception workshop, prototyping, marketing strategy, landing page, Ux/UI?</p>
                <CTA _value="Contact our expert"/>
            </section>
        </section>
    )
}


export default Contact;