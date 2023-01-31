import React from 'react'

import logo from '../../assets/img/ava.jpg'

import Avatar from '../../components/Avatar/Avatar'
const Profile = () => {
    return (
        <div style={{ display: 'flex', gap: '50px'}}>
            <Avatar width='300' height='300' borderRadius='50' src={logo} />
            <div
                style={{
                    backgroundColor: '#2a2a32',
                    width: '400px',
                    height: '300px',
                    borderRadius: '80px 20px',
                    boxShadow: '0 0 10px 3px rgba(152, 195, 121, .7)'
            }}
            >
            </div>
        </div>
    );
};

export default Profile