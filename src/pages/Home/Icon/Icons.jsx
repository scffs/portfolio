import React from "react";
import {
    faBootstrap,
    faGithub,
    faLinux,
    faNodeJs,
    faPython,
    faReact,
    faSquareJs, faUbuntu,
} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import s from './Icons.module.scss'

const icons = [
    {
        component: <FontAwesomeIcon className={s.logo} icon={faSquareJs} alt='JS'/>,
    },
    {
        component: <FontAwesomeIcon className={s.logo} icon={faReact} alt='JS'/>,
    },
    {
        component: <FontAwesomeIcon className={s.logo} icon={faPython} alt='JS'/>,
    },
    {
        component: <FontAwesomeIcon className={s.logo} icon={faNodeJs} alt='JS'/>,
    },
    {
        component: <FontAwesomeIcon className={s.logo} icon={faBootstrap} alt='JS'/>,
    },
    {
        component: <FontAwesomeIcon className={s.logo} icon={faGithub} alt='JS'/>,
    },
    {
        component: <FontAwesomeIcon className={s.logo} icon={faLinux} alt='JS'/>,
    },
    {
        component: <FontAwesomeIcon className={s.logo} icon={faUbuntu} alt='JS'/>,
    },
]

export default icons;