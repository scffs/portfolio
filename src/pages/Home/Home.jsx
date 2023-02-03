import React from 'react'

import Slider from './Slider/Slider'
import Avatar from '../../components/Avatar/Avatar'

import logo from '../../assets/img/ava.webp'

import s from './Home.module.scss'
import Planets from "./Planets/Planets";

const Home = () => {
    return (
        <div className={s.info}>
            <div className={s.profileImage}>
                <Avatar width='300px' height='100%' borderRadius='100%' src={logo} />
                <Planets />
            </div>
           <Slider />
        </div>
    );
};

export default Home