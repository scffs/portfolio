import React from 'react'

import s from './Profile.module.scss'

import Projects from './Projects/Projects'

const Profile = () => {
    return (
        <div className={s.content}>
            <Projects />
        </div>
    );
};

export default Profile