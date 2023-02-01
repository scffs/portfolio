import React from 'react'

import Slider from './Slider/Slider'
import Avatar from '../../components/Avatar/Avatar'
import icons from './icons'

import logo from '../../assets/img/ava.webp'

import s from './Home.module.scss'

const Home = () => {
    return (
        <div className={s.info}>
            <Slider />
            <div className={s.profileImage}>
                <Avatar width='300px' height='100%' borderRadius='100%' src={logo} />
                <div>
                    <div className={s.circleInner}>
                        {
                            icons.map(({src, alt}, id) =>(
                                <img key={id} className={s.logo} src={src} alt={alt}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home