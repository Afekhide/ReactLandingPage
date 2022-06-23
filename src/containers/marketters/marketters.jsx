import {React} from 'react';
import './marketters.css';
import Illustration from '../../assets/man-board.svg';

const Marketters = () => {
    console.log(Illustration)
    return (
        <section className='block_container pdly__marketters'>
            <section className="marketter-copy-container">
                <section className="top-section">
                    <h5>Optimizations for</h5>
                    <h3>Marketters</h3>
                    <p>Few would argue that, despite the advancements of feminism over the past three decades, women still face a double standard when it comes to their behavior.  </p>
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


export default Marketters;