import React, { lazy, memo, Suspense } from 'react';

import Loading from '../../components/Loading/Loading.jsx';
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

export default memo(Profile);
