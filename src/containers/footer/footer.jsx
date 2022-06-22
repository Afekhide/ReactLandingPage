import {React} from 'react';
import './footer.css';
import {CTA} from '../../components/exports';
import Logo from '../../assets/Logo.svg';

const Footer = () => {
    return (
        <section className='block_container pdly__footer'>
            <div className="footer-separator"></div>
            <section className="footer-contents">
                <section className="footer-content">
                    <img src={Logo} alt="" />
                </section>
                <section className="footer-content">
                    <h2>Quick Links</h2>
                    <ul>
                        <li>About Us</li>
                        <li>Blog</li>
                        <li>Contact</li>
                        <li>FAQ</li>
                    </ul>
                </section>
                <section className="footer-content">
                    <h2>Legal Stuff</h2>
                    <ul>
                        <li>Disclaimer</li>
                        <li>Financing</li>
                        <li>Privacy Policy</li>
                        <li>Terms Of Service</li>
                    </ul>
                </section>

                <section className="footer-content">
                    <h2>Knowing You&apos;re always on the best energy deal</h2>
                    <input type="number" placeholder='Enter Your Phone Number'/>
                    <CTA _value={'Sign Up Now'}/>
                </section>
            </section>
        </section>
    )
}


export default Footer;