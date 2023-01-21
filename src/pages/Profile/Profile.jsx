import React from 'react'

import logo from '../../assets/img/ava.jpg'

import Avatar from '../../components/Avatar/Avatar'
const Profile = () => {
    return (
        <div>
            <Avatar width='300' height='300' borderRadius='50' src={logo} />
        </div>
    );
};

export default Profile