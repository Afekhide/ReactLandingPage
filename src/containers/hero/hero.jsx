import {React} from 'react';
import './hero.css';
import {MdPlayArrow} from 'react-icons/md';
import {CTA} from '../../components/exports';
import HeroImg from '../../assets/header-illustration.svg'

const Hero = () => {
    return (
        <section className='block_container pdly__hero'>
            <section className="hero-copy">
                <h1 className="hero-title">The Design Thinking superpowers</h1>
                <p className='hero-subtitle'>Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.</p>
                <section className="hero-copy__cta">
                    <CTA _value='Get Started'/>
                    <button className='watch_video_button'>
                        <MdPlayArrow fill='#FF9900' fontSize='0.8rem'/>
                        <span>Watch Video</span>
                    </button>
                </section>
            </section>
            <section className="hero-image">
                <img src={HeroImg} alt="Hero illustration" />
            </section>
            
        </section>
    )
}


export default Hero;