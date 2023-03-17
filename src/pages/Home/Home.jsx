import React, {lazy, Suspense} from 'react';

import Loading from '../../components/Loading/Loading.jsx';
import Avatar from '../../components/Avatar/Avatar';
import Icon from './Icon/Icon.jsx';

const Slider = lazy(() => import('./Slider/Slider'));

import logo from '../../assets/img/ava.webp';

import iconsList from './Icon/IconsList.jsx';

import s from './Home.module.scss';

const Home = () => (
    <div className={s.info}>
        <div className={s.profileImage}>
            <Avatar
                width='280' height='280'
                borderRadius='30px'
                isHexagon='1'
                hexagonHeight='280'
                src={logo}
            />
            <div className={s.circleInner}>
                {iconsList.map(({component}, id) =>(
                    <Icon key={id} component={component} />
                ))}
            </div>
        </div>
        <Suspense fallback={<Loading />}>
            <Slider />
        </Suspense>
    </div>
);

export default Home;