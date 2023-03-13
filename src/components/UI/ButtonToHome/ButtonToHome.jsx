import React from 'react';

import {useNavigate} from 'react-router-dom';
import './Button.scss';

/**
 * @param {string} text
*/

const ButtonToHome = ({text}) => {
    const navigate = useNavigate()
    return (
        <button
            className='home-btn'
            onClick={() => navigate('/portfolio')}
        >
            {text}
        </button>
    );
};

export default ButtonToHome;