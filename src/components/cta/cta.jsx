import {React} from 'react';
import { PropTypes } from 'prop-types';
import './cta.css';


const CTA = ({_value, outline=false}) => {
    return (
        <button className={outline? 'pdly__cta-btn outlined': 'pdly__cta-btn'}>
            {_value}
        </button>
    )
}

CTA.propTypes = {
    _value: PropTypes.string,
    _variant: PropTypes.bool,
    outline: PropTypes.bool,
}

export default CTA;