import React from 'react'

import s from './NotFound.module.scss'
import ButtonToHome from "../../components/UI/ButtonToHome/ButtonToHome";

const NotFound = () => {
    return (
        <div className={s.block}>
            <div>
                <h1 className={s.title}>404</h1>
                <p className={s.text}>Страница не найдена!</p>
            </div>
            <ButtonToHome text='На главную'/>
        </div>
    );
};

export default NotFound;