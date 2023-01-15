import React from 'react'

import Slider from './Slider/Slider'

import s from './Home.module.scss'
const Home = () => {
    return (
        <div className={s.info}>
            <Slider />
            <div className="avatar">
                ad
            </div>
        </div>
    );
};

export default Home