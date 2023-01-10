import React from 'react';

import s from './NotFound.module.scss'
const NotFound = () => {
    return (
        <div className={s.block}>
            <h1 className={s.title}>#404</h1>
            <p className={s.text}>Страница не найдена!</p>
        </div>
    );
};

export default NotFound;