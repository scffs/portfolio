import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline/index.js';

import menu from '../MenuItem.jsx';
import s from './Menu.module.scss';

const Menu = ({value, onClickCategory}) => {
    const [isBurger, setIsBurger] = useState(false);
    const body = document.body;

    const handleClick = () => {
        isBurger && setIsBurger(!isBurger)
    }

    useEffect(() => {
        if(body.classList.contains('lock') || isBurger) body.classList.toggle('lock')
    }, [isBurger, body.classList]);

    return (
        <>
            <button aria-label='Menu' onClick={() => setIsBurger(!isBurger)} className={s.burger}>
                {isBurger ?
                    <XMarkIcon width="2.5rem" height="2.5rem" /> : <Bars3Icon width="2.5rem" height="2.5rem" />
                }
            </button>
            <ul className={isBurger ? s.menu : s.hidden}>
                {menu.map(({title, id, src, component}) => (
                        <li key={id}
                            className={`${value === id && s.active}`}
                            onClick = {() => handleClick()}>
                            <Link

                                aria-label={title}
                                className={s.headerLink}
                                to={src}
                                onClick={() => onClickCategory(id)}
                            >
                                {component}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </>
    );
};

export default Menu;