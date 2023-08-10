import React, { lazy, Suspense } from 'react';

import Loading from '../../components/Loading/Loading';
const Roadmap = lazy(() => import('./Roadmap/Roadmap'));
const ProfileInfo = lazy(() => import('./ProfileInfo/ProfileInfo'));

import s from './Profile.module.scss';

const Profile = () => {
  return (
    <div className={s.content}>
      <Suspense fallback={<Loading/>}>
        <Roadmap/>
      </Suspense>
      <Suspense fallback={<Loading/>}>
        <ProfileInfo/>
      </Suspense>
    </div>
  );
};

export default Profile;
