import React, {lazy} from 'react'

import s from './Profile.module.scss'

const Roadmap = lazy(() => import('./Roadmap/Roadmap'))
const Projects = lazy(() => import('./Projects/Projects'))


const Profile = () => {
    return (
        <div className={s.content}>
            <Projects />
            <Roadmap />
        </div>
    );
};

export default Profile