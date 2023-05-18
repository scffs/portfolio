import React, { lazy, Suspense } from 'react';

import logo from '../../../assets/img/avaSmall.jpg';

import { activity, basics, projects } from './info.jsx';

import Loading from '../../../components/Loading/Loading.jsx';
const Avatar = lazy(() => import('../../../components/Avatar/Avatar.jsx'));
const ProfileGroup = lazy(() => import('../ProfileGroup/ProfileGroup.jsx'));

import s from './ProfileInfo.module.scss';

const ProfileInfo = () => {
    return (
        <div className={s.profileWrapper}>
            <div className={s.profileInfoTop}>
                <Avatar width='100px' height='100px' borderRadius='80px' src={logo} />
                <span className={s.name}>Semyon Okulov</span>
            </div>
            <Suspense fallback={<Loading />}>
                <ProfileGroup title='Basics' items={basics} />
                <ProfileGroup title='Projects' items={projects.map((project) => ({ key: project.link, title: project.name, text: 'link', href: project.link }))} />
                <ProfileGroup title='Activity' items={activity} />
            </Suspense>
        </div>
    );
};

export default ProfileInfo;
