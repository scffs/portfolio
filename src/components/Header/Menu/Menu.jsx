import React, {useState} from 'react';
import menu from "../MenuItem";
import {Link} from "react-router-dom";
import s from './Menu.module.scss'
import {AiOutlineMenu} from "react-icons/ai";
const Menu = () => {
    const [isBurger, setIsBurger] = useState(false);
    return (
        <>
            <button onClick={() => setIsBurger(!isBurger)}>
                <AiOutlineMenu />
            </button>
            {
                <ul className={ isBurger ? s.active : s.menu }>
                    {
                        menu.map(item => (
                            <li key={item.id}>
                                <Link to={item.src} onClick={() => setIsBurger(!isBurger)}>{item.title}</Link>
                            </li>
                        ))
                    }
                </ul>
            }
        </>
    );
};

export default Menu;