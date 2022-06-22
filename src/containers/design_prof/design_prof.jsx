import {React} from 'react';
import './design_prof.css';
import Illustration from '../../assets/man-1.svg';


const DesignProf = () => {
    return (
        <section className='block_container pdly__design_prof'>
            <section className="prof-copy-container">
                <section className="top-section">
                    <h5>Effortless Validations for</h5>
                    <h3>Desgin Professionals</h3>
                    <p>The Myspace page defines the individual, his or her characteristics, traits, personal choices and the overall personality of the person. </p>
                </section>
                <section className="points">
                    <section className="point">
                        <h3 className="point-header">Accessory Makers</h3>
                        <p className="point-description">
                            While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun
                        </p>
                    </section>
                    <section className="point">
                        <h3 className="point-header">Alterationists</h3>
                        <p className="point-description">
                            If you are looking for a new way to promote your business that won’t cost you more money, 
                        </p>
                    </section>
                    <section className="point">
                        <h3 className="point-header">Custom Design designers</h3>
                        <p className="point-description">
                            If you are looking for a new way to promote your business that won’t cost you more money, 
                        </p>
                    </section>
                </section>
            </section>
            <section className="prof-image-container">
                <img src={Illustration} alt="Illustration" />
            </section>
        </section>
    )
}


export default DesignProf;