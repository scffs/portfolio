import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

import menu from '../MenuItem'
import s from './Menu.module.scss'

import {AiOutlineMenu} from 'react-icons/ai'
import {RxCross2} from 'react-icons/rx'

const Menu = () => {
    const [isBurger, setIsBurger] = useState(false)
    const body = document.body
    useEffect(() => {
        if(body.classList.contains('lock') || isBurger) body.classList.toggle('lock')
    }, [isBurger]);

    return (
        <>
            <button onClick={() => setIsBurger(!isBurger)} className={s.burger}>
                {isBurger ? <RxCross2 /> : <AiOutlineMenu />}
            </button>
            {
                <ul className={ isBurger ? s.menu : s.hidden }>
                    {
                        menu.map(item => (
                            <li key={item.id}>
                                <Link
                                    to={item.src}
                                    onClick={() => isBurger ? setIsBurger(!isBurger) : ''}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            }
        </>
    );
};

export default Menu