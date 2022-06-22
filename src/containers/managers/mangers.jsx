import {React} from 'react';
import './managers.css';
import CheckBox from '../../assets/check.svg';
import Illustration from '../../assets/man-laptop.svg';

const Managers = () => {
    return (
        <section id='managers' className='block_container pdly__manager'>
            <section className="manager-copy-container">
                <section className="manager-heading">
                    <p className="subtitle">Easier Decision Making for</p>
                    <h3>Product Designers</h3>
                    <p className="descrition">
                        The Myspace page defines the individual, his or her characteristics, traits, personal choices and the overall personality of the person. 
                    </p>
                </section>
                <section className="point">
                    <img src={CheckBox} alt="" className="point-image" />
                    <p className="point-text">
                        Never worry about overpaying for your energy again. 
                    </p>
                </section>
                <section className="point">
                    <img src={CheckBox} alt="" className="point-image" />
                    <p className="point-text">
                        We will only switch you to energy companies that we trust and will treat you right
                    </p>
                </section>
                <section className="point">
                    <img src={CheckBox} alt="" className="point-image" />
                    <p className="point-text">
                        We track the markets daily and know where the savings are.
                    </p>
                </section>
            </section>
            <section className="manager-illustration-container">
                <img src={Illustration} alt="Illustration" />
            </section>
            
        </section>
    )
}


export default Managers;