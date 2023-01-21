import React from 'react'

import {useNavigate} from 'react-router-dom'
import './Button.scss'

const ButtonToHome = ({text}) => {
    const navigate = useNavigate()
    return (
        <button
            className='home-btn'
            onClick={() => navigate('/')}
        >
            {text}
        </button>
    );
};

export default ButtonToHome