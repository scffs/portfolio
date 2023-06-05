import React from 'react';

import {useNavigate} from 'react-router-dom';

import './Button.scss';

const Button = ({text}) => {
    const navigate = useNavigate()
    return (
        <button
            className='home-btn'
            onClick={() => navigate('/portfolio/')}
        >
            {text}
        </button>
    );
};

export default Button;