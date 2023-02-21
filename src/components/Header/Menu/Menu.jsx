import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

import {AiOutlineMenu} from 'react-icons/ai'
import {RxCross2} from 'react-icons/rx'
import {GrHomeRounded} from 'react-icons/gr'
import {BiNews} from 'react-icons/bi'

import menu from '../MenuItem'
import s from './Menu.module.scss'

const Menu = () => {
    const [isBurger, setIsBurger] = useState(false)
    const body = document.body

    useEffect(() => {
        if(body.classList.contains('lock') || isBurger) body.classList.toggle('lock')
    }, [isBurger, body.classList]);

    return (
        <>
            <button aria-label='Menu' onClick={() => setIsBurger(!isBurger)} className={s.burger}>
                {isBurger ? <RxCross2 size='2.5em' /> : <AiOutlineMenu size='2.5em' />}
            </button>
            {
                <ul className={isBurger ? s.menu : s.hidden}>
                    {
                        menu.map(({title, id, src}) => (
                            <li key={id}>
                                <Link
                                    aria-label={title}
                                    className={s.headerLink}
                                    to={src}
                                    onClick={() => isBurger && setIsBurger(!isBurger)}
                                >
                                    {id === 1 ? <GrHomeRounded aria-label='home' title='home' size='2em'/>
                                              : <BiNews className={s.news} aria-label='news' title='news' size='2.5em'/>}
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