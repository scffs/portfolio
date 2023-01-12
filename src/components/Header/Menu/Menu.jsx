import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import menu from '../MenuItem'
import s from './Menu.module.scss'

import {AiOutlineMenu} from 'react-icons/ai'
import {RxCross2} from "react-icons/rx"

const Menu = () => {
    const [isBurger, setIsBurger] = useState(false);

    return (
        <>
            <button onClick={() => setIsBurger(!isBurger)} className={s.burger}>
                {!isBurger ? <AiOutlineMenu /> : <RxCross2 />}
            </button>
            {
                <ul className={ isBurger ? s.active : s.menu }>
                    {
                        menu.map(item => (
                            <li key={item.id}>
                                <Link to={item.src} onClick={() => isBurger ?  setIsBurger(!isBurger) : ''}>{item.title}</Link>
                            </li>
                        ))
                    }
                </ul>
            }
        </>
    );
};

export default Menu;