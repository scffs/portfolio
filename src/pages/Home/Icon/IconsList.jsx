import React from 'react';
import {
    faStackOverflow,
    faGithub,
    faLinux,
    faNodeJs,
    faPython,
    faReact,
    faSquareJs,
    faUbuntu,
    faFirefox,
    faDocker
} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import s from './Icons.module.scss';

export const iconsList = [
    {
        component: <FontAwesomeIcon className={s.logo} icon={faSquareJs} alt='JS'/>,
    },
    {
        component: <FontAwesomeIcon className={s.logo} icon={faReact} alt='React'/>,
    },
    {
        component: <FontAwesomeIcon className={s.logo} icon={faPython} alt='Python'/>,
    },
    {
        component: <FontAwesomeIcon className={s.logo} icon={faNodeJs} alt='NodeJs'/>,
    },
    {
        component: <FontAwesomeIcon className={s.logo} icon={faStackOverflow} alt='StackOverflow'/>,
    },
    {
        component: <FontAwesomeIcon className={s.logo} icon={faGithub} alt='Github'/>,
    },
    {
        component: <FontAwesomeIcon className={s.logo} icon={faLinux} alt='Linux'/>,
    },
    {
        component: <FontAwesomeIcon className={s.logo} icon={faUbuntu} alt='Ubuntu'/>,
    },
    {
        component: <FontAwesomeIcon className={s.logo} icon={faFirefox} alt='Firefox'/>,
    },
    {
        component: <FontAwesomeIcon className={s.logo} icon={faDocker} alt='Firefox'/>,
    },
]