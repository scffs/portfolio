import React, { lazy, Suspense } from 'react';

import Loading from '../../components/Loading/Loading';
const Slider = lazy(() => import('./Slider/Slider'));
const Avatar = lazy(() => import('../../components/Avatar/Avatar'));
const Icon = lazy(() => import('./Icon/Icon'));

import logo from '../../assets/img/awarding.jpg';

import { iconsList } from './Icon/IconsList.jsx';

import s from './Home.module.scss';

const Home = () => (
  <div className={s.info}>
    <div className={s.profileImage}>
      <Suspense fallback={<Loading />}>
        <Avatar
          width='280px' height='280px'
          borderRadius='30px'
          isHexagon='1'
          hexagonHeight='280'
          src={logo}
        />
        <div className={s.circleInner}>
          {iconsList.map(({ component }, id) => (
            <Icon key={id} component={component}/>
          ))}
        </div>
      </Suspense>
    </div>
    <Suspense fallback={<Loading />}>
      <Slider/>
    </Suspense>
  </div>
);

export default Home;
