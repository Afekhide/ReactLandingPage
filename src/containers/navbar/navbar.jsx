import './navbar.css';
import {React} from 'react';
import {PropTypes} from 'prop-types'
import {CTA} from '../../components/exports';
import Logo from '../../assets/Logo.svg';


const Navbar = () => {
    return (
        <section className='block_container pdly__navbar'>
            <section className="pdly__navbar-logo">
                <img src={Logo} alt="Logo" />
            </section>
            <nav className="pdly__navbar__links">
                <ul>
                    <li><a href="#features">Products</a></li>
                    <li><a href="#managers">Customers</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#strategies">Strategies</a></li>
                </ul>

                <section className="pdly__navbar__links-logins">
                    <CTA _value='Sign In' outline={true}/>
                    <CTA _value='Sign Up'/>
                </section>
            </nav>
        </section>
    )
}


Navbar.propTypes = {
    shown: PropTypes.bool,
}

export default Navbar;