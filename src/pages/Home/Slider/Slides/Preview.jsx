import React from 'react'

const Person = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
            <h2 className='const'>Was-sup!</h2>
            <h3 className='text'>Welcome to my portfolio <span className='link' style={{ fontWeight: 'bold'}}>Website</span> <span className='title'>;)</span></h3>
        </div>
    );
};

export default Person