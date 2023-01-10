import React from 'react'

import {useNavigate} from 'react-router-dom'

const ButtonToHome = ({text}) => {
    const navigate = useNavigate()
    return (
        <button
            style={{
                display: 'inline-block',
                margin: '0 auto',
                color: '#727272',
                width: '15%',
                fontSize: '.9rem',
                padding: '15px',
                borderRadius: '10px',
                fontWeight: '700',
                background: '#191b21'
            }}
            onClick={() => navigate('/')}
        >
            {text}
        </button>
    );
};

export default ButtonToHome;