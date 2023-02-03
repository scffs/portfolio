import React from 'react'

import s from './Plantes.module.scss'

import icons from './icons'

const Planets = () => {
    return (
        <div className={s.circleInner}>
            {
                icons.map(({src, alt}, id) =>(
                    <img key={id} className={s.logo} src={src} alt={alt}/>
                ))
            }
        </div>
    );
};

export default Planets