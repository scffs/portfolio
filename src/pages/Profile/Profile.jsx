import React from 'react'

import s from './Profile.module.scss'

import Projects from './Projects/Projects'
import Roadmap from './Roadmap/Roadmap'

const Profile = () => {
    return (
        <div className={s.content}>
            <Projects />
            <Roadmap />
        </div>
    );
};

export default Profile