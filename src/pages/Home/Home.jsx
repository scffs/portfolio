import React from 'react'

import Slider from './Slider/Slider'
import Avatar from '../../components/Avatar/Avatar'
import Planets from './Planets/Planets'

import logo from '../../assets/img/ava.webp'

import s from './Home.module.scss'

const Home = () => (
    <div className={s.info}>
        <div className={s.profileImage}>
            <Avatar width='280' height='280' borderRadius='30px' isHexagon='1' src={logo} />
            <Planets />
        </div>
        <Slider />
    </div>
);

export default Home