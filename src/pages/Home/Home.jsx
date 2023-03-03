import React, {lazy} from 'react'

import Avatar from '../../components/Avatar/Avatar'
import Planets from './Planets/Planets'

import logo from '../../assets/img/ava.webp'

import s from './Home.module.scss'

const Slider = lazy(() => import('./Slider/Slider'))

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
            <Planets />
        </div>
        <Slider />
    </div>
);

export default Home